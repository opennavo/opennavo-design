[English](../../../README.md) · [简体中文](../zh-CN/README.md) · [繁體中文](../zh-Hant/README.md) · **日本語** · [Español](../es-ES/README.md) · [Português (Brasil)](../pt-BR/README.md) · [Русский](../ru-RU/README.md) · [Deutsch](../de-DE/README.md) · [Français](../fr-FR/README.md) · [Italiano](../it-IT/README.md)

> 英語が原文です。翻訳はローカル環境で機械翻訳を用いて作成した草稿で、母語話者による確認が必要です。コードとライセンス原文は変更していません。

<a id="opennavo-design"></a>

# OpenNavo Design

Mac 向けの無料・オープンソース Homebrew アプリストア [OpenNavo](https://opennavo.com) と、その関連アプリを支えるデザインシステムです。共通のデザイントークン、設計仕様、再利用可能なコンポーネントによって、ダークテーマでもライトテーマでも、見た目・文言・操作を統一します。

<a id="language-and-release-status"></a>

## プレビュー

### ダークテーマ

![ダークテーマ](../../previews/shell-dark.png)

### ライトテーマ

![ライトテーマ](../../previews/shell-light.png)

### コンポーネント

![コンポーネント](../../previews/components-dark.png)

## 言語とリリース状況

英語 (英語)`en-US`)は、デフォルトのコンポーネント言語と翻訳のソースです。言語がそのURLまたは保存された設定で明示的に選択されていない限り、ギャラリーは英語で始まります。ブラウザ言語はそれを上書きしません。コンポーネントはまた、簡体字中国語、繁体字、日本語、スペイン語、ブラジルポルトガル語、ロシア語、ドイツ語、フランス語、イタリア語をサポートしています。

ドキュメント、コードコメント、開発ツール、GitHub のリリースノートは英語を既定とし、各言語の翻訳は英語の原文に基づきます。

バージョン 0.1.0 は初期プレビューです。1.0 以前は API が変更される可能性があり、パッケージはまだ登録者に公開されていません。 レポートの脆弱性は、個別に説明されているように [SECURITY.mdの特長](SECURITY.md).

<a id="whats-inside"></a>

## リポジトリの内容

| パスパス                                                                                | パッケージ                | のために                                                                                                                                   |
| --------------------------------------------------------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| [`tokens/tokens.json`](../../../tokens/tokens.json)                                     | —                         | 単一ソース:色(暗い+ライト)、タイプ、間隔、半径、影、動き、レイアウト                                                                       |
| [`packages/tokens`](../../../packages/tokens)                                           | `@opennavo/design-tokens` | CSS 両方のテーマの変数, UnoCSS プリセット, Tailwind CSS v4 テーマと v3 プリセット、型の値、 DTCG デザインツール用のファイル                |
| [`packages/vue`](../../../packages/vue)                                                 | `@opennavo/design-vue`    | Vue 3つのコンポーネント(ボタン、メニュー、ダイアログ、テーブル、アプリシェル...)、テーマヘルパー、ベーススタイル、コンポーネントギャラリー |
| [`packages/swift`](../../../packages/swift) + [`Package.swift`](../../../Package.swift) | `OpenNavoDesign`          | SwiftUI トークン:動的色、間隔、タイプ、動き                                                                                                |
| [`packages/flutter`](../../../packages/flutter)                                         | `opennavo_design`         | Flutter トークンとして `ThemeExtension`s と a `ThemeData` ビルダー                                                                         |
| [`docs`](docs/README.md)                                                                | —                         | 仕様:原則、色、それら、コンポーネント、パターン、コンテンツ、アクセシビリティ                                                              |

すべて下にある `packages/*/` generated がレンダリングされると `tokens/tokens.json` によって: `pnpm gen`; CI が失敗した場合
生成されたファイルは、手元または日付外で編集されます。

<a id="quick-start"></a>

## クイックスタート

パッケージはレジストリにはまだありません。このリポジトリに直接依存します()pnpm git サブディレクトリ依存関係,
SwiftPM, またはパブ `git` 依存関係)、またはコピー `packages/tokens/dist` アプリに。

<a id="vue-3--unocss-vite-tauri"></a>

### Vue 3 + UnoCSS (Vite, Tauri)

