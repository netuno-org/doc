---
id: server
title: Server
sidebar_label: Server
---

Desenvolvimento do backend e API.

## Pasta do Servidor

A pasta `📂 server` contém um conjunto de arquivos e pastas que formam o backend da aplicação.

Tudo que está na pasta `📂 server` é utilizado no processamento do servidor de backendm, como integrações, API,
base de dados, segurança e autenticação, Cron Jobs, entre muitos outros.

## Estrutura da Pasta

Na pasta `📂 server` encontra-se a seguinte estrutura:

<pre class="doc-structure__tree">
<span>./<b>server</b>/</span>
&nbsp;<span>├─ ./<b>actions</b>/</span>
&nbsp;<span>├─ ./<b>components</b>/</span>
&nbsp;<span>├─ ./<b>core</b>/</span>
&nbsp;│   <span>├─ ./<b>_config.js</b></span>
&nbsp;│   <span>├─ ./<b>_init.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_close.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_end.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_error.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_start.js</b></span>
&nbsp;│   <span>├─ ./<b>_request_url.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_config.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_end.js</b></span>
&nbsp;│   <span>├─ ./<b>_service_error.js</b></span>
&nbsp;│   <span>└─ ./<b>_service_start.js</b></span>
&nbsp;<span>├─ ./<b>reports</b>/</span>
&nbsp;<span>├─ ./<b>services</b>/</span>
&nbsp;<span>├─ ./<b>setup</b>/</span>
&nbsp;│   <span>├─ ./<b>_end.js</b></span>
&nbsp;│   <span>└─ ./<b>_start.js</b></span>
&nbsp;<span>└─ ./<b>templates</b>/</span>
&nbsp;    <span>├─ ./<b>&#95;</b>/</span>
&nbsp;    <span>├─ ./<b>dev</b>/</span>
&nbsp;    │   <span>└─ ./<b>dashboard.html</b></span>
&nbsp;    <span>├─ ./<b>dashboard.html</b></span>
&nbsp;    <span>├─ ./<b>scripts.html</b></span>
&nbsp;    <span>├─ ./<b>scripts_dev.html</b></span>
&nbsp;    <span>├─ ./<b>scripts_login.html</b></span>
&nbsp;    <span>├─ ./<b>styles.html</b></span>
&nbsp;    <span>├─ ./<b>styles_dev.html</b></span>
&nbsp;    <span>└─ ./<b>styles_login.html</b></span>
</pre>

## Actions

Nas `📂 actions` pode ser adicionado acções customizações à medida (_hooks_) nas operações de CRUD dos formulários 
gerados automaticamente para o backoffice, de acordo com a estrutura de dados muita intervenção de dados pode ser
feita aqui.

Por exemplo ao revemor um cliente é necessário remover todas as suas encomendas, ou ao criar um novo produto deve 
ser integrado com outro sistema. Enfim, qualquer desenvolvimento relacionado diretamente com dados pode ser feito
aqui.

As actions são inspiradas nas `triggers` de base de dados só que ao nível da execução de código.

Portanto pode ser programado operações específicas na criação, alteração e remoção de dados.

## Components

Os `📂 components` são utilizados para definir tipos customizados de campos nos formulários de backoffice, que 
podem realizar a própria manipulação de dados.

Pode ser criado componentes através de scripts para fornecer um novo tipo de campo específico na aplicação.

## Core

A pasta `📂 core` permite a injeção de código no fluxo de processamento dos pedidos HTTP.

Também é utilizada para partilhar código entre os diversos serviços e outros.

O `_config.js` é executado após a configuração ser carregada em cada pedido HTTP, é executado após o script de 
configuração da ambiente que encontra-se na pasta `📂 config` da aplicação.

O `_init.js` serve para injetar alguma instrução quando a aplicação é inicializada pela primeira vez.

### Processamento dos pedidos HTTP

No fluxo de processamento dos pedidos HTTP para qualquer URL da aplicação é executado os respectivos scripts:

