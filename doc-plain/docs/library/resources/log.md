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

#### _log.debug(message: string) : void
##### Description

Print a message of type **DEBUG** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |

##### Return

( _void_ )


---

#### _log.debug(message: string, throwable: java.lang.Object) : void
##### Description

Print a message of type **DEBUG** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |
| **throwable** | _java.lang.Object_ | Alternative object to include in the log message. |

##### Return

( _void_ )


---

## error

---

#### _log.error(message: string) : void
##### Description

Print a message of type **ERROR** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |

##### Return

( _void_ )


---

#### _log.error(message: string, throwable: java.lang.Object) : void
##### Description

Print a message of type **ERROR** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |
| **throwable** | _java.lang.Object_ | Alternative object to include in the log message. |

##### Return

( _void_ )


---

## fatal

---

#### _log.fatal(message: string) : void
##### Description

Print a message of type **FATAL** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |

##### Return

( _void_ )


---

#### _log.fatal(message: string, throwable: java.lang.Object) : void
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

## info

---

#### _log.info(message: string) : void
##### Description

Print a message of type **INFORMATION** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |

##### Return

( _void_ )


---

#### _log.info(message: string, throwable: java.lang.Object) : void
##### Description

Print a message of type **INFORMATION** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |
| **throwable** | _java.lang.Object_ | Alternative object to include in the log message. |

##### Return

( _void_ )


---

## print

---

#### _log.print(content: char[]) : void
##### Description

Prints a direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _char[]_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.print(content: boolean) : void
##### Description

Prints a direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _boolean_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.print(content: char) : void
##### Description

Prints a direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _char_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.print(content: double) : void
##### Description

Prints a direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _double_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.print(content: float) : void
##### Description

Prints a direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _float_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.print(content: int) : void
##### Description

Prints a direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _int_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.print(content: java.lang.Object) : void
##### Description

Prints a direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _java.lang.Object_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.print(content: string) : void
##### Description

Prints a direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.print(content: long) : void
##### Description

Prints a direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _long_ | Content that will be displayed. |

##### Return

( _void_ )


---

## println

---

#### _log.println(content: char[]) : void
##### Description

Prints a line with the direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _char[]_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.println(content: boolean) : void
##### Description

Prints a line with the direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _boolean_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.println(content: char) : void
##### Description

Prints a line with the direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _char_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.println(content: double) : void
##### Description

Prints a line with the direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _double_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.println(content: float) : void
##### Description

Prints a line with the direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _float_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.println(content: int) : void
##### Description

Prints a line with the direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _int_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.println(content: java.lang.Object) : void
##### Description

Prints a line with the direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _java.lang.Object_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.println(content: string) : void
##### Description

Prints a line with the direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### _log.println(content: long) : void
##### Description

Prints a line with the direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _long_ | Content that will be displayed. |

##### Return

( _void_ )


---

## trace

---

#### _log.trace(message: string) : void
##### Description

Print a message of type **TRACE** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |

##### Return

( _void_ )


---

#### _log.trace(message: string, throwable: java.lang.Object) : void
##### Description

Print a message of type **TRACE** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |
| **throwable** | _java.lang.Object_ | Alternative object to include in the log message. |

##### Return

( _void_ )


---

## warn

---

#### _log.warn(message: string) : void
##### Description

Print a message of type **WARNING** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |

##### Return

( _void_ )


---

#### _log.warn(message: string, throwable: java.lang.Object) : void
##### Description

Print a message of type **WARNING** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |
| **throwable** | _java.lang.Object_ | Alternative object to include in the log message. |

##### Return

( _void_ )


---

