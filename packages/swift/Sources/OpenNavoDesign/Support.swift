// Hand-written support for the generated tokens: dynamic colors, text styles and shadow styles.
import SwiftUI

#if canImport(AppKit)
import AppKit
#elseif canImport(UIKit)
import UIKit
#endif

extension Color {
    /// A color that resolves to `light` or `dark` (0xRRGGBB) with the appearance of the view that draws it, so
    /// `.preferredColorScheme(.light)` or a forced NSApp appearance switches every token at once.
    public static func on(light: UInt32, lightAlpha: Double = 1, dark: UInt32, darkAlpha: Double = 1) -> Color {
        #if canImport(AppKit)
        let color = NSColor(name: nil) { appearance in
            let isDark = appearance.bestMatch(from: [.darkAqua, .aqua]) == .darkAqua
            return isDark ? NSColor(onRGB: dark, alpha: darkAlpha) : NSColor(onRGB: light, alpha: lightAlpha)
        }
        return Color(nsColor: color)
        #elseif canImport(UIKit)
        let color = UIColor { traits in
            traits.userInterfaceStyle == .dark
                ? UIColor(onRGB: dark, alpha: darkAlpha) : UIColor(onRGB: light, alpha: lightAlpha)
        }
        return Color(uiColor: color)
        #endif
    }
}

#if canImport(AppKit)
extension NSColor {
    convenience init(onRGB rgb: UInt32, alpha: Double) {
        self.init(
            srgbRed: CGFloat((rgb >> 16) & 0xFF) / 255,
            green: CGFloat((rgb >> 8) & 0xFF) / 255,
            blue: CGFloat(rgb & 0xFF) / 255,
            alpha: CGFloat(alpha)
        )
    }
}
#elseif canImport(UIKit)
extension UIColor {
    convenience init(onRGB rgb: UInt32, alpha: Double) {
        self.init(
            red: CGFloat((rgb >> 16) & 0xFF) / 255,
            green: CGFloat((rgb >> 8) & 0xFF) / 255,
            blue: CGFloat(rgb & 0xFF) / 255,
            alpha: CGFloat(alpha)
        )
    }
}
#endif

/// One step of the type scale: size and line height in points, weight, tracking in points.
public struct OnTextStyle {
    public let size: CGFloat
    public let lineHeight: CGFloat
    public let weight: Font.Weight
    public let tracking: CGFloat
    public let uppercase: Bool
    public let monospaced: Bool

    public init(
        size: CGFloat,
        lineHeight: CGFloat,
        weight: Font.Weight,
        tracking: CGFloat,
        uppercase: Bool = false,
        monospaced: Bool = false
    ) {
        self.size = size
        self.lineHeight = lineHeight
        self.weight = weight
        self.tracking = tracking
        self.uppercase = uppercase
        self.monospaced = monospaced
    }

    /// The system font at this size and weight (monospaced for code and versions).
    public var font: Font {
        .system(size: size, weight: weight, design: monospaced ? .monospaced : .default)
    }
}

/// One shadow layer in SwiftUI terms (radius is half the CSS blur).
public struct OnShadowStyle {
    public let color: Color
    public let radius: CGFloat
    public let x: CGFloat
    public let y: CGFloat

    public init(color: Color, radius: CGFloat, x: CGFloat, y: CGFloat) {
        self.color = color
        self.radius = radius
        self.x = x
        self.y = y
    }
}

extension View {
    /// Applies a type-scale step: font, tracking, the extra line spacing for its line height, and uppercase labels.
    public func onTextStyle(_ style: OnTextStyle) -> some View {
        font(style.font)
            .tracking(style.tracking)
            .lineSpacing(max(0, style.lineHeight - style.size * 1.2))
            .textCase(style.uppercase ? .uppercase : nil)
    }

    /// Applies a token shadow.
    public func onShadow(_ style: OnShadowStyle) -> some View {
        shadow(color: style.color, radius: style.radius, x: style.x, y: style.y)
    }
}
