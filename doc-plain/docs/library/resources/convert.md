---
id: convert
title: Convert
sidebar_label: Convert
---

Application data type converter.

---

## arrayToList

---

#### _convert.arrayToList(array: java.lang.Object) : java.util.List
##### Description

Converts an array of primitive types to a list (collection).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **array** | _java.lang.Object_ | Array that will be converted into a list (collection). |

##### Return

( _java.util.List_ )

New list with all array elements.

---

## bytesFromText

---

#### _convert.bytesFromText(text: string) : byte[]
##### Description

Converts a text to byte array.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _string_ | Text content. |

##### Return

( _byte[]_ )

Returns the byte array obtained from text.

---

#### _convert.bytesFromText(text: string, charset: string) : byte[]
##### Description

Converts a text to byte array.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _string_ | Text content. |
| **charset** | _string_ | Character encoding code. |

##### Return

( _byte[]_ )

Returns the byte array obtained from text.

---

## fromBase64

---

#### _convert.fromBase64(content: byte[]) : string
##### Description

Converts Base64 content to a decoded string.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _byte[]_ | Content to be converted. |

##### Return

( _string_ )

Returns the decoded string that was in Base64.

---

#### _convert.fromBase64(content: string) : string
##### Description

Converts Base64 content to a decoded string.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Content to be converted. |

##### Return

( _string_ )

Returns the decoded string that was in Base64.

---

## fromBase64AsBytes

---

#### _convert.fromBase64AsBytes(content: byte[]) : byte[]
##### Description

Converts the Base64 content to the original decoded byte array.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _byte[]_ | Content to be converted. |

##### Return

( _byte[]_ )

Returns decoded bytes that were in Base64.

---

#### _convert.fromBase64AsBytes(content: string) : byte[]
##### Description

Converts the Base64 content to the original decoded byte array.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Content to be converted. |

##### Return

( _byte[]_ )

Returns decoded bytes that were in Base64.

---

## fromHTML

---

#### _convert.fromHTML(content: string) : string
##### Description

Transforms the encoding of special HTML characters to plain text.

##### How To Use

```javascript
// Will print: €s Ação
_out.print(_convert.fromHTML("&euro;s A&ccedil;&atilde;o"))
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Content to be converted. |

##### Return

( _string_ )

Text with encoding of special characters in HTML transformed to normal text.

---

## fromJSON

---

#### _convert.fromJSON(content: string) : string
##### Description

Transforms the encoding of special characters from JSON to normal text.

##### How To Use

```javascript
// Will print: €s Ação
_out.print(_convert.toJSON("\u20ACs A\u00E7\u00E3o"))
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Content to be converted. |

##### Return

( _string_ )

Text with encoding of special characters in JSON transformed to normal text.

---

## textFromBytes

---

#### _convert.textFromBytes(bytes: byte[]) : string
##### Description

Converts a byte array to text.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bytes** | _byte[]_ | Byte array. |

##### Return

( _string_ )

Returns the text obtained from the byte array.

---

#### _convert.textFromBytes(bytes: byte[], charset: string) : string
##### Description

Converts a byte array to text.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bytes** | _byte[]_ | Byte array. |
| **charset** | _string_ | Character encoding code. |

##### Return

( _string_ )

Returns the text obtained from the byte array.

---

## toBase64

---

#### _convert.toBase64(content: byte[]) : string
##### Description

Converts the content to a Base64 encoded string.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _byte[]_ | Content to be converted. |

##### Return

( _string_ )

Returns the encoded string in Base64.

---

#### _convert.toBase64(content: string) : string
##### Description

Converts the content to a Base64 encoded string.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Content to be converted. |

##### Return

( _string_ )

Returns the encoded string in Base64.

---

## toBase64AsBytes

---

#### _convert.toBase64AsBytes(content: byte[]) : byte[]
##### Description

Converts the content to a Base64 encoded string.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _byte[]_ | Content to be converted. |

##### Return

( _byte[]_ )

Returns the encoded string in Base64.

---

#### _convert.toBase64AsBytes(content: string) : byte[]
##### Description

Convert the content into Base64 encoding.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Content to be converted. |

##### Return

( _byte[]_ )

Returns Base64 encoded bytes.

---

## toByte

---

#### _convert.toByte(value: int) : byte
##### Description

Converts the received value to **byte**.

##### How To Use

