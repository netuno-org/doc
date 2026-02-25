---
sidebar_position: 6
id: groups-users
title: Grupos e Usuários
---

## Criação e Edição 

Esta seção é o centro administrativo da sua aplicação. Aqui, você gerencia as credenciais, os níveis de privilégio e audita as atividades realizadas no sistema, garantindo que cada usuário tenha acesso exatamente ao que precisa.

#### Requisitos
- **Acesso ao Netuno:** É necessário estar logado na sua instância e ter permissão de **Administrador**.
- **Aplicação Criada:** É necessário ter uma aplicação previamente criada. Saiba mais: [Guia de Interface: Criar Aplicação](/docs/academy/app-create).
- **Formulários:** Tenha pelo menos um ou dois formulários criados. Saiba mais: [Guia de Interface: Criar Formulário](/docs/academy/ui/forms).

### Menu

Permite acessar as configurações para a gestão de segurança, usuários, grupos e monitoramento de logs. 

![access-menu-pt.png](/docs/assets/academy/ui/groups-users/access-menu-pt.png)

Acesse o “modo visualizar” e clique em "Developer" no canto superior direito da tela. 

## Senha

Permite a alteração da senha de acesso ao sistema.

Ao clicar em "Developer" no canto superior direito da tela, acesse a seção “Senha”.

- Digite sua senha antiga.
- Insira sua nova senha. **Deverá ter no mínimo 8 caracteres incluindo números, letras maiúsculas e minúsculas, e caracteres especiais.**
- Confirme a senha e clique no botão **Salvar**. 
- Após esta ação, exibirá uma mensagem de sucesso.

![password-pt.png](/docs/assets/academy/ui/groups-users/password-pt.png)

## Usuário

Esta seção é o centro de controle para o gerenciamento de perfis de usuários. 

Ao clicar em "Developer" no canto superior direito da tela, acesse a seção “Usuário”.

#### Requisitos

- O usuário a ser editado deve estar previamente cadastrado no banco de dados.

 ### 1 - Editar usuário existente

Esta seção descreve como localizar e atualizar as informações de um usuário que já possui cadastro no sistema.

![edit-existing-user-pt.png](/docs/assets/academy/ui/groups-users/edit-existing-user-pt.png)

**Como editar um usuário:**

- Selecione um usuário cadastrado e altere as informações desejadas.
- Clique no botão **Salvar** para confirmar a alteração.
- Após esta ação, uma mensagem de sucesso será exibida.

### 2 - Adicionar novo usuário

Esta seção permite registrar novos usuários, definindo suas credenciais de acesso e níveis de permissão dentro do sistema.

![create-new-user-pt.png](/docs/assets/academy/ui/groups-users/create-new-user-pt.png)

- **Nome:** Insira o nome do usuário.
- **Usuário:** Insira o nome para login - deve conter apenas letras minúsculas e separadas com um ponto.
- **Senha:** Insira a primeira senha de acesso ao sistema do novo usuário. 
- **Email:** Insira o email de contato.
- **Nenhuma:** Permite bloquear a senha do usuário para não efetuar o login.  
- **Grupo:** Selecione o grupo principal ao qual o usuário pertence. 
- **Ativo:** Permite ativar ou desativar um usuário no sistema.
- **Botão de Salvar:** Clique para salvar as informações do novo usuário.

### 3 - Permissões do Usuário 

A gestão de permissões é feita através de uma interface intuitiva organizada por abas **(Formulários e Relatórios)**. 

Isso permite que você configure detalhadamente o que o usuário pode acessar logo após sua criação ou durante uma edição.

Nas colunas de **Ler, Escrever e Deletar,** você encontrará um menu suspenso com diferentes níveis de abrangência:

- **Nada:** O usuário não possui nenhuma permissão para esta ação.
- **Dono:** O usuário só pode interagir com registros que ele mesmo criou.
- **Grupo:** O usuário pode interagir com registros criados por qualquer membro do seu grupo.
- **Tudo:** Permissão total. O usuário acessa os registros de todos os usuários e grupos.

#### Aba Formulários

Nesta aba, você controla a interação do usuário com os módulos de entrada de dados da aplicação.

![user-permissions-forms-pt.png](/docs/assets/academy/ui/groups-users/user-permissions-forms-pt.png)

Para cada formulário listado, você deve definir os seguintes parâmetros:

- **Ativo:** Define a visibilidade. Se marcado, o formulário aparecerá no menu lateral para o usuário.
- **Ler:** Estabelece o nível de permissão apenas para visualização dos registros.
- **Escrever:** Define se o usuário tem permissão para inserir novos dados ou editar informações existentes.
- **Deletar:** Define se o usuário possui autoridade para remover registros do banco de dados.

