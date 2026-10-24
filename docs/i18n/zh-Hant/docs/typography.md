[English](../../../typography.md) · [简体中文](../../zh-CN/docs/typography.md) · **繁體中文** · [日本語](../../ja-JP/docs/typography.md) · [Español](../../es-ES/docs/typography.md) · [Português (Brasil)](../../pt-BR/docs/typography.md) · [Русский](../../ru-RU/docs/typography.md) · [Deutsch](../../de-DE/docs/typography.md) · [Français](../../fr-FR/docs/typography.md) · [Italiano](../../it-IT/docs/typography.md)

> 英文為來源文件。新增翻譯由本機離線工具輔助產生，仍需母語審校；程式碼與授權條款原文維持不變。

# 文字排版

## 字型

應用透過 `@opennavo/design-vue/system-fonts.css` 使用**系統介面字型**——Apple 平臺上是 SF Pro，Windows 上是 Segoe UI——中文和日文使用平臺自帶的中日文字型：

| 語言                                           | 字型棧（system-fonts.css）                                                        |
| ---------------------------------------------- | --------------------------------------------------------------------------------- |
| 拉丁字母、西裡爾字母                           | `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`                       |
| 簡體中文（`:lang(zh)`）                        | `-apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', sans-serif` |
| 繁體中文（`:lang(zh-Hant)`、`zh-TW`、`zh-HK`） | `… 'PingFang TC', 'Microsoft JhengHei', sans-serif`                               |
| 日文（`:lang(ja)`）                            | `… 'Hiragino Sans', 'Yu Gothic', sans-serif`                                      |
| 程式碼、版本號、路徑                           | `ui-monospace, 'SFMono-Regular', Menlo, Consolas, 'Liberation Mono', monospace`   |

系統字型與作業系統一致，不需要下載，中日文的渲染效果也最好。令牌中的字型棧（`font.family.*`，以 Inter 開頭）是**品牌字型棧**，用在無法使用或不想使用系統字型的地方：生成的分享圖、營銷插圖和元件預覽頁。在 `<html>` 上設定 `lang`（內容為其他語言的元素也要單獨設定），這樣才能套用正確的字型棧。

用到 Inter 時，開啟 `font-feature-settings: "cv11", "ss01"`（單層結構的 a、另一套數字字形）和 `font-optical-sizing: auto`；`base.css` 已經設定了這兩項。

## 字號體系

`text-{name}` 會同時設定字號、行高、字重和字距。請使用這套字號體系；除了下文“小字號”一節列出的緊湊尺寸，不要手動設定字號。

| 類名            | 字號/行高 | 字重 | 字距         | 用途                           |
| --------------- | --------- | ---- | ------------ | ------------------------------ |
| `text-hero`     | 76 / 78   | 600  | −0.035em     | 僅用於官網首頁主視覺           |
| `text-section`  | 46 / 50   | 600  | −0.03em      | 官網區塊標題                   |
| `text-display`  | 40 / 44   | 600  | −0.03em      | 功能主視覺標題                 |
| `text-title1`   | 28 / 34   | 600  | −0.02em      | 頁面標題                       |
| `text-title2`   | 22 / 28   | 600  | −0.02em      | 對話方塊標題、緊湊的詳情頁頭部 |
| `text-headline` | 16 / 24   | 600  | −0.01em      | 區塊標題、卡片標題             |
| `text-stat`     | 20 / 26   | 600  | −0.015em     | 統計數值                       |
| `text-body`     | 14 / 22   | 400  | 0            | 正文                           |
| `text-body-sm`  | 13 / 20   | 400  | 0            | 列表、表格、設定項             |
| `text-caption`  | 12 / 18   | 400  | 0            | 次要資訊                       |
| `text-label`    | 11 / 16   | 600  | 0.08em，大寫 | 分組標題（側邊欄分組名、眉題） |
| `text-mono`     | 12 / 18   | 400  | 0            | 命令、版本號、日誌             |

在窄屏上，標題沿字號體系逐級下調，而不是隨意縮小：首頁主視覺在 768 px 以下用 `text-display`，從 768 px 起用 `text-section`，從 1024 px 起用 `text-hero`；功能主視覺標題在 768 px 以下降到 36 px。應用視窗不會小於最小寬度，所以應用內的文字不隨視窗縮放。

### 小字號

桌面端的緊湊介面會用到幾個中間尺寸，顏色一律使用令牌：緊湊控制元件和表格單元格用 12.5 px，行下方的元資訊用 11.5 px，極小的徽標用 10.5 px。不使用小於 10.5 px 的字號，12 px 以下的文字不承載關鍵資訊。

## 規則

- **數字**：凡是需要對齊或會原地變化的數字（統計資料、表格、進度、計數器、監控），都用 `tabular-nums`。數字、容量和日期按語言區域格式化（[文案](content.md)）。
- **字重**：正文用 400，控制元件和分段標籤用 500，標題、按鈕文字和強調內容用 600。介面中不用 700 及以上的字重。
- **強調**：句子裡的強呼叫粗體（600），絕不只靠顏色。描述中的行內高亮寫作 `**…**`，在次要文字中渲染為字重 600 的 `text-ink-primary`。
- **大寫**只能透過 `text-label` 實現，而且只用於拉丁字母和西裡爾字母；中日文不做轉換。
- **行長**：正文每行控制在大約 72 個字元以內（中日文約 40 個字）；主視覺區裡的描述最寬約 430 px。
- **標題**：營銷頁面上的標題用 `text-wrap: balance` 平衡各行長度；在瀏覽器支援的情況下，中日文標題在標點處斷行，而不是從詞語中間斷開。
- **截斷**：單行文字過長時用省略號截斷，並透過懸停提示或 `title` 顯示完整內容；數字和狀態絕不截斷。
- **中西文間距**：文案在中日文與拉丁字母或數字之間加一個半形空格（“近 30 天”“下載約 768 MB”），與全形標點相鄰時不加。`base.css` 中的 `text-autospace: normal` 只是補上文案漏掉的間距，絕不能代替源文字中的空格。
