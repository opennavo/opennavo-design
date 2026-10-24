[English](../../../../reference/tokens.md) · [简体中文](../../../zh-CN/docs/reference/tokens.md) · [繁體中文](../../../zh-Hant/docs/reference/tokens.md) · [日本語](../../../ja-JP/docs/reference/tokens.md) · [Español](../../../es-ES/docs/reference/tokens.md) · [Português (Brasil)](../../../pt-BR/docs/reference/tokens.md) · [Русский](../../../ru-RU/docs/reference/tokens.md) · **Deutsch** · [Français](../../../fr-FR/docs/reference/tokens.md) · [Italiano](../../../it-IT/docs/reference/tokens.md)

> Englisch ist die Ausgangssprache. Die Übersetzungen wurden lokal maschinell erstellt und müssen sprachlich geprüft werden. Code und Lizenztexte bleiben unverändert.

<a id="token-reference"></a>

# Token-Referenznummer

<!-- Generated from tokens/tokens.json by packages/tokens/scripts/generate.ts; do not edit. After changing tokens.json, run `pnpm gen`. -->

Jeder Wert unten kommt von `tokens/tokens.json`Dunkel ist das Standardthema; die Spalte Licht zeigt den Wert an
das Lichtthema verwendet (ein em-Dash bedeutet, dass das Token in beiden Themen gleich ist). CSS Variablen sind, was das Web
Pakete emittieren; die Dienstprogrammspalte ist die UnoCSS / Tailwind Klasse Stamm ()`bg-`, `text-`, `border-` ... + Stängel.
Flutter (`OnColors`) SwiftUI (`OnColor`) den camelCase-Pfad verwenden, z.B. `surface.cardAlt` → `surfaceCardAlt`.

<a id="color"></a>

## Farbe

<a id="surfaces"></a>

### Oberflächen

| Design-Token      | CSS variabel            | Utility            | Dunkel                   | Hell                        | Verwendung                                                                                                 |
| ----------------- | ----------------------- | ------------------ | ------------------------ | --------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `surface.page`    | `--on-surface-page`     | `surface-page`     | `#0B0B0B`                | `#F2F2F2`                   | Outer Web und Fenster Hintergrund.                                                                         |
| `surface.base`    | `--on-surface-base`     | `surface-base`     | `#131313`                | `#F8F8F8`                   | Hauptinhaltshintergrund.                                                                                   |
| `surface.sidebar` | `--on-surface-sidebar`  | `surface-sidebar`  | `#161616`                | `#F1F1F1`                   | Desktop Sidebar.                                                                                           |
| `surface.rail`    | `--on-surface-rail`     | `surface-rail`     | `#141414`                | `#F5F5F5`                   | Rechtsschiene mit Zusammenfassungen und sekundären Aktionen.                                               |
| `surface.card`    | `--on-surface-card`     | `surface-card`     | `#1A1A1A`                | `#FFFFFF`                   | Karten.                                                                                                    |
| `surface.cardAlt` | `--on-surface-card-alt` | `surface-card-alt` | `#1F1F1F`                | `#F5F5F5`                   | Eingaben und sekundäre Blöcke innerhalb von Karten.                                                        |
| `surface.raised`  | `--on-surface-raised`   | `surface-raised`   | `#262626`                | `#EDEDED`                   | Hover, Auswahl, Icon-Kacheln; dunkler als Karten im Lichtmodus, so dass Floating Panels Popover verwenden. |
| `surface.chip`    | `--on-surface-chip`     | `surface-chip`     | `#2A2A2A`                | `#EBEBEB`                   | Neutral Badge Hintergrund.                                                                                 |
| `surface.control` | `--on-surface-control`  | `surface-control`  | `#2B2B2B`                | `#FFFFFF`                   | Inputs, Tooltips und Sekundärkontrollen.                                                                   |
| `surface.inset`   | `--on-surface-inset`    | `surface-inset`    | `#111111`                | `#F0F0F0`                   | Codeblöcke, Protokolle, segmentierte Kontrollspuren.                                                       |
| `surface.overlay` | `--on-surface-overlay`  | `surface-overlay`  | `rgba(28, 28, 28, 0.92)` | `rgba(255, 255, 255, 0.94)` | Overlays mit Hintergrundfilter: blur(20px).                                                                |
| `surface.popover` | `--on-surface-popover`  | `surface-popover`  | `#262626`                | `#FFFFFF`                   | Floating Panels und Hinweise über Inhalte, wie Einwilligungs- und Vorschlagskarten.                        |

<a id="borders-utility-prefix-line"></a>

### Grenzen (Gebrauchstauglichkeitspräfix) `line`)

