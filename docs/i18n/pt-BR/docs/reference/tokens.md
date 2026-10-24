[English](../../../../reference/tokens.md) · [简体中文](../../../zh-CN/docs/reference/tokens.md) · [繁體中文](../../../zh-Hant/docs/reference/tokens.md) · [日本語](../../../ja-JP/docs/reference/tokens.md) · [Español](../../../es-ES/docs/reference/tokens.md) · **Português (Brasil)** · [Русский](../../../ru-RU/docs/reference/tokens.md) · [Deutsch](../../../de-DE/docs/reference/tokens.md) · [Français](../../../fr-FR/docs/reference/tokens.md) · [Italiano](../../../it-IT/docs/reference/tokens.md)

> O inglês é a fonte. As traduções são rascunhos feitos com tradução automática local e precisam de revisão humana. O código e os textos das licenças são preservados.

<a id="token-reference"></a>

# Referência do item

<!-- Generated from tokens/tokens.json by packages/tokens/scripts/generate.ts; do not edit. After changing tokens.json, run `pnpm gen`. -->

Todo valor abaixo vem de `tokens/tokens.json`. Escuro é o tema padrão; a coluna Luz mostra o valor
o tema leve usa (um traço em significa que o token é o mesmo em ambos os temas). CSS variáveis são o que a web
pacotes emitem; a coluna de utilitários é a UnoCSS / Tailwind caule de classe (`bg-`, `text-`, `border-` ... + caule).
Flutter (`OnColors`) e SwiftUI (`OnColor`) usa o caminho camelCaso, por exemplo. `surface.cardAlt` → `surfaceCardAlt`.

<a id="color"></a>

## Cor

<a id="surfaces"></a>

### Superfícies

| Token de design   | CSS variável            | Utilitário         | Escuro                   | Claro                       | Utilização                                                                                                              |
| ----------------- | ----------------------- | ------------------ | ------------------------ | --------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `surface.page`    | `--on-surface-page`     | `surface-page`     | `#0B0B0B`                | `#F2F2F2`                   | Web exterior e fundo da janela.                                                                                         |
| `surface.base`    | `--on-surface-base`     | `surface-base`     | `#131313`                | `#F8F8F8`                   | Fundo do conteúdo principal.                                                                                            |
| `surface.sidebar` | `--on-surface-sidebar`  | `surface-sidebar`  | `#161616`                | `#F1F1F1`                   | Barra lateral da secretária.                                                                                            |
| `surface.rail`    | `--on-surface-rail`     | `surface-rail`     | `#141414`                | `#F5F5F5`                   | Caminho-de-ferro direito com resumos e acções secundárias.                                                              |
| `surface.card`    | `--on-surface-card`     | `surface-card`     | `#1A1A1A`                | `#FFFFFF`                   | Cartas.                                                                                                                 |
| `surface.cardAlt` | `--on-surface-card-alt` | `surface-card-alt` | `#1F1F1F`                | `#F5F5F5`                   | Entradas e blocos secundários dentro de cartões.                                                                        |
| `surface.raised`  | `--on-surface-raised`   | `surface-raised`   | `#262626`                | `#EDEDED`                   | Hover, seleção, peças de ícones; mais escuro do que as cartas no modo de luz, então os painéis flutuantes usam popover. |
| `surface.chip`    | `--on-surface-chip`     | `surface-chip`     | `#2A2A2A`                | `#EBEBEB`                   | Fundo do distintivo neutro.                                                                                             |
| `surface.control` | `--on-surface-control`  | `surface-control`  | `#2B2B2B`                | `#FFFFFF`                   | Entradas, dicas e controles secundários.                                                                                |
| `surface.inset`   | `--on-surface-inset`    | `surface-inset`    | `#111111`                | `#F0F0F0`                   | Blocos de código, registos, rastos de controlo segmentado.                                                              |
| `surface.overlay` | `--on-surface-overlay`  | `surface-overlay`  | `rgba(28, 28, 28, 0.92)` | `rgba(255, 255, 255, 0.94)` | Sobreposição com filtro de fundo: desfocado( 20px).                                                                     |
| `surface.popover` | `--on-surface-popover`  | `surface-popover`  | `#262626`                | `#FFFFFF`                   | Painéis flutuantes e avisos sobre conteúdo, tais como cartões de consentimento e sugestão.                              |

