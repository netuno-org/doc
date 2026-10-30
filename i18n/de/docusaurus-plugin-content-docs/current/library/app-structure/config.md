---
id: config
title: Konfiguration
sidebar_label: Konfiguration
---

Allgemeine Einstellungen der Anwendung.

## Konfigurationsordner

Die Konfigurationen der Anwendung sind im Ordner `📂 config` verfügbar; dort werden die allgemeinen Parametrierungen der Anwendung und der externen Integrationen vorgenommen.

Netuno unterstützt verschiedene Umgebungstypen; standardmäßig verwenden wir `development` (Entwicklung) und `production` (Produktion).

Die aktive Umgebung wird in `config.js` definiert, die sich im Wurzelverzeichnis der Netuno-Installation befindet:

```javascript title="netuno/config.js"
...
config.env = 'development'
...
```

Für die Definition der Umgebung kann jeder beliebige Name verwendet werden, wobei die Anwendungen denselben Umgebungsnamen als Dateinamen haben müssen (`.json` und `.js` im Ordner `📂 config` der Anwendung).

Standardmäßig finden sich in diesem Ordner die folgenden Dateien:

## _development.js

Die Injektion von JavaScript-Code ermöglicht es, dynamische Konfigurationen durch programmatische Logik an den in der Datei `_development.json` definierten Parametrierungen vorzunehmen. Zum Beispiel eine Konfiguration anhand von Informationen definieren, die sich in einer Datenbank befinden, die Parametrierung des Verhaltens der Codeausführung definieren, unter anderem.

Diese Datei wird abhängig von der Definition der Umgebung verwendet, im Fall von `development` (Entwicklung).

## _development.json

Definition der Parametrierungen der Anwendung wie Sprache, allgemeine Einstellungen für Ressourcen und Integrationen. Zum Beispiel Konfigurationen von Datenbanken, Cron Jobs, Integrationen mit SMTP oder remote APIs, Authentifizierung, unter vielen anderen.

Diese Datei wird abhängig von der Definition der Umgebung verwendet, im Fall von `development` (Entwicklung).

## _production.js

Die Injektion von JavaScript-Code ermöglicht es, dynamische Konfigurationen durch programmatische Logik an den in `_production.js` definierten Parametrierungen vorzunehmen. Zum Beispiel die Konfiguration mit Informationen definieren, die sich in einer Datenbank befinden, die Parametrierung des Verhaltens der Codeausführung, unter anderem.

Diese Datei wird abhängig von der Definition der Umgebung verwendet, im Fall von `production` (Produktion).

## _production.json

Definition der Parametrierungen der Anwendung wie Sprache, allgemeine Einstellungen für Ressourcen und Integrationen. Zum Beispiel Konfigurationen von Datenbanken, Cron Jobs, Integrationen mit SMTP oder remote APIs, Authentifizierung, unter vielen anderen.

Diese Datei wird abhängig von der Definition der Umgebung verwendet, im Fall von `production` (Produktion).