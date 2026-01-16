---
id: cors
title: CORS
sidebar_label: CORS
---

Controla o Cross-Origin Resource Sharing (CORS).

Permite gerir as múltiplas origens e os respectivos cabeçalhos.

---

## add

---

#### _cors.add(config: [Values](/docs/library/objects/Values)) : [CORS](/docs/library/resources/cors)
##### Descrição

Adiciona as configurações para uma definição de CORS.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[Values](/docs/library/objects/Values)_ | A nova configuração de CORS. |

##### Retorno

( _[CORS](/docs/library/resources/cors)_ )

Atual instância do CORS.

---

## all

---

#### _cors.all() : [Values](/docs/library/objects/Values)
##### Descrição

Obtém todas as configurações de CORS.

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Todas as definições de CORS configuradas.

---

## getAll

---

#### _cors.getAll() : [Values](/docs/library/objects/Values)
##### Descrição

Obtém todas as configurações de CORS.

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Todas as definições de CORS configuradas.

---

## isOriginEnabled

---

#### _cors.isOriginEnabled(origem: string) : boolean
##### Descrição

Verifica se uma origem já foi definida e se está ativa.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **origem** | _string_ | Origem que vem no cabeçalho HTTP. |

##### Retorno

( _boolean_ )

Se a origem está ativada.

---

## load

---

#### _cors.load() : [CORS](/docs/library/resources/cors)
##### Descrição

Executa a verificação da origem e realiza as definições de cabeçalho na resposta do pedido HTTP.

##### Retorno

( _[CORS](/docs/library/resources/cors)_ )

Atual instância do CORS.

---

## removeOrigin

---

#### _cors.removeOrigin(origem: string) : [CORS](/docs/library/resources/cors)
##### Descrição

Remove a origem em todas as configuração que ela existir.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **origem** | _string_ | Origem que vem no cabeçalho HTTP. |

##### Retorno

( _[CORS](/docs/library/resources/cors)_ )

Se a origem foi desativada com sucesso.

---

