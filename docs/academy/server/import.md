---
id: import
title: Import
sidebar_label: Import
---

## Introduction

When we develop, we need to use multiple interconnected code files to
organize and reuse functionality, avoid repetition, and facilitate maintenance by
centralizing useful functions, which reduces lines of code overall and consequently
greatly reduces bugs.

So we centralize useful code in another code file that can be imported by
other files that can easily reuse it.

Here we will demonstrate some solutions that Netuno provides for reusing
code.

## Polyglot Core

In any programming language supported by Netuno, we can import any
code file that is in the application's `server/core` folder.

The simplified form that Netuno offers is to use a special comment format
for code import, where the commented line has the prefix `_core:`, followed by
the path of the code file from the application's `server/core` folder.

So to import the code file:

- `server/core/example/file`

> The file must have the extension according to the programming language used.

It is possible to import another file at the beginning of any code file, for example, in services.

For JavaScript, Groovy, and Kotlin:

```javascript
// _core: example/file

...
```

For Python and Ruby:

```python
# _core: example/file

...
```

> In this special import comment, there is no need to include the file extension;
> Netuno detects it automatically.

The variables, constants, functions, classes, etc., declared in the imported file are made available
for use in the file that performs the import with this type of comment at the beginning.

To import multiple files, simply repeat the import comment with the paths of the other files.

For JavaScript, Groovy, and Kotlin, to import multiple files:

```javascript
// _core: example/file1
// _core: example/file2
// _core: example/file3

...
```

For Python and Ruby, to import multiple files:

```python
# _core: example/file1
# _core: example/file2
# _core: example/file3

...
```

## Exec Resource

Through the `_exec` resource, we can import code at any time during execution.

> The variables, constants, functions, classes, etc., declared in the imported code file can be used.

### core

To programmatically execute the import of a code file, in this case inside the
`📁 server/core` folder:

```javascript
_exec.core('path/to/file')
```

> There is no need to include the file extension; Netuno detects it automatically.

### services

To programmatically execute the import of a code file, in this case inside the
`📁 server/services` folder:

```javascript
_exec.service('path/to/file')
```

> There is no need to include the file extension; Netuno detects it automatically.

## JavaScript

Netuno enforces a foundation for development in JavaScript, as it is the most used language, especially
because in JavaScript we program both the front-end and the back-end, allowing full-stack development
using the same programming language.

Netuno analyzes the code and automatically detects whether `import` (ECMAScript Modules) or
`require` (CommonJS) is being used.

> You should not mix the `import` standard with `require`; one or the other should be used.

With this, we can always use the `.js` extension in code files, and when using statements with `import`,
Netuno will process them as ECMAScript Modules, and thus we can use `export default`.

> The use of `import` is recommended whenever possible because it is the modern standard.

### Import Code

When using native imports, unlike the previous examples, only what is
explicitly exported will be imported, based on the CommonJS (`require`) or ECMAScript Modules (`import`) standard.

The `📁 server` folder contains the `package.json` file, where we must have the following instruction:

```json
...
  "imports": {
    "#actions/*": {
      "default": "./actions/*"
    },
    "#components/*": {
      "default": "./components/*"
    },
    "#core/*": {
      "default": "./core/*"
    },
    "#reports/*": {
      "default": "./reports/*"
    },
    "#services/*": {
      "default": "./services/*"
    },
    "#setup/*": {
      "default": "./setup/*"
    },
    "#templates/*": {
      "default": "./templates/*"
    }
  },
...
```

With this, we can import any file into any other code file, for example:

```js title="server/services/profile/get.js"
import profile from "#core/lib/profile.js";

const dbProfile = profile.getLogged();
```

Since `import` is used, `export default` will be used in the imported file:

```js title="server/core/lib/profile.js"
import {_db, _user} from "@netuno/server-types";

export default {
  getLogged: () => {
    return _db.form("profile")
      .where(_db.where("profile_user_id").equal(_user.id))
      .first();
  }
};
```

> It is not recommended, in the same application or project, to mix the use of `import` (ECMAScript Modules) and
> `require` (CommonJS), even in different files and situations; it is preferable to always adopt
> a homogeneous standardization.
> We recommend using `import` because it is the modern method.

Alternatively, if `require` (CommonJS) is used instead of `import` (ECMAScript Modules):

```js title="server/services/profile/get.js"
const profile = require("#core/lib/profile.js");

const dbProfile = profile.getLogged();
```

Since `require` is used, `module.exports` will be used in the imported file:

