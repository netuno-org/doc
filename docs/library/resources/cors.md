---
id: cors
title: CORS
sidebar_label: CORS
---

Controls the Cross-Origin Resource Sharing (CORS).<br>
Allows you to manage multiple origins and their headers.

---

## add

---

#### _cors.add(config: _[Values](../../objects/Values)_) : _[CORS](../../resources/CORS)_
##### Description

Adds the settings for a new CORS definition.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| config | _[Values](../../objects/Values)_ | The new CORS configuration |

##### Return

( _[CORS](../../resources/CORS)_ )

Current CORS instance.

---

## all

---

#### _cors.all() : _[Values](../../objects/Values)_
##### Description

Gets all CORS settings.

##### Return

( _[Values](../../objects/Values)_ )

All CORS settings configured.

---

## getAll

---

#### _cors.getAll() : _[Values](../../objects/Values)_
##### Description

Gets all CORS settings.

##### Return

( _[Values](../../objects/Values)_ )

All CORS settings configured.

---

## isOriginEnabled

---

#### _cors.isOriginEnabled(origin: string) : _boolean_
##### Description

Checks if a origin has already been defined and is active.d.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| origin | string | Origin that comes in the HTTP header. |

##### Return

( _boolean_ )

If the origin is enabled.

---

## load

---

#### _cors.load() : _[CORS](../../resources/CORS)_
##### Description

Performs source verification and makes header definitions in the HTTP request response.

##### Return

( _[CORS](../../resources/CORS)_ )

Current CORS instance.

---

## removeOrigin

---

#### _cors.removeOrigin(origin: string) : _[CORS](../../resources/CORS)_
##### Description

Removes the origin in every configuration it exists.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| origin | string | Origin that comes in the HTTP header. |

##### Return

( _[CORS](../../resources/CORS)_ )

If the origin was successfully disabled.

---

