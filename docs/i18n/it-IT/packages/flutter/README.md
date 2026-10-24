[English](../../../../../packages/flutter/README.md) · [简体中文](../../../zh-CN/packages/flutter/README.md) · [繁體中文](../../../zh-Hant/packages/flutter/README.md) · [日本語](../../../ja-JP/packages/flutter/README.md) · [Español](../../../es-ES/packages/flutter/README.md) · [Português (Brasil)](../../../pt-BR/packages/flutter/README.md) · [Русский](../../../ru-RU/packages/flutter/README.md) · [Deutsch](../../../de-DE/packages/flutter/README.md) · [Français](../../../fr-FR/packages/flutter/README.md) · **Italiano**

> La versione inglese è il riferimento. Le traduzioni sono bozze prodotte localmente con traduzione automatica e richiedono una revisione umana. Il codice e i testi delle licenze restano invariati.

<a id="opennavo_design-flutter"></a>

# opennavo design (in inglese)Flutter)

OpenNavo Token di progettazione per Flutter: colori e ombre a tema come `ThemeExtension`con `dark` e `light` costanti,
scale come costanti, e un `ThemeData` costruttore.

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

- `OnColors` / `OnShadows` interpolare quando il tema anima.
- `OnTypography` stili trasportano dimensioni, altezza, peso e tracciamento (effettuato in pixel logici); `label` è significato
  per essere maiuscolato dal chiamante.
- `lib/src/tokens.g.dart` è generato da `tokens/tokens.json`; `lib/src/theme.dart` è scritto a mano.

```sh
flutter pub get && flutter analyze && flutter test
```
