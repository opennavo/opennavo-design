[English](../../../../../packages/swift/README.md) · [简体中文](../../../zh-CN/packages/swift/README.md) · [繁體中文](../../../zh-Hant/packages/swift/README.md) · **日本語** · [Español](../../../es-ES/packages/swift/README.md) · [Português (Brasil)](../../../pt-BR/packages/swift/README.md) · [Русский](../../../ru-RU/packages/swift/README.md) · [Deutsch](../../../de-DE/packages/swift/README.md) · [Français](../../../fr-FR/packages/swift/README.md) · [Italiano](../../../it-IT/packages/swift/README.md)

> 英語が原文です。翻訳はローカル環境で機械翻訳を用いて作成した草稿で、母語話者による確認が必要です。コードとライセンス原文は変更していません。

<a id="opennavodesign-swiftui"></a>

# OpenNavoDesign(オープンナヴォーデザイン)SwiftUI)

Swiftパッケージ OpenNavo デザイントークンのための SwiftUI お問い合わせ macOS 13+ および iOS 16+. マニフェストは
[`Package.swift`](../../../../../Package.swift) リポジトリのルートで ()SwiftPM それに要求して下さい:

```swift
.package(url: "https://github.com/opennavo/opennavo-design.git", branch: "main")
// target dependency: .product(name: "OpenNavoDesign", package: "opennavo-design")
```

```swift
import OpenNavoDesign

VStack(alignment: .leading, spacing: OnSpace.s1) {
    Text("Updates").onTextStyle(OnTypography.headline).foregroundStyle(OnColor.textPrimary)
    Text("4 available · 768 MB").onTextStyle(OnTypography.caption).foregroundStyle(OnColor.textTertiary)
}
.padding(OnSpace.s4)
.background(OnColor.surfaceCard, in: .rect(cornerRadius: OnRadius.big))
.overlay(RoundedRectangle(cornerRadius: OnRadius.big).stroke(OnColor.borderSubtle))
```

- `OnColor.*` 出現ごとの解決(暗いおよび軽い価値);力1と `.preferredColorScheme` または、 macOS,
  `NSApp.appearance`.
- `OnSpace`, `OnRadius` (`standard` です。 `radius.default`), `OnTypography` + `.onTextStyle(_:)` (システムフォント、トラッキング)
  ポイント、アッパーケースのラベル)、 `OnShadow` + `.onShadow(_:)` (半径半径) CSS ブル), `OnMotion` (単位)
  `Animation` カーブ), `OnLayout`, `OnGradient`.
- `Tokens.generated.swift` から生成される `tokens/tokens.json`; `Support.swift` 手書きです。

試験とテスト `swift test` リポジトリのルートから。
