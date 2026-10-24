[English](../../../CHANGELOG.md) · **简体中文** · [繁體中文](../zh-Hant/CHANGELOG.md) · [日本語](../ja-JP/CHANGELOG.md) · [Español](../es-ES/CHANGELOG.md) · [Português (Brasil)](../pt-BR/CHANGELOG.md) · [Русский](../ru-RU/CHANGELOG.md) · [Deutsch](../de-DE/CHANGELOG.md) · [Français](../fr-FR/CHANGELOG.md) · [Italiano](../it-IT/CHANGELOG.md)

> 英文为源文。新增翻译由本机离线工具辅助生成，仍需母语审校；代码和许可证原文保持不变。

<a id="changelog"></a>

# 更改日志

<a id="010--unreleased"></a>

## 0.1.0 — 未释放

第一版,从 OpenNavo 桌面应用程序和网站。

- 托肯斯:每种颜色的暗淡主题;光模式遵循系统或一个 `data-theme` 属性, 也可以在
  子树。 光模式的新角色 : `surface.popover`, `text.accent`, `component.segmentActive`,
  `status.*Border`, `component.menuBarBg` / `menuBarText`, `shadow.segment`, `shadow.knob`,
  `effect.accentGlowOpacity`.
- 产出: CSS 变量,键入的 TS 值, UnoCSS 预设, Tailwind CSS v4 主题和 v3 预设, DTCG 每个主题的文件,
  Flutter `ThemeExtension`s和主题构建器, SwiftUI 动态颜色和尺度,一个生成的符号参考.
- `@opennavo/design-vue`: 通用软件 OpenNavo 组件, 主题助手( E)`applyThemePreference`,
  `themeBootScript`),基底样式和一个组件画廊.
- 规格 `docs/`.
