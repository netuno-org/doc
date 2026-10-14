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

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>debug</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma mensagem do tipo **DEPURAÇÃO** (_DEBUG_) no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>debug</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>auxiliar</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>error</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma mensagem do tipo **ERRO** (_ERROR_) no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>error</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>auxiliar</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>fatal</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma mensagem do tipo **FATAL** no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>fatal</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>auxiliar</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>info</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma mensagem do tipo **INFORMAÇÃO** (_INFORMATION_) no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>info</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>auxiliar</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>char[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _char[]_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _boolean_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>char</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _char_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _double_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _float_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _int_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _java.lang.Object_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _string_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>print</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>char[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma linha com a mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _char[]_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma linha com a mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _boolean_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>char</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma linha com a mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _char_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma linha com a mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _double_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma linha com a mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _float_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma linha com a mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _int_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma linha com a mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _java.lang.Object_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma linha com a mensagem direta sem nenhuma contextualização no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _string_ | Conteúdo que será apresentado. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>println</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>long</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>trace</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma mensagem do tipo **VESTÍGIO** (_TRACE_) no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>trace</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>auxiliar</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>warn</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Imprime uma mensagem do tipo **AVISO** (_WARNING_) no ficheiro de log e no terminal do Netuno.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **mensagem** | _string_ | Mensagem que será apresentada em log. |

##### Retorno

( _void_ )


---

#### <span style={{fontWeight: 'normal'}}>_log</span>.<span style={{color: '#008000'}}>warn</span>(<span style={{color: '#FF8000'}}>mensagem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>auxiliar</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.Object</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

