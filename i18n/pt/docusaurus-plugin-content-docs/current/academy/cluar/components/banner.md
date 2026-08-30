---
sidebar_position: 3
id: banner
title: Banner
sidebar_label: Banner
---

O componente de destaque em grande formato, normalmente usado no topo da página.

## Introdução

O **Banner** é o grande destaque de uma página — normalmente uma imagem que ocupa toda a largura, com um título em evidência por cima e, opcionalmente, um texto introdutório e ações (botões/links).

Segue o mesmo mecanismo comum a todos os componentes, descrito em [Visão Geral](/docs/academy/cluar/components/overview) e [Tipos de Componente](/docs/academy/cluar/components/types).

## Campos

Além dos [campos comuns](/docs/academy/cluar/components/overview#campos-comuns) (Tipo, Ordem, Modo de Edição, Inverter fundo, Ações), o Banner tem:

| Campo | Descrição |
|---|---|
| **Título** (`title`) | Título em destaque sobre a imagem. |
| **Conteúdo** (`content` / `html_content`) | Texto introdutório, abaixo do título. |
| **Imagem** (`image`) | Imagem de fundo do banner. |
| **Imagem Alt** (`image_alt`) | Texto alternativo da imagem, para acessibilidade e SEO. |
| **Imagem Título** (`image_title`) | Atributo `title` da imagem. |
| **Posição X** / **Posição Y** (`position_x`, `position_y`) | Ajustam o foco da imagem de fundo (`background-position`), em percentagem. |

## Posição da imagem

Os campos **Posição X** e **Posição Y** controlam qual parte da imagem de fundo fica sempre visível, à medida que o banner é redimensionado em diferentes resoluções — o mesmo princípio do `background-position` em CSS.

Por exemplo, `50%` / `50%` centra o foco no meio da imagem: em qualquer resolução, é o centro da imagem que permanece visível, cortando as bordas conforme necessário.

## Tipos disponíveis

Hoje existem três tipos de Banner:

- **Padrão** (`Default`) — layout base, com título, conteúdo e ações.
- **Secundário** (`Secondary`) — visualmente diferente do Padrão (estilo próprio em CSS/LESS), mas com a mesma estrutura de campos.
- **Padrão com Destaque** (`DefaultSubBanner`) — variante mais discreta, sem suporte a ações (`action: false` no `config.json`).

Para os detalhes de como os tipos funcionam e como criar um novo, ver [Tipos de Componente](/docs/academy/cluar/components/types).

## Próximo passo

Continua para o [Conteúdo](/docs/academy/cluar/components/content).