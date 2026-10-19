---
id: dataItem
title: DataItem
sidebar_label: DataItem
---

Data transition and control of actions operations, used in scripts in `server/actions`.

> This resource is only available in the actions execution context.

```javascript
if (_dataItem.isUpdate()) {
    _log.info('Changed record ID: '+ _dataItem.id);
}
```

---

## getCounter

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>getCounter</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Return

( _int_ )


---

## getErrorMessage

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>getErrorMessage</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getErrorTitle

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>getErrorTitle</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getFieldName

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>getFieldName</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getFieldTitle

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>getFieldTitle</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getFirebaseValues

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>getFirebaseValues</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getFormName

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>getFormName</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getFormTitle

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>getFormTitle</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getId

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>getId</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getOldRecord

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>getOldRecord</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getRecord

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>getRecord</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getRelationForm

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>getRelationForm</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getRelationItem

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>getRelationItem</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getStatus

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>getStatus</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.DataItem$Status</span>
##### Return

( _org.netuno.tritao.db.DataItem$Status_ )


---

## getStatusType

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>getStatusType</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.DataItem$StatusType</span>
##### Return

( _org.netuno.tritao.db.DataItem$StatusType_ )


---

## getUid

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>getUid</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getValues

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>getValues</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## isDelete

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>isDelete</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isError

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>isError</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isFirebase

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>isFirebase</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isInsert

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>isInsert</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isNone

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>isNone</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isOk

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>isOk</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isProgrammatically

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>isProgrammatically</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStatusAsDelete

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>isStatusAsDelete</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStatusAsDeleted

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>isStatusAsDeleted</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStatusAsError

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>isStatusAsError</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStatusAsExists

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>isStatusAsExists</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStatusAsInsert

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>isStatusAsInsert</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStatusAsInserted

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>isStatusAsInserted</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStatusAsMandatory

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>isStatusAsMandatory</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStatusAsNone

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>isStatusAsNone</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStatusAsNotFound

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>isStatusAsNotFound</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStatusAsRelations

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>isStatusAsRelations</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStatusAsUpdate

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>isStatusAsUpdate</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStatusAsUpdated

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>isStatusAsUpdated</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStatusTypeAsError

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>isStatusTypeAsError</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStatusTypeAsNone

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>isStatusTypeAsNone</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isStatusTypeAsOk

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>isStatusTypeAsOk</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isUpdate

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>isUpdate</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## setCounter

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>setCounter</span>(<span style={{color: '#FF8000'}}>counter</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/resources/dataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **counter** | _int_ |   |

##### Return

( _[DataItem](/docs/library/resources/dataItem)_ )


---

## setErrorMessage

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>setErrorMessage</span>(<span style={{color: '#FF8000'}}>errorMessage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/resources/dataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **errorMessage** | _string_ |   |

##### Return

( _[DataItem](/docs/library/resources/dataItem)_ )


---

## setErrorTitle

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>setErrorTitle</span>(<span style={{color: '#FF8000'}}>errorTitle</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/resources/dataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **errorTitle** | _string_ |   |

##### Return

( _[DataItem](/docs/library/resources/dataItem)_ )


---

## setFieldName

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>setFieldName</span>(<span style={{color: '#FF8000'}}>fieldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/resources/dataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldName** | _string_ |   |

##### Return

( _[DataItem](/docs/library/resources/dataItem)_ )


---

## setFieldTitle

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>setFieldTitle</span>(<span style={{color: '#FF8000'}}>fieldTitle</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/resources/dataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **fieldTitle** | _string_ |   |

##### Return

( _[DataItem](/docs/library/resources/dataItem)_ )


---

## setFirebase

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>setFirebase</span>(<span style={{color: '#FF8000'}}>firebase</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/resources/dataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **firebase** | _boolean_ |   |

##### Return

( _[DataItem](/docs/library/resources/dataItem)_ )


---

## setFirebaseValues

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>setFirebaseValues</span>(<span style={{color: '#FF8000'}}>firebaseValues</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/resources/dataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **firebaseValues** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[DataItem](/docs/library/resources/dataItem)_ )


---

## setFormName

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>setFormName</span>(<span style={{color: '#FF8000'}}>formName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/resources/dataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formName** | _string_ |   |

##### Return

( _[DataItem](/docs/library/resources/dataItem)_ )


---

## setFormTitle

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>setFormTitle</span>(<span style={{color: '#FF8000'}}>formTitle</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/resources/dataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **formTitle** | _string_ |   |

##### Return

( _[DataItem](/docs/library/resources/dataItem)_ )


---

## setId

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>setId</span>(<span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/resources/dataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _[DataItem](/docs/library/resources/dataItem)_ )


---

## setProgrammatically

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>setProgrammatically</span>(<span style={{color: '#FF8000'}}>programmatically</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/resources/dataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **programmatically** | _boolean_ |   |

##### Return

( _[DataItem](/docs/library/resources/dataItem)_ )


---

## setRecord

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>setRecord</span>(<span style={{color: '#FF8000'}}>record</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **record** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _void_ )


---

## setRelationForm

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>setRelationForm</span>(<span style={{color: '#FF8000'}}>relationForm</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/resources/dataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **relationForm** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[DataItem](/docs/library/resources/dataItem)_ )


---

## setRelationItem

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>setRelationItem</span>(<span style={{color: '#FF8000'}}>relationItem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/resources/dataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **relationItem** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[DataItem](/docs/library/resources/dataItem)_ )


---

## setStatus

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>setStatus</span>(<span style={{color: '#FF8000'}}>status</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.DataItem$Status</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/resources/dataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **status** | _org.netuno.tritao.db.DataItem$Status_ |   |

##### Return

( _[DataItem](/docs/library/resources/dataItem)_ )


---

## setStatusWithError

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>setStatusWithError</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/resources/dataItem)</span>
##### Return

( _[DataItem](/docs/library/resources/dataItem)_ )


---

## setUid

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>setUid</span>(<span style={{color: '#FF8000'}}>uid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/resources/dataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **uid** | _string_ |   |

##### Return

( _[DataItem](/docs/library/resources/dataItem)_ )


---

## setValues

---

#### <span style={{fontWeight: 'normal'}}>_dataItem</span>.<span style={{color: '#008000'}}>setValues</span>(<span style={{color: '#FF8000'}}>values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[DataItem](/docs/library/resources/dataItem)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **values** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[DataItem](/docs/library/resources/dataItem)_ )


---

