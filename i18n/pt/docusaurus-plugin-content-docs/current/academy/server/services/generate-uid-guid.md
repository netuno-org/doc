---
id: generate-uid-guid
title: Gerar ID’s Únicos (UID/GUID)
sidebar_label: Gerar ID’s Únicos (UID/GUID)
---

## Antes de começar

Antes de proceder certifique-se que sabe criar **Serviços Web REST**, caso não o saiba visite a seguinte ligação:

* [Serviços Web Rest](rest)

É também aconselhável que, antes de começar este tutorial, se certifique que tem noções básicas em _**JavaScript**_.

## O que é um UID

Um UID (_unique identifier_), como o próprio indica é uma string única em toda a sua aplicação. É também conhecida como GUID (_global unique identifier_).

Para podermos exemplificar a geração de UID’s vamos criar um serviço.

## Geração de UIDs

Vamos agora demonstrar a criação de um UID aleatório, é bastante simples porque o Netuno já traz consigo uma função especificamente criada para este efeito:

```javascript
_out.println(
  _uid.generate()
)
```

> Note que a função `_out.println()` é só para permitir a visualização do resultado no ecrã ao efetuar a chamada do serviço no navegador

Caso tenha alguma questão não hesite em contactar-nos através dos meios apresentados no fim da página.

Bom desenvolvimento!