```javascript
_convert.toByte(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _int_ | Value to be converted. |

##### Return

( _byte_ )

Returns the value received in **byte**.

---

#### _convert.toByte(value: long) : byte
##### Description

Converts the received value to **byte**.

##### How To Use

```javascript
_convert.toByte(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _long_ | Value to be converted. |

##### Return

( _byte_ )

Returns the value received in **byte**.

---

#### _convert.toByte(value: short) : byte
##### Description

Converts the received value to **byte**.

##### How To Use

```javascript
_convert.toByte(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _short_ | Value to be converted. |

##### Return

( _byte_ )

Returns the value received in **byte**.

---

## toDouble

---

#### _convert.toDouble(value: byte) : double
##### Description

Converts the received value to **double**.

##### How To Use

```javascript
_convert.toDouble(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _byte_ | Value to be converted. |

##### Return

( _double_ )

Retorna o valor recebido em **double**.

---

#### _convert.toDouble(value: float) : double
##### Description

Converts the received value to **double**.

##### How To Use

```javascript
_convert.toDouble(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _float_ | Value to be converted. |

##### Return

( _double_ )

Retorna o valor recebido em **double**.

---

#### _convert.toDouble(value: int) : double
##### Description

Converts the received value to **double**.

##### How To Use

```javascript
_convert.toDouble(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _int_ | Value to be converted. |

##### Return

( _double_ )

Retorna o valor recebido em **double**.

---

#### _convert.toDouble(value: long) : double
##### Description

Converts the received value to **double**.

##### How To Use

```javascript
_convert.toDouble(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _long_ | Value to be converted. |

##### Return

( _double_ )

Retorna o valor recebido em **double**.

---

#### _convert.toDouble(value: short) : double
##### Description

Converts the received value to **double**.

##### How To Use

```javascript
_convert.toDouble(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _short_ | Value to be converted. |

##### Return

( _double_ )

Retorna o valor recebido em **double**.

---

## toError

---

#### _convert.toError(object: java.lang.Object) : java.lang.Error
##### Description

Converts the received object to an Error object.

##### How To Use

```javascript
const originalError = _error.createError("Serious failure.")
const generic = _convert.toObject(originalError)
const backAsError = _convert.toError(generic)
if (_error.isError(backAsError)) {
    _error.info("It is really a serious failure...")
}
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **object** | _java.lang.Object_ | Object to be converted. |

##### Return

( _java.lang.Error_ )

Returns the object converted as Error.

---

## toException

---

#### _convert.toException(object: java.lang.Object) : java.lang.Exception
##### Description

Converts the received object to an Exception object.

##### How To Use

```javascript
const originalException = _error.createException("Serious failure.")
const generic = _convert.toObject(originalException)
const backAsException = _convert.toException(generic)
if (_error.isException(backAsException)) {
    _error.info("It is really a serious failure...")
}
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **object** | _java.lang.Object_ | Object to be converted. |

##### Return

( _java.lang.Exception_ )

Returns the object converted as Exception.

---

## toFile

---

#### _convert.toFile(fileName: string, contentType: string, bytes: byte[]) : [File](/docs/library/objects/File)
##### Description

Starts a file object in memory with the contents of the received bytes.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fileName** | _string_ | Name of the file. |
| **contentType** | _string_ | Type of content. |
| **bytes** | _byte[]_ | Bytes that represent the file content. |

##### Return

( _[File](/docs/library/objects/File)_ )

Object of the started file that allows the manipulation of bytes as a file.

---

## toFloat

---

#### _convert.toFloat(value: byte) : float
##### Description

Converts the received value to **float**.

##### How To Use

```javascript
_convert.toFloat(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _byte_ | Value to be converted. |

##### Return

( _float_ )

Retorna o valor recebido em **float**.

---

#### _convert.toFloat(value: double) : float
##### Description

Converts the received value to **float**.

##### How To Use

```javascript
_convert.toFloat(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _double_ | Value to be converted. |

##### Return

( _float_ )

Retorna o valor recebido em **float**.

---

#### _convert.toFloat(value: int) : float
##### Description

Converts the received value to **float**.

##### How To Use

```javascript
_convert.toFloat(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _int_ | Value to be converted. |

##### Return

( _float_ )

Retorna o valor recebido em **float**.

---

#### _convert.toFloat(value: long) : float
##### Description

Converts the received value to **float**.

##### How To Use

```javascript
_convert.toFloat(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _long_ | Value to be converted. |

##### Return

( _float_ )

Retorna o valor recebido em **float**.

---

#### _convert.toFloat(value: short) : float
##### Description

Converts the received value to **float**.

##### How To Use

```javascript
_convert.toFloat(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _short_ | Value to be converted. |

##### Return

( _float_ )

Retorna o valor recebido em **float**.

---

## toHEX

---

#### _convert.toHEX(bytes: byte[]) : string
##### Description

Convert bytes to **hexadecimal** with uppercase letters.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bytes** | _byte[]_ | Bytes to be converted. |

##### Return

( _string_ )

Return bytes received in **hexadecimal** in capital letters.

---

## toHTML

---

#### _convert.toHTML(content: string) : string
##### Description

Converts special characters in the text to ensure that they are valid in HTML.

##### How To Use

```javascript
// Will print: &euro;s A&ccedil;&atilde;o
_out.print(_convert.toHTML("€s Ação"))
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Content to be converted. |

##### Return

( _string_ )

Text formatted with encoding of special characters in HTML.

---

## toHex

---

#### _convert.toHex(bytes: byte[]) : string
##### Description

Convert bytes to **hexadecimal** with lowercase letters.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bytes** | _byte[]_ | Bytes to be converted. |

##### Return

( _string_ )

Return bytes received in **hexadecimal** in lowercase.

---

## toInt

---

#### _convert.toInt(value: byte) : int
##### Description

Converts the received value to **int**.

##### How To Use

```javascript
_convert.toInt(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _byte_ | Value to be converted. |

##### Return

( _int_ )

Retorna o valor recebido em **int**.

---

#### _convert.toInt(value: double) : int
##### Description

Converts the received value to **int**.

##### How To Use

```javascript
_convert.toInt(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _double_ | Value to be converted. |

##### Return

( _int_ )

Retorna o valor recebido em **int**.

---

#### _convert.toInt(value: float) : int
##### Description

Converts the received value to **int**.

##### How To Use

```javascript
_convert.toInt(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _float_ | Value to be converted. |

##### Return

( _int_ )

Retorna o valor recebido em **int**.

---

#### _convert.toInt(value: long) : int
##### Description

Converts the received value to **int**.

##### How To Use

```javascript
_convert.toInt(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _long_ | Value to be converted. |

##### Return

( _int_ )

Retorna o valor recebido em **int**.

---

#### _convert.toInt(value: short) : int
##### Description

Converts the received value to **int**.

##### How To Use

```javascript
_convert.toInt(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _short_ | Value to be converted. |

##### Return

( _int_ )

Retorna o valor recebido em **int**.

---

## toJSON

---

#### _convert.toJSON(content: string) : string
##### Description

Converts special characters in the text to ensure that they are valid in JSON.

##### How To Use

```javascript
// Will print: \u20ACs A\u00E7\u00E3o
_out.print(_convert.toJSON("€s Ação"))
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Content to be converted. |

##### Return

( _string_ )

Text formatted with encoding of special characters in JSON.

---

## toLong

---

#### _convert.toLong(value: byte) : long
##### Description

Converts the received value to **long**.

##### How To Use

```javascript
_convert.toLong(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _byte_ | Value to be converted. |

##### Return

( _long_ )

Retorna o valor recebido em **long**.

---

#### _convert.toLong(value: double) : long
##### Description

Converts the received value to **long**.

##### How To Use

```javascript
_convert.toLong(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _double_ | Value to be converted. |

##### Return

( _long_ )

Retorna o valor recebido em **long**.

---

#### _convert.toLong(value: float) : long
##### Description

Converts the received value to **long**.

##### How To Use

```javascript
_convert.toLong(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _float_ | Value to be converted. |

##### Return

( _long_ )

Retorna o valor recebido em **long**.

---

#### _convert.toLong(value: int) : long
##### Description

Converts the received value to **long**.

##### How To Use

```javascript
_convert.toLong(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _int_ | Value to be converted. |

##### Return

( _long_ )

Retorna o valor recebido em **long**.

---

#### _convert.toLong(value: short) : long
##### Description

Converts the received value to **long**.

##### How To Use

```javascript
_convert.toLong(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _short_ | Value to be converted. |

##### Return

( _long_ )

Retorna o valor recebido em **long**.

---

## toObject

---

#### _convert.toObject(object: java.lang.Object) : java.lang.Object
##### Description

Converts the received object to a generic object type.

##### How To Use

```javascript
const genericObject = _convert.toObject("Text...")

```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **object** | _java.lang.Object_ | Object to be converted. |

##### Return

( _java.lang.Object_ )

Returns as type of generic object.

---

## toShort

---

#### _convert.toShort(value: byte) : short
##### Description

Converts the received value to **short**.

##### How To Use

```javascript
_convert.toShort(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _byte_ | Value to be converted. |

##### Return

( _short_ )

Returns the value received in **short**.

---

#### _convert.toShort(value: int) : short
##### Description

Converts the received value to **short**.

##### How To Use

```javascript
_convert.toShort(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _int_ | Value to be converted. |

##### Return

( _short_ )

Returns the value received in **short**.

---

#### _convert.toShort(value: long) : short
##### Description

Converts the received value to **short**.

##### How To Use

```javascript
_convert.toShort(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _long_ | Value to be converted. |

##### Return

( _short_ )

Returns the value received in **short**.

---

## toThrowable

---

#### _convert.toThrowable(object: java.lang.Object) : java.lang.Throwable
##### Description

Converts the received object into a Throwable type error.

##### How To Use

```javascript
const error = _error.createError("Serious failure.")
const asThrowable = _convert.toThrowable(erro)
_error.rise(asThrowable)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **object** | _java.lang.Object_ | Object to be converted. |

##### Return

( _java.lang.Throwable_ )

Returns the Throwable type error.

---

## toUUID

---

#### _convert.toUUID(value: string) : java.util.UUID
##### Description

Inicia um objeto de UUID com o conteúdo recebido.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _string_ | String with content in the UUID format. |

##### Return

( _java.util.UUID_ )

Object of the started UUID.

---

