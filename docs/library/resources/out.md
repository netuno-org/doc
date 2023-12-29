---
id: out
title: Out
sidebar_label: Out
---

Response feature to HTTP requests.

---

## close

---

#### _out.close() : _void_
##### Description

Closes the sending of HTTP response data.

##### Return

( _void_ )


---

## closed

---

#### _out.closed() : _boolean_
##### Description

Checks whether the response to the HTTP request has already been closed.

##### Return

( _boolean_ )

The response to the HTTP request has been closed.

---

## copy

---

#### _out.copy(arg0: _java.io.InputStream_) : _[Out](../../resources/Out)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.io.InputStream_ |   |

##### Return

( _[Out](../../resources/Out)_ )


---

#### _out.copy(arg0: _java.io.InputStream_, arg1: _long_) : _[Out](../../resources/Out)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.io.InputStream_ |   |
| arg1 | _long_ |   |

##### Return

( _[Out](../../resources/Out)_ )


---

#### _out.copy(arg0: _java.io.InputStream_, arg1: _long_, arg2: _long_) : _[Out](../../resources/Out)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.io.InputStream_ |   |
| arg1 | _long_ |   |
| arg2 | _long_ |   |

##### Return

( _[Out](../../resources/Out)_ )


---

#### _out.copy(arg0: _[File](../../objects/File)_) : _[Out](../../resources/Out)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[File](../../objects/File)_ |   |

##### Return

( _[Out](../../resources/Out)_ )


---

#### _out.copy(arg0: _[File](../../objects/File)_, arg1: _long_) : _[Out](../../resources/Out)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[File](../../objects/File)_ |   |
| arg1 | _long_ |   |

##### Return

( _[Out](../../resources/Out)_ )


---

#### _out.copy(arg0: _[File](../../objects/File)_, arg1: _long_, arg2: _long_) : _[Out](../../resources/Out)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[File](../../objects/File)_ |   |
| arg1 | _long_ |   |
| arg2 | _long_ |   |

##### Return

( _[Out](../../resources/Out)_ )


---

#### _out.copy(arg0: _[Storage](../../resources/Storage)_) : _[Out](../../resources/Out)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Storage](../../resources/Storage)_ |   |

##### Return

( _[Out](../../resources/Out)_ )


---

#### _out.copy(arg0: _[Storage](../../resources/Storage)_, arg1: _long_) : _[Out](../../resources/Out)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Storage](../../resources/Storage)_ |   |
| arg1 | _long_ |   |

##### Return

( _[Out](../../resources/Out)_ )


---

#### _out.copy(arg0: _[Storage](../../resources/Storage)_, arg1: _long_, arg2: _long_) : _[Out](../../resources/Out)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Storage](../../resources/Storage)_ |   |
| arg1 | _long_ |   |
| arg2 | _long_ |   |

##### Return

( _[Out](../../resources/Out)_ )


---

## flush

---

#### _out.flush() : _void_
##### Description

Sends what is pending accumulated in the buffer.

##### Return

( _void_ )


---

## getJSONHTMLEscape

---

#### _out.getJSONHTMLEscape() : _boolean_
##### Return

( _boolean_ )


---

## getMirrors

---

#### _out.getMirrors() : _java.util.List_
##### Description

Gets the output replicas.

##### Return

( _java.util.List_ )

List of replicas.

---

## init

---

#### _out.init() : _[Out](../../resources/Out)_
##### Description

Starts a new instance of output.

##### Return

( _[Out](../../resources/Out)_ )

The new instance of the Output feature.

---

## isClosed

---

#### _out.isClosed() : _boolean_
##### Return

( _boolean_ )


---

## isStarted

---

#### _out.isStarted() : _boolean_
##### Return

( _boolean_ )


---

## json

---

#### _out.json(arg0: _java.lang.Object_) : _[Out](../../resources/Out)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.lang.Object_ |   |

##### Return

( _[Out](../../resources/Out)_ )


---

#### _out.json(arg0: string) : _[Out](../../resources/Out)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[Out](../../resources/Out)_ )


---

#### _out.json(arg0: _java.util.List_) : _[Out](../../resources/Out)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.List_ |   |

##### Return