| Design-Token     | CSS variabel          | Utility        | Dunkel                      | Hell                  | Verwendung                              |
| ---------------- | --------------------- | -------------- | --------------------------- | --------------------- | --------------------------------------- |
| `border.subtle`  | `--on-border-subtle`  | `line-subtle`  | `rgba(255, 255, 255, 0.07)` | `rgba(0, 0, 0, 0.08)` | Kartengrenzen und -teiler.              |
| `border.default` | `--on-border-default` | `line-default` | `rgba(255, 255, 255, 0.12)` | `rgba(0, 0, 0, 0.13)` | Input, Ghost-Button und Fenstergrenzen. |
| `border.strong`  | `--on-border-strong`  | `line-strong`  | `rgba(255, 255, 255, 0.20)` | `rgba(0, 0, 0, 0.22)` | Schwebegrenzen.                         |
| `border.sidebar` | `--on-border-sidebar` | `line-sidebar` | `#1D1D1D`                   | `#E5E5E5`             | Sidebar rechter Rand.                   |

<a id="text-utility-prefix-ink"></a>

### Text (Utility-Präfix) `ink`)

| Design-Token     | CSS variabel          | Utility         | Dunkel    | Hell      | Verwendung                                                                                                                           |
| ---------------- | --------------------- | --------------- | --------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `text.primary`   | `--on-text-primary`   | `ink-primary`   | `#EDEDED` | `#1A1A1A` | Überschriften, betonter Körpertext, Zahlen (14,9:1 auf dunklen Karten, 17,4:1 auf hellen Karten).                                    |
| `text.secondary` | `--on-text-secondary` | `ink-secondary` | `#A8A8A8` | `#575757` | Körpertext und Beschreibungen (7.3:1 auf dunklen Karten, 7.2:1 auf hellen Karten).                                                   |
| `text.tertiary`  | `--on-text-tertiary`  | `ink-tertiary`  | `#8F8F8F` | `#6B6B6B` | Sekundärinformationen, Beschriftungen, Zeiten (5.4:1 auf dunklen Karten, 4.7:1 auf dunkel angehoben; 5.3:1 und 4.6:1 im Lichtmodus). |
| `text.disabled`  | `--on-text-disabled`  | `ink-disabled`  | `#5C5C5C` | `#A6A6A6` | Nur dekorativ / dekorativ; niemals wesentliche Informationen übermitteln.                                                            |
| `text.inverse`   | `--on-text-inverse`   | `ink-inverse`   | `#141414` | `#FFFFFF` | Text und Symbole auf festen Füllungen (Status, Korallen, Lachs); dunkel im dunklen Modus, weiß im hellen Modus.                      |
| `text.onAccent`  | `--on-text-on-accent` | `ink-on-accent` | `#1B0A05` | —         | Text auf Korallenknöpfen/-abzeichen (7.2:1).                                                                                         |
| `text.accent`    | `--on-text-accent`    | `ink-accent`    | `#FF7356` | `#B83A15` | Coral Text, Links und Icons; brand.coral ist für Füllungen und Grafiken (Lichtmodus benötigt einen dunkleren Farbton für 4,5:1).     |

<a id="brand"></a>

### Marke

| Design-Token                    | CSS variabel                             | Utility           | Dunkel                            | Hell                  | Verwendung                                                                                                                                    |
| ------------------------------- | ---------------------------------------- | ----------------- | --------------------------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `brand.coral`                   | `--on-brand-coral`                       | `brand-coral`     | `#FF7356`                         | `#EE5533`             | Primäre Markenfarbe für Fills und Grafiken: Logo, Fortschritt, Abzeichen, hervorgehobene Buttons. Für Korallentext verwenden Sie text.accent. |
| `brand.salmon`                  | `--on-brand-salmon`                      | `brand-salmon`    | `#F99E70`                         | `#A74C1B`             | Hervorgehobener Text: Hero Second Line, Abzeichen, verfügbare Updates.                                                                        |
| `brand.violet`                  | `--on-brand-violet`                      | `brand-violet`    | `#5B5BD6`                         | —                     | Primäre Helden leuchten Farbe.                                                                                                                |
| `brand.glowCore`                | `--on-brand-glow-core`                   | `brand-glow-core` | `#CDCDFF`                         | —                     | Glow Center Highlight.                                                                                                                        |
| `brand.logoGradient`            | `--on-brand-logo-gradient`               | —                 | `#FFB347` → `#FF7356` → `#FF4E3A` | —                     | Logo-N-Gradient, oben links nach unten rechts.                                                                                                |
| `brand.logoCoreGradient`        | `--on-brand-logo-core-gradient`          | —                 | `#FFF6D6` → `#FFC861`             | `#FFB347` → `#FF8F3F` | Logo Polaris Gradient auf dunklen Hintergründen.                                                                                              |
| `brand.logoCoreGradientOnLight` | `--on-brand-logo-core-gradient-on-light` | —                 | `#FFB347` → `#FF8F3F`             | —                     | Logo Polaris Gradient auf hellen Hintergründen; warmes Weiß würde verschwinden.                                                               |

