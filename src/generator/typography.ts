import type { ResolvedConfig } from '../types'

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
  if (textSizeMatch && fontSize[textSizeMatch[1]]) {
    const [size, lh] = fontSize[textSizeMatch[1]]
    return `.${cls} {\n  font-size: ${size};\n  line-height: ${lh};\n}`
  }

  // font-{weight}
  const fontWeightMatch = cls.match(/^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/)
  if (fontWeightMatch && fontWeight[fontWeightMatch[1]]) {
    return `.${cls} { font-weight: ${fontWeight[fontWeightMatch[1]]}; }`
  }

  // font-{family}
  if (cls === 'font-sans') return `.${cls} { font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }`
  if (cls === 'font-serif') return `.${cls} { font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; }`
  if (cls === 'font-mono') return `.${cls} { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }`

  // leading-{size}
  const leadingMatch = cls.match(/^leading-(.+)$/)
  if (leadingMatch && lineHeight[leadingMatch[1]]) {
    return `.${cls} { line-height: ${lineHeight[leadingMatch[1]]}; }`
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
  if (trackingMatch && trackingMap[trackingMatch[1]]) {
    return `.${cls} { letter-spacing: ${trackingMap[trackingMatch[1]]}; }`
  }

  // text alignment
  if (cls === 'text-left') return `.${cls} { text-align: left; }`
  if (cls === 'text-center') return `.${cls} { text-align: center; }`
  if (cls === 'text-right') return `.${cls} { text-align: right; }`
  if (cls === 'text-justify') return `.${cls} { text-align: justify; }`
  if (cls === 'text-start') return `.${cls} { text-align: start; }`
  if (cls === 'text-end') return `.${cls} { text-align: end; }`

  // text transform
  if (cls === 'uppercase') return `.${cls} { text-transform: uppercase; }`
  if (cls === 'lowercase') return `.${cls} { text-transform: lowercase; }`
  if (cls === 'capitalize') return `.${cls} { text-transform: capitalize; }`
  if (cls === 'normal-case') return `.${cls} { text-transform: none; }`

  // text decoration
  if (cls === 'underline') return `.${cls} { text-decoration-line: underline; }`
  if (cls === 'overline') return `.${cls} { text-decoration-line: overline; }`
  if (cls === 'line-through') return `.${cls} { text-decoration-line: line-through; }`
  if (cls === 'no-underline') return `.${cls} { text-decoration-line: none; }`

  // text overflow
  if (cls === 'truncate') return `.${cls} { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }`
  if (cls === 'text-ellipsis') return `.${cls} { text-overflow: ellipsis; }`
  if (cls === 'text-clip') return `.${cls} { text-overflow: clip; }`

  // white space
  if (cls === 'whitespace-normal') return `.${cls} { white-space: normal; }`
  if (cls === 'whitespace-nowrap') return `.${cls} { white-space: nowrap; }`
  if (cls === 'whitespace-pre') return `.${cls} { white-space: pre; }`
  if (cls === 'whitespace-pre-line') return `.${cls} { white-space: pre-line; }`
  if (cls === 'whitespace-pre-wrap') return `.${cls} { white-space: pre-wrap; }`
  if (cls === 'whitespace-break-spaces') return `.${cls} { white-space: break-spaces; }`

  // font style
  if (cls === 'italic') return `.${cls} { font-style: italic; }`
  if (cls === 'not-italic') return `.${cls} { font-style: normal; }`

  // font variant numeric
  if (cls === 'tabular-nums') return `.${cls} { font-variant-numeric: tabular-nums; }`
  if (cls === 'oldstyle-nums') return `.${cls} { font-variant-numeric: oldstyle-nums; }`

  // list style
  if (cls === 'list-none') return `.${cls} { list-style-type: none; }`
  if (cls === 'list-disc') return `.${cls} { list-style-type: disc; }`
  if (cls === 'list-decimal') return `.${cls} { list-style-type: decimal; }`

  // word break
  if (cls === 'break-normal') return `.${cls} { overflow-wrap: normal; word-break: normal; }`
  if (cls === 'break-words') return `.${cls} { overflow-wrap: break-word; }`
  if (cls === 'break-all') return `.${cls} { word-break: break-all; }`
  if (cls === 'break-keep') return `.${cls} { word-break: keep-all; }`

  return null
}
