---
sidebar_position: 2
id: server-commands-tips
title: Server, Commands & Tips
---


# Server Commands

Reference to the main Netuno commands. Execute them in the **terminal**, from the folder where Netuno is installed.

:::tip
Don't know how to get to the Netuno folder? Check the [Installation](./installation) guide.
:::

---

### Start the server

Starts the server with the demo application.

```bash
./netuno server
```

---

### Start the server with a specific application

Starts the server with the application defined by the `app` parameter. Execute in a single line.

```bash
./netuno server app=APP_NAME
```

---

### Create a new application

Creates a new application in Netuno. You will be prompted for the application name and several initial configurations.

```bash
./netuno app
```

---

### List all commands

Lists all available commands and parameters with their respective descriptions.

```bash
./netuno help
```

---

### Display performance statistics

Displays the most recent performance information, stored in `logs/stats-*`.

```bash
./netuno stats
```

---

### Update to the stable version

Updates Netuno to the latest stable version.

```bash
./install-stable
```

---

### Update to the development version

Updates Netuno to the latest development version.

```bash
./install-testing
```