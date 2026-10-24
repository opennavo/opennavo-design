[English](../../../../../packages/vue/README.md) · [简体中文](../../../zh-CN/packages/vue/README.md) · [繁體中文](../../../zh-Hant/packages/vue/README.md) · **日本語** · [Español](../../../es-ES/packages/vue/README.md) · [Português (Brasil)](../../../pt-BR/packages/vue/README.md) · [Русский](../../../ru-RU/packages/vue/README.md) · [Deutsch](../../../de-DE/packages/vue/README.md) · [Français](../../../fr-FR/packages/vue/README.md) · [Italiano](../../../it-IT/packages/vue/README.md)

> 英語が原文です。翻訳はローカル環境で機械翻訳を用いて作成した草稿で、母語話者による確認が必要です。コードとライセンス原文は変更していません。

<a id="opennavodesign-vue"></a>

# @opennavo/design-vue からのツイート

Vue 3つのコンポーネント OpenNavo 設計:ボタンおよび入力、データ表示、空および間違いの状態、ダイアログ、メニュー、a
コマンドパレット、トースト、アプリシェル(サイドバー、ツールバー、トップナビゲーション、サイドレール)。
UnoCSS プリセット [`@opennavo/design-tokens`](../../../../../packages/tokens)、暗く、軽い主題を自動的に追跡し、それらを出荷して下さい
10言語(en-US、zh-CN、ja-JP、es-ES、pt-BR、ru-RU、de-DE、fr-FR、it-IT、zh-Hant)の独自の文字列。

- **プレゼンテーションのみ。** コンポーネントは、データを取得したり、ルートを読んだり、プラットフォーム API を呼び出すことはありません。アプリはコンテンツを経由して渡します。
  プロップとスロット、リンクス `linkAs` (`RouterLink`, `NuxtLink`)または明白なアンカー。
- **船員紹介 TypeScript そして、 `.vue` ソース**ビルドステップなし: Vite (または) Nuxt) コンパイルする SSR, ツリー
  シェーキングとあなた自身の TypeScript 設定は適用します。
- **内側にブランドはありません。** アプリのマークを示すコンポーネントは、 `brand` プレーンテキストでスロット、
  `brandName` フォールバック。 OpenNavo 名前とロゴは、このパッケージの一部ではありません([TRADEMARKS.Mdの特長](../../TRADEMARKS.md)).

個々のコンポーネントのプロップ、スロット、イベント、アクセシビリティのノート: [ドキュメント/コンポーネント.md](../../docs/components.md). コンポーネントギャラリー
(`pnpm gallery`) テーマと10言語の全てのコンポーネントを表示します。

<a id="install"></a>

## インストール

パッケージはレジストリにはまだありません。

**このリポジトリまたはリポジトリの内部 pnpm 含まれているワークスペース**

```json
{ "dependencies": { "@opennavo/design-vue": "workspace:*", "@opennavo/design-tokens": "workspace:*" } }
```

**Gitから (Gitから)pnpm)** — 同じコミットからパッケージをインストールし、トークンの依存関係を指す Vue パッケージ
(宣言される) `workspace:*`) Git のコピーで上書き:

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

タグまたはコミットをピン (Pin)`#v0.1.0&path:packages/vue`) 再現可能なインストール。 ピアの依存性: `vue` 3.5.

<a id="default-language"></a>

## 既定の言語

`app.use(createOnUi())` 英語を使う`en-US`). パス `createOnUi({ locale })` 明示的な反応言語選択に従うため。プラグインなしで、コンポーネントも英語に戻ってきます。ギャラリーは有効なことを表彰します `?locale=` 最初にパラメータを設定し、保存された選択をし、それ以外の場合は英語を使用します。

<a id="vite--vue--unocss-also-tauri"></a>

## Vite + Vue + UnoCSS (その他) Tauri)

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

TypeScript: ソースの使用 Vite'クライアントタイプ ('s client type)`import.meta.env`, CSS 輸入)、 Vite そして、 Nuxt プロジェクト
既に含まれている(`"types": ["vite/client"]`).

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

上記のヘッドスクリプトは、正確に何であるかです `themeBootScript('app:theme')` 必要に応じてコードで生成します。

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

