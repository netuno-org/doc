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

#### _log.debug(mensagem: string) : void
##### Descrição

Imprime uma mensagem do tipo **DEPURAÇÃO** (_DEBUG_) no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### _log.debug(mensagem: string, auxiliar: java.lang.Object) : void
##### Descrição

Imprime uma mensagem do tipo **DEPURAÇÃO** (_DEBUG_) no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |
| **auxiliar** | _java.lang.Object_ | Objeto alternativo para incluir na mensagem de log. |

##### Retorno

( _void_ )


---

## error

---

#### _log.error(mensagem: string) : void
##### Descrição

Imprime uma mensagem do tipo **ERRO** (_ERROR_) no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### _log.error(mensagem: string, auxiliar: java.lang.Object) : void
##### Descrição

Imprime uma mensagem do tipo **ERRO** (_ERROR_) no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |
| **auxiliar** | _java.lang.Object_ | Objeto alternativo para incluir na mensagem de log. |

##### Retorno

( _void_ )


---

## fatal

---

#### _log.fatal(mensagem: string) : void
##### Descrição

Imprime uma mensagem do tipo **FATAL** no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### _log.fatal(mensagem: string, auxiliar: java.lang.Object) : void
##### Descrição

Imprime uma mensagem do tipo **FATAL** no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |
| **auxiliar** | _java.lang.Object_ | Objeto alternativo para incluir na mensagem de log. |

##### Retorno

( _void_ )


---

## info

---

#### _log.info(mensagem: string) : void
##### Descrição

Imprime uma mensagem do tipo **INFORMAÇÃO** (_INFORMATION_) no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### _log.info(mensagem: string, auxiliar: java.lang.Object) : void
##### Descrição

Imprime uma mensagem do tipo **INFORMAÇÃO** (_INFORMATION_) no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |
| **auxiliar** | _java.lang.Object_ | Objeto alternativo para incluir na mensagem de log. |

##### Retorno

( _void_ )


---

## print

---

#### _log.print(conteudo: char[]) : void
##### Descrição

Imprime uma mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _char[]_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.print(conteudo: boolean) : void
##### Descrição

Imprime uma mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _boolean_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.print(conteudo: char) : void
##### Descrição

Imprime uma mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _char_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.print(conteudo: double) : void
##### Descrição

Imprime uma mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _double_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.print(conteudo: float) : void
##### Descrição

Imprime uma mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _float_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.print(conteudo: int) : void
##### Descrição

Imprime uma mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _int_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.print(conteudo: java.lang.Object) : void
##### Descrição

Imprime uma mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _java.lang.Object_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.print(conteudo: string) : void
##### Descrição

Imprime uma mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _string_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.print(conteudo: long) : void
##### Descrição

Imprime uma mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _long_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

## println

---

#### _log.println(conteudo: char[]) : void
##### Descrição

Imprime uma linha com a mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _char[]_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.println(conteudo: boolean) : void
##### Descrição

Imprime uma linha com a mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _boolean_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.println(conteudo: char) : void
##### Descrição

Imprime uma linha com a mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _char_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.println(conteudo: double) : void
##### Descrição

Imprime uma linha com a mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _double_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.println(conteudo: float) : void
##### Descrição

Imprime uma linha com a mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _float_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.println(conteudo: int) : void
##### Descrição

Imprime uma linha com a mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _int_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.println(conteudo: java.lang.Object) : void
##### Descrição

Imprime uma linha com a mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _java.lang.Object_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.println(conteudo: string) : void
##### Descrição

Imprime uma linha com a mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _string_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### _log.println(conteudo: long) : void
##### Descrição

Imprime uma linha com a mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _long_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

## trace

---

#### _log.trace(mensagem: string) : void
##### Descrição

Imprime uma mensagem do tipo **VESTÍGIO** (_TRACE_) no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### _log.trace(mensagem: string, auxiliar: java.lang.Object) : void
##### Descrição

Imprime uma mensagem do tipo **VESTÍGIO** (_TRACE_) no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |
| **auxiliar** | _java.lang.Object_ | Objeto alternativo para incluir na mensagem de log. |

##### Retorno

( _void_ )


---

## warn

---

#### _log.warn(mensagem: string) : void
##### Descrição

Imprime uma mensagem do tipo **AVISO** (_WARNING_) no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### _log.warn(mensagem: string, auxiliar: java.lang.Object) : void
##### Descrição

Imprime uma mensagem do tipo **AVISO** (_WARNING_) no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |
| **auxiliar** | _java.lang.Object_ | Objeto alternativo para incluir na mensagem de log. |

##### Retorno

( _void_ )


---