<a id="accent-tints"></a>

### Akzenttönungen

| Design-Token          | CSS variabel                | Utility                | Dunkel                      | Hell                      | Verwendung                                       |
| --------------------- | --------------------------- | ---------------------- | --------------------------- | ------------------------- | ------------------------------------------------ |
| `accent.coralSubtle`  | `--on-accent-coral-subtle`  | `accent-coral-subtle`  | `rgba(255, 115, 86, 0.12)`  | `rgba(238, 85, 51, 0.10)` | Fortschrittstracks und Aktualisierungsabzeichen. |
| `accent.salmonSubtle` | `--on-accent-salmon-subtle` | `accent-salmon-subtle` | `rgba(249, 158, 112, 0.10)` | `rgba(167, 76, 27, 0.10)` | Badge und verfügbare Update-Hintergründe.        |

<a id="status"></a>

### Status

| Design-Token           | CSS variabel                 | Utility                 | Dunkel                      | Hell                       | Verwendung                                            |
| ---------------------- | ---------------------------- | ----------------------- | --------------------------- | -------------------------- | ----------------------------------------------------- |
| `status.success`       | `--on-status-success`        | `status-success`        | `#3FCF6C`                   | `#187733`                  | Installiert, Erfolg, aktuell.                         |
| `status.successSubtle` | `--on-status-success-subtle` | `status-success-subtle` | `rgba(63, 207, 108, 0.10)`  | `rgba(24, 119, 51, 0.10)`  |                                                       |
| `status.warning`       | `--on-status-warning`        | `status-warning`        | `#FAB219`                   | `#965A00`                  | Warnungen und Administratorberechtigung erforderlich. |
| `status.warningSubtle` | `--on-status-warning-subtle` | `status-warning-subtle` | `rgba(250, 178, 25, 0.10)`  | `rgba(150, 90, 0, 0.10)`   |                                                       |
| `status.danger`        | `--on-status-danger`         | `status-danger`         | `#FF5D51`                   | `#C22B21`                  | Fehler, veraltet, löschen.                            |
| `status.dangerSubtle`  | `--on-status-danger-subtle`  | `status-danger-subtle`  | `rgba(255, 93, 81, 0.10)`   | `rgba(194, 43, 33, 0.10)`  |                                                       |
| `status.info`          | `--on-status-info`           | `status-info`           | `#66A4FA`                   | `#1564CD`                  | Selbstaktualisierung, Links, Informationen.           |
| `status.infoSubtle`    | `--on-status-info-subtle`    | `status-info-subtle`    | `rgba(102, 164, 250, 0.10)` | `rgba(21, 100, 205, 0.10)` |                                                       |
| `status.successBorder` | `--on-status-success-border` | `status-success-border` | `rgba(63, 207, 108, 0.20)`  | `rgba(24, 119, 51, 0.24)`  | Grenze der Panels mit Erfolg gefärbtSubtle.           |
| `status.warningBorder` | `--on-status-warning-border` | `status-warning-border` | `rgba(250, 178, 25, 0.25)`  | `rgba(150, 90, 0, 0.24)`   | Rand der Tafeln mit Warnhinweis gefärbtSubtle.        |
| `status.dangerBorder`  | `--on-status-danger-border`  | `status-danger-border`  | `rgba(255, 93, 81, 0.25)`   | `rgba(194, 43, 33, 0.24)`  | Rand der Tafeln getönt mit GefahrSubtle.              |
| `status.infoBorder`    | `--on-status-info-border`    | `status-info-border`    | `rgba(102, 164, 250, 0.25)` | `rgba(21, 100, 205, 0.24)` | Rand von Panels mit infoSubtle getönt.                |

<a id="buttons"></a>

### Knöpfe

