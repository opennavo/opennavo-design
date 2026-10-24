[English](../../../motion.md) · [简体中文](../../zh-CN/docs/motion.md) · [繁體中文](../../zh-Hant/docs/motion.md) · [日本語](../../ja-JP/docs/motion.md) · [Español](../../es-ES/docs/motion.md) · [Português (Brasil)](../../pt-BR/docs/motion.md) · [Русский](../../ru-RU/docs/motion.md) · **Deutsch** · [Français](../../fr-FR/docs/motion.md) · [Italiano](../../it-IT/docs/motion.md)

> Englisch ist die Ausgangssprache. Die Übersetzungen wurden lokal maschinell erstellt und müssen sprachlich geprüft werden. Code und Lizenztexte bleiben unverändert.

<a id="motion"></a>

# Bewegung

Bewegung erklärt eine Veränderung; sie schmückt nie. Das meiste Interface animiert überhaupt nicht.

<a id="tokens"></a>

## Design-Tokens

| Design-Token      | Wert                             | Verwendung                                                                |
| ----------------- | -------------------------------- | ------------------------------------------------------------------------- |
| `duration-fast`   | 120 ms                           | Farbe ändert sich auf Schwebe, Druck und Fokus; Umschalten; jeder Ausgang |
| `duration-base`   | 200 ms                           | Dialoge, Blätter, Kommandopalette und Toasts                              |
| `duration-slow`   | 320 ms                           | Fortschritt Füllung, Scan Meter, Held und Marketing-Eingänge              |
| `ease-standard`   | `cubic-bezier(0.2, 0.8, 0.2, 1)` | Standard für Zustandsänderungen und kleine Bewegungen                     |
| `ease-emphasized` | `cubic-bezier(0.3, 0, 0, 1)`     | Eintreffende Overlays                                                     |
| `ease-exit`       | `cubic-bezier(0.4, 0, 1, 1)`     | Alles, was geht, immer mit `duration-fast`                                |

<a id="what-moves"></a>

## Was sich bewegt

- **Zustandsänderungen** verblassende Farben mit `duration-fast` (`transition-colors duration-fast ease-standard` auf jedem
  interaktive Steuerung.
- **Überlagerungen** In 200 ms mit der hervorgehobenen Kurve eingeben und in 120 ms mit der Austrittskurve verlassen: zentrierte Dialoge
  Fade und Skalierung von 0,96, Blätter rutschen von ihrer Kante, die Befehlspalette fällt 8 px von oben, Toasts steigen
  8 px. Das Scrim verblasst mit seinem Panel. Menüs und Tooltips erscheinen ohne Animation.
- **Fortschritt** belebt seinen Wert, springt nie rückwärts und zeigt einen unbestimmten Zustand nur bis zum ersten wirklichen
  Zahl kommt an.
- **Marketingseiten** kann langsame Umgebungsbewegung (ein Atemglühen, treibende gestrichelte Ringe, schwimmende Ikonen) auf dem
  nur Kompositor (Transformation, Trübung).

<a id="what-never-moves"></a>

## Was sich nie bewegt

- Layout. Inhalt rutscht nicht, kollabiert oder reflowt nicht, während der Benutzer liest oder typisiert; siehe
  [Prinzipien › Stabil unter dem Zeiger](principles.md#4-stable-under-the-pointer).
- Theme Switches: Farben ändern sich in einem einzigen Frame ()`applyThemePreference` Deaktiviert Übergänge für diesen Frame.
- Zahlen, die an Ort und Stelle aktualisiert werden (Monitore, Zähler), ändern sich ohne Tweening.

<a id="reduced-motion"></a>

## Reduzierte Bewegung

`base.css` Clamps jede Animation und Übergang zu 0,01 ms unter `prefers-reduced-motion: reduce`, und entfernt glatt
Scrollen. Verlassen Sie sich nicht auf eine Animation, um Informationen zu vermitteln; der Endzustand muss für sich allein sinnvoll sein.
