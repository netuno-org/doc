---
id: env
title: Env
sidebar_label: Env
---

Allows you to consult the development environment that is configured in the `config.js` file which is found in the root of Netuno.
The configuration of the application that has its environment name is used.

```javascript
// Configured in $NETUNO_HOME/config.js:
config.env = 'development'
```

---

## current

---

#### _env.current() : string
##### Description

Name of the environment that is configured in Netuno.

##### How To Use

```javascript
_out.println(`Current Environment: ${_env.current()}`)
```

##### Return

( string )

The name of the current environment.

---

## is

---

#### _env.is(name: string) : _boolean_
##### Description

Serves to check the current environment, useful in `if` conditions.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| name | string | Compares whether the configured environment name in use is the same as the value passed. |

##### Return

( _boolean_ )

Whether the configured environment has the same name.

---

## isGraal

---

#### _env.isGraal() : _boolean_
##### Description

Serves to check if you are using Graal.

##### Return

( _boolean_ )

If Graal is in use, true will be returned.

---

