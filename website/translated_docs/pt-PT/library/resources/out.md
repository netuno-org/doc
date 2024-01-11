---
id: out
title: Out
sidebar_label: Out
---

Recurso de resposta aos pedidos HTTP.

---

## close

---

#### _out.close() : _void_
##### Descrição

Encerra o envio de dados da resposta HTTP.

##### Retorno

( _void_ )


---

## closed

---

#### _out.closed() : _boolean_
##### Descrição

Verifica se já foi encerrada a resposta do pedido HTTP.

##### Retorno

( _boolean_ )

Se fechou a resposta do pedido HTTP.

---

## copy

---

#### _out.copy(in: _java.io.InputStream_) : _[Out](../../resources/Out)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| in | _java.io.InputStream_ |   |

##### Retorno

( _[Out](../../resources/Out)_ )


---

#### _out.copy(in: _java.io.InputStream_, skip: _long_) : _[Out](../../resources/Out)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| in | _java.io.InputStream_ |   |
| skip | _long_ |   |

##### Retorno

( _[Out](../../resources/Out)_ )


---

#### _out.copy(in: _java.io.InputStream_, skip: _long_, size: _long_) : _[Out](../../resources/Out)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| in | _java.io.InputStream_ |   |
| skip | _long_ |   |
| size | _long_ |   |

##### Retorno

( _[Out](../../resources/Out)_ )


---

#### _out.copy(file: _[File](../../objects/File)_) : _[Out](../../resources/Out)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| file | _[File](../../objects/File)_ |   |

##### Retorno

( _[Out](../../resources/Out)_ )


---

#### _out.copy(file: _[File](../../objects/File)_, skip: _long_) : _[Out](../../resources/Out)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| file | _[File](../../objects/File)_ |   |
| skip | _long_ |   |

##### Retorno

( _[Out](../../resources/Out)_ )


---

#### _out.copy(file: _[File](../../objects/File)_, skip: _long_, size: _long_) : _[Out](../../resources/Out)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| file | _[File](../../objects/File)_ |   |
| skip | _long_ |   |
| size | _long_ |   |

##### Retorno

( _[Out](../../resources/Out)_ )


---

#### _out.copy(storage: _[Storage](../../resources/Storage)_) : _[Out](../../resources/Out)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ |   |

##### Retorno

( _[Out](../../resources/Out)_ )


---

#### _out.copy(storage: _[Storage](../../resources/Storage)_, skip: _long_) : _[Out](../../resources/Out)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ |   |
| skip | _long_ |   |

##### Retorno

( _[Out](../../resources/Out)_ )


---

#### _out.copy(storage: _[Storage](../../resources/Storage)_, skip: _long_, size: _long_) : _[Out](../../resources/Out)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ |   |
| skip | _long_ |   |
| size | _long_ |   |

##### Retorno

( _[Out](../../resources/Out)_ )


---

## flush

---

#### _out.flush() : _void_
##### Descrição

Realiza o envio do que estiver pendente acumulado em buffer.

##### Retorno

( _void_ )


---

## getJSONHTMLEscape

---

#### _out.getJSONHTMLEscape() : _boolean_
##### Retorno

( _boolean_ )


---

## getMirrors

---

#### _out.getMirrors() : _java.util.List_
##### Descrição

Obtém as réplicas de saída de dados.

##### Retorno

( _java.util.List_ )

Lista de réplicas.

---

## init

---

#### _out.init() : _[Out](../../resources/Out)_
##### Descrição

Inicia uma nova instância de saída de dados.

##### Retorno

( _[Out](../../resources/Out)_ )

A nova instância do recurso de Output.

---

## isClosed

---

#### _out.isClosed() : _boolean_
##### Retorno

( _boolean_ )


---

## isStarted

---

#### _out.isStarted() : _boolean_
##### Retorno

( _boolean_ )


---

## json

---

#### _out.json(json: _java.lang.Object_) : _[Out](../../resources/Out)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| json | _java.lang.Object_ |   |

##### Retorno

( _[Out](../../resources/Out)_ )


---

#### _out.json(json: string) : _[Out](../../resources/Out)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| json | string |   |

##### Retorno

( _[Out](../../resources/Out)_ )


---

#### _out.json(json: _java.util.List_) : _[Out](../../resources/Out)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| json | _java.util.List_ |   |

##### Retorno

( _[Out](../../resources/Out)_ )


---

#### _out.json(json: _java.util.Map_) : _[Out](../../resources/Out)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| json | _java.util.Map_ |   |

##### Retorno

( _[Out](../../resources/Out)_ )


---

#### _out.json(json: _[Values](../../objects/Values)_) : _[Out](../../resources/Out)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| json | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Out](../../resources/Out)_ )


