---
id: convert
title: Convert
sidebar_label: Convert
---

Application data type converter.

---

## arrayToList

---

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>arrayToList</span>(<span style={{color: '#FF8000'}}>array</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>bytesFromText</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>bytesFromText</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>fromBase64</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>fromBase64</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>fromBase64AsBytes</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>fromBase64AsBytes</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>fromHTML</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>fromJSON</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>textFromBytes</span>(<span style={{color: '#FF8000'}}>bytes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>textFromBytes</span>(<span style={{color: '#FF8000'}}>bytes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>, <span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toBase64</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toBase64</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toBase64AsBytes</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toBase64AsBytes</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toByte</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toByte</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toByte</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toDouble</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toDouble</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toDouble</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toDouble</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toDouble</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toError</span>(<span style={{color: '#FF8000'}}>object</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Error</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toException</span>(<span style={{color: '#FF8000'}}>object</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Exception</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toFile</span>(<span style={{color: '#FF8000'}}>fileName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>contentType</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>bytes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toFloat</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toFloat</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toFloat</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toFloat</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toFloat</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toHEX</span>(<span style={{color: '#FF8000'}}>bytes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toHTML</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toHex</span>(<span style={{color: '#FF8000'}}>bytes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toInt</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toInt</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toInt</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toInt</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toInt</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toJSON</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toLong</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toLong</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toLong</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toLong</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toLong</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toObject</span>(<span style={{color: '#FF8000'}}>object</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toShort</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toShort</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toShort</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toThrowable</span>(<span style={{color: '#FF8000'}}>object</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Throwable</span>
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

#### <span style={{fontWeight: 'normal'}}>_convert</span>.<span style={{color: '#008000'}}>toUUID</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.UUID</span>
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

