---
sidebar_position: 2
id: install
title: Installation
sidebar_label: Installation
---

## Requirements

Before installing CLUAR, you need to have:

1. [Netuno](https://doc.netuno.org/docs/get-started/installation) installed.
2. [Bun](https://bun.sh/docs/installation) installed.

## Clone the project

CLUAR is a Netuno app, so it must be cloned inside the `apps` folder of your Netuno installation:

```
[Netuno root directory]/apps
```

Using the command:

```
git clone https://github.com/netuno-org/cluar.git
```

## Install the website (with Bun)

Inside the `website` folder:

```
cd website
```

Run the Bun install command:

```
bun install
```

You need to allow the execution of ESBUILD's untrusted scripts:

```
bun pm trust --all
```

If you need to reset the website installation, remove the `node_modules` folder and the lock files, then install again:

```
rm -rf node_modules
bun install
bun pm trust --all
```

## Next step

With the code and dependencies installed, continue to [Configuration](/docs/academy/cluar/configuration).