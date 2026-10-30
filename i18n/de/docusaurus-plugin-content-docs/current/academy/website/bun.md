---
sidebar_position: 1
id: bun
title: Bun installieren
sidebar_label: Bun installieren
---

## Einleitung

NodeJS und NPM bilden die Grundlage für das Ökosystem der Frontend-Entwicklung.

Trotz ihrer Nützlichkeit lassen ihre jeweiligen Leistungen stark zu wünschen übrig.

Deshalb empfehlen wir die Verwendung von Bun, um erhebliche und spürbare Vorteile zu erzielen – bei einfacher, schneller Anpassung und unter Beibehaltung der Kompatibilität.

In Netuno wird zunehmend Bun eingesetzt; sehen Sie sich die Gründe an ...

## Bun

Bun ist mit NodeJS vergleichbar, aber deutlich leistungsstärker, modern, intuitiv und superschnell.

Die Leistung von Bun ist unbestreitbar; wer von der Ausführung mit NodeJS auf Bun umsteigt, bemerkt den Vorteil sofort.

Während Frontend-Projekte für gewöhnlich einige Zeit zum Starten benötigen, erfolgt die Initialisierung mit Bun sofort.

Und Frontend-Abhängigkeiten beanspruchen oft viel Speicherplatz, wobei der Ordner `📂 node_modules` leicht Hunderte Megabyte oder sogar Gigabyte erreichen kann.

Bun löst zudem das Problem des verschwendeten Speicherplatzes durch die mehrfache Kopie von Abhängigkeiten über mehrere Projekte hinweg.

Es erstellt ein zentrales Repository gemeinsam genutzter Abhängigkeiten für alle Projekte, das bei der Installation verlinkte Ordner konfiguriert.

Dadurch wird der von den Abhängigkeiten belegte Speicherverbrauch drastisch reduziert.

> Neben verschiedenen anderen Vorteilen zeichnet es sich außerdem durch Benutzerfreundlichkeit und eine verbesserte, intuitive und insgesamt weiterentwickelte Ausgabe aus.

Da die Leistungsvorteile für die agile Entwicklung von größter Bedeutung sind, empfehlen wir seine Verwendung.

Um Bun zu installieren, folgen Sie den Schritten unter:

- [**Bun-Installation**](https://bun.sh/docs/installation)

### Verwendung in Projekten

Um Bun in Projekten zu verwenden, stellen Sie sicher, dass Sie, falls Sie bereits NPM, Yarn oder ein anderes Tool verwenden, den Ordner `📂 node_modules` entfernen.

Im Verzeichnis mit der Datei `package.json` müssen Sie den Befehl zur Installation der Abhängigkeiten ausführen:

- `bun install`

Jetzt müssen Sie nur noch die im `package.json` konfigurierten `scripts`-Aktionen ausführen, zum Beispiel:

- `bun run dev`

Und zum Kompilieren:

- `bun run build`

Die Verwendung von Bun ist sehr ähnlich zu NPM, Yarn, PNPM usw., nur deutlich schneller und insgesamt besser, und auch beim Deployment in Test- und Produktionsumgebungen ermöglicht es hohe Leistung mit schnell abgeschlossenem und insgesamt effizienterem Deployment.

### In Netuno integrierte Befehle

Auf Netuno-Seite sorgt die Zentralisierung des Terminals dafür, dass alle Projektbefehle gemeinsam im selben Prozess und Terminal von Netuno ausgeführt werden.

- [Mehr über das zentrale Terminal.](/docs/academy/explore/centralized-terminal)

Falls Sie integriert sind und die Befehlsausführung von NPM verwenden, sollten Sie auf Bun umstellen.

Ändern Sie die Konfiguration der `commands` der Netuno-Anwendung in `📂 config/_development.json` auf Bun, zum Beispiel:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...
        {
            "path": "webseite",
            "command": "bun run dev",
            "install": "bun install",
            "enabled": true
        }
    ]
    ...
}
```

## Fazit

Leiden Sie nicht länger unter Platzmangel durch zahlreiche Replikate von Abhängigkeiten in `📂 node_modules`-Ordnern, die Gigabyte verschwenden.

Und warten Sie auch nicht so lange, bis Ihr Projekt endlich Abhängigkeiten installiert, startet oder kompiliert.

Es gibt keinen Grund, Bun nicht zu verwenden, denn es gewährleistet die Kompatibilität mit NodeJS und NPM – es ist buchstäblich zwei in einem.

In Projekten mit Netuno verwenden wir es und migrieren alles auf **Bun**; folgen Sie diesem Trend.