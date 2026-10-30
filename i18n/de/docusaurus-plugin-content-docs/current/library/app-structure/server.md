---
id: server
title: Server
sidebar_label: Server
---

Entwicklung des Backends und der API.

## Serverordner

Der Ordner `📂 server` enthält eine Reihe von Dateien und Ordnern, die das Backend der Anwendung bilden.

Alles im Ordner `📂 server` wird bei der Verarbeitung des Backend-Servers verwendet, wie Integrationen, API, Datenbank, Sicherheit und Authentifizierung, Cron Jobs und vieles mehr.

## Ordnerstruktur

Im Ordner `📂 server` findet sich folgende Struktur:

<pre class="doc-structure__tree">
<span>./<b>server</b>/</span>
&nbsp;<span>├─ ./<b>actions</b>/</span>
&nbsp;<span>├─ ./<b>components</b>/</span>
&nbsp;<span>├─ ./<b>core</b>/</span>
&nbsp;│   <span>├─ ./<b>_config.js</b></span>
&nbsp;│   <span>├─ ./<b>_init.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_close.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_end.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_error.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_start.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_url.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_config.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_end.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_error.js</b></span>
&nbsp;│   <span>└─ ./<b>_service_start.js</b></span>
&nbsp;<span>├─ ./<b>reports</b>/</span>
&nbsp;<span>├─ ./<b>services</b>/</span>
&nbsp;<span>├─ ./<b>setup</b>/</span>
&nbsp;│   <span>├─ ./<b>_end.js</b></span>
&nbsp;│   <span>└─ ./<b>_start.js</b></span>
&nbsp;<span>└─ ./<b>templates</b>/</span>
&nbsp;    <span>├─ ./<b>&#95;</b>/</span>
&nbsp;    <span>├─ ./<b>dev</b>/</span>
&nbsp;    │   <span>└─ ./<b>dashboard.html</b></span>
&nbsp;    <span>├─ ./<b>dashboard.html</b></span>
&nbsp;    <span>├─ ./<b>scripts.html</b></span>
&nbsp;    <span>├─ ./<b>scripts_dev.html</b></span>
&nbsp;    <span>├─ ./<b>scripts_login.html</b></span>
&nbsp;    <span>├─ ./<b>styles.html</b></span>
&nbsp;    <span>├─ ./<b>styles_dev.html</b></span>
&nbsp;    <span>└─ ./<b>styles_login.html</b></span>
</pre>

## Actions

In `📂 actions` können maßgeschneiderte Anpassungsaktionen (_hooks_) zu den CRUD-Operationen der automatisch für das Backoffice generierten Formulare hinzugefügt werden; je nach Datenstruktur sind hier viele Eingriffe in die Daten möglich.

Zum Beispiel müssen beim Entfernen eines Kunden alle seine Bestellungen entfernt werden, oder beim Erstellen eines neuen Produkts muss eine Integration mit einem anderen System erfolgen. Kurz gesagt, jede Entwicklung, die direkt mit Daten zusammenhängt, kann hier erfolgen.

Die Actions sind von Datenbank-`triggers` inspiriert, jedoch auf der Ebene der Codeausführung.

Daher können spezifische Operationen beim Erstellen, Ändern und Entfernen von Daten programmiert werden.

## Components

Die `📂 components` werden verwendet, um benutzerdefinierte Feldtypen in den Backoffice-Formularen zu definieren, die selbst die Datenmanipulation durchführen können.

Es können Komponenten über Skripte erstellt werden, um einen neuen spezifischen Feldtyp in der Anwendung bereitzustellen.

## Core

Der Ordner `📂 core` ermöglicht die Injektion von Code in den Verarbeitungsfluss der HTTP-Anfragen.

Er wird auch verwendet, um Code zwischen den verschiedenen Services und anderem zu teilen.

Die `_config.js` wird ausgeführt, nachdem die Konfiguration bei jeder HTTP-Anfrage geladen wurde; sie wird nach dem Umgebungskonfigurationsskript ausgeführt, das sich im Ordner `📂 config` der Anwendung befindet.

Die `_init.js` dient dazu, eine Anweisung einzufügen, wenn die Anwendung zum ersten Mal initialisiert wird.

### Verarbeitung der HTTP-Anfragen

Im Verarbeitungsfluss der HTTP-Anfragen für jede URL der Anwendung werden die jeweiligen Skripte ausgeführt:

- `_request_start.js` wird ausgeführt, wenn die HTTP-Anfrage den Netuno-Server erreicht.
- `_request_url.js` wird ausgeführt, wenn die URL von Netuno verarbeitet wird; die URL kann auf ein anderes Ziel geändert werden.
- `_request_close.js` wird ausgeführt, wenn die Antwort auf die HTTP-Anfrage geschlossen wird.
- `_request_end.js` wird ausgeführt, wenn die HTTP-Anfrage endgültig abgeschlossen ist.
- `_request_error.js` wird ausgeführt, wenn bei der Verarbeitung der HTTP-Anfrage ein Fehler auftritt.

