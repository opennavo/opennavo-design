[English](../../../adoption.md) · [简体中文](../../zh-CN/docs/adoption.md) · **繁體中文** · [日本語](../../ja-JP/docs/adoption.md) · [Español](../../es-ES/docs/adoption.md) · [Português (Brasil)](../../pt-BR/docs/adoption.md) · [Русский](../../ru-RU/docs/adoption.md) · [Deutsch](../../de-DE/docs/adoption.md) · [Français](../../fr-FR/docs/adoption.md) · [Italiano](../../it-IT/docs/adoption.md)

> 英文為來源文件。新增翻譯由本機離線工具輔助產生，仍需母語審校；程式碼與授權條款原文維持不變。

# 在應用中接入設計系統

新應用如何基於 OpenNavo Design 起步，以及早先複製過 OpenNavo 程式碼包的應用如何遷移過來。

## 新建 Tauri + Vue 應用

1. **依賴**（在這些包正式釋出之前，使用 git 子目錄依賴或工作區連結）：

   ```json
   {
     "dependencies": {
       "@opennavo/design-tokens": "github:opennavo/opennavo-design#path:packages/tokens",
       "@opennavo/design-vue": "github:opennavo/opennavo-design#path:packages/vue"
     }
   }
   ```

2. **樣式和外掛**：在 `main.ts` 中按以下順序引入：

   ```ts
   import '@unocss/reset/tailwind.css';
   import '@opennavo/design-tokens/tokens.css';
   import '@opennavo/design-vue/base.css';
   import '@opennavo/design-vue/system-fonts.css';
   import 'virtual:uno.css';
   import { createOnUi } from '@opennavo/design-vue';

   app.use(createOnUi({ locale })); // a ref holding one of the ten locales
   ```

3. **UnoCSS**：使用預設，並且同時掃描元件包，這樣元件包用到的工具類才會生成：

   ```ts
   import { defineConfig, presetWind3 } from 'unocss';
   import { presetOpenNavo } from '@opennavo/design-tokens/uno-preset';

   export default defineConfig({
     presets: [presetWind3(), presetOpenNavo()],
     content: {
       pipeline: { include: [/\.(vue|ts)($|\?)/, /@opennavo\/design-vue\/src\/.*\.(vue|ts)$/] },
       filesystem: ['node_modules/@opennavo/design-vue/src/**/*.{vue,ts}']
     }
   });
   ```

   在 `vite.config.ts` 里加上 `optimizeDeps: { exclude: ['@opennavo/design-vue'] }`：元件包以原始碼形式釋出，預構建會複製出第二份語言和圖示登錄檔，`createOnUi` 和 `registerIcons` 就傳不到元件裡。

4. **外觀設定**：在應用設定中加入 `appearance: system | light | dark`；在視窗顯示之前，在 Rust 中用 `app.set_theme()` 應用它；同步主視窗背景；並在主視窗中用 `applyThemePreference()` 同樣應用一次（[主題 › macOS 桌面端](theming.md#macos-桌面端tauri)）。在“設定 › 通用”中以分段控制元件提供這個選項：跟隨系統/淺色/深色。
5. **品牌層**：為應用編寫 `brand.json`，寫入它的強調色（[品牌](brand.md)），用 `--overrides brand.json --out <app>/design` 生成，然後引入生成的 `tokens.css`，而不是包裡自帶的那份。
6. **外殼**：`OnAppShell` 配合 `OnSidebar`（應用的標誌放在 `brand` 插槽裡）和 `OnToolbar`，頁面結構按[互動模式](patterns.md#頁面結構)中的說明搭建。
7. **語言**：應用自己的文案要提供全部十種語言；元件自帶它們的翻譯。

網頁應用（Nuxt）還要加上 `@unocss/nuxt`，在 `css: [...]` 中按同樣的順序引入樣式，並加入 `<head>` 中的啟動指令碼（[主題 › 網頁](theming.md#網頁nuxtvite)）。React 應用使用令牌包中的 `tailwind.css` 和 `base.css`（[平臺 › React](platforms.md#react--tailwind-css)）。

## 遷移複製過 OpenNavo 程式碼包的應用

對於複製過 `packages/tokens` 和 `packages/ui` 的應用，這裡以虛構的 `example-app` 為例：包名為 `@example-app/tokens`，使用 `--ex-` 變數和 `Ex*` 元件。工具類保持一致（`bg-surface-card`、`text-ink-secondary`……），所以遷移的大部分工作只是改匯入和名稱：

| 遷移前（複製版）                                        | 遷移後（設計系統）                                           |
| ------------------------------------------------------- | ------------------------------------------------------------ |
| `@example-app/tokens/tokens.css`                        | `@opennavo/design-tokens/tokens.css`（或應用生成的品牌版本） |
| `@example-app/tokens/uno-preset` → `presetExampleApp()` | `@opennavo/design-tokens/uno-preset` → `presetOpenNavo()`    |
| `@example-app/ui` → `ExButton`、`createExUi()`          | `@opennavo/design-vue` → `OnButton`、`createOnUi()`          |
| 應用樣式中的 `var(--ex-…)`                              | `var(--on-…)`                                                |
| 側邊欄裡的 `ExLogo`                                     | 應用自己的 Logo 元件，放在 `OnSidebar` 的 `brand` 插槽裡     |
| 取值不同的本地令牌                                      | 如果是品牌令牌，用 `brand.json` 覆蓋；否則改用系統的值       |

步驟：

1. 列出應用與系統在令牌上的差異（用 `diff` 比較應用的 `tokens.json` 和 `tokens/tokens.json`）。品牌令牌寫進 `brand.json`；其餘差異要麼是該刪掉的錯誤，要麼是對系統的提案。
2. 替換匯入和字首（用 codemod 或搜尋替換：`Ex` → `On`、`--ex-` → `--on-`，以及包名）。
3. 把應用專屬的元件（需要了解應用資料的那些）移進應用；通用元件改用系統提供的版本。
4. 在兩套主題下執行應用，並與元件預覽頁對照；針對合併後的令牌執行對比度測試。
5. 刪除複製來的 `packages/tokens` 和 `packages/ui`。

應用不得自行分叉中性色、間距、字型或元件。如果需要系統裡沒有的東西，先把它加進系統（[CONTRIBUTING.md](../CONTRIBUTING.md)）。

## 檢查清單

- [ ] 令牌來自 `@opennavo/design-tokens`（或由它生成的品牌版本）；沒有寫死的顏色。
- [ ] 外觀設定提供跟隨系統/淺色/深色；啟動時不閃爍；所有視窗都跟著切換。
- [ ] 元件來自 `@opennavo/design-vue`；應用的標誌透過 `brand` 插槽傳入。
- [ ] 十種介面語言。
- [ ] 兩套主題都檢查過；帶品牌覆蓋的對比度測試全部透過。
