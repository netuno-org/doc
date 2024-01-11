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

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">debug</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Print a message of type **DEBUG** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">debug</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">throwable</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
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

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">error</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Print a message of type **ERROR** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">error</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">throwable</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
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

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">fatal</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Print a message of type **FATAL** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">fatal</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">throwable</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
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

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">info</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Print a message of type **INFORMATION** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">info</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">throwable</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
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

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">print</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">char[]</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Prints a direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _char[]_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">print</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Prints a direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _boolean_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">print</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">char</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Prints a direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _char_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">print</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Prints a direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _double_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">print</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Prints a direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _float_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">print</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Prints a direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _int_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">print</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Prints a direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _java.lang.Object_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">print</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Prints a direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">print</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
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

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">println</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">char[]</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Prints a line with the direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _char[]_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">println</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Prints a line with the direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _boolean_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">println</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">char</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Prints a line with the direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _char_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">println</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Prints a line with the direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _double_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">println</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Prints a line with the direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _float_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">println</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Prints a line with the direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _int_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">println</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Prints a line with the direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _java.lang.Object_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">println</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Prints a line with the direct message without any context in the Netuno terminal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Content that will be displayed. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">println</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
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

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">trace</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Print a message of type **TRACE** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">trace</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">throwable</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
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

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">warn</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Print a message of type **WARNING** in the log file and in the terminal of Netuno.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **message** | _string_ | Message that will be presented in log. |

##### Return

( _void_ )


---

#### <span style="font-weight: normal">_log</span>.<span style="color: #008000">warn</span>(<span style="color: #FF8000">message</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">throwable</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
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

