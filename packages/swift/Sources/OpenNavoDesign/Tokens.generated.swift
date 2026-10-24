// Generated from tokens/tokens.json by packages/tokens/scripts/generate.ts; do not edit. After changing tokens.json, run `pnpm gen`.

import SwiftUI

/// Theme colors (tokens color.*): each value follows the light or dark appearance it is drawn in.
public enum OnColor {
    /// Outer web and window background.
    public static let surfacePage = Color.on(light: 0xF2F2F2, dark: 0x0B0B0B)
    /// Main content background.
    public static let surfaceBase = Color.on(light: 0xF8F8F8, dark: 0x131313)
    /// Desktop sidebar.
    public static let surfaceSidebar = Color.on(light: 0xF1F1F1, dark: 0x161616)
    /// Right rail with summaries and secondary actions.
    public static let surfaceRail = Color.on(light: 0xF5F5F5, dark: 0x141414)
    /// Cards.
    public static let surfaceCard = Color.on(light: 0xFFFFFF, dark: 0x1A1A1A)
    /// Inputs and secondary blocks within cards.
    public static let surfaceCardAlt = Color.on(light: 0xF5F5F5, dark: 0x1F1F1F)
    /// Hover, selection, icon tiles; darker than cards in light mode, so floating panels use popover.
    public static let surfaceRaised = Color.on(light: 0xEDEDED, dark: 0x262626)
    /// Neutral badge background.
    public static let surfaceChip = Color.on(light: 0xEBEBEB, dark: 0x2A2A2A)
    /// Inputs, tooltips, and secondary controls.
    public static let surfaceControl = Color.on(light: 0xFFFFFF, dark: 0x2B2B2B)
    /// Code blocks, logs, segmented-control tracks.
    public static let surfaceInset = Color.on(light: 0xF0F0F0, dark: 0x111111)
    /// Overlays with backdrop-filter: blur(20px).
    public static let surfaceOverlay = Color.on(light: 0xFFFFFF, lightAlpha: 0.94, dark: 0x1C1C1C, darkAlpha: 0.92)
    /// Floating panels and notices over content, such as consent and suggestion cards.
    public static let surfacePopover = Color.on(light: 0xFFFFFF, dark: 0x262626)
    /// Card borders and dividers.
    public static let borderSubtle = Color.on(light: 0x000000, lightAlpha: 0.08, dark: 0xFFFFFF, darkAlpha: 0.07)
    /// Input, ghost-button, and window borders.
    public static let borderDefault = Color.on(light: 0x000000, lightAlpha: 0.13, dark: 0xFFFFFF, darkAlpha: 0.12)
    /// Hover borders.
    public static let borderStrong = Color.on(light: 0x000000, lightAlpha: 0.22, dark: 0xFFFFFF, darkAlpha: 0.2)
    /// Sidebar right border.
    public static let borderSidebar = Color.on(light: 0xE5E5E5, dark: 0x1D1D1D)
    /// Headings, emphasized body text, numbers (14.9:1 on dark cards, 17.4:1 on light cards).
    public static let textPrimary = Color.on(light: 0x1A1A1A, dark: 0xEDEDED)
    /// Body text and descriptions (7.3:1 on dark cards, 7.2:1 on light cards).
    public static let textSecondary = Color.on(light: 0x575757, dark: 0xA8A8A8)
    /// Secondary information, labels, times (5.4:1 on dark cards, 4.7:1 on dark raised; 5.3:1 and 4.6:1 in light mode).
    public static let textTertiary = Color.on(light: 0x6B6B6B, dark: 0x8F8F8F)
    /// Disabled/decorative only; never convey essential information.
    public static let textDisabled = Color.on(light: 0xA6A6A6, dark: 0x5C5C5C)
    /// Text and icons on solid fills (status, coral, salmon); dark in dark mode, white in light mode.
    public static let textInverse = Color.on(light: 0xFFFFFF, dark: 0x141414)
    /// Text on coral buttons/badges (7.2:1).
    public static let textOnAccent = Color.on(light: 0x1B0A05, dark: 0x1B0A05)
    /// Coral text, links, and icons; brand.coral is for fills and graphics (light mode needs a darker shade for 4.5:1).
    public static let textAccent = Color.on(light: 0xB83A15, dark: 0xFF7356)
    /// Primary brand color for fills and graphics: logo, progress, badges, emphasized buttons. For coral text use text.accent.
    public static let brandCoral = Color.on(light: 0xEE5533, dark: 0xFF7356)
    /// Emphasized text: hero second line, badges, available updates.
    public static let brandSalmon = Color.on(light: 0xA74C1B, dark: 0xF99E70)
    /// Primary hero glow color.
    public static let brandViolet = Color.on(light: 0x5B5BD6, dark: 0x5B5BD6)
    /// Glow center highlight.
    public static let brandGlowCore = Color.on(light: 0xCDCDFF, dark: 0xCDCDFF)
    /// Progress tracks and Updating badges.
    public static let accentCoralSubtle = Color.on(light: 0xEE5533, lightAlpha: 0.1, dark: 0xFF7356, darkAlpha: 0.12)
    /// Badge and available-update backgrounds.
    public static let accentSalmonSubtle = Color.on(light: 0xA74C1B, lightAlpha: 0.1, dark: 0xF99E70, darkAlpha: 0.1)
    /// Installed, success, current.
    public static let statusSuccess = Color.on(light: 0x187733, dark: 0x3FCF6C)
    public static let statusSuccessSubtle = Color.on(light: 0x187733, lightAlpha: 0.1, dark: 0x3FCF6C, darkAlpha: 0.1)
    /// Warnings and administrator permission required.
    public static let statusWarning = Color.on(light: 0x965A00, dark: 0xFAB219)
    public static let statusWarningSubtle = Color.on(light: 0x965A00, lightAlpha: 0.1, dark: 0xFAB219, darkAlpha: 0.1)
    /// Failure, deprecated, delete.
    public static let statusDanger = Color.on(light: 0xC22B21, dark: 0xFF5D51)
    public static let statusDangerSubtle = Color.on(light: 0xC22B21, lightAlpha: 0.1, dark: 0xFF5D51, darkAlpha: 0.1)
    /// Self-updating, links, information.
    public static let statusInfo = Color.on(light: 0x1564CD, dark: 0x66A4FA)
    public static let statusInfoSubtle = Color.on(light: 0x1564CD, lightAlpha: 0.1, dark: 0x66A4FA, darkAlpha: 0.1)
    /// Border of panels tinted with successSubtle.
    public static let statusSuccessBorder = Color.on(light: 0x187733, lightAlpha: 0.24, dark: 0x3FCF6C, darkAlpha: 0.2)
    /// Border of panels tinted with warningSubtle.
    public static let statusWarningBorder = Color.on(light: 0x965A00, lightAlpha: 0.24, dark: 0xFAB219, darkAlpha: 0.25)
    /// Border of panels tinted with dangerSubtle.
    public static let statusDangerBorder = Color.on(light: 0xC22B21, lightAlpha: 0.24, dark: 0xFF5D51, darkAlpha: 0.25)
    /// Border of panels tinted with infoSubtle.
    public static let statusInfoBorder = Color.on(light: 0x1564CD, lightAlpha: 0.24, dark: 0x66A4FA, darkAlpha: 0.25)
    public static let buttonPrimaryBg = Color.on(light: 0x1F1F1F, dark: 0xEBEBEB)
    public static let buttonPrimaryHover = Color.on(light: 0x333333, dark: 0xFFFFFF)
    public static let buttonPrimaryPressed = Color.on(light: 0x0A0A0A, dark: 0xD6D6D6)
    public static let buttonPrimaryText = Color.on(light: 0xFFFFFF, dark: 0x141414)
    public static let buttonSecondaryBg = Color.on(light: 0xEBEBEB, dark: 0x2B2B2B)
    public static let buttonSecondaryHover = Color.on(light: 0xE0E0E0, dark: 0x333333)
    public static let buttonSecondaryPressed = Color.on(light: 0xD6D6D6, dark: 0x242424)
    public static let buttonSecondaryText = Color.on(light: 0x1A1A1A, dark: 0xEDEDED)
    public static let buttonAccentBg = Color.on(light: 0xEE5533, dark: 0xFF7356)
    public static let buttonAccentHover = Color.on(light: 0xF46546, dark: 0xFF8468)
    public static let buttonAccentPressed = Color.on(light: 0xE24A28, dark: 0xF0603F)
    public static let buttonAccentText = Color.on(light: 0x1B0A05, dark: 0x1B0A05)
    public static let buttonDisabledBg = Color.on(light: 0xF0F0F0, dark: 0x171717)
    public static let buttonDisabledText = Color.on(light: 0xA6A6A6, dark: 0x5C5C5C)
    /// Category color 1, violet.
    public static let chartSeries1 = Color.on(light: 0x6A61E8, dark: 0x7B72EE)
    /// Category color 2, coral.
    public static let chartSeries2 = Color.on(light: 0xD9572E, dark: 0xE0663F)
    /// Category color 3, cyan; all three checked for color-blind accessibility/contrast on #1A1A1A.
    public static let chartSeries3 = Color.on(light: 0x168A62, dark: 0x1E9E72)
    /// Single-series emphasis, current period.
    public static let chartEmphasis = Color.on(light: 0xD0602A, dark: 0xF99E70)
    /// Single-series de-emphasis, historical period.
    public static let chartDeemphasis = Color.on(light: 0xCFCFCF, dark: 0x4A4A4A)
    public static let chartGrid = Color.on(light: 0xEBEBEB, dark: 0x2C2C2A)
    public static let chartAxis = Color.on(light: 0xD6D6D6, dark: 0x383838)
    /// Search-field and form-input background.
    public static let componentSearchBg = Color.on(light: 0xFFFFFF, dark: 0x1C1C1C)
    /// Interactive card hover background.
    public static let componentCardHover = Color.on(light: 0xFAFAFA, dark: 0x1D1D1D)
    /// Off toggle track.
    public static let componentToggleTrack = Color.on(light: 0xD9D9D9, dark: 0x333333)
    /// Off toggle thumb.
    public static let componentToggleKnob = Color.on(light: 0xFFFFFF, dark: 0xBDBDBD)
    /// On toggle thumb.
    public static let componentToggleKnobOn = Color.on(light: 0xFFFFFF, dark: 0xFFFFFF)
    /// Selected-tab indicator.
    public static let componentTabIndicator = Color.on(light: 0x1A1A1A, dark: 0xFFFFFF)
    /// Selected sidebar navigation background.
    public static let componentNavActive = Color.on(light: 0xE3E3E3, dark: 0x202020)
    /// Featured hero card background.
    public static let componentHeroBg = Color.on(light: 0xF4F3FD, dark: 0x0E0E10)
    /// Screenshot lower-left caption background; dark in both themes, so the caption renders in the dark theme (data-theme='dark').
    public static let componentCaptionBg = Color.on(light: 0x000000, lightAlpha: 0.55, dark: 0x000000, darkAlpha: 0.55)
    /// Scrolled web navigation background: surface.page at 85% with backdrop-filter: blur(20px).
    public static let componentTopNavScrolled = Color.on(light: 0xF2F2F2, lightAlpha: 0.85, dark: 0x0B0B0B, darkAlpha: 0.85)
    /// Dialog/sheet backdrop.
    public static let componentScrim = Color.on(light: 0x000000, lightAlpha: 0.3, dark: 0x000000, darkAlpha: 0.5)
    /// Screenshot lightbox backdrop; dark in both themes, so the lightbox renders in the dark theme (data-theme='dark').
    public static let componentLightboxScrim = Color.on(light: 0x000000, lightAlpha: 0.88, dark: 0x000000, darkAlpha: 0.88)
    /// Dialog/sheet panel background.
    public static let componentModalBg = Color.on(light: 0xFFFFFF, dark: 0x171717)
    /// Toast background with backdrop-filter: blur(20px).
    public static let componentToastBg = Color.on(light: 0xFFFFFF, lightAlpha: 0.94, dark: 0x2C2C2C, darkAlpha: 0.92)
    /// Current menu/command-palette item background.
    public static let componentItemActive = Color.on(light: 0x000000, lightAlpha: 0.06, dark: 0xFFFFFF, darkAlpha: 0.07)
    /// Active-task card border, coral at 25%.
    public static let componentRunningBorder = Color.on(light: 0xEE5533, lightAlpha: 0.4, dark: 0xFF7356, darkAlpha: 0.25)
    /// Log step lines beginning with ==>.
    public static let componentLogHeading = Color.on(light: 0x1A1A1A, dark: 0xE8E8E8)
    /// Successful log lines.
    public static let componentLogSuccess = Color.on(light: 0x187733, dark: 0x7FD88F)
    /// Monospace table text, such as versions.
    public static let componentMonoText = Color.on(light: 0x333333, dark: 0xD0D0D0)
    /// Timeline line start, fading through surface.raised to transparent.
    public static let componentTimelineLine = Color.on(light: 0xD6D6D6, dark: 0x333333)
    /// Normal timeline entry dots.
    public static let componentTimelineDot = Color.on(light: 0xC4C4C4, dark: 0x3A3A3A)
    /// Auxiliary-source dots, such as GitHub metadata in release sources.
    public static let componentSourceMeta = Color.on(light: 0xB0B0B0, dark: 0x555555)
    /// Collection card gradient start, 160°.
    public static let componentCollectionFrom = Color.on(light: 0xF1EEFB, dark: 0x1D1A26)
    /// Collection card gradient end at 70%.
    public static let componentCollectionTo = Color.on(light: 0xFFFFFF, dark: 0x161616)
    /// Collection stacked-icon border.
    public static let componentCollectionRing = Color.on(light: 0xF8F7FD, dark: 0x1B1922)
    /// Detail header card background beneath glow.
    public static let componentDetailHeaderBg = Color.on(light: 0xFFFFFF, dark: 0x171717)
    /// Command-line tile gradient start.
    public static let componentCliIconFrom = Color.on(light: 0x2A2A2A, dark: 0x2A2A2A)
    /// Command-line tile gradient end.
    public static let componentCliIconTo = Color.on(light: 0x1B1B1B, dark: 0x1B1B1B)
    /// Command-line tile text.
    public static let componentCliIconText = Color.on(light: 0xE2E2E2, dark: 0xE2E2E2)
    /// Letter-tile text, decorative because names always appear alongside.
    public static let componentLetterIconText = Color.on(light: 0xFFFFFF, dark: 0xFFFFFF)
    /// Selected segment of a segmented control.
    public static let componentSegmentActive = Color.on(light: 0xFFFFFF, dark: 0x262626)
    /// In-app preview of the macOS menu bar strip.
    public static let componentMenuBarBg = Color.on(light: 0xF6F6F6, lightAlpha: 0.96, dark: 0x262628, darkAlpha: 0.96)
    /// Menu bar preview items, drawn like AppKit template images.
    public static let componentMenuBarText = Color.on(light: 0x1F1F1F, dark: 0xE6E6E6)
    public static let macosClose = Color.on(light: 0xFF5F57, dark: 0xFF5F57)
    public static let macosMinimize = Color.on(light: 0xFEBC2E, dark: 0xFEBC2E)
    public static let macosZoom = Color.on(light: 0x28C840, dark: 0x28C840)
}

