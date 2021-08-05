---
id: db
title: DB
sidebar_label: DB
---

Recurso de carregamento de datasources.
Este recurso permite o carregamento do datasource que mais lhe for conveniente, suporta conexão com MariaDB, MSSQLServer, PostgreSQL, H2 e Oracle.

```javascript
// Atenção ao inserir parâmetros em queries,
// não deve utilizar a concatenação de strings
// para garantir a segurança contra SQL Injection:

const NOK = _db.query(
  'select * from cliente where id = '+ _req.getString('id')
);

// ATENÇÃO: O exemplo acima é incorreto.
// Siga o padrão abaixo para garantir a segurança
// ao injetar parâmetros:

const OK = _db.query(
  'select * from cliente where id = ?', _val.list().add( _req.getString('id') )
);
```

---

## all

---

#### _db.all(arg0: string) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _List_ )


---

## batch

---

#### _db.batch() : _[DBBatch](../../objects/DBBatch)_
##### Descrição

Inicia o processamento em lote de execuções em base de dados.

##### Como Usar

```javascript
const batchComParametros = _db.batch(`
        insert into producto(id, uid, nome, preco, active)
        values(nextval('producto_id'), ?, ?, ?, true)
    `)
    .put(_uid.generate(), "Netuno Lote 1", 3.2)
    .put(_uid.generate(), "Netuno Lote 2", 5.4)
const resultados = batchComParametros.execute()
```

##### Retorno

( _[DBBatch](../../objects/DBBatch)_ )

Gestor da execução de operações em lote.

---

#### _db.batch(comandoSQL: string) : _[DBBatch](../../objects/DBBatch)_
##### Descrição

Inicia o processamento em lote de execuções em base de dados, com base em um único comando que será executado múltiplas vezes com variação dos dados.

##### Como Usar

```javascript
const batchComParametros = _db.batch(`
        insert into producto(id, uid, nome, preco, active)
        values(nextval('producto_id'), ?, ?, ?, true)
    `)
    .put(_uid.generate(), "Netuno Lote 1", 3.2)
    .put(_uid.generate(), "Netuno Lote 2", 5.4)
const resultados = batchComParametros.execute()
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| comandoSQL | string | Comando SQL que será utilizado como base para todas as interações. |

##### Retorno

( _[DBBatch](../../objects/DBBatch)_ )

Gestor da execução de operações em lote.

---

## checkExists

---

#### _db.checkExists() : _[CheckExists](../../objects/CheckExists)_
##### Retorno

( _[CheckExists](../../objects/CheckExists)_ )


---

## column

---

#### _db.column() : _[Column](../../objects/Column)_
##### Retorno

( _[Column](../../objects/Column)_ )


---

## date

---

#### _db.date() : _Date_
##### Descrição

Obtém a data atual para ser utilizada em operações de base de dados.

##### Retorno

( _Date_ )

Data atual.

---

#### _db.date(texto: string) : _Date_
##### Descrição

Com o conteúdo de texto obtém o objeto de data para ser utilizada em operações de base de dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| texto | string | Texto que contém data no formato: `yyyy-MM-dd` |

##### Retorno

( _Date_ )

Data obtida do texto.

---

#### _db.date(instant: _Instant_) : _Date_
##### Descrição

Através do objeto Instant cria um novo objeto Date com java.sql.**Date.from**, para ser utilizado em operações de base de dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| instant | _Instant_ | Objeto do tipo: _java.time.Instant_ |

##### Retorno

( _Date_ )

Novo objeto do tipo: _java.util.Date_

---

#### _db.date(localDateTime: _LocalDate_) : _Date_
##### Descrição

Através do objeto LocalDateTime cria um novo objeto Date para ser utilizado em operações de base de dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| localDateTime | _LocalDate_ | Objeto do tipo: _java.time.LocalDateTime_ |

##### Retorno

( _Date_ )

Novo objeto do tipo: _java.sql.Date_

---

## delete

---

#### _db.delete(tabela: string, id: _int_) : _int_
##### Descrição

Executa a eliminação de registos na base de dados baseado no ID.

##### Como Usar

```javascript
// Executa a eliminação através do ID

const id = 1;

const result = _db.delete(
    "cliente",
    id
);

_out.json(
    "result": result
);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | string | Nome da tabela na base de dados. |
| id | _int_ | ID do registo a eliminar. |

##### Retorno

( _int_ )

Quantidade de registos afetados pela eliminação.

---

