[English](../../../brand.md) · [简体中文](../../zh-CN/docs/brand.md) · **繁體中文** · [日本語](../../ja-JP/docs/brand.md) · [Español](../../es-ES/docs/brand.md) · [Português (Brasil)](../../pt-BR/docs/brand.md) · [Русский](../../ru-RU/docs/brand.md) · [Deutsch](../../de-DE/docs/brand.md) · [Français](../../fr-FR/docs/brand.md) · [Italiano](../../it-IT/docs/brand.md)

> 英文為來源文件。新增翻譯由本機離線工具輔助產生，仍需母語審校；程式碼與授權條款原文維持不變。

# 品牌

OpenNavo Design 由一系列應用共用。它們除了一層很薄的品牌層之外，其他一切都相同，所以熟悉其中一個應用的人，也就熟悉了其他應用。

## 品牌層

應用只能修改以下令牌（兩套主題的值都要給）：

| 令牌                                                                                 | 承載的內容                                                     |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| `brand.coral`                                                                        | 強調色填充：強調按鈕、開啟狀態的開關、進度、焦點環顏色、小圓點 |
| `text.accent`                                                                        | 強調色文字和連結                                               |
| `accent.coralSubtle`                                                                 | 標籤（chip）和進度條軌道背後的強調色淡色                       |
| `button.accentBg`、`button.accentHover`、`button.accentPressed`、`button.accentText` | 強調按鈕                                                       |
| `shadow.focusRing`                                                                   | 焦點環（保持“2 px 間隙 + 2 px 環”的形狀）                      |
| `component.runningBorder`                                                            | 執行中任務的邊框                                               |
| `brand.salmon`、`accent.salmonSubtle`                                                | 暖色的強調文字和徽標                                           |
| `brand.violet`、`effect.heroGlow`、`effect.coverGlow`                                | 主視覺光暈                                                     |
| `brand.logoGradient`、`brand.logoCoreGradient`                                       | 應用自己的標誌                                                 |

令牌名稱保持不變（即使某個應用的強調色是藍色，`brand.coral` 也沿用這個名字），這樣元件和文件都不會分叉。用覆蓋檔案生成應用的令牌（[主題 › 換品牌](theming.md#為其他應用換品牌)），並保證對比度測試全部透過：兩套主題下，強調色文字仍必須達到 4.5:1，強調色填充必須達到 3:1。

除此之外的一切——中性色、狀態色、字型、間距、圓角、動效、元件和互動模式——在每個應用中都相同。

## 名稱和標誌

- 每個應用有自己的名稱和標誌。元件透過 `brand` 插槽接收標誌；設計系統本身不附帶任何 Logo。
- OpenNavo 的名稱和 Logo 是 OpenNavo 作者的商標，**不在**本倉庫 MIT 許可的範圍內（[TRADEMARKS.md](../TRADEMARKS.md)）。基於本系統構建的應用不得把它們用作自己的名稱或圖示。
- 元件字首 `On` 和 CSS 字首 `--on-` 屬於設計系統，而不屬於某個產品；請保留它們。

## 標誌的正確用法（OpenNavo 自身）

- 字標放在標誌旁邊，字號 15 px、字重 600、顏色為 `brand.coral`；旁邊的標誌高 22 px。
- 小於 32 px 時，標誌使用簡化後的圖形。四周至少留出標誌高度一半的空白。
- 在淺色背景上，標誌中的星形改用琥珀色核心漸變；不得把標誌放在雜亂的圖片上。
