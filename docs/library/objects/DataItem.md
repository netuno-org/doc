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

#### getCounter() : _int_
##### Return

( _int_ )


---

## getErrorMessage

---

#### getErrorMessage() : string
##### Return

( string )


---

## getErrorTitle

---

#### getErrorTitle() : string
##### Return

( string )


---

## getField

---

#### getField() : string
##### Return

( string )


---

## getFirebaseValues

---

#### getFirebaseValues() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## getId

---

#### getId() : string
##### Return

( string )


---

## getOldRecord

---

#### getOldRecord() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## getRecord

---

#### getRecord() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## getRelationItem

---

#### getRelationItem() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## getRelationTable

---

#### getRelationTable() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## getStatus

---

#### getStatus() : _org.netuno.tritao.db.DataItem$Status_
##### Return

( _org.netuno.tritao.db.DataItem$Status_ )


---

## getStatusType

---

#### getStatusType() : _org.netuno.tritao.db.DataItem$StatusType_
##### Return

( _org.netuno.tritao.db.DataItem$StatusType_ )


---

## getTable

---

#### getTable() : string
##### Return

( string )


---

## getUid

---

#### getUid() : string
##### Return

( string )


---

## getValues

---

#### getValues() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## isDelete

---

#### isDelete() : _boolean_
##### Return

( _boolean_ )


---

## isError

---

#### isError() : _boolean_
##### Return

( _boolean_ )


---

## isFirebase

---

#### isFirebase() : _boolean_
##### Return

( _boolean_ )


---

## isInsert

---

#### isInsert() : _boolean_
##### Return

( _boolean_ )


---

## isNone

---

#### isNone() : _boolean_
##### Return

( _boolean_ )


---

## isOk

---

#### isOk() : _boolean_
##### Return

( _boolean_ )


---

## isProgrammatically

---

#### isProgrammatically() : _boolean_
##### Return

( _boolean_ )


---

## isStatusAsDelete

---

#### isStatusAsDelete() : _boolean_
##### Return

( _boolean_ )


---

## isStatusAsDeleted

---

#### isStatusAsDeleted() : _boolean_
##### Return

( _boolean_ )


---

## isStatusAsError

---

#### isStatusAsError() : _boolean_
##### Return

( _boolean_ )


---

## isStatusAsExists

---

#### isStatusAsExists() : _boolean_
##### Return

( _boolean_ )


---

## isStatusAsInsert

---

#### isStatusAsInsert() : _boolean_
##### Return

( _boolean_ )


---

## isStatusAsInserted

---

#### isStatusAsInserted() : _boolean_
##### Return

( _boolean_ )


---

## isStatusAsNone

---

#### isStatusAsNone() : _boolean_
##### Return

( _boolean_ )


---

## isStatusAsNotFound

---

#### isStatusAsNotFound() : _boolean_
##### Return

( _boolean_ )


---

## isStatusAsRelations

---

#### isStatusAsRelations() : _boolean_
##### Return

( _boolean_ )


---

## isStatusAsUpdate

---

#### isStatusAsUpdate() : _boolean_
##### Return

( _boolean_ )


---

## isStatusAsUpdated

---

#### isStatusAsUpdated() : _boolean_
##### Return

( _boolean_ )


---

## isStatusTypeAsError

---

#### isStatusTypeAsError() : _boolean_
##### Return

( _boolean_ )


---

## isStatusTypeAsNone

---

#### isStatusTypeAsNone() : _boolean_
##### Return

( _boolean_ )


---

## isStatusTypeAsOk

---

#### isStatusTypeAsOk() : _boolean_
##### Return

( _boolean_ )


---

## isUpdate

---

#### isUpdate() : _boolean_
##### Return

( _boolean_ )


---

## setCounter

---

#### setCounter(arg0: _int_) : _[DataItem](../../objects/DataItem)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _[DataItem](../../objects/DataItem)_ )


---

## setErrorMessage

---

#### setErrorMessage(arg0: string) : _[DataItem](../../objects/DataItem)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[DataItem](../../objects/DataItem)_ )


---

## setErrorTitle

---

#### setErrorTitle(arg0: string) : _[DataItem](../../objects/DataItem)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[DataItem](../../objects/DataItem)_ )


---

## setField

---

#### setField(arg0: string) : _[DataItem](../../objects/DataItem)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[DataItem](../../objects/DataItem)_ )


---

## setFirebase

---

#### setFirebase(arg0: _boolean_) : _[DataItem](../../objects/DataItem)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _[DataItem](../../objects/DataItem)_ )


---

## setFirebaseValues

---

#### setFirebaseValues(arg0: _[Values](../../objects/Values)_) : _[DataItem](../../objects/DataItem)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Return

( _[DataItem](../../objects/DataItem)_ )


---

## setId

---

#### setId(arg0: string) : _[DataItem](../../objects/DataItem)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[DataItem](../../objects/DataItem)_ )


---

## setProgrammatically

---

#### setProgrammatically(arg0: _boolean_) : _[DataItem](../../objects/DataItem)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _[DataItem](../../objects/DataItem)_ )


---

## setRecord

---

#### setRecord(arg0: _[Values](../../objects/Values)_) : _void_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Return

( _void_ )


---

## setRelationItem

---

#### setRelationItem(arg0: _[Values](../../objects/Values)_) : _[DataItem](../../objects/DataItem)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Return

( _[DataItem](../../objects/DataItem)_ )


---

## setRelationTable

---

#### setRelationTable(arg0: _[Values](../../objects/Values)_) : _[DataItem](../../objects/DataItem)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Return

( _[DataItem](../../objects/DataItem)_ )


---

## setStatus

---

#### setStatus(arg0: _org.netuno.tritao.db.DataItem$Status_) : _[DataItem](../../objects/DataItem)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _org.netuno.tritao.db.DataItem$Status_ |   |

##### Return

( _[DataItem](../../objects/DataItem)_ )


---

## setStatusWithError

---

#### setStatusWithError() : _[DataItem](../../objects/DataItem)_
##### Return

( _[DataItem](../../objects/DataItem)_ )


---

## setTable

---

#### setTable(arg0: string) : _[DataItem](../../objects/DataItem)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[DataItem](../../objects/DataItem)_ )


---

## setUid

---

#### setUid(arg0: string) : _[DataItem](../../objects/DataItem)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[DataItem](../../objects/DataItem)_ )


---

## setValues

---

#### setValues(arg0: _[Values](../../objects/Values)_) : _[DataItem](../../objects/DataItem)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Return

( _[DataItem](../../objects/DataItem)_ )


---

