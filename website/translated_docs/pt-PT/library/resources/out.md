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

#### _out.copy(arg0: _InputStream_) : _Out_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _InputStream_ |   |

##### Retorno

( _Out_ )


---

#### _out.copy(arg0: _InputStream_, arg1: _long_) : _Out_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _InputStream_ |   |
| arg1 | _long_ |   |

##### Retorno

( _Out_ )


---

#### _out.copy(arg0: _InputStream_, arg1: _long_, arg2: _long_) : _Out_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _InputStream_ |   |
| arg1 | _long_ |   |
| arg2 | _long_ |   |

##### Retorno

( _Out_ )


---

#### _out.copy(arg0: _[File](../../objects/File)_) : _Out_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[File](../../objects/File)_ |   |

##### Retorno

( _Out_ )


---

#### _out.copy(arg0: _[File](../../objects/File)_, arg1: _long_) : _Out_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[File](../../objects/File)_ |   |
| arg1 | _long_ |   |

##### Retorno

( _Out_ )


---

#### _out.copy(arg0: _[File](../../objects/File)_, arg1: _long_, arg2: _long_) : _Out_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[File](../../objects/File)_ |   |
| arg1 | _long_ |   |
| arg2 | _long_ |   |

##### Retorno

( _Out_ )


---

#### _out.copy(arg0: _Storage_) : _Out_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Storage_ |   |

##### Retorno

( _Out_ )


---

#### _out.copy(arg0: _Storage_, arg1: _long_) : _Out_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Storage_ |   |
| arg1 | _long_ |   |

##### Retorno

( _Out_ )


---

#### _out.copy(arg0: _Storage_, arg1: _long_, arg2: _long_) : _Out_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Storage_ |   |
| arg1 | _long_ |   |
| arg2 | _long_ |   |

##### Retorno

( _Out_ )


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

#### _out.getMirrors() : _List_
##### Descrição

Obtém as réplicas de saída de dados.

##### Retorno

( _List_ )

Lista de réplicas.

---

## init

---

#### _out.init() : _Out_
##### Descrição

Inicia uma nova instância de saída de dados.

##### Retorno

( _Out_ )

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

#### _out.json(arg0: _Object_) : _Out_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Object_ |   |

##### Retorno

( _Out_ )


---

#### _out.json(arg0: string) : _Out_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Out_ )


---

#### _out.json(arg0: _List_) : _Out_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _List_ |   |

##### Retorno

( _Out_ )


---

#### _out.json(arg0: _Map_) : _Out_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Map_ |   |

##### Retorno

( _Out_ )


---

#### _out.json(arg0: _[Values](../../objects/Values)_) : _Out_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _Out_ )


---

## jsonHTMLEscape

---

#### _out.jsonHTMLEscape() : _boolean_
##### Retorno

( _boolean_ )


---

#### _out.jsonHTMLEscape(arg0: _boolean_) : _Out_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _Out_ )


---

## mirrors

---

#### _out.mirrors() : _List_
##### Descrição

Obtém as réplicas de saída de dados.

##### Retorno

( _List_ )

Lista de réplicas.

---

## output

---

#### _out.output() : _OutputStream_
##### Descrição

Fornece o fluxo de saída de dados original.

##### Retorno

( _OutputStream_ )

O fluxo de saída de dados original.

---

## print

---

#### _out.print(bool: _boolean_) : _Out_
##### Descrição

Envia o resultado booleano.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| bool | _boolean_ | Valor booleano que será enviado. |

##### Retorno

( _Out_ )

Saída de dados atual.

---

#### _out.print(carater: _char_) : _Out_
##### Descrição

Envia o caráter.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| carater | _char_ | Caráter que será enviado. |

##### Retorno

( _Out_ )

Saída de dados atual.

---

#### _out.print(texto: _double_) : _Out_
##### Descrição

Envia o conteúdo de texto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| texto | _double_ | Conteúdo que será enviado. |

##### Retorno

( _Out_ )

Saída de dados atual.

---

#### _out.print(texto: _float_) : _Out_
##### Descrição

Envia o conteúdo de texto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| texto | _float_ | Conteúdo que será enviado. |

##### Retorno

( _Out_ )

Saída de dados atual.

---

#### _out.print(numero: _int_) : _Out_
##### Descrição

Envia o número.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| numero | _int_ | Número que será enviado. |

##### Retorno

( _Out_ )

Saída de dados atual.

---

#### _out.print(obj: _Object_) : _Out_
##### Descrição

Converte o objeto para texto e envia.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| obj | _Object_ | Objeto que será convertido em texto e enviado. |

##### Retorno

( _Out_ )

