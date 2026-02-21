import { PluginCreator } from 'postcss';

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
interface ResolvedConfig {
    content: string[];
    output: string;
    theme: AliveUITheme;
}
type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends Record<string, unknown> ? DeepPartial<T[K]> : T[K];
};

declare function resolveConfig(userConfig?: Partial<AliveUIConfig>): ResolvedConfig;

declare function generateBase(_config: ResolvedConfig): string;

declare function generateUtilities(classes: Set<string>, config: ResolvedConfig): string;

declare function scanContent(config: ResolvedConfig): Promise<Set<string>>;

declare const aliveui: PluginCreator<Partial<AliveUIConfig>>;

export { type AliveUIConfig, type AliveUITheme, aliveui as default, generateBase, generateUtilities, resolveConfig, scanContent };
