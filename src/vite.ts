/**
 * AliveUI Vite Plugin
 *
 * Injects the AliveUI PostCSS plugin into Vite's CSS pipeline so that
 * `@aliveui` directives in your CSS are processed automatically.
 *
 * Usage in vite.config.ts:
 *   import { aliveUIVite } from '@pratikshadake/aliveui/vite'
 *
 *   export default defineConfig({
 *     plugins: [aliveUIVite({ content: ['./src/**\/*.{ts,tsx,html}'] })],
 *   })
 */

import type { Plugin } from 'vite'
import type { AliveUIConfig } from './types'

export function aliveUIVite(config?: Partial<AliveUIConfig>): Plugin {
  return {
    name: 'vite-plugin-aliveui',
    config() {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const aliveui = require('.') as { default: (cfg?: Partial<AliveUIConfig>) => import('postcss').Plugin }
      return {
        css: {
          postcss: {
            plugins: [aliveui.default(config)],
          },
        },
      }
    },
  }
}

export default aliveUIVite