| Design-Token              | CSS variabel                    | Utility                    | Dunkel    | Hell      | Verwendung |
| ------------------------- | ------------------------------- | -------------------------- | --------- | --------- | ---------- |
| `button.primaryBg`        | `--on-button-primary-bg`        | `button-primary-bg`        | `#EBEBEB` | `#1F1F1F` |            |
| `button.primaryHover`     | `--on-button-primary-hover`     | `button-primary-hover`     | `#FFFFFF` | `#333333` |            |
| `button.primaryPressed`   | `--on-button-primary-pressed`   | `button-primary-pressed`   | `#D6D6D6` | `#0A0A0A` |            |
| `button.primaryText`      | `--on-button-primary-text`      | `button-primary-text`      | `#141414` | `#FFFFFF` |            |
| `button.secondaryBg`      | `--on-button-secondary-bg`      | `button-secondary-bg`      | `#2B2B2B` | `#EBEBEB` |            |
| `button.secondaryHover`   | `--on-button-secondary-hover`   | `button-secondary-hover`   | `#333333` | `#E0E0E0` |            |
| `button.secondaryPressed` | `--on-button-secondary-pressed` | `button-secondary-pressed` | `#242424` | `#D6D6D6` |            |
| `button.secondaryText`    | `--on-button-secondary-text`    | `button-secondary-text`    | `#EDEDED` | `#1A1A1A` |            |
| `button.accentBg`         | `--on-button-accent-bg`         | `button-accent-bg`         | `#FF7356` | `#EE5533` |            |
| `button.accentHover`      | `--on-button-accent-hover`      | `button-accent-hover`      | `#FF8468` | `#F46546` |            |
| `button.accentPressed`    | `--on-button-accent-pressed`    | `button-accent-pressed`    | `#F0603F` | `#E24A28` |            |
| `button.accentText`       | `--on-button-accent-text`       | `button-accent-text`       | `#1B0A05` | —         |            |
| `button.disabledBg`       | `--on-button-disabled-bg`       | `button-disabled-bg`       | `#171717` | `#F0F0F0` |            |
| `button.disabledText`     | `--on-button-disabled-text`     | `button-disabled-text`     | `#5C5C5C` | `#A6A6A6` |            |

<a id="charts"></a>

### Karten

| Design-Token       | CSS variabel            | Utility            | Dunkel    | Hell      | Verwendung                                                                                            |
| ------------------ | ----------------------- | ------------------ | --------- | --------- | ----------------------------------------------------------------------------------------------------- |
| `chart.series1`    | `--on-chart-series1`    | `chart-series1`    | `#7B72EE` | `#6A61E8` | Farbe der Kategorie 1, violett.                                                                       |
| `chart.series2`    | `--on-chart-series2`    | `chart-series2`    | `#E0663F` | `#D9572E` | Kategorie Farbe 2, Koralle.                                                                           |
| `chart.series3`    | `--on-chart-series3`    | `chart-series3`    | `#1E9E72` | `#168A62` | Kategorie Farbe 3, Cyan; alle drei auf farbenblinde Zugänglichkeit / Kontrast auf # 1A1A1A überprüft. |
| `chart.emphasis`   | `--on-chart-emphasis`   | `chart-emphasis`   | `#F99E70` | `#D0602A` | Einzelserienschwerpunkt, aktuelle Periode.                                                            |
| `chart.deemphasis` | `--on-chart-deemphasis` | `chart-deemphasis` | `#4A4A4A` | `#CFCFCF` | Einzelserie De-Emphasis, historische Periode.                                                         |
| `chart.grid`       | `--on-chart-grid`       | `chart-grid`       | `#2C2C2A` | `#EBEBEB` |                                                                                                       |
| `chart.axis`       | `--on-chart-axis`       | `chart-axis`       | `#383838` | `#D6D6D6` |                                                                                                       |

<a id="component-colors"></a>

### Komponentenfarben

