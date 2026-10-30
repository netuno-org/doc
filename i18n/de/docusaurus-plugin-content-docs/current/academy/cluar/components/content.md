---
sidebar_position: 4
id: content
title: Inhalt
sidebar_label: Inhalt
---

Die allgemeinste Text- und Bildkomponente von CLUAR.

## Einführung

Der **Inhalt** ist die allgemeinste Text-/Bildkomponente von CLUAR – verwendet für einfache Textblöcke, Text mit einem Bild daneben oder nur ein Bild, je nach gewähltem Typ.

Er folgt demselben Mechanismus, der allen Komponenten gemeinsam ist und in [Übersicht](/docs/academy/cluar/components/overview) und [Komponententypen](/docs/academy/cluar/components/types) beschrieben wird.

## Felder

Zusätzlich zu den [gemeinsamen Feldern](/docs/academy/cluar/components/overview#gemeinsame-felder) (Typ, Reihenfolge, Bearbeitungsmodus, Hintergrund invertieren, Aktionen) hat der Inhalt:

| Feld | Beschreibung |
|---|---|
| **Titel** (`title`) | Titel des Inhaltsblocks. |
| **Inhalt** (`content` / `html_content`) | Text des Blocks. |
| **Bild** (`image`) | Zugehöriges Bild (wird bei reinen Texttypen nicht verwendet). |
| **Bild-Alt** (`image_alt`) | Alternativtext des Bildes. |
| **Bildtitel** (`image_title`) | `title`-Attribut des Bildes. |
| **Maximale Bildbreite** (`image_max_width`) | Begrenzt die Breite des Bildes in Pixeln – nützlich, damit das Bild auf breiten Bildschirmen nicht zu stark gestreckt wird, insbesondere bei den Typen, bei denen das Bild neben dem Text steht. |

## Verfügbare Typen

Im Gegensatz zum Banner hat der Inhalt mehrere Typen, die auf unterschiedliche Anordnungen von Bild und Text ausgerichtet sind:

- **Standard** (`Default`)
- **Text** (`TextContent`) — nur Text, ohne Bild.
- **Bild** (`ImageContent`) — nur Bild, ohne Text.
- **Bild links** (`ImageLeft`)
- **Bild rechts** (`ImageRight`)
- **Bild oben** (`ImageTop`)
- **Bild unten** (`ImageBottom`)

Details dazu, wie die Typen funktionieren und wie ein neuer erstellt wird, findest du unter [Komponententypen](/docs/academy/cluar/components/types).

## Nächster Schritt

Weiter geht es mit der [Auflistung](/docs/academy/cluar/components/listing).