[English](../../../../reference/tokens.md) · [简体中文](../../../zh-CN/docs/reference/tokens.md) · [繁體中文](../../../zh-Hant/docs/reference/tokens.md) · [日本語](../../../ja-JP/docs/reference/tokens.md) · **Español** · [Português (Brasil)](../../../pt-BR/docs/reference/tokens.md) · [Русский](../../../ru-RU/docs/reference/tokens.md) · [Deutsch](../../../de-DE/docs/reference/tokens.md) · [Français](../../../fr-FR/docs/reference/tokens.md) · [Italiano](../../../it-IT/docs/reference/tokens.md)

> El inglés es el original. Las traducciones son borradores realizados con traducción automática local y requieren revisión humana. El código y los textos de las licencias se conservan.

<a id="token-reference"></a>

# Token reference

<!-- Generated from tokens/tokens.json by packages/tokens/scripts/generate.ts; do not edit. After changing tokens.json, run `pnpm gen`. -->

Cada valor de abajo viene de `tokens/tokens.json`. La oscuridad es el tema predeterminado; la columna de la luz muestra el valor
el tema de la luz utiliza (un em dash significa que el token es el mismo en ambos temas). CSS variables son lo que la web
los paquetes emitidos; la columna de utilidad es UnoCSS / Tailwind tallo de clase`bg-`, `text-`, `border-` ... + tallo).
Flutter (`OnColors`) y SwiftUI (`OnColor`) utilizar el camino camelCase, por ejemplo. `surface.cardAlt` → `surfaceCardAlt`.

<a id="color"></a>

## Color

<a id="surfaces"></a>

### Superficies

| Token de diseño   | CSS variable            | Utilidad           | Oscuro                   | Claro                       | Uso                                                                                                                                |
| ----------------- | ----------------------- | ------------------ | ------------------------ | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `surface.page`    | `--on-surface-page`     | `surface-page`     | `#0B0B0B`                | `#F2F2F2`                   | Exterior de la web y ventana.                                                                                                      |
| `surface.base`    | `--on-surface-base`     | `surface-base`     | `#131313`                | `#F8F8F8`                   | Fondo de contenido principal.                                                                                                      |
| `surface.sidebar` | `--on-surface-sidebar`  | `surface-sidebar`  | `#161616`                | `#F1F1F1`                   | Barra lateral de escritorio.                                                                                                       |
| `surface.rail`    | `--on-surface-rail`     | `surface-rail`     | `#141414`                | `#F5F5F5`                   | Carril derecho con resúmenes y acciones secundarias.                                                                               |
| `surface.card`    | `--on-surface-card`     | `surface-card`     | `#1A1A1A`                | `#FFFFFF`                   | Tarjetas.                                                                                                                          |
| `surface.cardAlt` | `--on-surface-card-alt` | `surface-card-alt` | `#1F1F1F`                | `#F5F5F5`                   | Entradas y bloques secundarios dentro de las tarjetas.                                                                             |
| `surface.raised`  | `--on-surface-raised`   | `surface-raised`   | `#262626`                | `#EDEDED`                   | Hover, selección, fichas de iconos; más oscuro que las tarjetas en modo de luz, por lo que los paneles flotantes utilizan popover. |
| `surface.chip`    | `--on-surface-chip`     | `surface-chip`     | `#2A2A2A`                | `#EBEBEB`                   | Antecedentes de insignia neutral.                                                                                                  |
| `surface.control` | `--on-surface-control`  | `surface-control`  | `#2B2B2B`                | `#FFFFFF`                   | Entradas, puntas de herramientas y controles secundarios.                                                                          |
| `surface.inset`   | `--on-surface-inset`    | `surface-inset`    | `#111111`                | `#F0F0F0`                   | Bloques de código, registros, pistas de control segmentadas.                                                                       |
| `surface.overlay` | `--on-surface-overlay`  | `surface-overlay`  | `rgba(28, 28, 28, 0.92)` | `rgba(255, 255, 255, 0.94)` | Superposición con filtro de fondo: borrón(20px).                                                                                   |
| `surface.popover` | `--on-surface-popover`  | `surface-popover`  | `#262626`                | `#FFFFFF`                   | Paneles flotantes y avisos sobre contenido, tales como tarjetas de consentimiento y sugerencias.                                   |

<a id="borders-utility-prefix-line"></a>

### Fronteras (prefijo de la higiene `line`)

