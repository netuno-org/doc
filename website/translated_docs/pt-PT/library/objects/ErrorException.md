---
id: ErrorException
title: ErrorException
sidebar_label: ErrorException
---

Exceção provocada por um erro genérico na plataforma, apresenta os detalhes do erro de forma intuitiva nos logs.

---

## addSuppressed

---

#### <span style="color: #008000">addSuppressed</span>(<span style="color: #FF8000">arg0</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Throwable</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.lang.Throwable_ |   |

##### Retorno

( _void_ )


---

## fillInStackTrace

---

#### <span style="color: #008000">fillInStackTrace</span>() : <span style="font-weight: normal; font-style: italic;">java.lang.Throwable</span>
##### Retorno

( _java.lang.Throwable_ )


---

## getCause

---

#### <span style="color: #008000">getCause</span>() : <span style="font-weight: normal; font-style: italic;">java.lang.Throwable</span>
##### Retorno

( _java.lang.Throwable_ )


---

## getLocalizedMessage

---

#### <span style="color: #008000">getLocalizedMessage</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Retorno

( _string_ )


---

## getLogDebug

---

#### <span style="color: #008000">getLogDebug</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Retorno

( _string_ )


---

## getLogError

---

#### <span style="color: #008000">getLogError</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Retorno

( _string_ )


---

## getLogFatal

---

#### <span style="color: #008000">getLogFatal</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Retorno

( _string_ )


---

## getLogInfo

---

#### <span style="color: #008000">getLogInfo</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Retorno

( _string_ )


---

## getLogMessage

---

#### <span style="color: #008000">getLogMessage</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Retorno

( _string_ )


---

## getLogTrace

---

#### <span style="color: #008000">getLogTrace</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Retorno

( _string_ )


---

## getLogWarn

---

#### <span style="color: #008000">getLogWarn</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Retorno

( _string_ )


---

## getMessage

---

#### <span style="color: #008000">getMessage</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Retorno

( _string_ )


---

## getStackTrace

---

#### <span style="color: #008000">getStackTrace</span>() : <span style="font-weight: normal; font-style: italic;">[Ljava.lang.StackTraceElement;[]</span>
##### Retorno

