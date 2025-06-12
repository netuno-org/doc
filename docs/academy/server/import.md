---
id: import
title: Import
sidebar_label: Import
---

## Introduction

When we develop, we need to use multiple interconnected code files to organize, reuse functionalities to avoid 
repetition, facilitate maintenance by centralizing useful functions, which reduces the lines of code in general and 
consequently greatly reduces bugs.

So we centralize the code that is useful into a code file that can be imported by others who can easily reuse it.

Here we will demonstrate some solutions that Netuno presents to perform code reuse.

## Polyglot Core

In any programming language supported by Netuno, we can import any code file that is in the `server/core` folder of 
the application.

The simplified way that Netuno offers is to use a special comment format for importing code, where the commented 
line has the prefix `_core:`, and then has the path of the code file from the `server/core` folder of the 
application.

So to import the code file:

- `server/core/example/file`

> The file must have the extension according to the programming language used.

It is possible to import the file at the beginning of any other code file, for example from services.

In the case of JavaScript, Groovy and Kotlin:

```javascript
// _core: example/file

...
```

In the case of Python and Ruby:

```python
# _core: example/file

...
```

> In this special import comment it is not necessary to put the file extension, Netuno detects it automatically.

The variables, constants, functions, classes, etc., declared in the imported file are made available for use in the 
file that performs the import with this type of comment at the beginning.

To import multiple files, simply repeat the import comment with the path of the other files.

In the case of JavaScript, Groovy and Kotlin, to import multiple files:

```javascript
// _core: example/file1
// _core: example/file2
// _core: example/file3

...
```

In the case of Python and Ruby, to import multiple files:

```python
# _core: example/file1
# _core: example/file2
# _core: example/file3

...
```

## Exec Resource

Through the `_exec` resource we can import code at any time during execution.

> Variables, constants, functions, classes, etc., declared in the imported code file can be used.

### core

For example, to import a code file that is in the `server/core` folder:

```javascript
_exec.core('path/of/file')
```

> It is not necessary to put the file extension that Netuno detects automatically.

### services

Example of how to import a code file that is in the `server/services` folder:

```javascript
_exec.service('path/of/file')
```

> It is not necessary to put the file extension that Netuno detects automatically.

## JavaScript

Since Netuno uses GraalVM, it allows you to import files in a way that is natively compatible.

When using native import, unlike the previous examples, only what is explicitly exported will be imported, based on the 
CommonJS or ECMAScript Modules standard.

### CJS (CommonJS)

To perform the import in the CommonJS standard we use the `require` function, while the export is done with 
`module.exports`.

See how in the following example...

When creating a service in `server/services/example.js`.

We can import a `core` file as follows:

```javascript
const main = require("../core/my-code/main.cjs")
main.execute()
```

> Note that the file path indication in `require` will be relative to the service file that is being coded, this same 
> logic is applicable to any other type of JavaScript code file.

The value of the `main` constant will be what is exported by the `core/my-code/main.cjs` file, for example:

```javascript
const execute = () => {
    // my code here...
}

module.exports = {
    execute
};
``` 

It can either have the `.cjs` or `.js` extension, using the `.cjs` extension is recommended because it better indicates
that it is a file that performs `module.exports`.

### MJS (ECMAScript Modules)

To perform the import in the ECMAScript Modules standard we use the `import` instruction, while the export is done with 
the `export default`.

See how in the following example...

When creating a service in `server/services/example.mjs`.

> Note that the service file extension is `.mjs`.
>
> All files, both the one that imports and the one that is imported, must have the extension: `.mjs`

Therefore, for correct operation, it is important that all files involved in processing have the `.mjs` extension, to 
provide compatibility where the `import` instruction is supported.

So it is possible to import a `core` file as follows:

```javascript
import main from "./core/my-code/main.mjs"
main.execute()
```

> Note that the file path indicated in `import` will be from the application's `server` folder, and is not relative to 
> the file being developed.
>
> It is important that the path starts with: `./`

The `./` in `import` is equivalent to the `/server` folder within the application.

The value of `main` will be what was exported by the file `core/my-code/main.mjs`, for example:

```javascript
const execute = () => {
    // my code here...
}
export default {
    execute
};
```

### NPM - External Dependencies

External **NPM** dependencies can be installed inside the `/server` folder inside the application, where `package.json` 
is located.

Just install the dependency normally with the `npm install` command.

For example, you can install `momentjs`:

- `npm install moment`

To import the dependency in `.js` and `.cjs` files, `require` is used, see the example:

```javascript
const moment = require('moment')
_out.json(moment().format())
```

And to import external dependencies in `.mjs` files, `import` is normally used, however only libraries that use the
`.mjs` extension in the code files can be imported, this is a major limitation that we have and this makes it 
difficult to use.

This happens because all files involved in processing need to have the `.mjs` extension, but most dependencies do not 
use this type of extension.

### NodeJS Native Modules

Since GraalVM is not fully compatible with NodeJS native modules, to work around this it is possible to obtain greater 
compatibility with external dependencies that implement an alternative solution to these modules.

So it may be necessary to install some external dependencies as an alternative that provide compatibility as if they 
were native modules.

Below is a list of modules that are supported as alternatives to replace the native NodeJS modules, and their respective
installation commands:

- <a href="https://www.npmjs.com/package/buffer" target="_blank">Buffer</a>: `npm install buffer`
- <a href="https://www.npmjs.com/package/events" target="_blank">Events</a>: `npm install events`
- <a href="https://www.npmjs.com/package/util" target="_blank">Util</a>: `npm install util`
- <a href="https://www.npmjs.com/package/path-browserify" target="_blank">Path</a>: `npm install path-browserify`
- <a href="https://www.npmjs.com/package/stream-browserify" target="_blank">Stream</a>: `npm install stream-browserify`
- <a href="https://www.npmjs.com/package/http-browserify" target="_blank">HTTP</a>: `npm install http-browserify`
- <a href="https://www.npmjs.com/package/https-browserify" target="_blank">HTTPS</a>: `npm install https-browserify`

In other words, by installing these modules above in `/server` within the application, compatibility with the native 
NodeJS modules is provided and these alternative modules will be used.

## Conclusion

We can organize our code in different ways, but reusing code and avoiding repetition is always very important.

The more lines of code there are, the more likely there are to be bugs.

Remember to organize your code well and centralize its reuse, it facilitates maintenance, avoids bugs, and increases 
productivity in general.

Although there are still some limitations with the use of external dependencies, we are working to improve the 
ecosystem.

Meanwhile, Neptune offers a variety of low-code and polyglot features that cover most needs.

