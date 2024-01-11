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

## column

---

#### column(table: string, column: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| table | string |   |
| column | string |   |

##### Retorno

( _boolean_ )


---

## getKey

---

#### getKey() : string
##### Retorno

( string )


---

## index

---

#### index(index: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| index | string |   |

##### Retorno

( _boolean_ )


---

#### index(tableName: string, columnName: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tableName | string |   |
| columnName | string |   |

##### Retorno

( _boolean_ )


---

## isH2

---

#### isH2() : _boolean_
##### Retorno

( _boolean_ )


---

#### isH2(builder: _org.netuno.tritao.db.Builder_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| builder | _org.netuno.tritao.db.Builder_ |   |

##### Retorno

( _boolean_ )


---

## isMSSQL

---

#### isMSSQL() : _boolean_
##### Retorno

( _boolean_ )


---

#### isMSSQL(builder: _org.netuno.tritao.db.Builder_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| builder | _org.netuno.tritao.db.Builder_ |   |

##### Retorno

( _boolean_ )


---

## isMariaDB

---

#### isMariaDB() : _boolean_
##### Retorno

( _boolean_ )


---

#### isMariaDB(builder: _org.netuno.tritao.db.Builder_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| builder | _org.netuno.tritao.db.Builder_ |   |

##### Retorno

( _boolean_ )


---

## isPostgreSQL

---

#### isPostgreSQL() : _boolean_
##### Retorno

( _boolean_ )


---

#### isPostgreSQL(builder: _org.netuno.tritao.db.Builder_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| builder | _org.netuno.tritao.db.Builder_ |   |

##### Retorno

( _boolean_ )


---

## sequence

---

#### sequence() : _boolean_
##### Retorno

( _boolean_ )


---

#### sequence(name: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| name | string |   |

##### Retorno

( _boolean_ )


---

#### sequence(tableName: string, columnName: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tableName | string |   |
| columnName | string |   |

##### Retorno

( _boolean_ )


---

## table

---

#### table(table: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| table | string |   |

##### Retorno

( _boolean_ )


---

