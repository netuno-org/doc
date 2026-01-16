---
id: cors
title: CORS
sidebar_label: CORS
---

Controls the Cross-Origin Resource Sharing (CORS).

Allows you to manage multiple origins and their headers.

---

## add

---

#### _cors.add(config: [Values](/docs/library/objects/Values)) : [CORS](/docs/library/resources/cors)
##### Description

Adds the settings for a new CORS definition.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[Values](/docs/library/objects/Values)_ | The new CORS configuration |

##### Return

( _[CORS](/docs/library/resources/cors)_ )

Current CORS instance.

---

## all

---

#### _cors.all() : [Values](/docs/library/objects/Values)
##### Description

Gets all CORS settings.

##### Return

( _[Values](/docs/library/objects/Values)_ )

All CORS settings configured.

---

## getAll

---

#### _cors.getAll() : [Values](/docs/library/objects/Values)
##### Description

Gets all CORS settings.

##### Return

( _[Values](/docs/library/objects/Values)_ )

All CORS settings configured.

---

## isOriginEnabled

---

#### _cors.isOriginEnabled(origin: string) : boolean
##### Description

Checks if a origin has already been defined and is active.d.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **origin** | _string_ | Origin that comes in the HTTP header. |

##### Return

( _boolean_ )

If the origin is enabled.

---

## load

---

#### _cors.load() : [CORS](/docs/library/resources/cors)
##### Description

Performs source verification and makes header definitions in the HTTP request response.

##### Return

( _[CORS](/docs/library/resources/cors)_ )

Current CORS instance.

---

## removeOrigin

---

#### _cors.removeOrigin(origin: string) : [CORS](/docs/library/resources/cors)
##### Description

Removes the origin in every configuration it exists.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **origin** | _string_ | Origin that comes in the HTTP header. |

##### Return

( _[CORS](/docs/library/resources/cors)_ )

If the origin was successfully disabled.

---

