---
sidebar_position: 1
id: overview
title: Visão Geral
sidebar_label: Visão Geral
---

A **Página** é a entidade central do CLUAR: representa um URL do website. Cada página pertence a um único idioma — não existe uma página "multilíngue" única, cada idioma tem a sua própria página (com o seu próprio `link`, título, conteúdo, etc.), e são ligadas entre si apenas pela ação de [clonagem](/docs/academy/cluar/pages/cloning).

## Campos

| Campo | Descrição |
|---|---|
| **Título** (`title`) | Título da página. |
| **Ligação** (`link`) | O URL da página (ex.: `/sobre-nos`). |
| **Idioma** (`language_id`) | Idioma a que esta página pertence. |
| **Pai** (`parent_id`) | Página pai, usada para construir hierarquia/breadcrumbs e submenus. |
| **Template** (`template`) | Template usado para renderizar a página (ver [Templates](/docs/academy/cluar/templates)). É um select no formulário, preenchido dinamicamente com as pastas existentes em `website/src/pages/Template/`. |
| **Estado** (`status_id`) | Rascunho ou Publicada — reflete o estado da versão atual. |
| **Menu** (`menu`) | Se marcado, a página aparece no menu de navegação. |
| **Menu Título** (`menu_title`) | Título alternativo a mostrar no menu (se vazio, usa o Título da página). |
| **Navegável** (`navigable`) | Controla se a página é acessível diretamente (mesmo sem aparecer no menu). |
| **Ordem** (`sorter`) | Posição da página entre as suas "irmãs" (mesmo `parent_id`). |
| **Descrição** / **Palavras-Chave** | Meta tags de SEO (`<meta name="description">` / `<meta name="keywords">`). |
| **Descrição para as Redes Sociais** / **Imagem para as Redes Sociais** | Usadas nas tags Open Graph (`og:description`, `og:image`) quando a página é partilhada. |

## Próximo passo

Cada página tem várias versões e passa por um fluxo de publicação — ver [Versões e Publicação](/docs/academy/cluar/pages/versions-publishing).