[English](../../../../../packages/flutter/README.md) · [简体中文](../../../zh-CN/packages/flutter/README.md) · [繁體中文](../../../zh-Hant/packages/flutter/README.md) · [日本語](../../../ja-JP/packages/flutter/README.md) · **Español** · [Português (Brasil)](../../../pt-BR/packages/flutter/README.md) · [Русский](../../../ru-RU/packages/flutter/README.md) · [Deutsch](../../../de-DE/packages/flutter/README.md) · [Français](../../../fr-FR/packages/flutter/README.md) · [Italiano](../../../it-IT/packages/flutter/README.md)

> El inglés es el original. Las traducciones son borradores realizados con traducción automática local y requieren revisión humana. El código y los textos de las licencias se conservan.

<a id="opennavo_design-flutter"></a>

# opennavo design ( opennavo design)Flutter)

OpenNavo Tokens de diseño para Flutter: colores temáticos y sombras como `ThemeExtension`s con `dark` y `light` constantes,
escalas como constantes, y una `ThemeData` constructor.

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

- `OnColors` / `OnShadows` interpolar cuando el tema anima.
- `OnTypography` estilos llevan tamaño, altura, peso y seguimiento (em convertidos a píxeles lógicos); `label` Se entiende.
  para ser tapado por el callador.
- `lib/src/tokens.g.dart` se genera a partir de `tokens/tokens.json`; `lib/src/theme.dart` está escrito a mano.

```sh
flutter pub get && flutter analyze && flutter test
```
