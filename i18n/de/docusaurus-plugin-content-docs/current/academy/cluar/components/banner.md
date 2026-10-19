---
sidebar_position: 3
id: banner
title: Banner
sidebar_label: Banner
---

Die Hervorhebungskomponente im Großformat, die normalerweise oben auf der Seite verwendet wird.

## Einführung

Das **Banner** ist die große Hervorhebung einer Seite – normalerweise ein Bild, das die gesamte Breite einnimmt, mit einer hervorgehobenen Überschrift darüber und optional einem Einführungstext und Aktionen (Schaltflächen/Links).

Es folgt demselben gemeinsamen Mechanismus wie alle Komponenten, beschrieben in [Übersicht](/docs/academy/cluar/components/overview) und [Komponententypen](/docs/academy/cluar/components/types).

## Felder

Neben den [allgemeinen Feldern](/docs/academy/cluar/components/overview#gemeinsame-felder) (Typ, Reihenfolge, Bearbeitungsmodus, Hintergrund umkehren, Aktionen) verfügt das Banner über:

| Feld | Beschreibung |
|---|---|
| **Titel** (`title`) | Hervorgehobener Titel über dem Bild. |
| **Inhalt** (`content` / `html_content`) | Einführungstext unterhalb des Titels. |
| **Bild** (`image`) | Hintergrundbild des Banners. |
| **Bild-Alt-Text** (`image_alt`) | Alternativtext des Bildes für Barrierefreiheit und SEO. |
| **Bildtitel** (`image_title`) | `title`-Attribut des Bildes. |
| **X-Position** / **Y-Position** (`position_x`, `position_y`) | Passen den Fokus des Hintergrundbildes (`background-position`) in Prozent an. |

## Bildposition

Die Felder **X-Position** und **Y-Position** steuern, welcher Teil des Hintergrundbildes bei Größenänderung des Banners in verschiedenen Auflösungen immer sichtbar bleibt – dasselbe Prinzip wie `background-position` in CSS.

Zum Beispiel zentriert `50%` / `50%` den Fokus auf die Mitte des Bildes: Bei jeder Auflösung bleibt die Bildmitte sichtbar, während die Ränder bei Bedarf abgeschnitten werden.

## Verfügbare Typen

Derzeit gibt es drei Arten von Banner:

- **Standard** (`Default`) — Basis-Layout mit Titel, Inhalt und Aktionen.
- **Sekundär** (`Secondary`) — visuell anders als Standard (eigener Stil in CSS/LESS), aber mit derselben Feldstruktur.
- **Standard mit Hervorhebung** (`DefaultSubBanner`) — diskretere Variante, ohne Unterstützung für Aktionen (`action: false` im `config.json`).

Details zur Funktionsweise der Typen und zum Erstellen eines neuen Typs finden Sie unter [Komponententypen](/docs/academy/cluar/components/types).

## Nächster Schritt

Weiter geht es mit dem [Inhalt](/docs/academy/cluar/components/content).