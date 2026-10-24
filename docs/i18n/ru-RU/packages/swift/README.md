[English](../../../../../packages/swift/README.md) · [简体中文](../../../zh-CN/packages/swift/README.md) · [繁體中文](../../../zh-Hant/packages/swift/README.md) · [日本語](../../../ja-JP/packages/swift/README.md) · [Español](../../../es-ES/packages/swift/README.md) · [Português (Brasil)](../../../pt-BR/packages/swift/README.md) · **Русский** · [Deutsch](../../../de-DE/packages/swift/README.md) · [Français](../../../fr-FR/packages/swift/README.md) · [Italiano](../../../it-IT/packages/swift/README.md)

> Оригинал написан на английском. Переводы подготовлены локально с помощью машинного перевода и требуют проверки носителями языка. Код и тексты лицензий сохранены.

<a id="opennavodesign-swiftui"></a>

# OpenNavoDesignSwiftUI)

Быстрый пакет с OpenNavo Дизайн токенов для SwiftUI на macOS 13+ и более iOS 16+.Проявление
[`Package.swift`](../../../../../Package.swift) в корневой репозиторий (SwiftPM Этого требует там:

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

- `OnColor.*` разрешать за видимость (темные и светлые значения); принуждать `.preferredColorScheme` или на macOS,
  `NSApp.appearance`.
- `OnSpace`, `OnRadius` (`standard` это `radius.default`), `OnTypography` + `.onTextStyle(_:)` (системный шрифт, отслеживание в
  точки, верхние ярлыки, `OnShadow` + `.onShadow(_:)` (Радиус - это половина) CSS размытый, `OnMotion` (длительность и
  `Animation` кривые, `OnLayout`, `OnGradient`.
- `Tokens.generated.swift` генерируется из `tokens/tokens.json`; `Support.swift` Он написан от руки.

Тестирование с `swift test` из корня репозитория.
