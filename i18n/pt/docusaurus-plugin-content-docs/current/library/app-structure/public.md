---
id: public
title: Public
sidebar_label: Public
---

Arquivos públicos com URL diretamente.

## Pasta Pública

A pasta `📂 public` reúne o conteúdo da UI (User Interface) client-side após a compilação, entre outros arquivos 
públicos como logos e ícone.

Pode conter qualquer arquivo que tenha a necessidade de ser acessado publicamente.  

## Estrutura da Pasta

Ao entrar na pasta `📂 public` vai encontrar por padrão a seguinte estrutura:

<pre class="doc-structure__tree">
<span>./<b>public</b>/</span>
&nbsp;<span>├─ ./<b>images</b>/</span>
&nbsp;│   <span>├─ ./<b>icon.png</b></span>
&nbsp;│   <span>├─ ./<b>logo-main.png</b></span>
&nbsp;│   <span>└─ ./<b>logo.png</b></span>
&nbsp;<span>├─ ./<b>scripts</b>/</span>
&nbsp;│   <span>├─ ./<b>ui.js</b></span>
&nbsp;│   <span>└─ ./<b>ui.js.map</b></span>
&nbsp;<span>└─ ./<b>styles</b>/</span>
&nbsp;    <span>├─ ./<b>main.css</b></span>
&nbsp;    <span>└─ ./<b>ui.css</b></span>
</pre>

## Imagens

A pasta `📂 images` inicialmente contém os logos da aplicação e o ícone.

Nesta pasta é onde pode colocar todas as imagens públicas da sua aplicação.

### icon.png

Ícone da aplicação, aparece na aba do browser (favicon).

### logo.png

É a imagem de logo que é apresentada na página de login do backoffice e nas páginas de erros. 

### logo-main.png

É a imagem de logo que é apresentada no cabeçalho (_header_) após realizar o login e entrar no backoffice.

## Scripts

Na pasta `📂 scripts` está o código JavaScript final gerado pela compilação da UI, é onde outros arquivos 
públicos de JavaScript podem ser colocados. 

### ui.js

O arquivo `ui.js` é a compilação de código final do UI.

Tipicamente a UI é desenvolvida em React e LESS, sendo que é utilizado o [Vite](https://vite.dev/) para realizar a compilação 
do bundle de JavaScript final, que é o arquivo `ui.js`.

As instruções de compilação ficam em `ui/vite.config.js`, neste arquivo contém os detalhes de como o `ui.js` 
é processado e gerado.

### ui.js.map

O arquivo `ui.js.map` é o source maps da UI, este arquivo é importante para indicar qual é o código original 
quando é feita a depuração de erros na _console_ do browser.

## Styles
  
Na pasta `📂 styles` deve conter os arquivos CSS que são utilizados para a estilização da aplicação.

### main.css

No `main.css` tipicamente é utilizado para CSS globais ou para alterar estilos padrão do Netuno.

### ui.css

O `ui.css` é o CSS gerado a partir da compilação da UI.

Tipicamente a UI é desenvolvida em React e LESS, sendo que é utilizado o [Vite](https://vite.dev/) para realizar a compilação 
do bundle de CSS final que é o `ui.css`.

As instruções de compilação ficam em `ui/vite.config.js`, neste arquivo contém os detalhes de como o `ui.css` 
é gerado.
