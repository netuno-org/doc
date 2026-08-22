---
sidebar_position: 7
id: functionality
title: Funcionalidade
sidebar_label: Funcionalidade
---

## Introdução

A **Funcionalidade** é diferente dos outros componentes: em vez de variações visuais do mesmo conteúdo, cada tipo é uma **funcionalidade concreta** a incluir na página — hoje, um formulário de contacto ou um mapa.

Segue o mesmo mecanismo comum a todos os componentes, descrito em [Visão Geral](/docs/academy/cluar/components/overview) e [Tipos de Componente](/docs/academy/cluar/components/types) — mas aqui, ao escolher o Tipo, está-se a escolher **qual funcionalidade** aparece na página, não apenas um estilo diferente.

## Campos

Além dos [campos comuns](/docs/academy/cluar/components/overview#campos-comuns) (Tipo, Ordem, Modo de Edição, Inverter fundo, Ações), a Funcionalidade tem:

| Campo | Descrição |
|---|---|
| **Título** (`title`) | Título do bloco. |
| **Conteúdo** (`content` / `html_content`) | Texto do bloco. |
| **Imagem** (`image`) | Imagem associada (nem todos os tipos usam). |

## Tipos disponíveis

### Formulário de Contacto (`ContactForm`)

Apresenta um formulário de contacto (nome, e-mail, mensagem), protegido por reCAPTCHA. Ao ser submetido, envia os dados para o serviço `contact` no servidor, que grava na entidade `contact` (visível no backoffice) e permite configurar alertas por e-mail.

### Mapa de Contacto (`ContactMap`)

Apresenta um mapa interativo, usando [Mapbox](https://www.mapbox.com/). Usa a configuração `settings.cluar.website.mapbox` (ver [Configuração](/docs/academy/cluar/configuration)) — nomeadamente o `accessToken` (obrigatório para o mapa funcionar) e a opção `dark` (tema claro ou escuro do mapa).

## Próximo passo

Com os 5 componentes explorados, avança para as [Ações](/docs/academy/cluar/actions), que podem ser associadas à maioria deles.