パス `NuxtLink` リンクをレンダーするコンポーネント ()`OnButton`, `OnCard`, `OnTabs`, `OnPagination`, `OnBreadcrumb`,
`OnSectionHeader`, `OnSidebar`, `OnNavItem`, `OnTopNav`, `OnFeatureHero`) と `:link-as="NuxtLink"`
(`const NuxtLink = resolveComponent('NuxtLink')`)。部品は決してルートを読みません;渡して下さい `active`/`modelValue`.

<a id="tauri-desktop-apps"></a>

## Tauri デスクトップアプリ

Tauri アプリは、 Vite 上段。 加えて:

- 利用条件 `OnAppShell scroll="container"`: ウィンドウは固定高さとメインの列は、その上にスクロールします。
- `OnSidebar` そして、 `OnToolbar` お問い合わせ `drag-region` 追加する `data-tauri-drag-region` タイトルバーエリア(52px)へ
  macOS トラフィックライト)。ボタンとリンクは、ドラッグできません。
- インポート `system-fonts.css` プラットフォーム独自のフォントでレンダリングします。
- テーマ:店舗 `system | light | dark` 設定で、ネイティブウィンドウのテーマを設定()Tauri??????
  `set_theme` / `setTheme`)、そうウェブビューの `prefers-color-scheme` 以下。 `applyThemePreference` 作品紹介
  ウィンドウごとに。 透明なポップアップウィンドウがリセットされる `html { background: transparent }` 自分のエントリーで、
  こだわり `base.css` ページの背景をペイントします。
- WebKit リングは、ユーザーがキーボードを使用していない限り、スクリプトが動かされたことを焦点を合わせます。 オーバーレイは既にアカウントを割り当てます。
  この (この)`moveFocus`)、アプリ自体が開いたダイアログがフォーカスリングを表示しません。

<a id="locale"></a>

## ロケール

```ts
app.use(createOnUi({ locale })); // locale: Ref<Locale>, reactive
```

プラグインがなければ、コンポーネントは英語を使います。コンポーネントの内部では、 `useUiLocale()` locale の ref を返すと、
`useUiMessages()` 文字列がそれのために; `LOCALES`, `isLocale(value)`, `uiMessages` そして、 `interpolate(template, params)`
同じ文字列を望むアプリにエクスポートされます。 などのプロップ `placeholder`, `label`, `title` または `description`
組み込みのデフォルトをオーバーライドします。

<a id="theme"></a>

## テーマ

暗闇はデフォルトです;ライトは、ページがテーマを強制しない限り、システムがそれを好むとき適用します `data-theme` お問い合わせ
`<html>` (`"dark"` または `"light"`). `data-theme="light"` または `"dark"` また、プレビューパネルなど、任意のサブツリーで動作します。

```ts
import { applyThemePreference, resolveTheme, themeBootScript } from '@opennavo/design-vue/theme';

applyThemePreference('light'); // 'system' | 'light' | 'dark'; system removes the attribute
localStorage.setItem('app:theme', 'light');
resolveTheme('system'); // 'light' | 'dark' as currently shown

// In the document <head>, before any bundle: applies a saved light/dark choice before first paint.
const inline = themeBootScript('app:theme');
```

`applyThemePreference` 1つのフレームのためにオフに転換を回して下さい(`base.css` `[data-theme-switching]`)、従ってあらゆる色
一度に変化します。 `THEME_PREFERENCES` そして、 `isThemePreference` 保存された値を検証するのに役立ちます。

<a id="icons"></a>

## アイコン

`OnIcon` あらゆること `icon` prop はバンドルされたからインライン SVG をレンダリングします Lucide サブセット: コンポーネントが使用するアイコン
`sun`, `moon` そして、 `sun-moon` (`BUNDLED_ICONS`)。取付けの前に多くを登録して下さい:

```ts
import { getIcons } from '@iconify/utils';
import { icons as lucide } from '@iconify-json/lucide'; // the whole set; or a subset you generate at build time
import { registerIcons } from '@opennavo/design-vue';

registerIcons(getIcons(lucide, ['compass', 'settings', 'trash-2'])!);
```

