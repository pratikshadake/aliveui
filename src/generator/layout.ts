import type { ResolvedConfig } from '../types'
import { escapeSelector } from './utils'

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
  if (displayMap[cls]) return `.${escapeSelector(cls)} { ${displayMap[cls]} }`

  // Position
  const posMap: Record<string, string> = {
    static: 'position: static;',
    relative: 'position: relative;',
    absolute: 'position: absolute;',
    fixed: 'position: fixed;',
    sticky: 'position: sticky;',
  }
  if (posMap[cls]) return `.${escapeSelector(cls)} { ${posMap[cls]} }`

  // Flex direction
  if (cls === 'flex-row') return `.${escapeSelector(cls)} { flex-direction: row; }`
  if (cls === 'flex-row-reverse') return `.${escapeSelector(cls)} { flex-direction: row-reverse; }`
  if (cls === 'flex-col') return `.${escapeSelector(cls)} { flex-direction: column; }`
  if (cls === 'flex-col-reverse') return `.${escapeSelector(cls)} { flex-direction: column-reverse; }`

  // Flex wrap
  if (cls === 'flex-wrap') return `.${escapeSelector(cls)} { flex-wrap: wrap; }`
  if (cls === 'flex-nowrap') return `.${escapeSelector(cls)} { flex-wrap: nowrap; }`
  if (cls === 'flex-wrap-reverse') return `.${escapeSelector(cls)} { flex-wrap: wrap-reverse; }`

  // Flex grow/shrink
  if (cls === 'flex-1') return `.${escapeSelector(cls)} { flex: 1 1 0%; }`
  if (cls === 'flex-auto') return `.${escapeSelector(cls)} { flex: 1 1 auto; }`
  if (cls === 'flex-initial') return `.${escapeSelector(cls)} { flex: 0 1 auto; }`
  if (cls === 'flex-none') return `.${escapeSelector(cls)} { flex: none; }`
  if (cls === 'flex-grow') return `.${escapeSelector(cls)} { flex-grow: 1; }`
  if (cls === 'flex-grow-0') return `.${escapeSelector(cls)} { flex-grow: 0; }`
  if (cls === 'flex-shrink') return `.${escapeSelector(cls)} { flex-shrink: 1; }`
  if (cls === 'flex-shrink-0') return `.${escapeSelector(cls)} { flex-shrink: 0; }`
  // Tailwind v3 shorthands
  if (cls === 'grow') return `.${escapeSelector(cls)} { flex-grow: 1; }`
  if (cls === 'grow-0') return `.${escapeSelector(cls)} { flex-grow: 0; }`
  if (cls === 'shrink') return `.${escapeSelector(cls)} { flex-shrink: 1; }`
  if (cls === 'shrink-0') return `.${escapeSelector(cls)} { flex-shrink: 0; }`

  // Align items
  if (cls === 'items-start') return `.${escapeSelector(cls)} { align-items: flex-start; }`
  if (cls === 'items-end') return `.${escapeSelector(cls)} { align-items: flex-end; }`
  if (cls === 'items-center') return `.${escapeSelector(cls)} { align-items: center; }`
  if (cls === 'items-baseline') return `.${escapeSelector(cls)} { align-items: baseline; }`
  if (cls === 'items-stretch') return `.${escapeSelector(cls)} { align-items: stretch; }`

  // Align self
  if (cls === 'self-auto') return `.${escapeSelector(cls)} { align-self: auto; }`
  if (cls === 'self-start') return `.${escapeSelector(cls)} { align-self: flex-start; }`
  if (cls === 'self-end') return `.${escapeSelector(cls)} { align-self: flex-end; }`
  if (cls === 'self-center') return `.${escapeSelector(cls)} { align-self: center; }`
  if (cls === 'self-stretch') return `.${escapeSelector(cls)} { align-self: stretch; }`
  if (cls === 'self-baseline') return `.${escapeSelector(cls)} { align-self: baseline; }`

  // Justify content
  if (cls === 'justify-start') return `.${escapeSelector(cls)} { justify-content: flex-start; }`
  if (cls === 'justify-end') return `.${escapeSelector(cls)} { justify-content: flex-end; }`
  if (cls === 'justify-center') return `.${escapeSelector(cls)} { justify-content: center; }`
  if (cls === 'justify-between') return `.${escapeSelector(cls)} { justify-content: space-between; }`
  if (cls === 'justify-around') return `.${escapeSelector(cls)} { justify-content: space-around; }`
  if (cls === 'justify-evenly') return `.${escapeSelector(cls)} { justify-content: space-evenly; }`
  if (cls === 'justify-stretch') return `.${escapeSelector(cls)} { justify-content: stretch; }`

  // Justify items / self
  if (cls === 'justify-items-start') return `.${escapeSelector(cls)} { justify-items: start; }`
  if (cls === 'justify-items-end') return `.${escapeSelector(cls)} { justify-items: end; }`
  if (cls === 'justify-items-center') return `.${escapeSelector(cls)} { justify-items: center; }`
  if (cls === 'justify-items-stretch') return `.${escapeSelector(cls)} { justify-items: stretch; }`
  if (cls === 'justify-self-auto') return `.${escapeSelector(cls)} { justify-self: auto; }`
  if (cls === 'justify-self-start') return `.${escapeSelector(cls)} { justify-self: start; }`
  if (cls === 'justify-self-end') return `.${escapeSelector(cls)} { justify-self: end; }`
  if (cls === 'justify-self-center') return `.${escapeSelector(cls)} { justify-self: center; }`
  if (cls === 'justify-self-stretch') return `.${escapeSelector(cls)} { justify-self: stretch; }`

  // Align content
  if (cls === 'content-normal') return `.${escapeSelector(cls)} { align-content: normal; }`
  if (cls === 'content-center') return `.${escapeSelector(cls)} { align-content: center; }`
  if (cls === 'content-start') return `.${escapeSelector(cls)} { align-content: flex-start; }`
  if (cls === 'content-end') return `.${escapeSelector(cls)} { align-content: flex-end; }`
  if (cls === 'content-between') return `.${escapeSelector(cls)} { align-content: space-between; }`
  if (cls === 'content-around') return `.${escapeSelector(cls)} { align-content: space-around; }`
  if (cls === 'content-evenly') return `.${escapeSelector(cls)} { align-content: space-evenly; }`
  if (cls === 'content-stretch') return `.${escapeSelector(cls)} { align-content: stretch; }`
  if (cls === 'content-baseline') return `.${escapeSelector(cls)} { align-content: baseline; }`

  // Grid cols
  const gridColsMatch = cls.match(/^grid-cols-(\d+)$/)
  if (gridColsMatch) {
    const n = parseInt(gridColsMatch[1])
    return `.${escapeSelector(cls)} { grid-template-columns: repeat(${n}, minmax(0, 1fr)); }`
  }
  if (cls === 'grid-cols-none') return `.${escapeSelector(cls)} { grid-template-columns: none; }`

  // Grid rows
  const gridRowsMatch = cls.match(/^grid-rows-(\d+)$/)
  if (gridRowsMatch) {
    const n = parseInt(gridRowsMatch[1])
    return `.${escapeSelector(cls)} { grid-template-rows: repeat(${n}, minmax(0, 1fr)); }`
  }
  if (cls === 'grid-rows-none') return `.${escapeSelector(cls)} { grid-template-rows: none; }`

  // Col span
  const colSpanMatch = cls.match(/^col-span-(\d+)$/)
  if (colSpanMatch) return `.${escapeSelector(cls)} { grid-column: span ${colSpanMatch[1]} / span ${colSpanMatch[1]}; }`
  if (cls === 'col-span-full') return `.${escapeSelector(cls)} { grid-column: 1 / -1; }`
  if (cls === 'col-auto') return `.${escapeSelector(cls)} { grid-column: auto; }`

  // Row span
  const rowSpanMatch = cls.match(/^row-span-(\d+)$/)
  if (rowSpanMatch) return `.${escapeSelector(cls)} { grid-row: span ${rowSpanMatch[1]} / span ${rowSpanMatch[1]}; }`
  if (cls === 'row-span-full') return `.${escapeSelector(cls)} { grid-row: 1 / -1; }`
  if (cls === 'row-auto') return `.${escapeSelector(cls)} { grid-row: auto; }`

  // Col start/end
  const colStartMatch = cls.match(/^col-start-(\d+)$/)
  if (colStartMatch) return `.${escapeSelector(cls)} { grid-column-start: ${colStartMatch[1]}; }`
  const colEndMatch = cls.match(/^col-end-(\d+)$/)
  if (colEndMatch) return `.${escapeSelector(cls)} { grid-column-end: ${colEndMatch[1]}; }`

  // Row start/end
  const rowStartMatch = cls.match(/^row-start-(\d+)$/)
  if (rowStartMatch) return `.${escapeSelector(cls)} { grid-row-start: ${rowStartMatch[1]}; }`
  const rowEndMatch = cls.match(/^row-end-(\d+)$/)
  if (rowEndMatch) return `.${escapeSelector(cls)} { grid-row-end: ${rowEndMatch[1]}; }`

  // Order
  const orderMatch = cls.match(/^order-(-?\d+)$/)
  if (orderMatch) return `.${escapeSelector(cls)} { order: ${orderMatch[1]}; }`
  if (cls === 'order-first') return `.${escapeSelector(cls)} { order: -9999; }`
  if (cls === 'order-last') return `.${escapeSelector(cls)} { order: 9999; }`
  if (cls === 'order-none') return `.${escapeSelector(cls)} { order: 0; }`

  // Float
  if (cls === 'float-right') return `.${escapeSelector(cls)} { float: right; }`
  if (cls === 'float-left') return `.${escapeSelector(cls)} { float: left; }`
  if (cls === 'float-none') return `.${escapeSelector(cls)} { float: none; }`
  if (cls === 'clearfix') return `.${cls}::after { content: ""; display: table; clear: both; }`

  // Overflow
  if (cls === 'overflow-auto') return `.${escapeSelector(cls)} { overflow: auto; }`
  if (cls === 'overflow-hidden') return `.${escapeSelector(cls)} { overflow: hidden; }`
  if (cls === 'overflow-clip') return `.${escapeSelector(cls)} { overflow: clip; }`
  if (cls === 'overflow-visible') return `.${escapeSelector(cls)} { overflow: visible; }`
  if (cls === 'overflow-scroll') return `.${escapeSelector(cls)} { overflow: scroll; }`
  if (cls === 'overflow-x-auto') return `.${escapeSelector(cls)} { overflow-x: auto; }`
  if (cls === 'overflow-x-hidden') return `.${escapeSelector(cls)} { overflow-x: hidden; }`
  if (cls === 'overflow-x-scroll') return `.${escapeSelector(cls)} { overflow-x: scroll; }`
  if (cls === 'overflow-y-auto') return `.${escapeSelector(cls)} { overflow-y: auto; }`
  if (cls === 'overflow-y-hidden') return `.${escapeSelector(cls)} { overflow-y: hidden; }`
  if (cls === 'overflow-y-scroll') return `.${escapeSelector(cls)} { overflow-y: scroll; }`

  // Visibility
  if (cls === 'visible') return `.${escapeSelector(cls)} { visibility: visible; }`
  if (cls === 'invisible') return `.${escapeSelector(cls)} { visibility: hidden; }`
  if (cls === 'collapse') return `.${escapeSelector(cls)} { visibility: collapse; }`

  // Pointer events
  if (cls === 'pointer-events-none') return `.${escapeSelector(cls)} { pointer-events: none; }`
  if (cls === 'pointer-events-auto') return `.${escapeSelector(cls)} { pointer-events: auto; }`

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
  if (cursorMap[cls]) return `.${escapeSelector(cls)} { cursor: ${cursorMap[cls]}; }`

  // Select
  if (cls === 'select-none') return `.${escapeSelector(cls)} { user-select: none; }`
  if (cls === 'select-text') return `.${escapeSelector(cls)} { user-select: text; }`
  if (cls === 'select-all') return `.${escapeSelector(cls)} { user-select: all; }`
  if (cls === 'select-auto') return `.${escapeSelector(cls)} { user-select: auto; }`

  // Object fit
  if (cls === 'object-contain') return `.${escapeSelector(cls)} { object-fit: contain; }`
  if (cls === 'object-cover') return `.${escapeSelector(cls)} { object-fit: cover; }`
  if (cls === 'object-fill') return `.${escapeSelector(cls)} { object-fit: fill; }`
  if (cls === 'object-none') return `.${escapeSelector(cls)} { object-fit: none; }`
  if (cls === 'object-scale-down') return `.${escapeSelector(cls)} { object-fit: scale-down; }`

  // Aspect ratio
  if (cls === 'aspect-auto') return `.${escapeSelector(cls)} { aspect-ratio: auto; }`
  if (cls === 'aspect-square') return `.${escapeSelector(cls)} { aspect-ratio: 1 / 1; }`
  if (cls === 'aspect-video') return `.${escapeSelector(cls)} { aspect-ratio: 16 / 9; }`

  // Container
  if (cls === 'container') {
    return `.${escapeSelector(cls)} {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n}`
  }

  // Box decoration
  if (cls === 'box-border') return `.${escapeSelector(cls)} { box-sizing: border-box; }`
  if (cls === 'box-content') return `.${escapeSelector(cls)} { box-sizing: content-box; }`

  // Isolate
  if (cls === 'isolate') return `.${escapeSelector(cls)} { isolation: isolate; }`
  if (cls === 'isolation-auto') return `.${escapeSelector(cls)} { isolation: auto; }`

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
  if (mixBlendMap[cls]) return `.${escapeSelector(cls)} { mix-blend-mode: ${mixBlendMap[cls]}; }`

  // ── Background size ───────────────────────────────────────────────
  if (cls === 'bg-auto')    return `.${escapeSelector(cls)} { background-size: auto; }`
  if (cls === 'bg-cover')   return `.${escapeSelector(cls)} { background-size: cover; }`
  if (cls === 'bg-contain') return `.${escapeSelector(cls)} { background-size: contain; }`

  // ── Background position ───────────────────────────────────────────
  if (cls === 'bg-center')       return `.${escapeSelector(cls)} { background-position: center; }`
  if (cls === 'bg-top')          return `.${escapeSelector(cls)} { background-position: top; }`
  if (cls === 'bg-bottom')       return `.${escapeSelector(cls)} { background-position: bottom; }`
  if (cls === 'bg-left')         return `.${escapeSelector(cls)} { background-position: left; }`
  if (cls === 'bg-right')        return `.${escapeSelector(cls)} { background-position: right; }`
  if (cls === 'bg-left-top')     return `.${escapeSelector(cls)} { background-position: left top; }`
  if (cls === 'bg-left-bottom')  return `.${escapeSelector(cls)} { background-position: left bottom; }`
  if (cls === 'bg-right-top')    return `.${escapeSelector(cls)} { background-position: right top; }`
  if (cls === 'bg-right-bottom') return `.${escapeSelector(cls)} { background-position: right bottom; }`

  // ── Background repeat ─────────────────────────────────────────────
  if (cls === 'bg-repeat')    return `.${escapeSelector(cls)} { background-repeat: repeat; }`
  if (cls === 'bg-no-repeat') return `.${escapeSelector(cls)} { background-repeat: no-repeat; }`
  if (cls === 'bg-repeat-x')  return `.${escapeSelector(cls)} { background-repeat: repeat-x; }`
  if (cls === 'bg-repeat-y')  return `.${escapeSelector(cls)} { background-repeat: repeat-y; }`
  if (cls === 'bg-repeat-round') return `.${escapeSelector(cls)} { background-repeat: round; }`
  if (cls === 'bg-repeat-space') return `.${escapeSelector(cls)} { background-repeat: space; }`

  // ── Background attachment ─────────────────────────────────────────
  if (cls === 'bg-fixed')  return `.${escapeSelector(cls)} { background-attachment: fixed; }`
  if (cls === 'bg-local')  return `.${escapeSelector(cls)} { background-attachment: local; }`
  if (cls === 'bg-scroll') return `.${escapeSelector(cls)} { background-attachment: scroll; }`

  // ── Background origin ─────────────────────────────────────────────
  if (cls === 'bg-origin-border')  return `.${escapeSelector(cls)} { background-origin: border-box; }`
  if (cls === 'bg-origin-padding') return `.${escapeSelector(cls)} { background-origin: padding-box; }`
  if (cls === 'bg-origin-content') return `.${escapeSelector(cls)} { background-origin: content-box; }`

  // ── Background clip ───────────────────────────────────────────────
  if (cls === 'bg-clip-border')  return `.${escapeSelector(cls)} { background-clip: border-box; }`
  if (cls === 'bg-clip-padding') return `.${escapeSelector(cls)} { background-clip: padding-box; }`
  if (cls === 'bg-clip-content') return `.${escapeSelector(cls)} { background-clip: content-box; }`
  if (cls === 'bg-clip-text')    return `.${escapeSelector(cls)} { background-clip: text; -webkit-background-clip: text; }`

  return null
}
