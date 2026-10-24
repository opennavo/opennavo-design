[English](../../../typography.md) · [简体中文](../../zh-CN/docs/typography.md) · [繁體中文](../../zh-Hant/docs/typography.md) · [日本語](../../ja-JP/docs/typography.md) · [Español](../../es-ES/docs/typography.md) · **Português (Brasil)** · [Русский](../../ru-RU/docs/typography.md) · [Deutsch](../../de-DE/docs/typography.md) · [Français](../../fr-FR/docs/typography.md) · [Italiano](../../it-IT/docs/typography.md)

> O inglês é a fonte. As traduções são rascunhos feitos com tradução automática local e precisam de revisão humana. O código e os textos das licenças são preservados.

<a id="typography"></a>

# Tipografia

<a id="typeface"></a>

## Tipoface

Aplicações usar o **fonte de UI do sistema** — SF Pro nas plataformas Apple, Segoe UI no Windows — através
`@opennavo/design-vue/system-fonts.css`, com os rostos CJK da plataforma para chineses e japoneses:

| Idioma                                                  | Pilha (system-fonts.css)                                                          |
| ------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Latim, Cirílico                                         | `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`                       |
| Chinês simplificado (`:lang(zh)`)                       | `-apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', sans-serif` |
| Chinês tradicional (`:lang(zh-Hant)`, `zh-TW`, `zh-HK`) | `… 'PingFang TC', 'Microsoft JhengHei', sans-serif`                               |
| Japonês (`:lang(ja)`)                                   | `… 'Hiragino Sans', 'Yu Gothic', sans-serif`                                      |
| Código, versões, caminhos                               | `ui-monospace, 'SFMono-Regular', Menlo, Consolas, 'Liberation Mono', monospace`   |

O tipo de letra do sistema corresponde ao sistema operativo, não custa nenhum download e torna o CJK melhor.
(`font.family.*`, que começam com Inter) são os **pilha da marca** para os locais onde o tipo de letra do sistema não está disponível
ou não desejado: imagens de partilha geradas, arte de marketing e a galeria de componentes. `lang` ligado `<html>` (e sobre
qualquer elemento em outra língua) assim que a pilha certa se aplica.

Inter, quando utilizado, corre com `font-feature-settings: "cv11", "ss01"` (um único andar a, algarismos alternados) e
`font-optical-sizing: auto`; `base.css` Define os dois.

<a id="scale"></a>

## Escala

`text-{name}` define o tamanho, a altura da linha, o peso e o seguimento juntos. Use a escala; não defina os tamanhos de letra à mão
exceto para os tamanhos densos listados em Pequeno texto .

| Classe          | Tamanho / altura da linha | Peso | Rastreamento        | Utilização                                               |
| --------------- | ------------------------- | ---- | ------------------- | -------------------------------------------------------- |
| `text-hero`     | 76 / 78                   | 600  | −0,035em            | Apenas o herói home do site                              |
| `text-section`  | 46 / 50                   | 600  | −0,03em             | Títulos das secções Web                                  |
| `text-display`  | 40 / 44                   | 600  | −0,03em             | Cabeçalhos de herói de recurso                           |
| `text-title1`   | 28 / 34                   | 600  | −0,02em             | Títulos das páginas                                      |
| `text-title2`   | 22 / 28                   | 600  | −0,02em             | Títulos de diálogo, cabeçalhos de detalhes compactos     |
| `text-headline` | 16 / 24                   | 600  | −0,01em             | Títulos das secções e títulos das cartas                 |
| `text-stat`     | 20 / 26                   | 600  | −0,015em            | Valores estatísticos                                     |
| `text-body`     | 14 / 22                   | 400  | 0                   | Texto do corpo                                           |
| `text-body-sm`  | 13 / 20                   | 400  | 0                   | Listas, tabelas, linhas de configuração                  |
| `text-caption`  | 12 / 18                   | 400  | 0                   | Informações secundárias                                  |
| `text-label`    | 11 / 16                   | 600  | 0, 08em, maiúsculas | Rótulos de grupo (seções da barra lateral, sobrancelhas) |
| `text-mono`     | 12 / 18                   | 400  | 0                   | Comandos, versões, registos                              |

Em telas estreitas os cabeçalhos descem a escala em vez de encolher livremente: o herói home é `text-display` abaixo
768 px, `text-section` de 768 px e `text-hero` de 1024 px; os cabeçalhos do recurso- herói caem para 36 px abaixo de 768 px. App
as janelas nunca vão abaixo de sua largura mínima, então o texto do aplicativo não escala.

<a id="small-text"></a>

### Texto pequeno

UI de área de trabalho densa usa alguns tamanhos inter-intermediários, sempre com tokens para cor: 12.5 px para controles compactos e tabela
células, 11. 5 px para metadados sob uma linha, 10. 5 px para emblemas minúsculos. Nada menor que 10. 5 px, e nada abaixo
12 px traz informações essenciais.

<a id="rules"></a>

## Regras

- **Números:** Via de administração `tabular-nums` onde os números se alinham ou mudam no local (estatísticas, tabelas, progresso,
  Contadores, monitores). Formatar números, tamanhos e datas para a localidade ([Conteúdo](content.md)).
- **Peso:** 400 para texto, 500 para controles e etiquetas segmentadas, 600 para cabeçalhos, etiquetas de botões e ênfase.
  Mais de 700 na interface.
- **Ênfase:** negrito (600) dentro de uma frase, nunca colore sozinho. Destaques em linha nas descrições usam `**…**` e
  renderizar como `text-ink-primary` peso 600 dentro do texto secundário.
- **Maiúsculas** apenas através `text-label`, e apenas para o latim e cirílico; as etiquetas CJK não são transformadas.
- **Comprimento da linha:** manter o texto corporal sob cerca de 72 caracteres (ou 40 caracteres CJK) por linha; descrições em heróis
  estão tapados por volta de 430 px.
- **Rubricas** equilíbrio das suas linhas (`text-wrap: balance`) nas páginas de marketing; os títulos CJK quebram na pontuação, não
  meio-palavra, onde o navegador permite.
- **Truncagem:** truncar etiquetas de uma única linha com uma elipse e expor o texto completo em uma dica ou `title`;
  nunca trunque números ou status.
- **Espaçamento CJK:** a cópia coloca um espaço de meia largura entre as letras ou dígitos CJK e os latinos (""30 ",
  """"" 768 MB"" e nenhum próximo à pontuação de largura total. `text-autospace: normal` em `base.css` preenche apenas uma lacuna
  cópia perdida; nunca substitui o espaço no texto fonte.
