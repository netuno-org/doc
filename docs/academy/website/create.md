---
id: create
title: ReactJS Create
sidebar_label: ReactJS Create
---

## ReactJS Application

Please execute in the root of your _Netuno_ app:

`npx create-react-app website`

A new directory called `website` will be created with this command where the ReactJS application will be contained.
After creating the ReactJS application, see below:

```
cd website
npm run start
```

You will be able to restart the app at the following address [http://localhost:3000](http://localhost:3000).

>With `CTRL+C` into the terminal, the user will be able to end up the ReactJS app.

## Installation of Dependencies

NPM packages are strongly advise to be installed, as they are very useful for ReactJS applications developement with _Netuno_ (for more info click on the link below):

* [react-router-dom](https://www.npmjs.com/package/react-router-dom)
* [antd](https://www.npmjs.com/package/antd)
* [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import)
* [react-app-rewired](https://www.npmjs.com/package/react-app-rewired)
* [customize-cra](https://www.npmjs.com/package/customize-cra)
* [less-loader](https://www.npmjs.com/package/less-loader)
* [less](https://www.npmjs.com/package/less)
* [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

To install any packages listed, run the below commands in the terminal:

```
npm install -S react-router-dom
npm install -S antd
npm install -S babel-plugin-import
npm install -S react-app-rewired
npm install -S customize-cra
npm install -S less-loader
npm install -S less
npm install -S @netuno/service-client
```

Or either the user can also install all-in-one:

```
npm i -S react-router-dom antd babel-plugin-import react-app-rewired customize-cra less-loader less @netuno/service-client
```

## Configurations

After run the commands and for the compilation run smoothly go to `📂 website/package.json` and change where the following are located:

```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
},
```

For the following:

```
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
},
```

> Just in case the user are developing with `Less`, when compiling, they are likely to find the error `TypeError: this.getOptions is not a function`. To solve this issue please run the `npm i less-loader@6.2.0` command in the` 📂 website` directory to make the compilation of `Less` compatible with ReactJS.

Will be necessary to create a new file `📂 website/config-overrides.js`, which will also allow you to perform style customizations in Ant.Design, please see the initial:

```javascript
const { override, fixBabelImports, addLessLoader } = require('customize-cra');
 
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
       '@primary-color': '#78A2CC',
       '@layout-header-background': '#ffffff',
       '@font-size-base': '16px',
       '@border-radius-base': '20px'
      },
    },
  }),
);
```

### Dark Theme

Install the module inside the website folder to make it possible to use the dark Ant.Design theme;

```
npm install -S @ant-design/dark-theme
```

`📂 website/config-overrides.js` is defined to use the dark theme and allows you to customize the style, see below:

```javascript
const darkTheme = require('@ant-design/dark-theme');

const { override, fixBabelImports, addLessLoader } = require('customize-cra');

darkTheme.default['@primary-color'] = '#AECBD6';
darkTheme.default['@font-size-base'] = '16px';
darkTheme.default['@border-radius-base'] = '20px';

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: darkTheme.default
    },
  }),
);
```

##### Restyle

Note that: code samples from `📂 website/config-overrides.js` as above, you can easily change the Ant.Design variables defined in `Less`, to know more about Ant.Design customization:

- [Customize Theme](https://ant.design/docs/react/customize-theme)
- [Less Variables](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)

## Automatic start of ReactJS application with _Netuno_

_Netuno_ allows you to start the ReactJS app together with the server process of the _Netuno_ application.

> All compilation messages in ReactJS app will be integrated in the same terminal as the _Netuno_ app.

For this matter you simply add to the `commands` settings of the _Netuno_ application in` 📂 config/_development.json` as below:

```
{
    ...
    "commands": [
        ...,
        {
            "path": "website",
            "command": "npm run start",
            "enabled": true
        }
    ]
}
```

> Whenever editing configuration files of the _Netuno_ application, it will be necessary to restart the application so that will update the changes.

Finally start/restart your _Netuno_ app to check its operation.

## CORS Configuration (Cross-Origin Resource Sharing)

To configure CORS configuration to avoid possible communication errors between the ReactJS app and the _Netuno_ app through services:

- `📂 config/_development.json`

add:

```
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

You can create the services you want without encountering CORS errors, once this configuration is implemented:

> More about [CORS](../server/services/cors.md)

### HTTP OPTIONS

The browser performs a call with the HTTP protocol OPTIONS method to the same address as the service, to perform the validation of whether or not it can actually execute the service.

Therefore, the services need to respond to the OPTIONS method of the HTTP protocol to run without any issues.

In this case make sure that together with the services used on the website you have the version of the code for `options`, which can be done as follows for an example service:

- 📂 `server/services/example/options.js`
- 📂 `server/services/example.options.js`

The content may be:

```
_out.json(_val.map().set("result", true))
```

> More about [HTTP methods and Services](../server/services/rest.md).
