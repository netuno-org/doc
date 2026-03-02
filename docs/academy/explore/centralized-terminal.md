---
id: centralized-terminal
title: Centralized Terminal
sidebar_label: Centralized Terminal
---

## Introduction

Netuno allows you to unify the data output (logs) of multiple commands and processes into a single terminal window—the same one where the main server is running.

In modern development workflows, where it's common to work with various technologies simultaneously, Netuno acts as a log orchestrator, capable of containing several commands configured to start automatically in parallel, such as front-end processes for ReactJS, Angular, Vue, and any other.

> Any process can be started; simply define its command. For example, you can even integrate another server from an auxiliary REST API developed in any other technology.

## Settings

To integrate external processes, you must edit your application's environment configuration file. In this guide, we will use the development environment as an example.

### File Location

Navigate to your application folder and locate the file:

- 📂 `config/_development.json`

### Configuration Structure

Configuration is done through the "commands" key, which consists of an array of objects. This allows you to run multiple services in parallel.

Open the file and check if the `"commands"` key already exists. Otherwise, insert it at the end of the file (respecting the JSON format) following the configuration below:

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
            "command": "bun run start",
            "enabled": true
        }
    ],
    ...
}
```

> **Note:** In the example above, we configured one command for the "ui" folder and another for the "website" folder, both using the bun manager.

### Parameter Reference

**User Interface (UI):** Executes `bun run watch` within the `ui` directory of your application.

**Website:** Executes `bun run dev` within the `website` folder.

### env

Defines the environment variables that the process needs to run. You can define multiple variables simultaneously.

### path

Defines the folder path where the command will be executed, relative to the application root.

### install

Netuno has built-in intelligence for managing package dependencies:

- **Automatic Detection:** If your command starts with `npm`, `bun`, `pnpm`, or `yarn`, Netuno checks if the `node_modules` folder exists.

- **Intelligent Execution:** If the folder is not found, the corresponding installation command (example: `bun install`) is executed automatically before starting the main process.

- **Customization:** By manually setting the `install` parameter, the default detection is replaced by your custom configuration.

### command

The main command to be executed. All data output will be integrated with Netuno.

### enabled

Defines whether the command should (true) or (false) be started automatically with the application.

## Conclusion

Centralizing commands in Netuno greatly simplifies the workflow.

Unified visibility allows all information from parallel processes to be consolidated into a single terminal, facilitating real-time monitoring.

Safe shutdown ensures that when the Netuno server stops running, all configured auxiliary processes are also automatically terminated, preventing "background" processes or port locks.
