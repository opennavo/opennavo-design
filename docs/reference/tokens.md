# Token reference

<!-- Generated from tokens/tokens.json by packages/tokens/scripts/generate.ts; do not edit. After changing tokens.json, run `pnpm gen`. -->

Every value below comes from `tokens/tokens.json`. Dark is the default theme; the Light column shows the value
the light theme uses (an em dash means the token is the same in both themes). CSS variables are what the web
packages emit; the utility column is the UnoCSS / Tailwind class stem (`bg-`, `text-`, `border-` … + stem).
Flutter (`OnColors`) and SwiftUI (`OnColor`) use the camelCase path, e.g. `surface.cardAlt` → `surfaceCardAlt`.

## Color

### Surfaces

| Token | CSS variable | Utility | Dark | Light | Use |
| --- | --- | --- | --- | --- | --- |
| `surface.page` | `--on-surface-page` | `surface-page` | `#0B0B0B` | `#F2F2F2` | Outer web and window background. |
| `surface.base` | `--on-surface-base` | `surface-base` | `#131313` | `#F8F8F8` | Main content background. |
| `surface.sidebar` | `--on-surface-sidebar` | `surface-sidebar` | `#161616` | `#F1F1F1` | Desktop sidebar. |
| `surface.rail` | `--on-surface-rail` | `surface-rail` | `#141414` | `#F5F5F5` | Right rail with summaries and secondary actions. |
| `surface.card` | `--on-surface-card` | `surface-card` | `#1A1A1A` | `#FFFFFF` | Cards. |
| `surface.cardAlt` | `--on-surface-card-alt` | `surface-card-alt` | `#1F1F1F` | `#F5F5F5` | Inputs and secondary blocks within cards. |
| `surface.raised` | `--on-surface-raised` | `surface-raised` | `#262626` | `#EDEDED` | Hover, selection, icon tiles; darker than cards in light mode, so floating panels use popover. |
| `surface.chip` | `--on-surface-chip` | `surface-chip` | `#2A2A2A` | `#EBEBEB` | Neutral badge background. |
| `surface.control` | `--on-surface-control` | `surface-control` | `#2B2B2B` | `#FFFFFF` | Inputs, tooltips, and secondary controls. |
| `surface.inset` | `--on-surface-inset` | `surface-inset` | `#111111` | `#F0F0F0` | Code blocks, logs, segmented-control tracks. |
| `surface.overlay` | `--on-surface-overlay` | `surface-overlay` | `rgba(28, 28, 28, 0.92)` | `rgba(255, 255, 255, 0.94)` | Overlays with backdrop-filter: blur(20px). |
| `surface.popover` | `--on-surface-popover` | `surface-popover` | `#262626` | `#FFFFFF` | Floating panels and notices over content, such as consent and suggestion cards. |

### Borders (utility prefix `line`)

| Token | CSS variable | Utility | Dark | Light | Use |
| --- | --- | --- | --- | --- | --- |
| `border.subtle` | `--on-border-subtle` | `line-subtle` | `rgba(255, 255, 255, 0.07)` | `rgba(0, 0, 0, 0.08)` | Card borders and dividers. |
| `border.default` | `--on-border-default` | `line-default` | `rgba(255, 255, 255, 0.12)` | `rgba(0, 0, 0, 0.13)` | Input, ghost-button, and window borders. |
| `border.strong` | `--on-border-strong` | `line-strong` | `rgba(255, 255, 255, 0.20)` | `rgba(0, 0, 0, 0.22)` | Hover borders. |
| `border.sidebar` | `--on-border-sidebar` | `line-sidebar` | `#1D1D1D` | `#E5E5E5` | Sidebar right border. |

### Text (utility prefix `ink`)

