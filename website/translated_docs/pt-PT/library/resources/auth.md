---
id: auth
title: Auth
sidebar_label: Auth
---

Reune as operações de validação de autenticação do Netuno, provedores, encriptação e outros.

```javascript
if (_auth.isJWT() && _auth.isAdmin()) {
    _log.info('Administrador logado com JWT Token!')
}

```

---

## allProvidersConfig

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">allProvidersConfig</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Obtém todas as configurações dos provedores de autenticação.

##### Como Usar

```javascript
// Obtém as configurações dos provedores de autenticação.
const allProvidersConfig = _auth.allProvidersConfig()
_log.info('Authentication Providers Configuration', allProvidersConfig)

```

##### Retorno

( _[Values](../../objects/Values)_ )

Todas as configurações dos provedores de autenticação.

---

## attempt

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">attempt</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

## attemptReject

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">attemptReject</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">attemptReject</span>(<span style="color: #FF8000">reject</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Auth](../../resources/Auth)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **reject** | _boolean_ |   |

##### Retorno

( _[Auth](../../resources/Auth)_ )


---

## attemptRejectWithData

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">attemptRejectWithData</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">attemptRejectWithData</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">java.util.List</span>) : <span style="font-weight: normal; font-style: italic;">[Auth](../../resources/Auth)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _java.util.List_ |   |

##### Retorno

( _[Auth](../../resources/Auth)_ )


---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">attemptRejectWithData</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/Config) &#124; [Exec](../../resources/Exec) &#124; [Header](../../resources/Header) &#124; [Req](../../resources/Req) &#124; [Res](../../resources/Res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[Auth](../../resources/Auth)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Config](../../resources/Config) &#124; [Exec](../../resources/Exec) &#124; [Header](../../resources/Header) &#124; [Req](../../resources/Req) &#124; [Res](../../resources/Res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ |   |

##### Retorno

( _[Auth](../../resources/Auth)_ )


---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">attemptRejectWithData</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Auth](../../resources/Auth)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Auth](../../resources/Auth)_ )


---

## check

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">check</span>(<span style="color: #FF8000">senha</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Verifica se a password é válida para o utilizador autenticado.

##### Como Usar

```javascript
if (_auth.check(_req.getString('pass'))) {
    _log.info('Senha válida!')
} else {
    _log.info('Senha inválida!')
}

```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **senha** | _string_ | Senha. |

##### Retorno

( _boolean_ )

Retorna o resultado da validação dos dados de autenticação.

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">check</span>(<span style="color: #FF8000">utilizador</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">senha</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Verifica se os dados de autenticação, utilizador e senha, são válidos.

##### Como Usar

```javascript
if (_auth.check(_req.getString('user'), _req.getString('pass'))) {
    _log.info('Login válido!')
} else {
    _log.info('Login inválido!')
}

```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **utilizador** | _string_ | Utilizador. |
| **senha** | _string_ | Senha. |

##### Retorno

( _boolean_ )

Retorna o resultado da validação dos dados de autenticação.

---

## checkUserInJWTGroups

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">checkUserInJWTGroups</span>(<span style="color: #FF8000">userId</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **userId** | _int_ |   |

##### Retorno

( _boolean_ )


---

## crypt

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">crypt</span>(<span style="color: #FF8000">utilizador</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">senha</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Gera uma password segura encriptada para um determinado utilizador.

##### Como Usar

```javascript
// Gera a senha segura para um usuário.
_log.info('Senha segura: '+ _auth.crypt('meu-utilizador', 'minha-senha'))

```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **utilizador** | _string_ | Utilizador. |
| **senha** | _string_ | Senha. |

##### Retorno

( _string_ )

Retorna a encriptação da password segura.

---

## getAllProvidersConfig

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">getAllProvidersConfig</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Retorno

( _[Values](../../objects/Values)_ )


---

## getAttemptRejectWithData

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">getAttemptRejectWithData</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## getJWTGroups

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">getJWTGroups</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Retorno

( _[Values](../../objects/Values)_ )


---

## getProviderConfig

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">getProviderConfig</span>(<span style="color: #FF8000">providerCode</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **providerCode** | _string_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## getSignInAbortWithData

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">getSignInAbortWithData</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## getSignInExtraData

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">getSignInExtraData</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## isAdmin

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">isAdmin</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Verifica se o utilizador que está autenticado é **admin**_istrator_.

##### Como Usar

