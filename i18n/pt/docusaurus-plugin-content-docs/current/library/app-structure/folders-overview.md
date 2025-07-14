---
sidebar_position: 1
id: folders-overview
title: Visão geral das Pastas
sidebar_label: Visão Geral
---

Explore e conheça as pastas e arquivos das aplicações.

## Estrutura

A partir da raíz de onde o Netuno é instalado, podemos encontrar a pasta `📂 apps`.

Dentro da pasta de `📂 apps` é onde ficam todas as aplicação disponíveis na plataforma Netuno.

Há aplicações que podem ser criadas localmente enquanto que outras podem ser externas, por exemplo aplicações que 
são clones de repositórios do GIT. 

Veja a partir da raíz do Netuno a estrutura completa de uma aplicação recém criada:

<pre class="doc-structure__tree">
<span>./<b>netuno</b>/</span>
&nbsp;<span>├─ ./<b>apps</b>/</span>
&nbsp;│   <span>└─ ./<b>demo</b>/</span>
&nbsp;│   │   <span>└─ ./...</span>
&nbsp;│   <span>└─ ./<b>minha_app</b>/</span>
&nbsp;│       <span>├─ ./<b>config</b>/</span>
&nbsp;│       <span>├─ ./<b>db</b>/</span>
&nbsp;│       <span>├─ ./<b>docs</b>/</span>
&nbsp;│       <span>└─ ./<b>public</b>/</span>
&nbsp;│       │   <span>├─ ./<b>images</b>/</span>
&nbsp;│       │   <span>├─ ./<b>scripts</b>/</span>
&nbsp;│       │   <span>└─ ./<b>styles</b>/</span>
&nbsp;│       <span>└─ ./<b>server</b>/</span>
&nbsp;│       │   <span>├─ ./<b>actions</b>/</span>
&nbsp;│       │   <span>├─ ./<b>components</b>/</span>
&nbsp;│       │   <span>├─ ./<b>core</b>/</span>
&nbsp;│       │   <span>├─ ./<b>reports</b>/</span>
&nbsp;│       │   <span>├─ ./<b>services</b>/</span>
&nbsp;│       │   <span>├─ ./<b>setup</b>/</span>
&nbsp;│       │   <span>└─ ./<b>templates</b>/</span>
&nbsp;│       <span>├─ ./<b>storage</b>/</span>
&nbsp;│       <span>└─ ./<b>ui</b>/</span>
&nbsp;│           <span>└─ ./<b>src</b>/</span>
&nbsp;│               <span>├─ ./<b>components</b>/</span>
&nbsp;│               <span>├─ ./<b>containers</b>/</span>
&nbsp;│               <span>└─ ./<b>styles</b>/</span>
&nbsp;<span>└─ ./...</span>
</pre>

> Na pasta `apps` contem todas as aplicações disponíveis no Netuno.

Inicialmente nesta pasta já existe a aplicação `demo`, que como o nome indica trata-se de uma **demo**_nstração_ de 
funcionalidades do Netuno.
 
Quando é criada uma nova aplicação, é adicionada uma nova pasta contendo a mesma hierarquia de subpastas, como foi 
apresentado acima. 

## Pastas Principais

Dentro da pasta da aplicação temos as principais pastas, onde cada uma delas tem uma finalidade específica.

As principais pastas são:

- [📂 config](config) - Configurações gerais;
- [📂 dbs](dbs) - Coisas relacionadas com base de dados;
- [📂 docs](docs) - Documentação e outros documentos no geral;
- [📂 public](public) - Conteúdo público disponível diretamente através de URL, como imagens, JavaScript e CSS;
- [📂 server](server) - Código de backend, como serviços, jobs, templates, reports, e toda a API no geral.
- [📂 storage](storage) - Organização de arquivos que estão relacionados com dados ou que são utilizados em código.
- [📂 ui](ui) - Interface de usuário do backoffice, código de frontend como dashboards e outras funcionalidades.

