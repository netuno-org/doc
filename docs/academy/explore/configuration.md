---
id: configuration
title: Configuration
sidebar_label: Configuration
---

## Basic Configuration of an Application

You can find the application's configuration in the following directory:

- `my-app/config`

Normally in this folder you can find the following files in `.json` and `.js` format:

- `_development.js`
- `_development.json`
- `_production.js`
- `_production.json`

The files starting in `_development.*` are used only when the Netuno environment is defined as development.

The other files starting in `_production.*` are used only when the Netuno environment is defined as production.

### JSON

On the `_*.json` files you can find all the app configurations.

### JS

The `_*.js` files are executed when the the app's configuration is loaded, this allows you to change settings programmatically and perform any kind of processing.

## General Environment Configuration

This configuration defines the type of running environment and is defined in the `./config.js` file that you can find in Netuno's root directory.

By opening this file (`/config.js`) you'll be able to find the environment configuration in:

```
config.env = 'development'
```
> In this case the running configuration is set for development environment which tells the app to use the `config/_development.json` configuration file.

### Production Environment

To change the running environment type for production you'll need to change the above configuration to `production` as the following explains:

```
config.env = 'production'
```

> By altering the running configuration for production environment you'll make the app to use the `config/_production.json` configuration file.

### Other Environments

Netuno allows you to create other environment configuration names as you like.

The app will run with the environment configuration that is specified in `config.env` that you can find in the `./config.js` file located in Netuno's root directory.

Other environment configurations can be defined by altering the environment's type. Per example:

```
config.env = 'my-environment'
```
And by creating in the **app**'s `config` folder the `_my-environment.json` file.

The app's configuration files must always start with `_` and there must be two for each config: one in `.json` format and other in `.js`.

## GIT Repository

In normal conditions it's the norm to avoid including any configuration files in **GIT** repositories.

So to follow this norm you should add all configuration files to the `.gitignore` file that you can find in the app's root directory like:

```
config/_development.json
config/_production.json
```

And a new sample configuration file should be added to the repository as an example for future app configurations like:

- `config/sample.json`

> The `sample.json` file should be a copy or an adapatation of the `_development.json` file.

## Programatically

In the code executed by the server such as services the app's configurations can be acessed by using the `_app` resource.

The following shows how you can acess the app's general configurations:

```
_log.info(_app.config().getString("name"))
```

### Custom Settings

You are able to configure custom settings in the `_*.json` files such as:

```
{
    ...
    "settings": {
        "public": {
            "itemsPerPage": 10
        }
        "emailSendingInterval": 10
    }
    ...
}
```

> The `public` parameter is acessible in the backoffice `ui`(_user interface_), you can use this for dashboard development.

To acess the general app's custom settings that are in the `settings` configuration directly you should do as the following shows:

```
const emailSendingInterval = _app.settings().getInt("emailSendingInterval")
```
To acess the general app's `public` settings that are in the `settings` configuration from the `ui` (_user interface_) you should do as the following shows:

```
const itemsPerPage = netuno.config.app.settings.itemsPerPage;
```

> The `netuno.config.app.settings` object can only be accessed programatically inside the `ui` folder present inside the app's root directory.

## Conclusion

Netuno's configurations allow a varied support to multiple types of environment and customization of each environment settings.

You can add custom configurations through `settings`, it allows you to split frontend and backend configurations.