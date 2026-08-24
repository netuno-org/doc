---
sidebar_position: 9
id: settings
title: Configurações
sidebar_label: Configurações
---

O sistema de parâmetros chave/valor geridos pelo editor de conteúdo, sem precisar de código.

## Introdução

**Configurações** é um sistema de parâmetros chave/valor, geridos pelo editor de conteúdo no backoffice — pensado para valores do website que mudam com frequência ou variam por idioma (ex.: número de telefone, morada, links de redes sociais, uma imagem de logótipo), sem precisar mexer em código.

Envolve três formulários no backoffice:

- **Tipo** (`configuration_parameter_type`)
- **Parâmetro** (`configuration_parameter`)
- **Configuração** (`configuration`)

## Tipo

Define que tipo de valor um Parâmetro aceita. Tem apenas **Código** (`code`) e **Nome** (`name`). Já vêm criados por padrão:

| Código | Nome |
|---|---|
| `boolean` | Booleano |
| `number` | Número |
| `image` | Imagem |
| `color` | Cor |
| `text` | Texto |
| `html` | HTML |

## Parâmetro

Define uma "chave" de configuração — **Código** (`code`, usado no código para ir buscar o valor), **Descrição** e o **Tipo** (qual dos tipos acima). Ex.: um parâmetro `phone-number`, do tipo Texto.

## Configuração

É o **valor** de um Parâmetro, para um determinado **Idioma** — **Valor** (`value`, texto) ou **Imagem** (`value_img`), dependendo do tipo do parâmetro.

### Valores sem idioma (fallback genérico)

Se o campo **Idioma** de uma Configuração ficar em branco, esse valor passa a ser usado como **fallback para todos os idiomas** que não tenham um valor próprio definido para aquele parâmetro. Isto evita ter de duplicar o mesmo valor (ex.: um número de telefone que é igual em todos os idiomas) em cada idioma separadamente — só se define uma vez, sem idioma associado, e define-se um valor específico por idioma apenas onde for mesmo diferente.

## Programaticamente

A classe `website/src/common/Cluar.js` disponibiliza funções para ler configurações:

- `Cluar.configuration(parametro)` — obtém o valor de um parâmetro no idioma atual; se não houver valor para esse idioma, usa o valor sem idioma (fallback); se não houver nenhum dos dois, devolve o próprio nome do parâmetro (útil para notar rapidamente uma configuração em falta).
- `Cluar.configurationNumber(parametro)` — igual, mas converte o valor para número (0 se não for numérico).
- `Cluar.configurationMultilines(parametro)` — igual, mas converte quebras de linha em `<br>`.

## Próximo passo

Explora os [Dicionários](/docs/academy/cluar/dictionaries).