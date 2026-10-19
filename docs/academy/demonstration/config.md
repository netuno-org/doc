---
sidebar_position: 2
id: config
title: Configuration
---

# Configure the Application

This guide presents the initial steps to configure the Demo application's language and database, and to enable automatic commands executed with the server.

All changes are made in the `_development.json` configuration file of the **Demo** application, located in the /apps/demo/**config** folder.

### Prerequisites

Before editing the configuration, confirm these points:

- The Demo application has already been created and initialized.
- You are at the root of the Netuno project.
- A code editor is open at `/apps/demo/config/development.json`.
- You will be able to restart the server after saving the changes.

## Language Configuration

### 1. Application

In the configuration file, locate the `language` and `locale` fields to change the application's language.

```json title="/apps/demo/config/development.json"
{
  "language": "pt_PT",
  "locale": "pt_PT",
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
            "name": "demo_pt",
            "username": "sa"
        }
    },
...
}
```

### 3. Enable Multiple Commands

Netuno allows executing multiple commands simultaneously at server startup, displaying the outputs in the same console.

By default, the **Demo** application ships with the `bun run watch` command configured but disabled. This command automatically compiles any change made to the backoffice code files.

To enable it, locate it in the **"commands"** array and change the **enabled** field value from false to **true**.
 
```json title="/apps/demo/config/development.json"
"commands": [
        {
            "enabled": true,
            "path": "ui",
            "command": "bun run watch"
        }
    ],
```

### "commands" Object Parameters

- `enabled`: activates (true) or deactivates (false) the automatic execution of the command.
- `path`: defines the path (folder) of the application where the command will be executed.
- `command`: defines the command that will be executed in the terminal.

:::tip
You can add other commands inside the `"commands"` array, as long as you keep the same object structure.
:::


After saving the configuration file, restart the Netuno server to apply the changes.


## Expected Result

After restarting the server, confirm the following points:

- The Demo application is in the configured language.
- The console displays the execution of the `bun run watch` command, if it is enabled.

## Next Steps

Proceed to the next **Form** step to explore and modify the demonstration application.