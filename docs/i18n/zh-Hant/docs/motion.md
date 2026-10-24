[English](../../../motion.md) · [简体中文](../../zh-CN/docs/motion.md) · **繁體中文** · [日本語](../../ja-JP/docs/motion.md) · [Español](../../es-ES/docs/motion.md) · [Português (Brasil)](../../pt-BR/docs/motion.md) · [Русский](../../ru-RU/docs/motion.md) · [Deutsch](../../de-DE/docs/motion.md) · [Français](../../fr-FR/docs/motion.md) · [Italiano](../../it-IT/docs/motion.md)

> 英文為來源文件。新增翻譯由本機離線工具輔助產生，仍需母語審校；程式碼與授權條款原文維持不變。

# 動效

動效用來解釋變化，絕不用來裝飾。介面的大部分地方根本沒有動畫。

## 令牌

| 令牌              | 值                               | 用途                                                             |
| ----------------- | -------------------------------- | ---------------------------------------------------------------- |
| `duration-fast`   | 120 ms                           | 懸停、按下和獲得焦點時的顏色變化；開關；所有退出動畫             |
| `duration-base`   | 200 ms                           | 對話方塊、側邊面板（sheet）、命令面板和輕提示（toast）的進入動畫 |
| `duration-slow`   | 320 ms                           | 進度條填充、掃描器表、主視覺和營銷內容的入場                     |
| `ease-standard`   | `cubic-bezier(0.2, 0.8, 0.2, 1)` | 狀態變化和小幅移動的預設曲線                                     |
| `ease-emphasized` | `cubic-bezier(0.3, 0, 0, 1)`     | 浮層出現                                                         |
| `ease-exit`       | `cubic-bezier(0.4, 0, 1, 1)`     | 任何元素離場，始終配合 `duration-fast`                           |

## 哪些會動

- **狀態變化**用 `duration-fast` 漸變顏色（每個可互動控制元件都加上 `transition-colors duration-fast ease-standard`）。
- **浮層**用強調曲線在 200 ms 內進入，用退出曲線在 120 ms 內離開：居中的對話方塊從 0.96 倍縮放並淡入，側邊面板從所在的邊緣滑入，命令面板從頂部下落 8 px，輕提示上升 8 px。遮罩隨面板一起淡入淡出。選單和懸停提示直接出現，沒有動畫。
- **進度**的數值以動畫變化，絕不往回跳；只在拿到第一個真實數字之前顯示不確定狀態。
- **營銷頁面**可以使用緩慢的氛圍動效（呼吸般明暗變化的光暈、緩緩漂移的虛線圓環、浮動的圖示），但只能動用合成層屬性（transform、opacity）。

## 哪些絕不動

- 佈局。使用者閱讀或輸入時，內容不滑動、不折疊、不重新排布；見[原則 › 操作時介面保持穩定](principles.md#4-操作時介面保持穩定)。
- 主題切換：顏色在同一幀內完成變化（`applyThemePreference` 會在這一幀禁用過渡）。
- 原地更新的數字（監控、計數器）直接變化，不做補間動畫。

## 減弱動態效果

在 `prefers-reduced-motion: reduce` 下，`base.css` 會把所有動畫和過渡壓縮到 0.01 ms，並取消平滑滾動。不要依賴動畫傳達資訊；最終狀態本身必須能說明問題。