| Token | CSS variable | Utility | Dark | Light | Use |
| --- | --- | --- | --- | --- | --- |
| `text.primary` | `--on-text-primary` | `ink-primary` | `#EDEDED` | `#1A1A1A` | Headings, emphasized body text, numbers (14.9:1 on dark cards, 17.4:1 on light cards). |
| `text.secondary` | `--on-text-secondary` | `ink-secondary` | `#A8A8A8` | `#575757` | Body text and descriptions (7.3:1 on dark cards, 7.2:1 on light cards). |
| `text.tertiary` | `--on-text-tertiary` | `ink-tertiary` | `#8F8F8F` | `#6B6B6B` | Secondary information, labels, times (5.4:1 on dark cards, 4.7:1 on dark raised; 5.3:1 and 4.6:1 in light mode). |
| `text.disabled` | `--on-text-disabled` | `ink-disabled` | `#5C5C5C` | `#A6A6A6` | Disabled/decorative only; never convey essential information. |
| `text.inverse` | `--on-text-inverse` | `ink-inverse` | `#141414` | `#FFFFFF` | Text and icons on solid fills (status, coral, salmon); dark in dark mode, white in light mode. |
| `text.onAccent` | `--on-text-on-accent` | `ink-on-accent` | `#1B0A05` | — | Text on coral buttons/badges (7.2:1). |
| `text.accent` | `--on-text-accent` | `ink-accent` | `#FF7356` | `#B83A15` | Coral text, links, and icons; brand.coral is for fills and graphics (light mode needs a darker shade for 4.5:1). |

### Brand

| Token | CSS variable | Utility | Dark | Light | Use |
| --- | --- | --- | --- | --- | --- |
| `brand.coral` | `--on-brand-coral` | `brand-coral` | `#FF7356` | `#EE5533` | Primary brand color for fills and graphics: logo, progress, badges, emphasized buttons. For coral text use text.accent. |
| `brand.salmon` | `--on-brand-salmon` | `brand-salmon` | `#F99E70` | `#A74C1B` | Emphasized text: hero second line, badges, available updates. |
| `brand.violet` | `--on-brand-violet` | `brand-violet` | `#5B5BD6` | — | Primary hero glow color. |
| `brand.glowCore` | `--on-brand-glow-core` | `brand-glow-core` | `#CDCDFF` | — | Glow center highlight. |
| `brand.logoGradient` | `--on-brand-logo-gradient` | — | `#FFB347` → `#FF7356` → `#FF4E3A` | — | Logo N gradient, top-left to bottom-right. |
| `brand.logoCoreGradient` | `--on-brand-logo-core-gradient` | — | `#FFF6D6` → `#FFC861` | `#FFB347` → `#FF8F3F` | Logo Polaris gradient on dark backgrounds. |
| `brand.logoCoreGradientOnLight` | `--on-brand-logo-core-gradient-on-light` | — | `#FFB347` → `#FF8F3F` | — | Logo Polaris gradient on light backgrounds; warm white would disappear. |

### Accent tints

| Token | CSS variable | Utility | Dark | Light | Use |
| --- | --- | --- | --- | --- | --- |
| `accent.coralSubtle` | `--on-accent-coral-subtle` | `accent-coral-subtle` | `rgba(255, 115, 86, 0.12)` | `rgba(238, 85, 51, 0.10)` | Progress tracks and Updating badges. |
| `accent.salmonSubtle` | `--on-accent-salmon-subtle` | `accent-salmon-subtle` | `rgba(249, 158, 112, 0.10)` | `rgba(167, 76, 27, 0.10)` | Badge and available-update backgrounds. |

### Status