### Verarbeitung der API-Services

Im Verarbeitungsfluss jedes API-Services der Anwendung werden die folgenden Skripte ausgeführt:

- `_service_config.js` wird vor dem Start der Ausführung des Services ausgeführt und dient unter anderem dazu, die Ausführungskonfigurationen des Services festzulegen. Es kann festgelegt werden, ob der Service ausgeführt werden darf oder nicht, also eine Sicherheitskontrolle beim Zugriff auf den API-Service.
- `_service_start.js` wird ausgeführt, sobald ein Service verarbeitet wird.
- `_service_end.js` wird ausgeführt, nachdem die Verarbeitung eines Services abgeschlossen wurde.
- `_service_error.js` wird ausgeführt, wenn bei der Verarbeitung eines Services ein Fehler auftritt.

## Services - API

Im Ordner `📂 services` werden die Services erstellt, die die Anwendungs-API bilden.

Die Services können in verschiedenen Sprachen geschrieben werden: JavaScript, Python, Java, Kotlin, Ruby oder Groovy.

Da Netuno polyglott ist, kann jede Skriptdatei in eine andere unterstützte Programmiersprache geändert werden; es genügt, die Dateiendung entsprechend der Sprache zu haben.

Es sind keine zusätzlichen Konfigurationen abhängig von der verwendeten Programmiersprache erforderlich; es genügt, die Service-Datei mit der korrekten, der Programmiersprache entsprechenden Erweiterung zu erstellen.

## Setup

Im Ordner `📂 setup` befindet sich der automatisch vom Netuno-Motor generierte Code, der die Datenbankschemas definiert; außerdem können wir hier das Laden von Daten unterbringen, das für das Funktionieren der Anwendung wesentlich ist.

Das Skript `_start.js` wird ausgeführt, bevor die Verarbeitung zum Aufbau der Datenbank beginnt.

Das Skript `_end.js` wird ausgeführt, nachdem die Verarbeitung zum Aufbau der Datenbank abgeschlossen wurde.

Entsprechend dem Aufbau der Datenstruktur erstellt Netuno hier im Ordner `📂 setup` automatisch den Code, der erforderlich ist, damit die gesamte Datenstruktur in einer neuen Datenbank neu erstellt werden kann oder etwas neu erstellt werden kann, das in einer anderen Datenbank fehlt, in der die Anwendung eventuell ausgeführt wird.

 ## Templates

Der Ordner `📂 templates` enthält den HTML-Inhalt der Backoffice-Seiten der Anwendung, die vom Netuno-Server generiert werden.

Im Ordner `📂 dev` befindet sich die Datei `dashboard.html`, die die Änderung des Arbeitsbereichs im Entwickler-Build-Modus ermöglicht.

Die `dashboard.html`, die sich im Stammverzeichnis der Templates befindet, enthält das HTML des allgemeinen Arbeitsbereichs des Backoffice.

### Native Templates

Im Ordner `📂 _` kann jedes allgemeine Template ersetzt werden, das heißt, die Standard-Templates von Netuno können geändert werden.

- [Hier sind die nativen Templates von Netuno.](https://github.com/netuno-org/platform/tree/main/bundle/base/web/netuno/templates/sbadmin)

Wenn der Name von Ordnern und/oder Dateien mit dem der nativen Templates in diesem Ordner übereinstimmt, wird das Template aus diesem Ordner anstelle des nativen Templates verwendet.

Das heißt, es genügt, dieselbe Struktur des nativen Templates im Ordner `📂 _` zu replizieren, um es zu ersetzen.

### Scripts

Die Script-Templates injizieren JavaScript-Codedateien am Ende der Seiten mit folgendem Zweck:

1. `scripts.html` fügt JavaScript-Code am Ende der **Backoffice**-Seite hinzu.
2. `scripts_dev.html` fügt JavaScript-Code am Ende der Seite des **Entwickler-Build-Bereichs** hinzu.
3. `scripts_login.html` fügt JavaScript-Code am Ende der **Login**-Seite hinzu.

### Styles

Die Style-Templates injizieren Style-Dateien am Anfang der Seiten mit folgendem Zweck:

1. `styles.html` fügt CSS-Code am Anfang der **Backoffice**-Seite hinzu.
2. `styles_dev.html` fügt CSS-Code am Anfang der Seite des **Entwickler-Build-Bereichs** hinzu.
3. `styles_login.html` fügt CSS-Code am Anfang der **Login**-Seite hinzu.