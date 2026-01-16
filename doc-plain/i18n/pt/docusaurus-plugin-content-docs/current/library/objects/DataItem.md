---
id: DataItem
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

#### getCounter() : int
##### Retorno

( _int_ )


---

## getErrorMessage

---

#### getErrorMessage() : string
##### Retorno

( _string_ )


---

## getErrorTitle

---

#### getErrorTitle() : string
##### Retorno

( _string_ )


---

## getFieldName

---

#### getFieldName() : string
##### Retorno

( _string_ )


---

## getFieldTitle

---

#### getFieldTitle() : string
##### Retorno

( _string_ )


---

## getFirebaseValues

---

#### getFirebaseValues() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## getFormName

---

#### getFormName() : string
##### Retorno

( _string_ )


---

## getFormTitle

---

#### getFormTitle() : string
##### Retorno

( _string_ )


---

## getId

---

#### getId() : string
##### Retorno

( _string_ )


---

## getOldRecord

---

#### getOldRecord() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## getRecord

---

#### getRecord() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## getRelationForm

---

#### getRelationForm() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## getRelationItem

---

#### getRelationItem() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## getStatus

---

#### getStatus() : org.netuno.tritao.db.DataItem$Status
##### Retorno

( _org.netuno.tritao.db.DataItem$Status_ )


---

## getStatusType

---

#### getStatusType() : org.netuno.tritao.db.DataItem$StatusType
##### Retorno

( _org.netuno.tritao.db.DataItem$StatusType_ )


---

## getUid

---

#### getUid() : string
##### Retorno

( _string_ )


---

## getValues

---

#### getValues() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## isDelete

---

#### isDelete() : boolean
##### Retorno

( _boolean_ )


---

## isError

---

#### isError() : boolean
##### Retorno

( _boolean_ )


---

## isFirebase

---

#### isFirebase() : boolean
##### Retorno

( _boolean_ )


---

## isInsert

---

#### isInsert() : boolean
##### Retorno

( _boolean_ )


---

## isNone

---

#### isNone() : boolean
##### Retorno

( _boolean_ )


---

## isOk

---

#### isOk() : boolean
##### Retorno

( _boolean_ )


---

## isProgrammatically

---

#### isProgrammatically() : boolean
##### Retorno

( _boolean_ )


---

## isStatusAsDelete

---

#### isStatusAsDelete() : boolean
##### Retorno

( _boolean_ )


---

## isStatusAsDeleted

---

#### isStatusAsDeleted() : boolean
##### Retorno

( _boolean_ )


---

## isStatusAsError

---

#### isStatusAsError() : boolean
##### Retorno

( _boolean_ )


---

## isStatusAsExists

---

#### isStatusAsExists() : boolean
##### Retorno

( _boolean_ )


---

## isStatusAsInsert

---

#### isStatusAsInsert() : boolean
##### Retorno

( _boolean_ )


---

## isStatusAsInserted

---

#### isStatusAsInserted() : boolean
##### Retorno

( _boolean_ )


---

## isStatusAsMandatory

---

#### isStatusAsMandatory() : boolean
##### Retorno

( _boolean_ )


---

## isStatusAsNone

---

#### isStatusAsNone() : boolean
##### Retorno

( _boolean_ )


---

## isStatusAsNotFound

---

#### isStatusAsNotFound() : boolean
##### Retorno

( _boolean_ )


---

## isStatusAsRelations

---

#### isStatusAsRelations() : boolean
##### Retorno

( _boolean_ )


---

## isStatusAsUpdate

---

#### isStatusAsUpdate() : boolean
##### Retorno

( _boolean_ )


---

## isStatusAsUpdated

---

#### isStatusAsUpdated() : boolean
##### Retorno

( _boolean_ )


---

## isStatusTypeAsError

---

#### isStatusTypeAsError() : boolean
##### Retorno

( _boolean_ )


---

## isStatusTypeAsNone

---

#### isStatusTypeAsNone() : boolean
##### Retorno

( _boolean_ )


---

## isStatusTypeAsOk

---

#### isStatusTypeAsOk() : boolean
##### Retorno

( _boolean_ )


---

## isUpdate

---

#### isUpdate() : boolean
##### Retorno

( _boolean_ )


---

## setCounter

---

#### setCounter(counter: int) : [DataItem](/docs/library/objects/DataItem)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **counter** | _int_ |   |

##### Retorno

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setErrorMessage

---

#### setErrorMessage(errorMessage: string) : [DataItem](/docs/library/objects/DataItem)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **errorMessage** | _string_ |   |

##### Retorno

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setErrorTitle

---

#### setErrorTitle(errorTitle: string) : [DataItem](/docs/library/objects/DataItem)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **errorTitle** | _string_ |   |

##### Retorno

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setFieldName

---

#### setFieldName(fieldName: string) : [DataItem](/docs/library/objects/DataItem)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fieldName** | _string_ |   |

##### Retorno

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setFieldTitle

---

#### setFieldTitle(fieldTitle: string) : [DataItem](/docs/library/objects/DataItem)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **fieldTitle** | _string_ |   |

##### Retorno

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setFirebase

---

#### setFirebase(firebase: boolean) : [DataItem](/docs/library/objects/DataItem)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **firebase** | _boolean_ |   |

##### Retorno

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setFirebaseValues

---

#### setFirebaseValues(firebaseValues: [Values](/docs/library/objects/Values)) : [DataItem](/docs/library/objects/DataItem)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **firebaseValues** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setFormName

---

#### setFormName(formName: string) : [DataItem](/docs/library/objects/DataItem)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formName** | _string_ |   |

##### Retorno

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setFormTitle

---

#### setFormTitle(formTitle: string) : [DataItem](/docs/library/objects/DataItem)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **formTitle** | _string_ |   |

##### Retorno

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setId

---

#### setId(id: string) : [DataItem](/docs/library/objects/DataItem)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **id** | _string_ |   |

##### Retorno

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setProgrammatically

---

#### setProgrammatically(programmatically: boolean) : [DataItem](/docs/library/objects/DataItem)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **programmatically** | _boolean_ |   |

##### Retorno

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setRecord

---

#### setRecord(record: [Values](/docs/library/objects/Values)) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **record** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _void_ )


---

## setRelationForm

---

#### setRelationForm(relationForm: [Values](/docs/library/objects/Values)) : [DataItem](/docs/library/objects/DataItem)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **relationForm** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setRelationItem

---

#### setRelationItem(relationItem: [Values](/docs/library/objects/Values)) : [DataItem](/docs/library/objects/DataItem)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **relationItem** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setStatus

---

#### setStatus(status: org.netuno.tritao.db.DataItem$Status) : [DataItem](/docs/library/objects/DataItem)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **status** | _org.netuno.tritao.db.DataItem$Status_ |   |

##### Retorno

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setStatusWithError

---

#### setStatusWithError() : [DataItem](/docs/library/objects/DataItem)
##### Retorno

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setUid

---

#### setUid(uid: string) : [DataItem](/docs/library/objects/DataItem)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **uid** | _string_ |   |

##### Retorno

( _[DataItem](/docs/library/objects/DataItem)_ )


---

## setValues

---

#### setValues(values: [Values](/docs/library/objects/Values)) : [DataItem](/docs/library/objects/DataItem)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **values** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[DataItem](/docs/library/objects/DataItem)_ )


---