( _[Out](../../resources/Out)_ )


---

#### _out.json(arg0: _java.util.Map_) : _[Out](../../resources/Out)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.util.Map_ |   |

##### Return

( _[Out](../../resources/Out)_ )


---

#### _out.json(arg0: _[Values](../../objects/Values)_) : _[Out](../../resources/Out)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Return

( _[Out](../../resources/Out)_ )


---

## jsonHTMLEscape

---

#### _out.jsonHTMLEscape() : _boolean_
##### Return

( _boolean_ )


---

#### _out.jsonHTMLEscape(arg0: _boolean_) : _[Out](../../resources/Out)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _[Out](../../resources/Out)_ )


---

## mirrors

---

#### _out.mirrors() : _java.util.List_
##### Description

Gets the output replicas.

##### Return

( _java.util.List_ )

List of replicas.

---

## output

---

#### _out.output() : _java.io.OutputStream_
##### Description

Provides the original output stream.

##### Return

( _java.io.OutputStream_ )

The original output stream..

---

## print

---

#### _out.print(bool: _boolean_) : _[Out](../../resources/Out)_
##### Description

Sends the boolean result.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| bool | _boolean_ | Boolean value that will be sent. |

##### Return

( _[Out](../../resources/Out)_ )

Current data output.

---

#### _out.print(character: _char_) : _[Out](../../resources/Out)_
##### Description

Sends the character.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| character | _char_ | Character that will be sent. |

##### Return

( _[Out](../../resources/Out)_ )

Current data output.

---

#### _out.print(bool: _double_) : _[Out](../../resources/Out)_
##### Description

Sends the boolean result.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| bool | _double_ | Boolean value that will be sent. |

##### Return

( _[Out](../../resources/Out)_ )

Current data output.

---

#### _out.print(bool: _float_) : _[Out](../../resources/Out)_
##### Description

Sends the boolean result.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| bool | _float_ | Boolean value that will be sent. |

##### Return

( _[Out](../../resources/Out)_ )

Current data output.

---

#### _out.print(number: _int_) : _[Out](../../resources/Out)_
##### Description

Sends the number.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| number | _int_ | Number that will be sent. |

##### Return

( _[Out](../../resources/Out)_ )

Current data output.

---

#### _out.print(obj: _java.lang.Object_) : _[Out](../../resources/Out)_
##### Description

Converts the object to text and sends it.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| obj | _java.lang.Object_ | Object that will be converted to text and sent. |

##### Return

( _[Out](../../resources/Out)_ )

Current data output.

---

#### _out.print(text: string) : _[Out](../../resources/Out)_
##### Description

Sends the text content.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | string | Content that will be sent. |

##### Return

( _[Out](../../resources/Out)_ )

Current data output.

---

#### _out.print(bool: _long_) : _[Out](../../resources/Out)_
##### Description

Sends the boolean result.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| bool | _long_ | Boolean value that will be sent. |

##### Return

( _[Out](../../resources/Out)_ )

Current data output.

---

#### _out.print(bool: _short_) : _[Out](../../resources/Out)_
##### Description

Sends the boolean result.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| bool | _short_ | Boolean value that will be sent. |

##### Return

( _[Out](../../resources/Out)_ )

Current data output.

---

## printf

---

#### _out.printf(arg0: string, arg1: _[Ljava.lang.Object;_) : _[Out](../../resources/Out)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Ljava.lang.Object;_ |   |

##### Return

( _[Out](../../resources/Out)_ )


---

## println

---

#### _out.println() : _[Out](../../resources/Out)_
##### Description

Sends a line break.

##### Return

( _[Out](../../resources/Out)_ )

Current data output.

---

#### _out.println(bool: _boolean_) : _[Out](../../resources/Out)_
##### Description

Sends the boolean result with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| bool | _boolean_ | Boolean value that will be sent with the line break. |

##### Return

( _[Out](../../resources/Out)_ )

Current data output.

---

#### _out.println(character: _char_) : _[Out](../../resources/Out)_
##### Description

Sends the character with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| character | _char_ | Character that will be sent with the line break. |

##### Return

( _[Out](../../resources/Out)_ )

Current data output.

---

