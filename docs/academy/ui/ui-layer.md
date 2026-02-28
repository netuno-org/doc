---
sidebar_position: 8
id: ui-layer
title: UI Layer
sidebar_label: UI Layer
---

Installing and compiling the dashboard and general application interface.

## Context

Netuno applications already come with a set of advanced front-end technologies configured by default, including 
[React](https://react.dev/), [Vite](https://vite.dev/), [Less](https://lesscss.org/), and 
[Ant.Design](https://ant.design/).

Within the applications, there is the `📁 ui` (_user interface_) folder, which is where we develop the
dashboards and other front-end components.

## Before You Start

Make sure you have [Bun](https://bun.sh/) installed, which is a prerequisite. Learn more about how:

- [Install Bun](/docs/academy/website/bun)

## Install Dependency Modules

To install all the default dependencies, go to the `📁 ui` (_user interface_) folder within your
application under development, for example:

```shell
cd apps/my_app/ui/
```

Run the command to install the dependency modules:

```shell
bun install
```

> [Bun](https://bun.sh) is an improved and more optimized alternative to NPM.

## Automatic Compilation

Go to the `📁 ui` (_user interface_) folder of your application under development, for example:

```shell
cd apps/my_app/ui/
```

To automatically compile the front-end with each code change, run:

```shell
bun run watch
```

> Make sure you have [Bun](https://bun.sh/) installed.

## Automatic Front-end Integration with Netuno

Netuno allows you to launch the UI alongside the Netuno application server process.

> All React build messages will be integrated into the same terminal as the Netuno application.

To do this, simply enable the configuration in the Netuno application's `commands` in `📂 config/_development.json`,
that is, in the `command` with the `ui` `path`, change `enabled` to `true`, like this:

```json title="config/_development.json"
{
  ...
  "commands": [
    {
      "enabled": true,
      "path": "ui",
      "command": "bun run watch"
    }
  ],
  ...
}
```

> Whenever you edit the Netuno application's configuration files, you must restart the server so that
> the new changes can be applied.

Finally, start/restart the server with your Netuno application to verify its functionality.

And now everything will be integrated into a single centralized terminal, thus avoiding having multiple scattered 
terminals.

More information:

- [Centralized Terminal](/docs/academy/explore/centralized-terminal)

## Other Front-end Technologies

Within the `📁 ui` folder, you can configure any front-end technology or include any new dependency module
that you need.

If you don't want to use any of the default technologies, you can replace them with any other, especially
by adapting the files:

- `package.json`
- `vite.config.js`
