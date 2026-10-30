---
id: monitor-alerts
title: Monitoring and Alerts
sidebar_label: Monitoring and Alerts
---

Alerting on server hardware usage.

## Introduction

The Netuno server encapsulates the performance monitoring mechanism that allows analyzing the impact of the software system on hardware usage.

With monitoring, apps can implement alerting rules to notify when something reaches a level that requires attention.

Monitoring and alerts are performed not only on the performance data of the Netuno server process itself but also on the entire running computer system.

This allows complete monitoring with alerting.

## Configuration

The general configuration allows enabling the display of data in Netuno's general logs and controlling the execution interval for collecting and analyzing performance indicators.

Alert configuration is done in each app and allows having multiple alerts per application.

### Logs and General Interval

Netuno stores performance logs inside the `logs` folder, which is inside the Netuno root folder.

In this `logs` folder, the `stats-YEAR_MONTH_DAY.json` files are found; they are always generated automatically according to the interval that can be changed as indicated below.

> For better file visualization, you can use the automatic formatting of your preferred editor or online tools such as:
>
> - http://jsonviewer.stack.hu/
> - https://jsonformatter.org/json-viewer
>
> They can also be opened in **Firefox**, which performs excellent formatting.

##### Logs and General Interval Configuration

To enable the display of performance data in the general logs (`logs/netuno.log`) and in the **console**, edit the `config.js` file located in the Netuno folder root.

Add the following line if it does not already exist:

```
config.monitorLog = true
```

You can also change the default interval of **60 seconds**, meaning the information is only logged once per minute. To do this, also add the code line below and change the seconds value to the desired time:

```
config.monitorInterval = 60
```

> This interval is general and affects the interval configured in the app alerts, which will never be less than this general interval.

**Restart** the Netuno server for it to take effect.

The monitoring information will start being displayed in the console, for example:

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

### Alerts in Apps

Alerts are configured in the applications, so edit your app configuration.

That is, inside the application in the `config` folder in the environment configuration, in files such as:

- _development.json
- _production.json

Add the monitoring alert configuration:

```
...
    "monitor": {
        "alerts": [
            {
                "name": "my-alert",
                "url": "http://MY-APP.local.netu.no:9000/services/my-alert-service"
            }
        ]
    }
...
```

> This is the simplest configuration.

When there is a situation that needs to be alerted, that `url` will be called and the performance parameters will be passed.

By default, alerts have an interval of **1h** for each alert type, so an alert will only be triggered if the **Processor**, **Memory**, or **Disk** (HD) exceeds the **90%** limit of maximum capacity; after one hour, another alert will be sent.

> In situations with multiple alerts, the interval is shortened; for example, if the Memory alert has been triggered and after 20 minutes the Disk also exceeds 90%, then a new alert is triggered immediately, and the 1-hour interval restarts.

### Advanced Alerts

Below is a more advanced configuration that allows changing the interval and usage thresholds for the **Processor**, **Memory**, or **Disk** (HD):

