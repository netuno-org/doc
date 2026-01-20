---
id: report
title: Form
sidebar_label: Form
---

Responsible for managing application reports programmatically.

---

## all

---

#### _report.all() : java.util.List
##### Return

( _java.util.List_ )


---

## create

---

#### _report.create(data: [Values](/docs/library/objects/Values)) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _boolean_ )


---

## createComponent

---

#### _report.createComponent(formId: int, data: [Values](/docs/library/objects/Values)) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### _report.createComponent(formNameOrUid: string, data: [Values](/docs/library/objects/Values)) : boolean
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

#### _report.createComponentIfNotExists(formId: int, data: [Values](/docs/library/objects/Values)) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _boolean_ )


---

#### _report.createComponentIfNotExists(formNameOrUid: string, data: [Values](/docs/library/objects/Values)) : boolean
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

#### _report.createIfNotExists(data: [Values](/docs/library/objects/Values)) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _boolean_ )


---

## get

---

#### _report.get(id: int) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _int_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _report.get(nameOrUid: string) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **nameOrUid** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _report.get(data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getAllComponents

---

#### _report.getAllComponents(formId: int) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |

##### Return

( _java.util.List_ )


---

#### _report.getAllComponents(formNameOrUid: string) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |

##### Return

( _java.util.List_ )


---

## getComponent

---

#### _report.getComponent(formId: int, id: int) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |
| **id** | _int_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _report.getComponent(formId: int, nameOrUid: string) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |
| **nameOrUid** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _report.getComponent(formId: int, data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _report.getComponent(formNameOrUid: string, id: int) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **id** | _int_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _report.getComponent(formNameOrUid: string, nameOrUid: string) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |
| **nameOrUid** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _report.getComponent(formNameOrUid: string, data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
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

#### _report.mandatoryFields(formId: int) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formId** | _int_ |   |

##### Return

( _java.util.List_ )


---

#### _report.mandatoryFields(formNameOrUid: string) : java.util.List
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formNameOrUid** | _string_ |   |

##### Return

( _java.util.List_ )


---

