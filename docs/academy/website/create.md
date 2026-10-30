---
sidebar_position: 2
id: create
title: Create with React
sidebar_label: Create with React
---

This creation process can be applied in other contexts, for example to create any type of React project; in this case, make the necessary adjustments to the name and the folder where the commands are executed.

The basic understanding is that the web layer will be created, that is, the frontend of our Netuno application.

Therefore, it is assumed that `website` will be created inside the Netuno application, the default name for the frontend layer, but it can be any other desired name.

## Prerequisites

You must have Netuno installed:

- [Netuno Installation.](/docs/get-started/installation)

Due to better performance, among other advantages, Bun should be installed:

- [Install Bun.](/docs/academy/website/bun)

## Creation

To create a React application inside a Netuno application, we usually call it `website`.

So, with the **terminal** inside the **root of your Netuno application**, which is usually located inside the folder:

- `netuno/apps/MY_APP`

> Where `MY_APP` is the name of the Netuno application.

Run the command:

```shell
bun create vite
```

Then, at the question: `Project name:`

Type `website` and press the `ENTER` key.

Next comes the question: `Select a framework:`

Use the keyboard arrows and press the down arrow key until the `React` option is selected, then press the `ENTER` key.

Finally, the following question: `Select a variant:`

Use the keyboard arrows and press the down arrow key until the `JavaScript` option is selected, then press the `ENTER` key.

This command will create a new directory named `📂 website` containing the React frontend.

After creating the React frontend, run the following to install the dependencies:

```shell
cd website
bun install
```

Open your Netuno application folder in your preferred editor (such as VSCode, WebStorm, among others), and enter the `website` folder that was created.

## Run

Now you can start the React frontend server using the command:

```shell
bun run dev
```

This will make the frontend available at [http://localhost:5173/](http://localhost:5173/); usually, another address with a different port number may appear in the terminal. In any case, just open the address shown in the terminal in your browser.

> To stop execution in the terminal, press the `CTRL` and `C` keys simultaneously.

## Installing Dependencies

If you are running the frontend server in the terminal, that is, `bun run dev`, it is recommended to stop it by pressing the `CTRL` and `C` keys simultaneously.

We strongly recommend installing the following NPM packages, as they are very useful for developing React applications with Netuno (click each link for more information about each one):

* [react-router](https://www.npmjs.com/package/react-router)
* [antd](https://www.npmjs.com/package/antd)
* [@ant-design/icons](https://www.npmjs.com/package/@ant-design/icons)
* [less](https://www.npmjs.com/package/less)
* [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

To install the packages listed above, just run the following set of commands in the terminal:

```shell
bun add react-router
bun add antd
bun add @ant-design/icons
bun add less
bun add @netuno/service-client
```

Alternatively, you can also install all packages at once:

```shell
bun add react-router antd @ant-design/icons less @netuno/service-client
```

## Configurations

After running the commands above, you can force a default port address; go to `📂 website/vite.config.js` and add the `server` configuration as follows:

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

Now, when starting with the `bun run dev` command, it will always use port `3000`.

### Less

Change all `.css` files in `website/src` to the `.less` extension.

> Do not forget to make this change in the JSX code on the lines that `import` the `.css` files, changing them to `.less`.

LESS allows more structured and modern CSS development.

### Ant.Design Theme Customization

To customize Ant.Design colors, use the `ConfigProvider` component in `App.jsx`.

For example:

```jsx title="website/src/App.jsx"
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

This way, you can adjust any Ant.Design styling configuration.

### Dark Theme

You can also use the Ant.Design dark theme; for this, just import `theme`, which contains dark mode, and apply it to `ConfigProvider`:

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

Note that in the `ConfigProvider` settings above, you can easily change the Ant.Design style; more about Ant.Design customization:

- [Customize Theme](https://ant.design/docs/react/customize-theme)

Each Ant.Design component has possible Design Token settings, for example in Buttons:

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

## Automatic Frontend Startup with Netuno

Netuno allows you to start the React application together with the Netuno application server process.

> All compilation messages from the React application will be integrated into the same terminal as the Netuno application.

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

> Whenever you edit Netuno application configuration files, you must restart the server so that it can apply the new changes.

Finally, start/restart the server with your Netuno application to verify that it works.

And now everything will be integrated into a single centralized terminal, thus avoiding having several scattered terminals; more about:

- [Centralized Terminal](/docs/academy/explore/centralized-terminal)

## CORS (Cross-Origin Resource Sharing) Configuration

To configure CORS and avoid possible errors in communication between the frontend and Netuno application services, edit the application configuration in:

- `📂 config/_development.json`

Check whether the `cors` configuration already exists, and if there is a `*` in `origins`, then it works well for development and can remain as is.

If there is no `cors` configuration, then add it based on this example, and the address must be the same as the frontend address:

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

> If `origins` contains a `*`, it means that any frontend address will be supported, for example:
> - `"origins": [ "*" ]`
> We usually use `*` in development.

Once the configuration is implemented, you can integrate the API services you want with the frontend without CORS security issues.

> More about [CORS](/docs/academy/server/services/cors)

## Environment Variables

You can define environment variable configuration by creating the `website/.env` file with the variable definitions, for example:

```
NODE_ENV=development
```

Or through the Netuno application configuration, for example in:

- `📂 config/_development.json`

And by defining the environment variables in the command configuration under the `env` parameter, for example:

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