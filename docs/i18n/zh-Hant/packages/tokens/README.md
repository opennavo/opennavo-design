[English](../../../../../packages/tokens/README.md) · [简体中文](../../../zh-CN/packages/tokens/README.md) · **繁體中文** · [日本語](../../../ja-JP/packages/tokens/README.md) · [Español](../../../es-ES/packages/tokens/README.md) · [Português (Brasil)](../../../pt-BR/packages/tokens/README.md) · [Русский](../../../ru-RU/packages/tokens/README.md) · [Deutsch](../../../de-DE/packages/tokens/README.md) · [Français](../../../fr-FR/packages/tokens/README.md) · [Italiano](../../../it-IT/packages/tokens/README.md)

> 英文為來源文件。新增翻譯由本機離線工具輔助產生，仍需母語審校；程式碼與授權條款原文維持不變。

<a id="opennavodesign-tokens"></a>

# @ opennavo/ 設計托盤

生成自 [`tokens/tokens.json`](../../../../../tokens/tokens.json)不編輯 `dist/`; 修改 JSON 執行
`pnpm gen` 在暫存器根處。

| 匯出                                                                     | 或                                                                                                                                                         |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `@opennavo/design-tokens/tokens.css`                                     | 每一個標誌作為 `--on-*` CSS 變數。預設情況下為黑暗; 光線透過 `prefers-color-scheme` 或 減 減 `data-theme="light"`暗黑強迫與 `data-theme="dark"`,同樣在子樹上 |
| `@opennavo/design-tokens/base.css`                                       | 任意框架的基準樣式: html 顏色和字型, `[data-theme]` 子樹顏色, 主題切換轉換守護, 減少運動                                                                     |
| `@opennavo/design-tokens/system-fonts.css`                               | 每個語言的系統UI字型堆疊(SF Pro, PingFang SC/TC, Hiragino Sans)                                                                                              |
| `@opennavo/design-tokens/uno-preset`                                     | `presetOpenNavo()` (單位:千美元) UnoCSS (與 `presetWind3()`)                                                                                                 |
| `@opennavo/design-tokens/tailwind.css`                                   | Tailwind CSS 頁:1 `@theme inline` 製圖(進口) `tokens.css`)                                                                                                   |
| `@opennavo/design-tokens/tailwind-preset`                                | Tailwind CSS v3 預設( E)`presets: [openNavoPreset]`)                                                                                                         |
| `@opennavo/design-tokens`                                                | 輸入值 : `color` (暗處), `lightTheme`, `space`, `radius`, `typography` …, `tokenVar()`, `detailGlow()`                                                       |
| `@opennavo/design-tokens/theme`                                          | `applyThemePreference()`, `themeBootScript()`, `resolveTheme()`, `THEME_PREFERENCES`                                                                         |
| `@opennavo/design-tokens/contrast`                                       | WCAG 測試所用的對比輔助工具                                                                                                                                  |
| `@opennavo/design-tokens/build`                                          | 生成器作為函式: `buildArtifacts()`, `mergeTokens()` 用於品牌覆蓋                                                                                             |
| `@opennavo/design-tokens/tokens.json`, `…/dtcg/{dark,light}.tokens.json` | 原始符號和每個主題的設計託肯斯(DTCG) Figma Tokens Studio, 樣式詞典的檔案                                                                                     |

工具名稱 : `bg-surface-*`, `text-ink-*` (文字顏色), `border-line-*` (邊界), `bg-brand-*`, `bg-accent-*`,
`bg-status-*`, `bg-button-*`, `bg-component-*`, `bg-chart-*`, `rounded-*`, `shadow-*`, `text-{hero … mono}`,
`duration-*`, `ease-*`, `z-*`中。帶有數值的完整列表在 [文獻/參考資料/目錄](../../docs/reference/tokens.md).

發電機也寫著 Flutter (`packages/flutter/lib/src/tokens.g.dart`和(或) SwiftUI
(`packages/swift/Sources/OpenNavoDesign/Tokens.generated.swift`) 符號和符號參考。對於另一個應用程式
品牌 : `node scripts/generate.ts --overrides brand.json --out <dir>` ([醫生/醫生](../../docs/theming.md)).
