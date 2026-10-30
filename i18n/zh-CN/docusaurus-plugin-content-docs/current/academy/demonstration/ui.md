---
sidebar_position: 7
id: ui
title: 界面与设计
---

## 介绍

前端开发，也就是由浏览器进行可视化处理的部分，是在 **ui** 文件夹中完成的。

默认情况下，该文件夹中包含使用 <a href="https://reactjs.org/" target="_blank">ReactJS</a>、<a href="https://ant.design/" target="_blank">Ant.Design</a> 和 <a href="http://lesscss.org/" target="_blank">Less</a> 开发的环境，并使用 <a href="https://vite.dev/" target="_blank">Vite</a> 进行编译。

尽管默认环境已配置为这些技术，因为它们在当今使用非常广泛，但并非局限于此。

如果你打算使用其他技术，如 **VueJS**、**MaterialUI**、**Sass**、**Bootstrap**、**TypeScript** 等……只需在 `📂 ui` 文件夹中把 `📂 package.json` 和 `📂 vite.config.js` 的配置改为你更偏好的技术即可。

> 关于[集成且集中的终端](/docs/academy/explore/centralized-terminal)的更多信息。

## 前置要求

开始之前，请务必确认已安装 [Bun](https://bun.sh/)。

> 请参阅如何[安装 Bun](/docs/academy/website/bun)。

为了更好地理解使用界面如何工作，我们推荐：

- [关于前端 UI 层的更多信息。](/docs/academy/ui/ui-layer)

## 扩展服务

在通过 Visual Studio Code 于 `📂 server/services/员工.js` 中创建 **员工** 服务后，该服务会在以下地址以 <a href="https://pt.wikipedia.org/wiki/JSON" target="_blank">JSON</a> 形式提供信息：

* <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/员工</a>

下一步是扩展它，以便在浏览器界面中展示数据。

我们将使用这些数据，以表格和图表的形式展示它们。

假设你已打开 Visual Studio Code 或其他文本编辑器，并载入了 **示例** 应用。

在编辑器中打开以下文件：

`📂 ui/src/containers/仪表盘容器/index.jsx`

我们将修改这段现有代码。

### 准备 `state`

在 `function` 内，组件 `仪表盘容器` 的开头就是其 _state_ 的定义。

添加一个新条目来保存员工数据，如下所示：

```jsx
            // 👇 在下方添加新的代码行：
            const [员工, set员工] = useState([]);
            const [加载中, set加载中] = useState(false);
```

也就是说，添加新的状态行 `const [员工, set员工] = useState([]);`。

### 创建函数 `加载员工`

再往下看，注意有一个名为 `加载员工` 的函数；该函数负责获取当前显示在仪表盘中的员工数据。

> 此函数用于加载员工数据。

插入以下代码：

```jsx
    /**
    *** 🚀 加载员工数据。
    ***    通过执行服务：
    **     http://localhost:9000/services/员工
    */
    const 加载员工 = () => {
        set员工([]);
        set加载中(true);
        _service({
            url: intl.locale.indexOf('zh') == 0 ? '/services/员工' : '/services/workers',
            success: (response) => {
                set员工(response.json);
                set加载中(false);
            },
            fail: (e) => {
                set加载中(false);
                console.error('员工服务失败。', e);
                message.error(intl.formatMessage({ id: `${messages}.loading_error` }));
            }
        });
    };
```

上面这段代码的作用是：通过执行 **员工** 服务，把 **员工** 数据传入 <a href="https://reactjs.org/" target="_blank">ReactJS</a> 组件的 _state_；该服务收到 <a href="https://pt.wikipedia.org/wiki/JSON" target="_blank">JSON</a> 数据后，通过执行 `set员工` 将这些数据保存到 _state_ 中。

最终代码应组织成如下形式：

```jsx
    useEffect(() => {
        ...
    }, []);

    const 加载员工 = () => {
        ...
    }

    return ( 
        ...
    );
```

> 其中 `...` 是各代码块中省略的多行代码。

### 执行 `useEffect` Hook

现在还需要在组件“挂载”时执行我们的 `useEffect` Hook；该 Hook 会在组件构建到浏览器的可视化界面时执行。

为此，只需在稍上方把代码行 `加载员工();` 添加到 `useEffect` Hook 中，如下所示：

```jsx
    useEffect(() => {
        加载员工();
    }, []);
```

这行新代码会调用执行先前创建的 <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/员工</a> 服务的函数，以获取 JSON 数据并将其保存在组件的 `state`（_状态_）中，以便在 return（_视图_）中展示。

### 编译

**保存**文件，然后注意在运行 Netuno 的 **终端** 中会出现 **ui** 的新编译结果，包含 <a href="https://reactjs.org/" target="_blank">ReactJS</a> + <a href="https://vite.dev/" target="_blank">Vite</a> 编译结果的新行。

**终端**中的预期输出应类似以下内容：

```
> ui@1.0.0 watch netuno/apps/示例/ui
> bunx --bun vite build --watch

vite v7.1.2 building for production...

watching for file changes...

(!) outDir netuno/apps/示例/public is not inside project root and will not be emptied.
Use --emptyOutDir to override.

build started...
transforming...
✓ 4008 modules transformed.

rendering chunks...
computing gzip size...
../public/scripts/ui.js  1,433.96 kB │ gzip: 421.89 kB
built in 2128ms.
```

如果编译中出现任何错误，**终端**中会显示问题提示。

到这里，我们已经完成了对 **员工** 服务的调用，获取的数据会保存在组件 `仪表盘容器` 的 `state` 中，因此可以在 `return` 中使用。

## 展示数据

接下来需要在用户于浏览器中看到的界面上以可视化方式展示数据。

要在浏览器中展示数据，我们必须修改 `return`，它负责处理 <a href="https://reactjs.org/" target="_blank">ReactJS</a> 组件的外观。

在 `仪表盘容器` 代码的末尾，你会找到：`return ( ... );`

我们将只再添加一行代码，以包含另一个组件 `数据可视化`，用于展示 **员工** 的数据；代码应如下所示：

```jsx
    // 🔍 在现有代码中查找：
    return (
    <div ref={ref}>
      { 加载中 == false ?
        <数据可视化 data={员工} />
        : <Spin/>
      }
      <服务列表 />
    </div>
  );
```

请注意，只需添加下面这一行：

```jsx
<数据可视化 data={员工} />
```

这样，`数据可视化` 就会接收通过 JSON 从 **员工** 服务获取并保存在 `state` 中的数据。

### 最终编译

**保存**包含到目前为止所有修改的文件。

确保 **终端** 输出中没有错误。

现在刷新浏览器中的页面，你应该会看到最终结果；或者，点击下面的链接：

* <a href="http://localhost:9000" target="_blank">http://localhost:9000</a>

> 如果仪表盘显示为空白，说明代码中有错误。
>
> 请在 **浏览器** 的 **开发者工具** 控制台中检查是否有错误。

## 了解更多 👇

ReactJS 快速入门：

* <a href="https://medium.com/rocketseat/um-guia-para-iniciantes-no-react-js-80e1ac357649" target="_blank">ReactJS 初学者指南。</a>