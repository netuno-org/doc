---
id: error
title: Error
sidebar_label: Error
---

Geração erros gerais da aplicação e categorizar a gravidade do erro com os tipos:
<ul>
<li>trace</li>
<li>debug</li>
<li>info</li>
<li>warn</li>
<li>error</li>
<li>fatal</li>
</ul>

---

## create

---

#### _error.create(mensagem: string) : _[ErrorException](../../objects/ErrorException)_
##### Descrição

Cria um erro com uma mensagem de descrição.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |

##### Retorno

( _[ErrorException](../../objects/ErrorException)_ )


---

## createError

---

#### _error.createError(mensagem: string) : _java.lang.Error_
##### Descrição

Cria um erro com uma mensagem de descrição.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |

##### Retorno

( _java.lang.Error_ )


---

## createException

---

#### _error.createException(mensagem: string) : _java.lang.Exception_
##### Descrição

Cria uma exceção com uma mensagem de descrição.".

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |

##### Retorno

( _java.lang.Exception_ )


---

## createThrowable

---

#### _error.createThrowable(mensagem: string) : _java.lang.Throwable_
##### Descrição

Cria um throwable com uma mensagem de descrição.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |

##### Retorno

( _java.lang.Throwable_ )


---

## data

---

#### _error.data() : _[Values](../../objects/Values)_
##### Descrição

Cria uma nova classe Values com os valores que originaram o erro.

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _error.data(return: _[Values](../../objects/Values)_) : _[Error](../../resources/Error)_
##### Descrição

Cria uma nova classe Values que originaram o erro.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| return | _[Values](../../objects/Values)_ | Valores. |

##### Retorno

( _[Error](../../resources/Error)_ )


---

## debug

---

#### _error.debug(mensagem: string) : _void_
##### Descrição

Retorna uma exceção e imprime uma mensagem com a descrição da excecção e a seu objeto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### _error.debug(mensagem: string, auxiliar: _java.lang.Object_) : _void_
##### Descrição

Imprime uma mensagem com a descrição do debug e a sua causa.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |
| auxiliar | _java.lang.Object_ | Throwable alternativo para incluir na mensagem de debug. |

##### Retorno

( _void_ )


---

#### _error.debug(messagem: string, causa: _java.lang.Throwable_) : _void_
##### Descrição

Imprime uma mensagem com a descrição do debug.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| messagem | string | Mensagem que será apresentada em log. |
| causa | _java.lang.Throwable_ | Throwable alternativo para incluir na mensagem de debug. |

##### Retorno

( _void_ )


---

## error

---

#### _error.error(mensagem: string) : _void_
##### Descrição

Imprime uma mensagem de erro.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### _error.error(mensagem: string, auxiliar: _java.lang.Object_) : _void_
##### Descrição

Imprime uma mensagem com a descrição do erro e a sua causa.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |
| auxiliar | _java.lang.Object_ | Throwable alternativo para incluir na mensagem de erro. |

##### Retorno

( _void_ )


---

#### _error.error(mensagem: string, auxiliar: _java.lang.Throwable_) : _void_
##### Descrição

Imprime uma mensagem com a um descrição de um erro e o seu objeto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |
| auxiliar | _java.lang.Throwable_ | Throwable alternativo para incluir na mensagem de erro. |

##### Retorno

( _void_ )


---

## fatal

---

#### _error.fatal(mensagem: string) : _void_
##### Descrição

Imprime uma mensagem do tipo **FATAL** no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### _error.fatal(mensagem: string, auxiliar: _java.lang.Object_) : _void_
##### Descrição

Imprime uma mensagem do tipo **FATAL** no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |
| auxiliar | _java.lang.Object_ | Objeto alternativo para incluir na mensagem de log. |

##### Retorno

( _void_ )


---

#### _error.fatal(mensagem: string, auxiliar: _java.lang.Throwable_) : _void_
##### Descrição

Imprime uma mensagem do tipo **FATAL** no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |
| auxiliar | _java.lang.Throwable_ | Throwable alternativo para incluir na mensagem de log. |

##### Retorno

( _void_ )


---

## info

---

