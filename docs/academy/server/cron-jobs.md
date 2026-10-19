---
id: cron-jobs
title: Cron Jobs - Scheduled Services
sidebar_label: Cron Jobs
---

## Before You Start

Before proceeding, make sure you have basic knowledge of _**JavaScript**_ and that you already have the Netuno basics from the step-by-step guide available in the [Academy](/docs/academy/overview).

## Introduction

It is common to need to run tasks periodically; that is, from time to time it is necessary to send data to another system, import data from another system, send an email, validate database records, and much more...

On Linux/UNIX/Mac there is the Cron service with the famous configuration file `crontab`, while on Windows there is Task Manager (_Windows Task Manager_).

And in Netuno, Cron Jobs comes already integrated, thus helping to avoid external configurations.

This type of periodic operation is known as Cron Jobs or, in Portuguese, Scheduled Services.

Each Netuno application can have countless Cron Jobs, and Netuno Cron Jobs can run both internal services and URLs as well as external URLs.

> For more information, see the documentation for the [cron](/docs/library/resources/cron) resource.

## How It Works

Each application has the configuration for its own scheduled services (**cron jobs**) with their respective execution configuration.

To simplify, each scheduled service is a separate **job**, which has its own execution configuration and can run every minute, every 5 minutes, every hour, on a specific day and time of the week, etc. It also has the URL that will be called when it is time to run.

> Netuno uses the <a href="http://www.quartz-scheduler.org/" target="_blank">Quartz Scheduler</a> library to manage the execution of scheduled services. The configuration of the timing rules is specific to this library.

Thus, the execution of each job involves calling a URL (_web address, link_), which can be either external or internal to the application itself. When it is an external link, it can be from another application or any external URL on the internet, the network, or the computer.

![Cron Diagram](/docs/assets/academy/server/cron.svg)

The graph above shows that Netuno contains 2 applications, where each one has 2 jobs configured (_scheduled services_), which run at different times according to some configuration. 

The execution behavior that will occur is as follows:

- App 1 launches 2 jobs:
  - Job 1: Calls an internal service URL of App 1 itself.
  - Job 2: Calls an external, public URL.
- App 2 launches 2 jobs:
  - Job 3: Calls an internal service URL of App 2 itself
  - Job 4: Calls a service URL of App 1.

> Applications must keep the services run by Cron Jobs inside the folder:
> - 📂 `server/services/jobs`

Each URL is called with the HTTP POST method. The job configuration allows you to add additional parameters and also a secret key to prevent it from being run outside the controlled context.

## Configuration

Scheduled services are configured in the application configuration file, according to the environment.

> The configuration must never start with `*`; this will cause execution every second, generating performance complications with a snowball effect if processing ever takes longer than 1 second.

To do this, navigate within the application you are developing to the environment configuration file. In this example, we will use the development environment file located at:

- 📂 `config/_development.json`

Check whether there are no existing Cron configurations; if there are none, add the configuration parameters at the end of the configuration file (in JSON format):

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

In this configuration, the first job will run every day at 12:30 PM.

And the second job will run every 2 minutes.


##### Jobs

The list of scheduled services in the application; since it is an array, we can have multiple services configured.

##### Secret

It is a security key parameter that protects the service so that it runs only when it receives this parameter with exactly the same value.

This is because `jobs` are public services, and to prevent them from being run externally they contain this protection.

##### Name

The name that identifies the service internally, which can be used to perform management operations such as pausing and resuming.

##### Config

The service timing expression configuration, that is, its scheduling rules.

> The configuration must never start with `*`; this will cause execution every second, generating performance complications with a snowball effect if processing ever takes longer than 1 second.

See the supported expressions below.

##### URL

The address that will be called periodically.

##### Params

These are the parameters passed to the URL when it runs; the URL is called with the **HTTP POST** method, so additional parameters such as _type_ in the example above can be added, or even another secret key can be specified.

### Supported Cron Expression Formats

|FIELD NAME | REQUIRED | ACCEPTED VALUES | ALLOWED SPECIAL CHARACTERS |
| ------- |:------:|:-----------:|--------------|
| Seconds | YES | 0-59 | , - * / |
| Minutes | YES | 0-59 | , - * / |
| Hours | YES | 0-23 | , - * / |
| Day of Month | YES | 1-31 | , - * ? / L W |
| Month | YES | 1-12 or JAN-DEC | , - * / |
| Day of Week | YES | 1-7 or SUN-SAT | , - * ? / L # |
| Year | NO | empty, 1970-2099 | , - * / |

##### Examples of Cron Expressions

