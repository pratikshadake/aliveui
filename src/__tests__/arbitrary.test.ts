import { describe, it, expect } from 'vitest'
import { generateUtilities } from '../generator'
import { resolveConfig } from '../config'
import { escapeSelector, parseArbitrary } from '../generator/utils'

const config = resolveConfig({})

function generate(classes: string[]): string {
  return generateUtilities(new Set(classes), config)
}

describe('escapeSelector', () => {
  it('escapes square brackets', () => {
    expect(escapeSelector('w-[100px]')).toBe('w-\\[100px\\]')
  })

  it('escapes slashes', () => {
    expect(escapeSelector('w-1/2')).toBe('w-1\\/2')
  })

  it('escapes colons', () => {
    expect(escapeSelector('hover:bg-blue')).toBe('hover\\:bg-blue')
  })

  it('escapes leading hyphen for negative utilities', () => {
    expect(escapeSelector('-m-4')).toBe('\\-m-4')
    expect(escapeSelector('-translate-x-full')).toBe('\\-translate-x-full')
  })

  it('does not escape simple class names', () => {
    expect(escapeSelector('flex')).toBe('flex')
    expect(escapeSelector('bg-blue-500')).toBe('bg-blue-500')
  })
})

describe('parseArbitrary', () => {
  it('extracts value from w-[100px]', () => {
    expect(parseArbitrary('w-[100px]', 'w')).toBe('100px')
  })

  it('extracts value from text-[#ff0000]', () => {
    expect(parseArbitrary('text-[#ff0000]', 'text')).toBe('#ff0000')
  })

  it('extracts value from gap-[1.5rem]', () => {
    expect(parseArbitrary('gap-[1.5rem]', 'gap')).toBe('1.5rem')
  })

  it('returns null for non-arbitrary classes', () => {
    expect(parseArbitrary('w-4', 'w')).toBeNull()
    expect(parseArbitrary('text-sm', 'text')).toBeNull()
  })

  it('returns null for wrong prefix', () => {
    expect(parseArbitrary('w-[100px]', 'h')).toBeNull()
  })
})

describe('arbitrary value — effects', () => {
  it('generates opacity-[0.35]', () => {
    const css = generate(['opacity-[0.35]'])
    expect(css).toContain('opacity: 0.35')
    // The dot inside the arbitrary value brackets is escaped in the CSS selector
    expect(css).toContain('opacity-\\[')
    expect(css).toContain('\\]')
  })

  it('generates z-[100]', () => {
    const css = generate(['z-[100]'])
    expect(css).toContain('z-index: 100')
  })

  it('generates rounded-[10px]', () => {
    const css = generate(['rounded-[10px]'])
    expect(css).toContain('border-radius: 10px')
  })

  it('generates shadow-[0_4px_8px_rgba(0,0,0,0.2)]', () => {
    const css = generate(['shadow-[0_4px_8px_rgba(0,0,0,0.2)]'])
    expect(css).toContain('box-shadow')
  })

  it('generates blur-[12px]', () => {
    const css = generate(['blur-[12px]'])
    expect(css).toContain('filter: blur(12px)')
  })

  it('generates scale-[1.2]', () => {
    const css = generate(['scale-[1.2]'])
    expect(css).toContain('transform: scale(1.2)')
  })

  it('generates rotate-[45deg]', () => {
    const css = generate(['rotate-[45deg]'])
    expect(css).toContain('transform: rotate(45deg)')
  })

  it('generates translate-x-[50px]', () => {
    const css = generate(['translate-x-[50px]'])
    expect(css).toContain('transform: translateX(50px)')
  })

  it('generates translate-y-[20px]', () => {
    const css = generate(['translate-y-[20px]'])
    expect(css).toContain('transform: translateY(20px)')
  })
})

describe('arbitrary value — variant support', () => {
  it('generates hover: variant with arbitrary class', () => {
    const css = generate(['hover:bg-[#ff0000]'])
    expect(css).toContain(':hover')
    expect(css).toContain('background-color: #ff0000')
  })

  it('generates responsive variant with arbitrary class', () => {
    const css = generate(['md:w-[500px]'])
    expect(css).toContain('@media (min-width: 768px)')
    expect(css).toContain('width: 500px')
  })
})

describe('cross-generator arbitrary value coverage', () => {
  it('handles all major arbitrary property types in one call', () => {
    const classes = [
      'w-[100px]', 'h-[200px]', 'p-[10px]', 'm-[5px]',
      'bg-[#ff0000]', 'text-[#0000ff]',
      'opacity-[0.5]', 'z-[99]', 'rounded-[8px]',
      'gap-[20px]', 'top-[10px]', 'left-[10px]',
    ]
    const css = generate(classes)
    expect(css).toContain('width: 100px')
    expect(css).toContain('height: 200px')
    expect(css).toContain('padding: 10px')
    expect(css).toContain('margin: 5px')
    expect(css).toContain('background-color: #ff0000')
    expect(css).toContain('color: #0000ff')
    expect(css).toContain('opacity: 0.5')
    expect(css).toContain('z-index: 99')
    expect(css).toContain('border-radius: 8px')
    expect(css).toContain('gap: 20px')
    expect(css).toContain('top: 10px')
    expect(css).toContain('left: 10px')
  })
})
