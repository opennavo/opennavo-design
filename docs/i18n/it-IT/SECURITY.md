[English](../../../SECURITY.md) · [简体中文](../zh-CN/SECURITY.md) · [繁體中文](../zh-Hant/SECURITY.md) · [日本語](../ja-JP/SECURITY.md) · [Español](../es-ES/SECURITY.md) · [Português (Brasil)](../pt-BR/SECURITY.md) · [Русский](../ru-RU/SECURITY.md) · [Deutsch](../de-DE/SECURITY.md) · [Français](../fr-FR/SECURITY.md) · **Italiano**

> La versione inglese è il riferimento. Le traduzioni sono bozze prodotte localmente con traduzione automatica e richiedono una revisione umana. Il codice e i testi delle licenze restano invariati.

# Politica di sicurezza

## Segnalare una vulnerabilità

Non divulgare vulnerabilità tramite issue o pull request pubblici. Invia a **admin@opennavo.com** il pacchetto interessato, la versione o il commit, i passaggi per riprodurre il problema e l’impatto previsto. Rimuovi credenziali e dati personali dagli allegati.

Sono benvenute segnalazioni sulla gestione non sicura di HTML e URL, sulle dipendenze vulnerabili e sulla divulgazione accidentale di dati. Usa dati fittizi e verifica solo applicazioni e dispositivi sotto il tuo controllo. Indagheremo e coordineremo la divulgazione con chi ha segnalato il problema, senza garantire un tempo di risposta.

## Versioni supportate

Durante l’anteprima iniziale, le correzioni riguardano `main` e l’ultima versione pubblicata, se presente. Le vecchie anteprime e i fork non ricevono manutenzione separata.

## Responsabilità di integrazione

`OnMarkdownView` visualizza l’HTML fornito dall’applicazione ospitante. Sanifica l’HTML non attendibile prima di passarlo al componente e registra soltanto dati SVG attendibili. L’applicazione resta responsabile dell’accesso ai dati, dell’autenticazione e delle regole sui contenuti. Le preferenze di lingua e tema della galleria sono salvate localmente.
