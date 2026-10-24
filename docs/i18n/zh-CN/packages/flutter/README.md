[English](../../../../../packages/flutter/README.md) · **简体中文** · [繁體中文](../../../zh-Hant/packages/flutter/README.md) · [日本語](../../../ja-JP/packages/flutter/README.md) · [Español](../../../es-ES/packages/flutter/README.md) · [Português (Brasil)](../../../pt-BR/packages/flutter/README.md) · [Русский](../../../ru-RU/packages/flutter/README.md) · [Deutsch](../../../de-DE/packages/flutter/README.md) · [Français](../../../fr-FR/packages/flutter/README.md) · [Italiano](../../../it-IT/packages/flutter/README.md)

> 英文为源文。新增翻译由本机离线工具辅助生成，仍需母语审校；代码和许可证原文保持不变。

<a id="opennavo_design-flutter"></a>

# 开源软件国际化之简体中文组Flutter)

OpenNavo 设计符号 Flutter: 主题颜色和阴影为 `ThemeExtension`与 `dark` 财务报告和已审计财务报表 `light` 常数,
缩放为常数,和 a `ThemeData` 建业者.

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

- `OnColors` / `OnShadows` 当主题动画时插入 。
- `OnTypography` 样式带有大小、高度、重量和跟踪(它们转换成逻辑像素); `label` 意思是说
  被呼叫者大写。
- `lib/src/tokens.g.dart` 生成来源于 `tokens/tokens.json`; `lib/src/theme.dart` 是手写的。

```sh
flutter pub get && flutter analyze && flutter test
```
