import type { ResolvedConfig } from '../types'

function has(obj: Record<string, string>, key: string): boolean {
  return typeof obj[key] === 'string'
}

export function generateSizing(classes: Set<string>, config: ResolvedConfig): string[] {
  const { spacing } = config.theme
  const rules: string[] = []
  for (const cls of classes) {
    const generated = matchSizing(cls, spacing)
    if (generated) rules.push(generated)
  }
  return rules
}

function matchSizing(cls: string, spacing: Record<string, string>): string | null {
  // Fractions
  const fractions: Record<string, string> = {
    '1/2': '50%', '1/3': '33.333333%', '2/3': '66.666667%',
    '1/4': '25%', '2/4': '50%', '3/4': '75%',
    '1/5': '20%', '2/5': '40%', '3/5': '60%', '4/5': '80%',
    '1/6': '16.666667%', '2/6': '33.333333%', '3/6': '50%',
    '4/6': '66.666667%', '5/6': '83.333333%',
    '1/12': '8.333333%', '2/12': '16.666667%', '3/12': '25%',
    '4/12': '33.333333%', '5/12': '41.666667%', '6/12': '50%',
    '7/12': '58.333333%', '8/12': '66.666667%', '9/12': '75%',
    '10/12': '83.333333%', '11/12': '91.666667%',
  }

  // Width
  const wMatch = cls.match(/^w-(.+)$/)
  if (wMatch) {
    const key = wMatch[1]
    if (key === 'auto') return `.${cls} { width: auto; }`
    if (key === 'full') return `.${cls} { width: 100%; }`
    if (key === 'screen') return `.${cls} { width: 100vw; }`
    if (key === 'svw') return `.${cls} { width: 100svw; }`
    if (key === 'min') return `.${cls} { width: min-content; }`
    if (key === 'max') return `.${cls} { width: max-content; }`
    if (key === 'fit') return `.${cls} { width: fit-content; }`
    if (has(fractions, key)) return `.${cls} { width: ${fractions[key]}; }`
    if (has(spacing, key)) return `.${cls} { width: ${spacing[key]}; }`
  }

  // Min width
  const minWMatch = cls.match(/^min-w-(.+)$/)
  if (minWMatch) {
    const key = minWMatch[1]
    if (key === '0') return `.${cls} { min-width: 0px; }`
    if (key === 'full') return `.${cls} { min-width: 100%; }`
    if (key === 'min') return `.${cls} { min-width: min-content; }`
    if (key === 'max') return `.${cls} { min-width: max-content; }`
    if (key === 'fit') return `.${cls} { min-width: fit-content; }`
    if (has(spacing, key)) return `.${cls} { min-width: ${spacing[key]}; }`
  }

  // Max width
  const maxWMap: Record<string, string> = {
    none: 'none', xs: '20rem', sm: '24rem', md: '28rem', lg: '32rem', xl: '36rem',
    '2xl': '42rem', '3xl': '48rem', '4xl': '56rem', '5xl': '64rem', '6xl': '72rem',
    '7xl': '80rem', full: '100%', min: 'min-content', max: 'max-content', fit: 'fit-content',
    prose: '65ch', 'screen-sm': '640px', 'screen-md': '768px', 'screen-lg': '1024px',
    'screen-xl': '1280px', 'screen-2xl': '1536px',
  }
  const maxWMatch = cls.match(/^max-w-(.+)$/)
  if (maxWMatch && has(maxWMap, maxWMatch[1])) {
    return `.${cls} { max-width: ${maxWMap[maxWMatch[1]]}; }`
  }

  // Height
  const hMatch = cls.match(/^h-(.+)$/)
  if (hMatch) {
    const key = hMatch[1]
    if (key === 'auto') return `.${cls} { height: auto; }`
    if (key === 'full') return `.${cls} { height: 100%; }`
    if (key === 'screen') return `.${cls} { height: 100vh; }`
    if (key === 'svh') return `.${cls} { height: 100svh; }`
    if (key === 'dvh') return `.${cls} { height: 100dvh; }`
    if (key === 'min') return `.${cls} { height: min-content; }`
    if (key === 'max') return `.${cls} { height: max-content; }`
    if (key === 'fit') return `.${cls} { height: fit-content; }`
    if (has(fractions, key)) return `.${cls} { height: ${fractions[key]}; }`
    if (has(spacing, key)) return `.${cls} { height: ${spacing[key]}; }`
  }

  // Min height
  const minHMatch = cls.match(/^min-h-(.+)$/)
  if (minHMatch) {
    const key = minHMatch[1]
    if (key === '0') return `.${cls} { min-height: 0px; }`
    if (key === 'full') return `.${cls} { min-height: 100%; }`
    if (key === 'screen') return `.${cls} { min-height: 100vh; }`
    if (key === 'svh') return `.${cls} { min-height: 100svh; }`
    if (key === 'dvh') return `.${cls} { min-height: 100dvh; }`
    if (key === 'fit') return `.${cls} { min-height: fit-content; }`
    if (has(spacing, key)) return `.${cls} { min-height: ${spacing[key]}; }`
  }

  // Max height
  const maxHMatch = cls.match(/^max-h-(.+)$/)
  if (maxHMatch) {
    const key = maxHMatch[1]
    if (key === 'none') return `.${cls} { max-height: none; }`
    if (key === 'full') return `.${cls} { max-height: 100%; }`
    if (key === 'screen') return `.${cls} { max-height: 100vh; }`
    if (key === 'svh') return `.${cls} { max-height: 100svh; }`
    if (key === 'dvh') return `.${cls} { max-height: 100dvh; }`
    if (key === 'fit') return `.${cls} { max-height: fit-content; }`
    if (has(spacing, key)) return `.${cls} { max-height: ${spacing[key]}; }`
  }

  return null
}