```ts
// main.ts — order matters: reset, tokens, base styles, system fonts, then UnoCSS
import '@unocss/reset/tailwind.css';
import '@opennavo/design-tokens/tokens.css';
import '@opennavo/design-vue/base.css';
import '@opennavo/design-vue/system-fonts.css';
import 'virtual:uno.css';
import { createOnUi } from '@opennavo/design-vue';

app.use(createOnUi({ locale })); // a ref with one of the ten locales
```

```ts
// uno.config.ts
import { defineConfig, presetWind3 } from 'unocss';
import { presetOpenNavo } from '@opennavo/design-tokens/uno-preset';

export default defineConfig({ presets: [presetWind3(), presetOpenNavo()] });
```

```vue
<OnButton variant="primary" icon="download">Install</OnButton>
<OnCard><p class="text-body text-ink-secondary">Only on this Mac; nothing is uploaded.</p></OnCard>
```

詳しくはこちら [`packages/vue/README.md`](packages/vue/README.md) のための Nuxt、コンテンツのスキャンおよびコンポーネントリスト。

<a id="react--tailwind-css-v4"></a>

### React + Tailwind CSS v4の

```css
@import 'tailwindcss';
@import '@opennavo/design-tokens/tailwind.css';
```

```tsx
<button className="h-[34px] rounded-default bg-button-primary-bg px-4 text-[13px] font-semibold text-button-primary-text">
  Install
</button>
```

完全な例は、 [`examples/react-tailwind`](../../../examples/react-tailwind) (テーマスイッチ付き)

<a id="swiftui"></a>

### SwiftUI

```swift
.package(url: "https://github.com/opennavo/opennavo-design.git", branch: "main")

Text("Installed").onTextStyle(OnTypography.bodySm).foregroundStyle(OnColor.statusSuccess)
```

<a id="flutter"></a>

### Flutter

```yaml
opennavo_design:
  git: { url: https://github.com/opennavo/opennavo-design.git, path: packages/flutter }
```

```dart
MaterialApp(theme: onThemeData(Brightness.light), darkTheme: onThemeData(Brightness.dark));
```

<a id="dark-light-and-system"></a>

## ダーク・ライト・システム設定

ダークはデフォルトです。アプリがテーマを強制しない限り、ライトはオペレーティングシステムに従います。 Webでは、選択は
`data-theme` 属性 に `<html>` (`applyThemePreference()`, 小さな頭のスクリプトと保存された選択肢は決してフラッシュしません。;
でん Tauri ネイティブな外観を一度設定し、すべてのウィンドウとWebビューが次のようになります。 SwiftUI そして、 Flutter 解決する
出現ごとの色。 細部: [ドキュメント/theming.md](docs/theming.md).

<a id="the-specification"></a>

## 設計仕様

スタート [ドキュメント/README.md](docs/README.md). 原則の短いバージョン: コンテンツは最初に、何をするかと言う
、ローカル第一に、ポインターの下に安定して、プラットフォームを尊重し、デフォルトでは静かで、すべてのアプリのための1つのシステム、
建設、すべての言語が合っているのでアクセス可能。

<a id="development"></a>

## 開発

条件: Node 24, pnpm 10; Swift 5.9+ ()Xcode) と Flutter ネイティブパッケージの3.24+

```sh
pnpm install
pnpm gen          # render every generated file from tokens/tokens.json (and the icon subset)
pnpm check        # fail if any generated file is stale
pnpm test         # token contrast and output tests, Vue component tests
pnpm typecheck
pnpm gallery      # component gallery at http://127.0.0.1:6106 with a theme and language switch
swift test        # SwiftUI package
(cd packages/flutter && flutter test)
```

トークンの変更 `tokens/tokens.json` それから実行して下さい `pnpm gen` 生成されたファイルをコミットします。 参照
[コントリビューティングmd](CONTRIBUTING.md).

<a id="license"></a>

## ライセンス

コードとドキュメントは、以下のライセンスでライセンスされています。 [MIT ライセンス](../../../LICENSE). . . OpenNavo 名前とロゴはライセンスされていません。
詳しくはこちら [TRADEMARKS.Mdの特長](TRADEMARKS.md). 束ねられた第三者材料は自身の免許証を保ちます: Lucide アイコンサブセットは ISC
([パッケージ/vue/THIRD PARTY NOTICES.md](packages/vue/THIRD_PARTY_NOTICES.md)).

ソースと分離 MIT 認可: [プロヴァンス](PROVENANCE.md).
