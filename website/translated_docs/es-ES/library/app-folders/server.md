---
id: server
title: Server
sidebar_label: Server
---

## server/

A pasta `server` contém um conjunto de ficheiros e pastas que formam o backend da aplicação.

#### Estrutura da pasta server

Na pasta `server` encontra-se a seguinte estrutura:

```plaintext
└─ server/
   ├─ actions/
   ├─ core/
   │  ├─ _config.js/
   │  ├─ _init.js/
   │  ├─ _request_close.js/
   │  ├─ _request_end.js/
   │  ├─ _request_error.js/
   │  ├─ _request_start.js/
   │  ├─ _request_url.js/
   │  ├─ _service_config.js/
   │  ├─ _service_end.js/
   │  ├─ _service_error.js/
   │  └─ _service_start.js/   
   ├─ services/
   │  ├─ firebase/
   │  │  ├─ listener/
   │  ├─ jobs/
   ├─ setup/
   │  └─ _end.js/   
   │  └─ _schema-form-xxx.js/   
   │  └─ _start.js/   
   └─ templates/
      ├─ dev/
      │  └─ dashboard.html
      ├─ dashboard.html
      ├─ scripts.html
      ├─ scripts_dev.html
      ├─ scripts_login.html
      ├─ styles.html
      ├─ styles_dev.html
      └─ styles_login.html      
```

### actions/
Em `actions` podem ser adicionados acções customizações à medida (hooks) nas operações de CRUD dos formulários.

### core/

A pasta `core` permite a injeção de código em situações consideradas especiais.

`_config.js` onde são efectuadas as configurações da aplicação do lado do servidor.

`_init.js` destina-se aos parâmetros de inicialização de recursos da aplicação servidor.

`_request_close.js` `_request_end.js` `_request_error.js` `_request_start.js` `_request_url.js` permitem parametrizar os pedidos ao servidor através da injeção de código em difertes momentos de execução. 

`_service_config.js` `_service_end.js` `_service_error.js`  `_service_start.js` são *hooks* de diferentes momentos do clico de vida aplicacional onde poderá ser introduzida lógica.

### services/

É na pasta `services` que são criados os serviços que formam a API aplicacional. 

`firebase/listener` Caso activo, deve ser descrito o comportamento para quando é recebida uma actualização de campos do serviço do firebase.

`jobs` Caso activo, deve ser descrito o agendamento assim como o código a executar pelos serviços de cronjobs.

`export-pdf.js` Tomando como exemplo um serviço para gerar PDF's, seria nesta directoria que seria programado o comportamento de invocação da biblioteca de PDF's e o retorno do PDF para o cliente. Estes podem ser escritos em Javascript, Python, Java, Kotlin, Ruby ou Groovy. 

Não são necessárias configurações adicionais em função da linguagem de programação usada, basta criar o ficheiro do serviço com a extensão correcta.
 

### setup/

`setup` é alimentada automaticamente pelo motor do Netuno com os schemas de base de dados e os respectivos dados.

`_end.js` hook executado após carregamento do(s) schema(s).
 
`_schema-form-bla.js` ficheiro de schema com a informação criada de formulários, campos e dados de um determinado formulário, ex. bla.
 
`_end.js` hook executado antes do carramento do(s) schema(s).
 
 ### templates/

A pasta `templates` contém o contéudo HTML das páginas da aplicação.

A pasta `dev` contém o ficheiro 'dashboard.html' que permite a criação da área de trabalho do modo de construção.

`dashboard.html` contém o HTML da área de trabalho do modo de construção ou visualização, de acordo com a sua localização.

`scripts.html` , `scripts_dev.html` e `scripts_login.html` têm o mesmo propósito mas para locais diferentes. O primeiro diz respeito a scripts injectados no modo de construção, o seguinte relaciona-se com o modo de visualização e o último relaciona-se com o módulo de autenticação da aplicação, permitindo a inserção de scripts com a particularidade de que estes scripts prevalecem em relação a outros já definidos.

`styles.html`, `styles_dev.html` e `styles_login.html`, à semelhança dos scripts, constituem o HTML referente aos estilos para os módulos de visualização, contrução e autenticação aplicacional, respectivamente.

