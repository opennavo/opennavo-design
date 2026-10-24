[English](../../../../../packages/swift/README.md) · **简体中文** · [繁體中文](../../../zh-Hant/packages/swift/README.md) · [日本語](../../../ja-JP/packages/swift/README.md) · [Español](../../../es-ES/packages/swift/README.md) · [Português (Brasil)](../../../pt-BR/packages/swift/README.md) · [Русский](../../../ru-RU/packages/swift/README.md) · [Deutsch](../../../de-DE/packages/swift/README.md) · [Français](../../../fr-FR/packages/swift/README.md) · [Italiano](../../../it-IT/packages/swift/README.md)

> 英文为源文。新增翻译由本机离线工具辅助生成，仍需母语审校；代码和许可证原文保持不变。

<a id="opennavodesign-swiftui"></a>

# 打开纳沃设计( O)SwiftUI)

带有该软件的快速包 OpenNavo 设计符号 SwiftUI 打开 macOS 13+ 和 (简体中文) iOS 16+. 清单为:
[`Package.swift`](../../../../../Package.swift) 位于寄存器根( E)SwiftPM 需要它吗?

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

- `OnColor.*` 解析每个外观(暗和淡值);强 1 `.preferredColorScheme` 或, 打开 macOS,
  `NSApp.appearance`.
- `OnSpace`, `OnRadius` (`standard` 是,这是 `radius.default`), `OnTypography` + `.onTextStyle(_:)` (系统字体, 跟踪在
  点,大写标签),, `OnShadow` + `.onShadow(_:)` (无线电是一半) CSS 模糊不清, `OnMotion` (期限和任期)
  `Animation` 曲线, `OnLayout`, `OnGradient`.
- `Tokens.generated.swift` 生成来源于 `tokens/tokens.json`; `Support.swift` 是手写的。

测试用 `swift test` 从寄存器根。
