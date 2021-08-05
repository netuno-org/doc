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

#### _out.copy(arg0: _InputStream_) : _Out_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _InputStream_ |   |

##### Return

( _Out_ )


---

#### _out.copy(arg0: _InputStream_, arg1: _long_) : _Out_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _InputStream_ |   |
| arg1 | _long_ |   |

##### Return

( _Out_ )


---

#### _out.copy(arg0: _InputStream_, arg1: _long_, arg2: _long_) : _Out_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _InputStream_ |   |
| arg1 | _long_ |   |
| arg2 | _long_ |   |

##### Return

( _Out_ )


---

#### _out.copy(arg0: _[File](../../objects/File)_) : _Out_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[File](../../objects/File)_ |   |

##### Return

( _Out_ )


---

#### _out.copy(arg0: _[File](../../objects/File)_, arg1: _long_) : _Out_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[File](../../objects/File)_ |   |
| arg1 | _long_ |   |

##### Return

( _Out_ )


---

#### _out.copy(arg0: _[File](../../objects/File)_, arg1: _long_, arg2: _long_) : _Out_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[File](../../objects/File)_ |   |
| arg1 | _long_ |   |
| arg2 | _long_ |   |

##### Return

( _Out_ )


---

#### _out.copy(arg0: _Storage_) : _Out_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Storage_ |   |

##### Return

( _Out_ )


---

#### _out.copy(arg0: _Storage_, arg1: _long_) : _Out_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Storage_ |   |
| arg1 | _long_ |   |

##### Return

( _Out_ )


---

#### _out.copy(arg0: _Storage_, arg1: _long_, arg2: _long_) : _Out_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Storage_ |   |
| arg1 | _long_ |   |
| arg2 | _long_ |   |

##### Return

( _Out_ )


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

#### _out.getMirrors() : _List_
##### Description

Gets the output replicas.

##### Return

( _List_ )

List of replicas.

---

## init

---

#### _out.init() : _Out_
##### Description

Starts a new instance of output.

##### Return

( _Out_ )

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

#### _out.json(arg0: _Object_) : _Out_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _Out_ )


---

#### _out.json(arg0: string) : _Out_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Out_ )


---

#### _out.json(arg0: _List_) : _Out_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _List_ |   |

##### Return

( _Out_ )


---

#### _out.json(arg0: _Map_) : _Out_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Map_ |   |

##### Return

( _Out_ )


---

#### _out.json(arg0: _[Values](../../objects/Values)_) : _Out_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Return

( _Out_ )


---

## jsonHTMLEscape

---

#### _out.jsonHTMLEscape() : _boolean_
##### Return

( _boolean_ )


---

#### _out.jsonHTMLEscape(arg0: _boolean_) : _Out_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _Out_ )


---

## mirrors

---

#### _out.mirrors() : _List_
##### Description

Gets the output replicas.

##### Return

( _List_ )

List of replicas.

---

## output

---

#### _out.output() : _OutputStream_
##### Description

Provides the original output stream.

##### Return

( _OutputStream_ )

The original output stream..

---

## print

---

#### _out.print(bool: _boolean_) : _Out_
##### Description

Sends the boolean result.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| bool | _boolean_ | Boolean value that will be sent. |

##### Return

( _Out_ )

Current data output.

---

#### _out.print(character: _char_) : _Out_
##### Description

Sends the character.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| character | _char_ | Character that will be sent. |

##### Return

( _Out_ )

Current data output.

---

#### _out.print(text: _double_) : _Out_
##### Description

Sends the text content.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | _double_ | Content that will be sent. |

##### Return

( _Out_ )

Current data output.

---

#### _out.print(text: _float_) : _Out_
##### Description

Sends the text content.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | _float_ | Content that will be sent. |

##### Return

( _Out_ )

Current data output.

---

#### _out.print(number: _int_) : _Out_
##### Description

Sends the number.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| number | _int_ | Number that will be sent. |

##### Return

( _Out_ )

Current data output.

---

#### _out.print(obj: _Object_) : _Out_
##### Description

