---
sidebar_position: 1
id: pnpm-bun
title: Install PNPM and Bun
sidebar_label: Install PNPM & Bun
---

## Introduction

NodeJS and NPM are the basis for defining the frontend development ecosystem.

Despite their usefulness, their respective performances leave a lot to be desired.

That is why we recommend using PNPM and Bun to obtain significant and tangible benefits with ease of adaptation while maintaining compatibility.

In Netuno, this combination of PNPM and Bun is increasingly being used, find out why:

## PNPM

Frontend dependencies tend to take up a lot of space, where the `📂 node_modules` folder can easily reach hundreds of megabytes or even gigabytes.

PNPM solves this problem by creating a central repository of dependencies that is shared by projects through shortcuts.

This drastically reduces the amount of space occupied by dependencies.

Among several other advantages, it also stands out for its usability and output, which is much improved and more advanced.

To install PNPM, follow the steps in:

- [**PNPM Installation**](https://pnpm.io/installation)

## Bun

Bun is comparable to NodeJS but much more powerful.

Bun's performance is unquestionable; anyone who makes the transition from NodeJS to Bun will immediately notice the benefit.

Since frontend projects usually take some time to start, with Bun it is immediate.

Since the performance advantage is extremely important for agile development, we recommend its use.

To install Bun, follow the steps in:

- [**Bun Installation**](https://bun.sh/docs/installation)

## Configuration and Use in Existing Projects

To configure Bun in existing projects, change the `scripts` in `package.json` to:

```json title="package.json"
...
    "scripts": {
        "dev": "bunx --bun vite",
        "build": "bunx --bun vite build ",
        "watch": "bunx --bun vite build --watch",
        "preview": "bunx --bun vite preview"
    },
...
```

> Prefix `bunx --bun` in the script commands.

To execute, we can use PNPM. If you don't use PNPM, then delete the `📂 node_modules` folder and run the command:

`pnpm install`

Now you can execute and use PNPM with Bun. Execute any script command using `pnpm`, for example:

- `pnpm run dev`

And to compile:

- `pnpm run build`

> Using this combination of PNPM and Bun in CI/CD, that is, in deployment in test and production environments, allows you to obtain
> high performance with deployment completed quickly.

## Change the execution of integrated commands with Netuno

On the Netuno side, if you are using the execution of integrated NPM commands, you must change to PNPM.

Change the `commands` configuration of the Netuno application to PNPM in `📂 config/_development.json`, for example:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...
        {
            "path": "website",
            "command": "pnpm run dev",
            "install": "pnpm install",
            "enabled": true
        }
    ]
    ...
}
```

## Conclusion

Don't suffer anymore from lack of space with several `📂 node_modules` folders wasting so many gigabytes.

And don't wait so long until your project finally starts or compiles.

There's nothing stopping you from using PNPM and Bun, because both guarantee compatibility with NPM and NodeJS.

At Netuno we are already using and migrating all projects to PNPM and Bun, follow this trend.