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
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| table | string |   |

##### Retorno

( _[Column](../../objects/Column)_ )


---

## drop

---

#### drop(table: string, column: string) : _[Column](../../objects/Column)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| table | string |   |
| column | string |   |

##### Retorno

( _[Column](../../objects/Column)_ )


---

## getDefault

---

#### getDefault() : string
##### Retorno

( string )


---

## getKey

---

#### getKey() : string
##### Retorno

( string )


---

## getMaxLength

---

#### getMaxLength() : _int_
##### Retorno

( _int_ )


---

## getName

---

#### getName() : string
##### Retorno

( string )


---

## getType

---

#### getType() : _org.netuno.tritao.db.manager.Column$Type_
##### Retorno

( _org.netuno.tritao.db.manager.Column$Type_ )


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

## isNotNull

---

#### isNotNull() : _boolean_
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

## isPrimaryKey

---

#### isPrimaryKey() : _boolean_
##### Retorno

( _boolean_ )


---

## rename

---

#### rename(table: string, oldName: string, newName: string) : _[Column](../../objects/Column)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| table | string |   |
| oldName | string |   |
| newName | string |   |

##### Retorno

( _[Column](../../objects/Column)_ )


---

## renameIfExists

---

#### renameIfExists(table: string, oldName: string, newName: string) : _[Column](../../objects/Column)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| table | string |   |
| oldName | string |   |
| newName | string |   |

##### Retorno

( _[Column](../../objects/Column)_ )


---

## sequence

---

#### sequence() : _boolean_
##### Retorno

( _boolean_ )


---

## setDefault

---

#### setDefault() : _[Column](../../objects/Column)_
##### Retorno

( _[Column](../../objects/Column)_ )


---

#### setDefault(_default: _boolean_) : _[Column](../../objects/Column)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| _default | _boolean_ |   |

##### Retorno

( _[Column](../../objects/Column)_ )


---

#### setDefault(_default: _float_) : _[Column](../../objects/Column)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| _default | _float_ |   |

##### Retorno

( _[Column](../../objects/Column)_ )


---

#### setDefault(_default: _int_) : _[Column](../../objects/Column)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| _default | _int_ |   |

##### Retorno

( _[Column](../../objects/Column)_ )


---

#### setDefault(_default: string) : _[Column](../../objects/Column)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| _default | string |   |

##### Retorno

( _[Column](../../objects/Column)_ )


---

## setDefaultAsCurrentDate

---

#### setDefaultAsCurrentDate() : _[Column](../../objects/Column)_
##### Retorno

( _[Column](../../objects/Column)_ )


---

## setDefaultAsCurrentTime

---

#### setDefaultAsCurrentTime() : _[Column](../../objects/Column)_
##### Retorno

( _[Column](../../objects/Column)_ )


---

## setDefaultAsCurrentTimeStamp

---

#### setDefaultAsCurrentTimeStamp() : _[Column](../../objects/Column)_
##### Retorno

( _[Column](../../objects/Column)_ )


---

## setDefaultAsNewUUID

---

#### setDefaultAsNewUUID() : _[Column](../../objects/Column)_
##### Retorno

( _[Column](../../objects/Column)_ )


---

## setMaxLength

---

#### setMaxLength(maxLength: _int_) : _[Column](../../objects/Column)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| maxLength | _int_ |   |

##### Retorno

( _[Column](../../objects/Column)_ )


---

## setName

---

#### setName(name: string) : _[Column](../../objects/Column)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| name | string |   |

##### Retorno

( _[Column](../../objects/Column)_ )


---

## setNotNull

---

#### setNotNull(notNull: _boolean_) : _[Column](../../objects/Column)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| notNull | _boolean_ |   |

##### Retorno

( _[Column](../../objects/Column)_ )


---

## setPrimaryKey

---

#### setPrimaryKey(primaryKey: _boolean_) : _[Column](../../objects/Column)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| primaryKey | _boolean_ |   |

##### Retorno

( _[Column](../../objects/Column)_ )


---

## setType

---

#### setType(typeName: string) : _[Column](../../objects/Column)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| typeName | string |   |

##### Retorno

( _[Column](../../objects/Column)_ )


---

#### setType(type: _org.netuno.tritao.db.manager.Column$Type_) : _[Column](../../objects/Column)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| type | _org.netuno.tritao.db.manager.Column$Type_ |   |

##### Retorno

( _[Column](../../objects/Column)_ )


---

## toDefaultDefinition

---

#### toDefaultDefinition() : string
##### Retorno

( string )


---

## toTypeDefinition

---

#### toTypeDefinition() : string
##### Retorno

( string )


---

