[English](../../../../reference/tokens.md) · [简体中文](../../../zh-CN/docs/reference/tokens.md) · [繁體中文](../../../zh-Hant/docs/reference/tokens.md) · **日本語** · [Español](../../../es-ES/docs/reference/tokens.md) · [Português (Brasil)](../../../pt-BR/docs/reference/tokens.md) · [Русский](../../../ru-RU/docs/reference/tokens.md) · [Deutsch](../../../de-DE/docs/reference/tokens.md) · [Français](../../../fr-FR/docs/reference/tokens.md) · [Italiano](../../../it-IT/docs/reference/tokens.md)

> 英語が原文です。翻訳はローカル環境で機械翻訳を用いて作成した草稿で、母語話者による確認が必要です。コードとライセンス原文は変更していません。

<a id="token-reference"></a>

# トークン参照

<!-- Generated from tokens/tokens.json by packages/tokens/scripts/generate.ts; do not edit. After changing tokens.json, run `pnpm gen`. -->

以下に示すすべての値が由来します。 `tokens/tokens.json`.ダークはデフォルトのテーマです。ライト列は値を示しています
光のテーマは、(エムダッシュは、トークンが両方のテーマで同じであることを意味します)使用しています。 CSS 変数は web のもの
パッケージは出ます。ユーティリティ列は UnoCSS / Tailwind クラスの茎(`bg-`, `text-`, `border-` ... + 茎)。
Flutter (`OnColors`) と SwiftUI (`OnColor`) camelCase パスを使う `surface.cardAlt` → `surfaceCardAlt`.

<a id="color"></a>

## 色: 色:

<a id="surfaces"></a>

### サーフェス

| デザイントークン  | CSS 変数                | ユーティリティ     | ダーク                   | ライト                      | 利用条件                                                                                                         |
| ----------------- | ----------------------- | ------------------ | ------------------------ | --------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `surface.page`    | `--on-surface-page`     | `surface-page`     | `#0B0B0B`                | `#F2F2F2`                   | 外部のWebとウィンドウの背景。                                                                                    |
| `surface.base`    | `--on-surface-base`     | `surface-base`     | `#131313`                | `#F8F8F8`                   | 主なコンテンツの背景。                                                                                           |
| `surface.sidebar` | `--on-surface-sidebar`  | `surface-sidebar`  | `#161616`                | `#F1F1F1`                   | デスクトップのサイドバー。                                                                                       |
| `surface.rail`    | `--on-surface-rail`     | `surface-rail`     | `#141414`                | `#F5F5F5`                   | 要約と二次的な操作で右レール。                                                                                   |
| `surface.card`    | `--on-surface-card`     | `surface-card`     | `#1A1A1A`                | `#FFFFFF`                   | カード。                                                                                                         |
| `surface.cardAlt` | `--on-surface-card-alt` | `surface-card-alt` | `#1F1F1F`                | `#F5F5F5`                   | カード内の入力および二次ブロック。                                                                               |
| `surface.raised`  | `--on-surface-raised`   | `surface-raised`   | `#262626`                | `#EDEDED`                   | Hover、選択、アイコンタイル;ライトモードのカードよりも暗いので、フローティングパネルはポップアップを使用します。 |
| `surface.chip`    | `--on-surface-chip`     | `surface-chip`     | `#2A2A2A`                | `#EBEBEB`                   | 中立バッジの背景。                                                                                               |
| `surface.control` | `--on-surface-control`  | `surface-control`  | `#2B2B2B`                | `#FFFFFF`                   | 入力、ツールチップ、および二次制御。                                                                             |
| `surface.inset`   | `--on-surface-inset`    | `surface-inset`    | `#111111`                | `#F0F0F0`                   | コードブロック、ログ、セグメント化されたコントロールトラック。                                                   |
| `surface.overlay` | `--on-surface-overlay`  | `surface-overlay`  | `rgba(28, 28, 28, 0.92)` | `rgba(255, 255, 255, 0.94)` | backdrop-filter: blur(20px) でオーバーレイします。                                                               |
| `surface.popover` | `--on-surface-popover`  | `surface-popover`  | `#262626`                | `#FFFFFF`                   | 同意や提案カードなどのコンテンツに浮かぶパネルや通知。                                                           |

<a id="borders-utility-prefix-line"></a>

### ボーダー(ユーティリティプレフィックス) `line`)

