---
sidebar_position: 9
id: settings
title: Einstellungen
sidebar_label: Einstellungen
---

Das System der Schlüssel/Wert-Parameter, die vom Inhaltseditor verwaltet werden, ohne dass Code erforderlich ist.

## Einführung

**Einstellungen** ist ein System von Schlüssel/Wert-Parametern, die vom Inhaltseditor im Backoffice verwaltet werden — gedacht für Website-Werte, die sich häufig ändern oder je nach Sprache variieren (z. B. Telefonnummer, Adresse, Social-Media-Links, ein Logo-Bild), ohne dass Code angepasst werden muss.

Es umfasst drei Formulare im Backoffice:

- **Typ** (`configuration_parameter_type`)
- **Parameter** (`configuration_parameter`)
- **Konfiguration** (`configuration`)

## Typ

Definiert, welchen Werttyp ein Parameter akzeptiert. Er hat nur **Code** (`code`) und **Name** (`name`). Sie sind bereits standardmäßig angelegt:

| Code | Name |
|---|---|
| `boolean` | Boolesch |
| `number` | Zahl |
| `image` | Bild |
| `color` | Farbe |
| `text` | Text |
| `html` | HTML |

## Parameter

Definiert einen Konfigurations-„Schlüssel“ — **Code** (`code`, wird im Code verwendet, um den Wert abzurufen), **Beschreibung** und den **Typ** (welcher der oben genannten Typen). Bsp.: ein Parameter `telefonnummer` vom Typ Text.

## Konfiguration

Es ist der **Wert** eines Parameters für eine bestimmte **Sprache** — **Wert** (`value`, Text) oder **Bild** (`value_img`), abhängig vom Typ des Parameters.

### Werte ohne Sprache (allgemeiner Fallback)

Wenn das Feld **Sprache** einer Konfiguration leer bleibt, wird dieser Wert als **Fallback für alle Sprachen** verwendet, die keinen eigenen Wert für diesen Parameter definiert haben. Dadurch muss derselbe Wert (z. B. eine Telefonnummer, die in allen Sprachen gleich ist) nicht separat für jede Sprache dupliziert werden — er wird nur einmal ohne zugeordnete Sprache definiert, und ein sprachspezifischer Wert wird nur dort definiert, wo er tatsächlich abweicht.

## Programmatisch

Die Klasse `website/src/common/Cluar.js` stellt Funktionen zum Lesen von Konfigurationen bereit:

- `Cluar.configuration(parameter)` — ruft den Wert eines Parameters in der aktuellen Sprache ab; wenn für diese Sprache kein Wert vorhanden ist, wird der Wert ohne Sprache (Fallback) verwendet; wenn keiner von beiden vorhanden ist, wird der Parametername selbst zurückgegeben (nützlich, um eine fehlende Konfiguration schnell zu erkennen).
- `Cluar.configurationNumber(parameter)` — gleich, aber konvertiert den Wert in eine Zahl (0, wenn er nicht numerisch ist).
- `Cluar.configurationMultilines(parameter)` — gleich, aber konvertiert Zeilenumbrüche in `<br>`.

## Nächster Schritt

Entdecke die [Wörterbücher](/docs/academy/cluar/dictionaries).