<a id="borders-utility-prefix-line"></a>

### Contornos (prefixo de utilidade) `line`)

| Token de design  | CSS variável          | Utilitário     | Escuro                      | Claro                 | Utilização                                  |
| ---------------- | --------------------- | -------------- | --------------------------- | --------------------- | ------------------------------------------- |
| `border.subtle`  | `--on-border-subtle`  | `line-subtle`  | `rgba(255, 255, 255, 0.07)` | `rgba(0, 0, 0, 0.08)` | Fronteiras de cartas e divisórias.          |
| `border.default` | `--on-border-default` | `line-default` | `rgba(255, 255, 255, 0.12)` | `rgba(0, 0, 0, 0.13)` | Entrada, botão fantasma e bordas da janela. |
| `border.strong`  | `--on-border-strong`  | `line-strong`  | `rgba(255, 255, 255, 0.20)` | `rgba(0, 0, 0, 0.22)` | Fronteiras de Hover.                        |
| `border.sidebar` | `--on-border-sidebar` | `line-sidebar` | `#1D1D1D`                   | `#E5E5E5`             | Barra lateral fronteira direita.            |

<a id="text-utility-prefix-ink"></a>

### Texto (prefixo de utilidade `ink`)

| Token de design  | CSS variável          | Utilitário      | Escuro    | Claro     | Utilização                                                                                                                           |
| ---------------- | --------------------- | --------------- | --------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `text.primary`   | `--on-text-primary`   | `ink-primary`   | `#EDEDED` | `#1A1A1A` | Títulos, texto de corpo enfatizado, números (14.9:1 em cartões escuros, 17.4:1 em cartões claros).                                   |
| `text.secondary` | `--on-text-secondary` | `ink-secondary` | `#A8A8A8` | `#575757` | Texto corporal e descrições (7.3:1 em cartões escuros, 7.2:1 em cartões claros).                                                     |
| `text.tertiary`  | `--on-text-tertiary`  | `ink-tertiary`  | `#8F8F8F` | `#6B6B6B` | Informações secundárias, rótulos, tempos (5.4:1 em cartões escuros, 4.7:1 em escuro levantadas; 5.3:1 e 4.6:1 em modo claro).        |
| `text.disabled`  | `--on-text-disabled`  | `ink-disabled`  | `#5C5C5C` | `#A6A6A6` | Apenas deficiente/decorativo; nunca transmita informações essenciais.                                                                |
| `text.inverse`   | `--on-text-inverse`   | `ink-inverse`   | `#141414` | `#FFFFFF` | Texto e ícones em preenchimentos sólidos (status, coral, salmão); escuro em modo escuro, branco em modo claro.                       |
| `text.onAccent`  | `--on-text-on-accent` | `ink-on-accent` | `#1B0A05` | —         | Texto sobre botões de corais/manchas (7.2.1).                                                                                        |
| `text.accent`    | `--on-text-accent`    | `ink-accent`    | `#FF7356` | `#B83A15` | Coral texto, links e ícones; brand.coral é para preenchimentos e gráficos (modo claro precisa de uma sombra mais escura para 4.5:1). |

<a id="brand"></a>

### Marca

