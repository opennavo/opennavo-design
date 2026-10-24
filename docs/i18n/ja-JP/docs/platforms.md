[English](../../../platforms.md) · [简体中文](../../zh-CN/docs/platforms.md) · [繁體中文](../../zh-Hant/docs/platforms.md) · **日本語** · [Español](../../es-ES/docs/platforms.md) · [Português (Brasil)](../../pt-BR/docs/platforms.md) · [Русский](../../ru-RU/docs/platforms.md) · [Deutsch](../../de-DE/docs/platforms.md) · [Français](../../fr-FR/docs/platforms.md) · [Italiano](../../it-IT/docs/platforms.md)

> 英語が原文です。翻訳はローカル環境で機械翻訳を用いて作成した草稿で、母語話者による確認が必要です。コードとライセンス原文は変更していません。

<a id="platforms"></a>

# プラットフォーム

すべてのプラットフォームで同じトークンとルール。このページでは何が違うのかを一覧表示しています。

<a id="macos-desktop-tauri--vue"></a>

## macOS デスクトップ (Tauri + Vue)

- **ウィンドウ:** 隠されるタイトル、信号が付いている上敷のタイトル棒は18の×の22のデフォルト1280の× 820、最低をつけます
  1100×700. ツールバーと空のヘッダー領域をドラッグ領域(ドラッグ領域)としてマークします。`data-tauri-drag-region`).
- **出現:** 店舗情報 `system | light | dark` 設定で; で適用して下さい `app.set_theme()` ウィンドウショーの前に; 同期
  メインウィンドウの背景へ `surface.base` そして、 `ThemeChanged` ([ザミング](theming.md#macos-desktop-tauri)).
- **ポップアップとオーバーレイ** 独立した透明で、ボーダーレスの窓(メニューバーのポップアップ、許可ガイド、
  アラート: 彼らの `html` と透明にとどまります `color-scheme: normal`パネルの引くこと `surface.card` とりあえず
  `rounded-panel` そして、独自の影。 ネイティブシャドウは消えているので、透明な境界は決してショーしません。
- **メニューバー:** 項目はテンプレートのイメージです macOS それらを色; ポップアップを切り替えるをクリック; 何も起動しません
  ユーザが「開く」を選択しない限り、メインウィンドウ
- **システム統合:** システム設定による権限は、ガイドオーバーレイで深いリンクを解除します。
  フォーカス。アプリのネイティブメニューには、標準項目(About、Settings ⌘、 Hide、Quit)があります。パスワードが必要なダイアログ
  システムプロンプトを使用して、それが何であるかを言う。
- **フォント:** システムフォントを経由して `system-fonts.css`. **スクロール:** メイン列はウィンドウ内のスクロールをスクロールします
  (`OnAppShell scroll="container"`).
- **WebKit の特定:** クロムだけでなく、WKWebViewでテストフォーカスと透明性 `:focus-visible` そして、
  occlusionは異なる振る舞います。

<a id="web-nuxt"></a>

## ウェブ(Web)Nuxt)

- サーバレンダリングとキャッシュフレンドリー: HTML テーマ、同意、提案がすべて同じです。
  ブラウザで適用されます。テーマブートスクリプトは、設計システムのニーズをインラインスクリプトのみです。
- `OnAppShell scroll="document"` スティッキーサイドバーとツールバーから `md`、下の密集した棒。
- リンクは実際のリンクです。`linkAs` = `NuxtLink`)、視認性ではなく、インタラクションを事前に取得します。
- メタ: `color-scheme: dark light`; セット `lang` 1ページあたりのhreflangと。

<a id="react--tailwind-css"></a>

## React + Tailwind CSS

ありません React コンポーネント; トークンを使用し、コンポーネントの仕様に従います。

```css
/* app.css — Tailwind CSS v4 */
@import 'tailwindcss';
@import '@opennavo/design-tokens/tailwind.css'; /* theme mapping + tokens.css */
@import '@opennavo/design-tokens/base.css'; /* html colors, theme-switch guard, reduced motion */
@import '@opennavo/design-tokens/system-fonts.css';
```

テーマヘルパーなし Vue: `applyThemePreference`, `themeBootScript` そして、 `THEME_PREFERENCES` から から
`@opennavo/design-tokens/theme`. [`examples/react-tailwind`](../../../../examples/react-tailwind) 設定カードを表示
これらのクラスから構築されたテーマスイッチ、トグル、ボタン。

クラスは一致します Vue コンポーネント (`bg-surface-card`, `text-ink-secondary`, `border-line-subtle`, `rounded-big`,
`shadow-popover`, `text-title1`, `duration-fast`, `z-modal`). Tailwind CSS v3 はプリセットを使用します。
`presets: [openNavoPreset]` から から `@opennavo/design-tokens/tailwind-preset`、プラス
`import '@opennavo/design-tokens/tokens.css'`. 主題の転換は同じです `data-theme` 属性。

<a id="swiftui-opennavodesign-swift-package"></a>

## SwiftUI (`OpenNavoDesign` Swiftパッケージ)

- `OnColor.*` 動的色、 `OnSpace.*`, `OnRadius.*`, `OnTypography.*` とりあえず `.onTextStyle(_:)`, `OnShadow.*` とりあえず
  `.onShadow(_:)`, `OnMotion.*` (単位) `Animation` カーブ), `OnLayout.*`.
- システム制御はシステム制御を維持します。, 背景にトークンを適用します。, テキストとそれらの周りに間隔.
- タイプはトークン サイズでSF Proを使用します。 追跡はEmからポイントに変換されます。

<a id="flutter-opennavo_design-package"></a>

## Flutter (`opennavo_design` パッケージ)

- `onThemeData(Brightness)` のための `theme` / `darkTheme`; `OnColors.of(context)` そして、 `OnShadows.of(context)` トークン
  色と影 (colors and shadows)`ThemeExtension`テーマ間でアニメーションするs。
- `OnSpace`, `OnRadius`, `OnTypography` (`TextStyle`s; アッパーケース `label` 自分で文字列)、 `OnMotion`
  (`Duration`s と s `Cubic` カーブ), `OnLayout`.
- インセットシャドウレイヤーは使用できません。 Flutter お問い合わせ
