---
sidebar_position: 8
id: ui-layer
title: UI-Schicht
sidebar_label: UI-Schicht
---

Installation und Kompilierung des Dashboards und der allgemeinen Benutzeroberfläche der Anwendungen.

## Kontext

Netuno-Anwendungen bringen standardmäßig eine Reihe fortgeschrittener Technologien für das Front-End bereits konfiguriert mit, darunter [React](https://react.dev/), [Vite](https://vite.dev/), [Less](https://lesscss.org/) und [Ant.Design](https://ant.design/).

Innerhalb der Anwendungen gibt es den Ordner `📁 ui` (_User Interface_, Benutzeroberfläche), in dem wir die Dashboards und andere Front-End-Komponenten entwickeln.

## Bevor Sie beginnen

Stellen Sie sicher, dass [Bun](https://bun.sh/) installiert ist, das eine Voraussetzung ist; mehr dazu unter:

- [Bun installieren](/docs/academy/website/bun)

## Installieren der Abhängigkeitsmodule

Um alle standardmäßig enthaltenen Abhängigkeiten zu installieren, wechseln Sie in den Ordner `📁 ui` (_Benutzeroberfläche_) innerhalb Ihrer in Entwicklung befindlichen Anwendung, zum Beispiel:

```shell
cd apps/meine_app/ui/
```

Führen Sie den Befehl zur Installation der Abhängigkeitsmodule aus:

```shell
bun install
```

> [Bun](https://bun.sh) ist eine verbesserte und optimiertere Alternative zu NPM.

## Automatische Kompilierung

Wechseln Sie in den Ordner `📁 ui` (_Benutzeroberfläche_) Ihrer in Entwicklung befindlichen Anwendung, zum Beispiel:

```shell
cd apps/meine_app/ui/
```

Um das Front-End bei jeder Codeänderung automatisch zu kompilieren, führen Sie aus:

```shell
bun run watch
```

> Stellen Sie sicher, dass [Bun](https://bun.sh/) installiert ist.
 
## Automatische Integration des Front-Ends mit Netuno

Netuno ermöglicht es Ihnen, die UI zusammen mit dem Serverprozess der Netuno-Anwendung zu starten.

> Alle Kompilierungsmeldungen von React werden im selben Terminal wie die Netuno-Anwendung integriert.

Dazu müssen Sie lediglich die Konfiguration in den `commands` der Netuno-Anwendung in `📂 config/_development.json` aktivieren, d. h. im `command` mit dem `path` von `ui` den Wert `enabled` auf `true` setzen, wie folgt:

```json title="config/_development.json"
{
  ...
  "commands": [
    {
      "enabled": true,
      "path": "ui",
      "command": "bun run watch"
    }
  ],
  ...
}
```

> Immer wenn Sie Konfigurationsdateien der Netuno-Anwendung bearbeiten, ist ein Neustart des Servers erforderlich, damit die neuen Änderungen übernommen werden.

Starten Sie schließlich den Server mit Ihrer Netuno-Anwendung bzw. starten Sie ihn neu, um die Funktionsweise zu überprüfen.

Und nun ist alles in nur einem zentralisierten Terminal integriert, sodass Sie nicht mehrere verstreute Terminals haben; mehr dazu unter:

- [Zentralisiertes Terminal](/docs/academy/explore/centralized-terminal)

## Weitere Front-End-Technologien

Im Ordner `📁 ui` können Sie jede Front-End-Technologie konfigurieren oder jedes erforderliche neue Abhängigkeitsmodul einbinden.

Wenn Sie keine der Standardtechnologien verwenden möchten, können Sie sie durch eine beliebige andere ersetzen, insbesondere durch Anpassen der Dateien:

- `package.json`
- `vite.config.js`