#### _db.delete(tabela: string, uid: string) : _int_
##### Descrição

Executa a eliminação de registos na base de dados baseado no UID.

##### Como Usar

```javascript
// Executa a eliminação através do UID

const uid = "1d8722f4-fa28-4a08-8098-6dd5cab1b212";

const result = _db.delete(
    "cliente",
    uid
);

_out.json(
    "result": result
);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | string | Nome da tabela na base de dados. |
| uid | string | UID do registo a eliminar. |

##### Retorno

( _int_ )

Quantidade de registos afetados pela eliminação.

---

#### _db.delete(tabela: string, dados: _Map_) : _int_
##### Descrição

Executa a eliminação de registos na base de dados baseado no ID ou UID passado no objeto de dados.

##### Como Usar

```javascript
// Executa a eliminação através do id ou uid nos dados

const result = _db.delete(
    "cliente",
    _val.map().set("id", 1)
);

_out.json(
    "result": result
);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | string | Nome da tabela na base de dados. |
| dados | _Map_ | Estrutura de dados que deverá ser eliminada baseado no seu ID ou UID. |

##### Retorno

( _int_ )

Quantidade de registos afetados pela eliminação.

---

#### _db.delete(tabela: string, dados: _[Values](../../objects/Values)_) : _int_
##### Descrição

Executa a eliminação de registos na base de dados baseado no ID ou UID passado no objeto de dados.

##### Como Usar

```javascript
// Executa a eliminação através do id ou uid nos dados

const result = _db.delete(
    "cliente",
    _val.map().set("id", 1)
);

_out.json(
    "result": result
);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | string | Nome da tabela na base de dados. |
| dados | _[Values](../../objects/Values)_ | Estrutura de dados que deverá ser eliminada baseado no seu ID ou UID. |

##### Retorno

( _int_ )

Quantidade de registos afetados pela eliminação.

---

## deleteMany

---

#### _db.deleteMany(arg0: string, arg1: _Object[]_) : _int[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object[]_ |   |

##### Retorno

( _int[]_ )


---

#### _db.deleteMany(arg0: string, arg1: _List_) : _int[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _List_ |   |

##### Retorno

( _int[]_ )


---

#### _db.deleteMany(arg0: string, arg1: _[Values](../../objects/Values)_) : _int[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _int[]_ )


---

## escape

---

#### _db.escape(dados: string) : string
##### Descrição

Garante a codificação para definir nomes em base de dados, normalmente aspas (**"**).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| dados | string | Nome que precisa ser utilizado em base de dados, como nome de tabela ou coluna. |

##### Retorno

( string )

Nome seguro para utilizar em base de dados, como em tabelas e colunas.

---

## escapeEnd

---

#### _db.escapeEnd() : string
##### Descrição

Obtém a codificação de fim para definir nomes em base de dados, normalmente aspas (**"**).

##### Retorno

( string )

Fim de nomes em base de dados.

---

## escapeStart

---

#### _db.escapeStart() : string
##### Descrição

Obtém a codificação de início para definir nomes em base de dados, normalmente aspas (**"**).

##### Retorno

( string )

Início de nomes em base de dados.

---

## execute

---

#### _db.execute(comandoSQL: string) : _int_
##### Descrição

Inicia o processamento em lote de execuções em base de dados, com base em um único comando que será executado múltiplas vezes com variação dos dados.

##### Como Usar

```javascript
const batchComParametros = _db.batch(`
        insert into producto(id, uid, nome, preco, active)
        values(nextval('producto_id'), ?, ?, ?, true)
    `)
    .put(_uid.generate(), "Netuno Lote 1", 3.2)
    .put(_uid.generate(), "Netuno Lote 2", 5.4)
const resultados = batchComParametros.execute()
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| comandoSQL | string | Comando SQL que será utilizado como base para todas as interações. |

##### Retorno

( _int_ )

Gestor da execução de operações em lote.

---

#### _db.execute(arg0: string, arg1: _Object[]_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object[]_ |   |

##### Retorno

( _int_ )


---

#### _db.execute(arg0: string, arg1: _List_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _List_ |   |

##### Retorno

( _int_ )


---

#### _db.execute(arg0: string, arg1: _[Values](../../objects/Values)_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _int_ )


---

## find

---

#### _db.find(tabela: string, params: _[Values](../../objects/Values)_) : _List_
##### Descrição

