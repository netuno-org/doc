---
id: out
title: Out
sidebar_label: Out
---

Response feature to HTTP requests.

---

## close

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">close</span>() : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Closes the sending of HTTP response data.

##### Return

( _void_ )


---

## closed

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">closed</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Checks whether the response to the HTTP request has already been closed.

##### Return

( _boolean_ )

The response to the HTTP request has been closed.

---

## copy

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">copy</span>(<span style="color: #FF8000">in</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](../../objects/InputStream)_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">copy</span>(<span style="color: #FF8000">in</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>, <span style="color: #FF8000">skip</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](../../objects/InputStream)_ |   |
| **skip** | _long_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">copy</span>(<span style="color: #FF8000">in</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>, <span style="color: #FF8000">skip</span>: <span style="font-weight: normal; font-style: italic;">long</span>, <span style="color: #FF8000">size</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](../../objects/InputStream)_ |   |
| **skip** | _long_ |   |
| **size** | _long_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">copy</span>(<span style="color: #FF8000">file</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _[File](../../objects/File)_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">copy</span>(<span style="color: #FF8000">file</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>, <span style="color: #FF8000">skip</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _[File](../../objects/File)_ |   |
| **skip** | _long_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">copy</span>(<span style="color: #FF8000">file</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>, <span style="color: #FF8000">skip</span>: <span style="font-weight: normal; font-style: italic;">long</span>, <span style="color: #FF8000">size</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _[File](../../objects/File)_ |   |
| **skip** | _long_ |   |
| **size** | _long_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">copy</span>(<span style="color: #FF8000">storage</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](../../resources/storage)_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">copy</span>(<span style="color: #FF8000">storage</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">skip</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](../../resources/storage)_ |   |
| **skip** | _long_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">copy</span>(<span style="color: #FF8000">storage</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/storage)</span>, <span style="color: #FF8000">skip</span>: <span style="font-weight: normal; font-style: italic;">long</span>, <span style="color: #FF8000">size</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](../../resources/storage)_ |   |
| **skip** | _long_ |   |
| **size** | _long_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

## flush

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">flush</span>() : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Sends what is pending accumulated in the buffer.

##### Return

( _void_ )


---

## getJSONHTMLEscape

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">getJSONHTMLEscape</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Return

( _boolean_ )


---

## getJSONIdentFactor

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">getJSONIdentFactor</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Return

( _int_ )


---

## getMirrors

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">getMirrors</span>() : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Description

Gets the output replicas.

##### Return

( _java.util.List_ )

List of replicas.

---

## init

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">init</span>() : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Description

Starts a new instance of output.

##### Return

( _[Out](../../resources/out)_ )

The new instance of the Output feature.

---

## isClosed

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">isClosed</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Return

( _boolean_ )


---

## isStarted

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">isStarted</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Return

( _boolean_ )


---

## json

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">json</span>(<span style="color: #FF8000">json</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **json** | _java.lang.Object_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">json</span>(<span style="color: #FF8000">json</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **json** | _string_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">json</span>(<span style="color: #FF8000">json</span>: <span style="font-weight: normal; font-style: italic;">java.util.List</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **json** | _java.util.List_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">json</span>(<span style="color: #FF8000">json</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **json** | _[Config](../../resources/config) &#124; [Exec](../../resources/exec) &#124; [Header](../../resources/header) &#124; [Req](../../resources/req) &#124; [Res](../../resources/res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">json</span>(<span style="color: #FF8000">json</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **json** | _[Values](../../objects/Values)_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

## jsonHTMLEscape

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">jsonHTMLEscape</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Return

( _boolean_ )


---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">jsonHTMLEscape</span>(<span style="color: #FF8000">htmlEscape</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **htmlEscape** | _boolean_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

## jsonIdentFactor

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">jsonIdentFactor</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Return

( _int_ )


---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">jsonIdentFactor</span>(<span style="color: #FF8000">jsonIdentFactor</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **jsonIdentFactor** | _int_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

## mirrors

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">mirrors</span>() : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Description

Gets the output replicas.

##### Return

( _java.util.List_ )

List of replicas.

---

## output

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">output</span>() : <span style="font-weight: normal; font-style: italic;">[OutputStream](../../objects/OutputStream)</span>
##### Description

Provides the original output stream.

##### Return

( _[OutputStream](../../objects/OutputStream)_ )

The original output stream..

---

## print

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">print</span>(<span style="color: #FF8000">bool</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Description

Sends the boolean result.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bool** | _boolean_ | Boolean value that will be sent. |

##### Return

( _[Out](../../resources/out)_ )

Current data output.

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">print</span>(<span style="color: #FF8000">character</span>: <span style="font-weight: normal; font-style: italic;">char</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Description

Sends the character.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **character** | _char_ | Character that will be sent. |

##### Return

( _[Out](../../resources/out)_ )

Current data output.

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">print</span>(<span style="color: #FF8000">bool</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Description

Sends the boolean result.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bool** | _double_ | Boolean value that will be sent. |

##### Return

( _[Out](../../resources/out)_ )

Current data output.

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">print</span>(<span style="color: #FF8000">bool</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Description

Sends the boolean result.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bool** | _float_ | Boolean value that will be sent. |

##### Return

( _[Out](../../resources/out)_ )

Current data output.

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">print</span>(<span style="color: #FF8000">number</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Description

Sends the number.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **number** | _int_ | Number that will be sent. |

##### Return

( _[Out](../../resources/out)_ )

Current data output.

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">print</span>(<span style="color: #FF8000">obj</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Description

Converts the object to text and sends it.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **obj** | _java.lang.Object_ | Object that will be converted to text and sent. |

