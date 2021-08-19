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

#### nullInputStream() : _InputStream_
##### Return

( _InputStream_ )


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

#### readAll(arg0: _InputStream_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _InputStream_ |   |

##### Return

( string )


---

#### readAll(arg0: _InputStream_, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _InputStream_ |   |
| arg1 | string |   |

##### Return

( string )


---

#### readAll(arg0: _Reader_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Reader_ |   |

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

#### readAllBytes(arg0: _InputStream_) : _byte[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _InputStream_ |   |

##### Return

( _byte[]_ )


---

## readAllBytesFromFile

---

#### readAllBytesFromFile(arg0: _File_) : _byte[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _File_ |   |

##### Return

( _byte[]_ )


---

#### readAllBytesFromFile(arg0: string) : _byte[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _byte[]_ )


---

#### readAllBytesFromFile(arg0: _Path_) : _byte[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Path_ |   |

##### Return

( _byte[]_ )


---

## readFromFile

---

#### readFromFile(arg0: _File_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _File_ |   |

##### Return

( string )


---

#### readFromFile(arg0: _File_, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _File_ |   |
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

#### readFromFile(arg0: _Path_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Path_ |   |

##### Return

( string )


---

#### readFromFile(arg0: _Path_, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Path_ |   |
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

#### readLine(arg0: _InputStream_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _InputStream_ |   |

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

#### readString(arg0: _Charset_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Charset_ |   |

##### Return

( string )


---

## readStringAndClose

---

#### readStringAndClose() : string
##### Return

( string )


---

#### readStringAndClose(arg0: _Charset_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Charset_ |   |

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

## transferTo

---

#### transferTo(arg0: _OutputStream_) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _OutputStream_ |   |

##### Return

( _long_ )


---

## writeTo

---

#### writeTo(arg0: _OutputStream_) : _InputStream_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _OutputStream_ |   |

##### Return

( _InputStream_ )


---

## writeToAndClose

---

#### writeToAndClose(arg0: _OutputStream_) : _InputStream_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _OutputStream_ |   |

##### Return

( _InputStream_ )


---