お名前(漢字) Lucide 名前 ( name)`settings`, `lucide:settings`) または `prefix:name` 別の登録済みセットのために。 不明な名前
空のアイコンをレンダリングし、開発中に警告します。ギャラリーの `vite.config.ts` 切断する仮想モジュールを示します
ビルド時にサブセットするので、フルアイコンセットはバンドルに到達しません。

<a id="components"></a>

## コンポーネント

| グループ                   | コンポーネント                                                                                                                                                                                                                                         |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| アクションと入力           | `OnButton`, `OnIcon`, `OnChip`, `OnBadge`, `OnToggle`, `OnCheckbox`, `OnSegmented`, `OnTabs`, `OnSearchField`, `OnTooltip`, `OnMenu`                                                                                                                   |
| コンテナとデータ           | `OnCard`, `OnStatTile`, `OnKeyValueList`, `OnTable`, `OnPagination`, `OnProgressMeter`, `OnStackBar`, `OnHBarChart`, `OnSkeleton`, `OnCodeText`, `OnLogViewer`, `OnHighlightText`, `OnSectionHeader`, `OnPageHeader`, `OnBreadcrumb`, `OnMarkdownView` |
| 状態                       | `OnEmpty`, `OnErrorState`, `OnOffline`                                                                                                                                                                                                                 |
| オーバーレイ               | `OnDialogShell`, `OnModal`, `OnSheet`, `OnConfirm`, `OnToast`, `OnToastRegion` (+ `createToastQueue`), `OnCommandPalette`                                                                                                                              |
| レイアウトとナビゲーション | `OnAppShell`, `OnSidebar`, `OnNavItem`, `OnToolbar`, `OnTopNav`, `OnRailPanel`, `OnRailSection`                                                                                                                                                        |
| ショーケース               | `OnFeatureHero`, `OnAppIcon`                                                                                                                                                                                                                           |

ヘルパー: `createOnUi`, `useUiLocale`, `useUiMessages`, `createToastQueue`, `registerIcons`, `getIcon`, テーマヘルパー
(その他) `@opennavo/design-vue/theme`)、オーバーレイフォーカスヘルパー()`moveFocus`, `trapTab`, `lockScroll`、...)、ロッキング
フォーカス(フォーカス)`nextRovingIndex`)、コンポーネントが使用する小さなユーティリティ()`paginationRange`, `parseHighlight`,
`codeParts`/`codeWordsHtml`, `classifyLogLine`, `formatPercent`, `heroGlowGradient`, `imageSrcset`, `iconColor`,
`iconInitials`, …).

`OnMarkdownView` スタイル HTML のみ: マークダウンをレンダリングし、アプリ内でサニタイズします(例: マークダウン-it と 生 HTML
オフ、その後 DOMPurify)、またはそのスロットを通して要素を渡す。

<a id="development"></a>

## 開発

リポジトリのルートから()`pnpm install` 最初に:

```sh
pnpm --filter @opennavo/design-vue gen            # regenerate src/icons/lucide.ts from src/icons/names.ts
pnpm --filter @opennavo/design-vue check          # fail if the generated icon subset is stale
pnpm --filter @opennavo/design-vue typecheck      # vue-tsc --noEmit
pnpm --filter @opennavo/design-vue test           # vitest run (jsdom)
pnpm --filter @opennavo/design-vue gallery        # http://127.0.0.1:6106
pnpm --filter @opennavo/design-vue build:gallery  # static gallery in gallery/dist
```

新しいコンポーネントの文字列は、すべての 10 個のファイルに移動します `src/messages`; `tests/locale.test.ts` すべてのロケールが持っていることをチェックする
同じキーおよびプレースホルダー。

<a id="license"></a>

## ライセンス

MIT. 束ねられた Lucide アイコンデータとは ISC (with) (with) (with) (with) (with) (with) (with) (with) (with (with) (with) (with) (with) (with) (with (with) (with) (with) (with) (with)) (with)) (with (with)) (with (with)) (with (with) (with (with)) (with (with)) (with (with (with)) (with (with (with)))) (with (with (with (with (with (with (with))) (with (with (with (with (with)) MIT 部分から Feather): 見て下さい
[THIRD PARTY NOTICES.md 株式会社ドリテック](THIRD_PARTY_NOTICES.md). . . OpenNavo 名前とロゴはライセンスされていません。
[TRADEMARKS.Mdの特長](../../TRADEMARKS.md).
