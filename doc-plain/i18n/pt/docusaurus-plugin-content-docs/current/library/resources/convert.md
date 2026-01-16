---
id: convert
title: Convert
sidebar_label: Convert
---

Conversor de tipos de dados da aplicação.

---

## arrayToList

---

#### _convert.arrayToList(array: java.lang.Object) : java.util.List
##### Descrição

Converte um array de tipos primitivos para uma lista (coleção).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **array** | _java.lang.Object_ | Array que será convertido numa lista (coleção). |

##### Retorno

( _java.util.List_ )

Nova lista com todos os elementos do array.

---

## bytesFromText

---

#### _convert.bytesFromText(text: string) : byte[]
##### Descrição

Converte um text em array de bytes.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **text** | _string_ | Conteúdo em texto. |

##### Retorno

( _byte[]_ )

Retorna o array de bytes obtido do texto.

---

#### _convert.bytesFromText(text: string, charset: string) : byte[]
##### Descrição

Converte um text em array de bytes.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **text** | _string_ | Conteúdo em texto. |
| **charset** | _string_ | Código de codificação de caracteres. |

##### Retorno

( _byte[]_ )

Retorna o array de bytes obtido do texto.

---

## fromBase64

---

#### _convert.fromBase64(conteúdo: byte[]) : string
##### Descrição

Converte o conteúdo com Base64 em uma string descodificada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _byte[]_ | Conteúdo para ser convertido. |

##### Retorno

( _string_ )

Retorna a string descodificada que estava em Base64.

---

#### _convert.fromBase64(conteúdo: string) : string
##### Descrição

Converte o conteúdo com Base64 em uma string descodificada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _string_ | Conteúdo para ser convertido. |

##### Retorno

( _string_ )

Retorna a string descodificada que estava em Base64.

---

## fromBase64AsBytes

---

#### _convert.fromBase64AsBytes(conteúdo: byte[]) : byte[]
##### Descrição

Converte o conteúdo em Base64 para o array de bytes original descodificado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _byte[]_ | Conteúdo para ser convertido. |

##### Retorno

( _byte[]_ )

Retorna os bytes descodificados que estavam em Base64.

---

#### _convert.fromBase64AsBytes(conteúdo: string) : byte[]
##### Descrição

Converte o conteúdo em Base64 para o array de bytes original descodificado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _string_ | Conteúdo para ser convertido. |

##### Retorno

( _byte[]_ )

Retorna os bytes descodificados que estavam em Base64.

---

## fromHTML

---

#### _convert.fromHTML(conteúdo: string) : string
##### Descrição

Transforma a codificação de caracteres especiais de HTML para texto normal.

##### Como Usar

```javascript
// Vai imprimir: €s Ação
_out.print(_convert.fromHTML("&euro;s A&ccedil;&atilde;o"))
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _string_ | Conteúdo para ser convertido. |

##### Retorno

( _string_ )

Texto com códificação dos caracteres especiais em HTML tranformado para texto normal.

---

## fromJSON

---

#### _convert.fromJSON(conteúdo: string) : string
##### Descrição

Transforma a codificação de caracteres especiais de JSON para texto normal.

##### Como Usar

```javascript
// Vai imprimir: €s Ação
_out.print(_convert.toJSON("\u20ACs A\u00E7\u00E3o"))
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _string_ | Conteúdo para ser convertido. |

##### Retorno

( _string_ )

Texto com codificação dos caracteres especiais em JSON tranformado para texto normal.

---

## textFromBytes

---

#### _convert.textFromBytes(bytes: byte[]) : string
##### Descrição

Converte um array de bytes em text.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bytes** | _byte[]_ | Array de bytes. |

##### Retorno

( _string_ )

Retorna o texto obtido do array de bytes.

---

#### _convert.textFromBytes(bytes: byte[], charset: string) : string
##### Descrição

Converte um array de bytes em text.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bytes** | _byte[]_ | Array de bytes. |
| **charset** | _string_ | Código de codificação de caracteres. |

##### Retorno

( _string_ )

Retorna o texto obtido do array de bytes.

---

## toBase64

---

#### _convert.toBase64(conteúdo: byte[]) : string
##### Descrição

Converte o conteúdo em uma string codificada com Base64.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _byte[]_ | Conteúdo para ser convertido. |

##### Retorno

( _string_ )

Retorna a string codificada em Base64.

---

