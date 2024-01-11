---
id: convert
title: Convert
sidebar_label: Convert
---

Conversor de tipos de dados da aplicação.

---

## arrayToList

---

#### _convert.arrayToList(array: _java.lang.Object_) : _java.util.List_
##### Descrição

Converte um array de tipos primitivos para uma lista (coleção).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| array | _java.lang.Object_ | Array que será convertido numa lista (coleção). |

##### Retorno

( _java.util.List_ )

Nova lista com todos os elementos do array.

---

## fromBase64

---

#### _convert.fromBase64(conteúdo: _byte[]_) : string
##### Descrição

Converte o conteúdo com Base64 em uma string descodificada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | _byte[]_ | Conteúdo para ser convertido. |

##### Retorno

( string )

Retorna a string descodificada que estava em Base64.

---

#### _convert.fromBase64(conteúdo: string) : string
##### Descrição

Converte o conteúdo com Base64 em uma string descodificada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | string | Conteúdo para ser convertido. |

##### Retorno

( string )

Retorna a string descodificada que estava em Base64.

---

## fromBase64AsBytes

---

#### _convert.fromBase64AsBytes(conteúdo: _byte[]_) : _byte[]_
##### Descrição

Converte o conteúdo em Base64 para o array de bytes original descodificado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | _byte[]_ | Conteúdo para ser convertido. |

##### Retorno

( _byte[]_ )

Retorna os bytes descodificados que estavam em Base64.

---

#### _convert.fromBase64AsBytes(conteúdo: string) : _byte[]_
##### Descrição

Converte o conteúdo em Base64 para o array de bytes original descodificado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | string | Conteúdo para ser convertido. |

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
| conteúdo | string | Conteúdo para ser convertido. |

##### Retorno

( string )

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
| conteúdo | string | Conteúdo para ser convertido. |

##### Retorno

( string )

Texto com codificação dos caracteres especiais em JSON tranformado para texto normal.

---

## toBase64

---

#### _convert.toBase64(conteúdo: _byte[]_) : string
##### Descrição

Converte o conteúdo em uma string codificada com Base64.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | _byte[]_ | Conteúdo para ser convertido. |

##### Retorno

( string )

Retorna a string codificada em Base64.

---

#### _convert.toBase64(conteúdo: string) : string
##### Descrição

Converte o conteúdo em uma string codificada com Base64.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | string | Conteúdo para ser convertido. |

##### Retorno

( string )

Retorna a string codificada em Base64.

---

## toBase64AsBytes

---

#### _convert.toBase64AsBytes(conteúdo: _byte[]_) : _byte[]_
##### Descrição

Converte o conteúdo em uma string codificada com Base64.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | _byte[]_ | Conteúdo para ser convertido. |

##### Retorno

( _byte[]_ )

Retorna a string codificada em Base64.

---

#### _convert.toBase64AsBytes(conteúdo: string) : _byte[]_
##### Descrição

Converte o conteúdo em codificação Base64.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | string | Conteúdo para ser convertido. |

##### Retorno

( _byte[]_ )

Retorna os bytes codificados em Base64.

---

## toByte

---

#### _convert.toByte(valor: _int_) : _byte_
##### Descrição

Converte o valor recebido para **byte**.

##### Como Usar

