[English](../../../components.md) · [简体中文](../../zh-CN/docs/components.md) · [繁體中文](../../zh-Hant/docs/components.md) · [日本語](../../ja-JP/docs/components.md) · [Español](../../es-ES/docs/components.md) · **Português (Brasil)** · [Русский](../../ru-RU/docs/components.md) · [Deutsch](../../de-DE/docs/components.md) · [Français](../../fr-FR/docs/components.md) · [Italiano](../../it-IT/docs/components.md)

> O inglês é a fonte. As traduções são rascunhos feitos com tradução automática local e precisam de revisão humana. O código e os textos das licenças são preservados.

<a id="components"></a>

# Componentes

Referência para cada componente em [`@opennavo/design-vue`](../../../../packages/vue): para que serve, seus adereços, eventos e
slots (como declarado na fonte), variantes, quando usá-lo, e como ele se comporta para o teclado e tecnologia assistiva.
Como os componentes se combinam em telas é em [Padrões](patterns.md); a galeria (`pnpm gallery`) mostra cada
variante em ambos os temas e todos os dez idiomas. Apps que não usam Vue seguir a mesma anatomia, tamanhos e estados
com as fichas directamente ([Plataformas](platforms.md)).

Convenções:

- **Predefinição** `—` significa que o prop é opcional e não definido; os adereços booleanos sem um padrão listado são `false`.
- strings incorporadas ("Fechar", "Paginação", "Search" ...) vêm do catálogo de mensagens do pacote no locale
  administrado a `createOnUi({ locale })` (Inglês de outra forma). `label`, `placeholder`, `title`,
  `description`, `…Label` Anule-os.
- **Ícones** are Lucide nomes (`search`, `lucide:search`) ou `prefix:name` de um conjunto adicionado com `registerIcons`.
- **Links:** componentes que renderizam links tomar `linkAs` (`'a'` por omissão, ou `RouterLink` / `NuxtLink`). Com
  componente do roteador o URL é passado como `to`; componentes nunca ler a rota atual — passe `active`,
  `modelValue` ou `page` Tu mesmo.
- **Anel de foco:** cada parte interativa mostra `shadow-focus-ring` ligado `:focus-visible`. Sobreposições mover o foco com
  `moveFocus`, que toca o foco do script apenas após a navegação do teclado (WebKit iria tocar em qualquer
  foco programático).
- Cores, raios e tipo vêm de `@opennavo/design-tokens`; nada aqui codifica uma cor, por isso tanto os temas e um
  Acento re-marcado aplicar automaticamente.

