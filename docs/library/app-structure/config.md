---
id: config
title: Config
sidebar_label: Config
---

General application settings.

## Settings Folder

The application settings are available in the `📂 config` folder, where the general settings of the application and external integrations are configured.

Netuno supports several types of environments; by default we use `development` and `production`.

The active environment is defined in `config.js`, which is located at the root of the Netuno installation:

```javascript title="netuno/config.js"
...
config.env = 'development'
...
```

Any name can be used to define the environment, and applications must have the same environment name as the file names (`.json` and `.js` in the application's `📂 config` folder).

By default, in this folder we find the following files:

## _development.js

The injection of JavaScript code that allows dynamic configuration through programmatic logic over the settings defined in the `_development.json` file. For example, defining some configuration based on information in a database, defining the behavior settings for code execution, among others.

This file is used depending on the environment definition, if it is `development`.

## _development.json

Definition of application settings such as language, general resource settings, and integrations.
For example, database settings, Cron Jobs, integrations with SMTP or remote APIs, authentication, among many others.

This file is used depending on the environment definition, if it is `development`.

## _production.js

The injection of JavaScript code allows dynamic configuration through programmatic logic over the settings defined in `_production.js`. For example, defining the configuration with information in a database, parameterization of code execution behavior, among others.

This file is used depending on the environment definition, if it is `production`.

## _production.json

Definition of application settings such as language, general resource settings, and integrations.
For example, database settings, Cron Jobs, integrations with SMTP or remote APIs, authentication, among many others.

This file is used depending on the environment definition, if it is `production`.