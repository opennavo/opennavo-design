[English](../../../iconography.md) · [简体中文](../../zh-CN/docs/iconography.md) · [繁體中文](../../zh-Hant/docs/iconography.md) · [日本語](../../ja-JP/docs/iconography.md) · [Español](../../es-ES/docs/iconography.md) · [Português (Brasil)](../../pt-BR/docs/iconography.md) · [Русский](../../ru-RU/docs/iconography.md) · [Deutsch](../../de-DE/docs/iconography.md) · [Français](../../fr-FR/docs/iconography.md) · **Italiano**

> La versione inglese è il riferimento. Le traduzioni sono bozze prodotte localmente con traduzione automatica e richiedono una revisione umana. Il codice e i testi delle licenze restano invariati.

<a id="iconography"></a>

# Iconografia

<a id="interface-icons"></a>

## Icone di interfaccia

- **Set:** [Lucide](https://lucide.dev) (ISC licenza), in bundle come un sottoinsieme offline — solo le icone elencate in
  `packages/vue/src/icons/names.ts` nave, reso come SVG in linea in modo da lavorare in SSR e senza una rete.
- **Dimensioni:** 16 px nei menu e nella navigazione, 15 px in `md`/`lg` pulsanti, 14 px in `xs`/`sm` pulsanti e chip, 12–13 px
  Icone all'interno di un rendering di 26–32 px a 14–16 px.
- **Freno e colore:** Lucide's 2 px corsa a 24 px, scalato; icone prendere `currentColor`, quindi seguono il testo
  token del loro contesto. Non colorare le icone in modo indipendente a meno che non portino lo stato.
- **Significato:** un'icona per concetto attraverso l'app (ad esempio `circle-arrow-down` per aggiornamenti, `shield-check` per
  Sicurezza, `eraser` per la pulizia). I pulsanti di sola icona hanno sempre un `aria-label` e una punta degli strumenti.
- **Aggiungere icone:** il pacchetto fa i pacchetti solo le icone dei suoi componenti disegnare. Un'applicazione aggiunge la propria con
  `registerIcons(getIcons(lucide, ['compass', 'settings']))` (`@iconify/utils` + `@iconify-json/lucide`, o qualsiasi set in
  Iconificare JSON forma, indirizzata come `prefix:name`) una volta all'avvio, quindi il suo fascio porta proprio quello che utilizza.
  componenti stessi bisogno di andare in `packages/vue/src/icons/names.ts`Allora... `pnpm gen`. I nomi sconosciuti rendono
  nulla e avvertire nello sviluppo.

<a id="icon-tiles"></a>

## Icone piastrelle

Le piccole piastrelle quadrate tengono un'icona nelle liste delle caratteristiche, nelle impostazioni e nelle note: 26–40 px, `rounded-[7–9px]` (o
`rounded-app-icon` a 40 px e su), `bg-surface-raised` con `text-ink-secondary`, o uno stato sottile riempire con
colore di stato per gli elementi di stato.

<a id="app-icons"></a>

## icone dell'app

- L'opera d'arte dell'app è mostrata come consegnata, `object-contain`, nessuna maschera aggiuntiva: macOS le icone già includono la loro forma.
- L'opera mancante torna ad un **lettera tiglio**: un gradiente di 160° dell'accento dell'app (o un colore derivato dal suo
  identificatore) oscurato 18%, iniziali bianche al 42% del lato, `rounded-app-icon`, `shadow-app-icon`.
- Gli strumenti della linea di comando utilizzano **Tavole terminali**: una tegola di sfumatura scura in entrambi i temi con una abbreviazione monospaziale
  30% del lato e una barra colorata.
- Dimensioni in uso: 20, 24, 26, 28, 30, 32, 40, 44, 46, 54, 64, 96, 118 px.

<a id="brand-mark"></a>

## Marchio di marca

Ogni app spedisce il proprio marchio; i componenti del sistema lo portano attraverso un `brand` slot. I marchi non fanno parte di questo
licenza del repository ([Marca](brand.md)).
