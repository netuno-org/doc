---
id: services
title: 服务
sidebar_label: 服务
---

Netuno 中的 Web REST 服务是在服务器（后端）上执行的 JavaScript 脚本，允许直接与应用数据库交互。通过它们，可以：

* 读取数据库中的数据
* 插入新记录
* 更新现有数据
* 删除数据
* 执行涉及计算或数据处理的复杂逻辑。
* 与外部系统集成。

每个服务都通过一个 URL（端点）访问，这使得 Web 界面（前端）、移动应用或其他外部系统能够以安全且标准化的方式使用应用数据。

#### 前置要求

* 具备 _**JavaScript、React.js**_ 和 _**HTML**_ 基础知识。
* 熟悉 SQL 和应用的文件夹结构。
* 建议具备**表单**、**字段**和**关系**的基础知识。

如果对这些步骤有疑问，请参阅：

* [表单](/docs/academy/ui/forms)
* [字段](/docs/academy/ui/fields)
* [表单之间的关系](/docs/academy/ui/relationships-between-forms)



## 快速开始

我们将使用一个工时记录应用，目标是计算每位员工的总工作时长。

**应用结构：**

![应用结构示意图](/docs/assets/academy/explore/services-web-rest/application-structure-pt.png)

:::note
字段 **id** 由 Netuno 在所有表中自动创建和管理，无需手动定义。
:::

Netuno 应用的服务位于 **server/services/** 文件夹中。

#### 文件夹结构

```text
my-app/
└── server/
    └── services/
        ├── workers.js   ← 服务文件
        └──... 
```

## 创建服务

在 **server/services/** 文件夹中，创建一个新文件，该文件将定义服务的 URL。在本示例中，将文件命名为 `workers.js`。

:::tip
- 仅使用**小写**字母。
- 如果名称由多个单词组成，请使用**连字符 (-)** 分隔。
- 示例：**workers.js**、**hour-report.js**、**entry-records.js**。
:::


## 查询数据库

Netuno 提供全局对象 **_db**，用于原生地与数据库交互。

要执行 SQL 查询，我们使用 `_db.query()` 方法。


```javascript
// 执行 SQL 查询，按员工分组统计总工时
const dbRecords = _db.query(`
    SELECT DISTINCT
        worker.name, SUM(DATEDIFF(HOUR, work_record.start_time, work_record.end_time)) AS total
    FROM worker INNER JOIN work_record
        ON worker.id = work_record.worker_id
    WHERE worker.active = true AND work_record.active = true
    GROUP BY worker.name
    ORDER BY total ASC
`);
```

:::note 理解 SQL 查询

* **INNER JOIN**：使用外键 `worker_id` 将 `worker` 和 `work_record` 表连接起来。

* **DATEDIFF(HOUR, start_time, end_time)**：计算开始时间和结束时间之间的小时差。

* **SUM(...) AS total**：对每位员工处理的总小时数求和。

* **WHERE ... active = true**：筛选查询，仅考虑未被删除（处于活动状态）的员工和记录。

* **GROUP BY worker.name**：按每位员工的姓名对汇总结果分组。

* **ORDER BY total ASC**：按总工时从少到多排序最终结果。
:::

## 处理数据

`_db.query()` 方法以 Netuno 的内部格式返回数据。

要发送干净的 JSON 格式响应，需要使用全局对象 **_val.list()**（用于数组）和 **_val.map()**（用于对象）转换这些数据。

```javascript
// 创建一个空列表来存储处理后的数据
const list = _val.list();

// 遍历 SQL 查询返回的每条记录
for (const dbRecord of dbRecords) {
    list.add(
        _val.map()
            .set("name", dbRecord.getString("name"))   // 将姓名提取为文本
            .set("total", dbRecord.getInt("total"))    // 将总计提取为整数
    );
}
```
### 使用的方法

| 资源 | 说明 |
|---------|-----------|
| **_val.list()** | 创建一个列表（相当于 JS 中的 Array）。 |
| **_val.map()** | 创建一个键值对象（相当于 Object 或 JSON）。 |
| **.add(...)** | 向列表末尾添加一个新项。 |
| **.set("键", 值)** | 在映射中定义一个新属性及其对应的值。 |
| **.getString("列名")** | 将指定列的值提取为文本（String）。 |
| **.getInt("列名")** | 将指定列的值提取为整数（Integer）。 |

## 返回数据

使用 **_out** 对象将处理后的列表以 JSON 格式发送给客户端。

```javascript
// 将列表作为 HTTP 响应以 JSON 格式发送
_out.json(list);
```

## 完整示例

在最后一步中，我们将前面学到的所有概念整合起来，创建一个可用的服务。

下面的完整代码会查询数据库以计算总工作时长，并将这些数据以 JSON 格式返回。

```javascript
// 1. 查询每位在职员工完成的总工时
const dbRecords = _db.query(`
    SELECT DISTINCT
        worker.name, SUM(DATEDIFF(HOUR, work_record.start_time, work_record.end_time)) AS total
    FROM worker INNER JOIN work_record
        ON worker.id = work_record.worker_id
    WHERE worker.active = true AND work_record.active = true
    GROUP BY worker.name
    ORDER BY total ASC
`);

// 2. 创建响应数据结构
const list = _val.list();

// 3. 处理并映射结果
for (const dbRecord of dbRecords) {
    list.add(
        _val.map()
            .set("name", dbRecord.getString("name"))
            .set("total", dbRecord.getInt("total"))
    );
}

// 4. 以 JSON 格式返回数据
_out.json(list);
```

### 访问服务

在 Netuno 中创建并配置服务后，即可直接在浏览器中使用和测试，或将其集成到其他应用中。

#### 访问方式

可通过以下方式使用服务：

- **浏览器：** 用于快速测试 GET 方法。

- **HTTP 客户端：** 如 Postman、Insomnia 或 Thunder Client 等工具。

- **前端：** 通过 fetch 请求或 Axios 等库。

#### URL 结构

默认情况下，Netuno 会自动将服务文件夹中创建的文件映射为 Web 地址。

如果本地运行在默认端口，地址将遵循以下模式：

http://localhost:9000/services/workers



:::info 路由如何工作？
Netuno 使用基于文件系统的自动路由系统：

**源文件夹：** `server/services/` 内的所有文件都会成为路由。

**映射：** 文件 **workers.js** 会转换为端点 **/services/workers**。

