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
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Column_ )


---

## drop

---

#### drop(arg0: string, arg1: string) : _Column_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( _Column_ )


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

#### getType() : _Type_
##### Retorno

( _Type_ )


---

## isH2

---

#### isH2() : _boolean_
##### Retorno

( _boolean_ )


---

#### isH2(arg0: _Builder_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Builder_ |   |

##### Retorno

( _boolean_ )


---

## isMSSQL

---

#### isMSSQL() : _boolean_
##### Retorno

( _boolean_ )


---

#### isMSSQL(arg0: _Builder_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Builder_ |   |

##### Retorno

( _boolean_ )


---

## isMariaDB

---

#### isMariaDB() : _boolean_
##### Retorno

( _boolean_ )


---

#### isMariaDB(arg0: _Builder_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Builder_ |   |

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

#### isPostgreSQL(arg0: _Builder_) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Builder_ |   |

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

#### rename(arg0: string, arg1: string, arg2: string) : _Column_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | string |   |

##### Retorno

( _Column_ )


---

## renameIfExists

---

#### renameIfExists(arg0: string, arg1: string, arg2: string) : _Column_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | string |   |

##### Retorno

( _Column_ )


---

## sequence

---

#### sequence() : _boolean_
##### Retorno

( _boolean_ )


---

## setDefault

---

#### setDefault() : _Column_
##### Retorno

( _Column_ )


---

#### setDefault(arg0: _boolean_) : _Column_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _Column_ )


---

#### setDefault(arg0: _float_) : _Column_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _float_ |   |

##### Retorno

( _Column_ )


---

#### setDefault(arg0: _int_) : _Column_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _Column_ )


---

#### setDefault(arg0: string) : _Column_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Column_ )


---

## setDefaultAsCurrentDate

---

#### setDefaultAsCurrentDate() : _Column_
##### Retorno

( _Column_ )


---

## setDefaultAsCurrentTime

---

#### setDefaultAsCurrentTime() : _Column_
##### Retorno

( _Column_ )


---

## setDefaultAsCurrentTimeStamp

---

#### setDefaultAsCurrentTimeStamp() : _Column_
##### Retorno

( _Column_ )


---

## setDefaultAsNewUUID

---

#### setDefaultAsNewUUID() : _Column_
##### Retorno

( _Column_ )


---

## setMaxLength

---

#### setMaxLength(arg0: _int_) : _Column_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _Column_ )


---

## setName

---

#### setName(arg0: string) : _Column_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Column_ )


---

## setNotNull

---

#### setNotNull(arg0: _boolean_) : _Column_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _Column_ )


---

## setPrimaryKey

---

#### setPrimaryKey(arg0: _boolean_) : _Column_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _boolean_ |   |

##### Retorno

( _Column_ )


---

## setType

---

#### setType(arg0: string) : _Column_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _Column_ )


---

#### setType(arg0: _Type_) : _Column_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Type_ |   |

##### Retorno

( _Column_ )


---

## toDefinitionString

---

#### toDefinitionString() : string
##### Retorno

( string )


---

