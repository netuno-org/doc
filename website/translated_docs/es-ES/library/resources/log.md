---
id: log
title: Log
sidebar_label: Log
---

Recurso de obtenção de logs (registos) da aplicação.
Este recurso utiliza o Log4J para a apresentação de log do tipo WARN, ERROR e FATAL.
E para analisar mensagens de log do tipo TRACE, DEBUG ou INFO é necessário alterar o nível dos logs nas configurações para o nível desejado. Por exemplo para passar a apresentar as mensagens do tipo INFO basta alterar na configuração logs/log.xml onde está level=”warn” basta alterar o valor 'warn' para 'info', 'debug' ou 'trace' consoante o nível que preferir.

---

## debug

---

#### _log.debug(arg0: _string_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _void_ )


---

#### _log.debug(arg0: _string_, arg1: _Object_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _void_ )


---

## error

---

#### _log.error(arg0: _string_, arg1: _Object_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _void_ )


---

#### _log.error(arg0: _string_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _void_ )


---

## fatal

---

#### _log.fatal(arg0: _string_, arg1: _Object_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _void_ )


---

#### _log.fatal(arg0: _string_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _void_ )


---

## info

---

#### _log.info(arg0: _string_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _void_ )


---

#### _log.info(arg0: _string_, arg1: _Object_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _void_ )


---

## toString

---

#### _log.toString() : _string_
##### Retorno

( _string_ )


---

## trace

---

#### _log.trace(arg0: _string_, arg1: _Object_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _void_ )


---

#### _log.trace(arg0: _string_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _void_ )


---

## warn

---

#### _log.warn(arg0: _string_, arg1: _Object_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Object_ |   |

##### Retorno

( _void_ )


---

#### _log.warn(arg0: _string_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _void_ )


---

