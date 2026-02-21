// Escape special characters in a class name for use as a CSS selector
export function escapeSelector(cls: string): string {
  return cls
    .replace(/\./g, '\\.')
    .replace(/:/g, '\\:')
    .replace(/\[/g, '\\[')
    .replace(/\]/g, '\\]')
    .replace(/\//g, '\\/')
    .replace(/#/g, '\\#')
    .replace(/%/g, '\\%')
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
  const entry = colors[name]
  if (!entry) return null
  if (typeof entry === 'string') return entry
  if (!shade) return null
  return entry[shade] ?? null
}

// Parse a class name into variant prefixes and the base utility
// e.g. 'hover:md:bg-blue-500' → { variants: ['hover', 'md'], base: 'bg-blue-500' }
export function parseVariants(cls: string): { variants: string[]; base: string } {
  const parts = cls.split(':')
  return {
    variants: parts.slice(0, -1),
    base: parts[parts.length - 1],
  }
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
