// Escape special characters in a class name for use as a CSS selector
export function escapeSelector(cls: string): string {
  let result = cls
    .replace(/\./g, '\\.')
    .replace(/:/g, '\\:')
    .replace(/\[/g, '\\[')
    .replace(/\]/g, '\\]')
    .replace(/\//g, '\\/')
    .replace(/#/g, '\\#')
    .replace(/%/g, '\\%')
  // CSS identifiers cannot start with a plain hyphen followed by a non-letter,
  // so escape a leading hyphen (used by negative utilities like -m-4, -translate-x-full)
  if (result.startsWith('-')) {
    result = '\\' + result
  }
  return result
}

// Extract the arbitrary value from a class token like `w-[100px]` → `100px`
export function parseArbitrary(cls: string, prefix: string): string | null {
  const re = new RegExp(`^${prefix}-\\[(.+)\\]$`)
  const m = cls.match(re)
  return m ? m[1] : null
}

// Build a CSS rule block
export function rule(selector: string, declarations: Record<string, string>): string {
  const decls = Object.entries(declarations)
    .map(([prop, val]) => `  ${prop}: ${val};`)
    .join('\n')
  return `.${selector} {\n${decls}\n}`
}

// Resolve a color value from the theme colors map
// e.g. resolveColor(colors, 'blue', '500') → '#3b82f6'
export function resolveColor(
  colors: Record<string, string | Record<string, string>>,
  name: string,
  shade?: string,
): string | null {
  if (!Object.prototype.hasOwnProperty.call(colors, name)) return null
  const entry = colors[name]
  if (typeof entry === 'string') return entry
  if (!shade) return null
  if (!Object.prototype.hasOwnProperty.call(entry, shade)) return null
  return entry[shade] ?? null
}

// Apply an opacity modifier (0-100) to a color value.
// Hex colors are converted to rgba(); other formats use color-mix().
export function applyOpacity(value: string, opacity: number): string {
  const alpha = +(opacity / 100).toFixed(3)
  const hexMatch = value.match(/^#([0-9a-fA-F]{3,6})$/)
  if (hexMatch) {
    let hex = hexMatch[1]
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('')
    const r = parseInt(hex.slice(0, 2), 16)
    const g = parseInt(hex.slice(2, 4), 16)
    const b = parseInt(hex.slice(4, 6), 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }
  return `color-mix(in srgb, ${value} ${opacity}%, transparent)`
}

// Parse a class name into variant prefixes and the base utility
// e.g. 'hover:md:bg-blue-500' → { variants: ['hover', 'md'], base: 'bg-blue-500' }
// Bracket-aware: colons inside [...] (e.g. bg-[url(https://...)]) are not treated as separators
export function parseVariants(cls: string): { variants: string[]; base: string } {
  const variants: string[] = []
  let depth = 0
  let current = ''
  for (const ch of cls) {
    if (ch === '[') depth++
    else if (ch === ']') depth--
    else if (ch === ':' && depth === 0) {
      variants.push(current)
      current = ''
      continue
    }
    current += ch
  }
  return { variants, base: current }
}

// Wrap a CSS rule with state/responsive/dark variants
export function wrapVariants(
  cssRule: string,
  variants: string[],
  originalClass: string,
  screens: Record<string, string>,
  darkMode: 'media' | 'class',
): string {
  let selector = `.${escapeSelector(originalClass)}`
  let mediaQueries: string[] = []

  for (const variant of variants) {
    switch (variant) {
      case 'hover':
        selector += ':hover'
        break
      case 'focus':
        selector += ':focus'
        break
      case 'focus-visible':
        selector += ':focus-visible'
        break
      case 'active':
        selector += ':active'
        break
      case 'disabled':
        selector += ':disabled'
        break
      case 'visited':
        selector += ':visited'
        break
      case 'first':
        selector += ':first-child'
        break
      case 'last':
        selector += ':last-child'
        break
      case 'odd':
        selector += ':nth-child(odd)'
        break
      case 'even':
        selector += ':nth-child(even)'
        break
      case 'file':
        selector += '::file-selector-button'
        break
      case 'group-hover':
        selector = `.group:hover ${selector}`
        break
      case 'dark':
        if (darkMode === 'class') {
          selector = `.dark ${selector}`
        } else {
          mediaQueries.push('@media (prefers-color-scheme: dark)')
        }
        break
      default:
        if (screens[variant]) {
          mediaQueries.push(`@media (min-width: ${screens[variant]})`)
        }
    }
  }

  // Extract declarations from the base rule and rebuild with correct selector
  const declMatch = cssRule.match(/\{([\s\S]*)\}/)
  if (!declMatch) return cssRule

  let result = `${selector} {\n${declMatch[1].trim()}\n}`

  // Wrap in media queries (outermost last)
  for (const mq of mediaQueries.reverse()) {
    result = `${mq} {\n  ${result.split('\n').join('\n  ')}\n}`
  }

  return result
}
