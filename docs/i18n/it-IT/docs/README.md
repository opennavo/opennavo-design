[English](../../../README.md) · [简体中文](../../zh-CN/docs/README.md) · [繁體中文](../../zh-Hant/docs/README.md) · [日本語](../../ja-JP/docs/README.md) · [Español](../../es-ES/docs/README.md) · [Português (Brasil)](../../pt-BR/docs/README.md) · [Русский](../../ru-RU/docs/README.md) · [Deutsch](../../de-DE/docs/README.md) · [Français](../../fr-FR/docs/README.md) · **Italiano**

> La versione inglese è il riferimento. Le traduzioni sono bozze prodotte localmente con traduzione automatica e richiedono una revisione umana. Il codice e i testi delle licenze restano invariati.

<a id="opennavo-design--specification"></a>

# OpenNavo Design — specificazione

OpenNavo Il design è il sistema di progettazione OpenNavo le app: macOS cliente (Tauri + Vue), il sito web (Nuxt) e
Questa cartella è lo standard scritto. I pacchetti di codice lo implementano, e il riferimento di token è
generato dalla stessa fonte, quindi i numeri qui corrispondono sempre a quali navi.

Leggi in questo ordine la prima volta:

1. [Principi](principles.md) — per quale sistema si ottimizza, e le regole che regolano gli argomenti.
2. [Colore](color.md) — superfici, testo, frontiere, marca, stato; i temi scuri e leggeri e le loro regole di contrasto.
3. [Theming](theming.md) — come scuro, leggero e "seguire il sistema" funzionano sul web, in Tauri, Flutter e SwiftUI,
   e come un'altra app re-brands il sistema.
4. [Tipografia](typography.md), [Telaio](layout.md) (spacciatura, raggio, elevazione, app shell), [Mozione](motion.md),
   [Iconografia](iconography.md).
5. [Componenti](components.md) — il Vue set di componenti e quando utilizzare ogni parte.
6. [Modelli](patterns.md) — navigazione, liste, forme, feedback, azioni distruttive, caricamento e stati vuoti,
   autorizzazioni, popover della barra dei menu.
7. [Contenuto](content.md) — voce, regole di formulazione, numeri e date, le dieci lingue di interfaccia.
8. [Accesso](accessibility.md) e [Piattaforme](platforms.md) (macOS desktop, web, Flutter, SwiftUI).
9. [Marca](brand.md) — lo strato di marca, i nomi e i loghi.
10. [Adozione](adoption.md) — avviare una nuova app sul sistema, e spostare un'app che ha copiato OpenNavoI pacchetti.

Riferimento: [tutti i gettoni](reference/tokens.md) (generato da `tokens/tokens.json`; non modificare a mano).

<a id="conventions-in-this-spec"></a>

## Convenzioni in questo settore

- **Deve.** e **mai mai** sono regole; una recensione dovrebbe bloccare su di loro. **Dovrebbe** è il default che ha bisogno di un motivo
  Tutto il resto e' una guida.
- I nomi token sono scritti come loro JSON sentiero (`surface.card`), con la CSS variabile (`--on-surface-card`) o
  classe di utilità (`bg-surface-card`) dove il contesto è il codice.
- Le misure sono CSS pixel (punti su piattaforme Apple, pixel logici in Flutter).
- Esempi provengono da OpenNavo. Un'app di fratelli mantiene la struttura e scambia lo strato di marca ([Marca](brand.md)).