| Token | CSS variable | Utility | Dark | Light | Use |
| --- | --- | --- | --- | --- | --- |
| `status.success` | `--on-status-success` | `status-success` | `#3FCF6C` | `#187733` | Installed, success, current. |
| `status.successSubtle` | `--on-status-success-subtle` | `status-success-subtle` | `rgba(63, 207, 108, 0.10)` | `rgba(24, 119, 51, 0.10)` |  |
| `status.warning` | `--on-status-warning` | `status-warning` | `#FAB219` | `#965A00` | Warnings and administrator permission required. |
| `status.warningSubtle` | `--on-status-warning-subtle` | `status-warning-subtle` | `rgba(250, 178, 25, 0.10)` | `rgba(150, 90, 0, 0.10)` |  |
| `status.danger` | `--on-status-danger` | `status-danger` | `#FF5D51` | `#C22B21` | Failure, deprecated, delete. |
| `status.dangerSubtle` | `--on-status-danger-subtle` | `status-danger-subtle` | `rgba(255, 93, 81, 0.10)` | `rgba(194, 43, 33, 0.10)` |  |
| `status.info` | `--on-status-info` | `status-info` | `#66A4FA` | `#1564CD` | Self-updating, links, information. |
| `status.infoSubtle` | `--on-status-info-subtle` | `status-info-subtle` | `rgba(102, 164, 250, 0.10)` | `rgba(21, 100, 205, 0.10)` |  |
| `status.successBorder` | `--on-status-success-border` | `status-success-border` | `rgba(63, 207, 108, 0.20)` | `rgba(24, 119, 51, 0.24)` | Border of panels tinted with successSubtle. |
| `status.warningBorder` | `--on-status-warning-border` | `status-warning-border` | `rgba(250, 178, 25, 0.25)` | `rgba(150, 90, 0, 0.24)` | Border of panels tinted with warningSubtle. |
| `status.dangerBorder` | `--on-status-danger-border` | `status-danger-border` | `rgba(255, 93, 81, 0.25)` | `rgba(194, 43, 33, 0.24)` | Border of panels tinted with dangerSubtle. |
| `status.infoBorder` | `--on-status-info-border` | `status-info-border` | `rgba(102, 164, 250, 0.25)` | `rgba(21, 100, 205, 0.24)` | Border of panels tinted with infoSubtle. |

### Buttons

| Token | CSS variable | Utility | Dark | Light | Use |
| --- | --- | --- | --- | --- | --- |
| `button.primaryBg` | `--on-button-primary-bg` | `button-primary-bg` | `#EBEBEB` | `#1F1F1F` |  |
| `button.primaryHover` | `--on-button-primary-hover` | `button-primary-hover` | `#FFFFFF` | `#333333` |  |
| `button.primaryPressed` | `--on-button-primary-pressed` | `button-primary-pressed` | `#D6D6D6` | `#0A0A0A` |  |
| `button.primaryText` | `--on-button-primary-text` | `button-primary-text` | `#141414` | `#FFFFFF` |  |
| `button.secondaryBg` | `--on-button-secondary-bg` | `button-secondary-bg` | `#2B2B2B` | `#EBEBEB` |  |
| `button.secondaryHover` | `--on-button-secondary-hover` | `button-secondary-hover` | `#333333` | `#E0E0E0` |  |
| `button.secondaryPressed` | `--on-button-secondary-pressed` | `button-secondary-pressed` | `#242424` | `#D6D6D6` |  |
| `button.secondaryText` | `--on-button-secondary-text` | `button-secondary-text` | `#EDEDED` | `#1A1A1A` |  |
| `button.accentBg` | `--on-button-accent-bg` | `button-accent-bg` | `#FF7356` | `#EE5533` |  |
| `button.accentHover` | `--on-button-accent-hover` | `button-accent-hover` | `#FF8468` | `#F46546` |  |
| `button.accentPressed` | `--on-button-accent-pressed` | `button-accent-pressed` | `#F0603F` | `#E24A28` |  |
| `button.accentText` | `--on-button-accent-text` | `button-accent-text` | `#1B0A05` | — |  |
| `button.disabledBg` | `--on-button-disabled-bg` | `button-disabled-bg` | `#171717` | `#F0F0F0` |  |
| `button.disabledText` | `--on-button-disabled-text` | `button-disabled-text` | `#5C5C5C` | `#A6A6A6` |  |

### Charts