/// Gradient stops (tokens color.brand.*Gradient), top-left to bottom-right.
public enum OnGradient {
    /// Logo N gradient, top-left to bottom-right.
    public static let brandLogoGradient: [Color] = [Color.on(light: 0xFFB347, dark: 0xFFB347), Color.on(light: 0xFF7356, dark: 0xFF7356), Color.on(light: 0xFF4E3A, dark: 0xFF4E3A)]
    /// Logo Polaris gradient on dark backgrounds.
    public static let brandLogoCoreGradient: [Color] = [Color.on(light: 0xFFB347, dark: 0xFFF6D6), Color.on(light: 0xFF8F3F, dark: 0xFFC861)]
    /// Logo Polaris gradient on light backgrounds; warm white would disappear.
    public static let brandLogoCoreGradientOnLight: [Color] = [Color.on(light: 0xFFB347, dark: 0xFFB347), Color.on(light: 0xFF8F3F, dark: 0xFF8F3F)]
}

/// Spacing scale in points (tokens space.*): s0_5 is space 0.5 (2), s4 is space 4 (16).
public enum OnSpace {
    public static let s0: CGFloat = 0
    public static let s0_5: CGFloat = 2
    public static let s1: CGFloat = 4
    public static let s1_5: CGFloat = 6
    public static let s2: CGFloat = 8
    public static let s2_5: CGFloat = 10
    public static let s3: CGFloat = 12
    public static let s3_5: CGFloat = 14
    public static let s4: CGFloat = 16
    public static let s5: CGFloat = 20
    public static let s6: CGFloat = 24
    public static let s7: CGFloat = 28
    public static let s8: CGFloat = 32
    public static let s10: CGFloat = 40
    public static let s12: CGFloat = 48
    public static let s16: CGFloat = 64
    public static let s20: CGFloat = 80
}

