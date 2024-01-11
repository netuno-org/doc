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

#### read(arg0: _byte[]_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Return

( _int_ )


---

#### read(arg0: _byte[]_, arg1: _int_, arg2: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte[]_ |   |
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

#### readAll(in: _java.io.InputStream_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| in | _java.io.InputStream_ |   |

##### Return

( string )


---

#### readAll(in: _java.io.InputStream_, charset: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| in | _java.io.InputStream_ |   |
| charset | string |   |

##### Return

( string )


---

#### readAll(r: _java.io.Reader_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| r | _java.io.Reader_ |   |

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

#### readAllBytes() : _byte[]_
##### Return

( _byte[]_ )


---

#### readAllBytes(in: _java.io.InputStream_) : _byte[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| in | _java.io.InputStream_ |   |

##### Return

( _byte[]_ )


---

## readAllBytesFromFile

---

#### readAllBytesFromFile(file: _java.io.File_) : _byte[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| file | _java.io.File_ |   |

##### Return

( _byte[]_ )


---

#### readAllBytesFromFile(file: string) : _byte[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| file | string |   |

##### Return

( _byte[]_ )


---

#### readAllBytesFromFile(file: _java.nio.file.Path_) : _byte[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| file | _java.nio.file.Path_ |   |

##### Return

( _byte[]_ )


---

## readFromFile

---

#### readFromFile(path: _java.io.File_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | _java.io.File_ |   |

##### Return

( string )


---

#### readFromFile(path: _java.io.File_, charset: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | _java.io.File_ |   |
| charset | string |   |

##### Return

( string )


---

#### readFromFile(path: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string |   |

##### Return

( string )


---

#### readFromFile(path: string, charset: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string |   |
| charset | string |   |

##### Return

( string )


---

#### readFromFile(path: _java.nio.file.Path_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | _java.nio.file.Path_ |   |

##### Return

( string )


---

#### readFromFile(path: _java.nio.file.Path_, charset: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | _java.nio.file.Path_ |   |
| charset | string |   |

##### Return

( string )


---

## readLine

---

#### readLine() : string
##### Return

( string )


---

#### readLine(in: _java.io.InputStream_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| in | _java.io.InputStream_ |   |

##### Return

( string )


---

## readNBytes

---

#### readNBytes(arg0: _byte[]_, arg1: _int_, arg2: _int_) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte[]_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |

##### Return

( _int_ )


---

#### readNBytes(arg0: _int_) : _byte[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _byte[]_ )


---

## readString

---

#### readString() : string
##### Return

( string )


---

#### readString(charset: _java.nio.charset.Charset_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| charset | _java.nio.charset.Charset_ |   |

##### Return

( string )


---

## readStringAndClose

---

#### readStringAndClose() : string
##### Return

( string )


---

#### readStringAndClose(charset: _java.nio.charset.Charset_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| charset | _java.nio.charset.Charset_ |   |

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

#### writeTo(out: _[OutputStream](../../objects/OutputStream)_) : _[InputStream](../../objects/InputStream)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| out | _[OutputStream](../../objects/OutputStream)_ |   |

##### Return

( _[InputStream](../../objects/InputStream)_ )


---

## writeToAndClose

---

#### writeToAndClose(out: _[OutputStream](../../objects/OutputStream)_) : _[InputStream](../../objects/InputStream)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| out | _[OutputStream](../../objects/OutputStream)_ |   |

##### Return

( _[InputStream](../../objects/InputStream)_ )


---

