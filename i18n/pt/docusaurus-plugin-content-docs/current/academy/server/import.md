---
id: import
title: Importação
sidebar_label: Importação
---

## Introdução

Quando desenvolvemos precisamos utilizar múltiplos arquivos de código interligados para
organizar, reaproveitar funcionalidades para evitar repetições, facilitar a manutenção com
a centralização de funções úteis, o que reduz as linhas de código no geral e consequentemente
há uma grande redução de bugs.

Então centralizamos o código útil em outro arquivo de código que poderá ser importado pelos 
outros que podem facilmente reutilizá-lo.

Aqui será demonstrado algumas soluções que o Netuno apresenta para realizar o reaproveitamento
de código.

## Core Poliglota

Em qualquer linguagem de programação suportada pelo Netuno, podemos importar qualquer
arquivo de código que está na pasta `server/core` da aplicação.

A forma simplificada que o Netuno oferece é utilizar um formato de comentário especial
para a importação de código, onde a linha comentada tem o prefixo `_core:`, e a seguir
tem o caminho do arquivo de código a partir da pasta `server/core` da aplicação.

Então para importar o arquivo de código:

- `server/core/exemplo/arquivo`

> O arquivo deverá ter a extensão conforme a linguagem de programação utilizada.

É possível importar outro arquivo no início de qualquer arquivo de código, por exemplo, nos serviços.

No caso do JavaScript, Groovy e Kotlin:

```javascript
// _core: exemplo/arquivo

...
```

No caso do Python e Ruby:

```python
# _core: exemplo/arquivo

...
```

> Neste comentário especial de importação não é necessário colocar a extensão do arquivo,
> o Netuno detecta automaticamente.

As variáveis, constantes, funções, classes, etc, declaradas no arquivo importado são disponibilizadas
para a utilização no arquivo que realiza a importação com o este tipo comentário no início.

Para importar vários arquivos basta repetir o comentário de importação com o caminho dos outros arquivos.

No caso do JavaScript, Groovy e Kotlin, para importar diversos arquivos:

```javascript
// _core: exemplo/arquivo1
// _core: exemplo/arquivo2
// _core: exemplo/arquivo3

...
```

No caso do Python e Ruby, para importar diversos arquivos:

```python
# _core: exemplo/arquivo1
# _core: exemplo/arquivo2
# _core: exemplo/arquivo3

...
```

## Recurso Exec

Através do recurso `_exec` podemos importar código a qualquer momento durante a execução.

> As variáveis, constantes, funções, classes, etc, declaradas no arquivo de código importado podem ser utilizadas.

### core

Para executar programaticamente a importação de um arquivo de código, neste caso dentro da pasta 
`📁 server/core`:

```javascript
_exec.core('caminho/do/arquivo')
```

> Não é necessário colocar a extensão do arquivo que o Netuno detecta automaticamente.

### services

Para executar programaticamente a importação de um arquivo de código, neste caso dentro da pasta 
`📁 server/services`:

```javascript
_exec.service('caminho/do/arquivo')
```

> Não é necessário colocar a extensão do arquivo que o Netuno detecta automaticamente.

## JavaScript

O Netuno force uma base para o desenvolvimento em JavaScript, sendo a linguagem mais utilizada, especialmente
por que em JavaScript tanto programamos o front-end como o back-end, permite realizar o desenvolimento full-stack
utilizando a mesma linguagem de programação.

O Netuno analisa o código e detecta automaticamente se está sendo utilizado `import` (ECMAScript Modules) ou
`require` (CommonJS).

> Não deve misturar o padrão de `import` com `require`, deve ser utilizado um ou outro.

Com isso podemos utilizar sempre a extensão `.js` nos arquivos de código, e ao utilizar instruções com `import`
o Netuno vai processar como sendo ECMAScript Modules e assim podemos utilizar o `export default`.

> A utilização do `import` é recomendada sempre que possível por ser o padrão moderno.

### Importar Código

Ao utilizar a importação nativa, ao contrário dos exemplos anteriores, apenas será importado o que for
explicitamente exportado, com base no padrão do CommonJS (`require`) ou do ECMAScript Modules (`import`).

Na pasta `📁 server` contém o arquivo `package.json`, aí devemos ter a seguinte instrução:

```json
...
  "imports": {
    "#actions/*": {
      "default": "./actions/*"
    },
    "#components/*": {
      "default": "./components/*"
    },
    "#core/*": {
      "default": "./core/*"
    },
    "#reports/*": {
      "default": "./reports/*"
    },
    "#services/*": {
      "default": "./services/*"
    },
    "#setup/*": {
      "default": "./setup/*"
    },
    "#templates/*": {
      "default": "./templates/*"
    }
  },
...
```

Com isso podemos importar qualquer arquivo em qualquer outro arquivo de código, por exemplo:

```js title="server/services/profile/get.js"
import profile from "#core/lib/profile.js";

const dbProfile = profile.getLogged();
```

Já que é utilizado o `import` no arquivo importado será utilizado o `export default`:

```js title="server/core/lib/profile.js"
import {_db, _user} from "@netuno/server-types";

export default {
  getLogged: () => {
    return _db.form("profile")
      .where(_db.where("profile_user_id").equal(_user.id))
      .first();
  }
};
```

> Não é recomendado na mesma aplicação ou projeto, misturar a utilização de `import` (ECMAScript Modules) e 
> `require` (CommonJS) mesmo em arquivos diferentes e situações diferentes, é preferível sempre adotar 
> uma padronização homogénia.
> Recomendamos utilizar `import` por ser o método moderno. 

Em alternativa, se for utilizado o `require` (CommonJS) ao invés do `import` (ECMAScript Modules):

