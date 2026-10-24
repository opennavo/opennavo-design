[English](../../../../../packages/swift/README.md) · [简体中文](../../../zh-CN/packages/swift/README.md) · [繁體中文](../../../zh-Hant/packages/swift/README.md) · [日本語](../../../ja-JP/packages/swift/README.md) · [Español](../../../es-ES/packages/swift/README.md) · [Português (Brasil)](../../../pt-BR/packages/swift/README.md) · [Русский](../../../ru-RU/packages/swift/README.md) · [Deutsch](../../../de-DE/packages/swift/README.md) · **Français** · [Italiano](../../../it-IT/packages/swift/README.md)

> La version anglaise fait référence. Les traductions sont des brouillons produits localement par traduction automatique et nécessitent une relecture humaine. Le code et les textes des licences restent inchangés.

<a id="opennavodesign-swiftui"></a>

# OpenNavoDesign (SwiftUI)

Paquet rapide avec le OpenNavo Jetons de conception pour SwiftUI le macOS 13+ et iOS 16+. Le manifeste
[`Package.swift`](../../../../../Package.swift) au dépôt racine (SwiftPM l'exige là-bas):

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

- `OnColor.*` résolution par aspect (valeurs de l'obscurité et de la lumière); force une avec `.preferredColorScheme` ou, macOS,
  `NSApp.appearance`.
- `OnSpace`, `OnRadius` (`standard` est `radius.default`), `OnTypography` + `.onTextStyle(_:)` ( police système, suivi dans
  points, étiquettes en majuscules, `OnShadow` + `.onShadow(_:)` (le rayon est de la moitié du CSS floue), `OnMotion` (durées et
  `Animation` les courbes), `OnLayout`, `OnGradient`.
- `Tokens.generated.swift` est généré à partir de `tokens/tokens.json`; `Support.swift` est manuscrit.

Essai avec `swift test` de la racine du dépôt.
