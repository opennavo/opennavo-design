[English](../../../../../packages/flutter/README.md) · [简体中文](../../../zh-CN/packages/flutter/README.md) · [繁體中文](../../../zh-Hant/packages/flutter/README.md) · [日本語](../../../ja-JP/packages/flutter/README.md) · [Español](../../../es-ES/packages/flutter/README.md) · [Português (Brasil)](../../../pt-BR/packages/flutter/README.md) · [Русский](../../../ru-RU/packages/flutter/README.md) · [Deutsch](../../../de-DE/packages/flutter/README.md) · **Français** · [Italiano](../../../it-IT/packages/flutter/README.md)

> La version anglaise fait référence. Les traductions sont des brouillons produits localement par traduction automatique et nécessitent une relecture humaine. Le code et les textes des licences restent inchangés.

<a id="opennavo_design-flutter"></a>

# opennavo design (Flutter)

OpenNavo Jetons de conception pour Flutter: couleurs thématiques et ombres comme `ThemeExtension`s avec `dark` et `light` constantes,
des échelles comme constantes, et un `ThemeData` constructeur.

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

- `OnColors` / `OnShadows` interpoler quand le thème anime.
- `OnTypography` les styles portent la taille, la taille, le poids et le suivi (ils convertis en pixels logiques); `label` est sensé
  être en majuscules par l'appelant.
- `lib/src/tokens.g.dart` est généré à partir de `tokens/tokens.json`; `lib/src/theme.dart` est manuscrit.

```sh
flutter pub get && flutter analyze && flutter test
```
