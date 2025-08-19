---
id: monitor-alerts
title: Monitor and Alerts
sidebar_label: Monitor and Alerts
---

Alarms about server hardware utilization.

## Introduction

The Netuno server has encapsulated the performance monitoring mechanism that allows the impact of the software system on hardware consumption to be analysed.

With the monitoring, apps are allowed to implement alarming rules to alert when something reaches a threshold that needs attention.

The monitoring and alerts are not only carried out on the performance data of the Netuno server process itself but also on the entire running computer system.

Allows you to perform a complete monitoring and alarming.

## Configuration

The general configuration allows you to activate the presentation of data in the general Netuno logs, and control the execution interval of the collection and analysis of performance indicators.

The configuration of alerts is performed in each app, and allows you to have multiple alerts per application.

## Logs and General Interval

Netuno stores the performance logs inside the `logs` folder which is inside the Netuno root folder.

In this `logs` folder is where the `stats-ANO_MES_DIA.json` files are found, these are always automatically generated according to the interval that can be changed as indicated below.

> For a better visualization of the files you can use the automatic formation of your preferred editor or with online tools such as:
>
> - http://jsonviewer.stack.hu/
> - https://jsonformatter.org/json-viewer
>
> They can also be opened in **Firefox** which makes an excellent training.

##### Logs Configuration and General Interval

To enable performance data to be displayed in the general logs (`logs/netuno.log`) and in the **console**, edit the `config.js` file that is at the root of the Netuno folder.

Add the following line if it doesn't already exist:

```
config.monitorLog = true
```

You can also change the default interval of **60 seconds**, the information is only displayed in log every minute. For this, also add the line of code below and change the seconds value to the desired time:

```
config.monitorInterval = 60
```

> This interval is general and interferes with the interval configured in the app alerts, which will never be less than this general interval.

**Restart** the Netuno server for this to be effective.

Monitoring information will start to be displayed on the console, for example:

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

### Alert in Apps

Alerts are configured in apps, so edit your app's configuration.

That is, inside the app in the `config` folder in the environment configuration, in files like:

- _development.json
- _production.json

Add the monitoring alerts configuration:

```
...
    "monitor": {
        "alerts": [
            {
                "name": "my-alert",
                "url": "http://APP-NAME.local.netu.no:9000/services/my-alert-service"
            }
        ]
    }
...
```

> This is the most simplified setup.

When there is a situation that needs to be alerted then the `url` will be called and the performance parameters will be passed.

By default the alerts have an interval of **1h** for each type of alert, so there will only be the realization of the alert if the **Processor**, the **Memory** or the **Disk** (HD) exceeds the limit of **90%** of the maximum capacity, after an hour it will send another alert.

> In situations of multiple alerts then the interval is shortened, for example, if the Memory alert has been triggered and after 20 minutes the Disk also exceeds 90%, then a new alert is triggered immediately, and the 1 hour interval is restarted.

### Advanced Alerts

Below is a more advanced configuration where you can change the range and limits of the **Processor**, **Memory** or **Disk** (HD) consumption:

