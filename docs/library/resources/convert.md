---
id: convert
title: Convert
sidebar_label: Convert
---

Application data type converter.

---

## fromBase64

---

#### _convert.fromBase64(arg0: _byte[]_) : string
##### Description

Converts Base64 content to a decoded string.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Return

( string )

Returns the decoded string that was in Base64.

---

#### _convert.fromBase64(arg0: string) : string
##### Description

Converts Base64 content to a decoded string.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )

Returns the decoded string that was in Base64.

---

## fromBase64AsBytes

---

#### _convert.fromBase64AsBytes(arg0: _byte[]_) : _byte[]_
##### Description

Converts the Base64 content to the original decoded byte array.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Return

( _byte[]_ )

Returns decoded bytes that were in Base64.

---

#### _convert.fromBase64AsBytes(arg0: string) : _byte[]_
##### Description

Converts the Base64 content to the original decoded byte array.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _byte[]_ )

Returns decoded bytes that were in Base64.

---

## fromHTML

---

#### _convert.fromHTML(arg0: string) : string
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
| arg0 | string |   |

##### Return

( string )

Text with encoding of special characters in HTML transformed to normal text.

---

## fromJSON

---

#### _convert.fromJSON(arg0: string) : string
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
| arg0 | string |   |

##### Return

( string )

Text with encoding of special characters in JSON transformed to normal text.

---

## toBase64

---

#### _convert.toBase64(arg0: _byte[]_) : string
##### Description

Converts the content to a Base64 encoded string.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Return

( string )

Returns the Base64 encoded string.

---

#### _convert.toBase64(arg0: string) : string
##### Description

Converts the content to a Base64 encoded string.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )

Returns the Base64 encoded string.

---

## toBase64AsBytes

---

#### _convert.toBase64AsBytes(arg0: _byte[]_) : _byte[]_
##### Description

Convert the content into Base64 encoding.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Return

( _byte[]_ )

Returns Base64 encoded bytes.

---

#### _convert.toBase64AsBytes(arg0: string) : _byte[]_
##### Description

Convert the content into Base64 encoding.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _byte[]_ )

Returns Base64 encoded bytes.

---

## toByte

---

#### _convert.toByte(arg0: _int_) : _byte_
##### Description

Converts the received value to **byte**.

##### How To Use

