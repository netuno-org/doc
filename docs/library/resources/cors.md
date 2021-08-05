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

#### _cors.add(origin: string) : _CORS_
##### Description

Adds the settings for a new source.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| origin | string | Origin that comes in the HTTP header. |

##### Return

( _CORS_ )

Current CORS instance.

---

#### _cors.add(origin: string, header: _[Values](../../objects/Values)_) : _CORS_
##### Description

Adds the settings for a new source.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| origin | string | Origin that comes in the HTTP header. |
| header | _[Values](../../objects/Values)_ | Definition of the header that will be loaded to the source. |

##### Return

( _CORS_ )

Current CORS instance.

---

#### _cors.add(origin: string, header: _[Values](../../objects/Values)_, enabled: _boolean_) : _CORS_
##### Description

Adds the settings for a new source.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| origin | string | Origin that comes in the HTTP header. |
| header | _[Values](../../objects/Values)_ | Definition of the header that will be loaded to the source. |
| enabled | _boolean_ | Defines whether this source is enabled. |

##### Return

( _CORS_ )

Current CORS instance.

---

## disable

---

#### _cors.disable(origin: string) : _boolean_
##### Description

Disable a origin that has already been defined.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| origin | string | Origin that comes in the HTTP header. |

##### Return

( _boolean_ )

If the origin was successfully disabled.

---

## enable

---

#### _cors.enable(origin: string) : _boolean_
##### Description

Enables a origin that has already been defined.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| origin | string | Origin that comes in the HTTP header. |

##### Return

( _boolean_ )

If the origin was successfully enabled.

---

## isEnabled

---

#### _cors.isEnabled(origin: string) : _boolean_
##### Description

Enables a source that has already been defined.

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

#### _cors.load() : _CORS_
##### Description

Performs source verification and makes header definitions in the HTTP request response.

##### Return

( _CORS_ )

Current CORS instance.

---

