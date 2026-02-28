---
sidebar_position: 8
id: ui-layer
title: Camada UI
sidebar_label: Camada UI
---

Instalação e compilação do dashboard e interface geral das aplicações.

## Contexto

As aplicações Netuno já trazem configuradas, por padrão, um conjunto de tecnologias avançadas direcionadas para o 
front-end, sendo algumas delas [React](https://react.dev/), [Vite](https://vite.dev/), [Less](https://lesscss.org/) 
e [Ant.Design](https://ant.design/).

Dentro das aplicações tem a pasta `📁 ui` (_user interface_, interface de utilização), que é onde desenvolvemos os
dashboards e outros componentes de front-end.

## Antes de Começar

Certifique que tem instalado o [Bun](https://bun.sh/), que é um pré-requisito, mais sobre como:

- [Instalar o Bun](/docs/academy/website/bun)

## Instalar os Módulos de Dependência

Para instalar todas as dependências que vêm por padrão, entre na pasta `📁 ui` (_user interface_) dentro da sua 
aplicação em desenvolvimento, por exemplo:

```shell
cd apps/minha_app/ui/
```

Execute o comando de instalação dos módulos de dependência:

```shell
bun install
```

> O [Bun](https://bun.sh) é uma alternativa melhorada e mais otimizada que o NPM.

## Compilação Automática

Entre na pasta `📁 ui` (_user interface_) da sua aplicação em desenvolvimento, por exemplo:

```shell
cd apps/minha_app/ui/
```

Para compilar o front-end automaticamente a cada alteração de código, execute:

```shell
bun run watch
```

> Certifique que tem o [Bun](https://bun.sh/) instalado.
 
## Integração Automática do Front-end com o Netuno

O Netuno permite-lhe iniciar o UI juntamente com o processo de servidor da aplicação Netuno.

> Todas as mensagens de compilação do React estarão integradas no mesmo terminal que a aplicação Netuno.

Para tal basta ativar a configuração nos `commands` da aplicação Netuno em `📂 config/_development.json`,
ou seja no `command` com o `path` do `ui` passar o `enabled` para `true`, da seguinte forma:

```json title="config/_development.json"
{
  ...
  "commands": [
    {
      "enabled": true,
      "path": "ui",
      "command": "bun run watch"
    }
  ],
  ...
}
```

> Sempre que editar arquivos de configuração da aplicação Netuno é necessário reiniciar o servidor para que possa 
> assumir as novas alterações.

Por fim inicie/reinicie o servidor com a sua aplicação Netuno para comprovar o seu funcionamento.

E agora tudo ficará integrado em apenas um terminal centralizado, evitando assim que tenha vários terminais
dispersos, mais sobre:

- [Terminal Centralizado](/docs/academy/explore/centralized-terminal)

## Outras Tecnologias de Front-end

Dentro da pasta `📁 ui` é possível configurar qualquer tecnologia de front-end, ou incluir qualquer novo módulo de 
dependência que seja necessário.

Caso não queira utilizar qualquer uma das tecnologias padrão, pode substituir por qualquer outra, especialmente
adaptando os arquivos:

- `package.json`
- `vite.config.js`
