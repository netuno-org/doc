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
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[Column](../../objects/Column)_ )


---

## drop

---

#### drop(arg0: string, arg1: string) : _[Column](../../objects/Column)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

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

#### isH2(arg0: _org.netuno.tritao.db.Builder_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _org.netuno.tritao.db.Builder_ |   |

##### Retorno

( _boolean_ )


---

## isMSSQL

---

#### isMSSQL() : _boolean_
##### Retorno

( _boolean_ )


---

#### isMSSQL(arg0: _org.netuno.tritao.db.Builder_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _org.netuno.tritao.db.Builder_ |   |

##### Retorno

( _boolean_ )


---

## isMariaDB

---

#### isMariaDB() : _boolean_
##### Retorno

( _boolean_ )


---

#### isMariaDB(arg0: _org.netuno.tritao.db.Builder_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _org.netuno.tritao.db.Builder_ |   |

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

#### isPostgreSQL(arg0: _org.netuno.tritao.db.Builder_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _org.netuno.tritao.db.Builder_ |   |

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

#### rename(arg0: string, arg1: string, arg2: string) : _[Column](../../objects/Column)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | string |   |

##### Retorno

( _[Column](../../objects/Column)_ )


---

## renameIfExists

---

#### renameIfExists(arg0: string, arg1: string, arg2: string) : _[Column](../../objects/Column)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | string |   |

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

#### setDefault(arg0: _boolean_) : _[Column](../../objects/Column)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _[Column](../../objects/Column)_ )


---

#### setDefault(arg0: _float_) : _[Column](../../objects/Column)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _float_ |   |

##### Retorno

( _[Column](../../objects/Column)_ )


---

#### setDefault(arg0: _int_) : _[Column](../../objects/Column)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _[Column](../../objects/Column)_ )


---

#### setDefault(arg0: string) : _[Column](../../objects/Column)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

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

#### setMaxLength(arg0: _int_) : _[Column](../../objects/Column)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _[Column](../../objects/Column)_ )


---

## setName

---

#### setName(arg0: string) : _[Column](../../objects/Column)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[Column](../../objects/Column)_ )


---

## setNotNull

---

#### setNotNull(arg0: _boolean_) : _[Column](../../objects/Column)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _[Column](../../objects/Column)_ )


---

## setPrimaryKey

---

#### setPrimaryKey(arg0: _boolean_) : _[Column](../../objects/Column)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _[Column](../../objects/Column)_ )


---

## setType

---

#### setType(arg0: string) : _[Column](../../objects/Column)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[Column](../../objects/Column)_ )


---

#### setType(arg0: _org.netuno.tritao.db.manager.Column$Type_) : _[Column](../../objects/Column)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _org.netuno.tritao.db.manager.Column$Type_ |   |

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

