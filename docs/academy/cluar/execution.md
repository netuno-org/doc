---
sidebar_position: 4
id: execution
title: Execution
sidebar_label: Execution
---

With the project installed and configured, it is time to run it.

## Starting the server

In Netuno's root directory, run:

```
./netuno server app=cluar
```

This starts the back end and front end simultaneously.

> The first run may take longer due to installing the front-end dependencies.

By default:

- Netuno's backoffice is available at [http://localhost:9000/](http://localhost:9000/)
- The services' OpenAPI is at [http://localhost:9000/services/_openapi](http://localhost:9000/services/_openapi)

## Starting the website

To start the website manually:

```
cd website
bun run dev
```

By default, the website is available at [http://localhost:3000/](http://localhost:3000/)

> It is possible to make the website start automatically together with the Netuno server by enabling the corresponding command in `config/_development.json` — see [Configuration](/docs/academy/cluar/configuration#7-automatic-website-startup-optional).

## Troubleshooting

### GLIBC version error when running `bun run dev`

If an error like this appears when starting the website:

```
Error: Cannot find module @rollup/rollup-linux-x64-gnu. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory.
...
[cause]: Error: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.32` not found (required by .../node_modules/@rollup/rollup-linux-x64-gnu/rollup.linux-x64-gnu.node)
code: 'ERR_DLOPEN_FAILED'
```

This is not the npm optional dependency bug mentioned in the message, but rather a **GLIBC version incompatibility**: Rollup's native binary was compiled requiring `GLIBC_2.32` or newer, and older Linux distributions (for example, Ubuntu 20.04, which ships glibc 2.31) do not have it available.

To resolve it, force Rollup to use the WASM version instead of the native one by adding an `overrides` field at the root of the website's `package.json`:

```json
"overrides": {
  "rollup": "npm:@rollup/wasm-node"
}
```

Then reinstall the dependencies:

```
rm -rf node_modules bun.lock bun.lockb
bun install
bun pm trust --all
bun run dev
```

## Next step

With the project running, explore [Languages](/docs/academy/cluar/languages) or the [Pages model](/docs/academy/cluar/pages/overview).