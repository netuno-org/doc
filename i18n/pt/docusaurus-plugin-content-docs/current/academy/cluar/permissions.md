---
sidebar_position: 12
id: permissions
title: Permissões
sidebar_label: Permissões
---

## Introdução

O CLUAR controla o acesso ao backoffice através de **papéis** (grupos), atribuídos a pessoas dentro de uma **organização**. Cada serviço REST do servidor é classificado numa categoria de acesso, e só quem tiver o papel certo, dentro da organização certa, consegue usá-lo.

## Papéis

Existem 5 papéis pré-criados (`user_group`):

| Código | Nome |
|---|---|
| `administrator` | Administrador |
| `editor` | Editor |
| `author` | Autor |
| `contributor` | Colaborador |
| `subscriber` | Assinante |

:::info Nem todos os papéis têm permissões atribuídas ainda
Hoje, só **Administrador** e **Editor** têm acesso a alguma coisa de facto — são os únicos papéis referenciados nas regras de acesso (ver abaixo). Autor, Colaborador e Assinante já existem como opção no formulário, mas ainda não têm nenhum acesso configurado; atribuir um destes papéis a alguém não lhe dá, hoje, acesso a nada no backoffice.
:::

## Organização

Uma pessoa só tem um papel **dentro do contexto de uma organização** — a ligação é feita em `Organização > Membros` (`organization_people`), associando Pessoa + Organização + Papel.

Hoje só existe uma organização, com o código `admins`, e é nela que todas as permissões são verificadas. A entidade `organization` suporta hierarquia (`parent_id`, organizações "pai"), mas essa hierarquia ainda não é usada nas regras de permissão atuais — todas as verificações apontam diretamente para a organização `admins`.

## Primeiro acesso ao modo de edição

O CLUAR distingue dois lugares diferentes onde se faz login:

- O **backoffice do Netuno** (porta `9000` em desenvolvimento) — é onde se gerem diretamente os utilizadores Netuno (`netuno_user`, o par username/password) e todas as entidades, incluindo Pessoa e Papéis.
- A **Área Reservada** do próprio website (`/login`, porta `3000` em desenvolvimento) — é onde o editor de conteúdo entra no dia a dia, para aceder ao modo de edição das páginas.

Para entrar na Área Reservada e ter o modo de edição disponível, é preciso um utilizador Netuno com login que esteja associado a uma **Pessoa**, ligada à organização `admins` com o papel **Administrador** ou **Editor** (ver [Organização](#organização) acima).

### Utilizador padrão

O `server/setup/030-people.js` do CLUAR já cria, por padrão, uma Pessoa "admin" ligada ao utilizador Netuno de `id: 2`, e o `server/setup/050-organization_people.js` já liga essa Pessoa à organização `admins` com o papel **Administrador** — ou seja, esse utilizador já nasce com acesso total.

O login desse utilizador padrão é:

```
utilizador: admin
senha: admin
```

Com essas credenciais, dá para entrar direto na Área Reservada (`/login`) já como Administrador — sem precisar de nenhum passo extra no backoffice do Netuno primeiro.

:::info Muda a senha padrão em produção
`admin`/`admin` é uma credencial conhecida e previsível. Antes de um site ir para produção, muda a senha deste utilizador (ou cria um novo Administrador e desativa este).
:::

### Criar novos utilizadores

Existem dois caminhos possíveis:

**Pela Área Reservada (recomendado):** em `Utilizadores > Criar Utilizador`, um único formulário pede nome, username, password, e-mail, Organização e Papel — e cria tudo de uma vez: o utilizador Netuno, a Pessoa (já ligada a esse utilizador) e o vínculo à organização/papel escolhidos. Não é preciso passar pelo backoffice do Netuno.

**Só pelo backoffice do Netuno:** como o backoffice dá acesso direto a todas as entidades, também é possível fazer os mesmos 3 passos manualmente, sem sair de lá:

1. Criar o utilizador Netuno (`netuno_user`), com o username/password escolhidos.
2. Criar uma **Pessoa**, associando-a a esse utilizador Netuno.
3. Em `Organização > Membros`, associar essa Pessoa à organização `admins`, com o papel Administrador ou Editor.

Em ambos os casos, a pessoa criada já consegue entrar em `/login` e ter acesso ao modo de edição.

## Como as permissões são aplicadas

Cada serviço do servidor é classificado numa destas categorias, definidas em `server/core/_service_config.js`:

| Categoria | Quem tem acesso | Exemplos |
|---|---|---|
| **Públicos** | Qualquer pessoa, sem login | Contacto, avatar, login |
| **Gestão de conteúdo** | Administrador + Editor | Páginas, versões, componentes, dicionário, ações |
| **Administração do site** | Só Administrador | Configurações, idiomas, sincronização |
| **Gestão de acessos** | Só Administrador | Organizações, pessoas, utilizadores |

Qualquer serviço que não esteja listado numa destas categorias é **negado por padrão** — é uma decisão deliberada do código (comentada explicitamente no ficheiro), para que esquecer de classificar um serviço novo resulte em bloqueio, e não em acesso livre por descuido.

:::info As permissões não são aplicadas em ambiente de desenvolvimento
Em ambiente `dev`, o `_service_config.js` liberta todos os serviços logo no início, antes de qualquer verificação — ou seja, **as permissões só são mesmo aplicadas em produção/staging**. Ao testar localmente, qualquer utilizador logado tem acesso a tudo, independentemente do papel.
:::

## Interface: o menu também filtra por permissão

Além do bloqueio no servidor, o menu lateral da Área Reservada (`website/src/components/SideMenu`) também filtra os itens visíveis de acordo com o papel da pessoa logada — para não mostrar opções que ela não teria permissão para usar.

:::info Manter as duas listas sincronizadas
A lista de "quem pode ver o quê" no `SideMenu` é mantida manualmente alinhada com `CONTENT_MANAGEMENT_PATHS`, `SITE_ADMIN_PATHS` e `ACCESS_MANAGEMENT_PATHS` do `_service_config.js` — são duas listas separadas, uma no frontend e outra no backend. Ao adicionar um novo serviço protegido, é preciso atualizar as duas; só mudar o servidor esconde o erro (o menu continua a mostrar uma opção que na prática vai ser negada), e só mudar o menu não protege nada de facto.
:::

## Como proteger um novo serviço

1. Cria o serviço normalmente em `server/services/`.
2. Adiciona o caminho do serviço (`path/method`) à lista correta em `server/core/_service_config.js` — `CONTENT_MANAGEMENT_PATHS`, `SITE_ADMIN_PATHS` ou `ACCESS_MANAGEMENT_PATHS` — conforme quem deve poder usá-lo. Se for público, adiciona a `PUBLIC_PATHS`.
3. Se o serviço tiver um item correspondente no menu da Área Reservada, atualiza também o `SideMenu` para o filtro bater certo com a permissão real.