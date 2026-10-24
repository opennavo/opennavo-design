# OpenNavoDesign (SwiftUI)

Swift package with the OpenNavo Design tokens for SwiftUI on macOS 13+ and iOS 16+. The manifest is
[`Package.swift`](../../Package.swift) at the repository root (SwiftPM requires it there):

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

- `OnColor.*` resolve per appearance (dark and light values); force one with `.preferredColorScheme` or, on macOS,
  `NSApp.appearance`.
- `OnSpace`, `OnRadius` (`standard` is `radius.default`), `OnTypography` + `.onTextStyle(_:)` (system font, tracking in
  points, uppercase labels), `OnShadow` + `.onShadow(_:)` (radius is half the CSS blur), `OnMotion` (durations and
  `Animation` curves), `OnLayout`, `OnGradient`.
- `Tokens.generated.swift` is generated from `tokens/tokens.json`; `Support.swift` is hand-written.

Test with `swift test` from the repository root.
