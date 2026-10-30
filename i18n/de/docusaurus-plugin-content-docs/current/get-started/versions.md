---
sidebar_position: 4
id: versions
title: Versionen
sidebar_label: Versionen
---

# Versionen

Wenn Sie gerade erst mit der Nutzung von Netuno beginnen, empfehlen wir die **Standardinstallation**, um die neueste und stabile Version der Plattform zu verwenden.

Netuno ermöglicht außerdem die Installation bestimmter früherer Versionen oder experimenteller Versionen, die sich noch in Entwicklung befinden – nützlich für Testumgebungen oder zur Reproduktion von Fehlern.

Bevor Sie eine bestimmte Version installieren oder aktualisieren, konsultieren Sie die offizielle Release-Liste:

- **Versionsliste:** [github.com/netuno-org/platform/releases](https://github.com/netuno-org/platform/releases)

:::tip Tipp
Prüfen Sie die Release-Hinweise, bevor Sie eine bestimmte Version installieren, insbesondere in Produktionsumgebungen.
:::

## Installation einer bestimmten Version

Um Netuno auf eine bestimmte Version zu installieren oder zu aktualisieren, fügen Sie dem Installationsbefehl den Parameter `version` mit der Kennung der gewünschten Version hinzu.

Wählen Sie die Methode, die am besten zu Ihrer Umgebung passt:

### Methode 1: Java-Installer

Verwenden Sie diese Methode für Neuinstallationen:

```bash
java -jar netuno-setup.jar install version=20230417.0119
```

### Methode 2: Haupt-Executor

Verwenden Sie diese Methode, wenn Netuno bereits installiert ist und Sie auf eine bestimmte Version aktualisieren möchten:

```bash
./netuno install version=20230417.0119
```

### Methode 3: netuno.jar

```bash
java -jar netuno.jar install version=20230417.0119
```

:::info
Ersetzen Sie `20230417.0119` durch die Kennung der gewünschten Version, die in der **[Release-Liste](https://github.com/netuno-org/platform/releases)** verfügbar ist.

Nach Ausführung des Befehls startet Netuno automatisch den Installationsprozess der angegebenen Version.
:::