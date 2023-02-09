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

#### changeType(arg0: string) : _Column_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Column_ )


---

## drop

---

#### drop(arg0: string, arg1: string) : _Column_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _Column_ )


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

#### getType() : _Type_
##### Return

( _Type_ )


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

#### isPostgreSQL(arg0: _Builder_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Builder_ |   |

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

#### rename(arg0: string, arg1: string, arg2: string) : _Column_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | string |   |

##### Return

( _Column_ )


---

## renameIfExists

---

#### renameIfExists(arg0: string, arg1: string, arg2: string) : _Column_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | string |   |

##### Return

( _Column_ )


---

## sequence

---

#### sequence() : _boolean_
##### Return

( _boolean_ )


---

## setDefault

---

#### setDefault() : _Column_
##### Return

( _Column_ )


---

#### setDefault(arg0: _boolean_) : _Column_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _Column_ )


---

#### setDefault(arg0: _float_) : _Column_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _float_ |   |

##### Return

( _Column_ )


---

#### setDefault(arg0: _int_) : _Column_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _Column_ )


---

#### setDefault(arg0: string) : _Column_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Column_ )


---

## setDefaultAsCurrentDate

---

#### setDefaultAsCurrentDate() : _Column_
##### Return

( _Column_ )


---

## setDefaultAsCurrentTime

---

#### setDefaultAsCurrentTime() : _Column_
##### Return

( _Column_ )


---

## setDefaultAsCurrentTimeStamp

---

#### setDefaultAsCurrentTimeStamp() : _Column_
##### Return

( _Column_ )


---

## setDefaultAsNewUUID

---

#### setDefaultAsNewUUID() : _Column_
##### Return

( _Column_ )


---

## setMaxLength

---

#### setMaxLength(arg0: _int_) : _Column_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _Column_ )


---

## setName

---

#### setName(arg0: string) : _Column_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Column_ )


---

## setNotNull

---

#### setNotNull(arg0: _boolean_) : _Column_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _Column_ )


---

## setPrimaryKey

---

#### setPrimaryKey(arg0: _boolean_) : _Column_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _boolean_ |   |

##### Return

( _Column_ )


---

## setType

---

#### setType(arg0: string) : _Column_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Column_ )


---

#### setType(arg0: _Type_) : _Column_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Type_ |   |

##### Return

( _Column_ )


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

