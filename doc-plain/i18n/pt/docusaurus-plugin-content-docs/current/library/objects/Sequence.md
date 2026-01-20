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

## commandNextValue

---

#### commandNextValue(sequenceName: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **sequenceName** | _string_ |   |

##### Retorno

( _string_ )


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

## create

---

#### create(name: string) : [Sequence](/docs/library/objects/Sequence)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **name** | _string_ |   |

##### Retorno

( _[Sequence](/docs/library/objects/Sequence)_ )


---

#### create(name: string, startWith: int) : [Sequence](/docs/library/objects/Sequence)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **name** | _string_ |   |
| **startWith** | _int_ |   |

##### Retorno

( _[Sequence](/docs/library/objects/Sequence)_ )


---

## drop

---

#### drop(name: string) : [Sequence](/docs/library/objects/Sequence)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **name** | _string_ |   |

##### Retorno

( _[Sequence](/docs/library/objects/Sequence)_ )


---

## getBuilder

---

#### getBuilder() : org.netuno.tritao.db.Builder
##### Retorno

( _org.netuno.tritao.db.Builder_ )


---

## getCurrentValue

---

#### getCurrentValue(sequenceName: string) : int
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **sequenceName** | _string_ |   |

##### Retorno

( _int_ )


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

## rename

---

#### rename(oldName: string, newName: string) : [Sequence](/docs/library/objects/Sequence)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **oldName** | _string_ |   |
| **newName** | _string_ |   |

##### Retorno

( _[Sequence](/docs/library/objects/Sequence)_ )


---

## renameIfExists

---

#### renameIfExists(oldName: string, newName: string) : [Sequence](/docs/library/objects/Sequence)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **oldName** | _string_ |   |
| **newName** | _string_ |   |

##### Retorno

( _[Sequence](/docs/library/objects/Sequence)_ )


---

## restart

---

#### restart(sequenceName: string, nextValue: int) : [Sequence](/docs/library/objects/Sequence)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **sequenceName** | _string_ |   |
| **nextValue** | _int_ |   |

##### Retorno

( _[Sequence](/docs/library/objects/Sequence)_ )


---

#### restart(sequenceName: string, tableName: string, column: string) : [Sequence](/docs/library/objects/Sequence)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **sequenceName** | _string_ |   |
| **tableName** | _string_ |   |
| **column** | _string_ |   |

##### Retorno

( _[Sequence](/docs/library/objects/Sequence)_ )


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

## supported

---

#### supported() : boolean
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

