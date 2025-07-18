---
id: Column
title: Column
sidebar_label: Column
---

Realiza a manipulação de colunas em base de dados.

```javascript
if (!_db.checkExists().column("client", "description")) {
    _db.column().rename(
        "client", // Tabela
        "description", // Nome Antigo
        "name" // Novo Nome
    );
}
```

---

## changeType

---

#### <span style={{color: '#008000'}}>changeType</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Column](../objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ |   |

##### Return

( _[Column](../objects/Column)_ )


---

## coalesce

---

#### <span style={{color: '#008000'}}>coalesce</span>(<span style={{color: '#FF8000'}}>params</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.lang.String[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **params** | _java.lang.String[]_ |   |

##### Return

( _string_ )


---

## columnDataType

---

#### <span style={{color: '#008000'}}>columnDataType</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.com.ComponentData</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Column](../objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _org.netuno.tritao.com.ComponentData_ |   |

##### Return

( _[Column](../objects/Column)_ )


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

## drop

---

#### <span style={{color: '#008000'}}>drop</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>column</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Column](../objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ |   |
| **column** | _string_ |   |

##### Return

( _[Column](../objects/Column)_ )


---

## getBuilder

---

#### <span style={{color: '#008000'}}>getBuilder</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.Builder</span>
##### Return

( _org.netuno.tritao.db.Builder_ )


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

## getDefault

---

#### <span style={{color: '#008000'}}>getDefault</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

## getMaxLength

---

#### <span style={{color: '#008000'}}>getMaxLength</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Return

( _int_ )


---

## getName

---

#### <span style={{color: '#008000'}}>getName</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getProteu

---

#### <span style={{color: '#008000'}}>getProteu</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.proteu.Proteu</span>
##### Return

( _org.netuno.proteu.Proteu_ )


---

## getType

---

#### <span style={{color: '#008000'}}>getType</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.manager.Column$Type</span>
##### Return

( _org.netuno.tritao.db.manager.Column$Type_ )


---

## insertInto

---

#### <span style={{color: '#008000'}}>insertInto</span>(<span style={{color: '#FF8000'}}>tableName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ |   |
| **data** | _[Values](../objects/Values)_ |   |

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

## isNotNull

---

#### <span style={{color: '#008000'}}>isNotNull</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

## isPrimaryKey

---

#### <span style={{color: '#008000'}}>isPrimaryKey</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## rename

---

#### <span style={{color: '#008000'}}>rename</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>oldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>newName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Column](../objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ |   |
| **oldName** | _string_ |   |
| **newName** | _string_ |   |

##### Return

( _[Column](../objects/Column)_ )


---

## renameIfExists

---

#### <span style={{color: '#008000'}}>renameIfExists</span>(<span style={{color: '#FF8000'}}>table</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>oldName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>newName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Column](../objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ |   |
| **oldName** | _string_ |   |
| **newName** | _string_ |   |

##### Return

( _[Column](../objects/Column)_ )


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

## setDefault

---

#### <span style={{color: '#008000'}}>setDefault</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Column](../objects/Column)</span>
##### Return

( _[Column](../objects/Column)_ )


---

#### <span style={{color: '#008000'}}>setDefault</span>(<span style={{color: '#FF8000'}}>_default</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Column](../objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **_default** | _boolean_ |   |

##### Return

( _[Column](../objects/Column)_ )


---

#### <span style={{color: '#008000'}}>setDefault</span>(<span style={{color: '#FF8000'}}>_default</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Column](../objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **_default** | _float_ |   |

##### Return

( _[Column](../objects/Column)_ )


---

#### <span style={{color: '#008000'}}>setDefault</span>(<span style={{color: '#FF8000'}}>_default</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Column](../objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **_default** | _int_ |   |

##### Return

( _[Column](../objects/Column)_ )


---

#### <span style={{color: '#008000'}}>setDefault</span>(<span style={{color: '#FF8000'}}>_default</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Column](../objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **_default** | _string_ |   |

##### Return

( _[Column](../objects/Column)_ )


---

## setDefaultAsCurrentDate

---

#### <span style={{color: '#008000'}}>setDefaultAsCurrentDate</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Column](../objects/Column)</span>
##### Return

( _[Column](../objects/Column)_ )


---

## setDefaultAsCurrentTime

---

#### <span style={{color: '#008000'}}>setDefaultAsCurrentTime</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Column](../objects/Column)</span>
##### Return

( _[Column](../objects/Column)_ )


---

## setDefaultAsCurrentTimeStamp

---

#### <span style={{color: '#008000'}}>setDefaultAsCurrentTimeStamp</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Column](../objects/Column)</span>
##### Return

( _[Column](../objects/Column)_ )


---

## setDefaultAsNewUUID

---

#### <span style={{color: '#008000'}}>setDefaultAsNewUUID</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Column](../objects/Column)</span>
##### Return

( _[Column](../objects/Column)_ )


---

## setMaxLength

---

#### <span style={{color: '#008000'}}>setMaxLength</span>(<span style={{color: '#FF8000'}}>maxLength</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Column](../objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **maxLength** | _int_ |   |

##### Return

( _[Column](../objects/Column)_ )


---

## setName

---

#### <span style={{color: '#008000'}}>setName</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Column](../objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |

##### Return

( _[Column](../objects/Column)_ )


---

## setNotNull

---

#### <span style={{color: '#008000'}}>setNotNull</span>(<span style={{color: '#FF8000'}}>notNull</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Column](../objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **notNull** | _boolean_ |   |

##### Return

( _[Column](../objects/Column)_ )


---

## setPrimaryKey

---

#### <span style={{color: '#008000'}}>setPrimaryKey</span>(<span style={{color: '#FF8000'}}>primaryKey</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Column](../objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **primaryKey** | _boolean_ |   |

##### Return

( _[Column](../objects/Column)_ )


---

## setType

---

#### <span style={{color: '#008000'}}>setType</span>(<span style={{color: '#FF8000'}}>typeName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Column](../objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **typeName** | _string_ |   |

##### Return

( _[Column](../objects/Column)_ )


---

#### <span style={{color: '#008000'}}>setType</span>(<span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.db.manager.Column$Type</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Column](../objects/Column)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _org.netuno.tritao.db.manager.Column$Type_ |   |

##### Return

( _[Column](../objects/Column)_ )


---

## toDefaultDefinition

---

#### <span style={{color: '#008000'}}>toDefaultDefinition</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## toTypeDefinition

---

#### <span style={{color: '#008000'}}>toTypeDefinition</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


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

