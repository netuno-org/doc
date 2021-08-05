---
id: convert
title: Convert
sidebar_label: Convert
---

Conversor de tipos de dados da aplicação.

---

## fromHTML

---

#### _convert.fromHTML(arg0: string) : string
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
| arg0 | string |   |

##### Retorno

( string )

Texto com códificação dos caracteres especiais em HTML tranformado para texto normal.

---

## fromJSON

---

#### _convert.fromJSON(arg0: string) : string
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
| arg0 | string |   |

##### Retorno

( string )

Texto com códificação dos caracteres especiais em JSON tranformado para texto normal.

---

## toByte

---

#### _convert.toByte(arg0: _int_) : _byte_
##### Descrição

Converte o valor recebido para **byte**.

##### Como Usar

```javascript
_convert.toByte(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _byte_ )

Retorna o valor recebido em **byte**.

---

#### _convert.toByte(arg0: _long_) : _byte_
##### Descrição

Converte o valor recebido para **byte**.

##### Como Usar

```javascript
_convert.toByte(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _long_ |   |

##### Retorno

( _byte_ )

Retorna o valor recebido em **byte**.

---

#### _convert.toByte(arg0: _short_) : _byte_
##### Descrição

Converte o valor recebido para **byte**.

##### Como Usar

```javascript
_convert.toByte(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _short_ |   |

##### Retorno

( _byte_ )

Retorna o valor recebido em **byte**.

---

## toDouble

---

#### _convert.toDouble(arg0: _byte_) : _double_
##### Descrição

Converte o valor recebido para **double**.

##### Como Usar

```javascript
_convert.toDouble(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte_ |   |

##### Retorno

( _double_ )

Retorna o valor recebido em **double**.

---

#### _convert.toDouble(arg0: _float_) : _double_
##### Descrição

Converte o valor recebido para **double**.

##### Como Usar

```javascript
_convert.toDouble(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _float_ |   |

##### Retorno

( _double_ )

Retorna o valor recebido em **double**.

---

#### _convert.toDouble(arg0: _int_) : _double_
##### Descrição

Converte o valor recebido para **double**.

##### Como Usar

```javascript
_convert.toDouble(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _double_ )

Retorna o valor recebido em **double**.

---

#### _convert.toDouble(arg0: _long_) : _double_
##### Descrição

Converte o valor recebido para **double**.

##### Como Usar

```javascript
_convert.toDouble(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _long_ |   |

##### Retorno

( _double_ )

Retorna o valor recebido em **double**.

---

#### _convert.toDouble(arg0: _short_) : _double_
##### Descrição

Converte o valor recebido para **double**.

##### Como Usar

```javascript
_convert.toDouble(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _short_ |   |

##### Retorno

( _double_ )

Retorna o valor recebido em **double**.

---

## toError

---

#### _convert.toError(arg0: _Object_) : _Error_
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
| arg0 | _Object_ |   |

##### Retorno

( _Error_ )

Retorna o objeto convertido em Error.

---

## toException

---

#### _convert.toException(arg0: _Object_) : _Exception_
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
| arg0 | _Object_ |   |

##### Retorno

( _Exception_ )

Retorna o objeto convertido em Exception.

---

## toFile

---

#### _convert.toFile(arg0: string, arg1: string, arg2: _byte[]_) : _[File](../../objects/File)_
##### Descrição

Inicia um objeto de ficheiro em memória com o conteúdo dos bytes recebidos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | _byte[]_ |   |

##### Retorno

( _[File](../../objects/File)_ )

Objeto do ficheiro iniciado.

---

## toFloat

---

#### _convert.toFloat(arg0: _byte_) : _float_
##### Descrição

Converte o valor recebido para **float**

##### Como Usar

```javascript
_convert.toFloat(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte_ |   |

##### Retorno

( _float_ )

Retorna o valor recebido em **float**.

---

#### _convert.toFloat(arg0: _double_) : _float_
##### Descrição

Converte o valor recebido para **float**

##### Como Usar

```javascript
_convert.toFloat(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _double_ |   |

##### Retorno

( _float_ )

Retorna o valor recebido em **float**.

---

#### _convert.toFloat(arg0: _int_) : _float_
##### Descrição

Converte o valor recebido para **float**

##### Como Usar

```javascript
_convert.toFloat(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _float_ )

Retorna o valor recebido em **float**.

---

#### _convert.toFloat(arg0: _long_) : _float_
##### Descrição

Converte o valor recebido para **float**

##### Como Usar

```javascript
_convert.toFloat(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _long_ |   |

##### Retorno

( _float_ )

Retorna o valor recebido em **float**.

---

#### _convert.toFloat(arg0: _short_) : _float_
##### Descrição

Converte o valor recebido para **float**

##### Como Usar

```javascript
_convert.toFloat(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _short_ |   |

##### Retorno

( _float_ )

Retorna o valor recebido em **float**.

---

## toHTML

---

#### _convert.toHTML(arg0: string) : string
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
| arg0 | string |   |

##### Retorno

( string )

Texto formatado com códificação dos caracteres especiais em HTML.

---

## toInt

---

#### _convert.toInt(arg0: _byte_) : _int_
##### Descrição

Converte o valor recebido para **int**.

##### Como Usar

```javascript
_convert.toInt(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte_ |   |

##### Retorno

( _int_ )

Retorna o valor recebido em **int**.

---

#### _convert.toInt(arg0: _double_) : _int_
##### Descrição

Converte o valor recebido para **int**.

##### Como Usar

```javascript
_convert.toInt(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _double_ |   |

##### Retorno

( _int_ )

Retorna o valor recebido em **int**.

---

#### _convert.toInt(arg0: _float_) : _int_
##### Descrição

Converte o valor recebido para **int**.

##### Como Usar

```javascript
_convert.toInt(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _float_ |   |

##### Retorno

( _int_ )

Retorna o valor recebido em **int**.

---

#### _convert.toInt(arg0: _long_) : _int_
##### Descrição

Converte o valor recebido para **int**.

##### Como Usar

```javascript
_convert.toInt(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _long_ |   |

##### Retorno

( _int_ )

Retorna o valor recebido em **int**.

---

#### _convert.toInt(arg0: _short_) : _int_
##### Descrição

Converte o valor recebido para **int**.

##### Como Usar

```javascript
_convert.toInt(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _short_ |   |

##### Retorno

( _int_ )

Retorna o valor recebido em **int**.

---

## toJSON

---

#### _convert.toJSON(arg0: string) : string
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
| arg0 | string |   |

##### Retorno

( string )

Texto formatado com códificação dos caracteres especiais em JSON.

---

## toLong

---

#### _convert.toLong(arg0: _byte_) : _long_
##### Descrição

Converte o valor recebido para **long**.

##### Como Usar

```javascript
_convert.toLong(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte_ |   |

##### Retorno

( _long_ )

Retorna o valor recebido em **long**.

---

#### _convert.toLong(arg0: _double_) : _long_
##### Descrição

Converte o valor recebido para **long**.

##### Como Usar

```javascript
_convert.toLong(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _double_ |   |

##### Retorno

( _long_ )

Retorna o valor recebido em **long**.

---

#### _convert.toLong(arg0: _float_) : _long_
##### Descrição

Converte o valor recebido para **long**.

##### Como Usar

```javascript
_convert.toLong(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _float_ |   |

##### Retorno

( _long_ )

Retorna o valor recebido em **long**.

---

#### _convert.toLong(arg0: _int_) : _long_
##### Descrição

Converte o valor recebido para **long**.

##### Como Usar

```javascript
_convert.toLong(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _long_ )

Retorna o valor recebido em **long**.

---

#### _convert.toLong(arg0: _short_) : _long_
##### Descrição

Converte o valor recebido para **long**.

##### Como Usar

```javascript
_convert.toLong(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _short_ |   |

##### Retorno

( _long_ )

Retorna o valor recebido em **long**.

---

## toObject

---

#### _convert.toObject(arg0: _Object_) : _Object_
##### Descrição

Converte o objecto recebido em um tipo de objeto genérico.

##### Como Usar

```javascript
const objetoGenerico = _convert.toObject("Texto...")

```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _Object_ )

Retorna como tipo de objeto genérico.

---

## toShort

---

#### _convert.toShort(arg0: _byte_) : _short_
##### Descrição

Converte o valor recebido para **short**.

##### Como Usar

```javascript
_convert.toShort(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte_ |   |

##### Retorno

( _short_ )

Retorna o valor recebido em **short**.

---

#### _convert.toShort(arg0: _int_) : _short_
##### Descrição

Converte o valor recebido para **short**.

##### Como Usar

```javascript
_convert.toShort(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _short_ )

Retorna o valor recebido em **short**.

---

#### _convert.toShort(arg0: _long_) : _short_
##### Descrição

Converte o valor recebido para **short**.

##### Como Usar

```javascript
_convert.toShort(3456)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _long_ |   |

##### Retorno

( _short_ )

Retorna o valor recebido em **short**.

---

## toThrowable

---

#### _convert.toThrowable(arg0: _Object_) : _Throwable_
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
| arg0 | _Object_ |   |

##### Retorno

( _Throwable_ )

Retorna o objeto transformado em objeto de erro do tipo Throwable.

---

## toUUID

---

#### _convert.toUUID(valor: string) : _UUID_
##### Descrição

Inicia um objeto de UUID com o conteúdo recebido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valor | string | String com conteúdo no formato de UUID. |

##### Retorno

( _UUID_ )

Objeto do UUID iniciado.

---

