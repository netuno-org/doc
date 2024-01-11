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
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| table | string |   |
| column | string |   |

##### Return

( _boolean_ )


---

## getKey

---

#### getKey() : string
##### Return

( string )


---

## index

---

#### index(index: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | string |   |

##### Return

( _boolean_ )


---

#### index(tableName: string, columnName: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| tableName | string |   |
| columnName | string |   |

##### Return

( _boolean_ )


---

## isH2

---

#### isH2() : _boolean_
##### Return

( _boolean_ )


---

#### isH2(builder: _org.netuno.tritao.db.Builder_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| builder | _org.netuno.tritao.db.Builder_ |   |

##### Return

( _boolean_ )


---

## isMSSQL

---

#### isMSSQL() : _boolean_
##### Return

( _boolean_ )


---

#### isMSSQL(builder: _org.netuno.tritao.db.Builder_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| builder | _org.netuno.tritao.db.Builder_ |   |

##### Return

( _boolean_ )


---

## isMariaDB

---

#### isMariaDB() : _boolean_
##### Return

( _boolean_ )


---

#### isMariaDB(builder: _org.netuno.tritao.db.Builder_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| builder | _org.netuno.tritao.db.Builder_ |   |

##### Return

( _boolean_ )


---

## isPostgreSQL

---

#### isPostgreSQL() : _boolean_
##### Return

( _boolean_ )


---

#### isPostgreSQL(builder: _org.netuno.tritao.db.Builder_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| builder | _org.netuno.tritao.db.Builder_ |   |

##### Return

( _boolean_ )


---

## sequence

---

#### sequence() : _boolean_
##### Return

( _boolean_ )


---

#### sequence(name: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| name | string |   |

##### Return

( _boolean_ )


---

#### sequence(tableName: string, columnName: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| tableName | string |   |
| columnName | string |   |

##### Return

( _boolean_ )


---

## table

---

#### table(table: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| table | string |   |

##### Return

( _boolean_ )


---

