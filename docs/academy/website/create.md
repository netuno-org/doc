---
id: create
title: React Create
sidebar_label: React Create
---

This creation process can be applied in other contexts, for example to create any type of React project; in this case, make the necessary name adaptations and specify the folder where the commands are executed.

The basic understanding is that the web layer will be created, that is, the frontend of our Netuno application.

Therefore, it is assumed that a `website` will be created within the Netuno application, the default name for the frontend layer, but it can be any other desired name.

## Prerequisites

Netuno must be installed:

- [Netuno Installation.](/docs/get-started/installation)

Due to better performance and other advantages, Bun must be installed:

- [Install Bun.](/docs/academy/website/bun)

## Creation

To create a React application within a Netuno application, we usually call it a `website`.

Then, with the **terminal** inside the **root of your Netuno application**, which is usually located in the folder:

- `netuno/apps/MY_APP`

> Where `MY_APP` is the name of the Netuno application.

Execute the command:

`bun create vite`

When asked: `Ok to proceed? (y)`

Type `y` and press the [ENTER] key.

Next, with the question: `Project name: ›`

Type `website` and press the [ENTER] key.

Next, comes the question: `Select a framework:`

Use the arrow keys on your keyboard, and press the down key until you select the `React` option and press the [ENTER] key.

To finish, the following question: `Select a variant:`

Use the arrow keys on your keyboard, and press the down key until you select the `JavaScript` option and press the [ENTER] key.

This command will create a new directory called `📂 website` where the React application will be contained.

After creating the React application, run the following command to install the dependencies:

```
cd website
bun install
```

With this, you can start the React application with the command:

`bun run dev`

This will start the application at [http://localhost:5173/](http://localhost:5173/), or at another address with a different port number. Either way, simply open this address in your browser to view the developments.

> To end the React application at any time, in the terminal, simply press `CTRL+C` simultaneously.

## Installing Dependencies

We strongly recommend that you install the following NPM packages, as they are very useful for developing React applications with Netuno (click on each link to get more information about each one):

* [react-router](https://www.npmjs.com/package/react-router-dom)
* [antd](https://www.npmjs.com/package/antd)
* [@ant-design/icons](https://www.npmjs.com/package/@ant-design/icons)
* [less](https://www.npmjs.com/package/less)
* [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

To install the packages listed above, simply run the following set of commands in the terminal:

```
bun install react-router
bun install antd
bun install @ant-design/icons
bun install less
bun install @netuno/service-client
```

Alternatively, you can also install all packages at once:

```
bun install react-router antd @ant-design/icons less @netuno/service-client
```

## Configurations

After running the commands above, you can force a default port address, go to `📂 website/vite.config.js` and add the `server` configuration as follows:

```javascript title="website/vite.config.js"
export default defineConfig({
    server: {
        port: 3000,
        strictPort: true
    },
    plugins: [
        react()
    ]
})
```

Now when starting with the command `bun run dev` it will always use the port `3000`.

### Less

Change all `.css` files that are in `website/src` to the `.less` extension.

> Don't forget to make this change in the JSX code in the lines that `import` the `.css` files, change to `.less`.

LESS allows for a more structured and modern CSS development.

### Customizing the Ant.Design Theme

To customize the colors of Ant.Design use the `ConfigProvider` component in `App.jsx`.

For example:

```jsx
import { ConfigProvider, Button } from 'antd';
...
function App() {
    ...
    return (
        <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
        ...
            <Button type="primary">My Button with Custom Color</Button>
        ...
        </ConfigProvider>
    );
}
...
```

This way you can adjust any Ant.Design styling configuration.

### Dark Theme

It is also possible to use the dark theme of Ant.Design, to do this simply import the `theme` that contains the dark mode and apply it to the `ConfigProvider`:

```jsx
import { ConfigProvider, Button, theme } from 'antd';
...
    <ConfigProvider theme={{
        token: {
            colorPrimary: '#FF6500'
        },
        algorithm: theme.darkAlgorithm,
    }}>
        ...
        <Button type="primary">My Button with Custom Color</Button>
        ...
    </ConfigProvider>
...
```

### Restyle

Note that in the `ConfigProvider` parameterizations above, it is possible to easily change the Ant.Design style, more about Ant.Design customization:

- [Customize Theme](https://ant.design/docs/react/customize-theme)

In each Ant.Design component there are possible Design Token configurations, for example in Buttons:

- [Button - Design Token](https://ant.design/components/button#design-token)

```jsx
<ConfigProvider theme={{
    token: {
        colorPrimary: '#00b96b',
        fontSize: 18,
    },
    components: {
        Button: {
            defaultBg: '#D6BD98',
            defaultColor: '#1D1616',
            primaryColor: '#000B58',
            textTextColor: '#181C14',
        }
    }
}}>
    ...
    <Button type="primary">My Button with Custom Color</Button>
    ...
</ConfigProvider>
```

## Automatically start your React application with Netuno

Netuno allows you to start your React application together with the Netuno application server process.

> All the React application compilation messages will be integrated into the same terminal as the Netuno application.

To do this, simply add the following to the Netuno application's `commands` configuration in `📂 config/_development.json`:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...
        {
            "path": "website",
            "command": "bun run dev",
            "install": "bun install",
            "enabled": true
        }
    ],
    ...
}
```

> Whenever you edit the Netuno application's configuration files, you must restart the server so that
> the new changes can be applied.

Finally, start/restart the server with your Netuno application to verify its functionality.

And now everything will be integrated into a single centralized terminal, thus avoiding having multiple scattered
terminals.

More information:

- [Centralized Terminal](/docs/academy/explore/centralized-terminal)

## CORS (Cross-Origin Resource Sharing) Configuration

To configure CORS to avoid possible errors between the React application and the Netuno application communicating through services, go to:

- `📂 config/_development.json`

Check if the `cors` configuration already exists or add this example:

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "http://localhost:3000" ]
        }
    ],
    ...
}
```

> If `origins` contains a `*`, it means that any front-end address will be supported, for example:
> - `"origins": [ "*" ]`

With this configuration implemented, you can create the services you want without encountering CORS errors.

> More about [CORS](/docs/academy/server/services/cors)

## Environment Variables

You can define the environment variables by creating the `website/.env` file, with the variable definitions, for example:

```
NODE_ENV=development
```

Or by configuring the Netuno application, for example in:

- `📂 config/_development.json`

And defining the environment variables in the command configuration in the `env` parameterization, for example:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...,
        {
            "env": ["NODE_ENV=development"],
            "path": "website",
            "command": "bun run start",
            "install": "bun install",
            "enabled": true
        }
    ],
    ...
}
```