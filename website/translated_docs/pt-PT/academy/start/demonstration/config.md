---
id: config
title: Configuração
sidebar_label: Configuração
---

## Configuração básica da aplicação Demo

Neste tópico vamos apenas cobrir os passos necessários para o mínimo correto funcionamento da aplicação Demo, para uma análise em pormenor por favor dirija-se a [Configurações Básicas de uma Aplicação](../../explore/configuration)

Dentro do diretório de raíz do Netuno dirija-se à seguinte pasta:

* `📂 /apps/demo/config`

Aqui encontre e edite o seguinte ficheiro num editor de texto/código:

* `_development.json`

### Configuração de idioma

Encontre no ficheiro estes dois campos e altere de acordo com o seu idioma:

```
"language": "pt_PT",
"locale": "pt_PT", 
```
Aqui está uma lista dos valores atualmente aceites:

* ```"pt_PT" ou "pt_BR"``` - para Português (se está a ler este tutorial aconselhamos que utilize um destes dois)
* ```"en_GB" ou "en_US"``` - para Inglês

### Configuração do idioma da Base de Dados

Encontre isto no mesmo ficheiro:

```
"db": {
        "default": {
            "password": "",
            "engine": "h2",
            "port": "",
            "host": "",
            "name": "demo_en",
            "username": ""
        }
    },
```

E mude o campo da base de dados ```"name"``` de acordo com o seu idioma, por exemplo:

* ```"name": "demo_pt"``` - para Português
* ```"name": "demo_en"``` - para Inglês (se você está a ler este tutorial, nós recomendamos usar esta opção)

### Configuração dos comandos que executam juntamente com o Netuno

O Netuno permite executar múltiplos comandos com o executar inicial do servidor que imprimimem todos para a mesma consola. Por predefinição a aplicação Demo traz consigo, mas desativado, o comando ``` npm run watch ``` que compila automaticamente qualquer alteração efetuada em ficheiros de código do backoffice.
Consegue encontrar esta cnfiguração em:

```
"commands": [
        {
            "enabled": false,
            "path": "ui",
            "command": "npm run watch"
        }
    ],
```

> Para ver esta funcionalidade em ação ative o comando com `"enabled": true` e reinicie o seu servidor Netuno. 

* ```"enabled"``` - ativa o desativa o comando de executar com o início do executar do servidor (pode ser ```true``` ou```false``` respetivamente);
* ```"path"``` - o caminho relativo ao diretório da aplicação onde o comando vai ser executado;
* ```"command"``` - o comando a ser executado;

>Pode adicionar quantos comandos quiser, desde que siga a mesma estrutura do objecto.