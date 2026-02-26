import { Plugin } from 'vite';

type ColorShades = Record<string, string>;
type ColorScale = Record<string, string | ColorShades>;
interface AliveUITheme {
    colors: ColorScale;
    spacing: Record<string, string>;
    borderRadius: Record<string, string>;
    fontSize: Record<string, [string, string]>;
    fontWeight: Record<string, string>;
    lineHeight: Record<string, string>;
    screens: Record<string, string>;
    opacity: Record<string, string>;
    zIndex: Record<string, string>;
    boxShadow: Record<string, string>;
    darkMode: 'media' | 'class';
}
interface AliveUIConfig {
    content: string[];
    output?: string;
    theme?: DeepPartial<AliveUITheme>;
}
type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends Record<string, unknown> ? DeepPartial<T[K]> : T[K];
};

/**
 * AliveUI Vite Plugin
 *
 * Injects the AliveUI PostCSS plugin into Vite's CSS pipeline so that
 * `@aliveui` directives in your CSS are processed automatically.
 *
 * Usage in vite.config.ts:
 *   import { aliveUIVite } from '@alivecss/aliveui/vite'
 *
 *   export default defineConfig({
 *     plugins: [aliveUIVite({ content: ['./src/**\/*.{ts,tsx,html}'] })],
 *   })
 */

declare function aliveUIVite(config?: Partial<AliveUIConfig>): Plugin;

export { aliveUIVite, aliveUIVite as default };