| Token de diseño  | CSS variable          | Utilidad       | Oscuro                      | Claro                 | Uso                                             |
| ---------------- | --------------------- | -------------- | --------------------------- | --------------------- | ----------------------------------------------- |
| `border.subtle`  | `--on-border-subtle`  | `line-subtle`  | `rgba(255, 255, 255, 0.07)` | `rgba(0, 0, 0, 0.08)` | Borde de tarjetas y divisores.                  |
| `border.default` | `--on-border-default` | `line-default` | `rgba(255, 255, 255, 0.12)` | `rgba(0, 0, 0, 0.13)` | Entrada, botón fantasma y fronteras de ventana. |
| `border.strong`  | `--on-border-strong`  | `line-strong`  | `rgba(255, 255, 255, 0.20)` | `rgba(0, 0, 0, 0.22)` | Límites de arrastre.                            |
| `border.sidebar` | `--on-border-sidebar` | `line-sidebar` | `#1D1D1D`                   | `#E5E5E5`             | En la frontera derecha.                         |

<a id="text-utility-prefix-ink"></a>

### Texto (prefijo de la confidencialidad `ink`)

| Token de diseño  | CSS variable          | Utilidad        | Oscuro    | Claro     | Uso                                                                                                                                 |
| ---------------- | --------------------- | --------------- | --------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `text.primary`   | `--on-text-primary`   | `ink-primary`   | `#EDEDED` | `#1A1A1A` | Encabezamientos, subrayado texto corporal, números (14.9:1 en tarjetas oscuras, 17.4:1 en tarjetas de luz).                         |
| `text.secondary` | `--on-text-secondary` | `ink-secondary` | `#A8A8A8` | `#575757` | Texto y descripciones del cuerpo (7.3:1 en tarjetas oscuras, 7.2:1 en tarjetas de luz).                                             |
| `text.tertiary`  | `--on-text-tertiary`  | `ink-tertiary`  | `#8F8F8F` | `#6B6B6B` | Información secundaria, etiquetas, tiempos (5.4:1 en tarjetas oscuras, 4.7:1 en oscuro levantado; 5.3:1 y 4.6:1 en modo de luz).    |
| `text.disabled`  | `--on-text-disabled`  | `ink-disabled`  | `#5C5C5C` | `#A6A6A6` | Discapacitados/decorativos solamente; nunca transmitan información esencial.                                                        |
| `text.inverse`   | `--on-text-inverse`   | `ink-inverse`   | `#141414` | `#FFFFFF` | Texto e iconos sobre rellenos sólidos (Estado, coral, salmón); oscuro en modo oscuro, blanco en modo de luz.                        |
| `text.onAccent`  | `--on-text-on-accent` | `ink-on-accent` | `#1B0A05` | —         | Texto sobre botones de coral / badges (7.2:1).                                                                                      |
| `text.accent`    | `--on-text-accent`    | `ink-accent`    | `#FF7356` | `#B83A15` | Texto del coral, enlaces e iconos; brand.coral es para rellenos y gráficos (modo de luz necesita una sombra más oscura para 4.5:1). |

<a id="brand"></a>

### Marca

| Token de diseño                 | CSS variable                             | Utilidad          | Oscuro                            | Claro                 | Uso                                                                                                                                         |
| ------------------------------- | ---------------------------------------- | ----------------- | --------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `brand.coral`                   | `--on-brand-coral`                       | `brand-coral`     | `#FF7356`                         | `#EE5533`             | Color de marca principal para rellenos y gráficos: logotipo, progreso, placas, botones enfatizados. Para el texto de coral use text.accent. |
| `brand.salmon`                  | `--on-brand-salmon`                      | `brand-salmon`    | `#F99E70`                         | `#A74C1B`             | Texto enfatizado: héroe segunda línea, placas, actualizaciones disponibles.                                                                 |
| `brand.violet`                  | `--on-brand-violet`                      | `brand-violet`    | `#5B5BD6`                         | —                     | El héroe principal brilla de color.                                                                                                         |
| `brand.glowCore`                | `--on-brand-glow-core`                   | `brand-glow-core` | `#CDCDFF`                         | —                     | Punto de referencia del centro de flujo.                                                                                                    |
| `brand.logoGradient`            | `--on-brand-logo-gradient`               | —                 | `#FFB347` → `#FF7356` → `#FF4E3A` | —                     | Logo N gradiente, superior izquierda a inferior derecha.                                                                                    |
| `brand.logoCoreGradient`        | `--on-brand-logo-core-gradient`          | —                 | `#FFF6D6` → `#FFC861`             | `#FFB347` → `#FF8F3F` | Logo Polaris gradiente en fondo oscuro.                                                                                                     |
| `brand.logoCoreGradientOnLight` | `--on-brand-logo-core-gradient-on-light` | —                 | `#FFB347` → `#FF8F3F`             | —                     | Logo Polaris gradiente en fondo ligero; blanco cálido desaparecería.                                                                        |

