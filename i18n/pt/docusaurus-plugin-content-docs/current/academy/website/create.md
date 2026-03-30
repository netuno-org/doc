---
sidebar_position: 2
id: create
title: Criar com React
sidebar_label: Criar com React
---

Este processo de criação pode ser aplicado em outros contextos, por exemplo para criar qualquer tipo de projeto
React, neste caso fazer as devidas adaptações de nome e a pasta onde os comandos são executados.

A base de entendimento é que será criada a camada web, ou seja o frontend da nossa aplicação Netuno.

Por isso é assumido que será criado dentro da aplicação Netuno o `website`, nome padrão para a camada de frontend
mas que pode ser qualquer outro nome desejado.

## Pré-requisitos

Deve ter o Netuno instalado:

- [Instalação do Netuno.](/docs/get-started/installation)

Devido a melhor performance entre outras vantagens deve o Bun instalado:

- [Instalar o Bun.](/docs/academy/website/bun)

## Criação

Para criar uma aplicação React dentro de uma aplicação Netuno normalmente chamamos de `website`.

Então com o **terminal** dentro da **raíz da sua aplicação** Netuno, que normalmente fica dentro da pasta:

- `netuno/apps/MINHA_APP`

> Onde `MINHA_APP` é o nome da aplicação Netuno.

Execute o comando:

```shell
bun create vite
```

De seguida com a pergunta: `Project name:`

Digite `website` e pressione a tecla `ENTER`.

Na sequência vem a pergunta: `Select a framework:`

Utilize as setas do teclado, e pressione a tecla para baixo até a escolha da opção `React` e pressione a tecla 
`ENTER`.

Para finalizar, a seguitne pergunta: `Select a variant:`

Utilize as setas do teclado, e pressione a tecla para baixo até a escolha da opção `JavaScript` e pressione a 
telca `ENTER`.

Este comando irá criar um novo diretório denominado `📂 website` onde estará contida o frontend com React. 

Após ter criado o frontend com React, execute da seguinte forma para instalar as dependências:

```shell
cd website
bun install
```

Abra a pasta da sua aplicação Netuno no seu editor preferido (como o VSCode, WebStorm, entre outros), e
entre na pasta `website` que foi criada.

## Executar

Agora é possível iniciar o servidor de frontend com React utilizando o comando:

```shell
bun run dev
```

