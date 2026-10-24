[English](../../../../../packages/flutter/README.md) · [简体中文](../../../zh-CN/packages/flutter/README.md) · [繁體中文](../../../zh-Hant/packages/flutter/README.md) · [日本語](../../../ja-JP/packages/flutter/README.md) · [Español](../../../es-ES/packages/flutter/README.md) · [Português (Brasil)](../../../pt-BR/packages/flutter/README.md) · [Русский](../../../ru-RU/packages/flutter/README.md) · **Deutsch** · [Français](../../../fr-FR/packages/flutter/README.md) · [Italiano](../../../it-IT/packages/flutter/README.md)

> Englisch ist die Ausgangssprache. Die Übersetzungen wurden lokal maschinell erstellt und müssen sprachlich geprüft werden. Code und Lizenztexte bleiben unverändert.

<a id="opennavo_design-flutter"></a>

# opennavo designFlutter)

OpenNavo Design-Token für Flutter: Themenfarben und Schatten als `ThemeExtension`s mit `dark` und `light` Konstanten,
Skalen als Konstanten und eine `ThemeData` Bauunternehmer.

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

- `OnColors` / `OnShadows` interpolieren, wenn das Thema animiert wird.
- `OnTypography` Stile tragen Größe, Höhe, Gewicht und Tracking (em in logische Pixel konvertiert); `label` ist gemeint
  durch den Anrufer aufgesetzt werden.
- `lib/src/tokens.g.dart` erzeugt wird aus `tokens/tokens.json`; `lib/src/theme.dart` ist handschriftlich.

```sh
flutter pub get && flutter analyze && flutter test
```
