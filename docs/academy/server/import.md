---
id: import
title: Import
sidebar_label: Import
---

## Introduction

When developing, we need to use multiple interconnected code files to organize, reuse functionalities to 
avoid repetition, and facilitate maintenance by centralizing useful functions, which reduces the overall 
lines of code and consequently greatly reduces bugs.

So we centralize the useful code in another code file that can be imported by others who can easily reuse it.

Here we will demonstrate some solutions that Netuno offers for code reuse.

## Core Polyglot

In any programming language supported by Netuno, we can import any code file located in the application's 
`server/core` folder.

The simplified way that Netuno offers is to use a special comment format for importing code, where the 
commented line has the prefix `_core:`, followed by the path to the code file from the application's 
`server/core` folder.

So, to import the code file:

- `server/core/example/file`

> The file should have the extension that corresponds to the programming language used.

It's possible to import another file at the beginning of any code file, for example, in services.

In the case of JavaScript, Groovy, and Kotlin:

```javascript
// _core: example/file

...
```

In the case of Python and Ruby:

```python
# _core: example/file

...
```

> In this special import comment, it is not necessary to include the file extension;
> Netuno detects it automatically.

The variables, constants, functions, classes, etc., declared in the imported file are made available for 
use in the file that performs the import with this type of comment at the beginning.

To import multiple files, simply repeat the import comment with the path to the other files.

In the case of JavaScript, Groovy, and Kotlin, to import multiple files:

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

## Recurso Exec

Using the `_exec` feature, we can import code at any time during execution.

> The variables, constants, functions, classes, etc., declared in the imported code file can be used.

### core

To programmatically import a code file, in this case within the `📁 server/core` folder:

```javascript
_exec.core("path/of/file")
```

> There's no need to include the file extension; Netuno detects it automatically.

### services

To programmatically import a code file, in this case within the `📁 server/services` folder:

```javascript
_exec.service("path/of/file")
```

> There's no need to include the file extension; Netuno detects it automatically.

## JavaScript

Netuno forces a foundation for development in JavaScript, being the most widely used language, especially 
because in JavaScript we program both the front-end and the back-end, allowing for full-stack development 
using the same programming language.

Netuno analyzes the code and automatically detects whether `import` (ECMAScript Modules) or 
`require` (CommonJS) is being used.

> The `import` and `require` patterns should not be mixed; one or the other must be used.

This allows us to always use the `.js` extension in code files, and when using `import` instructions, 
Netuno will process them as ECMAScript Modules, allowing us to use the `export default`.

> The use of `import` is recommended whenever possible as it is the modern standard.

### Import Code

When using native import, unlike the previous examples, only what is explicitly exported will be imported, 
based on the CommonJS (`require`) or ECMAScript Modules (`import`) pattern.

The `📁 server` folder contains the `package.json` file, where we should have the following instruction:

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

This allows us to import any file into any other code file, for example:

```js title="server/services/profile/get.js"
import profile from "#core/lib/profile.js";

const dbProfile = profile.getLogged();
```

Since `import` is used in the imported file, `export default` will be used as well.

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

> It is not recommended to mix the use of `import` (ECMAScript Modules) and `require` (CommonJS) in the 
> same application or project, even in different files and situations; it is always preferable to adopt a 
> homogeneous standardization. We recommend using `import` as it is the modern method.

Alternatively, if `require` (CommonJS) is used instead of `import` (ECMAScript Modules):

```js title="server/services/profile/get.js"
const profile = require("#core/lib/profile.js");

const dbProfile = profile.getLogged();
```

Since `require` is used in the imported file, `module.exports` will be used as well.

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

To have the code autocomplete function with code validation integrated into the editors, we must install 
the [Server Types](https://www.npmjs.com/package/@netuno/server-types) in the application's `📁 server` folder.

> The server types (`@netuno/server-types`) define all the low-code polyglot programming features in TypeScript, 
> allowing editors to detect everything that the Netuno low-code polyglot framework offers, but because it's 
> TypeScript, it only serves to assist in JavaScript code.

Inside the `📁 server` folder, install the [Server Types](https://www.npmjs.com/package/@netuno/server-types):

```bash
bun add @netuno/server-types
```

With this, the code in general can import any of the low-code polyglot resources available in the Netuno 
framework, for example, this service code:

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

Note that the editor will validate and autocomplete the code, which is extremely useful and greatly speeds 
up development.

> In some editors, it may be necessary to configure/activate the `📁 server` folder to detect the code root. 
> For example, Visual Studio Code detects it automatically, but in WebStorm, you need to right-click on the 
> `server` folder and click on `Mark Directory As Resource Root` and reopen the project.

## JS & NPM - External Dependencies

External dependencies of **NPM** can be installed within the `📁 server` folder inside the application, where 
the `package.json` file is located.

However, contrary to what we previously recommended, to import external libraries we use `require`, and in 
this case we can mix it with `import` for internal project files, which is not very elegant, but it is possible.

So, to add a dependency, simply install it with the `bund add` command.

For example, you can install `momentjs`:

- `bun add moment`

To import dependencies, use `require`, here's an example:

```javascript
import {_out} from "@netuno/server-types";
const moment = require('moment')
_out.json(moment().format())
```

Another example using `dayjs`, first install:

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

> Relying on external libraries is an exceptional situation; normally, we find everything we need within 
> the low-code, polyglot framework of Netuno.

### Native NodeJS Modules

Since GraalVM is not fully compatible with native NodeJS modules, a workaround is possible with external 
dependencies that implement an alternative solution to these modules.

It is possible to install some external dependencies as an alternative that offer compatibility as if they 
were native modules.

Below is a list of modules used as alternatives to replace native NodeJS modules, and their respective 
installation commands:

- <a href="https://www.npmjs.com/package/buffer" target="_blank">Buffer</a>: `bun add buffer`
- <a href="https://www.npmjs.com/package/events" target="_blank">Events</a>: `bun add events`
- <a href="https://www.npmjs.com/package/util" target="_blank">Util</a>: `bun add util`
- <a href="https://www.npmjs.com/package/path-browserify" target="_blank">Path</a>: `bun add path-browserify`
- <a href="https://www.npmjs.com/package/stream-browserify" target="_blank">Stream</a>: `bun add stream-browserify`
- <a href="https://www.npmjs.com/package/http-browserify" target="_blank">HTTP</a>: `bun add http-browserify`
- <a href="https://www.npmjs.com/package/https-browserify" target="_blank">HTTPS</a>: `bun add https-browserify`

Remember, you must install these modules above in the `📁 server` folder within the application; compatibility 
with native NodeJS modules is provided, and these alternative modules will be used.

## Conclusion

We can organize our code in many ways, but reusing code and avoiding repetition is always very important.

The more lines of code there are, the greater the likelihood of bugs.

Remember to organize your code well and centralize its reuse; it facilitates maintenance, avoids bugs, 
and increases overall productivity.

Although there are still some limitations with the use of external dependencies, we are working to improve 
the ecosystem.

Meanwhile, Netuno offers several low-code and polyglot features that meet most needs.
