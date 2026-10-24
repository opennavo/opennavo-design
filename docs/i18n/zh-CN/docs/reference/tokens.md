[English](../../../../reference/tokens.md) · **简体中文** · [繁體中文](../../../zh-Hant/docs/reference/tokens.md) · [日本語](../../../ja-JP/docs/reference/tokens.md) · [Español](../../../es-ES/docs/reference/tokens.md) · [Português (Brasil)](../../../pt-BR/docs/reference/tokens.md) · [Русский](../../../ru-RU/docs/reference/tokens.md) · [Deutsch](../../../de-DE/docs/reference/tokens.md) · [Français](../../../fr-FR/docs/reference/tokens.md) · [Italiano](../../../it-IT/docs/reference/tokens.md)

> 英文为源文。新增翻译由本机离线工具辅助生成，仍需母语审校；代码和许可证原文保持不变。

<a id="token-reference"></a>

# 调用参考文献

<!-- Generated from tokens/tokens.json by packages/tokens/scripts/generate.ts; do not edit. After changing tokens.json, run `pnpm gen`. -->

下面的每个值都来自 `tokens/tokens.json`。黑暗是默认主题; 光柱显示值
轻度主题使用(一个em drust表示两个主题中的符号相同). CSS 变量是网络
软件包发送; 工具列是 UnoCSS / Tailwind 类干(`bg-`, `text-`, `border-` ...+干线).
Flutter (`OnColors`和(或) SwiftUI (`OnColor`)使用骆驼Case路径,例如. `surface.cardAlt` → `surfaceCardAlt`.

<a id="color"></a>

## 颜色

<a id="surfaces"></a>

### 表面

| 设计令牌          | CSS 变量                | 工具               | 深色                     | 浅色                        | 使用( U)                                                        |
| ----------------- | ----------------------- | ------------------ | ------------------------ | --------------------------- | --------------------------------------------------------------- |
| `surface.page`    | `--on-surface-page`     | `surface-page`     | `#0B0B0B`                | `#F2F2F2`                   | 外网与窗口背景.                                                 |
| `surface.base`    | `--on-surface-base`     | `surface-base`     | `#131313`                | `#F8F8F8`                   | 主要内容背景.                                                   |
| `surface.sidebar` | `--on-surface-sidebar`  | `surface-sidebar`  | `#161616`                | `#F1F1F1`                   | 桌面侧边栏 。                                                   |
| `surface.rail`    | `--on-surface-rail`     | `surface-rail`     | `#141414`                | `#F5F5F5`                   | 右栏有摘要和辅助动作.                                           |
| `surface.card`    | `--on-surface-card`     | `surface-card`     | `#1A1A1A`                | `#FFFFFF`                   | 纸牌.                                                           |
| `surface.cardAlt` | `--on-surface-card-alt` | `surface-card-alt` | `#1F1F1F`                | `#F5F5F5`                   | 输入和副块在卡片中。                                            |
| `surface.raised`  | `--on-surface-raised`   | `surface-raised`   | `#262626`                | `#EDEDED`                   | Hover,选择,图标牌;在光线模式下比牌更暗,因此浮动面板使用popover. |
| `surface.chip`    | `--on-surface-chip`     | `surface-chip`     | `#2A2A2A`                | `#EBEBEB`                   | 中立徽章背景.                                                   |
| `surface.control` | `--on-surface-control`  | `surface-control`  | `#2B2B2B`                | `#FFFFFF`                   | 输入、工具提示和二级控制。                                      |
| `surface.inset`   | `--on-surface-inset`    | `surface-inset`    | `#111111`                | `#F0F0F0`                   | 代码块,日志,分区控制轨迹.                                       |
| `surface.overlay` | `--on-surface-overlay`  | `surface-overlay`  | `rgba(28, 28, 28, 0.92)` | `rgba(255, 255, 255, 0.94)` | 覆盖背景-过滤器:模糊(20px).                                     |
| `surface.popover` | `--on-surface-popover`  | `surface-popover`  | `#262626`                | `#FFFFFF`                   | 浮动面板和关于内容的通知,如同意和建议卡。                       |

<a id="borders-utility-prefix-line"></a>

### 边框( 功能前缀) `line`)

| 设计令牌         | CSS 变量              | 工具           | 深色                        | 浅色                  | 使用( U)               |
| ---------------- | --------------------- | -------------- | --------------------------- | --------------------- | ---------------------- |
| `border.subtle`  | `--on-border-subtle`  | `line-subtle`  | `rgba(255, 255, 255, 0.07)` | `rgba(0, 0, 0, 0.08)` | 纸牌边框和分牌者.      |
| `border.default` | `--on-border-default` | `line-default` | `rgba(255, 255, 255, 0.12)` | `rgba(0, 0, 0, 0.13)` | 输入 鬼按钮 和窗口边框 |
| `border.strong`  | `--on-border-strong`  | `line-strong`  | `rgba(255, 255, 255, 0.20)` | `rgba(0, 0, 0, 0.22)` | 毗卢遮那境.            |
| `border.sidebar` | `--on-border-sidebar` | `line-sidebar` | `#1D1D1D`                   | `#E5E5E5`             | 右侧边框               |

<a id="text-utility-prefix-ink"></a>

### 文本( 功能前缀) `ink`)

| 设计令牌         | CSS 变量              | 工具            | 深色      | 浅色      | 使用( U)                                                                       |
| ---------------- | --------------------- | --------------- | --------- | --------- | ------------------------------------------------------------------------------ |
| `text.primary`   | `--on-text-primary`   | `ink-primary`   | `#EDEDED` | `#1A1A1A` | 标题,强调体文字,数字(暗卡14.9:1,轻卡17.4:1).                                   |
| `text.secondary` | `--on-text-secondary` | `ink-secondary` | `#A8A8A8` | `#575757` | 身体文字和描述(暗卡7.3:1,轻卡7.2:1).                                           |
| `text.tertiary`  | `--on-text-tertiary`  | `ink-tertiary`  | `#8F8F8F` | `#6B6B6B` | 次要信息,标签,时间(暗卡5.4:1,暗升4.7:1;光模式5.3:1和4.6:1).                    |
| `text.disabled`  | `--on-text-disabled`  | `ink-disabled`  | `#5C5C5C` | `#A6A6A6` | 仅限残疾人/装饰人员;从未传达基本信息。                                         |
| `text.inverse`   | `--on-text-inverse`   | `ink-inverse`   | `#141414` | `#FFFFFF` | 固体填充物上的文字和图标(状态,珊瑚,鲑鱼);暗色模式,白色为光色模式.              |
| `text.onAccent`  | `--on-text-on-accent` | `ink-on-accent` | `#1B0A05` | —         | 珊瑚按钮/臂章上的文字(7.2:1)。                                                 |
| `text.accent`    | `--on-text-accent`    | `ink-accent`    | `#FF7356` | `#B83A15` | 珊瑚文字,链接和图标;品牌.coral是用于填充和图形的(光线模式需要4.5:1更深的阴影). |

<a id="brand"></a>

### 品牌

| 设计令牌                        | CSS 变量                                 | 工具              | 深色                              | 浅色                  | 使用( U)                                                                            |
| ------------------------------- | ---------------------------------------- | ----------------- | --------------------------------- | --------------------- | ----------------------------------------------------------------------------------- |
| `brand.coral`                   | `--on-brand-coral`                       | `brand-coral`     | `#FF7356`                         | `#EE5533`             | 填充和图形的主要品牌颜色:标志、进步、徽章、下划线。对于珊瑚文字,则使用文字.accent。 |
| `brand.salmon`                  | `--on-brand-salmon`                      | `brand-salmon`    | `#F99E70`                         | `#A74C1B`             | 强调文字:英雄二行,徽章,可用更新.                                                    |
| `brand.violet`                  | `--on-brand-violet`                      | `brand-violet`    | `#5B5BD6`                         | —                     | 主英雄发光色.                                                                       |
| `brand.glowCore`                | `--on-brand-glow-core`                   | `brand-glow-core` | `#CDCDFF`                         | —                     | 光线中心亮点.                                                                       |
| `brand.logoGradient`            | `--on-brand-logo-gradient`               | —                 | `#FFB347` → `#FF7356` → `#FF4E3A` | —                     | Logo N 梯度, 从左上到右下。                                                         |
| `brand.logoCoreGradient`        | `--on-brand-logo-core-gradient`          | —                 | `#FFF6D6` → `#FFC861`             | `#FFB347` → `#FF8F3F` | 暗背景上的Logo Polaris梯度 。                                                       |
| `brand.logoCoreGradientOnLight` | `--on-brand-logo-core-gradient-on-light` | —                 | `#FFB347` → `#FF8F3F`             | —                     | 光背景上的Logo Polaris梯度; 温暖的白色会消失.                                       |

<a id="accent-tints"></a>

### 圆点锡

| 设计令牌              | CSS 变量                    | 工具                   | 深色                        | 浅色                      | 使用( U)              |
| --------------------- | --------------------------- | ---------------------- | --------------------------- | ------------------------- | --------------------- |
| `accent.coralSubtle`  | `--on-accent-coral-subtle`  | `accent-coral-subtle`  | `rgba(255, 115, 86, 0.12)`  | `rgba(238, 85, 51, 0.10)` | 进展轨迹及更新徽章.   |
| `accent.salmonSubtle` | `--on-accent-salmon-subtle` | `accent-salmon-subtle` | `rgba(249, 158, 112, 0.10)` | `rgba(167, 76, 27, 0.10)` | 徽章和可用更新的背景. |

<a id="status"></a>

### 状态

| 设计令牌               | CSS 变量                     | 工具                    | 深色                        | 浅色                       | 使用( U)                |
| ---------------------- | ---------------------------- | ----------------------- | --------------------------- | -------------------------- | ----------------------- |
| `status.success`       | `--on-status-success`        | `status-success`        | `#3FCF6C`                   | `#187733`                  | 已安装,成功,当前 。     |
| `status.successSubtle` | `--on-status-success-subtle` | `status-success-subtle` | `rgba(63, 207, 108, 0.10)`  | `rgba(24, 119, 51, 0.10)`  |                         |
| `status.warning`       | `--on-status-warning`        | `status-warning`        | `#FAB219`                   | `#965A00`                  | 需要警告和管理员许可 。 |
| `status.warningSubtle` | `--on-status-warning-subtle` | `status-warning-subtle` | `rgba(250, 178, 25, 0.10)`  | `rgba(150, 90, 0, 0.10)`   |                         |
| `status.danger`        | `--on-status-danger`         | `status-danger`         | `#FF5D51`                   | `#C22B21`                  | 失败,堕落,删除.         |
| `status.dangerSubtle`  | `--on-status-danger-subtle`  | `status-danger-subtle`  | `rgba(255, 93, 81, 0.10)`   | `rgba(194, 43, 33, 0.10)`  |                         |
| `status.info`          | `--on-status-info`           | `status-info`           | `#66A4FA`                   | `#1564CD`                  | 自我更新,链接,信息.     |
| `status.infoSubtle`    | `--on-status-info-subtle`    | `status-info-subtle`    | `rgba(102, 164, 250, 0.10)` | `rgba(21, 100, 205, 0.10)` |                         |
| `status.successBorder` | `--on-status-success-border` | `status-success-border` | `rgba(63, 207, 108, 0.20)`  | `rgba(24, 119, 51, 0.24)`  | 面板的边框有成功效果。  |
| `status.warningBorder` | `--on-status-warning-border` | `status-warning-border` | `rgba(250, 178, 25, 0.25)`  | `rgba(150, 90, 0, 0.24)`   | 带警示艇的面板边缘      |
| `status.dangerBorder`  | `--on-status-danger-border`  | `status-danger-border`  | `rgba(255, 93, 81, 0.25)`   | `rgba(194, 43, 33, 0.24)`  | 带危险物质的板块边界    |
| `status.infoBorder`    | `--on-status-info-border`    | `status-info-border`    | `rgba(102, 164, 250, 0.25)` | `rgba(21, 100, 205, 0.24)` | 带信息潜质的面板边界。  |

<a id="buttons"></a>

### 按钮

| 设计令牌                  | CSS 变量                        | 工具                       | 深色      | 浅色      | 使用( U) |
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

### 图表

| 设计令牌           | CSS 变量                | 工具               | 深色      | 浅色      | 使用( U)                                                           |
| ------------------ | ----------------------- | ------------------ | --------- | --------- | ------------------------------------------------------------------ |
| `chart.series1`    | `--on-chart-series1`    | `chart-series1`    | `#7B72EE` | `#6A61E8` | 分类颜色1,紫罗兰.                                                  |
| `chart.series2`    | `--on-chart-series2`    | `chart-series2`    | `#E0663F` | `#D9572E` | 分类颜色2,珊瑚。                                                   |
| `chart.series3`    | `--on-chart-series3`    | `chart-series3`    | `#1E9E72` | `#168A62` | 分类颜色 3, 青色; 所有三种都检查了 #1A1A1A1A上的色盲访问/相容性 。 |
| `chart.emphasis`   | `--on-chart-emphasis`   | `chart-emphasis`   | `#F99E70` | `#D0602A` | 单系列重点,本期.                                                   |
| `chart.deemphasis` | `--on-chart-deemphasis` | `chart-deemphasis` | `#4A4A4A` | `#CFCFCF` | 单系列去强调,历史时期.                                             |
| `chart.grid`       | `--on-chart-grid`       | `chart-grid`       | `#2C2C2A` | `#EBEBEB` |                                                                    |
| `chart.axis`       | `--on-chart-axis`       | `chart-axis`       | `#383838` | `#D6D6D6` |                                                                    |

<a id="component-colors"></a>

### 组件颜色

| 设计令牌                   | CSS 变量                          | 工具                         | 深色                        | 浅色                        | 使用( U)                                                                                   |
| -------------------------- | --------------------------------- | ---------------------------- | --------------------------- | --------------------------- | ------------------------------------------------------------------------------------------ |
| `component.searchBg`       | `--on-component-search-bg`        | `component-search-bg`        | `#1C1C1C`                   | `#FFFFFF`                   | 搜索场和窗体输入背景.                                                                      |
| `component.cardHover`      | `--on-component-card-hover`       | `component-card-hover`       | `#1D1D1D`                   | `#FAFAFA`                   | 互动卡徘徊背景.                                                                            |
| `component.toggleTrack`    | `--on-component-toggle-track`     | `component-toggle-track`     | `#333333`                   | `#D9D9D9`                   | 切换轨道。                                                                                 |
| `component.toggleKnob`     | `--on-component-toggle-knob`      | `component-toggle-knob`      | `#BDBDBD`                   | `#FFFFFF`                   | 切换拇指。                                                                                 |
| `component.toggleKnobOn`   | `--on-component-toggle-knob-on`   | `component-toggle-knob-on`   | `#FFFFFF`                   | —                           | 在切换拇指上。                                                                             |
| `component.tabIndicator`   | `--on-component-tab-indicator`    | `component-tab-indicator`    | `#FFFFFF`                   | `#1A1A1A`                   | 选定塔布指标。                                                                             |
| `component.navActive`      | `--on-component-nav-active`       | `component-nav-active`       | `#202020`                   | `#E3E3E3`                   | 选中的侧边栏导航背景 。                                                                    |
| `component.heroBg`         | `--on-component-hero-bg`          | `component-hero-bg`          | `#0E0E10`                   | `#F4F3FD`                   | 特色英雄卡背景.                                                                            |
| `component.captionBg`      | `--on-component-caption-bg`       | `component-caption-bg`       | `rgba(0, 0, 0, 0.55)`       | —                           | 屏幕截图左下方字幕背景; 两个主题中都暗, 因此标题在暗主题( data- heald='dark') 中生成 。    |
| `component.topNavScrolled` | `--on-component-top-nav-scrolled` | `component-top-nav-scrolled` | `rgba(11, 11, 11, 0.85)`    | `rgba(242, 242, 242, 0.85)` | 滚动的网页导航背景:表面.page at 85%,背景-过滤器:模糊(20px).                                |
| `component.scrim`          | `--on-component-scrim`            | `component-scrim`            | `rgba(0, 0, 0, 0.50)`       | `rgba(0, 0, 0, 0.30)`       | 对话框/表格背景 。                                                                         |
| `component.lightboxScrim`  | `--on-component-lightbox-scrim`   | `component-lightbox-scrim`   | `rgba(0, 0, 0, 0.88)`       | —                           | 屏幕截图灯盒背景;在两个主题中都是暗色的,因此灯盒在暗色主题中(data-theme='dark')使灯盒产生. |
| `component.modalBg`        | `--on-component-modal-bg`         | `component-modal-bg`         | `#171717`                   | `#FFFFFF`                   | 对话框/ 表格面板背景 。                                                                    |
| `component.toastBg`        | `--on-component-toast-bg`         | `component-toast-bg`         | `rgba(44, 44, 44, 0.92)`    | `rgba(255, 255, 255, 0.94)` | 带有背景-过滤器的托拉斯背景:模糊(20px).                                                    |
| `component.itemActive`     | `--on-component-item-active`      | `component-item-active`      | `rgba(255, 255, 255, 0.07)` | `rgba(0, 0, 0, 0.06)`       | 当前菜单/命令- palette 项目背景 。                                                         |
| `component.runningBorder`  | `--on-component-running-border`   | `component-running-border`   | `rgba(255, 115, 86, 0.25)`  | `rgba(238, 85, 51, 0.40)`   | 主动任务卡边界,珊瑚占25%.                                                                  |
| `component.logHeading`     | `--on-component-log-heading`      | `component-log-heading`      | `#E8E8E8`                   | `#1A1A1A`                   | 日志步骤行从QQ开始.                                                                        |
| `component.logSuccess`     | `--on-component-log-success`      | `component-log-success`      | `#7FD88F`                   | `#187733`                   | 成功日志行 。                                                                              |
| `component.monoText`       | `--on-component-mono-text`        | `component-mono-text`        | `#D0D0D0`                   | `#333333`                   | Monospace表文本,如版本.                                                                    |
| `component.timelineLine`   | `--on-component-timeline-line`    | `component-timeline-line`    | `#333333`                   | `#D6D6D6`                   | 时间线开始,从表面消失,透明化。                                                             |
| `component.timelineDot`    | `--on-component-timeline-dot`     | `component-timeline-dot`     | `#3A3A3A`                   | `#C4C4C4`                   | 正常的时间线条目点.                                                                        |
| `component.sourceMeta`     | `--on-component-source-meta`      | `component-source-meta`      | `#555555`                   | `#B0B0B0`                   | 辅助源点, 如 GitHub 发布源中的元数据。                                                     |
| `component.collectionFrom` | `--on-component-collection-from`  | `component-collection-from`  | `#1D1A26`                   | `#F1EEFB`                   | 收集卡梯度起始,160°.                                                                       |
| `component.collectionTo`   | `--on-component-collection-to`    | `component-collection-to`    | `#161616`                   | `#FFFFFF`                   | 收藏卡梯度结束为70%.                                                                       |
| `component.collectionRing` | `--on-component-collection-ring`  | `component-collection-ring`  | `#1B1922`                   | `#F8F7FD`                   | 收藏堆叠的相框 。                                                                          |
| `component.detailHeaderBg` | `--on-component-detail-header-bg` | `component-detail-header-bg` | `#171717`                   | `#FFFFFF`                   | 发光下的详细头卡背景 。                                                                    |
| `component.cliIconFrom`    | `--on-component-cli-icon-from`    | `component-cli-icon-from`    | `#2A2A2A`                   | —                           | 命令行牌梯度开始 。                                                                        |
| `component.cliIconTo`      | `--on-component-cli-icon-to`      | `component-cli-icon-to`      | `#1B1B1B`                   | —                           | 命令行牌梯度结束 。                                                                        |
| `component.cliIconText`    | `--on-component-cli-icon-text`    | `component-cli-icon-text`    | `#E2E2E2`                   | —                           | 命令行牌文字.                                                                              |
| `component.letterIconText` | `--on-component-letter-icon-text` | `component-letter-icon-text` | `#FFFFFF`                   | —                           | 字母拼写文本,装饰性,因为名字总是同时出现.                                                  |
| `component.segmentActive`  | `--on-component-segment-active`   | `component-segment-active`   | `#262626`                   | `#FFFFFF`                   | 分块控件的选定部分 。                                                                      |
| `component.menuBarBg`      | `--on-component-menu-bar-bg`      | `component-menu-bar-bg`      | `rgba(38, 38, 40, 0.96)`    | `rgba(246, 246, 246, 0.96)` | 应用程序预览 macOS 菜单条条条。                                                            |
| `component.menuBarText`    | `--on-component-menu-bar-text`    | `component-menu-bar-text`    | `#E6E6E6`                   | `#1F1F1F`                   | 菜单栏预览项, 绘制如 AppKit 模板图像 。                                                    |

<a id="macos-window-controls"></a>

### macOS 窗口控件

| 设计令牌         | CSS 变量              | 工具             | 深色      | 浅色 | 使用( U) |
| ---------------- | --------------------- | ---------------- | --------- | ---- | -------- |
| `macos.close`    | `--on-macos-close`    | `macos-close`    | `#FF5F57` | —    |          |
| `macos.minimize` | `--on-macos-minimize` | `macos-minimize` | `#FEBC2E` | —    |          |
| `macos.zoom`     | `--on-macos-zoom`     | `macos-zoom`     | `#28C840` | —    |          |

<a id="typography"></a>

## 类型

类 `text-{name}` 设置大小、行高、重量和跟踪。

| 名称        | 类              | 大小/ 行高                | 重量 | 跟踪                   | 使用( U)                 |
| ----------- | --------------- | ------------------------- | ---- | ---------------------- | ------------------------ |
| `hero`      | `text-hero`     | 76 / 78 px (中文(简体) ). | 600  | - 0.035毫米口径        | 网页主页英雄标题         |
| `section`   | `text-section`  | 46 / 50 px (单位:千美元)  | 600  | - 0.03m (中文(简体) ). | Web 区域标题             |
| `display`   | `text-display`  | 40 / 44 px (中文(简体) ). | 600  | - 0.03m (中文(简体) ). | 特质英雄向导             |
| `title1`    | `text-title1`   | 28 / 34 px (中文(简体) ). | 600  | - 0.02毫米(每分钟一次) | 页面标题                 |
| `title2`    | `text-title2`   | 22 / 28 px (中文(简体) ). | 600  | - 0.02毫米(每分钟一次) | 对话框标题和紧凑细节标题 |
| `headline`  | `text-headline` | 16 / 24 px (中文(简体) ). | 600  | - 0.01毫米(千分点)     | 节目标题                 |
| `statValue` | `text-stat`     | 20 / 26 px (中文(简体) ). | 600  | - 0.015毫米口径        | 带有比例数字的统计值     |
| `body`      | `text-body`     | 14 / 22 px (中文(简体) ). | 400  | 0                      | 正文文本                 |
| `bodySm`    | `text-body-sm`  | 13 / 20 px (中文(简体) ). | 400  | 0                      | 列表和表格正文           |
| `caption`   | `text-caption`  | 12 / 18 px (中文(简体) ). | 400  | 0                      | 次要资料                 |
| `label`     | `text-label`    | 11 / 16 px (中文(简体) ). | 600  | 0.08m,大写             | 分组标签, 如侧边栏标题   |
| `mono`      | `text-mono`     | 12 / 18 px (中文(简体) ). | 400  | 0                      | 命令、版本和日志         |

| 字体家族 | 堆栈                                                                                                                                                                                      |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sans`   | Inter 变量, Inter, PingFang SC, Hiragino Sans GB, 微软 YaHei, Noto Sans SC, -apple-systemFont, Brink MacSystemFont, Helvetica Neue, sans-serif 互联网档案馆的存檔,存档日期2013-03-02.     |
| `sansZh` | Inter 变量, Inter, PingFang SC, Hiragino Sans GB, 微软 YaHei, Noto Sans SC, -apple-systemFont, Brink MacSystemFont, Helvetica Neue, sans-serif 互联网档案馆的存檔,存档日期2013-03-02.     |
| `sansJa` | Inter 变量, Inter(原始内容存档于2018-09-26). Hiragino Sans, Hiragino Kaku Gothic ProN, Yu Gothic, Noto Sans JP, -apple-systemFont, BlinkMacSystemFont, Helvetica Neue, sans-serif (英语). |
| `mono`   | SF Mono, JetBrains Mono, ui-monospace, Menlo, 康索拉斯, 解放Mono, 单空间                                                                                                                  |

<a id="spacing"></a>

## 间距

| 名称  | CSS 变量         | 数值              | 使用( U) |
| ----- | ---------------- | ----------------- | -------- |
| `0`   | `--on-space-0`   | 0px (正负)        |          |
| `1`   | `--on-space-1`   | 4px 调用          |          |
| `2`   | `--on-space-2`   | 8px (8px) (英语). |          |
| `3`   | `--on-space-3`   | 12px 时速         |          |
| `4`   | `--on-space-4`   | 16px 时速         |          |
| `5`   | `--on-space-5`   | 20px (英语).      |          |
| `6`   | `--on-space-6`   | 24px (英语).      |          |
| `7`   | `--on-space-7`   | 28px (英语).      |          |
| `8`   | `--on-space-8`   | 32px 单曲         |          |
| `10`  | `--on-space-10`  | 40px (英语).      |          |
| `12`  | `--on-space-12`  | 48px 坐标         |          |
| `16`  | `--on-space-16`  | 64px (韩语).      |          |
| `20`  | `--on-space-20`  | 80px (英语).      |          |
| `0-5` | `--on-space-0-5` | 2px 时速          |          |
| `1-5` | `--on-space-1-5` | 6px (6px) (韩语). |          |
| `2-5` | `--on-space-2-5` | 10px (韩语).      |          |
| `3-5` | `--on-space-3-5` | 14px 调用         |          |

<a id="radius"></a>

## 半径

| 名称               | CSS 变量               | 数值           | 使用( U)                                          |
| ------------------ | ---------------------- | -------------- | ------------------------------------------------- |
| `rounded-tiny`     | `--on-radius-tiny`     | 4px 调用       |                                                   |
| `rounded-small`    | `--on-radius-small`    | 7px 坐标       |                                                   |
| `rounded-default`  | `--on-radius-default`  | 10px (韩语).   |                                                   |
| `rounded-panel`    | `--on-radius-panel`    | 12px 时速      | 屏幕截图卡,菜单,叠加.                             |
| `rounded-big`      | `--on-radius-big`      | 14px 调用      |                                                   |
| `rounded-huge`     | `--on-radius-huge`     | 20px (英语).   |                                                   |
| `rounded-xl`       | `--on-radius-xl`       | 28px (英语).   |                                                   |
| `rounded-full`     | `--on-radius-full`     | 9999px (英语). |                                                   |
| `rounded-app-icon` | `--on-radius-app-icon` | 23%            | App 图标半径: 23% 侧长度, 近似 macOS 超级椭圆形。 |

<a id="shadows"></a>

## 阴影

| 名称                | 深色                                                                         | 浅色                                                                   | 使用( U)                                           |
| ------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------- |
| `shadow-window`     | `0 50px 140px rgba(0, 0, 0, 0.65), 0 0 0 0.5px #000000`                      | `0 40px 100px rgba(0, 0, 0, 0.16), 0 0 0 0.5px rgba(0, 0, 0, 0.16)`    |                                                    |
| `shadow-popover`    | `0 24px 60px rgba(0, 0, 0, 0.60)`                                            | `0 12px 40px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04)`       |                                                    |
| `shadow-modal`      | `0 30px 80px rgba(0, 0, 0, 0.60)`                                            | `0 24px 64px rgba(0, 0, 0, 0.16)`                                      |                                                    |
| `shadow-toast`      | `0 18px 40px rgba(0, 0, 0, 0.50)`                                            | `0 10px 30px rgba(0, 0, 0, 0.12)`                                      |                                                    |
| `shadow-float-icon` | `0 18px 30px rgba(0, 0, 0, 0.55)`                                            | `0 14px 28px rgba(0, 0, 0, 0.16)`                                      |                                                    |
| `shadow-app-icon`   | `inset 0 0 0 0.5px rgba(255, 255, 255, 0.14), 0 1px 2px rgba(0, 0, 0, 0.40)` | `inset 0 0 0 0.5px rgba(0, 0, 0, 0.10), 0 1px 2px rgba(0, 0, 0, 0.12)` |                                                    |
| `shadow-icon-text`  | `0 1px 2px rgba(0, 0, 0, 0.30)`                                              | —                                                                      | 字母平板阴影保留了光背景的可读性.                  |
| `shadow-focus-ring` | `0 0 0 2px #131313, 0 0 0 4px #FF7356`                                       | `0 0 0 2px #FFFFFF, 0 0 0 4px #EE5533`                                 | 键盘焦点环:2px差距+2px珊瑚(3.5:1对光模式下的白色). |
| `shadow-segment`    | `0 0 #0000`                                                                  | `0 1px 2px rgba(0, 0, 0, 0.10), 0 0 0 0.5px rgba(0, 0, 0, 0.08)`       | 选中的段升降; 无( 透明的阴影) 暗模式 。            |
| `shadow-knob`       | `0 0 #0000`                                                                  | `0 1px 2px rgba(0, 0, 0, 0.22), 0 0 0 0.5px rgba(0, 0, 0, 0.08)`       | 切换牵引力;白色牵引力需要在轻轨上.                 |

<a id="motion"></a>

## 动议

| 名称              | 数值                             |
| ----------------- | -------------------------------- |
| `duration-fast`   | 120 毫秒(每秒)                   |
| `duration-base`   | 200 毫秒( 秒)                    |
| `duration-slow`   | 320 毫秒( 320毫秒)               |
| `ease-standard`   | `cubic-bezier(0.2, 0.8, 0.2, 1)` |
| `ease-emphasized` | `cubic-bezier(0.3, 0, 0, 1)`     |
| `ease-exit`       | `cubic-bezier(0.4, 0, 1, 1)`     |

<a id="z-index"></a>

## Z指数

| 名称         | 数值 |
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

| 设计令牌                             | 数值                                                 |
| ------------------------------------ | ---------------------------------------------------- |
| `layout.desktop.windowDefaultWidth`  | 1280px (英语).                                       |
| `layout.desktop.windowDefaultHeight` | 820px (820px) (英语).                                |
| `layout.desktop.windowMinWidth`      | 1100px (英语).                                       |
| `layout.desktop.windowMinHeight`     | 700px (英语).                                        |
| `layout.desktop.sidebarWidth`        | 224px (英语).                                        |
| `layout.desktop.toolbarHeight`       | 52px (英语).                                         |
| `layout.desktop.railWidth`           | 288px (中文(简体) ).                                 |
| `layout.desktop.contentPaddingX`     | 28px (英语).                                         |
| `layout.desktop.railPadding`         | 20px (英语).                                         |
| `layout.desktop.trafficLightInset`   | x 18px, y 22px (英语).                               |
| `layout.web.pageMaxWidth`            | 1240px (英语).                                       |
| `layout.web.pageGutter`              | 24px (英语).                                         |
| `layout.web.navHeight`               | 64px (韩语).                                         |
| `layout.web.breakpoints`             | sm 640px, md 768px, lg 1024px, xl 1280px, 2xl 1440px |

<a id="effects"></a>

## 效果

| 设计令牌            | 深色                                                                                                                                                              | 浅色                  | 使用( U)                                                                           |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ---------------------------------------------------------------------------------- |
| `heroGlow`          | `radial-gradient(circle, rgba(205, 205, 255, 0.95) 0%, rgba(135, 135, 245, 0.78) 14%, rgba(92, 92, 220, 0.50) 32%, rgba(64, 64, 190, 0.20) 52%, transparent 70%)` | —                     | 特色英雄紫罗兰光芒.                                                                |
| `coverGlow`         | `radial-gradient(circle, rgba(170, 170, 255, 0.55) 0%, rgba(110, 110, 235, 0.35) 16%, rgba(80, 80, 214, 0.18) 34%, rgba(60, 60, 180, 0.06) 52%, transparent 66%)` | —                     | 柔软的大型网络英雄光芒.                                                            |
| `ring.stroke`       | `rgba(255, 255, 255, 0.13)`                                                                                                                                       | `rgba(0, 0, 0, 0.10)` |                                                                                    |
| `ring.dasharray`    | `2 6`                                                                                                                                                             | —                     |                                                                                    |
| `detailGlow`        | `radial-gradient(closest-side, {accent}73, {accent}2E 55%, transparent)`                                                                                          | —                     | 右上角的细头发光; {accent} 是软件包重音Color(默认为#3C96F5);73/2E是十六进制的α值。 |
| `backdropBlur`      | `20`                                                                                                                                                              | —                     |                                                                                    |
| `accentGlowOpacity` | `1`                                                                                                                                                               | `0.5`                 | 用包口音颜色(细节头,定制英雄发光)构建的光线不透明;饱和的口音需要在光背景上软化.    |
