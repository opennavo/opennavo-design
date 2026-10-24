[English](../../../color.md) · [简体中文](../../zh-CN/docs/color.md) · [繁體中文](../../zh-Hant/docs/color.md) · [日本語](../../ja-JP/docs/color.md) · [Español](../../es-ES/docs/color.md) · **Português (Brasil)** · [Русский](../../ru-RU/docs/color.md) · [Deutsch](../../de-DE/docs/color.md) · [Français](../../fr-FR/docs/color.md) · [Italiano](../../it-IT/docs/color.md)

> O inglês é a fonte. As traduções são rascunhos feitos com tradução automática local e precisam de revisão humana. O código e os textos das licenças são preservados.

<a id="color"></a>

# Cor

Toda a cor vem de tokens. Cada token de cor tem um valor escuro (o padrão) e, onde difere, um valor claro;
a [referência do token](reference/tokens.md) lista todos. Esta página explica os papéis, que é o que você precisa
Escolha o item certo. A mecânica do tema está em [Temas](theming.md).

<a id="how-the-two-themes-differ"></a>

## Como os dois temas diferem

- **Escuro** etapas sobressai em leveza: página `#0B0B0B` → base `#131313` → cartão `#1A1A1A` → aumentado `#262626`.
  Elevação diz como "iluminador".
- **Claro** mantém a mesma ordem mas não pode ficar mais branco do que o branco: página `#F2F2F2` → base `#F8F8F8` → cartão `#FFFFFF`.
  Painéis elevados são brancos com uma borda e uma sombra suave; preenche dentro das cartas brancas (`cardAlt`, `raised`, `chip`)
  São cinzentos, por isso lêem como recessos.
- As bordas são brancas translúcidas em modo escuro e pretas translúcidas em modo claro, com força semelhante.
- As cores de marca e status são mais profundas no modo de luz, então o texto mantém 4.5:1 no branco.

Nunca escolha uma cor por olho de uma imagem de um tema. Escolha o papel; o token carrega ambos os valores.

<a id="surfaces"></a>

## Superfícies

| Token de design   | Papel                        | Utilização para                                                                                                     | Não use para                                             |
| ----------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `surface.page`    | Fundo mais exterior          | Corpo do site, barra de navegação superior, área atrás das janelas flutuantes                                       | Áreas de conteúdo dentro do shell do aplicativo          |
| `surface.base`    | Fundo do conteúdo principal  | A coluna de conteúdo da aplicação, o fundo da janela                                                                | Cartões                                                  |
| `surface.sidebar` | Barra lateral                | A coluna de navegação esquerda                                                                                      | Qualquer outra coisa                                     |
| `surface.rail`    | Trilho direito               | O trilho estatístico opcional em janelas largas                                                                     | —                                                        |
| `surface.card`    | Cartões e painéis            | Cartas, recipientes de lista, grupos de configurações, popovers da barra de menus                                   | Painéis flutuantes sobre o conteúdo (utilizar `popover`) |
| `surface.cardAlt` | Dentro de uma carta          | Entradas, blocos secundários, destaque da linha da tabela, caixas de aviso dentro de um cartão                      | Fundo do nível da página                                 |
| `surface.raised`  | Hover e enchimentos pequenos | Fundos de hover, página atual na paginação, peças de ícones, `⌘K` dicas                                             | Painéis flutuantes; segmentos seleccionados              |
| `surface.chip`    | Emblemas neutros             | Chips neutros, dicas de teclado, pequenas etiquetas                                                                 | Botões (usar `button.secondary*`)                        |
| `surface.control` | Controlos                    | Entradas de texto e seleção em configurações, dicas                                                                 | Grandes áreas                                            |
| `surface.inset`   | Wells                        | Blocos de código, logs, faixas de controle segmentado, faixas de progresso                                          | Botões                                                   |
| `surface.overlay` | Sobreposição translúcida     | Menus e paleta de comandos, com um contexto de 20 px embaçado                                                       | Painéis opacos                                           |
| `surface.popover` | Painel flutuante             | Cartões de consentimento e sugestão, popovers demo — qualquer coisa flutuando sobre o conteúdo com `shadow.popover` | Teor em linha                                            |

