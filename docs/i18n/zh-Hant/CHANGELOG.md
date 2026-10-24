[English](../../../CHANGELOG.md) · [简体中文](../zh-CN/CHANGELOG.md) · **繁體中文** · [日本語](../ja-JP/CHANGELOG.md) · [Español](../es-ES/CHANGELOG.md) · [Português (Brasil)](../pt-BR/CHANGELOG.md) · [Русский](../ru-RU/CHANGELOG.md) · [Deutsch](../de-DE/CHANGELOG.md) · [Français](../fr-FR/CHANGELOG.md) · [Italiano](../it-IT/CHANGELOG.md)

> 英文為來源文件。新增翻譯由本機離線工具輔助產生，仍需母語審校；程式碼與授權條款原文維持不變。

<a id="changelog"></a>

# 更改日誌

<a id="010--unreleased"></a>

## 0.1.0 — 未釋放

第一版,從 OpenNavo 桌面應用程式和網站。

- 託肯斯:每種顏色的暗淡主題;光模式遵循系統或一個 `data-theme` 屬性, 也可以在
  子樹。 光模式的新角色 : `surface.popover`, `text.accent`, `component.segmentActive`,
  `status.*Border`, `component.menuBarBg` / `menuBarText`, `shadow.segment`, `shadow.knob`,
  `effect.accentGlowOpacity`.
- 產出: CSS 變數,鍵入的 TS 值, UnoCSS 預設, Tailwind CSS v4 主題和 v3 預設, DTCG 每個主題的檔案,
  Flutter `ThemeExtension`s和主題構建器, SwiftUI 動態顏色和尺度,一個生成的符號參考.
- `@opennavo/design-vue`: 通用軟體 OpenNavo 元件, 主題助手( E)`applyThemePreference`,
  `themeBootScript`),基底樣式和一個元件畫廊.
- 規格 `docs/`.
