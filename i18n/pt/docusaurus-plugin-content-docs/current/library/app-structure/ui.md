---
id: ui
title: UI
sidebar_label: UI
---

Frontend customizado do backoffice e dashboards.

## User Interface

Como o nome indica, na pasta `📂 ui` encontra-se a lógica da interface do usuário da aplicação.

Permite realizar o desenvolvimento para alterar o comportamento do backoffice da aplicação.

É possível gerar dashboards à medida, acrescentar ou alterar funcionalidades, entre outros.

Para realizar o desenvolvimento do código geral da aplicação, seja backend ou frontend, recomendamos editores de 
código que são gratuitos, como:

- VS Codium: <a href="https://vscodium.com/" target="_blank">vscodium.com</a>
- Atom: <a href="https://atom.io/" target="_blank">atom.io</a>
- VS Code: <a href="https://vscodium.com/" target="_blank">code.visualstudio.com</a>
- WebStorm: <a href="https://www.jetbrains.com/webstorm/" target="_blank">jetbrains.com/webstorm</a>

## Estrutura da Pasta

<pre class="doc-structure__tree">
<span>./<b>ui</b>/</span>
&nbsp;<span>├─ ./<b>src</b>/</span>
&nbsp;│   <span>├─ ./<b>components</b>/</span>
&nbsp;│   │   <span>└─ ./<b>MyButton</b>/</span>
&nbsp;│   │       <span>└─ ./<b>index.jsx</b></span>
&nbsp;│   <span>├─ ./<b>containers</b>/</span>
&nbsp;│   │   <span>└─ ./<b>DashboardContainer</b>/</span>
&nbsp;│   │       <span>├─ ./<b>index.jsx</b></span>
&nbsp;│   │       <span>└─ ./<b>index.less</b></span>
&nbsp;│   <span>├─ ./<b>styles</b>/</span>
&nbsp;│   │   <span>└─ ./<b>main.less</b></span>
&nbsp;│   <span>└─ ./<b>index.jsx</b></span>
&nbsp;<span>├─ ./<b>package.json</b></span>
&nbsp;<span>├─ ./<b>vite.config.js</b></span>
&nbsp;<span>└─ ./<b>README.md</b></span>
</pre>

## Source

A pasta `📂 src` reúne o código aplicacional do frontend. Nesta pasta encontra-se a organização de componentes 
React, respectivamente `components` e `containers`.

### Contentores

A pasta `📂 containers` é destinada aos contentores, que são componentes em React para as áreas com mais 
interações, ou seja são componentes que tem mais funcionalidades, normalmente abrangem uma área considerável 
da tela e que pode agregar outros componentes de acordo com o âmbito.

Por exemplo, apresenta uma tabela de encomendas com um formulário para filtrar, e ainda um gráfico agregando 
o total mensal, tudo isso dentro de um contentor, sendo que cada coisa poderia ser um componente a parte mas 
que é agregado no contentor das encomendas no dashboard.

### Componentes

A pasta `📂 components` é destinada aos _components_ reutilizávies em React, normalmente implementam 
funcionalidades bem específicas que são úteis para serem integrados em outros componentes ou em contentores.

Tipicamente contém um comportamento mais simples sendo muito focado no seu objetivo para um determinado âmbito, 
que serve para ser reutilizado em múltiplos containers ou até em outros componentes.

Como exemplos de componentes poderia ser uma determinada tabela, um formulário, um tipo de gráfico, entre outros.

### Estilos

A pasta `📂 styles` serve tipicamente para estilos globais dos vários contentores da aplicação. Ainda que não 
haja um forte padrão neste campo, sugerimos uma organização dos estilos específicos ao `component` ou ao 
`container` junto do mesmo, ou seja internamente na respectiva pasta de componente.
 
## Vite
 
Para que seja gerada a versão de código final em JavaScript contendo o UI da aplicação que compilado e 
otimizado, e que é processada e utilizada pelo browser. É necessário executar a respectiva compilação 
do código de frontend que é codificado em React/JSX.

Está compilação é realizada pelo [Vite](https://vite.dev/) e a sua configuração e outras instruções ficam no 
arquivo:

- `vite.config.js`

Que está na raíz da pasta `📂 ui`.

## Gestor de Pacotes

O arquivo `package.json` é utilizado pelo gestor dos módulos de dependências, recomendamos o uso do 
[PNPM](https://pnpm.io/) para instalar todos as dependências necessárias do frontend.

E os comandos de execução utilizam o [Bun](https://bun.sh/), que é outra recomendação importante.

Portanto recomendamos a instalação do [Bun](https://bun.sh/) e do [PNPM](https://pnpm.io/).

## Instruções

No arquivo `README.md` contém as instruções de instalação e execução.

Para realizar a instalação das dependências, execute:

- `pnpm install`

E para executar a compilação do código de frontend em desenvolvimento:

- `pnpm run watch`

Ou se for a compilação final e definitiva otimizada para produção:

- `pnpm run build`

Por padrão a compilação cria os seguintes arquivos:

- `../public/scripts/ui.js`
- `../public/scripts/ui.js.map`
- `../public/styles/ui.css`

Estes arquivos são integrados no processamento do Netuno para realizar as devidas customizações à medida nas 
páginas de backoffice da aplicação, como dashboards e funcionalidades específicas.