| Token de design                 | CSS variável                             | Utilitário        | Escuro                            | Claro                 | Utilização                                                                                                                                 |
| ------------------------------- | ---------------------------------------- | ----------------- | --------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `brand.coral`                   | `--on-brand-coral`                       | `brand-coral`     | `#FF7356`                         | `#EE5533`             | Cor da marca primária para preenchimentos e gráficos: logotipo, progresso, emblemas, botões enfatizados. Para texto coral use text.accent. |
| `brand.salmon`                  | `--on-brand-salmon`                      | `brand-salmon`    | `#F99E70`                         | `#A74C1B`             | Texto enfatizado: segunda linha herói, crachás, atualizações disponíveis.                                                                  |
| `brand.violet`                  | `--on-brand-violet`                      | `brand-violet`    | `#5B5BD6`                         | —                     | Cor de brilho do herói primário.                                                                                                           |
| `brand.glowCore`                | `--on-brand-glow-core`                   | `brand-glow-core` | `#CDCDFF`                         | —                     | Destaque central brilhante.                                                                                                                |
| `brand.logoGradient`            | `--on-brand-logo-gradient`               | —                 | `#FFB347` → `#FF7356` → `#FF4E3A` | —                     | Gradiente do Logo N, de cima para baixo para baixo para a direita.                                                                         |
| `brand.logoCoreGradient`        | `--on-brand-logo-core-gradient`          | —                 | `#FFF6D6` → `#FFC861`             | `#FFB347` → `#FF8F3F` | Gradiente Logo Polaris em fundos escuros.                                                                                                  |
| `brand.logoCoreGradientOnLight` | `--on-brand-logo-core-gradient-on-light` | —                 | `#FFB347` → `#FF8F3F`             | —                     | Logo Polaris gradiente em fundos claros; branco quente desapareceria.                                                                      |

<a id="accent-tints"></a>

### Cor de acento

| Token de design       | CSS variável                | Utilitário             | Escuro                      | Claro                     | Utilização                                       |
| --------------------- | --------------------------- | ---------------------- | --------------------------- | ------------------------- | ------------------------------------------------ |
| `accent.coralSubtle`  | `--on-accent-coral-subtle`  | `accent-coral-subtle`  | `rgba(255, 115, 86, 0.12)`  | `rgba(238, 85, 51, 0.10)` | Trilhas de progresso e insígnias de atualização. |
| `accent.salmonSubtle` | `--on-accent-salmon-subtle` | `accent-salmon-subtle` | `rgba(249, 158, 112, 0.10)` | `rgba(167, 76, 27, 0.10)` | Distintivo e fundos de atualização disponíveis.  |

<a id="status"></a>

### Estado

| Token de design        | CSS variável                 | Utilitário              | Escuro                      | Claro                      | Utilização                                        |
| ---------------------- | ---------------------------- | ----------------------- | --------------------------- | -------------------------- | ------------------------------------------------- |
| `status.success`       | `--on-status-success`        | `status-success`        | `#3FCF6C`                   | `#187733`                  | Instalado, sucesso, atual.                        |
| `status.successSubtle` | `--on-status-success-subtle` | `status-success-subtle` | `rgba(63, 207, 108, 0.10)`  | `rgba(24, 119, 51, 0.10)`  |                                                   |
| `status.warning`       | `--on-status-warning`        | `status-warning`        | `#FAB219`                   | `#965A00`                  | Avisos e permissão de administrador necessária.   |
| `status.warningSubtle` | `--on-status-warning-subtle` | `status-warning-subtle` | `rgba(250, 178, 25, 0.10)`  | `rgba(150, 90, 0, 0.10)`   |                                                   |
| `status.danger`        | `--on-status-danger`         | `status-danger`         | `#FF5D51`                   | `#C22B21`                  | Falha, desactualizada, apagada.                   |
| `status.dangerSubtle`  | `--on-status-danger-subtle`  | `status-danger-subtle`  | `rgba(255, 93, 81, 0.10)`   | `rgba(194, 43, 33, 0.10)`  |                                                   |
| `status.info`          | `--on-status-info`           | `status-info`           | `#66A4FA`                   | `#1564CD`                  | Auto-atualização, links, informações.             |
| `status.infoSubtle`    | `--on-status-info-subtle`    | `status-info-subtle`    | `rgba(102, 164, 250, 0.10)` | `rgba(21, 100, 205, 0.10)` |                                                   |
| `status.successBorder` | `--on-status-success-border` | `status-success-border` | `rgba(63, 207, 108, 0.20)`  | `rgba(24, 119, 51, 0.24)`  | Borda de painéis pintados com sucessoSútil.       |
| `status.warningBorder` | `--on-status-warning-border` | `status-warning-border` | `rgba(250, 178, 25, 0.25)`  | `rgba(150, 90, 0, 0.24)`   | Borda de painéis pintados com avisoSútil.         |
| `status.dangerBorder`  | `--on-status-danger-border`  | `status-danger-border`  | `rgba(255, 93, 81, 0.25)`   | `rgba(194, 43, 33, 0.24)`  | Borda de painéis pintados de perigo.              |
| `status.infoBorder`    | `--on-status-info-border`    | `status-info-border`    | `rgba(102, 164, 250, 0.25)` | `rgba(21, 100, 205, 0.24)` | Borda de painéis coloridos com informaçõesSubtle. |

