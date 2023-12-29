---
id: cors
title: CORS
sidebar_label: CORS
---

Controla o Cross-Origin Resource Sharing (CORS).<br>
Permite gerir as múltiplas origens e os respectivos cabeçalhos.

---

## add

---

#### _cors.add(config: _[Values](../../objects/Values)_) : _[CORS](../../resources/CORS)_
##### Descrição

Adiciona as configurações para uma definição de CORS.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| config | _[Values](../../objects/Values)_ | A nova configuração de CORS. |

##### Retorno

( _[CORS](../../resources/CORS)_ )

Atual instância do CORS.

---

## all

---

#### _cors.all() : _[Values](../../objects/Values)_
##### Descrição

Obtém todas as configurações de CORS.

##### Retorno

( _[Values](../../objects/Values)_ )

Todas as definições de CORS configuradas.

---

## getAll

---

#### _cors.getAll() : _[Values](../../objects/Values)_
##### Descrição

Obtém todas as configurações de CORS.

##### Retorno

( _[Values](../../objects/Values)_ )

Todas as definições de CORS configuradas.

---

## isOriginEnabled

---

#### _cors.isOriginEnabled(origem: string) : _boolean_
##### Descrição

Verifica se uma origem já foi definida e se está ativa.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| origem | string | Origem que vem no cabeçalho HTTP. |

##### Retorno

( _boolean_ )

Se a origem está ativada.

---

## load

---

#### _cors.load() : _[CORS](../../resources/CORS)_
##### Descrição

Executa a verificação da origem e realiza as definições de cabeçalho na resposta do pedido HTTP.

##### Retorno

( _[CORS](../../resources/CORS)_ )

Atual instância do CORS.

---

## removeOrigin

---

#### _cors.removeOrigin(origem: string) : _[CORS](../../resources/CORS)_
##### Descrição

Remove a origem em todas as configuração que ela existir.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| origem | string | Origem que vem no cabeçalho HTTP. |

##### Retorno

( _[CORS](../../resources/CORS)_ )

Se a origem foi desativada com sucesso.

---

