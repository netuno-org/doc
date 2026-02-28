---
id: centralized-terminal
title: Terminal Centralizado
sidebar_label: Terminal Centralizado
---

## Introdução

O Netuno permite unificar a saída de dados (logs) de múltiplos comandos e processos em uma única janela de terminal — a mesma onde o servidor principal está em execução.

Em fluxos de desenvolvimento modernos, onde é comum lidar com diversas tecnologias simultaneamente, o Netuno atua como um orquestrador de logs, podendo conter diversos comandos configurados para serem iniciados automaticamente em paralelo, como processos de front-end do ReactJS, Angular, Vue e qualquer outro.

> Qualquer processo pode ser iniciado, basta definir o seu comando, por exemplo até pode ser integrado outro servidor de uma API REST auxiliar desenvolvida em qualquer outra tecnologia.


## Configuração

Para integrar processos externos, você deve editar o arquivo de configuração de ambiente da sua aplicação. Neste guia, utilizaremos o ambiente de desenvolvimento como exemplo.

### Localização do Arquivo

Navegue até a pasta da sua aplicação e localize o arquivo:

- 📂 `config/_development.json`

### Estrutura de Configuração


A configuração é feita através da chave "commands", que consiste em um array de objetos. Isso permite que você execute múltiplos serviços em paralelo.

Abra o arquivo e verifique se a chave `"commands"` já existe. Caso contrário, insira ao final do arquivo (respeitando o formato JSON) seguindo a configuração abaixo:

```json
{
    ...
    "commands": [
        {
            "path": "ui",
            "command": "bun run watch",
            "enabled": true
        },
        {
            "env": [ "PORT=21030", "WDS_SOCKET_PORT=21030" ],
            "path": "website",
            "install": "bun install",
            "command": "bun run dev",
            "enabled": true
        }
    ],
    ...
}
```

> **Nota:** No exemplo acima, configuramos um comando para a pasta "ui" e outro para a pasta "website", ambos utilizando o gerenciador bun.

### Referência de Parâmetros

**Interface de Usuário (UI):** Executa `bun run watch` dentro do diretório `ui` da sua aplicação.

**Website:** Executa `bun run dev` dentro da pasta `website`. 

### env

Define as variáveis de ambiente que o processo necessita para rodar. Você pode definir múltiplas variáveis simultaneamente.

### path

Define o caminho de pastas onde o comando será executado, relativo a raíz da aplicação.

### install

O Netuno possui uma inteligência integrada para gerenciar dependências de pacotes:

- **Detecção Automática:** Se o seu comando começar com `npm`, `bun`, `pnpm` ou `yarn`, o Netuno verifica se a pasta `node_modules` existe.

- **Execução Inteligente:** Caso a pasta não seja encontrada, o comando de instalação correspondente (exemplo: `bun install`) é executado automaticamente antes de iniciar o processo principal.

- **Customização:** Ao definir manualmente o parâmetro `install`, a detecção padrão é substituída pela sua configuração personalizada.

### command

O comando principal a ser executado. Toda a saída de dados (`output`) será integrada com o Netuno.

### enabled

Define se o comando deve (true) ou não (false) ser iniciado automaticamente com a aplicação.

## Conclusão

A centralização de comandos no Netuno simplifica muito o fluxo de trabalho.
A visibilidade unificada permite que todas as informações de processos paralelos sejam consolidadas em um único terminal, facilitando o monitoramento em tempo real.

O encerramento seguro faz com que, ao parar a execução do servidor Netuno, todos os processos auxiliares configurados também sejam encerrados automaticamente, evitando processos "em segundo plano" ou travamentos de porta.