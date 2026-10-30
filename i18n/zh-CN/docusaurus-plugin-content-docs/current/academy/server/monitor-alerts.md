---
id: monitor-alerts
title: 监控与警报
sidebar_label: 监控与警报
---

关于服务器硬件使用情况的警报机制。

## 介绍

Netuno 服务器内置了性能监控机制，可用于分析软件系统对硬件消耗的影响。

通过监控，应用可以实现警报规则，在某个指标达到需要关注的阈值时发出通知。

监控和警报不仅基于 Netuno 服务器进程本身的性能数据，也覆盖正在运行的整个计算机系统。

因此可以实现完整的监控和警报。

## 配置

通用配置可以启用 Netuno 常规日志中的数据展示，并控制性能指标采集和分析的执行间隔。

警报配置在每个应用中完成，并且每个应用可以配置多个警报。

### 日志与通用间隔

Netuno 将性能日志保存在 Netuno 根目录下的 `logs` 文件夹中。

在 `logs` 文件夹中可以找到 `stats-年_月_日.json` 文件；这些文件始终按照间隔自动生成，该间隔可以如下文所述进行修改。

> 为了更好地查看这些文件，可以使用你喜欢的编辑器的自动格式化功能，或使用以下在线工具：
>
> - http://jsonviewer.stack.hu/
> - https://jsonformatter.org/json-viewer
>
> 也可以在 **Firefox** 中打开，它会进行很好的格式化。

##### 日志与通用间隔配置

要启用性能数据在常规日志（`logs/netuno.log`）和**控制台**中的显示，请编辑 Netuno 文件夹根目录下的 `config.js` 文件。

如果还没有以下行，请添加：

```
config.monitorLog = true
```

你也可以修改默认间隔 **60 秒**，也就是说，信息只会每分钟记录一次到日志中。为此，还请添加下面的代码行，并将秒数改为你想要的时间：

```
config.monitorInterval = 60
```

> 此间隔是通用间隔，会影响应用警报中配置的间隔；应用警报的间隔永远不会低于此通用间隔。

**重启** Netuno 服务器以使其生效。

控制台将开始显示监控信息，例如：

```
2020-11-17 14:56:08,109 INFO  [Thread-13] cli.Monitor - MONITOR
CPU Load: 
	System: 19.1% (+19.1%)
	Process: 3.9% (+3.9%)
Memory: 
	System: 
		Used: 9,525.9MB (58.1% +148.0MB)
		Free: 6,858.1MB (41.9% -148.0MB)
	Process: 
		Total: 384.0MB (9.4% +126.0MB)
		Used: 129.6MB (3.2% +18.9MB)
		Free: 254.4MB (6.2% +107.1MB)
		GC: false
Disk: 
	Used: 465,047.8MB (97.5% +21.3MB)
	Free: 11,854.3MB (2.5% -21.3MB)
```

### 应用中的警报

警报在应用中配置，因此请编辑你的应用配置。

也就是说，在应用内的 `config` 文件夹中的环境配置里，例如以下文件：

- _development.json
- _production.json

添加监控警报配置：

```
...
    "monitor": {
        "alerts": [
            {
                "name": "我的警报",
                "url": "http://APP-NAME.local.netu.no:9000/services/我的警报服务"
            }
        ]
    }
...
```

> 这是最简配置。

当出现需要警报的情况时，将调用该 `url`，并传递性能参数。

默认情况下，每种警报类型的间隔为 **1 小时**；因此，只有当 **处理器**、**内存** 或 **磁盘**（HD）超过最大容量的 **90%** 阈值时才会触发警报，一小时后会再发送另一个警报。

> 在多个警报的情况下，间隔会缩短。例如，如果内存警报已被触发，20 分钟后磁盘也超过 90%，则会立即触发一个新警报，并重新开始计算 1 小时间隔。

### 高级警报

下面是一个更高级的配置，可修改 **处理器**、**内存** 或 **磁盘**（HD）的使用阈值和间隔：

```
...
    "monitor": {
        "alerts": [
            {
                "name": "我的简单警报",
                "url": "http://APP-NAME.local.netu.no:9000/services/我的警报服务"
            },
            {
                "name": "我的高级警报",
                "url": "http://APP-NAME.local.netu.no:9000/services/我的警报服务",
                "enabled": true,
                "interval": 3600,
                "threshold": {
                    "cpu": 90,
                    "memory": 90,
                    "disk": 90
                }
            },
            {
                "name": "我的更高级警报",
                "url": "http://APP-NAME.local.netu.no:9000/services/我的警报服务",
                "enabled": true,
                "interval": 3600,
                "threshold": {
                    "cpu": {
                        "system": 90,
                        "process": 90
                    },
                    "memory": {
                        "system": 90,
                        "process": 90
                    },
                    "disk": 90
                }
            }
        ]
    }
...
```

> 上述值是**默认值**！

##### 名称

警报的标识名称。

##### 启用

用于启用和禁用警报，默认值为 _true_（启用）。

##### 间隔

