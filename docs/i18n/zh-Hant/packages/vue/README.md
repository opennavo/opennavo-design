[English](../../../../../packages/vue/README.md) · [简体中文](../../../zh-CN/packages/vue/README.md) · **繁體中文** · [日本語](../../../ja-JP/packages/vue/README.md) · [Español](../../../es-ES/packages/vue/README.md) · [Português (Brasil)](../../../pt-BR/packages/vue/README.md) · [Русский](../../../ru-RU/packages/vue/README.md) · [Deutsch](../../../de-DE/packages/vue/README.md) · [Français](../../../fr-FR/packages/vue/README.md) · [Italiano](../../../it-IT/packages/vue/README.md)

> 英文為來源文件。新增翻譯由本機離線工具輔助產生，仍需母語審校；程式碼與授權條款原文維持不變。

<a id="opennavodesign-vue"></a>

# @ opennavo/ 設計- vue

Vue 3個組成部分 OpenNavo 設計:按鈕和輸入、資料顯示、空和錯誤狀態、對話方塊、選單、a
命令調色盤、土司和應用程式 shell(側邊欄、工具欄、頂端導航、側邊欄)。
UnoCSS 預設 [`@opennavo/design-tokens`](../../../../../packages/tokens),自動跟蹤暗淡主題並傳送它們
擁有十種語言(美國語,zh-CN語,ja-JP語,es-ES語,pt-BR語,ru-RU語,de-DE語,f-FR語,it-IT語,zh-Hant語)的字串.

- **僅限呈文.** 元件從不獲取資料、讀取路由或呼叫平臺 API。 Apps 將內容透過
  道具和插槽,以及連線透過 `linkAs` (`RouterLink`, `NuxtLink`)或普通錨.
- **船舶 TypeScript 財務報告和已審計財務報表 `.vue` 來源**,沒有建構步驟: Vite (或 減 減 ) Nuxt建立彙編,所以 SSR樹
  抖動和自己的 TypeScript 設定應用。
- **裡面沒有牌子** 顯示應用程式標記的元件透過一個 `brand` 插槽,帶有純文字
  `brandName` 倒車,倒車 OpenNavo 名稱和標誌不屬於此套件( Q)[貿 業 . md](../../TRADEMARKS.md)).

每個元件道具、插槽、事件和無障礙說明: [文件/元件](../../docs/components.md)。元件席
(`pnpm gallery`) 顯示兩個主題和所有十種語言的每一個組成部分.

<a id="install"></a>

## 安裝

軟體包尚未在註冊簿上 。

**在這個暫存器或一個 pnpm 包含它的工作空間**

```json
{ "dependencies": { "@opennavo/design-vue": "workspace:*", "@opennavo/design-tokens": "workspace:*" } }
```

**從 Git (pnpm)** ——從同一承諾中安裝兩個包,並指向符號的依賴 Vue 軟體包
(宣佈為 `workspace:*`)在Git副本中帶有一個覆蓋:

```json
{
  "dependencies": {
    "@opennavo/design-tokens": "github:opennavo/opennavo-design#path:packages/tokens",
    "@opennavo/design-vue": "github:opennavo/opennavo-design#path:packages/vue",
    "vue": "^3.5.0"
  },
  "pnpm": {
    "overrides": { "@opennavo/design-tokens": "github:opennavo/opennavo-design#path:packages/tokens" }
  }
}
```

繫結標籤或承諾( E)`#v0.1.0&path:packages/vue`用於可複製的安裝。 `vue` 3.5.

<a id="default-language"></a>

## 預設語言

`app.use(createOnUi())` 使用英語( E)`en-US`。透過 `createOnUi({ locale })` 來遵循一個明確的被動語言選擇。沒有外掛,元件也會迴歸英語。 `?locale=` 引數首先,然後是儲存的選項,否則會使用英語。

<a id="vite--vue--unocss-also-tauri"></a>

