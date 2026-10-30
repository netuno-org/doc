---
id: cron-jobs
title: Cron Jobs - 计划任务
sidebar_label: Cron Jobs
---

## 开始之前

继续之前，请确保您具备 _**JavaScript**_ 基础知识，并且已经通过 [Netuno 学院](/docs/academy/overview) 中提供的分步教程掌握了 Netuno 基础知识。

## 简介

经常需要定期执行任务，例如隔一段时间就要向另一个系统发送数据、从另一个系统导入数据、发送电子邮件、校验数据库中的记录等等……

在 Linux/UNIX/Mac 中有 Cron 服务以及著名的配置文件 `crontab`，而在 Windows 中则有 Task Manager（_任务管理器_）。

在 Netuno 中，Cron Jobs 已经集成，因此有助于避免外部配置。

这类周期性操作称为 Cron Jobs，中文即计划任务。

每个 Netuno 应用都可以有无数个 Cron Jobs，Netuno 的 Cron Jobs 既可以执行内部服务和 URL，也可以执行外部 URL。

> 更多信息请查看 [cron](/docs/library/resources/cron) 资源文档。

## 工作原理

每个应用都为其自身的计划任务（**cron jobs**）配置各自的执行配置。

简单来说，每个计划任务都是一个独立的 **job**，拥有自己的执行配置，可以每分钟、每 5 分钟、每小时、在每周的某天某时执行，等等……它还具有在到达执行时间时要调用的 URL。

> Netuno 使用 <a href="http://www.quartz-scheduler.org/" target="_blank">Quartz Scheduler</a> 库来管理计划任务的执行。定时规则的配置与这个库相对应。

因此，每个 job 的执行都会调用一个 URL（_网址、链接_），它既可以是应用自身内部的，也可以是外部的。若是外部链接，既可以来自另一个应用，也可以是互联网、网络或计算机上的任意外部 URL。

![Cron 示意图](/docs/assets/academy/server/cron.svg)

上图表明，Netuno 包含 2 个应用，每个应用配置了 2 个 job（_计划任务_），它们按各自的配置在不同时间执行。

实际执行行为如下：

- 应用 1 启动 2 个任务：
  - 任务 1：执行应用 1 自身内部服务的 URL。
  - 任务 2：执行一个外部公开 URL。
- 应用 2 启动 2 个任务：
  - 任务 3：执行应用 2 自身内部服务的 URL
  - 任务 4：执行应用 1 服务的 URL。

> 应用应将由 Cron Jobs 执行的服务放在以下文件夹中：
> - 📂 `server/services/jobs`

每个 URL 都通过 HTTP POST 方法执行。job 配置中允许添加额外参数，还可以设置一个密钥，以防止在受控上下文之外被执行。

## 配置

计划任务的配置在应用的环境配置文件中完成。

> 配置绝不能以 `*` 开头，否则会导致每秒执行一次；如果某次处理耗时超过 1 秒，就会引发性能问题并产生雪崩效应。

为此，请在正在开发的应用中导航到环境配置文件。在本示例中，我们将使用位于以下位置的开发环境文件：

- 📂 `config/_development.json`

检查是否尚不存在 Cron 配置；如果不存在，请在配置文件（JSON 格式）末尾添加以下配置参数：

```
{
    ...
    "cron": {
        "secret": "m3u-S3Gred0",
        "jobs": [
            {
                "name": "my-job",
                "config": "0 30 12 * * ?",
                "url": "http://my-app.local.netu.no:9000/services/jobs/my-job"
            },
            {
                "name": "my-job",
                "config": "0 0/2 * * * ?",
                "url": "http://my-app.local.netu.no:9000/services/jobs/my-other-job",
                "params": {
                    "secret": "m3u-Ou7ro-S3Gred0",
                    "type": "customer"
                }
            }
        ]
    },
    ...
}
```

在此配置中，第一个 job 将在每天中午 12:30 执行。

第二个 job 将每 2 分钟执行一次。


##### Jobs

应用中计划任务列表；由于它是数组，可以配置多个服务。

##### Secret

这是一个安全密钥参数，用于保护服务，仅当接收到值完全相同的参数时才执行。

这是因为 `jobs` 是公开服务，为避免被外部执行，所以包含此保护。

##### Name

用于在内部标识服务的名称，可用于执行管理操作，例如暂停和恢复。

##### Config

服务的定时表达式配置，即其调度规则。

> 配置绝不能以 `*` 开头，否则会导致每秒执行一次；如果某次处理耗时超过 1 秒，就会引发性能问题并产生雪崩效应。

