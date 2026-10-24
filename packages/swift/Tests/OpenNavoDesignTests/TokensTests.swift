import XCTest
@testable import OpenNavoDesign

final class TokensTests: XCTestCase {
    func testScalesMatchTheTokens() {
        XCTAssertEqual(OnSpace.s4, 16)
        XCTAssertEqual(OnSpace.s0_5, 2)
        XCTAssertEqual(OnRadius.standard, 10)
        XCTAssertEqual(OnRadius.appIconFraction, 0.23, accuracy: 0.0001)
        XCTAssertEqual(OnTypography.title1.size, 28)
        XCTAssertEqual(OnTypography.label.uppercase, true)
        XCTAssertEqual(OnMotion.fast, 0.12, accuracy: 0.0001)
    }

    #if canImport(AppKit)
    func testColorsFollowTheAppearance() throws {
        let card = NSColor(OnColor.surfaceCard)
        let dark = try XCTUnwrap(NSAppearance(named: .darkAqua))
        let light = try XCTUnwrap(NSAppearance(named: .aqua))
        var resolved: (dark: String, light: String) = ("", "")
        dark.performAsCurrentDrawingAppearance { resolved.dark = Self.hex(card) }
        light.performAsCurrentDrawingAppearance { resolved.light = Self.hex(card) }
        XCTAssertEqual(resolved.dark, "1A1A1A")
        XCTAssertEqual(resolved.light, "FFFFFF")
    }

    private static func hex(_ color: NSColor) -> String {
        let srgb = color.usingColorSpace(.sRGB) ?? color
        return String(
            format: "%02X%02X%02X",
            Int((srgb.redComponent * 255).rounded()),
            Int((srgb.greenComponent * 255).rounded()),
            Int((srgb.blueComponent * 255).rounded())
        )
    }
    #endif
}
