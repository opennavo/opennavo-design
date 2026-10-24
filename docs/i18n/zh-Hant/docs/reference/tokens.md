[English](../../../../reference/tokens.md) · [简体中文](../../../zh-CN/docs/reference/tokens.md) · **繁體中文** · [日本語](../../../ja-JP/docs/reference/tokens.md) · [Español](../../../es-ES/docs/reference/tokens.md) · [Português (Brasil)](../../../pt-BR/docs/reference/tokens.md) · [Русский](../../../ru-RU/docs/reference/tokens.md) · [Deutsch](../../../de-DE/docs/reference/tokens.md) · [Français](../../../fr-FR/docs/reference/tokens.md) · [Italiano](../../../it-IT/docs/reference/tokens.md)

> 英文為來源文件。新增翻譯由本機離線工具輔助產生，仍需母語審校；程式碼與授權條款原文維持不變。

<a id="token-reference"></a>

# 呼叫參考文獻

<!-- Generated from tokens/tokens.json by packages/tokens/scripts/generate.ts; do not edit. After changing tokens.json, run `pnpm gen`. -->

下面的每個值都來自 `tokens/tokens.json`。黑暗是預設主題; 光柱顯示值
輕度主題使用(一個em drust表示兩個主題中的符號相同). CSS 變數是網路
軟體包傳送; 工具列是 UnoCSS / Tailwind 類幹(`bg-`, `text-`, `border-` ...+幹線).
Flutter (`OnColors`和(或) SwiftUI (`OnColor`)使用駱駝Case路徑,例如. `surface.cardAlt` → `surfaceCardAlt`.

<a id="color"></a>

## 顏色

<a id="surfaces"></a>

### 表面

| 設計權杖          | CSS 變數                | 工具               | 深色                     | 淺色                        | 使用( U)                                                        |
| ----------------- | ----------------------- | ------------------ | ------------------------ | --------------------------- | --------------------------------------------------------------- |
| `surface.page`    | `--on-surface-page`     | `surface-page`     | `#0B0B0B`                | `#F2F2F2`                   | 外網與視窗背景.                                                 |
| `surface.base`    | `--on-surface-base`     | `surface-base`     | `#131313`                | `#F8F8F8`                   | 主要內容背景.                                                   |
| `surface.sidebar` | `--on-surface-sidebar`  | `surface-sidebar`  | `#161616`                | `#F1F1F1`                   | 桌面側邊欄 。                                                   |
| `surface.rail`    | `--on-surface-rail`     | `surface-rail`     | `#141414`                | `#F5F5F5`                   | 右欄有摘要和輔助動作.                                           |
| `surface.card`    | `--on-surface-card`     | `surface-card`     | `#1A1A1A`                | `#FFFFFF`                   | 紙牌.                                                           |
| `surface.cardAlt` | `--on-surface-card-alt` | `surface-card-alt` | `#1F1F1F`                | `#F5F5F5`                   | 輸入和副塊在卡片中。                                            |
| `surface.raised`  | `--on-surface-raised`   | `surface-raised`   | `#262626`                | `#EDEDED`                   | Hover,選擇,圖示牌;在光線模式下比牌更暗,因此浮動面板使用popover. |
| `surface.chip`    | `--on-surface-chip`     | `surface-chip`     | `#2A2A2A`                | `#EBEBEB`                   | 中立徽章背景.                                                   |
| `surface.control` | `--on-surface-control`  | `surface-control`  | `#2B2B2B`                | `#FFFFFF`                   | 輸入、工具提示和二級控制。                                      |
| `surface.inset`   | `--on-surface-inset`    | `surface-inset`    | `#111111`                | `#F0F0F0`                   | 程式碼塊,日誌,分割槽控制軌跡.                                   |
| `surface.overlay` | `--on-surface-overlay`  | `surface-overlay`  | `rgba(28, 28, 28, 0.92)` | `rgba(255, 255, 255, 0.94)` | 覆蓋背景-過濾器:模糊(20px).                                     |
| `surface.popover` | `--on-surface-popover`  | `surface-popover`  | `#262626`                | `#FFFFFF`                   | 浮動面板和關於內容的通知,如同意和建議卡。                       |

<a id="borders-utility-prefix-line"></a>

### 邊框( 功能字首) `line`)

| 設計權杖         | CSS 變數              | 工具           | 深色                        | 淺色                  | 使用( U)               |
| ---------------- | --------------------- | -------------- | --------------------------- | --------------------- | ---------------------- |
| `border.subtle`  | `--on-border-subtle`  | `line-subtle`  | `rgba(255, 255, 255, 0.07)` | `rgba(0, 0, 0, 0.08)` | 紙牌邊框和分牌者.      |
| `border.default` | `--on-border-default` | `line-default` | `rgba(255, 255, 255, 0.12)` | `rgba(0, 0, 0, 0.13)` | 輸入 鬼按鈕 和視窗邊框 |
| `border.strong`  | `--on-border-strong`  | `line-strong`  | `rgba(255, 255, 255, 0.20)` | `rgba(0, 0, 0, 0.22)` | 毗盧遮那境.            |
| `border.sidebar` | `--on-border-sidebar` | `line-sidebar` | `#1D1D1D`                   | `#E5E5E5`             | 右側邊框               |

<a id="text-utility-prefix-ink"></a>

### 文字( 功能字首) `ink`)

| 設計權杖         | CSS 變數              | 工具            | 深色      | 淺色      | 使用( U)                                                                       |
| ---------------- | --------------------- | --------------- | --------- | --------- | ------------------------------------------------------------------------------ |
| `text.primary`   | `--on-text-primary`   | `ink-primary`   | `#EDEDED` | `#1A1A1A` | 標題,強調體文字,數字(暗卡14.9:1,輕卡17.4:1).                                   |
| `text.secondary` | `--on-text-secondary` | `ink-secondary` | `#A8A8A8` | `#575757` | 身體文字和描述(暗卡7.3:1,輕卡7.2:1).                                           |
| `text.tertiary`  | `--on-text-tertiary`  | `ink-tertiary`  | `#8F8F8F` | `#6B6B6B` | 次要資訊,標籤,時間(暗卡5.4:1,暗升4.7:1;光模式5.3:1和4.6:1).                    |
| `text.disabled`  | `--on-text-disabled`  | `ink-disabled`  | `#5C5C5C` | `#A6A6A6` | 僅限殘疾人/裝飾人員;從未傳達基本資訊。                                         |
| `text.inverse`   | `--on-text-inverse`   | `ink-inverse`   | `#141414` | `#FFFFFF` | 固體填充物上的文字和圖示(狀態,珊瑚,鮭魚);暗色模式,白色為光色模式.              |
| `text.onAccent`  | `--on-text-on-accent` | `ink-on-accent` | `#1B0A05` | —         | 珊瑚按鈕/臂章上的文字(7.2:1)。                                                 |
| `text.accent`    | `--on-text-accent`    | `ink-accent`    | `#FF7356` | `#B83A15` | 珊瑚文字,連結和圖示;品牌.coral是用於填充和圖形的(光線模式需要4.5:1更深的陰影). |

<a id="brand"></a>

### 品牌

| 設計權杖                        | CSS 變數                                 | 工具              | 深色                              | 淺色                  | 使用( U)                                                                            |
| ------------------------------- | ---------------------------------------- | ----------------- | --------------------------------- | --------------------- | ----------------------------------------------------------------------------------- |
| `brand.coral`                   | `--on-brand-coral`                       | `brand-coral`     | `#FF7356`                         | `#EE5533`             | 填充和圖形的主要品牌顏色:標誌、進步、徽章、下劃線。對於珊瑚文字,則使用文字.accent。 |
| `brand.salmon`                  | `--on-brand-salmon`                      | `brand-salmon`    | `#F99E70`                         | `#A74C1B`             | 強調文字:英雄二行,徽章,可用更新.                                                    |
| `brand.violet`                  | `--on-brand-violet`                      | `brand-violet`    | `#5B5BD6`                         | —                     | 主英雄發光色.                                                                       |
| `brand.glowCore`                | `--on-brand-glow-core`                   | `brand-glow-core` | `#CDCDFF`                         | —                     | 光線中心亮點.                                                                       |
| `brand.logoGradient`            | `--on-brand-logo-gradient`               | —                 | `#FFB347` → `#FF7356` → `#FF4E3A` | —                     | Logo N 梯度, 從左上到右下。                                                         |
| `brand.logoCoreGradient`        | `--on-brand-logo-core-gradient`          | —                 | `#FFF6D6` → `#FFC861`             | `#FFB347` → `#FF8F3F` | 暗背景上的Logo Polaris梯度 。                                                       |
| `brand.logoCoreGradientOnLight` | `--on-brand-logo-core-gradient-on-light` | —                 | `#FFB347` → `#FF8F3F`             | —                     | 光背景上的Logo Polaris梯度; 溫暖的白色會消失.                                       |

<a id="accent-tints"></a>

### 圓點錫

| 設計權杖              | CSS 變數                    | 工具                   | 深色                        | 淺色                      | 使用( U)              |
| --------------------- | --------------------------- | ---------------------- | --------------------------- | ------------------------- | --------------------- |
| `accent.coralSubtle`  | `--on-accent-coral-subtle`  | `accent-coral-subtle`  | `rgba(255, 115, 86, 0.12)`  | `rgba(238, 85, 51, 0.10)` | 進展軌跡及更新徽章.   |
| `accent.salmonSubtle` | `--on-accent-salmon-subtle` | `accent-salmon-subtle` | `rgba(249, 158, 112, 0.10)` | `rgba(167, 76, 27, 0.10)` | 徽章和可用更新的背景. |

<a id="status"></a>

### 狀態

| 設計權杖               | CSS 變數                     | 工具                    | 深色                        | 淺色                       | 使用( U)                |
| ---------------------- | ---------------------------- | ----------------------- | --------------------------- | -------------------------- | ----------------------- |
| `status.success`       | `--on-status-success`        | `status-success`        | `#3FCF6C`                   | `#187733`                  | 已安裝,成功,當前 。     |
| `status.successSubtle` | `--on-status-success-subtle` | `status-success-subtle` | `rgba(63, 207, 108, 0.10)`  | `rgba(24, 119, 51, 0.10)`  |                         |
| `status.warning`       | `--on-status-warning`        | `status-warning`        | `#FAB219`                   | `#965A00`                  | 需要警告和管理員許可 。 |
| `status.warningSubtle` | `--on-status-warning-subtle` | `status-warning-subtle` | `rgba(250, 178, 25, 0.10)`  | `rgba(150, 90, 0, 0.10)`   |                         |
| `status.danger`        | `--on-status-danger`         | `status-danger`         | `#FF5D51`                   | `#C22B21`                  | 失敗,墮落,刪除.         |
| `status.dangerSubtle`  | `--on-status-danger-subtle`  | `status-danger-subtle`  | `rgba(255, 93, 81, 0.10)`   | `rgba(194, 43, 33, 0.10)`  |                         |
| `status.info`          | `--on-status-info`           | `status-info`           | `#66A4FA`                   | `#1564CD`                  | 自我更新,連結,資訊.     |
| `status.infoSubtle`    | `--on-status-info-subtle`    | `status-info-subtle`    | `rgba(102, 164, 250, 0.10)` | `rgba(21, 100, 205, 0.10)` |                         |
| `status.successBorder` | `--on-status-success-border` | `status-success-border` | `rgba(63, 207, 108, 0.20)`  | `rgba(24, 119, 51, 0.24)`  | 面板的邊框有成功效果。  |
| `status.warningBorder` | `--on-status-warning-border` | `status-warning-border` | `rgba(250, 178, 25, 0.25)`  | `rgba(150, 90, 0, 0.24)`   | 帶警示艇的面板邊緣      |
| `status.dangerBorder`  | `--on-status-danger-border`  | `status-danger-border`  | `rgba(255, 93, 81, 0.25)`   | `rgba(194, 43, 33, 0.24)`  | 帶危險物質的板塊邊界    |
| `status.infoBorder`    | `--on-status-info-border`    | `status-info-border`    | `rgba(102, 164, 250, 0.25)` | `rgba(21, 100, 205, 0.24)` | 帶資訊潛質的面板邊界。  |

<a id="buttons"></a>

### 按鈕

| 設計權杖                  | CSS 變數                        | 工具                       | 深色      | 淺色      | 使用( U) |
| ------------------------- | ------------------------------- | -------------------------- | --------- | --------- | -------- |
| `button.primaryBg`        | `--on-button-primary-bg`        | `button-primary-bg`        | `#EBEBEB` | `#1F1F1F` |          |
| `button.primaryHover`     | `--on-button-primary-hover`     | `button-primary-hover`     | `#FFFFFF` | `#333333` |          |
| `button.primaryPressed`   | `--on-button-primary-pressed`   | `button-primary-pressed`   | `#D6D6D6` | `#0A0A0A` |          |
| `button.primaryText`      | `--on-button-primary-text`      | `button-primary-text`      | `#141414` | `#FFFFFF` |          |
| `button.secondaryBg`      | `--on-button-secondary-bg`      | `button-secondary-bg`      | `#2B2B2B` | `#EBEBEB` |          |
| `button.secondaryHover`   | `--on-button-secondary-hover`   | `button-secondary-hover`   | `#333333` | `#E0E0E0` |          |
| `button.secondaryPressed` | `--on-button-secondary-pressed` | `button-secondary-pressed` | `#242424` | `#D6D6D6` |          |
| `button.secondaryText`    | `--on-button-secondary-text`    | `button-secondary-text`    | `#EDEDED` | `#1A1A1A` |          |
| `button.accentBg`         | `--on-button-accent-bg`         | `button-accent-bg`         | `#FF7356` | `#EE5533` |          |
| `button.accentHover`      | `--on-button-accent-hover`      | `button-accent-hover`      | `#FF8468` | `#F46546` |          |
| `button.accentPressed`    | `--on-button-accent-pressed`    | `button-accent-pressed`    | `#F0603F` | `#E24A28` |          |
| `button.accentText`       | `--on-button-accent-text`       | `button-accent-text`       | `#1B0A05` | —         |          |
| `button.disabledBg`       | `--on-button-disabled-bg`       | `button-disabled-bg`       | `#171717` | `#F0F0F0` |          |
| `button.disabledText`     | `--on-button-disabled-text`     | `button-disabled-text`     | `#5C5C5C` | `#A6A6A6` |          |

<a id="charts"></a>

### 圖表

| 設計權杖           | CSS 變數                | 工具               | 深色      | 淺色      | 使用( U)                                                           |
| ------------------ | ----------------------- | ------------------ | --------- | --------- | ------------------------------------------------------------------ |
| `chart.series1`    | `--on-chart-series1`    | `chart-series1`    | `#7B72EE` | `#6A61E8` | 分類顏色1,紫羅蘭.                                                  |
| `chart.series2`    | `--on-chart-series2`    | `chart-series2`    | `#E0663F` | `#D9572E` | 分類顏色2,珊瑚。                                                   |
| `chart.series3`    | `--on-chart-series3`    | `chart-series3`    | `#1E9E72` | `#168A62` | 分類顏色 3, 青色; 所有三種都檢查了 #1A1A1A1A上的色盲訪問/相容性 。 |
| `chart.emphasis`   | `--on-chart-emphasis`   | `chart-emphasis`   | `#F99E70` | `#D0602A` | 單系列重點,本期.                                                   |
| `chart.deemphasis` | `--on-chart-deemphasis` | `chart-deemphasis` | `#4A4A4A` | `#CFCFCF` | 單系列去強調,歷史時期.                                             |
| `chart.grid`       | `--on-chart-grid`       | `chart-grid`       | `#2C2C2A` | `#EBEBEB` |                                                                    |
| `chart.axis`       | `--on-chart-axis`       | `chart-axis`       | `#383838` | `#D6D6D6` |                                                                    |

<a id="component-colors"></a>

### 元件顏色

| 設計權杖                   | CSS 變數                          | 工具                         | 深色                        | 淺色                        | 使用( U)                                                                                   |
| -------------------------- | --------------------------------- | ---------------------------- | --------------------------- | --------------------------- | ------------------------------------------------------------------------------------------ |
| `component.searchBg`       | `--on-component-search-bg`        | `component-search-bg`        | `#1C1C1C`                   | `#FFFFFF`                   | 搜尋場和窗體輸入背景.                                                                      |
| `component.cardHover`      | `--on-component-card-hover`       | `component-card-hover`       | `#1D1D1D`                   | `#FAFAFA`                   | 互動卡徘徊背景.                                                                            |
| `component.toggleTrack`    | `--on-component-toggle-track`     | `component-toggle-track`     | `#333333`                   | `#D9D9D9`                   | 切換軌道。                                                                                 |
| `component.toggleKnob`     | `--on-component-toggle-knob`      | `component-toggle-knob`      | `#BDBDBD`                   | `#FFFFFF`                   | 切換拇指。                                                                                 |
| `component.toggleKnobOn`   | `--on-component-toggle-knob-on`   | `component-toggle-knob-on`   | `#FFFFFF`                   | —                           | 在切換拇指上。                                                                             |
| `component.tabIndicator`   | `--on-component-tab-indicator`    | `component-tab-indicator`    | `#FFFFFF`                   | `#1A1A1A`                   | 選定塔布指標。                                                                             |
| `component.navActive`      | `--on-component-nav-active`       | `component-nav-active`       | `#202020`                   | `#E3E3E3`                   | 選中的側邊欄導航背景 。                                                                    |
| `component.heroBg`         | `--on-component-hero-bg`          | `component-hero-bg`          | `#0E0E10`                   | `#F4F3FD`                   | 特色英雄卡背景.                                                                            |
| `component.captionBg`      | `--on-component-caption-bg`       | `component-caption-bg`       | `rgba(0, 0, 0, 0.55)`       | —                           | 螢幕截圖左下方字幕背景; 兩個主題中都暗, 因此標題在暗主題( data- heald='dark') 中生成 。    |
| `component.topNavScrolled` | `--on-component-top-nav-scrolled` | `component-top-nav-scrolled` | `rgba(11, 11, 11, 0.85)`    | `rgba(242, 242, 242, 0.85)` | 滾動的網頁導航背景:表面.page at 85%,背景-過濾器:模糊(20px).                                |
| `component.scrim`          | `--on-component-scrim`            | `component-scrim`            | `rgba(0, 0, 0, 0.50)`       | `rgba(0, 0, 0, 0.30)`       | 對話方塊/表格背景 。                                                                       |
| `component.lightboxScrim`  | `--on-component-lightbox-scrim`   | `component-lightbox-scrim`   | `rgba(0, 0, 0, 0.88)`       | —                           | 螢幕截圖燈盒背景;在兩個主題中都是暗色的,因此燈盒在暗色主題中(data-theme='dark')使燈盒產生. |
| `component.modalBg`        | `--on-component-modal-bg`         | `component-modal-bg`         | `#171717`                   | `#FFFFFF`                   | 對話方塊/ 表格面板背景 。                                                                  |
| `component.toastBg`        | `--on-component-toast-bg`         | `component-toast-bg`         | `rgba(44, 44, 44, 0.92)`    | `rgba(255, 255, 255, 0.94)` | 帶有背景-過濾器的托拉斯背景:模糊(20px).                                                    |
| `component.itemActive`     | `--on-component-item-active`      | `component-item-active`      | `rgba(255, 255, 255, 0.07)` | `rgba(0, 0, 0, 0.06)`       | 當前選單/命令- palette 專案背景 。                                                         |
| `component.runningBorder`  | `--on-component-running-border`   | `component-running-border`   | `rgba(255, 115, 86, 0.25)`  | `rgba(238, 85, 51, 0.40)`   | 主動任務卡邊界,珊瑚佔25%.                                                                  |
| `component.logHeading`     | `--on-component-log-heading`      | `component-log-heading`      | `#E8E8E8`                   | `#1A1A1A`                   | 日誌步驟行從QQ開始.                                                                        |
| `component.logSuccess`     | `--on-component-log-success`      | `component-log-success`      | `#7FD88F`                   | `#187733`                   | 成功日誌行 。                                                                              |
| `component.monoText`       | `--on-component-mono-text`        | `component-mono-text`        | `#D0D0D0`                   | `#333333`                   | Monospace表文字,如版本.                                                                    |
| `component.timelineLine`   | `--on-component-timeline-line`    | `component-timeline-line`    | `#333333`                   | `#D6D6D6`                   | 時間線開始,從表面消失,透明化。                                                             |
| `component.timelineDot`    | `--on-component-timeline-dot`     | `component-timeline-dot`     | `#3A3A3A`                   | `#C4C4C4`                   | 正常的時間線條目點.                                                                        |
| `component.sourceMeta`     | `--on-component-source-meta`      | `component-source-meta`      | `#555555`                   | `#B0B0B0`                   | 輔助源點, 如 GitHub 釋出源中的後設資料。                                                   |
| `component.collectionFrom` | `--on-component-collection-from`  | `component-collection-from`  | `#1D1A26`                   | `#F1EEFB`                   | 收集卡梯度起始,160°.                                                                       |
| `component.collectionTo`   | `--on-component-collection-to`    | `component-collection-to`    | `#161616`                   | `#FFFFFF`                   | 收藏卡梯度結束為70%.                                                                       |
| `component.collectionRing` | `--on-component-collection-ring`  | `component-collection-ring`  | `#1B1922`                   | `#F8F7FD`                   | 收藏堆疊的相框 。                                                                          |
| `component.detailHeaderBg` | `--on-component-detail-header-bg` | `component-detail-header-bg` | `#171717`                   | `#FFFFFF`                   | 發光下的詳細頭卡背景 。                                                                    |
| `component.cliIconFrom`    | `--on-component-cli-icon-from`    | `component-cli-icon-from`    | `#2A2A2A`                   | —                           | 命令列牌梯度開始 。                                                                        |
| `component.cliIconTo`      | `--on-component-cli-icon-to`      | `component-cli-icon-to`      | `#1B1B1B`                   | —                           | 命令列牌梯度結束 。                                                                        |
| `component.cliIconText`    | `--on-component-cli-icon-text`    | `component-cli-icon-text`    | `#E2E2E2`                   | —                           | 命令列牌文字.                                                                              |
| `component.letterIconText` | `--on-component-letter-icon-text` | `component-letter-icon-text` | `#FFFFFF`                   | —                           | 字母拼寫文字,裝飾性,因為名字總是同時出現.                                                  |
| `component.segmentActive`  | `--on-component-segment-active`   | `component-segment-active`   | `#262626`                   | `#FFFFFF`                   | 分塊控制元件的選定部分 。                                                                  |
| `component.menuBarBg`      | `--on-component-menu-bar-bg`      | `component-menu-bar-bg`      | `rgba(38, 38, 40, 0.96)`    | `rgba(246, 246, 246, 0.96)` | 應用程式預覽 macOS 選單條條條。                                                            |
| `component.menuBarText`    | `--on-component-menu-bar-text`    | `component-menu-bar-text`    | `#E6E6E6`                   | `#1F1F1F`                   | 選單欄預覽項, 繪製如 AppKit 模板影象 。                                                    |

<a id="macos-window-controls"></a>

### macOS 視窗控制元件

| 設計權杖         | CSS 變數              | 工具             | 深色      | 淺色 | 使用( U) |
| ---------------- | --------------------- | ---------------- | --------- | ---- | -------- |
| `macos.close`    | `--on-macos-close`    | `macos-close`    | `#FF5F57` | —    |          |
| `macos.minimize` | `--on-macos-minimize` | `macos-minimize` | `#FEBC2E` | —    |          |
| `macos.zoom`     | `--on-macos-zoom`     | `macos-zoom`     | `#28C840` | —    |          |

<a id="typography"></a>

## 型別

類 `text-{name}` 設定大小、行高、重量和跟蹤。

| 名稱        | 類              | 大小/ 行高                | 重量 | 跟蹤                   | 使用( U)                   |
| ----------- | --------------- | ------------------------- | ---- | ---------------------- | -------------------------- |
| `hero`      | `text-hero`     | 76 / 78 px (中文(簡體) ). | 600  | - 0.035毫米口徑        | 網頁主頁英雄標題           |
| `section`   | `text-section`  | 46 / 50 px (單位:千美元)  | 600  | - 0.03m (中文(簡體) ). | Web 區域標題               |
| `display`   | `text-display`  | 40 / 44 px (中文(簡體) ). | 600  | - 0.03m (中文(簡體) ). | 特質英雄嚮導               |
| `title1`    | `text-title1`   | 28 / 34 px (中文(簡體) ). | 600  | - 0.02毫米(每分鐘一次) | 頁面標題                   |
| `title2`    | `text-title2`   | 22 / 28 px (中文(簡體) ). | 600  | - 0.02毫米(每分鐘一次) | 對話方塊標題和緊湊細節標題 |
| `headline`  | `text-headline` | 16 / 24 px (中文(簡體) ). | 600  | - 0.01毫米(千分點)     | 節目標題                   |
| `statValue` | `text-stat`     | 20 / 26 px (中文(簡體) ). | 600  | - 0.015毫米口徑        | 帶有比例數字的統計值       |
| `body`      | `text-body`     | 14 / 22 px (中文(簡體) ). | 400  | 0                      | 正文文字                   |
| `bodySm`    | `text-body-sm`  | 13 / 20 px (中文(簡體) ). | 400  | 0                      | 列表和表格正文             |
| `caption`   | `text-caption`  | 12 / 18 px (中文(簡體) ). | 400  | 0                      | 次要資料                   |
| `label`     | `text-label`    | 11 / 16 px (中文(簡體) ). | 600  | 0.08m,大寫             | 分組標籤, 如側邊欄標題     |
| `mono`      | `text-mono`     | 12 / 18 px (中文(簡體) ). | 400  | 0                      | 命令、版本和日誌           |

| 字型家族 | 堆疊                                                                                                                                                                                      |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sans`   | Inter 變數, Inter, PingFang SC, Hiragino Sans GB, 微軟 YaHei, Noto Sans SC, -apple-systemFont, Brink MacSystemFont, Helvetica Neue, sans-serif 網際網路檔案館的存檔,存檔日期2013-03-02.   |
| `sansZh` | Inter 變數, Inter, PingFang SC, Hiragino Sans GB, 微軟 YaHei, Noto Sans SC, -apple-systemFont, Brink MacSystemFont, Helvetica Neue, sans-serif 網際網路檔案館的存檔,存檔日期2013-03-02.   |
| `sansJa` | Inter 變數, Inter(原始內容存檔於2018-09-26). Hiragino Sans, Hiragino Kaku Gothic ProN, Yu Gothic, Noto Sans JP, -apple-systemFont, BlinkMacSystemFont, Helvetica Neue, sans-serif (英語). |
| `mono`   | SF Mono, JetBrains Mono, ui-monospace, Menlo, 康索拉斯, 解放Mono, 單空間                                                                                                                  |

<a id="spacing"></a>

## 間距

| 名稱  | CSS 變數         | 數值              | 使用( U) |
| ----- | ---------------- | ----------------- | -------- |
| `0`   | `--on-space-0`   | 0px (正負)        |          |
| `1`   | `--on-space-1`   | 4px 呼叫          |          |
| `2`   | `--on-space-2`   | 8px (8px) (英語). |          |
| `3`   | `--on-space-3`   | 12px 時速         |          |
| `4`   | `--on-space-4`   | 16px 時速         |          |
| `5`   | `--on-space-5`   | 20px (英語).      |          |
| `6`   | `--on-space-6`   | 24px (英語).      |          |
| `7`   | `--on-space-7`   | 28px (英語).      |          |
| `8`   | `--on-space-8`   | 32px 單曲         |          |
| `10`  | `--on-space-10`  | 40px (英語).      |          |
| `12`  | `--on-space-12`  | 48px 座標         |          |
| `16`  | `--on-space-16`  | 64px (韓語).      |          |
| `20`  | `--on-space-20`  | 80px (英語).      |          |
| `0-5` | `--on-space-0-5` | 2px 時速          |          |
| `1-5` | `--on-space-1-5` | 6px (6px) (韓語). |          |
| `2-5` | `--on-space-2-5` | 10px (韓語).      |          |
| `3-5` | `--on-space-3-5` | 14px 呼叫         |          |

<a id="radius"></a>

## 半徑

| 名稱               | CSS 變數               | 數值           | 使用( U)                                          |
| ------------------ | ---------------------- | -------------- | ------------------------------------------------- |
| `rounded-tiny`     | `--on-radius-tiny`     | 4px 呼叫       |                                                   |
| `rounded-small`    | `--on-radius-small`    | 7px 座標       |                                                   |
| `rounded-default`  | `--on-radius-default`  | 10px (韓語).   |                                                   |
| `rounded-panel`    | `--on-radius-panel`    | 12px 時速      | 螢幕截圖卡,選單,疊加.                             |
| `rounded-big`      | `--on-radius-big`      | 14px 呼叫      |                                                   |
| `rounded-huge`     | `--on-radius-huge`     | 20px (英語).   |                                                   |
| `rounded-xl`       | `--on-radius-xl`       | 28px (英語).   |                                                   |
| `rounded-full`     | `--on-radius-full`     | 9999px (英語). |                                                   |
| `rounded-app-icon` | `--on-radius-app-icon` | 23%            | App 圖示半徑: 23% 側長度, 近似 macOS 超級橢圓形。 |

<a id="shadows"></a>

## 陰影

| 名稱                | 深色                                                                         | 淺色                                                                   | 使用( U)                                           |
| ------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------- |
| `shadow-window`     | `0 50px 140px rgba(0, 0, 0, 0.65), 0 0 0 0.5px #000000`                      | `0 40px 100px rgba(0, 0, 0, 0.16), 0 0 0 0.5px rgba(0, 0, 0, 0.16)`    |                                                    |
| `shadow-popover`    | `0 24px 60px rgba(0, 0, 0, 0.60)`                                            | `0 12px 40px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04)`       |                                                    |
| `shadow-modal`      | `0 30px 80px rgba(0, 0, 0, 0.60)`                                            | `0 24px 64px rgba(0, 0, 0, 0.16)`                                      |                                                    |
| `shadow-toast`      | `0 18px 40px rgba(0, 0, 0, 0.50)`                                            | `0 10px 30px rgba(0, 0, 0, 0.12)`                                      |                                                    |
| `shadow-float-icon` | `0 18px 30px rgba(0, 0, 0, 0.55)`                                            | `0 14px 28px rgba(0, 0, 0, 0.16)`                                      |                                                    |
| `shadow-app-icon`   | `inset 0 0 0 0.5px rgba(255, 255, 255, 0.14), 0 1px 2px rgba(0, 0, 0, 0.40)` | `inset 0 0 0 0.5px rgba(0, 0, 0, 0.10), 0 1px 2px rgba(0, 0, 0, 0.12)` |                                                    |
| `shadow-icon-text`  | `0 1px 2px rgba(0, 0, 0, 0.30)`                                              | —                                                                      | 字母平板陰影保留了光背景的可讀性.                  |
| `shadow-focus-ring` | `0 0 0 2px #131313, 0 0 0 4px #FF7356`                                       | `0 0 0 2px #FFFFFF, 0 0 0 4px #EE5533`                                 | 鍵盤焦點環:2px差距+2px珊瑚(3.5:1對光模式下的白色). |
| `shadow-segment`    | `0 0 #0000`                                                                  | `0 1px 2px rgba(0, 0, 0, 0.10), 0 0 0 0.5px rgba(0, 0, 0, 0.08)`       | 選中的段升降; 無( 透明的陰影) 暗模式 。            |
| `shadow-knob`       | `0 0 #0000`                                                                  | `0 1px 2px rgba(0, 0, 0, 0.22), 0 0 0 0.5px rgba(0, 0, 0, 0.08)`       | 切換牽引力;白色牽引力需要在輕軌上.                 |

<a id="motion"></a>

## 動議

| 名稱              | 數值                             |
| ----------------- | -------------------------------- |
| `duration-fast`   | 120 毫秒(每秒)                   |
| `duration-base`   | 200 毫秒( 秒)                    |
| `duration-slow`   | 320 毫秒( 320毫秒)               |
| `ease-standard`   | `cubic-bezier(0.2, 0.8, 0.2, 1)` |
| `ease-emphasized` | `cubic-bezier(0.3, 0, 0, 1)`     |
| `ease-exit`       | `cubic-bezier(0.4, 0, 1, 1)`     |

<a id="z-index"></a>

## Z指數

| 名稱         | 數值 |
| ------------ | ---- |
| `z-base`     | 0    |
| `z-sticky`   | 10   |
| `z-dropdown` | 100  |
| `z-overlay`  | 200  |
| `z-modal`    | 300  |
| `z-popover`  | 400  |
| `z-toast`    | 500  |
| `z-tooltip`  | 600  |

<a id="layout"></a>

## 版式

| 設計權杖                             | 數值                                                 |
| ------------------------------------ | ---------------------------------------------------- |
| `layout.desktop.windowDefaultWidth`  | 1280px (英語).                                       |
| `layout.desktop.windowDefaultHeight` | 820px (820px) (英語).                                |
| `layout.desktop.windowMinWidth`      | 1100px (英語).                                       |
| `layout.desktop.windowMinHeight`     | 700px (英語).                                        |
| `layout.desktop.sidebarWidth`        | 224px (英語).                                        |
| `layout.desktop.toolbarHeight`       | 52px (英語).                                         |
| `layout.desktop.railWidth`           | 288px (中文(簡體) ).                                 |
| `layout.desktop.contentPaddingX`     | 28px (英語).                                         |
| `layout.desktop.railPadding`         | 20px (英語).                                         |
| `layout.desktop.trafficLightInset`   | x 18px, y 22px (英語).                               |
| `layout.web.pageMaxWidth`            | 1240px (英語).                                       |
| `layout.web.pageGutter`              | 24px (英語).                                         |
| `layout.web.navHeight`               | 64px (韓語).                                         |
| `layout.web.breakpoints`             | sm 640px, md 768px, lg 1024px, xl 1280px, 2xl 1440px |

<a id="effects"></a>

## 效果

| 設計權杖            | 深色                                                                                                                                                              | 淺色                  | 使用( U)                                                                             |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------ |
| `heroGlow`          | `radial-gradient(circle, rgba(205, 205, 255, 0.95) 0%, rgba(135, 135, 245, 0.78) 14%, rgba(92, 92, 220, 0.50) 32%, rgba(64, 64, 190, 0.20) 52%, transparent 70%)` | —                     | 特色英雄紫羅蘭光芒.                                                                  |
| `coverGlow`         | `radial-gradient(circle, rgba(170, 170, 255, 0.55) 0%, rgba(110, 110, 235, 0.35) 16%, rgba(80, 80, 214, 0.18) 34%, rgba(60, 60, 180, 0.06) 52%, transparent 66%)` | —                     | 柔軟的大型網路英雄光芒.                                                              |
| `ring.stroke`       | `rgba(255, 255, 255, 0.13)`                                                                                                                                       | `rgba(0, 0, 0, 0.10)` |                                                                                      |
| `ring.dasharray`    | `2 6`                                                                                                                                                             | —                     |                                                                                      |
| `detailGlow`        | `radial-gradient(closest-side, {accent}73, {accent}2E 55%, transparent)`                                                                                          | —                     | 右上角的細頭髮光; {accent} 是軟體包重音Color(預設為#3C96F5);73/2E是十六進位制的α值。 |
| `backdropBlur`      | `20`                                                                                                                                                              | —                     |                                                                                      |
| `accentGlowOpacity` | `1`                                                                                                                                                               | `0.5`                 | 用包口音顏色(細節頭,定製英雄發光)構建的光線不透明;飽和的口音需要在光背景上軟化.      |
