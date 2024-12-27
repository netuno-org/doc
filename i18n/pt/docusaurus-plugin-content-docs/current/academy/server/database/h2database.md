---
id: h2database
title: H2Database
sidebar_label: H2Database
---

## Introdução

A grande vantagem do H2Database é que não precisa de um servidor de base de dados por que permite funcionar de forma embutida nas aplicações.

> O H2Database é recomendo apenas para fins de desenvolvimento e testes, em produção deverá ser utilizado outro tipo de base de dados mais consistente.

## Recomendações e Limitações

O H2Database não permite mais do que um únido processo aceda ao ficheiro de base de dados.

Assim caso for manipular o ficheiro ou aceder pela consola web terá que parar a execução do Netuno.

## Ficheiros de Base de Dados

Os ficheiros de base de dados do H2Database ficam dentro da pasta `dbs`, que está dentro da aplicação, por exemplo:

- `apps/minha_app/dbs`

Caso queira renomear a base de dados altere o nome do ficheiro e corrija as configurações da aplicação, por exemplo no ambiente de _development_:

- `config/_development.json`

A correção deve ser feita na parte da configuração da conexão à base e dados:

```
    ...
    "db": {
        "default": {
            "password": "",
            "engine": "h2",
            "port": "",
            "host": "",
            "name": "minha_db",
            "username": ""
        }
    }
    ...
```

## Web Console

Pode ser necessário acessar a base de dados diretamente, neste caso será possível através da consola web do H2Database.

A consola web é iniciada ao executar diretamente o _jar_ do H2Database da seguinte forma:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server`

> É assumido que está na raíz do Netuno.

Para visualizar as opções disponíveis:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server -?`

Inicia a consola web no porto do Netuno **9000** e permite e acesso de IPs externos:

`java -cp web/WEB-INF/lib/h2-*.jar org.h2.tools.Server -webPort 9000 -tcpAllowOthers`

> Deverá para a execução do Netuno antes para evitar que múltiplos processos manipulem o ficheiro de base de dados.

A JDBC URL para conectar na base de dados deverá ser:

`jdbc:h2:./apps/minha_app/dbs/minha_db;MODE=PostgreSQL;CASE_INSENSITIVE_IDENTIFIERS=TRUE;DATABASE_TO_LOWER=TRUE;DEFAULT_NULL_ORDERING=HIGH;DB_CLOSE_ON_EXIT=TRUE;`

> Substituir a parte da `minha_app` pelo nome da app e `minha_db` pelo nome da base de dados correspondente.

A autenticacão será o utilizador `sa` mas sem password.


### Resetar os acessos

Especialmente quando perde-se o acesso do utilizador de `dev`.

Aceda através da consola web do H2Database como descrita acima.

Para recriar o acesso apague os dados da tabela `netuno_user`, por exemplo:

- `delete from netuno_user`
 
Assim o Netuno vai recriar os utilizadores com as respectivas passwords padrão quando for iniciado novamente.

