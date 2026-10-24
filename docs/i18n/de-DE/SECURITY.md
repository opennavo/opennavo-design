[English](../../../SECURITY.md) · [简体中文](../zh-CN/SECURITY.md) · [繁體中文](../zh-Hant/SECURITY.md) · [日本語](../ja-JP/SECURITY.md) · [Español](../es-ES/SECURITY.md) · [Português (Brasil)](../pt-BR/SECURITY.md) · [Русский](../ru-RU/SECURITY.md) · **Deutsch** · [Français](../fr-FR/SECURITY.md) · [Italiano](../it-IT/SECURITY.md)

> Englisch ist die Ausgangssprache. Die Übersetzungen wurden lokal maschinell erstellt und müssen sprachlich geprüft werden. Code und Lizenztexte bleiben unverändert.

# Sicherheitsrichtlinie

## Eine Schwachstelle melden

Veröffentlichen Sie Schwachstellen nicht in öffentlichen Issues oder Pull Requests. Senden Sie das betroffene Paket, die Version oder den Commit, Schritte zur Reproduktion und die erwarteten Auswirkungen an **admin@opennavo.com**. Entfernen Sie Zugangsdaten und personenbezogene Daten aus Anhängen.

Meldungen zu unsicherer HTML- und URL-Verarbeitung, verwundbaren Abhängigkeiten und unbeabsichtigter Datenoffenlegung sind willkommen. Verwenden Sie fiktive Daten und testen Sie nur Anwendungen und Geräte unter Ihrer Kontrolle. Wir untersuchen Meldungen und stimmen die Veröffentlichung ab, garantieren jedoch keine Antwortfrist.

## Unterstützte Versionen

Während der frühen Vorschau gelten Korrekturen für `main` und die neueste Veröffentlichung, sofern vorhanden. Ältere Vorschauen und Forks werden nicht gesondert gepflegt.

## Verantwortung bei der Integration

`OnMarkdownView` rendert HTML aus der einbettenden Anwendung. Bereinigen Sie nicht vertrauenswürdiges HTML vor der Übergabe und registrieren Sie nur vertrauenswürdige SVG-Daten. Die Anwendung bleibt für Datenzugriff, Authentifizierung und Inhaltsrichtlinien verantwortlich. Sprach- und Designeinstellungen der Galerie werden lokal gespeichert.
