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

#### changeType(table: string) : [Column](/docs/library/objects/Column)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ |   |

##### Return

( _[Column](/docs/library/objects/Column)_ )


---

## coalesce

---

#### coalesce(params: java.lang.String[]) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **params** | _java.lang.String[]_ |   |

##### Return

( _string_ )


---

## columnDataType

---

#### columnDataType(data: org.netuno.tritao.com.ComponentData) : [Column](/docs/library/objects/Column)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _org.netuno.tritao.com.ComponentData_ |   |

##### Return

( _[Column](/docs/library/objects/Column)_ )


---

## concatenation

---

#### concatenation(param1: string, param2: string) : string
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

#### drop(table: string, column: string) : [Column](/docs/library/objects/Column)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ |   |
| **column** | _string_ |   |

##### Return

( _[Column](/docs/library/objects/Column)_ )


---

## getBuilder

---

#### getBuilder() : org.netuno.tritao.db.Builder
##### Return

( _org.netuno.tritao.db.Builder_ )


---

## getDataValue

---

#### getDataValue(data: org.netuno.tritao.com.ComponentData) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _org.netuno.tritao.com.ComponentData_ |   |

##### Return

( _string_ )


---

#### getDataValue(data: org.netuno.tritao.com.ComponentData, value: string) : string
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

#### getDefault() : string
##### Return

( _string_ )


---

## getExecutor

---

#### getExecutor() : org.netuno.tritao.db.DBExecutor
##### Return

( _org.netuno.tritao.db.DBExecutor_ )


---

## getHili

---

#### getHili() : org.netuno.tritao.hili.Hili
##### Return

( _org.netuno.tritao.hili.Hili_ )


---

## getKey

---

#### getKey() : string
##### Return

( _string_ )


---

## getManager

---

#### getManager() : org.netuno.tritao.db.manager.ManagerBase
##### Return

( _org.netuno.tritao.db.manager.ManagerBase_ )


---

## getMaxLength

---

#### getMaxLength() : int
##### Return

( _int_ )


---

## getName

---

#### getName() : string
##### Return

( _string_ )


---

## getPrecision

---

#### getPrecision() : int
##### Return

( _int_ )


---

## getProteu

---

#### getProteu() : org.netuno.proteu.Proteu
##### Return

( _org.netuno.proteu.Proteu_ )


---

## getScale

---

#### getScale() : int
##### Return

( _int_ )


---

## getType

---

#### getType() : org.netuno.tritao.db.manager.Column$Type
##### Return

( _org.netuno.tritao.db.manager.Column$Type_ )


---

## insertInto

---

#### insertInto(tableName: string, data: [Values](/docs/library/objects/Values)) : int
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

#### isH2() : boolean
##### Return

( _boolean_ )


---

#### isH2(builder: org.netuno.tritao.db.Builder) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **builder** | _org.netuno.tritao.db.Builder_ |   |

##### Return

( _boolean_ )


---

## isId

---

#### isId(id: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _string_ |   |

##### Return

( _boolean_ )


---

## isMSSQL

---

#### isMSSQL() : boolean
##### Return

( _boolean_ )


---

#### isMSSQL(builder: org.netuno.tritao.db.Builder) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **builder** | _org.netuno.tritao.db.Builder_ |   |

##### Return

( _boolean_ )


---

## isMariaDB

---

#### isMariaDB() : boolean
##### Return

( _boolean_ )


---

#### isMariaDB(builder: org.netuno.tritao.db.Builder) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **builder** | _org.netuno.tritao.db.Builder_ |   |

##### Return

( _boolean_ )


---

## isNotNull

---

#### isNotNull() : boolean
##### Return

( _boolean_ )


---

## isPostgreSQL

---

#### isPostgreSQL() : boolean
##### Return

( _boolean_ )


---

#### isPostgreSQL(builder: org.netuno.tritao.db.Builder) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **builder** | _org.netuno.tritao.db.Builder_ |   |

##### Return

( _boolean_ )


---

## isPrimaryKey

---

#### isPrimaryKey() : boolean
##### Return

( _boolean_ )


---

## rename

---

#### rename(table: string, oldName: string, newName: string) : [Column](/docs/library/objects/Column)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ |   |
| **oldName** | _string_ |   |
| **newName** | _string_ |   |

##### Return

( _[Column](/docs/library/objects/Column)_ )


---

## renameIfExists

---

#### renameIfExists(table: string, oldName: string, newName: string) : [Column](/docs/library/objects/Column)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ |   |
| **oldName** | _string_ |   |
| **newName** | _string_ |   |