| デザイントークン | CSS 変数              | ユーティリティ | ダーク                      | ライト                | 利用条件                                       |
| ---------------- | --------------------- | -------------- | --------------------------- | --------------------- | ---------------------------------------------- |
| `border.subtle`  | `--on-border-subtle`  | `line-subtle`  | `rgba(255, 255, 255, 0.07)` | `rgba(0, 0, 0, 0.08)` | カードの境界および分岐器。                     |
| `border.default` | `--on-border-default` | `line-default` | `rgba(255, 255, 255, 0.12)` | `rgba(0, 0, 0, 0.13)` | 入力、ゴーストボタン、およびウィンドウの境界。 |
| `border.strong`  | `--on-border-strong`  | `line-strong`  | `rgba(255, 255, 255, 0.20)` | `rgba(0, 0, 0, 0.22)` | フーバーの境界。                               |
| `border.sidebar` | `--on-border-sidebar` | `line-sidebar` | `#1D1D1D`                   | `#E5E5E5`             | サイドバーの右側の境界線。                     |

<a id="text-utility-prefix-ink"></a>

### テキスト(ユーティリティプレフィックス) `ink`)

| デザイントークン | CSS 変数              | ユーティリティ  | ダーク    | ライト    | 利用条件                                                                                                                                     |
| ---------------- | --------------------- | --------------- | --------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `text.primary`   | `--on-text-primary`   | `ink-primary`   | `#EDEDED` | `#1A1A1A` | 見出し、強調された身体のテキスト、数字(14.9:1のダークカード、17.4:1のライトカード)。                                                         |
| `text.secondary` | `--on-text-secondary` | `ink-secondary` | `#A8A8A8` | `#575757` | ボディテキストと説明(ダークカードの7.3:1、ライトカードの7.2:1)。                                                                             |
| `text.tertiary`  | `--on-text-tertiary`  | `ink-tertiary`  | `#8F8F8F` | `#6B6B6B` | 二次情報、ラベル、時間(暗いカードの5.4:1、暗く上げられた4.7:1; 5.3:1および4.6:1のライト モード)。                                            |
| `text.disabled`  | `--on-text-disabled`  | `ink-disabled`  | `#5C5C5C` | `#A6A6A6` | 障がい者/装飾のみ; 決して重要な情報を伝えること。                                                                                            |
| `text.inverse`   | `--on-text-inverse`   | `ink-inverse`   | `#141414` | `#FFFFFF` | テキストとアイコンは、固体の塗りつぶし(スタタス、サンゴ、サーモン)、暗闇モード、白色光モードで。                                             |
| `text.onAccent`  | `--on-text-on-accent` | `ink-on-accent` | `#1B0A05` | —         | サンゴのボタン/バッジ(7.2:1)のテキスト。                                                                                                     |
| `text.accent`    | `--on-text-accent`    | `ink-accent`    | `#FF7356` | `#B83A15` | サンゴのテキスト、リンク、アイコン。brand.coralは、充填とグラフィックス(ライトモードは4.5:1のためのより暗い色合いを必要とします)のためです。 |

<a id="brand"></a>

### ブランド

| デザイントークン                | CSS 変数                                 | ユーティリティ    | ダーク                            | ライト                | 利用条件                                                                              |
| ------------------------------- | ---------------------------------------- | ----------------- | --------------------------------- | --------------------- | ------------------------------------------------------------------------------------- |
| `brand.coral`                   | `--on-brand-coral`                       | `brand-coral`     | `#FF7356`                         | `#EE5533`             | ロゴ、進行状況、バッジ、強調されたボタン、サンゴのテキストはtext.accentを使用します。 |
| `brand.salmon`                  | `--on-brand-salmon`                      | `brand-salmon`    | `#F99E70`                         | `#A74C1B`             | 強調表示テキスト:英雄の第2線、バッジ、利用可能な更新。                                |
| `brand.violet`                  | `--on-brand-violet`                      | `brand-violet`    | `#5B5BD6`                         | —                     | 主人公のヒーローの白熱色。                                                            |
| `brand.glowCore`                | `--on-brand-glow-core`                   | `brand-glow-core` | `#CDCDFF`                         | —                     | グローセンターのハイライト。                                                          |
| `brand.logoGradient`            | `--on-brand-logo-gradient`               | —                 | `#FFB347` → `#FF7356` → `#FF4E3A` | —                     | ロゴ N の勾配、右下への左上の。                                                       |
| `brand.logoCoreGradient`        | `--on-brand-logo-core-gradient`          | —                 | `#FFF6D6` → `#FFC861`             | `#FFB347` → `#FF8F3F` | ロゴの偏光が暗い背景に勾配.                                                           |
| `brand.logoCoreGradientOnLight` | `--on-brand-logo-core-gradient-on-light` | —                 | `#FFB347` → `#FF8F3F`             | —                     | ロゴの偏光が光の背景にグラデーション; 暖かい白は消えます。                            |