##### Return

( _[Out](../../resources/out)_ )

Current data output.

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">print</span>(<span style="color: #FF8000">text</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Description

Sends the text content.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _string_ | Content that will be sent. |

##### Return

( _[Out](../../resources/out)_ )

Current data output.

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">print</span>(<span style="color: #FF8000">bool</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Description

Sends the boolean result.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bool** | _long_ | Boolean value that will be sent. |

##### Return

( _[Out](../../resources/out)_ )

Current data output.

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">print</span>(<span style="color: #FF8000">bool</span>: <span style="font-weight: normal; font-style: italic;">short</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Description

Sends the boolean result.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bool** | _short_ | Boolean value that will be sent. |

##### Return

( _[Out](../../resources/out)_ )

Current data output.

---

## printf

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">printf</span>(<span style="color: #FF8000">format</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">objects</span>: <span style="font-weight: normal; font-style: italic;">[Ljava.lang.Object;[]</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **format** | _string_ |   |
| **objects** | _[Ljava.lang.Object;[]_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

## println

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">println</span>() : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Description

Sends a line break.

##### Return

( _[Out](../../resources/out)_ )

Current data output.

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">println</span>(<span style="color: #FF8000">bool</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Description

Sends the boolean result with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bool** | _boolean_ | Boolean value that will be sent with the line break. |

##### Return

( _[Out](../../resources/out)_ )

Current data output.

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">println</span>(<span style="color: #FF8000">character</span>: <span style="font-weight: normal; font-style: italic;">char</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Description

Sends the character with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **character** | _char_ | Character that will be sent with the line break. |

##### Return

( _[Out](../../resources/out)_ )

Current data output.

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">println</span>(<span style="color: #FF8000">bool</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Description

Sends the boolean result with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bool** | _double_ | Boolean value that will be sent with the line break. |

##### Return

( _[Out](../../resources/out)_ )

Current data output.

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">println</span>(<span style="color: #FF8000">bool</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Description

Sends the boolean result with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bool** | _float_ | Boolean value that will be sent with the line break. |

##### Return

( _[Out](../../resources/out)_ )

Current data output.

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">println</span>(<span style="color: #FF8000">number</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Description

Sends the number with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **number** | _int_ | Number that will be sent with the line break. |

##### Return

( _[Out](../../resources/out)_ )

Current data output.

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">println</span>(<span style="color: #FF8000">obj</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Description

Converts the object to text and sends it with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **obj** | _java.lang.Object_ | Object that will be converted to text and sent with the line break. |

##### Return

( _[Out](../../resources/out)_ )

Current data output.

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">println</span>(<span style="color: #FF8000">text</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Description

Sends the text content with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _string_ | Content that will be sent with the line break. |

##### Return

( _[Out](../../resources/out)_ )

Current data output.

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">println</span>(<span style="color: #FF8000">bool</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Description

Sends the boolean result with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bool** | _long_ | Boolean value that will be sent with the line break. |

##### Return

( _[Out](../../resources/out)_ )

Current data output.

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">println</span>(<span style="color: #FF8000">bool</span>: <span style="font-weight: normal; font-style: italic;">short</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Description

Sends the boolean result with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bool** | _short_ | Boolean value that will be sent with the line break. |

##### Return

( _[Out](../../resources/out)_ )

Current data output.

---

## setJSONHTMLEscape

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">setJSONHTMLEscape</span>(<span style="color: #FF8000">htmlEscape</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **htmlEscape** | _boolean_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

## setJSONIdentFactor

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">setJSONIdentFactor</span>(<span style="color: #FF8000">jsonIdentFactor</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **jsonIdentFactor** | _int_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

## start

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">start</span>() : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Starts the output, the HTTP header is sent.

##### Return

( _void_ )


---

## started

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">started</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Checks whether the response to the HTTP request has already started.

##### Return

( _boolean_ )

The HTTP request response has started and the header has already been sent.

---

## write

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">write</span>(<span style="color: #FF8000">bytes</span>: <span style="font-weight: normal; font-style: italic;">byte[]</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bytes** | _byte[]_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">write</span>(<span style="color: #FF8000">bytes</span>: <span style="font-weight: normal; font-style: italic;">byte[]</span>, <span style="color: #FF8000">off</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">len</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bytes** | _byte[]_ |   |
| **off** | _int_ |   |
| **len** | _int_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">write</span>(<span style="color: #FF8000">b</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **b** | _int_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

## writeBoolean

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">writeBoolean</span>(<span style="color: #FF8000">b</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **b** | _boolean_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

## writeByte

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">writeByte</span>(<span style="color: #FF8000">b</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **b** | _int_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

## writeChar

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">writeChar</span>(<span style="color: #FF8000">c</span>: <span style="font-weight: normal; font-style: italic;">char</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **c** | _char_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

## writeDouble

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">writeDouble</span>(<span style="color: #FF8000">d</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **d** | _double_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

## writeFloat

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">writeFloat</span>(<span style="color: #FF8000">f</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **f** | _float_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

## writeInt

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">writeInt</span>(<span style="color: #FF8000">i</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **i** | _int_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

## writeLong

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">writeLong</span>(<span style="color: #FF8000">l</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **l** | _long_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

## writeShort

---

#### <span style="font-weight: normal">_out</span>.<span style="color: #008000">writeShort</span>(<span style="color: #FF8000">s</span>: <span style="font-weight: normal; font-style: italic;">short</span>) : <span style="font-weight: normal; font-style: italic;">[Out](../../resources/out)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **s** | _short_ |   |

##### Return

( _[Out](../../resources/out)_ )


---

