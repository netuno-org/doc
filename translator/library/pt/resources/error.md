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

#### <span style={{fontWeight: 'normal'}}>_error</span>.<span style={{color: '#008000'}}>create</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[ErrorException](/docs/library/objects/ErrorException)</span>
##### Descrição

Cria um erro com uma mensagem de descrição.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |

##### Retorno

( _[ErrorException](/docs/library/objects/ErrorException)_ )


---

## createError

---

#### <span style={{fontWeight: 'normal'}}>_error</span>.<span style={{color: '#008000'}}>createError</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Error</span>
##### Descrição

Cria um erro com uma mensagem de descrição.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |

##### Retorno

( _java.lang.Error_ )


---

## createException

---

#### <span style={{fontWeight: 'normal'}}>_error</span>.<span style={{color: '#008000'}}>createException</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Exception</span>
##### Descrição

Cria uma exceção com uma mensagem de descrição.".

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |

##### Retorno

( _java.lang.Exception_ )


---

## createThrowable

---

#### <span style={{fontWeight: 'normal'}}>_error</span>.<span style={{color: '#008000'}}>createThrowable</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Throwable</span>
##### Descrição

Cria um throwable com uma mensagem de descrição.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |

##### Retorno

( _java.lang.Throwable_ )


---

## data

---

#### <span style={{fontWeight: 'normal'}}>_error</span>.<span style={{color: '#008000'}}>data</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Descrição

Cria uma nova classe Values com os valores que originaram o erro.

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_error</span>.<span style={{color: '#008000'}}>data</span>(<span style={{color: '#FF8000'}}>return</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Error](/docs/library/resources/error)</span>
##### Descrição

Cria uma nova classe Values que originaram o erro.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **return** | _[Values](/docs/library/objects/Values)_ | Valores. |

##### Retorno

( _[Error](/docs/library/resources/error)_ )


---

## debug

---

