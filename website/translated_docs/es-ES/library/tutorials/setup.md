---
id: setup
title: Setup dos Dados
sidebar_label: Setup dos Dados
---

## Introdução

Com o Netuno o desenvolvimento das aplicações passa primeiro pela construção da base de dados, através da construção dos formulário e campos.

E quando se trabalha em equipa ou é preciso passar o desenvolvimento da aplicação para outro ambiente, é necessário criar um backup da base de dados acompanhado do código.

Assim no destino será necessário reconfigurar a base de dados e assim a aplicação vai poder ser executada como foi desenvolvida na sua origem.

O problema deste processo é o esforço de se lembrar sempre de criar um novo backup cada vez que há uma alteração na base de dados. E quantas mais pessoas estão envolvidas no desenvolvimento e/ou quanto mais ambientes há para publicar a aplicação, mais complicado se torna este processo.

Então o Netuno para resolver este problema traz um sistema de *setup* das aplicações, onde gera automaticamente a estrutura da base de dados (*schema*), e adicionalmente permite ser programado manualmente o carregamento dos dados iniciais através de *scripts* adicionais.

Também permite alterar o tipo de servidor de base de dados garantindo que o *setup* será executado com normalidade e a aplicação sem qualquer problema. Isto quer dizer que a aplicação pode ser desenvolvida em H2DataBase e com o schemas gerados automaticamente poderá alterar a conexão da base de dados da aplicação para PostgreSQL ou MariaDB. Na primeira execução da aplicação sobre a nova base de dados tudo será reconstruído, independente da alteração do tipo de servidor de base de dados.

Então permite que a base de dados seja completamente alterada sem ter impacto no desenvolvimento já realizado.

Os ficheiros de programação do _setup_ encontram-se dentro da pasta da aplicação em:

- `server/setup`

## Configuração de Setup nas aplicações

Nas configurações de ambiente das aplicações que ficam em:

- `web/apps/MINHA_APP/config/_development.json`
- `web/apps/MINHA_APP/config/_production.json`

Poderá manipular o comportamento do 'setup' através das configurações:

```
    ...
    "setup": {
        "enabled": true,
        "schema": {
            "auto_create": true,
            "execution": true
        },
        "scripts": {
            "execution": true
        }
    },
    ...
```

##### enabled: boolean | default true

Define se o setup está ativo ou não, e assim ativa ou desativa, na primeira vez que a aplicação será executada, a execução das operações de setup dos dados.

##### schema.auto_create: boolean | default true

Permite ao Netuno saber se deve ou não gerar os ficheiros de schema de base de dados sempre que é criado ou alterado algum formulário ou campo.

##### schema.execution: boolean | default true

Controla se o schema deve ser executado ou não durante as operações de setup realizadas na primeira execução da aplicação.

##### scripts.execution: boolean | default true

Ativa ou desativa a execução dos scripts adicionais durante as operações de setup realizadas na primeira execução da aplicação.

## Schema

Durante a criação ou alteração dos formulários e campos na interface web do Netuno será gerado os ficherios de schema dentro da pasta setup com da seguinte forma:

`server/setup/_schema-NOME_DO_FORMULARIO.js`

Onde haverá um ficheiro *_schema-\*\*\*.js* para cada formulário existente na aplicação.

Estes ficheiros não devem ser alterados manualmente por que são gerados automaticamente pelo Netuno.

Assim, caso altere o conteúdo destes ficheiros, numa próxima geração dos schemas serão substituídos automaticamente e as alterações realizadas diretamente nos ficheiros serão perdidas.

Para a geração automática do schema de base de dados ser executada é preciso certificar-se que a configuração __schema.auto_create__ está ativa, e que a pasta __setup__ existe dentro da pasta __server__.

## Scripts

Scripts de código programado à medida são ficheiros localizados na pasta __setup__ que não comecem com *\_*.

O principal objetivo destes scripts é carregar os dados garantindo que a base de dados contém a informação mínima necessária para o correto funcionamento da aplicação.

Assim quando a aplicação for reconfigurada noutro ambiente será automaticamente carregada com os dados iniciais ficando pronta para começar a sua utilização.

Para realizar estas operações de carregamento de dados deverá utilizar as funções do recurso *_db*.

