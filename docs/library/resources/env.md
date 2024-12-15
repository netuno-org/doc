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

#### <span style={{fontWeight: 'normal'}}>_env</span>.<span style={{color: '#008000'}}>current</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Name of the environment that is configured in Netuno.

##### How To Use

```javascript
_out.println(`Current Environment: ${_env.current()}`)
```

##### Return

( _string_ )

The name of the current environment.

---

## is

---

#### <span style={{fontWeight: 'normal'}}>_env</span>.<span style={{color: '#008000'}}>is</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Serves to check the current environment, useful in `if` conditions.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | Compares whether the configured environment name in use is the same as the value passed. |

##### Return

( _boolean_ )

Whether the configured environment has the same name.

---

## isGraal

---

#### <span style={{fontWeight: 'normal'}}>_env</span>.<span style={{color: '#008000'}}>isGraal</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Serves to check if you are using Graal.

##### Return

( _boolean_ )

If Graal is in use, true will be returned.

---

