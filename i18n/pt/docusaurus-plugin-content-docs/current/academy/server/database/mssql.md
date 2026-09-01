---
id: mssql
title: Microsoft SQL Server
sidebar_label: MSSQL
---

## Configuração do MSSQL no Docker

Certifique-se de que o Docker está instalado. O comando seguinte descarrega a imagem atual do SQL Server 2025 para Linux a partir do Microsoft Container Registry:

```
docker pull mcr.microsoft.com/mssql/server:2025-latest
```

E para iniciar o novo container execute o seguinte comando:

```
docker run -d --name mssql_server --hostname mssql_server -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=Secret123' -p 1433:1433 mcr.microsoft.com/mssql/server:2025-latest
```

Consulte o [guia oficial dos containers Linux do SQL Server](https://learn.microsoft.com/pt-pt/sql/linux/quickstart-install-connect-docker?view=sql-server-ver17).

O valor de `MSSQL_SA_PASSWORD` define a palavra-passe do utilizador `sa`.

A palavra-passe deve ter entre 8 e 128 caracteres e conter caracteres de pelo menos três destes conjuntos: maiúsculas, minúsculas, dígitos e símbolos. Caso não cumpra esta política, o SQL Server para durante a configuração.

Após a inicialização do container, conecte-se com a ferramenta `sqlcmd` incluída na imagem:

```
docker exec -it mssql_server /opt/mssql-tools18/bin/sqlcmd -S localhost -U sa -P "Secret123"
```

Substitua `Secret123` pela palavra-passe do `sa` configurada ao criar o container. Não exponha uma palavra-passe de produção real no histórico da shell.

## Criar uma nova aplicação

Para criar uma nova aplicação no Netuno conectada ao Microsoft SQL Server, siga os passos normais de criação de uma nova aplicação no Netuno e escolha o motor de base de dados MSSQL.

Assim siga os passos do tutorial: 

Depois de escolher o motor de base de dados MSSQL será pedido os dados para realizar a conexão à base de dados em MSSQL.

Como por exemplo:

![app-create](/docs/assets/academy/server/database/mssql/app-create.jpg)

## Alterar a configuração de aplicações

Para uma aplicação poder trabalhar com o MSSQL e passar assim a utilizar o MSSQL como base de dados principal da aplicação, altere as configurações de ambiente em:

```
/web/app/SUA_APP/config/_development.json
/web/app/SUA_APP/config/_production.json
/web/app/SUA_APP/config/_SEU_AMBIENTE.json
```

A configuração deverá ser feita da seguinte forma:

```
    ...
    "db": {
        "default": {
            "password": "Secret123",
            "engine": "mssql",
            "host": "localhost",
            "name": "netuno_test",
            "username": "sa"
        },
        ...
    },
    ...
```

Caso queira conectar como uma base de dados alternativa e não principal, então troque o _"default"_ para o nome desejado para esta conexão.

## Instâncias

Se precisar conectar com uma instância específica do MSSQLSRV então acrescente na configuração da conexão o valor `instance`, como por exemplo:

```
    ...
    "db": {
        "default": {
            "password": "Secret123",
            "engine": "mssql",
            "host": "localhost",
            "instance": "nome-da-minha-instancia",
            "name": "netuno_test",
            "username": "sa"
        },
        ...
    },
    ...
```