---

## jsonHTMLEscape

---

#### _out.jsonHTMLEscape() : _boolean_
##### Retorno

( _boolean_ )


---

#### _out.jsonHTMLEscape(htmlEscape: _boolean_) : _[Out](../../resources/Out)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| htmlEscape | _boolean_ |   |

##### Retorno

( _[Out](../../resources/Out)_ )


---

## mirrors

---

#### _out.mirrors() : _java.util.List_
##### Descrição

Obtém as réplicas de saída de dados.

##### Retorno

( _java.util.List_ )

Lista de réplicas.

---

## output

---

#### _out.output() : _java.io.OutputStream_
##### Descrição

Fornece o fluxo de saída de dados original.

##### Retorno

( _java.io.OutputStream_ )

O fluxo de saída de dados original.

---

## print

---

#### _out.print(bool: _boolean_) : _[Out](../../resources/Out)_
##### Descrição

Envia o resultado booleano.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| bool | _boolean_ | Valor booleano que será enviado. |

##### Retorno

( _[Out](../../resources/Out)_ )

Saída de dados atual.

---

#### _out.print(carater: _char_) : _[Out](../../resources/Out)_
##### Descrição

Envia o caráter.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| carater | _char_ | Caráter que será enviado. |

##### Retorno

( _[Out](../../resources/Out)_ )

Saída de dados atual.

---

#### _out.print(bool: _double_) : _[Out](../../resources/Out)_
##### Descrição

Envia o resultado booleano.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| bool | _double_ | Valor booleano que será enviado. |

##### Retorno

( _[Out](../../resources/Out)_ )

Saída de dados atual.

---

#### _out.print(bool: _float_) : _[Out](../../resources/Out)_
##### Descrição

Envia o resultado booleano.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| bool | _float_ | Valor booleano que será enviado. |

##### Retorno

( _[Out](../../resources/Out)_ )

Saída de dados atual.

---

#### _out.print(numero: _int_) : _[Out](../../resources/Out)_
##### Descrição

Envia o número.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| numero | _int_ | Número que será enviado. |

##### Retorno

( _[Out](../../resources/Out)_ )

Saída de dados atual.

---

#### _out.print(obj: _java.lang.Object_) : _[Out](../../resources/Out)_
##### Descrição

Converte o objeto para texto e envia.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| obj | _java.lang.Object_ | Objeto que será convertido em texto e enviado. |

##### Retorno

( _[Out](../../resources/Out)_ )

Saída de dados atual.

---

#### _out.print(texto: string) : _[Out](../../resources/Out)_
##### Descrição

Envia o conteúdo de texto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| texto | string | Conteúdo que será enviado. |

##### Retorno

( _[Out](../../resources/Out)_ )

Saída de dados atual.

---

#### _out.print(bool: _long_) : _[Out](../../resources/Out)_
##### Descrição

Envia o resultado booleano.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| bool | _long_ | Valor booleano que será enviado. |

##### Retorno

( _[Out](../../resources/Out)_ )

Saída de dados atual.

---

#### _out.print(bool: _short_) : _[Out](../../resources/Out)_
##### Descrição

Envia o resultado booleano.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| bool | _short_ | Valor booleano que será enviado. |

##### Retorno

( _[Out](../../resources/Out)_ )

Saída de dados atual.

---

## printf

---