| Design-Token               | CSS variabel                      | Utility                      | Dunkel                      | Hell                        | Verwendung                                                                                                                                               |
| -------------------------- | --------------------------------- | ---------------------------- | --------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `component.searchBg`       | `--on-component-search-bg`        | `component-search-bg`        | `#1C1C1C`                   | `#FFFFFF`                   | Suchfeld und Formulareingabehintergrund.                                                                                                                 |
| `component.cardHover`      | `--on-component-card-hover`       | `component-card-hover`       | `#1D1D1D`                   | `#FAFAFA`                   | Interaktiver Karten-Hover-Hintergrund.                                                                                                                   |
| `component.toggleTrack`    | `--on-component-toggle-track`     | `component-toggle-track`     | `#333333`                   | `#D9D9D9`                   | Abseits der Kippbahn.                                                                                                                                    |
| `component.toggleKnob`     | `--on-component-toggle-knob`      | `component-toggle-knob`      | `#BDBDBD`                   | `#FFFFFF`                   | Daumen ausschalten.                                                                                                                                      |
| `component.toggleKnobOn`   | `--on-component-toggle-knob-on`   | `component-toggle-knob-on`   | `#FFFFFF`                   | —                           | Auf Daumen umlegen.                                                                                                                                      |
| `component.tabIndicator`   | `--on-component-tab-indicator`    | `component-tab-indicator`    | `#FFFFFF`                   | `#1A1A1A`                   | Selected-Tab-Indikator.                                                                                                                                  |
| `component.navActive`      | `--on-component-nav-active`       | `component-nav-active`       | `#202020`                   | `#E3E3E3`                   | Ausgewählter Sidebar Navigationshintergrund.                                                                                                             |
| `component.heroBg`         | `--on-component-hero-bg`          | `component-hero-bg`          | `#0E0E10`                   | `#F4F3FD`                   | Featured Heldenkartenhintergrund.                                                                                                                        |
| `component.captionBg`      | `--on-component-caption-bg`       | `component-caption-bg`       | `rgba(0, 0, 0, 0.55)`       | —                           | Screenshot Bildunterschrift unten links Hintergrund; dunkel in beiden Themen, so dass die Bildunterschrift im dunklen Thema (data-theme='dark') rendert. |
| `component.topNavScrolled` | `--on-component-top-nav-scrolled` | `component-top-nav-scrolled` | `rgba(11, 11, 11, 0.85)`    | `rgba(242, 242, 242, 0.85)` | Gescrollter Webnavigationshintergrund: surface.page bei 85% mit Hintergrundfilter: blur(20px).                                                           |
| `component.scrim`          | `--on-component-scrim`            | `component-scrim`            | `rgba(0, 0, 0, 0.50)`       | `rgba(0, 0, 0, 0.30)`       | Dialog/Blatthintergrund.                                                                                                                                 |
| `component.lightboxScrim`  | `--on-component-lightbox-scrim`   | `component-lightbox-scrim`   | `rgba(0, 0, 0, 0.88)`       | —                           | Screenshot-Lightbox-Hintergrund; dunkel in beiden Themen, so dass die Lightbox im dunklen Thema (data-theme='dark') rendert.                             |
| `component.modalBg`        | `--on-component-modal-bg`         | `component-modal-bg`         | `#171717`                   | `#FFFFFF`                   | Hintergrund des Dialogs/Blattblatts.                                                                                                                     |
| `component.toastBg`        | `--on-component-toast-bg`         | `component-toast-bg`         | `rgba(44, 44, 44, 0.92)`    | `rgba(255, 255, 255, 0.94)` | Toast-Hintergrund mit Hintergrundfilter: blur(20px).                                                                                                     |
| `component.itemActive`     | `--on-component-item-active`      | `component-item-active`      | `rgba(255, 255, 255, 0.07)` | `rgba(0, 0, 0, 0.06)`       | Aktueller Menü-/Befehlspaletten-Elementhintergrund.                                                                                                      |
| `component.runningBorder`  | `--on-component-running-border`   | `component-running-border`   | `rgba(255, 115, 86, 0.25)`  | `rgba(238, 85, 51, 0.40)`   | Active-Task-Kartenrand, Korallen bei 25%.                                                                                                                |
| `component.logHeading`     | `--on-component-log-heading`      | `component-log-heading`      | `#E8E8E8`                   | `#1A1A1A`                   | Log-Stufenzeilen beginnend mit ==>.                                                                                                                      |
| `component.logSuccess`     | `--on-component-log-success`      | `component-log-success`      | `#7FD88F`                   | `#187733`                   | Erfolgreiche Log-Linien.                                                                                                                                 |
| `component.monoText`       | `--on-component-mono-text`        | `component-mono-text`        | `#D0D0D0`                   | `#333333`                   | Monospace-Tabellentext, z. B. Versionen.                                                                                                                 |
| `component.timelineLine`   | `--on-component-timeline-line`    | `component-timeline-line`    | `#333333`                   | `#D6D6D6`                   | Timeline-Zeilenstart, verblassen durch surface.raised auf transparent.                                                                                   |
| `component.timelineDot`    | `--on-component-timeline-dot`     | `component-timeline-dot`     | `#3A3A3A`                   | `#C4C4C4`                   | Normale Zeitleisteneintrittspunkte.                                                                                                                      |
| `component.sourceMeta`     | `--on-component-source-meta`      | `component-source-meta`      | `#555555`                   | `#B0B0B0`                   | Hilfsquellenpunkte, wie GitHub Metadaten in Releasequellen.                                                                                              |
| `component.collectionFrom` | `--on-component-collection-from`  | `component-collection-from`  | `#1D1A26`                   | `#F1EEFB`                   | Abholkartenverlaufsbeginn, 160°.                                                                                                                         |
| `component.collectionTo`   | `--on-component-collection-to`    | `component-collection-to`    | `#161616`                   | `#FFFFFF`                   | Die Steigung der Sammelkarte endet bei 70%.                                                                                                              |
| `component.collectionRing` | `--on-component-collection-ring`  | `component-collection-ring`  | `#1B1922`                   | `#F8F7FD`                   | Sammel-Icon-Grenze.                                                                                                                                      |
| `component.detailHeaderBg` | `--on-component-detail-header-bg` | `component-detail-header-bg` | `#171717`                   | `#FFFFFF`                   | Detail-Header-Karte Hintergrund unter Glühen.                                                                                                            |
| `component.cliIconFrom`    | `--on-component-cli-icon-from`    | `component-cli-icon-from`    | `#2A2A2A`                   | —                           | Kommandozeilen-Tile-Gradienten starten.                                                                                                                  |
| `component.cliIconTo`      | `--on-component-cli-icon-to`      | `component-cli-icon-to`      | `#1B1B1B`                   | —                           | Befehlszeilen-Steigungsende.                                                                                                                             |
| `component.cliIconText`    | `--on-component-cli-icon-text`    | `component-cli-icon-text`    | `#E2E2E2`                   | —                           | Befehlszeilenkacheltext.                                                                                                                                 |
| `component.letterIconText` | `--on-component-letter-icon-text` | `component-letter-icon-text` | `#FFFFFF`                   | —                           | Briefkacheltext, dekorativ, weil Namen immer nebeneinander erscheinen.                                                                                   |
| `component.segmentActive`  | `--on-component-segment-active`   | `component-segment-active`   | `#262626`                   | `#FFFFFF`                   | Ausgewähltes Segment einer segmentierten Steuerung.                                                                                                      |
| `component.menuBarBg`      | `--on-component-menu-bar-bg`      | `component-menu-bar-bg`      | `rgba(38, 38, 40, 0.96)`    | `rgba(246, 246, 246, 0.96)` | In-App-Vorschau des macOS Menüleistenstreifen.                                                                                                           |
| `component.menuBarText`    | `--on-component-menu-bar-text`    | `component-menu-bar-text`    | `#E6E6E6`                   | `#1F1F1F`                   | Menüleistenvorschauelemente, gezeichnet wie AppKit-Vorlagenbilder.                                                                                       |

