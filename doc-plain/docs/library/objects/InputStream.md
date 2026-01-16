---
id: InputStream
title: InputStream
sidebar_label: InputStream
---

É utilizado para gerir a entrada do fluxo de dados.

---

## available

---

#### available() : int
##### Return

( _int_ )


---

## close

---

#### close() : void
##### Return

( _void_ )


---

## mark

---

#### mark(arg0: int) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _int_ |   |

##### Return

( _void_ )


---

## markSupported

---

#### markSupported() : boolean
##### Return

( _boolean_ )


---

## nullInputStream

---

#### nullInputStream() : [InputStream](/docs/library/objects/InputStream)
##### Return

( _[InputStream](/docs/library/objects/InputStream)_ )


---

## read

---

#### read() : int
##### Return

( _int_ )


---

#### read(arg0: byte[]) : int
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _byte[]_ |   |

##### Return

( _int_ )


---

#### read(bytes: byte[], off: int, length: int) : int
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bytes** | _byte[]_ |   |
| **off** | _int_ |   |
| **length** | _int_ |   |

##### Return

( _int_ )


---

## readAll

---

#### readAll() : string
##### Return

( _string_ )


---

#### readAll(in: [InputStream](/docs/library/objects/InputStream)) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |

##### Return

( _string_ )


---

#### readAll(in: [InputStream](/docs/library/objects/InputStream), charset: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **charset** | _string_ |   |

##### Return

( _string_ )


---

#### readAll(r: java.io.Reader) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **r** | _java.io.Reader_ |   |

##### Return

( _string_ )


---

## readAllAndClose

---

#### readAllAndClose() : string
##### Return

( _string_ )


---

## readAllBytes

---

#### readAllBytes() : byte[]
##### Return

( _byte[]_ )


---

#### readAllBytes(in: [InputStream](/docs/library/objects/InputStream)) : byte[]
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |

##### Return

( _byte[]_ )


---

## readAllBytesAndClose

---

#### readAllBytesAndClose() : byte[]
##### Return

( _byte[]_ )


---

## readAllBytesFromFile

---

#### readAllBytesFromFile(file: java.io.File) : byte[]
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _java.io.File_ |   |

##### Return

( _byte[]_ )


---

#### readAllBytesFromFile(file: string) : byte[]
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _string_ |   |

##### Return

( _byte[]_ )


---

#### readAllBytesFromFile(file: java.nio.file.Path) : byte[]
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _java.nio.file.Path_ |   |

##### Return

( _byte[]_ )


---

## readFromFile

---

#### readFromFile(path: java.io.File) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _java.io.File_ |   |

##### Return

( _string_ )


---

#### readFromFile(path: java.io.File, charset: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _java.io.File_ |   |
| **charset** | _string_ |   |

##### Return

( _string_ )


---

#### readFromFile(path: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ |   |

##### Return

( _string_ )


---

#### readFromFile(path: string, charset: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ |   |
| **charset** | _string_ |   |

##### Return

( _string_ )


---

#### readFromFile(path: java.nio.file.Path) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _java.nio.file.Path_ |   |

##### Return

( _string_ )


---

#### readFromFile(path: java.nio.file.Path, charset: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _java.nio.file.Path_ |   |
| **charset** | _string_ |   |

##### Return

( _string_ )


---

## readLine

---

#### readLine() : string
##### Return

( _string_ )


---

#### readLine(in: [InputStream](/docs/library/objects/InputStream)) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |

##### Return

( _string_ )


---

## readNBytes

---

#### readNBytes(arg0: byte[], arg1: int, arg2: int) : int
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _byte[]_ |   |
| **arg1** | _int_ |   |
| **arg2** | _int_ |   |

##### Return

( _int_ )


---

#### readNBytes(arg0: int) : byte[]
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _int_ |   |

##### Return

( _byte[]_ )


---

## readString

---

#### readString() : string
##### Return

( _string_ )


---

#### readString(charset: java.nio.charset.Charset) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **charset** | _java.nio.charset.Charset_ |   |

##### Return

( _string_ )


---

## readStringAndClose

---

#### readStringAndClose() : string
##### Return

( _string_ )


---

#### readStringAndClose(charset: java.nio.charset.Charset) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **charset** | _java.nio.charset.Charset_ |   |

##### Return

( _string_ )


---

## reset

---

#### reset() : void
##### Return

( _void_ )


---

## skip

---

#### skip(arg0: long) : long
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _long_ |   |

##### Return

( _long_ )


---

## skipNBytes

---

#### skipNBytes(arg0: long) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _long_ |   |

##### Return

( _void_ )


---

## transferTo

---

#### transferTo(arg0: [OutputStream](/docs/library/objects/OutputStream)) : long
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **arg0** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _long_ )


---

## writeTo

---

#### writeTo(out: [OutputStream](/docs/library/objects/OutputStream)) : [InputStream](/docs/library/objects/InputStream)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _[InputStream](/docs/library/objects/InputStream)_ )


---

#### writeTo(out: [OutputStream](/docs/library/objects/OutputStream)) : [InputStream](/docs/library/objects/InputStream)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _[InputStream](/docs/library/objects/InputStream)_ )


---

## writeToAndClose

---

#### writeToAndClose(out: [OutputStream](/docs/library/objects/OutputStream)) : [InputStream](/docs/library/objects/InputStream)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _[InputStream](/docs/library/objects/InputStream)_ )


---

#### writeToAndClose(out: [OutputStream](/docs/library/objects/OutputStream)) : [InputStream](/docs/library/objects/InputStream)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Return

( _[InputStream](/docs/library/objects/InputStream)_ )


---