<a id="buttons"></a>

### Botões

| Token de design           | CSS variável                    | Utilitário                 | Escuro    | Claro     | Utilização |
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

### Gráficos

| Token de design    | CSS variável            | Utilitário         | Escuro    | Claro     | Utilização                                                                                              |
| ------------------ | ----------------------- | ------------------ | --------- | --------- | ------------------------------------------------------------------------------------------------------- |
| `chart.series1`    | `--on-chart-series1`    | `chart-series1`    | `#7B72EE` | `#6A61E8` | Categoria cor 1, violeta.                                                                               |
| `chart.series2`    | `--on-chart-series2`    | `chart-series2`    | `#E0663F` | `#D9572E` | Categoria cor 2, coral.                                                                                 |
| `chart.series3`    | `--on-chart-series3`    | `chart-series3`    | `#1E9E72` | `#168A62` | Categoria cor 3, ciano; todos os três verificados para acessibilidade/contraste de cor-cego em #1A1A1A. |
| `chart.emphasis`   | `--on-chart-emphasis`   | `chart-emphasis`   | `#F99E70` | `#D0602A` | Ênfase da série única, período actual.                                                                  |
| `chart.deemphasis` | `--on-chart-deemphasis` | `chart-deemphasis` | `#4A4A4A` | `#CFCFCF` | Série única de ênfase, período histórico.                                                               |
| `chart.grid`       | `--on-chart-grid`       | `chart-grid`       | `#2C2C2A` | `#EBEBEB` |                                                                                                         |
| `chart.axis`       | `--on-chart-axis`       | `chart-axis`       | `#383838` | `#D6D6D6` |                                                                                                         |

<a id="component-colors"></a>

### Cores dos componentes

