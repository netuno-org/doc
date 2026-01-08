---
sidebar_position: 4
id: queries-interface
title: Queries Interface
---


A ferramenta de Query do Netuno é um recurso poderoso que permite a interação direta com o banco de dados da aplicação através de SQL (Structured Query Language). 

Essa funcionalidade é essencial para testar lógicas de negócio, validar informações armazenadas e estabelecer as bases para relatórios ou componentes de interface complexos. O Netuno suporta atualmente três sistemas de gestão de base de dados: **PostgreSql, H2 Database e MySQL**.

## 1 - Seção Query

Em modo de “Construir”, no menu lateral, acesse a área de “Gestão” e clique na seção "Query”.

![query-queries-interface-pt.png](/docs/assets/academy/ui/queries/query-queries-interface-pt.png)

## 2 - Área de Comandos

Esta área, é o ambiente de interação direta com a base de dados do projeto. Aqui é possível executar comandos para consultar, buscar e analisar dados de forma precisa e instantânea. 

Certifique-se de que a sintaxe utilizada é compatível com o banco de dados configurado no seu ambiente Netuno.

![query-database-query-area-pt](/docs/assets/academy/ui/queries/query-database-query-area-pt.png)

## 3 - Área de Validação

A área de validação fornece feedback instantâneo sobre a sintaxe e a execução do seu código.

- **Sucesso (Verde):** Quando a consulta é executada sem erros de sintaxe ou de estrutura, a mensagem é exibida com o fundo na cor verde. Isso indica que os dados foram processados e estão prontos para visualização.

![query-validation-area-success-pt-at.png](/docs/assets/academy/ui/queries/query-validation-area-success-pt-at.png)

- **Falha ou Erro (Vermelho):** Se houver qualquer impedimento na execução (como erro de sintaxe, nome de coluna incorreto ou falta de permissão), a mensagem será exibida com o fundo na cor vermelha. Além da cor, o sistema apresentará o log de erro técnico para auxiliar no diagnóstico.

![query-validation-area-fail-pt-at.png](/docs/assets/academy/ui/queries/query-validation-area-fail-pt-at.png)

## 4 - Área de Resultado

É o local onde as informações solicitadas ao banco de dados são apresentadas de forma estruturada. Ela permite que você visualize o conteúdo das tabelas e confirme se a lógica da sua consulta está retornando os registros esperados.

![query-result-area-pt.png](/docs/assets/academy/ui/queries/query-result-area-pt.png)

## 5 - Botões de Ação

Esta seção detalha as ferramentas disponíveis para executar, salvar e gerenciar seus scripts SQL, otimizando o fluxo de trabalho e a reutilização de consultas complexas.

Ele permite não apenas a execução de comandos em tempo real, mas também a gestão inteligente de produtividade por meio de registros históricos e bibliotecas de scripts salvos.

![query-action-buttons-pt-at.png](/docs/assets/academy/ui/queries/query-action-buttons-pt-at.png)

### 5.1 Botão - Executar

- **Função:** Envia o script presente na área de "Comandos" para ser processado pelo banco de dados.

- **Feedback:** Após a execução, o sistema exibe uma mensagem de sucesso (em verde) e popula automaticamente a "Área de Resultado" com os dados solicitados.

### 5.2 Botão - Histórico

- **Função:** Registra as queries executadas recentemente, exibindo o tempo de execução (em milissegundos) e o registro de "data/hora" de cada ação.

- **Recuperação Rápida:** Ao clicar em qualquer registro da lista de histórico, o script correspondente é inserido novamente na área de "Comandos" para ser executado ou editado.

![query-command-history-button-pt-at.png](/docs/assets/academy/ui/queries/query-command-history-button-pt-at.png)

### 5.3 Botão - Salvar

**Função:** Permite armazenar scripts úteis e transformá-los em modelos permanentes. Isso é útil para consultas complexas que necessitam serem executadas com frequência.

**Passo a Passo para Salvar:**

- Com o script pronto no editor, clique em Salvar.

- Na janela modal "Salvar Comando", insira um "Nome" claro para identificar a função da query (ex: "Filtrar produtos por preço").

- Clique no botão Salvar dentro da modal para confirmar o armazenamento.

![query-save-command-button-pt-at.png](/docs/assets/academy/ui/queries/query-save-command-button-pt-at.png)

### 5.4 Botão - Registro

**Função:** Permite listar todos os scripts que foram salvos anteriormente.

- **Carregar script:** Clique sobre o script desejado para adicioná-lo à área de "Comandos".

- **Deletar:** Utilize o ícone de lixeira ao lado de cada registro para removê-lo definitivamente após a confirmação.

![query-registered-commands-button-pt-at.png](/docs/assets/academy/ui/queries/query-registered-commands-button-pt-at.png)