| Token | CSS variable | Utility | Dark | Light | Use |
| --- | --- | --- | --- | --- | --- |
| `chart.series1` | `--on-chart-series1` | `chart-series1` | `#7B72EE` | `#6A61E8` | Category color 1, violet. |
| `chart.series2` | `--on-chart-series2` | `chart-series2` | `#E0663F` | `#D9572E` | Category color 2, coral. |
| `chart.series3` | `--on-chart-series3` | `chart-series3` | `#1E9E72` | `#168A62` | Category color 3, cyan; all three checked for color-blind accessibility/contrast on #1A1A1A. |
| `chart.emphasis` | `--on-chart-emphasis` | `chart-emphasis` | `#F99E70` | `#D0602A` | Single-series emphasis, current period. |
| `chart.deemphasis` | `--on-chart-deemphasis` | `chart-deemphasis` | `#4A4A4A` | `#CFCFCF` | Single-series de-emphasis, historical period. |
| `chart.grid` | `--on-chart-grid` | `chart-grid` | `#2C2C2A` | `#EBEBEB` |  |
| `chart.axis` | `--on-chart-axis` | `chart-axis` | `#383838` | `#D6D6D6` |  |

### Component colors

| Token | CSS variable | Utility | Dark | Light | Use |
| --- | --- | --- | --- | --- | --- |
| `component.searchBg` | `--on-component-search-bg` | `component-search-bg` | `#1C1C1C` | `#FFFFFF` | Search-field and form-input background. |
| `component.cardHover` | `--on-component-card-hover` | `component-card-hover` | `#1D1D1D` | `#FAFAFA` | Interactive card hover background. |
| `component.toggleTrack` | `--on-component-toggle-track` | `component-toggle-track` | `#333333` | `#D9D9D9` | Off toggle track. |
| `component.toggleKnob` | `--on-component-toggle-knob` | `component-toggle-knob` | `#BDBDBD` | `#FFFFFF` | Off toggle thumb. |
| `component.toggleKnobOn` | `--on-component-toggle-knob-on` | `component-toggle-knob-on` | `#FFFFFF` | — | On toggle thumb. |
| `component.tabIndicator` | `--on-component-tab-indicator` | `component-tab-indicator` | `#FFFFFF` | `#1A1A1A` | Selected-tab indicator. |
| `component.navActive` | `--on-component-nav-active` | `component-nav-active` | `#202020` | `#E3E3E3` | Selected sidebar navigation background. |
| `component.heroBg` | `--on-component-hero-bg` | `component-hero-bg` | `#0E0E10` | `#F4F3FD` | Featured hero card background. |
| `component.captionBg` | `--on-component-caption-bg` | `component-caption-bg` | `rgba(0, 0, 0, 0.55)` | — | Screenshot lower-left caption background; dark in both themes, so the caption renders in the dark theme (data-theme='dark'). |
| `component.topNavScrolled` | `--on-component-top-nav-scrolled` | `component-top-nav-scrolled` | `rgba(11, 11, 11, 0.85)` | `rgba(242, 242, 242, 0.85)` | Scrolled web navigation background: surface.page at 85% with backdrop-filter: blur(20px). |
| `component.scrim` | `--on-component-scrim` | `component-scrim` | `rgba(0, 0, 0, 0.50)` | `rgba(0, 0, 0, 0.30)` | Dialog/sheet backdrop. |
| `component.lightboxScrim` | `--on-component-lightbox-scrim` | `component-lightbox-scrim` | `rgba(0, 0, 0, 0.88)` | — | Screenshot lightbox backdrop; dark in both themes, so the lightbox renders in the dark theme (data-theme='dark'). |
| `component.modalBg` | `--on-component-modal-bg` | `component-modal-bg` | `#171717` | `#FFFFFF` | Dialog/sheet panel background. |
| `component.toastBg` | `--on-component-toast-bg` | `component-toast-bg` | `rgba(44, 44, 44, 0.92)` | `rgba(255, 255, 255, 0.94)` | Toast background with backdrop-filter: blur(20px). |
| `component.itemActive` | `--on-component-item-active` | `component-item-active` | `rgba(255, 255, 255, 0.07)` | `rgba(0, 0, 0, 0.06)` | Current menu/command-palette item background. |
| `component.runningBorder` | `--on-component-running-border` | `component-running-border` | `rgba(255, 115, 86, 0.25)` | `rgba(238, 85, 51, 0.40)` | Active-task card border, coral at 25%. |
| `component.logHeading` | `--on-component-log-heading` | `component-log-heading` | `#E8E8E8` | `#1A1A1A` | Log step lines beginning with ==>. |
| `component.logSuccess` | `--on-component-log-success` | `component-log-success` | `#7FD88F` | `#187733` | Successful log lines. |
| `component.monoText` | `--on-component-mono-text` | `component-mono-text` | `#D0D0D0` | `#333333` | Monospace table text, such as versions. |
| `component.timelineLine` | `--on-component-timeline-line` | `component-timeline-line` | `#333333` | `#D6D6D6` | Timeline line start, fading through surface.raised to transparent. |
| `component.timelineDot` | `--on-component-timeline-dot` | `component-timeline-dot` | `#3A3A3A` | `#C4C4C4` | Normal timeline entry dots. |
| `component.sourceMeta` | `--on-component-source-meta` | `component-source-meta` | `#555555` | `#B0B0B0` | Auxiliary-source dots, such as GitHub metadata in release sources. |
| `component.collectionFrom` | `--on-component-collection-from` | `component-collection-from` | `#1D1A26` | `#F1EEFB` | Collection card gradient start, 160°. |
| `component.collectionTo` | `--on-component-collection-to` | `component-collection-to` | `#161616` | `#FFFFFF` | Collection card gradient end at 70%. |
| `component.collectionRing` | `--on-component-collection-ring` | `component-collection-ring` | `#1B1922` | `#F8F7FD` | Collection stacked-icon border. |
| `component.detailHeaderBg` | `--on-component-detail-header-bg` | `component-detail-header-bg` | `#171717` | `#FFFFFF` | Detail header card background beneath glow. |
| `component.cliIconFrom` | `--on-component-cli-icon-from` | `component-cli-icon-from` | `#2A2A2A` | — | Command-line tile gradient start. |
| `component.cliIconTo` | `--on-component-cli-icon-to` | `component-cli-icon-to` | `#1B1B1B` | — | Command-line tile gradient end. |
| `component.cliIconText` | `--on-component-cli-icon-text` | `component-cli-icon-text` | `#E2E2E2` | — | Command-line tile text. |
| `component.letterIconText` | `--on-component-letter-icon-text` | `component-letter-icon-text` | `#FFFFFF` | — | Letter-tile text, decorative because names always appear alongside. |
| `component.segmentActive` | `--on-component-segment-active` | `component-segment-active` | `#262626` | `#FFFFFF` | Selected segment of a segmented control. |
| `component.menuBarBg` | `--on-component-menu-bar-bg` | `component-menu-bar-bg` | `rgba(38, 38, 40, 0.96)` | `rgba(246, 246, 246, 0.96)` | In-app preview of the macOS menu bar strip. |
| `component.menuBarText` | `--on-component-menu-bar-text` | `component-menu-bar-text` | `#E6E6E6` | `#1F1F1F` | Menu bar preview items, drawn like AppKit template images. |

