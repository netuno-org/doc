---
id: access-permissions
title: Acesso e Permissões
sidebar_label: Acesso e Permissões
---

Como gerir usuários, grupos e garantir a segurança da aplicação.

## Introdução

A segurança é um dos pilares fundamentais de qualquer aplicação. Seja para uma aplicação interna simples ou um sistema complexo com milhares de usuários externos via API. 

O Netuno oferece, nativamente, um sistema robusto de **Controle de Acessos e Permissões**, fornecendo as ferramentas necessárias para gerir a segurança de forma centralizada e eficiente. E elimina a necessidade de desenvolver essas funcionalidades do zero.

Entre os principais mecanismos de segurança destacam-se:

- Gestão de usuários e grupos. 
- Controle de permissões aos dados à gestão de dados. 
- Histórico detalhado das tentativas de autenticação.
- Bloqueio por IP automático após tentativas de acesso falhadas consecutivamente.
- Autenticação integrada com LDAP, Google, GitHub, Discord, etc.
- Módulo de autenticação JWT para front-end.
- Entre outros...

## Gestão de Usuários

Trata-se da administração das contas individuais que acessam a plataforma. Cada usuário, serviço ou integração que precisa entrar no sistema deve possuir um registro de usuário único.

Na área de gestão de usuários do Netuno, você tem controle total sobre o ciclo de vida dessas contas:
- **Criação**: Cadastro de novos membros da equipe ou clientes.
- **Manutenção**: Atualização de e-mails, alteração de senhas e dados cadastrais.
- **Controle de Acesso**: Bloqueio rápido de contas (desativação) sem necessidade de exclusão dos dados históricos.

:::tip Guia Visual 
Para obter informações detalhadas sobre a Gestão de Usuários, consulte o [Guia da Interface: Usuários e Grupos](/docs/academy/ui/groups-users)
:::


## Gestão de Grupos

A definição de regras de autorização é feita por meio de Grupos, que estabelecem quais menus, formulários, serviços e dados cada usuário tem permissão para acessar ou manipular. Em vez de configurar permissões individualmente, o ideal é definir as regras no Grupo e, em seguida, associar os usuários a ele. Esse procedimento garante:

- **Escalabilidade:** Facilidade de gerir centenas de usuários.
- **Segurança:** Menor risco de conceder acessos indevidos acidentalmente.
- **Organização:** Separação clara entre Administradores, Gestores, Supervisores e usuários em geral.

O Netuno já traz grupos nativos como `dev` e `admin`, e fornece total autonomia para criar grupos personalizados para atender às regras de negócio da sua aplicação.

:::tip Guia Visual 
Para obter informações detalhadas sobre a Gestão de Grupos, consulte o [Guia da Interface: Usuários e Grupos](/docs/academy/ui/groups-users)
:::


## Controle de Permissões de Dados

Para garantir a funcionalidade de um grupo ou permissões de um usuário, é crucial estabelecer quais dados ele está autorizado a manipular. No Netuno, o controle de acesso é detalhado e aplicado diretamente aos Formulários (tabelas) da sua aplicação.

O sistema utiliza uma matriz de permissões que possibilita definir, para cada funcionalidade, se um determinado grupo possui a devida autorização para:

- **Ler:** Apenas visualizar os registros.
- **Escrever:** Inserir e editar registros no banco de dados.
- **Deletar:** Remover registros permanentemente.

Essa flexibilidade assegura a proteção dos dados sensíveis, pois cada colaborador tem acesso restrito apenas às informações essenciais para a execução de suas tarefas.

:::tip Guia Visual 
Para obter informações detalhadas sobre como configurar as permissões de dados, consulte o [Guia da Interface: Usuários e Grupos](/docs/academy/ui/groups-users)
:::

## Histórico de Autenticação

Para garantir transparência e controle, todas as tentativas de acesso (bem-sucedidas ou inválidas) são registradas e podem ser consultadas no Histórico de Autenticação.

O sistema monitora e armazena detalhadamente as informações de cada tentativa de login do usuário:

- **IP de Origem:** O endereço de rede de onde partiu a solicitação.
- **Momento:** O momento exato da ação.
- **Acesso:** Se o acesso foi permitido, negado ou bloqueado.

#### Legenda de Ícones de Acesso

🟩 **Cadeado/check_mark, na cor verde:** Indica um sucesso. O usuário forneceu as credenciais corretas e o login foi autorizado. Também indica que o IP de origem foi desbloqueado.

🟧 **Ícone com "X", na cor Laranja:** Indica a quantidade de tentativa inválida.

🟥 **Cadeado na cor Vermelho:** Indica o bloqueio do IP de origem.

## Bloqueio Automático

O Netuno possui um sistema de segurança ativo projetado para proteger sua aplicação contra ataques e acessos não autorizados.

Quando atividades suspeitas são detectadas, como múltiplas tentativas consecutivas de um login inválido, o sistema bloqueia automaticamente o endereço IP de origem. 