A partir de um objeto que tem a estrutura parecida com uma consulta SQL, obtém uma lista dos dados encontrados nas condições de pesquisa.
Constrói a query compatível com qualquer tipo de base de dados.
Permite condições, ordenação, evita SQL Injection, entre outros.
Exemplo que demonstra como define as colunas, as condições, ordenação e paginação:

##### Como Usar

```javascript
const list = _db.find(
    "pessoa",
    _val.map()
        .set(
            "columns",
            _val.list()
                .add("uid")
                .add(
                    _val.map()
                        .set("nome", "Pedro")
                        .set("apelido", "Cabral")
                    )
                .add("email")
        )
        .set(
            "where",
            _val.map()
                .set("grupo", 1)
                .set(
                    "email",
                    _val.map()
                        .set("operator", "like")
                        .set("value", "%@e-mail.exemplo")
                 )
        )
        .set(
            "order",
            _val.list()
                .add("nome")
                .add("apelido")
        )
        .set("limit", 10)
        .set("offset", 5)
)
_out.json(
    list
)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | string | Nome tabela. |
| params | _[Values](../../objects/Values)_ | Definição da consulta, suporta limitar colunas (_columns_), adicionar condições (_where_), ordenação (_order_), entre outros. |

##### Retorno

( _List_ )

Lista dos registos de dados encontrados.

---

## findFirst

---

#### _db.findFirst(tabela: string, params: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Descrição

A partir de um objeto que tem a estrutura parecida com uma consulta SQL, obtém uma lista dos dados encontrados nas condições de pesquisa.
Constrói a query compatível com qualquer tipo de base de dados.
Permite condições, ordenação, evita SQL Injection, entre outros.
Exemplo que demonstra como define as colunas, as condições, ordenação e paginação:

##### Como Usar

```javascript
const record = _db.findFirst(
    "pessoa",
    _val.map()
        .set(
            "where",
            _val.map()
                .set("email", "pessoa@e-mail.exemplo")
                 )
        )
)
_out.json(
    record
)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | string | Nome tabela. |
| params | _[Values](../../objects/Values)_ | Definição da consulta, suporta limitar colunas (_columns_), adicionar condições (_where_), ordenação (_order_), entre outros. |

##### Retorno

( _[Values](../../objects/Values)_ )

Dados da linha de registo encontrado.

---

## findQuery

---

#### _db.findQuery(arg0: string, arg1: _[Values](../../objects/Values)_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Retorno

( string )


---

## get

---

#### _db.get(tabela: string, id: _int_) : _[Values](../../objects/Values)_
##### Descrição

Obtém os dados do registo na base de dados, através do nome da tabela e do ID.

##### Como Usar

```javascript
// Todos os dados do registro com o ID fornecido.

const dbRegistoCliente = _db.get(
    "cliente",
    100
)

_out.json(dbRegistoCliente);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | string | Nome da tabela na base de dados que deve obter os dados. |
| id | _int_ | ID do registo que deve obter os dados. |

##### Retorno

( _[Values](../../objects/Values)_ )

Os dados do item encontrado ou null caso não exista.

---

#### _db.get(tabela: string, uid: string) : _[Values](../../objects/Values)_
##### Descrição

Obtém os dados do registo na base de dados, através do nome da tabela e do UID.

##### Como Usar

```javascript
// Todos os dados do registro com o UID fornecido.

const dbRegistoCliente = _db.get(
    "cliente",
    "cbe8bd5a-98c9-48b2-bbac-6a11ac46f2a8"
);

_out.json(dbRegistoCliente);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | string | Nome da tabela na base de dados que deve obter os dados. |
| uid | string | UID do registo que deve obter os dados. |

##### Retorno

( _[Values](../../objects/Values)_ )

Os dados do item encontrado ou null caso não exista.

---

## getKey

---

#### _db.getKey() : string
##### Descrição

Obtém o nome da configuração de conexão à base de dados que está a ser utilizada.
Os detalhes da conexão deverão estar definidas no documento configuração de ambiente da aplicação, mais informações no tutorial sobre [Multiplas bases de dados](../../tutorials/multiple-databases).

##### Como Usar

```javascript
_header.contentTypePlain()

const db_PADRAO_NomeConexao = _db.getKey()
_out.print(`A conexão da db PADRÃO é: ${db_PADRAO_NomeConexao}\n`)

const db_OUTRA_NomeConexao = _db.init("countries").getKey()
_out.print(`A OUTRA conexão da db é: ${db_OUTRA_NomeConexao}\n`)

```

##### Retorno

( string )

Nome da configuração de conexão à base de dados que está a ser utilizada.

