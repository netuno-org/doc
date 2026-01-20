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
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **params** | _java.lang.String[]_ |   |

##### Retorno

( _string_ )


---

## column

---

#### column(table: string, column: string) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **table** | _string_ |   |
| **column** | _string_ |   |

##### Retorno

( _boolean_ )


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

## getProteu

---

#### getProteu() : org.netuno.proteu.Proteu
##### Retorno

( _org.netuno.proteu.Proteu_ )


---

## index

---

#### index(index: string) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **index** | _string_ |   |

##### Retorno

( _boolean_ )


---

#### index(tableName: string, columnName: string) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tableName** | _string_ |   |
| **columnName** | _string_ |   |

##### Retorno

( _boolean_ )


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

#### sequence(name: string) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **name** | _string_ |   |

##### Retorno

( _boolean_ )


---

#### sequence(tableName: string, columnName: string) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tableName** | _string_ |   |
| **columnName** | _string_ |   |

##### Retorno

( _boolean_ )


---

## table

---

#### table(table: string) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **table** | _string_ |   |

##### Retorno

( _boolean_ )


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

