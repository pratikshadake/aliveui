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

    // Skip all alive- prefixed classes that are defined in base (component primitives)
    const aliveBasePrefixes = [
      'alive-enter', 'alive-exit', 'alive-loop', 'alive-card', 'alive-button',
      'alive-badge', 'alive-input', 'alive-textarea', 'alive-select', 'alive-checkbox',
      'alive-radio', 'alive-switch', 'alive-avatar', 'alive-skeleton', 'alive-progress',
      'alive-separator', 'alive-alert', 'alive-tooltip', 'alive-modal', 'alive-drawer',
      'alive-nav', 'alive-tabs', 'alive-tab', 'alive-dropdown', 'alive-table',
      'alive-chip', 'alive-stack', 'alive-container', 'alive-cluster', 'alive-focus',
      'alive-overlay', 'alive-toast', 'alive-command', 'alive-popover', 'alive-sidebar',
      'alive-backdrop', 'alive-sr-only',
    ]
    if (aliveBasePrefixes.some(p => cls === p || cls.startsWith(p + '-'))) continue

    // Group utility
    if (cls === 'group') {
      rules.push(`.${cls} {}`) // marker class
      continue
    }

    // Stagger gap override: stagger-{ms}
    const staggerMatch = cls.match(/^stagger-(\d+)$/)
    if (staggerMatch) {
      rules.push(`.${cls} { --alive-stagger-gap: ${staggerMatch[1]}ms; }`)
      continue
    }

    // Stagger index: alive-index-{n}
    const indexMatch = cls.match(/^alive-index-(\d+)$/)
    if (indexMatch) {
      rules.push(`.${cls} { --alive-index: ${indexMatch[1]}; }`)
      continue
    }

    // Custom duration override: duration-{ms}
    const durationMatch = cls.match(/^duration-(\d+)$/)
    if (durationMatch) {
      rules.push(`.${cls} { --alive-duration: ${durationMatch[1]}ms; }`)
      continue
    }

    // Delay: delay-{ms}
    const delayMatch = cls.match(/^delay-(\d+)$/)
    if (delayMatch) {
      rules.push(`.${cls} { animation-delay: ${delayMatch[1]}ms; }`)
      continue
    }

    // Motion tokens as animation-duration shorthand: motion-{ms}
    const motionMsMatch = cls.match(/^motion-(\d+)$/)
    if (motionMsMatch) {
      rules.push(`.${cls} { --alive-duration: ${motionMsMatch[1]}ms !important; }`)
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
    if (cls === 'resize')      { rules.push(`.${cls} { resize: both; }`); continue }
    if (cls === 'resize-y')    { rules.push(`.${cls} { resize: vertical; }`); continue }
    if (cls === 'resize-x')    { rules.push(`.${cls} { resize: horizontal; }`); continue }

    // Scroll snap
    if (cls === 'snap-none')   { rules.push(`.${cls} { scroll-snap-type: none; }`); continue }
    if (cls === 'snap-x')      { rules.push(`.${cls} { scroll-snap-type: x mandatory; }`); continue }
    if (cls === 'snap-y')      { rules.push(`.${cls} { scroll-snap-type: y mandatory; }`); continue }
    if (cls === 'snap-start')  { rules.push(`.${cls} { scroll-snap-align: start; }`); continue }
    if (cls === 'snap-center') { rules.push(`.${cls} { scroll-snap-align: center; }`); continue }
    if (cls === 'snap-end')    { rules.push(`.${cls} { scroll-snap-align: end; }`); continue }

    // Pointer events
    if (cls === 'pointer-events-none') { rules.push(`.${cls} { pointer-events: none; }`); continue }
    if (cls === 'pointer-events-auto') { rules.push(`.${cls} { pointer-events: auto; }`); continue }

    // Screen reader
    if (cls === 'sr-only') {
      rules.push(`.${cls} { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border-width: 0; }`)
      continue
    }
    if (cls === 'not-sr-only') {
      rules.push(`.${cls} { position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; white-space: normal; }`)
      continue
    }

    // Will-change
    if (cls === 'will-change-auto')      { rules.push(`.${cls} { will-change: auto; }`); continue }
    if (cls === 'will-change-transform') { rules.push(`.${cls} { will-change: transform; }`); continue }
    if (cls === 'will-change-opacity')   { rules.push(`.${cls} { will-change: opacity; }`); continue }

    // Line clamp
    const lineClampMatch = cls.match(/^line-clamp-(\d+)$/)
    if (lineClampMatch) {
      const n = lineClampMatch[1]
      rules.push(`.${cls} { overflow: hidden; display: -webkit-box; -webkit-line-clamp: ${n}; -webkit-box-orient: vertical; }`)
      continue
    }

    // Aspect ratio
    if (cls === 'aspect-square') { rules.push(`.${cls} { aspect-ratio: 1 / 1; }`); continue }
    if (cls === 'aspect-video')  { rules.push(`.${cls} { aspect-ratio: 16 / 9; }`); continue }
    if (cls === 'aspect-auto')   { rules.push(`.${cls} { aspect-ratio: auto; }`); continue }

    // Object fit
    if (cls === 'object-contain') { rules.push(`.${cls} { object-fit: contain; }`); continue }
    if (cls === 'object-cover')   { rules.push(`.${cls} { object-fit: cover; }`); continue }
    if (cls === 'object-fill')    { rules.push(`.${cls} { object-fit: fill; }`); continue }
    if (cls === 'object-none')    { rules.push(`.${cls} { object-fit: none; }`); continue }
    if (cls === 'object-scale')   { rules.push(`.${cls} { object-fit: scale-down; }`); continue }

    // Mix blend mode
    if (cls === 'mix-blend-multiply')  { rules.push(`.${cls} { mix-blend-mode: multiply; }`); continue }
    if (cls === 'mix-blend-screen')    { rules.push(`.${cls} { mix-blend-mode: screen; }`); continue }
    if (cls === 'mix-blend-overlay')   { rules.push(`.${cls} { mix-blend-mode: overlay; }`); continue }
    if (cls === 'mix-blend-normal')    { rules.push(`.${cls} { mix-blend-mode: normal; }`); continue }

    // Isolation
    if (cls === 'isolate')        { rules.push(`.${cls} { isolation: isolate; }`); continue }
    if (cls === 'isolation-auto') { rules.push(`.${cls} { isolation: auto; }`); continue }

    // Touch action
    if (cls === 'touch-auto')         { rules.push(`.${cls} { touch-action: auto; }`); continue }
    if (cls === 'touch-none')         { rules.push(`.${cls} { touch-action: none; }`); continue }
    if (cls === 'touch-pan-x')        { rules.push(`.${cls} { touch-action: pan-x; }`); continue }
    if (cls === 'touch-pan-y')        { rules.push(`.${cls} { touch-action: pan-y; }`); continue }
    if (cls === 'touch-manipulation') { rules.push(`.${cls} { touch-action: manipulation; }`); continue }

    // User select
    if (cls === 'select-none') { rules.push(`.${cls} { user-select: none; }`); continue }
    if (cls === 'select-text') { rules.push(`.${cls} { user-select: text; }`); continue }
    if (cls === 'select-all')  { rules.push(`.${cls} { user-select: all; }`); continue }
    if (cls === 'select-auto') { rules.push(`.${cls} { user-select: auto; }`); continue }

    // Break
    if (cls === 'break-normal') { rules.push(`.${cls} { overflow-wrap: normal; word-break: normal; }`); continue }
    if (cls === 'break-words')  { rules.push(`.${cls} { overflow-wrap: break-word; }`); continue }
    if (cls === 'break-all')    { rules.push(`.${cls} { word-break: break-all; }`); continue }
    if (cls === 'break-keep')   { rules.push(`.${cls} { word-break: keep-all; }`); continue }
  }

  return rules
}
