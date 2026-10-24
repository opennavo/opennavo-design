[English](../../../components.md) · [简体中文](../../zh-CN/docs/components.md) · [繁體中文](../../zh-Hant/docs/components.md) · [日本語](../../ja-JP/docs/components.md) · [Español](../../es-ES/docs/components.md) · [Português (Brasil)](../../pt-BR/docs/components.md) · [Русский](../../ru-RU/docs/components.md) · **Deutsch** · [Français](../../fr-FR/docs/components.md) · [Italiano](../../it-IT/docs/components.md)

> Englisch ist die Ausgangssprache. Die Übersetzungen wurden lokal maschinell erstellt und müssen sprachlich geprüft werden. Code und Lizenztexte bleiben unverändert.

<a id="components"></a>

# Komponenten

Referenz für jede Komponente in [`@opennavo/design-vue`](../../../../packages/vue): wofür es ist, seine Requisiten, Ereignisse und
Slots (wie in der Quelle angegeben), Varianten, wann sie verwendet werden sollen und wie sie sich für Tastatur und unterstützende Technologie verhalten.
Wie sich die Komponenten zu Bildschirmen verbinden, ist in [Muster](patterns.md); die Galerie ()`pnpm gallery`) zeigt alle
Variante in beiden Themen und allen zehn Sprachen. Apps, die nicht verwendet werden Vue folgen der gleichen Anatomie, Größen und Zustände
Mit den Token direkt ()[Plattformen](platforms.md)).

Übereinkommen:

- **Ausfall** `—` bedeutet, dass die Prop optional und entschärft ist; boolesche Props ohne aufgelisteten Standard sind `false`.
- Eingebaute Strings ("Close", "Pagination", "Search" ...) stammen aus dem Nachrichtenkatalog des Pakets im Gebietsschema
  gegeben wird `createOnUi({ locale })` (Englisch) Requisiten benannt `label`, `placeholder`, `title`,
  `description`, `…Label` Überschreiben Sie sie.
- **Icons** sind Lucide Namen`search`, `lucide:search`) oder `prefix:name` einer Menge von `registerIcons`.
- **Links:** Komponenten, die Links darstellen `linkAs` (`'a'` standardmäßig oder `RouterLink` / `NuxtLink`. Mit einem
  Routerkomponente URL wird übergeben als `to`; Komponenten lesen nie die aktuelle Route - Pass `active`,
  `modelValue` oder `page` Sie selbst.
- **Fokusring:** Alle interaktiven Part Shows `shadow-focus-ring` am `:focus-visible`Overlays verschieben den Fokus mit
  `moveFocus`, der den Skriptfokus nur nach der Tastaturnavigation klingelt (WebKit würde ihn sonst auf einer beliebigen Seite klingeln lassen)
  programmatischer Fokus.
- Farben, Radien und Typ kommen von `@opennavo/design-tokens`; nichts hier hart-codes eine Farbe, so beide Themen und eine
  Re-Branded-Akzent gilt automatisch.

**Gruppen:** [Aktionen und Inputs](#actions-and-inputs) · [Container und Daten](#containers-and-data) ·
[Zustände](#states) · [Überlagerungen](#overlays) · [Layout und Navigation](#layout-and-navigation) ·
[Schaufenster](#showcase)

---

<a id="actions-and-inputs"></a>

## Aktionen und Inputs

<a id="onbutton"></a>

### OnButton

Der Standard-Button oder ein Link, der wie einer aussieht.

| Propeller       | Typ                                                           | Ausfall       | Beschreibung                                                                                                   |
| --------------- | ------------------------------------------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------- |
| `variant`       | `'primary' \| 'secondary' \| 'accent' \| 'ghost' \| 'danger'` | `'secondary'` | Visuelles Gewicht; siehe Varianten.                                                                            |
| `size`          | `'xs' \| 'sm' \| 'md' \| 'lg'`                                | `'md'`        | Höhen 26 / 28 / 34 / 40.                                                                                       |
| `shape`         | `'default' \| 'round'`                                        | `'default'`   | `round` gibt eine Pillenform.                                                                                  |
| `icon`          | `string`                                                      | —             | Icon vor dem Text (14 px in xs/sm, 15 px in md/lg).                                                            |
| `iconOnly`      | `boolean`                                                     | —             | Quadratische Schaltfläche, die nur das Symbol zeigt; der Standard-Steckplatz ist nicht gerendert. `ariaLabel`. |
| `ariaLabel`     | `string`                                                      | —             | Zugänglicher name; erforderlich für icon-only-buttons.                                                         |
| `loading`       | `boolean`                                                     | —             | Zeigt einen Spinner anstelle des Icons, Sets `aria-busy`und deaktiviert den Button.                            |
| `disabled`      | `boolean`                                                     | —             | Deaktiviertes Aussehen; Klicks werden ignoriert.                                                               |
| `block`         | `boolean`                                                     | —             | Füllen Sie die verfügbare Breite aus.                                                                          |
| `type`          | `'button' \| 'submit' \| 'reset'`                             | `'button'`    | Native Button Type (nur Buttons).                                                                              |
| `href`          | `string`                                                      | —             | Rendern Sie einen Link anstelle eines Buttons.                                                                 |
| `target`, `rel` | `string`                                                      | —             | Übergeben an den Link.                                                                                         |
| `linkAs`        | `string \| Component`                                         | `'a'`         | Gliederkomponente; `href` Es wird als `to` für Routerkomponenten.                                              |

| Veranstaltung | Nutzlast              | Beschreibung                                       |
| ------------- | --------------------- | -------------------------------------------------- |
| `click`       | `[event: MouseEvent]` | Nicht emittiert, während deaktiviert oder geladen. |

| Slot      | Beschreibung |
| --------- | ------------ |
| `default` | Das Etikett. |

**Varianten.** `primary` (invertiert, eine pro Fläche), `secondary` (Standard) `accent` (Markenfarbe, für die eine Aktion)
Das sollte herausstechen, `ghost` (umrissen, für Aktionen mit geringer Betonung und Symbolleisten), `danger` (roter Farbton, destruktiv).
Deaktivierte und geladene Tasten jeder Variante teilen sich einen gedämpften Stil.

**Verwendung** für Aktionen, für Navigation als Button Pass `href`. Verwenden Sie keinen Button für Ein-/Aus-Einstellungen
(`OnToggle`) oder eine von wenigen Optionen auszuwählen (`OnSegmented`).

**Zugänglichkeit.** Eingeborener `<button>` (Tastatur und Formularverhalten enthalten) oder ein Link.
Behinderter Link verliert seine `href` (oder, mit einer Router-Komponente, hält) `to`, get `aria-disabled="true"` und
sein Klicken wird verhindert. Icon-only Buttons müssen `ariaLabel`; fügen Sie eine `OnTooltip` für sehende Nutzer.

<a id="onicon"></a>

### OnIcon

Ein Inline-SVG-Icon aus den gebündelten oder registrierten Sets.

| Propeller | Typ      | Ausfall      | Beschreibung                                                                         |
| --------- | -------- | ------------ | ------------------------------------------------------------------------------------ |
| `name`    | `string` | erforderlich | Lucide Name:`search`, `lucide:search`) oder `prefix:name` eines registrierten Sets.  |
| `size`    | `number` | `16`         | Pixelgröße: 12 in Badges, 14 in Buttons, 16 standardmäßig, 17 Sidebar, 18 Palette.   |
| `label`   | `string` | —            | Macht das Icon zu einem Bild ()`role="img"`, `aria-label`Ansonsten ist es dekorativ. |

Schlagbreite ist 2 unter 16 px und 1,6 sonst. `currentColor`Unbekannte Namen machen eine leere SVG und
Warnen in der Entwicklung. Rendern ist synchron, also erscheinen Icons in Server-Rendering HTML.

**Zugänglichkeit.** Standardmäßig dekorativ ()`aria-hidden="true"`. Geben `label` nur Ikonen, die eine Bedeutung auf ihren
Neben dem text, lassen sie es aus.

<a id="onchip"></a>

### OnChip

Ein kurzes Label für einen Typ oder Zustand ("App", "Update verfügbar", "Deprecated").

| Propeller | Typ                                                                                             | Ausfall     | Beschreibung                                                                                                           |
| --------- | ----------------------------------------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------- |
| `tone`    | `'neutral' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'accent' \| 'coral' \| 'outline'` | `'neutral'` | `accent` (Lachs) für Updates, `coral` für den Fortschritt, `outline` für neutrale Notizen wie maschinelle Übersetzung. |
| `outline` | `boolean`                                                                                       | —           | Umrissen statt gefüllt; kombiniert mit jedem Ton (z.B. deaktiviert =) `danger` + Umriss.                               |
| `dot`     | `boolean`                                                                                       | —           | Führende 6 px Punkt in der Textfarbe.                                                                                  |
| `icon`    | `string`                                                                                        | —           | Führendes 12 px-symbol.                                                                                                |
| `size`    | `'sm' \| 'md'`                                                                                  | `'sm'`      | Höhen 20 / 24.                                                                                                         |

| Slot      | Beschreibung |
| --------- | ------------ |
| `default` | Der Text.    |

**Verwendung** für Status und Metadaten. Sagen Sie immer den Zustand in Worten; Farbe unterstützt ihn nur. Nicht interaktiv — für eine
Wahlmöglichkeit `OnSegmented`; für eine Zählung auf Navigation verwenden `OnBadge`.

**Zugänglichkeit.** Plain Inline-Text; der Punkt und das Icon sind dekorativ.

<a id="onbadge"></a>

### OnBadge

Eine Korallenzahl ("6", "99+") oder ein kleines hervorgehobenes Textlabel ("Diese Woche verfügbar").

| Propeller | Typ      | Ausfall | Beschreibung                                                                                         |
| --------- | -------- | ------- | ---------------------------------------------------------------------------------------------------- |
| `count`   | `number` | —       | Erstellt ein Count-Badge; ohne es zeigt das Badge seinen Slot als Text an. Negative Counts zeigen 0. |
| `max`     | `number` | `99`    | Counts Above It Show auf Englisch `max+`.                                                            |
| `label`   | `string` | —       | Zugänglicher Name eines Count-Badges, z.B. "6 Updates verfügbar".                                    |

| Slot         | Beschreibung                                                                                                                            |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| `default`    | Text eines Textabzeichens.                                                                                                              |
| `decoration` | Eine kleine Markierung nach dem Text (ca. 13 px), `currentColor`), z. B. ein Stern oder eine App-Marke, vor Bildschirmlesern verborgen. |

**Verwendung** Zählen Sie Abzeichen für Dinge, die Aufmerksamkeit benötigen (Updates); `OnNavItem` und `OnSidebar` Verwenden Sie sie durch
von `badge` prop. Textabzeichen für redaktionelle Highlights verwenden. `OnChip`.

**Zugänglichkeit.** Eine bloße Zahl bedeutet wenig für einen Bildschirmleser; Pass `label` für Count Badges.

<a id="ontoggle"></a>

### OnToggle

Ein/Aus-Schalter für Einstellungen, die sofort gelten.

| Propeller        | Typ       | Ausfall      | Beschreibung                                                   |
| ---------------- | --------- | ------------ | -------------------------------------------------------------- |
| `modelValue`     | `boolean` | erforderlich | Ein- oder Aus-Zustand`v-model`).                               |
| `disabled`       | `boolean` | —            | Nicht veränderbar; gedimmt.                                    |
| `ariaLabel`      | `string`  | —            | Zugänglicher Name, wenn kein sichtbares Etikett vorhanden ist. |
| `ariaLabelledby` | `string`  | —            | ID des sichtbaren Labels, z. B. der Einstellungszeilentext.    |

| Veranstaltung       | Nutzlast           | Beschreibung    |
| ------------------- | ------------------ | --------------- |
| `update:modelValue` | `[value: boolean]` | Der neue Staat. |

**Verwendung** in Einstellungszeilen mit dem Beschriftungszeichen links und dem Schalter rechts.
"Speichern" oder in einer Liste von Elementen, auf die man reagieren soll, verwenden `OnCheckbox`.

**Zugänglichkeit.** A `<button role="switch">` mit `aria-checked`; Space and Enter toggle it. Nennen Sie es mit
`ariaLabelledby` (bevorzugt, auf das sichtbare Etikett zeigt) oder `ariaLabel`.

<a id="oncheckbox"></a>

### OnCheckbox

Eine Checkbox mit optionalem Label, gemischten und gesperrten Zuständen.

| Propeller       | Typ       | Ausfall      | Beschreibung                                                                                                             |
| --------------- | --------- | ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `modelValue`    | `boolean` | erforderlich | Geprüft ()`v-model`).                                                                                                    |
| `indeterminate` | `boolean` | —            | Einige Kinder ausgewählt (Tabelle oder Gruppenkopf); Klicken wählt alle aus. Ignoriert, während überprüft oder gesperrt. |
| `disabled`      | `boolean` | —            | Nicht veränderbar; gedimmt.                                                                                              |
| `locked`        | `boolean` | —            | Immer enthalten und unveränderlich, z. B. ein erforderlicher Punkt eines Entfernungsplans: geprüft und grau angezeigt.   |
| `ariaLabel`     | `string`  | —            | Zugänglicher Name, wenn der Standard-Slot kein sichtbares Label hat.                                                     |
| `title`         | `string`  | —            | Hover-Hinweis, z.B. warum die Box deaktiviert ist.                                                                       |

