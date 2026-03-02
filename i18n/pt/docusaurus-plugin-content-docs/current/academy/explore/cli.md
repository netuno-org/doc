---
id: cli
title: Linha de Comandos
sidebar_label: Linha de Comandos
---


A interface de linha de comando do Netuno é a principal ferramenta para gerenciar seu ambiente de desenvolvimento. Através dela, você pode consultar informações do sistema, gerenciar aplicações e configurar o servidor de forma rápida.

#### Pré-requisitos

- **Terminal:** Você deve ter um terminal (Prompt de Comando, PowerShell ou Bash) aberto na pasta raiz onde o Netuno foi instalado.

Estes são os comandos iniciais para verificar se o seu ambiente está pronto para uso.

| OPÇÃO    | DESCRIÇÃO    |
|----------|--------------|
| `help` | Permite visualizar todos os comandos disponível pelo Netuno. |
| `version` | Permite visualizar a versão atual do Netuno. |

#### Listar Comandos Disponíveis

Se tiver dúvidas sobre quais operações pode realizar, use o comando de ajuda. Ele retornará uma lista completa de funções.

```shell
./netuno help
```
#### Visualizar a versão do Netuno

É fundamental saber qual versão você está utilizando para garantir a compatibilidade com scripts e módulos específicos.

```shell
./netuno version
```

## Instalar

Antes de iniciar o desenvolvimento, é necessário instalar o motor do Netuno em seu ambiente. Para mais informações acesse nossa página de [Instalação](/docs/get-started/installation).

Esta seção detalha os parâmetros que podem ser utilizados durante o processo de instalação para automatizar ou otimizar o processo.

| OPÇÃO | DESCRIÇÃO |
|----------|--------------|
| `checksum` | Atualiza o código de verificação (checksum) de todos os arquivos do pacote instalado. |
| `force` | Força a substituição de todos os arquivos, mesmo que existam alterações locais.|
| `graal=true/false` | Define o uso do GraalVM para obter maior desempenho na execução das aplicações. |
| `path=[Directory]`| Define manualmente o caminho (pasta) onde o Netuno será instalado.|
| `remove` | Remove completamente todos os arquivos relacionados ao Netuno do sistema.|
| `version=[version]`| Seleciona uma versão específica para instalar. Use mais recente para a versão de desenvolvimento.|
| `yes`| Responde automaticamente "SIM" a todas as confirmações, ignorando avisos sobre perda de dados.|

#### Exemplo de como atualizar o checksum:

```shell
./netuno install checksum
```

#### Exemplo de como forçar todas as alterações locais:

```shell
./netuno install force
```

#### Exemplo de como desativar a GraalVM: 

```shell
./netuno install graal=false
```

> A GraalVM por padrão está ativa e é descarregada automaticamente na instalação do Netuno.

#### Exemplo de como definir o caminho de instalação:

```shell
./netuno install path ='netunoDir'
```
#### Exemplo de como remover todas as pastas do Netuno:

```shell
./netuno install remove
```

#### Exemplo de como selecionar a versão do Netuno que deve ser instalada:

```shell
./netuno install version='latest'
```

##### Exemplo de como responder SIM para todas as perguntas: 
```shell
./netuno install yes 
```

## Servidor

Após concluir a instalação, inicie o servidor para começar a desenvolver as suas aplicações.

Para subir o servidor com as configurações padrão, execute o comando abaixo na pasta raiz do Netuno:

```shell
./netuno server
```

> Por padrão, o servidor utiliza a porta 9000. Assim que o terminal indicar que o sistema está pronto, você poderá acessar o painel de gerenciamento através do link: http://localhost:9000/

Esta seção detalha os parâmetros que podem ser utilizados durante o processo de inicialização do servidor.

OPÇÃO | DESCRIÇÃO |
|----------|--------------|
| `app=[nome_da_app]` | Define especificamente qual aplicação deve ser iniciada |
| `host=[IP/nome do anfitrião]` | Permite-lhe alterar o nome do anfitrião da Netuno |
| `launch=true/false` | Define se o Netuno deve abrir automaticamente o navegador |
| `npm` | Executa o comando 'npm watch' automaticamente para compilar o frontend da App em tempo real |
| `port=[número]` | Define a porta de inicialização do servidor |
| `secret=[senha]` | Define uma senha de segurança para permitir o acesso à gestão remota do servidor |
| `web=[pasta]` | Altera a pasta raiz do projeto (web home) predefinida |

Por padrão, o Netuno utiliza a pasta **'webapp'** para armazenar todos os arquivos essenciais ao seu funcionamento.

**Atenção ao alterar o diretório:** Se você utilizar o parâmetro web=[pasta] para mudar o nome da pasta raiz, lembre-se de que você também deve renomear fisicamente a pasta no seu sistema de arquivos. O comando apenas instrui o código do Netuno sobre onde procurar os arquivos, ele não renomeia pastas automaticamente.

#### Exemplo de como iniciar o servidor de uma aplicação específica:

