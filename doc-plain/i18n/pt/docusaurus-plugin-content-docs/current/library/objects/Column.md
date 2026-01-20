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
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **table** | _string_ |   |

##### Retorno

( _[Column](/docs/library/objects/Column)_ )


---

## coalesce

---

#### coalesce(params: java.lang.String[]) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **params** | _java.lang.String[]_ |   |

##### Retorno

( _string_ )


---

## columnDataType

---

#### columnDataType(data: org.netuno.tritao.com.ComponentData) : [Column](/docs/library/objects/Column)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _org.netuno.tritao.com.ComponentData_ |   |

##### Retorno

( _[Column](/docs/library/objects/Column)_ )


---

## concatenation

---

#### concatenation(param1: string, param2: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **param1** | _string_ |   |
| **param2** | _string_ |   |

##### Retorno

( _string_ )


---

## drop

---

#### drop(table: string, column: string) : [Column](/docs/library/objects/Column)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **table** | _string_ |   |
| **column** | _string_ |   |

##### Retorno

( _[Column](/docs/library/objects/Column)_ )


---

## getBuilder

---

#### getBuilder() : org.netuno.tritao.db.Builder
##### Retorno

( _org.netuno.tritao.db.Builder_ )


---

## getDataValue

---

#### getDataValue(data: org.netuno.tritao.com.ComponentData) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _org.netuno.tritao.com.ComponentData_ |   |

##### Retorno

( _string_ )


---

#### getDataValue(data: org.netuno.tritao.com.ComponentData, value: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _org.netuno.tritao.com.ComponentData_ |   |
| **value** | _string_ |   |

##### Retorno

( _string_ )


---

## getDefault

---

#### getDefault() : string
##### Retorno

( _string_ )


---

## getExecutor

---

#### getExecutor() : org.netuno.tritao.db.DBExecutor
##### Retorno

( _org.netuno.tritao.db.DBExecutor_ )


---

## getHili

---

#### getHili() : org.netuno.tritao.hili.Hili
##### Retorno

( _org.netuno.tritao.hili.Hili_ )


---

## getKey

---

#### getKey() : string
##### Retorno

( _string_ )


---

## getManager

---

#### getManager() : org.netuno.tritao.db.manager.ManagerBase
##### Retorno

( _org.netuno.tritao.db.manager.ManagerBase_ )


---

## getMaxLength

---

#### getMaxLength() : int
##### Retorno

( _int_ )


---

## getName

---

#### getName() : string
##### Retorno

( _string_ )


---

## getPrecision

---

#### getPrecision() : int
##### Retorno

( _int_ )


---

## getProteu

---

#### getProteu() : org.netuno.proteu.Proteu
##### Retorno

( _org.netuno.proteu.Proteu_ )


---

## getScale

---

#### getScale() : int
##### Retorno

( _int_ )


---

## getType

---

#### getType() : org.netuno.tritao.db.manager.Column$Type
##### Retorno

( _org.netuno.tritao.db.manager.Column$Type_ )


---

## insertInto

---

#### insertInto(tableName: string, data: [Values](/docs/library/objects/Values)) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tableName** | _string_ |   |
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _int_ )


---

## isH2

---

#### isH2() : boolean
##### Retorno

( _boolean_ )


---

#### isH2(builder: org.netuno.tritao.db.Builder) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **builder** | _org.netuno.tritao.db.Builder_ |   |

##### Retorno

( _boolean_ )


---

## isId

---

#### isId(id: string) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **id** | _string_ |   |

##### Retorno

( _boolean_ )


---

## isMSSQL

---

#### isMSSQL() : boolean
##### Retorno

( _boolean_ )


---

#### isMSSQL(builder: org.netuno.tritao.db.Builder) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **builder** | _org.netuno.tritao.db.Builder_ |   |

##### Retorno

( _boolean_ )


---

## isMariaDB

---

#### isMariaDB() : boolean
##### Retorno

( _boolean_ )


---

#### isMariaDB(builder: org.netuno.tritao.db.Builder) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **builder** | _org.netuno.tritao.db.Builder_ |   |

##### Retorno

( _boolean_ )


---

## isNotNull

---

#### isNotNull() : boolean
##### Retorno

( _boolean_ )


---

## isPostgreSQL

---

#### isPostgreSQL() : boolean
##### Retorno

( _boolean_ )


---

#### isPostgreSQL(builder: org.netuno.tritao.db.Builder) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **builder** | _org.netuno.tritao.db.Builder_ |   |

##### Retorno

( _boolean_ )


---

## isPrimaryKey

---

#### isPrimaryKey() : boolean
##### Retorno

( _boolean_ )


---

## rename

---

#### rename(table: string, oldName: string, newName: string) : [Column](/docs/library/objects/Column)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **table** | _string_ |   |
| **oldName** | _string_ |   |
| **newName** | _string_ |   |

##### Retorno

( _[Column](/docs/library/objects/Column)_ )