```
...
    "monitor": {
        "alerts": [
            {
                "name": "my-simple-alert",
                "url": "http://MY-APP.local.netu.no:9000/services/my-alert-service"
            },
            {
                "name": "my-advanced-alert",
                "url": "http://MY-APP.local.netu.no:9000/services/my-alert-service",
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
                "url": "http://MY-APP.local.netu.no:9000/services/my-alert-service",
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

> The values above are **default values**!

##### Name

Alert identification name.

##### Enabled

Allows enabling and disabling the alert; the default is _true_ (enabled).

##### Interval

Defines the interval between alerts in **seconds**; the default is _3600 seconds_ (one hour).

##### Threshold

Defines the CPU, Memory, and Disk (HD) thresholds.

##### CPU

The CPU usage threshold at which the alert should be triggered.

It also allows defining the specific threshold for _system_ and _process_.

##### Memory

The Memory usage threshold at which the alert should be triggered.

It also allows defining the specific threshold for _system_ and _process_.

##### System

These are the thresholds for the operating system as a whole with all running processes.

##### Process

These are the thresholds only for the Netuno server process.

##### Disk

The Disk (HD) usage threshold at which the alert should be triggered.

## Sent Parameters

When a `url` is invoked, an alert is triggered because a threshold has been exceeded, so hardware usage performance data will be sent.

The `url` is executed with the `POST` method and the content is sent as JSON: `Content-Type: application/json`.

Example of the JSON with data sent to the alerts `url`:

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

The name (key) defined in the alert configuration in the application.

##### App

The name of the application that has the alert configured and that causes it to be triggered.

##### Hostname

Name of the computer running the Netuno server that triggers the alert.

##### Timezone

Timezone of the computer running the Netuno server that triggers the alert.

##### Started

Date and time when the Netuno server was started.

##### Moment

Date and time of the moment when the alert was generated.

##### Before

Information about the previous alert; it has exactly the same JSON structure but with data referring to the previously triggered alert.

##### Alerts

List of alerts that were triggered, specifying the alert type (_type_) and the threshold (_threshold_) that was exceeded.

The alert types are:

- `cpu-system`: Alert for CPU usage of the computer system with all running processes as a whole.
- `cpu-process`: Alert for CPU usage of the Netuno server process.
- `memory-system`: Alert for Memory usage of the computer system with all running processes as a whole.
- `memory-process`: Alert for Memory usage of the Netuno server process.
- `disk`: Alert for Disk (HD).

##### CPU

These are the Processor data sent with the following information:

- `cores`: Number of physical processors.
- `vcores`: Number of virtual processors (threads).
- `load`: Processor load information:
  - `system`: Processing load of the operating system with all processes as a whole; the value is between **0** (_0%_) and **1** (_100%_).
  - `process`: Processing load of the Netuno server; the value is between **0** (_0%_) and **1** (_100%_).
  - `ticks`: Returns the processor load in the overall system in an array with eight elements representing, in milliseconds, what was spent in the following states: _User_ (0), _Nice_ (1), _System_ (2), _Idle_ (3), _IOwait_ (4), _Hardware interrupts (IRQ)_ (5), _Software interrupts/DPC (SoftIRQ)_ (6), and _Steal_ (7).
  - `frequency`: Maximum frequency (`max`) of the processor and the average frequency used across all cores (`average`); the values are in _hertz_, so 2500000000 _Hz_ equals 2.5 _GHz_.

> The frequency division is performed as follows:
> 
> 2500000000 (_Hz_) / 1000 (_kHz_) / (1000) (_MHz_) / 1000 (_GHz_) = 2.5 _GHz_
>
> Hz (_Hertz_), kHz (_Kilohertz_), MHz (_Megahertz_), GHz (_Gigahertz_)

##### Memory

These are the Memory data sent with the following information:

- `system`: This is the memory usage information of the operating system with all processes as a whole.
  - `total`: Total memory of the computer.
  - `used`: Memory allocated in use.
  - `free`: Available free memory.
- `process`: These are the memory usage data of the Netuno server process.
  - `max`: Maximum amount of memory that can be used by Netuno.
  - `total`: Total reserved (allocated) memory, including used and "free" memory.
  - `used`: Amount of memory that is actually being used.
  - `free`: Amount of free (reserved) memory available to be used.
  - `gc`: Whether the execution of the _garbage collector_ (memory garbage collector) was invoked.

> The values are in Bytes, so 17179869184 Bytes equals 16 Gigabytes.
>
> How the division is performed:
>
> 17179869184 _B_ / 1024 (_KB_) / 1024 (_MB_) / 1024 (_GB_) = 16 _GB_ 
>
> B (_Bytes_), KB (_Kilobytes_), MB (_Megabytes_), GB (_Gigabytes_)

##### Disk

These are the hard disk (HD) usage data sent with the following information:

- `total`: Total disk size.
- `used`: Amount of disk space used.
- `free`: Amount of disk space available.

> The values are in Bytes, so 500068036608 Bytes equals 465.72 Gigabytes.
>
> How the division is performed:
>
> 500068036608 _B_ / 1024 (_KB_) / 1024 (_MB_) / 1024 (_GB_) = 465.72 _GB_ 
>
> B (_Bytes_), KB (_Kilobytes_), MB (_Megabytes_), GB (_Gigabytes_)

## Example of Alerting Services

Netuno services can be used as the alerts `url`.

Sending alerts via email, SMS, or even storing the information in a database can be implemented.

Any type of `url` can also be used, so the alert can be triggered for other technologies such as NodeJS, PHP, .NET, Rails, Laravel, Sails, etc.

In the case of Netuno, a service for sending email can be implemented following the instructions in the [Sending Emails](/docs/academy/server/services/sending-emails) tutorial.

Below is how to implement a complete example adapted to monitoring alerting.

Before starting, make sure you have the SMTP configuration in the application configuration and also the monitoring configuration, for example:

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
            "password": "S3cr3t0"
        }
    },
    ...
    "monitor": {
        "alerts": [
            {
                "name": "email-alert",
                "url": "http://MY-APP.local.netu.no:9000/services/monitor/alert"
            }
        ]
    }
...
```

> Make sure you adjust the parameters, especially those highlighted in uppercase values.

The alerting service can be placed in `server/services/monitor/alert.js`, with the following code:

```
_log.info("Monitor Alert Information:\n"+ _req.toJSON())

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
        htmlInfos += `<p>The <b>system</b> processor reaches <b>${cpuLoadSystem}%</b></p>`
    }
    if (alertType.getString("type") == 'cpu-process') {
        subjectTypes += "Process CPU"
        htmlInfos += `<p>The <b>process</b> processor reaches <b>${cpuLoadProcess}%</b></p>`
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

smtp.text = "Information in the HTML content version of this email."

smtp.send()
```

> An email with the alerts will be sent.

In this case, there was only a need to alert about the disk space situation, as can be seen in this received email:

![email](/docs/assets/library/advanced/monitor-alerts-mail-pt.png)

To implement **SMS** sending, there are examples in the **demo**_nstration_ application with remote REST API integration that allows integration with the SMS platform you prefer.