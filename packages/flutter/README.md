**English** · [简体中文](../../docs/i18n/zh-CN/packages/flutter/README.md) · [繁體中文](../../docs/i18n/zh-Hant/packages/flutter/README.md) · [日本語](../../docs/i18n/ja-JP/packages/flutter/README.md) · [Español](../../docs/i18n/es-ES/packages/flutter/README.md) · [Português (Brasil)](../../docs/i18n/pt-BR/packages/flutter/README.md) · [Русский](../../docs/i18n/ru-RU/packages/flutter/README.md) · [Deutsch](../../docs/i18n/de-DE/packages/flutter/README.md) · [Français](../../docs/i18n/fr-FR/packages/flutter/README.md) · [Italiano](../../docs/i18n/it-IT/packages/flutter/README.md)

# opennavo_design (Flutter)

OpenNavo Design tokens for Flutter: theme colors and shadows as `ThemeExtension`s with `dark` and `light` constants,
scales as constants, and a `ThemeData` builder.

```yaml
dependencies:
  opennavo_design:
    git:
      url: https://github.com/opennavo/opennavo-design.git
      path: packages/flutter
```

```dart
import 'package:opennavo_design/opennavo_design.dart';

MaterialApp(
  theme: onThemeData(Brightness.light),
  darkTheme: onThemeData(Brightness.dark),
  themeMode: ThemeMode.system,
);

// In a widget:
final colors = OnColors.of(context);
Container(
  padding: const EdgeInsets.all(OnSpace.s4),
  decoration: BoxDecoration(
    color: colors.surfaceCard,
    borderRadius: BorderRadius.circular(OnRadius.big),
    border: Border.all(color: colors.borderSubtle),
    boxShadow: OnShadows.of(context).popover,
  ),
  child: Text('Updates', style: OnTypography.headline.copyWith(color: colors.textPrimary)),
);
```

- `OnColors` / `OnShadows` interpolate when the theme animates.
- `OnTypography` styles carry size, height, weight and tracking (em converted to logical pixels); `label` is meant
  to be uppercased by the caller.
- `lib/src/tokens.g.dart` is generated from `tokens/tokens.json`; `lib/src/theme.dart` is hand-written.

```sh
flutter pub get && flutter analyze && flutter test
```