```javascript
if (_auth.isAdmin()) {
    _log.info('Administrador Logado!')
}

```

##### Retorno

( _boolean_ )

Se o utilizador que está autenticado é **admin** (administrador) então retorna _true_.

---

## isAttempt

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">isAttempt</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

## isAttemptReject

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">isAttemptReject</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

## isAuthenticated

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">isAuthenticated</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Indica se há alguém autenticado processando o pedido.

##### Como Usar

```javascript
if (_auth.isAuthenticated()) {
    _log.info('Há alguém autenticado.')
}

```

##### Retorno

( _boolean_ )

Se há alguém autenticado retorna _true_.

---

## isDev

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">isDev</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Verifica se o utilizador que está autenticado é **dev**_eloper_.

##### Como Usar

```javascript
if (_auth.isDev()) {
    _log.info('Desenvolvedor Logado!')
}

```

##### Retorno

( _boolean_ )

Se o utilizador que está autenticado é **dev** (desenvolvedor) então retorna _true_.

---

## isJWT

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">isJWT</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Indica se o utilizador está autenticado com JSON Web Token.

##### Como Usar

```javascript
if (_auth.isJWT()) {
    _log.info('Logado com JWT!')
}

```

##### Retorno

( _boolean_ )

Se o utilizador está autenticado com JSON Web Token retorna _true_.

---

## isProviderEnabled

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">isProviderEnabled</span>(<span style="color: #FF8000">providerCode</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **providerCode** | _string_ |   |

##### Retorno

( _boolean_ )


---

## isSession

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">isSession</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Indica se o utilizador está autenticado com sessão.

##### Como Usar

```javascript
if (_auth.isSession()) {
    _log.info('Logado com sessão!')
}

```

##### Retorno

( _boolean_ )

Se o utilizador está autenticado com JSON Web Token retorna _true_.

---

## isSignInAbort

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">isSignInAbort</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

## jwtAccessExpires

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">jwtAccessExpires</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Descrição

Seta o tempo de expiração do token para o que está distipulado nas configs.

##### Retorno

( _int_ )


---

## jwtCheckToken

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">jwtCheckToken</span>(<span style="color: #FF8000">token</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
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

## jwtCheckTokenDataExpiration

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">jwtCheckTokenDataExpiration</span>(<span style="color: #FF8000">dbToken</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dbToken** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

## jwtCreateAccessToken

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">jwtCreateAccessToken</span>(<span style="color: #FF8000">userId</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">contextData</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **userId** | _int_ |   |
| **contextData** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">jwtCreateAccessToken</span>(<span style="color: #FF8000">utilizadorId</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Cria o token para um determinado utilizador e realiza a autenticação dele.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **utilizadorId** | _[Values](../../objects/Values)_ | Id do utilizador. |

##### Retorno

( _[Values](../../objects/Values)_ )

Retorna o conteúdo do utilizador inserido.

---

## jwtDBRecord

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">jwtDBRecord</span>(<span style="color: #FF8000">token</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **token** | _string_ |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## jwtData

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">jwtData</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Retorno

( _[Values](../../objects/Values)_ )


---

## jwtEnabled

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">jwtEnabled</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Verifica se o JWT está ativo.

##### Retorno

( _boolean_ )

Retorna se está ativado.

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">jwtEnabled</span>(<span style="color: #FF8000">enabled</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Auth](../../resources/Auth)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **enabled** | _boolean_ |   |

##### Retorno

( _[Auth](../../resources/Auth)_ )


---

## jwtGroups

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">jwtGroups</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Retorno

( _[Values](../../objects/Values)_ )


---

## jwtInvalidateToken

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">jwtInvalidateToken</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">jwtInvalidateToken</span>(<span style="color: #FF8000">token</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **token** | _string_ |   |

##### Retorno

( _boolean_ )


---

## jwtKey

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">jwtKey</span>() : <span style="font-weight: normal; font-style: italic;">javax.crypto.SecretKey</span>
##### Retorno

( _javax.crypto.SecretKey_ )


---

## jwtRefreshAccessToken

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">jwtRefreshAccessToken</span>(<span style="color: #FF8000">tokenAtualizado</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
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

## jwtRefreshExpires

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">jwtRefreshExpires</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Descrição

Atualiza o tempo de expiração do token para o que está distipulado nas configs.

##### Retorno

( _int_ )


---

## jwtSignIn

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">jwtSignIn</span>(<span style="color: #FF8000">userId</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">contextData</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Auth](../../resources/Auth)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **userId** | _int_ |   |
| **contextData** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Auth](../../resources/Auth)_ )


