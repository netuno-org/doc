---
id: cli
title: Linha de Comandos
sidebar_label: Linha de Comandos
---

Antes de começar a desenvolver, dê uma vista nos comandos disponíveis.

| OPÇÃO    | DESCRIÇÃO    |
|----------|--------------|
| `help` | Permite visualizar todos os comandos disponível pelo Netuno. |
| `version` | Permite visualizar a versão atual do Netuno. |

#### Listar Comandos Disponíveis
```shell
./netuno help
```
#### Visualizar a versão do Netuno
```shell
./netuno version
```

## Instalar

Antes de começar a desenvolver necessita de instalar o Netuno
Para o ajudar a instalar o Netuno vá à [Instalação](/docs/get-started/installation)

##### Detalhes 

| OPÇÃO | DESCRIÇÃO |
|----------|--------------|
| `checksum` | Permite-lhe actualizar o checksum armazenado para todos os ficheiros do pacote |
| `force` | Permite-lhe forçar a substituição de todas as alterações locais |
| `graal=true/false` | Permite-lhe definir se pretende utilizar o GraalVM para melhor desempenho das suas aplicações |
| `path=[Directory]`| Permite-lhe definir o caminho de instalação |
| `remove` | Remover todos os ficheiros Netuno |
| `version=[version]`| Permite-lhe seleccionar a versão do Netuno que deve ser instalada, "mais recente" para a versão actual em desenvolvimento|
| `yes`| Permite-lhe respondera todas as perguntas como SIM e tenha a certeza de que as suas alterações podem ser destruídas|

#### Exemplo de como actualizar o checksum

```shell
./netuno install checksum
```

#### Exemplo de como forçar todas as alterações locais

```shell
./netuno install force
```

#### Exemplo de como desactivar a GraalVM 

```shell
./netuno install graal=false
```

> A GraalVM por defeito está activa e descarregado automaticamente na instalação do Netuno.

#### Exemplo de como definir o caminho de instalação

```shell
./netuno install path ='netunoDir'
```
#### Exemplo de como remover todos os ficheiros Netuno.

```shell
./netuno install remove
```

#### Exemplo de como seleccionar a versão do Netuno que deve ser instalada

```shell
./netuno install version='latest'
```

##### Exemplo de como responder como SIM a todas as perguntas 
```shell
./netuno install yes 
```

## Servidor

Inicie o servidor do Netuno para começar a desenvolver as suas aplicações.

```shell
./netuno server
```

> O porto por padrão é o 9000.
> 
> Após ligar o servidor só precisa de aceder através do link : http://localhost:9000/

#### Detalhes

Por padrão, o diretório do Netuno está definido com o nome 'webapp', a pasta 'webapp' é onde estão localizados todos os ficheiros para o seu funcionamento.

OPÇÃO | DESCRIÇÃO |
|----------|--------------|
| `app=[nome_da_app]` | Permite definir qual a aplicação que deve ser iniciada 
| `host=[IP/Nome do anfitrião]` | Permite-lhe alterar o nome do anfitrião da Netuno |
| `launch=true/false` | Permite-lhe definir se a Netuno inicializa o link no browser |
| `npm` | Permite-lhe correr 'npm watch' para o App para construir automaticamente o frontend|
| `port=[Número]` | Permite definir a porta de inicialização do servidor |
| `secret=[password]` | Permite-lhe definir uma password para aceder à gestão remota do servidor|
| `web=[diretório]` | Permite-lhe alterar a pasta web home predefinida |


> Ao mudar o nome do diretório, precisa de alterar o nome da pasta para o nome pretendido, visto que o nome só será alterado no código do Netuno.

#### Exemplo de como iniciar o servidor de uma determinada aplicação

```shell
./netuno server app=myapp
```

#### Exemplo de como mudar o nome da anfitrião

```shell
./netuno server host=localhost
```

#### Exemplo de como definir se o Netuno inicializa a ligação no browser

```shell
./netuno server launch=false
```

