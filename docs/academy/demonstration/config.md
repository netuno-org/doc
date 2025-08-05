---
sidebar_position: 1
id: config
title: Config
---

## Demo app basic configuration

We'll only cover the necessary steps to configure the Demo App, for a more in-depth look please go to 
[Basic Configuration of an Application](/docs/academy/explore/configuration)

Inside the Netuno root folder find the folder:

* `📂 /apps/demo/config`

In here find and open the file in any text/code editor:

* `_development.json`

### Configuring the app language

Find and change both of these accordingly to your language:

``` json title="/apps/demo/config/development.json"
"language": "en_GB",
"locale": "en_GB", 
```
Here's a list of all the currently accepted values:

* ```"pt_PT" or "pt_BR"``` - for Portuguese
* ```"en_GB" or "en_US"``` - for English (if you are reading this tutorial we recommend using one of these)

### Configuring the database language

Find this in the same file:

``` json title="/apps/demo/config/development.json"
...
    "db": {
        "default": {
            "password": "",
            "engine": "h2",
            "port": "",
            "host": "",
            "name": "demo_en",
            "username": "sa"
        }
    },
...
```

And replace the database ```"name"``` value field accordingly to your language, like so:

* ```"name": "demo_pt"``` - for Portuguese
* ```"name": "demo_en"``` - for English (if you are reading this tutorial we recommend using this)

### Configuring the commands that run with Netuno

With Netuno you have the ability to run multiple commands that run with the server boot and output to the same console. By default the Demo app brings configured, but disabled, to launch the command ``` npm run watch ``` that automatically compiles any changes to backoffice code files. 
You can find this configuration in:

``` json title="/apps/demo/config/development.json"
...
    "commands": [
        {
            "enabled": false,
            "path": "ui",
            "command": "npm run watch"
        }
    ],
...
```

> To see this feature in action, enable the command with `"enabled": true` and restart your Netuno Server. 

* ```"enabled"``` - enables or disables the commands from running with server boot (can be either ```true``` or ```false``` respectively)
* ```"path"``` - the path relative to the app directory where the command will run
* ```"command"``` - the command to run

>You can add as many as you want, just make sure you follow the same object structure.