---
sidebar_position: 1
id: bun
title: Install Bun
sidebar_label: Install Bun
---

## Introduction

NodeJS and NPM are the foundation for defining the frontend development ecosystem.

Despite their usefulness, their respective performance leaves much to be desired.

That is why we recommend using Bun to obtain significant and tangible benefits, with the ease of quick adaptation while maintaining compatibility.

In Netuno, Bun is increasingly being used; see the reasons...

## Bun

Bun is equivalent to NodeJS but well turbocharged, modern, intuitive, and super fast.

Bun's performance is unquestionable; anyone who transitions from running NodeJS to Bun immediately notices the benefit.

Since frontend projects usually take some time to start, with Bun startup is immediate.

And frontend dependencies usually take up a lot of space, where the `📂 node_modules` folder can easily reach hundreds of megabytes or even gigabytes.

Bun also solves the problem of wasted space from replicating dependency copies across multiple projects.

It creates a central dependency repository shared by all projects, which on installation configures linked folders.

This drastically reduces the space consumed by dependencies.

> Among several other advantages, it also stands out in usability and in its improved, intuitive, and generally more advanced output.

Since performance advantages are extremely important for agile development, we recommend its use.

To install Bun, follow the steps at:

- [**Bun Installation**](https://bun.sh/docs/installation)

### Usage in Projects

To use Bun in projects, make sure that if you already use NPM, Yarn, or another package manager, you must remove the `📂 node_modules` folder.

Where the `package.json` file is located, you must run the dependency installation command:

- `bun install`

Now just run the `scripts` actions configured in `package.json`, for example:

- `bun run dev`

And to build:

- `bun run build`

Using Bun is very similar to NPM, Yarn, PNPM, etc., except that it is much faster and better overall, and even in deployment to testing and production environments, it allows you to achieve high performance with deployment completed quickly and more efficiently overall.

### Integrated Commands in Netuno

On the Netuno side, with the centralized terminal, all project commands run together in the same Netuno process and terminal.

- [More about Centralized Terminal.](/docs/academy/explore/centralized-terminal)

If it is integrated and you are using NPM command execution, you must change it to Bun.

Change to Bun in the Netuno application `commands` configuration in `📂 config/_development.json`, for example:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...
        {
            "path": "website",
            "command": "bun run dev",
            "install": "bun install",
            "enabled": true
        }
    ]
    ...
}
```

## Conclusion

No longer suffer from lack of space with multiple replicas of dependencies inside `📂 node_modules` folders wasting gigabytes.

And don't spend so much time waiting until your project finally installs dependencies, starts, or compiles.

Nothing prevents the use of Bun, because it guarantees compatibility with NodeJS and NPM; it is literally two in one.

In projects with Netuno, we are using and migrating everything to **Bun**; follow this trend.