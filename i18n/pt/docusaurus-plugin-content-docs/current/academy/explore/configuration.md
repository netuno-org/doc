---
id: configuration
title: Configuração
sidebar_label: Configuração
---

## Configurações Básicas de uma Aplicação

Toda aplicação criada no Netuno possui configurações específicas que definem como ela deve se conectar a bancos de dados, chaves de acesso e outros parâmetros fundamentais. 

O Netuno utiliza um sistema inteligente que organiza essas configurações de acordo com o ambiente em que a aplicação está rodando, seja, localmente, em um servidor oficial ou em qualquer outro.

As configurações da sua aplicação ficam centralizadas na pasta **config**, localizada na raiz do seu projeto.

**Caminho padrão:** `minha-app/config`

### Ambientes de Execução

Dentro da pasta config, os arquivos são nomeados de acordo com o ambiente para o qual foram criados. O Netuno carrega automaticamente apenas os arquivos que correspondem ao ambiente em que está sendo executado naquele momento:

- **Desenvolvimento**: Arquivos nomeados como `_development` são lidos apenas quando o ambiente do Netuno está definido como desenvolvimento.

- **Produção**: Arquivos nomeados como `_production` são lidos apenas quando o ambiente do Netuno está definido como produção.


### Tipos de Arquivos de Configuração

Para cada ambiente, você pode utilizar dois tipos de arquivos que trabalham em conjunto:

### JSON

- `_development.json` 
- `_production.json`

**Função:** Armazenar as definições e parametrizações estáticas.

**Exemplo:** Colocar credenciais de banco de dados, URLs de APIs externas e configurações fixas.

### JS

- `_development.js` 
- `_production.js`

**Função:** Executar lógicas no momento em que a configuração é carregada.

**Exemplo:** Alterar configurações dinamicamente ou realizar tarefas e processamentos iniciais necessários antes da aplicação rodar completamente.


### Definição do Ambiente Geral

Para que as suas aplicações saibam qual configuração devem utilizar, você precisa informar ao servidor Netuno em qual "modo" ele está operando. Essa configuração global é definida em um único arquivo na raíz do Netuno.

1. **Localize o arquivo de configuração global:** Vá até a pasta raiz onde o Netuno foi instalado. Encontre e abra o arquivo chamado `config.js`.
2. **Encontre a variável de ambiente:** Dentro do arquivo, procure pela propriedade `config.env`.
3. **Defina o ambiente desejado:** Altere o valor da variável de acordo com o ambiente que você deseja ativar. 


#### Ambiente de Desenvolvimento
Utilizado enquanto você está programando e testando na sua própria máquina.

```javascript
// No arquivo ./config.js na raiz do Netuno
config.env = 'development'
```

#### Ambiente de Produção
Utilizado quando o seu projeto está finalizado e rodando no servidor oficial para os usuários.

```javascript
// No arquivo ./config.js na raiz do Netuno
config.env = 'production'
```

#### Outros Ambientes (Personalizados)

O Netuno é flexível e permite que você crie nomes de ambientes personalizados, exemplo: `test`, `homologation` ou `staging`.

```javascript
// No arquivo ./config.js na raiz do Netuno
config.env = 'test'
```

> A configuração da aplicação deve iniciar com `_`, ter a extensão `.json` e também um arquivo com a extensão `.js` ambos do mesmo ambiente.

## Repositório GIT

Ao utilizar o Git para versionar o código da sua aplicação, é fundamental garantir a segurança dos seus dados. 

Arquivos de configuração geralmente contêm informações sensíveis, como senhas de banco de dados, chaves de APIs privadas e etc... Por isso, **você nunca deve enviar os arquivos de configuração reais para o repositório**.

Para garantir que suas senhas não vazem e, ao mesmo tempo, manter o projeto documentado para outros desenvolvedores, siga estes dois passos:

### 1. Oculte os Arquivos Reais

Na raiz da sua aplicação, abra (ou crie) o arquivo chamado `.gitignore`. Adicione os caminhos dos seus arquivos de configuração `.json` para que o Git os ignore completamente.

**Exemplo do que adicionar no `.gitignore`:**

```text
config/_development.json
config/_production.json
config/_test.json
```

### 2. Arquivo de Configuração de Exemplo

Crie um arquivo de exemplo com os dados necessários para que novos desenvolvedores configurem o projeto facilmente.

- Vá até a pasta config/ da sua aplicação.
- Crie um arquivo chamado `sample.json`.
- Copie a estrutura do seu `_development.json` para dentro dele, deixando apenas os nomes dos campos.