## Vite + Vue + UnoCSS (亦請參看A/C.5/49/L.48和A/C.5/49/L.2號檔案)。 Tauri)

```ts
// main.ts — order matters: reset, tokens, base styles, (optional) system fonts, then UnoCSS
import { createApp, ref } from 'vue';
import '@unocss/reset/tailwind.css';
import '@opennavo/design-tokens/tokens.css';
import '@opennavo/design-vue/base.css';
import '@opennavo/design-vue/system-fonts.css'; // platform fonts instead of Inter; leave out to use Inter
import 'virtual:uno.css';
import { createOnUi } from '@opennavo/design-vue';
import type { Locale } from '@opennavo/design-vue';
import App from './App.vue';

const locale = ref<Locale>('en-US'); // drive it from your i18n state or settings
createApp(App).use(createOnUi({ locale })).mount('#app');
```

```ts
// uno.config.ts
import { defineConfig, presetWind3 } from 'unocss';
import { presetOpenNavo } from '@opennavo/design-tokens/uno-preset';

export default defineConfig({
  presets: [presetWind3(), presetOpenNavo()],
  content: {
    pipeline: {
      include: [
        // UnoCSS's default file types…
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // …plus the component sources when the package lives in node_modules (Git or registry installs)
        /@opennavo[\\/]design-vue[\\/]src[\\/].+\.(vue|ts)($|\?)/
      ]
    }
  }
});
```

```ts
// vite.config.ts
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue(), UnoCSS()],
  // Required when the package is installed in node_modules: pre-bundling would split it into two copies (the
  // pre-bundled index and the .vue files), so createOnUi's locale and registerIcons would not reach the components.
  optimizeDeps: { exclude: ['@opennavo/design-vue'] }
  // With Vite SSR also add: ssr: { noExternal: ['@opennavo/design-vue', '@opennavo/design-tokens'] }
});
```

```vue
<script setup lang="ts">
import { OnButton, OnCard } from '@opennavo/design-vue';
</script>

<template>
  <OnCard>
    <p class="m-0 text-body text-ink-secondary">Only on this device; nothing is uploaded.</p>
    <OnButton variant="primary" icon="download">Install</OnButton>
  </OnCard>
</template>
```

TypeScript: 所使用的來源 Vite客戶端型別( O)`import.meta.env`, CSS 進口) Vite 財務報告和已審計財務報表 Nuxt 專案
已經包括(`"types": ["vite/client"]`).

<a id="nuxt"></a>

## Nuxt

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@unocss/nuxt'], // reads uno.config.ts above
  css: [
    '@unocss/reset/tailwind.css',
    '@opennavo/design-tokens/tokens.css',
    '@opennavo/design-vue/base.css',
    '@opennavo/design-vue/system-fonts.css' // optional
  ],
  // Compile the TypeScript/.vue sources for the server bundle as well.
  build: { transpile: ['@opennavo/design-vue', '@opennavo/design-tokens'] },
  vite: { optimizeDeps: { exclude: ['@opennavo/design-vue'] } },
  app: {
    head: {
      // Apply a saved light/dark choice before first paint (see Theme below).
      script: [
        {
          innerHTML: `try{var t=localStorage.getItem("app:theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`
        }
      ],
      meta: [{ name: 'color-scheme', content: 'dark light' }]
    }
  }
});
```

上面的劇本是 `themeBootScript('app:theme')` 返回;如果您願意,請在程式碼中生成。

```ts
// plugins/opennavo-ui.ts
import { createOnUi, isLocale } from '@opennavo/design-vue';
import type { Locale } from '@opennavo/design-vue';

