---
sidebar_position: 4
id: execution
title: Execution
sidebar_label: Execution
---

With the project installed and configured, it's time to run it.

## Start the server

In the Netuno root directory, run:

```
./netuno server app=cluar
```

This starts the back-end and the front-end at the same time.

> The first run may take longer, due to the front-end dependencies being installed.

By default:

- The Netuno backoffice is available at [http://localhost:9000/](http://localhost:9000/)
- The services OpenAPI is available at [http://localhost:9000/services/_openapi](http://localhost:9000/services/_openapi)

## Start the website

To start the website manually:

```
cd website
bun run dev
```

By default, the website is available at [http://localhost:3000/](http://localhost:3000/)

> The website can be made to start automatically together with the Netuno server, by enabling the corresponding command in `config/_development.json` — see [Configuration](/docs/academy/cluar/configuration#7-automatic-website-startup-optional).

## Troubleshooting

### GLIBC version error when running `bun run dev`

If an error like this shows up when starting the website:

```
Error: Cannot find module @rollup/rollup-linux-x64-gnu. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory.
...
[cause]: Error: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.32` not found (required by .../node_modules/@rollup/rollup-linux-x64-gnu/rollup.linux-x64-gnu.node)
code: 'ERR_DLOPEN_FAILED'
```

This isn't actually the npm optional dependencies bug mentioned in the message — it's a **GLIBC version mismatch**: Rollup's native binary was compiled requiring `GLIBC_2.32` or newer, and older Linux distributions (Ubuntu 20.04, for example, which ships with glibc 2.31) don't have it available.

To fix it, force Rollup to use the WASM build instead of the native one, by adding an `overrides` field at the root of the website's `package.json`:

```json
"overrides": {
  "rollup": "npm:@rollup/wasm-node"
}
```

Then, reinstall the dependencies:

```
rm -rf node_modules bun.lock bun.lockb
bun install
bun pm trust --all
bun run dev
```

## Next step

With the project running, explore [Languages](/docs/academy/cluar/languages) or the [Pages model](/docs/academy/cluar/pages/overview).