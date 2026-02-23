import { describe, it, expect } from 'vitest'
import { generateUtilities } from '../generator'
import { resolveConfig } from '../config'

const config = resolveConfig({})

function generate(classes: string[]): string {
  return generateUtilities(new Set(classes), config)
}

describe('bg-* color utilities', () => {
  it('generates bg-blue-500', () => {
    expect(generate(['bg-blue-500'])).toContain('background-color')
  })

  it('generates bg-white', () => {
    expect(generate(['bg-white'])).toContain('background-color')
  })

  it('generates bg-black', () => {
    expect(generate(['bg-black'])).toContain('background-color')
  })
})

describe('text-* color utilities', () => {
  it('generates text-gray-500', () => {
    expect(generate(['text-gray-500'])).toContain('color:')
  })

  it('generates text-white', () => {
    expect(generate(['text-white'])).toContain('color:')
  })
})

describe('border-* color utilities', () => {
  it('generates border-blue-500', () => {
    expect(generate(['border-blue-500'])).toContain('border-color')
  })
})

describe('arbitrary bg-* values', () => {
  it('generates bg-[#ff0000]', () => {
    const css = generate(['bg-[#ff0000]'])
    expect(css).toContain('background-color: #ff0000')
  })

  it('generates bg-[rgb(0,0,255)]', () => {
    const css = generate(['bg-[rgb(0,0,255)]'])
    expect(css).toContain('background-color: rgb(0,0,255)')
  })

  it('generates bg-[hsl(200,50%,50%)]', () => {
    const css = generate(['bg-[hsl(200,50%,50%)]'])
    expect(css).toContain('background-color: hsl(200,50%,50%)')
  })

  it('generates bg-[url(...)] as background-image', () => {
    // Use a relative path to avoid the :// colon confusing the variant parser
    const css = generate(['bg-[url(/img/hero.jpg)]'])
    expect(css).toContain('background-image')
    expect(css).toContain('/img/hero.jpg')
  })

  it('uses escaped selector for arbitrary bg values', () => {
    const css = generate(['bg-[#ff0000]'])
    expect(css).toContain('bg-\\[')
  })
})

describe('arbitrary text-* values', () => {
  it('generates text-[#333]', () => {
    const css = generate(['text-[#333]'])
    expect(css).toContain('color: #333')
  })

  it('generates text-[rgba(0,0,0,0.5)]', () => {
    const css = generate(['text-[rgba(0,0,0,0.5)]'])
    expect(css).toContain('color: rgba(0,0,0,0.5)')
  })
})

describe('fill-* and stroke-* arbitrary values', () => {
  it('generates fill-[currentColor]', () => {
    expect(generate(['fill-[currentColor]'])).toContain('fill: currentColor')
  })

  it('generates stroke-[#ff0000]', () => {
    expect(generate(['stroke-[#ff0000]'])).toContain('stroke: #ff0000')
  })
})

describe('background property utilities (non-color)', () => {
  it('generates bg-cover', () => {
    expect(generate(['bg-cover'])).toContain('background-size: cover')
  })

  it('generates bg-contain', () => {
    expect(generate(['bg-contain'])).toContain('background-size: contain')
  })

  it('generates bg-center', () => {
    expect(generate(['bg-center'])).toContain('background-position: center')
  })

  it('generates bg-no-repeat', () => {
    expect(generate(['bg-no-repeat'])).toContain('background-repeat: no-repeat')
  })

  it('generates bg-fixed', () => {
    expect(generate(['bg-fixed'])).toContain('background-attachment: fixed')
  })

  it('generates bg-origin-border', () => {
    expect(generate(['bg-origin-border'])).toContain('background-origin: border-box')
  })

  it('generates bg-clip-text', () => {
    const css = generate(['bg-clip-text'])
    expect(css).toContain('background-clip: text')
  })
})
