[English](../../../CONTRIBUTING.md) · [简体中文](../zh-CN/CONTRIBUTING.md) · [繁體中文](../zh-Hant/CONTRIBUTING.md) · [日本語](../ja-JP/CONTRIBUTING.md) · [Español](../es-ES/CONTRIBUTING.md) · [Português (Brasil)](../pt-BR/CONTRIBUTING.md) · [Русский](../ru-RU/CONTRIBUTING.md) · **Deutsch** · [Français](../fr-FR/CONTRIBUTING.md) · [Italiano](../it-IT/CONTRIBUTING.md)

> Englisch ist die Ausgangssprache. Die Übersetzungen wurden lokal maschinell erstellt und müssen sprachlich geprüft werden. Code und Lizenztexte bleiben unverändert.

<a id="contributing"></a>

# Beitrag

Danke für die Hilfe. OpenNavo Das Design wird aus dem OpenNavo Apps und wird neben ihnen gepflegt; Änderungen
Jede App in der Familie sollte funktionieren.

<a id="ground-rules"></a>

## Grundregeln

- **Tokens zuerst.** Änderung `tokens/tokens.json`, Lauf `pnpm gen`, begehen Sie die generierten Dateien mit der Änderung.
  Bearbeiten einer Datei mit der Bezeichnung generated .
- **Beide Themen.** Jedes neue Farbzeichen hat eine dunkle `value` Und wenn es unterschiedlich ist, `light` addieren oder aktualisieren a
  Kontrasttest für jedes neue Text/Hintergrund-Paar (z.B.)`packages/tokens/tests`).
- **Rollen, nicht schauen.** Wenn ein vorhandenes Token die richtige Farbe, aber den falschen Job hat, fügen Sie ein Token für den Job hinzu
  ([docs/principles.md](docs/principles.md#rules-that-settle-arguments)).
- **Komponenten bleiben generisch.** Keine Produktnamen, Produktdatenformen oder Netzwerkaufrufe `packages/vue`; Apps Pass
  Inhalt durch Requisiten und Slots.
- **Docs bewegen sich mit Code.** Ein neues Token, Komponenten-Prop oder Verhalten aktualisiert die passende Seite in `docs/`.
- **Englisch zuerst.** Dokumentation, Quellkommentare, Fehler und Entwickler-Tooling standardmäßig auf Englisch.`en-US`) ist die Ausgangssprache für Komponentenzeichenfolgen; bewahren Sie explizit lokalisierte Inhalte auf.
- **Zehn Sprachen.** Neue Komponenten-Strings gehen in alle zehn Nachrichtendateien in `packages/vue/src/messages`, mit passenden Schlüsseln und Platzhaltern. Englisch bleibt Standard; folgern Sie keine Sprache aus den Browsereinstellungen.

<a id="checks"></a>

## Kontrollen

```sh
pnpm install
pnpm gen && pnpm check
pnpm test && pnpm typecheck
pnpm format:check
swift test
(cd packages/flutter && flutter analyze && flutter test)
```

CI führt die gleichen Befehle aus.

<a id="commits-and-pull-requests"></a>

## Commits und Pull Requests

Kleine, fokussierte Pull Requests mit einer kurzen Beschreibung der benutzersichtlichen Änderung und Screenshots in beiden Themes für
Mit dem Beitrag erklären Sie sich damit einverstanden, dass Ihr Beitrag unter der Lizenz MIT Lizenzierung dieser
Repository.

<a id="security-review-before-commits"></a>

## Sicherheitsüberprüfung vor Commits

Lauf `pnpm secrets:worktree` während der Vorbereitung von Änderungen, dann die geplanten Dateien inszenieren und ausführen `pnpm secrets:staged`.
Lauf `pnpm secrets:history` Diese Befehle erfordern Go 1.23+ und Netzwerkzugriff.
für den ersten Download der Pinned Gitleaks Scanner. Ein Scannerfehler blockiert die Überprüfung; umgehen Sie sie nicht.

Überprüfen Sie jede inszenierte Datei und das vollständige inszenierte Diff, einschließlich bestehender Änderungen, generierter Dateien und Assets.
Verpflichten Sie keine Anmeldeinformationen, privaten Schlüssel, reale Umgebungskonfiguration, private Serviceadressen oder persönliche Daten.
Verwenden Sie Platzhalter und fiktionale Vorrichtungen. Das Ignorieren einer Datei schützt sie nicht, sobald sie verfolgt oder inszeniert wird.
Bestätigen Sie, dass binäre Anhänge veröffentlicht werden können; Scan-Ergebnisse zeigen nur Pfade, Zeilennummern und Regel-IDs;
Ein sauberer Scan ersetzt keine manuelle Überprüfung.

Sicherheitslücken privat melden unter Verwendung [SICHERHEIT.md](SECURITY.md)Niemals Geheimnisse in öffentliche Angelegenheiten oder Protokolle aufnehmen.

Verwenden Sie Englisch Konventionelle Commit Nachrichten und Englisch GitHub Titel und Notizen freigeben. Beschreiben Sie, was sich geändert hat,
Warum und welche Überprüfungen tatsächlich durchgeführt wurden; lokale Tests sind nicht als vorbeifahrende entfernte CI zu beschreiben. API Stabilität ist nicht
versprochen vor 1.0; Dokumentierung von Änderungen im Changelog.

<a id="translations-and-previews"></a>

## Übersetzungen und Previews

Englisch ist die Quelle für alle zehn Sprachen: `en-US`, `zh-CN`, `zh-Hant`, `ja-JP`, `es-ES`, `pt-BR`, `ru-RU`,
`de-DE`, `fr-FR` und `it-IT`Komponentenmeldungen leben in `packages/vue/src/messages`; Galerie Nachrichten leben in
`packages/vue/gallery/src/messages`Übersetzen Sie sichtbare Story-Kopien sowie Navigation und barrierefreie Etiketten.
Behalten Sie Komponentennamen, Enum-Werte, URLs, Codebeispiele und Lizenzoriginale unverändert.

Die kompletten Dokumentationsspiegel leben in `docs/i18n/<locale>/`, nach den englischen Repository-Pfaden.
Neue Übersetzungen beginnen als Offline-Maschinen-unterstützte Entwürfe und benötigen eine Sprachüberprüfung, insbesondere technische und rechtliche
Prosa. Englisch bleibt maßgeblich. Überprüfen Sie das brasilianische portugiesische Vokabular getrennt von generischem Portugiesisch.
Wenn sich Englisch ändert, aktualisieren Sie die entsprechenden Dateien in jeder Sprache und notieren Sie dann SHA-256 in
`docs/i18n/manifest.json`. Lauf `pnpm check:i18n` Berichterstattung, Quellfrische, Links und Codebeispiele zu überprüfen.
Aktualisieren Sie das Manifest nicht nur, um einen Fehler zum Schweigen zu bringen, ohne die Übersetzungen zu aktualisieren.

README Screenshots in `docs/previews` fiktive Beispieldaten aus der realen Galerie zeigen.
Browser-Nutzung nach dem dokumentierten Thema und Sprache, ohne Browser-Chrom oder persönliche Informationen.