Superfícies específicas dos componentes `component.*`: `modalBg` (diálogos e folhas), `searchBg` (campos de pesquisa e formulário
entradas em páginas), `navActive` (selecção da barra lateral), `segmentActive` (segmento seleccionado), `heroBg` (heroína de feitura),
`detailHeaderBg`, `toastBg`, `scrim` (por trás das janelas), `lightboxScrim` (visualizador de imagem, escuro em ambos os temas, por isso o
visualizador renderiza no tema escuro: [Theming › Subtrees](theming.md#subtrees)), `menuBarBg` / `menuBarText` (um in-app
Antevisão da macOS barra de menu).

<a id="text"></a>

## Texto

| Token de design  | Utilização                                                        | Escuro           | Claro           |
| ---------------- | ----------------------------------------------------------------- | ---------------- | --------------- |
| `text.primary`   | Rubricas, corpo sublinhado, números                               | 14.9.:1 na carta | 17.4:1 na carta |
| `text.secondary` | Texto do corpo, descrições                                        | 7.3:1            | 7.2:1           |
| `text.tertiary`  | Etiquetas, metadados, datas, dicas                                | 5.4:1            | 5.3:1           |
| `text.disabled`  | Apenas texto desactivado e puramente decorativo                   | —                | —               |
| `text.accent`    | Texto de Coral: links, chips de coral, enfatizadas ações em linha | 6.5:1            | 5.7:1           |
| `text.inverse`   | Texto e ícones em preenchimentos fortes (status, coral, salmão)   | escuro           | Branco          |
| `text.onAccent`  | Texto sobre botões de coral e crachás de coral                    | 7,2:1 em corais  | 5.5:1 em corais |

Regras:

- Use no máximo três níveis de texto em um componente. Terciário é o piso para qualquer coisa que um usuário deve ler.
- `text.disabled` Nunca traz informações: um controle deficiente deve ainda dizer por que ele está desativado nas proximidades.
- **`brand.coral` é um preenchimento, não uma cor de texto.** No branco é 3.5:1. Coral texto usa `text.accent`.
- Nunca colocar `text.tertiary` ligado `surface.chip` ou `surface.raised` para texto longo; use `text.secondary` Pronto.

<a id="borders"></a>

## Fronteiras

`border.subtle` para as bordas e divisórias das cartas, `border.default` para entradas, botões fantasma e janelas,
`border.strong` para pairar. `border.sidebar` separa a barra lateral. Painéis de estado usam a correspondência
`status.*Border` com a sua `status.*Subtle` Preencher.

<a id="brand"></a>

## Marca

| Token de design                                | Utilização                                                                                                                                |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `brand.coral`                                  | O acento da marca como um preenchimento ou gráfico: o botão de acento, progresso, comutações que estão em, anel de foco, pequenos pontos. |
| `brand.salmon`                                 | Texto de ênfase quente: sobrancelhas de seção, a segunda linha de um herói, emblemas de "atualização disponível".                         |
| `brand.violet`                                 | O brilho do herói. Também misturado em fundos de ícones coloridos em páginas de marketing.                                                |
| `brand.logoGradient`, `brand.logoCoreGradient` | A marca de logotipo apenas. O gradiente do núcleo muda para âmbar em fundos de luz.                                                       |

Tints de acento: `accent.coralSubtle` (pistas de progresso, chips de coral) e `accent.salmonSubtle` (emblemas de salmão). Texto sobre
as utilizações `text.accent` e `brand.salmon`.

Use coral com moderação: um botão de sotaque por vista, e nunca coral para erros (isto é, `status.danger`).

<a id="status"></a>

## Estado

| Família   | Meios                                                                        | Utilização típica                                                             |
| --------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `success` | Feito, instalado, saudável, atual                                            | Emblemas instalados, banners "Tudo é normal", linhas de log de sucesso        |
| `warning` | Precisa de atenção, precisa de permissão do administrador, resultado parcial | Itens ignorados, prompts de administração, chips "necessários de confirmação" |
| `danger`  | Falhado, despreparado, destrutivo                                            | Estados de falha, botões de perigo, ameaças encontradas                       |
| `info`    | Informações neutras, aplicativos de auto-atualização, links em documentos    | Avisos de informação, fichas de "auto-atualização"                            |

Cada família tem a cor sólida (texto, ícones, pontos), `*Subtle` (10% de fundos de cor) e `*Border` (painel tingido
Arestas). Par de cores com um ícone ou uma palavra — o estado nunca é comunicado apenas pela cor.

<a id="buttons"></a>

## Botões

| Variante    | Tokens de design                                            | Utilização                                                                                  |
| ----------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Primário    | `button.primary*` — quase-branco na luz escura, quase-negra | A acção principal de uma visão, uma por região.                                             |
| Secundário  | `button.secondary*`                                         | Outras acções. A variante por omissão.                                                      |
| Accent      | `button.accent*` (coral, texto escuro)                      | Um momento de marca: o herói chama à ação, "Atualizar tudo". Raramente mais de um por tela. |
| Fantasma    | transparente, `border.default`                              | Ações terciárias em barras de ferramentas e linhas densas.                                  |
| Perigo      | `status.dangerSubtle` + `status.danger`                     | Acções destrutivas. Nunca o botão por omissão de uma janela.                                |
| Desactivado | `button.disabled*`                                          | Controlos inactivos de qualquer variante.                                                   |

<a id="charts"></a>

## Gráficos

`chart.series1` (violeta), `chart.series2` (coral), `chart.series3` (verde) são as cores categóricas, escolhidas para ficar
distinguível para deficiências de visão de cores comuns; use-as nessa ordem e série de etiquetas diretamente quando lá
são mais de dois. Gráficos de série única usam `chart.emphasis` para o valor atual e `chart.deemphasis` para a história.
`chart.grid` e `chart.axis` são linhas de cabelo. Monitoramento de visualizações também pode usar o status e as cores de informação para o significado
(aviso de temperatura, rede para baixo/para cima).

<a id="contrast"></a>

## Contraste

Medida com a WCAG 2.2 Fórmula; `packages/tokens/tests` falha na compilação se algum par cair abaixo do seu alvo.

| Par                           | Alvo | Escuro (base / cartão / aumento) | Luz (base / cartão / aumento) |
| ----------------------------- | ---- | -------------------------------- | ----------------------------- |
| `text.primary`                | 4.5  | 15.9 / 14.9 / 12.9               | 16.4 / 17.4 / 14.9            |
| `text.secondary`              | 4.5  | 7.8 / 7.3 / 6.4                  | 6.8 / 7.2 / 6.2               |
| `text.tertiary`               | 4.5  | 5.7 / 5.4 / 4.7                  | 5.0 / 5.3 / 4.6               |
| `text.accent`                 | 4.5  | 6.9 / 6.5 / 5.6                  | 5.4 / 5.7 / 4.9               |
| `brand.salmon`                | 4.5  | 9.0 / 8.4 / 7.3                  | 5.4 / 5.7 / 4.9               |
| `status.success`              | 4.5  | 9.2 / 8.6 / 7.5                  | 5.3 / 5.6 / 4.8               |
| `status.warning`              | 4.5  | 10.1 / 9.5 / 8.2                 | 5.3 / 5.6 / 4.8               |
| `status.danger`               | 4.5  | 6.1 / 5.7 / 5.0                  | 5.4 / 5.7 / 4.9               |
| `status.info`                 | 4.5  | 7.3 / 6.8 / 5.9                  | 5.3 / 5.6 / 4.8               |
| `brand.coral` como um gráfico | 3.0  | 6.9 / 6.5 / 5.6                  | 3.3 / 3.5 / 3.0               |

Os testes também cobrem status e texto de sotaque em seus fundos coloridos (por cima da base, cartão e cardAlt), cada botão
estado, texto sobre coral, a telha terminal e texto monoespacial em poços.

<a id="do-and-dont"></a>

## Fazer e não fazer

- Utilizar `bg-surface-popover shadow-popover border border-line-default` para uma carta flutuante; não reutilize
  `surface.raised` — em modo de luz, é cinzento.
- Misture tons translúcidos de fichas (`color-mix(in srgb, var(--on-status-success) 14%, transparent)`) quando a
  o brilho de marketing precisa de um matiz; não escreva valores de hex ou rgba em componentes.
- Verifique ambos os temas antes de mesclar UI; a galeria e o aplicativo ambos alternam com uma única configuração.
