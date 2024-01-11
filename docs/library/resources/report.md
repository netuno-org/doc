---
id: report
title: Form
sidebar_label: Form
---

Application reports generator programmatically.

---

## all

---

#### _report.all() : _java.util.List_
##### Return

( _java.util.List_ )


---

## create

---

#### _report.create(data: _[Values](../../objects/Values)_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

## createComponent

---

#### _report.createComponent(formId: _int_, data: _[Values](../../objects/Values)_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| formId | _int_ |   |
| data | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### _report.createComponent(formNameOrUid: string, data: _[Values](../../objects/Values)_) : _boolean_
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

#### _report.createComponentIfNotExists(formId: _int_, data: _[Values](../../objects/Values)_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| formId | _int_ |   |
| data | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### _report.createComponentIfNotExists(formNameOrUid: string, data: _[Values](../../objects/Values)_) : _boolean_
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

#### _report.createIfNotExists(data: _[Values](../../objects/Values)_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | _[Values](../../objects/Values)_ |   |

##### Return

( _boolean_ )


---

## get

---

#### _report.get(id: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| id | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _report.get(nameOrUid: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| nameOrUid | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _report.get(data: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| data | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## getAllComponents

---

#### _report.getAllComponents(formId: _int_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| formId | _int_ |   |

##### Return

( _java.util.List_ )


---

#### _report.getAllComponents(formNameOrUid: string) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| formNameOrUid | string |   |

##### Return

( _java.util.List_ )


---

## getComponent

---

#### _report.getComponent(formId: _int_, id: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| formId | _int_ |   |
| id | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _report.getComponent(formId: _int_, nameOrUid: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| formId | _int_ |   |
| nameOrUid | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _report.getComponent(formId: _int_, data: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| formId | _int_ |   |
| data | _[Values](../../objects/Values)_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _report.getComponent(formNameOrUid: string, id: _int_) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| formNameOrUid | string |   |
| id | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _report.getComponent(formNameOrUid: string, nameOrUid: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| formNameOrUid | string |   |
| nameOrUid | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### _report.getComponent(formNameOrUid: string, data: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
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

#### _report.notNulls(formId: _int_) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| formId | _int_ |   |

##### Return

( _java.util.List_ )


---

#### _report.notNulls(formNameOrUid: string) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| formNameOrUid | string |   |

##### Return

( _java.util.List_ )


---