<a id="macos-window-controls"></a>

### macOS Fenstersteuerung

| Design-Token     | CSS variabel          | Utility          | Dunkel    | Hell | Verwendung |
| ---------------- | --------------------- | ---------------- | --------- | ---- | ---------- |
| `macos.close`    | `--on-macos-close`    | `macos-close`    | `#FF5F57` | —    |            |
| `macos.minimize` | `--on-macos-minimize` | `macos-minimize` | `#FEBC2E` | —    |            |
| `macos.zoom`     | `--on-macos-zoom`     | `macos-zoom`     | `#28C840` | —    |            |

<a id="typography"></a>

## Typografie

Klasse `text-{name}` Setzt Größe, Linienhöhe, Gewicht und Tracking zusammen.

| Name        | Klasse          | Größe/Linienhöhe | Gewicht | Verfolgung             | Verwendung                                |
| ----------- | --------------- | ---------------- | ------- | ---------------------- | ----------------------------------------- |
| `hero`      | `text-hero`     | 76 / 78 px       | 600     | -0,035 em              | Web-Homepage Held Überschrift             |
| `section`   | `text-section`  | 46 / 50 px       | 600     | -0,03m                 | Bahnabschnittsüberschrift                 |
| `display`   | `text-display`  | 40/44 px         | 600     | -0,03m                 | Ausgewählte Heldenüberschrift             |
| `title1`    | `text-title1`   | 28 / 34 px       | 600     | -0,02 em               | Seitenüberschrift                         |
| `title2`    | `text-title2`   | 22 / 28 px       | 600     | -0,02 em               | Dialogtitel und kompakter Detailheader    |
| `headline`  | `text-headline` | 16/24 px         | 600     | -0,01 em               | Abschnittsüberschrift                     |
| `statValue` | `text-stat`     | 20/26 px         | 600     | -0,015m                | Statistische Werte mit Proportionalzahlen |
| `body`      | `text-body`     | 14/22 px         | 400     | 0                      | Körpertext                                |
| `bodySm`    | `text-body-sm`  | 13 / 20 px       | 400     | 0                      | Liste und Tabelle Text                    |
| `caption`   | `text-caption`  | 12/18 px         | 400     | 0                      | Sekundärinformationen                     |
| `label`     | `text-label`    | 11/16 px         | 600     | 0,08em, Großbuchstaben | Gruppenlabels, wie Sidebar-Section-Titel  |
| `mono`      | `text-mono`     | 12/18 px         | 400     | 0                      | Befehle, Versionen und Protokolle         |

