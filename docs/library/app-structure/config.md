---
id: config
title: Config
sidebar_label: Config
---

## Configuration Folder

Application configurations are available in the `📂 config` folder, where general configurations are made for the application and external integrations.

Netuno supports several types of environments. By default, we use `development` and `production`.

The active environment is defined in `config.js`, which is located at the root of the Netuno installation:

```javascript title="netuno/config.js"
...
config.env = 'development'
...
```

Any name can be used to define the environment, and applications must have the same
environment name as the file names (`.json` and `.js` in the application's `📂 config` folder).

By default, this folder contains the following files:

## _development.js

JavaScript code injection that allows dynamic configurations through programmatic logic
on the parameters defined in the `_development.json` file. For example, defining a configuration
based on information in a database, defining the parameterization of code execution behavior, among others.

This file is used depending on the environment definition, if it is `development`.

## _development.json

Defining application parameters such as language, general resource settings, and integrations.
Such as database configurations, cron jobs, integrations with SMTP or remote APIs, authentication,
among many others.

This file is used depending on the environment definition, if it is `development`.

## _production.js

JavaScript code injection allows you to perform dynamic configurations through programmatic logic on the
parameterizations defined in `_production.js`. For example, defining the configuration with information from the
database, parameterizing code execution behavior, among others.

This file is used depending on the environment definition, if it is `production`.

## _production.json

Defining application parameters Application settings such as language, general resource settings, and integrations.

For example, database settings, Cron Jobs, SMTP or remote API integrations, authentication,
among many others.

This file is used depending on the environment definition, if it is `production`.
