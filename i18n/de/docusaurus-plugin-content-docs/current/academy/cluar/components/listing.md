---
sidebar_position: 5
id: listing
title: Auflistung
sidebar_label: Auflistung
---

Wie eine Reihe zusammengehöriger Elemente präsentiert wird – Produkte, Dienstleistungen, Nachrichten und so weiter.

## Einführung

Die **Auflistung** dient dazu, eine Reihe zusammengehöriger Elemente zu präsentieren – Produkte, Dienstleistungen, Referenzen, Nachrichten und so weiter. Jede Auflistung hat einen eigenen Titel und ein eigenes einleitendes Inhaltsfeld und gruppiert mehrere **Elemente**, die im Backoffice separat verwaltet werden (`Auflistung > Element`).

Es folgt demselben Mechanismus, der allen Komponenten gemeinsam ist und in [Überblick](/docs/academy/cluar/components/overview) und [Komponententypen](/docs/academy/cluar/components/types) beschrieben wird.

## Felder der Auflistung

Neben den [gemeinsamen Feldern](/docs/academy/cluar/components/overview#gemeinsame-felder) (Typ, Reihenfolge, Bearbeitungsmodus, Hintergrund invertieren, Aktionen) hat die Auflistung:

| Feld | Beschreibung |
|---|---|
| **Titel** (`title`) | Titel der Auflistung. |
| **Inhalt** (`content` / `html_content`) | Einleitender Text der Auflistung. |
| **Bild** (`image`) | Bild, das der Auflistung selbst zugeordnet ist (nicht den Elementen). |
| **Bild-Alt** (`image_alt`) | Alternativtext des Bildes. |
| **Bildtitel** (`image_title`) | `title`-Attribut des Bildes. |

## Elemente

Jedes Element gehört zu einer Auflistung (`page_listing_id`) und hat seine eigenen Felder:

| Feld | Beschreibung |
|---|---|
| **Titel** (`title`) | Titel des Elements. |
| **Inhalt** (`content` / `html_content`) | Text des Elements. |
| **Bild** (`image`) | Bild des Elements. |
| **URL** (`link`) | Link des Elements – wohin der Benutzer beim Klicken gelangt. |
| **Reihenfolge** (`sorter`) | Position des Elements innerhalb der Auflistung. |

Beachte, dass das Element **kein eigenes Feld Typ hat** – es erbt den Typ der Auflistung, zu der es gehört: Die React-Komponente der Auflistung übergibt beim Rendern ihren `type` an jedes Element.

## Renderstruktur

Anders als bei Banner und Inhalt, wo jeder Typ ein eigenständiger Ordner innerhalb der Komponente ist, befindet sich bei der Auflistung die Komponente, die die Elemente rendert (`Item`), **innerhalb** des Typordners:

```
website/src/components/Listing/
├── index.jsx              # Router: wählt den Typ der Auflistung
└── Default/
    ├── index.jsx           # Layout der Auflistung, rendert <Item />
    ├── info.json
    ├── config.json
    └── Item/
        └── index.jsx        # wie jedes Element für diesen Typ gerendert wird
```

Das ergibt Sinn, weil die Art und Weise, wie ein Element präsentiert wird (Raster, Liste, Karten ...), oft direkt vom Layout der Auflistung abhängt – deshalb kann das `Item` jedes Typs zusammen mit dem Typ selbst angepasst werden, statt eine generische, von allen Typen gemeinsam genutzte Komponente zu sein.

## Verfügbare Typen

Heute gibt es nur den Typ **Standard** (`Default`). Um einen neuen Auflistungstyp (mit seinem eigenen `Item`) zu erstellen, folge demselben Prozess, der in [Komponententypen](/docs/academy/cluar/components/types) beschrieben wird, und denke daran, den Unterordner `Item/` innerhalb des neuen Typs einzufügen.

## Nächster Schritt

Fahre mit dem [Slider](/docs/academy/cluar/components/slider) fort.