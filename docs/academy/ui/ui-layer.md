---
sidebar_position: 8
id: ui-layer
title: UI Layer
sidebar_label: UI Layer
---

Installation and compilation of the dashboard and general interface of applications.

## Context

Netuno applications already come configured, by default, with a set of advanced technologies aimed at the
front-end, some of which are [React](https://react.dev/), [Vite](https://vite.dev/), [Less](https://lesscss.org/)
and [Ant.Design](https://ant.design/).

Inside the applications there is the `📁 ui` folder (_user interface_), which is where we develop the
dashboards and other front-end components.

## Before You Start

Make sure you have [Bun](https://bun.sh/) installed, which is a prerequisite, more about how to:

- [Install Bun](/docs/academy/website/bun)

## Install the Dependency Modules

To install all the dependencies that come by default, enter the `📁 ui` folder (_user interface_) inside your
application under development, for example:

```shell
cd apps/my_app/ui/
```

Run the dependency module installation command:

```shell
bun install
```

> [Bun](https://bun.sh) is an improved and more optimized alternative to NPM.

## Automatic Compilation

Enter the `📁 ui` folder (_user interface_) of your application under development, for example:

```shell
cd apps/my_app/ui/
```

To compile the front-end automatically on every code change, run:

```shell
bun run watch
```

> Make sure you have [Bun](https://bun.sh/) installed.
 
## Automatic Integration of the Front-end with Netuno

Netuno allows you to start the UI together with the Netuno application's server process.

> All React compilation messages will be integrated into the same terminal as the Netuno application.

To do so, simply enable the configuration in the Netuno application's `commands` in `📂 config/_development.json`,
that is, in the `command` with the `ui` `path`, set `enabled` to `true`, as follows:

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

> Whenever you edit the Netuno application's configuration files, you need to restart the server so that it can
> take on the new changes.

Finally, start/restart the server with your Netuno application to confirm it works.

And now everything will be integrated into a single centralized terminal, thus avoiding having several scattered
terminals, more about:

- [Centralized Terminal](/docs/academy/explore/centralized-terminal)

## Other Front-end Technologies

Inside the `📁 ui` folder it is possible to configure any front-end technology, or include any new dependency
module that is needed.

If you do not want to use any of the standard technologies, you can replace them with any other, especially
by adapting the files:

- `package.json`
- `vite.config.js`