- `_request_start.js` é executado quando o pedido HTTP chega ao servidor do Netuno.
- `_request_url.js` é executado quando a URL é processada pelo Netuno, pode ser alterada a URL para outro destino.
- `_request_close.js` é executado quando a resposta ao pedido HTTP é fechada.
- `_request_end.js` é executado quando o pedido HTTP é concluído definitivamente.
- `_request_error.js` é executado quando acontece algum erro no processamento do pedido HTTP.

### Processamento dos Serviços de API

No fluxo de processamento de qualquer serviço de API da aplicação é executado os seguintes scripts:

- `_service_config.js` é executado antes de iniciar a execução do serviço, serve para definir as configurações de 
execução do serviço entre outras coisas. Pode ser definido se o serviço pode ou não ser executado, ou seja um 
controle de segurança no acesso ao serviço da API.
- `_service_start.js` é executado logo que algum serviço começa a ser processado.
- `_service_end.js` é executado depois que é finalizado o processamento de algum serviço.
- `_service_error.js` é executado quando acontece algum erro no processamento de algum serviço.

## Services - API

É na pasta `📂 services` que são criados os serviços que formam a API aplicacional. 

Os serviços podem ser escritos em diversas linguagens Javascript, Python, Java, Kotlin, Ruby ou Groovy.

Como o Netuno é poliglota qualquer arquivo de script pode ser alterado para outra linguagem de programação
suportada, basta ter a extensão dos arquivos de acordo com a linguagem.

Não são necessárias configurações adicionais em função da linguagem de programação usada, basta criar o arquivo 
do serviço com a extensão correcta correspondente com a linguagem de programação.

## Setup

Na pasta `📂 setup` é onde fica o código gerado automaticamente pelo motor do Netuno que definem os schemas de 
base de dados, e também é onde podemos colocar o carregamento de dados que é essencial para o fucionamento da 
aplicação.

O script `_start.js` é executado antes de iniciar o processamento de construção da base de dados.

O script `_end.js` é executado após o processamento de construção da base de dados ser finalizado.

De acordo com a construção da estrutura de dados o Netuno cria aqui na pasta de `📂 setup` automaticamente o código 
necessário para toda a estrutura de dados ser recriada em uma nova base de dados, ou recriar algo que falte em 
outra base de dados que a aplicação seja eventualmente executada. 

 ## Templates

A pasta `📂 templates` contém o contéudo HTML das páginas de backoffice da aplicação, que são geradas pelo servidor
do Netuno.

Na pasta `📂 dev` contém o arquivo `dashboard.html` que permite a alteração da área de trabalho no modo de  
construção do desenvolvedor.

O `dashboard.html` que está na raíz dos templates contém o HTML da área de trabalho geral do backoffice.

### Templates Nativos

Na pasta `📂 _` qualquer template geral pode ser substituído, ou seja os templates padrão do Netuno podem ser 
alterados.

- [Aqui tem os templates nativos do Netuno.](https://github.com/netuno-org/platform/tree/main/bundle/base/web/netuno/templates/sbadmin)

Se o nome de pastas e/ou de arquivos coincidir com os dos templates nativos dentro desta pasta, então é utilizado
o template que encontra-se nesta pasta em vez do template nativo.

Ou seja, basta replicar a mesma estrutura do template nativo dentro da pasta `📂 _` para substitui-lo.

### Scripts

Os templates de scripts injetam arquivos de código JavaScript no fim das páginas com o seguinte propósito:

1. `scripts.html` adicionar código JavaScript no fim da página de **backoffice**.
2. `scripts_dev.html` adicionar código JavaScript no fim da página da **área de construção do desenvolvedor**.
3. `scripts_login.html` adicionar código JavaScript no fim da página de **login**.

### Styles

Os templates de styles injetam arquivos de estilos no início das páginas com o seguinte propósito:

1. `styles.html` adicionar código CSS no início da página de **backoffice**.
2. `styles_dev.html` adicionar código CSS no início da página da **área de construção do desenvolvedor**.
3. `styles_login.html` adicionar código CSS no início da página de **login**.
