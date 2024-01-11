---
id: Index
title: Index
sidebar_label: Index
---

Realiza a manipulação de indexes em base de dados.

```javascript
if (!_db.checkExists().index("client", "name")) {
    _db.index().create(
        "client", // Nome da Tabela
        "name" // Nome da Coluna
    ); // O index client_name_idx será criado criado.
}
```

---

## create

---

#### create(table: string, column: string) : _[Index](../../objects/Index)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| table | string |   |
| column | string |   |

##### Retorno

( _[Index](../../objects/Index)_ )


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

## sequence

---

#### sequence() : _boolean_
##### Retorno

( _boolean_ )


---