| Schriftfamilie | Stack                                                                                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sans`         | Inter Variabel, Inter, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans SC, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif      |
| `sansZh`       | Inter Variabel, Inter, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans SC, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif      |
| `sansJa`       | Inter Variabel, Inter, Hiragino Sans, Hiragino Kaku Gothic ProN, Yu Gothic, Noto Sans JP, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif |
| `mono`         | SF Mono, JetBrains Mono, ui-monospace, Menlo, Consolas, Liberation Mono, Monospace                                                                      |

<a id="spacing"></a>

## Abstand

| Name  | CSS variabel     | Wert | Verwendung |
| ----- | ---------------- | ---- | ---------- |
| `0`   | `--on-space-0`   | 0px  |            |
| `1`   | `--on-space-1`   | 4px  |            |
| `2`   | `--on-space-2`   | 8px  |            |
| `3`   | `--on-space-3`   | 12px |            |
| `4`   | `--on-space-4`   | 16px |            |
| `5`   | `--on-space-5`   | 20px |            |
| `6`   | `--on-space-6`   | 24px |            |
| `7`   | `--on-space-7`   | 28px |            |
| `8`   | `--on-space-8`   | 32px |            |
| `10`  | `--on-space-10`  | 40px |            |
| `12`  | `--on-space-12`  | 48px |            |
| `16`  | `--on-space-16`  | 64px |            |
| `20`  | `--on-space-20`  | 80px |            |
| `0-5` | `--on-space-0-5` | 2px  |            |
| `1-5` | `--on-space-1-5` | 6px  |            |
| `2-5` | `--on-space-2-5` | 10px |            |
| `3-5` | `--on-space-3-5` | 14px |            |

<a id="radius"></a>

## Radius

| Name               | CSS variabel           | Wert   | Verwendung                                                                |
| ------------------ | ---------------------- | ------ | ------------------------------------------------------------------------- |
| `rounded-tiny`     | `--on-radius-tiny`     | 4px    |                                                                           |
| `rounded-small`    | `--on-radius-small`    | 7px    |                                                                           |
| `rounded-default`  | `--on-radius-default`  | 10px   |                                                                           |
| `rounded-panel`    | `--on-radius-panel`    | 12px   | Screenshotkarten, Menüs, Overlays.                                        |
| `rounded-big`      | `--on-radius-big`      | 14px   |                                                                           |
| `rounded-huge`     | `--on-radius-huge`     | 20px   |                                                                           |
| `rounded-xl`       | `--on-radius-xl`       | 28px   |                                                                           |
| `rounded-full`     | `--on-radius-full`     | 9999px |                                                                           |
| `rounded-app-icon` | `--on-radius-app-icon` | 23%    | App-Icon-Radius: 23% der Seitenlänge, näherungsweise macOS Superellipsen. |

<a id="shadows"></a>

## Schatten

| Name                | Dunkel                                                                       | Hell                                                                   | Verwendung                                                                          |
| ------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `shadow-window`     | `0 50px 140px rgba(0, 0, 0, 0.65), 0 0 0 0.5px #000000`                      | `0 40px 100px rgba(0, 0, 0, 0.16), 0 0 0 0.5px rgba(0, 0, 0, 0.16)`    |                                                                                     |
| `shadow-popover`    | `0 24px 60px rgba(0, 0, 0, 0.60)`                                            | `0 12px 40px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04)`       |                                                                                     |
| `shadow-modal`      | `0 30px 80px rgba(0, 0, 0, 0.60)`                                            | `0 24px 64px rgba(0, 0, 0, 0.16)`                                      |                                                                                     |
| `shadow-toast`      | `0 18px 40px rgba(0, 0, 0, 0.50)`                                            | `0 10px 30px rgba(0, 0, 0, 0.12)`                                      |                                                                                     |
| `shadow-float-icon` | `0 18px 30px rgba(0, 0, 0, 0.55)`                                            | `0 14px 28px rgba(0, 0, 0, 0.16)`                                      |                                                                                     |
| `shadow-app-icon`   | `inset 0 0 0 0.5px rgba(255, 255, 255, 0.14), 0 1px 2px rgba(0, 0, 0, 0.40)` | `inset 0 0 0 0.5px rgba(0, 0, 0, 0.10), 0 1px 2px rgba(0, 0, 0, 0.12)` |                                                                                     |
| `shadow-icon-text`  | `0 1px 2px rgba(0, 0, 0, 0.30)`                                              | —                                                                      | Letter-Fliesen Schatten bewahrt die Lesbarkeit auf hellen Hintergründen.            |
| `shadow-focus-ring` | `0 0 0 2px #131313, 0 0 0 4px #FF7356`                                       | `0 0 0 2px #FFFFFF, 0 0 0 4px #EE5533`                                 | Keyboard-Fokusring: 2 px Lücke plus 2 px Korallen (3,5:1 gegen Weiß im Lichtmodus). |
| `shadow-segment`    | `0 0 #0000`                                                                  | `0 1px 2px rgba(0, 0, 0, 0.10), 0 0 0 0.5px rgba(0, 0, 0, 0.08)`       | Ausgewählter Segmentlift; kein (transparenter Schatten) im Dunkelmodus.             |
| `shadow-knob`       | `0 0 #0000`                                                                  | `0 1px 2px rgba(0, 0, 0, 0.22), 0 0 0 0.5px rgba(0, 0, 0, 0.08)`       | Kippknopflift; Der weiße Knopf braucht ihn auf der Lichtspur.                       |

