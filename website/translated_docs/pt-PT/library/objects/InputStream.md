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
##### Retorno

( _int_ )


---

## close

---

#### close() : _void_
##### Retorno

( _void_ )


---

## mark

---

#### mark(arg0: _int_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _void_ )


---

## markSupported

---

#### markSupported() : _boolean_
##### Retorno

( _boolean_ )


---

## nullInputStream

---

#### nullInputStream() : _java.io.InputStream_
##### Retorno

( _java.io.InputStream_ )


---

## read

---

#### read() : _int_
##### Retorno

( _int_ )


---

#### read(arg0: _byte[]_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Retorno

( _int_ )


---

#### read(arg0: _byte[]_, arg1: _int_, arg2: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte[]_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |

##### Retorno

( _int_ )


---

## readAll

---

#### readAll() : string
##### Retorno

( string )


---

#### readAll(in: _java.io.InputStream_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| in | _java.io.InputStream_ |   |

##### Retorno

( string )


---

#### readAll(in: _java.io.InputStream_, charset: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| in | _java.io.InputStream_ |   |
| charset | string |   |

##### Retorno

( string )


---

#### readAll(r: _java.io.Reader_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| r | _java.io.Reader_ |   |

##### Retorno

( string )


---

## readAllAndClose

---

#### readAllAndClose() : string
##### Retorno

( string )


---

## readAllBytes

---

#### readAllBytes() : _byte[]_
##### Retorno

( _byte[]_ )


---

#### readAllBytes(in: _java.io.InputStream_) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| in | _java.io.InputStream_ |   |

##### Retorno

( _byte[]_ )


---

## readAllBytesFromFile

---

#### readAllBytesFromFile(file: _java.io.File_) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| file | _java.io.File_ |   |

##### Retorno

( _byte[]_ )


---

#### readAllBytesFromFile(file: string) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| file | string |   |

##### Retorno

( _byte[]_ )


---

#### readAllBytesFromFile(file: _java.nio.file.Path_) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| file | _java.nio.file.Path_ |   |

##### Retorno

( _byte[]_ )


---

## readFromFile

---

#### readFromFile(path: _java.io.File_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| path | _java.io.File_ |   |

##### Retorno

( string )


---

#### readFromFile(path: _java.io.File_, charset: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| path | _java.io.File_ |   |
| charset | string |   |

##### Retorno

( string )


---

#### readFromFile(path: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| path | string |   |

##### Retorno

( string )


---

#### readFromFile(path: string, charset: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| path | string |   |
| charset | string |   |

##### Retorno

( string )


---

#### readFromFile(path: _java.nio.file.Path_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| path | _java.nio.file.Path_ |   |

##### Retorno

( string )


---

#### readFromFile(path: _java.nio.file.Path_, charset: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| path | _java.nio.file.Path_ |   |
| charset | string |   |

##### Retorno

( string )


---

## readLine

---

#### readLine() : string
##### Retorno

( string )


---

#### readLine(in: _java.io.InputStream_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| in | _java.io.InputStream_ |   |

##### Retorno

( string )


---

## readNBytes

---

#### readNBytes(arg0: _byte[]_, arg1: _int_, arg2: _int_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte[]_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |

##### Retorno

( _int_ )


---

#### readNBytes(arg0: _int_) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _byte[]_ )


---

## readString

---

#### readString() : string
##### Retorno

( string )


---

#### readString(charset: _java.nio.charset.Charset_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| charset | _java.nio.charset.Charset_ |   |

##### Retorno

( string )


---

## readStringAndClose

---

#### readStringAndClose() : string
##### Retorno

( string )


---

#### readStringAndClose(charset: _java.nio.charset.Charset_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| charset | _java.nio.charset.Charset_ |   |

##### Retorno

( string )


---

## reset

---

#### reset() : _void_
##### Retorno

( _void_ )


---

## skip

---

#### skip(arg0: _long_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _long_ |   |

##### Retorno

( _long_ )


---

## skipNBytes

---

#### skipNBytes(arg0: _long_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _long_ |   |

##### Retorno

( _void_ )


---

## transferTo

---

#### transferTo(arg0: _java.io.OutputStream_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _java.io.OutputStream_ |   |

##### Retorno

( _long_ )


---

## writeTo

---

#### writeTo(out: _[OutputStream](../../objects/OutputStream)_) : _[InputStream](../../objects/InputStream)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| out | _[OutputStream](../../objects/OutputStream)_ |   |

##### Retorno

( _[InputStream](../../objects/InputStream)_ )


---

## writeToAndClose

---

#### writeToAndClose(out: _[OutputStream](../../objects/OutputStream)_) : _[InputStream](../../objects/InputStream)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| out | _[OutputStream](../../objects/OutputStream)_ |   |

##### Retorno

( _[InputStream](../../objects/InputStream)_ )


---

