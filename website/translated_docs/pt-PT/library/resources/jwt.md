---
id: jwt
title: Jwt
sidebar_label: Jwt
---

Recurso de geração de JSON Web Tokens.

---

## accessExpires

---

#### _jwt.accessExpires() : _int_
##### Descrição

Seta o tempo de expiração do token para o que está distipulado nas configs.

##### Retorno

( _int_ )


---

## accessToken

---

#### _jwt.accessToken(utilizadorId: _int_, valores: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Descrição

Este metódo acessa ao token de um determinado utilizador e retorna o seu conteúdo.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| utilizadorId | _int_ | Id do utilizador. |
| valores | _[Values](../../objects/Values)_ | Valores do utilizador. |

##### Retorno

( _[Values](../../objects/Values)_ )

Retorna o conteúdo do utilizador inserido.

---

#### _jwt.accessToken(utilizadorId: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Descrição

Este metódo acessa ao token de um determinado utilizador e retorna o seu conteúdo.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| utilizadorId | _[Values](../../objects/Values)_ | Id do utilizador. |

##### Retorno

( _[Values](../../objects/Values)_ )

Retorna o conteúdo do utilizador inserido.

---

## check

---

#### _jwt.check() : _boolean_
##### Descrição

Verifica a existência de um token  .

##### Retorno

( _boolean_ )

Retorna a validação.

---

#### _jwt.check(token: string) : _boolean_
##### Descrição

Este metódo faz a verifica o token inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| token | string | Token para validar. |

##### Retorno

( _boolean_ )

Retorna a validação.

---

## createAppCode

---

#### _jwt.createAppCode(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## data

---

#### _jwt.data() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

#### _jwt.data(arg0: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## decode

---

#### _jwt.decode(token: string) : _[Values](../../objects/Values)_
##### Descrição

Codifica os valores do header e do body inseridos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| token | string | Código de acesso. |

##### Retorno

( _[Values](../../objects/Values)_ )

Retorna os valores decodificados.

---

## encode

---

#### _jwt.encode(corpo: _[Values](../../objects/Values)_) : string
##### Descrição

Codifica o valor do body inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| corpo | _[Values](../../objects/Values)_ | Valor do corpo. |

##### Retorno

( string )

Retorna o valores codificado.

---

#### _jwt.encode(cabeçalho: _[Values](../../objects/Values)_, corpo: _[Values](../../objects/Values)_) : string
##### Descrição

Codifica os valores do header e do body inseridos.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| cabeçalho | _[Values](../../objects/Values)_ | Valor do cabeçalho. |
| corpo | _[Values](../../objects/Values)_ | Valor do corpo. |

##### Retorno

( string )

Retorna os valores codificados.

---

## init

---

#### _jwt.init() : _JWT_
##### Retorno

( _JWT_ )


---

#### _jwt.init(arg0: string, arg1: string) : _JWT_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( _JWT_ )


---

## isAppCode

---

#### _jwt.isAppCode(arg0: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _boolean_ )


---

## isEnabled

---

#### _jwt.isEnabled() : _boolean_
##### Descrição

Verifica se um token está ativo.

##### Retorno

( _boolean_ )

Retorna ativado.

---

## refreshExpires

---

#### _jwt.refreshExpires() : _int_
##### Descrição

Atualiza o tempo de expiração do token para o que está distipulado nas configs.

##### Retorno

( _int_ )


---

## refreshToken

---

#### _jwt.refreshToken(tokenAtualizado: string) : _[Values](../../objects/Values)_
##### Descrição

Substitui um token antigo pelo o novo inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tokenAtualizado | string | Token para substituir. |

##### Retorno

( _[Values](../../objects/Values)_ )

Retorna o token atualizado.

---

## registerApp

---

#### _jwt.registerApp(arg0: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## registerWebOrigin

---

#### _jwt.registerWebOrigin(arg0: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## searchApp

---

#### _jwt.searchApp(arg0: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## searchWebOrigin

---

#### _jwt.searchWebOrigin(arg0: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## token

---

#### _jwt.token() : string
##### Descrição

Verifica da existência um token autenticado.

##### Retorno

( string )

Retorna o token.

---

#### _jwt.token(valores: _[Values](../../objects/Values)_) : string
##### Descrição

Gera um token através do jwtBuilder.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| valores | _[Values](../../objects/Values)_ | Valores para o jwtBuilder. |

##### Retorno

( string )

Retorna o que foi gerado.

---

