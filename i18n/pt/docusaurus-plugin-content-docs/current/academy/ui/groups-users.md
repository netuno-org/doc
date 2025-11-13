---
sidebar_position: 6
id: groups-users
title: Grupos e Usuários
---

## Criação/Edição de Grupos e Usuários 

Esta seção aborda a criação e a edição de senhas, grupos, usuários e a visualização de históricos de registros (log), bem como o controle de suas permissões de acesso, visando simplificar e organizar o gerenciamento.

Este menu dá acesso às configurações da sua própria conta e a informações de sistema. É necessário acessar o “modo visualizar” e clicar em "Developer" no canto superior direito da tela. 

### Requisitos
- **Acesso ao Netuno:** É necessário estar logado na sua instância do Netuno.
- **Aplicação Criada:** É necessário ter uma aplicação previamente criada. Se ainda não tem, siga os tutoriais anteriores de criação de apps.
- **Formulários:** Tenha pelo menos um ou dois formulários criados pois vamos usá-los como exemplo para definir permissões.

![access-menu-pt.png](/docs/assets/academy/ui/groups-users/access-menu-pt.png)

## Senha

Permite que você altere sua própria senha de acesso ao sistema. Ao clicar em "Developer" no canto superior direito da tela, acesse a seção de “Senha”.

- Digite sua senha atual.
- Insira sua nova senha. É necessário que contenha no mínimo 8 caracteres incluindo números, letras maiúsculas e minúsculas, e caracteres especiais.
- Confirme a senha e clique no botão **Salvar**. Após esta ação, exibirá uma mensagem de sucesso.

![password-pt.png](/docs/assets/academy/ui/groups-users/password-pt.png)

## Usuário

É o centro de controle para o gerenciamento de contas de usuário. Ao clicar em "Developer" no canto superior direito da tela, acesse a seção de “Usuário”.

### Requisitos
- Ter permissão de administrador para acessar e modificar usuários.

**Editar usuário existente:** Um menu para selecionar um usuário já cadastrado e carregar seus dados para edição.

**Como editar um usuário:** Selecione um usuário cadastrado e altere as informações existentes. Clique no botão ”Salvar” para confirmar a alteração. Após esta ação, uma mensagem de sucesso será exibida.

**Adicionar novo usuário:** Os campos básicos de identificação da conta (Nome, Usuário, Senha, Email, Grupo).

#### Como adicionar um novo usuário
Na seção "Adicionar novo usuário", preencha todos campos:

- **Nome:** O nome completo da pessoa.
- **Usuário:** O nome de login (apenas com letras minúsculas e separadas com ponto, exemplo: zuly.silva).
- **Senha:** A senha de acesso. (deverá ter no mínimo 8 caracteres, incluindo: letras minúsculas e maiúsculas, números e caracteres especiais).
- **Email:** O email de contato.
- **Nenhuma:** Permite desativar a senha de acesso ao sistema.  
- **Grupo:** Selecione o grupo principal ao qual o usuário pertence (exemplo: "Administrador", "Gerente").
- **Ativo:** Marque esta opção para permitir que o usuário faça login.
- **Permissões:** Configure as permissões de acesso.
- **Botão de Salvar:** Clique para salvar o novo usuário no sistema.

## Permissões de Usuário 

A seção com abas ("Formulários" e "Relatórios") permite definir as permissões detalhadas para o usuário selecionado ou que está sendo criado.

#### Aba Formulários
Controla o acesso aos formulários de entrada de dados para cada formulário listado, ex:(Automobilismo, Veículos, Cadastro), defina as permissões:

- **Ativo:** Marque se o usuário deve ter acesso a este formulário (ele aparecerá no menu lateral para ele).
- **Ler:** Defina o que ele pode ler.
- **Escrever:** Defina o que ele pode criar ou editar.
- **Deletar:** Defina o que ele pode excluir.

#### Aba Relatórios
Controla o acesso aos relatórios de visualização de dados. Clique na aba "Relatórios" (ao lado de "Formulários") e marque "Ativo" para os relatórios que o usuário devará ter permissão para visualizar.

- **Salvar:** Clique no botão "Salvar" no final da página.

## Botões de Ação

**Salvar:** Salva todas as alterações realizadas.

