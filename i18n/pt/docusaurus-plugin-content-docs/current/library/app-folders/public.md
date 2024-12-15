---
id: public
title: Public
sidebar_label: Public
---

## Public/

A pasta `public` reúne o conteúdo UI (User Interface) client-side pós compilação. Esta está sub-organizada nas pastas: `images`, `scripts` e `styles`.

  #### Estrutura da pasta public

  Ao entrar na pasta `public` vai encontrar, por omissão, a seguinte estrutura:

  ```plaintext
├─ images/
│  ├─ logo.png
│  └─ logo-main.png
├─ scripts/
│  ├─ app/
│  ├─ main.js
└─ styles/
   └─ main.css

  ```

  ### Imagens/

  A pasta `images` inicialmente contém duas imagens sobre o Netuno.  Esta pasta é onde pode colocar todas as imagens da sua aplicação.

  ### scripts/

  Em `scripts` está a saíde de dados do código javascript gerado pelo webpack, este são:
  
  O ficheiro `main.js` que agrupa todos os ficheiros javascript da aplicação e o correspondente `main.js.map`.

  ### styles/
  
  Na pasta `styles` é possível adicionar elementos CSS que serão carregados pela aplicação. Tipicamente usada para CSS globais ou para reescrever estilos do Netuno.