export default defineNuxtPlugin(nuxtApp => {
  // Map your i18n locale to one of the ten codes; anything else falls back to English.
  const locale = computed<Locale>(() => {
    const code = nuxtApp.$i18n.locale.value;
    return isLocale(code) ? code : 'en-US';
  });
  nuxtApp.vueApp.use(createOnUi({ locale }));
});
```

傳球 `NuxtLink` 用於提供連結的元件(`OnButton`, `OnCard`, `OnTabs`, `OnPagination`, `OnBreadcrumb`,
`OnSectionHeader`, `OnSidebar`, `OnNavItem`, `OnTopNav`, `OnFeatureHero`與 `:link-as="NuxtLink"`
(`const NuxtLink = resolveComponent('NuxtLink')`。元件從未讀取路徑;透過 `active`/`modelValue`.

<a id="tauri-desktop-apps"></a>

## Tauri 桌面應用程式

Tauri 應用程式使用 Vite 此外,還有:

- 使用( U) `OnAppShell scroll="container"`:視窗保持固定高度,主柱卷軸自行進行.
- `OnSidebar` 財務報告和已審計財務報表 `OnToolbar` 帶 `drag-region` 要新增的語句 `data-tauri-drag-region` 標題欄區域(52 px
  macOS 車燈 裡面的按鈕和連線 從來不是可拖動的
- 匯入 `system-fonts.css` 以平臺本身的字型渲染。
- 主題: 儲存 `system | light | dark` 在您的設定中設定本地視窗主題( E)Tauri- 說吧
  `set_theme` / `setTheme`),所以網頁檢視是: `prefers-color-scheme` 其後; `applyThemePreference` 也工作過
  每個視窗。透明彈出視窗應重置 `html { background: transparent }` 他們自己的入口,
  自此以來 `base.css` 繪製頁面背景。
- WebKit 環聚焦一個指令碼移動, 除非使用者剛剛使用鍵盤; 覆蓋已說明
  此項( 4 )`moveFocus`),所以應用程式本身開啟的對話方塊不會顯示焦點環.

<a id="locale"></a>

## 語言

```ts
app.use(createOnUi({ locale })); // locale: Ref<Locale>, reactive
```

沒有外掛,元件使用英語。內部元件, `useUiLocale()` 返回 locale 參考和
`useUiMessages()` 它的絃樂; `LOCALES`, `isLocale(value)`, `uiMessages` 財務報告和已審計財務報表 `interpolate(template, params)`
用於想要相同字串的應用程式。 `placeholder`, `label`, `title` 或 減 減 `description`
覆蓋內建預設值 。

<a id="theme"></a>

## 主題

黑暗是預設;光線在系統喜歡它時適用,除非頁面強制使用一個主題 `data-theme` 開啟
`<html>` (`"dark"` 或 減 減 `"light"`). `data-theme="light"` 或 減 減 `"dark"` 也可以在任何子樹上工作,例如預覽面板.

```ts
import { applyThemePreference, resolveTheme, themeBootScript } from '@opennavo/design-vue/theme';

applyThemePreference('light'); // 'system' | 'light' | 'dark'; system removes the attribute
localStorage.setItem('app:theme', 'light');
resolveTheme('system'); // 'light' | 'dark' as currently shown

// In the document <head>, before any bundle: applies a saved light/dark choice before first paint.
const inline = themeBootScript('app:theme');
```

`applyThemePreference` 關閉一個框架的轉換( E)`base.css` `[data-theme-switching]`),所以每個顏色
即時變化. `THEME_PREFERENCES` 財務報告和已審計財務報表 `isThemePreference` 幫助驗證儲存的值。

<a id="icons"></a>

## 圖示

`OnIcon` 時間和時間 `icon` 從捆綁中製成內建 SVG Lucide 子集: 元件使用的圖示加
`sun`, `moon` 財務報告和已審計財務報表 `sun-moon` (`BUNDLED_ICONS`。在掛起前要登記更多 :

```ts
import { getIcons } from '@iconify/utils';
import { icons as lucide } from '@iconify-json/lucide'; // the whole set; or a subset you generate at build time
import { registerIcons } from '@opennavo/design-vue';

