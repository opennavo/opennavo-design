// Generated from tokens/tokens.json by packages/tokens/scripts/generate.ts; do not edit. After changing tokens.json, run `pnpm gen`.
// ignore_for_file: lines_longer_than_80_chars

import 'package:flutter/material.dart';

/// Theme colors (tokens color.*). Dark is the default; light holds the light-theme values.
@immutable
class OnColors extends ThemeExtension<OnColors> {
  const OnColors({
    required this.surfacePage,
    required this.surfaceBase,
    required this.surfaceSidebar,
    required this.surfaceRail,
    required this.surfaceCard,
    required this.surfaceCardAlt,
    required this.surfaceRaised,
    required this.surfaceChip,
    required this.surfaceControl,
    required this.surfaceInset,
    required this.surfaceOverlay,
    required this.surfacePopover,
    required this.borderSubtle,
    required this.borderDefault,
    required this.borderStrong,
    required this.borderSidebar,
    required this.textPrimary,
    required this.textSecondary,
    required this.textTertiary,
    required this.textDisabled,
    required this.textInverse,
    required this.textOnAccent,
    required this.textAccent,
    required this.brandCoral,
    required this.brandSalmon,
    required this.brandViolet,
    required this.brandGlowCore,
    required this.brandLogoGradient,
    required this.brandLogoCoreGradient,
    required this.brandLogoCoreGradientOnLight,
    required this.accentCoralSubtle,
    required this.accentSalmonSubtle,
    required this.statusSuccess,
    required this.statusSuccessSubtle,
    required this.statusWarning,
    required this.statusWarningSubtle,
    required this.statusDanger,
    required this.statusDangerSubtle,
    required this.statusInfo,
    required this.statusInfoSubtle,
    required this.statusSuccessBorder,
    required this.statusWarningBorder,
    required this.statusDangerBorder,
    required this.statusInfoBorder,
    required this.buttonPrimaryBg,
    required this.buttonPrimaryHover,
    required this.buttonPrimaryPressed,
    required this.buttonPrimaryText,
    required this.buttonSecondaryBg,
    required this.buttonSecondaryHover,
    required this.buttonSecondaryPressed,
    required this.buttonSecondaryText,
    required this.buttonAccentBg,
    required this.buttonAccentHover,
    required this.buttonAccentPressed,
    required this.buttonAccentText,
    required this.buttonDisabledBg,
    required this.buttonDisabledText,
    required this.chartSeries1,
    required this.chartSeries2,
    required this.chartSeries3,
    required this.chartEmphasis,
    required this.chartDeemphasis,
    required this.chartGrid,
    required this.chartAxis,
    required this.componentSearchBg,
    required this.componentCardHover,
    required this.componentToggleTrack,
    required this.componentToggleKnob,
    required this.componentToggleKnobOn,
    required this.componentTabIndicator,
    required this.componentNavActive,
    required this.componentHeroBg,
    required this.componentCaptionBg,
    required this.componentTopNavScrolled,
    required this.componentScrim,
    required this.componentLightboxScrim,
    required this.componentModalBg,
    required this.componentToastBg,
    required this.componentItemActive,
    required this.componentRunningBorder,
    required this.componentLogHeading,
    required this.componentLogSuccess,
    required this.componentMonoText,
    required this.componentTimelineLine,
    required this.componentTimelineDot,
    required this.componentSourceMeta,
    required this.componentCollectionFrom,
    required this.componentCollectionTo,
    required this.componentCollectionRing,
    required this.componentDetailHeaderBg,
    required this.componentCliIconFrom,
    required this.componentCliIconTo,
    required this.componentCliIconText,
    required this.componentLetterIconText,
    required this.componentSegmentActive,
    required this.componentMenuBarBg,
    required this.componentMenuBarText,
    required this.macosClose,
    required this.macosMinimize,
    required this.macosZoom,
  });