定义警报之间的间隔，单位为**秒**，默认值为 _3600 秒_（一小时）。

##### 阈值

定义 CPU、内存和磁盘（HD）的阈值。

##### CPU

触发警报的 CPU 使用率阈值。

还可以分别定义 _system_ 和 _process_ 的特定阈值。

##### 内存

触发警报的内存使用率阈值。

还可以分别定义 _system_ 和 _process_ 的特定阈值。

##### 系统

表示操作系统整体（包括所有正在运行的进程）的阈值。

##### 进程

表示仅针对 Netuno 服务器进程的阈值。

##### 磁盘

触发警报的磁盘（HD）使用率阈值。

## 发送的参数

当调用某个 `url` 时，说明因超过某个阈值而触发了警报，此时会发送硬件使用情况的性能数据。

该 `url` 使用 `POST` 方法调用，内容以 JSON 发送：`Content-Type: application/json`。

发送到警报 `url` 的 JSON 数据示例：

```
{
    "key": "我的简单警报",
    "app": "我的应用",
    "hostname": "我的计算机",
    "timezone": "Europe/Lisbon",
    "started": "2020-11-17 14:55:07.682",
    "moment": "2020-11-17 14:56:08.098",
    "before": {
        ...
    },
    "alerts": [
        {
            "threshold": 90,
            "type": "cpu-system"
        },
        {
            "threshold": 90,
            "type": "disk"
        }
    ],
    "cpu": {
        "cores": 4,
        "vcores": 8,
        "load": {
            "system": 0.91311,
            "process": 0.03945,
            "ticks": [ 575084, 0, 260470, 6796463, 0, 0, 0, 0 ],
            "frequency": {
                "average": 2500000000,
                "max": 2500000000
            }
        }
    },
    "memory": {
        "system": {
            "total": 17179869184,
            "used": 9988640768,
            "free": 7191228416
        },
        "process": {
            "total": 402653184,
            "max": 4294967296,
            "used": 135885832,
            "free": 266767352,
            "gc": false
        }
    },
    "disk": {
        "total": 500068036608,
        "used": 487637929984,
        "free": 12430106624
    }
}
```

### 参数说明

##### 键（Key）

在应用警报配置中定义的名称（键）。

##### 应用（App）

配置了该警报并触发它的应用名称。

##### 主机名（Hostname）

运行触发该警报的 Netuno 服务器的计算机名称。

##### 时区（Timezone）

运行触发该警报的 Netuno 服务器的计算机时区。

##### 启动时间（Started）

Netuno 服务器启动的日期和时间。

##### 时刻（Moment）

生成警报时的日期和时间。

##### 之前（Before）

上一个警报的信息，其 JSON 结构完全相同，但数据对应之前触发的警报。

##### 警报（Alerts）

已触发的警报列表，其中指定警报类型（_type_）和超过的阈值（_threshold_）。

警报类型包括：

- `cpu-system`：计算机系统整体上所有运行中进程的 CPU 使用率警报。
- `cpu-process`：Netuno 服务器进程的 CPU 使用率警报。
- `memory-system`：计算机系统整体上所有运行中进程的内存使用率警报。
- `memory-process`：Netuno 服务器进程的内存使用率警报。
- `disk`：磁盘（HD）警报。

##### CPU

处理器数据中包含以下信息：

- `cores`：物理处理器数量。
- `vcores`：虚拟处理器（线程）数量。
- `load`：处理器负载信息：
  - `system`：操作系统整体所有进程的处理负载，值介于 **0**（_0%_）和 **1**（_100%_）之间。
  - `process`：Netuno 服务器的处理负载，值介于 **0**（_0%_）和 **1**（_100%_）之间。
  - `ticks`：以包含八个元素的数组返回系统整体的处理器负载，表示在以下状态中花费的毫秒数：_User_（0）、_Nice_（1）、_System_（2）、_Idle_（3）、_IOwait_（4）、_Hardware interrupts (IRQ)_（5）、_Software interrupts/DPC (SoftIRQ)_（6）和 _Steal_（7）。
  - `frequency`：处理器的最大频率（`max`）以及所有核心使用的平均频率（`average`）；值以 _赫兹_ 为单位，因此 2500000000 _Hz_ 等于 2.5 _GHz_。

> 频率换算方式如下：
> 
> 2500000000 (_Hz_) / 1000 (_KHz_) / (1000) (_MGz_) / 1000 (_GHz_) = 2.5 _GHz_
>
> Hz（赫兹）、KHz（千赫兹）、MGz（兆赫兹）、GHz（吉赫兹）

##### 内存（Memory）

内存数据中包含以下信息：

- `system`：操作系统整体（包括所有进程）的内存使用信息。
  - `total`：计算机的总内存。
  - `used`：已分配并正在使用的内存。
  - `free`：可用的空闲内存。
- `process`：Netuno 服务器进程的内存使用数据。
  - `max`：Netuno 可以使用的最大内存量。
  - `total`：预留（分配）的内存总量，包括已使用和“空闲”内存。
  - `used`：实际正在使用的内存量。
  - `free`：可供使用的空闲（预留）内存量。
  - `gc`：是否调用了 _garbage collector_（内存垃圾回收器）执行。

