[English](../../../../../packages/swift/README.md) · [简体中文](../../../zh-CN/packages/swift/README.md) · **繁體中文** · [日本語](../../../ja-JP/packages/swift/README.md) · [Español](../../../es-ES/packages/swift/README.md) · [Português (Brasil)](../../../pt-BR/packages/swift/README.md) · [Русский](../../../ru-RU/packages/swift/README.md) · [Deutsch](../../../de-DE/packages/swift/README.md) · [Français](../../../fr-FR/packages/swift/README.md) · [Italiano](../../../it-IT/packages/swift/README.md)

> 英文為來源文件。新增翻譯由本機離線工具輔助產生，仍需母語審校；程式碼與授權條款原文維持不變。

<a id="opennavodesign-swiftui"></a>

# 開啟納沃設計( O)SwiftUI)

帶有該軟體的快速包 OpenNavo 設計符號 SwiftUI 開啟 macOS 13+ 和 (簡體中文) iOS 16+. 清單為:
[`Package.swift`](../../../../../Package.swift) 位於暫存器根( E)SwiftPM 需要它嗎?

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

- `OnColor.*` 解析每個外觀(暗和淡值);強 1 `.preferredColorScheme` 或, 開啟 macOS,
  `NSApp.appearance`.
- `OnSpace`, `OnRadius` (`standard` 是,這是 `radius.default`), `OnTypography` + `.onTextStyle(_:)` (系統字型, 跟蹤在
  點,大寫標籤),, `OnShadow` + `.onShadow(_:)` (無線電是一半) CSS 模糊不清, `OnMotion` (期限和任期)
  `Animation` 曲線, `OnLayout`, `OnGradient`.
- `Tokens.generated.swift` 生成來源於 `tokens/tokens.json`; `Support.swift` 是手寫的。

測試用 `swift test` 從暫存器根。
