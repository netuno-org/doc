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

#### commandNextValue(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## create

---

#### create(arg0: string) : _Sequence_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Sequence_ )


---

#### create(arg0: string, arg1: _int_) : _Sequence_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Return

( _Sequence_ )


---

## drop

---

#### drop(arg0: string) : _Sequence_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Sequence_ )


---

## getCurrentValue

---

#### getCurrentValue(arg0: string) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

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

## rename

---

#### rename(arg0: string, arg1: string) : _Sequence_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _Sequence_ )


---

## renameIfExists

---

#### renameIfExists(arg0: string, arg1: string) : _Sequence_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _Sequence_ )


---

## restart

---

#### restart(arg0: string, arg1: _int_) : _Sequence_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |

##### Return

( _Sequence_ )


---

#### restart(arg0: string, arg1: string, arg2: string) : _Sequence_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | string |   |

##### Return

( _Sequence_ )


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

