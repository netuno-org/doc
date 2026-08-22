---
sidebar_position: 10
id: dictionaries
title: Dicionários
sidebar_label: Dicionários
---

## Introdução

**Dicionários** é o sistema de traduções de textos fixos da interface do website — rótulos, mensagens, textos de botões — coisas que não são conteúdo de página, mas texto "embutido" no código, e que ainda assim precisa de existir em cada idioma.

Envolve dois formulários no backoffice:

- **Entrada** (`dictionary_entry`)
- **Dicionário** (`dictionary`)

## Entrada

Define uma "chave" de tradução — **Código** (`code`, usado no código para ir buscar o valor) e **Descrição**. Ex.: uma entrada `contact-form-success`, usada para a mensagem de sucesso do formulário de contacto (é exatamente essa que aparece no [`ContactForm`](/docs/academy/cluar/components/functionality) da Funcionalidade).

## Dicionário

É o **valor traduzido** de uma Entrada, para um determinado **Idioma** (`language_id`) — campo **Valor** (`value`, aceita HTML).

:::info Sem valor genérico/sem idioma
Ao contrário das [Configurações](/docs/academy/cluar/settings), o Dicionário **não tem** um mecanismo de fallback sem idioma — cada Entrada precisa de um Valor definido explicitamente para cada idioma em que for usada. Se faltar a tradução num idioma, o texto que aparece é o próprio código da Entrada (ex.: `contact-form-success`), não um valor genérico.
:::

## Programaticamente

A classe `website/src/common/Cluar.js` disponibiliza funções para ler entradas do dicionário, todas devolvendo o código da entrada como resultado se não houver tradução (útil para notar traduções em falta):

- `Cluar.dictionary(entrada)` — obtém o valor traduzido no idioma atual, tal como foi guardado (pode incluir HTML).
- `Cluar.plainDictionary(entrada)` — igual, mas remove tags `<p>` e `<br>`. É a mais usada em rótulos de interface (botões, campos de formulário, notificações).
- `Cluar.plainTitle(entrada)` — igual, mas remove apenas tags `<p>`.
- `Cluar.plainHTML(entrada)` — remove todas as tags HTML.
- `Cluar.dictionaryNoParagraph(entrada)` — remove apenas tags `<p>` (equivalente ao `plainTitle`).

## Próximo passo

Explora os [Templates](/docs/academy/cluar/templates).