|EXPRESSION | MEANING |
| ------- |------|
| 1 * * * * ? | Runs at second number 1 of every minute. |
| 0 0 12 * * ? | Starts at 12:00 PM every day |
| 0 15 10 ? * * | Starts at 10:15 AM every day |
| 0 15 10 * * ? | Starts at 10:15 AM every day |
| 0 15 10 * * ? * | Starts at 10:15 AM every day |
| 0 15 10 * * ? 2005 | Starts at 10:15 AM every day during the year 2005 |
| 0 * 14 * * ? | Starts every minute beginning at 2:00 PM and ends at 2:59 PM, every day |
| 0 0/5 14 * * ? | Starts every 5 minutes beginning at 2:00 PM and ends at 2:55 PM, every day |
| 0 0/5 14,18 * * ? | Starts every 5 minutes beginning at 2:00 PM and ends at 2:55 PM. Then starts every 5 minutes beginning at 6:00 PM and ends at 6:55 PM, every day |
| 0 0-5 14 * * ? | Starts every minute beginning at 2:00 PM and ends at 2:05 PM, every day |
| 0 10,44 14 ? 3 WED | Starts at 2:10 PM and 2:44 PM every Wednesday in March. |
| 0 15 10 ? * MON-FRI | Starts at 10:15 AM every weekday (Monday through Friday) |
| 0 15 10 15 * ? | Starts at 10:15 AM on the 15th day of every month |
| 0 15 10 L * ? | Starts at 10:15 AM on the last day of every month |
| 0 15 10 L-2 * ? | Starts at 10:15 AM on the second-to-last day of every month |
| 0 15 10 ? * 6L | Starts at 10:15 AM on the last Friday of every month |
| 0 15 10 ? * 6L 2002-2005 | Starts at 10:15 AM on every last Friday of every month during the years 2002, 2003, 2004, and 2005 |
| 0 15 10 ? * 6#3 | Starts at 10:15 AM on the third Friday of every month |
| 0 0 12 1/5 * ? | Starts at 12:00 PM every 5 days of every month, beginning on the first day of each month. |
| 0 11 11 11 11 ? | Starts every November 11 at 11:11 AM. |

> The configuration must never start with `*`; this will cause execution every second, generating performance complications with a snowball effect if processing ever takes longer than 1 second.

## Service

Scheduled services must be programmed inside the folder:

- 📂 `server/services/jobs`

Netuno will automatically run these services and validates the `secret` parameter against the value in the configuration.

> The `secret` allows the service to be run externally without authentication, but securely.

The service will run periodically according to the defined parameterization.

To manually test the service execution, simply call the service's direct URL and pass the `secret` parameter.

For example, via GET:

- http://my-app.local.netu.no:9000/services/job/my-job?secret=\*\*\*\*\*

The `*****` at the end of the URL should be replaced with the real configured `secret` value.

## Example

Create the file at:

- 📂 `server/services/jobs/test.js`

In this service file, put the following code:
```javascript
_log.info("Test job!")
_out.print("Ok")
```

In your application's configuration JSON, adjust the parameterization as follows:

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

When you run the Netuno server in the terminal, the message `Test job!` will start appearing every 30 seconds.

If you open the URL in the browser:

- http://localhost:9000/services/jobs/test?secret=m3u-S3Gred0

It will return only `Ok`, and the message `Test job!` will appear in the terminal.

> In the `development` environment, `secret` validation has no effect, so you can run it without passing any `secret` and it will work; however, in another environment such as production, it is taken into account.

## Many Tasks

When there is a need to create many scheduled tasks, it is advisable to increase the number of threads used for the parallel execution of the various scheduled tasks.

This configuration is done in the `config.js` file located at the root of Netuno, by adding the example line:

```javascript
config.cronThreadCount = 10
```

> By default, this configuration allows only 3 threads.
> 
> Be careful to increase the number of threads according to the number of CPU cores.

Using too few threads to run many parallel schedules can result in the scheduled tasks stopping execution.

Therefore, if there are cases where tasks get stuck after some time, too many tasks are probably being run in parallel, so it is necessary to increase the number of threads.

## Programmatically

Netuno allows you to configure and control Cron Jobs programmatically.

This means that through code we can manage everything.

### Create New Task

To create a new task, we create its schedule using [`_cron.schedule`](/docs/library/resources/cron#schedule).

The [`_cron.schedule`](/docs/library/resources/cron#schedule) receives the following parameters:

1. Task identification key: `key`.
2. Execution scheduling time configuration.
3. Address of the service that must be run, that is, the: `URL`.
4. Additional parameters sent in the service call.

```javascript
_cron.schedule(
    'my-task',
    '0 0/60 * * * ?',
    `/services/jobs/product-update`,
    _val.map()
        .set('id', 123)
)
```

If it is necessary to create the tasks automatically when the application starts, this automation can be coded in the file:

- `server/core/_init.js`

This file runs whenever the application is initialized by the Netuno server.

### Remove Task

To remove a specific task, we use [`_cron.remove(key)`](/docs/library/resources/cron#remove).

Where `key` is the task identification key.

See the example:

```javascript
_cron.remove('my-task')
```

### List Tasks

Using [`_cron.schedules()`](/docs/library/resources/cron#schedules) we can list all configured tasks.

Example of how to list all scheduled tasks: 

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Key</td>`)
_out.println(`  <td>URL</td>`)
_out.println(`  <td>Parameters</td>`)
_out.println(`  <td>Description</td>`)
_out.println(`  <td>Last Execution</td>`)
_out.println(`  <td>Next Execution</td>`)
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
_out.println(`  <td>Stopped</td>`)
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

Example of how to resume all scheduled tasks and show when the tasks will run:

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Key</td>`)
_out.println(`  <td>Resumed</td>`)
_out.println(`  <td>Next Execution</td>`)
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