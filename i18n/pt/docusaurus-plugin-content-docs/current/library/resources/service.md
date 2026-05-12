---
id: service
title: Service
sidebar_label: Service
---

Gere a execução dos scripts de serviços em `server/services`.

> Este recurso está disponível apenas no contexto de execução dos serviços (`services`).

---

## allow

---

#### <span style={{fontWeight: 'normal'}}>_service</span>.<span style={{color: '#008000'}}>allow</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Retorno

( _void_ )


---

## cancel

---

#### <span style={{fontWeight: 'normal'}}>_service</span>.<span style={{color: '#008000'}}>cancel</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Retorno

( _void_ )


---

## defaultEmptyOutput

---

#### <span style={{fontWeight: 'normal'}}>_service</span>.<span style={{color: '#008000'}}>defaultEmptyOutput</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Retorno

( _void_ )


---

## deny

---

#### <span style={{fontWeight: 'normal'}}>_service</span>.<span style={{color: '#008000'}}>deny</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Retorno

( _void_ )


---

## execute

---

#### <span style={{fontWeight: 'normal'}}>_service</span>.<span style={{color: '#008000'}}>execute</span>(<span style={{color: '#FF8000'}}>file</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _string_ |   |

##### Retorno

( _boolean_ )


---

## getInstance

---

#### <span style={{fontWeight: 'normal'}}>_service</span>.<span style={{color: '#008000'}}>getInstance</span>(<span style={{color: '#FF8000'}}>proteu</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.proteu.Proteu</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Service](/docs/library/resources/service)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **proteu** | _org.netuno.proteu.Proteu_ |   |

##### Retorno

( _[Service](/docs/library/resources/service)_ )


---

## getMethod

---

#### <span style={{fontWeight: 'normal'}}>_service</span>.<span style={{color: '#008000'}}>getMethod</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## getMethods

---

#### <span style={{fontWeight: 'normal'}}>_service</span>.<span style={{color: '#008000'}}>getMethods</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;string&gt;</span>
##### Retorno

( _java.util.List_ )


---

## getPath

---

#### <span style={{fontWeight: 'normal'}}>_service</span>.<span style={{color: '#008000'}}>getPath</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## isAllowed

---

#### <span style={{fontWeight: 'normal'}}>_service</span>.<span style={{color: '#008000'}}>isAllowed</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isDenied

---

#### <span style={{fontWeight: 'normal'}}>_service</span>.<span style={{color: '#008000'}}>isDenied</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isGeneratingOpenAPIDefinition

---

#### <span style={{fontWeight: 'normal'}}>_service</span>.<span style={{color: '#008000'}}>isGeneratingOpenAPIDefinition</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isMethod

---

#### <span style={{fontWeight: 'normal'}}>_service</span>.<span style={{color: '#008000'}}>isMethod</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isNotFoundDefaultError

---

#### <span style={{fontWeight: 'normal'}}>_service</span>.<span style={{color: '#008000'}}>isNotFoundDefaultError</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## method

---

#### <span style={{fontWeight: 'normal'}}>_service</span>.<span style={{color: '#008000'}}>method</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## notFoundDefaultError

---

#### <span style={{fontWeight: 'normal'}}>_service</span>.<span style={{color: '#008000'}}>notFoundDefaultError</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_service</span>.<span style={{color: '#008000'}}>notFoundDefaultError</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _boolean_ |   |

##### Retorno

( _void_ )


---

## path

---

#### <span style={{fontWeight: 'normal'}}>_service</span>.<span style={{color: '#008000'}}>path</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## runCoreScript

---

#### <span style={{fontWeight: 'normal'}}>_service</span>.<span style={{color: '#008000'}}>runCoreScript</span>(<span style={{color: '#FF8000'}}>proteu</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.proteu.Proteu</span>, <span style={{color: '#FF8000'}}>hili</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.hili.Hili</span>, <span style={{color: '#FF8000'}}>file</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **proteu** | _org.netuno.proteu.Proteu_ |   |
| **hili** | _org.netuno.tritao.hili.Hili_ |   |
| **file** | _string_ |   |

##### Retorno

( _boolean_ )


---

## setNotFoundDefaultError

---

#### <span style={{fontWeight: 'normal'}}>_service</span>.<span style={{color: '#008000'}}>setNotFoundDefaultError</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _boolean_ |   |

##### Retorno

( _void_ )


---

## wasCancelled

---

#### <span style={{fontWeight: 'normal'}}>_service</span>.<span style={{color: '#008000'}}>wasCancelled</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

