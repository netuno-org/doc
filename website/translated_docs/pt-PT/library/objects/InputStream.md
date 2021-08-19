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

#### nullInputStream() : _InputStream_
##### Retorno

( _InputStream_ )


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

#### readAll(arg0: _InputStream_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _InputStream_ |   |

##### Retorno

( string )


---

#### readAll(arg0: _InputStream_, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _InputStream_ |   |
| arg1 | string |   |

##### Retorno

( string )


---

#### readAll(arg0: _Reader_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Reader_ |   |

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

#### readAllBytes(arg0: _InputStream_) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _InputStream_ |   |

##### Retorno

( _byte[]_ )


---

## readAllBytesFromFile

---

#### readAllBytesFromFile(arg0: _File_) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _File_ |   |

##### Retorno

( _byte[]_ )


---

#### readAllBytesFromFile(arg0: string) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _byte[]_ )


---

#### readAllBytesFromFile(arg0: _Path_) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Path_ |   |

##### Retorno

( _byte[]_ )


---

## readFromFile

---

#### readFromFile(arg0: _File_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _File_ |   |

##### Retorno

( string )


---

#### readFromFile(arg0: _File_, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _File_ |   |
| arg1 | string |   |

##### Retorno

( string )


---

#### readFromFile(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

#### readFromFile(arg0: string, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( string )


---

#### readFromFile(arg0: _Path_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Path_ |   |

##### Retorno

( string )


---

#### readFromFile(arg0: _Path_, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Path_ |   |
| arg1 | string |   |

##### Retorno

( string )


---

## readLine

---

#### readLine() : string
##### Retorno

( string )


---

#### readLine(arg0: _InputStream_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _InputStream_ |   |

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

#### readString(arg0: _Charset_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Charset_ |   |

##### Retorno

( string )


---

## readStringAndClose

---

#### readStringAndClose() : string
##### Retorno

( string )


---

#### readStringAndClose(arg0: _Charset_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Charset_ |   |

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

## transferTo

---

#### transferTo(arg0: _OutputStream_) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _OutputStream_ |   |

##### Retorno

( _long_ )


---

## writeTo

---

#### writeTo(arg0: _OutputStream_) : _InputStream_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _OutputStream_ |   |

##### Retorno

( _InputStream_ )


---

## writeToAndClose

---

#### writeToAndClose(arg0: _OutputStream_) : _InputStream_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _OutputStream_ |   |

##### Retorno

( _InputStream_ )


---

