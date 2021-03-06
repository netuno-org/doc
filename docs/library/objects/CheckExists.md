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

#### column(arg0: string, arg1: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

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

#### index(arg0: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _boolean_ )


---

#### index(arg0: string, arg1: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _boolean_ )


---

## isH2

---

#### isH2() : _boolean_
##### Return

( _boolean_ )


---

#### isH2(arg0: _Builder_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Builder_ |   |

##### Return

( _boolean_ )


---

## isMSSQL

---

#### isMSSQL() : _boolean_
##### Return

( _boolean_ )


---

#### isMSSQL(arg0: _Builder_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Builder_ |   |

##### Return

( _boolean_ )


---

## isMariaDB

---

#### isMariaDB() : _boolean_
##### Return

( _boolean_ )


---

#### isMariaDB(arg0: _Builder_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Builder_ |   |

##### Return

( _boolean_ )


---

## isPostgreSQL

---

#### isPostgreSQL() : _boolean_
##### Return

( _boolean_ )


---

#### isPostgreSQL(arg0: _Builder_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Builder_ |   |

##### Return

( _boolean_ )


---

## sequence

---

#### sequence() : _boolean_
##### Return

( _boolean_ )


---

#### sequence(arg0: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _boolean_ )


---

#### sequence(arg0: string, arg1: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _boolean_ )


---

## table

---

#### table(arg0: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _boolean_ )


---

