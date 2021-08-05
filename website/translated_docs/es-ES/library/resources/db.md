---
id: db
title: DB
sidebar_label: DB
---

Recurso de carregamento de datasources (fontes de dados).
Este recurso permite o carregamento de datasources com conexões com MariaDB, MSSQLServer, PostgreSQL, H2 ou Oracle

```javascript
// Atenção ao inserir parâmetros em consultas,
// não deve utilizar a concatenação de strings
// para garantir a segurança contra SQL Injection como é apresentado a seguir:

const NOK = _db.query(
  'select * from cliente where id = '+ _req.getString('id')
);

// ATENÇÃO: O exemplo acima é incorreto.
// Siga o padrão abaixo para garantir a segurança
// ao injetar parâmetros:

const OK = _db.query(
  'select * from cliente where id = ?', _val.init().add( _req.getString('id') )
);
```

---

## all

---

#### _db.all(arg0: _string_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _List_ )


---

## checkExists

---

#### _db.checkExists() : _CheckExists_
##### Retorno

( _CheckExists_ )


---

## column

---

#### _db.column() : _Column_
##### Retorno

( _Column_ )


---

## date

---

#### _db.date() : _Date_
##### Retorno

( _Date_ )


---

#### _db.date(arg0: _LocalDate_) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _LocalDate_ |   |

##### Retorno

( _Date_ )


---

#### _db.date(arg0: _string_) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Date_ )


---

#### _db.date(arg0: _Instant_) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Instant_ |   |

##### Retorno

( _Date_ )


---

## delete

---

#### _db.delete(tabela: _string_, dados: _Values_) : _int_
##### Descrição

Elimina registos na base de dados com base no ID ou UID passado no objeto de dados.

##### Como Usar

```javascript
// Executa a eliminação através do id ou uid nos dados

const result = _db.delete(
    "nome_da_tabela",
    _val.init().set("uid": "1d8722f4-fa28-4a08-8098-6dd5cab1b212")
);

_out.json(
    "result": result
);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | _string_ | Nome da tabela na base de dados. |
| dados | _Values_ | Estrutura de dados que deverá ser eliminada baseado no seu ID ou UID. |

##### Retorno

( _int_ )

Quantidade de registos afetados pela eliminação.

---

#### _db.delete(tabela: _string_, id: _int_) : _int_
##### Descrição

Elimina registos na base de dados com base no ID ou UID passado no objeto de dados.

##### Como Usar

```javascript
// Executa a eliminação através do id ou uid nos dados

const result = _db.delete(
    "nome_da_tabela",
    _val.init().set("uid": "1d8722f4-fa28-4a08-8098-6dd5cab1b212")
);

_out.json(
    "result": result
);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | _string_ | Nome da tabela na base de dados. |
| id | _int_ | ID do registo a eliminar. |

##### Retorno

( _int_ )

Quantidade de registos afetados pela eliminação.

---

#### _db.delete(tabela: _string_, dados: _Map_) : _int_
##### Descrição

Elimina registos na base de dados com base no ID ou UID passado no objeto de dados.

##### Como Usar

```javascript
// Executa a eliminação através do id ou uid nos dados

const result = _db.delete(
    "nome_da_tabela",
    _val.init().set("uid": "1d8722f4-fa28-4a08-8098-6dd5cab1b212")
);

_out.json(
    "result": result
);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | _string_ | Nome da tabela na base de dados. |
| dados | _Map_ | Estrutura de dados que deverá ser eliminada baseado no seu ID ou UID. |

##### Retorno

( _int_ )

Quantidade de registos afetados pela eliminação.

---

#### _db.delete(tabela: _string_, uid: _string_) : _int_
##### Descrição

Elimina registos na base de dados com base no ID ou UID passado no objeto de dados.

##### Como Usar

```javascript
// Executa a eliminação através do id ou uid nos dados

const result = _db.delete(
    "nome_da_tabela",
    _val.init().set("uid": "1d8722f4-fa28-4a08-8098-6dd5cab1b212")
);

_out.json(
    "result": result
);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | _string_ | Nome da tabela na base de dados. |
| uid | _string_ | UID do registo a eliminar. |

##### Retorno

( _int_ )

Quantidade de registos afetados pela eliminação.

---

## deleteMany

---

#### _db.deleteMany(arg0: _string_, arg1: _List_) : _int[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _List_ |   |

##### Retorno

( _int[]_ )


---

#### _db.deleteMany(arg0: _string_, arg1: _Object[]_) : _int[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Object[]_ |   |

