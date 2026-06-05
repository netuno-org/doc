---
sidebar_position: 3
id: form
title: Formulário
---


# Formulário

Nesta etapa da demonstração, você vai criar o formulário **Tarefa** e configurar o primeiro campo de dados.

:::info Referência
Para uma explicação mais detalhada sobre formulários, consulte o [Guia de Interface: Formulários](/docs/academy/ui/forms).
:::

## Objetivo

Ao concluir esta etapa, você terá:

- Um formulário chamado **Tarefa**.
- Uma tabela associada na banco de dados.
- Um campo obrigatório para armazenar o nome da tarefa.
- Uma interface pronta para criar, editar, pesquisar e remover registros.

## Pré-Requisitos

Verifique que:

- A aplicação de demonstração já foi criada.
- A etapa de configuração já foi concluída.
- Você está na área de desenvolvimento da plataforma.

## Criar o Formulário

1. No canto superior direito, clique em **Construir**.
2. No menu principal, acesse **Gestão > Formulários**.
3. Em **Título do Formulário**, preencha com `Tarefa`.
4. Em **Nome da Tabela**, ative a opção **Auto**.
5. Clique em **Salvar**.

:::note
- **Título do Formulário** define o nome apresentado no menu lateral.
- **Nome da Tabela** define o identificador técnico usado na banco de dados.
:::

Após salvar, o formulário **Tarefa** ficará disponível no menu lateral esquerdo.

## Criar o Primeiro Campo

Com o formulário criado:

1. No menu lateral, clique em **Tarefa**.
2. Em **Nome de Exibição**, preencha com `Nome`.
3. Confirme que o nome técnico foi gerado automaticamente com letras minúsculas.
4. Ative a opção **Chave primária** (campo único).
5. Ative a opção **Não Nulo** (campo obrigatório).
6. Em **Tipo**, selecione `text`.
7. Clique em **Salvar**.

:::tip
- **Chave primária** garante valores únicos para cada registro.
- **Não Nulo** torna o preenchimento obrigatório.
- O tipo `text` permite armazenar texto simples.
:::

## Validar o Resultado

Abra a área de visualização e confirme que:

- O formulário **Tarefa** está disponível.
- O campo **Nome** aparece para preenchimento.
- É possível criar um novo registro.
- O campo **Nome** é obrigatório.

:::info Resultado esperado
Se a configuração estiver correta, o formulário estará pronto para operações de criação, edição, pesquisa e remoção de registros.
:::

## Próximos Passos

Avance para a próxima etapa de **Banco de Dados** para explorar e modificar a aplicação de demonstração.