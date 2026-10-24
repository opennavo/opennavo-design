[English](../../../../../packages/swift/README.md) · [简体中文](../../../zh-CN/packages/swift/README.md) · [繁體中文](../../../zh-Hant/packages/swift/README.md) · [日本語](../../../ja-JP/packages/swift/README.md) · **Español** · [Português (Brasil)](../../../pt-BR/packages/swift/README.md) · [Русский](../../../ru-RU/packages/swift/README.md) · [Deutsch](../../../de-DE/packages/swift/README.md) · [Français](../../../fr-FR/packages/swift/README.md) · [Italiano](../../../it-IT/packages/swift/README.md)

> El inglés es el original. Las traducciones son borradores realizados con traducción automática local y requieren revisión humana. El código y los textos de las licencias se conservan.

<a id="opennavodesign-swiftui"></a>

# OpenNavoDesign (OpenNavoDesign)SwiftUI)

Paquete giratorio con el OpenNavo Tokens de diseño para SwiftUI on macOS 13+ y iOS 16+. El manifiesto es
[`Package.swift`](../../../../../Package.swift) en la raíz del repositorio (SwiftPM requiere de ella allí:

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

- `OnColor.*` resolución por apariencia (valores oscuros y ligeros); fuerza uno con `.preferredColorScheme` o, en macOS,
  `NSApp.appearance`.
- `OnSpace`, `OnRadius` (`standard` es `radius.default`), `OnTypography` + `.onTextStyle(_:)` (sistema fuente, seguimiento en
  puntos, etiquetas en mayúsculas), `OnShadow` + `.onShadow(_:)` (radius es la mitad de la CSS borrón), `OnMotion` (duraciones y
  `Animation` curvas), `OnLayout`, `OnGradient`.
- `Tokens.generated.swift` se genera a partir de `tokens/tokens.json`; `Support.swift` está escrito a mano.

Prueba con `swift test` de la raíz del repositorio.