  /// Outer web and window background.
  final Color surfacePage;
  /// Main content background.
  final Color surfaceBase;
  /// Desktop sidebar.
  final Color surfaceSidebar;
  /// Right rail with summaries and secondary actions.
  final Color surfaceRail;
  /// Cards.
  final Color surfaceCard;
  /// Inputs and secondary blocks within cards.
  final Color surfaceCardAlt;
  /// Hover, selection, icon tiles; darker than cards in light mode, so floating panels use popover.
  final Color surfaceRaised;
  /// Neutral badge background.
  final Color surfaceChip;
  /// Inputs, tooltips, and secondary controls.
  final Color surfaceControl;
  /// Code blocks, logs, segmented-control tracks.
  final Color surfaceInset;
  /// Overlays with backdrop-filter: blur(20px).
  final Color surfaceOverlay;
  /// Floating panels and notices over content, such as consent and suggestion cards.
  final Color surfacePopover;
  /// Card borders and dividers.
  final Color borderSubtle;
  /// Input, ghost-button, and window borders.
  final Color borderDefault;
  /// Hover borders.
  final Color borderStrong;
  /// Sidebar right border.
  final Color borderSidebar;
  /// Headings, emphasized body text, numbers (14.9:1 on dark cards, 17.4:1 on light cards).
  final Color textPrimary;
  /// Body text and descriptions (7.3:1 on dark cards, 7.2:1 on light cards).
  final Color textSecondary;
  /// Secondary information, labels, times (5.4:1 on dark cards, 4.7:1 on dark raised; 5.3:1 and 4.6:1 in light mode).
  final Color textTertiary;
  /// Disabled/decorative only; never convey essential information.
  final Color textDisabled;
  /// Text and icons on solid fills (status, coral, salmon); dark in dark mode, white in light mode.
  final Color textInverse;
  /// Text on coral buttons/badges (7.2:1).
  final Color textOnAccent;
  /// Coral text, links, and icons; brand.coral is for fills and graphics (light mode needs a darker shade for 4.5:1).
  final Color textAccent;
  /// Primary brand color for fills and graphics: logo, progress, badges, emphasized buttons. For coral text use text.accent.
  final Color brandCoral;
  /// Emphasized text: hero second line, badges, available updates.
  final Color brandSalmon;
  /// Primary hero glow color.
  final Color brandViolet;
  /// Glow center highlight.
  final Color brandGlowCore;
  /// Logo N gradient, top-left to bottom-right.
  final List<Color> brandLogoGradient;
  /// Logo Polaris gradient on dark backgrounds.
  final List<Color> brandLogoCoreGradient;
  /// Logo Polaris gradient on light backgrounds; warm white would disappear.
  final List<Color> brandLogoCoreGradientOnLight;
  /// Progress tracks and Updating badges.
  final Color accentCoralSubtle;
  /// Badge and available-update backgrounds.
  final Color accentSalmonSubtle;
  /// Installed, success, current.
  final Color statusSuccess;
  final Color statusSuccessSubtle;
  /// Warnings and administrator permission required.
  final Color statusWarning;
  final Color statusWarningSubtle;
  /// Failure, deprecated, delete.
  final Color statusDanger;
  final Color statusDangerSubtle;
  /// Self-updating, links, information.
  final Color statusInfo;
  final Color statusInfoSubtle;
  /// Border of panels tinted with successSubtle.
  final Color statusSuccessBorder;
  /// Border of panels tinted with warningSubtle.
  final Color statusWarningBorder;
  /// Border of panels tinted with dangerSubtle.
  final Color statusDangerBorder;
  /// Border of panels tinted with infoSubtle.
  final Color statusInfoBorder;
  final Color buttonPrimaryBg;
  final Color buttonPrimaryHover;
  final Color buttonPrimaryPressed;
  final Color buttonPrimaryText;
  final Color buttonSecondaryBg;
  final Color buttonSecondaryHover;
  final Color buttonSecondaryPressed;
  final Color buttonSecondaryText;
  final Color buttonAccentBg;
  final Color buttonAccentHover;
  final Color buttonAccentPressed;
  final Color buttonAccentText;
  final Color buttonDisabledBg;
  final Color buttonDisabledText;
  /// Category color 1, violet.
  final Color chartSeries1;
  /// Category color 2, coral.
  final Color chartSeries2;
  /// Category color 3, cyan; all three checked for color-blind accessibility/contrast on #1A1A1A.
  final Color chartSeries3;
  /// Single-series emphasis, current period.
  final Color chartEmphasis;
  /// Single-series de-emphasis, historical period.
  final Color chartDeemphasis;
  final Color chartGrid;
  final Color chartAxis;
  /// Search-field and form-input background.
  final Color componentSearchBg;
  /// Interactive card hover background.
  final Color componentCardHover;
  /// Off toggle track.
  final Color componentToggleTrack;
  /// Off toggle thumb.
  final Color componentToggleKnob;
  /// On toggle thumb.
  final Color componentToggleKnobOn;
  /// Selected-tab indicator.
  final Color componentTabIndicator;
  /// Selected sidebar navigation background.
  final Color componentNavActive;
  /// Featured hero card background.
  final Color componentHeroBg;
  /// Screenshot lower-left caption background; dark in both themes, so the caption renders in the dark theme (data-theme='dark').
  final Color componentCaptionBg;
  /// Scrolled web navigation background: surface.page at 85% with backdrop-filter: blur(20px).
  final Color componentTopNavScrolled;
  /// Dialog/sheet backdrop.
  final Color componentScrim;
  /// Screenshot lightbox backdrop; dark in both themes, so the lightbox renders in the dark theme (data-theme='dark').
  final Color componentLightboxScrim;
  /// Dialog/sheet panel background.
  final Color componentModalBg;
  /// Toast background with backdrop-filter: blur(20px).
  final Color componentToastBg;
  /// Current menu/command-palette item background.
  final Color componentItemActive;
  /// Active-task card border, coral at 25%.
  final Color componentRunningBorder;
  /// Log step lines beginning with ==>.
  final Color componentLogHeading;
  /// Successful log lines.
  final Color componentLogSuccess;
  /// Monospace table text, such as versions.
  final Color componentMonoText;
  /// Timeline line start, fading through surface.raised to transparent.
  final Color componentTimelineLine;
  /// Normal timeline entry dots.
  final Color componentTimelineDot;
  /// Auxiliary-source dots, such as GitHub metadata in release sources.
  final Color componentSourceMeta;
  /// Collection card gradient start, 160°.
  final Color componentCollectionFrom;
  /// Collection card gradient end at 70%.
  final Color componentCollectionTo;
  /// Collection stacked-icon border.
  final Color componentCollectionRing;
  /// Detail header card background beneath glow.
  final Color componentDetailHeaderBg;
  /// Command-line tile gradient start.
  final Color componentCliIconFrom;
  /// Command-line tile gradient end.
  final Color componentCliIconTo;
  /// Command-line tile text.
  final Color componentCliIconText;
  /// Letter-tile text, decorative because names always appear alongside.
  final Color componentLetterIconText;
  /// Selected segment of a segmented control.
  final Color componentSegmentActive;
  /// In-app preview of the macOS menu bar strip.
  final Color componentMenuBarBg;
  /// Menu bar preview items, drawn like AppKit template images.
  final Color componentMenuBarText;
  final Color macosClose;
  final Color macosMinimize;
  final Color macosZoom;

  static const OnColors dark = OnColors(
    surfacePage: Color(0xFF0B0B0B),
    surfaceBase: Color(0xFF131313),
    surfaceSidebar: Color(0xFF161616),
    surfaceRail: Color(0xFF141414),
    surfaceCard: Color(0xFF1A1A1A),
    surfaceCardAlt: Color(0xFF1F1F1F),
    surfaceRaised: Color(0xFF262626),
    surfaceChip: Color(0xFF2A2A2A),
    surfaceControl: Color(0xFF2B2B2B),
    surfaceInset: Color(0xFF111111),
    surfaceOverlay: Color(0xEB1C1C1C),
    surfacePopover: Color(0xFF262626),
    borderSubtle: Color(0x12FFFFFF),
    borderDefault: Color(0x1FFFFFFF),
    borderStrong: Color(0x33FFFFFF),
    borderSidebar: Color(0xFF1D1D1D),
    textPrimary: Color(0xFFEDEDED),
    textSecondary: Color(0xFFA8A8A8),
    textTertiary: Color(0xFF8F8F8F),
    textDisabled: Color(0xFF5C5C5C),
    textInverse: Color(0xFF141414),
    textOnAccent: Color(0xFF1B0A05),
    textAccent: Color(0xFFFF7356),
    brandCoral: Color(0xFFFF7356),
    brandSalmon: Color(0xFFF99E70),
    brandViolet: Color(0xFF5B5BD6),
    brandGlowCore: Color(0xFFCDCDFF),
    brandLogoGradient: <Color>[Color(0xFFFFB347), Color(0xFFFF7356), Color(0xFFFF4E3A)],
    brandLogoCoreGradient: <Color>[Color(0xFFFFF6D6), Color(0xFFFFC861)],
    brandLogoCoreGradientOnLight: <Color>[Color(0xFFFFB347), Color(0xFFFF8F3F)],
    accentCoralSubtle: Color(0x1FFF7356),
    accentSalmonSubtle: Color(0x1AF99E70),
    statusSuccess: Color(0xFF3FCF6C),
    statusSuccessSubtle: Color(0x1A3FCF6C),
    statusWarning: Color(0xFFFAB219),
    statusWarningSubtle: Color(0x1AFAB219),
    statusDanger: Color(0xFFFF5D51),
    statusDangerSubtle: Color(0x1AFF5D51),
    statusInfo: Color(0xFF66A4FA),
    statusInfoSubtle: Color(0x1A66A4FA),
    statusSuccessBorder: Color(0x333FCF6C),
    statusWarningBorder: Color(0x40FAB219),
    statusDangerBorder: Color(0x40FF5D51),
    statusInfoBorder: Color(0x4066A4FA),
    buttonPrimaryBg: Color(0xFFEBEBEB),
    buttonPrimaryHover: Color(0xFFFFFFFF),
    buttonPrimaryPressed: Color(0xFFD6D6D6),
    buttonPrimaryText: Color(0xFF141414),
    buttonSecondaryBg: Color(0xFF2B2B2B),
    buttonSecondaryHover: Color(0xFF333333),
    buttonSecondaryPressed: Color(0xFF242424),
    buttonSecondaryText: Color(0xFFEDEDED),
    buttonAccentBg: Color(0xFFFF7356),
    buttonAccentHover: Color(0xFFFF8468),
    buttonAccentPressed: Color(0xFFF0603F),
    buttonAccentText: Color(0xFF1B0A05),
    buttonDisabledBg: Color(0xFF171717),
    buttonDisabledText: Color(0xFF5C5C5C),
    chartSeries1: Color(0xFF7B72EE),
    chartSeries2: Color(0xFFE0663F),
    chartSeries3: Color(0xFF1E9E72),
    chartEmphasis: Color(0xFFF99E70),
    chartDeemphasis: Color(0xFF4A4A4A),
    chartGrid: Color(0xFF2C2C2A),
    chartAxis: Color(0xFF383838),
    componentSearchBg: Color(0xFF1C1C1C),
    componentCardHover: Color(0xFF1D1D1D),
    componentToggleTrack: Color(0xFF333333),
    componentToggleKnob: Color(0xFFBDBDBD),
    componentToggleKnobOn: Color(0xFFFFFFFF),
    componentTabIndicator: Color(0xFFFFFFFF),
    componentNavActive: Color(0xFF202020),
    componentHeroBg: Color(0xFF0E0E10),
    componentCaptionBg: Color(0x8C000000),
    componentTopNavScrolled: Color(0xD90B0B0B),
    componentScrim: Color(0x80000000),
    componentLightboxScrim: Color(0xE0000000),
    componentModalBg: Color(0xFF171717),
    componentToastBg: Color(0xEB2C2C2C),
    componentItemActive: Color(0x12FFFFFF),
    componentRunningBorder: Color(0x40FF7356),
    componentLogHeading: Color(0xFFE8E8E8),
    componentLogSuccess: Color(0xFF7FD88F),
    componentMonoText: Color(0xFFD0D0D0),
    componentTimelineLine: Color(0xFF333333),
    componentTimelineDot: Color(0xFF3A3A3A),
    componentSourceMeta: Color(0xFF555555),
    componentCollectionFrom: Color(0xFF1D1A26),
    componentCollectionTo: Color(0xFF161616),
    componentCollectionRing: Color(0xFF1B1922),
    componentDetailHeaderBg: Color(0xFF171717),
    componentCliIconFrom: Color(0xFF2A2A2A),
    componentCliIconTo: Color(0xFF1B1B1B),
    componentCliIconText: Color(0xFFE2E2E2),
    componentLetterIconText: Color(0xFFFFFFFF),
    componentSegmentActive: Color(0xFF262626),
    componentMenuBarBg: Color(0xF5262628),
    componentMenuBarText: Color(0xFFE6E6E6),
    macosClose: Color(0xFFFF5F57),
    macosMinimize: Color(0xFFFEBC2E),
    macosZoom: Color(0xFF28C840),
  );

