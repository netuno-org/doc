---
id: form
title: Form
sidebar_label: Form
---

Responsible for managing application forms programmatically.

---

## all

---

#### _form.all() : java.util.List
##### Return

( _java.util.List_ )


---

## create

---

#### _form.create(data: [Values](/docs/library/objects/Values)) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _boolean_ )


---

## createComponent

---

#### _form.createComponent(formId: int, data: [Values](/docs/library/objects/Values)) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### _form.createComponent(formNameOrUid: string, data: [Values](/docs/library/objects/Values)) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _boolean_ )


---

## createComponentIfNotExists

---

#### _form.createComponentIfNotExists(formId: int, data: [Values](/docs/library/objects/Values)) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### _form.createComponentIfNotExists(formNameOrUid: string, data: [Values](/docs/library/objects/Values)) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _boolean_ )


---

## createIfNotExists

---

#### _form.createIfNotExists(data: [Values](/docs/library/objects/Values)) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _boolean_ )


---

## get

---

#### _form.get(id: int) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _int_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _form.get(nameOrUid: string) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **nameOrUid** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _form.get(data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getAllComponents

---

#### _form.getAllComponents(formId: int) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |

##### Return

( _java.util.List_ )


---

#### _form.getAllComponents(formNameOrUid: string) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |

##### Return

( _java.util.List_ )


---

## getComponent

---

#### _form.getComponent(formId: int, id: int) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |
| **id** | _int_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _form.getComponent(formId: int, nameOrUid: string) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |
| **nameOrUid** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _form.getComponent(formId: int, data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _form.getComponent(formNameOrUid: string, id: int) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **id** | _int_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _form.getComponent(formNameOrUid: string, nameOrUid: string) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **nameOrUid** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _form.getComponent(formNameOrUid: string, data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## mandatoryFields

---

#### _form.mandatoryFields(formId: int) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |

##### Return

( _java.util.List_ )


---

#### _form.mandatoryFields(formNameOrUid: string) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |

##### Return

( _java.util.List_ )


---

## uniqueFields

---

#### _form.uniqueFields(formId: int) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |

##### Return

( _java.util.List_ )


---

#### _form.uniqueFields(formNameOrUid: string) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |

##### Return

( _java.util.List_ )


---

