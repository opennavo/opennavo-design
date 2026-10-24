[English](../../../../../packages/flutter/README.md) · [简体中文](../../../zh-CN/packages/flutter/README.md) · [繁體中文](../../../zh-Hant/packages/flutter/README.md) · [日本語](../../../ja-JP/packages/flutter/README.md) · [Español](../../../es-ES/packages/flutter/README.md) · [Português (Brasil)](../../../pt-BR/packages/flutter/README.md) · **Русский** · [Deutsch](../../../de-DE/packages/flutter/README.md) · [Français](../../../fr-FR/packages/flutter/README.md) · [Italiano](../../../it-IT/packages/flutter/README.md)

> Оригинал написан на английском. Переводы подготовлены локально с помощью машинного перевода и требуют проверки носителями языка. Код и тексты лицензий сохранены.

<a id="opennavo_design-flutter"></a>

# opennavo design (англ.)Flutter)

OpenNavo Дизайн токенов для FlutterЦвета тем и тени как `ThemeExtension`с `dark` и `light` константы,
шкалы как константы, а `ThemeData` Строитель.

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

- `OnColors` / `OnShadows` Интерполируйте, когда тема оживляет.
- `OnTypography` стили несут размер, высоту, вес и отслеживание (превращаются в логические пиксели); `label` подразумевается
  Чтобы быть в курсе дела звонящего.
- `lib/src/tokens.g.dart` генерируется из `tokens/tokens.json`; `lib/src/theme.dart` Он написан от руки.

```sh
flutter pub get && flutter analyze && flutter test
```