| Token de design            | CSS variável                      | Utilitário                   | Escuro                      | Claro                       | Utilização                                                                                                                                        |
| -------------------------- | --------------------------------- | ---------------------------- | --------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `component.searchBg`       | `--on-component-search-bg`        | `component-search-bg`        | `#1C1C1C`                   | `#FFFFFF`                   | Campo de busca e fundo de entrada.                                                                                                                |
| `component.cardHover`      | `--on-component-card-hover`       | `component-card-hover`       | `#1D1D1D`                   | `#FAFAFA`                   | Cartão interativo paira fundo.                                                                                                                    |
| `component.toggleTrack`    | `--on-component-toggle-track`     | `component-toggle-track`     | `#333333`                   | `#D9D9D9`                   | Desligar a faixa.                                                                                                                                 |
| `component.toggleKnob`     | `--on-component-toggle-knob`      | `component-toggle-knob`      | `#BDBDBD`                   | `#FFFFFF`                   | Desliga o polegar.                                                                                                                                |
| `component.toggleKnobOn`   | `--on-component-toggle-knob-on`   | `component-toggle-knob-on`   | `#FFFFFF`                   | —                           | Activar o polegar.                                                                                                                                |
| `component.tabIndicator`   | `--on-component-tab-indicator`    | `component-tab-indicator`    | `#FFFFFF`                   | `#1A1A1A`                   | Indicador de tabulação seleccionado.                                                                                                              |
| `component.navActive`      | `--on-component-nav-active`       | `component-nav-active`       | `#202020`                   | `#E3E3E3`                   | Fundo de navegação da barra lateral seleccionado.                                                                                                 |
| `component.heroBg`         | `--on-component-hero-bg`          | `component-hero-bg`          | `#0E0E10`                   | `#F4F3FD`                   | Fundo da carta de herói em destaque.                                                                                                              |
| `component.captionBg`      | `--on-component-caption-bg`       | `component-caption-bg`       | `rgba(0, 0, 0, 0.55)`       | —                           | Captura de tela inferior- esquerda legenda de fundo; escuro em ambos os temas, então a legenda renderiza no tema escuro (tema de dados='escuro'). |
| `component.topNavScrolled` | `--on-component-top-nav-scrolled` | `component-top-nav-scrolled` | `rgba(11, 11, 11, 0.85)`    | `rgba(242, 242, 242, 0.85)` | Fundo de navegação web escancada: superfície.page a 85% com filtro de fundo: borrão(20px).                                                        |
| `component.scrim`          | `--on-component-scrim`            | `component-scrim`            | `rgba(0, 0, 0, 0.50)`       | `rgba(0, 0, 0, 0.30)`       | Fundo da janela/folha.                                                                                                                            |
| `component.lightboxScrim`  | `--on-component-lightbox-scrim`   | `component-lightbox-scrim`   | `rgba(0, 0, 0, 0.88)`       | —                           | Fundo da caixa de luz de captura de tela; escuro em ambos os temas, então a caixa de luz renderiza no tema escuro (tema de dados='escuro').       |
| `component.modalBg`        | `--on-component-modal-bg`         | `component-modal-bg`         | `#171717`                   | `#FFFFFF`                   | Fundo do painel de diálogo/folha.                                                                                                                 |
| `component.toastBg`        | `--on-component-toast-bg`         | `component-toast-bg`         | `rgba(44, 44, 44, 0.92)`    | `rgba(255, 255, 255, 0.94)` | Fundo do brinde com filtro de fundo: desfocado( 20px).                                                                                            |
| `component.itemActive`     | `--on-component-item-active`      | `component-item-active`      | `rgba(255, 255, 255, 0.07)` | `rgba(0, 0, 0, 0.06)`       | O fundo do item menu/comando-palette atual.                                                                                                       |
| `component.runningBorder`  | `--on-component-running-border`   | `component-running-border`   | `rgba(255, 115, 86, 0.25)`  | `rgba(238, 85, 51, 0.40)`   | Fronteira de cartões de tarefa ativa, corais a 25%.                                                                                               |
| `component.logHeading`     | `--on-component-log-heading`      | `component-log-heading`      | `#E8E8E8`                   | `#1A1A1A`                   | Linhas de passo de log começando com ==>.                                                                                                         |
| `component.logSuccess`     | `--on-component-log-success`      | `component-log-success`      | `#7FD88F`                   | `#187733`                   | Linhas de registo bem sucedidas.                                                                                                                  |
| `component.monoText`       | `--on-component-mono-text`        | `component-mono-text`        | `#D0D0D0`                   | `#333333`                   | Texto de tabela monoespacial, como versões.                                                                                                       |
| `component.timelineLine`   | `--on-component-timeline-line`    | `component-timeline-line`    | `#333333`                   | `#D6D6D6`                   | Início da linha do tempo, desvanecendo através de superficie.raised para transparente.                                                            |
| `component.timelineDot`    | `--on-component-timeline-dot`     | `component-timeline-dot`     | `#3A3A3A`                   | `#C4C4C4`                   | Pontos de entrada de linha do tempo normais.                                                                                                      |
| `component.sourceMeta`     | `--on-component-source-meta`      | `component-source-meta`      | `#555555`                   | `#B0B0B0`                   | Pontos auxiliares, tais como GitHub metadados em fontes de lançamento.                                                                            |
| `component.collectionFrom` | `--on-component-collection-from`  | `component-collection-from`  | `#1D1A26`                   | `#F1EEFB`                   | Começar o gradiente da carta de recolha, 160°.                                                                                                    |
| `component.collectionTo`   | `--on-component-collection-to`    | `component-collection-to`    | `#161616`                   | `#FFFFFF`                   | O gradiente da carta de recolha termina em 70%.                                                                                                   |
| `component.collectionRing` | `--on-component-collection-ring`  | `component-collection-ring`  | `#1B1922`                   | `#F8F7FD`                   | Fronteira de icon empilhada da colecção.                                                                                                          |
| `component.detailHeaderBg` | `--on-component-detail-header-bg` | `component-detail-header-bg` | `#171717`                   | `#FFFFFF`                   | Detalhe fundo da placa de cabeçalho abaixo do brilho.                                                                                             |
| `component.cliIconFrom`    | `--on-component-cli-icon-from`    | `component-cli-icon-from`    | `#2A2A2A`                   | —                           | Iniciação do gradiente da linha de comando.                                                                                                       |
| `component.cliIconTo`      | `--on-component-cli-icon-to`      | `component-cli-icon-to`      | `#1B1B1B`                   | —                           | Fim do gradiente da linha de comando.                                                                                                             |
| `component.cliIconText`    | `--on-component-cli-icon-text`    | `component-cli-icon-text`    | `#E2E2E2`                   | —                           | Texto da linha de comando.                                                                                                                        |
| `component.letterIconText` | `--on-component-letter-icon-text` | `component-letter-icon-text` | `#FFFFFF`                   | —                           | Texto de papel, decorativo porque os nomes aparecem sempre ao lado.                                                                               |
| `component.segmentActive`  | `--on-component-segment-active`   | `component-segment-active`   | `#262626`                   | `#FFFFFF`                   | Selecção do segmento de um controlo segmentado.                                                                                                   |
| `component.menuBarBg`      | `--on-component-menu-bar-bg`      | `component-menu-bar-bg`      | `rgba(38, 38, 40, 0.96)`    | `rgba(246, 246, 246, 0.96)` | Pré-visualização no aplicativo do macOS menu barra strip.                                                                                         |
| `component.menuBarText`    | `--on-component-menu-bar-text`    | `component-menu-bar-text`    | `#E6E6E6`                   | `#1F1F1F`                   | Itens de antevisão da barra de menu, desenhados como imagens de modelo do AppKit.                                                                 |