Os __scripts__ são executados a seguir à execução dos __schemas__.

##### _db.insertIfNotExists

E, para poupar o trabalho de realizar consultas na base de dados, para verificar se poderá ser feito o __insert__ de dados ou não, o Netuno disponibiliza a função __insertIfNotExists__.

Esta função verifica se existem os dados exatamente como eles estão definidos na base de dados, se não existirem então realiza a sua criação.

Um exemplo da sua utilização será carregar os campos __Código__ e __Nome__ do formulário __Tipo de Território__, onde o nome da tabela é __tipo\_territorio__ e tem as colunas __codigo__ e __nome__, para tal bastará criar o ficheiro `MINHA_APP/server/setup/tipo.js` com o seguinte conteúdo:

```
_db.insertIfNotExists("tipo_territorio", _val.init()
    .set("codigo", "1001")
    .set("nome", "Portugal Continental")
)
_db.insertIfNotExists("tipo_territorio", _val.init()
    .set("codigo", "1002")
    .set("nome", "Madeira")
)
_db.insertIfNotExists("tipo_territorio", _val.init()
    .set("codigo", "1003")
    .set("nome", "Açores")
)
```

## Ciclo de Processamento

Como já foi explicado, o *setup* apenas é executado na primeira execução da aplicação.

E a ordem de execução é:

1. *_start* - executa o ficheiro de *start* que está em:
..`MINHA_APP/server/setup/_start.js`
2. *netuno_db* - executa a criação das *tabelas*, *campos* e carregamento de dados obrigatórios para o funcionamento do Netuno em base de dados, ou seja, são todas as tabelas que começam por:
..`netuno_***`
3. *_schema-\** - Executa todos os scripts de *schemas*, que são os scripts que começam com *_schema-*, que contém por exemplo os comandos de criação dos formulários, relatórios e campos, em:
..`MINHA_APP/server/setup/_schema-\*\*\*.js`
4. *scripts* - executa os ficheiros de *scripts* programados à medida, que são os todos os ficheiros de script que não começam com *_* e que provavelmente conterão os __inserts__ de dados iniciais necessários, por exemplo:
..`MINHA_APP/server/setup/meu-script-com-inserts.js`
5. *_end* - executa o ficheiro de *end* que está em:
..`MINHA_APP/server/setup/_end.js`

Ou seja, é permitida a criação de código à medida nos scripts *start* e *end* para realizar algumas operações que façam sentido serem executadas previamente ao setup ou mesmo quando este é concluído.

Convém reforçar que este ciclo de processamento é executado sempre que a aplicação é executada pela primeira vez, por isso é que é necessário garantir a verificação da existência dos dados antes de realizar a sua criação.

Certifique-se que as seguintes *configurações* de ambiente se encontram ativas para permitir a execução deste processo nos ficheiros `MINHA_APP/config/_development.json` ou `MINHA_APP/config/_production.json` consoante o ambiente:

* Ativa ou desativa completamente a execução de qualquer operação de setup:
..`setup.enabled = true|false`
* Ativa ou desativa a execução dos *_schemas-*:
..`setup.schema.execution = true|false`
* Ativa ou desativa a execução dos *scripts*:
..`setup.scripts.execution = true|false`

## Conclusão

O processo de *setup* das aplicações no Netuno tem como principais funções:

* *netuno_db*: garantir que as tabelas e campos necessários para o funcionamento do Netuno estejam bem definidas na base de dados que está a ser executada.
* *_schema-*: gera automaticamente toda a estrutura de formulários e relatórios com os seus repectivos campos, que permitem garantir toda a coerência da estrutura da base de dados da aplicação, principalmente quando a aplicação é executada com uma nova base de dados vazia.
* *scripts*: realizar operações de base de dados para garantir que a aplicação contém os dados obrigatórios previamente carregados sempre que é executada pela primeira vez.

Desta forma o Netuno permite que as aplicações funcionem em novos ambientes, mesmo que altere o tipo de base de dados, garantindo o correto funcionamento da aplicação sem a necessidade de realizar __backups__ e __restore__ das base de dados.

Permitindo adicionalmente que todo o código de configuração gerado de forma automática e manual seja versionado com o GIT, por exemplo.
