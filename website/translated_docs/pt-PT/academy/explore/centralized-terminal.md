---
id: centralized-terminal
title: Terminal Centralizado
sidebar_label: Terminal Centralizado
---

## Introdução

O Netuno permite integrar a saída de dados de diversos comandos no terminal que o está sendo executado.

Quando uma aplicação é iniciada, de acordo com a sua configuração, pode conter diversos comandos configurados para serem iniciados automaticamente junto com a aplicação.

Isto quer dizer que os processo de front-end do ReactJS, Angular ou Vue, podem ser iniciados e integrados com o terminal do Netuno.

Também qualquer outro tipo de processo pode ser iniciado, basta definir o seu comando, por exemplo até um outro servidor de API auxiliar em outra tecnologia pode ser iniciado junto.


## Configuração

Navegue dentro da aplicação que está a desenvolver até ao ficheiro de configuração de ambiente. Neste exemplo, iremos utilizar o ficheiro de ambiente de desenvolvimento localizado em:

- 📂 `config/_development.json`

Verifique se já não existem configurações de comandos, se não existir adicione no fim do ficheiro de configuração (em formato JSON) os parâmetros de configuração dos comandos, como por exemplo:

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

Definição das variáveis de ambiente.

### path

Definição do caminho de pastas onde o comando será executado.

### install

Comando executado caso a pasta `node_modules` não exista, automaticamente executa o `npm install` ou `yarn install` de acordo com o comando, caso o comando em si seja respectivamente um `npm` ou `yarn`.

### command

O comando que será executado e a sua saída de dados (`output`) será integrada com o Netuno.

### enabled

Se o comando está ou não ativo para ser executado na inicialização da aplicação.

## Conclusão

De forma simples é possível integrar diversos comandos de processos auxiliares que sejam precisos para o funcionamento da aplicação, seja para desenvolvimento como para produção.

Em desenvolvimento facilita muito onde é possível ver em um único terminal toda a informação centralizada, unificando todos os processos que estão em execução.

Ao fechar o Netuno, concluir a sua execução, será encerrado todos os outros processos também.