#### _out.printf(format: string, objects: _[Ljava.lang.Object;[]_) : _[Out](../../resources/Out)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| format | string |   |
| objects | _[Ljava.lang.Object;[]_ |   |

##### Retorno

( _[Out](../../resources/Out)_ )


---

## println

---

#### _out.println() : _[Out](../../resources/Out)_
##### Descrição

Envia uma quebra de linha.

##### Retorno

( _[Out](../../resources/Out)_ )

Saída de dados atual.

---

#### _out.println(bool: _boolean_) : _[Out](../../resources/Out)_
##### Descrição

Envia o resultado booleano com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| bool | _boolean_ | Valor booleano que será enviado com a quebra de linha. |

##### Retorno

( _[Out](../../resources/Out)_ )

Saída de dados atual.

---

#### _out.println(carater: _char_) : _[Out](../../resources/Out)_
##### Descrição

Envia o caráter com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| carater | _char_ | Caráter que será enviado com a quebra de linha. |

##### Retorno

( _[Out](../../resources/Out)_ )

Saída de dados atual.

---

#### _out.println(bool: _double_) : _[Out](../../resources/Out)_
##### Descrição

Envia o resultado booleano com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| bool | _double_ | Valor booleano que será enviado com a quebra de linha. |

##### Retorno

( _[Out](../../resources/Out)_ )

Saída de dados atual.

---

#### _out.println(bool: _float_) : _[Out](../../resources/Out)_
##### Descrição

Envia o resultado booleano com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| bool | _float_ | Valor booleano que será enviado com a quebra de linha. |

##### Retorno

( _[Out](../../resources/Out)_ )

Saída de dados atual.

---

#### _out.println(numero: _int_) : _[Out](../../resources/Out)_
##### Descrição

Envia o número com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| numero | _int_ | Número que será enviado com a quebra de linha. |

##### Retorno

( _[Out](../../resources/Out)_ )

Saída de dados atual.

---

#### _out.println(obj: _java.lang.Object_) : _[Out](../../resources/Out)_
##### Descrição

Converte o objeto para texto e envia com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| obj | _java.lang.Object_ | Objeto que será convertido em texto e enviado com a quebra de linha. |

##### Retorno

( _[Out](../../resources/Out)_ )

Saída de dados atual.

---

#### _out.println(texto: string) : _[Out](../../resources/Out)_
##### Descrição

Envia o conteúdo de texto com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| texto | string | Conteúdo que será enviado com a quebra de linha. |

##### Retorno

( _[Out](../../resources/Out)_ )

Saída de dados atual.

---

#### _out.println(bool: _long_) : _[Out](../../resources/Out)_
##### Descrição

Envia o resultado booleano com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| bool | _long_ | Valor booleano que será enviado com a quebra de linha. |

##### Retorno

( _[Out](../../resources/Out)_ )

Saída de dados atual.

---

#### _out.println(bool: _short_) : _[Out](../../resources/Out)_
##### Descrição

Envia o resultado booleano com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| bool | _short_ | Valor booleano que será enviado com a quebra de linha. |

##### Retorno

( _[Out](../../resources/Out)_ )

Saída de dados atual.

---

## setJSONHTMLEscape

---

#### _out.setJSONHTMLEscape(htmlEscape: _boolean_) : _[Out](../../resources/Out)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| htmlEscape | _boolean_ |   |

##### Retorno

( _[Out](../../resources/Out)_ )


---

## start

---

#### _out.start() : _void_
##### Descrição

Inicia a saída de dados, o cabeçalho do HTTP (_header_) é enviado.

##### Retorno

( _void_ )


---

## started

---

#### _out.started() : _boolean_
##### Descrição

Verifica se já foi iniciada a resposta do pedido HTTP.

##### Retorno

( _boolean_ )

Se iniciou a resposta do pedido HTTP e o cabeçalho (_header_) já foi enviado.

---

## write

---

#### _out.write(bytes: _byte[]_) : _[Out](../../resources/Out)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| bytes | _byte[]_ |   |

##### Retorno

( _[Out](../../resources/Out)_ )


---

#### _out.write(bytes: _byte[]_, off: _int_, len: _int_) : _[Out](../../resources/Out)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| bytes | _byte[]_ |   |
| off | _int_ |   |
| len | _int_ |   |

##### Retorno

( _[Out](../../resources/Out)_ )


---

#### _out.write(b: _int_) : _[Out](../../resources/Out)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| b | _int_ |   |

##### Retorno

( _[Out](../../resources/Out)_ )


---

## writeBoolean

---

#### _out.writeBoolean(b: _boolean_) : _[Out](../../resources/Out)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| b | _boolean_ |   |

##### Retorno

( _[Out](../../resources/Out)_ )


---

## writeByte

---

#### _out.writeByte(b: _int_) : _[Out](../../resources/Out)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| b | _int_ |   |

##### Retorno

( _[Out](../../resources/Out)_ )


---

## writeChar

---

#### _out.writeChar(c: _char_) : _[Out](../../resources/Out)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| c | _char_ |   |

##### Retorno

( _[Out](../../resources/Out)_ )


---

## writeDouble

---

#### _out.writeDouble(d: _double_) : _[Out](../../resources/Out)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| d | _double_ |   |

##### Retorno

( _[Out](../../resources/Out)_ )


---

## writeFloat

---

#### _out.writeFloat(f: _float_) : _[Out](../../resources/Out)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| f | _float_ |   |

##### Retorno

( _[Out](../../resources/Out)_ )


---

## writeInt

---

#### _out.writeInt(i: _int_) : _[Out](../../resources/Out)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| i | _int_ |   |

##### Retorno

( _[Out](../../resources/Out)_ )


---

## writeLong

---

#### _out.writeLong(l: _long_) : _[Out](../../resources/Out)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| l | _long_ |   |

##### Retorno

( _[Out](../../resources/Out)_ )


---

## writeShort

---

#### _out.writeShort(s: _short_) : _[Out](../../resources/Out)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| s | _short_ |   |

##### Retorno

( _[Out](../../resources/Out)_ )


---