---

## jwtSignInData

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">jwtSignInData</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Retorno

( _[Values](../../objects/Values)_ )


---

## jwtToken

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">jwtToken</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Verifica da existência um token autenticado.

##### Retorno

( _string_ )

Retorna o token.

---

## jwtTokenCheck

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">jwtTokenCheck</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Verifica a existência de um token  .

##### Retorno

( _boolean_ )

Retorna a validação.

---

## load

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">load</span>() : <span style="font-weight: normal; font-style: italic;">[Auth](../../resources/Auth)</span>
##### Descrição

Processa as configurações de autenticação.

##### Como Usar

```javascript
// Carrega as configurações de autenticação.
_auth.load()

```

##### Retorno

( _[Auth](../../resources/Auth)_ )

Retorna o recurso Auth padrão.

---

## logout

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">logout</span>() : <span style="font-weight: normal; font-style: italic;">[Auth](../../resources/Auth)</span>
##### Descrição

Desconecta o usuário autenticado.

##### Como Usar

```javascript
// Limpa o contexto de autenticação.
_auth.logout()

```

##### Retorno

( _[Auth](../../resources/Auth)_ )

Retorna o recurso Auth padrão.

---

## providerConfig

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">providerConfig</span>(<span style="color: #FF8000">codigoProvedor</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Obtém uma configuração específica de provedor de autenticação.

##### Como Usar

```javascript
// Obtém a configuração do provedor de autenticação para cada provedor.
_log.info('Google Provider Configuration', _auth.providerConfig('google'))
_log.info('GitHub Provider Configuration', _auth.providerConfig('github'))
_log.info('Discord Provider Configuration', _auth.providerConfig('discord'))
_log.info('LDAP Provider Configuration', _auth.providerConfig('ldap'))

```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **codigoProvedor** | _string_ | Nome da chave de configuração do provedor, podendo ser: |
|   |   | - google |
|   |   | - github |
|   |   | - discord |
|   |   | - ldap |

##### Retorno

( _[Values](../../objects/Values)_ )

A configuração do provedor de autenticação.

---

## providerEnabled

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">providerEnabled</span>(<span style="color: #FF8000">codigoProvedor</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Verifica se o provedor de autenticação está ativo.

##### Como Usar

```javascript
// Checa os provedores de autenticação habilitados.
_log.info('Google Provider Enabled', _auth.providerEnabled('google'))
_log.info('GitHub Provider Enabled', _auth.providerEnabled('github'))
_log.info('Discord Provider Enabled', _auth.providerEnabled('discord'))
_log.info('LDAP Provider Enabled', _auth.providerEnabled('ldap'))

```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **codigoProvedor** | _string_ | Nome da chave de configuração do provedor, podendo ser: |
|   |   | - google |
|   |   | - github |
|   |   | - discord |
|   |   | - ldap |

##### Retorno

( _boolean_ )

Se o provedor de autenticação estiver ativo retorna _true_.

---

## setAttemptReject

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">setAttemptReject</span>(<span style="color: #FF8000">reject</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Auth](../../resources/Auth)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **reject** | _boolean_ |   |

##### Retorno

( _[Auth](../../resources/Auth)_ )


---

## setAttemptRejectWithData

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">setAttemptRejectWithData</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">java.util.List</span>) : <span style="font-weight: normal; font-style: italic;">[Auth](../../resources/Auth)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _java.util.List_ |   |

##### Retorno

( _[Auth](../../resources/Auth)_ )


---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">setAttemptRejectWithData</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/Config) &#124; [Exec](../../resources/Exec) &#124; [Header](../../resources/Header) &#124; [Req](../../resources/Req) &#124; [Res](../../resources/Res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[Auth](../../resources/Auth)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Config](../../resources/Config) &#124; [Exec](../../resources/Exec) &#124; [Header](../../resources/Header) &#124; [Req](../../resources/Req) &#124; [Res](../../resources/Res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ |   |

##### Retorno

( _[Auth](../../resources/Auth)_ )


---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">setAttemptRejectWithData</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Auth](../../resources/Auth)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Auth](../../resources/Auth)_ )


---

## setSignInAbort

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">setSignInAbort</span>(<span style="color: #FF8000">abort</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Auth](../../resources/Auth)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **abort** | _boolean_ |   |