<a id="accent-tints"></a>

### Tintes de aroma

| Token de diseño       | CSS variable                | Utilidad               | Oscuro                      | Claro                     | Uso                                             |
| --------------------- | --------------------------- | ---------------------- | --------------------------- | ------------------------- | ----------------------------------------------- |
| `accent.coralSubtle`  | `--on-accent-coral-subtle`  | `accent-coral-subtle`  | `rgba(255, 115, 86, 0.12)`  | `rgba(238, 85, 51, 0.10)` | Carriles de progreso y placas de actualización. |
| `accent.salmonSubtle` | `--on-accent-salmon-subtle` | `accent-salmon-subtle` | `rgba(249, 158, 112, 0.10)` | `rgba(167, 76, 27, 0.10)` | Fondos de placa y actualizados disponibles.     |

<a id="status"></a>

### Situación

| Token de diseño        | CSS variable                 | Utilidad                | Oscuro                      | Claro                      | Uso                                                      |
| ---------------------- | ---------------------------- | ----------------------- | --------------------------- | -------------------------- | -------------------------------------------------------- |
| `status.success`       | `--on-status-success`        | `status-success`        | `#3FCF6C`                   | `#187733`                  | Instalado, exitoso, actual.                              |
| `status.successSubtle` | `--on-status-success-subtle` | `status-success-subtle` | `rgba(63, 207, 108, 0.10)`  | `rgba(24, 119, 51, 0.10)`  |                                                          |
| `status.warning`       | `--on-status-warning`        | `status-warning`        | `#FAB219`                   | `#965A00`                  | Advertencias y permiso de administrador requeridos.      |
| `status.warningSubtle` | `--on-status-warning-subtle` | `status-warning-subtle` | `rgba(250, 178, 25, 0.10)`  | `rgba(150, 90, 0, 0.10)`   |                                                          |
| `status.danger`        | `--on-status-danger`         | `status-danger`         | `#FF5D51`                   | `#C22B21`                  | Failure, deprecated, delete.                             |
| `status.dangerSubtle`  | `--on-status-danger-subtle`  | `status-danger-subtle`  | `rgba(255, 93, 81, 0.10)`   | `rgba(194, 43, 33, 0.10)`  |                                                          |
| `status.info`          | `--on-status-info`           | `status-info`           | `#66A4FA`                   | `#1564CD`                  | Auto-actualización, enlaces, información.                |
| `status.infoSubtle`    | `--on-status-info-subtle`    | `status-info-subtle`    | `rgba(102, 164, 250, 0.10)` | `rgba(21, 100, 205, 0.10)` |                                                          |
| `status.successBorder` | `--on-status-success-border` | `status-success-border` | `rgba(63, 207, 108, 0.20)`  | `rgba(24, 119, 51, 0.24)`  | Frontera de paneles estancados con éxitoSutilidad.       |
| `status.warningBorder` | `--on-status-warning-border` | `status-warning-border` | `rgba(250, 178, 25, 0.25)`  | `rgba(150, 90, 0, 0.24)`   | Frontera de paneles estancados con advertenciaSutilidad. |
| `status.dangerBorder`  | `--on-status-danger-border`  | `status-danger-border`  | `rgba(255, 93, 81, 0.25)`   | `rgba(194, 43, 33, 0.24)`  | Frontera de paneles estancados con peligroSutilidad.     |
| `status.infoBorder`    | `--on-status-info-border`    | `status-info-border`    | `rgba(102, 164, 250, 0.25)` | `rgba(21, 100, 205, 0.24)` | Frontera de paneles estancados con infoSutilidad.        |

<a id="buttons"></a>

### Botones

