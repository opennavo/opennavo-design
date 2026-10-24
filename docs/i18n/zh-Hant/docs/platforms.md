[English](../../../platforms.md) · [简体中文](../../zh-CN/docs/platforms.md) · **繁體中文** · [日本語](../../ja-JP/docs/platforms.md) · [Español](../../es-ES/docs/platforms.md) · [Português (Brasil)](../../pt-BR/docs/platforms.md) · [Русский](../../ru-RU/docs/platforms.md) · [Deutsch](../../de-DE/docs/platforms.md) · [Français](../../fr-FR/docs/platforms.md) · [Italiano](../../it-IT/docs/platforms.md)

> 英文為來源文件。新增翻譯由本機離線工具輔助產生，仍需母語審校；程式碼與授權條款原文維持不變。

# 平臺

所有平臺使用同樣的令牌和規則；本頁列出各平臺的不同之處。

## macOS 桌面端（Tauri + Vue）

- **視窗**：覆蓋式標題欄，隱藏標題；紅綠燈按鈕內縮 18 × 22；預設 1280 × 820，最小 1100 × 700。把工具欄和頁頭的空白區域標記為拖動區域（`data-tauri-drag-region`）。
- **外觀**：在設定中儲存 `system | light | dark`；在視窗顯示之前用 `app.set_theme()` 應用；把主視窗背景同步為 `surface.base`，並在 `ThemeChanged` 時再次同步（[主題](theming.md#macos-桌面端tauri)）。
- **浮窗和浮層**是獨立的透明無邊框視窗（選單欄浮窗、許可權引導、提醒）：它們的 `html` 保持透明，並設定 `color-scheme: normal`；由面板繪製 `surface.card`，配合 `rounded-panel` 和自己的陰影；原生陰影關閉，所以透明視窗的邊界永遠不會露出來。
- **選單欄**：專案使用模板影象，由 macOS 為其著色；點選切換浮窗的顯示與隱藏；除非使用者選擇“開啟”，否則任何操作都不會啟用主視窗。
- **系統整合**：許可權透過系統設定的深層連結申請，配合一個不搶焦點的引導浮層；應用的原生選單包含標準項：關於、設定（⌘,）、隱藏、退出；需要密碼的對話方塊使用系統的密碼提示，並說明用途。
- **字型**：透過 `system-fonts.css` 使用系統字型。**滾動**：主內容欄在視窗內部滾動（`OnAppShell scroll="container"`）。
- **WebKit 特性**：要在 WKWebView 中測試焦點和透明效果，不能只在 Chromium 裡測——兩者對 `:focus-visible` 和視窗遮擋的處理不同。

## 網頁（Nuxt）

- 伺服器渲染，便於快取：每位訪客拿到的 HTML 都一樣；主題、隱私授權和各類建議都在瀏覽器中應用。主題啟動指令碼是設計系統唯一需要的內聯指令碼。
- 使用 `OnAppShell scroll="document"`：從 `md` 起，側邊欄和工具欄固定顯示，`md` 以下改用緊湊欄。
- 連結是真正的連結（`linkAs` = `NuxtLink`），在使用者互動時預取，而不是在進入可視區域時預取。
- 元資訊：`color-scheme: dark light`；每個頁面都設定 `lang` 和 hreflang。

## React + Tailwind CSS

這裡沒有 React 元件；直接使用令牌，並遵循元件規範。

```css
/* app.css — Tailwind CSS v4 */
@import 'tailwindcss';
@import '@opennavo/design-tokens/tailwind.css'; /* theme mapping + tokens.css */
@import '@opennavo/design-tokens/base.css'; /* html colors, theme-switch guard, reduced motion */
@import '@opennavo/design-tokens/system-fonts.css';
```

不依賴 Vue 的主題工具：`@opennavo/design-tokens/theme` 中的 `applyThemePreference`、`themeBootScript` 和 `THEME_PREFERENCES`。[`examples/react-tailwind`](../../../../examples/react-tailwind) 用這些類實現了一張設定卡片，包含主題切換、一個開關和幾個按鈕。

類名與 Vue 元件一致（`bg-surface-card`、`text-ink-secondary`、`border-line-subtle`、`rounded-big`、`shadow-popover`、`text-title1`、`duration-fast`、`z-modal`）。Tailwind CSS v3 使用預設：`@opennavo/design-tokens/tailwind-preset` 中的 `presets: [openNavoPreset]`，再加上 `import '@opennavo/design-tokens/tokens.css'`。主題切換同樣使用 `data-theme` 屬性。

## SwiftUI（`OpenNavoDesign` Swift 包）

- `OnColor.*` 動態顏色、`OnSpace.*`、`OnRadius.*`、`OnTypography.*`（配合 `.onTextStyle(_:)`）、`OnShadow.*`（配合 `.onShadow(_:)`）、`OnMotion.*`（時長和 `Animation` 曲線）、`OnLayout.*`。
- 系統控制元件仍然用系統控制元件；令牌用於它們周圍的背景、文字和間距。
- 字型使用 SF Pro，字號取令牌值；字距從 em 換算為點。

## Flutter（`opennavo_design` 包）

- `theme` / `darkTheme` 用 `onThemeData(Brightness)` 生成；令牌顏色和陰影透過 `OnColors.of(context)` 和 `OnShadows.of(context)` 獲取（它們是 `ThemeExtension`，切換主題時會以動畫過渡）。
- `OnSpace`、`OnRadius`、`OnTypography`（`TextStyle`；`label` 的文字需要自己轉成大寫）、`OnMotion`（`Duration` 和 `Cubic` 曲線）、`OnLayout`。
- Flutter 不支援內陰影層，因此省略了這些層。
