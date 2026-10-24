[English](../../../theming.md) · [简体中文](../../zh-CN/docs/theming.md) · [繁體中文](../../zh-Hant/docs/theming.md) · **日本語** · [Español](../../es-ES/docs/theming.md) · [Português (Brasil)](../../pt-BR/docs/theming.md) · [Русский](../../ru-RU/docs/theming.md) · [Deutsch](../../de-DE/docs/theming.md) · [Français](../../fr-FR/docs/theming.md) · [Italiano](../../it-IT/docs/theming.md)

> 英語が原文です。翻訳はローカル環境で機械翻訳を用いて作成した草稿で、母語話者による確認が必要です。コードとライセンス原文は変更していません。

<a id="theming"></a>

# ザミング

みんなが、 OpenNavo appは3つの出現の選択を提供します: **システム** (デフォルト), **ライト** そして、 **ダーク**. このページは
各プラットフォームが実装するコントラクト。

<a id="the-rule"></a>

## ルール

- Dark は、すべてのトークンのデフォルト値です。
- オペレーティング システムがライトを好むとき軽い主題は適用します **そして、** ページが暗くない、またはいつ
  ページの力ライト。
- 選択は、ライトページ内の常に暗いターミナルプレビューなど、サブツリーにも適用できます。

`@opennavo/design-tokens/tokens.css` 正確にエンコードします。:

```css
:root {
  color-scheme: dark;
  --on-surface-card: #1a1a1a; /* every token, dark values */
}

@media (prefers-color-scheme: light) {
  :root:not([data-theme='dark']) {
    color-scheme: light;
    --on-surface-card: #ffffff; /* themed tokens only */
  }
}
[data-theme='light'] {
  color-scheme: light;
  --on-surface-card: #ffffff;
}
[data-theme='dark'] {
  color-scheme: dark;
  --on-surface-card: #1a1a1a;
}
```

テーマと異なるトークンのみが繰り返されます。間隔、タイプ、半径、動きが共有されます。 `color-scheme` おすすめ記事
テーマで、ネイティブフォームのコントロールとスクロールバーがそれに従います。 `color-scheme` どこでも。

| リファレンス | `<html>` 属性属性            |
| ------------ | ---------------------------- |
| システム     | どれも(メディアクエリが決定) |
| ライト       | `data-theme="light"`         |
| ダーク       | `data-theme="dark"`          |

`applyThemePreference(preference)` から から `@opennavo/design-tokens/theme` (再輸出) `@opennavo/design-vue`)セット
または属性を削除します。 また、セット `data-theme-switching` 1つのフレームのために; `base.css` 下の移行をオフにする
なので、各コントロールの代わりに、すべての色が同じフレームで変更されます。

<a id="subtrees"></a>

### サブツリー

`data-theme` 任意の要素で動作します。 `base.css` 再適用 `color: var(--on-text-primary)` お問い合わせ `[data-theme]`, ので
継承されたテキストカラーは、親のテーマで計算されます。サブツリーは、一つのテーマを保ち続ける表面のために、スパーリンガルに使用します。
目的: スクリーンショットライトボックスとキャプションチップ()`component.lightboxScrim` そして、 `component.captionBg` 暗闇で
テーマは両方とも、それらに関するテキストは光を維持しなければならない)、他のテーマの製品のスクリーンショット、端末のプレビュー。
1つのテーマで失敗するコンポーネントを「修正」するために1つを使用しないでください。

<a id="web-nuxt-vite"></a>

## ウェブ(Web)Nuxt, Vite)

サーバ上にページをレンダーし、みんなのためにキャッシュされるので、 HTML 訪問者の選択肢を含んでいません。代わりに:

1. ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ザ・ `<head>` 両方のスキームを宣言し、任意のスタイルシートの前に小さなブロックスクリプトを実行します。

   ```ts
   import { themeBootScript } from '@opennavo/design-tokens/theme';

   app: {
     head: {
       meta: [{ name: 'color-scheme', content: 'dark light' }],
       script: [{ innerHTML: themeBootScript('onv:theme'), tagPosition: 'head', tagPriority: 'critical' }]
     }
   }
   ```

   スクリプトが読み込まれる `localStorage`、適用して下さい `data-theme` 保存する `light` または `dark`, その他何もしません。.
   とりあえず JavaScript ページのオフは、メディアクエリを通じてシステムが続行されます。

2. テーマスイッチは選択を貯えます(`localStorage`, アプリごとのキー — OpenNavo 利用条件 `onv:theme`;キーをのための取除いて下さい
   システム)および呼出し `applyThemePreference`.
3. サーバ上の「システム」状態のスイッチをレンダリングし、水分補給後の保存された選択、またはマークアップを読み込みます。
   マッチしません。
4. 耳を傾ける `storage` イベントでは、他のタブが続きます。

決して入れません `data-theme` でん `app.head.htmlAttrs`. Nuxt レンダー `app.head` クライアントだけでなく、水和時でも
ヘッドマネージャーは、適用されたスクリプトを選択する際に属性を戻します。デフォルトは強制的にあるアプリ
代わりに、システムでは、サーバーレンダーのみでデフォルトで記述します(Nitro `render:html` ホク)、ブーツ
スクリプトは、保存されたシステム選択の属性を削除しなければなりません。