##### Return

( _[Column](/docs/library/objects/Column)_ )


---

## searchComparison

---

#### searchComparison(param: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **param** | _string_ |   |

##### Return

( _string_ )


---

## sequence

---

#### sequence() : boolean
##### Return

( _boolean_ )


---

## setDefault

---

#### setDefault() : [Column](/docs/library/objects/Column)
##### Return

( _[Column](/docs/library/objects/Column)_ )


---

#### setDefault(_default: boolean) : [Column](/docs/library/objects/Column)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **_default** | _boolean_ |   |

##### Return

( _[Column](/docs/library/objects/Column)_ )


---

#### setDefault(_default: double) : [Column](/docs/library/objects/Column)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **_default** | _double_ |   |

##### Return

( _[Column](/docs/library/objects/Column)_ )


---

#### setDefault(_default: float) : [Column](/docs/library/objects/Column)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **_default** | _float_ |   |

##### Return

( _[Column](/docs/library/objects/Column)_ )


---

#### setDefault(_default: int) : [Column](/docs/library/objects/Column)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **_default** | _int_ |   |

##### Return

( _[Column](/docs/library/objects/Column)_ )


---

#### setDefault(_default: string) : [Column](/docs/library/objects/Column)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **_default** | _string_ |   |

##### Return

( _[Column](/docs/library/objects/Column)_ )


---

#### setDefault(_default: long) : [Column](/docs/library/objects/Column)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **_default** | _long_ |   |

##### Return

( _[Column](/docs/library/objects/Column)_ )


---

## setDefaultAsCurrentDate

---

#### setDefaultAsCurrentDate() : [Column](/docs/library/objects/Column)
##### Return

( _[Column](/docs/library/objects/Column)_ )


---

## setDefaultAsCurrentTime

---

#### setDefaultAsCurrentTime() : [Column](/docs/library/objects/Column)
##### Return

( _[Column](/docs/library/objects/Column)_ )


---

## setDefaultAsCurrentTimeStamp

---

#### setDefaultAsCurrentTimeStamp() : [Column](/docs/library/objects/Column)
##### Return

( _[Column](/docs/library/objects/Column)_ )


---

## setDefaultAsNewUUID

---

#### setDefaultAsNewUUID() : [Column](/docs/library/objects/Column)
##### Return

( _[Column](/docs/library/objects/Column)_ )


---

## setMaxLength

---

#### setMaxLength(maxLength: int) : [Column](/docs/library/objects/Column)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **maxLength** | _int_ |   |

##### Return

( _[Column](/docs/library/objects/Column)_ )


---

## setName

---

#### setName(name: string) : [Column](/docs/library/objects/Column)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |

##### Return

( _[Column](/docs/library/objects/Column)_ )


---

## setNotNull

---

#### setNotNull(notNull: boolean) : [Column](/docs/library/objects/Column)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **notNull** | _boolean_ |   |

##### Return

( _[Column](/docs/library/objects/Column)_ )


---

## setPrecision

---

#### setPrecision(precision: int) : [Column](/docs/library/objects/Column)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **precision** | _int_ |   |

##### Return

( _[Column](/docs/library/objects/Column)_ )


---

## setPrimaryKey

---

#### setPrimaryKey(primaryKey: boolean) : [Column](/docs/library/objects/Column)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **primaryKey** | _boolean_ |   |

##### Return

( _[Column](/docs/library/objects/Column)_ )


---

## setScale

---

#### setScale(scale: int) : [Column](/docs/library/objects/Column)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **scale** | _int_ |   |

##### Return

( _[Column](/docs/library/objects/Column)_ )


---

## setType

---

#### setType(typeName: string) : [Column](/docs/library/objects/Column)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **typeName** | _string_ |   |

##### Return

( _[Column](/docs/library/objects/Column)_ )


---

#### setType(type: org.netuno.tritao.db.manager.Column$Type) : [Column](/docs/library/objects/Column)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _org.netuno.tritao.db.manager.Column$Type_ |   |

##### Return

( _[Column](/docs/library/objects/Column)_ )


---

## toDefaultDefinition

---

#### toDefaultDefinition() : string
##### Return

( _string_ )


---

## toPrimaryKeyDefinition

---

#### toPrimaryKeyDefinition() : string
##### Return

( _string_ )


---

## toTypeDefinition

---

#### toTypeDefinition() : string
##### Return

( _string_ )


---

## unaccent

---

#### unaccent(input: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **input** | _string_ |   |

##### Return

( _string_ )


---

