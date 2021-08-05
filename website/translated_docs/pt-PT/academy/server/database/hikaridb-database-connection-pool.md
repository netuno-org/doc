---
id: hikaricp-database-connection-pool
title: HikariCP - Database Connection Pool
sidebar_label: DB Connection Pool
---

## O que é

Criar novas conexões à base de dados exige um certo processamento principalmente quando há autenticação.

Por isso para conseguir maior ganho de performance convém reutilizar as conexões e não abrir constantemente uma nova conexão.

Para resolver este problema é utilizado pool de conexões, que faz com que quando uma conexão é descartada esta não é realmente fechada e destruída, então a conexão é colocada em espera para ser reutilizada quando for preciso uma nova conexão.

Isto trás grandes ganhos de performance e também permite muitos mais parâmetros de configurações, incluindo o mais conhecido que é limitar o máximo de conexões para evitar sobrecarga na base de dados.

## HikariCP

Hikari significa Luz em japonês, é o mais eficiente e amplamente utilizado em aplicações Java, e é famoso por ter de longe a melhor performance.

O repositório oficial do HikariCP pode ser encontrado aqui no [GitHub](https://github.com/brettwooldridge/HikariCP), verifique os gráficos de performance e a informação sobre as configurações.

O Netuno utiliza o HikariCP para gerir as conexões ao PostgreSQL, MariaDB, Microsoft SQL Server e Oracle.

## Configuração

A configuração do HikariCP no Netuno é feita junto da configuração da base de dados nas aplicações.

Ou seja, dentro da aplicação na pasta `config` na configuração do ambiente, como:

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
            "maximumPoolSize": 25,
            "minimumIdle": 1,
            "idleTimeout": 10000,
            "maxLifetime": 60000
        }
    }
