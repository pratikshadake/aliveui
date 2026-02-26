import type { ResolvedConfig } from '../types'
import { escapeSelector } from './utils'

function hasOwn(obj: Record<string, unknown>, key: string): boolean {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

export function generateTypography(classes: Set<string>, config: ResolvedConfig): string[] {
  const { fontSize, fontWeight, lineHeight } = config.theme
  const rules: string[] = []

  for (const cls of classes) {
    const generated = matchTypography(cls, fontSize, fontWeight, lineHeight)
    if (generated) rules.push(generated)
  }

  return rules
}

function matchTypography(
  cls: string,
  fontSize: ResolvedConfig['theme']['fontSize'],
  fontWeight: ResolvedConfig['theme']['fontWeight'],
  lineHeight: ResolvedConfig['theme']['lineHeight'],
): string | null {
  // text-{size}
  const textSizeMatch = cls.match(/^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/)
  if (textSizeMatch && hasOwn(fontSize as Record<string, unknown>, textSizeMatch[1])) {
    const [size, lh] = fontSize[textSizeMatch[1]]
    return `.${escapeSelector(cls)} {\n  font-size: ${size};\n  line-height: ${lh};\n}`
  }

  // font-{weight}
  const fontWeightMatch = cls.match(/^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/)
  if (fontWeightMatch && hasOwn(fontWeight, fontWeightMatch[1])) {
    return `.${escapeSelector(cls)} { font-weight: ${fontWeight[fontWeightMatch[1]]}; }`
  }

  // font-{family}
  if (cls === 'font-sans') return `.${escapeSelector(cls)} { font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }`
  if (cls === 'font-serif') return `.${escapeSelector(cls)} { font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; }`
  if (cls === 'font-mono') return `.${escapeSelector(cls)} { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }`

  // leading-{size}
  const leadingMatch = cls.match(/^leading-(.+)$/)
  if (leadingMatch && hasOwn(lineHeight, leadingMatch[1])) {
    return `.${escapeSelector(cls)} { line-height: ${lineHeight[leadingMatch[1]]}; }`
  }

  // tracking (letter-spacing)
  const trackingMap: Record<string, string> = {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  }
  const trackingMatch = cls.match(/^tracking-(.+)$/)
  if (trackingMatch && Object.prototype.hasOwnProperty.call(trackingMap, trackingMatch[1])) {
    return `.${escapeSelector(cls)} { letter-spacing: ${trackingMap[trackingMatch[1]]}; }`
  }

  // text alignment
  if (cls === 'text-left') return `.${escapeSelector(cls)} { text-align: left; }`
  if (cls === 'text-center') return `.${escapeSelector(cls)} { text-align: center; }`
  if (cls === 'text-right') return `.${escapeSelector(cls)} { text-align: right; }`
  if (cls === 'text-justify') return `.${escapeSelector(cls)} { text-align: justify; }`
  if (cls === 'text-start') return `.${escapeSelector(cls)} { text-align: start; }`
  if (cls === 'text-end') return `.${escapeSelector(cls)} { text-align: end; }`

  // text transform
  if (cls === 'uppercase') return `.${escapeSelector(cls)} { text-transform: uppercase; }`
  if (cls === 'lowercase') return `.${escapeSelector(cls)} { text-transform: lowercase; }`
  if (cls === 'capitalize') return `.${escapeSelector(cls)} { text-transform: capitalize; }`
  if (cls === 'normal-case') return `.${escapeSelector(cls)} { text-transform: none; }`

  // text decoration
  if (cls === 'underline') return `.${escapeSelector(cls)} { text-decoration-line: underline; }`
  if (cls === 'overline') return `.${escapeSelector(cls)} { text-decoration-line: overline; }`
  if (cls === 'line-through') return `.${escapeSelector(cls)} { text-decoration-line: line-through; }`
  if (cls === 'no-underline') return `.${escapeSelector(cls)} { text-decoration-line: none; }`

  // text overflow
  if (cls === 'truncate') return `.${escapeSelector(cls)} { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }`
  if (cls === 'text-ellipsis') return `.${escapeSelector(cls)} { text-overflow: ellipsis; }`
  if (cls === 'text-clip') return `.${escapeSelector(cls)} { text-overflow: clip; }`

  // white space
  if (cls === 'whitespace-normal') return `.${escapeSelector(cls)} { white-space: normal; }`
  if (cls === 'whitespace-nowrap') return `.${escapeSelector(cls)} { white-space: nowrap; }`
  if (cls === 'whitespace-pre') return `.${escapeSelector(cls)} { white-space: pre; }`
  if (cls === 'whitespace-pre-line') return `.${escapeSelector(cls)} { white-space: pre-line; }`
  if (cls === 'whitespace-pre-wrap') return `.${escapeSelector(cls)} { white-space: pre-wrap; }`
  if (cls === 'whitespace-break-spaces') return `.${escapeSelector(cls)} { white-space: break-spaces; }`

  // font style
  if (cls === 'italic') return `.${escapeSelector(cls)} { font-style: italic; }`
  if (cls === 'not-italic') return `.${escapeSelector(cls)} { font-style: normal; }`

  // font variant numeric
  if (cls === 'tabular-nums') return `.${escapeSelector(cls)} { font-variant-numeric: tabular-nums; }`
  if (cls === 'oldstyle-nums') return `.${escapeSelector(cls)} { font-variant-numeric: oldstyle-nums; }`

  // list style
  if (cls === 'list-none') return `.${escapeSelector(cls)} { list-style-type: none; }`
  if (cls === 'list-disc') return `.${escapeSelector(cls)} { list-style-type: disc; }`
  if (cls === 'list-decimal') return `.${escapeSelector(cls)} { list-style-type: decimal; }`

  // word break
  if (cls === 'break-normal') return `.${escapeSelector(cls)} { overflow-wrap: normal; word-break: normal; }`
  if (cls === 'break-words') return `.${escapeSelector(cls)} { overflow-wrap: break-word; }`
  if (cls === 'break-all') return `.${escapeSelector(cls)} { word-break: break-all; }`
  if (cls === 'break-keep') return `.${escapeSelector(cls)} { word-break: keep-all; }`

  return null
}