#### <span style={{fontWeight: 'normal'}}>_error</span>.<span style={{color: '#008000'}}>debug</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Retorna uma exceção e imprime uma mensagem com a descrição da excecção e a seu objeto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_error</span>.<span style={{color: '#008000'}}>debug</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>auxiliar</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma mensagem com a descrição do debug e a sua causa.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |
| **auxiliar** | _java.lang.Object_ | Throwable alternativo para incluir na mensagem de debug. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_error</span>.<span style={{color: '#008000'}}>debug</span>(<span style={{color: '#FF8000'}}>messagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>causa</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Throwable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma mensagem com a descrição do debug.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **messagem** | _string_ | Mensagem que será apresentada em log. |
| **causa** | _java.lang.Throwable_ | Throwable alternativo para incluir na mensagem de debug. |

##### Retorno

( _void_ )


---

## error

---

#### <span style={{fontWeight: 'normal'}}>_error</span>.<span style={{color: '#008000'}}>error</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma mensagem de erro.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_error</span>.<span style={{color: '#008000'}}>error</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>auxiliar</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma mensagem com a descrição do erro e a sua causa.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |
| **auxiliar** | _java.lang.Object_ | Throwable alternativo para incluir na mensagem de erro. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_error</span>.<span style={{color: '#008000'}}>error</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>auxiliar</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Throwable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma mensagem com a um descrição de um erro e o seu objeto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |
| **auxiliar** | _java.lang.Throwable_ | Throwable alternativo para incluir na mensagem de erro. |

##### Retorno

( _void_ )


---

## fatal

---

#### <span style={{fontWeight: 'normal'}}>_error</span>.<span style={{color: '#008000'}}>fatal</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma mensagem do tipo **FATAL** no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_error</span>.<span style={{color: '#008000'}}>fatal</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>auxiliar</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_error</span>.<span style={{color: '#008000'}}>fatal</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>auxiliar</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Throwable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma mensagem do tipo **FATAL** no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |
| **auxiliar** | _java.lang.Throwable_ | Throwable alternativo para incluir na mensagem de log. |

##### Retorno

( _void_ )


---

## info

---

#### <span style={{fontWeight: 'normal'}}>_error</span>.<span style={{color: '#008000'}}>info</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma mensagem com a descrição do debug e a seu objeto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_error</span>.<span style={{color: '#008000'}}>info</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>auxiliar</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma mensagem de informação e uma throwable.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |
| **auxiliar** | _java.lang.Object_ | Throwable alternativo para incluir na mensagem de informação. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_error</span>.<span style={{color: '#008000'}}>info</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>causa</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Throwable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma mensagem de informação.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |
| **causa** | _java.lang.Throwable_ | Throwable alternativo para incluir na mensagem de log. |

##### Retorno

( _void_ )


---

## is

---

#### <span style={{fontWeight: 'normal'}}>_error</span>.<span style={{color: '#008000'}}>is</span>(<span style={{color: '#FF8000'}}>objeto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se um objeto é de tipo Error, Exception ou Throwable.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **objeto** | _java.lang.Object_ | Objeto que será verificado. |

##### Retorno

( _boolean_ )

Retorna **true** caso o objeto seja do tipo Error, Exception ou Throwable.

---

## isError

---

#### <span style={{fontWeight: 'normal'}}>_error</span>.<span style={{color: '#008000'}}>isError</span>(<span style={{color: '#FF8000'}}>objeto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se um objeto é de tipo Error.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **objeto** | _java.lang.Object_ | Objeto que será verificado. |

##### Retorno

( _boolean_ )

Retorna **true** caso o objeto seja do tipo Error.

---

## isException

---

#### <span style={{fontWeight: 'normal'}}>_error</span>.<span style={{color: '#008000'}}>isException</span>(<span style={{color: '#FF8000'}}>objeto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se um objeto é de tipo Exception.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **objeto** | _java.lang.Object_ | Objeto que será verificado. |

##### Retorno

( _boolean_ )

Retorna **true** caso o objeto seja do tipo Exception.

---

## isThrowable

---

#### <span style={{fontWeight: 'normal'}}>_error</span>.<span style={{color: '#008000'}}>isThrowable</span>(<span style={{color: '#FF8000'}}>objeto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se um objeto é de tipo Throwable.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **objeto** | _java.lang.Object_ | Objeto que será verificado. |

##### Retorno

( _boolean_ )

Retorna **true** caso o objeto seja do tipo Throwable.

---

## raise

---

#### <span style={{fontWeight: 'normal'}}>_error</span>.<span style={{color: '#008000'}}>raise</span>(<span style={{color: '#FF8000'}}>objeto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Lança um erro de acordo com o tipo de objeto passado (Error, Exception ou Throwable).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **objeto** | _java.lang.Object_ | Objeto de erro. |

##### Retorno

( _void_ )


---

## trace

---

#### <span style={{fontWeight: 'normal'}}>_error</span>.<span style={{color: '#008000'}}>trace</span>(<span style={{color: '#FF8000'}}>messagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Retorna uma exceção e uma lista dos métodos que a causaram com uma mensagem de descrição.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **messagem** | _string_ | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_error</span>.<span style={{color: '#008000'}}>trace</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>auxiliar</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Retorna um objeto e uma lista dos métodos que a causaram com uma mensagem de descrição.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |
| **auxiliar** | _java.lang.Object_ | Object alternativo para incluir na mensagem de erro. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_error</span>.<span style={{color: '#008000'}}>trace</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>auxiliar</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Throwable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Retorna um throwable e uma lista dos métodos que a causaram com uma mensagem de descrição.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |
| **auxiliar** | _java.lang.Throwable_ | Throwable alternativo para incluir na mensagem de log. |

##### Retorno

( _void_ )


---

## warn

---

#### <span style={{fontWeight: 'normal'}}>_error</span>.<span style={{color: '#008000'}}>warn</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma mensagem de aviso.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_error</span>.<span style={{color: '#008000'}}>warn</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>auxiliar</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma mensagem com a um descrição de um aviso e o seu objeto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |
| **auxiliar** | _java.lang.Object_ | Object alternativo para incluir na mensagem de aviso. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_error</span>.<span style={{color: '#008000'}}>warn</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>auxiliar</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Throwable</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma mensagem com a um descrição de um aviso e a sua throwable.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |
| **auxiliar** | _java.lang.Throwable_ | Throwable alternativo para incluir na mensagem de aviso. |

##### Retorno

( _void_ )


---