请查看下面支持的表达式。

##### URL

将被定期执行的地址。

##### Params

这些是在执行时传递给 URL 的参数；URL 通过 **HTTP POST** 方法执行，因此可以添加额外参数，如上例中的 _type_，甚至指定另一个密钥。

### 支持的 Cron 表达式格式

|字段名 | 必填 | 可接受值 | 允许的特殊字符 |
| ------- |:------:|:-----------:|--------------|
| 秒 | 是 | 0-59 | , - * / |
| 分钟 | 是 | 0-59 | , - * / |
| 小时 | 是 | 0-23 | , - * / |
| 月中的日 | 是 | 1-31 | , - * ? / L W |
| 月 | 是 | 1-12 或 JAN-DEC | , - * / |
| 星期 | 是 | 1-7 或 SUN-SAT | , - * ? / L # |
| 年 | 否 | 空，1970-2099 | , - * / |

##### Cron 表达式示例

|表达式 | 含义 |
| ------- |------|
| 1 * * * * ? | 在每分钟的第 1 秒执行。 |
| 0 0 12 * * ? | 每天 12:00 开始执行 |
| 0 15 10 ? * * | 每天 10:15 开始执行 |
| 0 15 10 * * ? | 每天 10:15 开始执行 |
| 0 15 10 * * ? * | 每天 10:15 开始执行 |
| 0 15 10 * * ? 2005 | 2005 年期间每天 10:15 开始执行 |
| 0 * 14 * * ? | 每天从 14:00 开始每分钟执行一次，到 14:59 结束 |
| 0 0/5 14 * * ? | 每天从 14:00 开始每 5 分钟执行一次，到 14:55 结束 |
| 0 0/5 14,18 * * ? | 每天从 14:00 开始每 5 分钟执行一次，到 14:55 结束。随后从 18:00 开始每 5 分钟执行一次，到 18:55 结束 |
| 0 0-5 14 * * ? | 每天从 14:00 开始每分钟执行一次，到 14:05 结束 |
| 0 10,44 14 ? 3 WED | 三月的每个星期三 14:10 和 14:44 开始执行。 |
| 0 15 10 ? * MON-FRI | 每周工作日（周一至周五）10:15 开始执行 |
| 0 15 10 15 * ? | 每月 15 日 10:15 开始执行 |
| 0 15 10 L * ? | 每月最后一天 10:15 开始执行 |
| 0 15 10 L-2 * ? | 每月倒数第二天 10:15 开始执行 |
| 0 15 10 ? * 6L | 每月最后一个星期五 10:15 开始执行 |
| 0 15 10 ? * 6L 2002-2005 | 2002、2003、2004 和 2005 年期间，每月最后一个星期五 10:15 开始执行 |
| 0 15 10 ? * 6#3 | 每月第三个星期五 10:15 开始执行 |
| 0 0 12 1/5 * ? | 每月从第一天开始，每 5 天在 12:00 开始执行。 |
| 0 11 11 11 11 ? | 每年 11 月 11 日 11:11 开始执行。 |

> 配置绝不能以 `*` 开头，否则会导致每秒执行一次；如果某次处理耗时超过 1 秒，就会引发性能问题并产生雪崩效应。

## 服务

计划任务应编写在以下文件夹中：

- 📂 `server/services/jobs`

Netuno 会自动执行这些服务，并使用配置中的值校验 `secret` 参数。

> `secret` 用于让服务无需身份验证即可从外部安全执行。

服务将按照定义的参数配置定期执行。

要手动测试服务执行，只需直接执行服务的 URL 并传入 `secret` 参数。

例如，通过 GET：

- http://my-app.local.netu.no:9000/services/job/my-job?secret=\*\*\*\*\*

URL 末尾的 `*****` 应替换为实际配置的 `secret` 值。

## 示例

在以下位置创建文件：

- 📂 `server/services/jobs/test.js`

在此服务文件中放入以下代码：
```javascript
_log.info("测试任务！")
_out.print("Ok")
```

在应用的配置 JSON 中，按如下方式调整参数配置：

```json
{
    ...
    "cron": {
        "secret": "m3u-S3Gred0",
        "jobs": [
            {
                "name": "test",
                "config": "0/30 * * * * ?",
                "url": "/services/jobs/test"
            }
        ]
    },
    ...
}
```

在终端运行 Netuno 服务器后，将开始每 30 秒出现一次消息 `测试任务！`。

如果在浏览器中打开 URL：

- http://localhost:9000/services/jobs/test?secret=m3u-S3Gred0

