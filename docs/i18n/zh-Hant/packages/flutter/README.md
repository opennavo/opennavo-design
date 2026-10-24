[English](../../../../../packages/flutter/README.md) · [简体中文](../../../zh-CN/packages/flutter/README.md) · **繁體中文** · [日本語](../../../ja-JP/packages/flutter/README.md) · [Español](../../../es-ES/packages/flutter/README.md) · [Português (Brasil)](../../../pt-BR/packages/flutter/README.md) · [Русский](../../../ru-RU/packages/flutter/README.md) · [Deutsch](../../../de-DE/packages/flutter/README.md) · [Français](../../../fr-FR/packages/flutter/README.md) · [Italiano](../../../it-IT/packages/flutter/README.md)

> 英文為來源文件。新增翻譯由本機離線工具輔助產生，仍需母語審校；程式碼與授權條款原文維持不變。

<a id="opennavo_design-flutter"></a>

# 開源軟體國際化之簡體中文組Flutter)

OpenNavo 設計符號 Flutter: 主題顏色和陰影為 `ThemeExtension`與 `dark` 財務報告和已審計財務報表 `light` 常數,
縮放為常數,和 a `ThemeData` 建業者.

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

- `OnColors` / `OnShadows` 當主題動畫時插入 。
- `OnTypography` 樣式帶有大小、高度、重量和跟蹤(它們轉換成邏輯畫素); `label` 意思是說
  被呼叫者大寫。
- `lib/src/tokens.g.dart` 生成來源於 `tokens/tokens.json`; `lib/src/theme.dart` 是手寫的。

```sh
flutter pub get && flutter analyze && flutter test
```