/// Corner radii (tokens radius.*); standard is radius.default.
public enum OnRadius {
    public static let tiny: CGFloat = 4
    public static let small: CGFloat = 7
    public static let standard: CGFloat = 10
    /// Screenshot cards, menus, overlays.
    public static let panel: CGFloat = 12
    public static let big: CGFloat = 14
    public static let huge: CGFloat = 20
    public static let xl: CGFloat = 28
    public static let full: CGFloat = 9999
    /// App icon radius: 23% of side length, approximating macOS superellipses.
    public static let appIconFraction: CGFloat = 0.23
}

/// Type scale (tokens typography.*). Native apps draw it in the system font (SF Pro); tracking is in points.
public enum OnTypography {
    /// Web homepage hero heading
    public static let hero = OnTextStyle(size: 76, lineHeight: 78, weight: .semibold, tracking: -2.66)
    /// Web section heading
    public static let section = OnTextStyle(size: 46, lineHeight: 50, weight: .semibold, tracking: -1.38)
    /// Featured hero heading
    public static let display = OnTextStyle(size: 40, lineHeight: 44, weight: .semibold, tracking: -1.2)
    /// Page heading
    public static let title1 = OnTextStyle(size: 28, lineHeight: 34, weight: .semibold, tracking: -0.56)
    /// Dialog title and compact detail header
    public static let title2 = OnTextStyle(size: 22, lineHeight: 28, weight: .semibold, tracking: -0.44)
    /// Section heading
    public static let headline = OnTextStyle(size: 16, lineHeight: 24, weight: .semibold, tracking: -0.16)
    /// Statistics values with proportional numerals
    public static let statValue = OnTextStyle(size: 20, lineHeight: 26, weight: .semibold, tracking: -0.3)
    /// Body text
    public static let body = OnTextStyle(size: 14, lineHeight: 22, weight: .regular, tracking: 0)
    /// List and table body text
    public static let bodySm = OnTextStyle(size: 13, lineHeight: 20, weight: .regular, tracking: 0)
    /// Secondary information
    public static let caption = OnTextStyle(size: 12, lineHeight: 18, weight: .regular, tracking: 0)
    /// Group labels, such as sidebar section titles
    public static let label = OnTextStyle(size: 11, lineHeight: 16, weight: .semibold, tracking: 0.88, uppercase: true)
    /// Commands, versions, and logs
    public static let mono = OnTextStyle(size: 12, lineHeight: 18, weight: .regular, tracking: 0, monospaced: true)
}