<a id="accent-tints"></a>

### アクセントのブリッツ

| デザイントークン      | CSS 変数                    | ユーティリティ         | ダーク                      | ライト                    | 利用条件                               |
| --------------------- | --------------------------- | ---------------------- | --------------------------- | ------------------------- | -------------------------------------- |
| `accent.coralSubtle`  | `--on-accent-coral-subtle`  | `accent-coral-subtle`  | `rgba(255, 115, 86, 0.12)`  | `rgba(238, 85, 51, 0.10)` | 進捗状況を追跡し、バッジを更新します。 |
| `accent.salmonSubtle` | `--on-accent-salmon-subtle` | `accent-salmon-subtle` | `rgba(249, 158, 112, 0.10)` | `rgba(167, 76, 27, 0.10)` | バッジと利用可能な更新の背景.          |

<a id="status"></a>

### ステータス

| デザイントークン       | CSS 変数                     | ユーティリティ          | ダーク                      | ライト                     | 利用条件                           |
| ---------------------- | ---------------------------- | ----------------------- | --------------------------- | -------------------------- | ---------------------------------- |
| `status.success`       | `--on-status-success`        | `status-success`        | `#3FCF6C`                   | `#187733`                  | インストール, 成功, 現在の.        |
| `status.successSubtle` | `--on-status-success-subtle` | `status-success-subtle` | `rgba(63, 207, 108, 0.10)`  | `rgba(24, 119, 51, 0.10)`  |                                    |
| `status.warning`       | `--on-status-warning`        | `status-warning`        | `#FAB219`                   | `#965A00`                  | 警告および管理者権限が必要です。   |
| `status.warningSubtle` | `--on-status-warning-subtle` | `status-warning-subtle` | `rgba(250, 178, 25, 0.10)`  | `rgba(150, 90, 0, 0.10)`   |                                    |
| `status.danger`        | `--on-status-danger`         | `status-danger`         | `#FF5D51`                   | `#C22B21`                  | 失敗、非推奨、削除。               |
| `status.dangerSubtle`  | `--on-status-danger-subtle`  | `status-danger-subtle`  | `rgba(255, 93, 81, 0.10)`   | `rgba(194, 43, 33, 0.10)`  |                                    |
| `status.info`          | `--on-status-info`           | `status-info`           | `#66A4FA`                   | `#1564CD`                  | 自己更新、リンク、情報。           |
| `status.infoSubtle`    | `--on-status-info-subtle`    | `status-info-subtle`    | `rgba(102, 164, 250, 0.10)` | `rgba(21, 100, 205, 0.10)` |                                    |
| `status.successBorder` | `--on-status-success-border` | `status-success-border` | `rgba(63, 207, 108, 0.20)`  | `rgba(24, 119, 51, 0.24)`  | 成功と小さなパネルの境界。         |
| `status.warningBorder` | `--on-status-warning-border` | `status-warning-border` | `rgba(250, 178, 25, 0.25)`  | `rgba(150, 90, 0, 0.24)`   | 警告で錫メッキされたパネルの境界。 |
| `status.dangerBorder`  | `--on-status-danger-border`  | `status-danger-border`  | `rgba(255, 93, 81, 0.25)`   | `rgba(194, 43, 33, 0.24)`  | 危険で染められたパネルの境界。     |
| `status.infoBorder`    | `--on-status-info-border`    | `status-info-border`    | `rgba(102, 164, 250, 0.25)` | `rgba(21, 100, 205, 0.24)` | infoSubtle で小さなパネルの境界。  |

<a id="buttons"></a>

### ボタン

| デザイントークン          | CSS 変数                        | ユーティリティ             | ダーク    | ライト    | 利用条件 |
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

### チャート