...
```

Por exemplo, cada uma destas configurações extras do HikariCP acima servem para:

* O `maximumPoolSize` define o tamanho máximo de conexões no HikariCP, neste exemplo o limite de conexões será 25.
* O `minimumIdle` define o número mínimo de coneções pendentes na fila de espera para ser utilizada.
* O `idleTimeout` é o tempo que a conexão pode ficar em espera.
* O `maxLifetime` é o tempo máximo de vida da conexão.

> As configurações do HikariCP devem estar coerentes com a configuração do motor da base de dados.
> Por exemplo, o número máximo de conexões e os tempos limites jamais devem ultrapassar ao que está definido no motor da base de dados.

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

Esta propriedade controla o número máximo em milissegundos que um cliente (que és tu) irá esperar por uma ligação a partir do pool. Se este tempo for excedido sem que uma ligação esteja disponível, será lançada uma SQLException. O tempo limite de ligação mais baixo aceitável é de 250 ms. 

Padrão: `30000 (30 segundos)`

##### idleTimeout

Esta propriedade controla a quantidade máxima de tempo em que uma ligação é permitida para ficar ociosa no pool. **Esta definição só se aplica quando o `minimumIdle` é definido para ser inferior ao `maximumPoolSize`.** As ligações ociosas não serão retiradas quando o pool atingir as ligações `minimumIdle`. Se uma ligação é retirada como inactiva ou não, está sujeita a uma variação máxima de +30 segundos, e variação média de +15 segundos. Uma ligação nunca será reformada como ociosa antes deste tempo limite. Um valor de 0 significa que as ligações ociosas nunca são removidas do pool. O valor mínimo permitido é de 10000ms (10 segundos). 

Padrão: `600000 (10 minutos)`

##### maxLifetime

Esta propriedade controla a vida útil máxima de uma ligação no pool. Uma ligação em uso nunca será retirada, só quando estiver fechada é que será então removida. Numa base de ligação por ligação, é aplicada uma atenuação negativa menor para evitar a extracção de massa no pool. **Recomendamos vivamente a definição deste valor, e deve ser vários segundos mais curto do que qualquer limite de tempo de ligação imposto por uma base de dados ou infra-estrutura.** Um valor de 0 indica um tempo de vida máximo (duração infinita), sujeito evidentemente, à definição de `idleTimeout`. O valor mínimo permitido é de 30000ms (30 segundos). 

Padrão: `1800000 (30 minutos)`

##### minimumIdle

Esta propriedade controla o número mínimo de ligações ociosas que o HikariCP tenta manter no pool. Se as ligações ociosas caírem abaixo deste valor e o total de ligações no pool for inferior ao tamanho `maximumPoolSize`, o HikariCP faz o melhor esforço para adicionar ligações adicionais de forma rápida e eficiente. No entanto, para um desempenho máximo e capacidade de resposta às exigências do pico, recomendamos não definir este valor e, em vez disso, permitir que o HikariCP atue como um conjunto de ligações de tamanho fixo. 

Padrão: o mesmo que o tamanho `maximumPoolSize`

##### maximumPoolSize

Esta propriedade controla o tamanho máximo que o pool pode atingir, incluindo tanto as ligações ociosas como as em uso. Basicamente, este valor determinará o número máximo de ligações reais ao backend da base de dados. Um valor razoável para isto é melhor determinado pelo seu ambiente de execução. Quando o pool atingir este tamanho, e não houver ligações ociosas disponíveis, as chamadas para getConnection() serão bloqueadas até à `connectionTimeout` milissegundos antes do tempo limite.

Padrão: `10`

### Pouco Utilizados

##### initializationFailTimeout

Esta propriedade controla se o pool irá "falhar rapidamente" se o pool não puder ser seeded com sucesso com uma ligação inicial. Qualquer número positivo é considerado como o número de milissegundos para tentar adquirir uma ligação inicial; o fio de aplicação será bloqueado durante este período. Se uma ligação não puder ser adquirida antes deste intervalo de tempo, será lançada uma excepção. Este tempo limite é aplicado após o período de `connectionTimeout`. Se o valor for zero (0), o HikariCP irá tentar obter e validar uma ligação. Se uma ligação for obtida, mas falhar a validação, será lançada uma exceção e o pool não será iniciado. No entanto, se não for possível obter uma ligação, o pool iniciará, mas os esforços posteriores para obter uma ligação podem falhar. Um valor inferior a zero contornará qualquer tentativa inicial de ligação, e o pool iniciará imediatamente enquanto tenta obter ligações em segundo plano. Consequentemente, os esforços posteriores para obter uma ligação podem falhar. 

Padrão: `1`

##### catalog

Esta propriedade define o catálogo padrão para bases de dados que suportam o conceito de catálogos. Se esta propriedade não for especificada, é utilizado o catálogo predefinido definido pela driver JDBC. 

Padrão: `driver default`

##### validationTimeout

Esta propriedade controla o período máximo de tempo que uma ligação será testada quanto à sua vivacidade. Este valor deve ser menor do que o tempo de `connectionTimeout`. O tempo limite de validação mais baixo aceitável é de 250 ms. 

Padrão: `5000`

##### leakDetectionThreshold

Esta propriedade controla a quantidade de tempo que uma ligação pode estar fora do pool antes de ser registada uma mensagem que indique uma possível fuga de ligação. Um valor de 0 significa que a deteção de fugas está desativada. O valor mais baixo aceitável para permitir a deteção de fugas é de 2000 (2 segundos). 

Padrão: `0`

##### schema

Esta propriedade define o esquema padrão para bases de dados que suportam o conceito de esquemas. Se esta propriedade não for especificada, é utilizado o esquema predefinido definido pela driver do JDBC. 

Padrão: `driver default`

### DataSource

Também é possível adicionar configurações ao DataSource, ou seja configurações adicionais específicas para o tipo de base de dados que está a ser utilizada.

Para realizar esta configuração mais avançada é necessário adicionar o objeto de configuração do `datasource` dentro do objeto de configuração da conexão à base de dados.

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
            "maximumPoolSize": 25,
            "minimumIdle": 1,
            "idleTimeout": 10000,
            "maxLifetime": 60000,
            "datasource": {
                "cachePrepStmts": "true",
                "prepStmtCacheSize": 250,
                "prepStmtCacheSqlLimit": 2048
            }
        }
    }
...
```

> Repare que o valor das configurações dos parâmetros do DataSource são do tipo _string_, de qualquer forma o Netuno converte automaticamente sempre para _string_.

## Conclusão

Com a utilização do HikariCP é possível realizar configurações avançadas para gerir a carga e o comportamento das conexões à base de dados.

Podendo ser otimizado para os cenários mais diversos garantindo a sua alta performance.

