[English](../../../CONTRIBUTING.md) · [简体中文](../zh-CN/CONTRIBUTING.md) · [繁體中文](../zh-Hant/CONTRIBUTING.md) · [日本語](../ja-JP/CONTRIBUTING.md) · [Español](../es-ES/CONTRIBUTING.md) · [Português (Brasil)](../pt-BR/CONTRIBUTING.md) · [Русский](../ru-RU/CONTRIBUTING.md) · [Deutsch](../de-DE/CONTRIBUTING.md) · [Français](../fr-FR/CONTRIBUTING.md) · **Italiano**

> La versione inglese è il riferimento. Le traduzioni sono bozze prodotte localmente con traduzione automatica e richiedono una revisione umana. Il codice e i testi delle licenze restano invariati.

<a id="contributing"></a>

# Contributo

Grazie per l'aiuto. OpenNavo Il design viene estratto dal OpenNavo applicazioni e viene mantenuto accanto a loro; modifiche
dovrebbe mantenere ogni applicazione nella famiglia di lavoro.

<a id="ground-rules"></a>

## Norme di base

- **Prima i gettoni.** Cambiamento `tokens/tokens.json`# Corri # `pnpm gen`, commettere i file generati con il cambiamento. Mai
  modificare un file contrassegnato generated .
- **Entrambi i temi.** Ogni nuovo token di colore ha un buio `value` e, quando differisce, un `light` valore. Aggiungere o aggiornare un
  test di contrasto per qualsiasi nuova coppia di testo/background (`packages/tokens/tests`).
- **Roles, non guarda.** Se un token esistente ha il colore giusto ma il lavoro sbagliato, aggiungere un token per il lavoro
  ([Docs/principles.md](docs/principles.md#rules-that-settle-arguments)).
- **I componenti rimangono generici.** Nessun nome di prodotto, forme di dati del prodotto o chiamate di rete in `packages/vue`; app pass
  contenuto in attraverso props e slot.
- **I dottori si muovono con il codice.** Un nuovo token, componente prop o comportamento aggiorna la pagina corrispondente in `docs/`.
- **Prima l'inglese.** Documentazione, commenti di origine, errori e strumenti di sviluppo di default in inglese.`en-US`) è la lingua di origine per le stringhe dei componenti; conservare i contenuti esplicitamente localizzati.
- **Dieci lingue.** Nuove stringhe dei componenti vanno in tutti i dieci file di messaggi in `packages/vue/src/messages`, con chiavi e segnaposto corrispondenti. L'inglese rimane il default; non inferire una lingua dalle impostazioni del browser.

<a id="checks"></a>

## Controlli

```sh
pnpm install
pnpm gen && pnpm check
pnpm test && pnpm typecheck
pnpm format:check
swift test
(cd packages/flutter && flutter analyze && flutter test)
```

CI gestisce gli stessi comandi.

<a id="commits-and-pull-requests"></a>

## Commette e tira richieste

Piccolo, mirato tirare richieste con una breve descrizione del cambiamento visibile dall'utente e screenshot in entrambi i temi per
qualsiasi cosa visiva. Contribuendovi d'accordo che il vostro contributo è concesso sotto licenza MIT Licenza di questo
repository.

<a id="security-review-before-commits"></a>

## Recensione di sicurezza prima di commit

Corri! `pnpm secrets:worktree` mentre si preparano i cambiamenti, quindi si insediano i file previsti ed eseguono `pnpm secrets:staged`.
Corri! `pnpm secrets:history` prima di pubblicare la cronologia raggiungibile. Questi comandi richiedono Go 1.23+ e l'accesso alla rete
per il primo download del pinned Gitleaks scanner. Un guasto dello scanner blocca il controllo; non bypassarlo.

Rivedere ogni file in fase e il diff completo, compresi i cambiamenti esistenti, i file generati e i beni.
Non impegnare le credenziali, le chiavi private, la configurazione dell'ambiente reale, gli indirizzi di servizio privati o i dati personali.
Ignorare un file non lo protegge una volta tracciato o messo in scena.
Confermare che gli allegati binari possono essere resi pubblici. I risultati della scansione mostrano solo percorsi, numeri di linea e ID di regola;
una scansione pulita non sostituisce la revisione manuale.

Segnala le vulnerabilità in privato utilizzando [SICUREZZA.](SECURITY.md). Non includere mai segreti in problemi pubblici o registri.

Utilizzare i messaggi convenzionali in inglese e inglese GitHub rilascia titoli e note. Descrivi ciò che è cambiato,
perché, e quali controlli effettivamente correva. Non descrivere i test locali come passaggio remoto CI. API la stabilità non è
promesso prima dell'1,0; documento che infrange i cambiamenti nel changelog.

<a id="translations-and-previews"></a>

## Traduzioni e anteprime

L'inglese è la fonte per tutte le dieci lingue: `en-US`, `zh-CN`, `zh-Hant`, `ja-JP`, `es-ES`, `pt-BR`, `ru-RU`,
`de-DE`, `fr-FR` e `it-IT`. I messaggi dei componenti vivono in `packages/vue/src/messages`; i messaggi di galleria vivono in
`packages/vue/gallery/src/messages`. Traduci la copia della storia visibile così come la navigazione e le etichette accessibili.
Mantenere i nomi dei componenti, i valori di enum, gli URL, i campioni di codice e gli originali della licenza invariati.

Gli specchi della documentazione completa vivono in `docs/i18n/<locale>/`, seguendo i percorsi del repository inglese.
Le nuove traduzioni iniziano come bozze assistite dalla macchina offline e necessitano di una recensione linguistica, in particolare tecnica e legale
Prose. L'inglese rimane autorevole. Rivedere il vocabolario portoghese brasiliano separatamente dal portoghese generico.
Quando l'inglese cambia, aggiornare i file corrispondenti in ogni lingua e quindi registrare il suo SHA-256 in
`docs/i18n/manifest.json`. Correre `pnpm check:i18n` per verificare la copertura, la freschezza delle fonti, i link e gli esempi di codice.
Non aggiornare il manifesto semplicemente a tacere un fallimento senza aggiornare le traduzioni.

schermate README in `docs/previews` mostra i dati del campione fittizio dalla galleria reale. Catturali con
browser-uso al tema documentato e lingua, senza browser cromato o informazioni personali.
