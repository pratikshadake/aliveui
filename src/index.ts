import type { PluginCreator } from 'postcss'
import { resolveConfig } from './config'
import { scanContent } from './scanner'
import { generateBase, generateUtilities } from './generator'
import type { AliveUIConfig } from './types'

export type { AliveUIConfig } from './types'
export type { AliveUITheme } from './types'
export { resolveConfig } from './config'
export { generateBase, generateUtilities } from './generator'
export { scanContent } from './scanner'

const aliveui: PluginCreator<Partial<AliveUIConfig>> = (userConfig = {}) => {
  const config = resolveConfig(userConfig)

  return {
    postcssPlugin: 'aliveui',

    async Once(root, { result, postcss }) {
      const classes = await scanContent(config)

      // Declare layers upfront so user @layer rules always take precedence
      const hasAliveDirective = root.some(node => node.type === 'atrule' && (node as import('postcss').AtRule).name === 'aliveui')
      if (hasAliveDirective) {
        const layerDecl = postcss.atRule({ name: 'layer', params: 'aliveui.base, aliveui.utilities' })
        root.prepend(layerDecl)
      }

      root.walkAtRules('aliveui', atRule => {
        const param = atRule.params.trim()

        if (param === 'base') {
          const css = `@layer aliveui.base {\n${generateBase(config)}\n}`
          const parsed = postcss.parse(css, { from: atRule.source?.input.file })
          atRule.replaceWith(parsed.nodes)
        } else if (param === 'utilities') {
          const css = `@layer aliveui.utilities {\n${generateUtilities(classes, config)}\n}`
          const parsed = postcss.parse(css, { from: atRule.source?.input.file })
          atRule.replaceWith(parsed.nodes)
        } else {
          result.warn(`Unknown @aliveui directive: "${param}". Use "base" or "utilities".`, {
            node: atRule,
          })
          atRule.remove()
        }
      })
    },
  }
}

aliveui.postcss = true

export default aliveui

// CJS interop: make require('aliveui') return the function directly
if (typeof module !== 'undefined') {
  module.exports = aliveui
  module.exports.default = aliveui
}