| Veranstaltung       | Nutzlast           | Beschreibung                    |
| ------------------- | ------------------ | ------------------------------- |
| `update:modelValue` | `[value: boolean]` | Der neue kontrollierte Zustand. |

| Slot      | Beschreibung                                     |
| --------- | ------------------------------------------------ |
| `default` | Das sichtbare Etikett, im Inneren des `<label>`. |

**Verwendung** um Elemente für eine spätere Aktion (Listen, Tabellen, Entfernungspläne) und für Optionen auszuwählen, die durch einen Button bestätigt werden.
Für Instant Settings Verwendung `OnToggle`.

**Zugänglichkeit.** Ein natives Checkbox in einem `<label>`, also ist der Etikettentext sein Name und das Klicken darauf wechselt.
Der Mischzustand wird als DOM eingestellt `indeterminate` Vermögen und `aria-checked="mixed"`. Verschlossene Kästen sind deaktiviert
Klicks halten am Etikett an, so dass eine umgebende Tabellenzeile oder Gruppenkopf nicht ebenfalls reagiert.

<a id="onsegmented"></a>

### OnSegmented

Eine segmentierte Steuerung: Wählen Sie eine von zwei bis fünf Optionen aus, z. B. einen Ansichtsfilter oder einen Zeitbereich.

| Propeller    | Typ                               | Ausfall      | Beschreibung                                                                                                                                |
| ------------ | --------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `modelValue` | `T extends string`                | erforderlich | Ausgewählter Optionswert ()`v-model`).                                                                                                      |
| `options`    | `readonly OnSegmentedOption<T>[]` | erforderlich | `{ value, label, count?, dots? }`; `dots` sind Tokenvariablennamen (z.B. `chart-series1`) als kleine Farbpunkte vor dem Etikett gezeichnet. |
| `size`       | `'sm' \| 'md'`                    | `'md'`       | Optionshöhen 24/28.                                                                                                                         |
| `ariaLabel`  | `string`                          | —            | Zugänglicher Name der Gruppe.                                                                                                               |

| Veranstaltung       | Nutzlast     | Beschreibung                              |
| ------------------- | ------------ | ----------------------------------------- |
| `update:modelValue` | `[value: T]` | Emittiert nur, wenn sich der Wert ändert. |

**Verwendung** für sich gegenseitig ausschließende Ansichten des gleichen Inhalts; für die Navigation zwischen den Seiten `OnTabs`; für viele
Optionen verwenden ein Menü.

**Zugänglichkeit.** `role="radiogroup"` mit `role="radio"` Knöpfe und `aria-checked`Nur die gewählte Option ist
in der Tab-Reihenfolge; Pfeiltasten bewegen und wählen (Wrapping), Home und End springen zu den Enden.

<a id="ontabs"></a>

### OnTabs

Tabs, entweder Schaltfelder auf der gleichen Seite oder Verlinkung auf separate Seiten.

| Propeller    | Typ                       | Ausfall      | Beschreibung                                             |
| ------------ | ------------------------- | ------------ | -------------------------------------------------------- |
| `modelValue` | `T extends string`        | erforderlich | Aktueller Tab-Wert.                                      |
| `items`      | `readonly OnTabItem<T>[]` | erforderlich | `{ value, label, count?, disabled?, href?, controls? }`. |
| `ariaLabel`  | `string`                  | —            | Zugänglicher Name der Tab-Liste oder Navigation.         |
| `linkAs`     | `string \| Component`     | `'a'`        | Linkkomponente im Linkmodus.                             |

| Veranstaltung       | Nutzlast     | Beschreibung                                                                              |
| ------------------- | ------------ | ----------------------------------------------------------------------------------------- |
| `update:modelValue` | `[value: T]` | Klicken Sie (oder Pfeiltaste im Tablistenmodus) auf eine andere aktivierte Registerkarte. |

**Varianten.** Tablist-Modus (kein Element hat) `href`): gleichseitige Panels. Link mode (jedes Element hat `href`Jeder Tab ist ein
Verlinken Sie auf die eigene URL, z.B. so indizieren Suchmaschinen jeden Tab. Der aktive Tab hat einen Unterstreichungsindikator; `count`
zeigt eine kleine Zahl nach dem Etikett.

**Verwendung** für Geschwisteransichten eines Subjekts, für Filter einer Liste `OnSegmented`.

**Zugänglichkeit.** Tablistenmodus: `role="tablist"` / `role="tab"` mit `aria-selected`, Roving Tab Fokus, Pfeiltasten
(überspringen von deaktivierten Tabs), Home und End; set `controls` an das Panel ID für `aria-controls` und geben Sie das Panel
`role="tabpanel"`Verknüpfungsmodus: a `<nav>` von Links mit `aria-current="page"` auf dem aktiven; deaktivierte Gegenstände sind
Nichtlink `<span aria-disabled="true">`.

<a id="onsearchfield"></a>

### OnSearchField

Ein Textfeld zum Suchen und Filtern, mit klarem Button und Abkürzungshinweis.

| Propeller     | Typ       | Ausfall      | Beschreibung                                                                           |
| ------------- | --------- | ------------ | -------------------------------------------------------------------------------------- |
| `modelValue`  | `string`  | erforderlich | Die Abfrage ()`v-model`).                                                              |
| `placeholder` | `string`  | —            | Platzhaltertext.                                                                       |
| `ariaLabel`   | `string`  | —            | Zugänglicher Name; Standardwerte für den Platzhalter.                                  |
| `shortcut`    | `string`  | —            | Rechtshinweis, z.B. `⌘K`; ersetzt durch den klaren Button, während Text vorhanden ist. |
| `clearable`   | `boolean` | `true`       | Zeigen Sie einen klaren Knopf, wenn Text vorhanden ist.                                |
| `disabled`    | `boolean` | —            | Nicht editierbar; gedimmt.                                                             |

| Veranstaltung       | Nutzlast          | Beschreibung                                                  |
| ------------------- | ----------------- | ------------------------------------------------------------- |
| `update:modelValue` | `[value: string]` | Jeder Input.                                                  |
| `submit`            | `[value: string]` | Geben Sie ein (nicht während eine Eingabemethode komponiert). |
| `clear`             | `[]`              | Deaktivieren Sie den Button oder Escape mit Text.             |

Freigelegt: `focus()`, `blur()`.

**Verwendung** Um eine Befehlspalette aus einer Symbolleiste zu öffnen, verwenden Sie die Suchschaltfläche
von `OnToolbar` / `OnTopNav` Stattdessen.

**Zugänglichkeit.** Eingeborener `type="search"` Input Name by `ariaLabel` oder der Platzhalter.
Feld und stoppt dort; auf einem leeren Feld sprudelt es (damit es einen umgebenden Dialog schließen kann).
Beschriftet "Clear" in der aktuellen Sprache und kehrt Fokus auf die Eingabe.

<a id="ontooltip"></a>

### OnTooltip

Eine kurze Beschreibung, die auf Hover und Keyboard-Fokus erscheint.

| Propeller   | Typ                                      | Ausfall      | Beschreibung                                                                                                                                                                                                                                                                   |
| ----------- | ---------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `content`   | `string`                                 | erforderlich | Der Text; leerer Inhalt deaktiviert den Tooltip.                                                                                                                                                                                                                               |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'`      | Bevorzugte Seite; Flips, wenn kein Platz ist und bleibt im Viewport.                                                                                                                                                                                                           |
| `delay`     | `number`                                 | `400`        | Zeigen Sie Verzögerung in Millisekunden.                                                                                                                                                                                                                                       |
| `disabled`  | `boolean`                                | —            | Niemals zeigen.                                                                                                                                                                                                                                                                |
| `lazy`      | `boolean`                                | —            | Rendern Sie den Tooltip nur, wenn der Trigger zum ersten Mal verwendet wird, und ohne `aria-describedby`. Für dekorative Trigger, deren Informationen sich sowieso auf der Seite befinden (Grafikleisten mit einer versteckten Tabelle); hält sie aus Server-gerenderten HTML. |

| Slot      | Beschreibung                                                |
| --------- | ----------------------------------------------------------- |
| `default` | Der Trigger; sein erstes Element erhält `aria-describedby`. |