  static const OnColors light = OnColors(
    surfacePage: Color(0xFFF2F2F2),
    surfaceBase: Color(0xFFF8F8F8),
    surfaceSidebar: Color(0xFFF1F1F1),
    surfaceRail: Color(0xFFF5F5F5),
    surfaceCard: Color(0xFFFFFFFF),
    surfaceCardAlt: Color(0xFFF5F5F5),
    surfaceRaised: Color(0xFFEDEDED),
    surfaceChip: Color(0xFFEBEBEB),
    surfaceControl: Color(0xFFFFFFFF),
    surfaceInset: Color(0xFFF0F0F0),
    surfaceOverlay: Color(0xF0FFFFFF),
    surfacePopover: Color(0xFFFFFFFF),
    borderSubtle: Color(0x14000000),
    borderDefault: Color(0x21000000),
    borderStrong: Color(0x38000000),
    borderSidebar: Color(0xFFE5E5E5),
    textPrimary: Color(0xFF1A1A1A),
    textSecondary: Color(0xFF575757),
    textTertiary: Color(0xFF6B6B6B),
    textDisabled: Color(0xFFA6A6A6),
    textInverse: Color(0xFFFFFFFF),
    textOnAccent: Color(0xFF1B0A05),
    textAccent: Color(0xFFB83A15),
    brandCoral: Color(0xFFEE5533),
    brandSalmon: Color(0xFFA74C1B),
    brandViolet: Color(0xFF5B5BD6),
    brandGlowCore: Color(0xFFCDCDFF),
    brandLogoGradient: <Color>[Color(0xFFFFB347), Color(0xFFFF7356), Color(0xFFFF4E3A)],
    brandLogoCoreGradient: <Color>[Color(0xFFFFB347), Color(0xFFFF8F3F)],
    brandLogoCoreGradientOnLight: <Color>[Color(0xFFFFB347), Color(0xFFFF8F3F)],
    accentCoralSubtle: Color(0x1AEE5533),
    accentSalmonSubtle: Color(0x1AA74C1B),
    statusSuccess: Color(0xFF187733),
    statusSuccessSubtle: Color(0x1A187733),
    statusWarning: Color(0xFF965A00),
    statusWarningSubtle: Color(0x1A965A00),
    statusDanger: Color(0xFFC22B21),
    statusDangerSubtle: Color(0x1AC22B21),
    statusInfo: Color(0xFF1564CD),
    statusInfoSubtle: Color(0x1A1564CD),
    statusSuccessBorder: Color(0x3D187733),
    statusWarningBorder: Color(0x3D965A00),
    statusDangerBorder: Color(0x3DC22B21),
    statusInfoBorder: Color(0x3D1564CD),
    buttonPrimaryBg: Color(0xFF1F1F1F),
    buttonPrimaryHover: Color(0xFF333333),
    buttonPrimaryPressed: Color(0xFF0A0A0A),
    buttonPrimaryText: Color(0xFFFFFFFF),
    buttonSecondaryBg: Color(0xFFEBEBEB),
    buttonSecondaryHover: Color(0xFFE0E0E0),
    buttonSecondaryPressed: Color(0xFFD6D6D6),
    buttonSecondaryText: Color(0xFF1A1A1A),
    buttonAccentBg: Color(0xFFEE5533),
    buttonAccentHover: Color(0xFFF46546),
    buttonAccentPressed: Color(0xFFE24A28),
    buttonAccentText: Color(0xFF1B0A05),
    buttonDisabledBg: Color(0xFFF0F0F0),
    buttonDisabledText: Color(0xFFA6A6A6),
    chartSeries1: Color(0xFF6A61E8),
    chartSeries2: Color(0xFFD9572E),
    chartSeries3: Color(0xFF168A62),
    chartEmphasis: Color(0xFFD0602A),
    chartDeemphasis: Color(0xFFCFCFCF),
    chartGrid: Color(0xFFEBEBEB),
    chartAxis: Color(0xFFD6D6D6),
    componentSearchBg: Color(0xFFFFFFFF),
    componentCardHover: Color(0xFFFAFAFA),
    componentToggleTrack: Color(0xFFD9D9D9),
    componentToggleKnob: Color(0xFFFFFFFF),
    componentToggleKnobOn: Color(0xFFFFFFFF),
    componentTabIndicator: Color(0xFF1A1A1A),
    componentNavActive: Color(0xFFE3E3E3),
    componentHeroBg: Color(0xFFF4F3FD),
    componentCaptionBg: Color(0x8C000000),
    componentTopNavScrolled: Color(0xD9F2F2F2),
    componentScrim: Color(0x4D000000),
    componentLightboxScrim: Color(0xE0000000),
    componentModalBg: Color(0xFFFFFFFF),
    componentToastBg: Color(0xF0FFFFFF),
    componentItemActive: Color(0x0F000000),
    componentRunningBorder: Color(0x66EE5533),
    componentLogHeading: Color(0xFF1A1A1A),
    componentLogSuccess: Color(0xFF187733),
    componentMonoText: Color(0xFF333333),
    componentTimelineLine: Color(0xFFD6D6D6),
    componentTimelineDot: Color(0xFFC4C4C4),
    componentSourceMeta: Color(0xFFB0B0B0),
    componentCollectionFrom: Color(0xFFF1EEFB),
    componentCollectionTo: Color(0xFFFFFFFF),
    componentCollectionRing: Color(0xFFF8F7FD),
    componentDetailHeaderBg: Color(0xFFFFFFFF),
    componentCliIconFrom: Color(0xFF2A2A2A),
    componentCliIconTo: Color(0xFF1B1B1B),
    componentCliIconText: Color(0xFFE2E2E2),
    componentLetterIconText: Color(0xFFFFFFFF),
    componentSegmentActive: Color(0xFFFFFFFF),
    componentMenuBarBg: Color(0xF5F6F6F6),
    componentMenuBarText: Color(0xFF1F1F1F),
    macosClose: Color(0xFFFF5F57),
    macosMinimize: Color(0xFFFEBC2E),
    macosZoom: Color(0xFF28C840),
  );