---

## index

---

#### _db.index() : _[Index](../../objects/Index)_
##### Retorno

( _[Index](../../objects/Index)_ )


---

## init

---

#### _db.init(chave: string) : _DB_
##### Descrição

Inicia um novo recurso de DB para o nome de conexão que é passada.
Os detalhes da conexão deverão estar definidas no documento configuração de ambiente da aplicação, mais informações no tutorial sobre [Multiplas bases de dados](../../tutorials/multiple-databases).

##### Como Usar

```javascript
// Executa queries em outra base de dados

const dbPaises = _db.init('countries')

const paises = dbPaises.query('select code, name from country')

_out.json(paises)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | string | Nome da conexão da base definida nas configurações de ambiente da aplicação. |

##### Retorno

( _DB_ )

O novo recurso de base de dados que utiliza uma outra base de dados.

---

## insert

---

#### _db.insert(tabela: string, dados: _Map_) : _int_
##### Descrição

Executa a inserção de novos dados na base de dados e retorna o id dos mesmos.

##### Como Usar

```javascript
// Executa a inserção de novo registo e retorna o ID

const id = _db.insert(
    "client",
    _val.map()
        .set("name", "Sitana"),
        .set("mail", "admin@sitana.pt")
);

_out.json(
    _val.map().set("id", id)
);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | string | Nome da tabela na base de dados que deve receber os dados que serão inseridos. |
| dados | _Map_ | Objeto com a estrutura de dados que será inserido. |

##### Retorno

( _int_ )


---

#### _db.insert(tabela: string, dados: _[Values](../../objects/Values)_) : _int_
##### Descrição

Executa a inserção de novos dados na base de dados e retorna o id dos mesmos.

##### Como Usar

```javascript
// Executa a inserção de novo registo e retorna o ID

const id = _db.insert(
    "client",
    _val.map()
        .set("name", "Sitana"),
        .set("mail", "admin@sitana.pt")
);

_out.json(
    _val.map().set("id", id)
);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | string | Nome da tabela na base de dados que deve receber os dados que serão inseridos. |
| dados | _[Values](../../objects/Values)_ | Objeto com a estrutura de dados que será inserido. |

##### Retorno

( _int_ )


---

## insertIfNotExists

---

#### _db.insertIfNotExists(arg0: string, arg1: _Map_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Map_ |   |

##### Retorno

( _int_ )


---

#### _db.insertIfNotExists(arg0: string, arg1: _[Values](../../objects/Values)_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _int_ )


---

## insertMany

---

#### _db.insertMany(arg0: string, arg1: _Object[]_) : _int[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object[]_ |   |

##### Retorno

( _int[]_ )


---

#### _db.insertMany(arg0: string, arg1: _List_) : _int[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _List_ |   |

##### Retorno

( _int[]_ )


---

#### _db.insertMany(arg0: string, arg1: _[Values](../../objects/Values)_) : _int[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _int[]_ )


---

## isH2

---

#### _db.isH2() : _boolean_
##### Descrição

Verifica se a base de dados conectada é H2 Database.

##### Retorno

( _boolean_ )

Se é H2 Database.

---

## isH2DataBase

---

#### _db.isH2DataBase() : _boolean_
##### Descrição

Verifica se a base de dados conectada é H2 Database.

##### Retorno

( _boolean_ )

Se é H2 Database.

---

## isMariaDB

---

#### _db.isMariaDB() : _boolean_
##### Descrição

Verifica se a base de dados conectada é MariaDB.

##### Retorno

( _boolean_ )

Se é MariaDB.

---

## isPG

---

#### _db.isPG() : _boolean_
##### Descrição

Verifica se a base de dados conectada é PostgreSQL.

##### Retorno

( _boolean_ )

Se é PostgreSQL.

---

## isPostgreSQL

---

#### _db.isPostgreSQL() : _boolean_
##### Descrição

Verifica se a base de dados conectada é PostgreSQL.

##### Retorno

( _boolean_ )

Se é PostgreSQL.

---

## query

---

#### _db.query(arg0: string) : _List_
##### Descrição

Execute uma query SQL diretamente na base de dados. Muita cuidado com SQL Injection.

##### Como Usar

```javascript
const valorMaximoSeguro = _db.toFloat(_req.getString("valor_maximo"))

_out.json(
    _db.query(`
        select * from produto
        where preco < ${valorMaximoSeguro}
    `)
)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _List_ )

Lista de dados obtidos com a query direta à base de dados.

---

