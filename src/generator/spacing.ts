import type { ResolvedConfig } from '../types'
import { escapeSelector } from './utils'

export function generateSpacing(classes: Set<string>, config: ResolvedConfig): string[] {
  const { spacing } = config.theme
  const rules: string[] = []

  for (const cls of classes) {
    const generated = matchSpacing(cls, spacing)
    if (generated) rules.push(generated)
  }

  return rules
}

function has(obj: Record<string, string>, key: string): boolean {
  return typeof obj[key] === 'string'
}

function matchSpacing(cls: string, spacing: Record<string, string>): string | null {
  // Padding
  const pMatch = cls.match(/^p-(.+)$/)
  if (pMatch && has(spacing, pMatch[1])) {
    return `.${escapeSelector(cls)} { padding: ${spacing[pMatch[1]]}; }`
  }

  const pxMatch = cls.match(/^px-(.+)$/)
  if (pxMatch && has(spacing, pxMatch[1])) {
    return `.${escapeSelector(cls)} { padding-left: ${spacing[pxMatch[1]]}; padding-right: ${spacing[pxMatch[1]]}; }`
  }

  const pyMatch = cls.match(/^py-(.+)$/)
  if (pyMatch && has(spacing, pyMatch[1])) {
    return `.${escapeSelector(cls)} { padding-top: ${spacing[pyMatch[1]]}; padding-bottom: ${spacing[pyMatch[1]]}; }`
  }

  const ptMatch = cls.match(/^pt-(.+)$/)
  if (ptMatch && has(spacing, ptMatch[1])) {
    return `.${escapeSelector(cls)} { padding-top: ${spacing[ptMatch[1]]}; }`
  }

  const prMatch = cls.match(/^pr-(.+)$/)
  if (prMatch && has(spacing, prMatch[1])) {
    return `.${escapeSelector(cls)} { padding-right: ${spacing[prMatch[1]]}; }`
  }

  const pbMatch = cls.match(/^pb-(.+)$/)
  if (pbMatch && has(spacing, pbMatch[1])) {
    return `.${escapeSelector(cls)} { padding-bottom: ${spacing[pbMatch[1]]}; }`
  }

  const plMatch = cls.match(/^pl-(.+)$/)
  if (plMatch && has(spacing, plMatch[1])) {
    return `.${escapeSelector(cls)} { padding-left: ${spacing[plMatch[1]]}; }`
  }

  // Margin
  const mMatch = cls.match(/^m-(.+)$/)
  if (mMatch) {
    if (mMatch[1] === 'auto') return `.${escapeSelector(cls)} { margin: auto; }`
    if (has(spacing, mMatch[1])) return `.${escapeSelector(cls)} { margin: ${spacing[mMatch[1]]}; }`
  }

  const mxMatch = cls.match(/^mx-(.+)$/)
  if (mxMatch) {
    if (mxMatch[1] === 'auto') return `.${escapeSelector(cls)} { margin-left: auto; margin-right: auto; }`
    if (has(spacing, mxMatch[1])) return `.${escapeSelector(cls)} { margin-left: ${spacing[mxMatch[1]]}; margin-right: ${spacing[mxMatch[1]]}; }`
  }

  const myMatch = cls.match(/^my-(.+)$/)
  if (myMatch) {
    if (myMatch[1] === 'auto') return `.${escapeSelector(cls)} { margin-top: auto; margin-bottom: auto; }`
    if (has(spacing, myMatch[1])) return `.${escapeSelector(cls)} { margin-top: ${spacing[myMatch[1]]}; margin-bottom: ${spacing[myMatch[1]]}; }`
  }

  const mtMatch = cls.match(/^mt-(.+)$/)
  if (mtMatch) {
    if (mtMatch[1] === 'auto') return `.${escapeSelector(cls)} { margin-top: auto; }`
    if (has(spacing, mtMatch[1])) return `.${escapeSelector(cls)} { margin-top: ${spacing[mtMatch[1]]}; }`
  }

  const mrMatch = cls.match(/^mr-(.+)$/)
  if (mrMatch) {
    if (mrMatch[1] === 'auto') return `.${escapeSelector(cls)} { margin-right: auto; }`
    if (has(spacing, mrMatch[1])) return `.${escapeSelector(cls)} { margin-right: ${spacing[mrMatch[1]]}; }`
  }

  const mbMatch = cls.match(/^mb-(.+)$/)
  if (mbMatch) {
    if (mbMatch[1] === 'auto') return `.${escapeSelector(cls)} { margin-bottom: auto; }`
    if (has(spacing, mbMatch[1])) return `.${escapeSelector(cls)} { margin-bottom: ${spacing[mbMatch[1]]}; }`
  }

  const mlMatch = cls.match(/^ml-(.+)$/)
  if (mlMatch) {
    if (mlMatch[1] === 'auto') return `.${escapeSelector(cls)} { margin-left: auto; }`
    if (has(spacing, mlMatch[1])) return `.${escapeSelector(cls)} { margin-left: ${spacing[mlMatch[1]]}; }`
  }

  // Gap
  const gapMatch = cls.match(/^gap-(.+)$/)
  if (gapMatch && has(spacing, gapMatch[1])) {
    return `.${escapeSelector(cls)} { gap: ${spacing[gapMatch[1]]}; }`
  }

  const gapXMatch = cls.match(/^gap-x-(.+)$/)
  if (gapXMatch && has(spacing, gapXMatch[1])) {
    return `.${escapeSelector(cls)} { column-gap: ${spacing[gapXMatch[1]]}; }`
  }

  const gapYMatch = cls.match(/^gap-y-(.+)$/)
  if (gapYMatch && has(spacing, gapYMatch[1])) {
    return `.${escapeSelector(cls)} { row-gap: ${spacing[gapYMatch[1]]}; }`
  }

  // Space between (using margin on children)
  const spaceXMatch = cls.match(/^space-x-(.+)$/)
  if (spaceXMatch && has(spacing, spaceXMatch[1])) {
    return `.${escapeSelector(cls)}> * + * { margin-left: ${spacing[spaceXMatch[1]]}; }`
  }

  const spaceYMatch = cls.match(/^space-y-(.+)$/)
  if (spaceYMatch && has(spacing, spaceYMatch[1])) {
    return `.${escapeSelector(cls)}> * + * { margin-top: ${spacing[spaceYMatch[1]]}; }`
  }

  // Inset (position offsets using spacing)
  const insetMatch = cls.match(/^inset-(.+)$/)
  if (insetMatch) {
    if (insetMatch[1] === 'auto') return `.${escapeSelector(cls)} { inset: auto; }`
    if (insetMatch[1] === '0') return `.${escapeSelector(cls)} { inset: 0px; }`
    if (has(spacing, insetMatch[1])) return `.${escapeSelector(cls)} { inset: ${spacing[insetMatch[1]]}; }`
  }

  const insetXMatch = cls.match(/^inset-x-(.+)$/)
  if (insetXMatch) {
    const val = insetXMatch[1] === 'auto' ? 'auto' : insetXMatch[1] === '0' ? '0px' : (has(spacing, insetXMatch[1]) ? spacing[insetXMatch[1]] : undefined)
    if (val) return `.${escapeSelector(cls)} { left: ${val}; right: ${val}; }`
  }

  const insetYMatch = cls.match(/^inset-y-(.+)$/)
  if (insetYMatch) {
    const val = insetYMatch[1] === 'auto' ? 'auto' : insetYMatch[1] === '0' ? '0px' : (has(spacing, insetYMatch[1]) ? spacing[insetYMatch[1]] : undefined)
    if (val) return `.${escapeSelector(cls)} { top: ${val}; bottom: ${val}; }`
  }

  const topMatch = cls.match(/^top-(.+)$/)
  if (topMatch) {
    if (topMatch[1] === 'auto') return `.${escapeSelector(cls)} { top: auto; }`
    if (topMatch[1] === '0') return `.${escapeSelector(cls)} { top: 0px; }`
    if (has(spacing, topMatch[1])) return `.${escapeSelector(cls)} { top: ${spacing[topMatch[1]]}; }`
  }

  const rightMatch = cls.match(/^right-(.+)$/)
  if (rightMatch) {
    if (rightMatch[1] === 'auto') return `.${escapeSelector(cls)} { right: auto; }`
    if (rightMatch[1] === '0') return `.${escapeSelector(cls)} { right: 0px; }`
    if (has(spacing, rightMatch[1])) return `.${escapeSelector(cls)} { right: ${spacing[rightMatch[1]]}; }`
  }

  const bottomMatch = cls.match(/^bottom-(.+)$/)
  if (bottomMatch) {
    if (bottomMatch[1] === 'auto') return `.${escapeSelector(cls)} { bottom: auto; }`
    if (bottomMatch[1] === '0') return `.${escapeSelector(cls)} { bottom: 0px; }`
    if (has(spacing, bottomMatch[1])) return `.${escapeSelector(cls)} { bottom: ${spacing[bottomMatch[1]]}; }`
  }

  const leftMatch = cls.match(/^left-(.+)$/)
  if (leftMatch) {
    if (leftMatch[1] === 'auto') return `.${escapeSelector(cls)} { left: auto; }`
    if (leftMatch[1] === '0') return `.${escapeSelector(cls)} { left: 0px; }`
    if (has(spacing, leftMatch[1])) return `.${escapeSelector(cls)} { left: ${spacing[leftMatch[1]]}; }`
  }

  // ── Negative margin utilities ─────────────────────────────────────

  const negMMatch = cls.match(/^-m-(.+)$/)
  if (negMMatch && has(spacing, negMMatch[1])) {
    return `.${escapeSelector(cls)} { margin: -${spacing[negMMatch[1]]}; }`
  }

  const negMxMatch = cls.match(/^-mx-(.+)$/)
  if (negMxMatch && has(spacing, negMxMatch[1])) {
    return `.${escapeSelector(cls)} { margin-left: -${spacing[negMxMatch[1]]}; margin-right: -${spacing[negMxMatch[1]]}; }`
  }

  const negMyMatch = cls.match(/^-my-(.+)$/)
  if (negMyMatch && has(spacing, negMyMatch[1])) {
    return `.${escapeSelector(cls)} { margin-top: -${spacing[negMyMatch[1]]}; margin-bottom: -${spacing[negMyMatch[1]]}; }`
  }

  const negMtMatch = cls.match(/^-mt-(.+)$/)
  if (negMtMatch && has(spacing, negMtMatch[1])) {
    return `.${escapeSelector(cls)} { margin-top: -${spacing[negMtMatch[1]]}; }`
  }

  const negMrMatch = cls.match(/^-mr-(.+)$/)
  if (negMrMatch && has(spacing, negMrMatch[1])) {
    return `.${escapeSelector(cls)} { margin-right: -${spacing[negMrMatch[1]]}; }`
  }

  const negMbMatch = cls.match(/^-mb-(.+)$/)
  if (negMbMatch && has(spacing, negMbMatch[1])) {
    return `.${escapeSelector(cls)} { margin-bottom: -${spacing[negMbMatch[1]]}; }`
  }

  const negMlMatch = cls.match(/^-ml-(.+)$/)
  if (negMlMatch && has(spacing, negMlMatch[1])) {
    return `.${escapeSelector(cls)} { margin-left: -${spacing[negMlMatch[1]]}; }`
  }

  // ── Negative inset utilities ──────────────────────────────────────

  const negInsetMatch = cls.match(/^-inset-(.+)$/)
  if (negInsetMatch && has(spacing, negInsetMatch[1])) {
    return `.${escapeSelector(cls)} { inset: -${spacing[negInsetMatch[1]]}; }`
  }

  const negInsetXMatch = cls.match(/^-inset-x-(.+)$/)
  if (negInsetXMatch && has(spacing, negInsetXMatch[1])) {
    return `.${escapeSelector(cls)} { left: -${spacing[negInsetXMatch[1]]}; right: -${spacing[negInsetXMatch[1]]}; }`
  }

  const negInsetYMatch = cls.match(/^-inset-y-(.+)$/)
  if (negInsetYMatch && has(spacing, negInsetYMatch[1])) {
    return `.${escapeSelector(cls)} { top: -${spacing[negInsetYMatch[1]]}; bottom: -${spacing[negInsetYMatch[1]]}; }`
  }

  // ── Negative position utilities ───────────────────────────────────

  const negTopMatch = cls.match(/^-top-(.+)$/)
  if (negTopMatch && has(spacing, negTopMatch[1])) {
    return `.${escapeSelector(cls)} { top: -${spacing[negTopMatch[1]]}; }`
  }

  const negRightMatch = cls.match(/^-right-(.+)$/)
  if (negRightMatch && has(spacing, negRightMatch[1])) {
    return `.${escapeSelector(cls)} { right: -${spacing[negRightMatch[1]]}; }`
  }

  const negBottomMatch = cls.match(/^-bottom-(.+)$/)
  if (negBottomMatch && has(spacing, negBottomMatch[1])) {
    return `.${escapeSelector(cls)} { bottom: -${spacing[negBottomMatch[1]]}; }`
  }

  const negLeftMatch = cls.match(/^-left-(.+)$/)
  if (negLeftMatch && has(spacing, negLeftMatch[1])) {
    return `.${escapeSelector(cls)} { left: -${spacing[negLeftMatch[1]]}; }`
  }

  // ── Arbitrary value utilities ─────────────────────────────────────

  const arbSpacingMatch = cls.match(/^(w|h|p|m|pt|pr|pb|pl|px|py|mt|mr|mb|ml|mx|my|gap|gap-x|gap-y|top|right|bottom|left|inset|inset-x|inset-y)-\[(.+)\]$/)
  if (arbSpacingMatch) {
    const [, prop, val] = arbSpacingMatch
    const escaped = escapeSelector(cls)
    switch (prop) {
      case 'w':      return `.${escaped} { width: ${val}; }`
      case 'h':      return `.${escaped} { height: ${val}; }`
      case 'p':      return `.${escaped} { padding: ${val}; }`
      case 'm':      return `.${escaped} { margin: ${val}; }`
      case 'pt':     return `.${escaped} { padding-top: ${val}; }`
      case 'pr':     return `.${escaped} { padding-right: ${val}; }`
      case 'pb':     return `.${escaped} { padding-bottom: ${val}; }`
      case 'pl':     return `.${escaped} { padding-left: ${val}; }`
      case 'px':     return `.${escaped} { padding-left: ${val}; padding-right: ${val}; }`
      case 'py':     return `.${escaped} { padding-top: ${val}; padding-bottom: ${val}; }`
      case 'mt':     return `.${escaped} { margin-top: ${val}; }`
      case 'mr':     return `.${escaped} { margin-right: ${val}; }`
      case 'mb':     return `.${escaped} { margin-bottom: ${val}; }`
      case 'ml':     return `.${escaped} { margin-left: ${val}; }`
      case 'mx':     return `.${escaped} { margin-left: ${val}; margin-right: ${val}; }`
      case 'my':     return `.${escaped} { margin-top: ${val}; margin-bottom: ${val}; }`
      case 'gap':    return `.${escaped} { gap: ${val}; }`
      case 'gap-x':  return `.${escaped} { column-gap: ${val}; }`
      case 'gap-y':  return `.${escaped} { row-gap: ${val}; }`
      case 'top':    return `.${escaped} { top: ${val}; }`
      case 'right':  return `.${escaped} { right: ${val}; }`
      case 'bottom': return `.${escaped} { bottom: ${val}; }`
      case 'left':   return `.${escaped} { left: ${val}; }`
      case 'inset':  return `.${escaped} { inset: ${val}; }`
      case 'inset-x': return `.${escaped} { left: ${val}; right: ${val}; }`
      case 'inset-y': return `.${escaped} { top: ${val}; bottom: ${val}; }`
    }
  }

  return null
}
