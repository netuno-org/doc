---
id: jwt
title: Jwt
sidebar_label: Jwt
---

Recurso de geração de JSON Web Tokens.

---

## accessExpires

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">accessExpires</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Descrição

Seta o tempo de expiração do token para o que está distipulado nas configs.

##### Retorno

( _int_ )


---

## accessToken

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">accessToken</span>(<span style="color: #FF8000">utilizadorId</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">valores</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Este metódo acessa ao token de um determinado utilizador e retorna o seu conteúdo.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **utilizadorId** | _int_ | Id do utilizador. |
| **valores** | _[Values](../../objects/Values)_ | Valores do utilizador. |

##### Retorno

( _[Values](../../objects/Values)_ )

Retorna o conteúdo do utilizador inserido.

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">accessToken</span>(<span style="color: #FF8000">utilizadorId</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Este metódo acessa ao token de um determinado utilizador e retorna o seu conteúdo.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **utilizadorId** | _[Values](../../objects/Values)_ | Id do utilizador. |

##### Retorno

( _[Values](../../objects/Values)_ )

Retorna o conteúdo do utilizador inserido.

---

## check

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">check</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Verifica a existência de um token  .

##### Retorno

( _boolean_ )

Retorna a validação.

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">check</span>(<span style="color: #FF8000">token</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Este metódo faz a verifica o token inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **token** | _string_ | Token para validar. |

##### Retorno

( _boolean_ )

Retorna a validação.

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">check</span>(<span style="color: #FF8000">token</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Este metódo faz a verifica o token inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **token** | _[Values](../../objects/Values)_ | Token para validar. |

##### Retorno

( _boolean_ )

Retorna a validação.

---

## data

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">data</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">data</span>(<span style="color: #FF8000">token</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **token** | _string_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## dbRecord

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">dbRecord</span>(<span style="color: #FF8000">token</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **token** | _string_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## decode

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">decode</span>(<span style="color: #FF8000">token</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Codifica os valores do header e do body inseridos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **token** | _string_ | Código de acesso. |

##### Retorno

( _[Values](../../objects/Values)_ )

Retorna os valores decodificados.

---

## encode

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">encode</span>(<span style="color: #FF8000">corpo</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Codifica o valor do body inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **corpo** | _[Values](../../objects/Values)_ | Valor do corpo. |

##### Retorno

( _string_ )

Retorna o valores codificado.

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">encode</span>(<span style="color: #FF8000">cabeçalho</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>, <span style="color: #FF8000">corpo</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Codifica os valores do header e do body inseridos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **cabeçalho** | _[Values](../../objects/Values)_ | Valor do cabeçalho. |
| **corpo** | _[Values](../../objects/Values)_ | Valor do corpo. |

##### Retorno

( _string_ )

Retorna os valores codificados.

---

## init

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">init</span>() : <span style="font-weight: normal; font-style: italic;">[JWT](../../resources/JWT)</span>
##### Retorno

( _[JWT](../../resources/JWT)_ )


---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">init</span>(<span style="color: #FF8000">secret</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">algorithm</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[JWT](../../resources/JWT)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **secret** | _string_ |   |
| **algorithm** | _string_ |   |

##### Retorno

( _[JWT](../../resources/JWT)_ )


---

## isEnabled

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">isEnabled</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Verifica se um token está ativo.

##### Retorno

( _boolean_ )

Retorna ativado.

---

## refreshExpires

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">refreshExpires</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Descrição

Atualiza o tempo de expiração do token para o que está distipulado nas configs.

##### Retorno

( _int_ )


---

## refreshToken

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">refreshToken</span>(<span style="color: #FF8000">tokenAtualizado</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Substitui um token antigo pelo o novo inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tokenAtualizado** | _string_ | Token para substituir. |

##### Retorno

( _[Values](../../objects/Values)_ )

Retorna o token atualizado.

---

## token

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">token</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Verifica da existência um token autenticado.

##### Retorno

( _string_ )

Retorna o token.

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">token</span>(<span style="color: #FF8000">valores</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Gera um token através do jwtBuilder.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valores** | _[Values](../../objects/Values)_ | Valores para o jwtBuilder. |

##### Retorno

( _string_ )

Retorna o que foi gerado.

---

