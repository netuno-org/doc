---
sidebar_position: 2
id: install
title: Installation
sidebar_label: Installation
---

## Voraussetzungen

Bevor du CLUAR installierst, benötigst du:

1. [Netuno](https://doc.netuno.org/pt/docs/get-started/installation) installiert.
2. [Bun](https://bun.sh/docs/installation) installiert.

## Projekt klonen

CLUAR ist eine Netuno-App und muss daher im Ordner `apps` der Netuno-Installation geklont werden:

```
[Netuno-Stammverzeichnis]/apps
```

Mit dem Befehl:

```
git clone https://github.com/netuno-org/cluar.git
```

## Website installieren (mit Bun)

Im Ordner `website`:

```
cd website
```

Führe den Installationsbefehl von Bun aus:

```
bun install
```

Die Ausführung nicht vertrauenswürdiger Skripte von ESBUILD muss erlaubt werden:

```
bun pm trust --all
```

Wenn du die Installation der Website neu starten musst, entferne den Ordner `node_modules` und die Lock-Dateien und installiere erneut:

```
rm -rf node_modules
bun install
bun pm trust --all
```

## Nächster Schritt

Sobald der Code und die Abhängigkeiten installiert sind, fahre mit der [Konfiguration](/docs/academy/cluar/configuration) fort.