---
id: val
title: Val
sidebar_label: Val
---

Resource to interact with lists or maps with keys and values (dictionaries).

Allows the storage of data that can be represented as a list or as a data map (dictionary).

Once initialized as one of these structures, that is, as a list or as a map, it can no longer be used as another.

```javascript
const dataMap = _val.map()
    .set('id', 1)
    .set('name', 'Netuno')
    .set('site', 'www.netuno.org')
    .set('active', 'true')
const idAsString = dataMap.getString('id')
const name = dataMap['name']
const site = dataMap['site']
const active = dataMap.getBoolean('active')

const dataList = _val.list()
    .add('Linha 1')
    .push('Linha 2')
    .add('Linha 3')
for (const line of dataList) {
    _log.info(line)
}
```

---

## cast

---

#### _val.cast(obj: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Description

Turns an object into values if possible.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **obj** | _java.lang.Object_ | Object to be converted. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

The object converted to values.

---

## fromJSON

---

#### _val.fromJSON(text: string) : [Values](/docs/library/objects/Values)
##### Description

Gets the values of a string with an array or object in JSON.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _string_ | JSON content. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

The values object loaded with the structure and data obtained with the JSON string.

---

## global

---

#### _val.global() : [Values](/docs/library/objects/Values)
##### Description

Instance of type Values to store data that is only available during the execution of the HTTP request, it is useful to share data between scripts.

##### How To Use

```javascript
// Defines that client 10 is being processed:
const global = _val.global()
global.set('clienteId', 10)
_out.json(global)
```

##### Return

( _[Values](/docs/library/objects/Values)_ )

Data that is shared globally between the different scripts during the execution of the HTTP call.

---

## init

---

#### _val.init() : [Values](/docs/library/objects/Values)
##### Description

Initializes values in a generic way, the first data to be assigned will define whether it will be list or map.

##### Return

( _[Values](/docs/library/objects/Values)_ )

The new generic value object.

---

#### _val.init(obj: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.lang.Iterable) : [Values](/docs/library/objects/Values)
##### Description

Initializes values in a generic way, the first data to be assigned will define whether it will be list or map.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **obj** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.lang.Iterable_ | Object to load the newly created values object. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

The new values object starts with the data from the passed object.

---

#### _val.init(obj: java.lang.Object) : [Values](/docs/library/objects/Values)
##### Description

Initializes values in a generic way, the first data to be assigned will define whether it will be list or map.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **obj** | _java.lang.Object_ | Object to load the newly created values object. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

The new values object starts with the data from the passed object.

---

#### _val.init(obj: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [Values](/docs/library/objects/Values)
##### Description

Initializes values in a generic way, the first data to be assigned will define whether it will be list or map.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **obj** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ | Object to load the newly created values object. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

The new values object starts with the data from the passed object.

---

## is

---

#### _val.is(obj: java.lang.Object) : boolean
##### Description

Checks whether the object is of the value type.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **obj** | _java.lang.Object_ | Object to be validated if it is of the value type. |

##### Return

( _boolean_ )

Result of checking whether it is of type values or not.

---

## list

---

#### _val.list() : [Values](/docs/library/objects/Values)
##### Description

Starts a new object of values but of type list.

##### Return

( _[Values](/docs/library/objects/Values)_ )

The new values object started as list.

---

#### _val.list(values: java.lang.Object) : java.util.List
##### Description

Transforms an object from values to a normal list.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _java.lang.Object_ | Value object in list mode. |

##### Return

( _java.util.List_ )

A new normal list of items from the received value object.

---

#### _val.list(values: [Values](/docs/library/objects/Values)) : java.util.List
##### Description

Transforms an object from values to a normal list.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _[Values](/docs/library/objects/Values)_ | Value object in list mode. |

##### Return

( _java.util.List_ )

A new normal list of items from the received value object.

---

## map

---

#### _val.map() : [Values](/docs/library/objects/Values)
##### Description

Starts a new object of values but of type map.

##### Return

( _[Values](/docs/library/objects/Values)_ )

The new values object started as map.

---

#### _val.map(values: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Description

Transforms an object from values to a normal map.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _java.lang.Object_ | Value object in map mode. |

##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )

A new normal map with the data from the received values object.

---

#### _val.map(values: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Description

Transforms an object from values to a normal map.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _[Values](/docs/library/objects/Values)_ | Value object in map mode. |

##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )

A new normal map with the data from the received values object.

---

## persistent

---

#### _val.persistent() : [Values](/docs/library/objects/Values)
##### Description

Values type instance to store data that persists in memory, that is, the data stored here are available for all HTTP requests.

##### How To Use

```javascript
// Count kept in memory that increases with each refresh:
const persistent = _val.persistent()
persistent.set('counter', persistent.getInt('counter') + 1)
_out.json(persistent)
```

##### Return

( _[Values](/docs/library/objects/Values)_ )

Data that is kept in memory and is available for all requests.

