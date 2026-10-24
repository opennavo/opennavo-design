[English](../../../../../packages/swift/README.md) · [简体中文](../../../zh-CN/packages/swift/README.md) · [繁體中文](../../../zh-Hant/packages/swift/README.md) · [日本語](../../../ja-JP/packages/swift/README.md) · [Español](../../../es-ES/packages/swift/README.md) · [Português (Brasil)](../../../pt-BR/packages/swift/README.md) · [Русский](../../../ru-RU/packages/swift/README.md) · [Deutsch](../../../de-DE/packages/swift/README.md) · [Français](../../../fr-FR/packages/swift/README.md) · **Italiano**

> La versione inglese è il riferimento. Le traduzioni sono bozze prodotte localmente con traduzione automatica e richiedono una revisione umana. Il codice e i testi delle licenze restano invariati.

<a id="opennavodesign-swiftui"></a>

# OpenNavoDesign (progetto OpenNavo)SwiftUI)

Pacchetto Swift con OpenNavo Token di progettazione per SwiftUI su macOS 13+ e iOS 16+. Il manifesto è
[`Package.swift`](../../../../../Package.swift) alla radice del repository (SwiftPM richiede lì):

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

- `OnColor.*` determinazione per apparizione (valori di luce e scuro); forza uno con `.preferredColorScheme` o, su, macOS,
  `NSApp.appearance`.
- `OnSpace`, `OnRadius` (`standard` è `radius.default`), `OnTypography` + `.onTextStyle(_:)` (sistema font, tracciamento in
  punti, etichette maiuscole), `OnShadow` + `.onShadow(_:)` (radius è la metà del CSS arrossire), `OnMotion` (durazioni e
  `Animation` curve), `OnLayout`, `OnGradient`.
- `Tokens.generated.swift` è generato da `tokens/tokens.json`; `Support.swift` è scritto a mano.

Prova con `swift test` dalla radice del repository.
