[English](../../../layout.md) · [简体中文](../../zh-CN/docs/layout.md) · [繁體中文](../../zh-Hant/docs/layout.md) · [日本語](../../ja-JP/docs/layout.md) · [Español](../../es-ES/docs/layout.md) · **Português (Brasil)** · [Русский](../../ru-RU/docs/layout.md) · [Deutsch](../../de-DE/docs/layout.md) · [Français](../../fr-FR/docs/layout.md) · [Italiano](../../it-IT/docs/layout.md)

> O inglês é a fonte. As traduções são rascunhos feitos com tradução automática local e precisam de revisão humana. O código e os textos das licenças são preservados.

<a id="layout"></a>

# Disposição

<a id="spacing"></a>

## Espaço

Uma escala baseada em 4 px (`space.*`, também o UnoCSS/Tailwind espaçamento utilizado nos componentes:

| Passo | 0   | 0.5 | 1   | 1.5 | 2   | 2.5 | 3   | 3.5 | 4   | 5   | 6   | 7   | 8   | 10  | 12  | 16  | 20  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| px    | 0   | 2   | 4   | 6   | 8   | 10  | 12  | 14  | 16  | 20  | 24  | 28  | 32  | 40  | 48  | 64  | 80  |

Ritmo típico:

- 4–8 entre um ícone e sua etiqueta, chips em uma linha, um título e seu subtítulo.
- 10–14 dentro de linhas densas e entre controles em uma barra de ferramentas (itens da barra de ferramentas estão separados).
- 16–20 preenchimento de cartão (20 no trilho), 22 entre as secções ferroviárias.
- 24–28 entre as seções da página; 28 é a calha de conteúdo desktop.
- 40–80 entre as seções do site.

<a id="radius"></a>

## Raio

| Classe             | px  | Utilização                                                         |
| ------------------ | --- | ------------------------------------------------------------------ |
| `rounded-tiny`     | 4   | Dicas do teclado, etiquetas minúsculas, código em linha            |
| `rounded-small`    | 7   | Chips, entradas em linhas densas, segmentos, itens de menu         |
| `rounded-default`  | 10  | Botões, entradas, avisos, cartões pequenos                         |
| `rounded-panel`    | 12  | Menus, popovers, screenshots, list containers                      |
| `rounded-big`      | 14  | Cartões                                                            |
| `rounded-huge`     | 20  | Janelas, folhas, heróis de características, cabeçalhos de detalhes |
| `rounded-xl`       | 28  | Grandes painéis de marketing                                       |
| `rounded-full`     | —   | Pílulas, avatares, alternâncias, pontos                            |
| `rounded-app-icon` | 23% | Ladrilhos de ícones da aplicação (aproxima o macOS - Esbarrar)     |

Aninhados cantos encolhem: um elemento dentro de um recipiente acolchoado usa o próximo raio menor.

<a id="elevation"></a>

## Elevação

Elevação é cor mais sombra, nunca sombra sozinho:

| Nível | Superfície                                               | Sombra           | Exemplos                                              |
| ----- | -------------------------------------------------------- | ---------------- | ----------------------------------------------------- |
| 0     | `surface.base`                                           | —                | Conteúdo da janela                                    |
| 1     | `surface.card` + `border.subtle`                         | —                | Cartas, listas, grupos de configurações               |
| 2     | `surface.popover` / `surface.overlay` + `border.default` | `shadow.popover` | Menus, dicas, avisos flutuantes, paleta de comandos   |
| 3     | `component.modalBg` + `border.default`                   | `shadow.modal`   | Janelas, folhas                                       |
| —     | `component.toastBg`                                      | `shadow.toast`   | Brindes                                               |
| —     | —                                                        | `shadow.window`  | Molduras de janelas em imagens e modelos de marketing |

As sombras são pesadas e pretas no modo escuro, suaves no modo claro; as fichas carregam ambas. Sobrepõe- se acima do conteúdo borrar o que
Está por trás deles.`effect.backdropBlur`, 20 px).

