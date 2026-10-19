---
sidebar_position: 1
id: initialization
title: Initialisierung
---


# Initialisierung 

Initialisierung der Demo-Anwendung

Um mit diesem Tutorial zu beginnen, besteht der erste Schritt darin, den Server der **Demo**-Anwendung zu starten und die Entwicklungsumgebung vorzubereiten.


### Starten Sie den Server 

Öffnen Sie das Terminal Ihres Betriebssystems und navigieren Sie zum Stammordner, in dem die Netuno-Plattform installiert ist (zum Beispiel `📁 /netuno`).

Führen Sie den folgenden Befehl aus, um den Server zu starten:

```bash
./netuno server
```

:::info Alternative Initialisierung
Falls der Hauptbefehl nicht funktioniert oder die Demo-Anwendung standardmäßig nicht geladen wird, erzwingen Sie die Initialisierung, indem Sie den Anwendungsparameter angeben:
:::

```bash
./netuno server app=demo
```

### Wählen Sie den Code-Editor
Sie können den Code-Editor Ihrer Wahl verwenden, um sowohl das Backend als auch das Frontend Ihrer Anwendung zu entwickeln.

Falls Sie noch keinen haben, empfehlen wir die folgenden kostenlosen Open-Source-Optionen:

- VS Code: <a href="https://code.visualstudio.com/" target="_blank">code.visualstudio.com</a>
- VS Codium: <a href="https://vscodium.com/" target="_blank">vscodium.com</a>
- WebStorm: <a href="https://www.jetbrains.com/webstorm/" target="_blank">jetbrains.com/webstorm</a>


#### Öffnen Sie den Projektordner
Öffnen Sie mit dem geöffneten Code-Editor das Verzeichnis der Demo-Anwendung: `📁 apps/demo`.

Dieser Ordner enthält alle Dateien und Konfigurationen der neuen Anwendung. Die gesamte Entwicklung findet ausschließlich in diesem Verzeichnis statt.

### Nächste Schritte

Mit laufendem Server und den im Code-Editor geöffneten Dateien ist die Umgebung bereit. Fahren Sie mit dem nächsten Schritt des Tutorials fort, um die Anwendung zu erkunden und zu ändern.