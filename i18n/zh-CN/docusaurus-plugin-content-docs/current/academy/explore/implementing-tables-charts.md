---
id: implementing-tables-charts
title: 实现表格和图表
sidebar_label: 表格和图表
---

在本教程中，我们将创建一个简单应用程序的界面和逻辑，重点放在数据可视化上。项目开发将涵盖以下主题：

- 创建 **“表单”**、**“字段”** 和 **“关系”** 以构建数据库。
- 构建 **“REST Web 服务”** 以提供数据，并在应用程序中使用 _<a href="https://www.npmjs.com/package/react-chartjs-2" target="_blank">React ChartJS 2</a>_ 和 _Chart.js_ 依赖，以及 <a href="https://ant.design/" target="_blank">Ant Design</a> 的表格组件，动态展示表格和图表中的信息。

整个项目的视觉结构将使用 **HTML、JavaScript 和 React.js** 开发。
建议您具备以下基础知识：
- **JavaScript**
- **React.js**
- **HTML**

💡 **如果对这些步骤有疑问，请参考：**
   - [界面指南：表单](/docs/academy/ui/forms)
   - [界面指南：字段](/docs/academy/ui/fields)
   - [界面指南：表单之间的关系](/docs/academy/ui/relationships-between-forms)
   - [界面指南：REST Web 服务](/docs/academy/explore/services)


## 最终产品

按照本教程的所有步骤操作后，您将在 Netuno 工作区中构建一个功能面板，包含：

* 一个**数据表格**，列出员工记录和总工时。
* 一个动态、彩色的**柱状图**，以可视化方式显示这些相同数据。

![最终产品界面](/docs/assets/academy/explore/implementing-tables-charts/product-final-pt.png)


## 解决方案架构

在编写任何代码之前，理解各部分如何衔接很重要。该解决方案分为 **4 层**，自上而下通信：

```
DashboardContainer         (从服务器获取数据)
       │
       ▼
DataVisualization          (将布局组织为两列)
       │
  ┌────┴────┐
  ▼         ▼
TableList  ChartBar        (渲染接收到的数据)
```

:::tip
这种架构的优点是每个组件都**只负责一项职责**。
:::

## 步骤 1：数据结构

第一步是创建表单、配置它们之间的关系，并填充数据，以便稍后生成表格和图表。

以下图表展示了表单架构以及您需要在 Netuno 环境中复制的字段：

![第一步界面](/docs/assets/academy/explore/implementing-tables-charts/first-step-pt.png)

> **重要：** 尽管图表中出现了 `id` 字段，但**无需手动创建它**。Netuno 会在创建表后自动生成该标识符。

### Dashboard 模板

为了显示表格和图表，我们需要在应用程序界面中有一个位置。Netuno 已为主面板提供了一个基础模板。

打开代码编辑器并找到文件：

```text
/apps/myapp/server/templates/dashboard.html
```
*（请记得将 **myapp** 替换为您的实际应用文件夹名称）。*

您会注意到以下 HTML 代码行：

```html
<div id="app-dashboard"></div>
```

## 步骤 2：数据服务

现在数据库已准备好，HTML 也已准备就绪，我们需要创建“信使”（一个 REST Web 服务）。它将负责访问数据库，计算每位员工的总工时，并将这些信息准备好提供给表格和图表。


### 创建服务文件

Netuno 中的服务保存在 `server/services/` 文件夹中。进入项目的目录并创建 `employees.js` 文件：

```text
/apps/myapp/server/services/employees.js
```
**DashboardContainer** 会检测面板语言：当面板为中文时调用 **/services/employees**，为英文时调用 **/services/workers**。每种语言都有自己的服务文件。

### 编写代码

此代码使用 Netuno 的原生资源（**_db**、**_val** 和 **_out**）执行三个主要操作：

- **查询 `_db.query`：** 仅从数据库中查找**有效**员工，并计算每位员工的总工时。

- **处理 `_val.list` 和 `_val.map`：** 将结果整理为包含结构化对象的干净列表。

- **响应 `_out.json`：** 以 JSON 格式发送数据，以便界面（React）能够读取。

打开 `employees.js` 文件并粘贴以下代码：

```javascript
// 1. 查询：_db.query() 执行 SQL 并返回找到的记录列表。
const dbRecords = _db.query(`
    SELECT DISTINCT
        employee.name, SUM(DATEDIFF(HOUR, work_record.start_time, work_record.end_time)) AS total
    FROM employee INNER JOIN work_record
        ON employee.id = work_record.employee_id
    WHERE employee.active = true AND work_record.active = true
    GROUP BY employee.name
    ORDER BY total ASC