**Limpar:** Limpa todos os campos do formulário, revertendo para o estado inicial de "Adicionar novo usuário".

**Personificar:** Uma ferramenta poderosa do Netuno. Após salvar as permissões de um usuário, você pode clicar em "Personificar" para visualizar o sistema exatamente como o usuário cadastrado irá utilizar. Isso é essencial para testar se as permissões foram configuradas corretamente.

**Deletar:** Remove permanentemente o registro do usuário.

![create-and-edit-users-pt.png](/docs/assets/academy/ui/groups-users/create-and-edit-users-pt.png)

## Grupo

Esta página é usada para criar e gerenciar grupos de usuários. Um "Grupo" é um perfil (como "Administradores", "Vendas", "Clientes" ou "Gerentes") que define um conjunto de regras e acessos. Isso torna o gerenciamento de permissões muito mais fácil e organizado. 

Esta seção permite duas ações principais: “Adicionar” um novo grupo ou “Editar” um grupo cadastrado. 
Ao clicar em "Developer" no canto superior direito da tela, acesse a seção de “Grupo”.

### Requisitos
- Ter permissão de administrador para criar ou modificar grupos de usuários.

#### Como Adicionar um Novo Grupo

- Localize a seção "Adicionar".
- **Nome:** Dê um nome claro e descritivo para o grupo (exemplo: "Equipe de Vendas", "Gerência", "Supervisão").Configurar Opções: Defina as opções principais para este grupo: 
- **Permitir o Login:** Marque esta opção se os usuários deste grupo devem ser capazes de fazer login no sistema.
- **Administrador:** Marque esta opção apenas se os usuários deste grupo tiverem acesso total ao sistema (super-usuários).
- **Ativo:** Marque esta opção para ativar as configurações no sistema.
- **Email:** Insira um email de contato para o grupo (opcional, pode ser um email de distribuição como "vendas@suaempresa.com"). Clique no botão "Salvar".

#### Como Editar um Grupo Existente

- Selecione o grupo cadastrado no input  "Editar grupo existente" no topo da página.
- Clique na caixa de seleção "Selecionar um grupo".
- Escolha o grupo que deseja editar na lista.
- Aguarde os dados do grupo preencherem automaticamente os campos (Nome, Email e as opções).
- Faça as alterações que desejar (exemplo: desativar um grupo antigo mudando "Ativo" ou alterar seu nome).
Após fazer as alterações, clique em "Salvar".

![create-and-edit-groups-pt.png](/docs/assets/academy/ui/groups-users/create-and-edit-groups-pt.png)

## Histórico de Registros (Log)

A tela "Histórico de Registros" é a ferramenta de log e auditoria da sua aplicação. Ao clicar em "Developer" no canto superior direito da tela, acesse a seção de “Log”.

Quando um usuário criar, editar ou deletar um registro em qualquer formulário (exemplo: "Cliente", "Produto", etc.), o sistema salvará um "log" dessa ação. Esta página permite que você pesquise e filtre todo esse histórico. Isso é essencial para:

> *Segurança:* Monitorar atividades suspeitas ou não autorizadas.

> *Auditoria:* Manter um registro de conformidade de todas as alterações de dados.

> *Diagnóstico:* Entender como um registro específico chegou ao seu estado atual (exemplo: "quem excluiu este cliente?").

#### Como Pesquisar o Histórico de Registros

Preencha um ou mais campos (filtros) para encontrar os registros de log que deseja e, em seguida, clicar em "Pesquisar".

- Acesse a página "Histórico de Registros".
- Preencha os filtros desejados para limitar sua busca. Não é necessário preencher todos os campos. Exemplo: Para ver tudo que o usuário "Developer" fez hoje:
- Selecione "Developer" no campo Usuário.
- No campo Início, selecione a data de hoje e a hora "00:00".
- No campo Fim, selecione a data de hoje e a hora "23:59".
- Clique no botão "Pesquisar".
- Os resultados (a lista de logs) serão exibidos abaixo do formulário de pesquisa.

![log-pt.png](/docs/assets/academy/ui/groups-users/log-pt.png)

## Sair

Clique em “Sair” para encerrar a sua sessão no sistema de forma segura. Ao clicar em "Developer" no canto superior direito da tela, acesse a seção de Sair.