#### _db.query(arg0: string, arg1: _Object[]_) : _List_
##### Descrição

Execute uma query SQL diretamente na base de dados. Muita cuidado com SQL Injection.

##### Como Usar

```javascript
const valorMaximoSeguro = _db.toFloat(_req.getString("valor_maximo"))

_out.json(
    _db.query(`
        select * from produto
        where preco < ${valorMaximoSeguro}
    `)
)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object[]_ |   |

##### Retorno

( _List_ )

Lista de dados obtidos com a query direta à base de dados.

---

#### _db.query(arg0: string, arg1: _List_) : _List_
##### Descrição

Execute uma query SQL diretamente na base de dados. Muita cuidado com SQL Injection.

##### Como Usar

```javascript
const valorMaximoSeguro = _db.toFloat(_req.getString("valor_maximo"))

_out.json(
    _db.query(`
        select * from produto
        where preco < ${valorMaximoSeguro}
    `)
)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _List_ |   |

##### Retorno

( _List_ )

Lista de dados obtidos com a query direta à base de dados.

---

#### _db.query(arg0: string, arg1: _[Values](../../objects/Values)_) : _List_
##### Descrição

Execute uma query SQL diretamente na base de dados. Muita cuidado com SQL Injection.

##### Como Usar

```javascript
const valorMaximoSeguro = _db.toFloat(_req.getString("valor_maximo"))

_out.json(
    _db.query(`
        select * from produto
        where preco < ${valorMaximoSeguro}
    `)
)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _List_ )

Lista de dados obtidos com a query direta à base de dados.

---

## queryFirst

---

#### _db.queryFirst(arg0: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _db.queryFirst(arg0: string, arg1: _Object[]_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object[]_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _db.queryFirst(arg0: string, arg1: _List_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _List_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _db.queryFirst(arg0: string, arg1: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## sanitize

---

#### _db.sanitize(dados: string) : string
##### Descrição

Certifica que o conteúdo é seguro para injetar numa query direto à base de dados, previne ataques de SQL Injection.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| dados | string | Informação que precisa ser utilizada em base de dados com risco de SQL Injection. |

##### Retorno

( string )

Conteúdo seguro para utilizar diretamente em queries.

---

## sanitizeBoolean

---

#### _db.sanitizeBoolean(dados: string) : string
##### Descrição

Certifica que o conteúdo é seguro para injetar como boleano (verdadeiro ou falso) numa query direto à base de dados, previne ataques de SQL Injection.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| dados | string | Informação que precisa ser utilizada como boleano (verdadeiro ou falso) em base de dados com risco de SQL Injection. |

##### Retorno

( string )

Conteúdo como boleano (verdadeiro ou falso) seguro para utilizar diretamente em queries.

---

## sanitizeFloat

---

#### _db.sanitizeFloat(dados: string) : string
##### Descrição

Certifica que o conteúdo é seguro para injetar como número decimal numa query direto à base de dados, previne ataques de SQL Injection.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| dados | string | Informação que precisa ser utilizada como número decimal em base de dados com risco de SQL Injection. |

##### Retorno

( string )

Conteúdo como número decimal seguro para utilizar diretamente em queries.

---

## sanitizeInt

---

#### _db.sanitizeInt(dados: string) : string
##### Descrição

Certifica que o conteúdo é seguro para injetar como número inteiro numa query direto à base de dados, previne ataques de SQL Injection.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| dados | string | Informação que precisa ser utilizada como número inteiro em base de dados com risco de SQL Injection. |

##### Retorno

( string )

Conteúdo como número inteiro seguro para utilizar diretamente em queries.

---

## sanitizeName

---

#### _db.sanitizeName(dados: string) : string
##### Descrição

Certifica que o conteúdo é seguro para injetar como um nome de tabela ou coluna numa query direto à base de dados, previne ataques de SQL Injection.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| dados | string | Informação que precisa ser utilizada como nome de tabela ou coluna em base de dados com risco de SQL Injection. |

##### Retorno

( string )

Conteúdo como nome de tabela ou coluna seguro para utilizar diretamente em queries.

---

## sanitizePath

---

#### _db.sanitizePath(dados: string) : string
##### Descrição

Certifica que o conteúdo é seguro para injetar como um caminho do nome da tabela seguido por um ponto e então o nome da coluna (tabela.coluna), em query direto à base de dados, previne ataques de SQL Injection.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| dados | string | Informação que precisa ser utilizada como caminho (tabela.nome) em base de dados com risco de SQL Injection. |

##### Retorno

( string )

Conteúdo como caminho (tabela.nome) seguro para utilizar diretamente em queries.

---

## save

---

#### _db.save(arg0: string, arg1: _int_, arg2: _Map_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |
| arg2 | _Map_ |   |

##### Retorno

( _int_ )


---

#### _db.save(arg0: string, arg1: _int_, arg2: _[Values](../../objects/Values)_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _int_ |   |
| arg2 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _int_ )


---

#### _db.save(arg0: string, arg1: string, arg2: _Map_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | _Map_ |   |

##### Retorno

( _int_ )


---

#### _db.save(arg0: string, arg1: string, arg2: _[Values](../../objects/Values)_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _int_ )


---

## search

---

#### _db.search(arg0: string, arg1: _Map_) : _[DBSearchResult](../../objects/DBSearchResult)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Map_ |   |

##### Retorno

( _[DBSearchResult](../../objects/DBSearchResult)_ )


---

#### _db.search(arg0: string, arg1: _Map_, arg2: _boolean_) : _[DBSearchResult](../../objects/DBSearchResult)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Map_ |   |
| arg2 | _boolean_ |   |

##### Retorno

( _[DBSearchResult](../../objects/DBSearchResult)_ )


---

#### _db.search(arg0: string, arg1: _[Values](../../objects/Values)_) : _[DBSearchResult](../../objects/DBSearchResult)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[DBSearchResult](../../objects/DBSearchResult)_ )


---

#### _db.search(arg0: string, arg1: _[Values](../../objects/Values)_, arg2: _boolean_) : _[DBSearchResult](../../objects/DBSearchResult)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |
| arg2 | _boolean_ |   |

##### Retorno

( _[DBSearchResult](../../objects/DBSearchResult)_ )


---

## sequence

---

#### _db.sequence() : _[Sequence](../../objects/Sequence)_
##### Retorno

( _[Sequence](../../objects/Sequence)_ )


---

## store

---

#### _db.store(arg0: string, arg1: _Map_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Map_ |   |

##### Retorno

( _int_ )


---

#### _db.store(arg0: string, arg1: _[Values](../../objects/Values)_) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _int_ )


---

## table

---

#### _db.table() : _[Table](../../objects/Table)_
##### Retorno

( _[Table](../../objects/Table)_ )


---

## time

---

#### _db.time() : _Time_
##### Descrição

Obtém a hora atual para ser utilizada em operações de base de dados.

##### Retorno

( _Time_ )

Hora atual.

---

#### _db.time(texto: string) : _Time_
##### Descrição

Com o conteúdo de texto obtém o objeto de hora para ser utilizada em operações de base de dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| texto | string | Texto que contém hora no formato: `HH:mm:ss` |

##### Retorno

( _Time_ )

Hora obtida do texto.

---

#### _db.time(instant: _Instant_) : _Date_
##### Descrição

Através do objeto Instant cria um novo objeto Date com java.sql.**Time.from**, para ser utilizado em operações de base de dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| instant | _Instant_ | Objeto do tipo: _java.time.Instant_ |

##### Retorno

( _Date_ )

Novo objeto do tipo: _java.util.Date_

---

#### _db.time(localDateTime: _LocalTime_) : _Time_
##### Descrição

Através do objeto LocalDateTime cria um novo objeto Time para ser utilizado em operações de base de dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| localDateTime | _LocalTime_ | Objeto do tipo: _java.time.LocalDateTime_ |

##### Retorno

( _Time_ )

Novo objeto do tipo: _java.sql.Time_

---

## timestamp

---

#### _db.timestamp() : _Timestamp_
##### Descrição

Obtém a data e hora atual para ser utilizada em operações de base de dados.

##### Retorno

( _Timestamp_ )

Data e hora atual.

---

#### _db.timestamp(texto: string) : _Timestamp_
##### Descrição

Com o conteúdo de texto obtém o objeto de data e hora para ser utilizada em operações de base de dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| texto | string | Texto que contém data e hora no formato: `yyyy-MM-dd HH:mm:ss` |

##### Retorno

( _Timestamp_ )

Data e hora obtida do texto.

---

#### _db.timestamp(instant: _Instant_) : _Timestamp_
##### Descrição

Através do objeto Instant cria um novo objeto Timestamp para ser utilizado em operações de base de dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| instant | _Instant_ | Objeto do tipo: _java.time.Instant_ |

##### Retorno

( _Timestamp_ )

Novo objeto do tipo: _java.sql.Timestamp_

---

#### _db.timestamp(localDateTime: _LocalDateTime_) : _Timestamp_
##### Descrição

Através do objeto LocalDateTime cria um novo objeto Timestamp para ser utilizado em operações de base de dados.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| localDateTime | _LocalDateTime_ | Objeto do tipo: _java.time.LocalDateTime_ |

##### Retorno

( _Timestamp_ )

Novo objeto do tipo: _java.sql.Timestamp_

---

## toFloat

---

#### _db.toFloat(arg0: string) : string
##### Descrição

Garante que é um número com casas decimais válido para ser utilizado diretamente numa query evitando SQL Injection.

##### Como Usar

```javascript
const valorMaximoSeguro = _db.toFloat(_req.getString("valor_maximo"))

