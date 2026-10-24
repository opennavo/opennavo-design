[English](../../../../../packages/tokens/README.md) · **简体中文** · [繁體中文](../../../zh-Hant/packages/tokens/README.md) · [日本語](../../../ja-JP/packages/tokens/README.md) · [Español](../../../es-ES/packages/tokens/README.md) · [Português (Brasil)](../../../pt-BR/packages/tokens/README.md) · [Русский](../../../ru-RU/packages/tokens/README.md) · [Deutsch](../../../de-DE/packages/tokens/README.md) · [Français](../../../fr-FR/packages/tokens/README.md) · [Italiano](../../../it-IT/packages/tokens/README.md)

> 英文为源文。新增翻译由本机离线工具辅助生成，仍需母语审校；代码和许可证原文保持不变。

<a id="opennavodesign-tokens"></a>

# @ opennavo/ 设计托盘

生成自 [`tokens/tokens.json`](../../../../../tokens/tokens.json)不编辑 `dist/`; 修改 JSON 运行
`pnpm gen` 在寄存器根处。

| 导出                                                                     | 或                                                                                                                                                         |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `@opennavo/design-tokens/tokens.css`                                     | 每一个标志作为 `--on-*` CSS 变量。默认情况下为黑暗; 光线通过 `prefers-color-scheme` 或 减 减 `data-theme="light"`暗黑强迫与 `data-theme="dark"`,同样在子树上 |
| `@opennavo/design-tokens/base.css`                                       | 任意框架的基准样式: html 颜色和字体, `[data-theme]` 子树颜色, 主题切换转换守护, 减少运动                                                                     |
| `@opennavo/design-tokens/system-fonts.css`                               | 每个语言的系统UI字体堆栈(SF Pro, PingFang SC/TC, Hiragino Sans)                                                                                              |
| `@opennavo/design-tokens/uno-preset`                                     | `presetOpenNavo()` (单位:千美元) UnoCSS (与 `presetWind3()`)                                                                                                 |
| `@opennavo/design-tokens/tailwind.css`                                   | Tailwind CSS 页:1 `@theme inline` 制图(进口) `tokens.css`)                                                                                                   |
| `@opennavo/design-tokens/tailwind-preset`                                | Tailwind CSS v3 预设( E)`presets: [openNavoPreset]`)                                                                                                         |
| `@opennavo/design-tokens`                                                | 输入值 : `color` (暗处), `lightTheme`, `space`, `radius`, `typography` …, `tokenVar()`, `detailGlow()`                                                       |
| `@opennavo/design-tokens/theme`                                          | `applyThemePreference()`, `themeBootScript()`, `resolveTheme()`, `THEME_PREFERENCES`                                                                         |
| `@opennavo/design-tokens/contrast`                                       | WCAG 测试所用的对比辅助工具                                                                                                                                  |
| `@opennavo/design-tokens/build`                                          | 生成器作为函数: `buildArtifacts()`, `mergeTokens()` 用于品牌覆盖                                                                                             |
| `@opennavo/design-tokens/tokens.json`, `…/dtcg/{dark,light}.tokens.json` | 原始符号和每个主题的设计托肯斯(DTCG) Figma Tokens Studio, 样式词典的文件                                                                                     |

工具名称 : `bg-surface-*`, `text-ink-*` (文字颜色), `border-line-*` (边界), `bg-brand-*`, `bg-accent-*`,
`bg-status-*`, `bg-button-*`, `bg-component-*`, `bg-chart-*`, `rounded-*`, `shadow-*`, `text-{hero … mono}`,
`duration-*`, `ease-*`, `z-*`中。带有数值的完整列表在 [文献/参考资料/目录](../../docs/reference/tokens.md).

发电机也写着 Flutter (`packages/flutter/lib/src/tokens.g.dart`和(或) SwiftUI
(`packages/swift/Sources/OpenNavoDesign/Tokens.generated.swift`) 符号和符号参考。对于另一个应用程序
品牌 : `node scripts/generate.ts --overrides brand.json --out <dir>` ([医生/医生](../../docs/theming.md)).