Veja como deve ficar o seu **config/sample.json**:

```json
{
  "database": {
    "host": "COLOQUE_O_HOST_AQUI",
    "user": "SEU_USUARIO",
    "password": "SUA_SENHA"
  }
}
```

#### Como Acessar as Configurações no Código

Depois de definir suas variáveis e chaves nos arquivos de configuração (como o `_development.json`), você precisará utilizá-las na lógica da sua aplicação — por exemplo, ao criar um serviço que conecta a uma API e precisa de um *token* de acesso salvo. 

No Netuno, estas configurações podem ser acessadas através do recurso nativo `_app`.

#### Como Buscar os Dados

Dentro de qualquer código executado pelo servidor (como na pasta `server/services/`), você utilizará a função `_app.config()` para buscar os valores que estão no seu arquivo de configuração ativo.

Para entender como a ligação é feita, imagine que no seu arquivo de configuração (`config/_development.json`) você tenha definido o seguinte:

```json
{
  "name": "Minha Aplicação",
  "versao": 2
}
```
 
 Para pegar o valor da chave "name" e imprimi-lo no console (log) do servidor, você usaria o seguinte código no seu serviço .js:

```javascript
// 1. O Netuno vai no arquivo JSON, procura a chave "name" e pega o seu valor.
// 2. Em seguida, ele guarda esse valor dentro da variável JavaScript que chamamos de 'nomeDaApp'.
let nomeDaApp = _app.config().getString("name");

// 3. Imprime o conteúdo da nossa variável no terminal do Netuno: "Minha Aplicação"
_log.info(nomeDaApp);
```

## Configurações Personalizadas

Além das configurações padrão do banco de dados e do servidor, você pode criar as suas próprias variáveis de configuração. 

Isso é muito útil para definir regras de negócio, como por exemplo "quantidade máxima de itens por página" ou "intervalo de envio de e-mails", sem precisar alterar o código da aplicação toda as vezes que essas regras mudarem.

Essas variáveis ficam guardadas dentro do bloco `"settings"` nos seus arquivos de configuração JSON, como `_development.json` ou `_production.json`.  

### Estrutura do JSON e Visibilidade (Public vs. Privado)

Ao criar suas configurações, é fundamental separar o que a Interface do Usuário (Frontend) pode ver e o que deve ficar protegido apenas no Servidor (Backend).

* **Variáveis Privadas:** Ficam dentro do bloco `"settings"`. Somente o servidor tem acesso.
* **Variáveis Públicas:** Ficam dentro do sub-bloco `"public"`. Elas são enviadas para a interface do usuário (pasta `ui`), da área administrativa, como no desenvolvimento de dashboards.

**Exemplo de como estruturar o seu arquivo `.json`:**

```json
{
  ...
  "settings": {
    "public": {
      "itemsPorPagina": 10
    },
    "intervaloEmails": 10
  }
}
```

### Como Acessar as Configurações no Código
A forma de resgatar esses dados muda dependendo de onde você está programando:

**1. No Servidor / Backend (Serviços)**

Para acessar configurações gerais ou privadas, utilize o recurso `_app.settings()` no seu código de servidor (arquivos .js na pasta server).  

```javascript
// Acessa a variável privada "intervaloEmails"
const intervaloEmails = _app.settings().getInt("intervaloEmails");

_log.info("O intervalo definido é de: " + intervaloEmails);
```

**2. Na Interface / Frontend (UI)**

No desenvolvimento da interface (arquivos da pasta ui), você pode acessar tudo o que foi definido dentro do bloco "public". Para isso, utilize o objeto global `netuno.config.app.settings`.

```javascript
// Acessa a variável pública "itemsPorPagina" no frontend
const itemsPorPagina = netuno.config.app.settings.itemsPorPagina;

console.log("Exibindo " + itemsPorPagina + " itens na tabela.");
```
## Conclusão

O sistema de configurações do Netuno oferece flexibilidade e segurança estrutural para a sua aplicação. Através dele, é possível:

* **Gerenciar Múltiplos Ambientes:** Criar e suportar diferentes contextos de execução (desenvolvimento, produção, etc.) com parametrizações independentes.
* **Personalizar Variáveis:** Utilizar o bloco `settings` para adicionar configurações específicas do seu negócio. 
* **Separar Responsabilidades:** Isolar e proteger configurações restritas ao backend daquelas que devem ser acessíveis no frontend.
