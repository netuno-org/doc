---
id: report
title: Report
sidebar_label: Report
---

Responsável por realizar a gestão dos relatórios da aplicação programaticamente.

---

## all

---

#### _report.all() : java.util.List
##### Retorno

( _java.util.List_ )


---

## create

---

#### _report.create(data: [Values](/docs/library/objects/Values)) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

## createComponent

---

#### _report.createComponent(formId: int, data: [Values](/docs/library/objects/Values)) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

#### _report.createComponent(formNameOrUid: string, data: [Values](/docs/library/objects/Values)) : boolean
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

#### _report.createComponentIfNotExists(formId: int, data: [Values](/docs/library/objects/Values)) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

#### _report.createComponentIfNotExists(formNameOrUid: string, data: [Values](/docs/library/objects/Values)) : boolean
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

#### _report.createIfNotExists(data: [Values](/docs/library/objects/Values)) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

## get

---

#### _report.get(id: int) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **id** | _int_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _report.get(nameOrUid: string) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nameOrUid** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _report.get(data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## getAllComponents

---

#### _report.getAllComponents(formId: int) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### _report.getAllComponents(formNameOrUid: string) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formNameOrUid** | _string_ |   |

##### Retorno

( _java.util.List_ )


---

## getComponent

---

#### _report.getComponent(formId: int, id: int) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |
| **id** | _int_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _report.getComponent(formId: int, nameOrUid: string) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |
| **nameOrUid** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _report.getComponent(formId: int, data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _report.getComponent(formNameOrUid: string, id: int) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **id** | _int_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _report.getComponent(formNameOrUid: string, nameOrUid: string) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **nameOrUid** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _report.getComponent(formNameOrUid: string, data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
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

#### _report.mandatoryFields(formId: int) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formId** | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### _report.mandatoryFields(formNameOrUid: string) : java.util.List
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formNameOrUid** | _string_ |   |

##### Retorno

( _java.util.List_ )


---

