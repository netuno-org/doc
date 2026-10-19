---
sidebar_position: 1
id: overview
title: Übersicht
sidebar_label: Übersicht
---

Die **Seite** ist die zentrale Entität von CLUAR: Sie repräsentiert eine URL der Website. Jede Seite gehört zu genau einer Sprache — es gibt keine einzelne „mehrsprachige“ Seite; jede Sprache hat ihre eigene Seite (mit ihrem eigenen `link`, Titel, Inhalt usw.), und sie sind untereinander nur durch die Aktion [Klonen](/docs/academy/cluar/pages/cloning) verbunden.

## Felder

| Feld | Beschreibung |
|---|---|
| **Titel** (`title`) | Titel der Seite. |
| **Link** (`link`) | Die URL der Seite (z. B. `/ueber-uns`). |
| **Sprache** (`language_id`) | Sprache, zu der diese Seite gehört. |
| **Übergeordnete Seite** (`parent_id`) | Übergeordnete Seite, die zum Aufbau von Hierarchie/Breadcrumbs und Untermenüs verwendet wird. |
| **Vorlage** (`template`) | Vorlage, die zum Rendern der Seite verwendet wird (siehe [Vorlagen](/docs/academy/cluar/templates)). Es ist ein Auswahlfeld im Formular, das dynamisch mit den vorhandenen Ordnern in `website/src/pages/Template/` befüllt wird. |
| **Status** (`status_id`) | Entwurf oder Veröffentlicht — spiegelt den Status der aktuellen Version wider. |
| **Menü** (`menu`) | Wenn aktiviert, erscheint die Seite im Navigationsmenü. |
| **Menü-Titel** (`menu_title`) | Alternativer Titel, der im Menü angezeigt wird (wenn leer, wird der Titel der Seite verwendet). |
| **Navigierbar** (`navigable`) | Steuert, ob die Seite direkt zugänglich ist (auch ohne im Menü zu erscheinen). |
| **Reihenfolge** (`sorter`) | Position der Seite unter ihren „Geschwistern“ (gleiche `parent_id`). |
| **Beschreibung** / **Schlüsselwörter** | SEO-Meta-Tags (`<meta name="description">` / `<meta name="keywords">`). |
| **Beschreibung für soziale Netzwerke** / **Bild für soziale Netzwerke** | Werden in den Open-Graph-Tags (`og:description`, `og:image`) verwendet, wenn die Seite geteilt wird. |

## Nächster Schritt

Jede Seite hat mehrere Versionen und durchläuft einen Veröffentlichungsprozess — siehe [Versionen und Veröffentlichung](/docs/academy/cluar/pages/versions-publishing).