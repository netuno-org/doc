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

#### <span style="font-weight: normal">_cors</span>.<span style="color: #008000">add</span>(<span style="color: #FF8000">config</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[CORS](../../resources/CORS)</span>
##### Descrição

Adiciona as configurações para uma definição de CORS.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[Values](../../objects/Values)_ | A nova configuração de CORS. |

##### Retorno

( _[CORS](../../resources/CORS)_ )

Atual instância do CORS.

---

## all

---

#### <span style="font-weight: normal">_cors</span>.<span style="color: #008000">all</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Obtém todas as configurações de CORS.

##### Retorno

( _[Values](../../objects/Values)_ )

Todas as definições de CORS configuradas.

---

## getAll

---

#### <span style="font-weight: normal">_cors</span>.<span style="color: #008000">getAll</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Obtém todas as configurações de CORS.

##### Retorno

( _[Values](../../objects/Values)_ )

Todas as definições de CORS configuradas.

---

## isOriginEnabled

---

#### <span style="font-weight: normal">_cors</span>.<span style="color: #008000">isOriginEnabled</span>(<span style="color: #FF8000">origem</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
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

#### <span style="font-weight: normal">_cors</span>.<span style="color: #008000">load</span>() : <span style="font-weight: normal; font-style: italic;">[CORS](../../resources/CORS)</span>
##### Descrição

Executa a verificação da origem e realiza as definições de cabeçalho na resposta do pedido HTTP.

##### Retorno

( _[CORS](../../resources/CORS)_ )

Atual instância do CORS.

---

## removeOrigin

---

#### <span style="font-weight: normal">_cors</span>.<span style="color: #008000">removeOrigin</span>(<span style="color: #FF8000">origem</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[CORS](../../resources/CORS)</span>
##### Descrição

Remove a origem em todas as configuração que ela existir.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **origem** | _string_ | Origem que vem no cabeçalho HTTP. |

##### Retorno

( _[CORS](../../resources/CORS)_ )

Se a origem foi desativada com sucesso.

---

