import type { ResolvedConfig } from '../types'
import { generateBase } from './base'
import { generateColors } from './colors'
import { generateSpacing } from './spacing'
import { generateTypography } from './typography'
import { generateLayout } from './layout'
import { generateSizing } from './sizing'
import { generateEffects } from './effects'
import { parseVariants, escapeSelector, wrapVariants } from './utils'

export { generateBase }

export function generateUtilities(classes: Set<string>, config: ResolvedConfig): string {
  // Expand variant-prefixed classes into base classes + variant info
  const variantMap = new Map<string, { base: string; variants: string[]; original: string }>()
  const baseClasses = new Set<string>()

  for (const cls of classes) {
    const { variants, base } = parseVariants(cls)
    baseClasses.add(base)
    variantMap.set(cls, { base, variants, original: cls })
  }

  // Generate CSS for all base classes
  const generators = [
    generateColors,
    generateSpacing,
    generateTypography,
    generateLayout,
    generateSizing,
    generateEffects,
    generateAliveSpecific,
  ]

  const baseRuleMap = new Map<string, string>()
  for (const gen of generators) {
    const rules = gen(baseClasses, config)
    for (const r of rules) {
      // Extract the base class name from the rule selector
      const selectorMatch = r.match(/^\.([\w-]+)/)
      if (selectorMatch) {
        baseRuleMap.set(selectorMatch[1], r)
      }
    }
  }

  // Now build the final CSS — for each original class (with variants), wrap the base rule
  const baseOutput: string[] = []
  const mediaOutput = new Map<string, string[]>()

  for (const [original, { base, variants, }] of variantMap) {
    const baseRule = baseRuleMap.get(base)
    if (!baseRule) continue

    if (variants.length === 0) {
      baseOutput.push(baseRule)
      continue
    }

    // Separate responsive variants from state/dark variants
    const responsiveVariants = variants.filter(v => config.theme.screens[v])
    const stateVariants = variants.filter(v => !config.theme.screens[v])

    // Build the selector from the base rule but with escaped original class name
    const declMatch = baseRule.match(/\{([\s\S]*)\}/)
    if (!declMatch) continue

    let selector = `.${escapeSelector(original)}`
    for (const sv of stateVariants) {
      switch (sv) {
        case 'hover': selector += ':hover'; break
        case 'focus': selector += ':focus'; break
        case 'focus-visible': selector += ':focus-visible'; break
        case 'active': selector += ':active'; break
        case 'disabled': selector += ':disabled'; break
        case 'visited': selector += ':visited'; break
        case 'first': selector += ':first-child'; break
        case 'last': selector += ':last-child'; break
        case 'odd': selector += ':nth-child(odd)'; break
        case 'even': selector += ':nth-child(even)'; break
        case 'placeholder': selector += '::placeholder'; break
        case 'group-hover': selector = `.group:hover ${selector}`; break
        case 'dark':
          if (config.theme.darkMode === 'class') {
            selector = `.dark ${selector}`
          }
          break
      }
    }

    const wrappedRule = `${selector} {${declMatch[1]}}`

    if (responsiveVariants.length === 0) {
      // dark media query
      if (stateVariants.includes('dark') && config.theme.darkMode === 'media') {
        const mq = '@media (prefers-color-scheme: dark)'
        const existing = mediaOutput.get(mq) ?? []
        mediaOutput.set(mq, [...existing, wrappedRule])
      } else {
        baseOutput.push(wrappedRule)
      }
    } else {
      // Responsive variant — wrap in media query
      const screen = config.theme.screens[responsiveVariants[0]]
      const mq = `@media (min-width: ${screen})`
      const existing = mediaOutput.get(mq) ?? []
      mediaOutput.set(mq, [...existing, wrappedRule])
    }
  }

  // Sort media queries by breakpoint size
  const sortedMedia = [...mediaOutput.entries()].sort((a, b) => {
    const aSize = parseInt(a[0].match(/\d+/)?.[0] ?? '0')
    const bSize = parseInt(b[0].match(/\d+/)?.[0] ?? '0')
    return aSize - bSize
  })

  const mediaCSS = sortedMedia
    .map(([mq, rules]) => `${mq} {\n${rules.map(r => '  ' + r.split('\n').join('\n  ')).join('\n')}\n}`)
    .join('\n\n')

  const parts = [
    '/* AliveUI Utilities */',
    ...dedupe(baseOutput),
    mediaCSS,
  ].filter(Boolean)

  return parts.join('\n\n')
}

