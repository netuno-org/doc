---
id: convert
title: Convert
sidebar_label: Convert
---

Conversor de tipos de dados da aplicação.

---

## arrayToList

---

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">arrayToList</span>(<span style="color: #FF8000">array</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
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

## fromBase64

---

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">fromBase64</span>(<span style="color: #FF8000">conteúdo</span>: <span style="font-weight: normal; font-style: italic;">byte[]</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">fromBase64</span>(<span style="color: #FF8000">conteúdo</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">fromBase64AsBytes</span>(<span style="color: #FF8000">conteúdo</span>: <span style="font-weight: normal; font-style: italic;">byte[]</span>) : <span style="font-weight: normal; font-style: italic;">byte[]</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">fromBase64AsBytes</span>(<span style="color: #FF8000">conteúdo</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">byte[]</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">fromHTML</span>(<span style="color: #FF8000">conteúdo</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">fromJSON</span>(<span style="color: #FF8000">conteúdo</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

## toBase64

---

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toBase64</span>(<span style="color: #FF8000">conteúdo</span>: <span style="font-weight: normal; font-style: italic;">byte[]</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toBase64</span>(<span style="color: #FF8000">conteúdo</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toBase64AsBytes</span>(<span style="color: #FF8000">conteúdo</span>: <span style="font-weight: normal; font-style: italic;">byte[]</span>) : <span style="font-weight: normal; font-style: italic;">byte[]</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toBase64AsBytes</span>(<span style="color: #FF8000">conteúdo</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">byte[]</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toByte</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">byte</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toByte</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">byte</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toByte</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">short</span>) : <span style="font-weight: normal; font-style: italic;">byte</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toDouble</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">byte</span>) : <span style="font-weight: normal; font-style: italic;">double</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toDouble</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">double</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toDouble</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">double</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toDouble</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">double</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toDouble</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">short</span>) : <span style="font-weight: normal; font-style: italic;">double</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toError</span>(<span style="color: #FF8000">objeto</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">java.lang.Error</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toException</span>(<span style="color: #FF8000">objeto</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">java.lang.Exception</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toFile</span>(<span style="color: #FF8000">nome</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">conteúdo</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">bytes</span>: <span style="font-weight: normal; font-style: italic;">byte[]</span>) : <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>
##### Descrição

Inicia um objeto de ficheiro em memória com o conteúdo dos bytes recebidos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | Nome do ficheiro. |
| **conteúdo** | _string_ | Tipo de conteúdo. |
| **bytes** | _byte[]_ | Bytes que representam o conteúdo do ficheiro. |

##### Retorno

( _[File](../../objects/File)_ )

Objeto do ficheiro iniciado que permite a manipulação dos bytes como ficheiro.

---

## toFloat

---

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toFloat</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">byte</span>) : <span style="font-weight: normal; font-style: italic;">float</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toFloat</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">float</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toFloat</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">float</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toFloat</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">float</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toFloat</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">short</span>) : <span style="font-weight: normal; font-style: italic;">float</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toHEX</span>(<span style="color: #FF8000">bytes</span>: <span style="font-weight: normal; font-style: italic;">byte[]</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toHTML</span>(<span style="color: #FF8000">conteúdo</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toHex</span>(<span style="color: #FF8000">bytes</span>: <span style="font-weight: normal; font-style: italic;">byte[]</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toInt</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">byte</span>) : <span style="font-weight: normal; font-style: italic;">int</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toInt</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">int</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toInt</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">int</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toInt</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">int</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toInt</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">short</span>) : <span style="font-weight: normal; font-style: italic;">int</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toJSON</span>(<span style="color: #FF8000">conteúdo</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toLong</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">byte</span>) : <span style="font-weight: normal; font-style: italic;">long</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toLong</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">long</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toLong</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">long</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toLong</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">long</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toLong</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">short</span>) : <span style="font-weight: normal; font-style: italic;">long</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toObject</span>(<span style="color: #FF8000">objeto</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toShort</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">byte</span>) : <span style="font-weight: normal; font-style: italic;">short</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toShort</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">short</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toShort</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">long</span>) : <span style="font-weight: normal; font-style: italic;">short</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toThrowable</span>(<span style="color: #FF8000">objeto</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Object</span>) : <span style="font-weight: normal; font-style: italic;">java.lang.Throwable</span>
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

#### <span style="font-weight: normal">_convert</span>.<span style="color: #008000">toUUID</span>(<span style="color: #FF8000">valor</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.UUID</span>
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