_out.json(
    _db.query(`
        select * from produto
        where preco < ${valorMaximoSeguro}
    `)
)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )

Conteúdo que é seguro utilizar diretamente em query como número com casas decimais (_float_).

---

## toInt

---

#### _db.toInt(arg0: string) : string
##### Descrição

Garante que é um número inteiro válido para ser utilizado diretamente numa query evitando SQL Injection.

##### Como Usar

```javascript
const idSeguro = _db.toInt(_req.getString("id"))

_out.json(
    _db.query(`
        select * from cliente
        where id = ${idSeguro}
    `)
)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )

Conteúdo que é seguro utilizar diretamente em query como número/inteiro.

---

## toIntSequence

---

#### _db.toIntSequence(arg0: string) : string
##### Descrição

Garante que é uma sequência de números separados por vírgula para ser utilizado diretamente numa query evitando SQL Injection.

##### Como Usar

```javascript
// Garante que a sequência de IDs é algo como:// 3,5,600,1000
const idsSeguros = _db.toIntSequence(_req.getString("ids"))

_out.json(
    _db.query(`
        select * from cliente
        where id in (${idsSeguros})
    `)
)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )

Conteúdo sequêncial numérico que é seguro utilizar diretamente em query.

---

## toRawName

---

#### _db.toRawName(arg0: string) : string
##### Descrição

