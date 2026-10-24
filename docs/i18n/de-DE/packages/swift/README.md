[English](../../../../../packages/swift/README.md) · [简体中文](../../../zh-CN/packages/swift/README.md) · [繁體中文](../../../zh-Hant/packages/swift/README.md) · [日本語](../../../ja-JP/packages/swift/README.md) · [Español](../../../es-ES/packages/swift/README.md) · [Português (Brasil)](../../../pt-BR/packages/swift/README.md) · [Русский](../../../ru-RU/packages/swift/README.md) · **Deutsch** · [Français](../../../fr-FR/packages/swift/README.md) · [Italiano](../../../it-IT/packages/swift/README.md)

> Englisch ist die Ausgangssprache. Die Übersetzungen wurden lokal maschinell erstellt und müssen sprachlich geprüft werden. Code und Lizenztexte bleiben unverändert.

<a id="opennavodesign-swiftui"></a>

# OpenNavoDesign (Deutsche Übersetzung)SwiftUI)

Swift-Paket mit dem OpenNavo Design-Token für SwiftUI am macOS 13+ und iOS 16+. Das Manifest ist
[`Package.swift`](../../../../../Package.swift) an der Wurzel des Repository ()SwiftPM erfordert es dort:

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

- `OnColor.*` Auflösen pro Aussehen (Dunkel- und Lichtwerte); erzwingen Sie einen mit `.preferredColorScheme` oder am macOS,
  `NSApp.appearance`.
- `OnSpace`, `OnRadius` (`standard` ist `radius.default`), `OnTypography` + `.onTextStyle(_:)` (Systemschriftart, Tracking in)
  Punkte, Großbuchstabenschilder, `OnShadow` + `.onShadow(_:)` (Radius ist die Hälfte der) CSS Unschärfe, `OnMotion` (Dauer und)
  `Animation` Kurven, `OnLayout`, `OnGradient`.
- `Tokens.generated.swift` erzeugt wird aus `tokens/tokens.json`; `Support.swift` ist handschriftlich.

Test mit `swift test` Aus dem Repository Root.