#### _convert.toBase64(conteúdo: string) : string
##### Descrição

Converte o conteúdo em uma string codificada com Base64.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _string_ | Conteúdo para ser convertido. |

##### Retorno

( _string_ )

Retorna a string codificada em Base64.

---

## toBase64AsBytes

---

#### _convert.toBase64AsBytes(conteúdo: byte[]) : byte[]
##### Descrição

Converte o conteúdo em uma string codificada com Base64.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _byte[]_ | Conteúdo para ser convertido. |

##### Retorno

( _byte[]_ )

Retorna a string codificada em Base64.

---

#### _convert.toBase64AsBytes(conteúdo: string) : byte[]
##### Descrição

Converte o conteúdo em codificação Base64.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _string_ | Conteúdo para ser convertido. |

##### Retorno

( _byte[]_ )

Retorna os bytes codificados em Base64.

---

## toByte

---

#### _convert.toByte(valor: int) : byte
##### Descrição

Converte o valor recebido para **byte**.

##### Como Usar

```javascript
_convert.toByte(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _int_ | Valor para ser convertido. |

##### Retorno

( _byte_ )

Retorna o valor recebido em **byte**.

---

#### _convert.toByte(valor: long) : byte
##### Descrição

Converte o valor recebido para **byte**.

##### Como Usar

```javascript
_convert.toByte(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _long_ | Valor para ser convertido. |

##### Retorno

( _byte_ )

Retorna o valor recebido em **byte**.

---

#### _convert.toByte(valor: short) : byte
##### Descrição

Converte o valor recebido para **byte**.

##### Como Usar

```javascript
_convert.toByte(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _short_ | Valor para ser convertido. |

##### Retorno

( _byte_ )

Retorna o valor recebido em **byte**.

---

## toDouble

---

#### _convert.toDouble(valor: byte) : double
##### Descrição

Converte o valor recebido para **double**.

##### Como Usar

```javascript
_convert.toDouble(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _byte_ | Valor para ser convertido. |

##### Retorno

( _double_ )

Retorna o valor recebido em **double**.

---

#### _convert.toDouble(valor: float) : double
##### Descrição

Converte o valor recebido para **double**.

##### Como Usar

```javascript
_convert.toDouble(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _float_ | Valor para ser convertido. |

##### Retorno

( _double_ )

Retorna o valor recebido em **double**.

---

#### _convert.toDouble(valor: int) : double
##### Descrição

Converte o valor recebido para **double**.

##### Como Usar

```javascript
_convert.toDouble(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _int_ | Valor para ser convertido. |

##### Retorno

( _double_ )

Retorna o valor recebido em **double**.

---

#### _convert.toDouble(valor: long) : double
##### Descrição

Converte o valor recebido para **double**.

##### Como Usar

```javascript
_convert.toDouble(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _long_ | Valor para ser convertido. |

##### Retorno

( _double_ )

Retorna o valor recebido em **double**.

---

#### _convert.toDouble(valor: short) : double
##### Descrição

Converte o valor recebido para **double**.

##### Como Usar

```javascript
_convert.toDouble(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _short_ | Valor para ser convertido. |

##### Retorno

( _double_ )

Retorna o valor recebido em **double**.

---

## toError

---

#### _convert.toError(objeto: java.lang.Object) : java.lang.Error
##### Descrição

Converte o objecto recebido em um objeto de Error.

##### Como Usar

```javascript
const erroOriginal = _error.createError("Falha grave.")
const generico = _convert.toObject(erroOriginal)
const deVoltaComoErro = _convert.toError(generico)
if (_error.isError(deVoltaComoErro)) {
    _error.info("É realmente uma falha grave...")
}
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **objeto** | _java.lang.Object_ | Objeto para ser convertido. |

##### Retorno

( _java.lang.Error_ )

Retorna o objeto convertido em Error.

---

## toException

---

#### _convert.toException(objeto: java.lang.Object) : java.lang.Exception
##### Descrição

Converte o objecto recebido em um objeto de Exception.

##### Como Usar

```javascript
const excecaoOriginal = _error.createError("Falha grave.")
const generico = _convert.toObject(excecaoOriginal)
const deVoltaComoExcecao = _convert.toException(generico)
if (_error.isException(deVoltaComoExcecao)) {
    _error.info("É realmente uma falha grave...")
}
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **objeto** | _java.lang.Object_ | Objeto para ser convertido. |

##### Retorno

( _java.lang.Exception_ )

Retorna o objeto convertido em Exception.

---

## toFile

---

#### _convert.toFile(nome: string, conteúdo: string, bytes: byte[]) : [File](/docs/library/objects/File)
##### Descrição

Inicia um objeto de ficheiro em memória com o conteúdo dos bytes recebidos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | Nome do ficheiro. |
| **conteúdo** | _string_ | Tipo de conteúdo. |
| **bytes** | _byte[]_ | Bytes que representam o conteúdo do ficheiro. |

##### Retorno

( _[File](/docs/library/objects/File)_ )

Objeto do ficheiro iniciado que permite a manipulação dos bytes como ficheiro.

---

## toFloat

---

#### _convert.toFloat(valor: byte) : float
##### Descrição

Converte o valor recebido para **float**

##### Como Usar

```javascript
_convert.toFloat(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _byte_ | Valor para ser convertido. |

##### Retorno

( _float_ )

Retorna o valor recebido em **float**.

---

#### _convert.toFloat(valor: double) : float
##### Descrição

Converte o valor recebido para **float**

##### Como Usar

```javascript
_convert.toFloat(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _double_ | Valor para ser convertido. |

##### Retorno

( _float_ )

Retorna o valor recebido em **float**.

---

#### _convert.toFloat(valor: int) : float
##### Descrição

Converte o valor recebido para **float**

##### Como Usar

```javascript
_convert.toFloat(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _int_ | Valor para ser convertido. |

##### Retorno

( _float_ )

Retorna o valor recebido em **float**.

---

#### _convert.toFloat(valor: long) : float
##### Descrição

Converte o valor recebido para **float**

##### Como Usar

```javascript
_convert.toFloat(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _long_ | Valor para ser convertido. |

##### Retorno

( _float_ )

Retorna o valor recebido em **float**.

---

#### _convert.toFloat(valor: short) : float
##### Descrição

Converte o valor recebido para **float**

##### Como Usar

```javascript
_convert.toFloat(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _short_ | Valor para ser convertido. |

##### Retorno

( _float_ )

Retorna o valor recebido em **float**.

---

## toHEX

---

#### _convert.toHEX(bytes: byte[]) : string
##### Descrição

Converte os bytes em **hexadecimal** com letras maiúsculas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bytes** | _byte[]_ | Bytes para serem convertidos. |

##### Retorno

( _string_ )

Retorna os bytes recebidos em **hexadecimal** em minúsculas.

---

## toHTML

---

#### _convert.toHTML(conteúdo: string) : string
##### Descrição

Converte os caracteres especiais no texto para garantir que são válidos em HTML.

##### Como Usar

```javascript
// Vai imprimir: &euro;s A&ccedil;&atilde;o
_out.print(_convert.toHTML("€s Ação"))
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _string_ | Conteúdp para ser convertido. |

##### Retorno

( _string_ )

Texto formatado com códificação dos caracteres especiais em HTML.

---

## toHex

---

#### _convert.toHex(bytes: byte[]) : string
##### Descrição

Converte os bytes em **hexadecimal** com letras minúsculas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bytes** | _byte[]_ | Bytes para serem convertidos. |

##### Retorno

( _string_ )

Retorna os bytes recebidos em **hexadecimal** em minúsculas.

---

## toInt

---

#### _convert.toInt(valor: byte) : int
##### Descrição

Converte o valor recebido para **int**.

##### Como Usar

```javascript
_convert.toInt(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _byte_ | Valor para ser convertido. |

##### Retorno

( _int_ )

Retorna o valor recebido em **int**.

---

#### _convert.toInt(valor: double) : int
##### Descrição

Converte o valor recebido para **int**.

##### Como Usar

```javascript
_convert.toInt(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _double_ | Valor para ser convertido. |

##### Retorno

( _int_ )

Retorna o valor recebido em **int**.

---

#### _convert.toInt(valor: float) : int
##### Descrição

Converte o valor recebido para **int**.

##### Como Usar

```javascript
_convert.toInt(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _float_ | Valor para ser convertido. |

##### Retorno

( _int_ )

Retorna o valor recebido em **int**.

---

#### _convert.toInt(valor: long) : int
##### Descrição

Converte o valor recebido para **int**.

##### Como Usar

```javascript
_convert.toInt(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _long_ | Valor para ser convertido. |

##### Retorno

( _int_ )

Retorna o valor recebido em **int**.

---

#### _convert.toInt(valor: short) : int
##### Descrição

Converte o valor recebido para **int**.

##### Como Usar

```javascript
_convert.toInt(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _short_ | Valor para ser convertido. |

##### Retorno

( _int_ )

Retorna o valor recebido em **int**.

---

## toJSON

---

#### _convert.toJSON(conteúdo: string) : string
##### Descrição

Converte os caracteres especiais no texto para garantir que são válidos em JSON.

##### Como Usar

```javascript
// Vai imprimir: \u20ACs A\u00E7\u00E3o
_out.print(_convert.toJSON("€s Ação"))
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _string_ | Conteúdo para ser convertido. |

##### Retorno

( _string_ )

Texto formatado com códificação dos caracteres especiais em JSON.

---

## toLong

---

#### _convert.toLong(valor: byte) : long
##### Descrição

Converte o valor recebido para **long**.

##### Como Usar

```javascript
_convert.toLong(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _byte_ | Valor para ser convertido. |

##### Retorno

( _long_ )

Retorna o valor recebido em **long**.

---

#### _convert.toLong(valor: double) : long
##### Descrição

Converte o valor recebido para **long**.

##### Como Usar

```javascript
_convert.toLong(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _double_ | Valor para ser convertido. |

##### Retorno

( _long_ )

Retorna o valor recebido em **long**.

---

#### _convert.toLong(valor: float) : long
##### Descrição

Converte o valor recebido para **long**.

##### Como Usar

```javascript
_convert.toLong(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _float_ | Valor para ser convertido. |

##### Retorno

( _long_ )

Retorna o valor recebido em **long**.

---

#### _convert.toLong(valor: int) : long
##### Descrição

Converte o valor recebido para **long**.

##### Como Usar

```javascript
_convert.toLong(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _int_ | Valor para ser convertido. |

##### Retorno

( _long_ )

Retorna o valor recebido em **long**.

---

#### _convert.toLong(valor: short) : long
##### Descrição

Converte o valor recebido para **long**.

##### Como Usar

```javascript
_convert.toLong(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _short_ | Valor para ser convertido. |

##### Retorno

( _long_ )

Retorna o valor recebido em **long**.

---

## toObject

---

#### _convert.toObject(objeto: java.lang.Object) : java.lang.Object
##### Descrição

Converte o objecto recebido em um tipo de objeto genérico.

##### Como Usar

```javascript
const objetoGenerico = _convert.toObject("Texto...")

```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **objeto** | _java.lang.Object_ | Objeto para ser convertido. |

##### Retorno

( _java.lang.Object_ )

Retorna como tipo de objeto genérico.

---

## toShort

---

#### _convert.toShort(valor: byte) : short
##### Descrição

Converte o valor recebido para **short**.

##### Como Usar

```javascript
_convert.toShort(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _byte_ | Valor para ser convertido. |

##### Retorno

( _short_ )

Retorna o valor recebido em **short**.

---

#### _convert.toShort(valor: int) : short
##### Descrição

Converte o valor recebido para **short**.

##### Como Usar

```javascript
_convert.toShort(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _int_ | Valor para ser convertido. |

##### Retorno

( _short_ )

Retorna o valor recebido em **short**.

---

#### _convert.toShort(valor: long) : short
##### Descrição

Converte o valor recebido para **short**.

##### Como Usar

```javascript
_convert.toShort(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _long_ | Valor para ser convertido. |

##### Retorno

( _short_ )

Retorna o valor recebido em **short**.

---

## toThrowable

---

#### _convert.toThrowable(objeto: java.lang.Object) : java.lang.Throwable
##### Descrição

Converte o objecto recebido em um objeto de erro do tipo Throwable.

##### Como Usar

```javascript
const erro = _error.createError("Falha grave.")
const comoThrowable = _convert.toThrowable(erro)
_error.rise(comoThrowable)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **objeto** | _java.lang.Object_ | Objeto para ser convertido. |

##### Retorno

( _java.lang.Throwable_ )

Retorna o objeto transformado em objeto de erro do tipo Throwable.

---

## toUUID

---

#### _convert.toUUID(valor: string) : java.util.UUID
##### Descrição

Inicia um objeto de UUID com o conteúdo recebido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valor** | _string_ | String com conteúdo no formato de UUID. |

##### Retorno

( _java.util.UUID_ )

Objeto do UUID iniciado.

---