Isto fará com que o frontend esteja disponível no endereço [http://localhost:5173/](http://localhost:5173/), normalmente ou em outro 
endereço com outro número de porta poderá aparecer no terminal, de qualquer forma basta abrir no browser o endereço
apresentado no terminal.

> Para terminar a execucão no terminal prescione as teclas `CTRL` e `C` simultaneamente.

## Instalação de Dependências

Caso esteja executando o servidor de frontend no terminal, ou seja `bun run dev`, é recomendado parar, prescione 
as teclas `CTRL` e `C` simultaneamente.

Aconselhamos vivamente que instale os seguintes pacotes NPM, visto serem bastante úteis para o desenvolvimento de 
aplicações React com Netuno (clique em cada link para obter mais informações sobre cada um):

* [react-router](https://www.npmjs.com/package/react-router)
* [antd](https://www.npmjs.com/package/antd)
* [@ant-design/icons](https://www.npmjs.com/package/@ant-design/icons)
* [less](https://www.npmjs.com/package/less)
* [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

Para instalar os pacotes acima listados basta executar o seguinte conjunto de comandos no terminal:

```shell
bun add react-router
bun add antd
bun add @ant-design/icons
bun add less
bun add @netuno/service-client
```

Em alternativa também pode instalar todos os pacotes de uma única vez:

```shell
bun add react-router antd @ant-design/icons less @netuno/service-client
```

## Configurações

Após executar os comandos acima, pode forçar um endereço de porta padrão, dirija-se a `📂 website/vite.config.js` 
e acrescente a configuração do `server` da seguinte forma:

```javascript title="website/vite.config.js"
export default defineConfig({
  server: {
    port: 3000,
    strictPort: true
  },
  plugins: [
    react()
  ]
})
```

Agora ao iniciar com o comando `bun run dev` vai utilizar sempre a porta `3000`.

### Less

Altere todos os ficheiros `.css` que estão em `website/src` para a extensão `.less`.

> Não esqueça de realizar está alteração no código JSX nas linhas que faz o `import` dos ficheiros `.css`, alterar 
> para `.less`.

O LESS permite um desenvolvimento mais estruturado e moderno do CSS.

### Customização do Tema do Ant.Design

Para customizar as cores do Ant.Design utilize o componente `ConfigProvider` no `App.jsx`.

Por exemplo:

```jsx title="website/src/App.jsx"
import { ConfigProvider, Button } from 'antd';
...
function App() {
    ...
    return (
        <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
            ...
            <Button type="primary">Meu Botão com Cor Customizada</Button>
            ...
        </ConfigProvider>
    );
}
...
```

Assim é possível ajustar qualquer configuração de estilização do Ant.Design.

### Dark Theme

Também é possível utilizar o tema escuro do Ant.Design, para isto basta importar o `theme` que contém o dark mode 
e aplicar no `ConfigProvider`:

```jsx
import { ConfigProvider, Button, theme } from 'antd';
...
    <ConfigProvider theme={{
        token: {
            colorPrimary: '#FF6500'
        },
        algorithm: theme.darkAlgorithm,
    }}>
        ...
        <Button type="primary">Meu Botão com Cor Customizada</Button>
        ...
    </ConfigProvider>
...
```

### Restyle

Repare que nas parametrizações do `ConfigProvider` acima, é possível alterar facilmente o estilo do Ant.Design, 
mais sobre a customização do Ant.Design:

- [Customize Theme](https://ant.design/docs/react/customize-theme)

Em cada componente do Ant.Design tem as configurações possíveis de Design Token, por exemplo nos Botões:

- [Button - Design Token](https://ant.design/components/button#design-token)

```jsx
<ConfigProvider theme={{
    token: {
        colorPrimary: '#00b96b',
        fontSize: 18,
    },
    components: {
        Button: {
            defaultBg: '#D6BD98',
            defaultColor: '#1D1616',
            primaryColor: '#000B58',
            textTextColor: '#181C14',
        }
    }
}}>
    ...
    <Button type="primary">Meu Botão com Cor Customizada</Button>
    ...
</ConfigProvider>
```

## Início automático do frontend com o Netuno

O Netuno permite-lhe iniciar a aplicação em React juntamente com o processo de servidor da aplicação Netuno.

> Todas as mensagens de compilação da aplicação em React estarão integradas no mesmo terminal que a aplicação Netuno.

Para tal basta adicionar à configuração `commands` da aplicação Netuno em `📂 config/_development.json` o seguinte:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...
        {
            "path": "website",
            "command": "bun run dev",
            "install": "bun install",
            "enabled": true
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

## Configuração de CORS (Cross-Origin Resource Sharing)

Para configurar o CORS e evitar possíveis erros entre comunicação do frontend com os serviços da aplicação Netuno,
edite a configuração da aplicação em:

- `📂 config/_development.json`

Repare se já existe a configuração de `cors`, e se estiver no `origins` o `*`, então serve bem para o desenvolvimento
podendo ficar assim.

Caso não haja a configuração de `cors`, então adicione com base neste exemplo, sendo que o endereço deve ser o
mesmo endereço do frontend:

```json title="config/_development.json"
{
    ...
    "cors": [
        {
            "enabled": true,
            "origins": [ "http://localhost:3000" ]
        }
    ],
    ...
}
```

> Se o `origins` conter um `*` quer dizer que qualquer endereço de front-end será suportado, por exemplo:
> - `"origins": [ "*" ]`
> Normalmente utilizamos o `*` em desenvolvimento.

Estando a configuração implementada pode integrar os serviços de API que pretender com o
frontend, sem problemas com a segurança de CORS.

> Mais sobre [CORS](/docs/academy/server/services/cors)

## Variáveis de Ambiente

Pode ser definida a configuração das variávies de ambiente através da criação do ficheiro `website/.env`, com as 
definições das variáveis, por exemplo:

```
NODE_ENV=development
```

Ou através da configuração da aplicação do Netuno, por exemplo em:

- `📂 config/_development.json`

E definindo as variáveis de ambiente na configuração do comando na parametrização `env`, por exemplo:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...,
        {
            "env": ["NODE_ENV=development"],
            "path": "website",
            "command": "bun run start",
            "install": "bun install",
            "enabled": true
        }
    ],
    ...
}
```
