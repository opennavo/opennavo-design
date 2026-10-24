[English](../../../../../packages/swift/README.md) · [简体中文](../../../zh-CN/packages/swift/README.md) · [繁體中文](../../../zh-Hant/packages/swift/README.md) · [日本語](../../../ja-JP/packages/swift/README.md) · [Español](../../../es-ES/packages/swift/README.md) · **Português (Brasil)** · [Русский](../../../ru-RU/packages/swift/README.md) · [Deutsch](../../../de-DE/packages/swift/README.md) · [Français](../../../fr-FR/packages/swift/README.md) · [Italiano](../../../it-IT/packages/swift/README.md)

> O inglês é a fonte. As traduções são rascunhos feitos com tradução automática local e precisam de revisão humana. O código e os textos das licenças são preservados.

<a id="opennavodesign-swiftui"></a>

# OpenNavoDesign (SwiftUI)

Pacote rápido com o OpenNavo Desenho de fichas para SwiftUI ligado macOS 13+ e iOS 16+. O manifesto é
[`Package.swift`](../../../../../Package.swift) na raiz do repositório (SwiftPM Exige-o ali):

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

- `OnColor.*` resolver por aspecto (valores escuros e leves); forçar um com `.preferredColorScheme` ou, em macOS,
  `NSApp.appearance`.
- `OnSpace`, `OnRadius` (`standard` é `radius.default`), `OnTypography` + `.onTextStyle(_:)` (fonte do sistema, localização em
  pontos, etiquetas maiúsculas), `OnShadow` + `.onShadow(_:)` (radio é metade do CSS turva), `OnMotion` (durações e
  `Animation` curvas), `OnLayout`, `OnGradient`.
- `Tokens.generated.swift` é gerado a partir de `tokens/tokens.json`; `Support.swift` está escrito à mão.

Ensaio com `swift test` da raiz do repositório.
