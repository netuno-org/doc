---
id: exec
title: Exec
sidebar_label: Exec
---

Functionalities to aid code execution.
It performs the execution of other scripts, it also supports the execution of scripts in other programming languages.
Executes the indicated script, returning its output.
Main functions:
- [bind](#bind)
- [core](#core)
- [service](#service)
- [sleep](#sleep)
- [stop](#stop)
- [gc](#gc)


```javascript
// Run another App script in `server/core/`
const outputOutput = _exec.core("other-script");

// Run another App script in `server/services/`
const outputService = _exec.service("other-service");

// Pause for 2 seconds:`
_exec.sleep(2000);

// Execution stop:`
_exec.stop();

```

---

## add

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>add</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>element</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **element** | _java.lang.Object_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>add</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

## addAll

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>addAll</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>c</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Collection</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **c** | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>addAll</span>(<span style={{color: '#FF8000'}}>c</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Collection</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## afterClose

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>afterClose</span>(<span style={{color: '#FF8000'}}>function</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Function</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _java.util.function.Function_ |   |

##### Return

( _void_ )


---

## as

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>as</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>as</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>oDefault</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |
| **oDefault** | _java.lang.Object_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

## asBoolean

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asBoolean</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asBoolean</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _boolean_ |   |

##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asBoolean</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asBoolean</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _boolean_ |   |

##### Return

( _boolean_ )


---

## asByte

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asByte</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _byte_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asByte</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _byte_ |   |

##### Return

( _byte_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asByte</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _byte_ |   |

##### Return

( _byte_ )


---

## asCalendar

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asCalendar</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Calendar</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.Calendar_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asCalendar</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Calendar</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Calendar</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.Calendar_ |   |

##### Return

( _java.util.Calendar_ )


---

## asDate

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asDate</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Date</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.Date_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asDate</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Date</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Date</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.Date_ |   |

##### Return

( _java.util.Date_ )


---

## asDouble

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asDouble</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _double_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asDouble</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _double_ |   |

##### Return

( _double_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asDouble</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _double_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asDouble</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _double_ |   |

##### Return

( _double_ )


---

## asFile

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asFile</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _[File](../objects/File)_ )


---

## asFloat

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asFloat</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _float_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asFloat</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _float_ |   |

##### Return

( _float_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asFloat</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _float_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asFloat</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _float_ |   |

##### Return

( _float_ )


---

## asHTMLDecode

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asHTMLDecode</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _string_ )


---

## asHTMLEncode

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asHTMLEncode</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _string_ )


---

## asInstant

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asInstant</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.Instant_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asInstant</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.Instant_ |   |

##### Return

( _java.time.Instant_ )


---

## asInt

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asInt</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _int_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asInt</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _int_ |   |

##### Return

( _int_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asInt</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _short_ |   |

##### Return

( _int_ )


---

## asList

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asList</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asList</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>claz</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Class</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **claz** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asList</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asList</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>claz</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Class</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |
| **claz** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asList</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asList</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>claz</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Class</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **claz** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asList</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asList</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>claz</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Class</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |
| **claz** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

## asLocalDate

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asLocalDate</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDate</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.LocalDate_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asLocalDate</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDate</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDate</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.LocalDate_ |   |

##### Return

( _java.time.LocalDate_ )


---

## asLocalDateTime

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asLocalDateTime</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asLocalDateTime</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.LocalDateTime_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

## asLocalTime

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asLocalTime</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asLocalTime</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.LocalTime_ |   |

##### Return

( _java.time.LocalTime_ )


---

## asLong

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asLong</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _long_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asLong</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _long_ |   |

##### Return

( _long_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asLong</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _long_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asLong</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _long_ |   |

##### Return

( _long_ )


---

## asMap

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asMap</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asMap</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Return

( _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asMap</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asMap</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Return

( _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ )


---

## asSQLDate

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asSQLDate</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Date</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.sql.Date_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asSQLDate</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Date</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Date</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.sql.Date_ |   |

##### Return

( _java.sql.Date_ )


---

## asSQLTime

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asSQLTime</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Time</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.sql.Time_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asSQLTime</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Time</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Time</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.sql.Time_ |   |

##### Return

( _java.sql.Time_ )


---

## asSQLTimestamp

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asSQLTimestamp</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Timestamp</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.sql.Timestamp_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asSQLTimestamp</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Timestamp</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Timestamp</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.sql.Timestamp_ |   |

##### Return

( _java.sql.Timestamp_ )


---

## asShort

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asShort</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _short_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asShort</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _short_ |   |

##### Return

( _short_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asShort</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _short_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asShort</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _short_ |   |

##### Return

( _short_ )


---

## asString

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asString</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asString</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asString</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asString</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asString</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>charsetName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |
| **charsetName** | _string_ |   |

##### Return

( _string_ )


---

## asUID

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asUID</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asUID</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asUID</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.UUID_ |   |

##### Return

( _java.util.UUID_ )


---

## asUUID

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asUUID</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asUUID</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asUUID</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.UUID_ |   |

##### Return

( _java.util.UUID_ )


---

## asValues

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asValues</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Description

Gets the object associated with the index and then casts to Values (Dictionary or List).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ | The index to get the associated object. |

##### Return

( _[Values](../objects/Values)_ )

Object converted to Values.

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asValues</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Description

Gets the object associated with the index and then casts to Values (Dictionary or List).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ | The index to get the associated object. |
| **defaultValue** | _java.lang.Object_ | If it fails to get the value as an object in Values then it returns this default value instead. |

##### Return

( _[Values](../objects/Values)_ )

Object converted to Values.

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asValues</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Description

Gets the object associated with the key and then casts to Values (Dictionary or List).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ | The key to get the associated object. |

##### Return

( _[Values](../objects/Values)_ )

Object converted to Values.

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>asValues</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Description

Gets the object associated with the key and then casts to Values (Dictionary or List).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ | The key to get the associated object. |
| **defaultValue** | _java.lang.Object_ | If it fails to get the value as an object in Values then it returns this default value instead. |

##### Return

( _[Values](../objects/Values)_ )

Object converted to Values.

---

## beforeClose

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>beforeClose</span>(<span style={{color: '#FF8000'}}>function</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Function</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _java.util.function.Function_ |   |

##### Return

( _void_ )


---

## bind

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>bind</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Exec](../resources/exec)</span>
##### Description

Transitions variables between scripts, including between different programming languages.

##### How To Use

```javascript
const originalVar = "test";
_exec    .bind("transitVar", originalVar)    .core("another-script-maybe-in-another-language");
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ | Variable name that will be available in the other script that will be executed. |
| **value** | _java.lang.Object_ | Object to be passed to the other script that will be executed. |

##### Return

( _[Exec](../resources/exec)_ )


---

## clear

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>clear</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Return

( _void_ )


---

## cloneJSON

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>cloneJSON</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Return

( _[Values](../objects/Values)_ )


---

## compute

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>compute</span>(<span style={{color: '#FF8000'}}>arg0</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>arg1</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.BiFunction</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.util.function.BiFunction_ |   |

##### Return

( _java.lang.Object_ )


---

## computeIfAbsent

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>computeIfAbsent</span>(<span style={{color: '#FF8000'}}>arg0</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>arg1</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Function</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.util.function.Function_ |   |

##### Return

( _java.lang.Object_ )


---

## computeIfPresent

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>computeIfPresent</span>(<span style={{color: '#FF8000'}}>arg0</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>arg1</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.BiFunction</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.util.function.BiFunction_ |   |

##### Return

( _java.lang.Object_ )


---

## contains

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>contains</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>contains</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## containsAll

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>containsAll</span>(<span style={{color: '#FF8000'}}>c</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Collection</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## containsKey

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>containsKey</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## containsValue

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>containsValue</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## core

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>core</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ScriptResult](../objects/ScriptResult)</span>
##### Description

Execution of scripts that are in the `server/core/` folder.

##### How To Use

```javascript
_exec.core("another-script-maybe-in-another-language");
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ | Script path with source in `core/` to execute. |

##### Return

( _[ScriptResult](../objects/ScriptResult)_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>core</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ScriptResult](../objects/ScriptResult)</span>
##### Description

Execution of scripts that are in the `server/core/` folder.

##### How To Use

```javascript
_exec.core("another-script-maybe-in-another-language");
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ | Script path with source in `core/` to execute. |
| **path** | _boolean_ | Script path with source in `core/` to execute. |

##### Return

( _[ScriptResult](../objects/ScriptResult)_ )


---

## debug

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>debug</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Return

( _void_ )


---

## ensureJail

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>ensureJail</span>(<span style={{color: '#FF8000'}}>jailPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Set the security restriction on a specific directory for processed objects of the file type, it can only be set once.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **jailPath** | _string_ | Path where files will be restricted. |

##### Return

( _void_ )


---

## entrySet

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>entrySet</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Set</span>
##### Return

( _java.util.Set_ )


---

## filter

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>filter</span>(<span style={{color: '#FF8000'}}>p</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Predicate</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **p** | _java.util.function.Predicate_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>filter</span>(<span style={{color: '#FF8000'}}>function</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.graalvm.polyglot.Value</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

## find

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>find</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>find</span>(<span style={{color: '#FF8000'}}>p</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Predicate</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **p** | _java.util.function.Predicate_ |   |

##### Return

( _java.lang.Object_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>find</span>(<span style={{color: '#FF8000'}}>function</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.graalvm.polyglot.Value</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Return

( _java.lang.Object_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>find</span>(<span style={{color: '#FF8000'}}>filter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **filter** | _[Values](../objects/Values)_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

## forEach

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>forEach</span>(<span style={{color: '#FF8000'}}>action</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.BiConsumer</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **action** | _java.util.function.BiConsumer_ |   |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>forEach</span>(<span style={{color: '#FF8000'}}>action</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Consumer</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **action** | _java.util.function.Consumer_ |   |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>forEach</span>(<span style={{color: '#FF8000'}}>function</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.graalvm.polyglot.Value</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Return

( _void_ )


---

## forceList

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>forceList</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Return

( _[Values](../objects/Values)_ )


---

## forceMap

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>forceMap</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Return

( _[Values](../objects/Values)_ )


---

## fromJSON

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>fromJSON</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>fromJSON</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.net.Remote$Response</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _org.netuno.psamata.net.Remote$Response_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

## functions

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>functions</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Functions](../objects/Functions)</span>
##### Description

Manages the execution of functions.

##### Return

( _[Functions](../objects/Functions)_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>functions</span>(<span style={{color: '#FF8000'}}>functions</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Function[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Functions](../objects/Functions)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **functions** | _java.util.function.Function[]_ |   |

##### Return

( _[Functions](../objects/Functions)_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>functions</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Functions](../objects/Functions)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _java.lang.Object_ |   |

##### Return

( _[Functions](../objects/Functions)_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>functions</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>functions</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Function[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Functions](../objects/Functions)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _java.lang.Object_ |   |
| **functions** | _java.util.function.Function[]_ |   |

##### Return

( _[Functions](../objects/Functions)_ )


---

## gc

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>gc</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Performs memory cleanup by running the garbage collector ([JVM garbage collector](https://www.baeldung.com/jvm-garbage-collectors)).

##### How To Use

```javascript
// Free up memory by running Garbage Collector:
_exec.gc();
```

##### Return

( _void_ )


---

## get

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>get</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Description

Gets the original object associated with the key.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _int_ | Key to get the object to associate. |

##### Return

( _java.lang.Object_ )

Original object without conversions.

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>get</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Description

Gets the original object associated with the key.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _java.lang.Object_ | Key to get the object to associate. |

##### Return

( _java.lang.Object_ )

Original object without conversions.

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>get</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Description

Gets the original object associated with the key.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ | Key to get the object to associate. |

##### Return

( _java.lang.Object_ )

Original object without conversions.

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>get</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Class</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Description

Gets the original object associated with the key, but cast for the specified class type.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ | Key to get the associated object. |
| **type** | _java.lang.Class_ | Class representing the type of object that should be cast. |

##### Return

( _java.lang.Object_ )

Original object converted to the type of the defined class.

---

## getBoolean

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getBoolean</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getBoolean</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _boolean_ |   |

##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getBoolean</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getBoolean</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _boolean_ |   |

##### Return

( _boolean_ )


---

## getByte

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getByte</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _byte_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getByte</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _byte_ |   |

##### Return

( _byte_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getByte</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _byte_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getByte</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _byte_ |   |

##### Return

( _byte_ )


---

## getCalendar

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getCalendar</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Calendar</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.Calendar_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getCalendar</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Calendar</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Calendar</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.Calendar_ |   |

##### Return

( _java.util.Calendar_ )


---

## getDate

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getDate</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Date</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.Date_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getDate</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Date</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Date</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.Date_ |   |

##### Return

( _java.util.Date_ )


---

## getDouble

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getDouble</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _double_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getDouble</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _double_ |   |

##### Return

( _double_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getDouble</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _double_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getDouble</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _double_ |   |

##### Return

( _double_ )


---

## getFile

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getFile</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _[File](../objects/File)_ )


---

## getFloat

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getFloat</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _float_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getFloat</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _float_ |   |

##### Return

( _float_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getFloat</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _float_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getFloat</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _float_ |   |

##### Return

( _float_ )


---

## getForceList

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getForceList</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## getForceMap

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getForceMap</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## getHTMLDecode

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getHTMLDecode</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _string_ )


---

## getHTMLEncode

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getHTMLEncode</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _string_ )


---

## getInstant

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getInstant</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.Instant_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getInstant</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.Instant</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.Instant_ |   |

##### Return

( _java.time.Instant_ )


---

## getInt

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getInt</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _int_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getInt</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _int_ |   |

##### Return

( _int_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getInt</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _int_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getInt</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _int_ |   |

##### Return

( _int_ )


---

## getKeys

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getKeys</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Set</span>
##### Return

( _java.util.Set_ )


---

## getList

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getList</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getList</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>claz</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Class</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **claz** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getList</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getList</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>claz</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Class</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |
| **claz** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getList</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getList</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>claz</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Class</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **claz** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getList</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Return

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getList</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>claz</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Class</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |
| **claz** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

## getLocalDate

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getLocalDate</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDate</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.LocalDate_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getLocalDate</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDate</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDate</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.LocalDate_ |   |

##### Return

( _java.time.LocalDate_ )


---

## getLocalDateTime

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getLocalDateTime</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getLocalDateTime</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalDateTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.LocalDateTime_ |   |

##### Return

( _java.time.LocalDateTime_ )


---

## getLocalTime

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getLocalTime</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.time.LocalTime_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getLocalTime</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.time.LocalTime</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.time.LocalTime_ |   |

##### Return

( _java.time.LocalTime_ )


---

## getLong

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getLong</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _long_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getLong</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _long_ |   |

##### Return

( _long_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getLong</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _long_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getLong</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _long_ |   |

##### Return

( _long_ )


---

## getMap

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getMap</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getMap</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Return

( _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getMap</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getMap</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.lang.Object_ |   |

##### Return

( _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ )


---

## getOrDefault

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getOrDefault</span>(<span style={{color: '#FF8000'}}>arg0</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>arg1</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

## getSQLDate

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getSQLDate</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Date</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.sql.Date_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getSQLDate</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Date</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Date</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.sql.Date_ |   |

##### Return

( _java.sql.Date_ )


---

## getSQLTime

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getSQLTime</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Time</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.sql.Time_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getSQLTime</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Time</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Time</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.sql.Time_ |   |

##### Return

( _java.sql.Time_ )


---

## getSQLTimestamp

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getSQLTimestamp</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Timestamp</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.sql.Timestamp_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getSQLTimestamp</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Timestamp</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.sql.Timestamp</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.sql.Timestamp_ |   |

##### Return

( _java.sql.Timestamp_ )


---

## getShort

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getShort</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _short_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getShort</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _short_ |   |

##### Return

( _short_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getShort</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _short_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getShort</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _short_ |   |

##### Return

( _short_ )


---

## getSize

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getSize</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Return

( _int_ )


---

## getString

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getString</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getString</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getString</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getString</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getString</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>charsetName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |
| **charsetName** | _string_ |   |

##### Return

( _string_ )


---

## getUID

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getUID</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getUID</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getUID</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.UUID_ |   |

##### Return

( _java.util.UUID_ )


---

## getURLCharacterEncoding

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getURLCharacterEncoding</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the character encoding to be used in formatting for URL (_QueryString_).

##### Return

( _string_ )

Character encoding code.

---

## getUUID

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getUUID</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getUUID</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _java.util.UUID_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getUUID</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **defaultValue** | _java.util.UUID_ |   |

##### Return

( _java.util.UUID_ )


---

## getValues

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getValues</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Collection</span>
##### Description

Gets all object values stored in both dictionary and list mode.

##### Return

( _java.util.Collection_ )

List of all obtained values.

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getValues</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Description

Gets the object associated with the index and then casts to Values (Dictionary or List).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ | The index to get the associated object. |

##### Return

( _[Values](../objects/Values)_ )

Object converted to Values.

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getValues</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Description

Gets the object associated with the index and then casts to Values (Dictionary or List).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ | The index to get the associated object. |
| **defaultValue** | _java.lang.Object_ | If it fails to get the value as an object in Values then it returns this default value instead. |

##### Return

( _[Values](../objects/Values)_ )

Object converted to Values.

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getValues</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Description

Gets the object associated with the key and then casts to Values (Dictionary or List).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ | The key to get the associated object. |

##### Return

( _[Values](../objects/Values)_ )

Object converted to Values.

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>getValues</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Description

Gets the object associated with the key and then casts to Values (Dictionary or List).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ | The key to get the associated object. |
| **defaultValue** | _java.lang.Object_ | If it fails to get the value as an object in Values then it returns this default value instead. |

##### Return

( _[Values](../objects/Values)_ )

Object converted to Values.

---

## has

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>has</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>has</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>has</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## hasKey

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>hasKey</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _boolean_ )


---

## hasValue

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>hasValue</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## indexOf

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>indexOf</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _int_ )


---

## is

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>is</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## isEmpty

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>isEmpty</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isJail

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>isJail</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Check if the restriction is active for all associated files to be loaded only from a specific directory.

##### Return

( _boolean_ )

If the restriction on associated files is active.

---

## isList

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>isList</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>isList</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## isLockedAsReadOnly

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>isLockedAsReadOnly</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Check if it is locked in read-only mode.

##### Return

( _boolean_ )

Whether it is in read-only mode or not.

---

## isMap

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>isMap</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>isMap</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## isMergeable

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>isMergeable</span>(<span style={{color: '#FF8000'}}>object</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## iterator

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>iterator</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Iterator</span>
##### Return

( _java.util.Iterator_ )


---

## join

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>join</span>(<span style={{color: '#FF8000'}}>splitter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **splitter** | _string_ |   |

##### Return

( _string_ )


---

## keySet

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>keySet</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Set</span>
##### Return

( _java.util.Set_ )


---

## keys

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>keys</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Set</span>
##### Return

( _java.util.Set_ )


---

## keysSorted

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>keysSorted</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Set</span>
##### Return

( _java.util.Set_ )


---

## keysToString

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>keysToString</span>(<span style={{color: '#FF8000'}}>splitter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **splitter** | _string_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>keysToString</span>(<span style={{color: '#FF8000'}}>map</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>, <span style={{color: '#FF8000'}}>splitter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **map** | _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |

##### Return

( _string_ )


---

## lastIndexOf

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>lastIndexOf</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _int_ )


---

## length

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>length</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Return

( _int_ )


---

## list

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>list</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Return

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>list</span>(<span style={{color: '#FF8000'}}>cls</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Class</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **cls** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

## listIterator

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>listIterator</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.ListIterator</span>
##### Return

( _java.util.ListIterator_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>listIterator</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.ListIterator</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |

##### Return

( _java.util.ListIterator_ )


---

## listOfValues

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>listOfValues</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Return

( _java.util.List_ )


---

## loadJSON

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>loadJSON</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](../objects/InputStream)_ |   |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>loadJSON</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.Reader</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _java.io.Reader_ |   |

##### Return

( _void_ )


---

## loadProperties

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>loadProperties</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](../objects/InputStream)_ |   |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>loadProperties</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.Reader</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _java.io.Reader_ |   |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>loadProperties</span>(<span style={{color: '#FF8000'}}>properties</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Properties</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **properties** | _java.util.Properties_ |   |

##### Return

( _void_ )


---

## loadPropertiesFromString

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>loadPropertiesFromString</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _string_ |   |

##### Return

( _void_ )


---

## lockAsReadOnly

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>lockAsReadOnly</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Description

Check if it is locked in read-only mode.

##### Return

( _[Values](../objects/Values)_ )

Whether it is in read-only mode or not.

---

## map

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>map</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>
##### Return

( _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ )


---

## merge

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>merge</span>(<span style={{color: '#FF8000'}}>object</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>merge</span>(<span style={{color: '#FF8000'}}>arg0</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>arg1</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>arg2</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.BiFunction</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |
| **arg2** | _java.util.function.BiFunction_ |   |

##### Return

( _java.lang.Object_ )


---

## newList

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>newList</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Return

( _[Values](../objects/Values)_ )


---

## newMap

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>newMap</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Return

( _[Values](../objects/Values)_ )


---

## of

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>of</span>(<span style={{color: '#FF8000'}}>array</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **array** | _java.lang.Object[]_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>of</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>of</span>(<span style={{color: '#FF8000'}}>list</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **list** | _java.util.List_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>of</span>(<span style={{color: '#FF8000'}}>map</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **map** | _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

## ofList

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>ofList</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

## ofMap

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>ofMap</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

## onError

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>onError</span>(<span style={{color: '#FF8000'}}>function</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Function</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _java.util.function.Function_ |   |

##### Return

( _void_ )


---

## push

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>push</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

## put

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>put</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _java.lang.Object_ |   |
| **value** | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>put</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

## putAll

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>putAll</span>(<span style={{color: '#FF8000'}}>m</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **m** | _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ |   |

##### Return

( _void_ )


---

## putIfAbsent

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>putIfAbsent</span>(<span style={{color: '#FF8000'}}>arg0</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>arg1</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

## remove

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>remove</span>(<span style={{color: '#FF8000'}}>i</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **i** | _int_ |   |

##### Return

( _java.lang.Object_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>remove</span>(<span style={{color: '#FF8000'}}>o</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **o** | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>remove</span>(<span style={{color: '#FF8000'}}>arg0</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>arg1</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## removeAll

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>removeAll</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>removeAll</span>(<span style={{color: '#FF8000'}}>c</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Collection</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## replace

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>replace</span>(<span style={{color: '#FF8000'}}>arg0</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>arg1</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |

##### Return

( _java.lang.Object_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>replace</span>(<span style={{color: '#FF8000'}}>arg0</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>arg1</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>arg2</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _java.lang.Object_ |   |
| **arg1** | _java.lang.Object_ |   |
| **arg2** | _java.lang.Object_ |   |

##### Return

( _boolean_ )


---

## replaceAll

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>replaceAll</span>(<span style={{color: '#FF8000'}}>arg0</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.BiFunction</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _java.util.function.BiFunction_ |   |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>replaceAll</span>(<span style={{color: '#FF8000'}}>operator</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.UnaryOperator</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **operator** | _java.util.function.UnaryOperator_ |   |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>replaceAll</span>(<span style={{color: '#FF8000'}}>function</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.graalvm.polyglot.Value</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Return

( _void_ )


---

## retainAll

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>retainAll</span>(<span style={{color: '#FF8000'}}>c</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Collection</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **c** | _java.util.Collection_ |   |

##### Return

( _boolean_ )


---

## safeString

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>safeString</span>(<span style={{color: '#FF8000'}}>object</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **object** | _java.lang.Object_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>safeString</span>(<span style={{color: '#FF8000'}}>object</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>defaultValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **object** | _java.lang.Object_ |   |
| **defaultValue** | _string_ |   |

##### Return

( _string_ )


---

## saveJSON

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>saveJSON</span>(<span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](../objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](../objects/OutputStream)_ |   |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>saveJSON</span>(<span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.Writer</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _java.io.Writer_ |   |

##### Return

( _void_ )


---

## saveProperties

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>saveProperties</span>(<span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](../objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](../objects/OutputStream)_ |   |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>saveProperties</span>(<span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.io.Writer</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _java.io.Writer_ |   |

##### Return

( _void_ )


---

## search

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>search</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>search</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>ignoreCase</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ |   |
| **ignoreCase** | _boolean_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>search</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>splitter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ |   |
| **splitter** | _string_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>search</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>splitter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>ignoreCase</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ |   |
| **splitter** | _string_ |   |
| **ignoreCase** | _boolean_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>search</span>(<span style={{color: '#FF8000'}}>map</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>, <span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>splitter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>ignoreCase</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **map** | _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ |   |
| **content** | _string_ |   |
| **splitter** | _string_ |   |
| **ignoreCase** | _boolean_ |   |

##### Return

( _string_ )


---

## service

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>service</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ScriptResult](../objects/ScriptResult)</span>
##### Description

Execution of scripts that are in the `server/services/` folder.

##### How To Use

```javascript
_exec.service("another-script-maybe-in-another-language");
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ | Script path originating from 'services/' to be executed. |

##### Return

( _[ScriptResult](../objects/ScriptResult)_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>service</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>preserveContext</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ScriptResult](../objects/ScriptResult)</span>
##### Description

Execution of scripts that are in the `server/services/` folder.

##### How To Use

```javascript
_exec.service("another-script-maybe-in-another-language");
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ | Script path originating from 'services/' to be executed. |
| **preserveContext** | _boolean_ | Whether to keep the same execution context or start a new one. |

##### Return

( _[ScriptResult](../objects/ScriptResult)_ )


---

## set

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>set</span>(<span style={{color: '#FF8000'}}>index</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>element</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _int_ |   |
| **element** | _java.lang.Object_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>set</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _java.lang.Object_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

## setForceList

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>setForceList</span>(<span style={{color: '#FF8000'}}>forceList</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **forceList** | _boolean_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

## setForceMap

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>setForceMap</span>(<span style={{color: '#FF8000'}}>forceMap</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **forceMap** | _boolean_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

## setIfFalse

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>setIfFalse</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _boolean_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

## setIfGreaterThanZero

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>setIfGreaterThanZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>setIfGreaterThanZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>setIfGreaterThanZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>setIfGreaterThanZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>setIfGreaterThanZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _short_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

## setIfLowerThanZero

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>setIfLowerThanZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>setIfLowerThanZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>setIfLowerThanZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>setIfLowerThanZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>setIfLowerThanZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _short_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

## setIfNotEmpty

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>setIfNotEmpty</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _string_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

## setIfNotZero

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>setIfNotZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _double_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>setIfNotZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _float_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>setIfNotZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _int_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>setIfNotZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _long_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>setIfNotZero</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _short_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

## setIfTrue

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>setIfTrue</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **value** | _boolean_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

## setNull

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>setNull</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

## setURLCharacterEncoding

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>setURLCharacterEncoding</span>(<span style={{color: '#FF8000'}}>characterEncoding</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Defines the character encoding to be used in formatting for URL (_QueryString_).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **characterEncoding** | _string_ | Character encoding code. |

##### Return

( _void_ )


---

## size

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>size</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Return

( _int_ )


---

## sizeOfList

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>sizeOfList</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Return

( _int_ )


---

## sizeOfMap

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>sizeOfMap</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Return

( _int_ )


---

## sleep

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>sleep</span>(<span style={{color: '#FF8000'}}>interval</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Pauses execution, useful for causing some controlled processing delay.

##### How To Use

```javascript
// Stop the execution for 3 seconds:
_exec.sleep(3000);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **interval** | _long_ | Time interval in milliseconds to pause execution. |

##### Return

( _void_ )


---

## sort

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>sort</span>(<span style={{color: '#FF8000'}}>c</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Comparator</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **c** | _java.util.Comparator_ |   |

##### Return

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>sort</span>(<span style={{color: '#FF8000'}}>function</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.graalvm.polyglot.Value</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **function** | _org.graalvm.polyglot.Value_ |   |

##### Return

( _void_ )


---

## spliterator

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>spliterator</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Spliterator</span>
##### Return

( _java.util.Spliterator_ )


---

## stop

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>stop</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

It stops the execution of the current script, useful for interrupting the execution.

##### How To Use

```javascript
// For the execution:
_out.println('Will stop...<br/>');
_exec.stop();
_out.println('Not run this line.');
```

##### Return

( _void_ )


---

## subList

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>subList</span>(<span style={{color: '#FF8000'}}>fromIndex</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>toIndex</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fromIndex** | _int_ |   |
| **toIndex** | _int_ |   |

##### Return

( _java.util.List_ )


---

## toArray

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>toArray</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object[]</span>
##### Return

( _java.lang.Object[]_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>toArray</span>(<span style={{color: '#FF8000'}}>a</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object[]</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **a** | _java.lang.Object[]_ |   |

##### Return

( _java.lang.Object[]_ )


---

## toByteArray

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>toByteArray</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
##### Return

( _byte[]_ )


---

## toDoubleArray

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>toDoubleArray</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double[]</span>
##### Return

( _double[]_ )


---

## toFloatArray

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>toFloatArray</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float[]</span>
##### Return

( _float[]_ )


---

## toFormMap

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>toFormMap</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>toFormMap</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |
| **data** | _[Values](../objects/Values)_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>toFormMap</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](../objects/Values)_ |   |

##### Return

( _[Values](../objects/Values)_ )


---

## toIntArray

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>toIntArray</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int[]</span>
##### Return

( _int[]_ )


---

## toJSON

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>toJSON</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>toJSON</span>(<span style={{color: '#FF8000'}}>htmlEscape</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **htmlEscape** | _boolean_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>toJSON</span>(<span style={{color: '#FF8000'}}>htmlEscape</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>, <span style={{color: '#FF8000'}}>indentFactor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **htmlEscape** | _boolean_ |   |
| **indentFactor** | _int_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>toJSON</span>(<span style={{color: '#FF8000'}}>indentFactor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **indentFactor** | _int_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>toJSON</span>(<span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _java.util.List_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>toJSON</span>(<span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>, <span style={{color: '#FF8000'}}>htmlEscape</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _java.util.List_ |   |
| **htmlEscape** | _boolean_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>toJSON</span>(<span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>, <span style={{color: '#FF8000'}}>htmlEscape</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>, <span style={{color: '#FF8000'}}>indentFactor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _java.util.List_ |   |
| **htmlEscape** | _boolean_ |   |
| **indentFactor** | _int_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>toJSON</span>(<span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>, <span style={{color: '#FF8000'}}>indentFactor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _java.util.List_ |   |
| **indentFactor** | _int_ |   |

##### Return

( _string_ )


---

## toJSONObject

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>toJSONObject</span>(<span style={{color: '#FF8000'}}>object</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>htmlEscape</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **object** | _java.lang.Object_ |   |
| **htmlEscape** | _boolean_ |   |

##### Return

( _java.lang.Object_ )


---

## toJSONString

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>toJSONString</span>(<span style={{color: '#FF8000'}}>object</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>, <span style={{color: '#FF8000'}}>htmlEscape</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>, <span style={{color: '#FF8000'}}>indentFactor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **object** | _java.lang.Object_ |   |
| **htmlEscape** | _boolean_ |   |
| **indentFactor** | _int_ |   |

##### Return

( _string_ )


---

## toList

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>toList</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Return

( _java.util.List_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>toList</span>(<span style={{color: '#FF8000'}}>cls</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Class</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **cls** | _java.lang.Class_ |   |

##### Return

( _java.util.List_ )


---

## toLongArray

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>toLongArray</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long[]</span>
##### Return

( _long[]_ )


---

## toMap

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>toMap</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>
##### Return

( _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ )


---

## toProperties

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>toProperties</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## toShortArray

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>toShortArray</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short[]</span>
##### Return

( _short[]_ )


---

## toStringArray

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>toStringArray</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.String[]</span>
##### Return

( _java.lang.String[]_ )


---

## unset

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>unset</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ |   |

##### Return

( _java.lang.Object_ )


---

## unsetAll

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>unsetAll</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Return

( _void_ )


---

## values

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>values</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.Collection</span>
##### Description

Gets all object values stored in both dictionary and list mode.

##### Return

( _java.util.Collection_ )

List of all obtained values.

---

## valuesToString

---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>valuesToString</span>(<span style={{color: '#FF8000'}}>splitter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **splitter** | _string_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>valuesToString</span>(<span style={{color: '#FF8000'}}>splitter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>excludes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.String[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>valuesToString</span>(<span style={{color: '#FF8000'}}>splitter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>excludes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.String[]</span>, <span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |
| **config** | _[Values](../objects/Values)_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>valuesToString</span>(<span style={{color: '#FF8000'}}>splitter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **splitter** | _string_ |   |
| **config** | _[Values](../objects/Values)_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>valuesToString</span>(<span style={{color: '#FF8000'}}>map</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>, <span style={{color: '#FF8000'}}>splitter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **map** | _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>valuesToString</span>(<span style={{color: '#FF8000'}}>map</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>, <span style={{color: '#FF8000'}}>splitter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>excludes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.String[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **map** | _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>valuesToString</span>(<span style={{color: '#FF8000'}}>map</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>, <span style={{color: '#FF8000'}}>splitter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>excludes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.String[]</span>, <span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **map** | _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |
| **excludes** | _java.lang.String[]_ |   |
| **config** | _[Values](../objects/Values)_ |   |

##### Return

( _string_ )


---

#### <span style={{fontWeight: 'normal'}}>_exec</span>.<span style={{color: '#008000'}}>valuesToString</span>(<span style={{color: '#FF8000'}}>map</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map</span>, <span style={{color: '#FF8000'}}>splitter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **map** | _[Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema) | java.util.Map_ |   |
| **splitter** | _string_ |   |
| **config** | _[Values](../objects/Values)_ |   |

##### Return

( _string_ )


---

