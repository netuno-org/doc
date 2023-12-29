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

#### _error.create(message: string) : _[ErrorException](../../objects/ErrorException)_
##### Description

Creates an error with an description message

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in the log. |

##### Return

( _[ErrorException](../../objects/ErrorException)_ )


---

## createError

---

#### _error.createError(message: string) : _java.lang.Error_
##### Description

Creates an error with an description message

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in the log. |

##### Return

( _java.lang.Error_ )


---

## createException

---

#### _error.createException(message: string) : _java.lang.Exception_
##### Description

Creates a exception with an description message

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in the log. |

##### Return

( _java.lang.Exception_ )


---

## createThrowable

---

#### _error.createThrowable(message: string) : _java.lang.Throwable_
##### Description

Creates a throwable with an description message

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in the log. |

##### Return

( _java.lang.Throwable_ )


---

## data

---

#### _error.data() : _[Values](../../objects/Values)_
##### Description

Creates a new class Values that results from the error. 

##### Return

( _[Values](../../objects/Values)_ )


---

#### _error.data(retorno: _[Values](../../objects/Values)_) : _[Error](../../resources/Error)_
##### Description

Creates a new class Values that results from the error.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| retorno | _[Values](../../objects/Values)_ | Values. |

##### Return

( _[Error](../../resources/Error)_ )


---

## debug

---

#### _error.debug(message: string) : _void_
##### Description

Return an exception and print a message with the description of the exception and it's object

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |

##### Return

( _void_ )


---

#### _error.debug(message: string, throwable: _java.lang.Object_) : _void_
##### Description

Print a message with the description of the debug and it's cause

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |
| throwable | _java.lang.Object_ | Alternative throwable to include in the debug message. |

##### Return

( _void_ )


---

#### _error.debug(message: string, cause: _java.lang.Throwable_) : _void_
##### Description

Print a message with the description of the debug

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in the log. |
| cause | _java.lang.Throwable_ | Alternative throwable to include in the debug message. |

##### Return

( _void_ )


---

## error

---

#### _error.error(message: string) : _void_
##### Description

Print a message of error.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in the log. |

##### Return

( _void_ )


---

#### _error.error(message: string, throwable: _java.lang.Object_) : _void_
##### Description

Print a message with the description of the error and it's cause

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |
| throwable | _java.lang.Object_ | Alternative throwable to include in the error message. |

##### Return

( _void_ )


---

#### _error.error(message: string, throwable: _java.lang.Throwable_) : _void_
##### Description

Print a message with the description of the error and it's object

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |
| throwable | _java.lang.Throwable_ | Alternative throwable to include in the error message. |

##### Return

( _void_ )


---

## fatal

---

#### _error.fatal(message: string) : _void_
##### Description

Print a message of type **FATAL** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |

##### Return

( _void_ )


---

#### _error.fatal(message: string, throwable: _java.lang.Object_) : _void_
##### Description

Print a message of type **FATAL** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |
| throwable | _java.lang.Object_ | Alternative object to include in the log message. |

##### Return

( _void_ )


---

#### _error.fatal(message: string, throwable: _java.lang.Throwable_) : _void_
##### Description

Print a message of type **FATAL** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |
| throwable | _java.lang.Throwable_ | Alternative throwable to include in the log message. |

##### Return

( _void_ )


---

## info

---

#### _error.info(message: string) : _void_
##### Description

Print a message with the description of the debug and it's object

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |

##### Return

( _void_ )


---

#### _error.info(message: string, throwable: _java.lang.Object_) : _void_
##### Description

Print a message of information and a throable

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |
| throwable | _java.lang.Object_ | Alternative throwable to include in the information message. |

##### Return

( _void_ )


---

#### _error.info(message: string, cause: _java.lang.Throwable_) : _void_
##### Description

Print a message of information

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in the log. |
| cause | _java.lang.Throwable_ | Alternative throwable to include in the info message. |

##### Return

( _void_ )


---

## is

---

#### _error.is(object: _java.lang.Object_) : _boolean_
##### Description

Checks if an object is from type Error, Exception or Throwable.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| object | _java.lang.Object_ | Object that will be checked. |

##### Return

( _boolean_ )

Returns **true** if the object is of type Error, Exception or Throwable.

---

## isError

---

#### _error.isError(object: _java.lang.Object_) : _boolean_
##### Description

Checks if an object is from type Error.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| object | _java.lang.Object_ | Object that will be checked. |

##### Return

( _boolean_ )

Returns **true** if the object is of type Error.

---

## isException

---

#### _error.isException(object: _java.lang.Object_) : _boolean_
##### Description

Checks if an object is from type Exception.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| object | _java.lang.Object_ | Object that will be checked. |

##### Return

( _boolean_ )

Returns **true** if the object is of type Exception.

---

## isThrowable

---

#### _error.isThrowable(object: _java.lang.Object_) : _boolean_
##### Description

Checks if an object is from type Throwable.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| object | _java.lang.Object_ | Object that will be checked. |

##### Return

( _boolean_ )

Returns **true** if the object is of type Throwable.

---

## raise

---

#### _error.raise(object: _java.lang.Object_) : _void_
##### Description

Throws an error according to the type of object passed (Error, Exception or Throwable).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| object | _java.lang.Object_ | Error object. |

##### Return

( _void_ )


---

## trace

---

#### _error.trace(message: string) : _void_
##### Description

Returns an exception and a list of methods that caused them with an description mensagem.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in the log. |

##### Return

( _void_ )


---

#### _error.trace(message: string, object: _java.lang.Object_) : _void_
##### Description

Returns an object and a list of methods that caused them with an description mensagem.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |
| object | _java.lang.Object_ | Alternative object to include in the error message. |

##### Return

( _void_ )


---

#### _error.trace(message: string, throwable: _java.lang.Throwable_) : _void_
##### Description

Returns an throwable and a list of methods that caused them with an description mensagem.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |
| throwable | _java.lang.Throwable_ | Alternative throwable to include in the log message. |

##### Return

( _void_ )


---

## warn

---

#### _error.warn(message: string) : _void_
##### Description

Print a message of warning

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in the log. |

##### Return

( _void_ )


---

#### _error.warn(message: string, object: _java.lang.Object_) : _void_
##### Description

Print a message with the description of the warning and it's object

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |
| object | _java.lang.Object_ | Alternative object to include in the warning message. |

##### Return

( _void_ )


---

#### _error.warn(message: string, throwable: _java.lang.Throwable_) : _void_
##### Description

Print a message with the description of the warning and it's throwable

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |
| throwable | _java.lang.Throwable_ | Alternative throwable to include in the warning message. |

##### Return

( _void_ )


---

