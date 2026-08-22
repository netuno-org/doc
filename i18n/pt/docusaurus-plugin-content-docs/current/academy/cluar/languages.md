---
sidebar_position: 5
id: languages
title: Idiomas
sidebar_label: Idiomas
---

## Introdução

O CLUAR é multilíngue por padrão: cada **Página** está associada a um idioma, e o website apresenta um seletor para o visitante trocar entre os idiomas disponíveis.

Os idiomas são geridos no backoffice, através do formulário **Idioma**.

## Campos

| Campo | Descrição |
|---|---|
| **Código** (`code`) | Código internacional do idioma (ex.: `PT`, `EN`). É o valor usado para associar conteúdo (páginas, dicionário, configurações) a este idioma. |
| **Localização** (`locale`) | Localização completa (ex.: `pt`, `en`). É o valor usado no link das páginas e na troca de idioma via código. |
| **Padrão** (`default`) | Marca este idioma como o preferencial do website — é o que é carregado por omissão. |
| **Descrição** (`description`) | Nome do idioma apresentado ao visitante (ex.: "Português"). |

## Seleção de idioma no website

Existem hoje dois seletores de idioma no projeto:

- **Header do site público** (`website/src/base/Header`) — o seletor tradicional, feito com o [Menu do Ant Design](https://ant.design/components/menu/). Ao trocar de idioma, navega para `/{locale}/`. Só lista idiomas que já têm páginas publicadas (via `Cluar.pages()`), para não mostrar opções vazias.
- **`LanguageSwitch`** (`website/src/components/LanguageSwitch`) — usado dentro da Área Reservada (`ReservedArea`). É um dropdown mais simples: troca o idioma ativo e recarrega a página atual, sem navegar para outra rota.

## Programaticamente

A classe `website/src/common/Cluar.js` disponibiliza funções para trabalhar com idiomas:

- `Cluar.defaultLanguage()` — obtém o idioma marcado como padrão.
- `Cluar.currentLanguage()` — obtém o idioma ativo no momento.
- `Cluar.changeLanguage(codigoOuLocalizacao)` — ativa outro idioma programaticamente (aceita tanto o `code` como o `locale`).
- `Cluar.languages()` — obtém a lista de todos os idiomas.

## Próximo passo

Explora como o conteúdo em cada idioma é organizado nas [Páginas](/docs/academy/cluar/pages/overview).