Saída de dados atual.

---

#### _out.print(texto: string) : _Out_
##### Descrição

Envia o conteúdo de texto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| texto | string | Conteúdo que será enviado. |

##### Retorno

( _Out_ )

Saída de dados atual.

---

#### _out.print(texto: _long_) : _Out_
##### Descrição

Envia o conteúdo de texto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| texto | _long_ | Conteúdo que será enviado. |

##### Retorno

( _Out_ )

Saída de dados atual.

---

#### _out.print(texto: _short_) : _Out_
##### Descrição

Envia o conteúdo de texto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| texto | _short_ | Conteúdo que será enviado. |

##### Retorno

( _Out_ )

Saída de dados atual.

---

## println

---

#### _out.println() : _Out_
##### Descrição

Envia uma quebra de linha.

##### Retorno

( _Out_ )

Saída de dados atual.

---

#### _out.println(bool: _boolean_) : _Out_
##### Descrição

Envia o resultado booleano com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| bool | _boolean_ | Valor booleano que será enviado com a quebra de linha. |

##### Retorno

( _Out_ )

Saída de dados atual.

---

#### _out.println(carater: _char_) : _Out_
##### Descrição

Envia o caráter com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| carater | _char_ | Caráter que será enviado com a quebra de linha. |

##### Retorno

( _Out_ )

Saída de dados atual.

---

#### _out.println(texto: _double_) : _Out_
##### Descrição

Envia o conteúdo de texto com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| texto | _double_ | Conteúdo que será enviado com a quebra de linha. |

##### Retorno

( _Out_ )

Saída de dados atual.

---

#### _out.println(texto: _float_) : _Out_
##### Descrição

Envia o conteúdo de texto com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| texto | _float_ | Conteúdo que será enviado com a quebra de linha. |

##### Retorno

( _Out_ )

Saída de dados atual.

---

#### _out.println(numero: _int_) : _Out_
##### Descrição

Envia o número com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| numero | _int_ | Número que será enviado com a quebra de linha. |

##### Retorno

( _Out_ )

Saída de dados atual.

---

#### _out.println(obj: _Object_) : _Out_
##### Descrição

Converte o objeto para texto e envia com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| obj | _Object_ | Objeto que será convertido em texto e enviado com a quebra de linha. |

##### Retorno

( _Out_ )

Saída de dados atual.

---

#### _out.println(texto: string) : _Out_
##### Descrição

Envia o conteúdo de texto com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| texto | string | Conteúdo que será enviado com a quebra de linha. |

##### Retorno

( _Out_ )

Saída de dados atual.

---

#### _out.println(texto: _long_) : _Out_
##### Descrição

Envia o conteúdo de texto com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| texto | _long_ | Conteúdo que será enviado com a quebra de linha. |

##### Retorno

( _Out_ )

Saída de dados atual.

---

#### _out.println(texto: _short_) : _Out_
##### Descrição

Envia o conteúdo de texto com uma quebra de linha.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| texto | _short_ | Conteúdo que será enviado com a quebra de linha. |

##### Retorno

( _Out_ )

Saída de dados atual.

---

## setJSONHTMLEscape

---

#### _out.setJSONHTMLEscape(arg0: _boolean_) : _Out_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _Out_ )


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

#### _out.write(arg0: _byte[]_) : _Out_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Retorno

( _Out_ )


---

#### _out.write(arg0: _byte[]_, arg1: _int_, arg2: _int_) : _Out_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte[]_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |

##### Retorno

( _Out_ )


---

#### _out.write(arg0: _int_) : _Out_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _Out_ )


---

## writeBoolean

---

#### _out.writeBoolean(arg0: _boolean_) : _Out_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _Out_ )


---

## writeByte

---

#### _out.writeByte(arg0: _int_) : _Out_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _Out_ )


---

## writeChar

---

#### _out.writeChar(arg0: _char_) : _Out_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _char_ |   |

##### Retorno

( _Out_ )


---

## writeDouble

---

#### _out.writeDouble(arg0: _double_) : _Out_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _double_ |   |

##### Retorno

( _Out_ )


---

## writeFloat

---

#### _out.writeFloat(arg0: _float_) : _Out_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _float_ |   |

##### Retorno

( _Out_ )


---

## writeInt

---

#### _out.writeInt(arg0: _int_) : _Out_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _Out_ )


---

## writeLong

---

#### _out.writeLong(arg0: _long_) : _Out_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _long_ |   |

##### Retorno

( _Out_ )


---

## writeShort

---

#### _out.writeShort(arg0: _short_) : _Out_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _short_ |   |

##### Retorno

( _Out_ )


---

