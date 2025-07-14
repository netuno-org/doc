---
id: ui
title: UI
sidebar_label: UI
---

## ui/

As the name suggests, under `UI` is the logic of the application's user interface.

> To develop source code, either from backend or frontend, we recommend these free code editors:
> - Link Visual Studio Code: <a href="https://atom.io/" target="_blank">https://code.visualstudio.com/</a>
> - Link Atom: <a href="https://atom.io/" target="_blank">https://atom.io/</a>
> - Link WebStorm: <a href="https://www.jetbrains.com/webstorm/" target="_blank">https://www.jetbrains.com/webstorm/</a>

### UI folder structure


```plaintext
├─ ui/
     ├─ src/
     │  ├─ containers/
     │  ├─ components/
     │  ├─ style/
     │  └─ index.js
     ├─ .babelrc
     ├─ .gitignore
     ├─ package.json
     ├─ package-lock.json
     ├─ README.md
     └─ webpack.config.js
  ```


  ### src/

  The `src` folder gathers the frontend application source code. It contains the organization of React components with different atomic values, respectively `components` and `containers`.

  > If you intend to remove the src folder or change the name to create your structure don't forget to change the webpack configuration in the `webpack.config.js` file.

  #### containers/
  
  The `containers` folder is intended for _container components_ React of higher atomic value, that is, they translate a larger amount of logic.
  
  #### components/
  
  The `components` folder is intended for React _components_ of lower atomic value, that is, they translate a smaller amount of logic. Typically a simpler behavior that will be reused in multiple containers or even another component.

  #### style/
  
  The `styles` folder is typically for global styles of various application containers. Although there is no strong pattern in this field, we suggest an organization of the specific styles of the component or container next to it in the components or containers folder, respectively.
   
  ### Webpack and Compilers
   
  In order to generate the compiled and optimized version of the application, to be processed by the browser, it is necessary to run the respective compilers. 
  These are configured in the `webpack.config.js` file where you can check the action flow, the _loaders_ and their options.
  By default, `JSX, JS, LESS and CSS` files are processed. 
  
  The `.babelrc` file is in JSON format and translates the parameters and modules used by this _toolchain_ which works mostly as a syntax converter. In this configuration it is also possible to locate the AntDesign component library that is included by default in all Netuno's projects. For more information about Ant Design <a href="https://ant.design/" target="_blank">https://ant.design/</a> 
  
  ### Package Manager
  
  The files `package.json` and `package-lock.json` are used by the NPM package manager to install all necessary frontend dependencies. Whether they are project dependencies or just development dependencies, like webpack. Alternatively to NPM other package managers such as YARN can also be used.
   