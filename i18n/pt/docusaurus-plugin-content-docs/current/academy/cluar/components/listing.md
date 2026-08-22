---
sidebar_position: 5
id: listing
title: Listagem
sidebar_label: Listagem
---

## Introdução

A **Listagem** serve para apresentar uma série de itens relacionados — produtos, serviços, referências, notícias, e por aí fora. Cada Listagem tem um título/conteúdo introdutório próprio, e agrupa vários **Itens**, geridos à parte no backoffice (`Listagem > Item`).

Segue o mesmo mecanismo comum a todos os componentes, descrito em [Visão Geral](/docs/academy/cluar/components/overview) e [Tipos de Componente](/docs/academy/cluar/components/types).

## Campos da Listagem

Além dos [campos comuns](/docs/academy/cluar/components/overview#campos-comuns) (Tipo, Ordem, Modo de Edição, Inverter fundo, Ações), a Listagem tem:

| Campo | Descrição |
|---|---|
| **Título** (`title`) | Título da listagem. |
| **Conteúdo** (`content` / `html_content`) | Texto introdutório da listagem. |
| **Imagem** (`image`) | Imagem associada à listagem em si (não aos itens). |
| **Imagem Alt** (`image_alt`) | Texto alternativo da imagem. |
| **Imagem Título** (`image_title`) | Atributo `title` da imagem. |

## Itens

Cada item pertence a uma Listagem (`page_listing_id`), e tem os seus próprios campos:

| Campo | Descrição |
|---|---|
| **Título** (`title`) | Título do item. |
| **Conteúdo** (`content` / `html_content`) | Texto do item. |
| **Imagem** (`image`) | Imagem do item. |
| **URL** (`link`) | Link do item — para onde o utilizador vai ao clicar. |
| **Ordem** (`sorter`) | Posição do item dentro da listagem. |

Repara que o Item **não tem um campo Tipo próprio** — ele herda o tipo da Listagem a que pertence: o componente React da Listagem passa o seu `type` para cada item ao renderizá-lo.

## Estrutura de renderização

Ao contrário do Banner e do Conteúdo, onde cada tipo é uma pasta independente dentro do componente, na Listagem o componente que renderiza os itens (`Item`) fica **dentro** da pasta do tipo:

```
website/src/components/Listing/
├── index.jsx              # roteador: escolhe o tipo de listagem
└── Default/
    ├── index.jsx           # layout da listagem, renderiza os <Item />
    ├── info.json
    ├── config.json
    └── Item/
        └── index.jsx        # como cada item é renderizado, para este tipo
```

Isto faz sentido porque a forma como um item é apresentado (grelha, lista, cartões...) costuma depender diretamente do layout da listagem — por isso o `Item` de cada tipo pode ser customizado junto com o tipo em si, em vez de ser um componente genérico partilhado por todos os tipos.

## Tipos disponíveis

Hoje só existe o tipo **Padrão** (`Default`). Para criar um novo tipo de Listagem (com o seu próprio `Item`), segue o mesmo processo descrito em [Tipos de Componente](/docs/academy/cluar/components/types), lembrando de incluir a subpasta `Item/` dentro do novo tipo.

## Próximo passo

Continua para o [Slider](/docs/academy/cluar/components/slider).