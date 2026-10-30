---
sidebar_position: 1
id: initialization
title: Initialization
---


# Initialization

Initialization of the Demo application

To start this tutorial, the first step is to start the **Demo** application's server and prepare the development environment.


### Start the server

Open your operating system's terminal and navigate to the root folder where the Netuno platform is installed (for example, `📁 /netuno`).

Run the command below to start the server:

```bash
./netuno server
```

:::info Alternative startup
If the main command doesn't work or the Demo application isn't loaded by default, force the startup by specifying the application parameter:
:::

```bash
./netuno server app=demo
```

### Choose the Code Editor
You can use the code editor of your preference to develop both the backend and the frontend of your application.

If you don't have one yet, we recommend the following free and open-source options:

- VS Code: <a href="https://code.visualstudio.com/" target="_blank">code.visualstudio.com</a>
- VS Codium: <a href="https://vscodium.com/" target="_blank">vscodium.com</a>
- WebStorm: <a href="https://www.jetbrains.com/webstorm/" target="_blank">jetbrains.com/webstorm</a>


#### Open the project folder
With the code editor open, locate and open the Demo application's directory: `📁 apps/demo`.

This folder contains all the files and configurations of the new application. All development will be done exclusively inside this directory.

### Next steps

With the server running and the files open in the code editor, the environment is ready. Move on to the next step of the tutorial to start exploring and modifying the application.