| Token de diseño           | CSS variable                    | Utilidad                   | Oscuro    | Claro     | Uso |
| ------------------------- | ------------------------------- | -------------------------- | --------- | --------- | --- |
| `button.primaryBg`        | `--on-button-primary-bg`        | `button-primary-bg`        | `#EBEBEB` | `#1F1F1F` |     |
| `button.primaryHover`     | `--on-button-primary-hover`     | `button-primary-hover`     | `#FFFFFF` | `#333333` |     |
| `button.primaryPressed`   | `--on-button-primary-pressed`   | `button-primary-pressed`   | `#D6D6D6` | `#0A0A0A` |     |
| `button.primaryText`      | `--on-button-primary-text`      | `button-primary-text`      | `#141414` | `#FFFFFF` |     |
| `button.secondaryBg`      | `--on-button-secondary-bg`      | `button-secondary-bg`      | `#2B2B2B` | `#EBEBEB` |     |
| `button.secondaryHover`   | `--on-button-secondary-hover`   | `button-secondary-hover`   | `#333333` | `#E0E0E0` |     |
| `button.secondaryPressed` | `--on-button-secondary-pressed` | `button-secondary-pressed` | `#242424` | `#D6D6D6` |     |
| `button.secondaryText`    | `--on-button-secondary-text`    | `button-secondary-text`    | `#EDEDED` | `#1A1A1A` |     |
| `button.accentBg`         | `--on-button-accent-bg`         | `button-accent-bg`         | `#FF7356` | `#EE5533` |     |
| `button.accentHover`      | `--on-button-accent-hover`      | `button-accent-hover`      | `#FF8468` | `#F46546` |     |
| `button.accentPressed`    | `--on-button-accent-pressed`    | `button-accent-pressed`    | `#F0603F` | `#E24A28` |     |
| `button.accentText`       | `--on-button-accent-text`       | `button-accent-text`       | `#1B0A05` | —         |     |
| `button.disabledBg`       | `--on-button-disabled-bg`       | `button-disabled-bg`       | `#171717` | `#F0F0F0` |     |
| `button.disabledText`     | `--on-button-disabled-text`     | `button-disabled-text`     | `#5C5C5C` | `#A6A6A6` |     |

<a id="charts"></a>

### Gráficos

| Token de diseño    | CSS variable            | Utilidad           | Oscuro    | Claro     | Uso                                                                                                         |
| ------------------ | ----------------------- | ------------------ | --------- | --------- | ----------------------------------------------------------------------------------------------------------- |
| `chart.series1`    | `--on-chart-series1`    | `chart-series1`    | `#7B72EE` | `#6A61E8` | Categoría color 1, violeta.                                                                                 |
| `chart.series2`    | `--on-chart-series2`    | `chart-series2`    | `#E0663F` | `#D9572E` | Categoría color 2, coral.                                                                                   |
| `chart.series3`    | `--on-chart-series3`    | `chart-series3`    | `#1E9E72` | `#168A62` | Color de categoría 3, cyan; los tres comprobados para la accesibilidad/contraste de color ciego en #1A1A1A. |
| `chart.emphasis`   | `--on-chart-emphasis`   | `chart-emphasis`   | `#F99E70` | `#D0602A` | Prioridad de una serie, período actual.                                                                     |
| `chart.deemphasis` | `--on-chart-deemphasis` | `chart-deemphasis` | `#4A4A4A` | `#CFCFCF` | De-emfasis de serie única, período histórico.                                                               |
| `chart.grid`       | `--on-chart-grid`       | `chart-grid`       | `#2C2C2A` | `#EBEBEB` |                                                                                                             |
| `chart.axis`       | `--on-chart-axis`       | `chart-axis`       | `#383838` | `#D6D6D6` |                                                                                                             |

<a id="component-colors"></a>

### Colores componentes

