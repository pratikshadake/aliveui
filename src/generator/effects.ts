import type { ResolvedConfig } from '../types'

function has(obj: Record<string, string>, key: string): boolean {
  return typeof obj[key] === 'string'
}

export function generateEffects(classes: Set<string>, config: ResolvedConfig): string[] {
  const { opacity, zIndex, boxShadow, borderRadius } = config.theme
  const rules: string[] = []
  for (const cls of classes) {
    const generated = matchEffects(cls, opacity, zIndex, boxShadow, borderRadius)
    if (generated) rules.push(generated)
  }
  return rules
}

function matchEffects(
  cls: string,
  opacity: Record<string, string>,
  zIndex: Record<string, string>,
  boxShadow: Record<string, string>,
  borderRadius: Record<string, string>,
): string | null {
  // Opacity
  const opacityMatch = cls.match(/^opacity-(.+)$/)
  if (opacityMatch && has(opacity, opacityMatch[1])) {
    return `.${cls} {\n  opacity: ${opacity[opacityMatch[1]]};\n  transition-property: opacity;\n  transition-duration: var(--alive-duration, 0ms);\n  transition-timing-function: var(--alive-ease, linear);\n}`
  }

  // Z-index
  const zMatch = cls.match(/^z-(.+)$/)
  if (zMatch && has(zIndex, zMatch[1])) {
    return `.${cls} { z-index: ${zIndex[zMatch[1]]}; }`
  }

  // Box shadow (non-depth)
  const shadowMatch = cls.match(/^shadow(?:-(.+))?$/)
  if (shadowMatch) {
    const key = shadowMatch[1] ?? 'DEFAULT'
    if (has(boxShadow, key)) {
      return `.${cls} { box-shadow: ${boxShadow[key]}; }`
    }
    if (!shadowMatch[1] && has(boxShadow, 'DEFAULT')) {
      return `.${cls} { box-shadow: ${boxShadow['DEFAULT']}; }`
    }
  }

  // Border radius
  const roundedMatch = cls.match(/^rounded(?:-(.+))?$/)
  if (roundedMatch) {
    const key = roundedMatch[1] ?? 'DEFAULT'
    if (has(borderRadius, key)) return `.${cls} { border-radius: ${borderRadius[key]}; }`
    if (!roundedMatch[1] && has(borderRadius, 'DEFAULT')) return `.${cls} { border-radius: ${borderRadius['DEFAULT']}; }`
  }

  // Directional border radius
  const roundedTMatch = cls.match(/^rounded-t(?:-(.+))?$/)
  if (roundedTMatch) {
    const rkey = roundedTMatch[1] ?? 'DEFAULT'
    const val = has(borderRadius, rkey) ? borderRadius[rkey] : (has(borderRadius, 'DEFAULT') ? borderRadius['DEFAULT'] : null)
    if (val) return `.${cls} { border-top-left-radius: ${val}; border-top-right-radius: ${val}; }`
  }

  const roundedBMatch = cls.match(/^rounded-b(?:-(.+))?$/)
  if (roundedBMatch) {
    const rkey = roundedBMatch[1] ?? 'DEFAULT'
    const val = has(borderRadius, rkey) ? borderRadius[rkey] : (has(borderRadius, 'DEFAULT') ? borderRadius['DEFAULT'] : null)
    if (val) return `.${cls} { border-bottom-left-radius: ${val}; border-bottom-right-radius: ${val}; }`
  }

  const roundedLMatch = cls.match(/^rounded-l(?:-(.+))?$/)
  if (roundedLMatch) {
    const rkey = roundedLMatch[1] ?? 'DEFAULT'
    const val = has(borderRadius, rkey) ? borderRadius[rkey] : (has(borderRadius, 'DEFAULT') ? borderRadius['DEFAULT'] : null)
    if (val) return `.${cls} { border-top-left-radius: ${val}; border-bottom-left-radius: ${val}; }`
  }

  const roundedRMatch = cls.match(/^rounded-r(?:-(.+))?$/)
  if (roundedRMatch) {
    const rkey = roundedRMatch[1] ?? 'DEFAULT'
    const val = has(borderRadius, rkey) ? borderRadius[rkey] : (has(borderRadius, 'DEFAULT') ? borderRadius['DEFAULT'] : null)
    if (val) return `.${cls} { border-top-right-radius: ${val}; border-bottom-right-radius: ${val}; }`
  }

  // Border width
  if (cls === 'border') return `.${cls} { border-width: 1px; border-style: solid; }`
  if (cls === 'border-0') return `.${cls} { border-width: 0px; }`
  if (cls === 'border-2') return `.${cls} { border-width: 2px; border-style: solid; }`
  if (cls === 'border-4') return `.${cls} { border-width: 4px; border-style: solid; }`
  if (cls === 'border-8') return `.${cls} { border-width: 8px; border-style: solid; }`
  if (cls === 'border-t') return `.${cls} { border-top-width: 1px; border-top-style: solid; }`
  if (cls === 'border-r') return `.${cls} { border-right-width: 1px; border-right-style: solid; }`
  if (cls === 'border-b') return `.${cls} { border-bottom-width: 1px; border-bottom-style: solid; }`
  if (cls === 'border-l') return `.${cls} { border-left-width: 1px; border-left-style: solid; }`
  if (cls === 'border-t-0') return `.${cls} { border-top-width: 0px; }`
  if (cls === 'border-r-0') return `.${cls} { border-right-width: 0px; }`
  if (cls === 'border-b-0') return `.${cls} { border-bottom-width: 0px; }`
  if (cls === 'border-l-0') return `.${cls} { border-left-width: 0px; }`

  // Border style
  if (cls === 'border-solid') return `.${cls} { border-style: solid; }`
  if (cls === 'border-dashed') return `.${cls} { border-style: dashed; }`
  if (cls === 'border-dotted') return `.${cls} { border-style: dotted; }`
  if (cls === 'border-double') return `.${cls} { border-style: double; }`
  if (cls === 'border-hidden') return `.${cls} { border-style: hidden; }`
  if (cls === 'border-none') return `.${cls} { border-style: none; }`

  // Outline
  if (cls === 'outline-none') return `.${cls} { outline: 2px solid transparent; outline-offset: 2px; }`
  if (cls === 'outline') return `.${cls} { outline-style: solid; }`
  if (cls === 'outline-dashed') return `.${cls} { outline-style: dashed; }`
  if (cls === 'outline-dotted') return `.${cls} { outline-style: dotted; }`
  if (cls === 'outline-double') return `.${cls} { outline-style: double; }`

  const outlineWidthMatch = cls.match(/^outline-(\d+)$/)
  if (outlineWidthMatch) return `.${cls} { outline-width: ${outlineWidthMatch[1]}px; }`

  const outlineOffsetMatch = cls.match(/^outline-offset-(\d+)$/)
  if (outlineOffsetMatch) return `.${cls} { outline-offset: ${outlineOffsetMatch[1]}px; }`

  // Ring
  const ringMatch = cls.match(/^ring(?:-(\d+))?$/)
  if (ringMatch) {
    const width = ringMatch[1] ?? '3'
    return `.${cls} { box-shadow: 0 0 0 ${width}px var(--alive-ring-color, rgba(59, 130, 246, 0.5)); }`
  }
  if (cls === 'ring-inset') return `.${cls} { --alive-ring-inset: inset; }`

  const ringOffsetMatch = cls.match(/^ring-offset-(\d+)$/)
  if (ringOffsetMatch) return `.${cls} { --alive-ring-offset: ${ringOffsetMatch[1]}px; }`

  // Transform utilities
  if (cls === 'transform') return `.${cls} { transform: translateX(var(--alive-tx,0)) translateY(var(--alive-ty,0)) rotate(var(--alive-rotate,0)) scaleX(var(--alive-sx,1)) scaleY(var(--alive-sy,1)) skewX(var(--alive-skew-x,0)) skewY(var(--alive-skew-y,0)); }`
  if (cls === 'transform-none') return `.${cls} { transform: none; }`

  // Scale
  const scaleMap: Record<string, string> = {
    '0': '0', '50': '.5', '75': '.75', '90': '.9', '95': '.95',
    '100': '1', '105': '1.05', '110': '1.1', '125': '1.25', '150': '1.5',
  }
  const scaleMatch = cls.match(/^scale-(\d+)$/)
  if (scaleMatch && has(scaleMap, scaleMatch[1])) {
    return `.${cls} { transform: scale(${scaleMap[scaleMatch[1]]}); }`
  }

  const scaleXMatch = cls.match(/^scale-x-(\d+)$/)
  if (scaleXMatch && has(scaleMap, scaleXMatch[1])) {
    return `.${cls} { transform: scaleX(${scaleMap[scaleXMatch[1]]}); }`
  }

  const scaleYMatch = cls.match(/^scale-y-(\d+)$/)
  if (scaleYMatch && has(scaleMap, scaleYMatch[1])) {
    return `.${cls} { transform: scaleY(${scaleMap[scaleYMatch[1]]}); }`
  }

  // Rotate
  const rotateMatch = cls.match(/^-?rotate-(\d+)$/)
  if (rotateMatch) {
    const neg = cls.startsWith('-') ? '-' : ''
    return `.${cls.replace(/^-/, '\\-')} { transform: rotate(${neg}${rotateMatch[1]}deg); }`
  }

  // Translate
  const translateXMatch = cls.match(/^-?translate-x-(.+)$/)
  if (translateXMatch) {
    const neg = cls.startsWith('-') ? '-' : ''
    const key = translateXMatch[1]
    const fractions: Record<string, string> = { '1/2': '50%', 'full': '100%' }
    const val = fractions[key] ?? null
    if (val) return `.${cls.replace(/^-/, '\\-')} { transform: translateX(${neg}${val}); }`
  }

  const translateYMatch = cls.match(/^-?translate-y-(.+)$/)
  if (translateYMatch) {
    const neg = cls.startsWith('-') ? '-' : ''
    const key = translateYMatch[1]
    const fractions: Record<string, string> = { '1/2': '50%', 'full': '100%' }
    const val = fractions[key] ?? null
    if (val) return `.${cls.replace(/^-/, '\\-')} { transform: translateY(${neg}${val}); }`
  }

  // Transition (explicit overrides for elements outside depth context)
  if (cls === 'transition-none') return `.${cls} { transition: none; }`
  if (cls === 'transition-all') return `.${cls} { transition: all var(--alive-duration-normal) var(--alive-ease-standard); }`
  if (cls === 'transition-colors') return `.${cls} { transition: color, background-color, border-color, text-decoration-color, fill, stroke; transition-duration: var(--alive-duration-normal); transition-timing-function: var(--alive-ease-standard); }`
  if (cls === 'transition-opacity') return `.${cls} { transition: opacity; transition-duration: var(--alive-duration-normal); transition-timing-function: var(--alive-ease-standard); }`
  if (cls === 'transition-shadow') return `.${cls} { transition: box-shadow; transition-duration: var(--alive-duration-normal); transition-timing-function: var(--alive-ease-standard); }`
  if (cls === 'transition-transform') return `.${cls} { transition: transform; transition-duration: var(--alive-duration-normal); transition-timing-function: var(--alive-ease-standard); }`

  // Backdrop filter
  const blurMatch = cls.match(/^blur(?:-(.+))?$/)
  if (blurMatch) {
    const blurMap: Record<string, string> = {
      none: '0', sm: '4px', DEFAULT: '8px', md: '12px', lg: '16px',
      xl: '24px', '2xl': '40px', '3xl': '64px',
    }
    const key = blurMatch[1] ?? 'DEFAULT'
    if (has(blurMap, key)) return `.${cls} { filter: blur(${blurMap[key]}); }`
  }

  const backdropBlurMatch = cls.match(/^backdrop-blur(?:-(.+))?$/)
  if (backdropBlurMatch) {
    const blurMap: Record<string, string> = {
      none: '0', sm: '4px', DEFAULT: '8px', md: '12px', lg: '16px',
      xl: '24px', '2xl': '40px', '3xl': '64px',
    }
    const key = backdropBlurMatch[1] ?? 'DEFAULT'
    if (has(blurMap, key)) return `.${cls} { backdrop-filter: blur(${blurMap[key]}); }`
  }

  return null
}
