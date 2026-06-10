---
sidebar_position: 5
id: relate
title: Relacionar Dados
description: Relacione tarefas e registros de horas para saber quem executou qual tarefa e quanto tempo foi gasto.
---

# Relacionar Dados

Crie uma relação entre tarefas e registros de horas para saber **quem** executou **qual tarefa** e **quanto tempo** foi gasto.

Ao final desta etapa, o formulário **Registro** estará relacionado à tabela **Tarefa**, permitindo visualizar a tarefa associada diretamente na listagem de registros.

## Pré-Requisitos

Antes de começar, verifique se você já concluiu:

- A criação do formulário **Tarefa** com o campo `nome`.
- A criação do formulário **Registro** com os campos básicos de horas trabalhadas.
- A configuração das tabelas correspondentes no **Banco de Dados**.

:::tip
Para mais detalhes sobre como relacionar dados, consulte o [Guia de Interface: Relações](/docs/academy/ui/relationships-between-forms).
:::

Até aqui, você criou uma gestão de tarefas e um registro de horas, mas cada lista ainda funciona de forma isolada.  

É importante relacioná-los, de modo que cada registro de horas indique claramente qual tarefa foi realizada por um colaborador e em qual período.

Nesta etapa, você vai:

- Criar um campo do tipo `select` no formulário **Registro**.
- Configurar o campo para se relacionar com a tabela **Tarefa**.
- Atualizar alguns dados para ver a relação funcionando na prática.

## Campo do Tipo `select`

Adicione um campo que permitirá selecionar a tarefa associada a cada registro de horas.

1. No ambiente **Construir**, abra o formulário **Registro** e acesse a gestão de campos.
2. Crie um novo campo com as seguintes configurações:
   - **Título do Campo**: `Tarefa`
   - **Nome da Coluna**: `tarefa_id`
   - **Tipo**: `select`
3. Ative a opção **Obrigatório** para garantir que todo registro esteja associado a uma tarefa.
4. Mantenha a opção de **Valores Únicos** desativada, pois haverá muitos registros para a mesma tarefa.

:::note
Sugerimos o nome `tarefa_id` para manter um padrão consistente de nomenclatura em todo o modelo de dados.
:::

## Usar o Sufixo `_id`

O nome do campo que faz referência a outro registro deverá terminar com `_id`.  
Esse padrão facilita identificar que o campo representa uma relação com outra tabela e deixa o modelo de dados mais organizado.

:::warning
Evite usar nomes genéricos como `tarefa` ou `ref_tarefa` para campos de relação.  
Padronizar com `_id` ajuda a evitar confusão quando você estiver analisando dados ou criando integrações.
:::

## Configurar o Link de Relação

Configure o **Link**, que é o responsável por relacionar o campo `tarefa_id` com a tabela de tarefas.

1. No campo recém-criado (`tarefa_id`), role até a seção de configuração de **Link**.
2. Clique em **Adicionar**.
3. Na janela que se abrir:
   - Selecione a opção **tarefa**.
   - Em seguida, selecione o campo **nome**.
   - Feche a janela para aplicar.

Ao finalizar, o **Link** será definido como:

```text
tarefa:nome
```

Isso significa que:

- O relacionamento será feito com a tabela **tarefa**.
- Na interface, será exibido o valor do campo **nome** da tarefa ao selecionar no campo `Tarefa`.

Clique no botão **Salvar** para salvar a configuração do campo.

:::tip
Sempre que possível, utilize um campo descritivo (como `nome`) para exibir a informação relacionada, em vez de um identificador técnico ou numérico.
:::

## Atualizar Registros

Com o campo de relação configurado, ajuste os dados para visualizar o resultado.

1. Acesse a visualização do formulário **Registro**.
2. Note que agora a tabela de resultados possui uma nova coluna chamada **Tarefa**, que inicialmente estará vazia.
3. Edite alguns registros:
   - Clique sobre uma linha na tabela de resultados para abrir o formulário de edição.
   - No campo **Tarefa**, selecione a tarefa correspondente.
   - Clique em **Salvar** para salvar.

**Depois de salvar:**

- A coluna **Tarefa** na tabela de resultados passará a exibir o nome da tarefa associada.
- Cada **Registro** ficará claramente relacionado a uma **Tarefa**, permitindo uma análise mais completa do tempo gasto em cada atividade.

:::note
Caso existam muitos registros sem tarefa definida, considere fazer a atualização em lotes ou definir uma tarefa padrão temporária, de acordo com a sua política de dados.
:::

### Resultado Esperado

A listagem de **Registro** deverá exibir:

- Uma coluna **Tarefa** preenchida com os nomes das tarefas associadas.
- Cada linha representando um registro de horas com sua respectiva tarefa, tornando mais simples identificar onde o tempo foi investido.

## Próximos Passos

No próximo tópico, você verá como criar um **Serviço** para expor esses dados e utilizá-los em outras partes da aplicação, como relatórios ou interfaces personalizadas.