```
...
    "monitor": {
        "alerts": [
            {
                "name": "my-simple-alert",
                "url": "http://APP-NAME.local.netu.no:9000/services/my-alert-service"
            },
            {
                "name": "my-advanced-alert",
                "url": "http://APP-NAME.local.netu.no:9000/services/my-alert-service",
                "enabled": true,
                "interval": 3600,
                "threshold": {
                    "cpu": 90,
                    "memory": 90,
                    "disk": 90
                }
            },
            {
                "name": "my-more-advanced-alert",
                "url": "http://APP-NAME.local.netu.no:9000/services/my-alert-service",
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

> The above values are **standard values**!

##### Name

Name identifying the alert.

##### Enabled

Allows enabling and disabling the alert, the default is _true_ (active).

##### Interval

Sets the interval between alerts in **seconds**, default is _3600 seconds_ (one hour).

##### Threshold

Sets the CPU, Memory and Disk (HD) limits.

##### CPU

The CPU consumption threshold at which the alert should be triggered.

It also allows to set the specific limit for _system_ and _process_.

##### Memory

The Memory consumption limit at which the alert should be triggered.

It also allows to set the specific limit for _system_ and _process_.

##### System

These are the limits for the overall operating system with all the processes that are running.

##### Process

These are the limits only for the Netuno server process.

##### Disk

The Disk usage limit at which the alert should be triggered.

## Sent Parameters

When an `url` is invoked an alert is triggered that some limit has been exceeded, and then the hardware consumption performance data is sent.

The `url` is executed with the `POST` method and the content is sent in JSON: `Content-Type: application/json`.

An example of  JSON data that is sent to the `url` for alerts:

```
{
    "key": "my-simple-alert",
    "app": "my-app",
    "hostname": "my-computer",
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

### Parameter Description

##### Key

The name (key) that is defined when configuring the alert in the application.

##### App

The name of the application that has the alert configured and causes it to trigger.

##### Hostname

Name of the computer running the Netuno server that causes the alert.

##### Timezone

Time zone of the computer running the Netuno server that causes the alert.

##### Started

Date and time when the Netuno server was started.

##### Moment

Date and time of the moment when the alert was generated.

##### Before

Information from the previous alert, has exactly the same JSON structure but with the data referring to the previously triggered alert.

##### Alerts

List of alerts that have been triggered, where you specify the type (_type_) of alert and the threshold (_threshold_) that has been exceeded.

The types of alerts are:

- `cpu-system`: Alert of the CPU usage of the computer system with all processes running in general.
- `cpu-process`: Alert of the CPU consumption of the Netuno server process.
- `memory-system`: Alert of the memory consumption of the computer system with all running processes in general.
- `memory-process`: Alert of the memory consumption of the Netuno server process.
- `disk`: Disk alert (HD).

##### CPU

It's the Processor data that is sent with the following information:

- `cores`: Number of physical processors.
- `vcores`: Number of virtual processors (threads).
- `load`: Processor load information:
  - `system`: The processing load of the operating system with all processes in general, the value is between **0** (_0%_) and **1** (_100%_).
  - `process`: The processing load of the Netuno server, the value is between **0** (_0%_) and **1** (_100%_).
  - `ticks`: Returns the processor load on the overall system in an array of eight elements which is represented in milliseconds what was spent in the following states: _User_ (0), _Nice_ (1), _System_ (2), _Idle_ (3), _IOwait_ (4), _Hardware interrupts (IRQ)_ (5), _Software interrupts/DPC (SoftIRQ)_ (6) and _Steal_ (7).
  - `frequency`: maximum frequency (`max`) of the processor and the average frequency used among all cores (`average`), values are in _hertz_, so 2500000000 _Hz_ equals 2.5 _GHz_.

> Frequency division is performed as follows:
> 
> 2500000000 (_Hz_) / 1000 (_KHz_) / (1000) (_MGz_) / 1000 (_GHz_) = 2.5 _GHz_
>
> Hz (_Hertz_), KHz (_Kilohertz_), MGz (_Megahertz_), GHz (_Gigahertz_)

##### Memory

It's the Memory data that is sent with the following information:

- `system`: This is the information of the memory consumption of the operating system with all processes in general.
  - `Total`: Total memory of the computer.
  - `used`: Allocated memory in use.
  - `free`: Free available memory.
- `process`: The memory utilization data of the Netuno server process.
  - `max`: The maximum amount of memory that can be used by Netuno.
  - `total`: Total reserved (allocated) memory, including used and "free" memory.
  - `used`: Amount of memory actually being used.
  - `free`: Amount of free (reserved) memory available for use.
  - `gc`: Whether the _garbage collector_ execution was invoked.

> Values are in Bytes, so 17179869184 Bytes equals 16 Gigabytes.
>
> How the division is performed:
>
> 17179869184 _B_ / 1024 (_KB_) / 1024 (_MB_) / 1024 (_GB_) = 16 _GB_ 
>
> B (_Bytes_), KB (_Kilobytes_), MB (_Megabytes_), GB (_Gigabytes_)

##### Disk

This is the hard disk (HD) usage data that is sent with the following information:

- `total`: Total size of the disk.
- `used`: Amount of space used on the disk.
- `free`: Amount of available disk space.

> The values are in Bytes, so 500068036608 Bytes equals 465,72 Gigabytes.
>
> How the division is performed:
>
> 500068036608 _B_ / 1024 (_KB_) / 1024 (_MB_) / 1024 (_GB_) = 465,72 _GB_ 
>
> B (_Bytes_), KB (_Kilobytes_), MB (_Megabytes_), GB (_Gigabytes_)

## Alarm Service Example

Netuno services can be used as a 'url' for alerts.

It can be implemented to send alerts through email, SMS, or even store the information in a database.

Also any kind of `url` can be used and so the alert can be triggered to other technologies like NodeJS, PHP, .NET, Rails, Laravel, Sails, etc...

In the case of Netuno you can implement a service for sending email by following the instructions in the [Sending Emails](/docs/academy/server/services/sending-emails) tutorial.

Below is how to implement a complete example adapted to monitoring alerts.

Before you start make sure you have the SMTP configuration in the application configuration and also the monitoring configuration, such as:

```
...
    "smtp": {
        "alert": {
            "enabled": true,
            "host": "MY.SERVER.com",
            "port": 465,
            "ssl": true,
            "subjectPrefix": "Alert: ",
            "from": "noreply@MY.DOMAIN.com",
            "to": "info@MY.DOMAIN.com",
            "username": "noreply@MY.DOMAIN.com",
            "password": "S3gr3d0"
        }
    },
    ...
    "monitor": {
        "alerts": [
            {
                "name": "alert-email",
                "url": "http://MY-APP.local.netu.no:9000/services/monitor/alert"
            }
        ]
    }
...
```

> Make sure you set the parameters especially those highlighted in capital letters.

The alert service could be in `server/services/monitor/alert.js`, with the following code:

```
_log.info("Monitor Alert Informations:\n"+ _req.toJSON())

const cpu = _req.getValues("cpu")
const memory = _req.getValues("memory")
const disk = _req.getValues("disk")

const cpuLoadSystem = Math.round(cpu.getValues("load").getFloat("system") * 100)
const cpuLoadProcess = Math.round(cpu.getValues("load").getFloat("process") * 100)
const memorySystemFree = Math.round(memory.getValues("system").getLong("free") / 1024 / 1024)
const memoryProcessFree = Math.round(memory.getValues("process").getLong("free") / 1024 / 1024)
const diskFree = Math.round(disk.getLong("free") / 1024 / 1024)

let subjectTypes = ""
let htmlInfos = ""

for (const alertType of _req.getValues("alerts")) {
    if (subjectTypes != "") {
        subjectTypes += ", "
    }
    if (alertType.getString("type") == 'cpu-system') {
        subjectTypes += "System CPU"
        htmlInfos += `<p>The processor of the <b>system</b> reaches the <b>${cpuLoadSystem}%</b></p>`
    }
    if (alertType.getString("type") == 'cpu-process') {
        subjectTypes += "Process CPU"
        htmlInfos += `<p>The processor of the <b>process</b> reaches the <b>${cpuLoadProcess}%</b></p>`
    }
    if (alertType.getString("type") == 'memory-system') {
        subjectTypes += "System Memory"
        htmlInfos += `The <b>system</b> memory has only <b>${memorySystemFree} MB</b> free.`
    }
    if (alertType.getString("type") == 'memory-process') {
        subjectTypes += "Process Memory"
        htmlInfos += `The process memory has only <b>${memoryProcessFree} MB</b> free.`
    }
    if (alertType.getString("type") == 'disk') {
        subjectTypes += "Disk"
        htmlInfos += `The disk has only <b>${diskFree} MB</b> free.`
    }
}

const smtp = _smtp.init("alert")

smtp.subject += `${_req.getString("hostname")} - ${subjectTypes}`

smtp.html += `<h2>${_req.getString("hostname")}</h2>${htmlInfos}`

smtp.text = "Information in the HTML content version of this e-mail."

smtp.send()
```

> An email will be sent with the alerts.

In this case there was only the need to alert the disk space situation, as can be seen in this email received:

![mail](/docs/assets/library/advanced/monitor-alerts-mail-pt.png)

To implement the sending of **SMS** there are examples in the **demo** application with remote REST API integration that allows you to integrate with the SMS platform of your choice.