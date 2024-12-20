---
id: db-query
title: Database Query
sidebar_label: DB Query
---

## Antes de começar

Para poder compreender este tutorial com a maior eficácia possível, aconselhamos que se certifique que tem noções básicas em _**JavaScript, SQL**_ e que saiba criar serviços no Netuno.

Caso não saiba criar serviços dirija-se a [Serviços Web REST](rest).

## Criação de Queries

O Netuno traz consigo funções direccionadas para a criação de queries à base de dados, e neste tutorial iremos apresentar e descrever brevemente o efeito de cada uma e também as boas práticas para obter o melhor resultado.

### _db.query('SELECT * FROM ...')

Esta função permite retornar dados de uma querie.

```javascript
_out.json(
  _db.query('SELECT * FROM tabela_nome')
)
```

> Note que a função _out.json() é para permitir a visualização dos dados do serviço no ecrã ao chamar o mesmo no navegador

Esta função permite também a aceitação de argumentos, sendo que os mesmos são passados diretamente pela chamada ao serviço, como por exemplo, imaginemos que temos o serviço _selecionar-todos.js_, a chamada ao mesmo será feita por _**http://localhost:9000/services/selecionar-todos.netuno**_ em que os argumentos a passar se colocam a seguir à chamada a seguir a um ponto de interrogação:

```
http://localhost:9000/services/selecionar-todos.netuno?argumento1=1&argumento2=nome
```

> Note que para enviar múltiplos argumentos basta separar por um 'e' comercial (&)

### Query com parâmetros

E por fim basta efetuar a declaração desta variável na querie da seguinte forma:

```javascript
_out.json(
    _db.query(
        'SELECT * FROM tabela_nome WHERE id = ? AND nome = ?', 
        _req.getInt("argumento1"), _req.getString("argumento2")
    )
)
```

> No lugar das '?' (interrogações) será injetado o parâmetro correspondente de acordo com a sua ordem.

## Query com parâmetros e tipos do PostgreSQL e H2DataBase

No entanto o H2Database e o PostgreSQL suportam uma sintaxe de conversão simples, e assim podemos atribuir tipos aos parâmetros da seguinte forma:

```javascript
_out.json(
  _db.query(
    'SELECT * FROM tabela_nome WHERE id = ?::int AND nome = ?::varchar', 
    _req.getInt("id"), _req.getString("nome")
  )
)
```

## Tipos de parâmetros do H2Database e PostgreSQL

Como pode ter reparado anteriormente, quando se pretende executar uma consulta com argumentos tem de se definir o tipo dos mesmos. Segue agora uma lista com todos os tipos de variáveis e qual o tipo mais adequado para cada:

* Adequado para parâmetros de números inteiros:
    * **?::int**
* Adequado para parâmetros números decimais:
    * **?::float**
 * Adequado para parâmetros de identificador único global/universal mais conhecidos como guids ou uuid:
    * **?::uuid**
 * Adequado para parâmetros de texto genérico, strings:
    * **?::varchar**
    * **?::text**
 * Adequado para parâmetros do tipo data:
    * **?::date**
 * Adequado para parâmetros do tipo hora:
    *  **?::time**
 * Adequado para parâmetros com data e hora:
    * **?::datetime** (H2Database)
    * **?::timestamp** (PostgreSQL)
    
## _db.execute('INSERT INTO | UPDATE | DELETE ...')

Esta função permite executar um comando de base de dados, como updates, inserts e deletes.

Retornar o número de registos afetados pelo comando e executado.

```javascript
// Exemplo de Insert:
const nRecordsInserted = _db.execute(
    "INSERT INTO tabela_nome(id, active, nome) " + 
    "VALUES(nextval('tabela_nome_id'), ?::int, ?::varchar)", 
    1, nome
)

//Exemplo de Update:
const nRecordsUpdated = _db.execute(
    "UPDATE tabela_nome SET nome = ?::varchar WHERE id = ?::int",
    _req.getString("nome"), _req.getInt("id")
)

// Exemplo de Delete:
const nRecordsDeleted = _db.execute(
    "DELETE FROM tabela_nome WHERE id = ?::int",
    _req.getInt("id")
)
```

> **Nota:** Quando se faz um insert verificar se o campo active é igual a 1 senão não vai aparecer no resultado. 

## Exemplo de Interação com os Dados

Vamos agora apresentar normas aconselhadas para que obtenha os melhores resultados possíveis.

## Query First

Veja abaixo como obter a primeira linha da query, ou será nulo caso não haja nenhuma linha obtida.

```javascript
// Selecionar os dados:
const dbResult = _db.queryFirst(
    'SELECT name FROM table_name WHERE uid = ?::uuid',
    _req.getString("uid")
)
if (!dbResult) {
    // Código de estado do HTTP:
    _header.status(404)
    // Indicação do erro:
    _out.json(
        _val.map()
            .set('error', 'id-not-found')
    )
    // Finaliza a execução do serviço:
    _exec.stop()
}
```

## Validar a quantidade de registos

Quando efetua uma seleção à base de dados em que o resultado seja único, para ter acesso aos dados convém, proceder da **seguinte forma**:

Note que este é apenas um simples exemplo que garante que pelo menos 1 resultado é retornado e evita o erro caso não haja resultado.

```javascript
// Selecão dos dados:
var dbResultados = _db.query(
  'SELECT nome FROM tabela_nome WHERE id = ?::int',
   _val.init()
        .add(_req.getInt("id"))
)
let nome = null;
// Garante que existe dados, e pode ser utilizado o 
// símbolo de maior (resultado.length > 1) no caso 
// de haver mais que um registo:
if (dbResultados.size() >= 1) {
  // Para aceder ao valor do nome diretamente basta:
  nome = dbResultados.get(0).getString('nome');
}
```

## Iteração em loop dos registos

Caso o resultado da seleção sejam **múltiplos resultados**, pode interagir com o ciclo 'for' para obter os dados da seguinte forma:

```javascript
// Executar a query
const dbResultados = _db.query('SELECT id, nome FROM tabela_nome');

// Inicializar a variável para que esta possa receber valores
const items = _val.init();

// Iteração por todos os resultados para receber cada valor separado
for (const dbResultado of dbResultados) {
    items.push(
        _val.map()
            .set("uid", dbResultado.getString("uid"))
            .set("name", dbResultado.getString("name"))
    );
}

// Envia na saída de dados a nova lista de dados:
_out.json(items);
```

Caso tenha alguma questão não hesite em contactar, veja as indicações no footer deste website.

Bom desenvolvimento!
