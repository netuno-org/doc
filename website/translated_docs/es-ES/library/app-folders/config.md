---
id: config
title: Config
sidebar_label: Config
---

## Pasta config

As configuração da aplicação estão disponíveis nesta pasta, consistindo nas parametrizações do Netuno e acesso a componentes externos. Esta directoria tem os ficheiros:

## _development.js

A injeção de código javascript permite configurações dinâmicas através de lógica programática sobre as parametrizações definidas em _development.js. Como por exemplo a utilização de um idioma diferente com base no utilizador com sessão iniciada.

Este ficheiro será utilizado quando definida a configuração do ambiente de desenvolvimento. 

## _development.json

Definição das parametrizações da aplicação como o idioma e as configurações de recursos externos por esta utilizado. Como por exemplo, configurações de bases de dados, cronjobs, acessos a servidores SMTP ou API's remotas, entre outros. 

Este ficheiro será utilizado quando definida a configuração do ambiente de desenvolvimento. 


## _production.js

A injeção de código javascript permite configurações dinâmicas através de lógica programática sobre as parametrizações definidas em _development.js. Como por exemplo a utilização de um idioma diferente com base no utilizador com sessão iniciada.

Este ficheiro será utilizado quando definida a configuração do ambiente de produção. 

## _production.json

Definição das parametrizações da aplicação como o idioma e as configurações de recursos externos por esta utilizado. Como por exemplo, configurações de bases de dados, cronjobs, acessos a servidores SMTP ou API's remotas, entre outros. 

Este ficheiro será utilizado quando definida a configuração do ambiente de produção. 

## icon.png

Ícone da aplicação no separador do browser (favicon).