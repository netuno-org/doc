---
id: dataItem
title: DataItem
sidebar_label: DataItem
---

Transição de dados e de controlo das operações das actions, utilizado nos scripts em `server/actions`.

```javascript
if (_dataItem.isUpdate()) {
    _log.info('ID do registo alterado: '+ _dataItem.id);
}
```

---

## getCounter

---

#### _dataItem.getCounter() : _int_
##### Retorno

( _int_ )


---

## getErrorMessage

---

#### _dataItem.getErrorMessage() : string
##### Retorno

( string )


---

## getErrorTitle

---

#### _dataItem.getErrorTitle() : string
##### Retorno

( string )


---

## getField

---

#### _dataItem.getField() : string
##### Retorno

( string )


---

## getFirebaseValues

---

#### _dataItem.getFirebaseValues() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## getId

---

#### _dataItem.getId() : string
##### Retorno

( string )


---

## getOldRecord

---

#### _dataItem.getOldRecord() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## getRecord

---

#### _dataItem.getRecord() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## getRelationItem

---

#### _dataItem.getRelationItem() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## getRelationTable

---

#### _dataItem.getRelationTable() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## getStatus

---

#### _dataItem.getStatus() : _Status_
##### Retorno

( _Status_ )


---

## getStatusType

---

#### _dataItem.getStatusType() : _StatusType_
##### Retorno

( _StatusType_ )


---

## getTable

---

#### _dataItem.getTable() : string
##### Retorno

( string )


---

## getUid

---

#### _dataItem.getUid() : string
##### Retorno

( string )


---

## getValues

---

#### _dataItem.getValues() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## isDelete

---

#### _dataItem.isDelete() : _boolean_
##### Retorno

( _boolean_ )


---

## isError

---

#### _dataItem.isError() : _boolean_
##### Retorno

( _boolean_ )


---

## isFirebase

---

#### _dataItem.isFirebase() : _boolean_
##### Retorno

( _boolean_ )


---

## isInsert

---

#### _dataItem.isInsert() : _boolean_
##### Retorno

( _boolean_ )


---

## isNone

---

#### _dataItem.isNone() : _boolean_
##### Retorno

( _boolean_ )


---

## isOk

---

#### _dataItem.isOk() : _boolean_
##### Retorno

( _boolean_ )


---

## isProgrammatically

---

#### _dataItem.isProgrammatically() : _boolean_
##### Retorno

( _boolean_ )


---

## isStatusAsDelete

---

#### _dataItem.isStatusAsDelete() : _boolean_
##### Retorno

( _boolean_ )


---

## isStatusAsDeleted

---

#### _dataItem.isStatusAsDeleted() : _boolean_
##### Retorno

( _boolean_ )


---

## isStatusAsError

---

#### _dataItem.isStatusAsError() : _boolean_
##### Retorno

( _boolean_ )


---

## isStatusAsExists

---

#### _dataItem.isStatusAsExists() : _boolean_
##### Retorno

( _boolean_ )


---

## isStatusAsInsert

---

#### _dataItem.isStatusAsInsert() : _boolean_
##### Retorno

( _boolean_ )


---

## isStatusAsInserted

---

#### _dataItem.isStatusAsInserted() : _boolean_
##### Retorno

( _boolean_ )


---

## isStatusAsNone

---

#### _dataItem.isStatusAsNone() : _boolean_
##### Retorno

( _boolean_ )


---

## isStatusAsNotFound

---

#### _dataItem.isStatusAsNotFound() : _boolean_
##### Retorno

( _boolean_ )


---

## isStatusAsRelations

---

#### _dataItem.isStatusAsRelations() : _boolean_
##### Retorno

( _boolean_ )


---

## isStatusAsUpdate

---

#### _dataItem.isStatusAsUpdate() : _boolean_
##### Retorno

( _boolean_ )


---

## isStatusAsUpdated

---

#### _dataItem.isStatusAsUpdated() : _boolean_
##### Retorno

( _boolean_ )


---

## isStatusTypeAsError

---

#### _dataItem.isStatusTypeAsError() : _boolean_
##### Retorno

( _boolean_ )


---

## isStatusTypeAsNone

---

#### _dataItem.isStatusTypeAsNone() : _boolean_
##### Retorno

( _boolean_ )


---

## isStatusTypeAsOk

---

#### _dataItem.isStatusTypeAsOk() : _boolean_
##### Retorno

( _boolean_ )


---

## isUpdate

---

#### _dataItem.isUpdate() : _boolean_
##### Retorno

( _boolean_ )


---

## setCounter

---

#### _dataItem.setCounter(arg0: _int_) : _DataItem_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _DataItem_ )


---

## setErrorMessage

---

#### _dataItem.setErrorMessage(arg0: string) : _DataItem_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _DataItem_ )


---

## setErrorTitle

---

#### _dataItem.setErrorTitle(arg0: string) : _DataItem_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _DataItem_ )


---

## setField

---

#### _dataItem.setField(arg0: string) : _DataItem_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _DataItem_ )


---

## setFirebase

---

#### _dataItem.setFirebase(arg0: _boolean_) : _DataItem_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _DataItem_ )


---

## setFirebaseValues

---

#### _dataItem.setFirebaseValues(arg0: _[Values](../../objects/Values)_) : _DataItem_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _DataItem_ )


---

## setId

---

#### _dataItem.setId(arg0: string) : _DataItem_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _DataItem_ )


---

## setProgrammatically

---

#### _dataItem.setProgrammatically(arg0: _boolean_) : _DataItem_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _DataItem_ )


---

## setRecord

---

#### _dataItem.setRecord(arg0: _[Values](../../objects/Values)_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _void_ )


---

## setRelationItem

---

#### _dataItem.setRelationItem(arg0: _[Values](../../objects/Values)_) : _DataItem_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _DataItem_ )


---

## setRelationTable

---

#### _dataItem.setRelationTable(arg0: _[Values](../../objects/Values)_) : _DataItem_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _DataItem_ )


---

## setStatus

---

#### _dataItem.setStatus(arg0: _Status_) : _DataItem_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Status_ |   |

##### Retorno

( _DataItem_ )


---

## setStatusWithError

---

#### _dataItem.setStatusWithError() : _DataItem_
##### Retorno

( _DataItem_ )


---

## setTable

---

#### _dataItem.setTable(arg0: string) : _DataItem_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _DataItem_ )


---

## setUid

---

#### _dataItem.setUid(arg0: string) : _DataItem_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _DataItem_ )


---

## setValues

---

#### _dataItem.setValues(arg0: _[Values](../../objects/Values)_) : _DataItem_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _DataItem_ )


---