```js title="server/core/lib/profile.js"
const {_db, _user} = require("@netuno/server-types");

module.exports = {
  getLogged: () => {
    return _db.form("profile")
      .where(_db.where("profile_user_id").equal(_user.id))
      .first();
  }
};
```

### Code Autocomplete and Validation

To have code autocomplete with integrated code validation in editors, we must install the
[Server Types](https://www.npmjs.com/package/@netuno/server-types) in the application's `📁 server` folder.

> The server types (`@netuno/server-types`) are the definition of all polyglot low-code
> programming resources in TypeScript, which allows editors to detect everything that Netuno's
> polyglot low-code framework offers, but because it is TypeScript, it only serves to assist with JavaScript code.

Inside the `📁 server` folder, install the [Server Types](https://www.npmjs.com/package/@netuno/server-types):

```bash
bun add @netuno/server-types
```

With this, in code in general, you can import any of the polyglot low-code resources available in the
Netuno framework, for example, this service code:

```javascript
import {_req, _db, _out, _val} from "@netuno/server-types";

const name = _req.getString("name");

_db.form("product")
  .set("name", name)
  .insert();

_out.json(
  _val.map()
    .set("name", name)
    .set("result", true)
);
```

Notice that the editor will validate and autocomplete the code, which is extremely useful and greatly
speeds up development.

> In some editors, it may be necessary to perform some configuration/activation to detect the `📁 server`
> folder as the code root; for example, Visual Studio Code detects it automatically, but in WebStorm you need
> to right-click the `server` folder, click `Mark Directory As > Resource Root`, and
> reopen the project.

## JS & NPM - External Dependencies

External **NPM** dependencies can be installed inside the `📁 server` folder within the application, where
the `package.json` is located.

However, contrary to what we recommended earlier, to import external libraries we use
`require`, and in this case we can mix it with `import` of internal project files, which is not very
elegant, but it is possible.

So to add a dependency, simply install it with the `bun add` command.

For example, it is possible to install `momentjs`:

- `bun add moment`

To import dependencies, `require` is used; see the example:

```javascript
import {_out} from "@netuno/server-types";
const moment = require('moment')
_out.json(moment().format())
```

Another example with `dayjs`, first install:

- `bun add dayjs`

```javascript
import {_out} from "@netuno/server-types";
const dayjs = require("dayjs");
_out.json(dayjs().format());
```

See a complete example using `date-fns`, first install:

- `bun add date-fns`

```js
import {_out} from "@netuno/server-types";

import profile from "#core/lib/profile.js";

const dbProfile = profile.getLogged();

const { formatDistance, subDays } = require('date-fns');

_out.println(formatDistance(
    subDays(new Date(), 3), new Date(), { addSuffix: true }
));
```

> Relying on external libraries is an exceptional situation; normally we find everything we need
> in Netuno's polyglot low-code framework.

### NodeJS Native Modules

Since GraalVM is not fully compatible with NodeJS native modules, to work around this it is possible to achieve
greater compatibility with external dependencies that implement an alternative solution to these modules.

It is possible to install some external dependencies as alternatives that offer compatibility as if
they were native modules.

Below is the list of modules used as alternatives to replace NodeJS native modules, along with their
respective installation commands:

- <a href="https://www.npmjs.com/package/buffer" target="_blank">Buffer</a>: `bun add buffer`
- <a href="https://www.npmjs.com/package/events" target="_blank">Events</a>: `bun add events`
- <a href="https://www.npmjs.com/package/util" target="_blank">Util</a>: `bun add util`
- <a href="https://www.npmjs.com/package/path-browserify" target="_blank">Path</a>: `bun add path-browserify`
- <a href="https://www.npmjs.com/package/stream-browserify" target="_blank">Stream</a>: `bun add stream-browserify`
- <a href="https://www.npmjs.com/package/http-browserify" target="_blank">HTTP</a>: `bun add http-browserify`
- <a href="https://www.npmjs.com/package/https-browserify" target="_blank">HTTPS</a>: `bun add https-browserify`

Remember, you must install these modules above in the `📁 server` folder inside the application; compatibility
with NodeJS native modules is provided by using these alternative modules.

## Conclusion

We can organize our code in several ways, but reusing code and avoiding
repetition is always very important.

The more lines of code there are, the greater the probability of bugs.

Remember to organize your code well and centralize its reuse; this facilitates maintenance,
avoids bugs, and increases productivity overall.

Although there are still some limitations with the use of external dependencies, we are
working to improve the ecosystem.

Meanwhile, Netuno offers several low-code and polyglot resources that meet most needs.