Certifica que o conteúdo passado é um nome válido para ser utilizado em queries diretas à base de dados, se não for então retorna um erro.
Por exemplo válida se o nome está no formato para ser um nome de `nome_da_tabela` ou de `nome_da_coluna`.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )

Retorna o nome que é seguro utilizar diretamente em queries.

---

## toRawPath

---

#### _db.toRawPath(arg0: string) : string
##### Descrição

Certifica que o conteúdo passado é um caminho válido para ser utilizado em queries diretas à base de dados, se não for então retorna um erro.
Por exemplo válida se o caminho é compatível com `nome_da_tabela`.`nome_da_coluna`.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )

Retorna o caminho que é seguro utilizar diretamente em queries.

---

## toString

---

#### _db.toString() : string
##### Descrição

Garante que é uma string válida para ser utilizada diretamente numa query evitando SQL Injection.

##### Como Usar

```javascript
// Evita SQL Injection                                                                                                          

const nomeSeguro = _db.toString(_req.getString('name'))

_out.json(
    _db.query(`                                                                                                                 
        select * from client                                                                                                    
        where name = '${nomeSeguro}'                                                                                              
    `)
)
```

##### Retorno

( string )

Conteúdo que é seguro utilizar diretamente em query como string/varchar/texto.

---

#### _db.toString(arg0: string) : string
##### Descrição

Garante que é uma string válida para ser utilizada diretamente numa query evitando SQL Injection.

##### Como Usar

```javascript
// Evita SQL Injection                                                                                                          

const nomeSeguro = _db.toString(_req.getString('name'))

_out.json(
    _db.query(`                                                                                                                 
        select * from client                                                                                                    
        where name = '${nomeSeguro}'                                                                                              
    `)
)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )

Conteúdo que é seguro utilizar diretamente em query como string/varchar/texto.

---

## update

---

#### _db.update(tabela: string, id: _int_, dados: _Map_) : _int_
##### Descrição

Executa a atualização de dados existentes de acordo com o id ou uid que vem nos dados que são passados.

##### Como Usar

```javascript
var result = _db.update(
    "cliente",
    1, // ID do registo que será afetado.
    _val.map()
        .set("name", "Sitana")
        .set("mail", "admin@sitana.pt")
);