registerIcons(getIcons(lucide, ['compass', 'settings', 'trash-2'])!);
```

名稱是 Lucide 名稱( E)`settings`, `lucide:settings`)或(或) `prefix:name` 用於另一個已註冊集。未知名稱
在開發過程中將空圖示變成警告。 `vite.config.ts` 顯示一個切換
子集在構建時間,所以完整的圖示集從未達到捆綁.

<a id="components"></a>

## 構成部分

| 組           | 構成部分                                                                                                                                                                                                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 行動與投入   | `OnButton`, `OnIcon`, `OnChip`, `OnBadge`, `OnToggle`, `OnCheckbox`, `OnSegmented`, `OnTabs`, `OnSearchField`, `OnTooltip`, `OnMenu`                                                                                                                   |
| 集裝箱和資料 | `OnCard`, `OnStatTile`, `OnKeyValueList`, `OnTable`, `OnPagination`, `OnProgressMeter`, `OnStackBar`, `OnHBarChart`, `OnSkeleton`, `OnCodeText`, `OnLogViewer`, `OnHighlightText`, `OnSectionHeader`, `OnPageHeader`, `OnBreadcrumb`, `OnMarkdownView` |
| 狀態         | `OnEmpty`, `OnErrorState`, `OnOffline`                                                                                                                                                                                                                 |
| 浮層         | `OnDialogShell`, `OnModal`, `OnSheet`, `OnConfirm`, `OnToast`, `OnToastRegion` (+ `createToastQueue`), `OnCommandPalette`                                                                                                                              |
| 佈局和導航   | `OnAppShell`, `OnSidebar`, `OnNavItem`, `OnToolbar`, `OnTopNav`, `OnRailPanel`, `OnRailSection`                                                                                                                                                        |
| 顯示大小寫   | `OnFeatureHero`, `OnAppIcon`                                                                                                                                                                                                                           |

幫助者 : `createOnUi`, `useUiLocale`, `useUiMessages`, `createToastQueue`, `registerIcons`, `getIcon`,主題助手
(亦見 `@opennavo/design-vue/theme`),疊加焦點幫助者(`moveFocus`, `trapTab`, `lockScroll`(... ) 巡迴演唱會
B. 重點(`nextRovingIndex`),以及這些部件使用的小型公用事業(包括:`paginationRange`, `parseHighlight`,
`codeParts`/`codeWordsHtml`, `classifyLogLine`, `formatPercent`, `heroGlowGradient`, `imageSrcset`, `iconColor`,
`iconInitials`, …).

`OnMarkdownView` 樣式 HTML 僅: 在您的應用程式中製作 Markdown 並消毒它( 例如 使用原始的 Markdown- it) HTML
關閉,然後DOMPurify),或者透過它的槽傳遞元素.

<a id="development"></a>

## 開發

從暫存器根( R)`pnpm install` 首個:

```sh
pnpm --filter @opennavo/design-vue gen            # regenerate src/icons/lucide.ts from src/icons/names.ts
pnpm --filter @opennavo/design-vue check          # fail if the generated icon subset is stale
pnpm --filter @opennavo/design-vue typecheck      # vue-tsc --noEmit
pnpm --filter @opennavo/design-vue test           # vitest run (jsdom)
pnpm --filter @opennavo/design-vue gallery        # http://127.0.0.1:6106
pnpm --filter @opennavo/design-vue build:gallery  # static gallery in gallery/dist
```

新建元件字串進入全部 10 個檔案 `src/messages`; `tests/locale.test.ts` 檢查每個地方是否有
相同的鍵和佔位符。

<a id="license"></a>

## 授權

MIT組合起來 Lucide 圖示資料是 ISC (與 MIT 從 Feather: 看見了
[第三層 邊際 NOTIECES. md](THIRD_PARTY_NOTICES.md)。該詞 OpenNavo 名稱和標誌沒有許可證 :
[貿 業 . md](../../TRADEMARKS.md).