#### _out.println(bool: _double_) : _[Out](../../resources/Out)_
##### Description

Sends the boolean result with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| bool | _double_ | Boolean value that will be sent with the line break. |

##### Return

( _[Out](../../resources/Out)_ )

Current data output.

---

#### _out.println(bool: _float_) : _[Out](../../resources/Out)_
##### Description

Sends the boolean result with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| bool | _float_ | Boolean value that will be sent with the line break. |

##### Return

( _[Out](../../resources/Out)_ )

Current data output.

---

#### _out.println(number: _int_) : _[Out](../../resources/Out)_
##### Description

Sends the number with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| number | _int_ | Number that will be sent with the line break. |

##### Return

( _[Out](../../resources/Out)_ )

Current data output.

---

#### _out.println(obj: _java.lang.Object_) : _[Out](../../resources/Out)_
##### Description

Converts the object to text and sends it with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| obj | _java.lang.Object_ | Object that will be converted to text and sent with the line break. |

##### Return

( _[Out](../../resources/Out)_ )

Current data output.

---

#### _out.println(text: string) : _[Out](../../resources/Out)_
##### Description

Sends the text content with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | string | Content that will be sent with the line break. |

##### Return

( _[Out](../../resources/Out)_ )

Current data output.

---

#### _out.println(bool: _long_) : _[Out](../../resources/Out)_
##### Description

Sends the boolean result with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| bool | _long_ | Boolean value that will be sent with the line break. |

##### Return

( _[Out](../../resources/Out)_ )

Current data output.

---

#### _out.println(bool: _short_) : _[Out](../../resources/Out)_
##### Description

Sends the boolean result with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| bool | _short_ | Boolean value that will be sent with the line break. |

##### Return

( _[Out](../../resources/Out)_ )

Current data output.

---

## setJSONHTMLEscape

---

#### _out.setJSONHTMLEscape(arg0: _boolean_) : _[Out](../../resources/Out)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _[Out](../../resources/Out)_ )


---

## start

---

#### _out.start() : _void_
##### Description

Starts the output, the HTTP header is sent.

##### Return

( _void_ )


---

## started

---

#### _out.started() : _boolean_
##### Description

Checks whether the response to the HTTP request has already started.

##### Return

( _boolean_ )

The HTTP request response has started and the header has already been sent.

---

## write

---

#### _out.write(arg0: _[B_) : _[Out](../../resources/Out)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[B_ |   |

##### Return

( _[Out](../../resources/Out)_ )


---

#### _out.write(arg0: _[B_, arg1: _int_, arg2: _int_) : _[Out](../../resources/Out)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[B_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |

##### Return

( _[Out](../../resources/Out)_ )


---

#### _out.write(arg0: _int_) : _[Out](../../resources/Out)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _[Out](../../resources/Out)_ )


---

## writeBoolean

---

#### _out.writeBoolean(arg0: _boolean_) : _[Out](../../resources/Out)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _[Out](../../resources/Out)_ )


---

## writeByte

---

#### _out.writeByte(arg0: _int_) : _[Out](../../resources/Out)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _[Out](../../resources/Out)_ )


---

## writeChar

---

#### _out.writeChar(arg0: _char_) : _[Out](../../resources/Out)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _char_ |   |

##### Return

( _[Out](../../resources/Out)_ )


---

## writeDouble

---

#### _out.writeDouble(arg0: _double_) : _[Out](../../resources/Out)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _double_ |   |

##### Return

( _[Out](../../resources/Out)_ )


---

## writeFloat

---

#### _out.writeFloat(arg0: _float_) : _[Out](../../resources/Out)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _float_ |   |

##### Return

( _[Out](../../resources/Out)_ )


---

## writeInt

---

#### _out.writeInt(arg0: _int_) : _[Out](../../resources/Out)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _[Out](../../resources/Out)_ )


---

## writeLong

---

#### _out.writeLong(arg0: _long_) : _[Out](../../resources/Out)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _long_ |   |

##### Return

( _[Out](../../resources/Out)_ )


---

## writeShort

---

#### _out.writeShort(arg0: _short_) : _[Out](../../resources/Out)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _short_ |   |

##### Return

( _[Out](../../resources/Out)_ )


---

