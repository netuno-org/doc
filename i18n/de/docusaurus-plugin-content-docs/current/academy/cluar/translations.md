---
sidebar_position: 10
id: translations
title: Wörterbücher
sidebar_label: Wörterbücher
---

Wie die festen Texte der Website-Oberfläche übersetzt werden.

## Einführung

**Wörterbücher** ist das System zur Übersetzung fester Texte der Website-Oberfläche – Beschriftungen, Meldungen, Schaltflächentexte – Dinge, die kein Seiteninhalt sind, sondern im Code „eingebetteter“ Text, der dennoch in jeder Sprache vorhanden sein muss.

Es umfasst zwei Formulare im Backoffice:

- **Eintrag** (`translation_entry`)
- **Wörterbuch** (`translation`)

## Eintrag

Definiert einen Übersetzungs-„Schlüssel“ – **Code** (`code`, wird im Code verwendet, um den Wert abzurufen) und **Beschreibung**. Z. B. einen Eintrag `kontaktformular-erfolg`, der für die Erfolgsmeldung des Kontaktformulars verwendet wird (genau dieser erscheint in der [`KontaktFormular`](/docs/academy/cluar/components/functionality) der Funktionalität).

## Wörterbuch

Ist der **übersetzte Wert** eines Eintrags für eine bestimmte **Sprache** (`language_id`) – Feld **Wert** (`value`, akzeptiert HTML).

:::info Ohne generischen Wert/ohne Sprache
Anders als bei den [Einstellungen](/docs/academy/cluar/settings) hat das Wörterbuch **keinen** Fallback-Mechanismus ohne Sprache – jeder Eintrag benötigt einen explizit definierten Wert für jede Sprache, in der er verwendet wird. Fehlt die Übersetzung in einer Sprache, erscheint als Text der Code des Eintrags selbst (z. B. `kontaktformular-erfolg`), kein generischer Wert.
:::

## Programmatisch

Die Klasse `website/src/common/Cluar.js` stellt Funktionen zum Lesen von Wörterbucheinträgen bereit; alle geben den Code des Eintrags als Ergebnis zurück, wenn keine Übersetzung vorhanden ist (nützlich, um fehlende Übersetzungen zu bemerken):

- `Cluar.translation(eintrag)` – ruft den übersetzten Wert in der aktuellen Sprache ab, so wie er gespeichert wurde (kann HTML enthalten).
- `Cluar.plainTranslation(eintrag)` – dasselbe, entfernt aber Tags `<p>` und `<br>`. Wird am häufigsten in Oberflächenbeschriftungen verwendet (Schaltflächen, Formularfelder, Benachrichtigungen).
- `Cluar.plainTitle(eintrag)` – dasselbe, entfernt aber nur Tags `<p>`.
- `Cluar.plainHTML(eintrag)` – entfernt alle HTML-Tags.
- `Cluar.translationNoParagraph(eintrag)` – entfernt nur Tags `<p>` (entspricht `plainTitle`).

## Nächster Schritt

Entdecke die [Templates](/docs/academy/cluar/templates).