##### Retorno

( _int[]_ )


---

#### _db.deleteMany(arg0: _string_, arg1: _Values_) : _int[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Values_ |   |

##### Retorno

( _int[]_ )


---

## escape

---

#### _db.escape(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

## escapeEnd

---

#### _db.escapeEnd() : _string_
##### Retorno

( _string_ )


---

## escapeStart

---

#### _db.escapeStart() : _string_
##### Retorno

( _string_ )


---

## execute

---

#### _db.execute(arg0: _string_, arg1: _Values_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Values_ |   |

##### Retorno

( _int_ )


---

#### _db.execute(arg0: _string_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _int_ )


---

#### _db.execute(arg0: _string_, arg1: _Object[]_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Object[]_ |   |

##### Retorno

( _int_ )


---

#### _db.execute(arg0: _string_, arg1: _List_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _List_ |   |

##### Retorno

( _int_ )


---

## get

---

#### _db.get(tabela: _string_, arg1: _int_) : _Values_
##### Descrição

Obtém os dados do registo na base de dados com base no nome da tabela e no ID.

##### Como Usar

```javascript
// Todos os dados do registo com id 100 da tabela status.

const dadosComID = _db.get(
    "tabela1",
    100
)

_out.json(dadosComID);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | _string_ | Nome da tabela na base de dados que deve receber os dados que serão inseridos. |
| arg1 | _int_ |   |

##### Retorno

( _Values_ )


---

#### _db.get(tabela: _string_, arg1: _string_) : _Values_
##### Descrição

Obtém os dados do registo na base de dados com base no nome da tabela e no ID.

##### Como Usar

```javascript
// Todos os dados do registo com id 100 da tabela status.

const dadosComID = _db.get(
    "tabela1",
    100
)

_out.json(dadosComID);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | _string_ | Nome da tabela na base de dados que deve receber os dados que serão inseridos. |
| arg1 | _string_ |   |

##### Retorno

( _Values_ )


---

## getKey

---

#### _db.getKey() : _string_
##### Retorno

( _string_ )


---

## index

---

#### _db.index() : _Index_
##### Retorno

( _Index_ )


---

## init

---

#### _db.init(arg0: _string_) : _DB_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _DB_ )


---

## insert

---

#### _db.insert(tabela: _string_, dados: _Values_) : _int_
##### Descrição

Insere novos dados na base de dados e retorna o ID dos mesmos.

##### Como Usar

```javascript
// Executa a inserção de novo registo e retorna o ID

const id = _db.insert(
    "nome_da_tabela",
    _val.init()
        .set("name", "nome"),
        .set("mail", "mail@netuno.org")
);

_out.json(
    _val.init().set("id", id)
);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | _string_ | Nome da tabela na base de dados que deve receber os dados que serão inseridos. |
| dados | _Values_ | Objeto com a estrutura de dados que será inserido. |

##### Retorno

( _int_ )

Id do registo criado.

---

#### _db.insert(tabela: _string_, dados: _Map_) : _int_
##### Descrição

Insere novos dados na base de dados e retorna o ID dos mesmos.

##### Como Usar

```javascript
// Executa a inserção de novo registo e retorna o ID

const id = _db.insert(
    "nome_da_tabela",
    _val.init()
        .set("name", "nome"),
        .set("mail", "mail@netuno.org")
);

_out.json(
    _val.init().set("id", id)
);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | _string_ | Nome da tabela na base de dados que deve receber os dados que serão inseridos. |
| dados | _Map_ | Objeto com a estrutura de dados que será inserido. |

##### Retorno

( _int_ )


---

## insertIfNotExists

---

#### _db.insertIfNotExists(arg0: _string_, arg1: _Values_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Values_ |   |

##### Retorno

( _int_ )


---

## insertMany

---

#### _db.insertMany(arg0: _string_, arg1: _Values_) : _int[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Values_ |   |

##### Retorno

( _int[]_ )


---

#### _db.insertMany(arg0: _string_, arg1: _List_) : _int[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _List_ |   |

##### Retorno

( _int[]_ )


---

#### _db.insertMany(arg0: _string_, arg1: _Object[]_) : _int[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Object[]_ |   |

##### Retorno

( _int[]_ )


---

## isH2

---

#### _db.isH2() : _boolean_
##### Retorno

( _boolean_ )


---

## isMariaDB

---

#### _db.isMariaDB() : _boolean_
##### Retorno

( _boolean_ )


---

## isPostgreSQL

