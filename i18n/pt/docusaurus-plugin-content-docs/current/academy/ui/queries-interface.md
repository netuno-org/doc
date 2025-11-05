---
sidebar_position: 4
id: queries-interface
title: Queries Interface
---


A ferramenta de Query do Netuno é um recurso poderoso que permite a interação direta com o banco de dados da aplicação através de SQL (Structured Query Language). Com ela, é possível executar comandos para consultar, buscar e analisar dados de forma precisa e instantânea. Essa funcionalidade é essencial para testar lógicas, validar informações e estabelecer as bases para relatórios e componentes de interface complexos.

> É necessário ter conhecimentos básicos de comandos SQL e também os formulários criados para consultar a base de dados.

## 1 - Seção de query

Em modo de “Construir”, no menu lateral, acesse a área de “Gestão” e clique na seção "Query”.

![query-queries-interface-pt.png](/docs/assets/academy/ui/queries/query-queries-interface-pt.png)

## 2 - Queries a base de dados

Nesta área, você pode executar comandos SQL no campo de texto principal, desde consultas simples até scripts complexos. 

> As funções devem ser realizadas de acordo com o sistema de gestão de base de dados que está a trabalhar, neste momento o Netuno suporta três tipos de sistemas o PostgreSql, o H2 Database e o MySQL.

![query-database-query-area-pt](/docs/assets/academy/ui/queries/query-database-query-area-pt.png)

## 3 - Área de validação

 Nesta área permite visualizar o feedback quando a execução da consulta é realizada com sucesso ou quando ocorre uma erro.
> - **Caso de sucesso:** A mensagem será exibida com o fundo na cor verde.
> - **Caso de falha:**  A mensagem com o erro correspondente será exibida com o fundo na cor vermelha.

![query-validation-area-pt.png](/docs/assets/academy/ui/queries/query-validation-area-pt.png)

## 4 - Área de resultado

Nesta área os resultados serão exibidos em uma tabela, permitindo uma validação imediata após a execução da consulta.

![query-result-area-pt.png](/docs/assets/academy/ui/queries/query-result-area-pt.png)

## 5 - Botões de ação

### 5.1 Botão Executar

**Função:** Permite enviar o script da área de "comandos" para ser executado no banco de dados. Após esta ação, uma mensagem de "sucesso" e o resultado da consulta serão exibidos na tela.

### 5.2 Botão Histórico

**Função:** Permite visualizar e acessar os registros das queries executadas recentemente, incluindo o tempo de execução (em milissegundos) e a data/hora da execução realizada.

### 5.3 Botão Salvar

**Função:** Permite armazenar o script atual para uso futuro. Isso é útil para consultas complexas que necessitam de executar com frequência. Após clicar no botão, insira um nome para identifcar o registro salvo.

### 5.4 Botão Registro

**Função:** Permite listar todos os scripts que foram salvos anteriormente. E ao clicar no script desejado, o mesmo será adicionado na área de "Comandos" para ser executado. 
O ícone de lixeira permite  remover o registro salvo após a sua confirmação desta ação.

![query-action-buttons-pt.png](/docs/assets/academy/ui/queries/query-action-buttons-pt.png)