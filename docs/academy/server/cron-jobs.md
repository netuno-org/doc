---
id: cron-jobs
title: Cron Jobs
sidebar_label: Cron Jobs
---

## Before You Starting

Please make sure you have basic knowledge skills in _**JavaScript**_ and in _Netuno_ platform, also available at [Netuno Academy](https://doc.netuno.org/docs/en/academy/overview/).

## Introduction

Cron Jobs allow you to automate certain commands or scripts on your server to complete repetitive tasks automatically. This can be a very resourceful tool as a **Cron Job** can be set to run by 15 minute or hourly increments, a day of the week or month, or any combination of these. [Cron in Linux](https://opensource.com/article/17/11/how-use-cron-linux).

In Linux/UNIX/Mac there is a service called _Cron_ with the famous settings `crontab`, on the other hand on _Windows_ will be the `Task Manager`.

**Cron Jobs** comes already fully integrated with _Netuno_ platform which helps to avoid further external configurations.

_Cron Jobs_ are known as periodic operations.

Each _Netuno_ app can have several **Cron Jobs**, also these _Netuno_ Cron Jobs can execute internal and external URL's and services

> For more information please check our documentation at [cron](https://doc.netuno.org/docs/en/library/resources/cron/).

## Cron Jobs Guide

Each application has its own service settings reschedule (**cron jobs**) with a specific execution configuration.

To simplify each scheduled service, it is a separate ** job **, which has its own execution configuration, and can be executed every minute, every 5 minutes, every hour, on a certain day and time of the week, also has the URL that will be called when it is time to execute it.

>_Netuno_ uses the library <a href="http://www.quartz-scheduler.org/" target="_blank">Quartz Scheduler</a> to manage the execution of scheduled services. The timing rules configuration can be found in this library.

Furthermore, the execution of each **job** involves the execution of a URL (_web address, link_), which can be both external and internal to the application itself. When it is an external link, it can be from another application or any external URL on the internet, on the network or on the computer.

![Cron Diagram](/docs/assets/academy/server/cron.svg)

The graph above shows that _Netuno_ contains 2 applications, where each one has configured 2 jobs (_scheduled services_), which are executed at different times, corresponding to any configuration.

The execution that will happen is as follows:

- App 1 send 2 jobs:
  - Job 1: Run an URL internal service of the App 1 itself.
  - Job 2: Run an external, public URL.
- App 2 send 2 jobs:
  - Job 3: Run an internal service URL from App 2 itself.
  - Job 4: Run an App 1 service URL.

> Applications should have the services that are run by **Cron Jobs** within the folder:
> - 📂 `server/services/jobs`

Each URL is executed using the _HTTP POST_ method. In the job configuration, it allows adding additional parameters, as well as a secret key to prevent it from being executed outside the controlled context.

## Configuration

According to the environment, the schedule services is carried out in the configuration file app.

> This configure should never start with `*` this will cause the execution to occur every second, therefore generating performance complications in a snowball effect in case the processing at any time takes more than 1 second.

To do this, navigate within the application you are developing to the environment configuration file. In this example, we will use the development environment file located at:

- 📂 `config/_development.json`

Check that there are no more configurations for _Cron_, if it does not add the configuration parameters at the end of the configuration file (in JSON format):

```
{
    ...
    "cron": {
        "secret": "m3u-S3Gred0",
        "jobs": [
            {
                "name": "my-job",
                "config": "0 30 12 * * ?",
                "url": "http://my-app.local.netu.no:9000/jobs/my-job"
            },
            {
                "name": "my-job",
                "config": "0 0/2 * * * ?",
                "url": "http://my-app.local.netu.no:9000/jobs/my-other-job",
                "params": {
                    "secret": "m3u-Ou7ro-S3Gred0",
                    "type": "client"
                }
            }
        ]
    },
    ...
}
```

In this configuration, the first job will be executed every day at noon and thirty minutes. And the second job will run every 2 minutes.

##### Jobs

The list of scheduled services that we have in the application is an array and for this reason we can have multiple services configured.

##### Secret

It is a security key parameter that protects the service, to be executed only when it receives this parameter with exactly the same value.

The reason why `jobs` are public services and to prevent them from being executed externally they contain this protection.

##### Name

The name that identifies the service internally, which can be used to perform management manipulation, such as stop and restart.

##### Config

The configuration of the expression of the service timing, on other hand the rules of its scheduling.

> The configuration should never start with `*` this will cause the execution to occur every second, thus, generating performance complications with a snowball effect in case the processing at any time takes more than 1 second.

Check the supported expressions below.

##### URL

The address that will be executed periodically.

##### Params

The parameters that are passed to the URL in the execution, the URL is executed with the ** HTTP POST ** method and therefore additional parameters such as _type_ can be added in the example above, or even specify another secret key.

### Supported formats of Cron expressions

|Name Field | Compulsory | VALUES ACCEPTED| SPECIAL CHARACTERS ALLOWED |
| ------- |:------:|:-----------:|--------------|
| Seconds | YES | 0-59 | , - * / |
| Minutes | YES | 0-59 | , - * / |
| Hours | YES | 0-23 | , - * / |
| Day of the Month | YES | 1-31 | , - * ? / L W |
| Month | YES | 1-12 or JAN-DEC | , - * / |
| Day of the week | YES | 1-7 or SUN-SAT | , - * ? / L # |
| Year | NO | empty, 1970-2099 | , - * / |

##### Cron expressions, examples

|EXPRESSION | MEANING |
| ------- |------|
| 1 * * * * ? | Performs on the second number 1 of every minute. |
| 0 0 12 * * ? | Starts at 12h00 every day |
| 0 15 10 ? * * | Starts at 10h15 every day|
| 0 15 10 * * ? | Starts at 10h15 every day |
| 0 15 10 * * ? * | Starts at 10h15 every day |
| 0 15 10 * * ? 2005 | Starts at 10h15 every day during 2005 |
| 0 * 14 * * ? | Starts every minute starting at 14h and ends at 14h59, every day |
| 0 0/5 14 * * ? | Starts every 5 minutes starting at 14h00 and ending at 14h55, every day |
| 0 0/5 14,18 * * ? | It starts every 5 minutes, starting at 14h00 and ending at 14h55. Subsequently, it starts every 5 minutes, starting at 18h00 and ending at 18h55, every day |
| 0 0-5 14 * * ? | Starts every minute starting at 14h00 and ends at 14h05, every day |
| 0 10,44 14 ? 3 WED | Starts at 14h10 and 14h44 every Wednesday in March. |
| 0 15 10 ? * MON-FRI | Starts at 10h15 every working day of the week (Monday to Friday) |
| 0 15 10 15 * ? | Starts at 10h15 on the 15th of each month |
| 0 15 10 L * ? | Starts at 10h15 on the last day of each month |
| 0 15 10 L-2 * ? | Starts at 10h15 on the penultimate day of each month |
| 0 15 10 ? * 6L | Starts at 10h15 on the last Friday of each month |
| 0 15 10 ? * 6L 2002-2005 | Starts at 10h15 every last Friday of each month during 2002, 2003, 2004 and 2005 |
| 0 15 10? * 6 # 3 | Starts at 10h15 on the third Friday of each month |
| 0 0 12 1/5 * ? | Starts at 12 noon every 5 days of each month, starting on the first day of each month. |
| 0 11 11 11 11 ? | It starts every 11th of November at 11h11 |

> The configuration should never start with `*` this will cause the execution to occur every second, thus generating performance complications with a snowball effect in case the processing at any time takes more than 1 second. 
[Cron Tab](https://crontab.guru/examples.html)

## Service

Scheduled services should be scheduled within the folder:

- 📂 `server/services/jobs`

_Netuno_ will automatically execute these services and validate the `secret` parameter with the right configuration value.

> The `secret` has the purpose for the service to be executed externally without authentication, but in a secure way.

The service will be executed periodically according to the defined parameterization.

Just execute the service's direct URL and pass the `secret` parameter, to run the service execution test manually.

Via GET for example:

- http://my-app.local.netu.no:9000/services/job/my-job?secret=\*\*\*\*\*

In place of the `*****` at the end of the URL, it should be replaced with the actual configured value of the` secret`.

## Example

Create the file at:

- 📂 `server/services/jobs/test.js`

In this service file, place the following code:
```javascript
_log.info("Job test!")
_out.print("Ok")
```

In your application's configuration JSON, adjust the parameterization as below:

```javascript
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

When running the _Netuno_ server into the terminal, the message `Test job!` Will appear every 30 seconds.

Open the URL in the browser:

- http://localhost:9000/services/jobs/test?secret=m3u-S3Gred0

Only `Ok` will return and the message` Test job! `Will appear in the terminal.

> In the `development` environment, the validation of the` secret` has no effect, so it can run without passing any `secret` and it will work, but in different environment, such as the production one will be already taken into account.

## Many Tasks

When there is a need to create many scheduled tasks, it is advisable to increase the number of threads used for the 
parallel execution of the various scheduled tasks.

This configuration is done in the `config.js` file located in the Netuno root, adding the example line:

```javascript
config.cronThreadCount = 10
```

> By default this configuration only allows 3 threads.
>
> You should be careful to increase the number of threads according to the number of CPU cores.

Using too few threads to execute too many parallel schedules may result in scheduled tasks stopping execution.

So if there are cases where tasks get stuck after some time, it is likely that too many tasks are being executed in 
parallel, so it is necessary to increase the number of threads.

## Programmatically

Netuno allows you to configure and control Cron Jobs programmatically.

This means that through code we can manage everything.

### Create New Task

To create a new task, we create its schedule through [`_cron.schedule`](/docs/library/resources/cron#schedule).

The [`_cron.schedule`](/docs/library/resources/cron#schedule) receives the following parameters:

1. Task identification key: `key`.
2. Configuration of the scheduling time for execution.
3. Location of the service that should be executed, i.e.: `URL`.
4. Additional parameters that are sent when calling the service.

```javascript
_cron.schedule(
    'minha-tarefa',
    '0 0/60 * * * ?',
    `/services/jobs/product-update`,
    _val.map()
        .set('id', 123)
)
```

If it is necessary to create tasks automatically when the application starts, this automation can be coded in the file:

- `server/core/_init.js`

Where this file is executed whenever the application is started by the Netuno server.

### Remove Task

To remove a specific task we use [`_cron.remove(key)`](/docs/library/resources/cron#remove).

Where `key` is the task identification key.

See the example:

```javascript
_cron.remove('my-task')
```

### List Tasks

Through [`_cron.schedules()`](/docs/library/resources/cron#schedules) we can list all configured tasks.

Example of how to list all scheduled tasks:

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Key</td>`)
_out.println(`  <td>URL</td>`)
_out.println(`  <td>Parameters</td>`)
_out.println(`  <td>Description</td>`)
_out.println(`  <td>Previous Fire Time</td>`)
_out.println(`  <td>Next Fire Time</td>`)
_out.println(`  <td>Priority</td>`)
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

### Pause Tasks

Using [`_cron.pause(key)`](/docs/library/resources/cron#pause) we can pause the execution of a specific task.

Example of how to pause all scheduled tasks:

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Key</td>`)
_out.println(`  <td>Paused</td>`)
_out.println('</tr>')
for (const schedule of list) {
    _out.println('<tr>')
    _out.println(`  <td>${schedule.getString('key')}</td>`)
    _out.println(`  <td>${_cron.pause(schedule.getString('key'))}</td>`)
    _out.println('</tr>')
}
_out.println('</table>')
```

> Note the use of `_cron.pause` in the example above.

### Resume Tasks

Using [`_cron.resume(key)`](/docs/library/resources/cron#resume) we can resume the execution of a specific task.

Example of how to resume all scheduled tasks, and shows when the tasks will be executed:

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Key</td>`)
_out.println(`  <td>Resumed</td>`)
_out.println(`  <td>Next Fire Time</td>`)
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

> Note the use of `_cron.resume` in the example above.
