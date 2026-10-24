[English](../../../CONTRIBUTING.md) · [简体中文](../zh-CN/CONTRIBUTING.md) · **繁體中文** · [日本語](../ja-JP/CONTRIBUTING.md) · [Español](../es-ES/CONTRIBUTING.md) · [Português (Brasil)](../pt-BR/CONTRIBUTING.md) · [Русский](../ru-RU/CONTRIBUTING.md) · [Deutsch](../de-DE/CONTRIBUTING.md) · [Français](../fr-FR/CONTRIBUTING.md) · [Italiano](../it-IT/CONTRIBUTING.md)

> 英文為來源文件。新增翻譯由本機離線工具輔助產生，仍需母語審校；程式碼與授權條款原文維持不變。

<a id="contributing"></a>

# 捐款

謝謝你的幫助。 OpenNavo 設計取自 OpenNavo 應用軟體並與之並存; 更改
應該讓家裡的每個應用都繼續工作

<a id="ground-rules"></a>

## 基本規則

- **託肯斯為先.** 變動 `tokens/tokens.json`執行 `pnpm gen`中,將生成的檔案與更改一起輸入。從不
  編輯一個標記為 create 的檔案.
- **兩個主題。** 每個新顏色符號都有暗色 `value` 當它不同時, `light` 值。新增或更新 a
  任何新文字/背景對的對比測試( Q)`packages/tokens/tests`).
- **角色,不是外觀。** 如果已有的符號有正確的顏色, 但錯誤的工作, 則為該任務新增一個符號 。
  ([檔案/原則.md](docs/principles.md#rules-that-settle-arguments)).
- **部件是通用的。** 沒有產品名稱、產品資料形狀或網路呼叫 `packages/vue`; 應用程式透過
  內容透過道具和插槽。
- **醫生用程式碼移動。** 一個新的符號、元件道具或行為更新匹配頁面 `docs/`.
- **英語第一。** 文件、源評論、錯誤和開發者工具預設為英語。英語( )`en-US`)是元件字串的源語言;保留明確本地化的內容.
- **十種語言.** 新建元件字串進入全部十個信件檔案 `packages/vue/src/messages`,帶有匹配的金鑰和佔位符。英語仍然是預設;不要從瀏覽器設定中推斷語言。

<a id="checks"></a>

## 檢查

```sh
pnpm install
pnpm gen && pnpm check
pnpm test && pnpm typecheck
pnpm format:check
swift test
(cd packages/flutter && flutter analyze && flutter test)
```

CI執行相同的命令.

<a id="commits-and-pull-requests"></a>

## 提交和拉動請求

小型、有重點的拉動請求,其中簡短地描述兩個主題中使用者可見的變化和截圖。
透過貢獻,你同意你的貢獻是特許的 MIT 此許可證
儲存器。

<a id="security-review-before-commits"></a>

## 實施前的安全審查

執行 `pnpm secrets:worktree` 在準備修改時,然後顯示預定的檔案並執行 `pnpm secrets:staged`.
執行 `pnpm secrets:history` 這些命令需要 Go 1. 23+ 和網路訪問
第一次下載 被繫結 Gitleaks 掃描器。掃描器故障會阻斷檢查; 請不要繞過它 。

審查每個已完成階段的檔案和完整的已完成階段的diff,包括已有的更改,生成的檔案和資產.
不輸入證書、 私人金鑰、 真實環境配置、 私人服務地址或個人資料 。
使用佔位符和虛構的固定裝置。 忽略一個檔案一旦被跟蹤或設定, 就不會保護它 。
確認二進位制附件可以公開。 掃描結果只顯示路徑、 行號和規則 ID ;
乾淨掃描不會取代手動審查。在任何階段內容更改後重新檢查。

私下報告脆弱性 [警衛](SECURITY.md)。不要在公共問題或日誌中包含秘密。

使用英語常規提交信件和英語 GitHub 描述改變什麼,
為什麼, 以及哪些檢查實際執行。 不要將本地測試描述為透過遠端CI 。 API 穩定不是
在 1.0 之前承諾; 文件打破更改日誌中的更改 。

<a id="translations-and-previews"></a>

## 翻譯和預覽

英語是所有10種語言的來源: `en-US`, `zh-CN`, `zh-Hant`, `ja-JP`, `es-ES`, `pt-BR`, `ru-RU`,
`de-DE`, `fr-FR` 財務報告和已審計財務報表 `it-IT`。元件資訊存在於 `packages/vue/src/messages`; 圖片庫訊息存在
`packages/vue/gallery/src/messages`翻譯可見故事副本以及導航和可訪問標籤。
保持元件名稱,enum值,URL,程式碼樣本和許可證原件不變.

完整的文件映象存在於 `docs/i18n/<locale>/`,遵循英語暫存器路徑。
新的翻譯開始為離線機輔助草稿,需要語言審查,特別是技術和法律
散文 英文仍然具有權威性 與普通葡萄牙語分開審查巴西葡萄牙語詞彙.
當英語更改時, 更新每種語言中的相應檔案, 然後將其 SHA-256 記錄在
`docs/i18n/manifest.json`執行 `pnpm check:i18n` 以驗證覆蓋、源新度、連結和程式碼示例。
不要只為了不更新譯文就對失敗保持沉默而更新清單。

讀取 EADME 截圖 `docs/previews` 顯示真實畫廊的虛構樣本資料。
瀏覽器在文獻中的主題和語言上使用,沒有瀏覽器染色體或個人資訊.