| Token de diseño            | CSS variable                      | Utilidad                     | Oscuro                      | Claro                       | Uso                                                                                                                                                     |
| -------------------------- | --------------------------------- | ---------------------------- | --------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `component.searchBg`       | `--on-component-search-bg`        | `component-search-bg`        | `#1C1C1C`                   | `#FFFFFF`                   | Campo de búsqueda y fondo de entrada de formularios.                                                                                                    |
| `component.cardHover`      | `--on-component-card-hover`       | `component-card-hover`       | `#1D1D1D`                   | `#FAFAFA`                   | Fondo de la tarjeta interactiva.                                                                                                                        |
| `component.toggleTrack`    | `--on-component-toggle-track`     | `component-toggle-track`     | `#333333`                   | `#D9D9D9`                   | Fuera de la pista de toggle.                                                                                                                            |
| `component.toggleKnob`     | `--on-component-toggle-knob`      | `component-toggle-knob`      | `#BDBDBD`                   | `#FFFFFF`                   | Dedos de la mano.                                                                                                                                       |
| `component.toggleKnobOn`   | `--on-component-toggle-knob-on`   | `component-toggle-knob-on`   | `#FFFFFF`                   | —                           | En el pulgar de la mano.                                                                                                                                |
| `component.tabIndicator`   | `--on-component-tab-indicator`    | `component-tab-indicator`    | `#FFFFFF`                   | `#1A1A1A`                   | Indicador seleccionado.                                                                                                                                 |
| `component.navActive`      | `--on-component-nav-active`       | `component-nav-active`       | `#202020`                   | `#E3E3E3`                   | Fondo de navegación lateral seleccionado.                                                                                                               |
| `component.heroBg`         | `--on-component-hero-bg`          | `component-hero-bg`          | `#0E0E10`                   | `#F4F3FD`                   | Destacado fondo de la tarjeta de héroe.                                                                                                                 |
| `component.captionBg`      | `--on-component-caption-bg`       | `component-caption-bg`       | `rgba(0, 0, 0, 0.55)`       | —                           | Captura de pantalla fondo de la capción inferior izquierda; oscuro en ambos temas, por lo que la capción se hace en el tema oscuro (data-theme='dark'). |
| `component.topNavScrolled` | `--on-component-top-nav-scrolled` | `component-top-nav-scrolled` | `rgba(11, 11, 11, 0.85)`    | `rgba(242, 242, 242, 0.85)` | Fondo de navegación web: surface.page al 85% con fondo-filtro: borrón(20px).                                                                            |
| `component.scrim`          | `--on-component-scrim`            | `component-scrim`            | `rgba(0, 0, 0, 0.50)`       | `rgba(0, 0, 0, 0.30)`       | Trasfondo de hoja de diálogo.                                                                                                                           |
| `component.lightboxScrim`  | `--on-component-lightbox-scrim`   | `component-lightbox-scrim`   | `rgba(0, 0, 0, 0.88)`       | —                           | Captura de pantalla lightbox backdrop; oscuro en ambos temas, por lo que el lightbox renders en el tema oscuro (data-theme='dark').                     |
| `component.modalBg`        | `--on-component-modal-bg`         | `component-modal-bg`         | `#171717`                   | `#FFFFFF`                   | Dialog/sheet panel background.                                                                                                                          |
| `component.toastBg`        | `--on-component-toast-bg`         | `component-toast-bg`         | `rgba(44, 44, 44, 0.92)`    | `rgba(255, 255, 255, 0.94)` | Fondo de tostado con fondo-filtro: borrón(20px).                                                                                                        |
| `component.itemActive`     | `--on-component-item-active`      | `component-item-active`      | `rgba(255, 255, 255, 0.07)` | `rgba(0, 0, 0, 0.06)`       | Menú actual / fondo de elementos de paleta-command.                                                                                                     |
| `component.runningBorder`  | `--on-component-running-border`   | `component-running-border`   | `rgba(255, 115, 86, 0.25)`  | `rgba(238, 85, 51, 0.40)`   | Frontera de tarjetas de tiro activo, coral al 25%.                                                                                                      |
| `component.logHeading`     | `--on-component-log-heading`      | `component-log-heading`      | `#E8E8E8`                   | `#1A1A1A`                   | Inicia las líneas de paso de registro con ==conejérte.                                                                                                  |
| `component.logSuccess`     | `--on-component-log-success`      | `component-log-success`      | `#7FD88F`                   | `#187733`                   | Líneas de registro exitosas.                                                                                                                            |
| `component.monoText`       | `--on-component-mono-text`        | `component-mono-text`        | `#D0D0D0`                   | `#333333`                   | Texto de la tabla monoespacial, tales como versiones.                                                                                                   |
| `component.timelineLine`   | `--on-component-timeline-line`    | `component-timeline-line`    | `#333333`                   | `#D6D6D6`                   | Inicio de línea de tiempo, desvaneciendo a través de la superficie.raizado a transparente.                                                              |
| `component.timelineDot`    | `--on-component-timeline-dot`     | `component-timeline-dot`     | `#3A3A3A`                   | `#C4C4C4`                   | Números normales de entrada de línea temporal.                                                                                                          |
| `component.sourceMeta`     | `--on-component-source-meta`      | `component-source-meta`      | `#555555`                   | `#B0B0B0`                   | Puntos auxiliares, tales como GitHub metadatos en fuentes de liberación.                                                                                |
| `component.collectionFrom` | `--on-component-collection-from`  | `component-collection-from`  | `#1D1A26`                   | `#F1EEFB`                   | Tarjeta de colección de inicio de gradiente, 160°.                                                                                                      |
| `component.collectionTo`   | `--on-component-collection-to`    | `component-collection-to`    | `#161616`                   | `#FFFFFF`                   | Tarjeta de colección final gradiente al 70%.                                                                                                            |
| `component.collectionRing` | `--on-component-collection-ring`  | `component-collection-ring`  | `#1B1922`                   | `#F8F7FD`                   | Colección de la frontera apilada-icon.                                                                                                                  |
| `component.detailHeaderBg` | `--on-component-detail-header-bg` | `component-detail-header-bg` | `#171717`                   | `#FFFFFF`                   | Detalle fondo de la tarjeta de cabecera bajo brillo.                                                                                                    |
| `component.cliIconFrom`    | `--on-component-cli-icon-from`    | `component-cli-icon-from`    | `#2A2A2A`                   | —                           | Comando-línea de inicio de gradiente de azulejos.                                                                                                       |
| `component.cliIconTo`      | `--on-component-cli-icon-to`      | `component-cli-icon-to`      | `#1B1B1B`                   | —                           | Comando-línea final de gradiente de azulejo.                                                                                                            |
| `component.cliIconText`    | `--on-component-cli-icon-text`    | `component-cli-icon-text`    | `#E2E2E2`                   | —                           | Texto de la línea de comandos.                                                                                                                          |
| `component.letterIconText` | `--on-component-letter-icon-text` | `component-letter-icon-text` | `#FFFFFF`                   | —                           | Letra-til texto, decorativo porque los nombres siempre aparecen al lado.                                                                                |
| `component.segmentActive`  | `--on-component-segment-active`   | `component-segment-active`   | `#262626`                   | `#FFFFFF`                   | segmento seleccionado de un control segmentado.                                                                                                         |
| `component.menuBarBg`      | `--on-component-menu-bar-bg`      | `component-menu-bar-bg`      | `rgba(38, 38, 40, 0.96)`    | `rgba(246, 246, 246, 0.96)` | In-app vista previa de la macOS menu bar strip.                                                                                                         |
| `component.menuBarText`    | `--on-component-menu-bar-text`    | `component-menu-bar-text`    | `#E6E6E6`                   | `#1F1F1F`                   | Menú barra de elementos de vista previa, dibujados como imágenes de plantilla de AppKit.                                                                |

