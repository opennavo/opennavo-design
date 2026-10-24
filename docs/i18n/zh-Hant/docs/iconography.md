[English](../../../iconography.md) · [简体中文](../../zh-CN/docs/iconography.md) · **繁體中文** · [日本語](../../ja-JP/docs/iconography.md) · [Español](../../es-ES/docs/iconography.md) · [Português (Brasil)](../../pt-BR/docs/iconography.md) · [Русский](../../ru-RU/docs/iconography.md) · [Deutsch](../../de-DE/docs/iconography.md) · [Français](../../fr-FR/docs/iconography.md) · [Italiano](../../it-IT/docs/iconography.md)

> 英文為來源文件。新增翻譯由本機離線工具輔助產生，仍需母語審校；程式碼與授權條款原文維持不變。

# 圖示

## 介面圖示

- **圖示集**：[Lucide](https://lucide.dev)（ISC 許可），以離線子集的形式打包——只有 `packages/vue/src/icons/names.ts` 中列出的圖示會隨包釋出；圖示渲染為內聯 SVG，因此在 SSR 和沒有網路時都能使用。
- **尺寸**：選單和導航中 16 px；`md`/`lg` 按鈕中 15 px；`xs`/`sm` 按鈕和標籤（chip）中 14 px；與元資訊同行時 12–13 px。26–32 px 底塊中的圖示按 14–16 px 渲染。
- **描邊和顏色**：採用 Lucide 在 24 px 下的 2 px 描邊，隨尺寸等比縮放；圖示使用 `currentColor`，因此跟隨所在位置的文字令牌。除非圖示表示狀態，否則不要單獨給它上色。
- **含義**：整個應用中，一個概念只對應一個圖示（例如 `circle-arrow-down` 表示更新，`shield-check` 表示安全，`eraser` 表示清理）。純圖示按鈕始終要有 `aria-label` 和懸停提示。
- **新增圖示**：元件包只打包元件自己用到的圖示。應用需要更多圖示時，在啟動時呼叫一次 `registerIcons(getIcons(lucide, ['compass', 'settings']))`（用 `@iconify/utils` 和 `@iconify-json/lucide`，也可以是任何 Iconify JSON 格式的圖示集，以 `prefix:name` 引用），這樣應用的包裡只帶它實際用到的圖示。元件本身需要的新圖示則加到 `packages/vue/src/icons/names.ts`，再執行 `pnpm gen`。未知的名稱不會渲染任何內容，並在開發環境中給出警告。

## 圖示底塊

功能列表、設定和提示框中，用小方塊底塊承載圖示：26–40 px，`rounded-[7–9px]`（40 px 及以上用 `rounded-app-icon`），`bg-surface-raised` 配 `text-ink-secondary`；有狀態的專案改用狀態色的淡色填充配狀態色。

## 應用圖示

- 應用圖示按交付時的樣子顯示，使用 `object-contain`，不額外加遮罩：macOS 圖示本身已經帶有外形。
- 缺少圖示時回退為**首字母圖示**：160° 漸變，從應用的強調色（或由應用識別符號推匯出的顏色）過渡到加深 18% 的同一顏色；白色首字母，大小為邊長的 42%；使用 `rounded-app-icon` 和 `shadow-app-icon`。
- 命令列工具使用**終端圖示**：兩套主題下都是深色漸變底塊，上面是大小為邊長 30% 的等寬縮寫，外加一條彩色色條。
- 目前用到的尺寸：20、24、26、28、30、32、40、44、46、54、64、96、118 px。

## 品牌標誌

每個應用自帶標誌，系統元件透過 `brand` 插槽接收它。品牌標誌不在本倉庫的許可範圍內（[品牌](brand.md)）。