// Remove duplicate rules
function dedupe(rules: string[]): string[] {
  const seen = new Set<string>()
  return rules.filter(r => {
    if (seen.has(r)) return false
    seen.add(r)
    return true
  })
}

// AliveUI-specific utilities not covered by other generators
function generateAliveSpecific(classes: Set<string>, _config: ResolvedConfig): string[] {
  const rules: string[] = []

  for (const cls of classes) {
    // Depth utilities — already in base, but also match here for variant support
    if (cls === 'd1' || cls === 'd2' || cls === 'd3') continue

    // Group utility
    if (cls === 'group') {
      rules.push(`.${cls} {}`) // marker class
      continue
    }

    // Alive stagger gap override
    const staggerMatch = cls.match(/^stagger-(\d+)$/)
    if (staggerMatch) {
      rules.push(`.${cls} { --alive-stagger-gap: ${staggerMatch[1]}ms; }`)
      continue
    }

    // Alive index (for stagger)
    const indexMatch = cls.match(/^alive-index-(\d+)$/)
    if (indexMatch) {
      rules.push(`.${cls} { --alive-index: ${indexMatch[1]}; }`)
      continue
    }

    // Divide utilities
    if (cls === 'divide-x') {
      rules.push(`.${cls} > * + * { border-left-width: 1px; border-left-style: solid; }`)
      continue
    }
    if (cls === 'divide-y') {
      rules.push(`.${cls} > * + * { border-top-width: 1px; border-top-style: solid; }`)
      continue
    }

    // Divide color
    const divideColorMatch = cls.match(/^divide-([a-z]+)(?:-(\d+))?$/)
    if (divideColorMatch) {
      rules.push(`.${cls} > * + * { border-color: inherit; }`)
      continue
    }

    // Appearance
    if (cls === 'appearance-none') { rules.push(`.${cls} { appearance: none; }`); continue }
    if (cls === 'appearance-auto') { rules.push(`.${cls} { appearance: auto; }`); continue }

    // Resize
    if (cls === 'resize-none') { rules.push(`.${cls} { resize: none; }`); continue }
    if (cls === 'resize') { rules.push(`.${cls} { resize: both; }`); continue }
    if (cls === 'resize-y') { rules.push(`.${cls} { resize: vertical; }`); continue }
    if (cls === 'resize-x') { rules.push(`.${cls} { resize: horizontal; }`); continue }

    // Scroll snap
    if (cls === 'snap-none') { rules.push(`.${cls} { scroll-snap-type: none; }`); continue }
    if (cls === 'snap-x') { rules.push(`.${cls} { scroll-snap-type: x mandatory; }`); continue }
    if (cls === 'snap-y') { rules.push(`.${cls} { scroll-snap-type: y mandatory; }`); continue }
    if (cls === 'snap-start') { rules.push(`.${cls} { scroll-snap-align: start; }`); continue }
    if (cls === 'snap-center') { rules.push(`.${cls} { scroll-snap-align: center; }`); continue }
    if (cls === 'snap-end') { rules.push(`.${cls} { scroll-snap-align: end; }`); continue }

    // Screen reader
    if (cls === 'sr-only') {
      rules.push(`.${cls} {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}`)
      continue
    }
    if (cls === 'not-sr-only') {
      rules.push(`.${cls} {\n  position: static;\n  width: auto;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n}`)
      continue
    }
  }

  return rules
}
