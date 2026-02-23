import { describe, it, expect } from 'vitest'
import { generateUtilities } from '../generator'
import { resolveConfig } from '../config'

const config = resolveConfig({})

function generate(classes: string[]): string {
  return generateUtilities(new Set(classes), config)
}

describe('animate-* utilities', () => {
  it('generates animate-none', () => {
    expect(generate(['animate-none'])).toContain('animation: none')
  })

  it('generates animate-spin', () => {
    const css = generate(['animate-spin'])
    expect(css).toContain('alive-spin')
    expect(css).toContain('linear infinite')
  })

  it('generates animate-ping', () => {
    const css = generate(['animate-ping'])
    expect(css).toContain('alive-ping')
    expect(css).toContain('infinite')
  })

  it('generates animate-pulse', () => {
    const css = generate(['animate-pulse'])
    expect(css).toContain('alive-pulse')
    expect(css).toContain('infinite')
  })

  it('generates animate-bounce', () => {
    const css = generate(['animate-bounce'])
    expect(css).toContain('alive-bounce')
    expect(css).toContain('1s infinite')
  })

  it('generates animate-shimmer', () => {
    const css = generate(['animate-shimmer'])
    expect(css).toContain('alive-shimmer')
    expect(css).toContain('linear infinite')
  })
})

describe('ease-* utilities', () => {
  it('generates ease-linear', () => {
    expect(generate(['ease-linear'])).toContain('transition-timing-function: linear')
  })

  it('generates ease-in', () => {
    expect(generate(['ease-in'])).toContain('transition-timing-function: cubic-bezier(0.4,0,1,1)')
  })

  it('generates ease-out', () => {
    expect(generate(['ease-out'])).toContain('transition-timing-function: cubic-bezier(0,0,0.2,1)')
  })

  it('generates ease-in-out', () => {
    expect(generate(['ease-in-out'])).toContain('transition-timing-function: cubic-bezier(0.4,0,0.2,1)')
  })
})

describe('duration-* and delay-* utilities', () => {
  it('generates duration-300', () => {
    expect(generate(['duration-300'])).toContain('--alive-duration: 300ms')
  })

  it('generates duration-150', () => {
    expect(generate(['duration-150'])).toContain('--alive-duration: 150ms')
  })

  it('generates delay-200', () => {
    expect(generate(['delay-200'])).toContain('animation-delay: 200ms')
  })

  it('generates delay-100', () => {
    expect(generate(['delay-100'])).toContain('animation-delay: 100ms')
  })
})
