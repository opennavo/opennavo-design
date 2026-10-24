[English](../../../adoption.md) · [简体中文](../../zh-CN/docs/adoption.md) · [繁體中文](../../zh-Hant/docs/adoption.md) · **日本語** · [Español](../../es-ES/docs/adoption.md) · [Português (Brasil)](../../pt-BR/docs/adoption.md) · [Русский](../../ru-RU/docs/adoption.md) · [Deutsch](../../de-DE/docs/adoption.md) · [Français](../../fr-FR/docs/adoption.md) · [Italiano](../../it-IT/docs/adoption.md)

> 英語が原文です。翻訳はローカル環境で機械翻訳を用いて作成した草稿で、母語話者による確認が必要です。コードとライセンス原文は変更していません。

<a id="adopting-the-system-in-an-app"></a>

# アプリ内のシステム導入

新規アプリが起動する方法 OpenNavo デザイン、コピーしたアプリの使い方 OpenNavo's パッケージは先に動かします。

<a id="a-new-tauri--vue-app"></a>

## 新着情報 Tauri + Vue アプリアプリ

1. **依存関係** (パッケージが公開されるまでは、git サブディレクトリの依存関係またはワークスペースのリンクを使用してください。)

   ```json
   {
     "dependencies": {
       "@opennavo/design-tokens": "github:opennavo/opennavo-design#path:packages/tokens",
       "@opennavo/design-vue": "github:opennavo/opennavo-design#path:packages/vue"
     }
   }
   ```

2. **スタイルとプラグイン** でん `main.ts`この順序で:

   ```ts
   import '@unocss/reset/tailwind.css';
   import '@opennavo/design-tokens/tokens.css';
   import '@opennavo/design-vue/base.css';
   import '@opennavo/design-vue/system-fonts.css';
   import 'virtual:uno.css';
   import { createOnUi } from '@opennavo/design-vue';

   app.use(createOnUi({ locale })); // a ref holding one of the ten locales
   ```

3. **UnoCSS** プリセットを使って、コンポーネントパッケージをスキャンして、そのユーティリティが生成されます。

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

   でんぷん `vite.config.ts` 追加する `optimizeDeps: { exclude: ['@opennavo/design-vue'] }`: パッケージの船のソース、および
   プレバンドリングは、その局所とアイコンのレジストリの2番目のコピーを作るので、 `createOnUi` そして、 `registerIcons` お問い合わせ
   コンポーネントに到達しない。

4. **出現の設定**: 追加 `appearance: system | light | dark` アプリの設定に、それを適用して下さい
   `app.set_theme()` ウィンドウが示す前のRustで、メインウィンドウの背景を同期し、メインウィンドウでミラーリングします。
   とりあえず `applyThemePreference()` ([ザミング › macOS デスクトップ](theming.md#macos-desktop-tauri))。選択をで提供して下さい
   設定 › セグメント化された制御として一般: システム/ライト/ダーク。
5. **ブランドレイヤー**: アプリの書き込み `brand.json` アクセント付き(アクセント付き)[ブランド](brand.md)) で生成し
   `--overrides brand.json --out <app>/design`生成された生成物をインポートし、 `tokens.css` パッケージの代わりに。
6. **アプリレイアウト**: `OnAppShell` とりあえず `OnSidebar` (アプリのマークは、 `brand` スロット), `OnToolbar`, ページ解剖学
   でん [パターン](patterns.md#page-anatomy).
7. **中国語(簡体)**: アプリの文字列に10個のローカルを全て出荷し、コンポーネントはそれらを持ってきます。

ウェブアプリ(Webアプリ)Nuxt) 追加 `@unocss/nuxt`, 同じ CSS 注文で `css: [...]`、およびヘッド ブートスクリプト
([Theming › ウェブ](theming.md#web-nuxt-vite)). A React アプリの利用 `tailwind.css` そして、 `base.css` トークンパッケージから
([プラットフォーム › React](platforms.md#react--tailwind-css)).

<a id="moving-an-app-that-copied-opennavos-packages"></a>

## コピーしたアプリの移動 OpenNavoパッケージ

コピーしたアプリの場合 `packages/tokens` そして、 `packages/ui`, この例では、フィクション `example-app`,
とりあえず `@example-app/tokens`, `--ex-` 変数と変数 `Ex*` コンポーネント。ユーティリティクラスは同じです。
(`bg-surface-card`, `text-ink-secondary` ...)、従って移動のほとんどは輸入および名前です:

| 前の(コピー)                                            | アフター(システム)                                                                              |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `@example-app/tokens/tokens.css`                        | `@opennavo/design-tokens/tokens.css` (またはアプリの生成されたブランドコピー)                   |
| `@example-app/tokens/uno-preset` → `presetExampleApp()` | `@opennavo/design-tokens/uno-preset` → `presetOpenNavo()`                                       |
| `@example-app/ui` → `ExButton`, `createExUi()`          | `@opennavo/design-vue` → `OnButton`, `createOnUi()`                                             |
| `var(--ex-…)` アプリのスタイル                          | `var(--on-…)`                                                                                   |
| `ExLogo` サイドバー内                                   | アプリ独自のロゴコンポーネント `OnSidebar`?????? `brand` スロットスロット                       |
| ローカルトークンの値が異なる                            | とりあ `brand.json` ブランドトークンの場合、オーバーライド。 それ以外の場合は、システム値を採用 |

ステップ:

1. アプリのトークンの違いを一覧表示する()`diff` とりあえず `tokens.json` 対比 `tokens/tokens.json`)。ブランドトークンは入ってきます
   `brand.json`; 他の違いは、システムのためのバグや提案です。
2. インポートとプレフィックスを置換します(コードモまたは検索アンド置換: `Ex` → `On`, `--ex-` → `--on-`、パッケージ名)。
3. アプリ固有のコンポーネント(アプリのデータを知っている)をアプリに移動し、システムから一般的なものを保持します。
4. 両方のテーマでアプリを実行し、ギャラリーと比較します。 合併されたトークンに対してコントラストテストを実行します。
5. コピーした削除 `packages/tokens` そして、 `packages/ui`.

アプリは、ニュートラル、間隔、タイプ、またはコンポーネントをフォークすることができません。システムが不足しているものが必要な場合は、それを追加してください。
第一システム([コントリビューティングmd](../CONTRIBUTING.md)).

<a id="checklist"></a>

## チェックリスト

- [ ] トークンから `@opennavo/design-tokens` (または、ブランドコピーから生成される)ハードコードされた色はありません。
- [ ] システム/ライト/ダークと出現の設定;開始のフラッシュ無し;あらゆる窓は続きます。
- [ ] 部品から `@opennavo/design-vue`;アプリのマークを通す `brand` スロット。
- [ ] 10 インターフェイス言語。
- [ ] 両方のテーマがチェックされている; ブランドのオーバーライドのためのコントラストテストグリーン。