<a id="macos-window-controls"></a>

### macOS controles de janelas

| Token de design  | CSS variável          | Utilitário       | Escuro    | Claro | Utilização |
| ---------------- | --------------------- | ---------------- | --------- | ----- | ---------- |
| `macos.close`    | `--on-macos-close`    | `macos-close`    | `#FF5F57` | —     |            |
| `macos.minimize` | `--on-macos-minimize` | `macos-minimize` | `#FEBC2E` | —     |            |
| `macos.zoom`     | `--on-macos-zoom`     | `macos-zoom`     | `#28C840` | —     |            |

<a id="typography"></a>

## Tipografia

Classe `text-{name}` define tamanho, altura da linha, peso e rastreamento juntos.

| Nome        | Classe          | Tamanho / altura da linha | Peso | Rastreamento        | Utilização                                                   |
| ----------- | --------------- | ------------------------- | ---- | ------------------- | ------------------------------------------------------------ |
| `hero`      | `text-hero`     | 76 / 78 px                | 600  | - 0.035em           | Cabeçalho do herói da página inicial da Web                  |
| `section`   | `text-section`  | 46 / 50 px                | 600  | - 0.03em            | Cabeçalho da secção Web                                      |
| `display`   | `text-display`  | 40 / 44 px                | 600  | - 0.03em            | Cabeçalho do herói em destaque                               |
| `title1`    | `text-title1`   | 28 / 34 px                | 600  | - 0.02em            | Cabeçalho da página                                          |
| `title2`    | `text-title2`   | 22 / 28 px                | 600  | - 0.02em            | Título da janela e cabeçalho de detalhes compactos           |
| `headline`  | `text-headline` | 16 / 24 px                | 600  | - 0.01em            | Rubrica da secção                                            |
| `statValue` | `text-stat`     | 20 / 26 px                | 600  | - 0.015em           | Valores estatísticos com numerais proporcionais              |
| `body`      | `text-body`     | 22 / 2                    | 400  | 0                   | Texto do corpo                                               |
| `bodySm`    | `text-body-sm`  | 13 / 20 px                | 400  | 0                   | Texto da lista e do corpo da tabela                          |
| `caption`   | `text-caption`  | 12 / 18 px                | 400  | 0                   | Informações secundárias                                      |
| `label`     | `text-label`    | 11 / 16 px                | 600  | 0, 08em, maiúsculas | Rótulos de grupo, como os títulos de secção da barra lateral |
| `mono`      | `text-mono`     | 12 / 18 px                | 400  | 0                   | Comandos, versões e logs                                     |

