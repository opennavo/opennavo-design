[English](../../../content.md) · [简体中文](../../zh-CN/docs/content.md) · [繁體中文](../../zh-Hant/docs/content.md) · [日本語](../../ja-JP/docs/content.md) · [Español](../../es-ES/docs/content.md) · **Português (Brasil)** · [Русский](../../ru-RU/docs/content.md) · [Deutsch](../../de-DE/docs/content.md) · [Français](../../fr-FR/docs/content.md) · [Italiano](../../it-IT/docs/content.md)

> O inglês é a fonte. As traduções são rascunhos feitos com tradução automática local e precisam de revisão humana. O código e os textos das licenças são preservados.

<a id="content"></a>

# Conteúdo

Palavras são interface. As mesmas regras se aplicam em cada idioma; Inglês e Chinês Simplificado são escritos em primeiro lugar, o
outras oito línguas são traduzidas e revisadas.

<a id="voice"></a>

## Voz

Simples, específico e calmo — um amigo capaz que explica o que está acontecendo, não um vendedor e não um arquivo de log.

- **Diz o que acontece.** "Move 14 itens para o Lixo. Você pode restaurá-los a partir daí." não "Tem certeza?"
- **Diz para onde vão os dados.** "Apenas neste Mac; nada é carregado." "A pesquisa vai directamente deste Mac para a Apple."
- **Falhas próprias, oferecer o próximo passo.** "Algum conteúdo não pôde ser carregado. O conteúdo anteriormente carregado foi mantido."
  "A verificação de atualização não pôde ser concluída. Tente novamente, ou verifique a rede."
- **Nada de publicidade, nada de enchimento.** Sem "Oops!", sem marcas de exclamação, sem "simplesmente", "apenas", "sem costura", "poderosa".
- **Concreto sobre abstrato.** Nomeie a aplicação, a contagem, o tamanho, a hora. "A área de trabalho do Docker necessita de administrador
  permissão" é melhor que "Permissão necessária".

<a id="wording-rules"></a>

## Regras de palavras

- **Botões** são verbos que nomeiam a ação: Instalar, Atualizar tudo (4), Mover para o Lixo, Retirar, Abrir em OpenNavo.
  As etiquetas de botões em inglês e os itens de menu usam a caixa de título; tudo o resto usa a caixa de frases.
- **Títulos** são frases ou estados substantivos curtos: "Sua lista está vazia", "Nenhum resultado para "vscode"".
- **Descrições** é uma frase. Dois no máximo. Coloque a ação após a explicação.
- **Dica** em configurações dizem o que a opção faz quando está ligada, não o que a etiqueta já diz.
- **Janelas de confirmação**: título faz a pergunta específica ("Excluir "Trabalho" deste Mac?"), corpo declara o
  Conseqüentemente, o botão confirmar repete o verbo.
- **Erros**: o que deu errado, em termos do usuário, mais o que fazer. Códigos de erro vão em detalhes ou logs, não títulos.
- **Linhas de privacidade** começar com um ícone de bloqueio e manter uma linha.
- Use aspas encaracoladas (“ ” ‘), os apóstrofos reais, o caráter elipse (...), o sinal de multiplicação (×) e o
  seta (→) para as alterações da versão: `1.2.9 → 1.3.0`.
- Os nomes do produto e da plataforma mantêm a sua ortografia: macOS, iPhone, App Store, GitHub, Homebrew. Os nomes dos aplicativos são mostrados como
  o desenvolvedor escreve-os.

<a id="chinese-简体--繁體"></a>

## Chinês ()

- 用自然、具体的口语书面语，不写套话和模板句（“一站式”“全方位”“赋能”“轻松实现”之类）。
- 按钮用动词短语：“安装”“全部更新（4）”“移到废纸篓”。不要“确定”“好的”。
- 中文 o 中文 om: “”” 30 o” ““” 768 MB”” OpenNavo 中打开”；与全角标点相邻时不加。
- 全角标点：，。；：？！“”（）——……；引号用“”，嵌套用‘’。
- 数量用“个”“款”“项”等合适的量词，大数用“万”“亿”（由格式化函数处理）。
- 繁体中文是独立的语言版本：用台湾、香港用户熟悉的词（“軟體”“資料夾”“設定”），不是简体的字形转换。

