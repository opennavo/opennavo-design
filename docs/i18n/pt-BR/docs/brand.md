[English](../../../brand.md) · [简体中文](../../zh-CN/docs/brand.md) · [繁體中文](../../zh-Hant/docs/brand.md) · [日本語](../../ja-JP/docs/brand.md) · [Español](../../es-ES/docs/brand.md) · **Português (Brasil)** · [Русский](../../ru-RU/docs/brand.md) · [Deutsch](../../de-DE/docs/brand.md) · [Français](../../fr-FR/docs/brand.md) · [Italiano](../../it-IT/docs/brand.md)

> O inglês é a fonte. As traduções são rascunhos feitos com tradução automática local e precisam de revisão humana. O código e os textos das licenças são preservados.

<a id="brand"></a>

# Marca

OpenNavo Design é compartilhado por uma família de aplicativos. Eles compartilham tudo, exceto uma camada de marca fina, então uma pessoa que sabe
um aplicativo já conhece os outros.

<a id="the-brand-layer"></a>

## A camada da marca

Um aplicativo pode alterar apenas estes tokens (com ambos os valores do tema):

| Token de design                                                                      | O que carrega                                                                                             |
| ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| `brand.coral`                                                                        | O preenchimento do acento: botões de acento, alternância, progresso, cor do anel de foco, pequenos pontos |
| `text.accent`                                                                        | Texto e links coloridos com sotaque                                                                       |
| `accent.coralSubtle`                                                                 | Tons de sotaque atrás de chips e faixas de progresso                                                      |
| `button.accentBg`, `button.accentHover`, `button.accentPressed`, `button.accentText` | O botão de acento                                                                                         |
| `shadow.focusRing`                                                                   | O anel de focagem (mantenha a abertura de 2 px + forma de anel de 2 px)                                   |
| `component.runningBorder`                                                            | A borda de uma tarefa em execução                                                                         |
| `brand.salmon`, `accent.salmonSubtle`                                                | Texto de ênfase e crachás quentes                                                                         |
| `brand.violet`, `effect.heroGlow`, `effect.coverGlow`                                | O herói brilha                                                                                            |
| `brand.logoGradient`, `brand.logoCoreGradient`                                       | A marca própria da aplicação                                                                              |

Os nomes dos token permanecem os mesmos (`brand.coral` mantém seu nome mesmo quando o sotaque de um aplicativo é azul) assim componentes e documentos
nunca fork. Gere tokens de uma aplicação com um arquivo de substituição ([Temas › Re-branding](theming.md#re-branding-another-app))
e manter os testes de contraste verdes: texto acento ainda deve atingir 4.5:1 em ambos os temas e o preenchimento acento 3:1.

Tudo o resto — neutros, cores de estado, tipo, espaçamento, raios, movimento, componentes e padrões — é o mesmo em
Cada aplicação.

<a id="names-and-marks"></a>

## Nomes e marcas

- Cada aplicativo tem seu próprio nome e marca. `brand` entalhe; o sistema de projeto de navios não
  logótipo.
- A OpenNavo nome e logotipo são marcas comerciais do OpenNavo autores e são **não** coberto por este repositório MIT
  licença ([MARCAS COMERCIAIS.md](../TRADEMARKS.md)). Apps construídos no sistema não deve usá-los como seu próprio nome ou ícone.
- O prefixo do componente `On` e o CSS prefixo `--on-` pertence ao sistema, não a um produto; guarde-os.

<a id="using-the-mark-well-for-opennavo-itself"></a>

## Utilizar bem a marca (para OpenNavo si próprio)

- O wordmark fica ao lado da marca a 15 px, peso 600, em `brand.coral`; a marca tem 22 px de altura ao lado dele.
- Abaixo de 32 px a marca usa sua geometria simplificada. Mantenha espaço livre de pelo menos metade da altura da marca.
- No fundo da luz, a estrela na marca muda para o gradiente de núcleo âmbar; nunca coloque a marca em uma imagem ocupada.