将仅返回 `Ok`，终端中会出现消息 `测试任务！`。

> 在 `development` 环境中，`secret` 校验不生效，因此可以在不传任何 `secret` 的情况下执行并正常工作；但在其他环境（如生产环境）中，则会被纳入校验。

## 大量任务

当需要创建大量计划任务时，最好增加用于并行执行多个计划任务的线程数。

该配置在 Netuno 根目录下的 `config.js` 文件中完成，添加示例行：

```javascript
config.cronThreadCount = 10
```

> 默认情况下，此配置仅允许 3 个线程。
> 
> 应注意根据 CPU 核心数增加线程数。

使用过少的线程来执行大量并行计划任务，可能导致计划任务停止执行。

因此，如果出现任务在一段时间后卡住的情况，可能是因为并行执行了过多任务，此时需要增加线程数。

## 以编程方式

Netuno 允许以编程方式配置和控制 Cron Jobs。

这意味着我们可以通过代码管理一切。

### 创建新任务

要创建新任务，我们通过 [`_cron.schedule`](/docs/library/resources/cron#schedule) 创建其调度。

[`_cron.schedule`](/docs/library/resources/cron#schedule) 接收以下参数：

1. 任务标识键：`key`。
2. 执行调度的时间配置。
3. 应执行的服务地址，即：`URL`。
4. 调用服务时发送的额外参数。

```javascript
_cron.schedule(
    'my-task',
    '0 0/60 * * * ?',
    `/services/jobs/product-update`,
    _val.map()
        .set('id', 123)
)
```

如果需要在应用启动时自动创建这些任务，则可以在以下文件中编写此自动化逻辑：

- `server/core/_init.js`

每当 Netuno 服务器初始化应用时，都会执行此文件。

### 删除任务

要删除某个任务，我们使用 [`_cron.remove(key)`](/docs/library/resources/cron#remove)。

其中 `key` 是任务的标识键。

参见示例：

```javascript
_cron.remove('my-task')
```

### 列出任务

通过 [`_cron.schedules()`](/docs/library/resources/cron#schedules) 可以列出所有已配置的任务。

列出所有计划任务的示例：

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>键</td>`)
_out.println(`  <td>URL</td>`)
_out.println(`  <td>参数</td>`)
_out.println(`  <td>描述</td>`)
_out.println(`  <td>上次执行</td>`)
_out.println(`  <td>下次执行</td>`)
_out.println(`  <td>优先级</td>`)
_out.println('</tr>')
for (const schedule of list) {
        _out.println('<tr>')
        _out.println(`  <td>${schedule.getString('key')}</td>`)
        _out.println(`  <td>${schedule.getString('url')}</td>`)
        _out.println(`  <td>${schedule.getValues('params').toJSON()}</td>`)
        _out.println(`  <td>${schedule.get('detail').getDescription()}</td>`)
        _out.println(`  <td>${schedule.get('trigger').getPreviousFireTime()}</td>`)
        _out.println(`  <td>${schedule.get('trigger').getNextFireTime()}</td>`)
        _out.println(`  <td>${schedule.get('trigger').getPriority()}</td>`)
        _out.println('</tr>')
}
_out.println('</table>')
```

### 暂停任务

通过 [`_cron.pause(key)`](/docs/library/resources/cron#pause) 可以暂停某个任务的执行。

暂停所有计划任务的示例：

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>键</td>`)
_out.println(`  <td>已暂停</td>`)
_out.println('</tr>')
for (const schedule of list) {
    _out.println('<tr>')
    _out.println(`  <td>${schedule.getString('key')}</td>`)
    _out.println(`  <td>${_cron.pause(schedule.getString('key'))}</td>`)
    _out.println('</tr>')
}
_out.println('</table>')
```

> 请注意上面示例中对 `_cron.pause` 的使用。

### 恢复任务

通过 [`_cron.resume(key)`](/docs/library/resources/cron#resume) 可以恢复某个任务的执行。

恢复所有计划任务并显示任务执行时间的示例：

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>键</td>`)
_out.println(`  <td>已恢复</td>`)
_out.println(`  <td>下次执行</td>`)
_out.println('</tr>')
for (const schedule of list) {
    _out.println('<tr>')
    _out.println(`  <td>${schedule.getString('key')}</td>`)
    _out.println(`  <td>${_cron.resume(schedule.getString('key'))}</td>`)
    _out.println(`  <td>${schedule.get('trigger').getNextFireTime()}</td>`)
    _out.println('</tr>')
}
_out.println('</table>')
```

> 请注意上面示例中对 `_cron.resume` 的使用。