>Por defeito o Netuno abre o browser e inicializa o link

##### Exemplo para executar npm para construir automaticamente o frontend

```shell
./netuno server npm
```

#### Exemplo de como mudar o porto

```shell
./netuno server port=10000
```

#### Exemplo de como definir uma senha para aceder à gestão remota do servidor

```shell
./netuno server secret='p#ssw@rd'
```

#### Exemplo de como alterar a pasta padrão da web 

```shell
./netuno server web=webapp
```

## Licença

Para começar a desenvolver só precisa de se registar.

```shell
./netuno license
```

> Atualmente existem três licenças: Community, Standard e Enterprise

#### Detalhes

| OPÇÃO    | DESCRIÇÃO    |
|----------|--------------|
| `create , change` | Permite criar ou mudar a licença.	 |
| `key` | Permite visualizar a chave da licença |
| `mail=[your@mail.com]` | Permite definir o email da conta. |
| `type=[community/standard/enterprise]`  | Permite definir o tipo de licença.|


#### Exemplo de como criar uma licença

```shell
./netuno license create
```

#### Exemplo de como visualizar a chave da licença 

```shell
./netuno license key
```
##### Exemplo de como definir o seu correio e tipo de licença

```shell
./netuno license mail='mail@gmail.com' type='community'
```

## Aplicação

Crie as suas aplicações de forma simples.

```shell
./netuno app
```

> Após a criação da aplicação se pretender ver onde está a pasta da aplicação pode ir à pasta webapp, de seguida à pasta apps e aí vai encontrar a pasta da aplicação.

#### Detalhes
Por defeito,o Netuno tem uma aplicação de demonstração que começa quando o servidor Netuno é iniciado.

| OPÇÃO    | DESCRIÇÃO    |
|----------|--------------|
| `database=[nome_da_base_de_dados]` | Permite definir o nome da base de dados |
| `engine=[nome]` | Permite definir o tipo da base de dados |
| `host=[endereço]` | Permite definir o endereço da base de dados. |
| `language=[idioma]`  | Permite definir o idioma |
| `locale=[idioma]` | Permite-lhe definir o local da aplicação |
| `name=[nome]`  | Permite criar uma aplicação ou reconstruir uma aplicação existente |
| `password=[password]`  | Permite definir uma password para a base de dados |
| `port=[número]`  | Permite definir o porto da base de dados |
| `username=[nome]`  | Permitir definir o nome da utilizador da base de dados |

#### Exemplo de como pré definir o nome da base de dados

```shell
./netuno app database=funcionario
```

> O nome da base de dados pode conter número e letras, caso o nome tenha mais de uma palavra deve ser separado por "_", da seguinte forma.
>
> Ex: funcionario_db

#### Exemplo de como pré definir o tipo de base de dados

```shell
./netuno app engine=pg
```
> Existem os seguintes tipos de base de dados:
> - PostgreSQL - pg
> - MariaDB - mariadb
> - Microsoft SQL Server - mssql
> - H2 Database - h2

#### Exemplo de como pré definir o endereço do servidor de base de dados

```shell
./netuno app host=localhost
```

#### Exemplo de como pré-estabelecer o idioma e local

```shell
./netuno app language=pt_PT locale=pt_PT
```
> Existem os seguintes idiomas:
> - Português - pt_PT
> - Brasileiro - pt_BR
> - Inglês - en_US
> - Espanhol - es_ES

#### Exemplo de como criar uma aplicação ou reconstruir uma aplicação existente

```shell
./netuno app name=demo
```

#### Exemplo de como pré definir a password da base de dados

```shell
./netuno app password=secret
```

#### Exemplo da pré definição do porto da base de dados

```shell
./netuno app port=5432
```
> Por padrão, o porto do PostgreSql é o 5432<br/>
  Por padrão, o porto do MariaDB é o 3306<br/>
  Por padrão, o porto do Microsoft SQL Server é o 1433

#### Exemplo de como definir o nome de utilizador da base de dados

```shell
./netuno username=root
```
