---
id: error
title: Error
sidebar_label: Error
---

Generating general application errors and categorizing the severity of the error with the types:
<ul>
<li>trace</li>
<li>debug</li>
<li>info</li>
<li>warn</li>
<li>error</li>
<li>fatal</li>
</ul>

---

## create

---

#### <span style="font-weight: normal">_error</span>.<span style="color: #008000">create</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[ErrorException](../../objects/ErrorException)</span>
##### Description

Creates an error with an description message

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in the log. |

##### Return

( _[ErrorException](../../objects/ErrorException)_ )


---

## createError

---

#### <span style="font-weight: normal">_error</span>.<span style="color: #008000">createError</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.lang.Error</span>
##### Description

Creates an error with an description message

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in the log. |

##### Return

( _java.lang.Error_ )


---

## createException

---

#### <span style="font-weight: normal">_error</span>.<span style="color: #008000">createException</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.lang.Exception</span>
##### Description

Creates a exception with an description message

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in the log. |

##### Return

( _java.lang.Exception_ )


---

## createThrowable

---

#### <span style="font-weight: normal">_error</span>.<span style="color: #008000">createThrowable</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.lang.Throwable</span>
##### Description

Creates a throwable with an description message

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in the log. |

##### Return

( _java.lang.Throwable_ )


---

## data

---

#### <span style="font-weight: normal">_error</span>.<span style="color: #008000">data</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Creates a new class Values that results from the error. 

##### Return

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_error</span>.<span style="color: #008000">data</span>(<span style="color: #FF8000">retorno</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Error](../../resources/error)</span>
##### Description

Creates a new class Values that results from the error.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **retorno** | _[Values](../../objects/Values)_ | Values. |

##### Return

( _[Error](../../resources/error)_ )


---

## debug

---

#### <span style="font-weight: normal">_error</span>.<span style="color: #008000">debug</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Return an exception and print a message with the description of the exception and it's object

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_error</span>.<span style="color: #008000">debug</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">throwable</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Print a message with the description of the debug and it's cause

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |
| **throwable** | _java.lang.Object_ | Alternative throwable to include in the debug message. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_error</span>.<span style="color: #008000">debug</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cause</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Throwable</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Print a message with the description of the debug

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in the log. |
| **cause** | _java.lang.Throwable_ | Alternative throwable to include in the debug message. |

##### Return

( _void_ )


---

## error

---

#### <span style="font-weight: normal">_error</span>.<span style="color: #008000">error</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Print a message of error.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in the log. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_error</span>.<span style="color: #008000">error</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">throwable</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Print a message with the description of the error and it's cause

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |
| **throwable** | _java.lang.Object_ | Alternative throwable to include in the error message. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_error</span>.<span style="color: #008000">error</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">throwable</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Throwable</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Print a message with the description of the error and it's object

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |
| **throwable** | _java.lang.Throwable_ | Alternative throwable to include in the error message. |

##### Return

( _void_ )


---

## fatal

---

#### <span style="font-weight: normal">_error</span>.<span style="color: #008000">fatal</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Print a message of type **FATAL** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_error</span>.<span style="color: #008000">fatal</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">throwable</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Print a message of type **FATAL** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |
| **throwable** | _java.lang.Object_ | Alternative object to include in the log message. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_error</span>.<span style="color: #008000">fatal</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">throwable</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Throwable</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Print a message of type **FATAL** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |
| **throwable** | _java.lang.Throwable_ | Alternative throwable to include in the log message. |

##### Return

( _void_ )


---

## info

---

#### <span style="font-weight: normal">_error</span>.<span style="color: #008000">info</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Print a message with the description of the debug and it's object

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_error</span>.<span style="color: #008000">info</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">throwable</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Print a message of information and a throable

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |
| **throwable** | _java.lang.Object_ | Alternative throwable to include in the information message. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_error</span>.<span style="color: #008000">info</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cause</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Throwable</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Print a message of information

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in the log. |
| **cause** | _java.lang.Throwable_ | Alternative throwable to include in the info message. |

##### Return

( _void_ )


---

## is

---

#### <span style="font-weight: normal">_error</span>.<span style="color: #008000">is</span>(<span style="color: #FF8000">object</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Checks if an object is from type Error, Exception or Throwable.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **object** | _java.lang.Object_ | Object that will be checked. |

##### Return

( _boolean_ )

Returns **true** if the object is of type Error, Exception or Throwable.

---

## isError

---

#### <span style="font-weight: normal">_error</span>.<span style="color: #008000">isError</span>(<span style="color: #FF8000">object</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Checks if an object is from type Error.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **object** | _java.lang.Object_ | Object that will be checked. |

##### Return

( _boolean_ )

Returns **true** if the object is of type Error.

---

## isException

---

#### <span style="font-weight: normal">_error</span>.<span style="color: #008000">isException</span>(<span style="color: #FF8000">object</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Checks if an object is from type Exception.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **object** | _java.lang.Object_ | Object that will be checked. |

##### Return

( _boolean_ )

Returns **true** if the object is of type Exception.

---

## isThrowable

---

#### <span style="font-weight: normal">_error</span>.<span style="color: #008000">isThrowable</span>(<span style="color: #FF8000">object</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Checks if an object is from type Throwable.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **object** | _java.lang.Object_ | Object that will be checked. |

##### Return

( _boolean_ )

Returns **true** if the object is of type Throwable.

---

## raise

---

#### <span style="font-weight: normal">_error</span>.<span style="color: #008000">raise</span>(<span style="color: #FF8000">object</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Throws an error according to the type of object passed (Error, Exception or Throwable).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **object** | _java.lang.Object_ | Error object. |

##### Return

( _void_ )


---

## trace

---

#### <span style="font-weight: normal">_error</span>.<span style="color: #008000">trace</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Returns an exception and a list of methods that caused them with an description mensagem.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in the log. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_error</span>.<span style="color: #008000">trace</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">object</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Returns an object and a list of methods that caused them with an description mensagem.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |
| **object** | _java.lang.Object_ | Alternative object to include in the error message. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_error</span>.<span style="color: #008000">trace</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">throwable</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Throwable</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Returns an throwable and a list of methods that caused them with an description mensagem.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |
| **throwable** | _java.lang.Throwable_ | Alternative throwable to include in the log message. |

##### Return

( _void_ )


---

## warn

---

#### <span style="font-weight: normal">_error</span>.<span style="color: #008000">warn</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Print a message of warning

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in the log. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_error</span>.<span style="color: #008000">warn</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">object</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Print a message with the description of the warning and it's object

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |
| **object** | _java.lang.Object_ | Alternative object to include in the warning message. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_error</span>.<span style="color: #008000">warn</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">throwable</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Throwable</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Print a message with the description of the warning and it's throwable

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |
| **throwable** | _java.lang.Throwable_ | Alternative throwable to include in the warning message. |

##### Return

( _void_ )


---