---

#### _db.isPostgreSQL() : _boolean_
##### Retorno

( _boolean_ )


---

## query

---

#### _db.query(arg0: _string_, arg1: _Object[]_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Object[]_ |   |

##### Retorno

( _List_ )


---

#### _db.query(arg0: _string_, arg1: _Values_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Values_ |   |

##### Retorno

( _List_ )


---

#### _db.query(arg0: _string_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _List_ )


---

#### _db.query(arg0: _string_, arg1: _List_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _List_ |   |

##### Retorno

( _List_ )


---

## queryFirst

---

#### _db.queryFirst(arg0: _string_, arg1: _List_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _List_ |   |

##### Retorno

( _Values_ )


---

#### _db.queryFirst(arg0: _string_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Values_ )


---

#### _db.queryFirst(arg0: _string_, arg1: _Values_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Values_ |   |

##### Retorno

( _Values_ )


---

#### _db.queryFirst(arg0: _string_, arg1: _Object[]_) : _Values_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Object[]_ |   |

##### Retorno

( _Values_ )


---

## sanitize

---

#### _db.sanitize(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

## sanitizeBoolean

---

#### _db.sanitizeBoolean(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

## sanitizeInt

---

#### _db.sanitizeInt(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

## sanitizeName

---

#### _db.sanitizeName(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

## sanitizePath

---

#### _db.sanitizePath(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

## save

---

#### _db.save(arg0: _string_, arg1: _int_, arg2: _Map_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _int_ |   |
| arg2 | _Map_ |   |

##### Retorno

( _int_ )


---

#### _db.save(arg0: _string_, arg1: _string_, arg2: _Map_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _string_ |   |
| arg2 | _Map_ |   |

##### Retorno

( _int_ )


---

#### _db.save(arg0: _string_, arg1: _int_, arg2: _Values_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _int_ |   |
| arg2 | _Values_ |   |

##### Retorno

( _int_ )


---

#### _db.save(arg0: _string_, arg1: _string_, arg2: _Values_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _string_ |   |
| arg2 | _Values_ |   |

##### Retorno

( _int_ )


---

## search

---

#### _db.search(arg0: _string_, arg1: _Map_) : _SearchResult_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Map_ |   |

##### Retorno

( _SearchResult_ )


---

#### _db.search(arg0: _string_, arg1: _Values_) : _SearchResult_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Values_ |   |

##### Retorno

( _SearchResult_ )


---

## sequence

---

#### _db.sequence() : _Sequence_
##### Retorno

( _Sequence_ )


---

## table

---

#### _db.table() : _Table_
##### Retorno

( _Table_ )


---

## time

---

#### _db.time() : _Time_
##### Retorno

( _Time_ )


---

#### _db.time(arg0: _string_) : _Time_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Time_ )


---

#### _db.time(arg0: _LocalTime_) : _Time_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _LocalTime_ |   |

##### Retorno

( _Time_ )


---

#### _db.time(arg0: _Instant_) : _Date_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Instant_ |   |

##### Retorno

( _Date_ )


---

## timestamp

---

#### _db.timestamp(arg0: _Instant_) : _Timestamp_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _Instant_ |   |

##### Retorno

( _Timestamp_ )


---

#### _db.timestamp(arg0: _string_) : _Timestamp_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _Timestamp_ )


---

#### _db.timestamp() : _Timestamp_
##### Retorno

( _Timestamp_ )


---

#### _db.timestamp(arg0: _LocalDateTime_) : _Timestamp_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _LocalDateTime_ |   |

##### Retorno

( _Timestamp_ )


---

## toFloat

---

#### _db.toFloat(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

## toInt

---

#### _db.toInt(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

## toIntSequence

---

#### _db.toIntSequence(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

## toRawName

---

#### _db.toRawName(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

## toRawPath

---

#### _db.toRawPath(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

## toString

---

#### _db.toString(arg0: _string_) : _string_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |

##### Retorno

( _string_ )


---

#### _db.toString() : _string_
##### Retorno

( _string_ )


---

## update

---

#### _db.update(tabela: _string_, id: _int_, dados: _Map_) : _int_
##### Descrição

Atualiza dados existentes de acordo com o ID que vem nos dados que são passados.

##### Como Usar