<a id="macos-window-controls"></a>

### macOS controles de ventana

| Token de diseño  | CSS variable          | Utilidad         | Oscuro    | Claro | Uso |
| ---------------- | --------------------- | ---------------- | --------- | ----- | --- |
| `macos.close`    | `--on-macos-close`    | `macos-close`    | `#FF5F57` | —     |     |
| `macos.minimize` | `--on-macos-minimize` | `macos-minimize` | `#FEBC2E` | —     |     |
| `macos.zoom`     | `--on-macos-zoom`     | `macos-zoom`     | `#28C840` | —     |     |

<a id="typography"></a>

## Tipografía

Clase `text-{name}` fija tamaño, altura de línea, peso y seguimiento juntos.

| Nombre      | Clase           | Tamaño / altura de la línea | Peso | Seguimiento       | Uso                                                                |
| ----------- | --------------- | --------------------------- | ---- | ----------------- | ------------------------------------------------------------------ |
| `hero`      | `text-hero`     | 76 / 78 px                  | 600  | -0.035em          | Página web héroe encabezado                                        |
| `section`   | `text-section`  | 46 / 50 px                  | 600  | -0.03em           | Sección de la Web                                                  |
| `display`   | `text-display`  | 40 / 44 px                  | 600  | -0.03em           | Selección de héroes                                                |
| `title1`    | `text-title1`   | 28 / 34 px                  | 600  | -0.02em           | Tema de la página                                                  |
| `title2`    | `text-title2`   | 22 / 28 px                  | 600  | -0.02em           | Título de diálogo y cabecera de detalles compactos                 |
| `headline`  | `text-headline` | 16 / 24 px                  | 600  | -0.01em           | Sección encabezada                                                 |
| `statValue` | `text-stat`     | 20 / 26 px                  | 600  | -0.015em          | Valores estadísticos con números proporcionales                    |
| `body`      | `text-body`     | 14 / 22 px                  | 400  | 0                 | Texto del cuerpo                                                   |
| `bodySm`    | `text-body-sm`  | 13 / 20 px                  | 400  | 0                 | Texto de la lista y el cuerpo de la tabla                          |
| `caption`   | `text-caption`  | 12 / 18 px                  | 400  | 0                 | Información secundaria                                             |
| `label`     | `text-label`    | 11 / 16 px                  | 600  | 0,08em, mayúscula | Etiquetas de grupo, tales como títulos de sección de barra lateral |
| `mono`      | `text-mono`     | 12 / 18 px                  | 400  | 0                 | Comandos, versiones y registros                                    |

