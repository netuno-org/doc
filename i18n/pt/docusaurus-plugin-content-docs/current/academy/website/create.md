---
sidebar_position: 2
id: create
title: Criar com React
sidebar_label: Criar com React
---

## Aplicação React

Na raíz da sua aplicação Netuno, execute:

`pnpm create vite`

Ao perguntar: `Ok to proceed? (y)`

Digite `y` e pressione a tecla [ ENTER ].

De seguida com a pergunta: `Project name:`

Digite `website` e pressione a tecla [ ENTER ].

Na sequência vem a pergunta: `Select a framework:`

Utilize as setas do teclado, e pressione a tecla para baixo até a escolha da opção `React` e pressione a telca [ ENTER ].

Para finalizar, a seguitne pergunta: `Select a variant:`

Utilize as setas do teclado, e pressione a tecla para baixo até a escolha da opção `JavaScript` e pressione a telca [ ENTER ].

Este comando irá criar um novo diretório denominado `📂 website` onde estará contida a aplicação React. 

Após ter criado a aplicação React, execute da seguinte forma para instalar as dependências:

```
cd website
pnpm install
```

Com isso é possível iniciar a aplicação React com o comando:

`pnpm run dev`

Isto fará com que a aplicação seja iniciada no endereço [http://localhost:5173/](http://localhost:5173/), ou em outro endereço com outro número de porta, de qualquer forma basta abrir este endereço no browser para visualizar os desenvolvimentos.

> Para terminar a aplicação React em qualquer altura, no terminal, basta pressionar `CTRL+C` simultaneamente.

## Instalação de Dependências

Aconselhamos vivamente que instale os seguintes pacotes NPM, visto serem bastante úteis para o desenvolvimento de aplicações React com Netuno (clique em cada link para obter mais informações sobre cada um):

* [react-router](https://www.npmjs.com/package/react-router)
* [antd](https://www.npmjs.com/package/antd)
* [@ant-design/icons](https://www.npmjs.com/package/@ant-design/icons)
* [less](https://www.npmjs.com/package/less)
* [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

Para instalar os pacotes acima listados basta executar o seguinte conjunto de comandos no terminal:

```
pnpm install react-router
pnpm install antd
pnpm install @ant-design/icons
pnpm install less
pnpm install @netuno/service-client
```

Em alternativa também pode instalar todos os pacotes de uma única vez:

```
pnpm install react-router antd @ant-design/icons less @netuno/service-client
```

## Configurações

Após executar os comandos acima, pode forçar um endereço de porta padrão, dirija-se a `📂 website/vite.config.js` e acrescente a configuração do `server` da seguinte forma:

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

Agora ao iniciar com o comando `pnpm run dev` vai utilizar sempre a porta `3000`.

### Less

Altere todos os ficheiros `.css` que estão em `website/src` para a extensão `.less`.

> Não esqueça de realizar está alteração no código JSX nas linhas que faz o `import` dos ficheiros `.css`, alterar para `.less`.

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

Também é possível utilizar o tema escuro do Ant.Design, para isto basta importar o `theme` que contém o dark mode e aplicar no `ConfigProvider`:

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

Repare que nas parametrizações do `ConfigProvider` acima, é possível alterar facilmente o estilo do Ant.Design, mais sobre a customização do Ant.Design:

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

## Início automático da aplicação React com o Netuno

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
            "command": "pnpm run dev",
            "install": "pnpm install",
            "enabled": true
        }
    ]
    ...
}
```

> Sempre que editar ficheiros de configuração da aplicação Netuno será necessário reiniciar a aplicação para que esta possa assumir as novas alterações.

Por fim inicie/reinicie a sua aplicação Netuno para comprovar o seu funcionamento.

## Configuração de CORS (Cross-Origin Resource Sharing)

Para configurar o CORS para evitar possíveis erros entre comunicação da aplicação React com a aplicação Netuno através de serviços, dirija-se a:

- `📂 config/_development.json`

Repare se já existe a configuração de `cors` ou adicione este exemplo:

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

Estando esta configuração implementada pode criar os serviços que pretender sem encontrar erros de CORS.

> Mais sobre [CORS](../server/services/cors.md)

## Variáveis de Ambiente

Pode ser definida a configuração das variávies de ambiente através da criação do ficheiro `website/.env`, com as definições das variáveis, por exemplo:

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
            "command": "pnpm run start",
            "install": "pnpm install",
            "enabled": true
        }
    ]
}
```
