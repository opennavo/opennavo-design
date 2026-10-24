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
