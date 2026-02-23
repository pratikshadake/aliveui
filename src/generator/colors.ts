import type { ResolvedConfig } from '../types'
import { rule, resolveColor, escapeSelector } from './utils'

// Properties that benefit from alive motion transitions
const TRANSITIONED = `
  transition-property: {prop};
  transition-duration: var(--alive-duration, 0ms);
  transition-timing-function: var(--alive-ease, linear);`

function transitioned(prop: string): string {
  return TRANSITIONED.replace('{prop}', prop)
}

export function generateColors(classes: Set<string>, config: ResolvedConfig): string[] {
  const { colors } = config.theme
  const rules: string[] = []

  for (const cls of classes) {
    const generated = matchColor(cls, colors)
    if (generated) rules.push(generated)
  }

  return rules
}

function matchColor(
  cls: string,
  colors: ResolvedConfig['theme']['colors'],
): string | null {
  // bg-{color} | bg-{color}-{shade}
  const bgMatch = cls.match(/^bg-([a-z]+)(?:-(\d+))?$/)
  if (bgMatch) {
    const value = resolveColor(colors, bgMatch[1], bgMatch[2])
    if (value) {
      return `.${cls} {\n  background-color: ${value};${transitioned('background-color')}\n}`
    }
  }

  // text-{color} | text-{color}-{shade}
  const textColorMatch = cls.match(/^text-([a-z]+)(?:-(\d+))?$/)
  if (textColorMatch) {
    const value = resolveColor(colors, textColorMatch[1], textColorMatch[2])
    if (value) {
      return `.${cls} {\n  color: ${value};${transitioned('color')}\n}`
    }
  }

  // border-{color} | border-{color}-{shade}
  const borderColorMatch = cls.match(/^border-([a-z]+)(?:-(\d+))?$/)
  if (borderColorMatch) {
    const value = resolveColor(colors, borderColorMatch[1], borderColorMatch[2])
    if (value) {
      return `.${cls} {\n  border-color: ${value};${transitioned('border-color')}\n}`
    }
  }

  // ring-{color} | ring-{color}-{shade}
  const ringColorMatch = cls.match(/^ring-([a-z]+)(?:-(\d+))?$/)
  if (ringColorMatch) {
    const value = resolveColor(colors, ringColorMatch[1], ringColorMatch[2])
    if (value) {
      return `.${cls} {\n  --alive-ring-color: ${value};\n}`
    }
  }

  // outline-{color} | outline-{color}-{shade}
  const outlineColorMatch = cls.match(/^outline-([a-z]+)(?:-(\d+))?$/)
  if (outlineColorMatch) {
    const value = resolveColor(colors, outlineColorMatch[1], outlineColorMatch[2])
    if (value) {
      return `.${cls} {\n  outline-color: ${value};\n}`
    }
  }

  // fill-{color} | fill-{color}-{shade}
  const fillMatch = cls.match(/^fill-([a-z]+)(?:-(\d+))?$/)
  if (fillMatch) {
    const value = resolveColor(colors, fillMatch[1], fillMatch[2])
    if (value) {
      return `.${cls} {\n  fill: ${value};\n}`
    }
  }

  // stroke-{color} | stroke-{color}-{shade}
  const strokeMatch = cls.match(/^stroke-([a-z]+)(?:-(\d+))?$/)
  if (strokeMatch) {
    const value = resolveColor(colors, strokeMatch[1], strokeMatch[2])
    if (value) {
      return `.${cls} {\n  stroke: ${value};\n}`
    }
  }

  // decoration-{color} | decoration-{color}-{shade}
  const decorationMatch = cls.match(/^decoration-([a-z]+)(?:-(\d+))?$/)
  if (decorationMatch) {
    const value = resolveColor(colors, decorationMatch[1], decorationMatch[2])
    if (value) {
      return `.${cls} {\n  text-decoration-color: ${value};\n}`
    }
  }

  // caret-{color} | caret-{color}-{shade}
  const caretMatch = cls.match(/^caret-([a-z]+)(?:-(\d+))?$/)
  if (caretMatch) {
    const value = resolveColor(colors, caretMatch[1], caretMatch[2])
    if (value) {
      return `.${cls} {\n  caret-color: ${value};\n}`
    }
  }

  // accent-{color} | accent-{color}-{shade}
  const accentMatch = cls.match(/^accent-([a-z]+)(?:-(\d+))?$/)
  if (accentMatch) {
    const value = resolveColor(colors, accentMatch[1], accentMatch[2])
    if (value) {
      return `.${cls} {\n  accent-color: ${value};\n}`
    }
  }

  // shadow-{color} | shadow-{color}-{shade}
  const shadowColorMatch = cls.match(/^shadow-([a-z]+)-(\d+)$/)
  if (shadowColorMatch) {
    const value = resolveColor(colors, shadowColorMatch[1], shadowColorMatch[2])
    if (value) {
      return `.${cls} {\n  --alive-shadow-color: ${value};\n}`
    }
  }

  // ── Arbitrary color values ────────────────────────────────────────

  const arbBgMatch = cls.match(/^bg-\[(.+)\]$/)
  if (arbBgMatch) {
    const val = arbBgMatch[1]
    const escaped = escapeSelector(cls)
    // Support both colors and url() / gradient values
    if (val.startsWith('url(') || val.startsWith('linear-gradient') || val.startsWith('radial-gradient')) {
      return `.${escaped} {\n  background-image: ${val};${transitioned('background-image')}\n}`
    }
    return `.${escaped} {\n  background-color: ${val};${transitioned('background-color')}\n}`
  }

  const arbTextMatch = cls.match(/^text-\[(.+)\]$/)
  if (arbTextMatch) {
    return `.${escapeSelector(cls)} {\n  color: ${arbTextMatch[1]};${transitioned('color')}\n}`
  }

  const arbBorderColorMatch = cls.match(/^border-\[#[0-9a-fA-F]|^border-\[rgb|^border-\[hsl|^border-\[oklch/)
  if (arbBorderColorMatch) {
    const m = cls.match(/^border-\[(.+)\]$/)
    if (m) {
      return `.${escapeSelector(cls)} {\n  border-color: ${m[1]};${transitioned('border-color')}\n}`
    }
  }

  const arbFillMatch = cls.match(/^fill-\[(.+)\]$/)
  if (arbFillMatch) {
    return `.${escapeSelector(cls)} {\n  fill: ${arbFillMatch[1]};\n}`
  }

  const arbStrokeMatch = cls.match(/^stroke-\[(.+)\]$/)
  if (arbStrokeMatch) {
    return `.${escapeSelector(cls)} {\n  stroke: ${arbStrokeMatch[1]};\n}`
  }

  return null
}

export { matchColor as matchColorClass }
