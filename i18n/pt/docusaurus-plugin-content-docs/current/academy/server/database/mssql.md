---
id: mssql
title: Microsoft SQL Server
sidebar_label: MSSQL
---

## Configuração do MSSQL no Docker

Assumindo que já tem instalado o Docker, basta efetuar o download da imagem do container a partir do Microsoft Container Registry com o seguinte comando:

```
sudo docker pull mcr.microsoft.com/mssql/server:2017-latest
```

E para iniciar o novo container execute o seguinte comando:

```
docker run -d --name mssql_server -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Secret123' -p 1433:1433 microsoft/mssql-server-linux
```

O parâmetro *-e 'SA\_PASSWORD=Secret123'* onde está o *Secret123* será a palavra-passe/senha do utilizador/usuário *sa*.

Atenção que a senha deverá conter pelo menos 8 caracteres para cumprir a norma mínima de segurança do MSSQL, caso contrário o container não será inicializado.

Após a inicialização do container certifique-se que o MSSQL está funcionando corretamente e para tal é possível instalar o comando *mssql* através do *NPM*:

```
npm install mssql -g
```

Com isto poderá executar o comando para se conectar ao MSSQL através do terminal:

```
mssql -u sa -p Secret123
```

Atenção! Caso tenha alterado a senha, substitua o *Secret123* pela senha do _sa_ configurada no container.

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

