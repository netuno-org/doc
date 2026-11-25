---
id: duckdb
title: DuckDB
sidebar_label: DuckDB
---

## Introdução

DuckDB é um banco de dados SQL analítico (OLAP) de código aberto, projetado para rodar embutido na aplicação sem 
servidor separado. Ele é frequentemente descrito como o "SQLite para análises", pois combina a simplicidade de 
implantação do SQLite com um motor de execução colunar e vetorizado, extremamente rápido para consultas complexas.

As principais vantagens são:

1. Utilização rápida e simples sem a necessidade de instalação e configuração.
2. Alto desempenho com arquitetura colunar e motor de execução vetorizado.
3. Faz consulta direta em arquivos Parquet, CSV e JSON usando SQL, sem a necessidade de pré-processamento.
4. Portabilidade para a integração direta e rápida de arquivos do banco de dados transferidos entre servidores.
5. Pode ter toda a base de dados apenas em memória para o processamento rápido de dados temporários.

## Configuração

O Netuno suporta o uso do DuckDB como base de dados principal.

Para usar o DuckDB deve ser especificado o motor do banco de dados na configuração da aplicação, a parametrização
`engine`, como `duckdb` ou apenas `duck`.

### Arquivos

Veja o exemplo de como configurar na aplicação o DuckDB:

```json title="config/_AMBIENTE.json"
  ...
  "db": {
    "default":  {
      "engine": "duck",
      "name": "mydb"
    }
  },
  ...
```

Os arquivos do banco de dados serão colocados dentro da pasta `dbs` dentro da aplicação.

Pode utilizar outra pasta para o banco de dados com a parametrização do `path`:

```json title="config/_AMBIENTE.json"
  ...
  "db": {
    "default":  {
      "engine": "duckdb",
      "name": "mydb",
      "path": "/opt/dbs"
    }
  },
  ...
```

Os arquivos do banco de dados são criados dentro da pasta especificada pelo `path`.

Caso não seja parametrizado o `name` então o path tem o caminho completo incluindo o nome do banco de dados, 
por exemplo:

```json title="config/_AMBIENTE.json"
  ...
  "db": {
    "default":  {
      "engine": "duckdb",
      "path": "/opt/dbs/mydb"
    }
  },
  ...
```

Em alternativa, pode configurar com a URL do JDBC, desta forma, o local exato onde os arquivos do banco de dados 
serão colocados precisa ser especificado:

```json title="config/_AMBIENTE.json"
  ...
  "db": {
    "default":  {
      "engine": "duck",
      "url": "jdbc:duckdb:/opt/mydb",
    }
  },
  ...
```

### Memória

Para base de dados apenas em memória:

```json title="config/_AMBIENTE.json"
  ...
  "db": {
    "default":  {
      "engine": "duck",
      "name": "mydb",
      "memory": true
    }
  },
  ...
```

Assim, nenhum arquivo em disco será utilizado.  

Em alternativa pode configurar com a URL do JDBC:

```json title="config/_AMBIENTE.json"
  ...
  "db": {
    "default":  {
      "engine": "duckdb",
      "url": "jdbc:duckdb:memory:mydb",
    }
  },
  ...
```

## Conclusão

Em resumo, o DuckDB é uma ferramenta poderosa para fazer a análise de dados localmente. Ele não substitui um 
servidor de base de dados robusto, mas torna a análise local muito mais ágil e barata.

O DuckDb deve ser evitado:

1. Quando múltiplas aplicações utilizam a mesma base de dados.
2. Para a escalabilidade, porque não permite o processamento distribuído em múltiplos servidores.
3. Em altas taxas de escrita contínua, pois não é otimizado para a injeção massiva de dados.

Para fazer consultas massivas localmente com alta velocidade, o DuckDB é uma excelente opção e a sua integração na
plataforma Netuno é bem simples e versátil.