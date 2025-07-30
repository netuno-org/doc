---
id: mariadb
title: MariaDB (MySQL)
sidebar_label: MariaDB (MySQL)
---

## Introdução

<a href="https://mariadb.org/" target="_blank">MariaDB</a> é o banco de dados relacional inovador open-source compatível com **MySQL**.

## Instalação

Como instalar o MariaDB.

#### Ubuntu

Execute no terminal:

```shell
sudo apt install mariadb-server
```

#### Windows

Faça o download e instale o MariaDB:

- <a href="https://mariadb.com/downloads/" target="_blank">MariaDB Download</a>

## Cliente

Conecte no MariaDB para executar comandos de gestão no servidor de base de dados.

#### Ubuntu

Execute no terminal:

```shell
sudo mariadb
```

#### Windows

Abra a app `Command Prompt MariaDB` e execute:

```shell
mariadb -u root -p
```

Ou procure por `MySQL Client` ou `MariaDB Client`.

## Criar a Base de Dados

Execute o seguinte comando conectado no cliente da MariaDB:

```sql
CREATE DATABASE app_db
```

## Criar Utilizador

Execute o seguinte comando conectado ao cliente da MariaDB:

```sql
CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'S3cR3t';
```

Para dar o acesso geral do utilizador na base de dados que foi criada, execute:

```sql
GRANT ALL PRIVILEGES ON app_db.* TO 'app_user'@'localhost';
```

Atualize os privilégios de acesso:

```sql
FLUSH PRIVILEGES;
```

> Para sair utilize o comando: `\q`

## Configurar a Aplicação

Edite o ficheiro de configuração da aplicação de acordo com o ambiente:

- `config/_development.json`

Exemplo da configuração de base de dados para MariaDB:

```javascript
{
    ...
    "db": {
        "default": {
            "engine": "mariadb",
            "port": "3306",
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
            "engine": "mariadb",
            "port": "3306",
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

> Veja mais sobre as [configurações de conexão à Base de Dados com o HikariCP](./hikaricp-database-connection-pool).
