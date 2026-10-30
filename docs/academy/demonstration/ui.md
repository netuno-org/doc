---
sidebar_position: 7
id: ui
title: Interface & Design
---

## Introduction

Frontend development, that is, what is visually processed by the browser, is done inside the **ui** folder.

By default, this folder contains the development environment built with <a href="https://reactjs.org/" target="_blank">ReactJS</a> with <a href="https://ant.design/" target="_blank">Ant.Design</a> and <a href="http://lesscss.org/" target="_blank">Less</a>, compiled using <a href="https://vite.dev/" target="_blank">Vite</a>.

Although the default environment is configured for these technologies, since they are widely used today, it is not limited to them.

If you want to use another technology such as **VueJS**, **MaterialUI**, **Sass**, **Bootstrap**, **TypeScript**, etc... simply change the `📂 package.json` and `📂 vite.config.js` settings inside the `📂 ui` folder to the technologies you prefer.

> More about the [integrated and centralized terminal](/docs/academy/explore/centralized-terminal).

## Prerequisites

Before starting, it is important to make sure you have [Bun](https://bun.sh/) installed.

> See how to [install Bun](/docs/academy/website/bun).

To better understand how the user interface works, we recommend:

- [More about the front-end UI Layer.](/docs/academy/ui/ui-layer)

## Expanding the Service

After the **workers** service has been created in `📂 server/services/workers.js` through Visual Studio Code, which provides the information in <a href="https://pt.wikipedia.org/wiki/JSON" target="_blank">JSON</a> at the address:

* <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/workers</a>

The next step is to expand it to display the data in the browser interface.

With this data, we will display it in a table and a chart.

Assuming you have Visual Studio Code or another text editor open with the **Demo** application.

Open the following file in the editor:

`📂 ui/src/containers/DashboardContainer/index.jsx`

Let's change this existing code.

### Prepare the `state`

Right at the beginning of the `DashboardContainer` component inside the `function` is its _state_ definition.

Add a new entry to store the workers' data as follows:

```jsx
            // 👇 Add the new lines of code below:
            const [workers, setWorkers] = useState([]);
            const [loading, setLoading] = useState(false);
```

That is, add the new state line `const [workers, setWorkers] = useState([]);`.

### Create the `loadWorkers` function

Further down, notice that there is a function called `loadWorkers`; this function retrieves the data of the workers currently shown in the dashboard.

> This function is used to load the workers' data.

Insert the code below:

```jsx
    /**
    *** 🚀 Loads the Workers' data.
    ***    By running the service:
    **     http://localhost:9000/services/workers
    */
    const loadWorkers = () => {
        setWorkers([]);
        setLoading(true);
        _service({
            url: intl.locale.indexOf('pt') == 0 ? '/services/workers' : '/services/workers',
            success: (response) => {
                setWorkers(response.json);
                setLoading(false);
            },
            fail: (e) => {
                setLoading(false);
                console.error('Workers service failure.', e);
                message.error(intl.formatMessage({ id: `${messages}.loading_error` }));
            }
        });
    };
```

What the code above does is pass the **workers** data to the component's _state_ in <a href="https://reactjs.org/" target="_blank">ReactJS</a>, by running the **workers** service, which, upon receiving the data as <a href="https://pt.wikipedia.org/wiki/JSON" target="_blank">JSON</a>, stores it in _state_ by running `setWorkers`.

The final code should be structured as follows:

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

> Where the `...` are the various omitted lines of code within the respective blocks.

### Run the `useEffect` hook

Now we just need to run our `useEffect` hook when the component is "mounted"; this hook runs when the component is built in the browser's visual presentation.

To do this, a little further up, simply add the code line `loadWorkers();` inside the `useEffect` hook as follows:

```jsx
    useEffect(() => {
        loadWorkers();
    }, []);
```

This new code line will call the function that runs the <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/workers</a> service, which was created earlier, to get the data as JSON and store it in the component's `state` (_state_) to be displayed in the return (_view_).

### Compilation

**Save** the file and right after notice that in the **terminal** where Netuno is running, the result of the new **ui** compilation will appear, with new lines from the <a href="https://reactjs.org/" target="_blank">ReactJS</a> + <a href="https://vite.dev/" target="_blank">Vite</a> compilation output.

The expected output in the **terminal** should be similar to the following:

```
> ui@1.0.0 watch netuno/apps/demo/ui
> bunx --bun vite build --watch

vite v7.1.2 building for production...

watching for file changes...

(!) outDir netuno/apps/demo/public is not inside project root and will not be emptied.
Use --emptyOutDir to override.

build started...
transforming...
✓ 4008 modules transformed.

rendering chunks...
computing gzip size...
../public/scripts/ui.js  1,433.96 kB │ gzip: 421.89 kB
built in 2128ms.
```

If there is any compilation error, the problem indication will appear in the **terminal**.

So far we have consumed our **workers** service, with the obtained data stored in the `state` of the `DashboardContainer` component, which is thus available to be used in the `return`.

## Displaying the Data

Now we need to display the data visually in the interface the user sees in the browser.

To display the data in the browser, we have to change the `return`, which handles the visual appearance of components in <a href="https://reactjs.org/" target="_blank">ReactJS</a>.

At the end of the `DashboardContainer` code you will find: `return ( ... );`

Let's change it by adding just one more line of code to contain one more `DataVisualization` component that will display the data referring to the **workers**; the code should look as follows:

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

This way, `DataVisualization` will receive the data obtained through the **workers** service via JSON that were stored in `state`.

### Final Compilation

**Save** the file with all the changes made so far.

Make sure there are no errors in the **terminal** output.

Now refresh the page in the browser and you should see the final result, or alternatively, click the link below:

* <a href="http://localhost:9000" target="_blank">http://localhost:9000</a>

> If the dashboard appears blank, it means there are errors in the code.
>
> Check the **browser** console in the **developer tools** for errors.

## Learn more 👇

A quick introduction to <a href="https://reactjs.org/" target="_blank">ReactJS</a>:

* <a href="https://medium.com/rocketseat/um-guia-para-iniciantes-no-react-js-80e1ac357649" target="_blank">A Beginner's Guide to ReactJS.</a>