  /// The OnColors of the nearest Theme, falling back to the brightness's constant when the theme has none.
  static OnColors of(BuildContext context) {
    final theme = Theme.of(context);
    return theme.extension<OnColors>() ?? (theme.brightness == Brightness.light ? light : dark);
  }

  @override
  OnColors copyWith({
    Color? surfacePage,
    Color? surfaceBase,
    Color? surfaceSidebar,
    Color? surfaceRail,
    Color? surfaceCard,
    Color? surfaceCardAlt,
    Color? surfaceRaised,
    Color? surfaceChip,
    Color? surfaceControl,
    Color? surfaceInset,
    Color? surfaceOverlay,
    Color? surfacePopover,
    Color? borderSubtle,
    Color? borderDefault,
    Color? borderStrong,
    Color? borderSidebar,
    Color? textPrimary,
    Color? textSecondary,
    Color? textTertiary,
    Color? textDisabled,
    Color? textInverse,
    Color? textOnAccent,
    Color? textAccent,
    Color? brandCoral,
    Color? brandSalmon,
    Color? brandViolet,
    Color? brandGlowCore,
    List<Color>? brandLogoGradient,
    List<Color>? brandLogoCoreGradient,
    List<Color>? brandLogoCoreGradientOnLight,
    Color? accentCoralSubtle,
    Color? accentSalmonSubtle,
    Color? statusSuccess,
    Color? statusSuccessSubtle,
    Color? statusWarning,
    Color? statusWarningSubtle,
    Color? statusDanger,
    Color? statusDangerSubtle,
    Color? statusInfo,
    Color? statusInfoSubtle,
    Color? statusSuccessBorder,
    Color? statusWarningBorder,
    Color? statusDangerBorder,
    Color? statusInfoBorder,
    Color? buttonPrimaryBg,
    Color? buttonPrimaryHover,
    Color? buttonPrimaryPressed,
    Color? buttonPrimaryText,
    Color? buttonSecondaryBg,
    Color? buttonSecondaryHover,
    Color? buttonSecondaryPressed,
    Color? buttonSecondaryText,
    Color? buttonAccentBg,
    Color? buttonAccentHover,
    Color? buttonAccentPressed,
    Color? buttonAccentText,
    Color? buttonDisabledBg,
    Color? buttonDisabledText,
    Color? chartSeries1,
    Color? chartSeries2,
    Color? chartSeries3,
    Color? chartEmphasis,
    Color? chartDeemphasis,
    Color? chartGrid,
    Color? chartAxis,
    Color? componentSearchBg,
    Color? componentCardHover,
    Color? componentToggleTrack,
    Color? componentToggleKnob,
    Color? componentToggleKnobOn,
    Color? componentTabIndicator,
    Color? componentNavActive,
    Color? componentHeroBg,
    Color? componentCaptionBg,
    Color? componentTopNavScrolled,
    Color? componentScrim,
    Color? componentLightboxScrim,
    Color? componentModalBg,
    Color? componentToastBg,
    Color? componentItemActive,
    Color? componentRunningBorder,
    Color? componentLogHeading,
    Color? componentLogSuccess,
    Color? componentMonoText,
    Color? componentTimelineLine,
    Color? componentTimelineDot,
    Color? componentSourceMeta,
    Color? componentCollectionFrom,
    Color? componentCollectionTo,
    Color? componentCollectionRing,
    Color? componentDetailHeaderBg,
    Color? componentCliIconFrom,
    Color? componentCliIconTo,
    Color? componentCliIconText,
    Color? componentLetterIconText,
    Color? componentSegmentActive,
    Color? componentMenuBarBg,
    Color? componentMenuBarText,
    Color? macosClose,
    Color? macosMinimize,
    Color? macosZoom,
  }) {
    return OnColors(
      surfacePage: surfacePage ?? this.surfacePage,
      surfaceBase: surfaceBase ?? this.surfaceBase,
      surfaceSidebar: surfaceSidebar ?? this.surfaceSidebar,
      surfaceRail: surfaceRail ?? this.surfaceRail,
      surfaceCard: surfaceCard ?? this.surfaceCard,
      surfaceCardAlt: surfaceCardAlt ?? this.surfaceCardAlt,
      surfaceRaised: surfaceRaised ?? this.surfaceRaised,
      surfaceChip: surfaceChip ?? this.surfaceChip,
      surfaceControl: surfaceControl ?? this.surfaceControl,
      surfaceInset: surfaceInset ?? this.surfaceInset,
      surfaceOverlay: surfaceOverlay ?? this.surfaceOverlay,
      surfacePopover: surfacePopover ?? this.surfacePopover,
      borderSubtle: borderSubtle ?? this.borderSubtle,
      borderDefault: borderDefault ?? this.borderDefault,
      borderStrong: borderStrong ?? this.borderStrong,
      borderSidebar: borderSidebar ?? this.borderSidebar,
      textPrimary: textPrimary ?? this.textPrimary,
      textSecondary: textSecondary ?? this.textSecondary,
      textTertiary: textTertiary ?? this.textTertiary,
      textDisabled: textDisabled ?? this.textDisabled,
      textInverse: textInverse ?? this.textInverse,
      textOnAccent: textOnAccent ?? this.textOnAccent,
      textAccent: textAccent ?? this.textAccent,
      brandCoral: brandCoral ?? this.brandCoral,
      brandSalmon: brandSalmon ?? this.brandSalmon,
      brandViolet: brandViolet ?? this.brandViolet,
      brandGlowCore: brandGlowCore ?? this.brandGlowCore,
      brandLogoGradient: brandLogoGradient ?? this.brandLogoGradient,
      brandLogoCoreGradient: brandLogoCoreGradient ?? this.brandLogoCoreGradient,
      brandLogoCoreGradientOnLight: brandLogoCoreGradientOnLight ?? this.brandLogoCoreGradientOnLight,
      accentCoralSubtle: accentCoralSubtle ?? this.accentCoralSubtle,
      accentSalmonSubtle: accentSalmonSubtle ?? this.accentSalmonSubtle,
      statusSuccess: statusSuccess ?? this.statusSuccess,
      statusSuccessSubtle: statusSuccessSubtle ?? this.statusSuccessSubtle,
      statusWarning: statusWarning ?? this.statusWarning,
      statusWarningSubtle: statusWarningSubtle ?? this.statusWarningSubtle,
      statusDanger: statusDanger ?? this.statusDanger,
      statusDangerSubtle: statusDangerSubtle ?? this.statusDangerSubtle,
      statusInfo: statusInfo ?? this.statusInfo,
      statusInfoSubtle: statusInfoSubtle ?? this.statusInfoSubtle,
      statusSuccessBorder: statusSuccessBorder ?? this.statusSuccessBorder,
      statusWarningBorder: statusWarningBorder ?? this.statusWarningBorder,
      statusDangerBorder: statusDangerBorder ?? this.statusDangerBorder,
      statusInfoBorder: statusInfoBorder ?? this.statusInfoBorder,
      buttonPrimaryBg: buttonPrimaryBg ?? this.buttonPrimaryBg,
      buttonPrimaryHover: buttonPrimaryHover ?? this.buttonPrimaryHover,
      buttonPrimaryPressed: buttonPrimaryPressed ?? this.buttonPrimaryPressed,
      buttonPrimaryText: buttonPrimaryText ?? this.buttonPrimaryText,
      buttonSecondaryBg: buttonSecondaryBg ?? this.buttonSecondaryBg,
      buttonSecondaryHover: buttonSecondaryHover ?? this.buttonSecondaryHover,
      buttonSecondaryPressed: buttonSecondaryPressed ?? this.buttonSecondaryPressed,
      buttonSecondaryText: buttonSecondaryText ?? this.buttonSecondaryText,
      buttonAccentBg: buttonAccentBg ?? this.buttonAccentBg,
      buttonAccentHover: buttonAccentHover ?? this.buttonAccentHover,
      buttonAccentPressed: buttonAccentPressed ?? this.buttonAccentPressed,
      buttonAccentText: buttonAccentText ?? this.buttonAccentText,
      buttonDisabledBg: buttonDisabledBg ?? this.buttonDisabledBg,
      buttonDisabledText: buttonDisabledText ?? this.buttonDisabledText,
      chartSeries1: chartSeries1 ?? this.chartSeries1,
      chartSeries2: chartSeries2 ?? this.chartSeries2,
      chartSeries3: chartSeries3 ?? this.chartSeries3,
      chartEmphasis: chartEmphasis ?? this.chartEmphasis,
      chartDeemphasis: chartDeemphasis ?? this.chartDeemphasis,
      chartGrid: chartGrid ?? this.chartGrid,
      chartAxis: chartAxis ?? this.chartAxis,
      componentSearchBg: componentSearchBg ?? this.componentSearchBg,
      componentCardHover: componentCardHover ?? this.componentCardHover,
      componentToggleTrack: componentToggleTrack ?? this.componentToggleTrack,
      componentToggleKnob: componentToggleKnob ?? this.componentToggleKnob,
      componentToggleKnobOn: componentToggleKnobOn ?? this.componentToggleKnobOn,
      componentTabIndicator: componentTabIndicator ?? this.componentTabIndicator,
      componentNavActive: componentNavActive ?? this.componentNavActive,
      componentHeroBg: componentHeroBg ?? this.componentHeroBg,
      componentCaptionBg: componentCaptionBg ?? this.componentCaptionBg,
      componentTopNavScrolled: componentTopNavScrolled ?? this.componentTopNavScrolled,
      componentScrim: componentScrim ?? this.componentScrim,
      componentLightboxScrim: componentLightboxScrim ?? this.componentLightboxScrim,
      componentModalBg: componentModalBg ?? this.componentModalBg,
      componentToastBg: componentToastBg ?? this.componentToastBg,
      componentItemActive: componentItemActive ?? this.componentItemActive,
      componentRunningBorder: componentRunningBorder ?? this.componentRunningBorder,
      componentLogHeading: componentLogHeading ?? this.componentLogHeading,
      componentLogSuccess: componentLogSuccess ?? this.componentLogSuccess,
      componentMonoText: componentMonoText ?? this.componentMonoText,
      componentTimelineLine: componentTimelineLine ?? this.componentTimelineLine,
      componentTimelineDot: componentTimelineDot ?? this.componentTimelineDot,
      componentSourceMeta: componentSourceMeta ?? this.componentSourceMeta,
      componentCollectionFrom: componentCollectionFrom ?? this.componentCollectionFrom,
      componentCollectionTo: componentCollectionTo ?? this.componentCollectionTo,
      componentCollectionRing: componentCollectionRing ?? this.componentCollectionRing,
      componentDetailHeaderBg: componentDetailHeaderBg ?? this.componentDetailHeaderBg,
      componentCliIconFrom: componentCliIconFrom ?? this.componentCliIconFrom,
      componentCliIconTo: componentCliIconTo ?? this.componentCliIconTo,
      componentCliIconText: componentCliIconText ?? this.componentCliIconText,
      componentLetterIconText: componentLetterIconText ?? this.componentLetterIconText,
      componentSegmentActive: componentSegmentActive ?? this.componentSegmentActive,
      componentMenuBarBg: componentMenuBarBg ?? this.componentMenuBarBg,
      componentMenuBarText: componentMenuBarText ?? this.componentMenuBarText,
      macosClose: macosClose ?? this.macosClose,
      macosMinimize: macosMinimize ?? this.macosMinimize,
      macosZoom: macosZoom ?? this.macosZoom,
    );
  }

