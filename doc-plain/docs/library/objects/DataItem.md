---
id: DataItem
title: DataItem
sidebar_label: DataItem
---

Data transition and control of actions operations, used in scripts in `server/actions`.

```javascript
if (_dataItem.isUpdate()) {
    _log.info('Changed record ID: '+ _dataItem.id);
}
```

---

## getCounter

---

#### getCounter() : int
##### Return

( _int_ )


---

## getErrorMessage

---

#### getErrorMessage() : string
##### Return

( _string_ )


---

## getErrorTitle

---

#### getErrorTitle() : string
##### Return

( _string_ )


---

## getFieldName

---

#### getFieldName() : string
##### Return

( _string_ )


---

## getFieldTitle

---

#### getFieldTitle() : string
##### Return

( _string_ )


---

## getFirebaseValues

---

#### getFirebaseValues() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getFormName

---

#### getFormName() : string
##### Return

( _string_ )


---

## getFormTitle

---

#### getFormTitle() : string
##### Return

( _string_ )


---

## getId

---

#### getId() : string
##### Return

( _string_ )


---

## getOldRecord

---

#### getOldRecord() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getRecord

---

#### getRecord() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getRelationForm

---

#### getRelationForm() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getRelationItem

---

#### getRelationItem() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getStatus

---

#### getStatus() : org.netuno.tritao.db.DataItem$Status
##### Return

( _org.netuno.tritao.db.DataItem$Status_ )


---

## getStatusType

---

#### getStatusType() : org.netuno.tritao.db.DataItem$StatusType
##### Return

( _org.netuno.tritao.db.DataItem$StatusType_ )


---

## getUid

---

#### getUid() : string
##### Return

( _string_ )


---

## getValues

---

#### getValues() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## isDelete

---

#### isDelete() : boolean
##### Return

( _boolean_ )


---

## isError

---

#### isError() : boolean
##### Return

( _boolean_ )


---

## isFirebase

---

#### isFirebase() : boolean
##### Return

( _boolean_ )


---

## isInsert

---

#### isInsert() : boolean
##### Return

( _boolean_ )


---

## isNone

---

#### isNone() : boolean
##### Return

( _boolean_ )


---

## isOk

---

#### isOk() : boolean
##### Return

( _boolean_ )


---

## isProgrammatically

---

#### isProgrammatically() : boolean
##### Return

( _boolean_ )


---

## isStatusAsDelete

---

#### isStatusAsDelete() : boolean
##### Return

( _boolean_ )


---

## isStatusAsDeleted

---

#### isStatusAsDeleted() : boolean
##### Return

( _boolean_ )


---

## isStatusAsError

---

#### isStatusAsError() : boolean
##### Return

( _boolean_ )


---

## isStatusAsExists

---

#### isStatusAsExists() : boolean
##### Return

( _boolean_ )


---

## isStatusAsInsert

---

#### isStatusAsInsert() : boolean
##### Return

( _boolean_ )


---

## isStatusAsInserted

---

#### isStatusAsInserted() : boolean
##### Return

( _boolean_ )


---

## isStatusAsMandatory

---

#### isStatusAsMandatory() : boolean
##### Return

( _boolean_ )


---

## isStatusAsNone

---

#### isStatusAsNone() : boolean
##### Return

( _boolean_ )


---

## isStatusAsNotFound

---

#### isStatusAsNotFound() : boolean
##### Return

( _boolean_ )


---

## isStatusAsRelations

---

#### isStatusAsRelations() : boolean
##### Return

( _boolean_ )


---

## isStatusAsUpdate

---

#### isStatusAsUpdate() : boolean
##### Return

( _boolean_ )


---

## isStatusAsUpdated

---

#### isStatusAsUpdated() : boolean
##### Return

( _boolean_ )


---

## isStatusTypeAsError

---

#### isStatusTypeAsError() : boolean
##### Return

( _boolean_ )


---

## isStatusTypeAsNone

---

#### isStatusTypeAsNone() : boolean
##### Return

( _boolean_ )


---

## isStatusTypeAsOk

---

#### isStatusTypeAsOk() : boolean
##### Return

( _boolean_ )


---

## isUpdate

---

#### isUpdate() : boolean
##### Return

( _boolean_ )


---

## setCounter

---

#### setCounter(counter: int) : [DataItem](/docs/library/objects/DataItem)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **counter** | _int_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setErrorMessage

---

#### setErrorMessage(errorMessage: string) : [DataItem](/docs/library/objects/DataItem)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **errorMessage** | _string_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setErrorTitle

---

#### setErrorTitle(errorTitle: string) : [DataItem](/docs/library/objects/DataItem)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **errorTitle** | _string_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setFieldName

---

#### setFieldName(fieldName: string) : [DataItem](/docs/library/objects/DataItem)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setFieldTitle

---

#### setFieldTitle(fieldTitle: string) : [DataItem](/docs/library/objects/DataItem)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldTitle** | _string_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setFirebase

---

#### setFirebase(firebase: boolean) : [DataItem](/docs/library/objects/DataItem)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **firebase** | _boolean_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setFirebaseValues

---

#### setFirebaseValues(firebaseValues: [Values](/docs/library/objects/Values)) : [DataItem](/docs/library/objects/DataItem)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **firebaseValues** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setFormName

---

#### setFormName(formName: string) : [DataItem](/docs/library/objects/DataItem)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formName** | _string_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setFormTitle

---

#### setFormTitle(formTitle: string) : [DataItem](/docs/library/objects/DataItem)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formTitle** | _string_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setId

---

#### setId(id: string) : [DataItem](/docs/library/objects/DataItem)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setProgrammatically

---

#### setProgrammatically(programmatically: boolean) : [DataItem](/docs/library/objects/DataItem)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **programmatically** | _boolean_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setRecord

---

#### setRecord(record: [Values](/docs/library/objects/Values)) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **record** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _void_ )


---

## setRelationForm

---

#### setRelationForm(relationForm: [Values](/docs/library/objects/Values)) : [DataItem](/docs/library/objects/DataItem)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **relationForm** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setRelationItem

---

#### setRelationItem(relationItem: [Values](/docs/library/objects/Values)) : [DataItem](/docs/library/objects/DataItem)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **relationItem** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setStatus

---

#### setStatus(status: org.netuno.tritao.db.DataItem$Status) : [DataItem](/docs/library/objects/DataItem)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **status** | _org.netuno.tritao.db.DataItem$Status_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setStatusWithError

---

#### setStatusWithError() : [DataItem](/docs/library/objects/DataItem)
##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setUid

---

#### setUid(uid: string) : [DataItem](/docs/library/objects/DataItem)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **uid** | _string_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setValues

---

#### setValues(values: [Values](/docs/library/objects/Values)) : [DataItem](/docs/library/objects/DataItem)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