```javascript
_convert.toByte(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _byte_ )

Returns the value received in **byte**.

---

#### _convert.toByte(arg0: _long_) : _byte_
##### Description

Converts the received value to **byte**.

##### How To Use

```javascript
_convert.toByte(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _long_ |   |

##### Return

( _byte_ )

Returns the value received in **byte**.

---

#### _convert.toByte(arg0: _short_) : _byte_
##### Description

Converts the received value to **byte**.

##### How To Use

```javascript
_convert.toByte(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _short_ |   |

##### Return

( _byte_ )

Returns the value received in **byte**.

---

## toDouble

---

#### _convert.toDouble(arg0: _byte_) : _double_
##### Description

Converts the received value to **double**.

##### How To Use

```javascript
_convert.toDouble(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte_ |   |

##### Return

( _double_ )

Retorna o valor recebido em **double**.

---

#### _convert.toDouble(arg0: _float_) : _double_
##### Description

Converts the received value to **double**.

##### How To Use

```javascript
_convert.toDouble(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _float_ |   |

##### Return

( _double_ )

Retorna o valor recebido em **double**.

---

#### _convert.toDouble(arg0: _int_) : _double_
##### Description

Converts the received value to **double**.

##### How To Use

```javascript
_convert.toDouble(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _double_ )

Retorna o valor recebido em **double**.

---

#### _convert.toDouble(arg0: _long_) : _double_
##### Description

Converts the received value to **double**.

##### How To Use

```javascript
_convert.toDouble(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _long_ |   |

##### Return

( _double_ )

Retorna o valor recebido em **double**.

---

#### _convert.toDouble(arg0: _short_) : _double_
##### Description

Converts the received value to **double**.

##### How To Use

```javascript
_convert.toDouble(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _short_ |   |

##### Return

( _double_ )

Retorna o valor recebido em **double**.

---

## toError

---

#### _convert.toError(arg0: _Object_) : _Error_
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
| arg0 | _Object_ |   |

##### Return

( _Error_ )

Returns the object converted as Error.

---

## toException

---

#### _convert.toException(arg0: _Object_) : _Exception_
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
| arg0 | _Object_ |   |

##### Return

( _Exception_ )

Returns the object converted as Exception.

---

## toFile

---

#### _convert.toFile(arg0: string, arg1: string, arg2: _byte[]_) : _[File](../../objects/File)_
##### Description

Starts a file object in memory with the contents of the received bytes.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | _byte[]_ |   |

##### Return

( _[File](../../objects/File)_ )

Object of the started file.

---

## toFloat

---

#### _convert.toFloat(arg0: _byte_) : _float_
##### Description

Converts the received value to **float**.

##### How To Use

```javascript
_convert.toFloat(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte_ |   |

##### Return

( _float_ )

Retorna o valor recebido em **float**.

---

#### _convert.toFloat(arg0: _double_) : _float_
##### Description

Converts the received value to **float**.

##### How To Use

```javascript
_convert.toFloat(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _double_ |   |

##### Return

( _float_ )

Retorna o valor recebido em **float**.

---

#### _convert.toFloat(arg0: _int_) : _float_
##### Description

Converts the received value to **float**.

##### How To Use

```javascript
_convert.toFloat(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _float_ )

Retorna o valor recebido em **float**.

---

#### _convert.toFloat(arg0: _long_) : _float_
##### Description

Converts the received value to **float**.

##### How To Use

```javascript
_convert.toFloat(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _long_ |   |

##### Return

( _float_ )

Retorna o valor recebido em **float**.

---

#### _convert.toFloat(arg0: _short_) : _float_
##### Description

Converts the received value to **float**.

##### How To Use

```javascript
_convert.toFloat(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _short_ |   |

##### Return

( _float_ )

Retorna o valor recebido em **float**.

---

## toHEX

---

#### _convert.toHEX(arg0: _byte[]_) : string
##### Description

Convert bytes to **hexadecimal** with uppercase letters.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Return

( string )

Return bytes received in **hexadecimal** in capital letters.

---

## toHTML

---

#### _convert.toHTML(arg0: string) : string
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
| arg0 | string |   |

##### Return

( string )

Text formatted with encoding of special characters in HTML.

---

## toHex

---

#### _convert.toHex(arg0: _byte[]_) : string
##### Description

Convert bytes to **hexadecimal** with lowercase letters.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Return

( string )

Return bytes received in **hexadecimal** in lowercase.

---

## toInt

---

#### _convert.toInt(arg0: _byte_) : _int_
##### Description

Converts the received value to **int**.

##### How To Use

```javascript
_convert.toInt(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte_ |   |

##### Return

( _int_ )

Retorna o valor recebido em **int**.

---

#### _convert.toInt(arg0: _double_) : _int_
##### Description

Converts the received value to **int**.

##### How To Use

```javascript
_convert.toInt(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _double_ |   |

##### Return

( _int_ )

Retorna o valor recebido em **int**.

---

#### _convert.toInt(arg0: _float_) : _int_
##### Description

Converts the received value to **int**.

##### How To Use

```javascript
_convert.toInt(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _float_ |   |

##### Return

( _int_ )

Retorna o valor recebido em **int**.

---

#### _convert.toInt(arg0: _long_) : _int_
##### Description

Converts the received value to **int**.

##### How To Use

```javascript
_convert.toInt(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _long_ |   |

##### Return

( _int_ )

Retorna o valor recebido em **int**.

---

#### _convert.toInt(arg0: _short_) : _int_
##### Description

Converts the received value to **int**.

##### How To Use

```javascript
_convert.toInt(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _short_ |   |

##### Return

( _int_ )

Retorna o valor recebido em **int**.

---

## toJSON

---

#### _convert.toJSON(arg0: string) : string
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
| arg0 | string |   |

##### Return

( string )

Text formatted with encoding of special characters in JSON.

---

## toLong

---

#### _convert.toLong(arg0: _byte_) : _long_
##### Description

Converts the received value to **long**.

##### How To Use

```javascript
_convert.toLong(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte_ |   |

##### Return

( _long_ )

Retorna o valor recebido em **long**.

---

#### _convert.toLong(arg0: _double_) : _long_
##### Description

Converts the received value to **long**.

##### How To Use

```javascript
_convert.toLong(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _double_ |   |

##### Return

( _long_ )

Retorna o valor recebido em **long**.

---

#### _convert.toLong(arg0: _float_) : _long_
##### Description

Converts the received value to **long**.

##### How To Use

```javascript
_convert.toLong(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _float_ |   |

##### Return

( _long_ )

Retorna o valor recebido em **long**.

---

#### _convert.toLong(arg0: _int_) : _long_
##### Description

Converts the received value to **long**.

##### How To Use

```javascript
_convert.toLong(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _long_ )

Retorna o valor recebido em **long**.

---

#### _convert.toLong(arg0: _short_) : _long_
##### Description

Converts the received value to **long**.

##### How To Use

```javascript
_convert.toLong(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _short_ |   |

##### Return

( _long_ )

Retorna o valor recebido em **long**.

---

## toObject

---

#### _convert.toObject(arg0: _Object_) : _Object_
##### Description

Converts the received object to a generic object type.

##### How To Use

```javascript
const genericObject = _convert.toObject("Text...")

```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Object_ |   |

##### Return

( _Object_ )

Returns as type of generic object.

---

## toShort

---

#### _convert.toShort(arg0: _byte_) : _short_
##### Description

Converts the received value to **short**.

##### How To Use

```javascript
_convert.toShort(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte_ |   |

##### Return

( _short_ )

Returns the value received in **short**.

---

#### _convert.toShort(arg0: _int_) : _short_
##### Description

Converts the received value to **short**.

##### How To Use

```javascript
_convert.toShort(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _short_ )

Returns the value received in **short**.

---

#### _convert.toShort(arg0: _long_) : _short_
##### Description

Converts the received value to **short**.

##### How To Use

```javascript
_convert.toShort(3456)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _long_ |   |

##### Return

( _short_ )

Returns the value received in **short**.

---

## toThrowable

---

#### _convert.toThrowable(arg0: _Object_) : _Throwable_
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
| arg0 | _Object_ |   |

##### Return

( _Throwable_ )

Returns the Throwable type error.

---

## toUUID

---

#### _convert.toUUID(value: string) : _UUID_
##### Description

Inicia um objeto de UUID com o conteúdo recebido.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| value | string | String with content in the UUID format. |

##### Return

( _UUID_ )

Object of the started UUID.

---

