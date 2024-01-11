---
id: report
title: Report
sidebar_label: Report
---

Gerador de Reports da aplicação programaticamente.

---

## all

---

#### _report.all() : _java.util.List_
##### Retorno

( _java.util.List_ )


---

## create

---

#### _report.create(data: _[Values](../../objects/Values)_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| data | _[Values](../../objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

## createComponent

---

#### _report.createComponent(formId: _int_, data: _[Values](../../objects/Values)_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| formId | _int_ |   |
| data | _[Values](../../objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

#### _report.createComponent(formNameOrUid: string, data: _[Values](../../objects/Values)_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| formNameOrUid | string |   |
| data | _[Values](../../objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

## createComponentIfNotExists

---

#### _report.createComponentIfNotExists(formId: _int_, data: _[Values](../../objects/Values)_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| formId | _int_ |   |
| data | _[Values](../../objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

#### _report.createComponentIfNotExists(formNameOrUid: string, data: _[Values](../../objects/Values)_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| formNameOrUid | string |   |
| data | _[Values](../../objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

## createIfNotExists

---

#### _report.createIfNotExists(data: _[Values](../../objects/Values)_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| data | _[Values](../../objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

## get

---

#### _report.get(id: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| id | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _report.get(nameOrUid: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| nameOrUid | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _report.get(data: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| data | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## getAllComponents

---

#### _report.getAllComponents(formId: _int_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| formId | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### _report.getAllComponents(formNameOrUid: string) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| formNameOrUid | string |   |

##### Retorno

( _java.util.List_ )


---

## getComponent

---

#### _report.getComponent(formId: _int_, id: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| formId | _int_ |   |
| id | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _report.getComponent(formId: _int_, nameOrUid: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| formId | _int_ |   |
| nameOrUid | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _report.getComponent(formId: _int_, data: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| formId | _int_ |   |
| data | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _report.getComponent(formNameOrUid: string, id: _int_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| formNameOrUid | string |   |
| id | _int_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _report.getComponent(formNameOrUid: string, nameOrUid: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| formNameOrUid | string |   |
| nameOrUid | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _report.getComponent(formNameOrUid: string, data: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| formNameOrUid | string |   |
| data | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## notNulls

---

#### _report.notNulls(formId: _int_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| formId | _int_ |   |

##### Retorno

( _java.util.List_ )


---

#### _report.notNulls(formNameOrUid: string) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| formNameOrUid | string |   |

##### Retorno

( _java.util.List_ )


---