### macOS window controls

| Token | CSS variable | Utility | Dark | Light | Use |
| --- | --- | --- | --- | --- | --- |
| `macos.close` | `--on-macos-close` | `macos-close` | `#FF5F57` | — |  |
| `macos.minimize` | `--on-macos-minimize` | `macos-minimize` | `#FEBC2E` | — |  |
| `macos.zoom` | `--on-macos-zoom` | `macos-zoom` | `#28C840` | — |  |

## Typography

Class `text-{name}` sets size, line height, weight and tracking together.

| Name | Class | Size / line height | Weight | Tracking | Use |
| --- | --- | --- | --- | --- | --- |
| `hero` | `text-hero` | 76 / 78 px | 600 | -0.035em | Web homepage hero heading |
| `section` | `text-section` | 46 / 50 px | 600 | -0.03em | Web section heading |
| `display` | `text-display` | 40 / 44 px | 600 | -0.03em | Featured hero heading |
| `title1` | `text-title1` | 28 / 34 px | 600 | -0.02em | Page heading |
| `title2` | `text-title2` | 22 / 28 px | 600 | -0.02em | Dialog title and compact detail header |
| `headline` | `text-headline` | 16 / 24 px | 600 | -0.01em | Section heading |
| `statValue` | `text-stat` | 20 / 26 px | 600 | -0.015em | Statistics values with proportional numerals |
| `body` | `text-body` | 14 / 22 px | 400 | 0 | Body text |
| `bodySm` | `text-body-sm` | 13 / 20 px | 400 | 0 | List and table body text |
| `caption` | `text-caption` | 12 / 18 px | 400 | 0 | Secondary information |
| `label` | `text-label` | 11 / 16 px | 600 | 0.08em, uppercase | Group labels, such as sidebar section titles |
| `mono` | `text-mono` | 12 / 18 px | 400 | 0 | Commands, versions, and logs |

