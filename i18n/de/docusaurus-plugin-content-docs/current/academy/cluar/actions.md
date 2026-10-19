---
sidebar_position: 8
id: actions
title: Aktionen
sidebar_label: Aktionen
---

Wie man CTAs (Buttons/Links) erstellt und wiederverwendet, die mit Komponenten verknüpft sind.

## Einleitung

Eine **Aktion** ist im Grunde ein wiederverwendbarer **CTA** (Call-to-Action) – ein Button/Link mit Titel, Text, Bild und Ziel (`link`) –, der mit [Komponenten](/docs/academy/cluar/components/overview) wie Banner, Inhalt, Auflistung, Slider (in den Elementen) und Funktionalität verknüpft werden kann.

## Felder

| Feld | Beschreibung |
|---|---|
| **Titel** (`title`) | Titel der Aktion, gerendert als Überschrift (`<h4>`). |
| **Inhalt** (`content`) | Beschreibender Text der Aktion, gerendert als Absatz (`<p>`). |
| **Beschriftung** (`indication`) | Der Text des Links/CTAs selbst – das, was **innerhalb** des klickbaren Buttons angezeigt wird (z. B. „Mehr erfahren“, „Jetzt kaufen“). |
| **Bild** (`image`) | Der Aktion zugeordnetes Bild (z. B. ein Icon). |
| **Link** (`link`) | Ziel der Aktion (URL) – wohin der CTA beim Klick führt. |
| **Sprache** (`language_id`) | Sprache, zu der diese Aktion gehört. |
| **Parameter** (`parameter_id`) | Gruppiert diese Aktion mit ihren Entsprechungen in anderen Sprachen – siehe unten. |

## Parameter

Der **Parameter** (`action_parameter`, mit lediglich `código` und `descrição`) dient als Gruppierung: Mehrere Aktionen – jede in ihrer eigenen Sprache, aber dieselbe **Funktionalität/dasselbe Ziel** repräsentierend – teilen denselben Parameter.

Dies wird beim [Klonen einer Seite](/docs/academy/cluar/pages/cloning) in eine andere Sprache verwendet: Für jede Aktion, die mit einer Komponente der Originalseite verknüpft ist, sucht CLUAR unter den vorhandenen Aktionen eine, die denselben **Parameter** hat und sich in der **Zielsprache** des Klonens befindet. Wird eine gefunden, wird diese Aktion (die bereits übersetzte Version) automatisch mit der geklonten Komponente verknüpft – ohne dass sie später manuell hinzugefügt werden muss.

:::info Die Aktion muss zuerst in der Zielsprache erstellt werden
Die automatische Zuordnung funktioniert nur, wenn bereits eine Aktion mit demselben Parameter in der Sprache existiert, in die geklont wird. Wenn noch keine existiert, wird die Aktion einfach nicht mit der geklonten Komponente verknüpft – sie bleibt, als wäre sie nicht definiert worden. Das heißt: Der Parameter übersetzt oder erstellt die Aktion nicht automatisch; er verbindet nur bereits vorhandene äquivalente Aktionen, sobald sie in jeder Sprache erstellt wurden.
:::

Zum Beispiel: eine Aktion „Mehr erfahren“ mit dem Parameter `mehr-erfahren` auf Deutsch und eine weitere Aktion „Learn more“ mit demselben Parameter `mehr-erfahren` auf Englisch – beim Klonen einer Seite von Deutsch nach Englisch erhält ein Banner, mit dem die erste Aktion verknüpft war, automatisch die zweite.

## Nächster Schritt

Entdecke die [Einstellungen](/docs/academy/cluar/settings).