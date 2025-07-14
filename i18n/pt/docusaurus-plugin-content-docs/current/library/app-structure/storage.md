---
id: storage
title: Storage
sidebar_label: Storage
---

Arquivos integrados no código ou em base de dados.

## Armazenamento Geral

A pasta `📂 storage` tem a finalidade de guardar de forma segura arquivos gerais que são úteis no processamnto da
aplicação.

## Estrutura da Pasta

Na pasta `📂 storage` encontra-se a seguinte estrutura:

<pre class="doc-structure__tree">
<span>./<b>storage</b>/</span>
&nbsp;<span>├─ ./<b>database</b>/</span>
&nbsp;<span>└─ ./<b>filesystem</b>/</span>
&nbsp;    <span>├─ ./<b>private</b>/</span>
&nbsp;    <span>├─ ./<b>public</b>/</span>
&nbsp;    <span>└─ ./<b>server</b>/</span>
</pre>

## Base de Dados

A pasta `📂 database` é utilizada para armazenar arquivos ou imagens relacionados com a base de dados.

Não é prático armazenar diretamente em base de dados os arquivos, por que comprometem os backups e a sincronização
de dados, aumentando consideravelmente o tamanho da base de dados devido ao espaço ocupado por muitos arquivos no
geral.

Por isso qualquer formulário de dados que tenha algum campo de upload de arquivo ou imagem, o arquivo final fica 
organizado e guarados aqui, e apenas o nome final do arquivo é guardado no campo da base de dados.

Caso a estrutura de dados contenha arquivos, então para realizar o backup total da aplicação é preciso fazer o 
backup desta pasta além do backup da base de dados.

## Sistema de Arquivos Gerais

Na pasta `📂 filesystem` permite organizar com restrições de acesso aos arquivos gerais que são úteis para a
aplicação.

Qualquer arquivo que seja útil diretamente no código da aplicação deve ser guardado aqui. 

As restrições estão divididas em: 

### Privado

A pasta `📂 private` só deve ser acedida para leitura ou escrita por usuários autenticados na aplicação.

### Público

A pasta `📂 public` é útil para o acesso externo.

### Servidor

A pasta `📂 server` só permite a leitura e escrita a partir de código interno da aplicação.

Assim sendo, nenhum utilizador interno ou externo acede ao seu conteúdo.

O seu conteúdo é somente acessível através do código.
