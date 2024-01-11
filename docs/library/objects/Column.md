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

#### changeType(table: string) : _[Column](../../objects/Column)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| table | string |   |

##### Return

( _[Column](../../objects/Column)_ )


---

## drop

---

#### drop(table: string, column: string) : _[Column](../../objects/Column)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| table | string |   |
| column | string |   |

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

#### isPostgreSQL(builder: _org.netuno.tritao.db.Builder_) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| builder | _org.netuno.tritao.db.Builder_ |   |

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

#### rename(table: string, oldName: string, newName: string) : _[Column](../../objects/Column)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| table | string |   |
| oldName | string |   |
| newName | string |   |

##### Return

( _[Column](../../objects/Column)_ )


---

## renameIfExists

---

#### renameIfExists(table: string, oldName: string, newName: string) : _[Column](../../objects/Column)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| table | string |   |
| oldName | string |   |
| newName | string |   |

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

#### setDefault(_default: _boolean_) : _[Column](../../objects/Column)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| _default | _boolean_ |   |

##### Return

( _[Column](../../objects/Column)_ )


---

#### setDefault(_default: _float_) : _[Column](../../objects/Column)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| _default | _float_ |   |

##### Return

( _[Column](../../objects/Column)_ )


---

#### setDefault(_default: _int_) : _[Column](../../objects/Column)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| _default | _int_ |   |

##### Return

( _[Column](../../objects/Column)_ )


---

#### setDefault(_default: string) : _[Column](../../objects/Column)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| _default | string |   |

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

#### setMaxLength(maxLength: _int_) : _[Column](../../objects/Column)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| maxLength | _int_ |   |

##### Return

( _[Column](../../objects/Column)_ )


---

## setName

---

#### setName(name: string) : _[Column](../../objects/Column)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| name | string |   |

##### Return

( _[Column](../../objects/Column)_ )


---

## setNotNull

---

#### setNotNull(notNull: _boolean_) : _[Column](../../objects/Column)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| notNull | _boolean_ |   |

##### Return

( _[Column](../../objects/Column)_ )


---

## setPrimaryKey

---

#### setPrimaryKey(primaryKey: _boolean_) : _[Column](../../objects/Column)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| primaryKey | _boolean_ |   |

##### Return

( _[Column](../../objects/Column)_ )


---

## setType

---

#### setType(typeName: string) : _[Column](../../objects/Column)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| typeName | string |   |

##### Return

( _[Column](../../objects/Column)_ )


---

#### setType(type: _org.netuno.tritao.db.manager.Column$Type_) : _[Column](../../objects/Column)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| type | _org.netuno.tritao.db.manager.Column$Type_ |   |

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