  @override
  OnColors lerp(covariant ThemeExtension<OnColors>? other, double t) {
    if (other is! OnColors) return this;
    return OnColors(
      surfacePage: Color.lerp(surfacePage, other.surfacePage, t)!,
      surfaceBase: Color.lerp(surfaceBase, other.surfaceBase, t)!,
      surfaceSidebar: Color.lerp(surfaceSidebar, other.surfaceSidebar, t)!,
      surfaceRail: Color.lerp(surfaceRail, other.surfaceRail, t)!,
      surfaceCard: Color.lerp(surfaceCard, other.surfaceCard, t)!,
      surfaceCardAlt: Color.lerp(surfaceCardAlt, other.surfaceCardAlt, t)!,
      surfaceRaised: Color.lerp(surfaceRaised, other.surfaceRaised, t)!,
      surfaceChip: Color.lerp(surfaceChip, other.surfaceChip, t)!,
      surfaceControl: Color.lerp(surfaceControl, other.surfaceControl, t)!,
      surfaceInset: Color.lerp(surfaceInset, other.surfaceInset, t)!,
      surfaceOverlay: Color.lerp(surfaceOverlay, other.surfaceOverlay, t)!,
      surfacePopover: Color.lerp(surfacePopover, other.surfacePopover, t)!,
      borderSubtle: Color.lerp(borderSubtle, other.borderSubtle, t)!,
      borderDefault: Color.lerp(borderDefault, other.borderDefault, t)!,
      borderStrong: Color.lerp(borderStrong, other.borderStrong, t)!,
      borderSidebar: Color.lerp(borderSidebar, other.borderSidebar, t)!,
      textPrimary: Color.lerp(textPrimary, other.textPrimary, t)!,
      textSecondary: Color.lerp(textSecondary, other.textSecondary, t)!,
      textTertiary: Color.lerp(textTertiary, other.textTertiary, t)!,
      textDisabled: Color.lerp(textDisabled, other.textDisabled, t)!,
      textInverse: Color.lerp(textInverse, other.textInverse, t)!,
      textOnAccent: Color.lerp(textOnAccent, other.textOnAccent, t)!,
      textAccent: Color.lerp(textAccent, other.textAccent, t)!,
      brandCoral: Color.lerp(brandCoral, other.brandCoral, t)!,
      brandSalmon: Color.lerp(brandSalmon, other.brandSalmon, t)!,
      brandViolet: Color.lerp(brandViolet, other.brandViolet, t)!,
      brandGlowCore: Color.lerp(brandGlowCore, other.brandGlowCore, t)!,
      brandLogoGradient: _lerpColors(brandLogoGradient, other.brandLogoGradient, t),
      brandLogoCoreGradient: _lerpColors(brandLogoCoreGradient, other.brandLogoCoreGradient, t),
      brandLogoCoreGradientOnLight: _lerpColors(brandLogoCoreGradientOnLight, other.brandLogoCoreGradientOnLight, t),
      accentCoralSubtle: Color.lerp(accentCoralSubtle, other.accentCoralSubtle, t)!,
      accentSalmonSubtle: Color.lerp(accentSalmonSubtle, other.accentSalmonSubtle, t)!,
      statusSuccess: Color.lerp(statusSuccess, other.statusSuccess, t)!,
      statusSuccessSubtle: Color.lerp(statusSuccessSubtle, other.statusSuccessSubtle, t)!,
      statusWarning: Color.lerp(statusWarning, other.statusWarning, t)!,
      statusWarningSubtle: Color.lerp(statusWarningSubtle, other.statusWarningSubtle, t)!,
      statusDanger: Color.lerp(statusDanger, other.statusDanger, t)!,
      statusDangerSubtle: Color.lerp(statusDangerSubtle, other.statusDangerSubtle, t)!,
      statusInfo: Color.lerp(statusInfo, other.statusInfo, t)!,
      statusInfoSubtle: Color.lerp(statusInfoSubtle, other.statusInfoSubtle, t)!,
      statusSuccessBorder: Color.lerp(statusSuccessBorder, other.statusSuccessBorder, t)!,
      statusWarningBorder: Color.lerp(statusWarningBorder, other.statusWarningBorder, t)!,
      statusDangerBorder: Color.lerp(statusDangerBorder, other.statusDangerBorder, t)!,
      statusInfoBorder: Color.lerp(statusInfoBorder, other.statusInfoBorder, t)!,
      buttonPrimaryBg: Color.lerp(buttonPrimaryBg, other.buttonPrimaryBg, t)!,
      buttonPrimaryHover: Color.lerp(buttonPrimaryHover, other.buttonPrimaryHover, t)!,
      buttonPrimaryPressed: Color.lerp(buttonPrimaryPressed, other.buttonPrimaryPressed, t)!,
      buttonPrimaryText: Color.lerp(buttonPrimaryText, other.buttonPrimaryText, t)!,
      buttonSecondaryBg: Color.lerp(buttonSecondaryBg, other.buttonSecondaryBg, t)!,
      buttonSecondaryHover: Color.lerp(buttonSecondaryHover, other.buttonSecondaryHover, t)!,
      buttonSecondaryPressed: Color.lerp(buttonSecondaryPressed, other.buttonSecondaryPressed, t)!,
      buttonSecondaryText: Color.lerp(buttonSecondaryText, other.buttonSecondaryText, t)!,
      buttonAccentBg: Color.lerp(buttonAccentBg, other.buttonAccentBg, t)!,
      buttonAccentHover: Color.lerp(buttonAccentHover, other.buttonAccentHover, t)!,
      buttonAccentPressed: Color.lerp(buttonAccentPressed, other.buttonAccentPressed, t)!,
      buttonAccentText: Color.lerp(buttonAccentText, other.buttonAccentText, t)!,
      buttonDisabledBg: Color.lerp(buttonDisabledBg, other.buttonDisabledBg, t)!,
      buttonDisabledText: Color.lerp(buttonDisabledText, other.buttonDisabledText, t)!,
      chartSeries1: Color.lerp(chartSeries1, other.chartSeries1, t)!,
      chartSeries2: Color.lerp(chartSeries2, other.chartSeries2, t)!,
      chartSeries3: Color.lerp(chartSeries3, other.chartSeries3, t)!,
      chartEmphasis: Color.lerp(chartEmphasis, other.chartEmphasis, t)!,
      chartDeemphasis: Color.lerp(chartDeemphasis, other.chartDeemphasis, t)!,
      chartGrid: Color.lerp(chartGrid, other.chartGrid, t)!,
      chartAxis: Color.lerp(chartAxis, other.chartAxis, t)!,
      componentSearchBg: Color.lerp(componentSearchBg, other.componentSearchBg, t)!,
      componentCardHover: Color.lerp(componentCardHover, other.componentCardHover, t)!,
      componentToggleTrack: Color.lerp(componentToggleTrack, other.componentToggleTrack, t)!,
      componentToggleKnob: Color.lerp(componentToggleKnob, other.componentToggleKnob, t)!,
      componentToggleKnobOn: Color.lerp(componentToggleKnobOn, other.componentToggleKnobOn, t)!,
      componentTabIndicator: Color.lerp(componentTabIndicator, other.componentTabIndicator, t)!,
      componentNavActive: Color.lerp(componentNavActive, other.componentNavActive, t)!,
      componentHeroBg: Color.lerp(componentHeroBg, other.componentHeroBg, t)!,
      componentCaptionBg: Color.lerp(componentCaptionBg, other.componentCaptionBg, t)!,
      componentTopNavScrolled: Color.lerp(componentTopNavScrolled, other.componentTopNavScrolled, t)!,
      componentScrim: Color.lerp(componentScrim, other.componentScrim, t)!,
      componentLightboxScrim: Color.lerp(componentLightboxScrim, other.componentLightboxScrim, t)!,
      componentModalBg: Color.lerp(componentModalBg, other.componentModalBg, t)!,
      componentToastBg: Color.lerp(componentToastBg, other.componentToastBg, t)!,
      componentItemActive: Color.lerp(componentItemActive, other.componentItemActive, t)!,
      componentRunningBorder: Color.lerp(componentRunningBorder, other.componentRunningBorder, t)!,
      componentLogHeading: Color.lerp(componentLogHeading, other.componentLogHeading, t)!,
      componentLogSuccess: Color.lerp(componentLogSuccess, other.componentLogSuccess, t)!,
      componentMonoText: Color.lerp(componentMonoText, other.componentMonoText, t)!,
      componentTimelineLine: Color.lerp(componentTimelineLine, other.componentTimelineLine, t)!,
      componentTimelineDot: Color.lerp(componentTimelineDot, other.componentTimelineDot, t)!,
      componentSourceMeta: Color.lerp(componentSourceMeta, other.componentSourceMeta, t)!,
      componentCollectionFrom: Color.lerp(componentCollectionFrom, other.componentCollectionFrom, t)!,
      componentCollectionTo: Color.lerp(componentCollectionTo, other.componentCollectionTo, t)!,
      componentCollectionRing: Color.lerp(componentCollectionRing, other.componentCollectionRing, t)!,
      componentDetailHeaderBg: Color.lerp(componentDetailHeaderBg, other.componentDetailHeaderBg, t)!,
      componentCliIconFrom: Color.lerp(componentCliIconFrom, other.componentCliIconFrom, t)!,
      componentCliIconTo: Color.lerp(componentCliIconTo, other.componentCliIconTo, t)!,
      componentCliIconText: Color.lerp(componentCliIconText, other.componentCliIconText, t)!,
      componentLetterIconText: Color.lerp(componentLetterIconText, other.componentLetterIconText, t)!,
      componentSegmentActive: Color.lerp(componentSegmentActive, other.componentSegmentActive, t)!,
      componentMenuBarBg: Color.lerp(componentMenuBarBg, other.componentMenuBarBg, t)!,
      componentMenuBarText: Color.lerp(componentMenuBarText, other.componentMenuBarText, t)!,
      macosClose: Color.lerp(macosClose, other.macosClose, t)!,
      macosMinimize: Color.lerp(macosMinimize, other.macosMinimize, t)!,
      macosZoom: Color.lerp(macosZoom, other.macosZoom, t)!,
    );
  }
}