Attribute ()`class`, `style`) gehen Sie zum Wrapling `<span>`Der Tooltip wird teleportiert zu `<body>` und positioniert
`fixed`Scrollen Container nie Clip; es versteckt sich auf Scrollen und Größe ändern.

**Verwendung** Für reine Icon-Buttons und abgeschnittenen Text: Legen Sie niemals wesentliche Informationen oder interaktive Inhalte in einen Tooltip.

**Zugänglichkeit.** `role="tooltip"`, vom Trigger mit `aria-describedby` (es sei denn) `lazy`, deaktiviert oder leer.
Es öffnet sich sowohl im Fokus als auch im Schwebeflug, und Escape schließt es ()WCAG 1.4.13).

<a id="onmenu"></a>

### OnMenu

Ein Aktionsmenü hinter einem Button, wie "Weitere Aktionen" oder ein Sortier-/Auswahlmenü.

| Propeller | Typ                     | Ausfall       | Beschreibung                                                                  |
| --------- | ----------------------- | ------------- | ----------------------------------------------------------------------------- |
| `items`   | `readonly OnMenuItem[]` | erforderlich  | `{ key, label, icon?, shortcut?, danger?, disabled?, separator?, checked? }`. |
| `label`   | `string`                | —             | Zugänglicher Name des Triggers und Menüs; standardmäßig "Weitere Aktionen".   |
| `icon`    | `string`                | `'ellipsis'`  | Icon des Standardtriggers.                                                    |
| `variant` | `OnButtonVariant`       | `'secondary'` | Variante des Standardtriggers.                                                |
| `size`    | `OnButtonSize`          | `'md'`        | Größe des Standardtriggers.                                                   |
| `align`   | `'start' \| 'end'`      | `'end'`       | Auf welcher Seite des Triggers das Menü ausgerichtet ist.                     |

| Veranstaltung | Nutzlast        | Beschreibung                                                                                              |
| ------------- | --------------- | --------------------------------------------------------------------------------------------------------- |
| `select`      | `[key: string]` | Ein aktiviertes Element wurde ausgewählt; das Menü schließt sich und der Fokus kehrt zum Auslöser zurück. |

| Slot      | Unterschrift                                                            | Beschreibung                                                                                        |
| --------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `trigger` | `(props: { open: boolean; attrs: Record<string, unknown> }) => unknown` | Ein benutzerdefinierter Trigger; bind `attrs` (ARIA, Klick- und Schlüsselhandler) auf Ihren Button. |

Positionen: `danger` roter Text, `separator` einen Dividierer vor dem Item hinzufügt, `shortcut` einen Hinweis auf der rechten Seite zeigt,
`checked` (ein beliebiger definierter Wert) verwandelt das Element in eine Auswahl: `true` ein Häkchen zeigt.

**Verwendung** für sekundäre Aktionen einer Zeile oder Seite und für die Auswahl einer Option (Ordnung sortieren, Sprache).
Aktion auf einen sichtbaren Knopf.

**Zugänglichkeit.** Auslöser: `aria-haspopup="menu"`, `aria-expanded`, `aria-controls`ArrowDown oder ArrowUp wird geöffnet
Der Zeiger öffnet das Menü, ohne ein Element vorzuwählen; eine geöffnete Tastatur fokussiert das erste.
Menü: `role="menu"` mit `menuitem` oder `menuitemradio` (`aria-checked`) Elemente außerhalb der Tab-Reihenfolge; Pfeiltasten
Cycle (Skipping deaktiviert), Home und End Jump, Escape und Tab schließen und fokussieren wieder auf den Auslöser.
Größer ändern oder scrollen schließt es. Das Menü wird teleportiert, um `<body>`, öffnet sich nach oben, wenn unten kein Raum ist.

---

<a id="containers-and-data"></a>

## Container und Daten

<a id="oncard"></a>

### OnCard

Eine umrandete Oberfläche, die verwandte Inhalte gruppiert; optional ein Link oder eine Schaltfläche.

| Propeller     | Typ                                                          | Ausfall | Beschreibung                                                                                     |
| ------------- | ------------------------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------ |
| `as`          | `'div' \| 'section' \| 'article' \| 'li' \| 'a' \| 'button'` | `'div'` | Wiedergegebenes Element (ignoriert, wenn) `href` gesetzt ist. `button` Bekommen `type="button"`. |
| `href`        | `string`                                                     | —       | Rendern Sie die Karte als Link (durch) `linkAs`).                                                |
| `interactive` | `boolean`                                                    | —       | Hover Border/Hintergrund, Zeigercursor und Fokusring.                                            |
| `padding`     | `'none' \| 'sm' \| 'md' \| 'lg'`                             | `'md'`  | 0 / 14 / 16 / 18 px.                                                                             |
| `linkAs`      | `string \| Component`                                        | `'a'`   | Gliederkomponente.                                                                               |

| Slot      | Beschreibung  |
| --------- | ------------- |
| `default` | Karteninhalt. |

**Verwendung** Die Karten verwenden einen Rahmen und eine Füllung, keinen Schatten.
Karten oder legen Sie mehrere Links in eine Karte, die selbst ein Link ist.

**Zugänglichkeit.** Eine anklickbare Karte muss ein echter Link sein ()`href`) oder Knopf (`as="button"`Sein Text wird zum
Erreichbarer Name, also halte ihn kurz.

<a id="onstattile"></a>

### OnStatTile

Eine beschriftete Zahl mit Einheit, Hinweis und Änderung.

| Propeller | Typ            | Ausfall      | Beschreibung                                                                                                                              |
| --------- | -------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `label`   | `string`       | erforderlich | Satzfall ohne Doppelpunkt, z. B. "Disk-Nutzung".                                                                                          |
| `value`   | `string`       | erforderlich | Der formatierte Wert.                                                                                                                     |
| `unit`    | `string`       | —            | z.B. "GB", "min ago".                                                                                                                     |
| `hint`    | `string`       | —            | Dritte Zeile.                                                                                                                             |
| `delta`   | `OnStatDelta`  | —            | `{ value, direction: 'up' \| 'down', good }`: der Pfeil zeigt die Richtung, `good` nimmt grün oder rot.                                   |
| `size`    | `'sm' \| 'md'` | `'sm'`       | `sm`: ein eigenständiges Tile (z. B. ein 2 × 2-Schienenraster); `md`: eine Zelle eines Stat-Streifens, dessen Container die Teiler zieht. |

**Verwendung** für Armaturenbretter und Sammelschienen; für Etiketten-/Wertlisten verwenden `OnKeyValueList`.

**Zugänglichkeit.** Klartext in Lesereihenfolge (Label, Wert, Einheit, Änderung, Hinweis); die Änderung wird mit einem
Pfeilzeichen und eine Farbe; sicherstellen `delta.value` macht Sinn, laut vorgelesen zu werden.

<a id="onkeyvaluelist"></a>

### OnKeyValueList

Eine zweispaltige Liste mit gekennzeichneten Werten, z. B. Details eines Elements.

| Propeller | Typ                         | Ausfall      | Beschreibung                                                                                                                        |
| --------- | --------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| `items`   | `readonly OnKeyValueItem[]` | erforderlich | `{ key, label, value, mono?, href? }`; `mono` für Identifikatoren, Befehle und Pfade; `href` macht den Wert zu einem externen Link. |

Werte, die mit einer Ellipse auf einer Linie gekürzt werden.

**Zugänglichkeit.** A `<dl>` von `<dt>`/`<dd>` Externe Links öffnen sich in einem neuen Tab mit
`rel="noopener noreferrer"` und ein Pfeilsymbol.

<a id="ontable"></a>

### OnTable

Eine Datentabelle mit Sortieranzeige, Auswahl, benutzerdefinierten Zellen und virtuellem Scrollen.

| Propeller        | Typ                                  | Ausfall      | Beschreibung                                                                                               |
| ---------------- | ------------------------------------ | ------------ | ---------------------------------------------------------------------------------------------------------- |
| `columns`        | `readonly OnTableColumn[]`           | erforderlich | `{ key, label, numeric?, mono?, sortable?, width?, hideLabel? }`.                                          |
| `rows`           | `readonly Row[]`                     | erforderlich | Rows, bereits vom Host sortiert.                                                                           |
| `rowKey`         | `(row: Row) => string`               | erforderlich | Stabile Taste pro Zeile.                                                                                   |
| `cellValue`      | `(row: Row, key: string) => unknown` | —            | Standard-Zellinhalt; ansonsten `row[column.key]`.                                                          |
| `sort`           | `OnTableSort \| null`                | —            | `{ key, order: 'asc' \| 'desc' }` Anzeige; die Komponente sortiert nicht.                                  |
| `selectedKey`    | `string \| null`                     | —            | Hervorgehobene (aktuelle) Zeile.                                                                           |
| `dimmed`         | `(row: Row) => boolean`              | —            | De-emphasierte Zeilen (z. B. Abhängigkeiten) bei 55 % Trübung.                                             |
| `caption`        | `string`                             | —            | Visuell versteckte Tabellenunterschrift.                                                                   |
| `height`         | `number`                             | —            | Feste Höhe in px mit einem klebrigen Header; über 200 Reihen nur sichtbare Reihen rendern (je 44 px).      |
| `layout`         | `'auto' \| 'fixed'`                  | —            | `fixed` ehrt Spaltenbreiten und kürzt die flexible Säule, so dass breite Tische niemals seitlich scrollen. |
| `selectable`     | `boolean`                            | —            | Führende Checkbox-Spalte; Verwendung `v-model:selected`.                                                   |
| `selected`       | `readonly string[]`                  | —            | Ausgewählte Zeilentasten; Schlüssel von Zeilen, die aus `rows` gehalten werden.                            |
| `canSelect`      | `(row: Row) => boolean`              | —            | Zeilen, die nicht ausgewählt werden können (z. B. geschützte Elemente); alle standardmäßig.                |
| `selectAllLabel` | `string`                             | —            | Zugänglicher Name des Header-Checkbox.                                                                     |
| `selectRowLabel` | `(row: Row) => string`               | —            | Zugänglicher Name jedes Zeilen-Checkbox.                                                                   |

| Veranstaltung     | Nutzlast                  | Beschreibung                                                                                                                                           |
| ----------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `update:sort`     | `[sort: OnTableSort]`     | Ein sortierbarer Header wurde angeklickt: Die gleiche Spalte kehrt sich um, eine neue Spalte beginnt, wenn sie numerisch absteigt und sonst aufsteigt. |
| `update:selected` | `[keys: string[]]`        | Checkbox ändert sich; das Header-Feld wählt oder löscht jede wählbare Zeile.                                                                           |
| `rowClick`        | `[key: string, row: Row]` | Eine Zeile wurde angeklickt (Checkbox-Klicks ausgeschlossen).                                                                                          |

| Slot         | Unterschrift                                       | Beschreibung                                                          |
| ------------ | -------------------------------------------------- | --------------------------------------------------------------------- |
| `cell-{key}` | `(props: { row: Row; value: unknown }) => unknown` | Benutzerdefinierter Inhalt für Spalte `key`B. `#cell-name="{ row }"`. |

**Verwendung** für vergleichbare Datensätze mit mehreren Attributen. `OnKeyValueList`;
Für reiche, ungleiche Inhalte verwenden Sie eine Liste von Karten.

**Zugänglichkeit.** Echt `<table>` mit `scope="col"` Kopfzeilen. Sortierbare Kopfzeilen sind Schaltflächen mit dem Namen "Sortieren nach"
{label}" und die Kopfzelle trägt `aria-sort`. `hideLabel` behält einen visuell versteckten Header (z.B. "Aktionen").
Auswählbare Zeilen belichten `aria-selected`; das Header-Checkbox zeigt den gemischten Zustand an. `height`, die Schriftrolle
Container ist fokussierbar, so dass Tastaturbenutzer es scrollen können.

<a id="onpagination"></a>

### OnPagination

Vorherige/nächste und Seitenzahlen mit Ellipsen; Buttons oder Links, wenn jede Seite eine URL hat.

| Propeller   | Typ                        | Ausfall      | Beschreibung                                                                                                                    |
| ----------- | -------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `page`      | `number`                   | erforderlich | Aktuelle Seite, one-based.                                                                                                      |
| `pageCount` | `number`                   | erforderlich | Gesamtseiten; nichts macht für eine Seite.                                                                                      |
| `max`       | `number`                   | `7`          | Slots einschließlich Ellipsen (mindestens 5); erste, letzte und aktuelle Seite immer angezeigt.                                 |
| `hrefFor`   | `(page: number) => string` | —            | Renderlinks: Jede Seite hat eine eigene URL (z.B. `?page=3`).                                                                   |
| `linkAs`    | `string \| Component`      | `'a'`        | Gliederkomponente für `hrefFor`.                                                                                                |
| `jumps`     | `readonly number[]`        | —            | Zusätzliche Seiten so viele Schritte vor und nach dem aktuellen; standardmäßig `[10, 100]` mit `hrefFor` Und keine für Buttons. |

| Veranstaltung | Nutzlast         | Beschreibung                                                                     |
| ------------- | ---------------- | -------------------------------------------------------------------------------- |
| `update:page` | `[page: number]` | Eine andere Seite wurde ausgewählt (auch für Links vor der Navigation gefeuert). |

**Verwendung** lange, adressierbare Listen (Suchergebnisse, Kataloge), für Feeds lieber "load more" oder unendlich scrollen.

**Zugänglichkeit.** `<nav aria-label="Pagination">`; Page Buttons heißen "Page N", die aktuelle hat
`aria-current="page"`; vorherige / nächste an den Enden werden nicht interaktiv mit `aria-disabled="true"`; Ellipsen sind
Versteckt vor Screenreadern.

<a id="onprogressmeter"></a>

### OnProgressMeter

Ein Fortschrittsbalken, bestimmt oder unbestimmt.

| Propeller | Typ              | Ausfall | Beschreibung                                                  |
| --------- | ---------------- | ------- | ------------------------------------------------------------- |
| `value`   | `number \| null` | —       | 0–100 (geklemmt), entschärft oder `null` bedeutet unbestimmt. |
| `size`    | `'md' \| 'sm'`   | `'md'`  | Balkenhöhe 6/4 px`sm` für Menüleisten und dichte Reihen.      |
| `label`   | `string`         | —       | Zugänglicher Name, z. B. "Download-Update".                   |

**Verwendung** bei Aufgaben mit messbarem Fortschritt oder laufenden Arbeiten ohne diesen (unbestimmt).
Zeit daneben, wenn Sie eine haben.

**Zugänglichkeit.** `role="progressbar"` mit `aria-valuemin`, `aria-valuemax`, `aria-valuenow` (gerundet) oder
`aria-valuetext="In progress"` Bei verminderter Bewegung stoppt der unbestimmte Balken seine Bewegung und zeigt
"Im Gange" als Text.

<a id="onstackbar"></a>

### OnStackBar

Eine einzelne gestapelte Leiste mit Legende: wie sich eine Summe in Teile aufteilt (z. B. Lagerung nach Typ).

| Propeller | Typ                         | Ausfall      | Beschreibung                                                                       |
| --------- | --------------------------- | ------------ | ---------------------------------------------------------------------------------- |
| `items`   | `readonly OnStackItem[]`    | erforderlich | `{ key, label, value, display? }`0 und negative Werte ausgelassen.                 |
| `caption` | `string`                    | erforderlich | Chartname; Beschriftung der versteckten Tabelle.                                   |
| `format`  | `(value: number) => string` | —            | Formate von Werten ohne `display`, einschließlich der zusammengeführten "Anderen". |

Bis zu drei Serienfarben ()`chart.series1–3`) werden in der Reihenfolge verwendet; mit mehr als drei Elementen die dritte und später
Die Prozentsätze folgen dem aktuellen Gebietsschema. Das Schweben eines Segments zeigt einen faulen Tooltip.

