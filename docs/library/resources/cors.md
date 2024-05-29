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

#### <span style="font-weight: normal">_cors</span>.<span style="color: #008000">add</span>(<span style="color: #FF8000">config</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[CORS](../../resources/cors)</span>
##### Description

Adds the settings for a new CORS definition.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **config** | _[Values](../../objects/Values)_ | The new CORS configuration |

##### Return

( _[CORS](../../resources/cors)_ )

Current CORS instance.

---

## all

---

#### <span style="font-weight: normal">_cors</span>.<span style="color: #008000">all</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Gets all CORS settings.

##### Return

( _[Values](../../objects/Values)_ )

All CORS settings configured.

---

## getAll

---

#### <span style="font-weight: normal">_cors</span>.<span style="color: #008000">getAll</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Gets all CORS settings.

##### Return

( _[Values](../../objects/Values)_ )

All CORS settings configured.

---

## isOriginEnabled

---

#### <span style="font-weight: normal">_cors</span>.<span style="color: #008000">isOriginEnabled</span>(<span style="color: #FF8000">origin</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
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

#### <span style="font-weight: normal">_cors</span>.<span style="color: #008000">load</span>() : <span style="font-weight: normal; font-style: italic;">[CORS](../../resources/cors)</span>
##### Description

Performs source verification and makes header definitions in the HTTP request response.

##### Return

( _[CORS](../../resources/cors)_ )

Current CORS instance.

---

## removeOrigin

---

#### <span style="font-weight: normal">_cors</span>.<span style="color: #008000">removeOrigin</span>(<span style="color: #FF8000">origin</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[CORS](../../resources/cors)</span>
##### Description

Removes the origin in every configuration it exists.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **origin** | _string_ | Origin that comes in the HTTP header. |

##### Return

( _[CORS](../../resources/cors)_ )

If the origin was successfully disabled.

---

