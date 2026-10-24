[English](../../../../../packages/flutter/README.md) · [简体中文](../../../zh-CN/packages/flutter/README.md) · [繁體中文](../../../zh-Hant/packages/flutter/README.md) · [日本語](../../../ja-JP/packages/flutter/README.md) · [Español](../../../es-ES/packages/flutter/README.md) · **Português (Brasil)** · [Русский](../../../ru-RU/packages/flutter/README.md) · [Deutsch](../../../de-DE/packages/flutter/README.md) · [Français](../../../fr-FR/packages/flutter/README.md) · [Italiano](../../../it-IT/packages/flutter/README.md)

> O inglês é a fonte. As traduções são rascunhos feitos com tradução automática local e precisam de revisão humana. O código e os textos das licenças são preservados.

<a id="opennavo_design-flutter"></a>

# opennavo design (Flutter)

OpenNavo Desenho de fichas para Flutter: cores do tema e sombras como `ThemeExtension`s com `dark` e `light` constantes,
escalas como constantes, e uma `ThemeData` Construtor.

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

- `OnColors` / `OnShadows` interpolar quando o tema anima.
- `OnTypography` estilos carregam tamanho, altura, peso e rastreamento (em convertido em pixels lógicos); `label` significado
  ser descascado pelo chamador.
- `lib/src/tokens.g.dart` é gerado a partir de `tokens/tokens.json`; `lib/src/theme.dart` está escrito à mão.

```sh
flutter pub get && flutter analyze && flutter test
```
