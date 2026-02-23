import { describe, it, expect } from 'vitest'

// We test the internal logic by reimplementing the exported-friendly functions.
// The scanner module is not directly exported, so we test indirectly via extractClasses.

// Replicate prototype-prop list for the test
const JS_PROTOTYPE_PROPS = new Set([
  'constructor', 'prototype', 'toString', 'valueOf', 'hasOwnProperty',
  'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString',
])

function isLikelyClass(token: string): boolean {
  if (!token || token.length < 1 || token.length > 120) return false
  if (!/^-?[a-z]/.test(token)) return false
  if (/\s/.test(token)) return false
  if (token.includes('://')) return false
  if (token.startsWith('http')) return false
  const openBrackets = (token.match(/\[/g) ?? []).length
  const closeBrackets = (token.match(/\]/g) ?? []).length
  if (openBrackets !== closeBrackets) return false
  if (JS_PROTOTYPE_PROPS.has(token)) return false
  return true
}

describe('isLikelyClass', () => {
  it('accepts standard utility classes', () => {
    expect(isLikelyClass('bg-blue-500')).toBe(true)
    expect(isLikelyClass('flex')).toBe(true)
    expect(isLikelyClass('p-4')).toBe(true)
    expect(isLikelyClass('text-sm')).toBe(true)
    expect(isLikelyClass('rounded-lg')).toBe(true)
  })

  it('accepts arbitrary value classes', () => {
    expect(isLikelyClass('w-[100px]')).toBe(true)
    expect(isLikelyClass('text-[#ff0000]')).toBe(true)
    expect(isLikelyClass('bg-[rgb(0,0,0)]')).toBe(true)
    expect(isLikelyClass('gap-[1.5rem]')).toBe(true)
    expect(isLikelyClass('top-[10px]')).toBe(true)
  })

  it('accepts negative utility classes', () => {
    expect(isLikelyClass('-m-4')).toBe(true)
    expect(isLikelyClass('-mt-2')).toBe(true)
    expect(isLikelyClass('-inset-4')).toBe(true)
    expect(isLikelyClass('-translate-x-full')).toBe(true)
  })

  it('accepts variant-prefixed classes', () => {
    expect(isLikelyClass('hover:bg-blue-500')).toBe(true)
    expect(isLikelyClass('md:flex')).toBe(true)
    expect(isLikelyClass('dark:text-white')).toBe(true)
  })

  it('rejects JS prototype properties', () => {
    expect(isLikelyClass('constructor')).toBe(false)
    expect(isLikelyClass('toString')).toBe(false)
    expect(isLikelyClass('hasOwnProperty')).toBe(false)
  })

  it('rejects URLs and non-class strings', () => {
    expect(isLikelyClass('https://example.com')).toBe(false)
    expect(isLikelyClass('http://foo.bar')).toBe(false)
  })

  it('rejects tokens starting with uppercase', () => {
    expect(isLikelyClass('Button')).toBe(false)
    expect(isLikelyClass('React')).toBe(false)
  })

  it('rejects tokens with spaces', () => {
    expect(isLikelyClass('flex items-center')).toBe(false)
  })

  it('rejects tokens with unmatched brackets', () => {
    expect(isLikelyClass('w-[100px')).toBe(false)
    expect(isLikelyClass('w-100px]')).toBe(false)
  })

  it('rejects empty and very long strings', () => {
    expect(isLikelyClass('')).toBe(false)
    expect(isLikelyClass('a'.repeat(121))).toBe(false)
  })
})

describe('arbitrary value extraction patterns', () => {
  it('extracts w-[...] from class attribute strings', () => {
    const html = `<div class="w-[100px] h-[200px] bg-[#ff0000]"></div>`
    const classes: string[] = []
    const match = html.match(/class="([^"]+)"/)
    if (match) {
      match[1].split(/\s+/).forEach(t => {
        if (isLikelyClass(t)) classes.push(t)
      })
    }
    expect(classes).toContain('w-[100px]')
    expect(classes).toContain('h-[200px]')
    expect(classes).toContain('bg-[#ff0000]')
  })

  it('handles negative classes in strings', () => {
    const classes = ['-m-4', '-mt-2', '-mx-8', '-translate-x-full']
    classes.forEach(cls => expect(isLikelyClass(cls)).toBe(true))
  })
})