<a id="motion"></a>

## Bewegung

| Name              | Wert                             |
| ----------------- | -------------------------------- |
| `duration-fast`   | 120 ms                           |
| `duration-base`   | 200 ms                           |
| `duration-slow`   | 320 ms                           |
| `ease-standard`   | `cubic-bezier(0.2, 0.8, 0.2, 1)` |
| `ease-emphasized` | `cubic-bezier(0.3, 0, 0, 1)`     |
| `ease-exit`       | `cubic-bezier(0.4, 0, 1, 1)`     |

<a id="z-index"></a>

## Z-Index

| Name         | Wert |
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

## Layout

| Design-Token                         | Wert                                                 |
| ------------------------------------ | ---------------------------------------------------- |
| `layout.desktop.windowDefaultWidth`  | 1280px                                               |
| `layout.desktop.windowDefaultHeight` | 820px                                                |
| `layout.desktop.windowMinWidth`      | 1100px                                               |
| `layout.desktop.windowMinHeight`     | 700px                                                |
| `layout.desktop.sidebarWidth`        | 224px                                                |
| `layout.desktop.toolbarHeight`       | 52px                                                 |
| `layout.desktop.railWidth`           | 288px                                                |
| `layout.desktop.contentPaddingX`     | 28px                                                 |
| `layout.desktop.railPadding`         | 20px                                                 |
| `layout.desktop.trafficLightInset`   | x 18px, y 22px                                       |
| `layout.web.pageMaxWidth`            | 1240px                                               |
| `layout.web.pageGutter`              | 24px                                                 |
| `layout.web.navHeight`               | 64px                                                 |
| `layout.web.breakpoints`             | sm 640px, md 768px, lg 1024px, xl 1280px, 2xl 1440px |

<a id="effects"></a>

## Auswirkungen

| Design-Token        | Dunkel                                                                                                                                                            | Hell                  | Verwendung                                                                                                                                                           |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `heroGlow`          | `radial-gradient(circle, rgba(205, 205, 255, 0.95) 0%, rgba(135, 135, 245, 0.78) 14%, rgba(92, 92, 220, 0.50) 32%, rgba(64, 64, 190, 0.20) 52%, transparent 70%)` | —                     | Ausgezeichneter hero violet glühen.                                                                                                                                  |
| `coverGlow`         | `radial-gradient(circle, rgba(170, 170, 255, 0.55) 0%, rgba(110, 110, 235, 0.35) 16%, rgba(80, 80, 214, 0.18) 34%, rgba(60, 60, 180, 0.06) 52%, transparent 66%)` | —                     | Weicher großer Web-Held leuchtet.                                                                                                                                    |
| `ring.stroke`       | `rgba(255, 255, 255, 0.13)`                                                                                                                                       | `rgba(0, 0, 0, 0.10)` |                                                                                                                                                                      |
| `ring.dasharray`    | `2 6`                                                                                                                                                             | —                     |                                                                                                                                                                      |
| `detailGlow`        | `radial-gradient(closest-side, {accent}73, {accent}2E 55%, transparent)`                                                                                          | —                     | Glühen nach oben rechts mit Detailkopf; {accent} ist Paket-AkzentFarbe (Standard #3C96F5); 73/2E sind hexadezimale Alpha-Werte.                                      |
| `backdropBlur`      | `20`                                                                                                                                                              | —                     |                                                                                                                                                                      |
| `accentGlowOpacity` | `1`                                                                                                                                                               | `0.5`                 | Opacity von Leuchten aus einer Paket-Akzentfarbe (Detail-Header, benutzerdefiniertes Heldenglühen); gesättigte Akzente müssen auf hellen Hintergründen weich werden. |
