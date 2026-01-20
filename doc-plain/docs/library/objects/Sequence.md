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

## commandNextValue

---

#### commandNextValue(sequenceName: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sequenceName** | _string_ |   |

##### Return

( _string_ )


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

## create

---

#### create(name: string) : [Sequence](/docs/library/objects/Sequence)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |

##### Return

( _[Sequence](/docs/library/objects/Sequence)_ )


---

#### create(name: string, startWith: int) : [Sequence](/docs/library/objects/Sequence)
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

#### drop(name: string) : [Sequence](/docs/library/objects/Sequence)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ |   |

##### Return

( _[Sequence](/docs/library/objects/Sequence)_ )


---

## getBuilder

---

#### getBuilder() : org.netuno.tritao.db.Builder
##### Return

( _org.netuno.tritao.db.Builder_ )


---

## getCurrentValue

---

#### getCurrentValue(sequenceName: string) : int
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sequenceName** | _string_ |   |

##### Return

( _int_ )


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

## rename

---

#### rename(oldName: string, newName: string) : [Sequence](/docs/library/objects/Sequence)
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

#### renameIfExists(oldName: string, newName: string) : [Sequence](/docs/library/objects/Sequence)
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

#### restart(sequenceName: string, nextValue: int) : [Sequence](/docs/library/objects/Sequence)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **sequenceName** | _string_ |   |
| **nextValue** | _int_ |   |

##### Return

( _[Sequence](/docs/library/objects/Sequence)_ )


---

#### restart(sequenceName: string, tableName: string, column: string) : [Sequence](/docs/library/objects/Sequence)
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

## supported

---

#### supported() : boolean
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