| Font family | Stack |
| --- | --- |
| `sans` | Inter Variable, Inter, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans SC, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif |
| `sansZh` | Inter Variable, Inter, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans SC, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif |
| `sansJa` | Inter Variable, Inter, Hiragino Sans, Hiragino Kaku Gothic ProN, Yu Gothic, Noto Sans JP, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif |
| `mono` | SF Mono, JetBrains Mono, ui-monospace, Menlo, Consolas, Liberation Mono, monospace |

## Spacing

| Name | CSS variable | Value | Use |
| --- | --- | --- | --- |
| `0` | `--on-space-0` | 0px |  |
| `1` | `--on-space-1` | 4px |  |
| `2` | `--on-space-2` | 8px |  |
| `3` | `--on-space-3` | 12px |  |
| `4` | `--on-space-4` | 16px |  |
| `5` | `--on-space-5` | 20px |  |
| `6` | `--on-space-6` | 24px |  |
| `7` | `--on-space-7` | 28px |  |
| `8` | `--on-space-8` | 32px |  |
| `10` | `--on-space-10` | 40px |  |
| `12` | `--on-space-12` | 48px |  |
| `16` | `--on-space-16` | 64px |  |
| `20` | `--on-space-20` | 80px |  |
| `0-5` | `--on-space-0-5` | 2px |  |
| `1-5` | `--on-space-1-5` | 6px |  |
| `2-5` | `--on-space-2-5` | 10px |  |
| `3-5` | `--on-space-3-5` | 14px |  |

## Radius

| Name | CSS variable | Value | Use |
| --- | --- | --- | --- |
| `rounded-tiny` | `--on-radius-tiny` | 4px |  |
| `rounded-small` | `--on-radius-small` | 7px |  |
| `rounded-default` | `--on-radius-default` | 10px |  |
| `rounded-panel` | `--on-radius-panel` | 12px | Screenshot cards, menus, overlays. |
| `rounded-big` | `--on-radius-big` | 14px |  |
| `rounded-huge` | `--on-radius-huge` | 20px |  |
| `rounded-xl` | `--on-radius-xl` | 28px |  |
| `rounded-full` | `--on-radius-full` | 9999px |  |
| `rounded-app-icon` | `--on-radius-app-icon` | 23% | App icon radius: 23% of side length, approximating macOS superellipses. |

## Shadows

| Name | Dark | Light | Use |
| --- | --- | --- | --- |
| `shadow-window` | `0 50px 140px rgba(0, 0, 0, 0.65), 0 0 0 0.5px #000000` | `0 40px 100px rgba(0, 0, 0, 0.16), 0 0 0 0.5px rgba(0, 0, 0, 0.16)` |  |
| `shadow-popover` | `0 24px 60px rgba(0, 0, 0, 0.60)` | `0 12px 40px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04)` |  |
| `shadow-modal` | `0 30px 80px rgba(0, 0, 0, 0.60)` | `0 24px 64px rgba(0, 0, 0, 0.16)` |  |
| `shadow-toast` | `0 18px 40px rgba(0, 0, 0, 0.50)` | `0 10px 30px rgba(0, 0, 0, 0.12)` |  |
| `shadow-float-icon` | `0 18px 30px rgba(0, 0, 0, 0.55)` | `0 14px 28px rgba(0, 0, 0, 0.16)` |  |
| `shadow-app-icon` | `inset 0 0 0 0.5px rgba(255, 255, 255, 0.14), 0 1px 2px rgba(0, 0, 0, 0.40)` | `inset 0 0 0 0.5px rgba(0, 0, 0, 0.10), 0 1px 2px rgba(0, 0, 0, 0.12)` |  |
| `shadow-icon-text` | `0 1px 2px rgba(0, 0, 0, 0.30)` | — | Letter-tile shadow preserves readability on light backgrounds. |
| `shadow-focus-ring` | `0 0 0 2px #131313, 0 0 0 4px #FF7356` | `0 0 0 2px #FFFFFF, 0 0 0 4px #EE5533` | Keyboard focus ring: 2 px gap plus 2 px coral (3.5:1 against white in light mode). |
| `shadow-segment` | `0 0 #0000` | `0 1px 2px rgba(0, 0, 0, 0.10), 0 0 0 0.5px rgba(0, 0, 0, 0.08)` | Selected segment lift; none (a transparent shadow) in dark mode. |
| `shadow-knob` | `0 0 #0000` | `0 1px 2px rgba(0, 0, 0, 0.22), 0 0 0 0.5px rgba(0, 0, 0, 0.08)` | Toggle knob lift; the white knob needs it on the light track. |