```javascript
var id = 1;

var result = _db.update(
    "nome_da_tabela",
    id,
    _val.init()
        .set("id", 1)
        .set("name", "nome")
        .set("mail", "mail@netuno.org")
);

_out.json(
    "result": result
);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | _string_ | Nome da tabela que contém os registos que devem ser atualizados. |
| id | _int_ | ID do registo que será afetado pela atualização. |
| dados | _Map_ | Objeto com a estrutura de dados que deverá ser atualizado. |

##### Retorno

( _int_ )

Quantidade de registos afetados pela atualização.

---

#### _db.update(tabela: _string_, uid: _string_, dados: _Map_) : _int_
##### Descrição

Atualiza dados existentes de acordo com o ID que vem nos dados que são passados.

##### Como Usar

```javascript
var id = 1;

var result = _db.update(
    "nome_da_tabela",
    id,
    _val.init()
        .set("id", 1)
        .set("name", "nome")
        .set("mail", "mail@netuno.org")
);

_out.json(
    "result": result
);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | _string_ | Nome da tabela que contém os registos que devem ser atualizados. |
| uid | _string_ | UID do registo que será afetado pela atualização. |
| dados | _Map_ | Objeto com a estrutura de dados que deverá ser atualizado. |

##### Retorno

( _int_ )

Quantidade de registos afetados pela atualização.

---

#### _db.update(tabela: _string_, dados: _Values_) : _int_
##### Descrição

Atualiza dados existentes de acordo com o ID que vem nos dados que são passados.

##### Como Usar

```javascript
var id = 1;

var result = _db.update(
    "nome_da_tabela",
    id,
    _val.init()
        .set("id", 1)
        .set("name", "nome")
        .set("mail", "mail@netuno.org")
);

_out.json(
    "result": result
);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | _string_ | Nome da tabela que contém os registos que devem ser atualizados. |
| dados | _Values_ | Objeto com a estrutura de dados que deverá ser atualizado, com o ID ou UID. |

##### Retorno

( _int_ )

Quantidade de registos afetados pela atualização.

---

#### _db.update(tabela: _string_, id: _int_, dados: _Values_) : _int_
##### Descrição

Atualiza dados existentes de acordo com o ID que vem nos dados que são passados.

##### Como Usar

```javascript
var id = 1;

var result = _db.update(
    "nome_da_tabela",
    id,
    _val.init()
        .set("id", 1)
        .set("name", "nome")
        .set("mail", "mail@netuno.org")
);

_out.json(
    "result": result
);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | _string_ | Nome da tabela que contém os registos que devem ser atualizados. |
| id | _int_ | ID do registo que será afetado pela atualização. |
| dados | _Values_ | Objeto com a estrutura de dados que deverá ser atualizado. |

##### Retorno

( _int_ )


---

#### _db.update(tabela: _string_, uid: _string_, dados: _Values_) : _int_
##### Descrição

Atualiza dados existentes de acordo com o ID que vem nos dados que são passados.

##### Como Usar

```javascript
var id = 1;

var result = _db.update(
    "nome_da_tabela",
    id,
    _val.init()
        .set("id", 1)
        .set("name", "nome")
        .set("mail", "mail@netuno.org")
);

_out.json(
    "result": result
);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | _string_ | Nome da tabela que contém os registos que devem ser atualizados. |
| uid | _string_ | UID do registo que será afetado pela atualização. |
| dados | _Values_ | Objeto com a estrutura de dados que deverá ser atualizado. |

##### Retorno

( _int_ )

Quantidade de registos afetados pela atualização.

---

#### _db.update(tabela: _string_, dados: _Map_) : _int_
##### Descrição

Atualia dados existentes de acordo com o ID que vem nos dados que são passados.

##### Como Usar

```javascript
var id = 1;

var result = _db.update(
    "nome_da_tabela",
    id,
    _val.init()
        .set("id", 1)
        .set("name", "nome")
        .set("mail", "mail@netuno.org")
);

_out.json(
    "result": result
);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | _string_ | Nome da tabela que contém os registos que devem ser atualizados. |
| dados | _Map_ | Objeto com a estrutura de dados que deverá ser atualizado. |

##### Retorno

( _int_ )

Quantidade de registos afetados pela atualização.

---

## updateMany

---

#### _db.updateMany(arg0: _string_, arg1: _Values_) : _int[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Values_ |   |

##### Retorno

( _int[]_ )


---

#### _db.updateMany(arg0: _string_, arg1: _Object[]_) : _int[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _Object[]_ |   |

##### Retorno

( _int[]_ )


---

#### _db.updateMany(arg0: _string_, arg1: _List_) : _int[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _string_ |   |
| arg1 | _List_ |   |

##### Retorno

( _int[]_ )


---

