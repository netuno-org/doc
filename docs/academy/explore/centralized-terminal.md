---
id: centralized-terminal
title: Centralized Terminal
sidebar_label: Centralized Terminal
---

Netuno allows you to unify the data output (logs) of multiple commands and processes in a single terminal window — the same one where the main server is running.

In modern development workflows, where it is common to deal with several technologies simultaneously, Netuno acts as a log orchestrator, and can contain several commands configured to start automatically in parallel, such as front-end processes for ReactJS, Angular, Vue, and any other.

> Any process can be started; you just need to define its command. For example, you can even integrate another server for an auxiliary REST API developed with any other technology.


## Configuration

To integrate external processes, you must edit your application's environment configuration file. In this guide, we will use the development environment as an example.

### File Location

Navigate to your application's folder and locate the file:

- 📂 `config/_development.json`

### Configuration Structure


The configuration is done through the "commands" key, which consists of an array of objects. This allows you to run multiple services in parallel.

Open the file and check whether the `"commands"` key already exists. If not, insert it at the end of the file (respecting the JSON format) following the configuration below:

```json
{
    ...
    "commands": [
        {
            "path": "ui",
            "command": "bun run watch",
            "enabled": true
        },
        {
            "env": [ "PORT=21030", "WDS_SOCKET_PORT=21030" ],
            "path": "website",
            "install": "bun install",
            "command": "bun run dev",
            "enabled": true
        }
    ],
    ...
}
```

> **Note:** In the example above, we configured one command for the "ui" folder and another for the "website" folder, both using the bun package manager.

### Parameter Reference

**User Interface (UI):** Runs `bun run watch` inside your application's `ui` directory.

**Website:** Runs `bun run dev` inside the `website` folder.

### env

Defines the environment variables that the process needs to run. You can define multiple variables simultaneously.

### path

Defines the folder path where the command will be executed, relative to the application root.

### install

Netuno has built-in intelligence to manage package dependencies:

- **Automatic Detection:** If your command starts with `npm`, `bun`, `pnpm`, or `yarn`, Netuno checks whether the `node_modules` folder exists.

- **Smart Execution:** If the folder is not found, the corresponding install command (for example: `bun install`) is executed automatically before starting the main process.

- **Customization:** By manually defining the `install` parameter, the default detection is replaced by your custom configuration.

### command

The main command to be executed. All data output (`output`) will be integrated with Netuno.

### enabled

Defines whether the command should (true) or should not (false) be started automatically with the application.

## Conclusion

Centralizing commands in Netuno greatly simplifies the workflow.
The unified visibility allows all information from parallel processes to be consolidated in a single terminal, making real-time monitoring easier.

The safe shutdown means that, when you stop the Netuno server execution, all configured auxiliary processes are also terminated automatically, avoiding "background" processes or port lockups.