/// Elevation shadows (tokens shadow.*): SwiftUI radius is half the CSS blur; spread and inset layers are omitted.
public enum OnShadow {
    public static let window = OnShadowStyle(color: Color.on(light: 0x000000, lightAlpha: 0.16, dark: 0x000000, darkAlpha: 0.65), radius: 70, x: 0, y: 50)
    public static let popover = OnShadowStyle(color: Color.on(light: 0x000000, lightAlpha: 0.12, dark: 0x000000, darkAlpha: 0.6), radius: 30, x: 0, y: 24)
    public static let modal = OnShadowStyle(color: Color.on(light: 0x000000, lightAlpha: 0.16, dark: 0x000000, darkAlpha: 0.6), radius: 40, x: 0, y: 30)
    public static let toast = OnShadowStyle(color: Color.on(light: 0x000000, lightAlpha: 0.12, dark: 0x000000, darkAlpha: 0.5), radius: 20, x: 0, y: 18)
    public static let floatIcon = OnShadowStyle(color: Color.on(light: 0x000000, lightAlpha: 0.16, dark: 0x000000, darkAlpha: 0.55), radius: 15, x: 0, y: 18)
    public static let appIcon = OnShadowStyle(color: Color.on(light: 0x000000, lightAlpha: 0.12, dark: 0x000000, darkAlpha: 0.4), radius: 1, x: 0, y: 1)
    /// Letter-tile shadow preserves readability on light backgrounds.
    public static let iconText = OnShadowStyle(color: Color.on(light: 0x000000, lightAlpha: 0.3, dark: 0x000000, darkAlpha: 0.3), radius: 1, x: 0, y: 1)
    /// Selected segment lift; none (a transparent shadow) in dark mode.
    public static let segment = OnShadowStyle(color: Color.on(light: 0x000000, lightAlpha: 0.1, dark: 0x000000, darkAlpha: 0), radius: 1, x: 0, y: 1)
    /// Toggle knob lift; the white knob needs it on the light track.
    public static let knob = OnShadowStyle(color: Color.on(light: 0x000000, lightAlpha: 0.22, dark: 0x000000, darkAlpha: 0), radius: 1, x: 0, y: 1)
}

