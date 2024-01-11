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
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| sequenceName | string |   |

##### Retorno

( string )


---

## create

---

#### create(name: string) : _[Sequence](../../objects/Sequence)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| name | string |   |

##### Retorno

( _[Sequence](../../objects/Sequence)_ )


---

#### create(name: string, startWith: _int_) : _[Sequence](../../objects/Sequence)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| name | string |   |
| startWith | _int_ |   |

##### Retorno

( _[Sequence](../../objects/Sequence)_ )


---

## drop

---

#### drop(name: string) : _[Sequence](../../objects/Sequence)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| name | string |   |

##### Retorno

( _[Sequence](../../objects/Sequence)_ )


---

## getCurrentValue

---

#### getCurrentValue(sequenceName: string) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| sequenceName | string |   |

##### Retorno

( _int_ )


---

## getKey

---

#### getKey() : string
##### Retorno

( string )


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

## rename

---

#### rename(oldName: string, newName: string) : _[Sequence](../../objects/Sequence)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| oldName | string |   |
| newName | string |   |

##### Retorno

( _[Sequence](../../objects/Sequence)_ )


---

## renameIfExists

---

#### renameIfExists(oldName: string, newName: string) : _[Sequence](../../objects/Sequence)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| oldName | string |   |
| newName | string |   |

##### Retorno

( _[Sequence](../../objects/Sequence)_ )


---

## restart

---

#### restart(sequenceName: string, nextValue: _int_) : _[Sequence](../../objects/Sequence)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| sequenceName | string |   |
| nextValue | _int_ |   |

##### Retorno

( _[Sequence](../../objects/Sequence)_ )


---

#### restart(sequenceName: string, tableName: string, column: string) : _[Sequence](../../objects/Sequence)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| sequenceName | string |   |
| tableName | string |   |
| column | string |   |

##### Retorno

( _[Sequence](../../objects/Sequence)_ )


---

## sequence

---

#### sequence() : _boolean_
##### Retorno

( _boolean_ )


---

## supported

---

#### supported() : _boolean_
##### Retorno

( _boolean_ )


---

