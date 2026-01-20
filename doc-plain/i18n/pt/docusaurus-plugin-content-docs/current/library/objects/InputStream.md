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
##### Retorno

( _int_ )


---

## close

---

#### close() : void
##### Retorno

( _void_ )


---

## mark

---

#### mark(arg0: int) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _int_ |   |

##### Retorno

( _void_ )


---

## markSupported

---

#### markSupported() : boolean
##### Retorno

( _boolean_ )


---

## nullInputStream

---

#### nullInputStream() : [InputStream](/docs/library/objects/InputStream)
##### Retorno

( _[InputStream](/docs/library/objects/InputStream)_ )


---

## read

---

#### read() : int
##### Retorno

( _int_ )


---

#### read(arg0: byte[]) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _byte[]_ |   |

##### Retorno

( _int_ )


---

#### read(bytes: byte[], off: int, length: int) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bytes** | _byte[]_ |   |
| **off** | _int_ |   |
| **length** | _int_ |   |

##### Retorno

( _int_ )


---

## readAll

---

#### readAll() : string
##### Retorno

( _string_ )


---

#### readAll(in: [InputStream](/docs/library/objects/InputStream)) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |

##### Retorno

( _string_ )


---

#### readAll(in: [InputStream](/docs/library/objects/InputStream), charset: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **charset** | _string_ |   |

##### Retorno

( _string_ )


---

#### readAll(r: java.io.Reader) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **r** | _java.io.Reader_ |   |

##### Retorno

( _string_ )


---

## readAllAndClose

---

#### readAllAndClose() : string
##### Retorno

( _string_ )


---

## readAllBytes

---

#### readAllBytes() : byte[]
##### Retorno

( _byte[]_ )


---

#### readAllBytes(in: [InputStream](/docs/library/objects/InputStream)) : byte[]
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |

##### Retorno

( _byte[]_ )


---

## readAllBytesAndClose

---

#### readAllBytesAndClose() : byte[]
##### Retorno

( _byte[]_ )


---

## readAllBytesFromFile

---

#### readAllBytesFromFile(file: java.io.File) : byte[]
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _java.io.File_ |   |

##### Retorno

( _byte[]_ )


---

#### readAllBytesFromFile(file: string) : byte[]
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _string_ |   |

##### Retorno

( _byte[]_ )


---

#### readAllBytesFromFile(file: java.nio.file.Path) : byte[]
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _java.nio.file.Path_ |   |

##### Retorno

( _byte[]_ )


---

## readFromFile

---

#### readFromFile(path: java.io.File) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _java.io.File_ |   |

##### Retorno

( _string_ )


---

#### readFromFile(path: java.io.File, charset: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _java.io.File_ |   |
| **charset** | _string_ |   |

##### Retorno

( _string_ )


---

#### readFromFile(path: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |

##### Retorno

( _string_ )


---

#### readFromFile(path: string, charset: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _string_ |   |
| **charset** | _string_ |   |

##### Retorno

( _string_ )


---

#### readFromFile(path: java.nio.file.Path) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _java.nio.file.Path_ |   |

##### Retorno

( _string_ )


---

#### readFromFile(path: java.nio.file.Path, charset: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **path** | _java.nio.file.Path_ |   |
| **charset** | _string_ |   |

##### Retorno

( _string_ )


---

## readLine

---

#### readLine() : string
##### Retorno

( _string_ )


---

#### readLine(in: [InputStream](/docs/library/objects/InputStream)) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |

##### Retorno

( _string_ )


---

## readNBytes

---

#### readNBytes(arg0: byte[], arg1: int, arg2: int) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _byte[]_ |   |
| **arg1** | _int_ |   |
| **arg2** | _int_ |   |

##### Retorno

( _int_ )


---

#### readNBytes(arg0: int) : byte[]
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _int_ |   |

##### Retorno

( _byte[]_ )


---

## readString

---

#### readString() : string
##### Retorno

( _string_ )


---

#### readString(charset: java.nio.charset.Charset) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **charset** | _java.nio.charset.Charset_ |   |

##### Retorno

( _string_ )


---

## readStringAndClose

---

#### readStringAndClose() : string
##### Retorno

( _string_ )


---

#### readStringAndClose(charset: java.nio.charset.Charset) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **charset** | _java.nio.charset.Charset_ |   |

##### Retorno

( _string_ )


---

## reset

---

#### reset() : void
##### Retorno

( _void_ )


---

## skip

---

#### skip(arg0: long) : long
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _long_ |   |

##### Retorno

( _long_ )


---

## skipNBytes

---

#### skipNBytes(arg0: long) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _long_ |   |

##### Retorno

( _void_ )


---

## transferTo

---

#### transferTo(arg0: [OutputStream](/docs/library/objects/OutputStream)) : long
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _long_ )


---

## writeTo

---

#### writeTo(out: [OutputStream](/docs/library/objects/OutputStream)) : [InputStream](/docs/library/objects/InputStream)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _[InputStream](/docs/library/objects/InputStream)_ )


---

#### writeTo(out: [OutputStream](/docs/library/objects/OutputStream)) : [InputStream](/docs/library/objects/InputStream)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _[InputStream](/docs/library/objects/InputStream)_ )


---

## writeToAndClose

---

#### writeToAndClose(out: [OutputStream](/docs/library/objects/OutputStream)) : [InputStream](/docs/library/objects/InputStream)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _[InputStream](/docs/library/objects/InputStream)_ )


---

#### writeToAndClose(out: [OutputStream](/docs/library/objects/OutputStream)) : [InputStream](/docs/library/objects/InputStream)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _[InputStream](/docs/library/objects/InputStream)_ )


---

