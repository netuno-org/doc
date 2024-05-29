---
id: jwt
title: Jwt
sidebar_label: Jwt
---

Recurso de geração de JSON Web Tokens.

---

## algorithmES

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">algorithmES</span>(<span style="color: #FF8000">bits</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">io.jsonwebtoken.security.SignatureAlgorithm</span>
##### Descrição

Obtém o tipo de algoritmo para assinatura do tipo ECDSA.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bits** | _int_ | Quantidade de bits do algoritmo de assinatura, pode ser 256, 384 ou 512. |

##### Retorno

( _io.jsonwebtoken.security.SignatureAlgorithm_ )

Retorna o objeto do tipo de algoritmo da assinatura.

---

## algorithmHS

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">algorithmHS</span>(<span style="color: #FF8000">bits</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">io.jsonwebtoken.security.MacAlgorithm</span>
##### Descrição

Obtém o tipo de algoritmo para assinatura do tipo HMAC.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bits** | _int_ | Quantidade de bits do algoritmo de assinatura, pode ser 256, 384 ou 512. |

##### Retorno

( _io.jsonwebtoken.security.MacAlgorithm_ )

Retorna o objeto do tipo de algoritmo da assinatura.

---

## algorithmPS

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">algorithmPS</span>(<span style="color: #FF8000">bits</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">io.jsonwebtoken.security.SignatureAlgorithm</span>
##### Descrição

Obtém o tipo de algoritmo para assinatura do tipo RSASS e MGF1.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bits** | _int_ | Quantidade de bits do algoritmo de assinatura, pode ser 256, 384 ou 512. |

##### Retorno

( _io.jsonwebtoken.security.SignatureAlgorithm_ )

Retorna o objeto do tipo de algoritmo da assinatura.

---

## algorithmRS

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">algorithmRS</span>(<span style="color: #FF8000">bits</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">io.jsonwebtoken.security.SignatureAlgorithm</span>
##### Descrição

Obtém o tipo de algoritmo para assinatura do tipo RSASSA-PKCS1-v1_5.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **bits** | _int_ | Quantidade de bits do algoritmo de assinatura, pode ser 256, 384 ou 512. |

##### Retorno

( _io.jsonwebtoken.security.SignatureAlgorithm_ )

Retorna o objeto do tipo de algoritmo da assinatura.

---

## data

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">data</span>(<span style="color: #FF8000">token</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
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

## enabled

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">enabled</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Verifica se o JWT está ativo.

##### Retorno

( _boolean_ )

Retorna se está ativado.

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">enabled</span>(<span style="color: #FF8000">enabled</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[JWT](../../resources/jwt)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **enabled** | _boolean_ |   |

##### Retorno

( _[JWT](../../resources/jwt)_ )


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

## getHMACKeyFromSecret

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">getHMACKeyFromSecret</span>(<span style="color: #FF8000">secret</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">javax.crypto.SecretKey</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **secret** | _string_ |   |

##### Retorno

( _javax.crypto.SecretKey_ )


---

## getKey

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">getKey</span>() : <span style="font-weight: normal; font-style: italic;">javax.crypto.SecretKey</span>
##### Retorno

( _javax.crypto.SecretKey_ )


---

## init

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">init</span>() : <span style="font-weight: normal; font-style: italic;">[JWT](../../resources/jwt)</span>
##### Retorno

( _[JWT](../../resources/jwt)_ )


---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">init</span>(<span style="color: #FF8000">secret</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[JWT](../../resources/jwt)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **secret** | _string_ |   |

##### Retorno

( _[JWT](../../resources/jwt)_ )


---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">init</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">javax.crypto.SecretKey</span>) : <span style="font-weight: normal; font-style: italic;">[JWT](../../resources/jwt)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _javax.crypto.SecretKey_ |   |

##### Retorno

( _[JWT](../../resources/jwt)_ )


---

## isEnabled

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">isEnabled</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

## key

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">key</span>() : <span style="font-weight: normal; font-style: italic;">javax.crypto.SecretKey</span>
##### Retorno

( _javax.crypto.SecretKey_ )


---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">key</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">javax.crypto.SecretKey</span>) : <span style="font-weight: normal; font-style: italic;">[JWT](../../resources/jwt)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _javax.crypto.SecretKey_ |   |

##### Retorno

( _[JWT](../../resources/jwt)_ )


---

## setEnabled

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">setEnabled</span>(<span style="color: #FF8000">enabled</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[JWT](../../resources/jwt)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **enabled** | _boolean_ |   |

##### Retorno

( _[JWT](../../resources/jwt)_ )


---

## setHMACKeyFromSecret

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">setHMACKeyFromSecret</span>(<span style="color: #FF8000">secret</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[JWT](../../resources/jwt)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **secret** | _string_ |   |

##### Retorno

( _[JWT](../../resources/jwt)_ )


---

## setKey

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">setKey</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">javax.crypto.SecretKey</span>) : <span style="font-weight: normal; font-style: italic;">[JWT](../../resources/jwt)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _javax.crypto.SecretKey_ |   |

##### Retorno

( _[JWT](../../resources/jwt)_ )


---

## token

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