---

## renameIfExists

---

#### renameIfExists(table: string, oldName: string, newName: string) : [Column](/docs/library/objects/Column)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **table** | _string_ |   |
| **oldName** | _string_ |   |
| **newName** | _string_ |   |

##### Retorno

( _[Column](/docs/library/objects/Column)_ )


---

## searchComparison

---

#### searchComparison(param: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **param** | _string_ |   |

##### Retorno

( _string_ )


---

## sequence

---

#### sequence() : boolean
##### Retorno

( _boolean_ )


---

## setDefault

---

#### setDefault() : [Column](/docs/library/objects/Column)
##### Retorno

( _[Column](/docs/library/objects/Column)_ )


---

#### setDefault(_default: boolean) : [Column](/docs/library/objects/Column)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **_default** | _boolean_ |   |

##### Retorno

( _[Column](/docs/library/objects/Column)_ )


---

#### setDefault(_default: double) : [Column](/docs/library/objects/Column)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **_default** | _double_ |   |

##### Retorno

( _[Column](/docs/library/objects/Column)_ )


---

#### setDefault(_default: float) : [Column](/docs/library/objects/Column)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **_default** | _float_ |   |

##### Retorno

( _[Column](/docs/library/objects/Column)_ )


---

#### setDefault(_default: int) : [Column](/docs/library/objects/Column)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **_default** | _int_ |   |

##### Retorno

( _[Column](/docs/library/objects/Column)_ )


---

#### setDefault(_default: string) : [Column](/docs/library/objects/Column)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **_default** | _string_ |   |

##### Retorno

( _[Column](/docs/library/objects/Column)_ )


---

#### setDefault(_default: long) : [Column](/docs/library/objects/Column)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **_default** | _long_ |   |

##### Retorno

( _[Column](/docs/library/objects/Column)_ )


---

## setDefaultAsCurrentDate

---

#### setDefaultAsCurrentDate() : [Column](/docs/library/objects/Column)
##### Retorno

( _[Column](/docs/library/objects/Column)_ )


---

## setDefaultAsCurrentTime

---

#### setDefaultAsCurrentTime() : [Column](/docs/library/objects/Column)
##### Retorno

( _[Column](/docs/library/objects/Column)_ )


---

## setDefaultAsCurrentTimeStamp

---

#### setDefaultAsCurrentTimeStamp() : [Column](/docs/library/objects/Column)
##### Retorno

( _[Column](/docs/library/objects/Column)_ )


---

## setDefaultAsNewUUID

---

#### setDefaultAsNewUUID() : [Column](/docs/library/objects/Column)
##### Retorno

( _[Column](/docs/library/objects/Column)_ )


---

## setMaxLength

---

#### setMaxLength(maxLength: int) : [Column](/docs/library/objects/Column)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **maxLength** | _int_ |   |

##### Retorno

( _[Column](/docs/library/objects/Column)_ )


---

## setName

---

#### setName(name: string) : [Column](/docs/library/objects/Column)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **name** | _string_ |   |

##### Retorno

( _[Column](/docs/library/objects/Column)_ )


---

## setNotNull

---

#### setNotNull(notNull: boolean) : [Column](/docs/library/objects/Column)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **notNull** | _boolean_ |   |

##### Retorno

( _[Column](/docs/library/objects/Column)_ )


---

## setPrecision

---

#### setPrecision(precision: int) : [Column](/docs/library/objects/Column)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **precision** | _int_ |   |

##### Retorno

( _[Column](/docs/library/objects/Column)_ )


---

## setPrimaryKey

---

#### setPrimaryKey(primaryKey: boolean) : [Column](/docs/library/objects/Column)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **primaryKey** | _boolean_ |   |

##### Retorno

( _[Column](/docs/library/objects/Column)_ )


---

## setScale

---

#### setScale(scale: int) : [Column](/docs/library/objects/Column)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **scale** | _int_ |   |

##### Retorno

( _[Column](/docs/library/objects/Column)_ )


---

## setType

---

#### setType(typeName: string) : [Column](/docs/library/objects/Column)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **typeName** | _string_ |   |

##### Retorno

( _[Column](/docs/library/objects/Column)_ )


---

#### setType(type: org.netuno.tritao.db.manager.Column$Type) : [Column](/docs/library/objects/Column)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **type** | _org.netuno.tritao.db.manager.Column$Type_ |   |

##### Retorno

( _[Column](/docs/library/objects/Column)_ )


---

## toDefaultDefinition

---

#### toDefaultDefinition() : string
##### Retorno

( _string_ )


---

## toPrimaryKeyDefinition

---

#### toPrimaryKeyDefinition() : string
##### Retorno

( _string_ )


---

## toTypeDefinition

---

#### toTypeDefinition() : string
##### Retorno

( _string_ )


---

## unaccent

---

#### unaccent(input: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **input** | _string_ |   |

##### Retorno

( _string_ )


---