```shell
./netuno server app=myapp
```

#### Exemplo de como mudar o nome da anfitrião (host):

```shell
./netuno server host=localhost
```

#### Exemplo de como definir se o Netuno inicializa o navegador automaticamente:

```shell
./netuno server launch=false
```

>Por padrão o Netuno abre o navegador e inicializa o link http://localhost:9000.

#### Exemplo de como executar npm para construir automaticamente o frontend

```shell
./netuno server npm
```

#### Exemplo de como mudar a porta:

```shell
./netuno server port=10000
```

#### Exemplo de como definir uma senha para acessar à gestão remota do servidor:

```shell
./netuno server secret='p#ssw@rd'
```

#### Exemplo de como alterar a pasta padrão da web:

```shell
./netuno server web=webapp
```

## Licença

Para iniciar o desenvolvimento com o Netuno, é necessário realizar o registro do seu ambiente.

Para gerenciar sua licença, utilize o comando base:

```shell
./netuno license
```

> Atualmente, o Netuno oferece três modalidades de licença: **Community, Standard e Enterprise**.

Esta seção detalha as ações disponíveis para configurar ou consultar sua licença.

| OPÇÃO    | DESCRIÇÃO    |
|----------|--------------|
| `create , change` | Inicia o processo para criar uma nova licença ou alterar a atual |
| `key` | Exibe a chave de licença ativa no seu ambiente |
| `mail=[seu@mail.com]` | Define o endereço de e-mail associado à conta da licença |
| `type=[community/standard/enterprise]`  | Define o tipo de licença|


#### Exemplo de como criar uma licença:

```shell
./netuno license create
```

#### Exemplo de como visualizar a chave da licença: 

```shell
./netuno license key
```
##### Exemplo de como definir o seu e-mail e tipo de licença:

```shell
./netuno license mail='mail@gmail.com' type='community'
```

## Aplicação

Com o servidor configurado e a licença ativa, você pode expandir seu ecossistema criando novas soluções.

```shell
./netuno app
```

Os arquivos gerados serão organizados automaticamente dentro da estrutura de pastas do Netuno.

Para acessar ou editar os arquivos da sua aplicação, navegue pelo seguinte caminho a partir da raiz do sistema: **webapp / apps / [nome_da_sua_app]**

#### Estrutura de Pastas

- **webapp**: É a pasta raiz que contém todos os ficheiros essenciais para o funcionamento do Netuno.

- **apps**: Pasta específica onde ficam armazenadas todas as aplicações desenvolvidas ou em demonstração.

- **[nome_da_sua_app]**: A pasta exclusiva da aplicação que você acabou de criar.

Por padrão, o Netuno tem uma aplicação de demonstração que é exibida quando o servidor Netuno é iniciado.

| OPÇÃO    | DESCRIÇÃO    |
|----------|--------------|
| `database=[nome_da_base_de_dados]` | Define o nome da base de dados |
| `engine=[nome]` | Define o tipo da base de dados |
| `host=[endereço]` | Define o endereço da base de dados. |
| `language=[idioma]`  | Define o idioma da aplicação |
| `locale=[idioma]` | Define o idioma local da aplicação |
| `name=[nome]`  | Permite criar uma aplicação ou reconstruir uma aplicação existente |
| `password=[senha]`  | Define uma senha para a base de dados |
| `port=[número]`  | Define a porta da base de dados |
| `username=[nome]`  | Define o nome do usuário da base de dados |

#### Exemplo de como definir o nome da base de dados:

```shell
./netuno app database=funcionario
```

> O nome da base de dados pode conter número e letras, caso o nome tenha mais de uma palavra deve ser separado por "_", da seguinte forma.
>
> **Exemplo:** funcionario_db

#### Exemplo de como definir o tipo de base de dados:

```shell
./netuno app engine=pg
```
Existem os seguintes tipos de base de dados:
> - PostgreSQL - **pg**
> - MariaDB - **mariadb**
> - Microsoft SQL Server - **mssql**
> - H2 Database - **h2**

#### Exemplo de como definir o endereço do servidor de base de dados:

```shell
./netuno app host=localhost
```

#### Exemplo de como definir o idioma e local:

```shell
./netuno app language=pt_PT locale=pt_PT
```
Existem os seguintes idiomas:
> - Português - pt_PT
> - Brasileiro - pt_BR
> - Inglês - en_US
> - Espanhol - es_ES

#### Exemplo de como criar uma aplicação ou reconstruir uma aplicação existente:

```shell
./netuno app name=demo
```

#### Exemplo de como definir a senha da base de dados:

```shell
./netuno app password=secret
```

#### Exemplo de como definir a porta da base de dados:

```shell
./netuno app port=5432
```
Por padrão, as portas correspondem a:  

> - PostgreSql - **5432**
> - MariaDB -**3306**
> - Microsoft SQL Server - **1433**

#### Exemplo de como definir o nome de usuário da base de dados:

```shell
./netuno username=root
```