> 这些值以字节为单位，因此 17179869184 字节等于 16 GB。
>
> 换算方式如下：
>
> 17179869184 _B_ / 1024 (_KB_) / 1024 (_MB_) / 1024 (_GB_) = 16 _GB_ 
>
> B（字节）、KB（千字节）、MB（兆字节）、GB（吉字节）

##### 磁盘（Disk）

硬盘（HD）使用数据中包含以下信息：

- `total`：磁盘总大小。
- `used`：磁盘已使用空间量。
- `free`：磁盘可用空间量。

> 这些值以字节为单位，因此 500068036608 字节等于 465.72 GB。
>
> 换算方式如下：
>
> 500068036608 _B_ / 1024 (_KB_) / 1024 (_MB_) / 1024 (_GB_) = 465.72 _GB_ 
>
> B（字节）、KB（千字节）、MB（兆字节）、GB（吉字节）

## 警报服务示例

Netuno 服务可以用作警报的 `url`。

可以实现通过电子邮件、短信发送警报，甚至将信息保存到数据库。

也可以使用任何类型的 `url`，这样警报就可以触发到其他技术，例如 NodeJS、PHP、.NET、Rails、Laravel、Sails 等……

在 Netuno 中，可以按照[发送电子邮件](/docs/academy/server/services/sending-emails)教程的说明实现一个用于发送电子邮件的服务。

下面给出一个适配监控警报的完整实现示例。

开始之前，请确保应用配置中已有 SMTP 配置和监控配置，例如：

```
...
    "smtp": {
        "警报": {
            "enabled": true,
            "host": "mail.example.com",
            "port": 465,
            "ssl": true,
            "subjectPrefix": "警报：",
            "from": "noreply@example.com",
            "to": "info@example.com",
            "username": "noreply@example.com",
            "password": "S3gr3d0"
        }
    },
    ...
    "monitor": {
        "alerts": [
            {
                "name": "邮件警报",
                "url": "http://MY-APP.local.netu.no:9000/services/监控/警报"
            }
        ]
    }
...
```

> 请确保调整这些参数，尤其是需要替换为实际值的示例值。

警报服务可以放在 `server/services/监控/警报.js`，代码如下：

```
_log.info("监控警报信息：\n"+ _req.toJSON())

const 处理器 = _req.getValues("cpu")
const 内存 = _req.getValues("memory")
const 磁盘 = _req.getValues("disk")

const 处理器系统负载 = Math.round(处理器.getValues("load").getFloat("system") * 100)
const 处理器进程负载 = Math.round(处理器.getValues("load").getFloat("process") * 100)
const 内存系统空闲 = Math.round(内存.getValues("system").getLong("free") / 1024 / 1024)
const 内存进程空闲 = Math.round(内存.getValues("process").getLong("free") / 1024 / 1024)
const 磁盘空闲 = Math.round(磁盘.getLong("free") / 1024 / 1024)

let 主题类型 = ""
let html信息 = ""

for (const 警报类型 of _req.getValues("alerts")) {
    if (主题类型 != "") {
        主题类型 += ", "
    }
    if (警报类型.getString("type") == 'cpu-system') {
        主题类型 += "系统 CPU"
        html信息 += `<p><b>系统</b>的处理器达到 <b>${处理器系统负载}%</b></p>`
    }
    if (警报类型.getString("type") == 'cpu-process') {
        主题类型 += "进程 CPU"
        html信息 += `<p><b>进程</b>的处理器达到 <b>${处理器进程负载}%</b></p>`
    }
    if (警报类型.getString("type") == 'memory-system') {
        主题类型 += "系统内存"
        html信息 += `<b>系统</b>内存仅剩 <b>${内存系统空闲} MB</b> 可用。`
    }
    if (警报类型.getString("type") == 'memory-process') {
        主题类型 += "进程内存"
        html信息 += `<b>进程</b>内存仅剩 <b>${内存进程空闲} MB</b> 可用。`
    }
    if (警报类型.getString("type") == 'disk') {
        主题类型 += "磁盘"
        html信息 += `磁盘仅剩 <b>${磁盘空闲} MB</b> 可用。`
    }
}

const 邮件 = _smtp.init("警报")

邮件.subject += `${_req.getString("hostname")} - ${主题类型}`

邮件.html += `<h2>${_req.getString("hostname")}</h2>${html信息}`

邮件.text = "请查看此电子邮件的 HTML 内容版本中的信息。"

邮件.send()
```

> 将发送一封包含警报的邮件。

在这种情况下，只需要对磁盘空间情况进行警报，如收到的这封电子邮件所示：

![邮件](/docs/assets/library/advanced/monitor-alerts-mail-pt.png)

要实现对 **短信（SMS）** 的发送，**演示**_应用_中提供了集成远程 REST API 的示例，可让你集成自己偏好的短信平台。