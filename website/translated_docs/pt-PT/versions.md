---
id: versions
title: Versões
sidebar_label: Versões
---

Se está a começar no Netuno faça a instalação normal para utilizar a versão mais recente e estável.

Pode ser instalado outras versões do Netuno e inclusive novas versões experimentais que estão em desenvolvimento.

## Instalação de Versão

Todas as versões disponíveis estão em:

- [github.com/netuno-org/platform/releases](https://github.com/netuno-org/platform/releases)

Escolha sua versão e siga as etapas descritas nas notas da release.

Para atualizar para a versão em específico quando já tem uma instalação do Netuno acrescente no comando de instalação o parâmetro da versão (`version`).

Por exemplo:

```
java -jar netuno-setup.jar install version=20230417.0119
```

Ou usando o executor principal na instalação atual:

```
./netuno install version=20230417.0119
```

Ou utilizando diretamente o **netuno.jar**:

```
java -jar netuno.jar install version=20230417.0119
```

> Alterar o valor do argumento `version` para a identificação da versão pretendida.

Assim o Netuno iniciará o processo de instala a versão que foi indicada.

Consulte mais abaixo a lista das versões disponíveis.

## Versões Disponíveis

Todas as versões disponíveis estão em:

- [github.com/netuno-org/platform/releases](https://github.com/netuno-org/platform/releases)

## Versões Legadas (Pré open-source)

Estas versões deixarão de ser disponibilizadas em 2022, por favor atualizar para a versão open-source mais recente.

### 7:20210429.1738

Grandes melhorias de performance com a resolução do vazamento de memória com a GraalVM, o que resulta em baixo consumo de memória e CPU no geral, mais em:

- [LinkedHashMap memory leak](https://github.com/oracle/graal/issues/3260)

Recuperação de acessos do utilizador `dev` mais prática.

O conflito dos campos do tipo `multiselect` nos formulários com o comando `_db.insert` foi resolvido.

O objeto `File` tem o novo método `changeName`.

Os problemas de integração com o **RabbitMQ** para queues do tipo RPC foram resolvidos.

Visual Studio Code Server foi integrado de forma experimental, por exemplo basta acrescentar `code` ao iniciar o servidor do Netuno quando desenvolve uma app específica:

- `./netuno server app=myapp code`.

E o Conflito do JWT com as Sessões foi resolvido.

##### Recursos

`_user` e `_group` tem melhor indicação de erros quando utilizados sem autenticação.

`_env` tem a nova função de `sleep`.

`_server` tem a nova função para `shutdown`.

### 7:20210319.1747

As aplicações estão agora na pasta `apps` na raíz do Netuno, automaticamente serão movidas de `./web/apps` para `./apps`.

Erros de execução melhorados no geral e tem melhor indicação do ficheiro e linha.

Novo comando `./netuno stats` para visualizar as métricas mais recentes do consumo de hardware.

No MacOS o bug dos scripts `bin-unix` que falhava ao detectar o número da porta do servidor do Netuno foi resolvido.

Iniciado o suporte transversal para WebSockets.

Diversas melhorias de performance no geral.

A classe `File` tem novos métodos de `isFile` e `isFolder`, o `InputStream` com novo método `readAllAndClose`, o `OutputStream` com novos métodos `writeAndClose` e `writeFileAndClose`, suporte à _fluent interface_, diretamente disponível nos recursos: `_app`, `_storage` e `_os`.

Melhorado os erros de falha de conexão à base de dados.

##### Recursos

Novo recurso `_cors` para manipular facilmente o CORS (Cross-Origin Resource Sharing).

Novo recurso `_server` que disponibiliza informações e futuras interações com o servidor.

Novo recurso em fase experimental `_rabbitmq`, para integrações com o RabbitMQ, por enquanto suporta RPC e Work queues.

Recurso `_xml` com `transform`, `save` e `output`.

Recurso `_smtp` suporta definir o _subtype_ do _multipart_, o padrão é `mixed`.

##### Configuração

Remote suporta a configuração do parâmetro `urlPrefix` em alternativa ao `url`, para evitar enganos.

O servidor suporta configurar um nome de identificação, pode ser utilizado nas comunicações e é obtido pelo recurso `_server`.

O servidor suporta a configuração de uma pasta para armazenar as sessões em disco, em fase experimental.

Nas aplicações é suportada a configuração das origens e headers de CORS (Cross-Origin Resource Sharing) junto como novo recurso `_cors`.

### 7:20210208.1437

Suportada a nova GraalVM 21.

##### Pesquisa nos Formulários

Ao editar um registo ou mesmo apagar, a página é mantida na pesquisa.

##### Base de Dados

Corrigido o problema quando inseridos dados com ID pré definido.

##### Serviços

Quando a autenticação (`_auth`) com JWT recebe uma chamada OPTIONS (_CORS/Preflight_) retorna 200 OK.

No serviço `_auth`, quando autenticado por JWT retorna o tempo de expiração do refresh token: `refresh_expires_in`

##### Recursos

O `_xls.read` suporta as células com erros.

O `_random` suporta uma nova inicialização com uma string com os símbolos, letras e/ou números, que deve ser utilizada na geração das strings randómicas, pode ser redefinidada posteriormente no mesmo objeto iniciado.

O `_user` suporta pesquisar diretamente por username e e-mail.

Quando um `_user` ou `_group` é criado retorna o ID, e retorna boleano no caso de update e delete.

O `_mail` suporta adicionar anexos no modo `inline`.

##### Scripts de Setup

Na exportação dos dados dos formulários através da geração de código, no modo de desenvolvimento, evita os valores em branco de data (_time_), timestamp e hora (_time_).

[Download Manual](https://www.netuno.org/netuno-v7-20210208_1437.zip) _(GraalVM 21.0.0)_

### 7:20201222.1802

##### Formulários

Itens inseridos com o MultiSelect ficam ativos.

Na gestão de dados com a popup de relações com outros formulários, foi resolvido o problema que causava a perda do contexto do registo principal e permitia a gestão de outros dados não relacionados.

Campos de Imagem e Ficheiros agora removem automaticamente os ficheiros antigos para evitar desperdício de espaço em disco.

##### Base de Dados

Com as funções de manipulação de dados como `_db.update`, `_db.insert`, `_db.delete`, entre outras, passam a manipular todos os campos e registos sem as validações dos respectivos formulários.

O `_db.search` permite desligar os wildcards gerados automaticamente para permitir realizar pesquisas exatas. E o `_db.insertIfNotExists` verifica melhor a existência de registos.

Suporte para as instâncias do MSSQLSRV (Microsoft SQL Server) adicionado.

Os objetos de dados do tipo `Values` tem novas funções para obter os tipos SQL, como date, timestamp e time.

##### Recursos

O `_remote` permite utilizar endereços com certificados inválidos e na resposta devolve o URL que foi utilizada.

Novo recurso `_monitor` que permite obter os dados de performance de hardware.

##### Scripts

Os scripts server-side das apps foram simplificados, como os de configuração e de inicialização.

[Download Manual](https://www.netuno.org/netuno-v7-20201222_1802.zip) _(GraalVM 20.3.0)_

### 7:20201124.1246

##### Monitorização e Alertas

[Monitorização da performance permite disparar alertas.](/docs/pt-PT/library/advanced/monitor-alerts) E também:

- Melhor cálculos e demonstração do CPU e memória em logs.
- Processa o espaço ocupado e disponível em disco.

##### Instalação e Atualização

Novo script de `./update` para realizar a atualização.

Verifica a versão da GraalVM e atualiza se necessário.

Remove jars obsoletos em `web/WEB-INF/lib`.

[Download Manual](https://www.netuno.org/netuno-v7-20201124_1246.zip) _(GraalVM 20.3.0)_

### 7:20201027.0921

##### OpenAPI

É possível extender a definição do schema com scripts, com isto permite por exemplo criar restrição com listas de valores permitidos, os quais são obtidos e atualizados com a base de dados.

##### Base de Dados

Recurso `_db` suporta a execução em `batch`, ou seja, permite programar a execução de multiplas operações consecutivas em base de dados, como `update`, `insert` e `delete`.

##### Formulários

Nova funcionalidade nas pesquisas que permite selecionar multiplos registos para desativar ou apagar massivamente.

[Download Manual](https://www.netuno.org/netuno-v7-20201027_0921.zip) _(GraalVM 20.2.0)_

### 7:20200917.1521

Evolução de melhorias no **clone** das apps que permite melhor customização durante todo o processo e permite controlar melhor a replicação com o **CockroachDB**.

Resolvido vazamento de memória com ficheiros que ficavam abertos.

[Download Manual](https://www.netuno.org/netuno-v7-20200917_1521.zip) _(GraalVM 20.1.0)_

### 7:20200815.1932

Atualização da versão do Jetty e adicionado o suporte ao HTTP2.

Integração com o [HikariCP - DB Connection Pool](/docs/pt-PT/library/advanced/hikaricp-database-connection-pool/), melhor gestão das conexões à base de dados.

##### Recursos

A gestão de grupos (`_group`) e utilizadores (`_user`) com a novas funções `firstByName` e `createIfNotExists`.

O recurso de sistema operacional, `_os`, com novas funções para gerir ficheiros (`file`) e pastas (`folder`).

O recurso `_storage` tem uma nova função para processar pastas (`folder`).

[Download Manual](https://www.netuno.org/netuno-v7-20200815_1932.zip) _(GraalVM 20.1.0)_

### 7:20200731.1756

Melhorias nos CRON Jobs.

Suporte e instalação para **ARM**.

##### Recursos

Automatismos para facilitar a programação na manipulação de ficheiros e pastas, com cópia e delete recursivo.

Otimizações do **_remote** e implementado o suporte ao download em binário.

[Download Manual](https://www.netuno.org/netuno-v7-20200731_1756.zip) _(GraalVM 20.1.0)_

### 7:20200626.1623

Suporta a customização dos textos de tradução padrão nas apps.

Otimização dos CRON Jobs.

Controlos para gerir a exportação dos formulários nos diversos formatos e nova exportação dos dados em script para automizar o carregamento da base de dados.

Implementado mecanismo que limpa o contexto dos scripts automaticamente, para evitar conflitos com os scripts de serviços com os scripts das ações dos formulários em operações de base de dados.

[Download Manual](https://www.netuno.org/netuno-v7-20200626_1623.zip) _(GraalVM 20.0.0)_

### 7:20200522.1720

Otimizações de performance da memória no geral.

Evolução do mapeamento das apps com domínios (host), e customização dos prefixos dos URLs, como services, admin e public

Novo monitor de performance de hardware.

[Download Manual](https://www.netuno.org/netuno-v7-20200522_1720.zip) _(GraalVM 20.0.0)_

### 7:20200429.1436

##### Base de Dados

Recurso `_db` adicionado o método `findFirst`.

##### OpenAPI

Para a definição das propriedades foram criados novos tipos:
  - `string-not-empty`
  - `array-not-empty`
  - `id`
  - `uid`
  
##### Apps

Atualização dos packages do NPM e reestruturação do React, containers e components, no `ui`.

[Download Manual](https://www.netuno.org/netuno-v7-20200429_1436.zip) _(GraalVM 20.0.0)_

## 2002 até Março de 2020

Da versão **1** até a versão **6** foram descontinuadas e não são mais distribuidas.

Da versão **7** não são mais distribuidas as versões de compiladas até Março de 2020.

Por favor realize a instalação das versões mais recentes que estão disponíveis acima.
