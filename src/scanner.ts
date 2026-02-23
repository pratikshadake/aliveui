import { readFileSync } from 'fs'
import glob from 'fast-glob'
import type { ResolvedConfig } from './types'

// Broad regex to extract potential class name tokens from any file
// Matches strings inside quotes/backticks and class/className attribute values
const CLASS_EXTRACTION_REGEX =
  /(?:class|className)(?:\s*=\s*|\s*:\s*)(?:"([^"]+)"|'([^']+)'|`([^`]+)`|\{[^}]*['"`]([^'"`]+)['"`][^}]*\})/g

const TOKEN_REGEX = /[`'"]([\w\s/[\]#%.-]+)[`'"]/g

export async function scanContent(config: ResolvedConfig): Promise<Set<string>> {
  if (config.content.length === 0) return new Set()

  const files = await glob(config.content, {
    absolute: true,
    ignore: ['**/node_modules/**', '**/.git/**', '**/dist/**'],
  })

  const classes = new Set<string>()

  for (const file of files) {
    try {
      const content = readFileSync(file, 'utf-8')
      extractClasses(content, classes)
    } catch {
      // skip unreadable files
    }
  }

  return classes
}

function extractClasses(content: string, classes: Set<string>): void {
  // Strategy: extract all potential class-like tokens and validate them
  // This is intentionally broad to handle all template syntaxes

  // 1. Class/className attribute values
  let match: RegExpExecArray | null
  CLASS_EXTRACTION_REGEX.lastIndex = 0
  while ((match = CLASS_EXTRACTION_REGEX.exec(content)) !== null) {
    const value = match[1] ?? match[2] ?? match[3] ?? match[4]
    if (value) {
      splitAndAdd(value, classes)
    }
  }

  // 2. All string literals (catches template literal classes, computed classes, etc.)
  TOKEN_REGEX.lastIndex = 0
  while ((match = TOKEN_REGEX.exec(content)) !== null) {
    if (match[1]) {
      splitAndAdd(match[1], classes)
    }
  }

  // 3. Raw token scan — find anything that looks like a utility class
  // Handles: standard classes, negative utilities (-m-4), arbitrary values (w-[100px]),
  // and variant-prefixed classes (hover:bg-blue-500)
  const rawTokenRegex = /(?:^|[\s"'`{(,])(-?[a-z][a-z0-9]*(?:-[a-z0-9./]+)*(?:-\[[^\]]*\])?(?::[a-z][a-z0-9]*(?:-[a-z0-9./]+)*(?:-\[[^\]]*\])?)*)/g
  let rawMatch: RegExpExecArray | null
  while ((rawMatch = rawTokenRegex.exec(content)) !== null) {
    const token = rawMatch[1]
    if (token && isLikelyClass(token)) {
      classes.add(token)
    }
  }
}

function splitAndAdd(value: string, classes: Set<string>): void {
  // Split on whitespace and template literal expressions
  const tokens = value.split(/[\s\n\r\t]+/)
  for (const token of tokens) {
    const clean = token.trim()
    if (clean && isLikelyClass(clean)) {
      classes.add(clean)
    }
  }
}

// Object.prototype property names that match the class-like regex but are never CSS classes.
// Accessing these on a plain theme object (e.g. spacing['constructor']) returns the inherited
// function instead of undefined, which is truthy and would generate invalid CSS.
const JS_PROTOTYPE_PROPS = new Set([
  'constructor', 'prototype', 'toString', 'valueOf', 'hasOwnProperty',
  'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString',
  '__proto__', '__defineGetter__', '__defineSetter__', '__lookupGetter__', '__lookupSetter__',
])

// Quick heuristic to filter out non-class tokens
function isLikelyClass(token: string): boolean {
  if (!token || token.length < 1 || token.length > 120) return false
  // Must start with an optional leading dash then a letter (e.g. -m-4 or bg-blue-500)
  if (!/^-?[a-z]/.test(token)) return false
  // No spaces (should be a single token)
  if (/\s/.test(token)) return false
  // Skip common non-class patterns
  if (token.includes('://')) return false
  if (token.startsWith('http')) return false
  // Allow arbitrary value brackets — [100px], [#ff0000], [url(...)]
  // but reject tokens that have unmatched brackets
  const openBrackets = (token.match(/\[/g) ?? []).length
  const closeBrackets = (token.match(/\]/g) ?? []).length
  if (openBrackets !== closeBrackets) return false
  // Skip JS prototype-inherited property names — accessing these on a plain object
  // returns a function, not undefined, which would produce invalid CSS rules
  if (JS_PROTOTYPE_PROPS.has(token)) return false
  return true
}
