import type { ResolvedConfig } from '../types'

export function generateLayout(classes: Set<string>, _config: ResolvedConfig): string[] {
  const rules: string[] = []
  for (const cls of classes) {
    const generated = matchLayout(cls)
    if (generated) rules.push(generated)
  }
  return rules
}

function matchLayout(cls: string): string | null {
  // Display
  const displayMap: Record<string, string> = {
    block: 'display: block;',
    inline: 'display: inline;',
    'inline-block': 'display: inline-block;',
    flex: 'display: flex;',
    'inline-flex': 'display: inline-flex;',
    grid: 'display: grid;',
    'inline-grid': 'display: inline-grid;',
    table: 'display: table;',
    hidden: 'display: none;',
    contents: 'display: contents;',
  }
  if (displayMap[cls]) return `.${cls} { ${displayMap[cls]} }`

  // Position
  const posMap: Record<string, string> = {
    static: 'position: static;',
    relative: 'position: relative;',
    absolute: 'position: absolute;',
    fixed: 'position: fixed;',
    sticky: 'position: sticky;',
  }
  if (posMap[cls]) return `.${cls} { ${posMap[cls]} }`

  // Flex direction
  if (cls === 'flex-row') return `.${cls} { flex-direction: row; }`
  if (cls === 'flex-row-reverse') return `.${cls} { flex-direction: row-reverse; }`
  if (cls === 'flex-col') return `.${cls} { flex-direction: column; }`
  if (cls === 'flex-col-reverse') return `.${cls} { flex-direction: column-reverse; }`

  // Flex wrap
  if (cls === 'flex-wrap') return `.${cls} { flex-wrap: wrap; }`
  if (cls === 'flex-nowrap') return `.${cls} { flex-wrap: nowrap; }`
  if (cls === 'flex-wrap-reverse') return `.${cls} { flex-wrap: wrap-reverse; }`

  // Flex grow/shrink
  if (cls === 'flex-1') return `.${cls} { flex: 1 1 0%; }`
  if (cls === 'flex-auto') return `.${cls} { flex: 1 1 auto; }`
  if (cls === 'flex-initial') return `.${cls} { flex: 0 1 auto; }`
  if (cls === 'flex-none') return `.${cls} { flex: none; }`
  if (cls === 'flex-grow') return `.${cls} { flex-grow: 1; }`
  if (cls === 'flex-grow-0') return `.${cls} { flex-grow: 0; }`
  if (cls === 'flex-shrink') return `.${cls} { flex-shrink: 1; }`
  if (cls === 'flex-shrink-0') return `.${cls} { flex-shrink: 0; }`

  // Align items
  if (cls === 'items-start') return `.${cls} { align-items: flex-start; }`
  if (cls === 'items-end') return `.${cls} { align-items: flex-end; }`
  if (cls === 'items-center') return `.${cls} { align-items: center; }`
  if (cls === 'items-baseline') return `.${cls} { align-items: baseline; }`
  if (cls === 'items-stretch') return `.${cls} { align-items: stretch; }`

  // Align self
  if (cls === 'self-auto') return `.${cls} { align-self: auto; }`
  if (cls === 'self-start') return `.${cls} { align-self: flex-start; }`
  if (cls === 'self-end') return `.${cls} { align-self: flex-end; }`
  if (cls === 'self-center') return `.${cls} { align-self: center; }`
  if (cls === 'self-stretch') return `.${cls} { align-self: stretch; }`
  if (cls === 'self-baseline') return `.${cls} { align-self: baseline; }`

  // Justify content
  if (cls === 'justify-start') return `.${cls} { justify-content: flex-start; }`
  if (cls === 'justify-end') return `.${cls} { justify-content: flex-end; }`
  if (cls === 'justify-center') return `.${cls} { justify-content: center; }`
  if (cls === 'justify-between') return `.${cls} { justify-content: space-between; }`
  if (cls === 'justify-around') return `.${cls} { justify-content: space-around; }`
  if (cls === 'justify-evenly') return `.${cls} { justify-content: space-evenly; }`
  if (cls === 'justify-stretch') return `.${cls} { justify-content: stretch; }`

  // Justify items / self
  if (cls === 'justify-items-start') return `.${cls} { justify-items: start; }`
  if (cls === 'justify-items-end') return `.${cls} { justify-items: end; }`
  if (cls === 'justify-items-center') return `.${cls} { justify-items: center; }`
  if (cls === 'justify-items-stretch') return `.${cls} { justify-items: stretch; }`
  if (cls === 'justify-self-auto') return `.${cls} { justify-self: auto; }`
  if (cls === 'justify-self-start') return `.${cls} { justify-self: start; }`
  if (cls === 'justify-self-end') return `.${cls} { justify-self: end; }`
  if (cls === 'justify-self-center') return `.${cls} { justify-self: center; }`
  if (cls === 'justify-self-stretch') return `.${cls} { justify-self: stretch; }`

  // Align content
  if (cls === 'content-normal') return `.${cls} { align-content: normal; }`
  if (cls === 'content-center') return `.${cls} { align-content: center; }`
  if (cls === 'content-start') return `.${cls} { align-content: flex-start; }`
  if (cls === 'content-end') return `.${cls} { align-content: flex-end; }`
  if (cls === 'content-between') return `.${cls} { align-content: space-between; }`
  if (cls === 'content-around') return `.${cls} { align-content: space-around; }`
  if (cls === 'content-evenly') return `.${cls} { align-content: space-evenly; }`
  if (cls === 'content-stretch') return `.${cls} { align-content: stretch; }`
  if (cls === 'content-baseline') return `.${cls} { align-content: baseline; }`

  // Grid cols
  const gridColsMatch = cls.match(/^grid-cols-(\d+)$/)
  if (gridColsMatch) {
    const n = parseInt(gridColsMatch[1])
    return `.${cls} { grid-template-columns: repeat(${n}, minmax(0, 1fr)); }`
  }
  if (cls === 'grid-cols-none') return `.${cls} { grid-template-columns: none; }`

  // Grid rows
  const gridRowsMatch = cls.match(/^grid-rows-(\d+)$/)
  if (gridRowsMatch) {
    const n = parseInt(gridRowsMatch[1])
    return `.${cls} { grid-template-rows: repeat(${n}, minmax(0, 1fr)); }`
  }
  if (cls === 'grid-rows-none') return `.${cls} { grid-template-rows: none; }`

  // Col span
  const colSpanMatch = cls.match(/^col-span-(\d+)$/)
  if (colSpanMatch) return `.${cls} { grid-column: span ${colSpanMatch[1]} / span ${colSpanMatch[1]}; }`
  if (cls === 'col-span-full') return `.${cls} { grid-column: 1 / -1; }`
  if (cls === 'col-auto') return `.${cls} { grid-column: auto; }`

  // Row span
  const rowSpanMatch = cls.match(/^row-span-(\d+)$/)
  if (rowSpanMatch) return `.${cls} { grid-row: span ${rowSpanMatch[1]} / span ${rowSpanMatch[1]}; }`
  if (cls === 'row-span-full') return `.${cls} { grid-row: 1 / -1; }`
  if (cls === 'row-auto') return `.${cls} { grid-row: auto; }`

  // Col start/end
  const colStartMatch = cls.match(/^col-start-(\d+)$/)
  if (colStartMatch) return `.${cls} { grid-column-start: ${colStartMatch[1]}; }`
  const colEndMatch = cls.match(/^col-end-(\d+)$/)
  if (colEndMatch) return `.${cls} { grid-column-end: ${colEndMatch[1]}; }`

  // Row start/end
  const rowStartMatch = cls.match(/^row-start-(\d+)$/)
  if (rowStartMatch) return `.${cls} { grid-row-start: ${rowStartMatch[1]}; }`
  const rowEndMatch = cls.match(/^row-end-(\d+)$/)
  if (rowEndMatch) return `.${cls} { grid-row-end: ${rowEndMatch[1]}; }`

  // Order
  const orderMatch = cls.match(/^order-(-?\d+)$/)
  if (orderMatch) return `.${cls} { order: ${orderMatch[1]}; }`
  if (cls === 'order-first') return `.${cls} { order: -9999; }`
  if (cls === 'order-last') return `.${cls} { order: 9999; }`
  if (cls === 'order-none') return `.${cls} { order: 0; }`

  // Float
  if (cls === 'float-right') return `.${cls} { float: right; }`
  if (cls === 'float-left') return `.${cls} { float: left; }`
  if (cls === 'float-none') return `.${cls} { float: none; }`
  if (cls === 'clearfix') return `.${cls}::after { content: ""; display: table; clear: both; }`

  // Overflow
  if (cls === 'overflow-auto') return `.${cls} { overflow: auto; }`
  if (cls === 'overflow-hidden') return `.${cls} { overflow: hidden; }`
  if (cls === 'overflow-clip') return `.${cls} { overflow: clip; }`
  if (cls === 'overflow-visible') return `.${cls} { overflow: visible; }`
  if (cls === 'overflow-scroll') return `.${cls} { overflow: scroll; }`
  if (cls === 'overflow-x-auto') return `.${cls} { overflow-x: auto; }`
  if (cls === 'overflow-x-hidden') return `.${cls} { overflow-x: hidden; }`
  if (cls === 'overflow-x-scroll') return `.${cls} { overflow-x: scroll; }`
  if (cls === 'overflow-y-auto') return `.${cls} { overflow-y: auto; }`
  if (cls === 'overflow-y-hidden') return `.${cls} { overflow-y: hidden; }`
  if (cls === 'overflow-y-scroll') return `.${cls} { overflow-y: scroll; }`

  // Visibility
  if (cls === 'visible') return `.${cls} { visibility: visible; }`
  if (cls === 'invisible') return `.${cls} { visibility: hidden; }`
  if (cls === 'collapse') return `.${cls} { visibility: collapse; }`

  // Pointer events
  if (cls === 'pointer-events-none') return `.${cls} { pointer-events: none; }`
  if (cls === 'pointer-events-auto') return `.${cls} { pointer-events: auto; }`

  // Cursor
  const cursorMap: Record<string, string> = {
    'cursor-auto': 'auto',
    'cursor-default': 'default',
    'cursor-pointer': 'pointer',
    'cursor-wait': 'wait',
    'cursor-text': 'text',
    'cursor-move': 'move',
    'cursor-not-allowed': 'not-allowed',
    'cursor-grab': 'grab',
    'cursor-grabbing': 'grabbing',
    'cursor-crosshair': 'crosshair',
    'cursor-help': 'help',
    'cursor-none': 'none',
    'cursor-zoom-in': 'zoom-in',
    'cursor-zoom-out': 'zoom-out',
  }
  if (cursorMap[cls]) return `.${cls} { cursor: ${cursorMap[cls]}; }`

  // Select
  if (cls === 'select-none') return `.${cls} { user-select: none; }`
  if (cls === 'select-text') return `.${cls} { user-select: text; }`
  if (cls === 'select-all') return `.${cls} { user-select: all; }`
  if (cls === 'select-auto') return `.${cls} { user-select: auto; }`

  // Object fit
  if (cls === 'object-contain') return `.${cls} { object-fit: contain; }`
  if (cls === 'object-cover') return `.${cls} { object-fit: cover; }`
  if (cls === 'object-fill') return `.${cls} { object-fit: fill; }`
  if (cls === 'object-none') return `.${cls} { object-fit: none; }`
  if (cls === 'object-scale-down') return `.${cls} { object-fit: scale-down; }`

  // Aspect ratio
  if (cls === 'aspect-auto') return `.${cls} { aspect-ratio: auto; }`
  if (cls === 'aspect-square') return `.${cls} { aspect-ratio: 1 / 1; }`
  if (cls === 'aspect-video') return `.${cls} { aspect-ratio: 16 / 9; }`

  // Container
  if (cls === 'container') {
    return `.${cls} {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n}`
  }

  // Box decoration
  if (cls === 'box-border') return `.${cls} { box-sizing: border-box; }`
  if (cls === 'box-content') return `.${cls} { box-sizing: content-box; }`

  // Isolate
  if (cls === 'isolate') return `.${cls} { isolation: isolate; }`
  if (cls === 'isolation-auto') return `.${cls} { isolation: auto; }`

  // Mix blend mode
  const mixBlendMap: Record<string, string> = {
    'mix-blend-normal': 'normal',
    'mix-blend-multiply': 'multiply',
    'mix-blend-screen': 'screen',
    'mix-blend-overlay': 'overlay',
    'mix-blend-darken': 'darken',
    'mix-blend-lighten': 'lighten',
    'mix-blend-color-dodge': 'color-dodge',
    'mix-blend-color-burn': 'color-burn',
    'mix-blend-hard-light': 'hard-light',
    'mix-blend-soft-light': 'soft-light',
    'mix-blend-difference': 'difference',
    'mix-blend-exclusion': 'exclusion',
  }
  if (mixBlendMap[cls]) return `.${cls} { mix-blend-mode: ${mixBlendMap[cls]}; }`

  return null
}