| Família de fontes | Pilha                                                                                                                                                      |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sans`            | Inter Variável, Inter, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans SC, -sistema de maçã, BlinkMacSystemFont, Helvetica Neue, sans-serif      |
| `sansZh`          | Inter Variável, Inter, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans SC, -sistema de maçã, BlinkMacSystemFont, Helvetica Neue, sans-serif      |
| `sansJa`          | Inter Variável, Inter, Hiragino Sans, Hiragino Kaku Gótico ProN, Yu Gótico, Noto Sans JP, -sistema de maçã, BlinkMacSystemFont, Helvetica Neue, sans-serif |
| `mono`            | SF Mono, JetBrains Mono, ui-monoespaço, Menlo, Consolas, Liberation Mono, monoespaço                                                                       |

<a id="spacing"></a>

## Espaço

| Nome  | CSS variável     | Valor | Utilização |
| ----- | ---------------- | ----- | ---------- |
| `0`   | `--on-space-0`   | 0px   |            |
| `1`   | `--on-space-1`   | 4px   |            |
| `2`   | `--on-space-2`   | 8px   |            |
| `3`   | `--on-space-3`   | 12px  |            |
| `4`   | `--on-space-4`   | 16px  |            |
| `5`   | `--on-space-5`   | 20px  |            |
| `6`   | `--on-space-6`   | 24px  |            |
| `7`   | `--on-space-7`   | 28px  |            |
| `8`   | `--on-space-8`   | 32px  |            |
| `10`  | `--on-space-10`  | 40px  |            |
| `12`  | `--on-space-12`  | 48px  |            |
| `16`  | `--on-space-16`  | 64px  |            |
| `20`  | `--on-space-20`  | 80px  |            |
| `0-5` | `--on-space-0-5` | 2px   |            |
| `1-5` | `--on-space-1-5` | 6px   |            |
| `2-5` | `--on-space-2-5` | 10px  |            |
| `3-5` | `--on-space-3-5` | 14px  |            |

<a id="radius"></a>

## Raio

| Nome               | CSS variável           | Valor  | Utilização                                                                                 |
| ------------------ | ---------------------- | ------ | ------------------------------------------------------------------------------------------ |
| `rounded-tiny`     | `--on-radius-tiny`     | 4px    |                                                                                            |
| `rounded-small`    | `--on-radius-small`    | 7px    |                                                                                            |
| `rounded-default`  | `--on-radius-default`  | 10px   |                                                                                            |
| `rounded-panel`    | `--on-radius-panel`    | 12px   | Cartões de captura de tela, menus, sobreposições.                                          |
| `rounded-big`      | `--on-radius-big`      | 14px   |                                                                                            |
| `rounded-huge`     | `--on-radius-huge`     | 20px   |                                                                                            |
| `rounded-xl`       | `--on-radius-xl`       | 28px   |                                                                                            |
| `rounded-full`     | `--on-radius-full`     | 9999px |                                                                                            |
| `rounded-app-icon` | `--on-radius-app-icon` | 23%    | Raio do ícone da aplicação: 23% de comprimento lateral, aproximando macOS Super-espíritos. |

<a id="shadows"></a>

## Sombras

| Nome                | Escuro                                                                       | Claro                                                                  | Utilização                                                                           |
| ------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `shadow-window`     | `0 50px 140px rgba(0, 0, 0, 0.65), 0 0 0 0.5px #000000`                      | `0 40px 100px rgba(0, 0, 0, 0.16), 0 0 0 0.5px rgba(0, 0, 0, 0.16)`    |                                                                                      |
| `shadow-popover`    | `0 24px 60px rgba(0, 0, 0, 0.60)`                                            | `0 12px 40px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04)`       |                                                                                      |
| `shadow-modal`      | `0 30px 80px rgba(0, 0, 0, 0.60)`                                            | `0 24px 64px rgba(0, 0, 0, 0.16)`                                      |                                                                                      |
| `shadow-toast`      | `0 18px 40px rgba(0, 0, 0, 0.50)`                                            | `0 10px 30px rgba(0, 0, 0, 0.12)`                                      |                                                                                      |
| `shadow-float-icon` | `0 18px 30px rgba(0, 0, 0, 0.55)`                                            | `0 14px 28px rgba(0, 0, 0, 0.16)`                                      |                                                                                      |
| `shadow-app-icon`   | `inset 0 0 0 0.5px rgba(255, 255, 255, 0.14), 0 1px 2px rgba(0, 0, 0, 0.40)` | `inset 0 0 0 0.5px rgba(0, 0, 0, 0.10), 0 1px 2px rgba(0, 0, 0, 0.12)` |                                                                                      |
| `shadow-icon-text`  | `0 1px 2px rgba(0, 0, 0, 0.30)`                                              | —                                                                      | Sombras de texto preservam a legibilidade em fundos de luz.                          |
| `shadow-focus-ring` | `0 0 0 2px #131313, 0 0 0 4px #FF7356`                                       | `0 0 0 2px #FFFFFF, 0 0 0 4px #EE5533`                                 | Anel de foco do teclado: 2 px gap mais 2 px coral (3,5:1 contra branco no modo luz). |
| `shadow-segment`    | `0 0 #0000`                                                                  | `0 1px 2px rgba(0, 0, 0, 0.10), 0 0 0 0.5px rgba(0, 0, 0, 0.08)`       | Elevador de segmento selecionado; nenhum (uma sombra transparente) em modo escuro.   |
| `shadow-knob`       | `0 0 #0000`                                                                  | `0 1px 2px rgba(0, 0, 0, 0.22), 0 0 0 0.5px rgba(0, 0, 0, 0.08)`       | Alterna o botão de elevação; o botão branco precisa dele na faixa de luz.            |

