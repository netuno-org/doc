---
id: create
title: Criar com ReactJS
sidebar_label: Criar com ReactJS
---

## Aplicação ReactJS

Na raíz da sua aplicação Netuno, execute:

`npx create-react-app website`

Este comando irá criar um novo diretório denominado `website` onde estará contida a aplicação ReactJS. 
Após ter criado a aplicação ReactJS inicie-a da seguinte forma:

```
cd website
npm run start
```

Isto fará com que a aplicação seja iniciada no endereço [http://localhost:3000](http://localhost:3000).

> Para terminar a aplicação ReactJS em qualquer altura, no terminal, basta pressionar `CTRL+C` simultaneamente

## Instalação de Dependências

Aconselhamos vivamente que instale os seguintes pacotes NPM, visto serem bastante úteis para o desenvolvimento de aplicações ReactJS com Netuno (clique em cada link para obter mais informações sobre cada um):

* [react-router-dom](https://www.npmjs.com/package/react-router-dom)
* [antd](https://www.npmjs.com/package/antd)
* [@ant-design/icons](https://www.npmjs.com/package/@ant-design/icons)
* [craco-less](https://www.npmjs.com/package/craco-less)
* [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

Para instalar os pacotes acima listados basta correr o seguinte conjunto de comandos no terminal:

```
npm install --save react-router-dom
npm install --save antd
npm install --save @ant-design/icons
npm install --save craco-less --force
npm install --save @netuno/service-client
```

Em alternativa também pode instalar todos os pacotes de uma única vez:

```
npm i -S --force react-router-dom antd @ant-design/icons craco-less @netuno/service-client
```

## Configurações

Após correr os comandos acima, para a compilação funcionar corretamente dirija-se a `📂 website/package.json` e altere onde se encontra o seguinte excerto:

```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
},
```

Para o seguinte:

```
"scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "craco eject",
    "watch": "craco start --watch"
},
```

É necessário criar um novo ficheiro `📂 website/craco.config.js`, que permitirá também realizar customizações de style no Ant.Design, o conteúdo inicial pode ser:

```javascript
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@my-variable-example: '#1178FF',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
```

### Less

Altere todos os ficheiros `.css` que estão em `website/src` para a extensão `.less`.

> Não esqueça de realizar está alteração no código JS nas linhas que faz o `import` dos ficheiros `less`.

O LESS pertime um desenvolvimento mais estruturado e moderno do CSS.

### Customização do Tema do Ant.Design

Para customizar as cores do Ant.Design utilize o componente `ConfigProvider` no `App.js`.

Por exemplo:

```
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




E no seu ficheiro LESS principal, por exemplo no `App.less`, importe o CSS do Ant.Desig:

`@import '~antd/dist/antd.less';`

### Dark Theme

Também é possível utilizar o tema escuro do Ant.Design, para isto basta importar o LESS do dark mode no seu `App.less`:

`@import '~antd/lib/style/themes/dark.less';`

##### Restyle

Repare que nos exemplos de código do `📂 website/craco.config.js` acima é possível alterar facilmente as variáveis do Ant.Design definidas no Less, mais sobre a customização do Ant.Design:

- [Customize Theme](https://ant.design/docs/react/customize-theme)
- [Less Variables](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)

## Início automático da aplicação ReactJS com o Netuno

O Netuno permite-lhe iniciar a aplicação em ReactJS juntamente com o processo de servidor da aplicação Netuno.

> Todas as mensagens de compilação da aplicação em ReactJS estarão integradas no mesmo terminal que a aplicação Netuno.

Para tal basta adicionar à configuração `commands` da aplicação Netuno em `📂 config/_development.json` o seguinte:

```
{
    ...
    "commands": [
        ...,
        {
            "path": "website",
            "command": "npm run start",
            "install": "npm install --force",
            "enabled": true
        }
    ]
}
```

> Sempre que editar ficheiros de configuração da aplicação Netuno será necessário reiniciar a aplicação para que esta possa assumir as novas alterações.

Por fim inicie/reinicie a sua aplicação Netuno para comprovar o seu funcionamento.

## Configuração de CORS (Cross-Origin Resource Sharing)

Para configurar o CORS para evitar possíveis erros entre comunicação da aplicação ReactJS com a aplicação Netuno através de serviços, dirija-se a:

- `📂 config/_development.json`

Repare se já existe a configuração de `cors` ou adicione este exemplo:

```
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

### HTTP OPTIONS

O browser executa uma chamada com o método OPTIONS do protocolo HTTP para o mesmo endereço do serviço, para realizar a validação se pode ou não realmente executar o serviço.

Assim os serviços precisam responder para o método OPTIONS do protocolo HTTP para funcionar sem problemas.

Para tal certifique que junto aos serviços utilizados no website tem a versão do código para `options`, que pode ser feito da seguinte forma para um serviço de exemplo:

- 📂 `server/services/exemplo/options.js`
- 📂 `server/services/exemplo.options.js`

O conteúdo poderá ser apenas:

```
_out.json(_val.map().set("result", true))
```

> Mais sobre [métodos HTTP e os Serviços](../server/services/rest.md).

## Variáveis de Ambiente

Pode ser definida a configuração das variávies de ambiente através da criação do ficheiro `website/.env`, com as definições das variáveis, por exemplo:

```
PORT=3001
WDS_SOCKET_PORT=21031
DANGEROUSLY_DISABLE_HOST_CHECK=true
```

Ou através da configuração da aplicação do Netuno, por exemplo em:

- `📂 config/_development.json`

E definindo as variáveis de ambiente na configuração do comando na parametrização `env`, por exemplo:

```
{
    ...
    "commands": [
        ...,
        {
            "env": ["PORT=3001", "WDS_SOCKET_PORT=21031", "DANGEROUSLY_DISABLE_HOST_CHECK=true"]
            "path": "website",
            "command": "npm run start",
            "install": "npm install --force",
            "enabled": true
        }
    ]
}
```

### Definir o Porto do Front-end

Pode definir qual será o porto utilizado pelo front-end em vez do porto padrão `3000`.

Para definir outro porto para executar o front-end, defina a variável de ambiente `PORT`, como por exemplo:

```
PORT=3001
```

Depois de definir a variável de ambiente deve reiniciar o servidor do frontend e o problema deverá ser ultrapassado.

### Definir Porto Externo do WebSocket

Caso o front-end não atualize automaticamente as alterações realizadas em código, pode querer dizer que a conexão com o WebSocket do webpack está a falhar.

Veja na console do browser se aparece a seguinte mensagem de erro:

`WebSocket connection to 'ws://my.host.com:3000/ws' failed: WebSocketClient`

Isto acontece quando utilizamos roteamento de portos, ou seja o porto do front-end acedido pelo browser não é o padrão `3000`, então temos que sinalizar qual é o porto do front-end para ser utilizado com o WebSocket do webpack.

Para definir o porto do front-end para as conexões de WebSocket, defina a variável de ambiente `WDS_SOCKET_PORT`, como por exemplo:

```
WDS_SOCKET_PORT=21031
```

Depois de definir a variável de ambiente deve reiniciar o servidor do frontend e o problema deverá ser ultrapassado.


### Permitir Host "Inválido"

Caso o servidor do frontend que utiliza o webpack gerar uma página de erro com a seguinte mensagem: 

`Invalid Host Header`

Isto quer dizer que o acesso está sendo feito externamente, o qual não é permitido.

Para forçar a permissão de que pode aceitar acessos externos, deve ser configurada a variável de ambeinte `DANGEROUSLY_DISABLE_HOST_CHECK`, por exemplo:

```
DANGEROUSLY_DISABLE_HOST_CHECK=true
```

Depois de definir a variável de ambiente deve reiniciar o servidor do frontend e o problema deverá ser ultrapassado.
