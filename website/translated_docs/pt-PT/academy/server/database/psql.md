---
id: psql
title: PostgreSQL
sidebar_label: PostgreSQL
---

## Introdução

O <a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a> é uma das bases de dados open source de objetos-relacional mais utilizadas.

## Instalação

Informações de como instalar o PostgreSQL.

#### Ubuntu

Execute no terminal:

```shell
sudo apt install postgresql
```

#### Windows

Instale o servidor de base de dados:

- <a href="https://www.enterprisedb.com/downloads/postgres-postgresql-downloads" target="_blank">PostgreSQL Database Download</a>.

Instale o cliente do PostgreSQL <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

## Cliente

Conecte no PostgreSQL para executar comandos de gestão no servidor de base de dados.

#### Ubuntu

Execute no terminal:

```shell
sudo -u postgres psql
```

#### Windows

Instale e utilize o <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

## Criar Utilizador

Execute o seguinte comando conectado ao cliente do PostgreSQL:

```sql
create user app_user with password 'S3cR3t';
```

## Criar a Base de Dados

Execute o seguinte comando conectado no cliente do PostgreSQL:

```sql
create database app_db with owner app_user;
```

> Para sair utilize o comando: `\q`

## Configurar a Base de Dados

Conecte na nova base de dados criada utilizando a aplicação cliente do PostgreSQL.

#### Ubuntu

Execute o seguinte comando no terminal:

```shell
sudo -u postgres psql app_db
```

#### Windows

Instale e utilize o <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>.

### Instalar extensão UUID

É necessário instalar no PostgreSQL a extensão para gerar os UUID.

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

## Configurar a Aplicação

Edite o ficheiro de configuração da aplicação de acordo com o ambiente:

- `config/_development.json`

Exemplo da configuração para o PostgreSQL:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "pg",
            "port": "5432",
            "host": "localhost",
            "name": "app_db",
            "username": "app_user",
            "password": "S3cR3t"
        }
    },
    ...
}
```

Pode ser utilizada configurações avançadas como:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "pg",
            "port": "5432",
            "host": "localhost",
            "name": "app_db",
            "username": "app_user",
            "password": "S3cR3t",
            "maximumPoolSize": 100,
            "minimumIdle": 1,
            "idleTimeout": 10000,
            "maxLifetime": 60000
        }
    },
    ...
}
```
