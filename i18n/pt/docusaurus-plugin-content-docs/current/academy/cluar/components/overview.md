---
sidebar_position: 1
id: overview
title: Visão Geral
sidebar_label: Visão Geral
---

**Componentes** são os blocos de conteúdo que compõem uma [Página](/docs/academy/cluar/pages/overview), dentro de uma [Versão](/docs/academy/cluar/pages/versions-publishing). Existem 5 tipos:

- **Banner**
- **Conteúdo**
- **Listagem** (com Itens)
- **Slider** (com Itens)
- **Funcionalidade**

Cada um tem a sua própria entidade (`page_banner`, `page_content`, `page_listing`, `page_slider`, `page_functionality`), o seu próprio formulário no backoffice, e o seu próprio componente React no website.

## Campos comuns

Apesar de cada componente ter campos próprios, a maioria partilha uma base parecida:

| Campo | Descrição |
|---|---|
| **Tipo** (`type`) | Define qual variante visual é usada para renderizar este componente — ver [Tipos de Componente](/docs/academy/cluar/components/types). |
| **Ordem** (`sorter`) | Posição do componente dentro da página. |
| **Modo de Edição** (`edit_mode`) | Define se o conteúdo (`content`) é texto simples ou HTML (`html_content`). |
| **Inverter fundo do título / conteúdo** (`title_invert_background`, `content_invert_background`) | Inverte o esquema de cor (claro/escuro) do **editor** de texto do título/conteúdo — útil ao escrever um texto que vai ficar sobre um fundo escuro (ex.: uma imagem escura no banner), para ver o texto com contraste enquanto edita. Não altera a cor do conteúdo já publicado na página. |
| **Ações** | Botões/links associados ao componente — ver [Ações](/docs/academy/cluar/actions). Nem todos os tipos suportam ações — ver [Tipos de Componente](/docs/academy/cluar/components/types). |

## Próximo passo

Todo componente usa o mesmo mecanismo de tipos dinâmicos — ver [Tipos de Componente](/docs/academy/cluar/components/types). Depois, explora cada componente em detalhe: [Banner](/docs/academy/cluar/components/banner), [Conteúdo](/docs/academy/cluar/components/content), [Listagem](/docs/academy/cluar/components/listing), [Slider](/docs/academy/cluar/components/slider), [Funcionalidade](/docs/academy/cluar/components/functionality).