/// Elevation shadows (tokens shadow.*); inset layers are omitted in Flutter.
@immutable
class OnShadows extends ThemeExtension<OnShadows> {
  const OnShadows({
    required this.window,
    required this.popover,
    required this.modal,
    required this.toast,
    required this.floatIcon,
    required this.appIcon,
    required this.iconText,
    required this.focusRing,
    required this.segment,
    required this.knob,
  });

  final List<BoxShadow> window;
  final List<BoxShadow> popover;
  final List<BoxShadow> modal;
  final List<BoxShadow> toast;
  final List<BoxShadow> floatIcon;
  final List<BoxShadow> appIcon;
  /// Letter-tile shadow preserves readability on light backgrounds.
  final List<BoxShadow> iconText;
  /// Keyboard focus ring: 2 px gap plus 2 px coral (3.5:1 against white in light mode).
  final List<BoxShadow> focusRing;
  /// Selected segment lift; none (a transparent shadow) in dark mode.
  final List<BoxShadow> segment;
  /// Toggle knob lift; the white knob needs it on the light track.
  final List<BoxShadow> knob;

  static const OnShadows dark = OnShadows(
    window: <BoxShadow>[BoxShadow(color: Color(0xA6000000), offset: Offset(0, 50), blurRadius: 140, spreadRadius: 0), BoxShadow(color: Color(0xFF000000), offset: Offset(0, 0), blurRadius: 0, spreadRadius: 0.5)],
    popover: <BoxShadow>[BoxShadow(color: Color(0x99000000), offset: Offset(0, 24), blurRadius: 60, spreadRadius: 0)],
    modal: <BoxShadow>[BoxShadow(color: Color(0x99000000), offset: Offset(0, 30), blurRadius: 80, spreadRadius: 0)],
    toast: <BoxShadow>[BoxShadow(color: Color(0x80000000), offset: Offset(0, 18), blurRadius: 40, spreadRadius: 0)],
    floatIcon: <BoxShadow>[BoxShadow(color: Color(0x8C000000), offset: Offset(0, 18), blurRadius: 30, spreadRadius: 0)],
    appIcon: <BoxShadow>[BoxShadow(color: Color(0x66000000), offset: Offset(0, 1), blurRadius: 2, spreadRadius: 0)],
    iconText: <BoxShadow>[BoxShadow(color: Color(0x4D000000), offset: Offset(0, 1), blurRadius: 2, spreadRadius: 0)],
    focusRing: <BoxShadow>[BoxShadow(color: Color(0xFF131313), offset: Offset(0, 0), blurRadius: 0, spreadRadius: 2), BoxShadow(color: Color(0xFFFF7356), offset: Offset(0, 0), blurRadius: 0, spreadRadius: 4)],
    segment: <BoxShadow>[],
    knob: <BoxShadow>[],
  );