#### _error.info(mensagem: string) : _void_
##### Descrição

Imprime uma mensagem com a descrição do debug e a seu objeto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### _error.info(mensagem: string, auxiliar: _java.lang.Object_) : _void_
##### Descrição

Imprime uma mensagem de informação e uma throwable.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |
| auxiliar | _java.lang.Object_ | Throwable alternativo para incluir na mensagem de informação. |

##### Retorno

( _void_ )


---

#### _error.info(mensagem: string, causa: _java.lang.Throwable_) : _void_
##### Descrição

Imprime uma mensagem de informação.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |
| causa | _java.lang.Throwable_ | Throwable alternativo para incluir na mensagem de log. |

##### Retorno

( _void_ )


---

## is

---

#### _error.is(objeto: _java.lang.Object_) : _boolean_
##### Descrição

Verifica se um objeto é de tipo Error, Exception ou Throwable.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| objeto | _java.lang.Object_ | Objeto que será verificado. |

##### Retorno

( _boolean_ )

Retorna **true** caso o objeto seja do tipo Error, Exception ou Throwable.

---

## isError

---

#### _error.isError(objeto: _java.lang.Object_) : _boolean_
##### Descrição

Verifica se um objeto é de tipo Error.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| objeto | _java.lang.Object_ | Objeto que será verificado. |

##### Retorno

( _boolean_ )

Retorna **true** caso o objeto seja do tipo Error.

---

## isException

---

#### _error.isException(objeto: _java.lang.Object_) : _boolean_
##### Descrição

Verifica se um objeto é de tipo Exception.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| objeto | _java.lang.Object_ | Objeto que será verificado. |

##### Retorno

( _boolean_ )

Retorna **true** caso o objeto seja do tipo Exception.

---

## isThrowable

---

#### _error.isThrowable(objeto: _java.lang.Object_) : _boolean_
##### Descrição

Verifica se um objeto é de tipo Throwable.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| objeto | _java.lang.Object_ | Objeto que será verificado. |

##### Retorno

( _boolean_ )

Retorna **true** caso o objeto seja do tipo Throwable.

---

## raise

---

#### _error.raise(objeto: _java.lang.Object_) : _void_
##### Descrição

Lança um erro de acordo com o tipo de objeto passado (Error, Exception ou Throwable).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| objeto | _java.lang.Object_ | Objeto de erro. |

##### Retorno

( _void_ )


---

## trace

---

#### _error.trace(messagem: string) : _void_
##### Descrição

Retorna uma exceção e uma lista dos métodos que a causaram com uma mensagem de descrição.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| messagem | string | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### _error.trace(mensagem: string, auxiliar: _java.lang.Object_) : _void_
##### Descrição

Retorna um objeto e uma lista dos métodos que a causaram com uma mensagem de descrição.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |
| auxiliar | _java.lang.Object_ | Object alternativo para incluir na mensagem de erro. |

##### Retorno

( _void_ )


---

#### _error.trace(mensagem: string, auxiliar: _java.lang.Throwable_) : _void_
##### Descrição

Retorna um throwable e uma lista dos métodos que a causaram com uma mensagem de descrição.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |
| auxiliar | _java.lang.Throwable_ | Throwable alternativo para incluir na mensagem de log. |

##### Retorno

( _void_ )


---

## warn

---

#### _error.warn(mensagem: string) : _void_
##### Descrição

Imprime uma mensagem de aviso.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### _error.warn(mensagem: string, auxiliar: _java.lang.Object_) : _void_
##### Descrição

Imprime uma mensagem com a um descrição de um aviso e o seu objeto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |
| auxiliar | _java.lang.Object_ | Object alternativo para incluir na mensagem de aviso. |

##### Retorno

( _void_ )


---

#### _error.warn(mensagem: string, auxiliar: _java.lang.Throwable_) : _void_
##### Descrição

Imprime uma mensagem com a um descrição de um aviso e a sua throwable.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| mensagem | string | Mensagem que será apresentada em log. |
| auxiliar | _java.lang.Throwable_ | Throwable alternativo para incluir na mensagem de aviso. |

##### Retorno

( _void_ )


---

