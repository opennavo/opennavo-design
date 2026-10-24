import 'package:flutter/material.dart';

import 'tokens.g.dart';

/// Builds a Material [ThemeData] from the OpenNavo tokens for [brightness].
///
/// The token colors stay available through `OnColors.of(context)` and `OnShadows.of(context)`, which is what
/// OpenNavo components read; the Material color scheme only maps the closest roles for stock widgets.
ThemeData onThemeData(Brightness brightness) {
  final colors = brightness == Brightness.light ? OnColors.light : OnColors.dark;
  final shadows = brightness == Brightness.light ? OnShadows.light : OnShadows.dark;
  final scheme = ColorScheme(
    brightness: brightness,
    primary: colors.buttonAccentBg,
    onPrimary: colors.buttonAccentText,
    secondary: colors.buttonPrimaryBg,
    onSecondary: colors.buttonPrimaryText,
    error: colors.statusDanger,
    onError: colors.textInverse,
    surface: colors.surfaceCard,
    onSurface: colors.textPrimary,
    onSurfaceVariant: colors.textSecondary,
    surfaceContainerLowest: colors.surfacePage,
    surfaceContainerLow: colors.surfaceBase,
    surfaceContainer: colors.surfaceCard,
    surfaceContainerHigh: colors.surfaceCardAlt,
    surfaceContainerHighest: colors.surfaceRaised,
    outline: colors.borderDefault,
    outlineVariant: colors.borderSubtle,
    shadow: const Color(0xFF000000),
    scrim: colors.componentScrim,
    inverseSurface: colors.buttonPrimaryBg,
    onInverseSurface: colors.buttonPrimaryText,
  );
  final text = TextTheme(
    displayLarge: OnTypography.hero,
    displayMedium: OnTypography.section,
    displaySmall: OnTypography.display,
    headlineMedium: OnTypography.title1,
    headlineSmall: OnTypography.title2,
    titleMedium: OnTypography.headline,
    bodyLarge: OnTypography.body,
    bodyMedium: OnTypography.bodySm,
    bodySmall: OnTypography.caption,
    labelSmall: OnTypography.label,
  ).apply(
    fontFamily: OnFonts.sans,
    fontFamilyFallback: OnFonts.sansFallback,
    bodyColor: colors.textPrimary,
    displayColor: colors.textPrimary,
  );
  return ThemeData(
    useMaterial3: true,
    brightness: brightness,
    colorScheme: scheme,
    scaffoldBackgroundColor: colors.surfaceBase,
    canvasColor: colors.surfaceBase,
    dividerColor: colors.borderSubtle,
    textTheme: text,
    extensions: <ThemeExtension<dynamic>>[colors, shadows],
  );
}