  static const OnShadows light = OnShadows(
    window: <BoxShadow>[BoxShadow(color: Color(0x29000000), offset: Offset(0, 40), blurRadius: 100, spreadRadius: 0), BoxShadow(color: Color(0x29000000), offset: Offset(0, 0), blurRadius: 0, spreadRadius: 0.5)],
    popover: <BoxShadow>[BoxShadow(color: Color(0x1F000000), offset: Offset(0, 12), blurRadius: 40, spreadRadius: 0), BoxShadow(color: Color(0x0A000000), offset: Offset(0, 2), blurRadius: 6, spreadRadius: 0)],
    modal: <BoxShadow>[BoxShadow(color: Color(0x29000000), offset: Offset(0, 24), blurRadius: 64, spreadRadius: 0)],
    toast: <BoxShadow>[BoxShadow(color: Color(0x1F000000), offset: Offset(0, 10), blurRadius: 30, spreadRadius: 0)],
    floatIcon: <BoxShadow>[BoxShadow(color: Color(0x29000000), offset: Offset(0, 14), blurRadius: 28, spreadRadius: 0)],
    appIcon: <BoxShadow>[BoxShadow(color: Color(0x1F000000), offset: Offset(0, 1), blurRadius: 2, spreadRadius: 0)],
    iconText: <BoxShadow>[BoxShadow(color: Color(0x4D000000), offset: Offset(0, 1), blurRadius: 2, spreadRadius: 0)],
    focusRing: <BoxShadow>[BoxShadow(color: Color(0xFFFFFFFF), offset: Offset(0, 0), blurRadius: 0, spreadRadius: 2), BoxShadow(color: Color(0xFFEE5533), offset: Offset(0, 0), blurRadius: 0, spreadRadius: 4)],
    segment: <BoxShadow>[BoxShadow(color: Color(0x1A000000), offset: Offset(0, 1), blurRadius: 2, spreadRadius: 0), BoxShadow(color: Color(0x14000000), offset: Offset(0, 0), blurRadius: 0, spreadRadius: 0.5)],
    knob: <BoxShadow>[BoxShadow(color: Color(0x38000000), offset: Offset(0, 1), blurRadius: 2, spreadRadius: 0), BoxShadow(color: Color(0x14000000), offset: Offset(0, 0), blurRadius: 0, spreadRadius: 0.5)],
  );

  /// The OnShadows of the nearest Theme, falling back to the brightness's constant when the theme has none.
  static OnShadows of(BuildContext context) {
    final theme = Theme.of(context);
    return theme.extension<OnShadows>() ?? (theme.brightness == Brightness.light ? light : dark);
  }

  @override
  OnShadows copyWith({
    List<BoxShadow>? window,
    List<BoxShadow>? popover,
    List<BoxShadow>? modal,
    List<BoxShadow>? toast,
    List<BoxShadow>? floatIcon,
    List<BoxShadow>? appIcon,
    List<BoxShadow>? iconText,
    List<BoxShadow>? focusRing,
    List<BoxShadow>? segment,
    List<BoxShadow>? knob,
  }) {
    return OnShadows(
      window: window ?? this.window,
      popover: popover ?? this.popover,
      modal: modal ?? this.modal,
      toast: toast ?? this.toast,
      floatIcon: floatIcon ?? this.floatIcon,
      appIcon: appIcon ?? this.appIcon,
      iconText: iconText ?? this.iconText,
      focusRing: focusRing ?? this.focusRing,
      segment: segment ?? this.segment,
      knob: knob ?? this.knob,
    );
  }