Converts the object to text and sends it.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| obj | _Object_ | Object that will be converted to text and sent. |

##### Return

( _Out_ )

Current data output.

---

#### _out.print(text: string) : _Out_
##### Description

Sends the text content.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | string | Content that will be sent. |

##### Return

( _Out_ )

Current data output.

---

#### _out.print(text: _long_) : _Out_
##### Description

Sends the text content.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | _long_ | Content that will be sent. |

##### Return

( _Out_ )

Current data output.

---

#### _out.print(text: _short_) : _Out_
##### Description

Sends the text content.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | _short_ | Content that will be sent. |

##### Return

( _Out_ )

Current data output.

---

## println

---

#### _out.println() : _Out_
##### Description

Sends a line break.

##### Return

( _Out_ )

Current data output.

---

#### _out.println(bool: _boolean_) : _Out_
##### Description

Sends the boolean result with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| bool | _boolean_ | Boolean value that will be sent with the line break. |

##### Return

( _Out_ )

Current data output.

---

#### _out.println(character: _char_) : _Out_
##### Description

Sends the character with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| character | _char_ | Character that will be sent with the line break. |

##### Return

( _Out_ )

Current data output.

---

#### _out.println(text: _double_) : _Out_
##### Description

Sends the text content with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | _double_ | Content that will be sent with the line break. |

##### Return

( _Out_ )

Current data output.

---

#### _out.println(text: _float_) : _Out_
##### Description

Sends the text content with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | _float_ | Content that will be sent with the line break. |

##### Return

( _Out_ )

Current data output.

---

#### _out.println(number: _int_) : _Out_
##### Description

Sends the number with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| number | _int_ | Number that will be sent with the line break. |

##### Return

( _Out_ )

Current data output.

---

#### _out.println(obj: _Object_) : _Out_
##### Description

Converts the object to text and sends it with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| obj | _Object_ | Object that will be converted to text and sent with the line break. |

##### Return

( _Out_ )

Current data output.

---

#### _out.println(text: string) : _Out_
##### Description

Sends the text content with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | string | Content that will be sent with the line break. |

##### Return

( _Out_ )

Current data output.

---

#### _out.println(text: _long_) : _Out_
##### Description

Sends the text content with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | _long_ | Content that will be sent with the line break. |

##### Return

( _Out_ )

Current data output.

---

#### _out.println(text: _short_) : _Out_
##### Description

Sends the text content with a line break.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| text | _short_ | Content that will be sent with the line break. |

##### Return

( _Out_ )

Current data output.

---

## setJSONHTMLEscape

---

#### _out.setJSONHTMLEscape(arg0: _boolean_) : _Out_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _Out_ )


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

#### _out.write(arg0: _byte[]_) : _Out_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Return

( _Out_ )


---

#### _out.write(arg0: _byte[]_, arg1: _int_, arg2: _int_) : _Out_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte[]_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |

##### Return

( _Out_ )


---

#### _out.write(arg0: _int_) : _Out_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _Out_ )


---

## writeBoolean

---

#### _out.writeBoolean(arg0: _boolean_) : _Out_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _Out_ )


---

## writeByte

---

#### _out.writeByte(arg0: _int_) : _Out_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _Out_ )


---

## writeChar

---

#### _out.writeChar(arg0: _char_) : _Out_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _char_ |   |

##### Return

( _Out_ )


---

## writeDouble

---

#### _out.writeDouble(arg0: _double_) : _Out_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _double_ |   |

##### Return

( _Out_ )


---

## writeFloat

---

#### _out.writeFloat(arg0: _float_) : _Out_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _float_ |   |

##### Return

( _Out_ )


---

## writeInt

---

#### _out.writeInt(arg0: _int_) : _Out_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _Out_ )


---

## writeLong

---

#### _out.writeLong(arg0: _long_) : _Out_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _long_ |   |

##### Return

( _Out_ )


---

## writeShort

---

#### _out.writeShort(arg0: _short_) : _Out_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _short_ |   |

##### Return

( _Out_ )


---

