---
id: hikaricp-database-connection-pool
title: HikariCP - Database Connection Pool
sidebar_label: DB Connection Pool
---

## O que é

Criar novas conexões à base de dados exige um certo processamento ainda mais quando há autenticação.

Por isso para conseguir maior ganho de performance convém reutilizar as conexões e não abrir sempre uma nova conexão constantemente.

Para resolver este problema existe é utilizado pool de conexões, que faz com que quando uma conexão é descartada está não é realmente fechada e destruída, então a conexão é colocada em espera para ser reutilizada quando for preciso uma nova conexão.

Isto trás grandes ganhos de performance e também permite muitos mais parâmetros de configurações, incluindo o mais conhecido que é limitar o máximo de conexões para evitar sobrecarga na base de dados.

## HikariCP

Hikari significa Luz em japonês e é o mais eficiente e amplamente utilizado em aplicações Java, é famoso por ter de longe a melhor performance.

O repositório ofical do HikariCP pode ser encontrado aqui no [GitHub](https://github.com/brettwooldridge/HikariCP), verifique os gráficos de performance e a informação sobre as configurações.

O Netuno utilizao o HikariCP para gerir as conexões ao PostgreSQL, MariaDB, Microsoft SQL Server e Oracle.

## Configuração

A configuração do HikariCP no Netuno é feita junto da configuração da base de dados nas aplicações.

Ou seja, dentro da aplicação na pasta config na configuração do ambiente, como:

- \_development.json
- \_production.json

Na secção "db", contém as configurações de base de dados.

Tanto para a conexão default como para qualquer outra pode ser efetuado a configuração dos parâmetros do HikariCP da mesma forma.

Assim dentro do default, onde tem o host, port, name (database), username e password, basta acrescentar mais parâmetros do HikariCP como:

```
...
    "db": {
        "default": {
            "engine": "pg",
            "host": "localhost",
            "port": 5432,
            "name": "my_database",
            "username": "my_user",
            "password": "secret",
            "maximumPoolSize": 100
        }
    }
...
```

> O maximumPoolSize define o tamanho máximo de conexões no HikariCP, neste exemplo o limite de conexões será 100.

Qualquer outro parâmetro do HikariCP pode ser configurado desta mesma forma, basta acrescentar os parâmetros de configuração pretendidos.

## Parâmetros

Abaixo contém a lista de parâmetros que o Netuno permite configurar para o HikariCP.

Qualquer outro parâmetro de configuração do HikariCP ou é pré definidos pelo Netuno automaticamente ou não é aplicável.

### Utilizados Frequentemente

##### autoCommit

Esta propriedade controla o comportamento de confirmação automática padrão das conexões retornadas do pool.
É um valor booleano.
Padrão: `true`

##### connectionTimeout

##### idleTimeout

##### maxLifetime

##### minimumIdle

##### maximumPoolSize

### Pouco Utilizados

##### initializationFailTimeout

##### catalog

##### validationTimeout

##### leakDetectionThreshold

##### schema

### DataSource

Também é possível adicionar configurações ao DataSource, ou seja configurações adicionais specíficas para o tipo de base de dados que está sendo utilizado.

Para realizar esta configuração mais avançada é adicionar o objecto de configuração do `datasource` dentro do objeto de configuração da conexão à base de dados.

Por exemplo, assim:

```
...
    "db": {
        "default": {
            "engine": "mariadb",
            "host": "localhost",
            "port": 3306,
            "name": "my_database",
            "username": "my_user",
            "password": "secret",
            "maximumPoolSize": 100,
            "datasource": {
                "cachePrepStmts": "true",
                "prepStmtCacheSize": "250",
                "prepStmtCacheSqlLimit": "2048"
            }
        }
    }
...
```

> Repare que o valor das configurações dos parâmetros do DataSource são do tipo _string_, de qualquer forma o Netuno converterá sempre utomaticamente para _string_.

## Conclusão

Com a utilização do HikariCP é possível realizar configurações avançadas para gerir a carga e o comportamento das conexões à base de dados.

Podendo ser otimizado para os cenários mais diversos garantindo a alta performance.

