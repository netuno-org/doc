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

## commandNextValue

---

#### commandNextValue(sequenceName: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| sequenceName | string |   |

##### Return

( string )


---

## create

---

#### create(name: string) : _[Sequence](../../objects/Sequence)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| name | string |   |

##### Return

( _[Sequence](../../objects/Sequence)_ )


---

#### create(name: string, startWith: _int_) : _[Sequence](../../objects/Sequence)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| name | string |   |
| startWith | _int_ |   |

##### Return

( _[Sequence](../../objects/Sequence)_ )


---

## drop

---

#### drop(name: string) : _[Sequence](../../objects/Sequence)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| name | string |   |

##### Return

( _[Sequence](../../objects/Sequence)_ )


---

## getCurrentValue

---

#### getCurrentValue(sequenceName: string) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| sequenceName | string |   |

##### Return

( _int_ )


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

## rename

---

#### rename(oldName: string, newName: string) : _[Sequence](../../objects/Sequence)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| oldName | string |   |
| newName | string |   |

##### Return

( _[Sequence](../../objects/Sequence)_ )


---

## renameIfExists

---

#### renameIfExists(oldName: string, newName: string) : _[Sequence](../../objects/Sequence)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| oldName | string |   |
| newName | string |   |

##### Return

( _[Sequence](../../objects/Sequence)_ )


---

## restart

---

#### restart(sequenceName: string, nextValue: _int_) : _[Sequence](../../objects/Sequence)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| sequenceName | string |   |
| nextValue | _int_ |   |

##### Return

( _[Sequence](../../objects/Sequence)_ )


---

#### restart(sequenceName: string, tableName: string, column: string) : _[Sequence](../../objects/Sequence)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| sequenceName | string |   |
| tableName | string |   |
| column | string |   |

##### Return

( _[Sequence](../../objects/Sequence)_ )


---

## sequence

---

#### sequence() : _boolean_
##### Return

( _boolean_ )


---

## supported

---

#### supported() : _boolean_
##### Return

( _boolean_ )


---

