[English](../../../iconography.md) · [简体中文](../../zh-CN/docs/iconography.md) · [繁體中文](../../zh-Hant/docs/iconography.md) · [日本語](../../ja-JP/docs/iconography.md) · [Español](../../es-ES/docs/iconography.md) · **Português (Brasil)** · [Русский](../../ru-RU/docs/iconography.md) · [Deutsch](../../de-DE/docs/iconography.md) · [Français](../../fr-FR/docs/iconography.md) · [Italiano](../../it-IT/docs/iconography.md)

> O inglês é a fonte. As traduções são rascunhos feitos com tradução automática local e precisam de revisão humana. O código e os textos das licenças são preservados.

<a id="iconography"></a>

# Iconografia

<a id="interface-icons"></a>

## Ícones de interface

- **Conjunto:** [Lucide](https://lucide.dev) (ISC licença), empacotada como um subconjunto offline — apenas ícones listados em
  `packages/vue/src/icons/names.ts` nave, renderizada como SVG em linha para que eles trabalhem em SSR e sem uma rede.
- **Tamanhos:** 16 px em menus e navegação, 15 px em `md`/`lg` botões, 14 px in `xs`/`sm` botões e fichas, 12–13 px
  em linha com metadados. Ícones dentro de uma renderização de 26-32 px em 14-16 px.
- **Curso e cor:** Lucide2 px a 24 px, em escala; os ícones tomam `currentColor`, então eles seguem o texto
  símbolo do seu contexto. Não colorir os ícones de forma independente, a menos que carreguem o estado.
- **Significado:** um ícone por conceito em todo o aplicativo (por exemplo `circle-arrow-down` para actualizações, `shield-check` em vez
  segurança, `eraser` para limpeza). Os botões só de ícones têm sempre `aria-label` e uma dica.
- **Adicionando ícones:** o pacote agrupa apenas os ícones que os seus componentes desenham. Um aplicativo adiciona o seu próprio
  `registerIcons(getIcons(lucide, ['compass', 'settings']))` (`@iconify/utils` + `@iconify-json/lucide`, ou qualquer conjunto
  Iconificar JSON forma, abordada como `prefix:name`) uma vez na inicialização, então seu pacote carrega exatamente o que ele usa. Ícones o
  componentes em si precisam ir para `packages/vue/src/icons/names.ts`, então `pnpm gen`. renderização de nomes desconhecidos
  nada e alertar no desenvolvimento.

<a id="icon-tiles"></a>

## Ladrilhos de ícones

Pequenas peças quadradas possuem um ícone nas listas de recursos, configurações e avisos: 26–40 px, `rounded-[7–9px]` (ou
`rounded-app-icon` a 40 px e para cima), `bg-surface-raised` com `text-ink-secondary`, ou um status sutis preencher com o
cor do estado para os itens de estado.

<a id="app-icons"></a>

## Ícones da aplicação

- A obra de arte da aplicação é mostrada como entregue, `object-contain`, sem máscara adicionada: macOS ícones já incluem sua forma.
- A obra de arte em falta remonta a um **telha da letra**: um gradiente de 160° do acento do aplicativo (ou uma cor derivada de seu
  identificador) escurecido 18%, iniciais brancas a 42% do lado, `rounded-app-icon`, `shadow-app-icon`.
- Ferramentas de linha de comando usam o **telha do terminal**: uma telha de gradiente escuro em ambos os temas com uma abreviação monoespacial em
  30% do lado e uma barra colorida.
- Tamanhos em uso: 20, 24, 26, 28, 30, 32, 40, 44, 46, 54, 64, 96, 118 px.

<a id="brand-mark"></a>

## Marca

Cada aplicação envia a sua própria marca; os componentes do sistema levam-na através de uma `brand` slot. Marcas de marca não fazem parte disto
licença do repositório ([Marca](brand.md)).
