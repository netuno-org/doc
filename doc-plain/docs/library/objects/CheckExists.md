---
id: CheckExists
title: CheckExists
sidebar_label: CheckExists
---

Verifica se sequências, tabelas, colunas e indexes existem na base de dados.

```javascript
if (!_db.checkExists().table("client")) {
    _db.table().create(
        "client",
        _db.column().setName("id").setType("int").setPrimaryKey(true),
        _db.column().setName("name").setType("varchar").setNotNull(true).setDefault()
    );
}
```

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

## column

---

#### column(table: string, column: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ |   |
| **column** | _string_ |   |

##### Return

( _boolean_ )


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

## getProteu

---

#### getProteu() : org.netuno.proteu.Proteu
##### Return

( _org.netuno.proteu.Proteu_ )


---

## index

---

#### index(index: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **index** | _string_ |   |

##### Return

( _boolean_ )


---

#### index(tableName: string, columnName: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ |   |
| **columnName** | _string_ |   |

##### Return

( _boolean_ )


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

#### sequence(name: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |

##### Return

( _boolean_ )


---

#### sequence(tableName: string, columnName: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **tableName** | _string_ |   |
| **columnName** | _string_ |   |

##### Return

( _boolean_ )


---

## table

---

#### table(table: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **table** | _string_ |   |

##### Return

( _boolean_ )


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

