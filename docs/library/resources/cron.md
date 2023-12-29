---
id: cron
title: Cron
sidebar_label: Cron
---

Recourse to scheduling of periodic executions. 
This resource uses the library <a href="http://www.quartz-scheduler.org/" target="_blank">Quartz Scheduler</a> for execution scheduling.
When using Cron, you must configure the expression that defines when the job will run.
Below are indications of how the configuration should be performed.

#### Cron expressions supported formats

|FIELD NAME |	MANDATORY |	ACCEPTED VALUES | ALLOWED SPECIAL CHARACTERS |
| ------- |:------:|:-----------:|--------------|
| Seconds |	YES |	0-59	| , - * / |
| Minutes | YES	| 0-59	| , - * / |
| Hours	| YES	| 0-23	| , - * / |
| Month's day |	YES	| 1-31	| , - * ? / L W |
| Month	| YES	| 1-12 or JAN-DEC	| , - * / |
| Weekday	| YES	| 1-7 or SUN-SAT	| , - * ? / L # |
| Year	| NO	| empty, 1970-2099	| , - * / |

#### Examples of Cron expressions

|EXPRESSION | MEANING |
| ------- |------|
| 1 * * * * ?	| It runs on the second number 1 of every minute. |
| 0 0 12 * * ?	| Starts at 12:00 a.m. every day |
| 0 15 10 ? * *	| Starts at 10:15 a.m. every day |
| 0 15 10 * * ?	| Starts at 10:15 a.m. every day |
| 0 15 10 * * ? *	| Starts at 10:15 a.m. every day |
| 0 15 10 * * ? 2005	| Starts at 10:15 a.m. every day during 2005 |
| 0 * 14 * * ?	| Starts every minute starting at 2:00 p.m. and ends at 2:59 p.m., every day |
| 0 0/5 14 * * ?	| Starts every 5 minutes starting at 2:00 p.m. and ends at 2:55 p.m. every day |
| 0 0/5 14,18 * * ?	| It starts every 5 minutes starting at 2:00 p.m. and ends at 2:55 p.m. Afterwards, it starts every 5 minutes starting at 6:00 p.m. and ends at 6:55 p.m., every day |
| 0 0-5 14 * * ?	| Starts every minute starting at 2:00 p.m. and ends at 2:05 p.m. every day |
| 0 10,44 14 ? 3 WED | It starts at 2:10 p.m. and at 2:44 p.m. every Wednesday in March. |
| 0 15 10 ? * MON-FRI	| Starts at 10:15 a.m. every working day of the week (Monday to Friday) |
| 0 15 10 15 * ?	| Starts at 10:15 a.m. on the 15th of each month |
| 0 15 10 L * ?	| Starts at 10:15 a.m. on the last day of each month |
| 0 15 10 L-2 * ?	| Starts at 10:15 a.m. on the penultimate day of each month |
| 0 15 10 ? * 6L	| Starts at 10:15 a.m. on the last Friday of every month |
| 0 15 10 ? * 6L	| Starts at 10:15 a.m. on the last Friday of every month |
| 0 15 10 ? * 6L 2002-2005	| Starts at 10:15 a.m. every last Friday of every month during 2002, 2003, 2004 and 2005 |
| 0 15 10 ? * 6#3	| Starts at 10:15 a.m. on the third Friday of every month |
| 0 0 12 1/5 * ?	| It starts at 12:00 a.m. every 5 days of each month, starting on the first day of each month. |
| 0 11 11 11 11 ?	| It starts every 11th of November at 11:11 a.m. |

---

## checkExists

---

#### _cron.checkExists(key: string) : _boolean_
##### Description

Checks if the scheduled service key exists.

##### How To Use

```javascript
if (_cron.checkExists("pricesUpdate")) {
    _out.print("The scheduled service 'pricesUpdate' exists!")
}

```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string | Job ID key name. |

##### Return

( _boolean_ )

Whether the scheduled service was found.

---

## config

---

#### _cron.config() : _void_
##### Description

Configures periodic scheduling by importing the configuration file.

##### Return

( _void_ )


---

## delete

---

#### _cron.delete(key: string) : _boolean_
##### Description

Removes a service execution schedule.

##### How To Use

```javascript
_cron.delete("pricesUpdate")

```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string | Job ID key name. |

##### Return

( _boolean_ )

Whether it was possible to delete the scheduled service.

---

## interrupt

---

#### _cron.interrupt(key: string) : _boolean_
##### Description

Interrupts a service execution schedule.

##### How To Use

```javascript
_cron.interrupt("pricesUpdate")

```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string | Job ID key name. |

##### Return

( _boolean_ )

Whether it was possible to stop the scheduled service.

---

## pause

---

#### _cron.pause(key: string) : _boolean_
##### Description

Changes the execution state to **pause**, in this state the associated service is not executed.

##### How To Use

```javascript
_cron.pause("pricesUpdate")

```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string | Job ID key name. |

##### Return

( _boolean_ )

Whether it was possible to pause the scheduled service.

---

## remove

---

#### _cron.remove(key: string) : _boolean_
##### Description

Removes a service execution schedule.

##### How To Use

```javascript
_cron.remove("pricesUpdate")

```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string | Job ID key name. |

##### Return

( _boolean_ )

Whether it was possible to delete the scheduled service.

---

## resume

---

#### _cron.resume(key: string) : _boolean_
##### Description

Changes the execution state to **resume**, after a schedule is in the _pause_ state, it can be reactivated via _resume_.

##### How To Use

```javascript
_cron.resume("pricesUpdate")

```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string | Job ID key name. |

##### Return

( _boolean_ )

Whether it was possible to continue the scheduled service.

---

## schedule

---

#### _cron.schedule(key: string, config: string, url: string) : _[Cron](../../resources/Cron)_
##### Description

Creates a service execution schedule.

##### How To Use

```javascript
_cron.schedule("updatePrices", "1 * * * * ?", "/services/jobs/update-prices",
    _val.map()
        .set("categoryId", 1)
        .set("productId", 1)
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string | Job ID key name. |
| config | string | Cron Scheduling Time Expression, see table above. |
| url | string | URL to be run by the job. |

##### Return

( _[Cron](../../resources/Cron)_ )

The current Cron instance.

---

#### _cron.schedule(key: string, config: string, url: string, params: _[Values](../../objects/Values)_) : _[Cron](../../resources/Cron)_
##### Description

Creates a service execution schedule.

##### How To Use

```javascript
_cron.schedule("updatePrices", "1 * * * * ?", "/services/jobs/update-prices",
    _val.map()
        .set("categoryId", 1)
        .set("productId", 1)
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string | Job ID key name. |
| config | string | Cron Scheduling Time Expression, see table above. |
| url | string | URL to be run by the job. |
| params | _[Values](../../objects/Values)_ | Data to pass as a parameter to service. |

##### Return

( _[Cron](../../resources/Cron)_ )

The current Cron instance.

---

## schedules

---

#### _cron.schedules() : _[Values](../../objects/Values)_
##### Description

List of all application service schedules.

##### Return

( _[Values](../../objects/Values)_ )

The list of all scheduled services of the application that are configured in Cron.

---

