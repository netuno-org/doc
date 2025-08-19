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

#### <span style={{fontWeight: 'normal'}}>_cors</span>.<span style={{color: '#008000'}}>add</span>(<span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[CORS](/docs/library/resources/cors)</span>
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

#### <span style={{fontWeight: 'normal'}}>_cors</span>.<span style={{color: '#008000'}}>all</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Gets all CORS settings.

##### Return

( _[Values](/docs/library/objects/Values)_ )

All CORS settings configured.

---

## getAll

---

#### <span style={{fontWeight: 'normal'}}>_cors</span>.<span style={{color: '#008000'}}>getAll</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Gets all CORS settings.

##### Return

( _[Values](/docs/library/objects/Values)_ )

All CORS settings configured.

---

## isOriginEnabled

---

#### <span style={{fontWeight: 'normal'}}>_cors</span>.<span style={{color: '#008000'}}>isOriginEnabled</span>(<span style={{color: '#FF8000'}}>origin</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{fontWeight: 'normal'}}>_cors</span>.<span style={{color: '#008000'}}>load</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[CORS](/docs/library/resources/cors)</span>
##### Description

Performs source verification and makes header definitions in the HTTP request response.

##### Return

( _[CORS](/docs/library/resources/cors)_ )

Current CORS instance.

---

## removeOrigin

---

#### <span style={{fontWeight: 'normal'}}>_cors</span>.<span style={{color: '#008000'}}>removeOrigin</span>(<span style={{color: '#FF8000'}}>origin</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[CORS](/docs/library/resources/cors)</span>
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

