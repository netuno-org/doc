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

Então centralizamos o código que é útil em um arquivo de código que poderá ser 
importado pelos outros que podem facilmente reutilizá-lo.

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

> Sendo que o arquivo deverá ter a extensão de acordo com a linguagem de programação utilizada.

É possível importar o arquivo no início de em qualquer outro arquivo de código, por exemplo dos serviços.

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

Por exemplo para importar um arquivo de código que está na pasta `server/core`:

```javascript
_exec.core('caminho/do/arquivo')
```

> Não é necessário colocar a extensão do arquivo que o Netuno detecta automaticamente.

### services

Exemplo de como importar um arquivo de código que está na pasta `server/services`:

```javascript
_exec.service('caminho/do/arquivo')
```

> Não é necessário colocar a extensão do arquivo que o Netuno detecta automaticamente.

## JavaScript

Como o Netuno utiliza a GraalVM, então permite importar arquivos da forma que é compatível nativamente.

Ao utilizar a importação nativa, ao contrário dos exemplos anteriores, apenas será importado o que for explicitamente
exportado, com base no padrão do CommonJS ou do ECMAScript Modules.

### CJS (CommonJS)

Para realizar a importação no padrão do CommonJS utilizamos a função de `require`, enquanto que a exportaçõa é feita 
com o `module.exports`.

Veja como na sequência deste exemplo...

Ao criar um serviço em `server/services/exemplo.js`.

Podemos importar um arquivo do `core` da seguinte forma:

```javascript
const principal = require("../core/meu-codigo/principal.cjs")
principal.executa()
```

> Repare que a indicação do caminho do arquivo no `require` será relativo ao arquivo de serviço que está sendo 
> codificado, esta mesma lógica é aplicável a qualquer outro tipo de arquivo de código JavaScript.

O valor da constante `principal` será o que é exportado pelo arquivo `core/meu-codigo/principal.cjs`, por exemplo:

```javascript
const executa = () => {
    // meu código aqui...
}

module.exports = {
    executa
};
``` 

Tanto poderá ser com a extensão `.cjs` como também `.js`, utilizar a extensão `.cjs`
é recomendada por que indica melhor que é um arquivo que realiza o `module.exports`.

### MJS (ECMAScript Modules)

Para realizar a importação no padrão do ECMAScript Modules utilizamos a instrução de `import`, enquanto que a exportaçõa
é feita com o `export default`.

Veja como na sequência do exemplo a seguir...

Ao criar um serviço em `server/services/exemplo.mjs`.

> Repare que a extensão do arquivo do serviço é `.mjs`.
> 
> Todos os arquivos, tanto o que importa como o que é importado, precisam ter a extensão: `.mjs`

Portanto para o correto funcionamento é importante que todos os arquivos envolvidos no processamento tenham a extensão
`.mjs`, para fornecer a compatibilidade onde a instrução de `import` é suportada. 

Então é possível importar um arquivo do `core` da seguinte forma:

```javascript
import principal from "./core/meu-codigo/principal.mjs"
principal.executa()
```

> Repare que a indicação do caminho do arquivo no `import` será a partir da pasta
> `server` da aplicação, e não é relativo ao arquivo que está sendo desenvolvido.
> 
> É importante que o caminho comece com: `./` 

O `./` no `import` equivale a pasta `/server` dentro da aplicação.

O valor do `principal` será o que foi exportado pelo arquivo `core/meu-codigo/principal.mjs`, por exemplo:

```javascript
const executa = () => {
    // meu código aqui...
}
export default {
    executa
};
```

### NPM - Dependências Externas

Pode ser instalado dependências externas do **NPM** dentro da pasta `/server` dentro da aplicação, onde se encontra o `package.json`.

Basta instalar a dependência normalmente com o comando `npm install`.

Por exemplo, é possível instalar o `momentjs`:

- `npm install moment`

Para importar a dependência em arquivos `.js` e `.cjs` é utilizado o `require`, segue o exemplo:

```javascript
const moment = require('moment')
_out.json(moment().format())
```

E para importar dependências externas em arquivos `.mjs` é utilizado o `import` normalmente, entretanto
apenas bibliotecas que utilizam a extensão `.mjs` nos arquivos de código podem ser 
importadas, é uma grande limitação que temos e isso dificulta a sua utilização.

Isso acontece por que todos os arquivos envolvidos no processamento precisam ter a extensão `.mjs`, só que a maioria das
dependências não utilizam este tipo de extensão.

### Módulos Nativos do NodeJS

Como a GraalVM não é totalmente compatível com os módulos nativos do NodeJS, para contornar é possível obter
maior compatibilidade com as dependências externas que implementam uma solução alternativa a estes módulos.

Então pode vir a ser necessário instalar algumas dependências exernas como alternativa que ofornecem a compatibilidade
como se fossem módulos nativos.

Segue a lista dos módulos que são suportados como alternativas para substituir os módulos nativos do NodeJS, e os
respectivos comandos de instalação:

- <a href="https://www.npmjs.com/package/buffer" target="_blank">Buffer</a>: `npm install buffer`
- <a href="https://www.npmjs.com/package/events" target="_blank">Events</a>: `npm install events`
- <a href="https://www.npmjs.com/package/util" target="_blank">Util</a>: `npm install util`
- <a href="https://www.npmjs.com/package/path-browserify" target="_blank">Path</a>: `npm install path-browserify`
- <a href="https://www.npmjs.com/package/stream-browserify" target="_blank">Stream</a>: `npm install stream-browserify`
- <a href="https://www.npmjs.com/package/http-browserify" target="_blank">HTTP</a>: `npm install http-browserify`
- <a href="https://www.npmjs.com/package/https-browserify" target="_blank">HTTPS</a>: `npm install https-browserify`

Ou seja, instalando estes módulos acima em `/server` dentro da aplicação, é fornecida a compatibilidade
com os módulos nativos do NodeJS sendo que será utilizado estes módulos alternativos.

## Conclusão

Podemos organizar o nosso código de diversas formas, mas reutilizar o código e evitar 
repetições é sempre muito importante.

Quanto mais linhas de código houver maior será a probabilidade de haver bugs.

Lembre-se de organizar bem o seu código e centralizar a sua reutilização, facilita a manutenção,
 evita bugs, e aumenta a produtividade no geral.

Apesar de ainda haver algumas limitações com a utilização de dependências externas, estamos
trabalhando para melhorar o ecossistema.

Enquanto isso, o Netuno oferece diversos recursos low-code e poliglota que suprem a maioria das necessidades.