**Zugänglichkeit.** Die Leiste und Legende sind vor Bildschirmlesern verborgen; eine visuell versteckte Tabelle (Item, Value, Share)
Mit der Beschriftung tragen die Daten.

<a id="onhbarchart"></a>

### OnHBarChart

Horizontale Balken, die einige Werte vergleichen, z.B. Downloads pro Periode.

| Propeller | Typ                     | Ausfall      | Beschreibung                                                                                                                                                                       |
| --------- | ----------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `items`   | `readonly OnHBarItem[]` | erforderlich | `{ key, label, value, display?, full?, emphasis? }`: `display` am Balkenende (z. B. "17K"), `full` in Tooltip und Tabelle (z. B. "17.394"), `emphasis` färbt die aktuelle Periode. |
| `caption` | `string`                | erforderlich | Chartname; Beschriftung der versteckten Tabelle.                                                                                                                                   |
| `max`     | `number`                | —            | Maximal skalieren; Standard auf den größten Wert.                                                                                                                                  |

**Zugänglichkeit.** Balken sind vor Bildschirmlesern verborgen; eine visuell versteckte Tabelle (Item, Value) trägt die vollen Werte.
Tooltips sind faul, so dass sie nie zu verirrtem Seitentext werden.

<a id="onskeleton"></a>

### OnSkeleton

Ein schimmernder Platzhalter, während der Inhalt geladen wird.

| Propeller | Typ                                                                         | Ausfall   | Beschreibung                              |
| --------- | --------------------------------------------------------------------------- | --------- | ----------------------------------------- |
| `width`   | `string`                                                                    | `'100%'`  | CSS Länge.                                |
| `height`  | `string`                                                                    | `'14px'`  | CSS Länge jeder Linie.                    |
| `radius`  | `'tiny' \| 'small' \| 'default' \| 'big' \| 'huge' \| 'full' \| 'app-icon'` | `'small'` | Passen Sie den Radius von, was lädt.      |
| `lines`   | `number`                                                                    | —         | Mehrere Linien; die letzte ist 60% breit. |

**Verwendung** Nur für das erste Laden, wie der Inhalt geformt.
von blinkenden Skeletten.

**Zugänglichkeit.** `aria-hidden="true"`Ankündigen Sie das Laden an anderer Stelle, wenn es darauf ankommt (z.B.) `aria-busy` über die Region.
Der Schimmer stoppt mit reduzierter Bewegung.

<a id="oncodetext"></a>

### OnCodeText

Inline-Code-Text, der zwischen Wörtern umhüllt, niemals innerhalb eines.

| Propeller | Typ      | Ausfall      | Beschreibung            |
| --------- | -------- | ------------ | ----------------------- |
| `text`    | `string` | erforderlich | Befehl, Pfad oder Code. |

Jeder Lauf von Nicht-Raum-Zeichen ist ein Inline-Block, also ein Bindestrich-Name oder `--flag` Niemals spalten; ein Wort breiter
als die Leitung bricht vorzugsweise nach `/`, `.` oder `=`Whitespace wird als Text beibehalten, so dass das Kopieren das Original zurückgibt
und `white-space: pre-wrap` Container halten Einrückung. Legen Sie es in Ihre eigenen `<code>` oder `<pre>`.

`codeParts`, `wordPieces` und `codeWordsHtml` die gleiche Aufteilung für Markdown-Renderer aussetzen (Wrap-Inline-Code)
Wörter in `.on-code-word`; `OnMarkdownView` Stile sie.

<a id="onlogviewer"></a>

### OnLogViewer

Ein Monospace-Log mit farbigen Linientypen, Schwanzbegrenzung und virtuellem Scrollen.

| Propeller | Typ                 | Ausfall      | Beschreibung                                                                                 |
| --------- | ------------------- | ------------ | -------------------------------------------------------------------------------------------- |
| `lines`   | `readonly string[]` | erforderlich | Log-Linien, älteste zuerst.                                                                  |
| `tail`    | `number`            | `2000`       | Zeigen Sie nur die letzten Zeilen (begrenzt auf 2.000), z.B. 5 in einer kompakten Taskkarte. |
| `height`  | `number`            | —            | Scrollen Sie in dieser Höhe; über 200 Linien nur sichtbare Linien rendern.                   |
| `label`   | `string`            | —            | Zugänglicher Name; standardmäßig "Log".                                                      |

Linienfarben`classifyLogLine`): `==>` Überschriften, `###… 62.4%` Fortschrittsbalken, `Error:` / `fatal:` / Curl-Fehler und
Erfolgsmarker. Leere Linien behalten ihre Höhe.

**Zugänglichkeit.** A `<pre role="log">` mit einem zugänglichen Namen und `tabindex="0"`So können Tastaturbenutzer es scrollen.
Updates werden nicht automatisch über das hinaus angekündigt, was `role="log"` impliziert; fasse wichtige Ergebnisse an anderer Stelle zusammen.

<a id="onhighlighttext"></a>

### OnHighlightText

Text wo `**…**` Phrasen werden betont; nichts anderes wird analysiert.

| Propeller | Typ                      | Ausfall      | Beschreibung                                                                                              |
| --------- | ------------------------ | ------------ | --------------------------------------------------------------------------------------------------------- |
| `text`    | `string`                 | erforderlich | Text mit optionaler `**…**` Hervorhebung; andere Charaktere bleiben wörtlich (kein Markdown, nein) HTML). |
| `as`      | `'span' \| 'p' \| 'div'` | `'span'`     | Wiedergegebenes Element.                                                                                  |

