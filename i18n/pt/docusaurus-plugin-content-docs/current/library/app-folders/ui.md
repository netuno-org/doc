---
id: ui
title: UI
sidebar_label: UI
---

## ui/

Como o nome indica, em `UI` encontra-se a lógica da interface do utilizador da aplicação.

> Para desenvolver código, seja em backend ou frontend, recomendamos os editores de código gratuito:
> - Link Visual Studio Code: <a href="https://atom.io/" target="_blank">https://code.visualstudio.com/</a>
> - Link Atom: <a href="https://atom.io/" target="_blank">https://atom.io/</a>
> - Link WebStorm: <a href="https://www.jetbrains.com/webstorm/" target="_blank">https://www.jetbrains.com/webstorm/</a>

  ### Estrutura da pasta UI


  ```plaintext

├─ ui/
     ├─ src/
     │  ├─ containers/
     │  ├─ components/
     │  ├─ style/
     │  └─ index.js
     ├─ .babelrc
     ├─ .gitignore
     ├─ package.json
     ├─ package-lock.json
     ├─ README.md
     └─ webpack.config.js
  ```


  ### src/

  A pasta `src` reúne o código aplicacional do frontend. Nesta, encontra-se a organização de componentes React com valores atómicos diferentes, respectivamente `components` e `containers`.

  > Caso pretenda remover a pasta src ou mudar o nome para criar a sua estrutura não se esqueça de mudar a configuração do webpack no ficheiro `webpack.config.js`.

  #### containers/
  
  A pasta `containers` é destinada aos _container components_  React de maior valor atómico, ou seja, traduzem uma maior quantidade de lógica.
  
  #### components/
  
  A pasta `components` é destinada aos _components_  React de menor valor atómico, ou seja, traduzem uma menor quantidade de lógica. Tipicamente um comportamento mais simples que será reutilizado em múltiplos containers ou até noutro component.

  #### style/
  
  A pasta `styles`, é tipicamente para estilos globais de vários containers da aplicação. Ainda que não haja um forte padrão neste campo, sugerimos uma organização dos estilos específicos do component ou do container junto do mesmo na pasta components ou containers, respectivamente.
   
  ### Webpack e Compiladores
   
  Para que seja gerada a versão da aplicação compilada e optimiazada, para ser processada pelo browser, é necessário executar os respectivos compiladores. 
  Estes estão configurados no ficheiro `webpack.config.js` onde é possível verificar o fluxo de acções, os _loaders_ e as opções dos mesmos.
  Por omissão são processados ficheiros: `JSX, JS, LESS e CSS. 
  
  O Ficheiro `.babelrc` está em formato JSON e traduz as parametrizaçoões e módulos usadas por este _toolchain_ que funciona maioritariamente como um conversor de sintaxe. Nesta configuração também é possível localizar a biblioteca de componentes da AntDesign que vem incluída por omissão em todos os projetos do Netuno. Para mais informação sobre o Ant Design <a href="https://ant.design/" target="_blank">https://ant.design/</a> 
  
  ### Gestor de Pacotes
  
  Os ficheiros `package.json` e `package-lock.json` são utilizados pelo gestor de pacotes NPM para instalar todos as dependências necessárias do frontend. Sejam elas dependências do projeto ou apenas do desenvolvimento, como o webpack. Alternativamente ao NPM podem também ser usados outros gestores de pacotes como o YARN.
   