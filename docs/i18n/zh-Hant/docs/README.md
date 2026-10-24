[English](../../../README.md) · [简体中文](../../zh-CN/docs/README.md) · **繁體中文** · [日本語](../../ja-JP/docs/README.md) · [Español](../../es-ES/docs/README.md) · [Português (Brasil)](../../pt-BR/docs/README.md) · [Русский](../../ru-RU/docs/README.md) · [Deutsch](../../de-DE/docs/README.md) · [Français](../../fr-FR/docs/README.md) · [Italiano](../../it-IT/docs/README.md)

> 英文為來源文件。新增翻譯由本機離線工具輔助產生，仍需母語審校；程式碼與授權條款原文維持不變。

# OpenNavo Design 規範

OpenNavo Design 是 OpenNavo 系列應用的設計系統，覆蓋 macOS 客戶端（Tauri + Vue）、網站（Nuxt），以及之後推出的應用。這些文件是成文的標準：程式碼包負責實現它，令牌參考與程式碼由同一份原始檔生成，所以這裡的數值始終與實際釋出的版本一致。

第一次閱讀，建議按以下順序：

1. [原則](principles.md)——這套系統看重什麼，以及出現分歧時用來裁決的規則。
2. [顏色](color.md)——表面、文字、邊框、品牌色、狀態色；深色和淺色兩套主題，以及它們的對比度規則。
3. [主題](theming.md)——深色、淺色和“跟隨系統”在網頁、Tauri、Flutter 和 SwiftUI 中怎樣實現，以及其他應用怎樣換上自己的品牌。
4. [文字排版](typography.md)、[佈局](layout.md)（間距、圓角、層級、應用外殼）、[動效](motion.md)、[圖示](iconography.md)。
5. [元件](components.md)（元件篇暫為英文）——Vue 元件集，以及每個元件該在什麼場合使用。
6. [互動模式](patterns.md)——導航、列表、表單、反饋、破壞性操作、載入和空狀態、許可權、選單欄浮窗。
7. [文案](content.md)——語氣、措辭規則、數字和日期、十種介面語言。
8. [無障礙](accessibility.md)和[平臺](platforms.md)（macOS 桌面端、網頁、Flutter、SwiftUI）。
9. [品牌](brand.md)——品牌層、名稱和標誌。
10. [接入](adoption.md)——在這套系統上新建應用，以及遷移複製過 OpenNavo 程式碼包的應用。

參考：[全部令牌](reference/tokens.md)（英文，由 `tokens/tokens.json` 生成，請勿手動修改）。

## 本規範的約定

- **必須**和**不得**（也寫作“絕不”）是規則，評審時應當據此攔下不合規的改動。**應當**是預設做法，不照做需要有理由。其餘內容都是指導意見。
- 令牌名稱按 JSON 路徑書寫（`surface.card`）；涉及程式碼時，附上 CSS 變數（`--on-surface-card`）或工具類（`bg-surface-card`）。
- 尺寸以 CSS 畫素為單位（在 Apple 平臺上對應點，在 Flutter 中對應邏輯畫素）。
- 示例都取自 OpenNavo。同系列的其他應用保留同樣的結構，只替換品牌層（[品牌](brand.md)）。
