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
* [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import)
* [react-app-rewired](https://www.npmjs.com/package/react-app-rewired)
* [customize-cra](https://www.npmjs.com/package/customize-cra)
* [less-loader](https://www.npmjs.com/package/less-loader)
* [less](https://www.npmjs.com/package/less)
* [@netuno/service-client](https://www.npmjs.com/package/@netuno/service-client)

Para instalar os pacotes acima listados basta correr o seguinte conjunto de comandos no terminal:

```
npm install -S react-router-dom
npm install -S antd
npm install -S babel-plugin-import
npm install -S react-app-rewired
npm install -S customize-cra
npm install -S less-loader
npm install -S less
npm install -S @netuno/service-client
```

Em alternativa também pode instalar todos os pacotes de uma única vez:

```
npm i -S react-router-dom antd babel-plugin-import react-app-rewired customize-cra less-loader less @netuno/service-client
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
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
},
```

> Caso desenvolva com less, ao compilar, é provável que se depare com o erro `TypeError: this.getOptions is not a function`. Para resolver este problema por favor corra o comando `npm i less-loader@6.2.0` no diretório `📂 website` para tornar a compilação de less compatível com o ReactJS.

É necessário criar um novo ficheiro `📂 website/config-overrides.js`, que permitirá também realizar customizações de style no Ant.Design, o conteúdo inicial pode ser:

```javascript
const { override, fixBabelImports, addLessLoader } = require('customize-cra');
 
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
       '@primary-color': '#78A2CC',
       '@layout-header-background': '#ffffff',
       '@font-size-base': '16px',
       '@border-radius-base': '20px'
      },
    },
  }),
);
```

### Dark Theme

Também é possível utilizar o tema escuro do Ant.Design, instale dentro da pasta do website o módulo:

```
npm install -S @ant-design/dark-theme
```

E no `📂 website/config-overrides.js` é definido para utilizar o tema escuro e permite customizar o estilo, como por exemplo:

```javascript
const darkTheme = require('@ant-design/dark-theme');

const { override, fixBabelImports, addLessLoader } = require('customize-cra');

darkTheme.default['@primary-color'] = '#AECBD6';
darkTheme.default['@font-size-base'] = '16px';
darkTheme.default['@border-radius-base'] = '20px';

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: darkTheme.default
    },
  }),
);
```

##### Restyle

Repare que nos exemplos de código do `📂 website/config-overrides.js` acima é possível alterar facilmente as variáveis do Ant.Design definidas no Less, mais sobre a customização do Ant.Design:

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

E adicione o seguinte:

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

## Permitir Host "Inválido"

Caso o servidor do frontend que utiliza o webpack gerar uma página de erro com a seguinte mensagem: 

`Invalid Host Header`

Isto quer dizer que o acesso está sendo feito externamente, o qual não é permitido.

Para forçar a permissão de que pode aceitar acessos externos, deve ser criado o ficheiro `website/.env` com o seguinte conteúdo:

```
DANGEROUSLY_DISABLE_HOST_CHECK=true
```

Com isto ao reiniciar o servidor do frontend deverá ser ultrapassado o problema. 
