---
sidebar_position: 2
id: server-commands-tips
title: Server, Commands & Tips
sidebar_label: Server, Commands & Tips
---

# Server Commands

Reference for the main Netuno commands. Run them in the **terminal**, from the folder where Netuno is installed.

:::tip
Don't know how to get to the Netuno folder? See the [Installation](/docs/get-started/installation) guide.
:::

---

## Start the server

Starts the server with the `demo` application.

```bash
./netuno server
```

---

## Start the server with the APP

Starts the server with the specific application defined by the `app` parameter. If none is defined, the demo application will be started.

```bash
./netuno server app=APP_NAME
```

---

## New Application

Creates a new application from scratch, prompting for initial information and settings.

```bash
./netuno app
```

---

## List Commands

Lists all available commands and parameters with their respective descriptions.

```bash
./netuno help
```

---

## Performance Statistics

Displays the most recent performance information, stored in `logs/stats-*`.

```bash
./netuno stats
```

---

## Update to the Stable Version

Updates Netuno to the latest stable version.

```bash
./install-stable
```

---

## Update to the Testing Version

Updates Netuno to the latest development version.

```bash
./install-testing
```