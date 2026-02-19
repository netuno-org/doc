---
sidebar_position: 1
id: bun
title: Bun Install
sidebar_label: Bun Install
---

## Introduction

NodeJS and NPM are the foundation for defining the frontend development ecosystem.

Despite their usefulness, their respective performances leave much to be desired.

Therefore, we recommend using Bun to obtain significant and tangible benefits with the ease of rapid adaptation 
and maintained compatibility.

At Netuno, Bun is being used more and more; see the reasons why...

## Bun

Bun is comparable to NodeJS but much more powerful, modern, intuitive, and superfast.

Bun's performance is unquestionable; anyone transitioning from NodeJS to Bun immediately notices the benefit.

Since frontend projects usually take some time to start, with Bun the initialization is immediate.

And frontend dependencies tend to occupy a lot of space, where the `📂 node_modules` folder can easily reach 
hundreds of megabytes or even gigabytes.

Bun also solves the problem of wasted space with the replication of dependency copies across multiple projects.

It creates a central repository of dependencies shared by all projects, which, upon installation, configures linked
folders.

This drastically reduces the space occupied by dependencies.

> Among many other advantages, it also stands out in usability and output, which is improved, intuitive, and more 
> evolved overall.

Given that performance advantages are extremely important for agile development, we recommend its use.

To install Bun, follow the steps at:

- [**Bun Installation**](https://bun.sh/docs/installation)

### Project Usage

To use Bun in your projects, ensure that if you already use NPM, Yarn, or another NPM, you remove the 
`📂 node_modules` folder.

Where the `package.json` file is located, run the dependency installation command:

- `bun install`

Now simply execute the `script` actions configured in `package.json`, for example:

- `bun run dev`

And to compile:

- `bun run build`

Using Bun is very similar to NPM, Yarn, PNPM, etc., but it's much faster and better overall. Furthermore, in 
deployment to test and production environments, it allows for high performance with a faster and more efficient 
deployment overall.

### Integrated Commands with Netuno

On the Netuno side, with terminal centralization, all project commands execute together in the same Netuno 
process and terminal.

- [More about Centralized Terminal.](/docs/academy/explore/centralized-terminal)

If you are integrated and using NPM command execution, you must make the change to Bun.

Change to `bun` in the `commands` configuration of the Netuno application in `📂 config/_development.json`, for 
example:

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

Stop suffering from lack of space due to multiple dependency replicas within the `📂 node_modules` folders 
wasting gigabytes.

And don't spend so much time waiting for your project to finally install dependencies, start, or compile.

There's nothing stopping you from using Bun, because it guarantees compatibility with NodeJS and NPM; it's 
literally two in one.

In our Netuno projects, we are using and migrating everything to **Bun**; follow this trend.