_out.json(
    "result": result
);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | string | Nome da tabela que contém os registos que devem ser atualizados. |
| id | _int_ | ID do registo que será afetado pela atualização. |
| dados | _Map_ | Objeto com a estrutura de dados que deverá ser atualizado. |

##### Retorno

( _int_ )

Quantidade de registos afetados pela atualização.

---

#### _db.update(tabela: string, uid: _int_, dados: _[Values](../../objects/Values)_) : _int_
##### Descrição

Executa a atualização de dados existentes de acordo com um id específico.

##### Como Usar

```javascript
var uid = "98502cff-d1e1-4efc-8efe-840320925316";

var result = _db.update(
    "cliente",
    uid,
    _val.map()
        .set("nome", "Sitana")
        .set("mail", "admin@sitana.pt")
);

_out.json(
    "result": result
);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | string | Nome da tabela que contém os registos que devem ser atualizados. |
| uid | _int_ | UID do registo que será afetado pela atualização. |
| dados | _[Values](../../objects/Values)_ | Objeto com a estrutura de dados que deverá ser atualizado. |

##### Retorno

( _int_ )

Quantidade de registos afetados pela atualização.

---

#### _db.update(tabela: string, uid: string, dados: _Map_) : _int_
##### Descrição

Executa a atualização de dados existentes de acordo com um id específico.

##### Como Usar

```javascript
var uid = "98502cff-d1e1-4efc-8efe-840320925316";

var result = _db.update(
    "cliente",
    uid,
    _val.map()
        .set("nome", "Sitana")
        .set("mail", "admin@sitana.pt")
);

_out.json(
    "result": result
);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | string | Nome da tabela que contém os registos que devem ser atualizados. |
| uid | string | UID do registo que será afetado pela atualização. |
| dados | _Map_ | Objeto com a estrutura de dados que deverá ser atualizado. |

##### Retorno

( _int_ )

Quantidade de registos afetados pela atualização.

---

#### _db.update(tabela: string, uid: string, dados: _[Values](../../objects/Values)_) : _int_
##### Descrição

Executa a atualização de dados existentes de acordo com um id específico.

##### Como Usar

```javascript
var uid = "98502cff-d1e1-4efc-8efe-840320925316";

var result = _db.update(
    "cliente",
    uid,
    _val.map()
        .set("nome", "Sitana")
        .set("mail", "admin@sitana.pt")
);

_out.json(
    "result": result
);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | string | Nome da tabela que contém os registos que devem ser atualizados. |
| uid | string | UID do registo que será afetado pela atualização. |
| dados | _[Values](../../objects/Values)_ | Objeto com a estrutura de dados que deverá ser atualizado. |

##### Retorno

( _int_ )

Quantidade de registos afetados pela atualização.

---

#### _db.update(tabela: string, dados: _Map_) : _int_
##### Descrição

Executa a atualização de dados existentes de acordo com o id ou uid que vem nos dados que são passados.

##### Como Usar

```javascript
var result = _db.update(
    "cliente",
    _val.map()
        .set("id", 1)
        .set("name", "Sitana")
        .set("mail", "admin@sitana.pt")
);

_out.json(
    "result": result
);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | string | Nome da tabela que contém os registos que devem ser atualizados. |
| dados | _Map_ | Objeto com a estrutura de dados que deverá ser atualizado. |

##### Retorno

( _int_ )

Quantidade de registos afetados pela atualização.

---

#### _db.update(tabela: string, dados: _[Values](../../objects/Values)_) : _int_
##### Descrição

Executa a atualização de dados existentes de acordo com o id ou uid que vem nos dados que são passados.

##### Como Usar

```javascript
var result = _db.update(
    "cliente",
    _val.map()
        .set("id", 1)
        .set("name", "Sitana")
        .set("mail", "admin@sitana.pt")
);

_out.json(
    "result": result
);
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tabela | string | Nome da tabela que contém os registos que devem ser atualizados. |
| dados | _[Values](../../objects/Values)_ | Objeto com a estrutura de dados que deverá ser atualizado. |

##### Retorno

( _int_ )

Quantidade de registos afetados pela atualização.

---

## updateMany

---

#### _db.updateMany(arg0: string, arg1: _Object[]_) : _int[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _Object[]_ |   |

##### Retorno

( _int[]_ )


---

#### _db.updateMany(arg0: string, arg1: _List_) : _int[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _List_ |   |

##### Retorno

( _int[]_ )


---

#### _db.updateMany(arg0: string, arg1: _[Values](../../objects/Values)_) : _int[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _int[]_ )


---

