---
sidebar_position: 6
id: slider
title: Slider
sidebar_label: Slider
---

Die Karussellkomponente zur Präsentation einer Folge hervorgehobener Elemente.

## Einführung

Der **Slider** zeigt eine Folge von Elementen in einem Karussell an – jedes mit Hintergrundbild, Titel, Text und optional seinen eigenen Aktionen. Er wird mit der Bibliothek [Keen Slider](https://keen-slider.io/) gerendert.

Er folgt demselben gemeinsamen Mechanismus, der in [Übersicht](/docs/academy/cluar/components/overview) und [Komponententypen](/docs/academy/cluar/components/types) beschrieben ist.

## Felder des Sliders

Neben den [gemeinsamen Feldern](/docs/academy/cluar/components/overview#gemeinsame-felder) (Typ, Reihenfolge, Bearbeitungsmodus, Hintergrund invertieren) hat der Slider:

| Feld | Beschreibung |
|---|---|
| **Titel** (`title`) | Titel des Slider-Blocks. |
| **Inhalt** (`content` / `html_content`) | Einleitungstext des Blocks. |
| **Bild** (`image`) | Bild, das dem Slider selbst zugeordnet ist (nicht den Elementen). |
| **Bild-Alt-Text** (`image_alt`) | Alternativtext des Bildes. |
| **Bildtitel** (`image_title`) | `title`-Attribut des Bildes. |

## Elemente

Jedes Element gehört zu einem Slider (`page_slider_id`) und ist eine der „Folien“ des Karussells:

| Feld | Beschreibung |
|---|---|
| **Titel** (`title`) | Titel der Folie. |
| **Inhalt** (`content` / `html_content`) | Text der Folie. |
| **Bild** (`image`) | Hintergrundbild der Folie. |
| **Bild-Alt-Text** (`image_alt`) | Alternativtext des Bildes. |
| **Bildtitel** (`image_title`) | `title`-Attribut des Bildes. |
| **Reihenfolge** (`sorter`) | Position der Folie innerhalb des Karussells. |
| **Aktionen** | Jedes Element kann seine eigenen zugehörigen Aktionen haben – siehe [Aktionen](/docs/academy/cluar/actions). |

:::info Unterschied zur Auflistung
Anders als beim Element der Auflistung hat das Slider-Element **eigene Aktionen**, die individuell zugeordnet sind (`page_slider_item_action`) – jede Folie kann ihren eigenen Button/Link haben.
:::

## Renderstruktur

Wie bei der Auflistung befindet sich das `Item` des Sliders **innerhalb** des Ordners des Typs und nicht als Geschwisterordner:

```
website/src/components/Slider/
├── index.jsx              # Router: wählt den Slider-Typ aus
└── Default/
    ├── index.jsx           # Slider-Layout, baut das Karussell mit den <Item /> auf
    ├── info.json
    ├── config.json
    └── Item/
        └── index.jsx        # jede Folie, einschließlich ihrer eigenen Aktionen
```

## Verfügbare Typen

Derzeit gibt es nur den Typ **Standard** (`Default`). Um einen neuen Slider-Typ (mit seinem eigenen `Item`) zu erstellen, folge demselben Prozess, der in [Komponententypen](/docs/academy/cluar/components/types) beschrieben ist, und denke daran, den Unterordner `Item/` innerhalb des neuen Typs einzufügen.

## Nächster Schritt

Weiter geht es mit der [Funktionalität](/docs/academy/cluar/components/functionality).