## Motion

| Name | Value |
| --- | --- |
| `duration-fast` | 120 ms |
| `duration-base` | 200 ms |
| `duration-slow` | 320 ms |
| `ease-standard` | `cubic-bezier(0.2, 0.8, 0.2, 1)` |
| `ease-emphasized` | `cubic-bezier(0.3, 0, 0, 1)` |
| `ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` |

## Z-index

| Name | Value |
| --- | --- |
| `z-base` | 0 |
| `z-sticky` | 10 |
| `z-dropdown` | 100 |
| `z-overlay` | 200 |
| `z-modal` | 300 |
| `z-popover` | 400 |
| `z-toast` | 500 |
| `z-tooltip` | 600 |

## Layout

| Token | Value |
| --- | --- |
| `layout.desktop.windowDefaultWidth` | 1280px |
| `layout.desktop.windowDefaultHeight` | 820px |
| `layout.desktop.windowMinWidth` | 1100px |
| `layout.desktop.windowMinHeight` | 700px |
| `layout.desktop.sidebarWidth` | 224px |
| `layout.desktop.toolbarHeight` | 52px |
| `layout.desktop.railWidth` | 288px |
| `layout.desktop.contentPaddingX` | 28px |
| `layout.desktop.railPadding` | 20px |
| `layout.desktop.trafficLightInset` | x 18px, y 22px |
| `layout.web.pageMaxWidth` | 1240px |
| `layout.web.pageGutter` | 24px |
| `layout.web.navHeight` | 64px |
| `layout.web.breakpoints` | sm 640px, md 768px, lg 1024px, xl 1280px, 2xl 1440px |

## Effects

| Token | Dark | Light | Use |
| --- | --- | --- | --- |
| `heroGlow` | `radial-gradient(circle, rgba(205, 205, 255, 0.95) 0%, rgba(135, 135, 245, 0.78) 14%, rgba(92, 92, 220, 0.50) 32%, rgba(64, 64, 190, 0.20) 52%, transparent 70%)` | — | Featured hero violet glow. |
| `coverGlow` | `radial-gradient(circle, rgba(170, 170, 255, 0.55) 0%, rgba(110, 110, 235, 0.35) 16%, rgba(80, 80, 214, 0.18) 34%, rgba(60, 60, 180, 0.06) 52%, transparent 66%)` | — | Softer large web-hero glow. |
| `ring.stroke` | `rgba(255, 255, 255, 0.13)` | `rgba(0, 0, 0, 0.10)` |  |
| `ring.dasharray` | `2 6` | — |  |
| `detailGlow` | `radial-gradient(closest-side, {accent}73, {accent}2E 55%, transparent)` | — | Upper-right detail-header glow; {accent} is package accentColor (default #3C96F5); 73/2E are hexadecimal alpha values. |
| `backdropBlur` | `20` | — |  |
| `accentGlowOpacity` | `1` | `0.5` | Opacity of glows built from a package accent color (detail header, custom hero glow); saturated accents need softening on light backgrounds. |