<a id="numbers-sizes-and-dates"></a>

## Números, tamanhos e datas

Formatar sempre através dos ajudantes compartilhados (`Intl`- baseado), nunca por concatenação de cadeias de caracteres:

| Gentil           | Regra                                                                      | Exemplos                            |
| ---------------- | -------------------------------------------------------------------------- | ----------------------------------- |
| Contagens        | Agrupamento local; forma compacta em espaços apertados                     | 17,392 · 1.7 万 · 1,7 тыс.          |
| Tamanhos         | Unidades decimais (1 KB = 1000 B), uma decimal inferior a 10               | 768 MB · 2,3 GB                     |
| Velocidades      | Tamanho por segundo                                                        | 560, 6 KB/ s                        |
| Percentagem      | Números inteiros, a menos que um significado decimal mude                  | 62% · 0.8%                          |
| Datas            | Ordem local, mês curto; omitir o ano no ano em curso                       | 23 de Outubro · 10, 23日 · 23. Okt. |
| Tempos relativos | Agora mesmo. → minutos → horas → ontem → dias (menos de uma semana) → data | Há 2 horas · "!                     |
| Vezes            | Relógio 24 horas em cada idioma                                            | 09:00 · 21:41                       |
| Duraçãos         | Segundos em menos de um minuto, depois minutos e segundos                  | 38 s · 2 min 5 s · 2 .              |
| Versões          | Conforme publicado; setas entre                                            | 4.49.9 → 4.50.0                     |

Plurals usam as categorias plurais do locale (inglês/outro; russo/pouco/muito/outro; chinês e japonês
formulário) — nunca `item(s)`.

<a id="interface-languages"></a>

## Linguagens de interface

| Código    | Idioma             | Notas                                                      |
| --------- | ------------------ | ---------------------------------------------------------- |
| `en-US`   | Inglês             | Linguagem de autoria para a redacção; processo de sentença |
| `zh-CN`   | 简体中文           | Fonte da verdade para o significado em OpenNavo            |
| `zh-Hant` | 繁體中文           | Vocabulário de Taiwan/Hong Kong; as datas seguem `zh-TW`   |
| `ja-JP`   | 日本語             | Polido, conciso; sem transformadas maiúsculas              |
| `es-ES`   | Español            | Muitas vezes 25–35% mais tempo do que o inglês             |
| `pt-BR`   | Português (Brasil) | Frequentemente 25–35% mais                                 |
| `ru-RU`   | Русский            | Frequentemente 30–60% mais; quatro formas plurais          |
| `de-DE`   | Deutsch            | Compostos longos; permitir o embrulho                      |
| `fr-FR`   | Français           | Espaço não quebrante antes : ; ? !                         |
| `it-IT`   | Italiano           | Frequentemente 20-30% mais                                 |

Regras:

- **Design para a língua mais longa.** Um rótulo sidebar tem cerca de 152 px em 13.5 px; medir russo, espanhol e
  Alemão contra ele e encurtar a tradução em vez de truncar. Botões podem crescer; nunca fixar a sua largura.
- **Sem concatenação.** Frases inteiras com espaços nomeados (`{count}`, `{name}`); tradutores movê-los.
- **Todos os locais têm todas as chaves.** Uma tradução em falta cai de volta para o Inglês, e CI verifica chaves e placeholders.
- **Marca e nomes de produtos** não são traduzidos; o nome da aplicação permanece OpenNavo em todas as línguas.
- **Tradução automática** é marcado como tal onde o conteúdo (não interface) é traduzido automaticamente, com um link para
  O original.