---

## toJSON

---

#### _val.toJSON(values: java.util.List) : string
##### Description

Convert values to JSON.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _java.util.List_ | Values object to be transformed into JSON format. |

##### Return

( _string_ )

String JSON with the structure and data of the values object.

---

#### _val.toJSON(values: java.util.List, htmlEscape: boolean) : string
##### Description

Convert values to JSON.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _java.util.List_ | Values object to be transformed into JSON format. |
| **htmlEscape** | _boolean_ | Turns on automatic HTML formatting of special characters that are in text values, useful for transforming accents. |

##### Return

( _string_ )

String JSON with the structure and data of the values object.

---

#### _val.toJSON(values: java.util.List, htmlEscape: boolean, indentFactor: int) : string
##### Description

Convert values to JSON.

##### How To Use

```javascript
const list = _val.list()
    .add("Item 1")
    .add("Item 2")
    .add("Item 3")
const listString = _val.toJSON(list)
_out.println(`${listString}<br/>`)
const map = _val.map()
    .set("key1", "Value 1")
    .set("key2", "Value 2")
const mapString = _val.toJSON(map)
_out.println(`${mapString}<br/>`)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _java.util.List_ | Values object to be transformed into JSON format. |
| **htmlEscape** | _boolean_ | Turns on automatic HTML formatting of special characters that are in text values, useful for transforming accents. |
| **indentFactor** | _int_ | Number of spaces that should be used in JSON indentation. |

##### Return

( _string_ )

String JSON with the structure and data of the values object.

---

#### _val.toJSON(values: java.util.List, indentFactor: int) : string
##### Description

Convert values to JSON.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _java.util.List_ | Values object to be transformed into JSON format. |
| **indentFactor** | _int_ | Number of spaces that should be used in JSON indentation. |

##### Return

( _string_ )

String JSON with the structure and data of the values object.

---

#### _val.toJSON(values: [Values](/docs/library/objects/Values)) : string
##### Description

Convert values to JSON.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _[Values](/docs/library/objects/Values)_ | Values object to be transformed into JSON format. |

##### Return

( _string_ )

String JSON with the structure and data of the values object.

---

#### _val.toJSON(values: [Values](/docs/library/objects/Values), htmlEscape: boolean) : string
##### Description

Convert values to JSON.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _[Values](/docs/library/objects/Values)_ | Values object to be transformed into JSON format. |
| **htmlEscape** | _boolean_ | Turns on automatic HTML formatting of special characters that are in text values, useful for transforming accents. |

##### Return

( _string_ )

String JSON with the structure and data of the values object.

---

#### _val.toJSON(values: [Values](/docs/library/objects/Values), htmlEscape: boolean, indentFactor: int) : string
##### Description

Convert values to JSON.

##### How To Use

```javascript
const list = _val.list()
    .add("Item 1")
    .add("Item 2")
    .add("Item 3")
const listString = _val.toJSON(list)
_out.println(`${listString}<br/>`)
const map = _val.map()
    .set("key1", "Value 1")
    .set("key2", "Value 2")
const mapString = _val.toJSON(map)
_out.println(`${mapString}<br/>`)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _[Values](/docs/library/objects/Values)_ | Values object to be transformed into JSON format. |
| **htmlEscape** | _boolean_ | Turns on automatic HTML formatting of special characters that are in text values, useful for transforming accents. |
| **indentFactor** | _int_ | Number of spaces that should be used in JSON indentation. |

##### Return

( _string_ )

String JSON with the structure and data of the values object.

---

#### _val.toJSON(values: [Values](/docs/library/objects/Values), indentFactor: int) : string
##### Description

Convert values to JSON.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _[Values](/docs/library/objects/Values)_ | Values object to be transformed into JSON format. |
| **indentFactor** | _int_ | Number of spaces that should be used in JSON indentation. |

##### Return

( _string_ )

String JSON with the structure and data of the values object.

---

## toList

---

#### _val.toList(values: java.lang.Object) : java.util.List
##### Description

Transforms an object from values to a normal list.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _java.lang.Object_ | Value object in list mode. |

##### Return

( _java.util.List_ )

A new normal list of items from the received value object.

---

#### _val.toList(values: [Values](/docs/library/objects/Values)) : java.util.List
##### Description

Transforms an object from values to a normal list.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _[Values](/docs/library/objects/Values)_ | Value object in list mode. |

##### Return

( _java.util.List_ )

A new normal list of items from the received value object.

---

## toMap

---

#### _val.toMap(values: java.lang.Object) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Description

Transforms an object from values to a normal map.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _java.lang.Object_ | Value object in map mode. |

##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )

A new normal map with the data from the received values object.

---

#### _val.toMap(values: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map
##### Description

Transforms an object from values to a normal map.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _[Values](/docs/library/objects/Values)_ | Value object in map mode. |

##### Return

( _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ )

A new normal map with the data from the received values object.

---