<a id="motion"></a>

## Moção

| Nome              | Valor                            |
| ----------------- | -------------------------------- |
| `duration-fast`   | 120 ms                           |
| `duration-base`   | 200 ms                           |
| `duration-slow`   | 320 ms                           |
| `ease-standard`   | `cubic-bezier(0.2, 0.8, 0.2, 1)` |
| `ease-emphasized` | `cubic-bezier(0.3, 0, 0, 1)`     |
| `ease-exit`       | `cubic-bezier(0.4, 0, 1, 1)`     |

<a id="z-index"></a>

## Índice Z

| Nome         | Valor |
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

## Disposição

| Token de design                      | Valor                                                |
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

## Efeitos

| Token de design     | Escuro                                                                                                                                                            | Claro                 | Utilização                                                                                                                                                                     |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `heroGlow`          | `radial-gradient(circle, rgba(205, 205, 255, 0.95) 0%, rgba(135, 135, 245, 0.78) 14%, rgba(92, 92, 220, 0.50) 32%, rgba(64, 64, 190, 0.20) 52%, transparent 70%)` | —                     | O herói em destaque violeta brilho.                                                                                                                                            |
| `coverGlow`         | `radial-gradient(circle, rgba(170, 170, 255, 0.55) 0%, rgba(110, 110, 235, 0.35) 16%, rgba(80, 80, 214, 0.18) 34%, rgba(60, 60, 180, 0.06) 52%, transparent 66%)` | —                     | Brilho web-herói mais suave.                                                                                                                                                   |
| `ring.stroke`       | `rgba(255, 255, 255, 0.13)`                                                                                                                                       | `rgba(0, 0, 0, 0.10)` |                                                                                                                                                                                |
| `ring.dasharray`    | `2 6`                                                                                                                                                             | —                     |                                                                                                                                                                                |
| `detailGlow`        | `radial-gradient(closest-side, {accent}73, {accent}2E 55%, transparent)`                                                                                          | —                     | Brilho de cabeça de detalhe superior-direita; {accent} é acento de pacoteColor (padrão #3C96F5); 73/2E são valores alfa hexadecimais.                                          |
| `backdropBlur`      | `20`                                                                                                                                                              | —                     |                                                                                                                                                                                |
| `accentGlowOpacity` | `1`                                                                                                                                                               | `0.5`                 | Opacidade de brilhos construídos a partir de um pacote de cor acento ( cabeçalho detail, brilho de herói personalizado); acentos saturados precisam suavizar em fundos de luz. |