##### Retorno

( _[Auth](../../resources/Auth)_ )


---

## setSignInAbortWithData

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">setSignInAbortWithData</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">java.util.List</span>) : <span style="font-weight: normal; font-style: italic;">[Auth](../../resources/Auth)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _java.util.List_ |   |

##### Retorno

( _[Auth](../../resources/Auth)_ )


---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">setSignInAbortWithData</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/Config) &#124; [Exec](../../resources/Exec) &#124; [Header](../../resources/Header) &#124; [Req](../../resources/Req) &#124; [Res](../../resources/Res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[Auth](../../resources/Auth)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Config](../../resources/Config) &#124; [Exec](../../resources/Exec) &#124; [Header](../../resources/Header) &#124; [Req](../../resources/Req) &#124; [Res](../../resources/Res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ |   |

##### Retorno

( _[Auth](../../resources/Auth)_ )


---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">setSignInAbortWithData</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Auth](../../resources/Auth)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Auth](../../resources/Auth)_ )


---

## setSignInExtraData

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">setSignInExtraData</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">java.util.List</span>) : <span style="font-weight: normal; font-style: italic;">[Auth](../../resources/Auth)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _java.util.List_ |   |

##### Retorno

( _[Auth](../../resources/Auth)_ )


---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">setSignInExtraData</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/Config) &#124; [Exec](../../resources/Exec) &#124; [Header](../../resources/Header) &#124; [Req](../../resources/Req) &#124; [Res](../../resources/Res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[Auth](../../resources/Auth)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Config](../../resources/Config) &#124; [Exec](../../resources/Exec) &#124; [Header](../../resources/Header) &#124; [Req](../../resources/Req) &#124; [Res](../../resources/Res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ |   |

##### Retorno

( _[Auth](../../resources/Auth)_ )


---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">setSignInExtraData</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Auth](../../resources/Auth)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Auth](../../resources/Auth)_ )


---

## signInAbort

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">signInAbort</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">signInAbort</span>(<span style="color: #FF8000">abort</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[Auth](../../resources/Auth)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **abort** | _boolean_ |   |

##### Retorno

( _[Auth](../../resources/Auth)_ )


---

## signInAbortWithData

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">signInAbortWithData</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">signInAbortWithData</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">java.util.List</span>) : <span style="font-weight: normal; font-style: italic;">[Auth](../../resources/Auth)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _java.util.List_ |   |

##### Retorno

( _[Auth](../../resources/Auth)_ )


---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">signInAbortWithData</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/Config) &#124; [Exec](../../resources/Exec) &#124; [Header](../../resources/Header) &#124; [Req](../../resources/Req) &#124; [Res](../../resources/Res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[Auth](../../resources/Auth)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Config](../../resources/Config) &#124; [Exec](../../resources/Exec) &#124; [Header](../../resources/Header) &#124; [Req](../../resources/Req) &#124; [Res](../../resources/Res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ |   |

##### Retorno

( _[Auth](../../resources/Auth)_ )


---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">signInAbortWithData</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Auth](../../resources/Auth)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Auth](../../resources/Auth)_ )


---

## signInExtraData

---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">signInExtraData</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Retorno

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">signInExtraData</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">java.util.List</span>) : <span style="font-weight: normal; font-style: italic;">[Auth](../../resources/Auth)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _java.util.List_ |   |

##### Retorno

( _[Auth](../../resources/Auth)_ )


---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">signInExtraData</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Config](../../resources/Config) &#124; [Exec](../../resources/Exec) &#124; [Header](../../resources/Header) &#124; [Req](../../resources/Req) &#124; [Res](../../resources/Res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)</span>) : <span style="font-weight: normal; font-style: italic;">[Auth](../../resources/Auth)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Config](../../resources/Config) &#124; [Exec](../../resources/Exec) &#124; [Header](../../resources/Header) &#124; [Req](../../resources/Req) &#124; [Res](../../resources/Res) &#124; [Values](../../objects/Values) &#124; [DataSchema](../../objects/DataSchema)_ |   |

##### Retorno

( _[Auth](../../resources/Auth)_ )


---

#### <span style="font-weight: normal">_auth</span>.<span style="color: #008000">signInExtraData</span>(<span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Auth](../../resources/Auth)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](../../objects/Values)_ |   |

##### Retorno

( _[Auth](../../resources/Auth)_ )


---