  @override
  OnShadows lerp(covariant ThemeExtension<OnShadows>? other, double t) {
    if (other is! OnShadows) return this;
    return OnShadows(
      window: BoxShadow.lerpList(window, other.window, t)!,
      popover: BoxShadow.lerpList(popover, other.popover, t)!,
      modal: BoxShadow.lerpList(modal, other.modal, t)!,
      toast: BoxShadow.lerpList(toast, other.toast, t)!,
      floatIcon: BoxShadow.lerpList(floatIcon, other.floatIcon, t)!,
      appIcon: BoxShadow.lerpList(appIcon, other.appIcon, t)!,
      iconText: BoxShadow.lerpList(iconText, other.iconText, t)!,
      focusRing: BoxShadow.lerpList(focusRing, other.focusRing, t)!,
      segment: BoxShadow.lerpList(segment, other.segment, t)!,
      knob: BoxShadow.lerpList(knob, other.knob, t)!,
    );
  }
}

List<Color> _lerpColors(List<Color> a, List<Color> b, double t) => <Color>[
  for (var i = 0; i < a.length && i < b.length; i++) Color.lerp(a[i], b[i], t)!,
];

/// Spacing scale in logical pixels (tokens space.*): s0_5 is space 0.5 (2), s4 is space 4 (16).
abstract final class OnSpace {
  static const double s0 = 0;
  static const double s0_5 = 2;
  static const double s1 = 4;
  static const double s1_5 = 6;
  static const double s2 = 8;
  static const double s2_5 = 10;
  static const double s3 = 12;
  static const double s3_5 = 14;
  static const double s4 = 16;
  static const double s5 = 20;
  static const double s6 = 24;
  static const double s7 = 28;
  static const double s8 = 32;
  static const double s10 = 40;
  static const double s12 = 48;
  static const double s16 = 64;
  static const double s20 = 80;
}

/// Corner radii (tokens radius.*); standard is radius.default.
abstract final class OnRadius {
  static const double tiny = 4;
  static const double small = 7;
  static const double standard = 10;
  /// Screenshot cards, menus, overlays.
  static const double panel = 12;
  static const double big = 14;
  static const double huge = 20;
  static const double xl = 28;
  static const double full = 9999;
  /// App icon radius: 23% of side length, approximating macOS superellipses.
  static const double appIconFraction = 0.23;
}

/// Font families (tokens font.family.*): the first entry, then fallbacks in order.
abstract final class OnFonts {
  static const String sans = "Inter Variable";
  static const List<String> sansFallback = <String>["Inter", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", "-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "sans-serif"];
  static const String sansZh = "Inter Variable";
  static const List<String> sansZhFallback = <String>["Inter", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", "-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "sans-serif"];
  static const String sansJa = "Inter Variable";
  static const List<String> sansJaFallback = <String>["Inter", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Noto Sans JP", "-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "sans-serif"];
  static const String mono = "SF Mono";
  static const List<String> monoFallback = <String>["JetBrains Mono", "ui-monospace", "Menlo", "Consolas", "Liberation Mono", "monospace"];
}

/// Type scale (tokens typography.*): size, line height and weight; letter spacing converted from em to pixels.
/// label is drawn uppercase (textTransform), which TextStyle cannot express: uppercase the string.
abstract final class OnTypography {
  /// Web homepage hero heading
  static const TextStyle hero = TextStyle(fontSize: 76, height: 1.026, fontWeight: FontWeight.w600, letterSpacing: -2.66);
  /// Web section heading
  static const TextStyle section = TextStyle(fontSize: 46, height: 1.087, fontWeight: FontWeight.w600, letterSpacing: -1.38);
  /// Featured hero heading
  static const TextStyle display = TextStyle(fontSize: 40, height: 1.1, fontWeight: FontWeight.w600, letterSpacing: -1.2);
  /// Page heading
  static const TextStyle title1 = TextStyle(fontSize: 28, height: 1.214, fontWeight: FontWeight.w600, letterSpacing: -0.56);
  /// Dialog title and compact detail header
  static const TextStyle title2 = TextStyle(fontSize: 22, height: 1.273, fontWeight: FontWeight.w600, letterSpacing: -0.44);
  /// Section heading
  static const TextStyle headline = TextStyle(fontSize: 16, height: 1.5, fontWeight: FontWeight.w600, letterSpacing: -0.16);
  /// Statistics values with proportional numerals
  static const TextStyle statValue = TextStyle(fontSize: 20, height: 1.3, fontWeight: FontWeight.w600, letterSpacing: -0.3);
  /// Body text
  static const TextStyle body = TextStyle(fontSize: 14, height: 1.571, fontWeight: FontWeight.w400);
  /// List and table body text
  static const TextStyle bodySm = TextStyle(fontSize: 13, height: 1.538, fontWeight: FontWeight.w400);
  /// Secondary information
  static const TextStyle caption = TextStyle(fontSize: 12, height: 1.5, fontWeight: FontWeight.w400);
  /// Group labels, such as sidebar section titles
  static const TextStyle label = TextStyle(fontSize: 11, height: 1.455, fontWeight: FontWeight.w600, letterSpacing: 0.88);
  /// Commands, versions, and logs
  static const TextStyle mono = TextStyle(fontSize: 12, height: 1.5, fontWeight: FontWeight.w400, fontFamily: OnFonts.mono, fontFamilyFallback: OnFonts.monoFallback);
}

/// Motion (tokens motion.*): durations and easing curves.
abstract final class OnMotion {
  static const Duration fast = Duration(milliseconds: 120);
  static const Duration base = Duration(milliseconds: 200);
  static const Duration slow = Duration(milliseconds: 320);
  static const Cubic standard = Cubic(0.2, 0.8, 0.2, 1);
  static const Cubic emphasized = Cubic(0.3, 0, 0, 1);
  static const Cubic exit = Cubic(0.4, 0, 1, 1);
}

/// Layout metrics (tokens layout.*) in logical pixels.
abstract final class OnLayout {
  static const double desktopWindowDefaultWidth = 1280;
  static const double desktopWindowDefaultHeight = 820;
  static const double desktopWindowMinWidth = 1100;
  static const double desktopWindowMinHeight = 700;
  static const double desktopSidebarWidth = 224;
  static const double desktopToolbarHeight = 52;
  static const double desktopRailWidth = 288;
  static const double desktopContentPaddingX = 28;
  static const double desktopRailPadding = 20;
  static const double desktopTrafficLightInsetX = 18;
  static const double desktopTrafficLightInsetY = 22;
  static const double webPageMaxWidth = 1240;
  static const double webPageGutter = 24;
  static const double webNavHeight = 64;
  static const double webBreakpointsSm = 640;
  static const double webBreakpointsMd = 768;
  static const double webBreakpointsLg = 1024;
  static const double webBreakpointsXl = 1280;
  static const double webBreakpoints2xl = 1440;
}