| デザイントークン   | CSS 変数                | ユーティリティ     | ダーク    | ライト    | 利用条件                                                                                  |
| ------------------ | ----------------------- | ------------------ | --------- | --------- | ----------------------------------------------------------------------------------------- |
| `chart.series1`    | `--on-chart-series1`    | `chart-series1`    | `#7B72EE` | `#6A61E8` | 分類色1、バイオレット。                                                                   |
| `chart.series2`    | `--on-chart-series2`    | `chart-series2`    | `#E0663F` | `#D9572E` | 分類色2、サンゴ。                                                                         |
| `chart.series3`    | `--on-chart-series3`    | `chart-series3`    | `#1E9E72` | `#168A62` | 分類色3、シアン;#1A1A1A1Aに色素のアクセシビリティ/コントラストのために点検される3すべて。 |
| `chart.emphasis`   | `--on-chart-emphasis`   | `chart-emphasis`   | `#F99E70` | `#D0602A` | 単一シリーズの重点、現在の期間。                                                          |
| `chart.deemphasis` | `--on-chart-deemphasis` | `chart-deemphasis` | `#4A4A4A` | `#CFCFCF` | 単一シリーズ非emphasis、歴史の期間。                                                      |
| `chart.grid`       | `--on-chart-grid`       | `chart-grid`       | `#2C2C2A` | `#EBEBEB` |                                                                                           |
| `chart.axis`       | `--on-chart-axis`       | `chart-axis`       | `#383838` | `#D6D6D6` |                                                                                           |

<a id="component-colors"></a>

### コンポーネントの色

