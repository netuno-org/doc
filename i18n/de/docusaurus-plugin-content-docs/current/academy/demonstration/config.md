---
sidebar_position: 2
id: config
title: Konfiguration
---

# Konfigurieren Sie die Anwendung

Diese Anleitung zeigt die ersten Schritte zum Konfigurieren der Sprache der Demo-Anwendung, der Datenbank und zum Aktivieren automatischer Befehle, die mit dem Server ausgeführt werden.

Alle Änderungen werden in der Konfigurationsdatei `_development.json` der Anwendung **Demo** vorgenommen, die sich im Ordner /apps/demo/**config** befindet.

### Voraussetzungen

Bevor Sie die Konfiguration bearbeiten, bestätigen Sie diese Punkte:

- Die Demo-Anwendung wurde bereits erstellt und initialisiert.
- Sie befinden sich im Stammverzeichnis des Netuno-Projekts.
- Ein Code-Editor ist mit `/apps/demo/config/development.json` geöffnet.
- Sie können den Server nach dem Speichern der Änderungen neu starten.

## Sprachkonfiguration

### 1. Anwendung

Suchen Sie in der Konfigurationsdatei die Felder `language` und `locale`, um die Sprache der Anwendung zu ändern.

```json title="/apps/demo/config/development.json"
{
  "language": "pt_PT",
  "locale": "pt_PT",
}
```

Legen Sie die Werte entsprechend der gewünschten Sprache fest:

- **Portugiesisch**: `pt_PT` oder `pt_BR`
- **Englisch**: `en_GB` oder `en_US`

### 2. Datenbank

Suchen Sie das Objekt **"db"** und anschließend die Einstellungen von **"default"**.

Ändern Sie das Feld **"name"**, um die entsprechende Datenbank festzulegen:

- `demo_pt`: Datenbank auf Portugiesisch.
- `demo_en`: Datenbank auf Englisch.

```json title="/apps/demo/config/development.json"
{
 ...
"db": {
        "default": {
            "password": "",
            "engine": "h2",
            "port": "",
            "host": "",
            "name": "demo_pt",
            "username": "sa"
        }
    },
...
}
```

### 3. Mehrere Befehle aktivieren

Netuno ermöglicht es, beim Start des Servers mehrere Befehle gleichzeitig auszuführen und die Ausgaben in derselben Konsole anzuzeigen.

Standardmäßig ist in der Anwendung **Demo** der Befehl `bun run watch` konfiguriert, aber deaktiviert. Dieser Befehl kompiliert automatisch jede Änderung, die an den Codedateien des Backoffice vorgenommen wird.

Um ihn zu aktivieren, suchen Sie das Array **"commands"** und ändern Sie den Wert des Felds **enabled** von false zu **true**.
 
```json title="/apps/demo/config/development.json"
"commands": [
        {
            "enabled": true,
            "path": "ui",
            "command": "bun run watch"
        }
    ],
```

### Parameter des Objekts "commands"

- `enabled`: aktiviert (true) oder deaktiviert (false) die automatische Ausführung des Befehls.
- `path`: legt den Pfad (Ordner) der Anwendung fest, in dem der Befehl ausgeführt wird.
- `command`: legt den Befehl fest, der im Terminal ausgeführt wird.

:::tip
Sie können weitere Befehle innerhalb des Arrays `"commands"` hinzufügen, solange Sie dieselbe Objektstruktur beibehalten.
:::


Starten Sie nach dem Speichern der Konfigurationsdatei den Netuno-Server neu, um die Änderungen anzuwenden.


## Erwartetes Ergebnis

Bestätigen Sie nach dem Neustart des Servers die folgenden Punkte:

- Die Demo-Anwendung ist auf die konfigurierte Sprache eingestellt.
- Die Konsole zeigt die Ausführung des Befehls `bun run watch` an, falls er aktiviert ist.

## Nächste Schritte

Fahren Sie mit dem nächsten Schritt **Formular** fort, um die Demonstrationsanwendung zu erkunden und zu ändern.