| Familia de fuentes | Stack                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sans`             | Inter Variable, Inter, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans SC, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif      |
| `sansZh`           | Inter Variable, Inter, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans SC, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif      |
| `sansJa`           | Inter Variable, Inter, Hiragino Sans, Hiragino Kaku Gothic ProN, Yu Gothic, Noto Sans JP, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif |
| `mono`             | SF Mono, JetBrains Mono, ui-monospace, Menlo, Consolas, Liberation Mono, monospace                                                                      |

<a id="spacing"></a>

## Esparcimiento

| Nombre | CSS variable     | Valor | Uso |
| ------ | ---------------- | ----- | --- |
| `0`    | `--on-space-0`   | 0px   |     |
| `1`    | `--on-space-1`   | 4px   |     |
| `2`    | `--on-space-2`   | 8px   |     |
| `3`    | `--on-space-3`   | 12px  |     |
| `4`    | `--on-space-4`   | 16px  |     |
| `5`    | `--on-space-5`   | 20px  |     |
| `6`    | `--on-space-6`   | 24px  |     |
| `7`    | `--on-space-7`   | 28px  |     |
| `8`    | `--on-space-8`   | 32px  |     |
| `10`   | `--on-space-10`  | 40px  |     |
| `12`   | `--on-space-12`  | 48px  |     |
| `16`   | `--on-space-16`  | 64px  |     |
| `20`   | `--on-space-20`  | 80px  |     |
| `0-5`  | `--on-space-0-5` | 2px   |     |
| `1-5`  | `--on-space-1-5` | 6px   |     |
| `2-5`  | `--on-space-2-5` | 10px  |     |
| `3-5`  | `--on-space-3-5` | 14px  |     |

<a id="radius"></a>

## Radius

| Nombre             | CSS variable           | Valor  | Uso                                                                           |
| ------------------ | ---------------------- | ------ | ----------------------------------------------------------------------------- |
| `rounded-tiny`     | `--on-radius-tiny`     | 4px    |                                                                               |
| `rounded-small`    | `--on-radius-small`    | 7px    |                                                                               |
| `rounded-default`  | `--on-radius-default`  | 10px   |                                                                               |
| `rounded-panel`    | `--on-radius-panel`    | 12px   | Tarjetas de pantalla, menús, overlays.                                        |
| `rounded-big`      | `--on-radius-big`      | 14px   |                                                                               |
| `rounded-huge`     | `--on-radius-huge`     | 20px   |                                                                               |
| `rounded-xl`       | `--on-radius-xl`       | 28px   |                                                                               |
| `rounded-full`     | `--on-radius-full`     | 9999px |                                                                               |
| `rounded-app-icon` | `--on-radius-app-icon` | 23%    | App icono radius: 23% de longitud lateral, aproximándose macOS superellipses. |

<a id="shadows"></a>

## Sombras

| Nombre              | Oscuro                                                                       | Claro                                                                  | Uso                                                                                                     |
| ------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `shadow-window`     | `0 50px 140px rgba(0, 0, 0, 0.65), 0 0 0 0.5px #000000`                      | `0 40px 100px rgba(0, 0, 0, 0.16), 0 0 0 0.5px rgba(0, 0, 0, 0.16)`    |                                                                                                         |
| `shadow-popover`    | `0 24px 60px rgba(0, 0, 0, 0.60)`                                            | `0 12px 40px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04)`       |                                                                                                         |
| `shadow-modal`      | `0 30px 80px rgba(0, 0, 0, 0.60)`                                            | `0 24px 64px rgba(0, 0, 0, 0.16)`                                      |                                                                                                         |
| `shadow-toast`      | `0 18px 40px rgba(0, 0, 0, 0.50)`                                            | `0 10px 30px rgba(0, 0, 0, 0.12)`                                      |                                                                                                         |
| `shadow-float-icon` | `0 18px 30px rgba(0, 0, 0, 0.55)`                                            | `0 14px 28px rgba(0, 0, 0, 0.16)`                                      |                                                                                                         |
| `shadow-app-icon`   | `inset 0 0 0 0.5px rgba(255, 255, 255, 0.14), 0 1px 2px rgba(0, 0, 0, 0.40)` | `inset 0 0 0 0.5px rgba(0, 0, 0, 0.10), 0 1px 2px rgba(0, 0, 0, 0.12)` |                                                                                                         |
| `shadow-icon-text`  | `0 1px 2px rgba(0, 0, 0, 0.30)`                                              | —                                                                      | La sombra de la letra-til preserva la legibilidad en los fondos de luz.                                 |
| `shadow-focus-ring` | `0 0 0 2px #131313, 0 0 0 4px #FF7356`                                       | `0 0 0 2px #FFFFFF, 0 0 0 4px #EE5533`                                 | Anillo de enfoque de teclado: 2 px de distancia más 2 px de coral (3.5:1 contra blanco en modo de luz). |
| `shadow-segment`    | `0 0 #0000`                                                                  | `0 1px 2px rgba(0, 0, 0, 0.10), 0 0 0 0.5px rgba(0, 0, 0, 0.08)`       | Levantamiento de segmento seleccionado; ninguno (una sombra transparente) en modo oscuro.               |
| `shadow-knob`       | `0 0 #0000`                                                                  | `0 1px 2px rgba(0, 0, 0, 0.22), 0 0 0 0.5px rgba(0, 0, 0, 0.08)`       | Altura de lana de toggle; el cangrejo blanco lo necesita en la pista de luz.                            |

