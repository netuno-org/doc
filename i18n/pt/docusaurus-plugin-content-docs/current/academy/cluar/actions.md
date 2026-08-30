---
sidebar_position: 8
id: actions
title: Ações
sidebar_label: Ações
---

Como criar e reutilizar CTAs (botões/links) associados aos componentes.

## Introdução

Uma **Ação** é, no fundo, um **CTA** (call-to-action) reutilizável — um botão/link com título, texto, imagem e destino (`link`) — que pode ser associado a [Componentes](/docs/academy/cluar/components/overview) como Banner, Conteúdo, Listagem, Slider (nos itens) e Funcionalidade.

## Campos

| Campo | Descrição |
|---|---|
| **Título** (`title`) | Título da ação, renderizado como cabeçalho (`<h4>`). |
| **Conteúdo** (`content`) | Texto descritivo da ação, renderizado como parágrafo (`<p>`). |
| **Indicação** (`indication`) | O texto do próprio link/CTA — é o que aparece escrito **dentro** do botão clicável (ex.: "Saiba mais", "Comprar agora"). |
| **Imagem** (`image`) | Imagem associada à ação (ex.: ícone). |
| **Ligação** (`link`) | Destino da ação (URL) — para onde o CTA leva ao ser clicado. |
| **Idioma** (`language_id`) | Idioma a que esta ação pertence. |
| **Parâmetro** (`parameter_id`) | Agrupa esta ação com as suas equivalentes noutros idiomas — ver abaixo. |

## Parâmetro

O **Parâmetro** (`action_parameter`, com apenas `código` e `descrição`) é um agrupador: várias Ações — cada uma no seu idioma, mas representando a **mesma funcionalidade/destino** — partilham o mesmo Parâmetro.

Isto é usado ao [clonar uma página](/docs/academy/cluar/pages/cloning) para outro idioma: para cada Ação associada a um componente da página original, o CLUAR procura, entre as Ações existentes, uma que tenha o **mesmo Parâmetro** e esteja no **idioma de destino** da clonagem. Se encontrar, associa automaticamente essa Ação (a versão já traduzida) ao componente clonado — sem precisar de a adicionar manualmente depois.

:::info É preciso criar a Ação no idioma de destino primeiro
A associação automática só funciona se já existir uma Ação com o mesmo Parâmetro no idioma para o qual se está a clonar. Se ainda não existir, a ação simplesmente não é associada ao componente clonado — fica como se não tivesse sido definida. Ou seja, o Parâmetro não traduz nem cria a Ação automaticamente; ele só liga Ações equivalentes já existentes, uma vez que tenham sido criadas em cada idioma.
:::

Por exemplo: uma Ação "Saiba mais" com Parâmetro `learn-more`, em português, e outra Ação "Learn more" com o mesmo Parâmetro `learn-more`, em inglês — ao clonar uma página de português para inglês, um Banner que tinha a primeira Ação associada passa a ter automaticamente a segunda.

## Próximo passo

Explora as [Configurações](/docs/academy/cluar/settings).