Hervorgehobene Teile verwenden die primäre Textfarbe bei Gewicht 500 ()`parseHighlight` Enthüllt das Parsing.

**Verwendung** für kurze redaktionelle Kopien von Daten (Heldenbeschreibungen, Zusammenfassungen), für die vollständige Verwendung von Markdowns `OnMarkdownView`.

<a id="onsectionheader"></a>

### OnSectionHeader

Ein Abschnittstitel mit einem optionalen gedämpften Hinweis und einem nachlaufenden Link "Alle anzeigen".

| Propeller   | Typ                   | Ausfall      | Beschreibung                                   |
| ----------- | --------------------- | ------------ | ---------------------------------------------- |
| `title`     | `string`              | erforderlich | Die `<h2>` Text.                               |
| `hint`      | `string`              | —            | Muted Text neben dem Titel.                    |
| `moreLabel` | `string`              | —            | Linktext; der Link rendert nur mit `moreHref`. |
| `moreHref`  | `string`              | —            | Linkziel.                                      |
| `linkAs`    | `string \| Component` | `'a'`        | Gliederkomponente.                             |

**Zugänglichkeit.** Die `<h2>` hält nur den Titel; der Hinweis ist ein separater Absatz, so dass er nie Überschrift wird
text. Der Link hat ein Pfeilsymbol (dekorativ).

<a id="onpageheader"></a>

### OnPageHeader

Der Anfang einer Seite: eine große `<h1>`, einen Untertitel und Aktionen auf der rechten Seite.

| Propeller  | Typ      | Ausfall      | Beschreibung                          |
| ---------- | -------- | ------------ | ------------------------------------- |
| `title`    | `string` | erforderlich | Die `<h1>` Text (30 px, Gewicht 600). |
| `subtitle` | `string` | —            | Zeile unter dem Titel.                |

| Slot      | Beschreibung                                                               |
| --------- | -------------------------------------------------------------------------- |
| `default` | Extra-Inhalte unter dem Titel (Chips, Filter).                             |
| `actions` | Knöpfe rechts; auf schmalen Bildschirmen wickeln sie sich unter dem Titel. |

**Verwendung** einmal pro Seite. Titel innerhalb der Seite verwenden `OnSectionHeader`.

<a id="onbreadcrumb"></a>

### OnBreadcrumb

Der Pfad von einer Top-Level-Seite zur aktuellen.

| Propeller | Typ                           | Ausfall      | Beschreibung                                                                          |
| --------- | ----------------------------- | ------------ | ------------------------------------------------------------------------------------- |
| `items`   | `readonly OnBreadcrumbItem[]` | erforderlich | `{ label, href? }`; der letzte Punkt ist die aktuelle Seite und braucht keine `href`. |
| `linkAs`  | `string \| Component`         | `'a'`        | Gliederkomponente.                                                                    |

**Zugänglichkeit.** `<nav aria-label="Breadcrumb">` mit einer geordneten Liste; der letzte Artikel hat `aria-current="page"`.
Separatoren sind dekorative Ikonen. `href` (vorher) als Klartext.

<a id="onmarkdownview"></a>

### OnMarkdownView

Typografie für gerenderte Markdown (Release Notes, Beschreibungen, Artikel).

| Propeller | Typ                         | Ausfall | Beschreibung                                                                                                                                 |
| --------- | --------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `html`    | `string`                    | —       | **Sanitär** HTMLIgnoriert, wenn der Standard-Slot verwendet wird.                                                                            |
| `size`    | `'sm' \| 'md' \| 'article'` | `'sm'`  | `sm` 13/20 für Release Notes, `md` 14/1.75 für Beschreibungen (beide max 72ch), `article` 15/1.8 über die Spalte mit größeren Überschriften. |

| Slot      | Beschreibung                                                                                |
| --------- | ------------------------------------------------------------------------------------------- |
| `default` | gerenderte Elemente statt einer HTML String (z. B. von einem Renderer, der VNodes ausgibt). |

Dieses Paket Schiffe **Kein Markdown-Renderer und kein Desinfektionsmittel**Rendern und sanieren Sie in Ihrer App - zum Beispiel
Markdown-it mit roh HTML deaktiviert, dann ein Allowlist-Desinfektionsmittel wie DOMPurify - und niemals benutzergesteuert passieren
HTML unhygienisiert. Klassen, die Ihr Renderer hinzufügen kann: `on-md-heading-1…3` (visuelle Überschriftengröße nach Bestellung, unabhängig von)
die semantische Ebene, `on-md-center` / `on-md-right` (Tischausrichtung), `on-code-word` (Inline-Codewörter).

**Zugänglichkeit.** Semantik kommt von Ihrer HTML: Verwenden Sie Überschriftenebenen, die dem Seitenriss entsprechen (z. B. beginnen bei) `h3`
Unter einem Abschnitt `h2`) und addieren `alt` Text zu Bildern. Links erhalten einen Fokusring.

---

<a id="states"></a>

## Zustände

<a id="onempty"></a>

### OnEmpty

Ein leerer Zustand: Icon, Titel, Beschreibung und Aktionen.

| Propeller     | Typ      | Ausfall          | Beschreibung                                              |
| ------------- | -------- | ---------------- | --------------------------------------------------------- |
| `title`       | `string` | erforderlich     | Die `<h3>` Text, z.B. "Keine Ergebnisse für "x"           |
| `description` | `string` | —                | Ein oder zwei Sätze darüber, was als nächstes zu tun ist. |
| `icon`        | `string` | `'lucide:inbox'` | Icon bei 48 px in der deaktivierten Textfarbe gezeichnet. |

| Slot      | Beschreibung           |
| --------- | ---------------------- |
| `actions` | Knöpfe unter dem Text. |

**Verwendung** Wenn eine Liste oder Suche nichts zu zeigen hat, sagen Sie warum und bieten Sie den nächsten Schritt an.
`OnErrorState`; für keine Verbindung `OnOffline`.

**Zugänglichkeit.** Der Titel ist ein `<h3>`; das Symbol ist dekorativ. Wenn der leere Zustand nach einer Benutzeraktion erscheint
(eine suche), kündigen sie es bei bedarf über ihre eigene live-region an.

<a id="onerrorstate"></a>

### OnErrorState

Ein Ladefehler mit Retry und eine optionale Request-ID für Berichte.

| Propeller     | Typ              | Ausfall | Beschreibung                                                                                                    |
| ------------- | ---------------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| `title`       | `string`         | —       | Standardmäßig "Kann nicht geladen werden".                                                                      |
| `description` | `string`         | —       | Standardmäßig "Das Netzwerk oder der Dienst ist vorübergehend nicht verfügbar. Versuchen Sie es später erneut." |
| `requestId`   | `string \| null` | —       | Gezeigt in Monospace für Issue Reports.                                                                         |
| `retryable`   | `boolean`        | `true`  | Zeigen Sie den Retry-Button.                                                                                    |

| Veranstaltung | Nutzlast | Beschreibung                       |
| ------------- | -------- | ---------------------------------- |
| `retry`       | `[]`     | Der Retry Button wurde angeklickt. |

**Zugänglichkeit.** Der Wrapper hat `role="alert"`So wird die Nachricht angekündigt, wenn sie erscheint.

<a id="onoffline"></a>

### OnOffline

Ein No-Connection-State.

| Propeller     | Typ      | Ausfall | Beschreibung                                                                                                                                                                   |
| ------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `title`       | `string` | —       | Defaults zu "Offline".                                                                                                                                                         |
| `description` | `string` | —       | Standardmäßig "Gespeicherte Inhalte anzeigen. Es wird automatisch aktualisiert, wenn Sie wieder online sind." - überschreiben Sie es, wenn Ihre App sagen kann, was sie zeigt. |

| Slot      | Beschreibung         |
| --------- | -------------------- |
| `actions` | Knöpfe, z. B. Retry. |

**Zugänglichkeit.** Der Wrapper hat `role="status"` (Höflich angekündigt).

---

<a id="overlays"></a>

## Überlagerungen

Alle Überlagerungen werden in `<body>` (Teleportieren), den Fokus nach innen bewegen, wenn sie sich öffnen, Tab innen halten, Seite sperren
Scrollen (verschachtelte Overlays werden referenzgezählt) und Fokussierung zurück zu dem Element, das sie geöffnet hat.
in 200 ms und in 120 ms, ohne Bewegung, wenn die reduzierte Bewegung eingeschaltet ist.

<a id="ondialogshell"></a>

### OnDialogShell

Die Low-Level-Modal-Schicht unter `OnModal`, `OnSheet` und `OnCommandPalette`Hintergrund, Übergänge, Flucht, Fokus
und Scrollensperre. Verwenden Sie es direkt nur für benutzerdefinierte Panels.

| Propeller      | Typ                            | Ausfall      | Beschreibung                                                                                                                |
| -------------- | ------------------------------ | ------------ | --------------------------------------------------------------------------------------------------------------------------- |
| `open`         | `boolean`                      | erforderlich | Es wird gezeigt, wenn es wahr ist; nichts wird angezeigt, während es geschlossen ist (auch auf dem server).                 |
| `placement`    | `'center' \| 'right' \| 'top'` | `'center'`   | Zentrierter Dialog, rechtes Blatt oder obere (15vh) Palette.                                                                |
| `dismissible`  | `boolean`                      | `true`       | `false` Ignoriert Flucht und Hintergrundklicks (destruktive Bestätigungen).                                                 |
| `role`         | `'dialog' \| 'alertdialog'`    | `'dialog'`   | Rolle des Gremiums.                                                                                                         |
| `labelledby`   | `string`                       | —            | ID des Titels ()`aria-labelledby`).                                                                                         |
| `describedby`  | `string`                       | —            | ID der Beschreibung ()`aria-describedby`).                                                                                  |
| `ariaLabel`    | `string`                       | —            | Zugänglicher Name, wenn kein Titel sichtbar ist.                                                                            |
| `initialFocus` | `string`                       | —            | Selector innerhalb des panels, um zuerst zu fokussieren; standardmäßig auf das erste fokussierbare element, dann das panel. |
| `backdrop`     | `'dim' \| 'clear'`             | `'dim'`      | Dimmed Scrim oder ein transparenter Click-Catcher (Palette).                                                                |
| `panelClass`   | `string`                       | —            | Klassen für das Paneelelement (Größe, Oberfläche, Radius).                                                                  |

| Veranstaltung | Nutzlast | Beschreibung                                                                                                                            |
| ------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `close`       | `[]`     | Flucht oder eine Presse und Veröffentlichung vor dem Hintergrund (Auswahl von Text und Veröffentlichung außerhalb schließt sich nicht). |

| Slot      | Beschreibung  |
| --------- | ------------- |
| `default` | Panelinhalte. |

