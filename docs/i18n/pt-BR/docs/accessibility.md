[English](../../../accessibility.md) · [简体中文](../../zh-CN/docs/accessibility.md) · [繁體中文](../../zh-Hant/docs/accessibility.md) · [日本語](../../ja-JP/docs/accessibility.md) · [Español](../../es-ES/docs/accessibility.md) · **Português (Brasil)** · [Русский](../../ru-RU/docs/accessibility.md) · [Deutsch](../../de-DE/docs/accessibility.md) · [Français](../../fr-FR/docs/accessibility.md) · [Italiano](../../it-IT/docs/accessibility.md)

> O inglês é a fonte. As traduções são rascunhos feitos com tradução automática local e precisam de revisão humana. O código e os textos das licenças são preservados.

<a id="accessibility"></a>

# Acessibilidade

O alvo é WCAG 2.2 AA em ambos os temas. A maior parte é incorporada nos tokens e componentes; esta página lista o que
apps não devem desfazer.

<a id="contrast"></a>

## Contraste

- Texto 4.5:1 contra o seu fundo real, incluindo emblemas coloridos e preenchimentos hover; grande texto de exibição (24 px+, ou
  19 px+ em 600) 3:1. Os testes de token obrigam os pares em [Cor › Contraste](color.md#contrast).
- Ícones que carregam significado, marcas de gráfico, bordas de entrada e o anel de foco: 3:1.
- Texto decorativo (`text.disabled`, marcas d'água) não traz nenhuma informação.

<a id="keyboard"></a>

## Teclado

- Tudo alcançável com Tab em ordem visual; nada focal é invisível.
- **Anel de foco:** `shadow-focus-ring` ligado `:focus-visible` — um intervalo de 2 px na cor da superfície mais um anel de 2 px coral.
  Nunca o remova sem um equivalente.
- **Elementos compósitos** usar foco de roving (uma parada Tab, setas dentro): controles segmentados (`radiogroup`), tabs
  (`tablist`), barras de chips, menus (`menu` com `menuitem` / `menuitemradio`), a paleta de comandos (`combobox` +
  `listbox`).
- **Sobreposições** mover foco dentro em abrir, armadilhar Tab, fechar em Escapar e voltar foco para o elemento que os abriu.
  O foco movido por script não mostra um anel quando o usuário abriu a sobreposição com o ponteiro.
- **Atalhos** siga a plataforma (em busca, em busca, em configurações, em busca, em fuga) e são mostrados em
  menus e dicas, nunca necessárias.

<a id="screen-readers"></a>

## Leitores de tela

- Usar primeiro o elemento semântico (`button`, `a`, `nav`, `main`, `h1`–`h3`, `table`); componentes adicionar funções apenas onde
  HTML não tem nenhum.
- Os controlos só de ícones têm `aria-label`; ícones decorativos e ícones de aplicativos ao lado de seus nomes são `aria-hidden`.
- Página atual `aria-current="page"`; comuta `role="switch"` com `aria-checked`; botões de ocupado `aria-busy`.
- Brindes: falhas `role="alert"`, outras uma região ao vivo educada. O progresso tem um texto equivalente ("1,2 de 3,4 GB").
- Os gráficos têm um resumo de texto ou uma tabela equivalente; as linhas de luz são marcadas com o seu valor atual.

<a id="motion-and-timing"></a>

## Moção e calendário

- Respeito "reduzir movimento" (`base.css` puxadores CSS; JavaScript animação deve verificar `matchMedia`).
- Os brindes param enquanto pairam; nada de importante desaparece em um timer sem uma maneira de encontrá-lo novamente (história,
  lista de tarefas).

<a id="pointer-and-touch"></a>

## Apontador e toque

- Alvos de pelo menos 24 × 24 px em interfaces de mesa densas, 32 px para controles primários, 44 px para ações web móveis primárias.
- Hover não revela nada que os usuários de teclado e toque não podem alcançar.

<a id="language"></a>

## Idioma

Definir `lang` ligado `<html>` e em qualquer passagem em outra língua, então leitores de tela e fontes mudar. Nunca transmitir
significando por cor, posição ou forma sozinho: status pares de cor com um ícone e uma palavra.