Uma vez bloqueado, o IP não conseguirá realizar novas requisições por um período determinado ou até que o bloqueio seja removido manualmente. 

### Configurar Regras de Bloqueio

Essa regra é definida nos **arquivos de configuração** do ambiente da sua aplicação "development.json" ou "production.json".

#### 1. Localize o arquivo de configuração

Na raiz do seu projeto, navegue até a pasta `config`. Abra o arquivo correspondente ao ambiente que deseja proteger:

* Para desenvolvimento: `_development.json`

* Para produção: `_production.json`

#### 2. Insira o código de proteção
Dentro do arquivo JSON, localize a seção `auth`. Se ela não existir, insira o bloco `attempts` conforme o exemplo abaixo:

```json
{
 ...
 "auth": {
    "attempts": {
        "interval": 60,
        "maxFails": 3
    }
  }
}
```

#### 3. Entendendo os parâmetros

* `interval`: Janela de tempo em **minutos** (exemplo: 60 minutos = 1 hora).

* `maxFails`: Número máximo de falhas permitidas dentro desse intervalo antes do bloqueio.


#### 4. Comportamento do sistema

- Após o bloqueio automático, o usuário fica impedido de acessar a aplicação.

- Por padrão, o sistema está configurado para três tentativas inválidas com o bloqueio por uma hora. Após este período as tentativas são liberadas novamente.

- Este processo pode ser configurado conforme a necessidade da sua aplicação.


### Desbloquear pela Interface 

Apenas um usuário com permissão de "Administrador" pode liberar o acesso diretamente pelo Back-Office sem precisar acessar o banco de dados.

1. Acesse o menu da aplicação no modo "Visualizar", e clique na seção de **"Configuração > Usuários"**.
![user-configuration-section-pt.png](/docs/assets/academy/explore/access-permissions/user-configuration-section-pt.png)

2. No campo de **"Editar usuário existente"**, selecione o usuário desejado.
![select-an-existing-user-pt.png](/docs/assets/academy/explore/access-permissions/select-an-existing-user-pt.png)

3. Na seção de **"Histórico de Autenticação"**, verifique se o status "Access" exibe o ícone de "Cadeado" na cor verde;
![section-authentication-history-pt.png](/docs/assets/academy/explore/access-permissions/section-authentication-history-pt.png)

4. Clique no ícone de **Relógio** para verificar a lista completa de acessos do usuário.
![authentication-history-pt.png](/docs/assets/academy/explore/access-permissions/authentication-history-pt.png)

5. Clique no cadeado verde na coluna **"Acesso"** para desbloquear o usuário. Após esta ação, uma mensagem de sucesso é exibida.

A liberação é imediata, permitindo que o usuário tente efetuar o login novamente.


## Autenticações Integradas

Sua aplicação pode exigir métodos mais sofisticados de entrada, especialmente se você estiver construindo um aplicativo móvel ou integrando-se a uma rede corporativa.

O Netuno foi projetado para ser flexível e se integrar ao ecossistema da sua organização. Além do login padrão (usuário e senha), a plataforma oferece suporte a diversos protocolos de autenticação de mercado.

Isso permite implementar estratégias de Single Sign-On (Login Único), onde os usuários acessam o sistema utilizando credenciais que já possuem, centralizando a gestão de acessos.

**Ambientes Corporativos:** Compatibilidade com diretórios de usuários (como LDAP e Active Directory), ideal para intranet e sistemas internos.

**Login Social (OAuth):** Possibilidade de integração com provedores como Google, Microsoft, GitHub, entre outros, facilitando o cadastro e acesso em aplicações públicas.

## Autenticação via Token (JWT)

Para projetos que utilizam um Front-end dedicado (como sites em React, Vue.js ou aplicativos Mobile), a tela de login tradicional do Netuno não é utilizada. Nesses cenários, adota-se o padrão JWT (JSON Web Token). 

O Netuno oferece um serviço nativo que gera e valida esses tokens automaticamente, garantindo segurança e eficiência na comunicação via API.

:::tip Guia Visual
Para obter mais informações sobre como implementar e configurar o JWT nos seus arquivos de configuração, consulte [Guia de Autenticação JWT](/docs/academy/server/services/jwt)
:::

## Conclusão 

Dominar os recursos de segurança do Netuno é fundamental para a saúde do seu projeto. Ao utilizar corretamente as ferramentas de gestão de usuários, de grupos e monitoramento de histórico, você construiu um ambiente que equilibra proteção de dados com facilidade de uso.

Com isso você garante que seu sistema no Netuno seja:

- **Seguro:** Protegendo informações sensíveis contra acessos não autorizados.

- **Organizado:** Estabelecendo hierarquias e responsabilidades claras.

- **Escalável:** Pronto para crescer com integrações modernas.

**Mantenha as boas práticas:** Revise periodicamente as permissões dos grupos e verifique o histórico de acessos para manter seu ambiente saudável.