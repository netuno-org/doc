---
id: log
title: Log
sidebar_label: Log
---

Resource for obtaining application logs.

This resource uses Log4J to present the log type WARN, ERROR and FATAL.

To analyze log messages of type TRACE, DEBUG or INFO, you need to change the level of the logs in the settings to the desired level, for example, to start displaying the INFO messages, change the configuration in `logs/log.xml` where `level="warn"` just change the `warn` value to `info`, `debug` or `trace`.

---

## debug

---

#### _log.debug(message: string) : _void_
##### Description

Print a message of type **DEBUG** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |

##### Return

( _void_ )


---

#### _log.debug(message: string, throwable: _Object_) : _void_
##### Description

Print a message of type **DEBUG** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |
| throwable | _Object_ | Alternative object to include in the log message. |

##### Return

( _void_ )


---

## error

---

#### _log.error(message: string) : _void_
##### Description

Print a message of type **ERROR** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |

##### Return

( _void_ )


---

#### _log.error(message: string, throwable: _Object_) : _void_
##### Description

Print a message of type **ERROR** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |
| throwable | _Object_ | Alternative object to include in the log message. |

##### Return

( _void_ )


---

## fatal

---

#### _log.fatal(message: string) : _void_
##### Description

Print a message of type **FATAL** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |

##### Return

( _void_ )


---

#### _log.fatal(message: string, throwable: _Object_) : _void_
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

## info

---

#### _log.info(message: string) : _void_
##### Description

Print a message of type **INFORMATION** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |

##### Return

( _void_ )


---

#### _log.info(message: string, throwable: _Object_) : _void_
##### Description

Print a message of type **INFORMATION** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |
| throwable | _Object_ | Alternative object to include in the log message. |

##### Return

( _void_ )


---

## print

---

#### _log.print(content: _char[]_) : _void_
##### Description

Prints a direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _char[]_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.print(content: _boolean_) : _void_
##### Description

Prints a direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _boolean_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.print(content: _char_) : _void_
##### Description

Prints a direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _char_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.print(content: _double_) : _void_
##### Description

Prints a direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _double_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.print(content: _float_) : _void_
##### Description

Prints a direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _float_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.print(content: _int_) : _void_
##### Description

Prints a direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _int_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.print(content: _Object_) : _void_
##### Description

Prints a direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _Object_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.print(content: string) : _void_
##### Description

Prints a direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.print(content: _long_) : _void_
##### Description

Prints a direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _long_ | Content that will be displayed. |

##### Return

( _void_ )


---

## println

---

#### _log.println(content: _char[]_) : _void_
##### Description

Prints a line with the direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _char[]_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.println(content: _boolean_) : _void_
##### Description

Prints a line with the direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _boolean_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.println(content: _char_) : _void_
##### Description

Prints a line with the direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _char_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.println(content: _double_) : _void_
##### Description

Prints a line with the direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _double_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.println(content: _float_) : _void_
##### Description

Prints a line with the direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _float_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.println(content: _int_) : _void_
##### Description

Prints a line with the direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _int_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.println(content: _Object_) : _void_
##### Description

Prints a line with the direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _Object_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.println(content: string) : _void_
##### Description

Prints a line with the direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.println(content: _long_) : _void_
##### Description

Prints a line with the direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _long_ | Content that will be displayed. |

##### Return

( _void_ )


---

## trace

---

#### _log.trace(message: string) : _void_
##### Description

Print a message of type **TRACE** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |

##### Return

( _void_ )


---

#### _log.trace(message: string, throwable: _Object_) : _void_
##### Description

Print a message of type **TRACE** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |
| throwable | _Object_ | Alternative object to include in the log message. |

##### Return

( _void_ )


---

## warn

---

#### _log.warn(message: string) : _void_
##### Description

Print a message of type **WARNING** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |

##### Return

( _void_ )


---

#### _log.warn(message: string, throwable: _Object_) : _void_
##### Description

Print a message of type **WARNING** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| message | string | Message that will be presented in log. |
| throwable | _Object_ | Alternative object to include in the log message. |

##### Return

( _void_ )


---