**Zugänglichkeit.** Das Panel hat die gegebenen `role`, `aria-modal="true"` und sein Name; Tab und Shift-Tab Zyklus durch
seine fokussierbaren Elemente. Immer bieten `labelledby` oder `ariaLabel`.

<a id="onmodal"></a>

### OnModal

Ein zentrierter Dialog mit Titel, optionaler Beschreibung, Body- und Footer-Aktionen.

| Propeller      | Typ                         | Ausfall      | Beschreibung                                                                                                           |
| -------------- | --------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `open`         | `boolean`                   | erforderlich | Verwendung `v-model:open`.                                                                                             |
| `title`        | `string`                    | erforderlich | Die `<h2>` und den zugänglichen Namen des Dialogs.                                                                     |
| `description`  | `string`                    | —            | Unter dem Titel; wird `aria-describedby`.                                                                              |
| `size`         | `'sm' \| 'md' \| 'lg'`      | `'md'`       | Max Breiten 480 / 560 / 720.                                                                                           |
| `dismissible`  | `boolean`                   | `true`       | `false` Ignoriert Escape und Background Klicks.                                                                        |
| `closable`     | `boolean`                   | `true`       | Schließen Sie den Button in der oberen rechten Ecke.                                                                   |
| `role`         | `'dialog' \| 'alertdialog'` | `'dialog'`   | Verwendung `alertdialog` für Bestätigungen, die eine Antwort benötigen.                                                |
| `initialFocus` | `string`                    | —            | Selector zum ersten Fokus; Standardeinstellungen für das erste fokussierbare Element (oft die Schaltfläche Schließen). |

| Veranstaltung | Nutzlast          | Beschreibung                                   |
| ------------- | ----------------- | ---------------------------------------------- |
| `update:open` | `[open: boolean]` | `false` bei jeder Entlassung.                  |
| `close`       | `[]`              | Flucht, Hintergrund oder der Schließen-Button. |

| Slot       | Beschreibung                                                                      |
| ---------- | --------------------------------------------------------------------------------- |
| `default`  | Körper; scrollt, wenn groß.                                                       |
| `footer`   | Rechtsgerichtete Aktionen (Sekundärer erster, Primärer letzter).                  |
| `leading`  | Vor dem Titel, z.B. ein App-Icon.                                                 |
| `subtitle` | Eine reiche Linie unter dem Titel (Chips, Code); `description` Und noch darunter. |

Freigelegt: `close()`.

**Verwendung** für fokussierte Aufgaben, die die Seite blockieren (ein kurzes Formular, eine Entscheidung), für lange oder Referenzinhalte
`OnSheet`; für eine ja/nein-Frage Verwendung `OnConfirm`.

<a id="onsheet"></a>

### OnSheet

Ein Panel, das von rechts einrutscht (420 px), z.B. für Protokolle oder Details.

| Propeller      | Typ       | Ausfall      | Beschreibung                                                                           |
| -------------- | --------- | ------------ | -------------------------------------------------------------------------------------- |
| `open`         | `boolean` | erforderlich | Verwendung `v-model:open`.                                                             |
| `title`        | `string`  | erforderlich | Die `<h2>` und den zugänglichen Namen.                                                 |
| `initialFocus` | `string`  | —            | Selector, um zuerst zu fokussieren; standardmäßig auf das erste fokussierbare Element. |

| Veranstaltung | Nutzlast          | Beschreibung                    |
| ------------- | ----------------- | ------------------------------- |
| `update:open` | `[open: boolean]` | `false` wenn er entlassen wird. |
| `close`       | `[]`              | Flucht, Kulisse oder Schließen. |

| Slot      | Beschreibung                                                       |
| --------- | ------------------------------------------------------------------ |
| `default` | Rollkörper.                                                        |
| `actions` | Header-Buttons zwischen Titel und Schließen, z.B. "Alle kopieren". |
| `footer`  | Bottom Bar mit rechts ausgerichteten Aktionen.                     |

Freigelegt: `close()`.

<a id="onconfirm"></a>

### OnConfirm

Ein Bestätigungsdialog mit Cancel und Confirm.

| Propeller         | Typ                     | Ausfall      | Beschreibung                                                                                      |
| ----------------- | ----------------------- | ------------ | ------------------------------------------------------------------------------------------------- |
| `open`            | `boolean`               | erforderlich | Verwendung `v-model:open`.                                                                        |
| `title`           | `string`                | erforderlich | Die Frage, z.B. "Löschen" Orbitfold?".                                                            |
| `description`     | `string`                | —            | Was wird passieren.                                                                               |
| `confirmLabel`    | `string`                | —            | Standardmäßig "Bestätigen"; bevorzugen Sie das Verb ("Löschen").                                  |
| `cancelLabel`     | `string`                | —            | Defaults auf "Cancel".                                                                            |
| `tone`            | `'primary' \| 'danger'` | `'primary'`  | `danger`: roter Bestätigungsbutton, keine Escape/Backdrop-Abweisung, zuerst fokussiert abbrechen. |
| `loading`         | `boolean`               | —            | Spinner auf Bestätigen, während die Aktion läuft; Cancel ist währenddessen deaktiviert.           |
| `confirmDisabled` | `boolean`               | —            | Deaktivieren Bestätigen, bis die Voraussetzungen (z.B. eine Berechtigung) erfüllt sind.           |

| Veranstaltung | Nutzlast          | Beschreibung                                                               |
| ------------- | ----------------- | -------------------------------------------------------------------------- |
| `confirm`     | `[]`              | Klicken bestätigen; der Host führt die Aktion aus und schließt den Dialog. |
| `cancel`      | `[]`              | Cancel, Escape oder Kulisse (nicht für) `danger`).                         |
| `update:open` | `[open: boolean]` | `false` bei Annullierung.                                                  |

| Slot      | Beschreibung                                                           |
| --------- | ---------------------------------------------------------------------- |
| `default` | Zusätzlicher Körperinhalt, z. B. eine Liste dessen, was entfernt wird. |

**Zugänglichkeit.** `role="alertdialog"`, mit dem Titel benannt und durch die Beschreibung beschrieben.
Bestätigungsfokus bestätigen; destruktive fokus stornieren so enter zerstört niemals zufällig.

<a id="ontoast"></a>

### OnToast

Eine einzelne Benachrichtigungskarte, die normalerweise von `OnToastRegion`; Verwenden Sie es direkt für statische Vorschauen.

| Propeller     | Typ                                            | Ausfall      | Beschreibung                                       |
| ------------- | ---------------------------------------------- | ------------ | -------------------------------------------------- |
| `tone`        | `'info' \| 'success' \| 'warning' \| 'danger'` | `'info'`     | Icon und Farbe: Info, Check, Dreieck, Kreuz.       |
| `title`       | `string`                                       | erforderlich | Eine Zeile, z. B. "Aktualisiert" Prismark".        |
| `description` | `string`                                       | —            | Detaillinie.                                       |
| `actionLabel` | `string`                                       | —            | Ein kleiner Ghost Action Button, z.B. "View".      |
| `time`        | `string`                                       | —            | Zeittext in der oberen rechten Ecke, z.B. "Jetzt". |

| Veranstaltung | Nutzlast | Beschreibung                        |
| ------------- | -------- | ----------------------------------- |
| `action`      | `[]`     | Der Aktionsbutton wurde angeklickt. |
| `close`       | `[]`     | Der Schließknopf wurde angeklickt.  |

**Zugänglichkeit.** `danger` Toasts haben `role="alert"` (unmittelbar angekündigt); andere verlassen sich auf die höfliche
Die Schaltfläche "Zurücklassen" heißt "Benachrichtigung abweisen".

<a id="ontoastregion-and-createtoastqueue"></a>

### OnToastRegion und createToastQueue

Der feste unten-rechts-stapel von benachrichtigungen, mit dem timing für sie erledigt.

| Propeller | Typ                      | Ausfall      | Beschreibung                                                          |
| --------- | ------------------------ | ------------ | --------------------------------------------------------------------- |
| `items`   | `readonly OnToastItem[]` | erforderlich | `{ id, tone?, title, description?, actionLabel?, time?, duration? }`. |
| `max`     | `number`                 | `3`          | Sichtbare Toasts; Ältere verstecken sich zuerst.                      |

| Veranstaltung | Nutzlast       | Beschreibung                                                                                                                 |
| ------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `dismiss`     | `[id: string]` | Entferne den Artikel: ausgestrahlt nach seinem `duration` (Standard 4000 ms) `0` hält es), auf Close, und nach einer Aktion. |
| `action`      | `[id: string]` | Der Aktionsbutton des Elements wurde angeklickt (gefolgt von) `dismiss`).                                                    |

Timer halten an, während sich der Zeiger oder Fokus innerhalb der Region befindet, und nehmen die verbleibende Zeit wieder auf.

```ts
const toasts = createToastQueue(); // one per app (or per request in SSR), never a shared module singleton
toasts.push({ tone: 'success', title: 'Copied' }); // returns the id
toasts.push({ id: 'sync', title: 'Syncing…', duration: 0 }); // same id replaces, e.g. progress updates
```

```vue
<OnToastRegion :items="toasts.items.value" @dismiss="toasts.dismiss" @action="openDetails" />
```

