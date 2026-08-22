---
sidebar_position: 4
id: content
title: Conteúdo
sidebar_label: Conteúdo
---

## Introdução

O **Conteúdo** é o componente de texto/imagem mais genérico do CLUAR — usado para blocos de texto simples, texto com imagem ao lado, ou só uma imagem, dependendo do tipo escolhido.

Segue o mesmo mecanismo comum a todos os componentes, descrito em [Visão Geral](/docs/academy/cluar/components/overview) e [Tipos de Componente](/docs/academy/cluar/components/types).

## Campos

Além dos [campos comuns](/docs/academy/cluar/components/overview#campos-comuns) (Tipo, Ordem, Modo de Edição, Inverter fundo, Ações), o Conteúdo tem:

| Campo | Descrição |
|---|---|
| **Título** (`title`) | Título do bloco de conteúdo. |
| **Conteúdo** (`content` / `html_content`) | Texto do bloco. |
| **Imagem** (`image`) | Imagem associada (não usada em tipos só de texto). |
| **Imagem Alt** (`image_alt`) | Texto alternativo da imagem. |
| **Imagem Título** (`image_title`) | Atributo `title` da imagem. |
| **Largura Máxima da Imagem** (`image_max_width`) | Limita a largura da imagem, em pixels — útil para não deixar a imagem esticar demais em ecrãs largos, principalmente nos tipos onde a imagem fica ao lado do texto. |

## Tipos disponíveis

Ao contrário do Banner, o Conteúdo tem vários tipos focados em diferentes disposições de imagem e texto:

- **Padrão** (`Default`)
- **Texto** (`TextContent`) — só texto, sem imagem.
- **Imagem** (`ImageContent`) — só imagem, sem texto.
- **Imagem à esquerda** (`ImageLeft`)
- **Imagem à direita** (`ImageRight`)
- **Imagem no topo** (`ImageTop`)
- **Imagem embaixo** (`ImageBottom`)

Para os detalhes de como os tipos funcionam e como criar um novo, ver [Tipos de Componente](/docs/academy/cluar/components/types).

## Próximo passo

Continua para a [Listagem](/docs/academy/cluar/components/listing).