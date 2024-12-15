---
id: out
title: Out
sidebar_label: Out
---

Recurso de resposta aos pedidos HTTP.

---

## close

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>close</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Descrição

Encerra o envio de dados da resposta HTTP.

##### Retorno

( _[Out](../resources/out)_ )


---

## closed

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>closed</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se já foi encerrada a resposta do pedido HTTP.

##### Retorno

( _boolean_ )

Se fechou a resposta do pedido HTTP.

---

## copy

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>copy</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](../objects/InputStream)_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>copy</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>, <span style={{color: '#FF8000'}}>skip</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](../objects/InputStream)_ |   |
| **skip** | _long_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>copy</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>, <span style={{color: '#FF8000'}}>skip</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>, <span style={{color: '#FF8000'}}>size</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](../objects/InputStream)_ |   |
| **skip** | _long_ |   |
| **size** | _long_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>copy</span>(<span style={{color: '#FF8000'}}>file</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _[File](../objects/File)_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>copy</span>(<span style={{color: '#FF8000'}}>file</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>, <span style={{color: '#FF8000'}}>skip</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _[File](../objects/File)_ |   |
| **skip** | _long_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>copy</span>(<span style={{color: '#FF8000'}}>file</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>, <span style={{color: '#FF8000'}}>skip</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>, <span style={{color: '#FF8000'}}>size</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _[File](../objects/File)_ |   |
| **skip** | _long_ |   |
| **size** | _long_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>copy</span>(<span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](../resources/storage)_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>copy</span>(<span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>, <span style={{color: '#FF8000'}}>skip</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](../resources/storage)_ |   |
| **skip** | _long_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>copy</span>(<span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>, <span style={{color: '#FF8000'}}>skip</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>, <span style={{color: '#FF8000'}}>size</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](../resources/storage)_ |   |
| **skip** | _long_ |   |
| **size** | _long_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

## flush

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>flush</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Realiza o envio do que estiver pendente acumulado em buffer.

##### Retorno

( _void_ )


---

## getJSONHTMLEscape

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>getJSONHTMLEscape</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## getJSONIdentFactor

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>getJSONIdentFactor</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Retorno

( _int_ )


---

## getMirrors

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>getMirrors</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Descrição

Obtém as réplicas de saída de dados.

##### Retorno

( _java.util.List_ )

Lista de réplicas.

---

## init

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Descrição

Inicia uma nova instância de saída de dados.

##### Retorno

( _[Out](../resources/out)_ )

A nova instância do recurso de Output.

---

## isClosed

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>isClosed</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isStarted

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>isStarted</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## json

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>json</span>(<span style={{color: '#FF8000'}}>json</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **json** | _java.lang.Object_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>json</span>(<span style={{color: '#FF8000'}}>json</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **json** | _string_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>json</span>(<span style={{color: '#FF8000'}}>json</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **json** | _java.util.List_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>json</span>(<span style={{color: '#FF8000'}}>json</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **json** | _[Config](../resources/config) &#124; [Exec](../resources/exec) &#124; [Header](../resources/header) &#124; [Req](../resources/req) &#124; [Res](../resources/res) &#124; [Values](../objects/Values) &#124; [DataSchema](../objects/DataSchema)_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>json</span>(<span style={{color: '#FF8000'}}>json</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **json** | _[Values](../objects/Values)_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

## jsonHTMLEscape

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>jsonHTMLEscape</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>jsonHTMLEscape</span>(<span style={{color: '#FF8000'}}>htmlEscape</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **htmlEscape** | _boolean_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

## jsonIdentFactor

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>jsonIdentFactor</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Retorno

( _int_ )


---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>jsonIdentFactor</span>(<span style={{color: '#FF8000'}}>jsonIdentFactor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **jsonIdentFactor** | _int_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

## mirrors

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>mirrors</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>
##### Descrição

Obtém as réplicas de saída de dados.

##### Retorno

( _java.util.List_ )

Lista de réplicas.

---

## output

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>output</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](../objects/OutputStream)</span>
##### Descrição

Fornece o fluxo de saída de dados original.

##### Retorno

( _[OutputStream](../objects/OutputStream)_ )

O fluxo de saída de dados original.

---

## print

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Descrição

Envia o resultado booleano.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bool** | _boolean_ | Valor booleano que será enviado. |

##### Retorno

( _[Out](../resources/out)_ )

Saída de dados atual.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>numero</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Descrição

Envia o número.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **numero** | _byte_ | Número que será enviado. |

##### Retorno

( _[Out](../resources/out)_ )

Saída de dados atual.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>carater</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>char</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Descrição

Envia o caráter.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **carater** | _char_ | Caráter que será enviado. |

##### Retorno

( _[Out](../resources/out)_ )

Saída de dados atual.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Descrição

Envia o resultado booleano.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bool** | _double_ | Valor booleano que será enviado. |

##### Retorno

( _[Out](../resources/out)_ )

Saída de dados atual.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Descrição

Envia o resultado booleano.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bool** | _float_ | Valor booleano que será enviado. |

##### Retorno

( _[Out](../resources/out)_ )

Saída de dados atual.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Descrição

Envia o resultado booleano.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bool** | _int_ | Valor booleano que será enviado. |

##### Retorno

( _[Out](../resources/out)_ )

Saída de dados atual.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>obj</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Descrição

Converte o objeto para texto e envia.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **obj** | _java.lang.Object_ | Objeto que será convertido em texto e enviado. |

##### Retorno

( _[Out](../resources/out)_ )

Saída de dados atual.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>texto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Descrição

Envia o conteúdo de texto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **texto** | _string_ | Conteúdo que será enviado. |

##### Retorno

( _[Out](../resources/out)_ )

Saída de dados atual.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Descrição

Envia o resultado booleano.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bool** | _long_ | Valor booleano que será enviado. |

##### Retorno

( _[Out](../resources/out)_ )

Saída de dados atual.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Descrição

Envia o resultado booleano.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bool** | _short_ | Valor booleano que será enviado. |

##### Retorno

( _[Out](../resources/out)_ )

Saída de dados atual.

---

## printf

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>printf</span>(<span style={{color: '#FF8000'}}>format</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>objects</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Ljava.lang.Object;[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **format** | _string_ |   |
| **objects** | _[Ljava.lang.Object;[]_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

## println

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Descrição

Envia uma quebra de linha.

##### Retorno

( _[Out](../resources/out)_ )

Saída de dados atual.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Descrição

Envia o resultado booleano com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bool** | _boolean_ | Valor booleano que será enviado com a quebra de linha. |

##### Retorno

( _[Out](../resources/out)_ )

Saída de dados atual.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>numero</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Descrição

Envia o número com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **numero** | _byte_ | Número que será enviado com a quebra de linha. |

##### Retorno

( _[Out](../resources/out)_ )

Saída de dados atual.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>carater</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>char</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Descrição

Envia o caráter com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **carater** | _char_ | Caráter que será enviado com a quebra de linha. |

##### Retorno

( _[Out](../resources/out)_ )

Saída de dados atual.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Descrição

Envia o resultado booleano com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bool** | _double_ | Valor booleano que será enviado com a quebra de linha. |

##### Retorno

( _[Out](../resources/out)_ )

Saída de dados atual.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Descrição

Envia o resultado booleano com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bool** | _float_ | Valor booleano que será enviado com a quebra de linha. |

##### Retorno

( _[Out](../resources/out)_ )

Saída de dados atual.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Descrição

Envia o resultado booleano com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bool** | _int_ | Valor booleano que será enviado com a quebra de linha. |

##### Retorno

( _[Out](../resources/out)_ )

Saída de dados atual.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>obj</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Descrição

Converte o objeto para texto e envia com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **obj** | _java.lang.Object_ | Objeto que será convertido em texto e enviado com a quebra de linha. |

##### Retorno

( _[Out](../resources/out)_ )

Saída de dados atual.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>texto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Descrição

Envia o conteúdo de texto com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **texto** | _string_ | Conteúdo que será enviado com a quebra de linha. |

##### Retorno

( _[Out](../resources/out)_ )

Saída de dados atual.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Descrição

Envia o resultado booleano com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bool** | _long_ | Valor booleano que será enviado com a quebra de linha. |

##### Retorno

( _[Out](../resources/out)_ )

Saída de dados atual.

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>bool</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Descrição

Envia o resultado booleano com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bool** | _short_ | Valor booleano que será enviado com a quebra de linha. |

##### Retorno

( _[Out](../resources/out)_ )

Saída de dados atual.

---

## setJSONHTMLEscape

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>setJSONHTMLEscape</span>(<span style={{color: '#FF8000'}}>htmlEscape</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **htmlEscape** | _boolean_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

## setJSONIdentFactor

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>setJSONIdentFactor</span>(<span style={{color: '#FF8000'}}>jsonIdentFactor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **jsonIdentFactor** | _int_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

## start

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>start</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Inicia a saída de dados, o cabeçalho do HTTP (_header_) é enviado.

##### Retorno

( _void_ )


---

## started

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>started</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se já foi iniciada a resposta do pedido HTTP.

##### Retorno

( _boolean_ )

Se iniciou a resposta do pedido HTTP e o cabeçalho (_header_) já foi enviado.

---

## write

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>write</span>(<span style={{color: '#FF8000'}}>bytes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bytes** | _byte[]_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>write</span>(<span style={{color: '#FF8000'}}>bytes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>, <span style={{color: '#FF8000'}}>off</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>len</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bytes** | _byte[]_ |   |
| **off** | _int_ |   |
| **len** | _int_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>write</span>(<span style={{color: '#FF8000'}}>b</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **b** | _int_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

## writeBoolean

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>writeBoolean</span>(<span style={{color: '#FF8000'}}>b</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **b** | _boolean_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

## writeByte

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>writeByte</span>(<span style={{color: '#FF8000'}}>b</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **b** | _int_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

## writeChar

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>writeChar</span>(<span style={{color: '#FF8000'}}>c</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>char</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **c** | _char_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

## writeDouble

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>writeDouble</span>(<span style={{color: '#FF8000'}}>d</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **d** | _double_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

## writeFloat

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>writeFloat</span>(<span style={{color: '#FF8000'}}>f</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **f** | _float_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

## writeInt

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>writeInt</span>(<span style={{color: '#FF8000'}}>i</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **i** | _int_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

## writeLong

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>writeLong</span>(<span style={{color: '#FF8000'}}>l</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **l** | _long_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

## writeShort

---

#### <span style={{fontWeight: 'normal'}}>_out</span>.<span style={{color: '#008000'}}>writeShort</span>(<span style={{color: '#FF8000'}}>s</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>short</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Out](../resources/out)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **s** | _short_ |   |

##### Retorno

( _[Out](../resources/out)_ )


---

