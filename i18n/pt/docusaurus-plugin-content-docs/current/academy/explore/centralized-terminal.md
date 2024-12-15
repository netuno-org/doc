---
id: centralized-terminal
title: Terminal Centralizado
sidebar_label: Terminal Centralizado
---

## Introdução

O Netuno permite integrar a saída de dados de diversos comandos no mesmo terminal em que o servidor do Netuno está sendo executado.

Quando uma aplicação é iniciada, de acordo com a sua configuração, pode conter diversos comandos configurados para serem iniciados automaticamente em paralelo, mas consolida todos as saídas de dados nno mesmo output global.

Isto quer dizer que os processo de front-end do ReactJS, Angular, Vue, e qualquer outro, podem ser iniciados e integrados com o Netuno.

> Qualquer processo pode ser iniciado, basta definir o seu comando, por exemplo até pode ser integrado outro servidor de uma API REST auxiliar desenvolvida em qualquer outra tecnologia.


## Configuração

Dentro da aplicação que está a desenvolver, no ficheiro de configuração de ambiente. Neste exemplo será utilizado o ficheiro de ambiente de desenvolvimento, que está localizado dentro da aplicação em:

- 📂 `config/_development.json`

Verifique se já não existem configurações de comandos, se não existir então adicione no fim do ficheiro de configuração (em formato JSON), os seguintes parâmetros de configuração como exemplo:

```
{
    ...
    "commands": [
        {
            "path": "ui",
            "command": "npm run watch",
            "enabled": true
        },
        {
            "env": [ "PORT=21030", "WDS_SOCKET_PORT=21030" ],
            "path": "website",
            "install": "npm install --force",
            "command": "npm run start",
            "enabled": true
        }
    ],
    ...
}
```

> Repare que a chave `commands` é um `array`, e dentro pode conter a definição dos diversos comandos, neste caso são 2:
> 1. Comando para iniciar `npm run watch` dentro da pasta `ui` que está dentro da aplicação.
> 2. Comando para iniciar `npm run start` dentro da pasta `website` que está dentro da aplicação.

### env

Definição das variáveis de ambiente, é um array então pode ser definidas diversas variáveis ao mesmo tempo.

### path

Definição do caminho de pastas onde o comando será executado, relativo a raíz da aplicação.

### install

Se o comando iniciar com `npm` ou `yarn`, então é verificado se ainda não existe a pasta `node_modules`, então automaticamente é executado o comando `npm install` ou `yarn install`, de acordo com o prefixo comando.

De qualquer maneira o comando de instalação pode ser customizado com esta parametrização, assim sendo o comando de instalação padrão deixa de ser utilizado.

### command

O comando que será executado e a sua saída de dados (`output`) será integrada com o Netuno.

### enabled

Se o comando está ou não ativo para ser executado na inicialização da aplicação.

## Conclusão

De forma simples é possível integrar diversos comandos de processos auxiliares que sejam precisos para o funcionamento da aplicação, seja para desenvolvimento como para produção.

Em desenvolvimento facilita muito, porque passa a ser possível ver em um único terminal toda a informação centralizada, unificando todos os processos que estão paralelamente em execução.

Ao parar a execução do Netuno, também será encerrado todos os outros processos.
