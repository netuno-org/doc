---
id: jwt
title: JWT
sidebar_label: JWT
---

Manipulação de JSON Web Tokens.

---

## algorithmES

---

#### _jwt.algorithmES(bits: int) : io.jsonwebtoken.security.SignatureAlgorithm
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

#### _jwt.algorithmHS(bits: int) : io.jsonwebtoken.security.MacAlgorithm
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

#### _jwt.algorithmPS(bits: int) : io.jsonwebtoken.security.SignatureAlgorithm
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

#### _jwt.algorithmRS(bits: int) : io.jsonwebtoken.security.SignatureAlgorithm
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

#### _jwt.data(token: string) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **token** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## decode

---

#### _jwt.decode(token: string) : [Values](/docs/library/objects/Values)
##### Descrição

Codifica os valores do header e do body inseridos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **token** | _string_ | Código de acesso. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Retorna os valores decodificados.

---

## enabled

---

#### _jwt.enabled() : boolean
##### Descrição

Verifica se o JWT está ativo.

##### Retorno

( _boolean_ )

Retorna se está ativado.

---

#### _jwt.enabled(enabled: boolean) : [JWT](/docs/library/resources/jwt)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **enabled** | _boolean_ |   |

##### Retorno

( _[JWT](/docs/library/resources/jwt)_ )


---

## encode

---

#### _jwt.encode(corpo: [Values](/docs/library/objects/Values)) : string
##### Descrição

Codifica o valor do body inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **corpo** | _[Values](/docs/library/objects/Values)_ | Valor do corpo. |

##### Retorno

( _string_ )

Retorna o valores codificado.

---

#### _jwt.encode(cabeçalho: [Values](/docs/library/objects/Values), corpo: [Values](/docs/library/objects/Values)) : string
##### Descrição

Codifica os valores do header e do body inseridos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **cabeçalho** | _[Values](/docs/library/objects/Values)_ | Valor do cabeçalho. |
| **corpo** | _[Values](/docs/library/objects/Values)_ | Valor do corpo. |

##### Retorno

( _string_ )

Retorna os valores codificados.

---

## getHMACKeyFromSecret

---

#### _jwt.getHMACKeyFromSecret(secret: string) : javax.crypto.SecretKey
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **secret** | _string_ |   |

##### Retorno

( _javax.crypto.SecretKey_ )


---

## getKey

---

#### _jwt.getKey() : javax.crypto.SecretKey
##### Retorno

( _javax.crypto.SecretKey_ )


---

## init

---

#### _jwt.init() : [JWT](/docs/library/resources/jwt)
##### Retorno

( _[JWT](/docs/library/resources/jwt)_ )


---

#### _jwt.init(secret: string) : [JWT](/docs/library/resources/jwt)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **secret** | _string_ |   |

##### Retorno

( _[JWT](/docs/library/resources/jwt)_ )


---

#### _jwt.init(key: javax.crypto.SecretKey) : [JWT](/docs/library/resources/jwt)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _javax.crypto.SecretKey_ |   |

##### Retorno

( _[JWT](/docs/library/resources/jwt)_ )


---

## isEnabled

---

#### _jwt.isEnabled() : boolean
##### Retorno

( _boolean_ )


---

## key

---

#### _jwt.key() : javax.crypto.SecretKey
##### Retorno

( _javax.crypto.SecretKey_ )


---

#### _jwt.key(key: javax.crypto.SecretKey) : [JWT](/docs/library/resources/jwt)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _javax.crypto.SecretKey_ |   |

##### Retorno

( _[JWT](/docs/library/resources/jwt)_ )


---

## setEnabled

---

#### _jwt.setEnabled(enabled: boolean) : [JWT](/docs/library/resources/jwt)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **enabled** | _boolean_ |   |

##### Retorno

( _[JWT](/docs/library/resources/jwt)_ )


---

## setHMACKeyFromSecret

---

#### _jwt.setHMACKeyFromSecret(secret: string) : [JWT](/docs/library/resources/jwt)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **secret** | _string_ |   |

##### Retorno

( _[JWT](/docs/library/resources/jwt)_ )


---

## setKey

---

#### _jwt.setKey(key: javax.crypto.SecretKey) : [JWT](/docs/library/resources/jwt)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **key** | _javax.crypto.SecretKey_ |   |

##### Retorno

( _[JWT](/docs/library/resources/jwt)_ )


---

## token

---

#### _jwt.token(valores: [Values](/docs/library/objects/Values)) : string
##### Descrição

Gera um token através do jwtBuilder.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **valores** | _[Values](/docs/library/objects/Values)_ | Valores para o jwtBuilder. |

##### Retorno

( _string_ )

Retorna o que foi gerado.

---

