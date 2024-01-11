---
id: form
title: Form
sidebar_label: Form
---

Gerador do formulário da aplicação programaticamente.

---

## all

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">all</span>() : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Retorno

( _java.util.List_ )


---

## create

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">create</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

## createComponent

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">createComponent</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">createComponent</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

## createComponentIfNotExists

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">createComponentIfNotExists</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">createComponentIfNotExists</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

## createIfNotExists

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">createIfNotExists</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

## get

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **id** | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">nameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nameOrUid** | _string_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## getAllComponents

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">getAllComponents</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">getAllComponents</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formNameOrUid** | _string_ |   |

##### Retorno

( _java.util.List_ )


---

## getComponent

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">getComponent</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |
| **id** | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">getComponent</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">nameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |
| **nameOrUid** | _string_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">getComponent</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">getComponent</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **id** | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">getComponent</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">nameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **nameOrUid** | _string_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">getComponent</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## notNulls

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">notNulls</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">notNulls</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formNameOrUid** | _string_ |   |

##### Retorno

( _java.util.List_ )


---

## primaryKeys

---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">primaryKeys</span>(<span style="color: #FF8000">formId</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### <span style="font-weight: normal">_form</span>.<span style="color: #008000">primaryKeys</span>(<span style="color: #FF8000">formNameOrUid</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formNameOrUid** | _string_ |   |

##### Retorno

( _java.util.List_ )


---

