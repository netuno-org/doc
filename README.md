# Netuno Documentation

Welcome to the Netuno platform documentation.

This is the source code of the official documentation online:

- https://doc.netuno.org

## Prerequisites

- Node.js 18 or newer
- [pnpm](https://pnpm.io/installation)

## Configuration

Copy `docusaurus.config.sample.js` to the ignored local file `docusaurus.config.js`, then adapt it if necessary:

```
cp docusaurus.config.sample.js docusaurus.config.js
```

In PowerShell, use `Copy-Item docusaurus.config.sample.js docusaurus.config.js`.

## Installation

```
pnpm install
```

## Start the English site

```
pnpm start
```

## Start the Portuguese site

```
pnpm start --locale pt
```

## Build all locales

```
pnpm build
```
