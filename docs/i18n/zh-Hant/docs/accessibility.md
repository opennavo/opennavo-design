[English](../../../accessibility.md) · [简体中文](../../zh-CN/docs/accessibility.md) · **繁體中文** · [日本語](../../ja-JP/docs/accessibility.md) · [Español](../../es-ES/docs/accessibility.md) · [Português (Brasil)](../../pt-BR/docs/accessibility.md) · [Русский](../../ru-RU/docs/accessibility.md) · [Deutsch](../../de-DE/docs/accessibility.md) · [Français](../../fr-FR/docs/accessibility.md) · [Italiano](../../it-IT/docs/accessibility.md)

> 英文為來源文件。新增翻譯由本機離線工具輔助產生，仍需母語審校；程式碼與授權條款原文維持不變。

# 無障礙

目標是兩套主題都達到 WCAG 2.2 AA。大部分要求已經內建在令牌和元件中；本頁列出應用不得破壞的部分。

## 對比度

- 文字與其實際背景的對比度達到 4.5:1，包括帶色調的徽標和懸停底色上的文字；大號展示文字（24 px 及以上，或字重 600 時 19 px 及以上）達到 3:1。令牌測試會強制檢查[顏色 › 對比度](color.md#對比度)中列出的顏色組合。
- 承載含義的圖示、圖表標記、輸入框邊框和焦點環：3:1。
- 裝飾性文字（`text.disabled`、水印）不承載任何資訊。

## 鍵盤

- 所有內容都能按視覺順序用 Tab 鍵到達；看不見的元素不能獲得焦點。
- **焦點環**：在 `:focus-visible` 上使用 `shadow-focus-ring`——2 px 表面色間隙，外加一圈 2 px 的珊瑚色環。不得在沒有等效替代的情況下移除它。
- **複合控制元件**使用遊走焦點（roving focus）：整個控制元件只佔一個 Tab 停靠點，內部用方向鍵移動。適用於分段控制元件（`radiogroup`）、標籤頁（`tablist`）、成排的標籤（chip）、選單（`menu`，配合 `menuitem` / `menuitemradio`）和命令面板（`combobox` + `listbox`）。
- **浮層**開啟時把焦點移入內部，把 Tab 限制在浮層之內，按 Escape 關閉，並把焦點還給開啟它的元素。如果使用者是用指標開啟浮層的，由指令碼移入的焦點不顯示焦點環。
- **快捷鍵**遵循平臺習慣（⌘K 搜尋、⌘, 開啟設定、⌘F 在檢視中查詢、Escape 退回上一層），在選單和提示中標出，但絕不是唯一的操作方式。

## 讀屏軟體

- 優先使用語義元素（`button`、`a`、`nav`、`main`、`h1`–`h3`、`table`）；只有 HTML 沒有對應元素時，元件才新增角色。
- 純圖示控制元件要有 `aria-label`；裝飾性圖示，以及緊挨著名稱顯示的應用圖示，都設為 `aria-hidden`。
- 當前頁面用 `aria-current="page"`；開關用 `role="switch"` 配合 `aria-checked`；處理中的按鈕用 `aria-busy`。
- 輕提示（toast）：失敗用 `role="alert"`，其餘放進禮貌模式（polite）的實時區域。進度要有對應的文字，例如“1.2 of 3.4 GB”（“已完成 1.2 GB，共 3.4 GB”）。
- 圖表要有文字摘要或等價的表格；迷你走勢圖要標出當前值。

## 動效與時限

- 遵循“減弱動態效果”設定（CSS 由 `base.css` 處理；JavaScript 動畫必須檢查 `matchMedia`）。
- 滑鼠懸停時，輕提示暫停計時；重要內容即使隨計時消失，也要能再次找到（歷史記錄、任務列表）。

## 指標與觸控

- 點選目標：緊湊的桌面介面中至少 24 × 24 px，主要控制元件至少 32 px，移動網頁上的主要操作至少 44 px。
- 懸停不顯示鍵盤和觸控使用者無法觸達的內容。

## 語言

在 `<html>` 上設定 `lang`，其他語言的段落也要單獨設定，這樣讀屏軟體和字型才會隨之切換。絕不只靠顏色、位置或形狀傳達含義：狀態要把顏色和圖示、文字搭配使用。
