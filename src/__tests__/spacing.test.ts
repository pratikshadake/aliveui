import { describe, it, expect } from 'vitest'
import { generateUtilities } from '../generator'
import { resolveConfig } from '../config'

const config = resolveConfig({})

function generate(classes: string[]): string {
  return generateUtilities(new Set(classes), config)
}

describe('generateSpacing — padding', () => {
  it('generates p-4', () => {
    expect(generate(['p-4'])).toContain('padding: 1rem')
  })

  it('generates px-2', () => {
    const css = generate(['px-2'])
    expect(css).toContain('padding-left: 0.5rem')
    expect(css).toContain('padding-right: 0.5rem')
  })

  it('generates pt-6 pr-3 pb-2 pl-1', () => {
    const css = generate(['pt-6', 'pr-3', 'pb-2', 'pl-1'])
    expect(css).toContain('padding-top: 1.5rem')
    expect(css).toContain('padding-right: 0.75rem')
    expect(css).toContain('padding-bottom: 0.5rem')
    expect(css).toContain('padding-left: 0.25rem')
  })
})

describe('generateSpacing — margin', () => {
  it('generates m-4', () => {
    expect(generate(['m-4'])).toContain('margin: 1rem')
  })

  it('generates mx-auto', () => {
    const css = generate(['mx-auto'])
    expect(css).toContain('margin-left: auto')
    expect(css).toContain('margin-right: auto')
  })

  it('generates mt-8 mb-6', () => {
    const css = generate(['mt-8', 'mb-6'])
    expect(css).toContain('margin-top: 2rem')
    expect(css).toContain('margin-bottom: 1.5rem')
  })
})

describe('generateSpacing — gap', () => {
  it('generates gap-4', () => {
    expect(generate(['gap-4'])).toContain('gap: 1rem')
  })

  it('generates gap-x-2 gap-y-4', () => {
    const css = generate(['gap-x-2', 'gap-y-4'])
    expect(css).toContain('column-gap: 0.5rem')
    expect(css).toContain('row-gap: 1rem')
  })
})

describe('generateSpacing — negative margins', () => {
  it('generates -m-4 with negative margin', () => {
    const css = generate(['-m-4'])
    expect(css).toContain('margin: -1rem')
    expect(css).toContain('\\-m-4')
  })

  it('generates -mx-2', () => {
    const css = generate(['-mx-2'])
    expect(css).toContain('margin-left: -0.5rem')
    expect(css).toContain('margin-right: -0.5rem')
  })

  it('generates -mt-6 -mb-4 -ml-2 -mr-1', () => {
    const css = generate(['-mt-6', '-mb-4', '-ml-2', '-mr-1'])
    expect(css).toContain('margin-top: -1.5rem')
    expect(css).toContain('margin-bottom: -1rem')
    expect(css).toContain('margin-left: -0.5rem')
    expect(css).toContain('margin-right: -0.25rem')
  })

  it('generates -my-8', () => {
    const css = generate(['-my-8'])
    expect(css).toContain('margin-top: -2rem')
    expect(css).toContain('margin-bottom: -2rem')
  })
})

describe('generateSpacing — negative inset/position', () => {
  it('generates -top-4', () => {
    expect(generate(['-top-4'])).toContain('top: -1rem')
  })

  it('generates -bottom-2', () => {
    expect(generate(['-bottom-2'])).toContain('bottom: -0.5rem')
  })

  it('generates -inset-4', () => {
    expect(generate(['-inset-4'])).toContain('inset: -1rem')
  })

  it('generates -inset-x-2', () => {
    const css = generate(['-inset-x-2'])
    expect(css).toContain('left: -0.5rem')
    expect(css).toContain('right: -0.5rem')
  })
})

describe('generateSpacing — arbitrary values', () => {
  it('generates w-[100px]', () => {
    const css = generate(['w-[100px]'])
    expect(css).toContain('width: 100px')
  })

  it('generates h-[200px]', () => {
    expect(generate(['h-[200px]'])).toContain('height: 200px')
  })

  it('generates p-[1.5rem]', () => {
    expect(generate(['p-[1.5rem]'])).toContain('padding: 1.5rem')
  })

  it('generates m-[10px]', () => {
    expect(generate(['m-[10px]'])).toContain('margin: 10px')
  })

  it('generates gap-[1.5rem]', () => {
    expect(generate(['gap-[1.5rem]'])).toContain('gap: 1.5rem')
  })

  it('generates top-[10px] left-[20px]', () => {
    const css = generate(['top-[10px]', 'left-[20px]'])
    expect(css).toContain('top: 10px')
    expect(css).toContain('left: 20px')
  })

  it('generates inset-[0.5rem]', () => {
    expect(generate(['inset-[0.5rem]'])).toContain('inset: 0.5rem')
  })

  it('uses escaped selector for arbitrary classes', () => {
    const css = generate(['w-[100px]'])
    expect(css).toContain('w-\\[100px\\]')
  })
})

describe('generateSpacing — inset / position', () => {
  it('generates inset-0', () => {
    expect(generate(['inset-0'])).toContain('inset: 0px')
  })

  it('generates top-4 right-4 bottom-4 left-4', () => {
    const css = generate(['top-4', 'right-4', 'bottom-4', 'left-4'])
    expect(css).toContain('top: 1rem')
    expect(css).toContain('right: 1rem')
    expect(css).toContain('bottom: 1rem')
    expect(css).toContain('left: 1rem')
  })
})