<a id="layers"></a>

## Camadas

| `z-*`      | Valor | Utilização                                                          |
| ---------- | ----- | ------------------------------------------------------------------- |
| `base`     | 0     | Conteúdo                                                            |
| `sticky`   | 10    | Barras de ferramentas fixas, barras laterais, cabeçalhos de tabelas |
| `dropdown` | 100   | Menus, sobreposição de trilhos                                      |
| `overlay`  | 200   | Escribas                                                            |
| `modal`    | 300   | Janelas, folhas, caixa de luz                                       |
| `popover`  | 400   | Popovers acima das janelas                                          |
| `toast`    | 500   | Brindes                                                             |
| `tooltip`  | 600   | Dicas                                                               |

<a id="the-app-shell"></a>

## O shell da aplicação

Janela do ecrã (Tauri) — `OnAppShell` em modo recipiente:

```
┌──────────┬──────────────────────────────────────────────┬──────────┐
│ ● ● ●    │ toolbar · 52 px · back/forward · ⌘K search    │          │
│          ├──────────────────────────────────────────────┤  rail    │
│ sidebar  │ main · scrolls · 28 px gutters                │  288 px  │
│ 224 px   │                                              │ optional │
│          │                                              │          │
└──────────┴──────────────────────────────────────────────┴──────────┘
```

- Janela padrão 1280 × 820, mínimo 1100 × 700. Luzes de trânsito 18 × 22 sobre a barra lateral (barra de título sobreposta);
  a barra de ferramentas e o topo da barra lateral vazio são as regiões de arrasto da janela.
- Barra lateral: marca, navegação agrupada (`text-label` títulos de grupo, 13.5 itens px), configurações fixadas na parte inferior.
  Os rótulos têm cerca de 152 px; as traduções devem caber ([Conteúdo](content.md)).
- Rail: apenas em páginas que tenham uma, acoplada a 1240 px e mais ampla, caso contrário aberta da barra de ferramentas como uma sobreposição.
- Conteúdo principal: `px-28px pb-28px`, secções 24–28, cabeçalho da página (`text-title1` + uma linha de `text-body-sm`
  texto secundário) no topo.

Sítio Web — `OnAppShell` No modo documento para as páginas de armazenamento, um layout de aterragem de largura total para as páginas de marketing:

- Largura da página 1240 máx. com 24 calhas px; navegação superior 64 px; pontos de paragem `sm` 640, `md` 768, `lg` 1024, `xl` 1280,
  `2xl` 1440.
- Armazenar as páginas reutilizando a área de trabalho: barra lateral e barra de ferramentas são pegajosas de `md`; abaixo `md` uma barra compacta com menu
  substitui ambos; o trilho fica ao lado do conteúdo de `xl` e abaixo dela de outra forma.
- Páginas de marketing: hemorragia total `surface.page`, seções centradas, janelas de aplicativo simulado usando as mesmas tokens que o aplicativo.

<a id="grids"></a>

## Grades

- As grades de cartões preenchem colunas de, pelo menos, 260 px com lacunas de 12 px (`grid-cols-[repeat(auto-fill,minmax(260px,1fr))]`): três
  em uma janela de desktop completa, menos à medida que estreita. Grades de aplicativo Denser dentro de uma página com uma grade de trem usar 220 px.
- Azulejos estatísticos: 2 colunas no trilho, até 5 em uma página detalhada.
- Configurações: uma coluna de 720 px `OnCard` grupos com linhas (marcar + dica à esquerda, controlar à direita); navegação na secção
  esquerda a 180 px.
- Formulários na web: uma única coluna de 720 px; etiquetas acima dos campos.

<a id="density"></a>

## Densidade

UI Desktop é denso, mas não apertado: 32-40 linhas px em listas, controles de 28-34 px, texto de 13–13.5 px.
web são pelo menos 32 px (44 px para ações móveis primárias).
