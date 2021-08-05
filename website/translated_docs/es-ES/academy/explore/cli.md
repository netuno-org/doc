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

## Servidor

Inicie o servidor do Netuno para começar a desenvolver as suas aplicações.

```shell
./netuno server
```

> O porto por padrão é o 9000. <br>
> Após ligar o servidor só precisa de aceder através do link : http://localhost:9000/

#### Detalhes

Por padrão, o diretório do Netuno está definido com o nome 'webapp', a pasta 'webapp' é onde estão localizados todos os ficheiros para o seu funcionamento.

| OPÇÃO    | DESCRIÇÃO    |
|----------|--------------|
| `port=[Numero]` | Permite definir o porto de inicialização do servidor. |
| `root=[Diretório]` | Permite definir o nome do diretório do Netuno. |
| `host=[IP/Nome do host]` | Permite mudar o nome do host do Netuno. |

> Ao mudar o nome do diretório, precisa de alterar o nome da pasta para o nome pretendido, visto que o nome só será alterado no código do Netuno.

#### Exemplo de como iniciar o servidor de uma determinada aplicação

```shell
./netuno server app=myapp
```

#### Exemplo de mudança do porto

```shell
./netuno server port=10000
```

#### Exemplo para executar um Netuno noutro diretório

```shell
./netuno server root=webaplication
```

#### Exemplo para restringir o host

```shell
./netuno server host=localhost
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


## Aplicação

#### Crie as suas aplicações de forma simples.

```shell
./netuno app
```

> Após a criação da aplicação se pretender ver onde está a pasta da aplicação pode ir à pasta webapp, de seguida à pasta apps e aí vai encontrar a pasta da aplicação.

| OPÇÃO    | DESCRIÇÃO    |
|----------|--------------|
| `database=[nome da base de dados]` | Permite definir o nome da base de dados |
| `engine=[nome]` | Permite definir o tipo da base de dados |
| `host=[endereço]` | Permite definir o endereço da base de dados. |
| `language=[idioma]`  | Permite definir o idioma |
| `name=[nome]`  | Permite criar uma aplicação ou reconstruir uma aplicação existente |
| `password=[password]`  | Permite definir uma password para a base de dados |
| `port=[número]`  | Permite definir o porto da base de dados |
| `username=[nome]`  | Permitir definir o nome da utilizador da base de dados |

#### Exemplo de como pré definir o nome da base de dados

```shell
./netuno app database=funcionario
```

> O nome da base de dados pode conter número e letras, caso o nome tenha mais de uma palavra deve ser separado por "_", da seguinte forma. <br>
 Ex: funcionario_db

#### Exemplo de como pré definir o tipo de base de dados

```shell
./netuno app engine=pg
```
>Existem os seguintes tipos de base de dados: <br>
 PostgreSQL - pg <br>
 MariaDB - mariadb <br>
 Microsoft SQL Server - mssql <br>
 H2 Database - h2 <br>

#### Exemplo de como pré definir o endereço do servidor de base de dados

```shell
./netuno app host=localhost
```

#### Exemplo de pré definição do idioma

```shell
./netuno app language=pt_PT
```
>Existem os seguintes idiomas: <br>
 Português - pt_PT <br>
 Brasileiro - pt_BR <br>
 Inglês - en_US <br>
 Espanhol - es_ES <br>

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