/// Motion (tokens motion.*): durations in seconds and timing curves.
public enum OnMotion {
    public static let fast: TimeInterval = 0.12
    public static let base: TimeInterval = 0.2
    public static let slow: TimeInterval = 0.32
    /// standard easing; pass a duration such as OnMotion.base.
    public static func standard(duration: TimeInterval = 0.2) -> Animation {
        .timingCurve(0.2, 0.8, 0.2, 1, duration: duration)
    }
    /// emphasized easing; pass a duration such as OnMotion.base.
    public static func emphasized(duration: TimeInterval = 0.2) -> Animation {
        .timingCurve(0.3, 0, 0, 1, duration: duration)
    }
    /// exit easing; pass a duration such as OnMotion.base.
    public static func exit(duration: TimeInterval = 0.2) -> Animation {
        .timingCurve(0.4, 0, 1, 1, duration: duration)
    }
}

/// Layout metrics (tokens layout.*) in points.
public enum OnLayout {
    public static let desktopWindowDefaultWidth: CGFloat = 1280
    public static let desktopWindowDefaultHeight: CGFloat = 820
    public static let desktopWindowMinWidth: CGFloat = 1100
    public static let desktopWindowMinHeight: CGFloat = 700
    public static let desktopSidebarWidth: CGFloat = 224
    public static let desktopToolbarHeight: CGFloat = 52
    public static let desktopRailWidth: CGFloat = 288
    public static let desktopContentPaddingX: CGFloat = 28
    public static let desktopRailPadding: CGFloat = 20
    public static let desktopTrafficLightInsetX: CGFloat = 18
    public static let desktopTrafficLightInsetY: CGFloat = 22
    public static let webPageMaxWidth: CGFloat = 1240
    public static let webPageGutter: CGFloat = 24
    public static let webNavHeight: CGFloat = 64
    public static let webBreakpointsSm: CGFloat = 640
    public static let webBreakpointsMd: CGFloat = 768
    public static let webBreakpointsLg: CGFloat = 1024
    public static let webBreakpointsXl: CGFloat = 1280
    public static let webBreakpoints2xl: CGFloat = 1440
}
