---
id: Column
title: Column
sidebar_label: Column
---

Realiza a manipulação de colunas em base de dados.

```javascript
if (!_db.checkExists().column("client", "description")) {
    _db.column().rename(
        "client", // Tabela
        "description", // Nome Antigo
        "name" // Novo Nome
    );
}
```

---

## changeType

---

#### changeType(arg0: string) : _[Column](../../objects/Column)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[Column](../../objects/Column)_ )


---

## drop

---

#### drop(arg0: string, arg1: string) : _[Column](../../objects/Column)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _[Column](../../objects/Column)_ )


---

## getDefault

---

#### getDefault() : string
##### Return

( string )


---

## getKey

---

#### getKey() : string
##### Return

( string )


---

## getMaxLength

---

#### getMaxLength() : _int_
##### Return

( _int_ )


---

## getName

---

#### getName() : string
##### Return

( string )


---

## getType

---

#### getType() : _org.netuno.tritao.db.manager.Column$Type_
##### Return

( _org.netuno.tritao.db.manager.Column$Type_ )


---

## isH2

---

#### isH2() : _boolean_
##### Return

( _boolean_ )


---

#### isH2(arg0: _org.netuno.tritao.db.Builder_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _org.netuno.tritao.db.Builder_ |   |

##### Return

( _boolean_ )


---

## isMSSQL

---

#### isMSSQL() : _boolean_
##### Return

( _boolean_ )


---

#### isMSSQL(arg0: _org.netuno.tritao.db.Builder_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _org.netuno.tritao.db.Builder_ |   |

##### Return

( _boolean_ )


---

## isMariaDB

---

#### isMariaDB() : _boolean_
##### Return

( _boolean_ )


---

#### isMariaDB(arg0: _org.netuno.tritao.db.Builder_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _org.netuno.tritao.db.Builder_ |   |

##### Return

( _boolean_ )


---

## isNotNull

---

#### isNotNull() : _boolean_
##### Return

( _boolean_ )


---

## isPostgreSQL

---

#### isPostgreSQL() : _boolean_
##### Return

( _boolean_ )


---

#### isPostgreSQL(arg0: _org.netuno.tritao.db.Builder_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _org.netuno.tritao.db.Builder_ |   |

##### Return

( _boolean_ )


---

## isPrimaryKey

---

#### isPrimaryKey() : _boolean_
##### Return

( _boolean_ )


---

## rename

---

#### rename(arg0: string, arg1: string, arg2: string) : _[Column](../../objects/Column)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | string |   |

##### Return

( _[Column](../../objects/Column)_ )


---

## renameIfExists

---

#### renameIfExists(arg0: string, arg1: string, arg2: string) : _[Column](../../objects/Column)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | string |   |

##### Return

( _[Column](../../objects/Column)_ )


---

## sequence

---

#### sequence() : _boolean_
##### Return

( _boolean_ )


---

## setDefault

---

#### setDefault() : _[Column](../../objects/Column)_
##### Return

( _[Column](../../objects/Column)_ )


---

#### setDefault(arg0: _boolean_) : _[Column](../../objects/Column)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _[Column](../../objects/Column)_ )


---

#### setDefault(arg0: _float_) : _[Column](../../objects/Column)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _float_ |   |

##### Return

( _[Column](../../objects/Column)_ )


---

#### setDefault(arg0: _int_) : _[Column](../../objects/Column)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _[Column](../../objects/Column)_ )


---

#### setDefault(arg0: string) : _[Column](../../objects/Column)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[Column](../../objects/Column)_ )


---

## setDefaultAsCurrentDate

---

#### setDefaultAsCurrentDate() : _[Column](../../objects/Column)_
##### Return

( _[Column](../../objects/Column)_ )


---

## setDefaultAsCurrentTime

---

#### setDefaultAsCurrentTime() : _[Column](../../objects/Column)_
##### Return

( _[Column](../../objects/Column)_ )


---

## setDefaultAsCurrentTimeStamp

---

#### setDefaultAsCurrentTimeStamp() : _[Column](../../objects/Column)_
##### Return

( _[Column](../../objects/Column)_ )


---

## setDefaultAsNewUUID

---

#### setDefaultAsNewUUID() : _[Column](../../objects/Column)_
##### Return

( _[Column](../../objects/Column)_ )


---

## setMaxLength

---

#### setMaxLength(arg0: _int_) : _[Column](../../objects/Column)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _[Column](../../objects/Column)_ )


---

## setName

---

#### setName(arg0: string) : _[Column](../../objects/Column)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[Column](../../objects/Column)_ )


---

## setNotNull

---

#### setNotNull(arg0: _boolean_) : _[Column](../../objects/Column)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _[Column](../../objects/Column)_ )


---

## setPrimaryKey

---

#### setPrimaryKey(arg0: _boolean_) : _[Column](../../objects/Column)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _[Column](../../objects/Column)_ )


---

## setType

---

#### setType(arg0: string) : _[Column](../../objects/Column)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[Column](../../objects/Column)_ )


---

#### setType(arg0: _org.netuno.tritao.db.manager.Column$Type_) : _[Column](../../objects/Column)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _org.netuno.tritao.db.manager.Column$Type_ |   |

##### Return

( _[Column](../../objects/Column)_ )


---

## toDefaultDefinition

---

#### toDefaultDefinition() : string
##### Return

( string )


---

## toTypeDefinition

---

#### toTypeDefinition() : string
##### Return

( string )


---