`);

// 2. 数据处理：_val.list() 创建一个空列表，用于保存处理后的数据。
const list = _val.list();

// 遍历数据库返回的每一行
for (const dbRecord of dbRecords) {
    list.add(
        // _val.map() 创建一个包含 React 将使用的字段的对象
        _val.map()
            .set("name", dbRecord.getString("name"))  // 姓名 → 字段 "name"
            .set("total", dbRecord.getInt("total"))   // 总工时 → 字段 "total"
    );
}

// 3. 响应
// 以 JSON 格式将最终列表发送给 React 界面。
_out.json(list);
```
:::tip
- **注意字段名称：** 此处定义为 **"name"** 和 **"total"** 的字段，正是 React 组件在后续步骤中要查找的字段（`dataIndex: 'name'` 和 `dataIndex: 'total'`）。它们必须完全一致。

- **关于 `active = true` 筛选：** 数据库中的 **employee** 和 **work_record** 表都有一个 **active** 列。通过仅筛选有效记录，我们确保已归档或已停用的数据不会出现在表格和图表中。
:::

## 步骤 3：前端环境（React）

现在后端（数据库和服务）已准备就绪，我们来准备可视化界面。

打开终端并按照以下步骤操作：

#### 1. 安装基础依赖
进入应用程序的 `ui` 文件夹并安装依赖包。

```bash
npm install
```

#### 2. 安装图表库

由于项目将显示图表，请下载用于在屏幕上绘制图表的库：

```bash
npm install react-chartjs-2 chart.js --save 
```

#### 3. 管理多语言

安装用于管理多语言的库：

```bash
npm install react-intl
```

#### 4. 启动编译器（Watch）

安装完成后，每次保存文件时，它都会自动更新屏幕：

```bash
npm run watch
```

#### 5. 创建组件
为了保持项目组织有序，请为表格和图表分别创建组件。

进入应用程序的 `src/components/` 目录并创建以下文件夹：

* 表格：TableList
* 图表：ChartBar
* 容器：DataVisualization

```text
/apps/myapp/ui/src/components/TableList/
/apps/myapp/ui/src/components/ChartBar/
/apps/myapp/ui/src/containers/DataVisualization/
```

## 步骤 4：TableList 组件

**TableList** 组件将接收来自服务的数据，并使用 **Ant Design** 自动构建列——Ant Design 是一个现成的可视化组件库，已随 Netuno 界面提供。

进入 TableList 文件夹并创建 `index.jsx` 文件：

```text
/apps/myapp/ui/src/components/TableList/index.jsx
```

打开文件并粘贴以下代码：

```jsx
import React from 'react';

import { FormattedMessage } from 'react-intl';

import { Table } from 'antd'; // Ant Design 的表格组件

import './index.less';

const messages = 'dashboardcontainer.datavisualization.table';

function TableList({ data = [] }) {
  // 定义表头以及每列显示对象中的哪个字段
  const columns = [
    {
      title: <FormattedMessage id={`${messages}.workers`} />, // 已翻译的标题
      dataIndex: 'name',  // 服务返回的 JSON 中的 "name" 字段
    },
    {
      title: <FormattedMessage id={`${messages}.total`} />,
      dataIndex: 'total', // 服务返回的 JSON 中的 "total" 字段
    }
  ];

  return (
    <Table
      columns={columns}      // 列结构
      dataSource={data}      // 数据本身（对象列表）
      pagination={false}     // 不分页：一次显示所有记录
      bordered={true}        // 单元格显示边框
    />
  );
}

export default TableList;
```

 **代码说明：**

这个函数组件将列表 `data` 作为参数（prop）接收，并直接传给 Ant Design 的 `<Table>`。

**columns** 配置告诉 Ant Design 在表头 **title** 中显示什么标题，以及在单元格 `dataIndex` 中填充 JSON 对象的哪个字段。Ant Design 会自动处理所有 HTML、边框样式和布局——无需为此手动创建 CSS。

**index.less 文件：** 在同一文件夹中创建 `index.less` 文件。目前它可以为空，因为 Ant Design 已提供表格的基础样式。


## 步骤 5：ChartBar 组件

我们将使用 **react-chartjs-2** 库创建一个柱状图来可视化数据。该组件将接收数据，将其转换为 Chart.js 能理解的格式，分配颜色，并在屏幕上绘制图表。

进入 `ChartBar` 文件夹并创建一个名为 `index.jsx` 的文件：

```text
/apps/myapp/ui/src/components/ChartBar/index.jsx
```
打开文件并粘贴以下代码：

