export type ColorShades = Record<string, string>
export type ColorScale = Record<string, string | ColorShades>

export interface AliveUITheme {
  colors: ColorScale
  spacing: Record<string, string>
  borderRadius: Record<string, string>
  fontSize: Record<string, [string, string]> // [size, lineHeight]
  fontWeight: Record<string, string>
  lineHeight: Record<string, string>
  screens: Record<string, string>
  opacity: Record<string, string>
  zIndex: Record<string, string>
  boxShadow: Record<string, string>
  darkMode: 'media' | 'class'
}

export interface AliveUIConfig {
  content: string[]
  output?: string
  theme?: DeepPartial<AliveUITheme>
}

export interface ResolvedConfig {
  content: string[]
  output: string
  theme: AliveUITheme
}

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends Record<string, unknown> ? DeepPartial<T[K]> : T[K]
}
