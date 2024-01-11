---
id: Table
title: Table
sidebar_label: Table
---

Realiza a manipulação de tabelas em base de dados.

```javascript
if (_db.checkExists().table("clients")) {
    _db.table().rename(
        "clients", // Nome Antigo
        "client" // Novo Nome
    );
}
```

---

## create

---

#### create(name: string, columns: _[Lorg.netuno.tritao.db.manager.Column;[]_) : _[Table](../../objects/Table)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| name | string |   |
| columns | _[Lorg.netuno.tritao.db.manager.Column;[]_ |   |

##### Retorno

( _[Table](../../objects/Table)_ )


---

## drop

---

#### drop(name: string) : _[Table](../../objects/Table)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| name | string |   |

##### Retorno

( _[Table](../../objects/Table)_ )


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

## newColumn

---

#### newColumn() : _[Column](../../objects/Column)_
##### Retorno

( _[Column](../../objects/Column)_ )


---

## rename

---

#### rename(oldName: string, newName: string) : _[Table](../../objects/Table)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| oldName | string |   |
| newName | string |   |

##### Retorno

( _[Table](../../objects/Table)_ )


---

## renameIfExists

---

#### renameIfExists(oldName: string, newName: string) : _[Table](../../objects/Table)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| oldName | string |   |
| newName | string |   |

##### Retorno

( _[Table](../../objects/Table)_ )


---

## sequence

---

#### sequence() : _boolean_
##### Retorno

( _boolean_ )


---

