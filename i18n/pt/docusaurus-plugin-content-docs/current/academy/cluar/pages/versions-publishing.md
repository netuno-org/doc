---
sidebar_position: 2
id: versions-publishing
title: Versões e Publicação
sidebar_label: Versões e Publicação
---

## Versões

Cada página tem uma ou mais **Versões** (`page_version`), cada uma com o seu próprio estado (Rascunho / Publicada). Isto permite editar uma nova versão do conteúdo sem afetar o que está publicado — só quando a versão é marcada como Publicada é que ela passa a ser a versão ativa da página.

Os componentes de conteúdo (Banner, Conteúdo, Listagem, Slider, Funcionalidade) pertencem sempre a uma versão específica (`page_version_id`), não à página diretamente. Ou seja, editar um componente numa versão em rascunho não afeta o que está publicado.

## Publicação

Ao publicar uma página, o CLUAR:

1. Recolhe todos os componentes ativos da versão publicada (banners, conteúdos, listagens, sliders, funcionalidades, com as respetivas ações).
2. Gera um ficheiro de estrutura em JSON com esse conteúdo.
3. Em produção, pré-renderiza um `index.html` estático para o URL da página (por idioma), já com as meta tags de SEO e Open Graph preenchidas — importante para partilha em redes sociais e para motores de busca, já que o site em si é uma SPA em React.

## Próximo passo

Uma forma comum de criar uma página é duplicar outra já existente — ver [Clonar Página](/docs/academy/cluar/pages/cloning).