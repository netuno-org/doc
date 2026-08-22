---
sidebar_position: 6
id: slider
title: Slider
sidebar_label: Slider
---

## Introdução

O **Slider** apresenta uma sequência de itens em carrossel — cada um com imagem de fundo, título, texto e, opcionalmente, as suas próprias ações. É renderizado com a biblioteca [Keen Slider](https://keen-slider.io/).

Segue o mesmo mecanismo comum a todos os componentes, descrito em [Visão Geral](/docs/academy/cluar/components/overview) e [Tipos de Componente](/docs/academy/cluar/components/types).

## Campos do Slider

Além dos [campos comuns](/docs/academy/cluar/components/overview#campos-comuns) (Tipo, Ordem, Modo de Edição, Inverter fundo), o Slider tem:

| Campo | Descrição |
|---|---|
| **Título** (`title`) | Título do bloco de slider. |
| **Conteúdo** (`content` / `html_content`) | Texto introdutório do bloco. |
| **Imagem** (`image`) | Imagem associada ao slider em si (não aos itens). |
| **Imagem Alt** (`image_alt`) | Texto alternativo da imagem. |
| **Imagem Título** (`image_title`) | Atributo `title` da imagem. |

## Itens

Cada item pertence a um Slider (`page_slider_id`), e é um dos "slides" do carrossel:

| Campo | Descrição |
|---|---|
| **Título** (`title`) | Título do slide. |
| **Conteúdo** (`content` / `html_content`) | Texto do slide. |
| **Imagem** (`image`) | Imagem de fundo do slide. |
| **Imagem Alt** (`image_alt`) | Texto alternativo da imagem. |
| **Imagem Título** (`image_title`) | Atributo `title` da imagem. |
| **Ordem** (`sorter`) | Posição do slide dentro do carrossel. |
| **Ações** | Cada item pode ter as suas próprias ações associadas — ver [Ações](/docs/academy/cluar/actions). |

:::info Diferença em relação à Listagem
Ao contrário do Item da Listagem, o Item do Slider **tem ações próprias**, associadas individualmente (`page_slider_item_action`) — cada slide pode ter o seu próprio botão/link.
:::

## Estrutura de renderização

Assim como na Listagem, o `Item` do Slider fica **dentro** da pasta do tipo, não como pasta irmã:

```
website/src/components/Slider/
├── index.jsx              # roteador: escolhe o tipo de slider
└── Default/
    ├── index.jsx           # layout do slider, monta o carrossel com os <Item />
    ├── info.json
    ├── config.json
    └── Item/
        └── index.jsx        # cada slide, incluindo as suas próprias ações
```

## Tipos disponíveis

Hoje só existe o tipo **Padrão** (`Default`). Para criar um novo tipo de Slider (com o seu próprio `Item`), segue o mesmo processo descrito em [Tipos de Componente](/docs/academy/cluar/components/types), lembrando de incluir a subpasta `Item/` dentro do novo tipo.

## Próximo passo

Continua para a [Funcionalidade](/docs/academy/cluar/components/functionality).