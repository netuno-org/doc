---
sidebar_position: 2
id: forms
title: Formulários
---

## Como criar formulários

A gestão de formulários é a área onde você pode criar e administrar as estruturas de dados da sua aplicação. Cada formulário que você cria aqui se torna uma interface no back-office para inserir, editar e visualizar dados, além de corresponder a uma tabela no banco de dados.

Está dividido em dois passos essenciais e obrigatórios, acompanhado de uma pequena abordagem ao **agrupamento de formulários** e do **modo diagrama**.

![form-management-pt.png](/docs/assets/academy/ui/forms/form-management-pt.png)

## 1 - Título do Formulário

É o nome do seu formulário, portanto, insira um nome claro e intuitivo. 
Ele será exibido no menu lateral do backoffice nas seguintes seções: **Formulários** (no modo de Visualizar) e **Gerir Campos** (no modo de Construir).

![form-name-title-pt.png](/docs/assets/academy/ui/forms/form-name-title-pt.png)


## 2 - Nome da Tabela

É o nome técnico que será usado para criar a tabela correspondente no banco de dados. Este nome é usado internamente pelo sistema e por desenvolvedores.

**Como preencher:**

- **Manual:** Digite um nome único no singular, com letras minúsculas e sem espaços ou caracteres especiais (use o formato `snake_case`, por exemplo: cadastro_cliente).
- **Automático:** Marque a caixa **Auto** ao lado do campo. O sistema irá gerar automaticamente um nome técnico baseado no **Título do formulário**. Esta é a prática recomendada para manter a consistência.
- 

![form-name-table-pt.png](/docs/assets/academy/ui/forms/form-name-table-pt.png)

## 3 - Agrupamento de formulários (Pai)

Este campo permite criar uma hierarquia entre formulários. Ao selecionar um "Pai", você está definindo que o formulário atual é um sub-item do formulário selecionado. Ele será exibido no menu lateral nas seguintes seções: "Formulários" (no modo de Visualizar) e "Gerir Campos" (no modo de Construir) do formulário principal associado.

**Como preencher:**

- Deixe em branco se este for um formulário principal (como "Cliente").
- Selecione um formulário existente na lista se quiser criar um relacionamento de dependência. Por exemplo, um formulário "Endereços" poderia ter "Cliente" como pai.

![form-grouping-parent-pt.png](/docs/assets/academy/ui/forms/form-grouping-parent-pt.png)

## 4 - Opções de Controle

Estas caixas de seleção ativam funcionalidades específicas para o formulário.

- **Mostrar Id:** Marque esta opção se desejar que o campo de identificação única (ID) de cada registro seja visível na listagem de dados do formulário.
- **Controlo por Ativo:** Ativa um controle de status (Ativo/Inativo) para cada registro. Isso permite desativar um item sem precisar excluí-lo do banco de dados.
- **Controlo por Usuário:** Faz com que cada registro criado no formulário seja associado ao usuário que o criou. É útil para rastrear quem realizou cada cadastro.
- **Controlo por Grupo:** Associa cada registro a um grupo de usuários. Esta opção é comumente usada para gerenciar permissões de acesso aos dados com base nos grupos cadastrados no sistema.

![form-control-options-pt.png](/docs/assets/academy/ui/forms/form-control-options-pt.png)

## 5 - Configurações de ordenação e usuários associados

Estes campos definem valores padrão para novos registros e a ordem de exibição.

- **Reordenar:** Defina um número para a ordem em que este formulário aparecerá no menu lateral. Números menores (como 0, 1, 2) aparecem primeiro.
- **Usuário:** Selecione um usuário padrão que será associado aos novos registros, caso o "Controlo por Usuário" esteja ativado. "Geral" significa que não há um usuário específico.
- **Grupo:** Selecione um grupo padrão que será associado aos novos registros, caso o "Controlo por Grupo" esteja ativado. "Geral" significa que não há um grupo específico.

![form-sort-settings-and-associated-users-pt.png](/docs/assets/academy/ui/forms/form-sort-settings-and-associated-users-pt.png)

## 6 - Modo Diagrama

A tela de **Diagrama** oferece uma visualização gráfica de toda a estrutura de dados da sua aplicação. Conhecido como Diagrama de Entidade-Relacionamento (DER), ele exibe todos os formulários (que representam tabelas no banco de dados), seus respectivos campos e as conexões entre eles.
Esta ferramenta é fundamental para entender rapidamente como as informações da sua aplicação estão organizadas e conectadas, facilitando a análise e o desenvolvimento.

![form-diagram-pt.png](/docs/assets/academy/ui/forms/form-diagram-pt.png)

> Experimente criar vários formulários, campos e visualize no modo diagrama!

## Passo Seguinte

Guarde o formulário e passe para o passo seguinte: criação de campos!

Veja [aqui](/docs/academy/ui/fields) como começar a criar campos.