```jsx
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';            // 柱状图组件
import { Chart, registerables } from 'chart.js';  // Chart.js 核心

import { useIntl } from 'react-intl';

import './index.less';

const messages = 'dashboardcontainer.datavisualization.chart';

// 必须：在使用前注册 Chart.js 的所有元素。
// 没有这一行，图表不会渲染，并会在控制台抛出错误。
Chart.register(...registerables);

function ChartBar({ data }) {
  const intl = useIntl();
  const [chartData, setChartData] = useState(null); // Chart.js 格式的数据

  useEffect(() => {
    // 7 种颜色的柱状图调色板（如果超过 7 项则循环使用）
    const colors = [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ];

    const labels = [];
    const values = [];

    // Chart.js 要求的数据结构
    const chartDataNew = {
      labels: [],       // X 轴（水平轴）上的名称
      datasets: [
        {
          label: intl.formatMessage({ id: `${messages}.label` }), // 已翻译的图例
          data: [],           // Y 轴上的值（柱的高度）
          backgroundColor: [] // 每个柱的颜色
        }
      ]
    };

    // 遍历接收到的数据并构建列表
    for (const i in data) {
      labels.push(data[i].name);   // 员工姓名 → X 轴
      values.push(data[i].total);  // 总工时 → 柱的高度

      // (i + 1) % 7：当 "i" 达到 7 时回到 0，循环重复颜色
      chartDataNew.datasets[0].backgroundColor.push(colors[(i + 1) % 7]);
    }

    chartDataNew.labels = labels;
    chartDataNew.datasets[0].data = values;

    setChartData(chartDataNew); // 保存到状态中以触发重新渲染

  }, [data]); // 每当 "data" 变化时重新执行

  // 在数据处理完成之前，不渲染任何内容
  if (chartData == null) {
    return null;
  }

  return (
    <Bar data={chartData} />
  );
}

export default ChartBar;
```
**代码说明：**

该组件有三个主要职责：

**状态准备 `useState`：** 将组件初始状态设为 `null`，等待处理来自服务器的数据。

**数据处理 `useEffect`：** 当数据通过 prop `data` 到达时，**useEffect** Hook 会自动触发。它定义颜色调色板，并使用 **for** 循环分离信息：员工姓名进入 X 轴标签 **labels**，总工时决定柱的高度 `data`，并为每个柱循环分配一种颜色。

**屏幕绘制 `return`：** 使用库中的 `<Bar>` 组件，根据处理后并保存在状态中的数据绘制图表。

**index.less 文件：** 另外，在 `ChartBar` 文件夹中创建 `index.less` 文件。目前它可以为空。


## 步骤 6：DataVisualization 可视化布局

现在表格和图表组件已准备好，我们需要一个容器将它们并排放在屏幕上。

进入 **DataVisualization** 文件夹并创建一个名为 `index.jsx` 的文件：

```text
/apps/myapp/ui/src/containers/DataVisualization/index.jsx
```

打开文件并粘贴以下代码：

```jsx
import React from 'react';

import { FormattedMessage } from 'react-intl'; // 可按语言翻译的标题

import ChartBar from "../../components/ChartBar";
import TableList from "../../components/TableList";

import './index.less';

const messages = 'dashboardcontainer.datavisualization';

function DataVisualization({ data = [] }) {
  return (
    <div>
      <div className="row">              {/* Bootstrap 行 */}

        {/* 左列：表格 */}
        <div className="col-lg-6">
          <div className="panel panel-default">
            <div className="panel-heading data-visualization__panel">
              <h3 className="panel-title">
                <FormattedMessage id={`${messages}.table.title`} />
              </h3>
            </div>
            <div className="panel-body">
              <TableList data={data} />   {/* 将数据传给表格 */}
            </div>
          </div>
        </div>

        {/* 右列：图表 */}
        <div className="col-lg-6">
          <div className="panel panel-default">
            <div className="panel-heading data-visualization__panel">
              <h3 className="panel-title">
                <FormattedMessage id={`${messages}.chart.title`} />
              </h3>
            </div>
            <div className="panel-body">
              <ChartBar data={data} />    {/* 将相同数据传给图表 */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DataVisualization;
```
**代码说明：**

该组件充当视觉组织者。它接收列表 `data`，并将其原样分发给两个子组件。

`row` 和 `col-lg-6` 类来自 Bootstrap Grid，将屏幕分为两半：左列放置表格，右列放置图表。在较小屏幕（手机）上，它们会自动堆叠。

`panel`、`panel-heading` 和 `panel-body` 类为每个组件创建“带标题的小盒子”外观。

