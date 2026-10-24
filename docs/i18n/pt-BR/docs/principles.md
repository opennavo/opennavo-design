[English](../../../principles.md) · [简体中文](../../zh-CN/docs/principles.md) · [繁體中文](../../zh-Hant/docs/principles.md) · [日本語](../../ja-JP/docs/principles.md) · [Español](../../es-ES/docs/principles.md) · **Português (Brasil)** · [Русский](../../ru-RU/docs/principles.md) · [Deutsch](../../de-DE/docs/principles.md) · [Français](../../fr-FR/docs/principles.md) · [Italiano](../../it-IT/docs/principles.md)

> O inglês é a fonte. As traduções são rascunhos feitos com tradução automática local e precisam de revisão humana. O código e os textos das licenças são preservados.

<a id="principles"></a>

# Princípios

OpenNavo aplicativos gerenciam coisas que as pessoas se importam em seu próprio computador: o que é instalado, o que funciona no login, o que
é excluído, o que fala com a rede. A interface tem que se sentir calma e confiável antes que se sinta inteligente.
Estes princípios decidem os trade-offs; o resto da especificação aplica-os.

<a id="1-content-first-chrome-recedes"></a>

## 1. O conteúdo primeiro, o cromo recua

As superfícies são quase neutras e pisadas por pequenas quantidades; as bordas são linhas de cabelo.
acento da marca para a coisa a fazer em seguida, cores do estado para o estado — nunca para decoração. Se uma tela precisa de uma
fundo colorido para olhar terminado, a hierarquia está errada.

- Dois temas, ambos de primeira classe. Escuro é o aspecto padrão da marca; a luz não é um filtro sobre ela. Cada cor
  token carrega um valor para cada tema, e ambos são verificados para contraste em CI ([Cor](color.md)).
- Os brilhos e gradientes são permitidos em exatamente dois lugares: os heróis do recurso e a marca. Eles são mais suaves na luz
  Modo.

<a id="2-say-what-will-happen-then-do-exactly-that"></a>

## 2. Diga o que vai acontecer, em seguida, fazer exatamente isso

Antes de qualquer coisa mudar a máquina do usuário, a interface indica o efeito em palavras simples e, onde ajuda, mostra
o comando atual ou a lista de arquivos. Botões nomeiam a ação ("Desinstalar", "Mover para Lixo"), não "OK".
"Nada acontece até confirmares" é uma promessa que o código mantém.

- As ações destrutivas confirmam, e o padrão para a variante reversível (lixo antes de excluir, desabilitar antes de remover).
- Após a ação, o resultado aparece onde o usuário começou, imediatamente ([Padrões › Os resultados se resolvem imediatamente](patterns.md#loading-progress-and-results)).

<a id="3-local-first-and-say-so"></a>

## 3. Local primeiro, e diga-o

Os dados lidos da máquina do usuário ficam lá a menos que escolham o contrário. Onde a interface lê algo
sensible (uso do disco, itens de inicialização, conexões de rede), uma nota de uma linha diz para onde os dados vão — geralmente
"Apenas neste Mac; nada é carregado". Quando algo vai para um servidor, a cópia nomeia o servidor.

<a id="4-stable-under-the-pointer"></a>

## 4. Estável sob o ponteiro

O layout nunca esvazia e reabastece enquanto o usuário está interagindo com ele.
sort, paging ou uma atualização de fundo mantém o conteúdo anterior até que o novo conteúdo esteja pronto, e linhas opcionais
reserva o seu espaço. Os esqueletos são apenas para a primeira carga de uma visualização. Uma atualização falhada mantém o último conteúdo bom
e diz isso em um banner. As pessoas lêem glicker como "o aplicativo está quebrado".

<a id="5-respect-the-platform"></a>

## 5. Respeite a plataforma

- **macOS:** Sinais de tráfego nativos e comportamento da barra de título, Configurações do sistema links profundos para permissões, itens da barra de menu
  que se comportam como as imagens (template, nunca ativando o aplicativo ou roubando foco), atalhos de teclado
  que correspondem ao Mac (escape fecha, busca, configuração, fuga).
- **Web:** páginas rápidas renderizadas por servidor que podem ser armazenadas e compartilhadas, então nada na HTML depende do visitante;
  as escolhas do visitante (tema, sugestão de idioma, consentimento) aplicam-se no navegador.
- **Conjuntos de ferramentas nativos** (SwiftUI, Flutter) usam os mesmos símbolos com os próprios controles da plataforma e fonte do sistema.

<a id="6-quiet-by-default"></a>

## 6. Silêncio por padrão

Use o feedback mais leve que faz o trabalho: estado em linha para as coisas que persistem, um brinde para uma ação completa, um
banner para uma visão degradada, uma janela apenas quando o usuário deve decidir. Nunca interrompa para obter informações. Notificações
fora da janela estão opt-in e dizer por que vieram.

<a id="7-one-system-for-every-app"></a>

## 7. Um sistema para cada aplicativo

Tokens, não valores: sem cores, raios ou durações codificadas no código do aplicativo. Componentes, não únicos. A camada da marca
é a única parte em que um aplicativo de irmãos muda ([Marca](brand.md)). Quando um design precisa de algo que o sistema não tem, adicioná-lo a
o sistema primeiro.

<a id="8-accessible-by-construction"></a>

## 8. Acessível por construção

Encontros de texto WCAG 2.2 AA (4.5:1) em ambos os temas, gráficos e indicadores de foco 3:1. Tudo funciona a partir do teclado
com um anel de foco visível. Moção respeita "reduzir movimento". Componentes carregam seus papéis ARIA para que os aplicativos não precisam
Lembrai-vos deles.[Acessibilidade](accessibility.md)).

<a id="9-every-language-fits"></a>

## 9. Cada idioma se encaixa

Os navios de interface em dez idiomas. Layouts são projetados para o rótulo mais longo (Russo e Alemão rodam 30-60%
mais longo do que o inglês; chinês e japonês são mais curtos, mas mais altos), números e datas são formatados por locale, e
nada é concatenado a partir de fragmentos ([Conteúdo](content.md)).

<a id="rules-that-settle-arguments"></a>

## Regras que resolvem argumentos

1. **Token, não valor.** Se faltar um valor, adicione um token com ambos os valores do tema.
2. **Mesmo valor escuro, trabalho diferente → Token diferente.** Preenchimento de hover, painel flutuante e segmento selecionado todos olhar
   `#262626` em modo escuro, mas necessita de diferentes valores de luz (`surface.raised`, `surface.popover`,
   `component.segmentActive`). Dividir papéis cedo.
3. **Uma acção primária por região.** As acções secundárias são botões secundários ou fantasmas; as acções destrutivas são
   botões de perigo e nunca são o foco padrão.
4. **Os controlos só de ícones precisam de um rótulo** (`aria-label` e uma dica) e devem ser ícones reconhecíveis.
5. **Uma carga falha nunca apaga o ecrã** que tinha conteúdo.
6. **Se mudar a máquina, ela confirma ou pode ser desfeita** — de preferência ambos.