| デザイントークン           | CSS 変数                          | ユーティリティ               | ダーク                      | ライト                      | 利用条件                                                                                                                                     |
| -------------------------- | --------------------------------- | ---------------------------- | --------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `component.searchBg`       | `--on-component-search-bg`        | `component-search-bg`        | `#1C1C1C`                   | `#FFFFFF`                   | 検索フィールドとフォーム入力の背景.                                                                                                          |
| `component.cardHover`      | `--on-component-card-hover`       | `component-card-hover`       | `#1D1D1D`                   | `#FAFAFA`                   | インタラクティブカードホバーの背景。                                                                                                         |
| `component.toggleTrack`    | `--on-component-toggle-track`     | `component-toggle-track`     | `#333333`                   | `#D9D9D9`                   | オフトグルトラック。                                                                                                                         |
| `component.toggleKnob`     | `--on-component-toggle-knob`      | `component-toggle-knob`      | `#BDBDBD`                   | `#FFFFFF`                   | オフトグルの親指。                                                                                                                           |
| `component.toggleKnobOn`   | `--on-component-toggle-knob-on`   | `component-toggle-knob-on`   | `#FFFFFF`                   | —                           | トグルの親指。                                                                                                                               |
| `component.tabIndicator`   | `--on-component-tab-indicator`    | `component-tab-indicator`    | `#FFFFFF`                   | `#1A1A1A`                   | 選択したタブインジケータ。                                                                                                                   |
| `component.navActive`      | `--on-component-nav-active`       | `component-nav-active`       | `#202020`                   | `#E3E3E3`                   | サイドバーのナビゲーション背景を選択します。                                                                                                 |
| `component.heroBg`         | `--on-component-hero-bg`          | `component-hero-bg`          | `#0E0E10`                   | `#F4F3FD`                   | 注目のヒーローカードの背景。                                                                                                                 |
| `component.captionBg`      | `--on-component-caption-bg`       | `component-caption-bg`       | `rgba(0, 0, 0, 0.55)`       | —                           | 左のキャプションの背景をスクリーンショットします。 両方のテーマで暗いので、キャプションは暗いテーマ(data-theme='dark')でレンダリングします。 |
| `component.topNavScrolled` | `--on-component-top-nav-scrolled` | `component-top-nav-scrolled` | `rgba(11, 11, 11, 0.85)`    | `rgba(242, 242, 242, 0.85)` | スクロールされたウェブナビゲーション背景: 85% の Surface.page でバックドロップフィルタ: blur(20px)。                                         |
| `component.scrim`          | `--on-component-scrim`            | `component-scrim`            | `rgba(0, 0, 0, 0.50)`       | `rgba(0, 0, 0, 0.30)`       | ダイアログ/シートバックドロップ。                                                                                                            |
| `component.lightboxScrim`  | `--on-component-lightbox-scrim`   | `component-lightbox-scrim`   | `rgba(0, 0, 0, 0.88)`       | —                           | スクリーンショットライトボックスのバックドロップ。 テーマの暗いので、ライトボックスはダークテーマ(data-theme='dark')でレンダリングします。   |
| `component.modalBg`        | `--on-component-modal-bg`         | `component-modal-bg`         | `#171717`                   | `#FFFFFF`                   | ダイアログ/シートパネルの背景。                                                                                                              |
| `component.toastBg`        | `--on-component-toast-bg`         | `component-toast-bg`         | `rgba(44, 44, 44, 0.92)`    | `rgba(255, 255, 255, 0.94)` | 背景をバックドロップフィルタで貼り付ける: blur(20px)。                                                                                       |
| `component.itemActive`     | `--on-component-item-active`      | `component-item-active`      | `rgba(255, 255, 255, 0.07)` | `rgba(0, 0, 0, 0.06)`       | 現在のメニュー/コマンドパレット項目の背景.                                                                                                   |
| `component.runningBorder`  | `--on-component-running-border`   | `component-running-border`   | `rgba(255, 115, 86, 0.25)`  | `rgba(238, 85, 51, 0.40)`   | アクティブタスクカードの境界、25%のサンゴ。                                                                                                  |
| `component.logHeading`     | `--on-component-log-heading`      | `component-log-heading`      | `#E8E8E8`                   | `#1A1A1A`                   | ==> で始まるステップ行をログします。                                                                                                         |
| `component.logSuccess`     | `--on-component-log-success`      | `component-log-success`      | `#7FD88F`                   | `#187733`                   | 成功したログライン。                                                                                                                         |
| `component.monoText`       | `--on-component-mono-text`        | `component-mono-text`        | `#D0D0D0`                   | `#333333`                   | バージョンなどのモノスペーステーブルテキスト。                                                                                               |
| `component.timelineLine`   | `--on-component-timeline-line`    | `component-timeline-line`    | `#333333`                   | `#D6D6D6`                   | タイムラインラインがスタートし、表面を通した。透明化。                                                                                       |
| `component.timelineDot`    | `--on-component-timeline-dot`     | `component-timeline-dot`     | `#3A3A3A`                   | `#C4C4C4`                   | 通常のタイムラインエントリードット。                                                                                                         |
| `component.sourceMeta`     | `--on-component-source-meta`      | `component-source-meta`      | `#555555`                   | `#B0B0B0`                   | 補助的な源の点、のような GitHub リリースソースのメタデータ。                                                                                 |
| `component.collectionFrom` | `--on-component-collection-from`  | `component-collection-from`  | `#1D1A26`                   | `#F1EEFB`                   | 回収カードグラデーションスタート、160°                                                                                                       |
| `component.collectionTo`   | `--on-component-collection-to`    | `component-collection-to`    | `#161616`                   | `#FFFFFF`                   | 回収カードグラデーションエンド70%                                                                                                            |
| `component.collectionRing` | `--on-component-collection-ring`  | `component-collection-ring`  | `#1B1922`                   | `#F8F7FD`                   | 積み重なったシコンの境界をコレクション。                                                                                                     |
| `component.detailHeaderBg` | `--on-component-detail-header-bg` | `component-detail-header-bg` | `#171717`                   | `#FFFFFF`                   | 詳細ヘッダーカードの背景の下。                                                                                                               |
| `component.cliIconFrom`    | `--on-component-cli-icon-from`    | `component-cli-icon-from`    | `#2A2A2A`                   | —                           | コマンドラインタイルグラデーションスタート。                                                                                                 |
| `component.cliIconTo`      | `--on-component-cli-icon-to`      | `component-cli-icon-to`      | `#1B1B1B`                   | —                           | コマンドラインタイルグラデーションエンド。                                                                                                   |
| `component.cliIconText`    | `--on-component-cli-icon-text`    | `component-cli-icon-text`    | `#E2E2E2`                   | —                           | コマンドラインタイルテキスト。                                                                                                               |
| `component.letterIconText` | `--on-component-letter-icon-text` | `component-letter-icon-text` | `#FFFFFF`                   | —                           | 名前がいつも並んでいるので装飾的な手紙タイルのテキスト。                                                                                     |
| `component.segmentActive`  | `--on-component-segment-active`   | `component-segment-active`   | `#262626`                   | `#FFFFFF`                   | セグメント化された制御のセグメントを選択します。                                                                                             |
| `component.menuBarBg`      | `--on-component-menu-bar-bg`      | `component-menu-bar-bg`      | `rgba(38, 38, 40, 0.96)`    | `rgba(246, 246, 246, 0.96)` | アプリ内プレビュー macOS メニュー バーのストリップ。                                                                                         |
| `component.menuBarText`    | `--on-component-menu-bar-text`    | `component-menu-bar-text`    | `#E6E6E6`                   | `#1F1F1F`                   | メニューバーのプレビュー項目、AppKitテンプレートイメージのように描画します。                                                                 |

