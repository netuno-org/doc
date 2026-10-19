---
sidebar_position: 7
id: functionality
title: Funktionalität
sidebar_label: Funktionalität
---

Die konkreten Funktionalitäten, die auf einer Seite eingebunden werden können, wie Formulare und Karten.

## Einführung

Die **Funktionalität** unterscheidet sich von den anderen Komponenten: Statt visueller Varianten desselben Inhalts ist jeder Typ eine **konkrete Funktionalität**, die in die Seite eingebunden wird – derzeit ein Kontaktformular oder eine Karte.

Sie folgt demselben Mechanismus, der allen Komponenten gemeinsam ist, beschrieben in [Übersicht](/docs/academy/cluar/components/overview) und [Komponententypen](/docs/academy/cluar/components/types) – aber hier wählt man bei der Auswahl des Typs **welche Funktionalität** auf der Seite erscheint, nicht nur einen anderen Stil.

## Felder

Zusätzlich zu den [gemeinsamen Feldern](/docs/academy/cluar/components/overview#gemeinsame-felder) (Typ, Reihenfolge, Bearbeitungsmodus, Hintergrund umkehren, Aktionen) verfügt die Funktionalität über:

| Feld | Beschreibung |
|---|---|
| **Titel** (`title`) | Titel des Blocks. |
| **Inhalt** (`content` / `html_content`) | Text des Blocks. |
| **Bild** (`image`) | Zugehöriges Bild (nicht alle Typen verwenden es). |

## Verfügbare Typen

### Kontaktformular (`ContactForm`)

Zeigt ein Kontaktformular (Name, E-Mail, Nachricht) an, geschützt durch reCAPTCHA. Beim Absenden werden die Daten an den Dienst `contact` auf dem Server gesendet, der sie in der Entität `contact` speichert (im Backoffice sichtbar) und E-Mail-Benachrichtigungen konfigurierbar macht.

### Kontaktkarte (`ContactMap`)

Zeigt eine interaktive Karte unter Verwendung von [Mapbox](https://www.mapbox.com/) an. Verwendet die Konfiguration `settings.cluar.website.mapbox` (siehe [Konfiguration](/docs/academy/cluar/configuration)) – insbesondere den `accessToken` (erforderlich, damit die Karte funktioniert) und die Option `dark` (helles oder dunkles Karten-Theme).

## Nächster Schritt

Nachdem die 5 Komponenten erkundet wurden, geht es weiter zu den [Aktionen](/docs/academy/cluar/actions), die den meisten von ihnen zugeordnet werden können.