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

#### _error.create(arg0: string) : _ErrorException_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _ErrorException_ )


---

## createError

---

#### _error.createError(message: string) : _Error_
##### Description

Creates an error with an description message

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in the log. |

##### Return

( _Error_ )


---

## createException

---

#### _error.createException(message: string) : _Exception_
##### Description

Creates a exception with an description message

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in the log. |

##### Return

( _Exception_ )


---

## createThrowable

---

#### _error.createThrowable(message: string) : _Throwable_
##### Description

Creates a throwable with an description message

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in the log. |

##### Return

( _Throwable_ )


---

## data

---

#### _error.data() : _[Values](../../objects/Values)_
##### Description

Creates a new class Values that results from the error. 

##### Return

( _[Values](../../objects/Values)_ )


---

#### _error.data(retorno: _[Values](../../objects/Values)_) : _Error_
##### Description

Creates a new class Values that results from the error.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| retorno | _[Values](../../objects/Values)_ | Values. |

##### Return

( _Error_ )


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

#### _error.debug(message: string, throwable: _Object_) : _void_
##### Description

Print a message with the description of the debug and it's cause

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |
| throwable | _Object_ | Alternative throwable to include in the debug message. |

##### Return

( _void_ )


---

#### _error.debug(message: string, arg1: _Throwable_) : _void_
##### Description

Print a message with the description of the debug

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in the log. |
| arg1 | _Throwable_ |   |

##### Return

( _void_ )


---

## error

---

#### _error.error(message: string) : _void_
##### Description

Print a message of erro

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in the log. |

##### Return

( _void_ )


---

#### _error.error(message: string, throwable: _Object_) : _void_
##### Description

Print a message with the description of the error and it's cause

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |
| throwable | _Object_ | Alternative throwable to include in the error message. |

##### Return

( _void_ )


---

#### _error.error(message: string, throwable: _Throwable_) : _void_
##### Description

Print a message with the description of the error and it's object

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |
| throwable | _Throwable_ | Alternative throwable to include in the error message. |

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

#### _error.fatal(message: string, throwable: _Object_) : _void_
##### Description

Print a message of type **FATAL** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |
| throwable | _Object_ | Alternative object to include in the log message. |

##### Return

( _void_ )


---

#### _error.fatal(message: string, throwable: _Throwable_) : _void_
##### Description

Print a message of type **FATAL** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |
| throwable | _Throwable_ | Alternative throwable to include in the log message. |

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

#### _error.info(message: string, throwable: _Object_) : _void_
##### Description

Print a message of information and a throable

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |
| throwable | _Object_ | Alternative throwable to include in the information message. |

##### Return

( _void_ )


---

#### _error.info(message: string, arg1: _Throwable_) : _void_
##### Description

Print a message of information

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in the log. |
| arg1 | _Throwable_ |   |

##### Return

( _void_ )


---

## is

---

#### _error.is(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

## isError

---

#### _error.isError(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

## isException

---

#### _error.isException(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

## isThrowable

---

#### _error.isThrowable(arg0: _Object_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _boolean_ )


---

## raise

---

#### _error.raise(arg0: _Object_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

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

#### _error.trace(message: string, object: _Object_) : _void_
##### Description

Returns an object and a list of methods that caused them with an description mensagem.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |
| object | _Object_ | Alternative object to include in the error message. |

##### Return

( _void_ )


---

#### _error.trace(message: string, arg1: _Throwable_) : _void_
##### Description

Returns an throwable and a list of methods that caused them with an description mensagem.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |
| arg1 | _Throwable_ |   |

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

#### _error.warn(message: string, object: _Object_) : _void_
##### Description

Print a message with the description of the warning and it's object

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |
| object | _Object_ | Alternative object to include in the warning message. |

##### Return

( _void_ )


---

#### _error.warn(message: string, throwable: _Throwable_) : _void_
##### Description

Print a message with the description of the warning and it's throwable

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |
| throwable | _Throwable_ | Alternative throwable to include in the warning message. |

##### Return

( _void_ )


---

