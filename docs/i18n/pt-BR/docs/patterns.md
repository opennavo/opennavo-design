[English](../../../patterns.md) · [简体中文](../../zh-CN/docs/patterns.md) · [繁體中文](../../zh-Hant/docs/patterns.md) · [日本語](../../ja-JP/docs/patterns.md) · [Español](../../es-ES/docs/patterns.md) · **Português (Brasil)** · [Русский](../../ru-RU/docs/patterns.md) · [Deutsch](../../de-DE/docs/patterns.md) · [Français](../../fr-FR/docs/patterns.md) · [Italiano](../../it-IT/docs/patterns.md)

> O inglês é a fonte. As traduções são rascunhos feitos com tradução automática local e precisam de revisão humana. O código e os textos das licenças são preservados.

<a id="patterns"></a>

# Padrões

Como os componentes se combinam em telas. Cada padrão nomeia os componentes que ele usa; seus detalhes estão em
[Componentes](components.md).

<a id="navigation"></a>

## Navegação

- **Barra lateral** (`OnSidebar`, `OnNavItem`): a marca, em seguida, agrupa-se com um `text-label` título (Browse, Listas, Ferramentas,
  Mina ...), então as configurações são fixadas na parte inferior. O item atual usa `component.navActive` e `aria-current="page"`.
  As contas estão alinhadas à direita. `text-ink-tertiary`; um conde que precisa de atenção torna-se um distintivo de coral; um ponto marca
  "algo novo" sem um número.
- **Barra de Ferramentas** (`OnToolbar`): para trás/para frente e recarregar à esquerda em aplicativos de desktop (o navegador fornece-los no
  web), o gatilho de busca com o seu `⌘K` dica à direita, em seguida, switches globais (tema, linguagem na web).
- **Paleta de comando** (`OnCommandPalette`, `⌘K` / `Ctrl K`): acções e destinos em primeiro lugar,
  "Ver todos os resultados para "q"" como a primeira linha (Enter abre a página de resultados completos); itens abaixo. Setas mover, Enter
  abre, Escape fecha e retorna foco.
- **Abas** (`OnTabs`) alternar visões de um objeto (uma visão geral de um aplicativo, versões, dependências, detalhes) e são links
  quando cada view tem seu próprio URL. **Controlos segmentados** (`OnSegmented`) modos de filtro ou de comutação dentro de uma vista (período,
  sort, "Tudo / Sucesso / Falhado").
- **Trincas de pão** (`OnBreadcrumb`) aparecem em páginas detalhadas alcançadas a partir de uma lista.
- Cada view tem uma URL (rotas de desktop incluídas) links tão profundos, back/forward e restaurar o trabalho.

<a id="page-anatomy"></a>

## Anatomia da página

1. Cabeçalho da página (`OnPageHeader`): `text-title1` título, uma linha de texto secundário com o fato chave (conta,
   verificar), ações de página alinhadas à direita (primário último).
2. Banner opcional para o estado degradado (offline, falha parcial) diretamente sob o cabeçalho.
3. Secções (`OnSectionHeader`): `text-headline` título, um pequeno subtítulo terciário, "View all →" à direita.
4. O carril (`OnRailPanel`, `OnRailSection`) contém resumos e acções secundárias; nada no caminho-de-ferro é exigido
   para terminar uma tarefa na coluna principal.

<a id="lists-cards-and-tables"></a>

## Listas, cartões e tabelas

- **Cartões** para navegação (ícone, nome, resumo de uma linha, duas ou três estatísticas, uma ação). A carta inteira é o link;
  o botão de ação dentro pára a propagação.
- **Linhas** para listas densas em que você atua (atualizações, histórico, aplicativos instalados): ícone, nome e meta à esquerda, chips de estado
  no meio, as ações direita; ações destrutivas vivem no menu da linha.
- **Tabelas** (`OnTable`) quando as colunas são comparadas ou ordenadas; colunas numéricas alinhadas à direita com `tabular-nums`;
  opções na primeira coluna; um cabeçalho pegajoso em tabelas longas.
- Paginar listas longas (`OnPagination`) em vez de pergaminho infinito, então a posição é linkable e estável.
- **A refinação mantém o conteúdo:** enquanto uma consulta, ordenação, filtro ou alteração de página, continue mostrando os resultados anteriores (diminuído
  se necessário) até que os novos cheguem; reserve espaço para linhas de contagem opcionais para que nada mude.

<a id="search"></a>

## Procurar

- O gatilho da barra de ferramentas abre a paleta; uma página de pesquisa mostra resultados completos com filtros como controles segmentados ou
  Batatas fritas.
- Resultados atualizados como os tipos de usuário sem limpar entre; "Nenhum resultado para "q"" vem com uma dica concreta
  (outra ortografia, o nome em inglês, uma fonte diferente).

<a id="settings-and-forms"></a>

## Configurações e formulários

- As configurações são agrupadas em cartas de linhas (`SettingRow` padrão): etiqueta e dica opcional de uma linha à esquerda, o
  controle à direita, linhas separadas por `border.subtle`.
- **As alterações aplicam-se imediatamente** — comuta, controla segmentado, menus. Não existe nenhum botão Salvar nas configurações; uma mudança
  que falha reverte e diz porquê num brinde.
- Escolha o controle pelo número de opções: uma opção para ligar/desligar, um controle segmentado para dois a quatro exclusivos
  opções, um menu para listas mais longas (língua) com a escolha atual marcada.
