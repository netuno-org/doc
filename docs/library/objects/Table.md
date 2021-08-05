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

#### create(arg0: string, arg1: _Column[]_) : _Table_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _Column[]_ |   |

##### Return

( _Table_ )


---

## drop

---

#### drop(arg0: string) : _Table_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Table_ )


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

## newColumn

---

#### newColumn() : _Column_
##### Return

( _Column_ )


---

## rename

---

#### rename(arg0: string, arg1: string) : _Table_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _Table_ )


---

## renameIfExists

---

#### renameIfExists(arg0: string, arg1: string) : _Table_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _Table_ )


---

## sequence

---

#### sequence() : _boolean_
##### Return

( _boolean_ )


---

