---
id: centralized-terminal
title: Centralized Terminal
sidebar_label: Centralized Terminal
---

## Introduction

Netuno allows to integrate the data output of multiple commands at the same terminal where Netuno server is running.

When an application is started, depending on its configuration, it may contain several commands configured to be started automatically in parallel, but consolidate all data outputs in the same global output.

This means that front-end processes from ReactJS, Angular, Vue, and any others, can be started and integrated with Netuno.

> Any process can be started by simply defining its command, for example even another server can be integrated from an auxiliary REST API developed in any other technology.

## Settings

Inside the application you are developing, in the environment configuration file. In this example the development environment file will be used, which is located inside the application at:

- 📂 `config/_development.json`

Check if there are no command settings already, if there are not, then add at the end of the configuration file (in JSON format), the following configuration parameters as on this example:

```
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

> Note that the `commands` key is an `array`, and inside can contain the definition of the different commands, in this case there are 2:
> 1. Command to start `bun run watch` inside the `ui` folder that is inside the application.
> 2. Command to start `bun run dev` inside the `website` folder that is inside the application.

### env

Definition of the environment variables, this is an array so you can define several variables at the same time.

### path

Definition of the folder path where the command will be executed, relative to the root of the application.

### install

If the command starts with `npm`, `bun`, `pnpm`, or `yarn`, then it checks if the `node_modules` folder does not already exist, and then the command `npm install`, or `bun install`, or `pnpm install`, or `yarn install` is automatically executed, respectively according to the command prefix.

Anyway, the installation command can be customized with this parameterization, so the default installation command is no longer used.

### command

The command that will be executed and its data output (`output`) will be integrated with Netuno.

### enabled

Check if the command is enabled or not to be executed at application startup.

## Conclusion

In a simple way, it is possible to integrate several auxiliary process commands that are necessary for the operation of the application, either for development or for production.

In development, makes it much easier, because it becomes possible to see all the centralized information in a single terminal, unifying all the processes that are running in parallel.

When you stop running Netuno, all other processes will also be stopped too.
