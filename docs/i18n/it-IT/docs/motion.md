[English](../../../motion.md) · [简体中文](../../zh-CN/docs/motion.md) · [繁體中文](../../zh-Hant/docs/motion.md) · [日本語](../../ja-JP/docs/motion.md) · [Español](../../es-ES/docs/motion.md) · [Português (Brasil)](../../pt-BR/docs/motion.md) · [Русский](../../ru-RU/docs/motion.md) · [Deutsch](../../de-DE/docs/motion.md) · [Français](../../fr-FR/docs/motion.md) · **Italiano**

> La versione inglese è il riferimento. Le traduzioni sono bozze prodotte localmente con traduzione automatica e richiedono una revisione umana. Il codice e i testi delle licenze restano invariati.

<a id="motion"></a>

# Mozione

Il movimento spiega un cambiamento; non decora mai. La maggior parte dell'interfaccia non si anima affatto.

<a id="tokens"></a>

## Token di design

| Token di design   | Valore                           | Uso                                                                         |
| ----------------- | -------------------------------- | --------------------------------------------------------------------------- |
| `duration-fast`   | 120 m                            | Cambiamenti di colore su hover, premere e concentrare; toggles; ogni uscita |
| `duration-base`   | 200 m                            | Dialogi, fogli, la palette di comando e brindisi che entrano                |
| `duration-slow`   | 320 ms                           | Progressi di riempimento, metri di scansione, ingressi eroi e di marketing  |
| `ease-standard`   | `cubic-bezier(0.2, 0.8, 0.2, 1)` | Predefinito per cambiamenti di stato e piccoli movimenti                    |
| `ease-emphasized` | `cubic-bezier(0.3, 0, 0, 1)`     | Overlays in arrivo                                                          |
| `ease-exit`       | `cubic-bezier(0.4, 0, 1, 1)`     | Qualsiasi cosa parta, sempre con `duration-fast`                            |

<a id="what-moves"></a>

## Che cosa si muove

- **Cambiamenti di Stato** colori sfumati con `duration-fast` (`transition-colors duration-fast ease-standard` su ogni
  controllo interattivo).
- **Sovrapposizioni** entrare in 200 ms con la curva accentuata e lasciare in 120 ms con la curva di uscita: dialoghi centrati
  sbiadimento e scala da 0,96 fogli scivolano dal loro bordo, la tavolozza di comando scende 8 px dall'alto, brindisi aumento
  8 px. Lo scrim sbiadisce con il suo pannello. I menu e gli strumenti appaiono senza animazione.
- **Progressi** anima il suo valore, non salta mai indietro, e mostra uno stato indeterminato solo fino al primo reale
  Arriva il numero.
- **Pagine di marketing** può utilizzare il movimento ambiente lento (un bagliore di respirazione, anelli di derivazione schiacciati, icone galleggianti) sul
  compositor (trasforma, opacità) solo.

<a id="what-never-moves"></a>

## Che cosa non si muove mai

- Layout. Il contenuto non scorre, collassa o riflusso mentre l'utente legge o tipi; vedi
  [Principi › Stabilire sotto il puntatore](principles.md#4-stable-under-the-pointer).
- Interruttori tematici: i colori cambiano in un unico frame (`applyThemePreference` disabilita le transizioni per quella cornice).
- Numeri che si aggiornano sul posto (monitori, contatori) cambiano senza tweening.

<a id="reduced-motion"></a>

## Movimento ridotto

`base.css` blocca ogni animazione e transizione a 0,01 ms sotto `prefers-reduced-motion: reduce`, e rimuove liscio
Non fare affidamento su un'animazione per trasmettere informazioni; lo stato finale deve avere senso da solo.