( _[Ljava.lang.StackTraceElement;[]_ )


---

## getSuppressed

---

#### <span style="color: #008000">getSuppressed</span>() : <span style="font-weight: normal; font-style: italic;">[Ljava.lang.Throwable;[]</span>
##### Retorno

( _[Ljava.lang.Throwable;[]_ )


---

## initCause

---

#### <span style="color: #008000">initCause</span>(<span style="color: #FF8000">arg0</span>: <span style="font-weight: normal; font-style: italic;">java.lang.Throwable</span>) : <span style="font-weight: normal; font-style: italic;">java.lang.Throwable</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.lang.Throwable_ |   |

##### Retorno

( _java.lang.Throwable_ )


---

## isAppendError

---

#### <span style="color: #008000">isAppendError</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

## isLogDebug

---

#### <span style="color: #008000">isLogDebug</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

## isLogError

---

#### <span style="color: #008000">isLogError</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

## isLogFatal

---

#### <span style="color: #008000">isLogFatal</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

## isLogInfo

---

#### <span style="color: #008000">isLogInfo</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

## isLogTrace

---

#### <span style="color: #008000">isLogTrace</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

## isLogWarn

---

#### <span style="color: #008000">isLogWarn</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

## printStackTrace

---

#### <span style="color: #008000">printStackTrace</span>() : <span style="font-weight: normal; font-style: italic;">void</span>
##### Retorno

( _void_ )


---

#### <span style="color: #008000">printStackTrace</span>(<span style="color: #FF8000">arg0</span>: <span style="font-weight: normal; font-style: italic;">java.io.PrintStream</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.io.PrintStream_ |   |

##### Retorno

( _void_ )


---

#### <span style="color: #008000">printStackTrace</span>(<span style="color: #FF8000">arg0</span>: <span style="font-weight: normal; font-style: italic;">java.io.PrintWriter</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _java.io.PrintWriter_ |   |

##### Retorno

( _void_ )


---

## setAppendError

---

#### <span style="color: #008000">setAppendError</span>(<span style="color: #FF8000">arg0</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">org.netuno.proteu.ProteuError</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _boolean_ |   |

##### Retorno

( _org.netuno.proteu.ProteuError_ )


---

## setLogDebug

---

#### <span style="color: #008000">setLogDebug</span>(<span style="color: #FF8000">arg0</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">org.netuno.proteu.ProteuError</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _boolean_ |   |

##### Retorno

( _org.netuno.proteu.ProteuError_ )


---

#### <span style="color: #008000">setLogDebug</span>(<span style="color: #FF8000">arg0</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">org.netuno.proteu.ProteuError</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _string_ |   |

##### Retorno

( _org.netuno.proteu.ProteuError_ )


---

## setLogError

---

#### <span style="color: #008000">setLogError</span>(<span style="color: #FF8000">arg0</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">org.netuno.proteu.ProteuError</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _boolean_ |   |

##### Retorno

( _org.netuno.proteu.ProteuError_ )


---

#### <span style="color: #008000">setLogError</span>(<span style="color: #FF8000">arg0</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">org.netuno.proteu.ProteuError</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _string_ |   |

##### Retorno

( _org.netuno.proteu.ProteuError_ )


---

## setLogFatal

---

#### <span style="color: #008000">setLogFatal</span>(<span style="color: #FF8000">arg0</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">org.netuno.proteu.ProteuError</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _boolean_ |   |

##### Retorno

( _org.netuno.proteu.ProteuError_ )


---

#### <span style="color: #008000">setLogFatal</span>(<span style="color: #FF8000">arg0</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">org.netuno.proteu.ProteuError</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _string_ |   |

##### Retorno

( _org.netuno.proteu.ProteuError_ )


---

## setLogInfo

---

#### <span style="color: #008000">setLogInfo</span>(<span style="color: #FF8000">arg0</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">org.netuno.proteu.ProteuError</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _boolean_ |   |

##### Retorno

( _org.netuno.proteu.ProteuError_ )


---

#### <span style="color: #008000">setLogInfo</span>(<span style="color: #FF8000">arg0</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">org.netuno.proteu.ProteuError</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _string_ |   |

##### Retorno

( _org.netuno.proteu.ProteuError_ )


---

## setLogTrace

---

#### <span style="color: #008000">setLogTrace</span>(<span style="color: #FF8000">arg0</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">org.netuno.proteu.ProteuError</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _boolean_ |   |

##### Retorno

( _org.netuno.proteu.ProteuError_ )


---

#### <span style="color: #008000">setLogTrace</span>(<span style="color: #FF8000">arg0</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">org.netuno.proteu.ProteuError</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _string_ |   |

##### Retorno

( _org.netuno.proteu.ProteuError_ )


---

## setLogWarn

---

#### <span style="color: #008000">setLogWarn</span>(<span style="color: #FF8000">arg0</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">org.netuno.proteu.ProteuError</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _boolean_ |   |

##### Retorno

( _org.netuno.proteu.ProteuError_ )


---

#### <span style="color: #008000">setLogWarn</span>(<span style="color: #FF8000">arg0</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">org.netuno.proteu.ProteuError</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _string_ |   |

##### Retorno

( _org.netuno.proteu.ProteuError_ )


---

## setStackTrace

---

#### <span style="color: #008000">setStackTrace</span>(<span style="color: #FF8000">arg0</span>: <span style="font-weight: normal; font-style: italic;">[Ljava.lang.StackTraceElement;[]</span>) : <span style="font-weight: normal; font-style: italic;">void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **arg0** | _[Ljava.lang.StackTraceElement;[]_ |   |

##### Retorno

( _void_ )


---