`createToastQueue()` Rücksendungen `{ items, push, dismiss, clear }` (`items` Es ist ein Readonly Ref.

**Verwendung** für kurzes, nicht blockierendes Feedback zu etwas, das passiert ist.
(Verwenden Sie einen Dialog oder eine Inline-Nachricht).

**Zugänglichkeit.** A `<section aria-label="Notifications">` mit einem `aria-live="polite"` Liste; Misserfolge bekannt gegeben
Sofort durch die eigenen `role="alert"`.

<a id="oncommandpalette"></a>

### OnCommandPalette

Eine suchgesteuerte Befehlspalette (⌘K): gruppierte Ergebnisse mit Tastaturauswahl.

| Propeller     | Typ                         | Ausfall      | Beschreibung                                                                                                           |
| ------------- | --------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `open`        | `boolean`                   | erforderlich | Verwendung `v-model:open`.                                                                                             |
| `query`       | `string`                    | erforderlich | Verwendung `v-model:query`; die Hostfilter.                                                                            |
| `groups`      | `readonly OnCommandGroup[]` | erforderlich | `{ key, label, items: OnCommandItem[] }`leere Gruppen sind verborgen.                                                  |
| `placeholder` | `string`                    | —            | Platzhalter und Name eingeben; standardmäßig "Suchen oder Ausführen eines Befehls".                                    |
| `loading`     | `boolean`                   | —            | Ohne Ergebnisse, zeigt "Searching..." anstelle des leeren Textes.                                                      |
| `emptyText`   | `string`                    | —            | Standardmäßig "Keine übereinstimmenden Ergebnisse".                                                                    |
| `hints`       | `readonly string[]`         | —            | Footer hints; defaults to "↑↓ Select" and "↩Open". Fügen Sie Ihre eigenen für die Meta- und Kopierkombinationen hinzu. |

`OnCommandItem`: `{ key, label, description?, icon?, image?, iconTone?, badge?, badgeTone?, hint? }` — `icon` ist eine
18 px Symbol (für Aktionen und Navigation), `image` eine 26-PS-Bild-URL (ein App-Icon, ein Avatar), die auf die
Icon, wenn es nicht geladen wird; `iconTone: 'accent'` färbt das Icon; `badge` ist eine `OnChip` (Accent standardmäßig) `hint`
zeigt rechts einen Schlüsselhinweis.

| Veranstaltung  | Nutzlast                                            | Beschreibung                                                                                                                              |
| -------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `update:open`  | `[open: boolean]`                                   | `false` auf Escape oder einen Klick nach draußen.                                                                                         |
| `update:query` | `[query: string]`                                   | Jeder Input.                                                                                                                              |
| `select`       | `[item: OnCommandItem, options: { meta: boolean }]` | Geben Sie oder klicken Sie auf das aktive Element; `meta` mit Command/Ctrl (eine sekundäre Aktion, z.B. in einem neuen Fenster geöffnet). |
| `copy`         | `[item: OnCommandItem]`                             | Command/Ctrl-C, während kein Eingabetext ausgewählt ist; der Host entscheidet, was zu kopieren ist (ein Link, eine ID).                   |

Das aktive Element wird auf das erste Ergebnis zurückgesetzt, wenn sich die Ergebnisse ändern oder die Palette geöffnet wird.

**Zugänglichkeit.** Ein oben platzierter Dialog mit dem Namen "Befehlspalette". `combobox` (`aria-autocomplete="list"`,
`aria-controls`, `aria-activedescendant`) über a `listbox` von `role="group"` Abschnitte mit `option`s und
`aria-selected`ArrowUp/ArrowDown durch alle Gruppen bewegen (Wrapping, Scrollen des Elements in Sicht), Enter-Auswahl,
Escape schließt sich; Tasten werden ignoriert, während eine Eingabemethode komponiert. Footer-Hinweise werden vor Bildschirmlesern verborgen.

---

<a id="layout-and-navigation"></a>

## Layout und Navigation

<a id="onappshell"></a>

### OnAppShell

Der Seitenrahmen: Sidebar, Toolbar, Hauptspalte und optionale rechte Schiene. Layout nur; Sie füllen jede Region.

| Propeller    | Typ                         | Ausfall       | Beschreibung                                                                                                                                                                                                                        |
| ------------ | --------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hasRail`    | `boolean`                   | `false`       | Die Seite hat eine rechte Schiene.                                                                                                                                                                                                  |
| `railDocked` | `boolean`                   | `true`        | Containerbetrieb: Die Schiene bleibt neben der Hauptsäule (entsprechend der Fensterbreite, z. B. ≥ 1240 px).                                                                                                                        |
| `railOpen`   | `boolean`                   | `false`       | Container-Modus, undocked: Die Schiene als Overlay anzeigen.                                                                                                                                                                        |
| `scroll`     | `'container' \| 'document'` | `'container'` | `container` (Desktop-App): feste Fensterhöhe, die Hauptspalte scrollt von selbst. `document` (Web): Die Seite scrollt; Sidebar und Toolbar sind klebrig von `md`, die Schiene klebt an `xl` und bewegt sich davor unter den Inhalt. |

| Slot         | Beschreibung                                                                                                  |
| ------------ | ------------------------------------------------------------------------------------------------------------- |
| `sidebar`    | In der Regel `OnSidebar` (224 px Spalte).                                                                     |
| `toolbar`    | In der Regel `OnToolbar`.                                                                                     |
| `compactBar` | Dokumentmodus nach unten `md`: ersetzt Sidebar und Toolbar (z. B. eine kompakte obere Leiste mit einem Menü). |
| `default`    | Der Hauptinhalt.                                                                                              |
| `rail`       | In der Regel `OnRailPanel` (288 px).                                                                          |
| `footer`     | Dokumentmodus: nach dem Inhalt und der Schiene.                                                               |
| `overlay`    | Overlays, die zur Shell gehören (Toast Region, Palette).                                                      |

Freigelegt: `scrollToTop()` - scrollt die Hauptspalte (Container-Modus) oder das Fenster (Dokumenten-Modus), z. B. nach
Navigation.

**Zugänglichkeit.** Der Inhalt ist ein `<main>` Landmark; geben Sie der Navigation in der Seitenleiste eine `label` (siehe) `OnSidebar`).
Halten Sie eine Shell pro Seite.

<a id="onsidebar"></a>

### OnSidebar

Brand, eine optionale Top Card, gruppierte Navigation und Fußzeilenlinks.

| Propeller     | Typ                         | Ausfall      | Beschreibung                                                                                  |
| ------------- | --------------------------- | ------------ | --------------------------------------------------------------------------------------------- |
| `groups`      | `readonly OnSidebarGroup[]` | erforderlich | `{ key, label, items: OnSidebarItem[] }`.                                                     |
| `footerItems` | `readonly OnSidebarItem[]`  | `[]`         | Elemente, die an den Boden gepinnt sind (Einstellungen, Über).                                |
| `label`       | `string`                    | erforderlich | Zugänglicher Name der Navigation.                                                             |
| `topLabel`    | `string`                    | —            | Augenbraue über dem `top` Schlitz.                                                            |
| `brandName`   | `string`                    | —            | Plain-Text-Marke, wenn die `brand` Der Slot ist leer.                                         |
| `dragRegion`  | `boolean`                   | `false`      | Desktop-Fenster: ein 52 px Draggable Bereich für die macOS Ampel ()`data-tauri-drag-region`). |
| `linkAs`      | `string \| Component`       | `'a'`        | Link-Komponente für die Items.                                                                |

`OnSidebarItem`: `{ key, label, href, icon?, active?, count?, meta?, badge?, dot?, badgeLabel? }` — weitergegeben
`OnNavItem`.

| Slot     | Beschreibung                                                                                                                           |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `brand`  | Markierung und Name der App (Logo plus Wortmarke); das Designsystem versendet kein Logo. `brandName` Die Markenreihe wird ausgelassen. |
| `top`    | Eine Karte unter der Marke, z.B. "Get the desktop app".                                                                                |
| `footer` | Extra-Inhalt nach den Fußzeilenelementen.                                                                                              |

**Zugänglichkeit.** An `<aside>` mit einem `<nav aria-label>`; Gruppenetiketten sind visuelle Überschriften über ihren Artikeln; die
Der aktuelle Posten hat `aria-current="page"`Wenn der Marken-Slot nur ein Bild ist, geben Sie ihm eine `alt` Text oder einen sichtbaren Namen.

<a id="onnavitem"></a>

### OnNavItem

Eine Navigationszeile: Icon, Label und ein Count, Badge, Dot oder Meta Text rechts.

| Propeller    | Typ                   | Ausfall | Beschreibung                                                                         |
| ------------ | --------------------- | ------- | ------------------------------------------------------------------------------------ |
| `icon`       | `string`              | —       | Icon bei 17 px.                                                                      |
| `active`     | `boolean`             | —       | Die aktuelle Seite: Hervorgehoben, `aria-current="page"`.                            |
| `count`      | `number`              | —       | Muted zählen auf der rechten Seite.                                                  |
| `meta`       | `string`              | —       | Muted Text auf der rechten Seite, wenn es keine Zählung gibt, z.B. "34 GB".          |
| `badge`      | `number`              | —       | Coral Count Abzeichen (nur wenn > 0); hat Vorrang vor `dot`, `count` und `meta`.     |
| `dot`        | `boolean`             | —       | Ein Aufmerksamkeitspunkt ohne Zahl; hat Vorrang vor `count` und `meta`.              |
| `badgeLabel` | `string`              | —       | Zugänglicher Text des Abzeichens oder Punktes, z.B. "4 Updates".                     |
| `as`         | `string \| Component` | `'a'`   | Element oder Gliederkomponente; eine Ebene `a` ohne `href` wird zu einem `<button>`. |
| `href`       | `string`              | —       | Link-URL (nativ) `a`).                                                               |
| `to`         | `string`              | —       | Ziel des Routers, wenn `as` Es ist ein Router Link.                                  |

| Slot      | Beschreibung             |
| --------- | ------------------------ |
| `default` | Das Etikett (truncates). |

**Zugänglichkeit.** Das Abzeichen wird benannt von `badgeLabel`ein Punkt mit `badgeLabel` ist `role="img"`Ohne sie ist es
Versteckt. Geben Sie lieber jedes Abzeichen und punktieren Sie ein Etikett.

<a id="ontoolbar"></a>

### OnToolbar

Die Leiste über der Hauptspalte: Startschlitz, ein schleppbarer Abstandshalter, eine Suchtaste und ein Endschlitz.

| Propeller        | Typ       | Ausfall      | Beschreibung                                                                                            |
| ---------------- | --------- | ------------ | ------------------------------------------------------------------------------------------------------- |
| `searchLabel`    | `string`  | erforderlich | Text und zugänglicher Name des Suchbuttons, z.B. "Apps suchen" oder "Dateien suchen".                   |
| `searchShortcut` | `string`  | —            | Ein Tastenhinweis auf den Button, z.B. `⌘K`; auch Sets `aria-keyshortcuts="Meta+K"`.                    |
| `dragRegion`     | `boolean` | `false`      | Desktop-Fenster: Die Leiste und der Abstandshalter sind Drag-Regionen; seine Tasten bleiben anklickbar. |

| Veranstaltung | Nutzlast | Beschreibung                                                    |
| ------------- | -------- | --------------------------------------------------------------- |
| `search`      | `[]`     | Die Suchtaste wurde angeklickt; öffnen Sie Ihre Befehlspalette. |

| Slot    | Beschreibung                                           |
| ------- | ------------------------------------------------------ |
| `start` | Führende Bedienelemente, z. B. Rück-/Vorwärts-Tasten.  |
| `end`   | Anhängerkontrollen, z. B. Benachrichtigungen, Sprache. |

<a id="ontopnav"></a>

### OnTopNav

Der Website-Header: Home-Link mit der App-Marke, zentrierte Links, Suche, ein optionaler Call to Action und ein Mobilgerät
Menü.

| Propeller        | Typ                       | Ausfall      | Beschreibung                                                                                                         |
| ---------------- | ------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------- |
| `items`          | `readonly OnTopNavItem[]` | erforderlich | `{ label, href, active? }`.                                                                                          |
| `homeHref`       | `string`                  | `'/'`        | Ziel des Home-Links.                                                                                                 |
| `brandName`      | `string`                  | —            | Plain-Text-Marke im Home-Link, wenn die `brand` Slot ist leer; benennt auch den Link (""{brandName} Home, übersetzt. |
| `homeLabel`      | `string`                  | —            | Zugänglicher Name des Home-Links, der den von `brandName`.                                                           |
| `downloadHref`   | `string`                  | —            | Call-to-Action-Button auf der rechten Seite (z. B. eine Download-Seite); ohne diese versteckt.                       |
| `downloadLabel`  | `string`                  | —            | Sein Text; standardmäßig auf "Download".                                                                             |
| `searchable`     | `boolean`                 | `true`       | Zeigen Sie das Suchfeld und den Button.                                                                              |
| `searchLabel`    | `string`                  | —            | Suchen Sie Text und Name; standardmäßig "Suchen".                                                                    |
| `searchShortcut` | `string`                  | —            | Key Hinweis im Suchfeld, z.B. `⌘K`.                                                                                  |
| `label`          | `string`                  | —            | Zugänglicher Name der Navigation; standardmäßig auf "Main".                                                          |
| `linkAs`         | `string \| Component`     | `'a'`        | Gliederkomponente.                                                                                                   |

| Veranstaltung | Nutzlast | Beschreibung                                                               |
| ------------- | -------- | -------------------------------------------------------------------------- |
| `search`      | `[]`     | Das Suchfeld oder Symbol wurde angeklickt; öffnen Sie Ihre Befehlspalette. |

| Slot    | Beschreibung                                                                                                 |
| ------- | ------------------------------------------------------------------------------------------------------------ |
| `brand` | Die Markierung der App innerhalb des Home-Links (Logo plus Wortmarke), das Designsystem versendet kein Logo. |
| `extra` | Zwischen Suche und Aufruf zum Handeln, z.B. ein Sprachmenü.                                                  |

Verhalten: Links ab 1024 px anzeigen; unten öffnet eine Menüschaltfläche ein Panel mit den Links (und dem Aufruf zum Handeln unter)
Die Suche ist ein vollständiges Feld bei 768-1023 px und von 1280 px, eine Symboltaste sonst.
Hintergrund wird durchsichtig mit einer Unschärfe.

**Zugänglichkeit.** A klebrig `<header>` mit `<nav>` Landmarken benannt nach `label`Aktive Links haben
`aria-current="page"`. Nennen Sie den Home Link: Pass `brandName` (es erfüllt auch "label in name" wenn die Wortmarke
den gleichen Namen zeigt oder `homeLabel`Mit keinem der beiden, `brand` Slot muss den Namen selbst tragen (z.B. ein `img alt`).
Der Menü-Button hat `aria-expanded`/`aria-controls` und ein "Menü öffnen"/"Menü schließen"-Name; Escape schließt das Panel
und gibt den Fokus zum Button zurück. `aria-haspopup="dialog"`.

<a id="onrailpanel"></a>

### OnRailPanel

Der rechte Schienenrahmen (288 px) für Zusammenfassungen und sekundäre Inhalte.

| Propeller    | Typ       | Ausfall | Beschreibung                                                                                                                                                                           |
| ------------ | --------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `responsive` | `boolean` | `false` | Web: unten `xl` die Schiene sitzt unter dem Hauptinhalt mit einem oberen Rand und scrollt mit der Seite; von `xl` Es ist eine Spalte mit einem linken Rand und einem eigenen Scrollen. |

| Slot      | Beschreibung                           |
| --------- | -------------------------------------- |
| `default` | In der Regel mehrere `OnRailSection`s. |

**Zugänglichkeit.** An `<aside>` Landmark; es ist komplementärer inhalt, also muss die seite ohne sie sinnvoll sein.

<a id="onrailsection"></a>

### OnRailSection

Ein betitelter Abschnitt innerhalb der Schiene.

| Propeller  | Typ      | Ausfall      | Beschreibung                |
| ---------- | -------- | ------------ | --------------------------- |
| `title`    | `string` | erforderlich | Die `<h2>`.                 |
| `subtitle` | `string` | —            | Muted line unter dem Titel. |

| Slot      | Beschreibung                                       |
| --------- | -------------------------------------------------- |
| `default` | Abschnittsinhalt (Statistikkacheln, kurze Listen). |

---

<a id="showcase"></a>

## Schaufenster

<a id="onfeaturehero"></a>

### OnFeatureHero

Eine große Feature-Karte mit einer leuchtenden, ringförmigen Bühne und schwimmenden dekorativen Gegenständen.

| Propeller      | Typ                   | Ausfall      | Beschreibung                                                                                                            |
| -------------- | --------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `title`        | `string`              | erforderlich | Die Überschrift.                                                                                                        |
| `subtitle`     | `string`              | —            | Eine zweite Zeile in Lachs, innerhalb der Überschrift.                                                                  |
| `badge`        | `string`              | —            | Kleiner hervorgehobener Text über dem Titel, z.B. "Diese Woche vorgestellt".                                            |
| `description`  | `string`              | —            | Körper mit `**…**` Schwerpunktsetzung ()`OnHighlightText`).                                                             |
| `floats`       | `readonly T[]`        | `[]`         | Bis zu drei dekorative Gegenstände auf der Bühne, die jeweils von der `float` Schlitz.                                  |
| `glowColor`    | `string \| null`      | —            | Sechsstellige Hex-Tönung des Leuchtens (im Lichtmodus erweicht); das Zeichen leuchtet ansonsten.                        |
| `actionLabel`  | `string`              | —            | Primärer Button Text; standardmäßig "Get started".                                                                      |
| `actionIcon`   | `string`              | —            | Optionales Luzid-Icon vor dem primären Buttontext, z.B. `download`.                                                     |
| `detailHref`   | `string`              | —            | Fügt einen Link-Button "Details anzeigen" hinzu.                                                                        |
| `detailLabel`  | `string`              | —            | Sein Text.                                                                                                              |
| `linkAs`       | `string \| Component` | `'a'`        | Linkkomponente für den Detaillink.                                                                                      |
| `responsive`   | `boolean`             | —            | Web: 360 px hoch von 1024 px (276 px sonst), Bühne hochskaliert.                                                        |
| `compact`      | `boolean`             | —            | Kleinere Karte für Raster; die Bühne wird nur angezeigt, wenn die Karte mindestens 460 px breit ist (Containerabfrage). |
| `headingLevel` | `2 \| 3`              | `2`          | Überschriftelement.                                                                                                     |

| Veranstaltung | Nutzlast | Beschreibung                         |
| ------------- | -------- | ------------------------------------ |
| `action`      | `[]`     | Der primäre Button wurde angeklickt. |

| Slot               | Unterschrift                                                          | Beschreibung                                                                                                                                      |
| ------------------ | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `float`            | `(props: { item: T; index: number; size: OnAppIconSize }) => unknown` | Ein schwimmender Gegenstand, typischerweise `<OnAppIcon :size="size" :priority="index === 0" …>`Größen sind 118 / 54 / 46 (kompakt 64 / 40 / 32). |
| `badge-decoration` | `() => unknown`                                                       | Eine kleine Markierung nach dem Badge-Text (ca. 13 px), `currentColor`).                                                                          |
| `actions`          | `() => unknown`                                                       | Ersetzt den primären Button und den Detaillink.                                                                                                   |

```vue
<OnFeatureHero title="Orbitfold 4" subtitle="Plans that keep up with you." :floats="apps" detail-href="/apps/orbitfold">
  <template #float="{ item, size, index }">
    <OnAppIcon :name="item.name" :src="item.icon" :size="size" :priority="index === 0" />
  </template>
</OnFeatureHero>
```

**Verwendung** Floating Items sind unter 768 px versteckt, wo sie den Text abdecken würden.

**Zugänglichkeit.** Die gesamte Bühne (Glow, Rings, Floats) ist `aria-hidden`alle Informationen, die sie in der
Text. Der Untertitel ist Teil der Überschrift. Das Leuchten atmet langsam und stoppt mit reduzierter Bewegung.

<a id="onappicon"></a>

### OnAppIcon

Eine App-Kachel: das Bild der App oder eine generierte Buchstabenkachel; `variant="terminal"` Zeichnet eine Kommandozeilenkachel.

| Propeller    | Typ                                                                           | Ausfall      | Beschreibung                                                                                                                                |
| ------------ | ----------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`       | `string`                                                                      | erforderlich | Name anzeigen; die Buchstabenkachel zeigt ihre Initialen (erstes CJK-Zeichen oder die ersten Buchstaben von bis zu zwei Wörtern).           |
| `variant`    | `'app' \| 'terminal'`                                                         | `'app'`      | Fallback, wenn kein Bild vorhanden ist: Buchstabenkachel oder Terminalkachel (dunkel in beiden Themen, Monoraumabkürzung, farbiger Balken). |
| `seed`       | `string`                                                                      | —            | Stable Identifier Hashed (FNV-1a) zur Auswahl der Kachelfarbe und, für Terminalkacheln, der Abkürzung; standardmäßig auf `name`.            |
| `initials`   | `string`                                                                      | —            | Kacheltext anstelle des abgeleiteten, z.B. eine herkömmliche Kurzform eines Befehls.                                                        |
| `src`        | `string \| null`                                                              | —            | Bild-URL; bei Lastausfall (auch einer, der vor der Hydratation fehlgeschlagen ist) wird die Kachel stattdessen angezeigt.                   |
| `renditions` | `readonly OnImageRendition[] \| null`                                         | —            | `{ width, url }` Überstellungen von `src` für `srcset`Der Browser wählt einen für die gerenderte Größe aus.                                 |
| `size`       | `20 \| 24 \| 26 \| 28 \| 30 \| 32 \| 40 \| 44 \| 46 \| 54 \| 64 \| 96 \| 118` | `44`         | Seite in px.                                                                                                                                |
| `accent`     | `string \| null`                                                              | —            | Sechsstelliger Hex-Akzent für die Buchstabenkachel; ansonsten eine Palettenfarbe aus dem Samen.                                             |
| `label`      | `string`                                                                      | —            | Macht das Icon zu einem Bild mit diesem Namen; ansonsten ist es dekorativ.                                                                  |
| `priority`   | `boolean`                                                                     | —            | Eifriges Laden und hohe Abrufpriorität für das erste sichtbare Icon (Held, Detail-Header).                                                  |

Bilder werden als geliefert angezeigt ()`object-contain`, keine Maske, faul geladen); Kacheln erhalten den Radius und den Schatten des App-Icons.
Helfer: `iconColor(seed, accent)`, `darken(hex)`, `iconInitials(name)`, `cliAbbreviation(command)`, `ICON_PALETTE`.

**Zugänglichkeit.** Dekorativ ()`aria-hidden`, außer `label` ist gesetzt; neben einem sichtbaren Namen verlassen `label` aus.
