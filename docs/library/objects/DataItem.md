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

#### <span style={{color: '#008000'}}>getCounter</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Return

( _int_ )


---

## getErrorMessage

---

#### <span style={{color: '#008000'}}>getErrorMessage</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getErrorTitle

---

#### <span style={{color: '#008000'}}>getErrorTitle</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getField

---

#### <span style={{color: '#008000'}}>getField</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getFirebaseValues

---

#### <span style={{color: '#008000'}}>getFirebaseValues</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getId

---

#### <span style={{color: '#008000'}}>getId</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getOldRecord

---

#### <span style={{color: '#008000'}}>getOldRecord</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getRecord

---

#### <span style={{color: '#008000'}}>getRecord</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getRelationItem

---

#### <span style={{color: '#008000'}}>getRelationItem</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getRelationTable

---

#### <span style={{color: '#008000'}}>getRelationTable</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getStatus

---

#### <span style={{color: '#008000'}}>getStatus</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.DataItem$Status</span>
##### Return

( _org.netuno.tritao.db.DataItem$Status_ )


---

## getStatusType

---

#### <span style={{color: '#008000'}}>getStatusType</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.DataItem$StatusType</span>
##### Return

( _org.netuno.tritao.db.DataItem$StatusType_ )


---

## getTable

---

#### <span style={{color: '#008000'}}>getTable</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getUid

---

#### <span style={{color: '#008000'}}>getUid</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getValues

---

#### <span style={{color: '#008000'}}>getValues</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## isDelete

---

#### <span style={{color: '#008000'}}>isDelete</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isError

---

#### <span style={{color: '#008000'}}>isError</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isFirebase

---

#### <span style={{color: '#008000'}}>isFirebase</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isInsert

---

#### <span style={{color: '#008000'}}>isInsert</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isNone

---

#### <span style={{color: '#008000'}}>isNone</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isOk

---

#### <span style={{color: '#008000'}}>isOk</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isProgrammatically

---

#### <span style={{color: '#008000'}}>isProgrammatically</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStatusAsDelete

---

#### <span style={{color: '#008000'}}>isStatusAsDelete</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStatusAsDeleted

---

#### <span style={{color: '#008000'}}>isStatusAsDeleted</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStatusAsError

---

#### <span style={{color: '#008000'}}>isStatusAsError</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStatusAsExists

---

#### <span style={{color: '#008000'}}>isStatusAsExists</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStatusAsInsert

---

#### <span style={{color: '#008000'}}>isStatusAsInsert</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStatusAsInserted

---

#### <span style={{color: '#008000'}}>isStatusAsInserted</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStatusAsNone

---

#### <span style={{color: '#008000'}}>isStatusAsNone</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStatusAsNotFound

---

#### <span style={{color: '#008000'}}>isStatusAsNotFound</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStatusAsRelations

---

#### <span style={{color: '#008000'}}>isStatusAsRelations</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStatusAsUpdate

---

#### <span style={{color: '#008000'}}>isStatusAsUpdate</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStatusAsUpdated

---

#### <span style={{color: '#008000'}}>isStatusAsUpdated</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStatusTypeAsError

---

#### <span style={{color: '#008000'}}>isStatusTypeAsError</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStatusTypeAsNone

---

#### <span style={{color: '#008000'}}>isStatusTypeAsNone</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStatusTypeAsOk

---

#### <span style={{color: '#008000'}}>isStatusTypeAsOk</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isUpdate

---

#### <span style={{color: '#008000'}}>isUpdate</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## setCounter

---

#### <span style={{color: '#008000'}}>setCounter</span>(<span style={{color: '#FF8000'}}>counter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/objects/DataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **counter** | _int_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setErrorMessage

---

#### <span style={{color: '#008000'}}>setErrorMessage</span>(<span style={{color: '#FF8000'}}>errorMessage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/objects/DataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **errorMessage** | _string_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setErrorTitle

---

#### <span style={{color: '#008000'}}>setErrorTitle</span>(<span style={{color: '#FF8000'}}>errorTitle</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/objects/DataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **errorTitle** | _string_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setField

---

#### <span style={{color: '#008000'}}>setField</span>(<span style={{color: '#FF8000'}}>field</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/objects/DataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **field** | _string_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setFirebase

---

#### <span style={{color: '#008000'}}>setFirebase</span>(<span style={{color: '#FF8000'}}>firebase</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/objects/DataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **firebase** | _boolean_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setFirebaseValues

---

#### <span style={{color: '#008000'}}>setFirebaseValues</span>(<span style={{color: '#FF8000'}}>firebaseValues</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/objects/DataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **firebaseValues** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setId

---

#### <span style={{color: '#008000'}}>setId</span>(<span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/objects/DataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setProgrammatically

---

#### <span style={{color: '#008000'}}>setProgrammatically</span>(<span style={{color: '#FF8000'}}>programmatically</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/objects/DataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **programmatically** | _boolean_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setRecord

---

#### <span style={{color: '#008000'}}>setRecord</span>(<span style={{color: '#FF8000'}}>record</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **record** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _void_ )


---

## setRelationItem

---

#### <span style={{color: '#008000'}}>setRelationItem</span>(<span style={{color: '#FF8000'}}>relationItem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/objects/DataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **relationItem** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setRelationTable

---

#### <span style={{color: '#008000'}}>setRelationTable</span>(<span style={{color: '#FF8000'}}>relationTable</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/objects/DataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **relationTable** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setStatus

---

#### <span style={{color: '#008000'}}>setStatus</span>(<span style={{color: '#FF8000'}}>status</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.DataItem$Status</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/objects/DataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **status** | _org.netuno.tritao.db.DataItem$Status_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setStatusWithError

---

#### <span style={{color: '#008000'}}>setStatusWithError</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/objects/DataItem)</span>
##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setTable

---

#### <span style={{color: '#008000'}}>setTable</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/objects/DataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setUid

---

#### <span style={{color: '#008000'}}>setUid</span>(<span style={{color: '#FF8000'}}>uid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/objects/DataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **uid** | _string_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setValues

---

#### <span style={{color: '#008000'}}>setValues</span>(<span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/objects/DataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[DataItem](/docs/library/objects/DataItem)_ )


---

