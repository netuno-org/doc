---
id: form
title: Form
sidebar_label: Form
---

Responsável por realizar a gestão dos formulários da aplicação programaticamente.

---

## all

---

#### _form.all() : java.util.List
##### Retorno

( _java.util.List_ )


---

## create

---

#### _form.create(data: [Values](/docs/library/objects/Values)) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

## createComponent

---

#### _form.createComponent(formId: int, data: [Values](/docs/library/objects/Values)) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

#### _form.createComponent(formNameOrUid: string, data: [Values](/docs/library/objects/Values)) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

## createComponentIfNotExists

---

#### _form.createComponentIfNotExists(formId: int, data: [Values](/docs/library/objects/Values)) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

#### _form.createComponentIfNotExists(formNameOrUid: string, data: [Values](/docs/library/objects/Values)) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

## createIfNotExists

---

#### _form.createIfNotExists(data: [Values](/docs/library/objects/Values)) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

## get

---

#### _form.get(id: int) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **id** | _int_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _form.get(nameOrUid: string) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nameOrUid** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _form.get(data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## getAllComponents

---

#### _form.getAllComponents(formId: int) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### _form.getAllComponents(formNameOrUid: string) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formNameOrUid** | _string_ |   |

##### Retorno

( _java.util.List_ )


---

## getComponent

---

#### _form.getComponent(formId: int, id: int) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |
| **id** | _int_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _form.getComponent(formId: int, nameOrUid: string) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |
| **nameOrUid** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _form.getComponent(formId: int, data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _form.getComponent(formNameOrUid: string, id: int) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **id** | _int_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _form.getComponent(formNameOrUid: string, nameOrUid: string) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **nameOrUid** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _form.getComponent(formNameOrUid: string, data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## mandatoryFields

---

#### _form.mandatoryFields(formId: int) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### _form.mandatoryFields(formNameOrUid: string) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formNameOrUid** | _string_ |   |

##### Retorno

( _java.util.List_ )


---

## uniqueFields

---

#### _form.uniqueFields(formId: int) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### _form.uniqueFields(formNameOrUid: string) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formNameOrUid** | _string_ |   |

##### Retorno

( _java.util.List_ )


---