**index.less 文件：** 同时在此文件夹中创建 `index.less` 文件，以便后续为面板设置样式。

## 步骤 7：DashboardContainer 容器

后端服务和前端可视化组件已经就绪。我们需要一个容器来访问服务器、获取数据并传递给 **DataVisualization**。

Netuno 已自动生成 Dashboard 的基本结构。请编辑现有文件：

```text
/apps/myapp/ui/src/containers/DashboardContainer/index.jsx
```

将文件内容替换为以下代码：

```jsx
import React, { useState, useEffect, useImperativeHandle } from "react";

import _service from '@netuno/service-client'; // Netuno 官方 HTTP 客户端

import { Spin, message } from 'antd';           // 加载指示器和错误提示

import DataVisualization from "../DataVisualization"; // 可视化布局

import { useIntl } from 'react-intl';           // 多语言支持

import './index.less';

const messages = 'dashboardcontainer.datavisualization';

function DashboardContainer({}, ref) {
  const intl = useIntl();
  const [workers, setWorkers] = useState([]);   // 状态：员工列表
  const [loading, setLoading] = useState(false); // 状态：是否正在加载？

  // 打开页面时自动触发数据获取
  useEffect(() => {
    loadWorkers();
  }, []);

  const loadWorkers = () => {
    setWorkers([]);      // 清除之前的数据
    setLoading(true);    // 启用加载指示器

    _service({
      // 检测面板语言并调用正确的服务 URL
      url: intl.locale.indexOf('zh') == 0 ? '/services/employees' : '/services/workers',
      success: (response) => {
        setWorkers(response.json); // 将接收到的数据保存到状态中
        setLoading(false);
      },
      fail: (e) => {
        setLoading(false);
        console.error('员工服务请求失败。', e);
        message.error(intl.formatMessage({ id: `${messages}.loading_error` }));
      }
    });
  };

  // 允许父组件（Dashboard）通过 ref 触发 loadWorkers()
  useImperativeHandle(ref, () => ({
    loadWorkers
  }));

  return (
    <div ref={ref}>
      { loading == false
        ? <DataVisualization data={workers} /> // 数据已就绪：显示面板
        : <Spin/>                              // 仍在加载：显示旋转指示器
      }
    </div>
  );
}

export default React.forwardRef(DashboardContainer);
```

**代码说明：**

该组件有三个主要职责：

**初始状态 `useState`：** 创建两个内部控制——**workers**（来自服务器的列表）和 **loading**（指示数据是否仍在获取中的标志）。

**数据获取 `_service`：** **loadWorkers** 函数使用 **_service** 调用后端服务。与 JavaScript 原生的 **fetch** 不同，**_service** 会自动管理身份验证、会话和错误处理。它还会检测面板语言，并选择正确的 URL：中文使用 `/employees`，英文使用 `/workers`。

**分发与绘制 `return`：** 在获取数据期间，显示加载旋转指示器 **(Spin)**。数据到达后，将列表 **workers** 传给 **DataVisualization**，再由它分发给表格和图表。

### 为 Dashboard 设置样式

打开 `DashboardContainer` 文件夹中的 `index.less` 文件，并粘贴以下代码以突出显示面板标题：

```text
/apps/myapp/ui/src/containers/DashboardContainer/index.less
```

```css
.panelBackground {
  background-color: #3f54ba;
  padding: 10px 15px;
  color: white;
}
```

**代码说明：**

该类为标题定义蓝色背景 **(#3f54ba)** 和内边距 **(padding)**。

`DataVisualization` 的 `data-visualization__panel` 类使用它，以确保 **表格** 和 **图表** 标题在视觉上突出。


## 步骤 8：编译项目

为确保所有 React 代码都由 Netuno 编译：

* **如果您的终端一直保持打开**，并且 `npm run watch` 在后台运行：每次保存文件时，您的更改都会自动编译。
* **如果您关闭了终端**或进程已停止：没问题。再次打开终端，进入 `ui` 文件夹并再次执行该命令：

```bash
npm run watch
```

## 结论

在本教程中，您获得了使用 Netuno 平台的基本技能，掌握了服务器与用户界面之间数据流集成的完整周期。

本次开发涵盖了以下主题：

- **数据库：** 以可视化且高效的方式创建和组织表及数据结构。

- **REST 后端：** 开发服务和业务逻辑，以通过 API 提供数据。

- **React 前端：** 在现代且响应式的界面中集成并动态显示这些数据。

如果您遇到困难或有改进建议，请联系我们。

我们的团队和社区随时准备提供帮助。

祝开发顺利！