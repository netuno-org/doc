---
sidebar_position: 5
id: languages
title: Sprachen
sidebar_label: Sprachen
---

Wie CLUAR die Sprachen der Website und mehrsprachige Inhalte verwaltet.

## Einführung

CLUAR ist standardmäßig mehrsprachig: Jede **Seite** ist einer Sprache zugeordnet, und die Website bietet eine Auswahl, damit Besucher zwischen den verfügbaren Sprachen wechseln können.

Die Sprachen werden im Backoffice über das Formular **Sprache** verwaltet.

## Felder

| Feld | Beschreibung |
|---|---|
| **Code** (`code`) | Internationaler Sprachcode (z. B.: `PT`, `EN`). Dieser Wert wird verwendet, um Inhalte (Seiten, Wörterbuch, Konfigurationen) dieser Sprache zuzuordnen. |
| **Gebietsschema** (`locale`) | Vollständiges Gebietsschema (z. B.: `pt`, `en`). Dieser Wert wird im Link der Seiten und beim Sprachwechsel über Code verwendet. |
| **Standard** (`default`) | Markiert diese Sprache als die bevorzugte der Website — sie wird standardmäßig geladen. |
| **Beschreibung** (`description`) | Name der Sprache, der dem Besucher angezeigt wird (z. B.: „Portugiesisch“). |

## Sprachauswahl auf der Website

Derzeit gibt es zwei Sprachauswahlen im Projekt:

- **Header der öffentlichen Website** (`website/src/base/Header`) — die traditionelle Auswahl, umgesetzt mit dem [Ant-Design-Menü](https://ant.design/components/menu/). Beim Sprachwechsel wird zu `/{locale}/` navigiert. Sie listet nur Sprachen auf, die bereits veröffentlichte Seiten haben (über `Cluar.pages()`), um keine leeren Optionen anzuzeigen.
- **`LanguageSwitch`** (`website/src/components/LanguageSwitch`) — wird innerhalb des reservierten Bereichs (`ReservedArea`) verwendet. Es ist ein einfacheres Dropdown: Es wechselt die aktive Sprache und lädt die aktuelle Seite neu, ohne zu einer anderen Route zu navigieren.

## Programmatisch

Die Klasse `website/src/common/Cluar.js` stellt Funktionen für die Arbeit mit Sprachen bereit:

- `Cluar.defaultLanguage()` — ruft die als Standard markierte Sprache ab.
- `Cluar.currentLanguage()` — ruft die aktuell aktive Sprache ab.
- `Cluar.changeLanguage(codigoOuLocalizacao)` — aktiviert eine andere Sprache programmatisch (akzeptiert sowohl `code` als auch `locale`).
- `Cluar.languages()` — ruft die Liste aller Sprachen ab.

## Nächster Schritt

Entdecke, wie die Inhalte in jeder Sprache auf den [Seiten](/docs/academy/cluar/pages/overview) organisiert sind.