```javascript
_convert.toByte(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valor | _int_ | Valor para ser convertido. |

##### Retorno

( _byte_ )

Retorna o valor recebido em **byte**.

---

#### _convert.toByte(valor: _long_) : _byte_
##### Descrição

Converte o valor recebido para **byte**.

##### Como Usar

```javascript
_convert.toByte(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valor | _long_ | Valor para ser convertido. |

##### Retorno

( _byte_ )

Retorna o valor recebido em **byte**.

---

#### _convert.toByte(valor: _short_) : _byte_
##### Descrição

Converte o valor recebido para **byte**.

##### Como Usar

```javascript
_convert.toByte(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valor | _short_ | Valor para ser convertido. |

##### Retorno

( _byte_ )

Retorna o valor recebido em **byte**.

---

## toDouble

---

#### _convert.toDouble(valor: _byte_) : _double_
##### Descrição

Converte o valor recebido para **double**.

##### Como Usar

```javascript
_convert.toDouble(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valor | _byte_ | Valor para ser convertido. |

##### Retorno

( _double_ )

Retorna o valor recebido em **double**.

---

#### _convert.toDouble(valor: _float_) : _double_
##### Descrição

Converte o valor recebido para **double**.

##### Como Usar

```javascript
_convert.toDouble(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valor | _float_ | Valor para ser convertido. |

##### Retorno

( _double_ )

Retorna o valor recebido em **double**.

---

#### _convert.toDouble(valor: _int_) : _double_
##### Descrição

Converte o valor recebido para **double**.

##### Como Usar

```javascript
_convert.toDouble(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valor | _int_ | Valor para ser convertido. |

##### Retorno

( _double_ )

Retorna o valor recebido em **double**.

---

#### _convert.toDouble(valor: _long_) : _double_
##### Descrição

Converte o valor recebido para **double**.

##### Como Usar

```javascript
_convert.toDouble(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valor | _long_ | Valor para ser convertido. |

##### Retorno

( _double_ )

Retorna o valor recebido em **double**.

---

#### _convert.toDouble(valor: _short_) : _double_
##### Descrição

Converte o valor recebido para **double**.

##### Como Usar

```javascript
_convert.toDouble(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valor | _short_ | Valor para ser convertido. |

##### Retorno

( _double_ )

Retorna o valor recebido em **double**.

---

## toError

---

#### _convert.toError(objeto: _java.lang.Object_) : _java.lang.Error_
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
| objeto | _java.lang.Object_ | Objeto para ser convertido. |

##### Retorno

( _java.lang.Error_ )

Retorna o objeto convertido em Error.

---

## toException

---

#### _convert.toException(objeto: _java.lang.Object_) : _java.lang.Exception_
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
| objeto | _java.lang.Object_ | Objeto para ser convertido. |

##### Retorno

( _java.lang.Exception_ )

Retorna o objeto convertido em Exception.

---

## toFile

---

#### _convert.toFile(nome: string, conteúdo: string, bytes: _byte[]_) : _[File](../../objects/File)_
##### Descrição

Inicia um objeto de ficheiro em memória com o conteúdo dos bytes recebidos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| nome | string | Nome do ficheiro. |
| conteúdo | string | Tipo de conteúdo. |
| bytes | _byte[]_ | Bytes que representam o conteúdo do ficheiro. |

##### Retorno

( _[File](../../objects/File)_ )

Objeto do ficheiro iniciado que permite a manipulação dos bytes como ficheiro.

---

## toFloat

---

#### _convert.toFloat(valor: _byte_) : _float_
##### Descrição

Converte o valor recebido para **float**

##### Como Usar

```javascript
_convert.toFloat(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valor | _byte_ | Valor para ser convertido. |

##### Retorno

( _float_ )

Retorna o valor recebido em **float**.

---

#### _convert.toFloat(valor: _double_) : _float_
##### Descrição

Converte o valor recebido para **float**

##### Como Usar

```javascript
_convert.toFloat(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valor | _double_ | Valor para ser convertido. |

##### Retorno

( _float_ )

Retorna o valor recebido em **float**.

---

#### _convert.toFloat(valor: _int_) : _float_
##### Descrição

Converte o valor recebido para **float**

##### Como Usar

```javascript
_convert.toFloat(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valor | _int_ | Valor para ser convertido. |

##### Retorno

( _float_ )

Retorna o valor recebido em **float**.

---

#### _convert.toFloat(valor: _long_) : _float_
##### Descrição

Converte o valor recebido para **float**

##### Como Usar

```javascript
_convert.toFloat(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valor | _long_ | Valor para ser convertido. |

##### Retorno

( _float_ )

Retorna o valor recebido em **float**.

---

#### _convert.toFloat(valor: _short_) : _float_
##### Descrição

Converte o valor recebido para **float**

##### Como Usar

```javascript
_convert.toFloat(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valor | _short_ | Valor para ser convertido. |

##### Retorno

( _float_ )

Retorna o valor recebido em **float**.

---

## toHEX

---

#### _convert.toHEX(bytes: _byte[]_) : string
##### Descrição

Converte os bytes em **hexadecimal** com letras maiúsculas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| bytes | _byte[]_ | Bytes para serem convertidos. |

##### Retorno

( string )

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
| conteúdo | string | Conteúdp para ser convertido. |

##### Retorno

( string )

Texto formatado com códificação dos caracteres especiais em HTML.

---

## toHex

---

#### _convert.toHex(bytes: _byte[]_) : string
##### Descrição

Converte os bytes em **hexadecimal** com letras minúsculas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| bytes | _byte[]_ | Bytes para serem convertidos. |

##### Retorno

( string )

Retorna os bytes recebidos em **hexadecimal** em minúsculas.

---

## toInt

---

#### _convert.toInt(valor: _byte_) : _int_
##### Descrição

Converte o valor recebido para **int**.

##### Como Usar

```javascript
_convert.toInt(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valor | _byte_ | Valor para ser convertido. |

##### Retorno

( _int_ )

Retorna o valor recebido em **int**.

---

#### _convert.toInt(valor: _double_) : _int_
##### Descrição

Converte o valor recebido para **int**.

##### Como Usar

```javascript
_convert.toInt(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valor | _double_ | Valor para ser convertido. |

##### Retorno

( _int_ )

Retorna o valor recebido em **int**.

---

#### _convert.toInt(valor: _float_) : _int_
##### Descrição

Converte o valor recebido para **int**.

##### Como Usar

```javascript
_convert.toInt(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valor | _float_ | Valor para ser convertido. |

##### Retorno

( _int_ )

Retorna o valor recebido em **int**.

---

#### _convert.toInt(valor: _long_) : _int_
##### Descrição

Converte o valor recebido para **int**.

##### Como Usar

```javascript
_convert.toInt(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valor | _long_ | Valor para ser convertido. |

##### Retorno

( _int_ )

Retorna o valor recebido em **int**.

---

#### _convert.toInt(valor: _short_) : _int_
##### Descrição

Converte o valor recebido para **int**.

##### Como Usar

```javascript
_convert.toInt(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valor | _short_ | Valor para ser convertido. |

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
| conteúdo | string | Conteúdo para ser convertido. |

##### Retorno

( string )

Texto formatado com códificação dos caracteres especiais em JSON.

---

## toLong

---

#### _convert.toLong(valor: _byte_) : _long_
##### Descrição

Converte o valor recebido para **long**.

##### Como Usar

```javascript
_convert.toLong(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valor | _byte_ | Valor para ser convertido. |

##### Retorno

( _long_ )

Retorna o valor recebido em **long**.

---

#### _convert.toLong(valor: _double_) : _long_
##### Descrição

Converte o valor recebido para **long**.

##### Como Usar

```javascript
_convert.toLong(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valor | _double_ | Valor para ser convertido. |

##### Retorno

( _long_ )

Retorna o valor recebido em **long**.

---

#### _convert.toLong(valor: _float_) : _long_
##### Descrição

Converte o valor recebido para **long**.

##### Como Usar

```javascript
_convert.toLong(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valor | _float_ | Valor para ser convertido. |

##### Retorno

( _long_ )

Retorna o valor recebido em **long**.

---

#### _convert.toLong(valor: _int_) : _long_
##### Descrição

Converte o valor recebido para **long**.

##### Como Usar

```javascript
_convert.toLong(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valor | _int_ | Valor para ser convertido. |

##### Retorno

( _long_ )

Retorna o valor recebido em **long**.

---

#### _convert.toLong(valor: _short_) : _long_
##### Descrição

Converte o valor recebido para **long**.

##### Como Usar

```javascript
_convert.toLong(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valor | _short_ | Valor para ser convertido. |

##### Retorno

( _long_ )

Retorna o valor recebido em **long**.

---

## toObject

---

#### _convert.toObject(objeto: _java.lang.Object_) : _java.lang.Object_
##### Descrição

Converte o objecto recebido em um tipo de objeto genérico.

##### Como Usar

```javascript
const objetoGenerico = _convert.toObject("Texto...")

```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| objeto | _java.lang.Object_ | Objeto para ser convertido. |

##### Retorno

( _java.lang.Object_ )

Retorna como tipo de objeto genérico.

---

## toShort

---

#### _convert.toShort(valor: _byte_) : _short_
##### Descrição

Converte o valor recebido para **short**.

##### Como Usar

```javascript
_convert.toShort(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valor | _byte_ | Valor para ser convertido. |

##### Retorno

( _short_ )

Retorna o valor recebido em **short**.

---

#### _convert.toShort(valor: _int_) : _short_
##### Descrição

Converte o valor recebido para **short**.

##### Como Usar

```javascript
_convert.toShort(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valor | _int_ | Valor para ser convertido. |

##### Retorno

( _short_ )

Retorna o valor recebido em **short**.

---

#### _convert.toShort(valor: _long_) : _short_
##### Descrição

Converte o valor recebido para **short**.

##### Como Usar

```javascript
_convert.toShort(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valor | _long_ | Valor para ser convertido. |

##### Retorno

( _short_ )

Retorna o valor recebido em **short**.

---

## toThrowable

---

#### _convert.toThrowable(objeto: _java.lang.Object_) : _java.lang.Throwable_
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
| objeto | _java.lang.Object_ | Objeto para ser convertido. |

##### Retorno

( _java.lang.Throwable_ )

Retorna o objeto transformado em objeto de erro do tipo Throwable.

---

## toUUID

---

#### _convert.toUUID(valor: string) : _java.util.UUID_
##### Descrição

Inicia um objeto de UUID com o conteúdo recebido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valor | string | String com conteúdo no formato de UUID. |

##### Retorno

( _java.util.UUID_ )

Objeto do UUID iniciado.

---