<a id="motion"></a>

## Motion

| Nombre            | Valor                            |
| ----------------- | -------------------------------- |
| `duration-fast`   | 120 ms                           |
| `duration-base`   | 200 ms                           |
| `duration-slow`   | 320 ms                           |
| `ease-standard`   | `cubic-bezier(0.2, 0.8, 0.2, 1)` |
| `ease-emphasized` | `cubic-bezier(0.3, 0, 0, 1)`     |
| `ease-exit`       | `cubic-bezier(0.4, 0, 1, 1)`     |

<a id="z-index"></a>

## Z-index

| Nombre       | Valor |
| ------------ | ----- |
| `z-base`     | 0     |
| `z-sticky`   | 10    |
| `z-dropdown` | 100   |
| `z-overlay`  | 200   |
| `z-modal`    | 300   |
| `z-popover`  | 400   |
| `z-toast`    | 500   |
| `z-tooltip`  | 600   |

<a id="layout"></a>

## - ¿Qué?

| Token de diseño                      | Valor                                                |
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

## Efectos

| Token de diseño     | Oscuro                                                                                                                                                            | Claro                 | Uso                                                                                                                                                                                                         |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `heroGlow`          | `radial-gradient(circle, rgba(205, 205, 255, 0.95) 0%, rgba(135, 135, 245, 0.78) 14%, rgba(92, 92, 220, 0.50) 32%, rgba(64, 64, 190, 0.20) 52%, transparent 70%)` | —                     | Destacado héroe violeta brillo.                                                                                                                                                                             |
| `coverGlow`         | `radial-gradient(circle, rgba(170, 170, 255, 0.55) 0%, rgba(110, 110, 235, 0.35) 16%, rgba(80, 80, 214, 0.18) 34%, rgba(60, 60, 180, 0.06) 52%, transparent 66%)` | —                     | Un resplandor más suave de la web-hero.                                                                                                                                                                     |
| `ring.stroke`       | `rgba(255, 255, 255, 0.13)`                                                                                                                                       | `rgba(0, 0, 0, 0.10)` |                                                                                                                                                                                                             |
| `ring.dasharray`    | `2 6`                                                                                                                                                             | —                     |                                                                                                                                                                                                             |
| `detailGlow`        | `radial-gradient(closest-side, {accent}73, {accent}2E 55%, transparent)`                                                                                          | —                     | El brillo de la cabeza de los detalles de la derecha superior; {accent} es el acento del paqueteColor (por defecto #3C96F5); 73/2E son valores alfa hexadecimal.                                            |
| `backdropBlur`      | `20`                                                                                                                                                              | —                     |                                                                                                                                                                                                             |
| `accentGlowOpacity` | `1`                                                                                                                                                               | `0.5`                 | Opacidad de los resplandores construidos a partir de un color de acento de paquete (encabezamiento de detalle, brillo de héroe personalizado); acentos saturados necesitan suavizarse en los fondos de luz. |
