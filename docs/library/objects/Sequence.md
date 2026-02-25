---
id: Sequence
title: Sequence
sidebar_label: Sequence
---

Realiza a manipulação de sequências em base de dados.

```javascript
if (!_db.checkExists().sequence("client", "name")) {
    _db.index().create(
        "client", // Nome da Tabela
        "name" // Nome da Coluna
    ); // O index client_name_idx será criado criado.
}
```

---

## coalesce

---

#### <span style={{color: '#008000'}}>coalesce</span>(<span style={{color: '#FF8000'}}>params</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **params** | _string[]_ |   |

##### Return

( _string_ )


---

## columnDataType

---

#### <span style={{color: '#008000'}}>columnDataType</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.com.ComponentData</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Column](/docs/library/objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _org.netuno.tritao.com.ComponentData_ |   |

##### Return

( _[Column](/docs/library/objects/Column)_ )


---

## commandNextValue

---

#### <span style={{color: '#008000'}}>commandNextValue</span>(<span style={{color: '#FF8000'}}>sequenceName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sequenceName** | _string_ |   |

##### Return

( _string_ )


---

## concatenation

---

#### <span style={{color: '#008000'}}>concatenation</span>(<span style={{color: '#FF8000'}}>param1</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>param2</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **param1** | _string_ |   |
| **param2** | _string_ |   |

##### Return

( _string_ )


---

## create

---

#### <span style={{color: '#008000'}}>create</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Sequence](/docs/library/objects/Sequence)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |

##### Return

( _[Sequence](/docs/library/objects/Sequence)_ )


---

#### <span style={{color: '#008000'}}>create</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>startWith</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Sequence](/docs/library/objects/Sequence)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |
| **startWith** | _int_ |   |

##### Return

( _[Sequence](/docs/library/objects/Sequence)_ )


---

## drop

---

#### <span style={{color: '#008000'}}>drop</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Sequence](/docs/library/objects/Sequence)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |

##### Return

( _[Sequence](/docs/library/objects/Sequence)_ )


---

## getBuilder

---

#### <span style={{color: '#008000'}}>getBuilder</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.Builder</span>
##### Return

( _org.netuno.tritao.db.Builder_ )


---

## getCurrentValue

---

#### <span style={{color: '#008000'}}>getCurrentValue</span>(<span style={{color: '#FF8000'}}>sequenceName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sequenceName** | _string_ |   |

##### Return

( _int_ )


---

## getDataValue

---

#### <span style={{color: '#008000'}}>getDataValue</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.com.ComponentData</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _org.netuno.tritao.com.ComponentData_ |   |

##### Return

( _string_ )


---

#### <span style={{color: '#008000'}}>getDataValue</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.com.ComponentData</span>, <span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _org.netuno.tritao.com.ComponentData_ |   |
| **value** | _string_ |   |

##### Return

( _string_ )


---

## getExecutor

---

#### <span style={{color: '#008000'}}>getExecutor</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.DBExecutor</span>
##### Return

( _org.netuno.tritao.db.DBExecutor_ )


---

## getHili

---

#### <span style={{color: '#008000'}}>getHili</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.hili.Hili</span>
##### Return

( _org.netuno.tritao.hili.Hili_ )


---

## getKey

---

#### <span style={{color: '#008000'}}>getKey</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getManager

---

#### <span style={{color: '#008000'}}>getManager</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.manager.ManagerBase</span>
##### Return

( _org.netuno.tritao.db.manager.ManagerBase_ )


---

## getProteu

---

#### <span style={{color: '#008000'}}>getProteu</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.proteu.Proteu</span>
##### Return

( _org.netuno.proteu.Proteu_ )


---

## insertInto

---

#### <span style={{color: '#008000'}}>insertInto</span>(<span style={{color: '#FF8000'}}>tableName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _int_ )


---

## isH2

---

#### <span style={{color: '#008000'}}>isH2</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

#### <span style={{color: '#008000'}}>isH2</span>(<span style={{color: '#FF8000'}}>builder</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.Builder</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **builder** | _org.netuno.tritao.db.Builder_ |   |

##### Return

( _boolean_ )


---

## isId

---

#### <span style={{color: '#008000'}}>isId</span>(<span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _boolean_ )


---

## isMSSQL

---

#### <span style={{color: '#008000'}}>isMSSQL</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

#### <span style={{color: '#008000'}}>isMSSQL</span>(<span style={{color: '#FF8000'}}>builder</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.Builder</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **builder** | _org.netuno.tritao.db.Builder_ |   |

##### Return

( _boolean_ )


---

## isMariaDB

---

#### <span style={{color: '#008000'}}>isMariaDB</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

#### <span style={{color: '#008000'}}>isMariaDB</span>(<span style={{color: '#FF8000'}}>builder</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.Builder</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **builder** | _org.netuno.tritao.db.Builder_ |   |

##### Return

( _boolean_ )


---

## isPostgreSQL

---

#### <span style={{color: '#008000'}}>isPostgreSQL</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

#### <span style={{color: '#008000'}}>isPostgreSQL</span>(<span style={{color: '#FF8000'}}>builder</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.Builder</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **builder** | _org.netuno.tritao.db.Builder_ |   |

##### Return

( _boolean_ )


---

## rename

---

#### <span style={{color: '#008000'}}>rename</span>(<span style={{color: '#FF8000'}}>oldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>newName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Sequence](/docs/library/objects/Sequence)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **oldName** | _string_ |   |
| **newName** | _string_ |   |

##### Return

( _[Sequence](/docs/library/objects/Sequence)_ )


---

## renameIfExists

---

#### <span style={{color: '#008000'}}>renameIfExists</span>(<span style={{color: '#FF8000'}}>oldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>newName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Sequence](/docs/library/objects/Sequence)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **oldName** | _string_ |   |
| **newName** | _string_ |   |

##### Return

( _[Sequence](/docs/library/objects/Sequence)_ )


---

## restart

---

#### <span style={{color: '#008000'}}>restart</span>(<span style={{color: '#FF8000'}}>sequenceName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>nextValue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Sequence](/docs/library/objects/Sequence)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sequenceName** | _string_ |   |
| **nextValue** | _int_ |   |

##### Return

( _[Sequence](/docs/library/objects/Sequence)_ )


---

#### <span style={{color: '#008000'}}>restart</span>(<span style={{color: '#FF8000'}}>sequenceName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>tableName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>column</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Sequence](/docs/library/objects/Sequence)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sequenceName** | _string_ |   |
| **tableName** | _string_ |   |
| **column** | _string_ |   |

##### Return

( _[Sequence](/docs/library/objects/Sequence)_ )


---

## searchComparison

---

#### <span style={{color: '#008000'}}>searchComparison</span>(<span style={{color: '#FF8000'}}>param</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **param** | _string_ |   |

##### Return

( _string_ )


---

## sequence

---

#### <span style={{color: '#008000'}}>sequence</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## supported

---

#### <span style={{color: '#008000'}}>supported</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## unaccent

---

#### <span style={{color: '#008000'}}>unaccent</span>(<span style={{color: '#FF8000'}}>input</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _string_ |   |

##### Return

( _string_ )


---