<a id="macos-window-controls"></a>

### macOS ウィンドウコントロール

| デザイントークン | CSS 変数              | ユーティリティ   | ダーク    | ライト | 利用条件 |
| ---------------- | --------------------- | ---------------- | --------- | ------ | -------- |
| `macos.close`    | `--on-macos-close`    | `macos-close`    | `#FF5F57` | —      |          |
| `macos.minimize` | `--on-macos-minimize` | `macos-minimize` | `#FEBC2E` | —      |          |
| `macos.zoom`     | `--on-macos-zoom`     | `macos-zoom`     | `#28C840` | —      |          |

<a id="typography"></a>

## タイポグラフィ

レッスン `text-{name}` サイズ、ラインの高さ、重量を置き、一緒に追跡して下さい。

| お名前 (必須) | レッスン        | サイズ/ラインの高さ      | 体重計 | トラッキング           | 利用条件                                         |
| ------------- | --------------- | ------------------------ | ------ | ---------------------- | ------------------------------------------------ |
| `hero`        | `text-hero`     | 76 / 78 ピクセル         | 600    | -0.035emの             | ホームページ ヒーロー 見出し                     |
| `section`     | `text-section`  | 46 / 50 ピクセル         | 600    | -0.03emの              | ウェブセクション見出し                           |
| `display`     | `text-display`  | 40 / 44 ピクセル         | 600    | -0.03emの              | 注目のヒーローヘディング                         |
| `title1`      | `text-title1`   | 28 / 34 px / 34 ピクセル | 600    | -0.02emの              | ページの見出し                                   |
| `title2`      | `text-title2`   | 22 / 28 px               | 600    | -0.02emの              | Dialog のタイトルおよび密集した細部のヘッダー    |
| `headline`    | `text-headline` | 16 / 24 ピクセル         | 600    | -0.01emの              | セクション見出し                                 |
| `statValue`   | `text-stat`     | 20 / 26 pxの             | 600    | -0.015emの             | 比例した数字で統計値                             |
| `body`        | `text-body`     | 14 / 22 px               | 400    | 0                      | ボディテキスト                                   |
| `bodySm`      | `text-body-sm`  | 13 / 20 ピクセル         | 400    | 0                      | リストとテーブルの本文                           |
| `caption`     | `text-caption`  | 12 / 18 ピクセル         | 400    | 0                      | 二次情報                                         |
| `label`       | `text-label`    | 11/16 ピクセル           | 600    | 0.08emのアッパーケース | サイドバーセクションのタイトルなどグループラベル |
| `mono`        | `text-mono`     | 12 / 18 ピクセル         | 400    | 0                      | コマンド、バージョン、ログ                       |