**Grupos:** [Ações e insumos](#actions-and-inputs) · [Containers e dados](#containers-and-data) ·
[Estados](#states) · [Sobreposições](#overlays) · [Disposição e navegação](#layout-and-navigation) ·
[Apresentar](#showcase)

---

<a id="actions-and-inputs"></a>

## Ações e insumos

<a id="onbutton"></a>

### OnButton

O botão padrão, ou um link que se parece com um.

| Prop            | Tipo                                                          | Predefinição  | Designação das mercadorias                                                                         |
| --------------- | ------------------------------------------------------------- | ------------- | -------------------------------------------------------------------------------------------------- |
| `variant`       | `'primary' \| 'secondary' \| 'accent' \| 'ghost' \| 'danger'` | `'secondary'` | Peso visual; veja Variantes.                                                                       |
| `size`          | `'xs' \| 'sm' \| 'md' \| 'lg'`                                | `'md'`        | Altura 26 / 28 / 34 / 40.                                                                          |
| `shape`         | `'default' \| 'round'`                                        | `'default'`   | `round` dá forma a um comprimido.                                                                  |
| `icon`          | `string`                                                      | —             | Ícone antes do texto (14 px em xs/sm, 15 px em md/lg).                                             |
| `iconOnly`      | `boolean`                                                     | —             | O botão quadrado que mostra apenas o ícone; o espaço padrão não é renderizado. Requer `ariaLabel`. |
| `ariaLabel`     | `string`                                                      | —             | Nome acessível; necessário para botões somente de ícones.                                          |
| `loading`       | `boolean`                                                     | —             | Mostra um spinner em vez do ícone, configura `aria-busy`, e desativa o botão.                      |
| `disabled`      | `boolean`                                                     | —             | Os cliques do 'look' desativado são ignorados.                                                     |
| `block`         | `boolean`                                                     | —             | Preencha a largura disponível.                                                                     |
| `type`          | `'button' \| 'submit' \| 'reset'`                             | `'button'`    | Tipo de botão nativo (somente botões).                                                             |
| `href`          | `string`                                                      | —             | Renderize um link em vez de um botão.                                                              |
| `target`, `rel` | `string`                                                      | —             | Passado para o link.                                                                               |
| `linkAs`        | `string \| Component`                                         | `'a'`         | Componente de ligação; `href` é passado como `to` para componentes do roteador.                    |

| Evento  | Carregamento          | Designação das mercadorias                          |
| ------- | --------------------- | --------------------------------------------------- |
| `click` | `[event: MouseEvent]` | Não emitido durante a desactivação ou carregamento. |

| Fenda     | Designação das mercadorias |
| --------- | -------------------------- |
| `default` | O rótulo.                  |

**Variantes.** `primary` (invertida, uma por área), `secondary` (por omissão), `accent` (cor da marca, para a ação única
que se deve destacar), `ghost` (delineado, para ações e barras de ferramentas de baixa ênfase), `danger` (tinto vermelho, destrutivo).
Os botões desactivados e de carregamento de cada variante partilham um estilo mudo.

**Utilização** para ações. Para navegação com o estilo de um passe de botão `href`. Não use um botão para configurações de liga/desliga
(`OnToggle`) ou escolher uma de algumas opções (`OnSegmented`).

**Acessibilidade** Um nativo `<button>` (comportamento de teclado e formulário incluído) ou um link. Os botões desativados são nativos
desactivado; uma ligação desactivada perde a sua `href` (ou, com um componente de roteador, mantém `to`, pega `aria-disabled="true"` e
o seu clique está impedido). Os botões só de ícones devem ter `ariaLabel`; adicionar um `OnTooltip` para utilizadores vistos.

<a id="onicon"></a>

### OnIcon

Um ícone SVG em linha dos conjuntos empacotados ou registrados.

| Prop    | Tipo     | Predefinição | Designação das mercadorias                                                           |
| ------- | -------- | ------------ | ------------------------------------------------------------------------------------ |
| `name`  | `string` | necessário   | Lucide nome (`search`, `lucide:search`) ou `prefix:name` de um conjunto registado.   |
| `size`  | `number` | `16`         | Tamanho do pixel: 12 em crachás, 14 em botões, 16 padrão, 17 sidebar, 18 paleta.     |
| `label` | `string` | —            | Torna o ícone uma imagem (`role="img"`, `aria-label`); caso contrário, é decorativo. |

Largura do curso é 2 abaixo de 16 px e 1.6 caso contrário. Ícones tomar `currentColor`. Nomes desconhecidos renderizam um SVG vazio e
alertar em desenvolvimento. A renderização é síncrona, por isso os ícones aparecem no servidor renderizado HTML.

**Acessibilidade** Decorativo por padrão (`aria-hidden="true"`- Dá-me. `label` apenas aos ícones que carregam o significado em seu
próprio; ao lado do texto, deixe-o fora.

<a id="onchip"></a>

### OnChip

Uma etiqueta curta para um tipo ou estado ("App", "Atualizar disponível", "Deprecado").

| Prop      | Tipo                                                                                            | Predefinição | Designação das mercadorias                                                                                                                |
| --------- | ----------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `tone`    | `'neutral' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'accent' \| 'coral' \| 'outline'` | `'neutral'`  | `accent` (salmão) para actualizações, `coral` para os progressos realizados, `outline` para notas neutras, tais como tradução automática. |
| `outline` | `boolean`                                                                                       | —            | Esboçado em vez de preenchido; combina com qualquer tom (por exemplo, desativado = `danger` + contorno).                                  |
| `dot`     | `boolean`                                                                                       | —            | Levando 6 pontos px na cor do texto.                                                                                                      |
| `icon`    | `string`                                                                                        | —            | Icone de 12 px.                                                                                                                           |
| `size`    | `'sm' \| 'md'`                                                                                  | `'sm'`       | Altura 20 / 24.                                                                                                                           |

| Fenda     | Designação das mercadorias |
| --------- | -------------------------- |
| `default` | A mensagem.                |

**Utilização** para o estado e metadados. Diga sempre o estado em palavras; a cor só o suporta. Não é interactivo — para uma
utilização de escolha `OnSegmented`; para uma contagem de navegação uso `OnBadge`.

**Acessibilidade** Texto simples em linha; o ponto e o ícone são decorativos.

<a id="onbadge"></a>

### OnBadge

Uma contagem de corais ("6", "99+") ou um pequeno rótulo de texto destacado ("Características esta semana").

| Prop    | Tipo     | Predefinição | Designação das mercadorias                                                                                  |
| ------- | -------- | ------------ | ----------------------------------------------------------------------------------------------------------- |
| `count` | `number` | —            | Faz um crachá de contagem; sem ele, o crachá mostra o seu espaço como texto. Contagens negativas mostram 0. |
| `max`   | `number` | `99`         | Conta acima mostra `max+`.                                                                                  |
| `label` | `string` | —            | Nome acessível de um crachá de contagem, por exemplo, "6 atualizações disponíveis".                         |

| Fenda        | Designação das mercadorias                                                                                                                     |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `default`    | Texto de um crachá de texto.                                                                                                                   |
| `decoration` | Uma pequena marca após o texto (cerca de 13 px, `currentColor`), por exemplo, uma estrela ou uma marca de app. Escondido dos leitores de tela. |

**Utilização** contar crachás para coisas que precisam de atenção (atualizações); `OnNavItem` e `OnSidebar` usar- as através de
a sua `badge` prop. Use crachás de texto para destaques editoriais. Para uso de status `OnChip`.

**Acessibilidade** Um número nu significa pouco para um leitor de tela; passe `label` Para os crachás de contagem.

<a id="ontoggle"></a>

### OnToggle

Um botão de ligar/desligar para as configurações que se aplicam imediatamente.

| Prop             | Tipo      | Predefinição | Designação das mercadorias                                            |
| ---------------- | --------- | ------------ | --------------------------------------------------------------------- |
| `modelValue`     | `boolean` | necessário   | Ligado ou desligado (`v-model`).                                      |
| `disabled`       | `boolean` | —            | Não mutável; escurecido.                                              |
| `ariaLabel`      | `string`  | —            | Nome acessível quando não existe um rótulo visível.                   |
| `ariaLabelledby` | `string`  | —            | ID da legenda visível, por exemplo, o texto da linha de configuração. |

| Evento              | Carregamento       | Designação das mercadorias |
| ------------------- | ------------------ | -------------------------- |
| `update:modelValue` | `[value: boolean]` | O novo estado.             |

**Utilização** nas linhas de configuração com o rótulo à esquerda e o interruptor à direita. Para as opções que só se aplicam depois
"Salvar", ou em uma lista de itens para atuar, usar `OnCheckbox`.

**Acessibilidade** A `<button role="switch">` com `aria-checked`; Espaço e Digite comutar. Nomeá- lo com
`ariaLabelledby` (preferidos, pontos no rótulo visível) ou `ariaLabel`.

<a id="oncheckbox"></a>

### OnCheckbox

Uma caixa de seleção com rótulo opcional, estados mistos e bloqueados.

| Prop            | Tipo      | Predefinição | Designação das mercadorias                                                                                                                            |
| --------------- | --------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `modelValue`    | `boolean` | necessário   | Verificado (`v-model`).                                                                                                                               |
| `indeterminate` | `boolean` | —            | Algumas crianças seleccionadas (cabeçalho da tabela ou do grupo); se carregar em seleccionar tudo. Ignorado enquanto estiver assinalada ou bloqueada. |
| `disabled`      | `boolean` | —            | Não mutável; escurecido.                                                                                                                              |
| `locked`        | `boolean` | —            | Sempre incluído e imutável, por exemplo, um item necessário de um plano de remoção: mostrado marcado e acinzentado.                                   |
| `ariaLabel`     | `string`  | —            | Nome acessível quando o slot padrão não tiver nenhum rótulo visível.                                                                                  |
| `title`         | `string`  | —            | Por exemplo, por que razão a caixa está desactivada.                                                                                                  |

| Evento              | Carregamento       | Designação das mercadorias |
| ------------------- | ------------------ | -------------------------- |
| `update:modelValue` | `[value: boolean]` | O novo estado verificado.  |

| Fenda     | Designação das mercadorias             |
| --------- | -------------------------------------- |
| `default` | O rótulo visível, dentro do `<label>`. |

**Utilização** para selecionar itens para uma ação posterior (listas, tabelas, planos de remoção) e para opções confirmadas por um botão.
Para configurações instantâneas use `OnToggle`.

**Acessibilidade** Uma caixa de seleção nativa dentro de uma `<label>`, então o texto da etiqueta é o seu nome e clicando nele alterna.
O estado misto é definido como DOM `indeterminate` propriedade e `aria-checked="mixed"`. As caixas trancadas estão desactivadas
e marcou. Clique na etiqueta para parar para que uma linha de tabela circundante ou cabeçalho de grupo também não reaja.

<a id="onsegmented"></a>

### OnSegmented

Um controle segmentado: escolha uma de duas a cinco opções, como um filtro de visualização ou um intervalo de tempo.

| Prop         | Tipo                              | Predefinição | Designação das mercadorias                                                                                                                             |
| ------------ | --------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `modelValue` | `T extends string`                | necessário   | Valor da opção selecionada (`v-model`).                                                                                                                |
| `options`    | `readonly OnSegmentedOption<T>[]` | necessário   | `{ value, label, count?, dots? }`; `dots` são nomes de variáveis token (p. ex. `chart-series1`) desenhado como pequenos pontos de cor antes do rótulo. |
| `size`       | `'sm' \| 'md'`                    | `'md'`       | Altura da opção 24 / 28.                                                                                                                               |
| `ariaLabel`  | `string`                          | —            | Nome acessível do grupo.                                                                                                                               |

| Evento              | Carregamento | Designação das mercadorias          |
| ------------------- | ------------ | ----------------------------------- |
| `update:modelValue` | `[value: T]` | Emitido apenas quando o valor muda. |

**Utilização** para visualização mutuamente exclusiva do mesmo conteúdo. Para navegação entre páginas use `OnTabs`; para muitos
as opções usam um menu.

**Acessibilidade** `role="radiogroup"` com `role="radio"` botões e `aria-checked`. Somente a opção selecionada é
na ordem Tab; as setas movem-se e selecionam (embrulhando), Home e End saltam para as extremidades.

<a id="ontabs"></a>

### OnTabs

Páginas, quer comutando painéis na mesma página ou ligando para páginas separadas.

| Prop         | Tipo                      | Predefinição | Designação das mercadorias                               |
| ------------ | ------------------------- | ------------ | -------------------------------------------------------- |
| `modelValue` | `T extends string`        | necessário   | Valor atual da aba.                                      |
| `items`      | `readonly OnTabItem<T>[]` | necessário   | `{ value, label, count?, disabled?, href?, controls? }`. |
| `ariaLabel`  | `string`                  | —            | Nome acessível da lista de tabulações ou navegação.      |
| `linkAs`     | `string \| Component`     | `'a'`        | Componente de ligação no modo de ligação.                |

| Evento              | Carregamento | Designação das mercadorias                             |
| ------------------- | ------------ | ------------------------------------------------------ |
| `update:modelValue` | `[value: T]` | Clique (ou seta no modo tablist) em outra aba ativada. |

**Variantes.** Modo da lista (nenhum item tem `href`): painéis da mesma página. Link mode (qualquer item tem `href`): cada página é uma
ligação à sua própria URL, por exemplo, os motores de busca indexam cada página. A página activa tem um indicador sublinhado; `count`
mostra um pequeno número após o rótulo.

**Utilização** para as visões de irmãos de um assunto. Para os filtros de uma lista use `OnSegmented`.

**Acessibilidade** Modo de lista de tabulações: `role="tablist"` / `role="tab"` com `aria-selected`, foco de tabulação roving, teclas de seta
(passeio de páginas desactivadas), Início e Fim; definido `controls` para o ID do painel para `aria-controls` e dar o painel
`role="tabpanel"`. Modo de ligação: a `<nav>` de ligações com `aria-current="page"` no activo; os itens desactivados são
não- ligação `<span aria-disabled="true">`.

<a id="onsearchfield"></a>

### OnSearchField

Um campo de texto para pesquisa e filtragem, com botão claro e dica de atalho.

| Prop          | Tipo      | Predefinição | Designação das mercadorias                                                         |
| ------------- | --------- | ------------ | ---------------------------------------------------------------------------------- |
| `modelValue`  | `string`  | necessário   | A consulta (`v-model`).                                                            |
| `placeholder` | `string`  | —            | Texto de colocação.                                                                |
| `ariaLabel`   | `string`  | —            | Nome acessível; por omissão para o placeholder.                                    |
| `shortcut`    | `string`  | —            | Dica à direita, por exemplo. `⌘K`; substituído pelo botão claro enquanto há texto. |
| `clearable`   | `boolean` | `true`       | Mostra um botão limpo quando existe texto.                                         |
| `disabled`    | `boolean` | —            | Não editável; escurecido.                                                          |

| Evento              | Carregamento      | Designação das mercadorias                                |
| ------------------- | ----------------- | --------------------------------------------------------- |
| `update:modelValue` | `[value: string]` | Cada entrada.                                             |
| `submit`            | `[value: string]` | Digite (não enquanto um método de entrada está compondo). |
| `clear`             | `[]`              | Limpar botão ou Escapar com texto.                        |

Exposto: `focus()`, `blur()`.

**Utilização** para filtrar e pesquisar entradas na página. Para abrir uma paleta de comandos de uma barra de ferramentas, use o botão de pesquisa
de `OnToolbar` / `OnTopNav` Em vez disso.

**Acessibilidade** Um nativo `type="search"` entrada nomeada por `ariaLabel` ou o placeholder. Escape limpa um não- vazio
campo e pára ali; num campo vazio, ele bolhas (para que possa fechar uma janela circundante). O botão claro é
etiquetado "Limpar" no idioma atual e retorna foco para a entrada.

<a id="ontooltip"></a>

### OnTooltip

Uma descrição curta que aparece no hover e no foco do teclado.

| Prop        | Tipo                                     | Predefinição | Designação das mercadorias                                                                                                                                                                                                                                               |
| ----------- | ---------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `content`   | `string`                                 | necessário   | O conteúdo em branco do texto desactiva a dica.                                                                                                                                                                                                                          |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'`      | Lado preferido; vira quando não há espaço e fica dentro do viewport.                                                                                                                                                                                                     |
| `delay`     | `number`                                 | `400`        | Mostrar atraso em milissegundos.                                                                                                                                                                                                                                         |
| `disabled`  | `boolean`                                | —            | Nunca apareças.                                                                                                                                                                                                                                                          |
| `lazy`      | `boolean`                                | —            | Renderizar a dica apenas uma vez que o gatilho é usado pela primeira vez, e sem `aria-describedby`. Para gatilhos decorativos cuja informação está na página de qualquer maneira (barras de gráfico com uma tabela escondida); mantém-na fora de servidor-rendered HTML. |

| Fenda     | Designação das mercadorias                                |
| --------- | --------------------------------------------------------- |
| `default` | O gatilho; seu primeiro elemento fica `aria-describedby`. |

Atributos (`class`, `style`) ir para a embalagem `<span>`. A dica é teletransportada para `<body>` e posicionada
`fixed`, assim que os recipientes de rolagem nunca clip-lo; esconde-se no rolagem e redimensionar.

**Utilização** para botões somente de ícones e texto truncado. Nunca coloque informações essenciais ou conteúdo interativo em uma dica.

**Acessibilidade** `role="tooltip"`, ligado do gatilho com `aria-describedby` (a menos que `lazy`, desativado ou vazio).
Ele abre no foco, bem como pairar, e Escape fecha-lo (WCAG 1.4.13).

<a id="onmenu"></a>

### OnMenu

Um menu de ação por trás de um botão, como "Mais ações" ou um menu de ordenação/escolha.

| Prop      | Tipo                    | Predefinição  | Designação das mercadorias                                                    |
| --------- | ----------------------- | ------------- | ----------------------------------------------------------------------------- |
| `items`   | `readonly OnMenuItem[]` | necessário    | `{ key, label, icon?, shortcut?, danger?, disabled?, separator?, checked? }`. |
| `label`   | `string`                | —             | Nome acessível do gatilho e menu; o padrão é "Mais ações".                    |
| `icon`    | `string`                | `'ellipsis'`  | Ícone do gatilho padrão.                                                      |
| `variant` | `OnButtonVariant`       | `'secondary'` | Variante do gatilho padrão.                                                   |
| `size`    | `OnButtonSize`          | `'md'`        | Tamanho do gatilho padrão.                                                    |
| `align`   | `'start' \| 'end'`      | `'end'`       | De que lado do gatilho o menu se alinha.                                      |

| Evento   | Carregamento    | Designação das mercadorias                                                  |
| -------- | --------------- | --------------------------------------------------------------------------- |
| `select` | `[key: string]` | Foi escolhido um item habilitado; o menu fecha e o foco retorna ao gatilho. |

| Fenda     | Assinatura                                                              | Designação das mercadorias                                                                        |
| --------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `trigger` | `(props: { open: boolean; attrs: Record<string, unknown> }) => unknown` | Um gatilho personalizado; vincular `attrs` (ARIA, clique e manipuladores de chaves) em seu botão. |

Itens: `danger` desenha texto vermelho, `separator` adiciona um separador antes do item, `shortcut` mostra uma dica à direita,
`checked` (qualquer valor definido) transforma o item em uma escolha: `true` mostra uma marca de verificação.

**Utilização** para ações secundárias de uma linha ou página e para escolher uma opção (ordem de pedido, idioma).
acção num botão visível.

**Acessibilidade** Trigger: `aria-haspopup="menu"`, `aria-expanded`, `aria-controls`; ArrowDown ou ArrowUp abre em
o primeiro ou último item. Um ponteiro abre o menu sem pré- selecionar um item; um teclado aberto foca o primeiro.
Menu: `role="menu"` com `menuitem` ou `menuitemradio` (`aria-checked`) itens fora da ordem Tab; teclas de seta
ciclo (desactivado), Salto para Casa e Fim, Escapar e Tab fecha-lo e voltar a focar no gatilho. Clicando fora,
redimensionando ou rolagem fecha- o. O menu é teletransportado para `<body>`, abre para cima quando não há espaço abaixo.

---

<a id="containers-and-data"></a>

## Containers e dados

<a id="oncard"></a>

### OnCard

Uma superfície limítrofe que agrupa conteúdo relacionado; opcionalmente um link ou botão.

| Prop          | Tipo                                                         | Predefinição | Designação das mercadorias                                                              |
| ------------- | ------------------------------------------------------------ | ------------ | --------------------------------------------------------------------------------------- |
| `as`          | `'div' \| 'section' \| 'article' \| 'li' \| 'a' \| 'button'` | `'div'`      | Elemento rendido (ignorado quando `href` está definido). `button` fica `type="button"`. |
| `href`        | `string`                                                     | —            | Renderizar a carta como um link (através `linkAs`).                                     |
| `interactive` | `boolean`                                                    | —            | Borda/fundo do hover, cursor do ponteiro e anel de foco.                                |
| `padding`     | `'none' \| 'sm' \| 'md' \| 'lg'`                             | `'md'`       | 1 / 14 / 18 px.                                                                         |
| `linkAs`      | `string \| Component`                                        | `'a'`        | Componente de ligação.                                                                  |

| Fenda     | Designação das mercadorias |
| --------- | -------------------------- |
| `default` | Conteúdo do cartão.        |

**Utilização** para agrupar e para links de cartões inteiros. As cartas usam uma borda e um preenchimento, sem sombra.
cartões ou colocar vários links dentro de um cartão que é em si mesmo um link.

**Acessibilidade** Um cartão clicável deve ser um link real (`href`) ou botão (`as="button"`); o seu texto torna-se o
Nome acessível, por isso, seja breve.

<a id="onstattile"></a>

### OnStatTile

Um número marcado com unidade, dica e mudança.

| Prop    | Tipo           | Predefinição | Designação das mercadorias                                                                                                                   |
| ------- | -------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `label` | `string`       | necessário   | Caso de sentença sem um cólon, por exemplo, "uso do disco".                                                                                  |
| `value` | `string`       | necessário   | O valor formatado.                                                                                                                           |
| `unit`  | `string`       | —            | Por exemplo, "GB", "min ago".                                                                                                                |
| `hint`  | `string`       | —            | Terceira linha.                                                                                                                              |
| `delta` | `OnStatDelta`  | —            | `{ value, direction: 'up' \| 'down', good }`: a seta mostra a direção, `good` escolhe verde ou vermelho.                                     |
| `size`  | `'sm' \| 'md'` | `'sm'`       | `sm`: uma telha autónoma (por exemplo, uma grade de 2×2 trilhos); `md`: uma célula de uma tira de stat cujo recipiente desenha os divisores. |

**Utilização** para painéis e carris de resumos. Para a utilização de listas de etiquetas/valores `OnKeyValueList`.

**Acessibilidade** Texto simples em ordem de leitura (marcar, valor, unidade, mudança, dica). A alteração é mostrada com um
carácter da seta e uma cor; certifique- se `delta.value` Faz sentido ler em voz alta.

<a id="onkeyvaluelist"></a>

### OnKeyValueList

Uma lista de duas colunas de valores rotulados, por exemplo, detalhes de um item.

| Prop    | Tipo                        | Predefinição | Designação das mercadorias                                                                                                     |
| ------- | --------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `items` | `readonly OnKeyValueItem[]` | necessário   | `{ key, label, value, mono?, href? }`; `mono` Para identificadores, comandos e caminhos; `href` torna o valor um link externo. |

Valores truncam com uma elipse numa linha.

**Acessibilidade** A `<dl>` de `<dt>`/`<dd>` pares. Links externos abertos em uma nova aba com
`rel="noopener noreferrer"` e um ícone de seta.

<a id="ontable"></a>

### OnTable

Uma tabela de dados com exibição de ordenação, seleção, células personalizadas e rolagem virtual.

| Prop             | Tipo                                 | Predefinição | Designação das mercadorias                                                                                        |
| ---------------- | ------------------------------------ | ------------ | ----------------------------------------------------------------------------------------------------------------- |
| `columns`        | `readonly OnTableColumn[]`           | necessário   | `{ key, label, numeric?, mono?, sortable?, width?, hideLabel? }`.                                                 |
| `rows`           | `readonly Row[]`                     | necessário   | Linhas, já ordenadas pela máquina.                                                                                |
| `rowKey`         | `(row: Row) => string`               | necessário   | Chave estável por linha.                                                                                          |
| `cellValue`      | `(row: Row, key: string) => unknown` | —            | Conteúdo padrão da célula; caso contrário `row[column.key]`.                                                      |
| `sort`           | `OnTableSort \| null`                | —            | `{ key, order: 'asc' \| 'desc' }` para exibir; o componente não ordena.                                           |
| `selectedKey`    | `string \| null`                     | —            | Linha realçada (atual).                                                                                           |
| `dimmed`         | `(row: Row) => boolean`              | —            | Linhas des-enfatizadas (por exemplo, dependências) a 55% de opacidade.                                            |
| `caption`        | `string`                             | —            | Legenda da mesa visualmente escondida.                                                                            |
| `height`         | `number`                             | —            | Altura fixa em px com um cabeçalho pegajoso; acima de 200 linhas, apenas renderizam linhas visíveis (44 px cada). |
| `layout`         | `'auto' \| 'fixed'`                  | —            | `fixed` honra larguras da coluna e trunca a coluna flexível, assim tabelas largas nunca rolam de lado.            |
| `selectable`     | `boolean`                            | —            | Coluna da caixa de verificação principal; use `v-model:selected`.                                                 |
| `selected`       | `readonly string[]`                  | —            | Teclas de linha seleccionadas; teclas de linhas filtradas para fora `rows` são mantidos.                          |
| `canSelect`      | `(row: Row) => boolean`              | —            | Linhas que não podem ser seleccionadas (por exemplo, itens protegidos); todas por omissão.                        |
| `selectAllLabel` | `string`                             | —            | Nome acessível da caixa de seleção do cabeçalho.                                                                  |
| `selectRowLabel` | `(row: Row) => string`               | —            | Nome acessível de cada caixa de seleção de linha.                                                                 |

| Evento            | Carregamento              | Designação das mercadorias                                                                                                               |
| ----------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `update:sort`     | `[sort: OnTableSort]`     | Um cabeçalho ordenável foi clicado: a mesma coluna reverte, uma nova coluna começa a descer quando numérica e ascendente de outra forma. |
| `update:selected` | `[keys: string[]]`        | A caixa de seleção muda; a caixa de cabeçalho seleciona ou limpa todas as linhas selecionáveis.                                          |
| `rowClick`        | `[key: string, row: Row]` | Uma linha foi clicada (sem cliques na caixa de seleção).                                                                                 |

| Fenda        | Assinatura                                         | Designação das mercadorias                                                       |
| ------------ | -------------------------------------------------- | -------------------------------------------------------------------------------- |
| `cell-{key}` | `(props: { row: Row; value: unknown }) => unknown` | Conteúdo personalizado para a coluna `key`, por exemplo. `#cell-name="{ row }"`. |

**Utilização** para registros comparáveis com vários atributos. Para um punhado de uso de pares de etiqueta/valor `OnKeyValueList`;
para conteúdo rico e desigual use uma lista de cartões.

**Acessibilidade** Um verdadeiro `<table>` com `scope="col"` cabeçalhos. Os cabeçalhos ordenáveis são botões chamados "Sort by
{label}" e a célula do cabeçalho carrega `aria-sort`. `hideLabel` mantém um cabeçalho visualmente oculto (por exemplo, "Ações").
Linhas selecionáveis para expor `aria-selected`; a caixa de seleção do cabeçalho mostra o estado misto. `height`, o rolo
o recipiente é focalizável para que os usuários do teclado possam rolá-lo.

<a id="onpagination"></a>

### OnPagination

Números anteriores/próximos e de página com elipses; botões, ou links quando cada página tem uma URL.

| Prop        | Tipo                       | Predefinição | Designação das mercadorias                                                                                             |
| ----------- | -------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `page`      | `number`                   | necessário   | Página atual, baseada em um.                                                                                           |
| `pageCount` | `number`                   | necessário   | Total de páginas; nada renderiza para uma página.                                                                      |
| `max`       | `number`                   | `7`          | Fendas incluindo elipses (mínimo 5); primeira, última e página atual sempre mostram.                                   |
| `hrefFor`   | `(page: number) => string` | —            | Renderizar links: cada página tem sua própria URL (por exemplo, `?page=3`).                                            |
| `linkAs`    | `string \| Component`      | `'a'`        | Componente de ligação para `hrefFor`.                                                                                  |
| `jumps`     | `readonly number[]`        | —            | Páginas extras com tantos passos antes e depois do actual; por omissão `[10, 100]` com `hrefFor` e nenhum para botões. |

| Evento        | Carregamento     | Designação das mercadorias                                                   |
| ------------- | ---------------- | ---------------------------------------------------------------------------- |
| `update:page` | `[page: number]` | Outra página foi escolhida (também disparada para links antes da navegação). |

**Utilização** por longas listas endereçáveis (resultados de pesquisa, catálogos). Para feeds preferem "carregar mais" ou rolagem infinita.

**Acessibilidade** `<nav aria-label="Pagination">`; botões de página são chamados de "Page N", o atual tem
`aria-current="page"`; anterior/próximo nas extremidades tornam-se não-interativos com `aria-disabled="true"`; elipses são
oculto dos leitores de ecrã.

<a id="onprogressmeter"></a>

### OnProgressMeter

Uma barra de progresso, determinada ou indeterminada.

| Prop    | Tipo             | Predefinição | Designação das mercadorias                                           |
| ------- | ---------------- | ------------ | -------------------------------------------------------------------- |
| `value` | `number \| null` | —            | 0–100 (embraiagens); não fixas ou `null` significa indeterminada.    |
| `size`  | `'md' \| 'sm'`   | `'md'`       | Altura da barra 6 / 4 px (`sm` para barras de menu e linhas densas). |
| `label` | `string`         | —            | Nome acessível, por exemplo, "Transferir a actualização".            |

**Utilização** para tarefas com progresso mensurável, ou trabalho em curso sem ele (indeterminado). Mostrar uma percentagem ou
O tempo que resta ao lado dele quando você tem um.

**Acessibilidade** `role="progressbar"` com `aria-valuemin`, `aria-valuemax`, `aria-valuenow` (redondos) ou
`aria-valuetext="In progress"` quando indeterminada. Com o movimento reduzido a barra indeterminada pára de se mover e mostra
"Em progresso" como texto.

<a id="onstackbar"></a>

### OnStackBar

Uma única barra empilhada com legenda: como um total se divide em partes (por exemplo, armazenamento por tipo).

| Prop      | Tipo                        | Predefinição | Designação das mercadorias                                                        |
| --------- | --------------------------- | ------------ | --------------------------------------------------------------------------------- |
| `items`   | `readonly OnStackItem[]`    | necessário   | `{ key, label, value, display? }`; zero e valores negativos são deixados de fora. |
| `caption` | `string`                    | necessário   | Nome do gráfico; legenda da tabela escondida.                                     |
| `format`  | `(value: number) => string` | —            | Formata valores sem `display`, incluindo a fusão "Outros".                        |

Até três cores da série (`chart.series1–3`) são utilizados em ordem; com mais de três itens o terceiro e posterior
fundir em "Outros". Percentagens seguem a localização atual. Passar por um segmento mostra uma dica de ferramenta preguiçosa.

**Acessibilidade** A barra e a legenda estão escondidas dos leitores de tela; uma tabela visualmente escondida (Item, Valor, Compartilhar)
com a legenda carrega os dados.

<a id="onhbarchart"></a>

### OnHBarChart

Barras horizontais comparando alguns valores, por exemplo, downloads por período.

| Prop      | Tipo                    | Predefinição | Designação das mercadorias                                                                                                                                                                       |
| --------- | ----------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `items`   | `readonly OnHBarItem[]` | necessário   | `{ key, label, value, display?, full?, emphasis? }`: `display` na extremidade do bar (por exemplo, "17K"), `full` na dica e no quadro (por exemplo, "17.394), `emphasis` colore o período atual. |
| `caption` | `string`                | necessário   | Nome do gráfico; legenda da tabela escondida.                                                                                                                                                    |
| `max`     | `number`                | —            | Escalar o máximo; por omissão para o maior valor.                                                                                                                                                |

**Acessibilidade** As barras estão escondidas dos leitores de tela; uma tabela visualmente escondida (Item, Valor) carrega os valores completos.
As dicas são preguiçosas, de modo que nunca se tornam texto de página perdida.

<a id="onskeleton"></a>

### OnSkeleton

Um placeholder brilhante enquanto o conteúdo carrega.

| Prop     | Tipo                                                                        | Predefinição | Designação das mercadorias                  |
| -------- | --------------------------------------------------------------------------- | ------------ | ------------------------------------------- |
| `width`  | `string`                                                                    | `'100%'`     | CSS comprimento.                            |
| `height` | `string`                                                                    | `'14px'`     | CSS comprimento de cada linha.              |
| `radius` | `'tiny' \| 'small' \| 'default' \| 'big' \| 'huge' \| 'full' \| 'app-icon'` | `'small'`    | Coincidir com o raio do que carrega.        |
| `lines`  | `number`                                                                    | —            | Várias linhas; a última tem 60% de largura. |

**Utilização** apenas para a primeira carga, em forma de conteúdo. Enquanto refetching, mantenha o conteúdo antigo (enfraquecido) em vez
de esqueletos piscantes.

**Acessibilidade** `aria-hidden="true"`. Anunciar carregamento em outro lugar, se for importante (por exemplo. `aria-busy` sobre a região).
O shimmer pára com movimento reduzido.

<a id="oncodetext"></a>

### OnCodeText

Texto de código em linha que envolve entre palavras, nunca dentro de uma.

| Prop   | Tipo     | Predefinição | Designação das mercadorias        |
| ------ | -------- | ------------ | --------------------------------- |
| `text` | `string` | necessário   | O comando, o caminho ou o código. |

Cada execução de caracteres não-espaciais é um bloco em linha, então um nome hífenizado ou `--flag` nunca se divide; uma palavra mais ampla
do que as quebras de linha preferencialmente após `/`, `.` ou `=`. O espaço em branco é mantido como texto, então copiar retorna o original
e `white-space: pre-wrap` contentores manter indentação. Coloque-o dentro do seu próprio `<code>` ou `<pre>`.

`codeParts`, `wordPieces` e `codeWordsHtml` expor a mesma divisão para os renderizadores Markdown (wrap inline code
palavras em `.on-code-word`; `OnMarkdownView` Esboça-os).

<a id="onlogviewer"></a>

### OnLogViewer

Um log monoespacial com tipos de linhas coloridas, limite de cauda e rolagem virtual.

| Prop     | Tipo                | Predefinição | Designação das mercadorias                                                                          |
| -------- | ------------------- | ------------ | --------------------------------------------------------------------------------------------------- |
| `lines`  | `readonly string[]` | necessário   | Linhas de registo, mais antigas primeiro.                                                           |
| `tail`   | `number`            | `2000`       | Mostrar apenas as últimas linhas (capped em 2.000), por exemplo, 5 em um cartão de tarefa compacto. |
| `height` | `number`            | —            | Role dentro desta altura; acima de 200 linhas apenas renderiza linhas visíveis.                     |
| `label`  | `string`            | —            | Nome acessível; o padrão é "Log".                                                                   |

Cores das linhas (`classifyLogLine`): `==>` Rubricas, `###… 62.4%` barras de progresso, `Error:` / `fatal:` / erros de enrolamento, e
Marcadores de sucesso. Linhas vazias mantêm a sua altura.

**Acessibilidade** A `<pre role="log">` com um nome acessível e `tabindex="0"`, para que os usuários do teclado possam rolá-lo.
As atualizações não são anunciadas automaticamente além do que `role="log"` implica; resume resultados importantes em outros lugares.

<a id="onhighlighttext"></a>

### OnHighlightText

Texto onde `**…**` as frases são enfatizadas; nada mais é analisado.

| Prop   | Tipo                     | Predefinição | Designação das mercadorias                                                                         |
| ------ | ------------------------ | ------------ | -------------------------------------------------------------------------------------------------- |
| `text` | `string`                 | necessário   | Texto com opcional `**…**` ênfase; outros caracteres permanecem literais (sem marcação, não HTML). |
| `as`   | `'span' \| 'p' \| 'div'` | `'span'`     | Elemento rendido.                                                                                  |

Peças enfatizadas usam a cor do texto primário em peso 500 (`parseHighlight` expõe a análise).

**Utilização** para cópia editorial curta de dados (descrições de herói, resumos). Para uso completo de Markdown `OnMarkdownView`.

<a id="onsectionheader"></a>

### OnSectionHeader

Um título de seção com uma dica muda opcional e um link de estilo "Ver tudo".

| Prop        | Tipo                  | Predefinição | Designação das mercadorias                                |
| ----------- | --------------------- | ------------ | --------------------------------------------------------- |
| `title`     | `string`              | necessário   | A `<h2>` Mensagem.                                        |
| `hint`      | `string`              | —            | Texto mutado ao lado do título.                           |
| `moreLabel` | `string`              | —            | Texto da ligação; o link renderiza apenas com `moreHref`. |
| `moreHref`  | `string`              | —            | Alvo de ligação.                                          |
| `linkAs`    | `string \| Component` | `'a'`        | Componente de ligação.                                    |

**Acessibilidade** A `<h2>` possui apenas o título; a dica é um parágrafo separado, para que nunca se torne cabeçalho
texto. O link tem um ícone de seta (decorativo).

<a id="onpageheader"></a>

### OnPageHeader

O topo de uma página: um grande `<h1>`, um subtítulo e ações à direita.

| Prop       | Tipo     | Predefinição | Designação das mercadorias        |
| ---------- | -------- | ------------ | --------------------------------- |
| `title`    | `string` | necessário   | A `<h1>` texto (30 px, peso 600). |
| `subtitle` | `string` | —            | Linha sob o título.               |

| Fenda     | Designação das mercadorias                                           |
| --------- | -------------------------------------------------------------------- |
| `default` | Conteúdo extra sob o título (chips, filtros).                        |
| `actions` | Botões à direita; em telas estreitas eles envolvem abaixo do título. |

**Utilização** uma vez por página. Títulos de seção dentro da página use `OnSectionHeader`.

<a id="onbreadcrumb"></a>

### OnBreadcrumb

O caminho de uma página de topo para a atual.

| Prop     | Tipo                          | Predefinição | Designação das mercadorias                                               |
| -------- | ----------------------------- | ------------ | ------------------------------------------------------------------------ |
| `items`  | `readonly OnBreadcrumbItem[]` | necessário   | `{ label, href? }`; o último item é a página atual e não precisa `href`. |
| `linkAs` | `string \| Component`         | `'a'`        | Componente de ligação.                                                   |

**Acessibilidade** `<nav aria-label="Breadcrumb">` com uma lista ordenada; o último item tem `aria-current="page"`.
Separadores são ícones decorativos. Itens sem `href` (antes do último) renderizar como texto simples.

<a id="onmarkdownview"></a>

### OnMarkdownView

Tipografia para renderizado Markdown (notas de lançamento, descrições, artigos).

| Prop   | Tipo                        | Predefinição | Designação das mercadorias                                                                                                                         |
| ------ | --------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `html` | `string`                    | —            | **Desinfetados** HTML, inserido como está. Ignorado quando o slot padrão é usado.                                                                  |
| `size` | `'sm' \| 'md' \| 'article'` | `'sm'`       | `sm` 13/20 para notas de lançamento, `md` 14/1.75 para as descrições (ambos máx. 72ch), `article` 15/1.8 através da coluna com cabeçalhos maiores. |

| Fenda     | Designação das mercadorias                                                                       |
| --------- | ------------------------------------------------------------------------------------------------ |
| `default` | Elementos rendidos em vez de um HTML string (por exemplo, de um renderizador que produz VNodes). |

Este pacote de navios **sem renderizador Markdown e sem higienizador**. Renderizar e higienizar em seu aplicativo — por exemplo
markdown-it com cru HTML desactivado, em seguida, um higienizador allowlist, como o DOMPURIFY — e nunca passe controlado pelo utilizador
HTML não- sanitizado. Classes que o seu renderizador poderá adicionar: `on-md-heading-1…3` (dimensão da rubrica visual por ordem, independentemente da
o nível semântico), `on-md-center` / `on-md-right` (alinhamento de mesa), `on-code-word` (palavras de código em linha).

**Acessibilidade** Semântica vem de seu HTML: usar níveis de cabeçalho que se encaixam no contorno da página (por exemplo, começar em `h3`
sob uma secção `h2`) e adicionar `alt` texto para imagens. Links obter um anel de foco.

---

<a id="states"></a>

## Estados

<a id="onempty"></a>

### OnEmpty

Um estado vazio: ícone, título, descrição e ações.

| Prop          | Tipo     | Predefinição     | Designação das mercadorias                                 |
| ------------- | -------- | ---------------- | ---------------------------------------------------------- |
| `title`       | `string` | necessário       | A `<h3>` texto, por exemplo, "Não há resultados para "x"". |
| `description` | `string` | —                | Uma ou duas frases sobre o que fazer a seguir.             |
| `icon`        | `string` | `'lucide:inbox'` | Ícone desenhado em 48 px na cor do texto desabilitado.     |

| Fenda     | Designação das mercadorias |
| --------- | -------------------------- |
| `actions` | Botões sob o texto.        |

**Utilização** quando uma lista ou pesquisa não tem nada a mostrar. Diga porquê e ofereça o próximo passo. Para falhas usar
`OnErrorState`; para nenhuma conexão `OnOffline`.

**Acessibilidade** O título é um `<h3>`; o ícone é decorativo. Se o estado vazio aparecer após uma ação do usuário
(uma busca), anuncie-o através de sua própria região ao vivo quando necessário.

<a id="onerrorstate"></a>

### OnErrorState

Uma falha de carga com retentar e um ID opcional de solicitação para relatórios.

| Prop          | Tipo             | Predefinição | Designação das mercadorias                                                                    |
| ------------- | ---------------- | ------------ | --------------------------------------------------------------------------------------------- |
| `title`       | `string`         | —            | O padrão é "Não foi possível carregar".                                                       |
| `description` | `string`         | —            | O padrão é "A rede ou serviço está temporariamente indisponível. Tente novamente mais tarde." |
| `requestId`   | `string \| null` | —            | Mostrado no monoespaço para relatórios de problemas.                                          |
| `retryable`   | `boolean`        | `true`       | Mostra o botão de repetição.                                                                  |

| Evento  | Carregamento | Designação das mercadorias |
| ------- | ------------ | -------------------------- |
| `retry` | `[]`         | O botão Retry foi clicado. |

**Acessibilidade** A embalagem tem `role="alert"`, então a mensagem é anunciada quando aparece.

<a id="onoffline"></a>

### OnOffline

Um estado de não ligação.

| Prop          | Tipo     | Predefinição | Designação das mercadorias                                                                                                                                               |
| ------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `title`       | `string` | —            | O padrão é "Offline".                                                                                                                                                    |
| `description` | `string` | —            | O padrão é "Mostrando conteúdo salvo. Ele atualiza automaticamente quando você está de volta on-line." — sobreponha-o quando seu aplicativo pode dizer o que ele mostra. |

| Fenda     | Designação das mercadorias             |
| --------- | -------------------------------------- |
| `actions` | Botões, por exemplo, tentem novamente. |

**Acessibilidade** A embalagem tem `role="status"` (anunciado educadamente).

---

<a id="overlays"></a>

## Sobreposições

Todas as sobreposições renderizam em `<body>` (teleport), mover foco dentro quando eles abrem, manter Tab dentro, bloquear página
rolagem (overlays nus são contados com referência) e retorno de foco para o elemento que os abriu. Animam
em 200 ms e fora 120 ms, sem movimento quando o movimento reduzido é ligado.

<a id="ondialogshell"></a>

### OnDialogShell

A camada modal de baixo nível sob `OnModal`, `OnSheet` e `OnCommandPalette`: pano de fundo, transições, fuga, foco
e bloqueio rolagem. Use-o diretamente apenas para painéis personalizados.

| Prop           | Tipo                           | Predefinição | Designação das mercadorias                                                                                        |
| -------------- | ------------------------------ | ------------ | ----------------------------------------------------------------------------------------------------------------- |
| `open`         | `boolean`                      | necessário   | Mostrado quando true; nada renderiza ao fechar (também no servidor).                                              |
| `placement`    | `'center' \| 'right' \| 'top'` | `'center'`   | Janela centralizada, folha à direita ou paleta superior (15vh).                                                   |
| `dismissible`  | `boolean`                      | `true`       | `false` ignora os cliques Escapar e cenário (confirmações destrutivas).                                           |
| `role`         | `'dialog' \| 'alertdialog'`    | `'dialog'`   | Papel do painel.                                                                                                  |
| `labelledby`   | `string`                       | —            | ID do título (`aria-labelledby`).                                                                                 |
| `describedby`  | `string`                       | —            | ID da descrição (`aria-describedby`).                                                                             |
| `ariaLabel`    | `string`                       | —            | Nome acessível quando não há título visível.                                                                      |
| `initialFocus` | `string`                       | —            | Selector dentro do painel para focar primeiro; padrão para o primeiro elemento focalizável, em seguida, o painel. |
| `backdrop`     | `'dim' \| 'clear'`             | `'dim'`      | Escrivaninha reduzida, ou um captador de cliques transparente (palette).                                          |
| `panelClass`   | `string`                       | —            | Classes para o elemento do painel (tamanho, superfície, raio).                                                    |

| Evento  | Carregamento | Designação das mercadorias                                                          |
| ------- | ------------ | ----------------------------------------------------------------------------------- |
| `close` | `[]`         | Escape ou pressione e solte no cenário (selecionar texto e liberar fora não fecha). |

| Fenda     | Designação das mercadorias |
| --------- | -------------------------- |
| `default` | Conteúdo do painel.        |

**Acessibilidade** O painel tem o dado `role`, `aria-modal="true"` e seu nome; Tab e Shift-Tab ciclo através
seus elementos focais. `labelledby` ou `ariaLabel`.

<a id="onmodal"></a>

### OnModal

Um diálogo centrado com título, descrição opcional, ações do corpo e rodapé.

| Prop           | Tipo                        | Predefinição | Designação das mercadorias                                                                                |
| -------------- | --------------------------- | ------------ | --------------------------------------------------------------------------------------------------------- |
| `open`         | `boolean`                   | necessário   | Utilização `v-model:open`.                                                                                |
| `title`        | `string`                    | necessário   | A `<h2>` e o nome acessível da janela.                                                                    |
| `description`  | `string`                    | —            | Sob o título; torna-se `aria-describedby`.                                                                |
| `size`         | `'sm' \| 'md' \| 'lg'`      | `'md'`       | Largura máxima 480 / 560 / 720                                                                            |
| `dismissible`  | `boolean`                   | `true`       | `false` Ignora os cliques Escapar e o cenário.                                                            |
| `closable`     | `boolean`                   | `true`       | Feche o botão no canto superior direito.                                                                  |
| `role`         | `'dialog' \| 'alertdialog'` | `'dialog'`   | Utilização `alertdialog` para confirmações que necessitam de uma resposta.                                |
| `initialFocus` | `string`                    | —            | Selector para focar primeiro; por omissão no primeiro elemento focalizável (muitas vezes o botão Fechar). |

| Evento        | Carregamento      | Designação das mercadorias        |
| ------------- | ----------------- | --------------------------------- |
| `update:open` | `[open: boolean]` | `false` em caso de demissão.      |
| `close`       | `[]`              | Escapar, fundo ou o botão Fechar. |

| Fenda      | Designação das mercadorias                                                       |
| ---------- | -------------------------------------------------------------------------------- |
| `default`  | Corpo; pergaminhos quando alto.                                                  |
| `footer`   | Ações alinhadas à direita (primeira e última secundária).                        |
| `leading`  | Antes do título, por exemplo, um ícone da aplicação.                             |
| `subtitle` | Uma linha rica sob o título (chips, código); `description` ainda está por baixo. |

Exposto: `close()`.

**Utilização** para tarefas focadas que bloqueiam a página (um formulário curto, uma decisão).
`OnSheet`; para uso de perguntas sim/não `OnConfirm`.

<a id="onsheet"></a>

### OnSheet

Um painel deslizando pela direita (420 px), por exemplo, para logs ou detalhes.

| Prop           | Tipo      | Predefinição | Designação das mercadorias                                                  |
| -------------- | --------- | ------------ | --------------------------------------------------------------------------- |
| `open`         | `boolean` | necessário   | Utilização `v-model:open`.                                                  |
| `title`        | `string`  | necessário   | A `<h2>` e nome acessível.                                                  |
| `initialFocus` | `string`  | —            | Selector para focar primeiro; por omissão no primeiro elemento focalizável. |

| Evento        | Carregamento      | Designação das mercadorias |
| ------------- | ----------------- | -------------------------- |
| `update:open` | `[open: boolean]` | `false` quando dispensado. |
| `close`       | `[]`              | Escapar, fundo ou fechar.  |

| Fenda     | Designação das mercadorias                                               |
| --------- | ------------------------------------------------------------------------ |
| `default` | A roçar o corpo.                                                         |
| `actions` | Botões de cabeçalho entre o título e Fechar, por exemplo, "Copiar tudo". |
| `footer`  | Barra inferior com ações alinhadas à direita.                            |

Exposto: `close()`.

<a id="onconfirm"></a>

### OnConfirm

Uma janela de confirmação com Cancelar e Confirmar.

| Prop              | Tipo                    | Predefinição | Designação das mercadorias                                                                         |
| ----------------- | ----------------------- | ------------ | -------------------------------------------------------------------------------------------------- |
| `open`            | `boolean`               | necessário   | Utilização `v-model:open`.                                                                         |
| `title`           | `string`                | necessário   | A questão, por exemplo, "Excluir Orbitfold?".                                                      |
| `description`     | `string`                | —            | O que vai acontecer.                                                                               |
| `confirmLabel`    | `string`                | —            | O padrão é "Confirmar"; prefira o verbo ("Excluir").                                               |
| `cancelLabel`     | `string`                | —            | O padrão é "Cancelar".                                                                             |
| `tone`            | `'primary' \| 'danger'` | `'primary'`  | `danger`: botão de confirmação vermelho, sem Escape / descarte de fundo, Cancelar focado primeiro. |
| `loading`         | `boolean`               | —            | Spinner ligado Confirme enquanto a ação é executada; Cancelar está desativado enquanto isso.       |
| `confirmDisabled` | `boolean`               | —            | Desactivar Confirmar até serem cumpridos os pré-requisitos (por exemplo, uma autorização).         |

| Evento        | Carregamento      | Designação das mercadorias                                    |
| ------------- | ----------------- | ------------------------------------------------------------- |
| `confirm`     | `[]`              | Confirmar clicado; a máquina executa a ação e fecha a janela. |
| `cancel`      | `[]`              | Cancelar, Fugir ou cenário (não para `danger`).               |
| `update:open` | `[open: boolean]` | `false` no cancelamento.                                      |

| Fenda     | Designação das mercadorias                                            |
| --------- | --------------------------------------------------------------------- |
| `default` | Conteúdo extra do corpo, por exemplo, uma lista do que será removido. |

**Acessibilidade** `role="alertdialog"`, nomeada pelo título e descrita pela descrição.
foco confirmações Confirmar; foco destrutivo Cancelar assim Enter nunca destrói por acidente.

<a id="ontoast"></a>

### OnToast

Um único cartão de notificação. Normalmente renderizado por `OnToastRegion`; use-o diretamente para pré-visualizações estáticas.

| Prop          | Tipo                                           | Predefinição | Designação das mercadorias                                      |
| ------------- | ---------------------------------------------- | ------------ | --------------------------------------------------------------- |
| `tone`        | `'info' \| 'success' \| 'warning' \| 'danger'` | `'info'`     | Ícone e cor: informação, verificação, triângulo, cruz.          |
| `title`       | `string`                                       | necessário   | Uma linha, por exemplo, "Atualizado Prismark".                  |
| `description` | `string`                                       | —            | Linha de detalhes.                                              |
| `actionLabel` | `string`                                       | —            | Um pequeno botão de ação fantasma, por exemplo, "Ver".          |
| `time`        | `string`                                       | —            | Texto do tempo no canto superior direito, por exemplo, "Agora". |

| Evento   | Carregamento | Designação das mercadorias     |
| -------- | ------------ | ------------------------------ |
| `action` | `[]`         | O botão de ação foi clicado.   |
| `close`  | `[]`         | O botão de fechar foi clicado. |

**Acessibilidade** `danger` torradas têm `role="alert"` (anunciado imediatamente); outros confiam no educado da região
região ao vivo. O botão de fechamento é chamado de "Notificação de dispensa".

<a id="ontoastregion-and-createtoastqueue"></a>

### OnToastRegion e criarToastFiue

A pilha fixa de notificações de baixo-direita, com o tempo de execução para você.

| Prop    | Tipo                     | Predefinição | Designação das mercadorias                                            |
| ------- | ------------------------ | ------------ | --------------------------------------------------------------------- |
| `items` | `readonly OnToastItem[]` | necessário   | `{ id, tone?, title, description?, actionLabel?, time?, duration? }`. |
| `max`   | `number`                 | `3`          | Torradas visíveis; as mais velhas se escondem primeiro.               |

| Evento    | Carregamento   | Designação das mercadorias                                                                                     |
| --------- | -------------- | -------------------------------------------------------------------------------------------------------------- |
| `dismiss` | `[id: string]` | Remova o item: emitido após o seu `duration` (padrão 4000 ms; `0` mantém-no), em Fechar, e depois de uma ação. |
| `action`  | `[id: string]` | O botão de ação do item foi clicado (seguido por `dismiss`).                                                   |

Os timers pausam enquanto o ponteiro ou foco está dentro da região e retomam com o tempo restante.

```ts
const toasts = createToastQueue(); // one per app (or per request in SSR), never a shared module singleton
toasts.push({ tone: 'success', title: 'Copied' }); // returns the id
toasts.push({ id: 'sync', title: 'Syncing…', duration: 0 }); // same id replaces, e.g. progress updates
```

```vue
<OnToastRegion :items="toasts.items.value" @dismiss="toasts.dismiss" @action="openDetails" />
```

`createToastQueue()` retorna `{ items, push, dismiss, clear }` (`items` é um ref somente de leitura).

**Utilização** para breve, feedback sem bloqueio sobre algo que aconteceu. Nunca para informações o usuário deve agir sobre
(use uma janela ou uma mensagem em linha).

**Acessibilidade** A `<section aria-label="Notifications">` com uma `aria-live="polite"` lista; falhas anunciam
imediatamente através de sua própria `role="alert"`.

<a id="oncommandpalette"></a>

### OnCommandPalette

Uma paleta de comandos orientada para pesquisa (□K): agruparam os resultados com a seleção do teclado.

| Prop          | Tipo                        | Predefinição | Designação das mercadorias                                                                                      |
| ------------- | --------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------- |
| `open`        | `boolean`                   | necessário   | Utilização `v-model:open`.                                                                                      |
| `query`       | `string`                    | necessário   | Utilização `v-model:query`; os filtros host.                                                                    |
| `groups`      | `readonly OnCommandGroup[]` | necessário   | `{ key, label, items: OnCommandItem[] }`; grupos vazios estão escondidos.                                       |
| `placeholder` | `string`                    | —            | Input placeholder e nome; o padrão é "Procurar ou executar um comando".                                         |
| `loading`     | `boolean`                   | —            | Sem resultados, mostra "Procurando..." em vez do texto vazio.                                                   |
| `emptyText`   | `string`                    | —            | O padrão é "Sem resultados correspondentes".                                                                    |
| `hints`       | `readonly string[]`         | —            | Dicas de rodapé; padrão para "↑↓ Selecionar" e "□ Abrir". Adicione o seu próprio para os atalhos meta e copiar. |

`OnCommandItem`: `{ key, label, description?, icon?, image?, iconTone?, badge?, badgeTone?, hint? }` — `icon` é uma
18 px icon (para ações e navegação), `image` uma URL de imagem de 26 px (um ícone de aplicativo, um avatar) que se encaixa na
ícone se não for carregado; `iconTone: 'accent'` colore o ícone; `badge` é uma `OnChip` (acento por defeito); `hint`
mostra uma dica chave à direita.

| Evento         | Carregamento                                        | Designação das mercadorias                                                                                             |
| -------------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `update:open`  | `[open: boolean]`                                   | `false` em Escape ou um clique fora.                                                                                   |
| `update:query` | `[query: string]`                                   | Cada entrada.                                                                                                          |
| `select`       | `[item: OnCommandItem, options: { meta: boolean }]` | Digite ou clique no item ativo; `meta` com Comando/Ctrl (uma ação secundária, por exemplo, aberta em uma nova janela). |
| `copy`         | `[item: OnCommandItem]`                             | Comando/Ctrl-C enquanto nenhum texto de entrada está selecionado; a máquina decide o que copiar (um link, um ID).      |

O item ativo reinicia para o primeiro resultado sempre que os resultados mudam ou a paleta se abre.

**Acessibilidade** Uma janela de topo chamada "Paleta de Comando". A entrada é uma `combobox` (`aria-autocomplete="list"`,
`aria-controls`, `aria-activedescendant`) em relação a `listbox` de `role="group"` secções com `option`s e
`aria-selected`. ArrowUp/ArrowDown mover através de todos os grupos (embrulhando, rolagem do item para a vista), Digite selects,
Escapar fecha; as chaves são ignoradas enquanto um método de entrada está a compor. As dicas do rodapé estão escondidas dos leitores de ecrã.

---

<a id="layout-and-navigation"></a>

## Disposição e navegação

<a id="onappshell"></a>

### OnAppShell

O quadro da página: barra lateral, barra de ferramentas, coluna principal e trilho direito opcional. Disposição somente; você preenche todas as regiões.

| Prop         | Tipo                        | Predefinição  | Designação das mercadorias                                                                                                                                                                                                                                |
| ------------ | --------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hasRail`    | `boolean`                   | `false`       | A página tem um corrimão direito.                                                                                                                                                                                                                         |
| `railDocked` | `boolean`                   | `true`        | Modo do recipiente: o carril permanece ao lado da coluna principal (decide da largura da janela, p. ex. ≥ 1240 px).                                                                                                                                       |
| `railOpen`   | `boolean`                   | `false`       | Modo recipiente, desacoplado: mostrar o trilho como uma sobreposição.                                                                                                                                                                                     |
| `scroll`     | `'container' \| 'document'` | `'container'` | `container` (app desktop): altura da janela fixa, a coluna principal rola por si só. `document` (web): os rolagems da página; barra lateral e barra de ferramentas são pegajosos de `md`, o trilho fica em `xl` e se move abaixo do conteúdo antes disso. |

| Fenda        | Designação das mercadorias                                                                                                            |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `sidebar`    | Normalmente. `OnSidebar` (224 px coluna).                                                                                             |
| `toolbar`    | Normalmente. `OnToolbar`.                                                                                                             |
| `compactBar` | Modo do documento abaixo `md`: substitui barra lateral e barra de ferramentas (por exemplo, uma barra superior compacta por um menu). |
| `default`    | O conteúdo principal.                                                                                                                 |
| `rail`       | Normalmente. `OnRailPanel` (288 px).                                                                                                  |
| `footer`     | Modo Documento: após o conteúdo e trilho.                                                                                             |
| `overlay`    | Sobreposições que pertencem à shell (região de torradas, paleta).                                                                     |

Exposto: `scrollToTop()` — rola a coluna principal (modo de conteúdo) ou a janela (modo de documento), por exemplo, após:
navegação.

**Acessibilidade** O conteúdo é um `<main>` marco; dê à barra lateral uma navegação `label` (ver `OnSidebar`).
Mantenha uma concha por página.

<a id="onsidebar"></a>

### OnSidebar

Marca, uma carta superior opcional, navegação agrupada e links de rodapé.

| Prop          | Tipo                        | Predefinição | Designação das mercadorias                                                                       |
| ------------- | --------------------------- | ------------ | ------------------------------------------------------------------------------------------------ |
| `groups`      | `readonly OnSidebarGroup[]` | necessário   | `{ key, label, items: OnSidebarItem[] }`.                                                        |
| `footerItems` | `readonly OnSidebarItem[]`  | `[]`         | Itens fixados na parte inferior (Configurações, Sobre).                                          |
| `label`       | `string`                    | necessário   | Nome acessível da navegação.                                                                     |
| `topLabel`    | `string`                    | —            | Sobrancelha acima da `top` slot.                                                                 |
| `brandName`   | `string`                    | —            | Marca de texto simples quando o `brand` a posição está vazia.                                    |
| `dragRegion`  | `boolean`                   | `false`      | Janelas do ecrã: uma área de arrasto de 52 px para o macOS semáforos (`data-tauri-drag-region`). |
| `linkAs`      | `string \| Component`       | `'a'`        | Componente de ligação para os itens.                                                             |

`OnSidebarItem`: `{ key, label, href, icon?, active?, count?, meta?, badge?, dot?, badgeLabel? }` — passou para
`OnNavItem`.

| Fenda    | Designação das mercadorias                                                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `brand`  | A marca e o nome do aplicativo (logo mais wordmark); o sistema de design não envia nenhum logotipo. Sem ele e sem `brandName` A linha da marca está de fora. |
| `top`    | Um cartão sob a marca, por exemplo, "Obter o aplicativo desktop".                                                                                            |
| `footer` | Conteúdo extra após os itens do rodapé.                                                                                                                      |

**Acessibilidade** An `<aside>` com uma `<nav aria-label>`; as etiquetas de grupo são títulos visuais acima dos seus itens;
o item atual tem `aria-current="page"`. Se o slot da marca é apenas uma imagem, dê-lhe um `alt` texto ou um nome visível.

<a id="onnavitem"></a>

### OnNavItem

Uma linha de navegação: ícone, etiqueta e uma contagem, emblema, ponto ou meta texto à direita.

| Prop         | Tipo                  | Predefinição | Designação das mercadorias                                                                          |
| ------------ | --------------------- | ------------ | --------------------------------------------------------------------------------------------------- |
| `icon`       | `string`              | —            | Ícone às 17 px.                                                                                     |
| `active`     | `boolean`             | —            | A página atual: realçado, `aria-current="page"`.                                                    |
| `count`      | `number`              | —            | Conto mutado à direita.                                                                             |
| `meta`       | `string`              | —            | Texto mutado à direita quando não há contagem, por exemplo, "34 GB".                                |
| `badge`      | `number`              | —            | Emblema de contagem de corais (apenas quando > 0); assume prioridade sobre `dot`, `count` e `meta`. |
| `dot`        | `boolean`             | —            | Um ponto de atenção sem um número; assume prioridade sobre `count` e `meta`.                        |
| `badgeLabel` | `string`              | —            | Texto acessível do crachá ou ponto, por exemplo, "4 actualizações".                                 |
| `as`         | `string \| Component` | `'a'`        | Elemento ou componente de ligação; uma planície `a` sem `href` torna-se um `<button>`.              |
| `href`       | `string`              | —            | URL da ligação (nativo `a`).                                                                        |
| `to`         | `string`              | —            | Destino do roteador quando `as` é um link de roteador.                                              |

| Fenda     | Designação das mercadorias |
| --------- | -------------------------- |
| `default` | O rótulo (trunca).         |

**Acessibilidade** O crachá é nomeado por `badgeLabel`; um ponto com `badgeLabel` é `role="img"`, sem ele é
Prefiro dar um rótulo a todos os crachás e pontos.

<a id="ontoolbar"></a>

### OnToolbar

A barra acima da coluna principal: ranhura inicial, um espaçador arrastável, um botão de pesquisa e um ranhura final.

| Prop             | Tipo      | Predefinição | Designação das mercadorias                                                                                          |
| ---------------- | --------- | ------------ | ------------------------------------------------------------------------------------------------------------------- |
| `searchLabel`    | `string`  | necessário   | Texto e nome acessível do botão de pesquisa, por exemplo, "Aplicativos de pesquisa" ou "Arquivos de pesquisa".      |
| `searchShortcut` | `string`  | —            | Dica de tecla no botão, por exemplo. `⌘K`; também estabelece `aria-keyshortcuts="Meta+K"`.                          |
| `dragRegion`     | `boolean` | `false`      | Janelas do ambiente de trabalho: a barra e o espaçador são regiões de arrasto; os seus botões permanecem clicáveis. |

| Evento   | Carregamento | Designação das mercadorias                                  |
| -------- | ------------ | ----------------------------------------------------------- |
| `search` | `[]`         | O botão de pesquisa foi clicado; abra a paleta de comandos. |

| Fenda   | Designação das mercadorias                                        |
| ------- | ----------------------------------------------------------------- |
| `start` | Comandos principais, por exemplo, botões para trás/para a frente. |
| `end`   | Controlos de seguimento, por exemplo, notificações, linguagem.    |

<a id="ontopnav"></a>

### OnTopNav

O cabeçalho do site: link home com a marca do aplicativo, links centrados, pesquisa, uma chamada opcional para ação e um celular
menu.

| Prop             | Tipo                      | Predefinição | Designação das mercadorias                                                                                                      |
| ---------------- | ------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `items`          | `readonly OnTopNavItem[]` | necessário   | `{ label, href, active? }`.                                                                                                     |
| `homeHref`       | `string`                  | `'/'`        | Alvo da ligação de casa.                                                                                                        |
| `brandName`      | `string`                  | —            | Marca de texto simples no link home quando o `brand` o espaço está vazio; também nomeia o link ("{brandName} home", traduzido). |
| `homeLabel`      | `string`                  | —            | Nome acessível do link de casa, sobrepondo-se ao de `brandName`.                                                                |
| `downloadHref`   | `string`                  | —            | Botão Call-to-action à direita (por exemplo, uma página de download); escondido sem ele.                                        |
| `downloadLabel`  | `string`                  | —            | O seu texto; por omissão é "Download".                                                                                          |
| `searchable`     | `boolean`                 | `true`       | Mostra o campo de pesquisa e o botão.                                                                                           |
| `searchLabel`    | `string`                  | —            | Procurar o texto e o nome; por omissão, é "Procurar".                                                                           |
| `searchShortcut` | `string`                  | —            | Dica de chave no campo de pesquisa, por exemplo. `⌘K`.                                                                          |
| `label`          | `string`                  | —            | Nome acessível da navegação; o padrão é "Main".                                                                                 |
| `linkAs`         | `string \| Component`     | `'a'`        | Componente de ligação.                                                                                                          |

| Evento   | Carregamento | Designação das mercadorias                                           |
| -------- | ------------ | -------------------------------------------------------------------- |
| `search` | `[]`         | O campo ou ícone de pesquisa foi clicado; abra a paleta de comandos. |

| Fenda   | Designação das mercadorias                                                                                     |
| ------- | -------------------------------------------------------------------------------------------------------------- |
| `brand` | A marca do aplicativo dentro do link home (logo mais wordmark). O sistema de design não envia nenhum logotipo. |
| `extra` | Entre a pesquisa e a chamada à ação, por exemplo, um menu de idioma.                                           |

Comportamento: as ligações mostram a partir de 1024 px; abaixo, um botão de menu abre um painel com as ligações (e a chamada à acção sob
640 px). A pesquisa é um campo completo em 768-1023 px e de 1280 px, um botão de ícone de outra forma.
o fundo fica translúcido com um borrão.

**Acessibilidade** Um pegajoso `<header>` com `<nav>` pontos de referência nomeados por `label`. Links ativos
`aria-current="page"`. Nome do link home: passe `brandName` (preenche também o "rótulo em nome" quando o sinal de palavra
mostra o mesmo nome) ou `homeLabel`; com nenhum dos dois, o `brand` entalhe deve carregar o próprio nome (por exemplo, `img alt`).
O botão do menu tem `aria-expanded`/`aria-controls` e um nome de "Menu aberto"/"Fechar o menu"; Escape fecha o painel
e retorna o foco para o botão. O campo de pesquisa tem `aria-haspopup="dialog"`.

<a id="onrailpanel"></a>

### OnRailPanel

O quadro ferroviário à direita (288 px) para resumos e conteúdo secundário.

| Prop         | Tipo      | Predefinição | Designação das mercadorias                                                                                                                                          |
| ------------ | --------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `responsive` | `boolean` | `false`      | Web: abaixo `xl` o trilho fica sob o conteúdo principal com uma borda superior e rola com a página; `xl` é uma coluna com uma borda esquerda e seu próprio rolagem. |

| Fenda     | Designação das mercadorias           |
| --------- | ------------------------------------ |
| `default` | Normalmente vários `OnRailSection`s. |

**Acessibilidade** An `<aside>` marco; é conteúdo complementar, então a página deve fazer sentido sem ele.

<a id="onrailsection"></a>

### OnRailSection

Uma secção intitulada dentro do trilho.

| Prop       | Tipo     | Predefinição | Designação das mercadorias |
| ---------- | -------- | ------------ | -------------------------- |
| `title`    | `string` | necessário   | A `<h2>`.                  |
| `subtitle` | `string` | —            | Linha mutada sob o título. |

| Fenda     | Designação das mercadorias                            |
| --------- | ----------------------------------------------------- |
| `default` | Conteúdo da secção (telhas de estado, listas curtas). |

---

<a id="showcase"></a>

## Apresentar

<a id="onfeaturehero"></a>

### OnFeatureHero

Um grande cartão de recurso com um brilhante, palco anelado e itens decorativos flutuantes.

| Prop           | Tipo                  | Predefinição | Designação das mercadorias                                                                                          |
| -------------- | --------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------- |
| `title`        | `string`              | necessário   | O rumo.                                                                                                             |
| `subtitle`     | `string`              | —            | Uma segunda linha de salmão, dentro do cabeçalho.                                                                   |
| `badge`        | `string`              | —            | Pequeno texto destacado acima do título, por exemplo, "Recurso esta semana".                                        |
| `description`  | `string`              | —            | Corpo com `**…**` ênfase (`OnHighlightText`).                                                                       |
| `floats`       | `readonly T[]`        | `[]`         | Até três itens decorativos colocados no palco, cada um desenhado pelo `float` slot.                                 |
| `glowColor`    | `string \| null`      | —            | Tint hexadecimal de seis dígitos do brilho (suavizado em modo de luz); o brilho do símbolo de outra forma.          |
| `actionLabel`  | `string`              | —            | Texto do botão primário; o padrão é "Começar".                                                                      |
| `actionIcon`   | `string`              | —            | Ícone de lucide opcional antes do texto do botão primário, por exemplo. `download`.                                 |
| `detailHref`   | `string`              | —            | Adiciona um botão de link "Ver detalhes".                                                                           |
| `detailLabel`  | `string`              | —            | É uma mensagem.                                                                                                     |
| `linkAs`       | `string \| Component` | `'a'`        | Link componente para o link detalhe.                                                                                |
| `responsive`   | `boolean`             | —            | Web: 360 px de altura de 1024 px (276 px de outra forma), estágio escalonado.                                       |
| `compact`      | `boolean`             | —            | Carta menor para grades; o estágio mostra apenas quando a carta tem pelo menos 460 px de largura (contentor query). |
| `headingLevel` | `2 \| 3`              | `2`          | Elemento de direção.                                                                                                |

| Evento   | Carregamento | Designação das mercadorias    |
| -------- | ------------ | ----------------------------- |
| `action` | `[]`         | O botão primário foi clicado. |

| Fenda              | Assinatura                                                            | Designação das mercadorias                                                                                                                  |
| ------------------ | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `float`            | `(props: { item: T; index: number; size: OnAppIconSize }) => unknown` | Um item flutuante, normalmente `<OnAppIcon :size="size" :priority="index === 0" …>`. Os tamanhos são 118 / 54 / 46 (compacto 64 / 40 / 32). |
| `badge-decoration` | `() => unknown`                                                       | Uma pequena marca após o texto do crachá (cerca de 13 px, `currentColor`).                                                                  |
| `actions`          | `() => unknown`                                                       | Substitui o botão primário e o link de detalhe.                                                                                             |

```vue
<OnFeatureHero title="Orbitfold 4" subtitle="Plans that keep up with you." :floats="apps" detail-href="/apps/orbitfold">
  <template #float="{ item, size, index }">
    <OnAppIcon :name="item.name" :src="item.icon" :size="size" :priority="index === 0" />
  </template>
</OnFeatureHero>
```

**Utilização** uma vez por página para o destaque principal. Itens flutuantes estão escondidos abaixo de 768 px, onde eles cobririam o texto.

**Acessibilidade** Todo o estágio (brilha, anéis, flutua) é `aria-hidden`; colocar todas as informações que eles carregam no
texto. O subtítulo faz parte do cabeçalho. O brilho respira lentamente e pára com o movimento reduzido.

<a id="onappicon"></a>

### OnAppIcon

Um ladrilho de aplicação: a imagem da aplicação, ou uma ladrilha de letra gerada; `variant="terminal"` desenha uma linha de comando.

| Prop         | Tipo                                                                          | Predefinição | Designação das mercadorias                                                                                                               |
| ------------ | ----------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `name`       | `string`                                                                      | necessário   | Mostrar o nome; a letra azulejo mostra as suas iniciais (primeiro caractere CJK, ou as primeiras letras de até duas palavras).           |
| `variant`    | `'app' \| 'terminal'`                                                         | `'app'`      | Recuar quando não há imagem: telha de letra ou telha de terminal (escuro em ambos os temas, abreviatura de monoespaço, barra colorida).  |
| `seed`       | `string`                                                                      | —            | Hashed identificador estável (FNV- 1a) para escolher a cor da peça e, para as peças de terminal, a abreviatura; por omissão para `name`. |
| `initials`   | `string`                                                                      | —            | Texto de texto em vez do derivado, por exemplo, uma forma curta convencional de um comando.                                              |
| `src`        | `string \| null`                                                              | —            | URL da imagem; na falha de carga (também uma que falhou antes da hidratação) o azulejo mostra em vez disso.                              |
| `renditions` | `readonly OnImageRendition[] \| null`                                         | —            | `{ width, url }` rendições de `src` em vez `srcset`; o navegador escolhe um para o tamanho renderizado.                                  |
| `size`       | `20 \| 24 \| 26 \| 28 \| 30 \| 32 \| 40 \| 44 \| 46 \| 54 \| 64 \| 96 \| 118` | `44`         | Lado em "px".                                                                                                                            |
| `accent`     | `string \| null`                                                              | —            | Acento hexadecimal de seis dígitos para o azulejo da letra; caso contrário, uma cor paleta da semente.                                   |
| `label`      | `string`                                                                      | —            | Torna o ícone uma imagem com este nome; caso contrário, é decorativo.                                                                    |
| `priority`   | `boolean`                                                                     | —            | Carregamento ansioso e alta prioridade de busca para o primeiro ícone visível (herói, cabeçalho detalhe).                                |

As imagens são mostradas como entregues (`object-contain`, sem máscara, preguiçoso-carregado); azulejos obter o raio app-icon e sombra.
Ajudantes: `iconColor(seed, accent)`, `darken(hex)`, `iconInitials(name)`, `cliAbbreviation(command)`, `ICON_PALETTE`.

**Acessibilidade** Decorativo (`aria-hidden`) excepto `label` está definido; ao lado de um nome visível `label` Fora.
