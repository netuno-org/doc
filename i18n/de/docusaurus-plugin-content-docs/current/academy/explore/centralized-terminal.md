---
id: centralized-terminal
title: Zentralisiertes Terminal
sidebar_label: Zentralisiertes Terminal
---

Netuno ermöglicht es, die Datenausgabe (Logs) mehrerer Befehle und Prozesse in einem einzigen Terminalfenster zu vereinheitlichen – demselben, in dem der Hauptserver ausgeführt wird.

In modernen Entwicklungsabläufen, in denen es üblich ist, mit verschiedenen Technologien gleichzeitig zu arbeiten, fungiert Netuno als Log-Orchestrator und kann mehrere Befehle enthalten, die konfiguriert sind, um automatisch parallel gestartet zu werden, wie Frontend-Prozesse von ReactJS, Angular, Vue und beliebigen anderen.

> Jeder Prozess kann gestartet werden, es genügt, seinen Befehl zu definieren; zum Beispiel kann sogar ein weiterer Server einer unterstützenden REST-API integriert werden, die in einer beliebigen anderen Technologie entwickelt wurde.


## Konfiguration

Um externe Prozesse zu integrieren, müssen Sie die Umgebungskonfigurationsdatei Ihrer Anwendung bearbeiten. In dieser Anleitung verwenden wir die Entwicklungsumgebung als Beispiel.

### Speicherort der Datei

Navigieren Sie zum Ordner Ihrer Anwendung und suchen Sie die Datei:

- 📂 `config/_development.json`

### Konfigurationsstruktur


Die Konfiguration erfolgt über den Schlüssel `"commands"`, der aus einem Array von Objekten besteht. Dadurch können Sie mehrere Dienste parallel ausführen.

Öffnen Sie die Datei und prüfen Sie, ob der Schlüssel `"commands"` bereits vorhanden ist. Falls nicht, fügen Sie am Ende der Datei (unter Beachtung des JSON-Formats) die folgende Konfiguration ein:

```json
{
    ...
    "commands": [
        {
            "path": "ui",
            "command": "bun run watch",
            "enabled": true
        },
        {
            "env": [ "PORT=21030", "WDS_SOCKET_PORT=21030" ],
            "path": "webseite",
            "install": "bun install",
            "command": "bun run dev",
            "enabled": true
        }
    ],
    ...
}
```

> **Hinweis:** Im obigen Beispiel haben wir einen Befehl für den Ordner `ui` und einen weiteren für den Ordner `webseite` konfiguriert, beide unter Verwendung des Paketmanagers bun.

### Parameterreferenz

**Benutzeroberfläche (UI):** Führt `bun run watch` im Verzeichnis `ui` Ihrer Anwendung aus.

**Website:** Führt `bun run dev` im Ordner `webseite` aus.

### env

Definiert die Umgebungsvariablen, die der Prozess zum Ausführen benötigt. Sie können mehrere Variablen gleichzeitig definieren.

### path

Definiert den Verzeichnispfad, in dem der Befehl ausgeführt wird, relativ zum Stammverzeichnis der Anwendung.

### install

Netuno bietet eine integrierte Logik zur Verwaltung von Paketabhängigkeiten:

- **Automatische Erkennung:** Wenn Ihr Befehl mit `npm`, `bun`, `pnpm` oder `yarn` beginnt, prüft Netuno, ob der Ordner `node_modules` vorhanden ist.

- **Intelligente Ausführung:** Wird der Ordner nicht gefunden, wird der entsprechende Installationsbefehl (Beispiel: `bun install`) automatisch ausgeführt, bevor der Hauptprozess gestartet wird.

- **Anpassung:** Wenn Sie den Parameter `install` manuell definieren, wird die Standarderkennung durch Ihre benutzerdefinierte Konfiguration ersetzt.

### command

Der auszuführende Hauptbefehl. Die gesamte Datenausgabe (`output`) wird in Netuno integriert.

### enabled

Legt fest, ob der Befehl mit der Anwendung automatisch gestartet werden soll (true) oder nicht (false).

## Fazit

Die Zentralisierung von Befehlen in Netuno vereinfacht den Arbeitsablauf erheblich.
Die einheitliche Sichtbarkeit ermöglicht es, alle Informationen paralleler Prozesse in einem einzigen Terminal zusammenzuführen, was die Überwachung in Echtzeit erleichtert.

Das sichere Beenden sorgt dafür, dass beim Stoppen der Ausführung des Netuno-Servers auch alle konfigurierten Hilfsprozesse automatisch beendet werden, wodurch "Hintergrundprozesse" oder Portblockaden vermieden werden.