#### Aba Relatórios

Semelhante aos formulários, esta aba controla o acesso aos módulos de visualização e extração de dados analíticos.

![user-permissions-report-pt.png](/docs/assets/academy/ui/groups-users/user-permissions-report-pt.png)

Para que um relatório fique disponível, a opção **Ativo** deve estar selecionada para que o usuário tenha permissão para visualizar.

- **Salvar:** Clique no botão "Salvar" para guardar as alterações.

### 4 - Botões de Ação

![action-buttons-pt.png](/docs/assets/academy/ui/groups-users/action-buttons-pt.png)

 - **Salvar:** Salva todas as alterações realizadas.

 - **Limpar:** Limpa todos os campos do formulário, revertendo para o estado inicial de "Adicionar novo usuário".

 - **Personificar:** Uma ferramenta poderosa do Netuno. Após salvar as permissões de um usuário e clicar no botão **"Personificar"**, é possível visualizar o sistema exatamente como o usuário cadastrado irá utilizar. Isso é essencial para testar se as permissões foram configuradas corretamente.

 - **Deletar:** Remove permanentemente o registro do usuário.

## Grupo

Aqui é o painel central para o gerenciamento de perfis de acesso no Netuno, permitindo executar duas ações: **“Adicionar”** um novo grupo e **“Editar”** um grupo existente. 

Um grupo funciona como um perfil ou regra de acesso que determina o que cada conjunto de usuários pode visualizar ou realizar dentro do sistema.

Em vez de configurar permissões individualmente para cada usuário, você as define no grupo e vincula os usuários a ele, garantindo uma administração escalável e organizada.

Ao clicar em **"Developer"** no canto superior direito da tela, acesse a seção de **"Grupo"**.

#### Requisitos

- **Acesso Administrativo:** É necessário possuir um perfil com permissões de administrador para criar ou modificar grupos.

### Como Adicionar um Novo Grupo

![add-new-group-pt.png](/docs/assets/academy/ui/groups-users/add-new-group-pt.png)

- Localize a seção "Adicionar".
- **Nome:** Dê um nome claro e descritivo para o grupo. 
- **Permitir o Login:** Marque esta opção se os usuários deste grupo devem ser capazes de realizar login no sistema.
- **Administrador:** Marque esta opção apenas se os usuários deste grupo tiverem acesso total ao sistema.
- **Email:** Insira um email de contato para o grupo.
- **Ativo:** Marque esta opção para ativar as configurações no sistema.
- **Botão-Salvar:** Clique para salvar as configurações do grupo.
- **Botão-Limpar:** Clique para limpar todos os campos do formulário.

### Como Editar um Grupo Existente

![edit-existing-group-pt.png](/docs/assets/academy/ui/groups-users/edit-existing-group-pt.png)

- Selecione o grupo cadastrado no input "Editar grupo existente" no topo da página.
- Clique na caixa de seleção "Selecionar um grupo".
- Escolha o grupo que deseja editar na lista.
- Aguarde os dados do grupo preencherem automaticamente os campos (Nome, Email e as opções).
- Faça as alterações que desejar e clique em "Salvar".

## Histórico de Registros

A tela "Histórico de Registros" é a ferramenta de log e auditoria da sua aplicação. 

Quando um usuário criar, editar ou deletar um registro em qualquer formulário, o sistema salvará um "log" dessa ação.

Esta página permite que você pesquise e filtre todo esse histórico. Isso é essencial para:

 - **Segurança:** Monitorar atividades suspeitas ou não autorizadas.

 - **Auditoria:** Manter um registro de conformidade de todas as alterações de dados.

 - **Diagnóstico:** Entender como um registro específico chegou ao seu estado atual. Exemplo: "quem excluiu este cliente?".

### Como Pesquisar o Histórico de Registros

![log-pt.png](/docs/assets/academy/ui/groups-users/log-pt.png)

Preencha um ou mais campos "Filtros" para encontrar os registros de log que deseja buscar, em seguida, clique no botão "Pesquisar".

- Acesse a página "Histórico de Registros".
- Preencha os filtros desejados para limitar sua busca. Não é necessário preencher todos os campos. Exemplo: Para ver tudo que o usuário "Developer" fez hoje:
- Selecione "Developer" no campo Usuário.
- No campo Início, selecione a data de hoje e a hora.
- No campo Fim, selecione a data de hoje e a hora.
- Clique no botão "Pesquisar".
- Os resultados (a lista de logs) serão exibidos abaixo do formulário de pesquisa.

## Sair

Clique em “Sair” para encerrar a sua sessão no sistema de forma segura. 