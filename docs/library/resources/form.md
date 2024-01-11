---
id: form
title: Form
sidebar_label: Form
---

Application form generator programmatically.

---

## all

---

#### _form.all() : _java.util.List_
##### Return

( _java.util.List_ )


---

## create

---

#### _form.create(data: _[Values](../../objects/Values)_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

## createComponent

---

#### _form.createComponent(formId: _int_, data: _[Values](../../objects/Values)_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| formId | _int_ |   |
| data | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### _form.createComponent(formNameOrUid: string, data: _[Values](../../objects/Values)_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| formNameOrUid | string |   |
| data | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

## createComponentIfNotExists

---

#### _form.createComponentIfNotExists(formId: _int_, data: _[Values](../../objects/Values)_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| formId | _int_ |   |
| data | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### _form.createComponentIfNotExists(formNameOrUid: string, data: _[Values](../../objects/Values)_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| formNameOrUid | string |   |
| data | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

## createIfNotExists

---

#### _form.createIfNotExists(data: _[Values](../../objects/Values)_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

## get

---

#### _form.get(id: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| id | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _form.get(nameOrUid: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| nameOrUid | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _form.get(data: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## getAllComponents

---

#### _form.getAllComponents(formId: _int_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| formId | _int_ |   |

##### Return

( _java.util.List_ )


---

#### _form.getAllComponents(formNameOrUid: string) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| formNameOrUid | string |   |

##### Return

( _java.util.List_ )


---

## getComponent

---

#### _form.getComponent(formId: _int_, id: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| formId | _int_ |   |
| id | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _form.getComponent(formId: _int_, nameOrUid: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| formId | _int_ |   |
| nameOrUid | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _form.getComponent(formId: _int_, data: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| formId | _int_ |   |
| data | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _form.getComponent(formNameOrUid: string, id: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| formNameOrUid | string |   |
| id | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _form.getComponent(formNameOrUid: string, nameOrUid: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| formNameOrUid | string |   |
| nameOrUid | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _form.getComponent(formNameOrUid: string, data: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| formNameOrUid | string |   |
| data | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## notNulls

---

#### _form.notNulls(formId: _int_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| formId | _int_ |   |

##### Return

( _java.util.List_ )


---

#### _form.notNulls(formNameOrUid: string) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| formNameOrUid | string |   |

##### Return

( _java.util.List_ )


---

## primaryKeys

---

#### _form.primaryKeys(formId: _int_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| formId | _int_ |   |

##### Return

( _java.util.List_ )


---

#### _form.primaryKeys(formNameOrUid: string) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| formNameOrUid | string |   |

##### Return

( _java.util.List_ )


---

