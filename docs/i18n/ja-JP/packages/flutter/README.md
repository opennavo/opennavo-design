[English](../../../../../packages/flutter/README.md) · [简体中文](../../../zh-CN/packages/flutter/README.md) · [繁體中文](../../../zh-Hant/packages/flutter/README.md) · **日本語** · [Español](../../../es-ES/packages/flutter/README.md) · [Português (Brasil)](../../../pt-BR/packages/flutter/README.md) · [Русский](../../../ru-RU/packages/flutter/README.md) · [Deutsch](../../../de-DE/packages/flutter/README.md) · [Français](../../../fr-FR/packages/flutter/README.md) · [Italiano](../../../it-IT/packages/flutter/README.md)

> 英語が原文です。翻訳はローカル環境で機械翻訳を用いて作成した草稿で、母語話者による確認が必要です。コードとライセンス原文は変更していません。

<a id="opennavo_design-flutter"></a>

# opennavo design(オープンナヴォー)Flutter)

OpenNavo デザイントークンのための Flutter: テーマカラーと影を `ThemeExtension`s と `dark` そして、 `light` 定数,
定数としてのスケールと `ThemeData` ビルダー。

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

- `OnColors` / `OnShadows` テーマがアニメーションするときに補間する。
- `OnTypography` スタイルは、サイズ、高さ、重量、追跡を運ぶ(論理ピクセルに変換されるem); `label` 意味は
  呼び出し側が上書きする。
- `lib/src/tokens.g.dart` から生成される `tokens/tokens.json`; `lib/src/theme.dart` 手書きです。

```sh
flutter pub get && flutter analyze && flutter test
```