| フォントファミリー | スタック                                                                                                                                                         |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sans`             | Inter 変数, Inter, PingFang SC, ヒラギノ・サンズ GB, マイクロソフト・ヤハイ, ノト・サンズSC, -アプリル・システム, BlinkMacSystemFont, Helvetica Neue, sans-serif |
| `sansZh`           | Inter 変数, Inter, PingFang SC, ヒラギノ・サンズ GB, マイクロソフト・ヤハイ, ノト・サンズSC, -アプリル・システム, BlinkMacSystemFont, Helvetica Neue, sans-serif |
| `sansJa`           | Inter 変数, Inter, ヒラギノサンズ, ヒラギノカクゴシックプロン, ユーゴシック, ノトサンスJP, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif         |
| `mono`             | SF Mono、JetBrains Mono、ui-monospace、Menlo、Consolas、解放モノラル、モノスペース                                                                               |

<a id="spacing"></a>

## スパーシング

| お名前 (必須) | CSS 変数         | バリュー    | 利用条件 |
| ------------- | ---------------- | ----------- | -------- |
| `0`           | `--on-space-0`   | 0ピクセル   |          |
| `1`           | `--on-space-1`   | 4ピクセル   |          |
| `2`           | `--on-space-2`   | 8 ピクセル  |          |
| `3`           | `--on-space-3`   | 12ピクセル  |          |
| `4`           | `--on-space-4`   | 16 ピクセル |          |
| `5`           | `--on-space-5`   | 20pxの      |          |
| `6`           | `--on-space-6`   | 24pxの      |          |
| `7`           | `--on-space-7`   | 28pxの      |          |
| `8`           | `--on-space-8`   | 32pxの      |          |
| `10`          | `--on-space-10`  | 40pxの      |          |
| `12`          | `--on-space-12`  | 48ピクセル  |          |
| `16`          | `--on-space-16`  | 64pxの      |          |
| `20`          | `--on-space-20`  | 80pxの      |          |
| `0-5`         | `--on-space-0-5` | 2ピクセル   |          |
| `1-5`         | `--on-space-1-5` | 6 ピクセル  |          |
| `2-5`         | `--on-space-2-5` | 10ピクセル  |          |
| `3-5`         | `--on-space-3-5` | 14pxの      |          |

<a id="radius"></a>

## ラディウス

| お名前 (必須)      | CSS 変数               | バリュー     | 利用条件                                                           |
| ------------------ | ---------------------- | ------------ | ------------------------------------------------------------------ |
| `rounded-tiny`     | `--on-radius-tiny`     | 4ピクセル    |                                                                    |
| `rounded-small`    | `--on-radius-small`    | 7ピクセル    |                                                                    |
| `rounded-default`  | `--on-radius-default`  | 10ピクセル   |                                                                    |
| `rounded-panel`    | `--on-radius-panel`    | 12ピクセル   | スクリーンショットカード、メニュー、オーバーレイ。                 |
| `rounded-big`      | `--on-radius-big`      | 14pxの       |                                                                    |
| `rounded-huge`     | `--on-radius-huge`     | 20pxの       |                                                                    |
| `rounded-xl`       | `--on-radius-xl`       | 28pxの       |                                                                    |
| `rounded-full`     | `--on-radius-full`     | 9999ピクセル |                                                                    |
| `rounded-app-icon` | `--on-radius-app-icon` | 23%          | アプリのアイコン半径: 側面の長さの23%、近似 macOS スーパーエリス。 |

<a id="shadows"></a>

## シャドー

| お名前 (必須)       | ダーク                                                                       | ライト                                                                 | 利用条件                                                                           |
| ------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `shadow-window`     | `0 50px 140px rgba(0, 0, 0, 0.65), 0 0 0 0.5px #000000`                      | `0 40px 100px rgba(0, 0, 0, 0.16), 0 0 0 0.5px rgba(0, 0, 0, 0.16)`    |                                                                                    |
| `shadow-popover`    | `0 24px 60px rgba(0, 0, 0, 0.60)`                                            | `0 12px 40px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04)`       |                                                                                    |
| `shadow-modal`      | `0 30px 80px rgba(0, 0, 0, 0.60)`                                            | `0 24px 64px rgba(0, 0, 0, 0.16)`                                      |                                                                                    |
| `shadow-toast`      | `0 18px 40px rgba(0, 0, 0, 0.50)`                                            | `0 10px 30px rgba(0, 0, 0, 0.12)`                                      |                                                                                    |
| `shadow-float-icon` | `0 18px 30px rgba(0, 0, 0, 0.55)`                                            | `0 14px 28px rgba(0, 0, 0, 0.16)`                                      |                                                                                    |
| `shadow-app-icon`   | `inset 0 0 0 0.5px rgba(255, 255, 255, 0.14), 0 1px 2px rgba(0, 0, 0, 0.40)` | `inset 0 0 0 0.5px rgba(0, 0, 0, 0.10), 0 1px 2px rgba(0, 0, 0, 0.12)` |                                                                                    |
| `shadow-icon-text`  | `0 1px 2px rgba(0, 0, 0, 0.30)`                                              | —                                                                      | 文字のタイルの影は、光の背景の読みやすさを維持します。                             |
| `shadow-focus-ring` | `0 0 0 2px #131313, 0 0 0 4px #FF7356`                                       | `0 0 0 2px #FFFFFF, 0 0 0 4px #EE5533`                                 | キーボードの焦点リング: 2 px のギャップと 2 px のサンゴ (3.5:1 から白の光モード)。 |
| `shadow-segment`    | `0 0 #0000`                                                                  | `0 1px 2px rgba(0, 0, 0, 0.10), 0 0 0 0.5px rgba(0, 0, 0, 0.08)`       | 選択された区分の上昇;暗闇モードのどれも(透明な影)。                                |
| `shadow-knob`       | `0 0 #0000`                                                                  | `0 1px 2px rgba(0, 0, 0, 0.22), 0 0 0 0.5px rgba(0, 0, 0, 0.08)`       | ノブリフトをトグル。白いノブはライトトラックでそれを必要とします。                 |