CSPはインラインスクリプトを許可しなければなりません(`script-src 'self' 'unsafe-inline'`、またはそれのためのnonce/hash)。

<a id="macos-desktop-tauri"></a>

## macOS デスクトップ (Tauri)

アプリの設定で設定を保存します()`appearance: "system" | "light" | "dark"`) ネイティブに適用する:

```rust
app.set_theme(match appearance {
    Appearance::System => None,
    Appearance::Light => Some(tauri::Theme::Light),
    Appearance::Dark => Some(tauri::Theme::Dark),
});
```

`set_theme` セット `NSApp.appearance`. WKWebView レポート `prefers-color-scheme` 有効な出現からおよび
ライブをアップデートする **すべてのウィンドウは、任意のウィンドウが、 JavaScript**: メインウィンドウ、メニューバーのポップアップ、オーバーレイ
アラート。メインウィンドウは、設定をミラーリングします。 `applyThemePreference` なので、同じフレームで切り替わります。
そのため、アプリのブラウザモック(ネイティブ外観なし)をテーマにすることができます。

また:

- セットアップ中に保存された外観を適用します。, 任意のウィンドウが表示されます。, または強制的なテーマは、他の人をフラッシュします。.
- ページのペイントとライブサイズの間には、ウィンドウの背景が見える: 設定する `surface.base` の の
  効果的なテーマ(`#131313` / `#F8F8F8`) で更新し、 `WindowEvent::ThemeChanged`.
- 透明なポップアップウィンドウは保ちます `html { background: transparent; color-scheme: normal }` 自分の文書で;
  パネルの描画 `surface.card`.
- ネイティブメニュー、アラート、オープンパネルのフォロー `NSApp.appearance` メニューバーのアイコンはテンプレートイメージです。
  macOS メニューバーに色をつけて、アプリのテーマは何でも。

<a id="swiftui"></a>

## SwiftUI

`OnColor.*` 値は、ビューの外観で解決する動的色です。

```swift
Text("Installed").foregroundStyle(OnColor.statusSuccess)
    .padding(OnSpace.s2)
    .background(OnColor.statusSuccessSubtle, in: .rect(cornerRadius: OnRadius.small))

ContentView().preferredColorScheme(preference == .system ? nil : (preference == .light ? .light : .dark))
```

オン・ザ・オン macOS セットセット `NSApp.appearance` アプリ全体の制御のため、正確にのように Tauri.

<a id="flutter"></a>

## Flutter

`OnColors` そして、 `OnShadows` は、 `ThemeExtension`s と `dark` そして、 `light` 定数; `onThemeData(brightness)` ビルドする
それらを運ぶ物質的な主題:

```dart
MaterialApp(
  theme: onThemeData(Brightness.light),
  darkTheme: onThemeData(Brightness.dark),
  themeMode: switch (preference) { 'light' => ThemeMode.light, 'dark' => ThemeMode.dark, _ => ThemeMode.system },
);

final colors = OnColors.of(context);
Container(color: colors.surfaceCard);
```

<a id="re-branding-another-app"></a>

## 別のアプリを再ブランディングする

ブランドレイヤーは、トークンのセットで、兄弟アプリが変更される可能性があります。他のすべてが同じままなので、アプリは同じように感じます
1家族 ([ブランド](brand.md)). これらのトークンのみでオーバーライドファイルを作成し、生成します。

```json
{
  "color": {
    "brand": { "coral": { "value": "#3C7BFF", "light": "#2457D6" } },
    "text": { "accent": { "value": "#7AA2FF", "light": "#1F4FC2" } }
  }
}
```

```sh
node packages/tokens/scripts/generate.ts --overrides ../my-app/design/brand.json --out ../my-app/design/generated
```

`--out` 同じファイルを書き込みます()CSS, プリセット, ダーツ, Swift, DTCG) このリポジトリの代わりにアプリのフォルダの下にあります。

または電話 `mergeTokens(base, overrides)` そして、 `buildArtifacts()` から から `@opennavo/design-tokens/build` 自分のアプリで
build. オブジェクトがマージするので、 `{ "light": "…" }` 光の値だけを変更します。 合併に対するコントラストテストを再実行します
出荷前のトークン。

<a id="checklist-for-a-new-screen"></a>

## 新規画面のチェックリスト

- [ ] トークンのみを使用する。 `rg '#[0-9a-fA-F]{3,8}\b|rgba?\('` コンポーネント内で何も見つかりません。
- [ ] プレビューを埋め込む場合は、暗く、光と暗いサブツリーで右に見える。
- [ ] 浮遊パネルの使用 `surface.popover`, 選択したセグメント `component.segmentActive`.
- [ 】アクセントカラーから作られた輝きは、 `effect.accentGlowOpacity`.
- [ ] テーマ変更時にレイアウトシフトや色フェードなし。
