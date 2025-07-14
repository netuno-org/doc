---
id: config
title: Config
sidebar_label: Config
---

Arquivos de configurações gerais da aplicação.

## Pasta das Configurações

As configuração da aplicação estão disponíveis na pasta `📂 config`, é onde são realizadas as parametrizações 
gerais da aplicação e das integrações externas.

O Netuno suporta diversos tipos de ambientes, por padrão utilizamos o `development` (desenvolvimento) e o de
`production` (produção), 

O ambiente ativo é definido no `config.js` que encontra-se na raíz da instalação do Netuno:

```javascript title="netuno/config.js"
...
config.env = 'development'
...
```

Pode ser utilizado qualquer nome para definir o ambiente, sendo que as aplicações precisam ter o mesmo
nome de ambiente como nome dos arquivos (`.json` e `.js` na pasta de `📂 config` da aplicação.

Por padrão, nesta pasta encontramos os seguintes arquivos:

## _development.js

A injeção de código JavaScript que permite realizar configurações dinâmicas através da lógica programática 
sobre as parametrizações definidas no arquivo `_development.json`. Por exemplo definir alguma configuração
com base em informações que estão em base de dados, definir a parametrização do comportamento da execução 
de código, entre outros.

Este arquivo é utilizado dependendo da definição do ambiente, caso seja o de `development` (desenvolvimento). 

## _development.json

Definição das parametrizações da aplicação como o idioma, as configurações gerais de recursos e intregrações.
Como por exemplo, configurações de bases de dados, Cron Jobs, integrações com SMTP ou API's remotas, autenticação,
entre muitos outros. 

Este arquivo é utilizado dependendo da definição do ambiente, caso seja o de `development` (desenvolvimento).

## _production.js

A injeção de código JavaScript permite realizar configurações dinâmicas através de lógica programática sobre as 
parametrizações definidas em `_production.js`. Por exemplo definir a configuração com informações que estão em 
base de dados, parametrização do comportamento da execução de código, entre outros. 

Este arquivo é utilizado dependendo da definição do ambiente, caso seja o de `production` (produção). 

## _production.json

Definição das parametrizações da aplicação como o idioma, as configurações gerais de recursos e intregrações.
Como por exemplo, configurações de bases de dados, Cron Jobs, integrações com SMTP ou API's remotas, autenticação,
entre muitos outros.

Este arquivo é utilizado dependendo da definição do ambiente, caso seja o de `production` (produção).
