---
id: Table
title: Table
sidebar_label: Table
---

Realiza a manipulação de tabelas em base de dados.

```javascript
if (_db.checkExists().table("clients")) {
    _db.table().rename(
        "clients", // Nome Antigo
        "client" // Novo Nome
    );
}
```

---

## create

---

#### create(name: string, columns: _[Lorg.netuno.tritao.db.manager.Column;[]_) : _[Table](../../objects/Table)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| name | string |   |
| columns | _[Lorg.netuno.tritao.db.manager.Column;[]_ |   |

##### Return

( _[Table](../../objects/Table)_ )


---

## drop

---

#### drop(name: string) : _[Table](../../objects/Table)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| name | string |   |

##### Return

( _[Table](../../objects/Table)_ )


---

## getKey

---

#### getKey() : string
##### Return

( string )


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

## newColumn

---

#### newColumn() : _[Column](../../objects/Column)_
##### Return

( _[Column](../../objects/Column)_ )


---

## rename

---

#### rename(oldName: string, newName: string) : _[Table](../../objects/Table)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| oldName | string |   |
| newName | string |   |

##### Return

( _[Table](../../objects/Table)_ )


---

## renameIfExists

---

#### renameIfExists(oldName: string, newName: string) : _[Table](../../objects/Table)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| oldName | string |   |
| newName | string |   |

##### Return

( _[Table](../../objects/Table)_ )


---

## sequence

---

#### sequence() : _boolean_
##### Return

( _boolean_ )


---