```js title="server/services/profile/get.js"
const profile = require("#core/lib/profile.js");

const dbProfile = profile.getLogged();
```

Já que é utilizado o `require` no arquivo importado será utilizado o `module.exports`:

```js title="server/core/lib/profile.js"
const {_db, _user} = require("@netuno/server-types");

module.exports = {
  getLogged: () => {
    return _db.form("profile")
      .where(_db.where("profile_user_id").equal(_user.id))
      .first();
  }
};
```

### Autocompletar e Validação do Código

Para ter a função de autocomtemplar o código com validação do código integrada nos editores, devemos na pasta
`📁 server` da aplicação realizar a instalação dos [Tipos do Servidor](https://www.npmjs.com/package/@netuno/server-types).

> Os tipos do servidor (`@netuno/server-types`) é a definição de todos os recursos de programação low-code 
> poliglota em TypeScript, o que permite os editores detectar tudo que a framework low-code poliglota do 
> Netuno oferece, mas por ser TypeScript apenas serve para auxiliar no código em JavaScript.

Dentro da pasta `📁 server` instale os [Tipos do Servidor](https://www.npmjs.com/package/@netuno/server-types):

```bash
bun add @netuno/server-types
```

Com isso no código no geral pode importar qualquer um dos recursos low-code poliglota disponível na framework do 
Netuno, por exemplo, este código de serviço:

```javascript
import {_req, _db, _out, _val} from "@netuno/server-types";

const name = _req.getString("name");

_db.form("product")
  .set("name", name)
  .insert();

_out.json(
  _val.map()
    .set("name", name)
    .set("result", true)
);
```

Repare que o editor vai validar e autocompletar o código, o que é extremamente útil e agiliza muito o 
desenvolvimento.

> Em alguns editores pode ser preciso fazer alguma configuração/ativação para detectar a pasta `📁 server` 
> como a raíz de código, por exemplo, no Visual Studio Code detecta automaticamente, mas no WebStorm é preciso 
> clicar com o botão direito em cima da pasta `server` e clicar em `Mark Directory As > Resource Root` e 
> reabrir o projeto.

## JS & NPM - Dependências Externas

Pode ser instalado dependências externas do **NPM** dentro da pasta `📁 server` dentro da aplicação, onde se 
encontra o `package.json`.

Entretanto, ao contrário do que recomendamos anteriormente, para importar bibliotecas externas utilizamos o 
`require` e neste caso podemos misturar com `import` de arquivos internos do projeto, o que não é muito 
elegante, mas é possível.

Então para adicionar uma dependência basta instalar com o comando `bun add`.

Por exemplo, é possível instalar o `momentjs`:

- `bun add moment`

Para importar dependências é utilizado o `require`, segue o exemplo:

```javascript
import {_out} from "@netuno/server-types";
const moment = require('moment')
_out.json(moment().format())
```

Outro exemplo com o `dayjs`, primeiro instale:

- `bun add dayjs`

```javascript
import {_out} from "@netuno/server-types";
const dayjs = require("dayjs");
_out.json(dayjs().format());
```

Veja um exemplo completo utilizando `date-fns`, primeiro instale:

- `bun add date-fns`

```js
import {_out} from "@netuno/server-types";

import profile from "#core/lib/profile.js";

const dbProfile = profile.getLogged();

const { formatDistance, subDays } = require('date-fns');

_out.println(formatDistance(
    subDays(new Date(), 3), new Date(), { addSuffix: true }
));
```

> Depender de bibliotecas externas são situações excepcionais, normalmente encontramos tudo o que precisamos 
> na framework low-code poliglota do Netuno. 

### Módulos Nativos do NodeJS

Como a GraalVM não é totalmente compatível com os módulos nativos do NodeJS, para contornar é possível obter
maior compatibilidade com as dependências externas que implementam uma solução alternativa a estes módulos.

É possível instalar algumas dependências externas como alternativa que oferecem a compatibilidade como se 
fossem módulos nativos.

Segue a lista dos módulos utilizados como alternativas para substituir os módulos nativos do NodeJS, e os
respectivos comandos de instalação:

- <a href="https://www.npmjs.com/package/buffer" target="_blank">Buffer</a>: `bun add buffer`
- <a href="https://www.npmjs.com/package/events" target="_blank">Events</a>: `bun add events`
- <a href="https://www.npmjs.com/package/util" target="_blank">Util</a>: `bun add util`
- <a href="https://www.npmjs.com/package/path-browserify" target="_blank">Path</a>: `bun add path-browserify`
- <a href="https://www.npmjs.com/package/stream-browserify" target="_blank">Stream</a>: `bun add stream-browserify`
- <a href="https://www.npmjs.com/package/http-browserify" target="_blank">HTTP</a>: `bun add http-browserify`
- <a href="https://www.npmjs.com/package/https-browserify" target="_blank">HTTPS</a>: `bun add https-browserify`

Lembre-se, deve instalar estes módulos acima na pasta `📁 server` dentro da aplicação, é fornecida a 
compatibilidade com os módulos nativos do NodeJS sendo que será utilizado estes módulos alternativos.

## Conclusão

Podemos organizar o nosso código de diversas formas, mas reutilizar o código e evitar 
repetições é sempre muito importante.

Quanto mais linhas de código houver maior será a probabilidade de haver bugs.

Lembre-se de organizar bem o seu código e centralizar a sua reutilização, facilita a manutenção,
 evita bugs, e aumenta a produtividade no geral.

Apesar de ainda haver algumas limitações com a utilização de dependências externas, estamos
trabalhando para melhorar o ecossistema.

Enquanto isso, o Netuno oferece diversos recursos low-code e poliglota que suprem a maioria das necessidades.
