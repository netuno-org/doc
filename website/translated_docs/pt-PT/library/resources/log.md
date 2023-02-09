---
id: log
title: Log
sidebar_label: Log
---

Recurso de obtenção de logs da aplicação.

Este recurso utiliza o Log4J para a apresentação de log do tipo WARN, ERROR e FATAL.

Para analisar mensagens de log do tipo TRACE, DEBUG ou INFO, precisa alterar o level dos logs nas configurações para o nível desejado, por exemplo para passar a apresentar as mensagens de INFO basta alterar na configuração `logs/log.xml` onde está `level="warn"` basta alterar o valor `warn` para `info`, `debug` ou `trace`.

---

## debug

---

#### _log.debug(mensagem: string) : _void_
##### Descrição

Imprime uma mensagem do tipo **DEPURAÇÃO** (_DEBUG_) no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### _log.debug(mensagem: string, auxiliar: _Object_) : _void_
##### Descrição

Imprime uma mensagem do tipo **DEPURAÇÃO** (_DEBUG_) no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |
| auxiliar | _Object_ | Objeto alternativo para incluir na mensagem de log. |

##### Retorno

( _void_ )


---

## error

---

#### _log.error(mensagem: string) : _void_
##### Descrição

Imprime uma mensagem do tipo **ERRO** (_ERROR_) no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### _log.error(mensagem: string, auxiliar: _Object_) : _void_
##### Descrição

Imprime uma mensagem do tipo **ERRO** (_ERROR_) no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |
| auxiliar | _Object_ | Objeto alternativo para incluir na mensagem de log. |

##### Retorno

( _void_ )


---

## fatal

---

#### _log.fatal(mensagem: string) : _void_
##### Descrição

Imprime uma mensagem do tipo **FATAL** no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### _log.fatal(mensagem: string, auxiliar: _Object_) : _void_
##### Descrição

Imprime uma mensagem do tipo **FATAL** no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |
| auxiliar | _Object_ | Objeto alternativo para incluir na mensagem de log. |

##### Retorno

( _void_ )


---

## info

---

#### _log.info(mensagem: string) : _void_
##### Descrição

Imprime uma mensagem do tipo **INFORMAÇÃO** (_INFORMATION_) no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### _log.info(mensagem: string, auxiliar: _Object_) : _void_
##### Descrição

Imprime uma mensagem do tipo **INFORMAÇÃO** (_INFORMATION_) no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |
| auxiliar | _Object_ | Objeto alternativo para incluir na mensagem de log. |

##### Retorno

( _void_ )


---

## print

---

#### _log.print(conteudo: _char[]_) : _void_
##### Descrição

Imprime uma mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | _char[]_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.print(conteudo: _boolean_) : _void_
##### Descrição

Imprime uma mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | _boolean_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.print(conteudo: _char_) : _void_
##### Descrição

Imprime uma mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | _char_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.print(conteudo: _double_) : _void_
##### Descrição

Imprime uma mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | _double_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.print(conteudo: _float_) : _void_
##### Descrição

Imprime uma mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | _float_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.print(conteudo: _int_) : _void_
##### Descrição

Imprime uma mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | _int_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.print(conteudo: _Object_) : _void_
##### Descrição

Imprime uma mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | _Object_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.print(conteudo: string) : _void_
##### Descrição

Imprime uma mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | string | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.print(conteudo: _long_) : _void_
##### Descrição

Imprime uma mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | _long_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

## println

---

#### _log.println(conteudo: _char[]_) : _void_
##### Descrição

Imprime uma linha com a mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | _char[]_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.println(conteudo: _boolean_) : _void_
##### Descrição

Imprime uma linha com a mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | _boolean_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.println(conteudo: _char_) : _void_
##### Descrição

Imprime uma linha com a mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | _char_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.println(conteudo: _double_) : _void_
##### Descrição

Imprime uma linha com a mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | _double_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.println(conteudo: _float_) : _void_
##### Descrição

Imprime uma linha com a mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | _float_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.println(conteudo: _int_) : _void_
##### Descrição

Imprime uma linha com a mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | _int_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.println(conteudo: _Object_) : _void_
##### Descrição

Imprime uma linha com a mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | _Object_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.println(conteudo: string) : _void_
##### Descrição

Imprime uma linha com a mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | string | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.println(conteudo: _long_) : _void_
##### Descrição

Imprime uma linha com a mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | _long_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

## trace

---

#### _log.trace(mensagem: string) : _void_
##### Descrição

Imprime uma mensagem do tipo **VESTÍGIO** (_TRACE_) no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### _log.trace(mensagem: string, auxiliar: _Object_) : _void_
##### Descrição

Imprime uma mensagem do tipo **VESTÍGIO** (_TRACE_) no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |
| auxiliar | _Object_ | Objeto alternativo para incluir na mensagem de log. |

##### Retorno

( _void_ )


---

## warn

---

#### _log.warn(mensagem: string) : _void_
##### Descrição

Imprime uma mensagem do tipo **AVISO** (_WARNING_) no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### _log.warn(mensagem: string, auxiliar: _Object_) : _void_
##### Descrição

Imprime uma mensagem do tipo **AVISO** (_WARNING_) no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |
| auxiliar | _Object_ | Objeto alternativo para incluir na mensagem de log. |

##### Retorno

( _void_ )


---

