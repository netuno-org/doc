---
sidebar_position: 2
id: server-commands-tips
title: Server, Befehle & Tipps
sidebar_label: Server, Befehle & Tipps
---

# Server-Befehle

Referenz der wichtigsten Netuno-Befehle. Führen Sie diese im **Terminal** aus, und zwar aus dem Ordner, in dem Netuno installiert ist.

:::tip
Sie wissen nicht, wie Sie zum Netuno-Ordner gelangen? Konsultieren Sie die Anleitung zur [Installation](/docs/get-started/installation).
:::

---

## Server starten

Startet den Server mit der `Demo`-Anwendung.

```bash
./netuno server
```

---

## Server mit einer APP starten

Startet den Server mit der durch den Parameter `app` festgelegten Anwendung. Wird keine angegeben, wird die Demo-Anwendung gestartet.

```bash
./netuno server app=APP_NAME
```

---

## Neue Anwendung

Erstellt eine neue Anwendung von Grund auf und fragt dabei nach den ersten Informationen und Einstellungen.

```bash
./netuno app
```

---

## Befehle auflisten

Listet alle verfügbaren Befehle und Parametrisierungen mit den jeweiligen Beschreibungen auf.

```bash
./netuno help
```

---

## Performance-Statistiken

Zeigt die neuesten Performance-Informationen an, die in `logs/stats-*` gespeichert sind.

```bash
./netuno stats
```

---

## Aktualisierung auf die stabile Version

Aktualisiert Netuno auf die neueste stabile Version.

```bash
./install-stable
```

---

## Aktualisierung auf die Testversion

Aktualisiert Netuno auf die neueste Entwicklungsversion.

```bash
./install-testing
```