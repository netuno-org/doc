---
id: cors
title: CORS
sidebar_label: CORS
---

Controla o Cross-Origin Resource Sharing (CORS).<br/>
Permite gerir as múltiplas origens e os respectivos cabeçalhos.

---

## add

---

#### <span style={{fontWeight: 'normal'}}>_cors</span>.<span style={{color: '#008000'}}>add</span>(<span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[CORS](../resources/cors)</span>
##### Descrição

Adiciona as configurações para uma definição de CORS.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[Values](../objects/Values)_ | A nova configuração de CORS. |

##### Retorno

( _[CORS](../resources/cors)_ )

Atual instância do CORS.

---

## all

---

#### <span style={{fontWeight: 'normal'}}>_cors</span>.<span style={{color: '#008000'}}>all</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Descrição

Obtém todas as configurações de CORS.

##### Retorno

( _[Values](../objects/Values)_ )

Todas as definições de CORS configuradas.

---

## getAll

---

#### <span style={{fontWeight: 'normal'}}>_cors</span>.<span style={{color: '#008000'}}>getAll</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Descrição

Obtém todas as configurações de CORS.

##### Retorno

( _[Values](../objects/Values)_ )

Todas as definições de CORS configuradas.

---

## isOriginEnabled

---

#### <span style={{fontWeight: 'normal'}}>_cors</span>.<span style={{color: '#008000'}}>isOriginEnabled</span>(<span style={{color: '#FF8000'}}>origem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{fontWeight: 'normal'}}>_cors</span>.<span style={{color: '#008000'}}>load</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[CORS](../resources/cors)</span>
##### Descrição

Executa a verificação da origem e realiza as definições de cabeçalho na resposta do pedido HTTP.

##### Retorno

( _[CORS](../resources/cors)_ )

Atual instância do CORS.

---

## removeOrigin

---

#### <span style={{fontWeight: 'normal'}}>_cors</span>.<span style={{color: '#008000'}}>removeOrigin</span>(<span style={{color: '#FF8000'}}>origem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[CORS](../resources/cors)</span>
##### Descrição

Remove a origem em todas as configuração que ela existir.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **origem** | _string_ | Origem que vem no cabeçalho HTTP. |

##### Retorno

( _[CORS](../resources/cors)_ )

Se a origem foi desativada com sucesso.

---

