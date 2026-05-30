---
sidebar_position: 2
id: config
title: Config
---

# Configure the Application

This guide presents the initial steps to configure the Demo application language, the database, and enable automatic commands executed with the server.

All changes are made in the `_development.json` configuration file of the **Demo** application, located in the /apps/demo/**config** folder.

## Prerequisites

Before editing the configuration, confirm the following:

- The Demo application has already been created and initialized.
- You are in the root of the Netuno project.
- A code editor is open at `/apps/demo/config/development.json`.
- You will be able to restart the server after saving the changes.

## Language Configuration

### 1. Application

In the configuration file, locate the `language` and `locale` fields to change the application language.

```json  title="/apps/demo/config/development.json"
{
  "language": "en_US",
  "locale": "en_US",
}
```

Set the values according to the desired language:

- **Portuguese**: `pt_PT` or `pt_BR`
- **English**: `en_GB` or `en_US`

### 2. Database

Locate the **"db"** object and then the **"default"** settings.

Change the **"name"** field to define the corresponding database:

- `demo_pt`: Portuguese database.
- `demo_en`: English database.

```json title="/apps/demo/config/development.json"
 {
 ...
"db": {
        "default": {
            "password": "",
            "engine": "h2",
            "port": "",
            "host": "",
            "name": "demo_en",
            "username": "sa"
        }
    },
...
}
```

### 3. Enable Multiple Commands

Netuno allows multiple commands to run simultaneously during server startup, displaying their outputs in the same console.

By default, the **Demo** application includes the `bun run watch` command configured but disabled. This command automatically compiles any changes made to the backoffice code files.

To enable it, locate the **"commands"** array and change the value of the **enabled** field from false to **true**.

```json  title="/apps/demo/config/development.json"
"commands": [
        {
            "enabled": true,
            "path": "ui",
            "command": "bun run watch"
        }
    ],
```

### Parameters of the "commands" Object

- `enabled`: enables (true) or disables (false) automatic command execution.
- `path`: defines the application path (folder) where the command will run.
- `command`: defines the command that will be executed in the terminal.

:::tip 
You can add other commands inside the `"commands"` array, as long as you keep the same object structure.
:::

After saving the configuration file, restart the Netuno server to apply the changes.

## Expected Result

After restarting the server, confirm the following:

- The Demo application is using the configured language.
- The console shows the execution of the `bun run watch` command, if it is enabled.

## Next Steps

Proceed to the next **Form** step to explore and modify the demo application.