**扩展名：** 注意 URL 中省略了 **.js** 扩展名。也可以选择使用 **.netuno** 后缀（例如：/services/workers.netuno），但推荐使用不带扩展名的访问方式，因为更简洁。
:::

**HTTP 响应示例：**
如果数据库中存在匹配的数据，服务器返回的响应将类似如下：

```json
[
    {
        "name": "王晓明",
        "total": 40
    },
    {
        "name": "李华",
        "total": 35
    },
    {
        "name": "张伟",
        "total": 45
    }
]
```

## 系统全局对象

在 Netuno 中开发服务时，我们经常使用原生对象，它们便于与数据库通信、控制请求以及输出信息。

这些对象是预配置的实例，可直接在服务器脚本 **（.js 文件）** 中使用。它们避免了为 SQL 查询或读取参数等基础任务导入外部库的需要。

| 对象 | 说明 |
|--------|-----------|
| **_db**| 执行数据库操作（query、insert、update、delete）。 |
| **_val** | 创建和操作数据结构（list、map）。 |
| **_out** | 向用户发送响应（JSON、HTML...）。 |
| **_req** | 访问用户请求中发送的参数（GET、POST）。 |
| **_log**| 在服务器控制台记录错误或调试信息。 |



如果您遇到困难或有改进建议，请联系我们。

我们的团队和社区随时准备提供帮助。

祝开发顺利！