---
sidebar_position: 1
id: overview
title: Übersicht
sidebar_label: Übersicht
---

**Komponenten** sind die Inhaltsbausteine, aus denen eine [Seite](/docs/academy/cluar/pages/overview) innerhalb einer [Version](/docs/academy/cluar/pages/versions-publishing) besteht. Es gibt 5 Typen:

- **Banner**
- **Inhalt**
- **Auflistung** (mit Elementen)
- **Slider** (mit Elementen)
- **Funktionalität**

Jeder Typ hat seine eigene Entität (`page_banner`, `page_content`, `page_listing`, `page_slider`, `page_functionality`), sein eigenes Formular im Backoffice und seine eigene React-Komponente auf der Website.

## Gemeinsame Felder

Obwohl jede Komponente eigene Felder hat, teilen die meisten eine ähnliche Basis:

| Feld | Beschreibung |
|---|---|
| **Typ** (`type`) | Legt fest, welche visuelle Variante zum Rendern dieser Komponente verwendet wird — siehe [Komponententypen](/docs/academy/cluar/components/types). |
| **Reihenfolge** (`sorter`) | Position der Komponente innerhalb der Seite. |
| **Bearbeitungsmodus** (`edit_mode`) | Legt fest, ob der Inhalt (`content`) einfacher Text oder HTML (`html_content`) ist. |
| **Hintergrund von Titel / Inhalt umkehren** (`title_invert_background`, `content_invert_background`) | Kehrt das Farbschema (hell/dunkel) des Text-**Editors** von Titel/Inhalt um — nützlich beim Schreiben eines Textes, der auf einem dunklen Hintergrund stehen wird (z. B. ein dunkles Bild im Banner), um den Text beim Bearbeiten kontrastreich zu sehen. Ändert nicht die Farbe des bereits auf der Seite veröffentlichten Inhalts. |
| **Aktionen** | Mit der Komponente verknüpfte Buttons/Links — siehe [Aktionen](/docs/academy/cluar/actions). Nicht alle Typen unterstützen Aktionen — siehe [Komponententypen](/docs/academy/cluar/components/types). |

## Nächster Schritt

Jede Komponente verwendet denselben Mechanismus dynamischer Typen — siehe [Komponententypen](/docs/academy/cluar/components/types). Danach kannst du jede Komponente im Detail erkunden: [Banner](/docs/academy/cluar/components/banner), [Inhalt](/docs/academy/cluar/components/content), [Auflistung](/docs/academy/cluar/components/listing), [Slider](/docs/academy/cluar/components/slider), [Funktionalität](/docs/academy/cluar/components/functionality).