<a id="motion"></a>

## アクション

| お名前 (必須)     | バリュー                         |
| ----------------- | -------------------------------- |
| `duration-fast`   | 120ミリ秒                        |
| `duration-base`   | 200のms                          |
| `duration-slow`   | 320ミリ秒                        |
| `ease-standard`   | `cubic-bezier(0.2, 0.8, 0.2, 1)` |
| `ease-emphasized` | `cubic-bezier(0.3, 0, 0, 1)`     |
| `ease-exit`       | `cubic-bezier(0.4, 0, 1, 1)`     |

<a id="z-index"></a>

## Z-インデックス

| お名前 (必須) | バリュー |
| ------------- | -------- |
| `z-base`      | 0        |
| `z-sticky`    | 10       |
| `z-dropdown`  | 100      |
| `z-overlay`   | 200      |
| `z-modal`     | 300      |
| `z-popover`   | 400      |
| `z-toast`     | 500      |
| `z-tooltip`   | 600      |

<a id="layout"></a>

## レイアウト

| デザイントークン                     | バリュー                                             |
| ------------------------------------ | ---------------------------------------------------- |
| `layout.desktop.windowDefaultWidth`  | 1280pxの                                             |
| `layout.desktop.windowDefaultHeight` | 820pxの                                              |
| `layout.desktop.windowMinWidth`      | 1100pxの                                             |
| `layout.desktop.windowMinHeight`     | 700pxの                                              |
| `layout.desktop.sidebarWidth`        | 224pxの                                              |
| `layout.desktop.toolbarHeight`       | 5 ピクセル                                           |
| `layout.desktop.railWidth`           | 288pxの                                              |
| `layout.desktop.contentPaddingX`     | 28pxの                                               |
| `layout.desktop.railPadding`         | 20pxの                                               |
| `layout.desktop.trafficLightInset`   | x 18px、y 22px                                       |
| `layout.web.pageMaxWidth`            | 1240pxの                                             |
| `layout.web.pageGutter`              | 24pxの                                               |
| `layout.web.navHeight`               | 64pxの                                               |
| `layout.web.breakpoints`             | sm 640px, md 768px, lg 1024px, xl 1280px, 2xl 1440px |

<a id="effects"></a>

## エフェクト

| デザイントークン    | ダーク                                                                                                                                                            | ライト                | 利用条件                                                                                                                                                  |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `heroGlow`          | `radial-gradient(circle, rgba(205, 205, 255, 0.95) 0%, rgba(135, 135, 245, 0.78) 14%, rgba(92, 92, 220, 0.50) 32%, rgba(64, 64, 190, 0.20) 52%, transparent 70%)` | —                     | 注目のヒーローバイオレット輝き。                                                                                                                          |
| `coverGlow`         | `radial-gradient(circle, rgba(170, 170, 255, 0.55) 0%, rgba(110, 110, 235, 0.35) 16%, rgba(80, 80, 214, 0.18) 34%, rgba(60, 60, 180, 0.06) 52%, transparent 66%)` | —                     | よりソフトな大型のウェブヒーローが輝きます。                                                                                                              |
| `ring.stroke`       | `rgba(255, 255, 255, 0.13)`                                                                                                                                       | `rgba(0, 0, 0, 0.10)` |                                                                                                                                                           |
| `ring.dasharray`    | `2 6`                                                                                                                                                             | —                     |                                                                                                                                                           |
| `detailGlow`        | `radial-gradient(closest-side, {accent}73, {accent}2E 55%, transparent)`                                                                                          | —                     | 右上のディテールヘッダーの輝き; {accent} パッケージのアクセントカラー(デフォルト#3C96F5)です。 73/2Eは16進数のアルファ値です。                            |
| `backdropBlur`      | `20`                                                                                                                                                              | —                     |                                                                                                                                                           |
| `accentGlowOpacity` | `1`                                                                                                                                                               | `0.5`                 | パッケージアクセントカラー(デテールヘッダ、カスタムヒーローグロー)から構築された白熱の不透明度。 飽和アクセントは、軽い背景に柔らかくなる必要があります。 |
