[English](../../../brand.md) · [简体中文](../../zh-CN/docs/brand.md) · [繁體中文](../../zh-Hant/docs/brand.md) · [日本語](../../ja-JP/docs/brand.md) · [Español](../../es-ES/docs/brand.md) · [Português (Brasil)](../../pt-BR/docs/brand.md) · [Русский](../../ru-RU/docs/brand.md) · [Deutsch](../../de-DE/docs/brand.md) · [Français](../../fr-FR/docs/brand.md) · **Italiano**

> La versione inglese è il riferimento. Le traduzioni sono bozze prodotte localmente con traduzione automatica e richiedono una revisione umana. Il codice e i testi delle licenze restano invariati.

<a id="brand"></a>

# Marca

OpenNavo Il design è condiviso da una famiglia di applicazioni, che condividono tutto tranne uno strato sottile di marca, quindi una persona che sa
una app conosce già gli altri.

<a id="the-brand-layer"></a>

## Lo strato di marca

Un'applicazione può cambiare solo questi token (con entrambi i valori tematici):

| Token di design                                                                      | Che cosa porta                                                                                                |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| `brand.coral`                                                                        | Il riempimento accento: pulsanti accento, si attiva, progresso, colore anello di messa a fuoco, piccoli punti |
| `text.accent`                                                                        | Testo e link colorati                                                                                         |
| `accent.coralSubtle`                                                                 | Tinte accento dietro chip e tracce di progresso                                                               |
| `button.accentBg`, `button.accentHover`, `button.accentPressed`, `button.accentText` | Il pulsante accento                                                                                           |
| `shadow.focusRing`                                                                   | L'anello di messa a fuoco (tenere il 2 px gap + 2 px anello forma)                                            |
| `component.runningBorder`                                                            | Il confine di un compito in esecuzione                                                                        |
| `brand.salmon`, `accent.salmonSubtle`                                                | Test di enfasi caldo e distintivi                                                                             |
| `brand.violet`, `effect.heroGlow`, `effect.coverGlow`                                | Guarnizioni eroiche                                                                                           |
| `brand.logoGradient`, `brand.logoCoreGradient`                                       | Il marchio dell'app                                                                                           |

I nomi token rimangono gli stessi (`brand.coral` mantiene il suo nome anche quando l'accento di un'app è blu) così componenti e documenti
mai fork. Generare i gettoni di un'app con un file override ([Theming › Re-branding](theming.md#re-branding-another-app))
e mantenere i test di contrasto verde: testo accento deve ancora raggiungere 4,5:1 in entrambi i temi e l'accento riempire 3:1.

Tutto il resto — neutrali, colori di stato, tipo, spaziatura, radii, movimento, componenti e modelli — è lo stesso in
ogni app.

<a id="names-and-marks"></a>

## Nomi e segni

- Ogni app ha il suo nome e il suo marchio. I componenti prendono il marchio attraverso un `brand` slot; il sistema di progettazione non spedisce
  logo.
- Il OpenNavo nome e logo sono marchi del OpenNavo autori e sono **non lo so** coperto da questo repository's MIT
  licenza ([TRADEMARKS.md](../TRADEMARKS.md)). Le app costruite sul sistema non devono utilizzarle come loro nome o icona.
- Il prefisso del componente `On` e il CSS prefisso `--on-` appartiene al sistema, non a un prodotto; tenerli.

<a id="using-the-mark-well-for-opennavo-itself"></a>

## Usare bene il marchio (per OpenNavo si)

- La parola siede accanto al segno a 15 px, peso 600, in `brand.coral`; il marchio è alto 22 px accanto ad esso.
- Sotto i 32 px il marchio utilizza la sua geometria semplificata. Tenere lo spazio libero di almeno la metà dell'altezza del marchio.
- Su sfondi leggeri la stella nel segno passa al gradiente del nucleo ambra; non posizionare mai il segno su un'immagine occupata.
