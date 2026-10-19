---
sidebar_position: 2
id: versions-publishing
title: Versionen und Veröffentlichung
sidebar_label: Versionen und Veröffentlichung
---

## Versionen

Jede Seite hat eine oder mehrere **Versionen** (`page_version`), jede mit ihrem eigenen Status (Entwurf / Veröffentlicht). Dadurch lässt sich eine neue Version des Inhalts bearbeiten, ohne das zu beeinflussen, was veröffentlicht ist — erst wenn die Version als Veröffentlicht markiert wird, wird sie zur aktiven Version der Seite.

Die Inhaltskomponenten (Banner, Inhalt, Auflistung, Slider, Funktionalität) gehören immer zu einer bestimmten Version (`page_version_id`), nicht direkt zur Seite. Das heißt: Das Bearbeiten einer Komponente in einer Entwurfsversion wirkt sich nicht auf das aus, was veröffentlicht ist.

## Veröffentlichung

Beim Veröffentlichen einer Seite führt CLUAR Folgendes aus:

1. Es sammelt alle aktiven Komponenten der veröffentlichten Version (Banner, Inhalte, Auflistungen, Slider, Funktionalitäten mit den jeweiligen Aktionen).
2. Es erzeugt eine Strukturdatei im JSON-Format mit diesen Inhalten.
3. In der Produktion wird eine statische `index.html` für die URL der Seite (pro Sprache) vorgerendert, bereits mit ausgefüllten SEO- und Open-Graph-Meta-Tags — wichtig für die gemeinsame Nutzung in sozialen Netzwerken und für Suchmaschinen, da die Website selbst eine SPA in React ist.

## Nächster Schritt

Eine gängige Methode, eine Seite zu erstellen, besteht darin, eine bereits vorhandene zu duplizieren — siehe [Seite klonen](/docs/academy/cluar/pages/cloning).