- Entradas de texto validam em desfocar ou enviar, nunca em cada tecla digitada; erros aparecem sob o campo em
  `text-status-danger` com a correção ("Use um endereço completo https://"), e o campo mantém seu valor.
- Os formulários na Web são uma coluna com as etiquetas acima dos campos; o botão enviar está desativado até que os campos necessários estejam
  válido, com uma dica que diz o que está faltando.

<a id="feedback"></a>

## Feedback

| Situação                                            | Utilização                                                                                                |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Uma ação terminada (copiada, adicionada, instalada) | Brinde, sucesso ou neutro, descarta após 4 s, pausas sobre pairar                                         |
| Uma ação falhou                                     | Brinde com a razão e, quando possível, uma ação (retentar, Ver log)                                       |
| Uma visão é degradada (dados offline, parciais)     | Banner sob o cabeçalho que diz o que ainda funciona                                                       |
| É necessária uma decisão                            | Janela (`OnConfirm`, `OnModal`)                                                                           |
| Uma tarefa longa está em execução                   | Progresso no local (linha, cartão ou painel de tarefas) e na barra de menus se continuar em segundo plano |
| Algo aconteceu enquanto a janela estava fechada     | Uma notificação do sistema, apenas se o utilizador os activar                                             |

No máximo três brindes são visíveis; falhas são anunciadas imediatamente para os leitores de tela (`role="alert"`), outros
educadamente.

<a id="destructive-and-system-changing-actions"></a>

## Acções destrutivas e de mudança de sistema

1. Diga o que vai acontecer, com a lista do que será removido ou alterado e seu tamanho.
2. Default to the reversível option: move para Lixo, desabilita um item de login em vez de excluí-lo, mantenha um rollback.
3. O botão confirmar nomeia a ação ("Desinstalar", "Mover 14 itens para Lixo") e usa a variante de perigo; Cancelar é
   o foco padrão.
4. Após a ação: o resultado no lugar de uma vez, um brinde com Desfazer quando é possível, e uma entrada no
   História.
5. Ações que precisam de direitos de administrador dizem isso antes de começar; a senha indica para que serve.

<a id="loading-progress-and-results"></a>

## Carregamento, progresso e resultados

- Primeira carga de uma vista: esqueletos (`OnSkeleton`) forma como o conteúdo, sem spinners em páginas inteiras.
- Atualizar, refinar, recarregar o fundo: mantenha o conteúdo atual; uma pequena dica de progresso no máximo.
- Tarefas longas mostram o progresso determinado assim que um número existe (bytes, itens), com o passo atual em palavras,
  e pode ser cancelado quando o cancelamento é seguro. Os logs estão disponíveis mas colapsaram.
- **Os resultados são resolvidos imediatamente:** quando uma tarefa termina, cada lugar que mostra o objeto (linha, página de detalhes, barra lateral
  conta, barra de menus) atualiza imediatamente a partir do próprio resultado da tarefa, não após a próxima atualização periódica.

<a id="empty-error-and-offline-states"></a>

## Vazio, erro e estados off-line

- **Vazio** (`OnEmpty`): um ícone, um título curto ("Sua lista está vazia"), uma frase que diz como preenchê-lo, e
  A acção quando há uma.
- **Erro** (`OnErrorState`): o que falhou em palavras simples, Retry, e nenhum traço de pilha; uma atualização falhada de uma visão que
  tinha conteúdo mostra um banner em vez disso e mantém o conteúdo.
- **Desligado** (`OnOffline`): o conteúdo em cache permanece utilizável; recursos que precisam da rede dizem assim onde
  Aparecer.

<a id="permissions"></a>

## Permissões

- Pergunte no momento da necessidade, com uma frase de porquê e o que permanece privado.
- "Ativar" abre o painel exato de configurações do sistema; um pequeno guia flutuante mostra o que arrastar ou alternar, sem tomar
  foco das configurações do sistema.
- Quando o usuário retorna, a visualização re-check e continua por si só; se macOS requer um relançamento, a vista diz assim
  e oferece-o.
- Nunca importunar: uma permissão recusada deixa uma linha silenciosa com a opção Activar, e não diálogos repetidos.

<a id="menu-bar-items-and-popovers-macos"></a>

## Itens de barras de menu e popovers (macOS)

- Os itens da barra de menus são imagens de modelos desenhadas como itens do sistema; texto e gráficos seguem o estilo da barra de menus do sistema.
- Clicar em um item abre seu popover sob ele; clicando novamente ou em qualquer outro lugar o fecha.
  janela principal ou roubar foco do aplicativo que o usuário está dentro.
- Popovers são cartões compactos (`surface.card`, `rounded-panel`) com as três a cinco linhas mais úteis, uma primária
  ação e um link que abre a visão completa na janela principal.

<a id="onboarding"></a>

## A bordo

Uma única tela de lista de verificação: cada requisito é uma linha com um ícone de status, o que é e uma ação de correção; a principal
O botão "Começar" activa quando as linhas necessárias passam, com uma frase a dizer o que ainda falta. Opcional
as etapas são skippable e alcançáveis mais tarde em Configurações.

<a id="website-specifics"></a>

## Específicos do sítio Web

- O site nunca pede uma conta. As escolhas por visitador (tema, consentimento, sugestão de idioma, listas salvas) vivem em
  O navegador.
- Os links "Abrir em aplicativo" pedem ao aplicativo de desktop para mostrar o que ele faria; o aplicativo sempre pede confirmação antes
  rodando qualquer coisa que uma página da web pediu.
- Uma sugestão de linguagem aparece uma vez, descartável, e nunca redireciona por conta própria.
