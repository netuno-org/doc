---
sidebar_position: 6
id: ui
title: Interface & Design
---

## Introduction

The user interface _(UI)_ is the point of human-computer interaction and communication in a device. Will be performed inside the **ui** folder and is also the way through which a user interacts with an application or a website.

The _UI_ folder contains by default the development environment in <a href="https://reactjs.org/" target="_blank">ReactJS</a>, with <a href="https://ant.design/" target="_blank">Ant.Design</a> and <a href="http://lesscss.org/" target="_blank">Less</a>, while using <a href="https://webpack.js.org/" target="_blank">Webpack</a>.

These technologies are widely used today, however, this pre-defined environment will be not limited to these technologies themselves.

The user is free to use any other technology like **VueJS**, **MaterialUI**, **Sass**, **Bootstrap**, **TypeScript**, others. They can just change within the `📂 folder ui` the settings of `📂 package.json` and `📂 webpack.config.js` for the technologies they will choose.

> ### Integrated Terminal
>
> Always when _Netuno_ server starts it will also execute the <a href="https://www.npmjs.com/" target="_blank">NPM</a> with the command `➡️ npm run watch` inside the `📂 ui` folder of the running application. In this case it will be the application **demo**_nstraction_.>
> The output of <a href="https://www.npmjs.com/" target="_blank">NPM</a> is integrated in the same output of the _Netuno_ server, so there is only one terminal with the integrated output of the server and the compilation of **U**_ser_ **I**_nterface_.

## Service Expend

As it was already created in the previous step the service **workers** in `📂 server/services/workers.js` through the Visual Studio Code, which provides the information in <a href="https://www.w3schools.com/js/js_json_intro.asp" target="_blank">JSON</a> in the address:

* <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/trabalhadores</a>

Now the next step is to run out of it to display the data on the browser's interface.

This data will be presented into a table and a graph.

Assuming you have Visual Studio Code or another editor open with the **Demo** app.

Open the file below in the editor:

`📂 ui/src/containers/DashboardContainer/index.js`

Next step will be to change this existing code.

### Preparing the `state`

Right at the very beginning of the `DashboardContainer` component within the `function` is the definition of your _state_.

Add a new entry to save the task data, like this:

```jsx
            // 👇 Add the new lines of code below:
            const [workers, setWorkers] = useState([]);
            const [loading, setLoading] = useState(false);
```

In other words, add the new `const [workers, setWorkers] = useState([]);` state line.

### Creating the Method `loadWorkers`

Note that there is a method called `loadWorkers` this method performs the data retrieval of the workers that currently appears on the dashboard.

The method created above will load the task data.

Insert the code below:

```jsx
    /**
    *** 🚀 Upload the Workers data.
    ***    Through the execution of the service:
    **     http://localhost:9000/services/workers
    */
    const loadWorkers = () => {
        setWorkers([]);
        setLoading(true);
        _service({
            url: intl.locale.indexOf('pt') == 0 ? '/services/trabalhadores' : '/services/workers',
            success: (response) => {
                setWorkers(response.json);
                setLoading(false);
            },
            fail: (e) => {
                setLoading(false);
                console.error('Workers service failed.', e);
                message.error(intl.formatMessage({ id: `${messages}.loading_error` }));
            }
        });
    };
```

What this code does is to perform the service **workers** and with the obtained data from the <a href="https://en.wikipedia.org/wiki/JSON" target="_blank">JSON</a> stores in the _state_ of the component <a href="https://reactjs.org/" target="_blank">ReactJS</a> in **workers**, performing the execution of `setWorkers` passing the workers data.

In the final code the methods should be structured in this way, for example:

```jsx
    useEffect(() => {
        ...
    }, []);

    const loadWorkers = () => {
        ...
    }

    return ( 
        ...
    );
```

> Where the `...` are the various lines of code within their respective methods

### Run the new `useEffect` method

Now we need to run our new `useEffect` method when the component is "assembled", this method is run when the component is built in the visual presentation of the browser.

To do this just on the top add the line of code `loadWorkers();` within the `useEffect` method, which will look like this:

```jsx
    useEffect(() => {
        loadWorkers();
    }, []);
```

This will call the method that runs the service <a href="http://localhost:9000/services/workers" target="_blank">http://localhost:9000/services/workers</a> that was created to get the data in JSON and save it to the `state` (_status_) of the component to be presented in the render (_view_).

### Compilation

**Save** the file and then notice that at the **terminal** where you have Netuno running it will appear the result of the new compilation of the **ui**, adding lines from the compilation result of the <a href="https://reactjs.org/" target="_blank">ReactJS</a> + <a href="https://webpack.js.org/" target="_blank">WebPack</a>.

The expected outcome into **terminal** should be like this:

```
Hash: abe630735cdaa909166b
Version: webpack 4.41.2
Time: 969ms
Built at: 01/12/2019 21:42:28
     Asset      Size  Chunks                   Chunk Names
   main.js  3.11 MiB    main  [emitted]        main
main.js.map  3.47 MiB    main  [emitted] [dev]  main
Entrypoint main = main.js main.js.map
[./src/containers/DashboardContainer/index.jsx] 4.22 KiB {main} [built]
   + 425 hidden modules
```

If there is an error with the compilation then it will appear into the **terminal** with an indication issue.

So far we have performed your service spend **workers** and the obtained data is stored into the `DashboardContainer` component that will be available for use in the `return`.

## Present the Data

To present the data on your browser should be change the `return` method, which processes the visual aspect of the components in <a href="https://reactjs.org/" target="_blank">ReactJS</a>.

At the end of the `DashboardContainer` code you will find the method: `return ( ... );`

For this step you just need to add one more line of code to contain one more `DataVisualization` component, but now to display the **workers** data, the code should look like this:

```jsx
    // 🔍 Search the existing code for:
    return (
    <div ref={ref}>
      { loading == false ?
        <DataVisualization data={workers} />
        : <Spin/>
      }
      <ListServices />
    </div>
  );
```

Note that only the line below should be added:

```jsx
<DataVisualization data={workers} />
```

This way the `DataVisualization` will receive the obtained data through the service **workers** via JSON and which are stored in the `state`.

### Final Compilation

**Save** the file with all the changes made so far.

Make sure there are no errors into the **terminal** output.

**Refresh** your browser and you should see the final result, or you can also click the link below:

* <a href="http://localhost:9000" target="_blank">http://localhost:9000</a>

> If the dashboard appears blank it means there are errors in the code.
>
> Check the **browser** console on the **programmer tools**.

## Would Like to Know More 👇

Quick introduction to <a href="https://reactjs.org/" target="_blank">ReactJS</a>:

* <a href="https://medium.com/rocketseat/um-guia-para-iniciantes-no-react-js-80e1ac357649" target="_blank"> A Beginner's Guide to ReactJS.</a>
* <a href="https://www.youtube.com/watch?v=Ke90Tje7VS0&t=3104s" target=" _blank"> React JS - React Tutorial for Beginners</a>
