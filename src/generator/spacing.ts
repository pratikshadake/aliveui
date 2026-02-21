import type { ResolvedConfig } from '../types'

export function generateSpacing(classes: Set<string>, config: ResolvedConfig): string[] {
  const { spacing } = config.theme
  const rules: string[] = []

  for (const cls of classes) {
    const generated = matchSpacing(cls, spacing)
    if (generated) rules.push(generated)
  }

  return rules
}

function matchSpacing(cls: string, spacing: Record<string, string>): string | null {
  // Padding
  const pMatch = cls.match(/^p-(.+)$/)
  if (pMatch && spacing[pMatch[1]]) {
    return `.${cls} { padding: ${spacing[pMatch[1]]}; }`
  }

  const pxMatch = cls.match(/^px-(.+)$/)
  if (pxMatch && spacing[pxMatch[1]]) {
    return `.${cls} { padding-left: ${spacing[pxMatch[1]]}; padding-right: ${spacing[pxMatch[1]]}; }`
  }

  const pyMatch = cls.match(/^py-(.+)$/)
  if (pyMatch && spacing[pyMatch[1]]) {
    return `.${cls} { padding-top: ${spacing[pyMatch[1]]}; padding-bottom: ${spacing[pyMatch[1]]}; }`
  }

  const ptMatch = cls.match(/^pt-(.+)$/)
  if (ptMatch && spacing[ptMatch[1]]) {
    return `.${cls} { padding-top: ${spacing[ptMatch[1]]}; }`
  }

  const prMatch = cls.match(/^pr-(.+)$/)
  if (prMatch && spacing[prMatch[1]]) {
    return `.${cls} { padding-right: ${spacing[prMatch[1]]}; }`
  }

  const pbMatch = cls.match(/^pb-(.+)$/)
  if (pbMatch && spacing[pbMatch[1]]) {
    return `.${cls} { padding-bottom: ${spacing[pbMatch[1]]}; }`
  }

  const plMatch = cls.match(/^pl-(.+)$/)
  if (plMatch && spacing[plMatch[1]]) {
    return `.${cls} { padding-left: ${spacing[plMatch[1]]}; }`
  }

  // Margin
  const mMatch = cls.match(/^m-(.+)$/)
  if (mMatch) {
    if (mMatch[1] === 'auto') return `.${cls} { margin: auto; }`
    if (spacing[mMatch[1]]) return `.${cls} { margin: ${spacing[mMatch[1]]}; }`
  }

  const mxMatch = cls.match(/^mx-(.+)$/)
  if (mxMatch) {
    if (mxMatch[1] === 'auto') return `.${cls} { margin-left: auto; margin-right: auto; }`
    if (spacing[mxMatch[1]]) return `.${cls} { margin-left: ${spacing[mxMatch[1]]}; margin-right: ${spacing[mxMatch[1]]}; }`
  }

  const myMatch = cls.match(/^my-(.+)$/)
  if (myMatch) {
    if (myMatch[1] === 'auto') return `.${cls} { margin-top: auto; margin-bottom: auto; }`
    if (spacing[myMatch[1]]) return `.${cls} { margin-top: ${spacing[myMatch[1]]}; margin-bottom: ${spacing[myMatch[1]]}; }`
  }

  const mtMatch = cls.match(/^mt-(.+)$/)
  if (mtMatch) {
    if (mtMatch[1] === 'auto') return `.${cls} { margin-top: auto; }`
    if (spacing[mtMatch[1]]) return `.${cls} { margin-top: ${spacing[mtMatch[1]]}; }`
  }

  const mrMatch = cls.match(/^mr-(.+)$/)
  if (mrMatch) {
    if (mrMatch[1] === 'auto') return `.${cls} { margin-right: auto; }`
    if (spacing[mrMatch[1]]) return `.${cls} { margin-right: ${spacing[mrMatch[1]]}; }`
  }

  const mbMatch = cls.match(/^mb-(.+)$/)
  if (mbMatch) {
    if (mbMatch[1] === 'auto') return `.${cls} { margin-bottom: auto; }`
    if (spacing[mbMatch[1]]) return `.${cls} { margin-bottom: ${spacing[mbMatch[1]]}; }`
  }

  const mlMatch = cls.match(/^ml-(.+)$/)
  if (mlMatch) {
    if (mlMatch[1] === 'auto') return `.${cls} { margin-left: auto; }`
    if (spacing[mlMatch[1]]) return `.${cls} { margin-left: ${spacing[mlMatch[1]]}; }`
  }

  // Gap
  const gapMatch = cls.match(/^gap-(.+)$/)
  if (gapMatch && spacing[gapMatch[1]]) {
    return `.${cls} { gap: ${spacing[gapMatch[1]]}; }`
  }

  const gapXMatch = cls.match(/^gap-x-(.+)$/)
  if (gapXMatch && spacing[gapXMatch[1]]) {
    return `.${cls} { column-gap: ${spacing[gapXMatch[1]]}; }`
  }

  const gapYMatch = cls.match(/^gap-y-(.+)$/)
  if (gapYMatch && spacing[gapYMatch[1]]) {
    return `.${cls} { row-gap: ${spacing[gapYMatch[1]]}; }`
  }

  // Space between (using margin on children)
  const spaceXMatch = cls.match(/^space-x-(.+)$/)
  if (spaceXMatch && spacing[spaceXMatch[1]]) {
    return `.${cls} > * + * { margin-left: ${spacing[spaceXMatch[1]]}; }`
  }

  const spaceYMatch = cls.match(/^space-y-(.+)$/)
  if (spaceYMatch && spacing[spaceYMatch[1]]) {
    return `.${cls} > * + * { margin-top: ${spacing[spaceYMatch[1]]}; }`
  }

  // Inset (position offsets using spacing)
  const insetMatch = cls.match(/^inset-(.+)$/)
  if (insetMatch) {
    if (insetMatch[1] === 'auto') return `.${cls} { inset: auto; }`
    if (insetMatch[1] === '0') return `.${cls} { inset: 0px; }`
    if (spacing[insetMatch[1]]) return `.${cls} { inset: ${spacing[insetMatch[1]]}; }`
  }

  const insetXMatch = cls.match(/^inset-x-(.+)$/)
  if (insetXMatch) {
    const val = insetXMatch[1] === 'auto' ? 'auto' : insetXMatch[1] === '0' ? '0px' : spacing[insetXMatch[1]]
    if (val) return `.${cls} { left: ${val}; right: ${val}; }`
  }

  const insetYMatch = cls.match(/^inset-y-(.+)$/)
  if (insetYMatch) {
    const val = insetYMatch[1] === 'auto' ? 'auto' : insetYMatch[1] === '0' ? '0px' : spacing[insetYMatch[1]]
    if (val) return `.${cls} { top: ${val}; bottom: ${val}; }`
  }

  const topMatch = cls.match(/^top-(.+)$/)
  if (topMatch) {
    if (topMatch[1] === 'auto') return `.${cls} { top: auto; }`
    if (topMatch[1] === '0') return `.${cls} { top: 0px; }`
    if (spacing[topMatch[1]]) return `.${cls} { top: ${spacing[topMatch[1]]}; }`
  }

  const rightMatch = cls.match(/^right-(.+)$/)
  if (rightMatch) {
    if (rightMatch[1] === 'auto') return `.${cls} { right: auto; }`
    if (rightMatch[1] === '0') return `.${cls} { right: 0px; }`
    if (spacing[rightMatch[1]]) return `.${cls} { right: ${spacing[rightMatch[1]]}; }`
  }

  const bottomMatch = cls.match(/^bottom-(.+)$/)
  if (bottomMatch) {
    if (bottomMatch[1] === 'auto') return `.${cls} { bottom: auto; }`
    if (bottomMatch[1] === '0') return `.${cls} { bottom: 0px; }`
    if (spacing[bottomMatch[1]]) return `.${cls} { bottom: ${spacing[bottomMatch[1]]}; }`
  }

  const leftMatch = cls.match(/^left-(.+)$/)
  if (leftMatch) {
    if (leftMatch[1] === 'auto') return `.${cls} { left: auto; }`
    if (leftMatch[1] === '0') return `.${cls} { left: 0px; }`
    if (spacing[leftMatch[1]]) return `.${cls} { left: ${spacing[leftMatch[1]]}; }`
  }

  return null
}
