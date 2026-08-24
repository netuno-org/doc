---
sidebar_position: 1
id: overview
title: Visão Geral
sidebar_label: Visão Geral
---

CLUAR é um CMS open source, construído sobre o [Netuno](https://www.netuno.org/), para a criação de websites multilíngues. Os componentes visuais das páginas (banners, listagens, sliders, etc.) são desenvolvidos em ReactJS, com [Ant Design](https://ant.design/) para a interface, [React Router](https://reactrouter.com/) para a navegação e [Less](https://lesscss.org/) para os estilos — enquanto o conteúdo (páginas, textos, imagens, idiomas, menus) é gerido através de um backoffice, sem necessidade de programar.

O código está disponível no [repositório do CLUAR no GitHub](https://github.com/netuno-org/cluar) — contribuições são bem-vindas.

## Modelo de conteúdo

O conteúdo do CLUAR segue a estrutura **Página → Versão → Componentes**:

- Cada **Página** representa um URL do site (`link`), com título, menu, SEO, etc.
- Cada página tem uma ou mais **Versões**, que permitem trabalhar num rascunho sem afetar o que já está publicado.
- Dentro de cada versão entram os **Componentes** de conteúdo — Banner, Conteúdo, Listagem, Slider e Funcionalidade — que são os blocos que efetivamente aparecem na página, cada um com o seu tipo visual e, opcionalmente, ações (botões/links) associadas.

## Arquitetura do projeto

O projeto está dividido em quatro partes:

- **`server`** — a aplicação Netuno: entidades de dados, serviços REST, e os scripts de configuração inicial (`setup`).
- **`website`** — o site em ReactJS que consome os dados via REST e renderiza as páginas.
- **`ui`** — extensões ao backoffice do Netuno específicas do CLUAR.
- **`config`** — configuração de ambiente (base de dados, autenticação, definições gerais).

## Próximos passos

- [Instalação](/docs/academy/cluar/install)
- [Configuração](/docs/academy/cluar/configuration)
- [Componentes](/docs/academy/cluar/components/overview)
- [Páginas](/docs/academy/cluar/pages/overview)
- [Idiomas](/docs/academy/cluar/languages)
- [Permissões](/docs/academy/cluar/permissions)