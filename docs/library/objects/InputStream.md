---
id: InputStream
title: InputStream
sidebar_label: InputStream
---

É utilizado para gerir a entrada do fluxo de dados.

---

## available

---

#### available() : _int_
##### Return

( _int_ )


---

## close

---

#### close() : _void_
##### Return

( _void_ )


---

## mark

---

#### mark(arg0: _int_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _void_ )


---

## markSupported

---

#### markSupported() : _boolean_
##### Return

( _boolean_ )


---

## nullInputStream

---

#### nullInputStream() : _java.io.InputStream_
##### Return

( _java.io.InputStream_ )


---

## read

---

#### read() : _int_
##### Return

( _int_ )


---

#### read(arg0: _[B_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[B_ |   |

##### Return

( _int_ )


---

#### read(arg0: _[B_, arg1: _int_, arg2: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[B_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |

##### Return

( _int_ )


---

## readAll

---

#### readAll() : string
##### Return

( string )


---

#### readAll(arg0: _java.io.InputStream_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.io.InputStream_ |   |

##### Return

( string )


---

#### readAll(arg0: _java.io.InputStream_, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.io.InputStream_ |   |
| arg1 | string |   |

##### Return

( string )


---

#### readAll(arg0: _java.io.Reader_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.io.Reader_ |   |

##### Return

( string )


---

## readAllAndClose

---

#### readAllAndClose() : string
##### Return

( string )


---

## readAllBytes

---

#### readAllBytes() : _[B_
##### Return

( _[B_ )


---

#### readAllBytes(arg0: _java.io.InputStream_) : _[B_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.io.InputStream_ |   |

##### Return

( _[B_ )


---

## readAllBytesFromFile

---

#### readAllBytesFromFile(arg0: _java.io.File_) : _[B_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.io.File_ |   |

##### Return

( _[B_ )


---

#### readAllBytesFromFile(arg0: string) : _[B_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[B_ )


---

#### readAllBytesFromFile(arg0: _java.nio.file.Path_) : _[B_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.nio.file.Path_ |   |

##### Return

( _[B_ )


---

## readFromFile

---

#### readFromFile(arg0: _java.io.File_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.io.File_ |   |

##### Return

( string )


---

#### readFromFile(arg0: _java.io.File_, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.io.File_ |   |
| arg1 | string |   |

##### Return

( string )


---

#### readFromFile(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

#### readFromFile(arg0: string, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( string )


---

#### readFromFile(arg0: _java.nio.file.Path_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.nio.file.Path_ |   |

##### Return

( string )


---

#### readFromFile(arg0: _java.nio.file.Path_, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.nio.file.Path_ |   |
| arg1 | string |   |

##### Return

( string )


---

## readLine

---

#### readLine() : string
##### Return

( string )


---

#### readLine(arg0: _java.io.InputStream_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.io.InputStream_ |   |

##### Return

( string )


---

## readNBytes

---

#### readNBytes(arg0: _[B_, arg1: _int_, arg2: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[B_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |

##### Return

( _int_ )


---

#### readNBytes(arg0: _int_) : _[B_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _[B_ )


---

## readString

---

#### readString() : string
##### Return

( string )


---

#### readString(arg0: _java.nio.charset.Charset_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.nio.charset.Charset_ |   |

##### Return

( string )


---

## readStringAndClose

---

#### readStringAndClose() : string
##### Return

( string )


---

#### readStringAndClose(arg0: _java.nio.charset.Charset_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.nio.charset.Charset_ |   |

##### Return

( string )


---

## reset

---

#### reset() : _void_
##### Return

( _void_ )


---

## skip

---

#### skip(arg0: _long_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _long_ |   |

##### Return

( _long_ )


---

## skipNBytes

---

#### skipNBytes(arg0: _long_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _long_ |   |

##### Return

( _void_ )


---

## transferTo

---

#### transferTo(arg0: _java.io.OutputStream_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.io.OutputStream_ |   |

##### Return

( _long_ )


---

## writeTo

---

#### writeTo(arg0: _[OutputStream](../../objects/OutputStream)_) : _[InputStream](../../objects/InputStream)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[OutputStream](../../objects/OutputStream)_ |   |

##### Return

( _[InputStream](../../objects/InputStream)_ )


---

## writeToAndClose

---

#### writeToAndClose(arg0: _[OutputStream](../../objects/OutputStream)_) : _[InputStream](../../objects/InputStream)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[OutputStream](../../objects/OutputStream)_ |   |

##### Return

( _[InputStream](../../objects/InputStream)_ )


---

