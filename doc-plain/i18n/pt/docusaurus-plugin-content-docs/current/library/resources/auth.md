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

#### _auth.allProvidersConfig() : [Values](/docs/library/objects/Values)
##### Descrição

Obtém todas as configurações dos provedores de autenticação.

##### Como Usar

```javascript
// Obtém as configurações dos provedores de autenticação.
const allProvidersConfig = _auth.allProvidersConfig()
_log.info('Authentication Providers Configuration', allProvidersConfig)

```

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Todas as configurações dos provedores de autenticação.

---

## altchaAdminEnabled

---

#### _auth.altchaAdminEnabled() : boolean
##### Retorno

( _boolean_ )


---

#### _auth.altchaAdminEnabled(enabled: boolean) : [Auth](/docs/library/resources/auth)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **enabled** | _boolean_ |   |

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )


---

## altchaEnabled

---

#### _auth.altchaEnabled() : boolean
##### Retorno

( _boolean_ )


---

#### _auth.altchaEnabled(enabled: boolean) : [Auth](/docs/library/resources/auth)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **enabled** | _boolean_ |   |

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )


---

## attempt

---

#### _auth.attempt() : boolean
##### Retorno

( _boolean_ )


---

## attemptReject

---

#### _auth.attemptReject() : boolean
##### Retorno

( _boolean_ )


---

#### _auth.attemptReject(reject: boolean) : [Auth](/docs/library/resources/auth)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **reject** | _boolean_ |   |

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )


---

## attemptRejectWithData

---

#### _auth.attemptRejectWithData() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _auth.attemptRejectWithData(data: java.util.List) : [Auth](/docs/library/resources/auth)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _java.util.List_ |   |

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )


---

#### _auth.attemptRejectWithData(data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [Auth](/docs/library/resources/auth)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )


---

#### _auth.attemptRejectWithData(data: [Values](/docs/library/objects/Values)) : [Auth](/docs/library/resources/auth)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )


---

## attemptsEnabled

---

#### _auth.attemptsEnabled() : boolean
##### Descrição

Se está abilitado ou não o bloqueio automático de tentativas de autenticação falhadas.

##### Retorno

( _boolean_ )

Retorna se o bloqueio automático de tentativas consecutivas falhadas na autenticação está ativo.

---

#### _auth.attemptsEnabled(attemptsEnabled: boolean) : [Auth](/docs/library/resources/auth)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **attemptsEnabled** | _boolean_ |   |

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )


---

## attemptsInterval

---

#### _auth.attemptsInterval() : int
##### Descrição

Número em minutos para definir o intervalo de tempo para realizar o bloqueio da conta.

##### Retorno

( _int_ )

Retorna o número de minutos para o intervalo de tempo para a conta bloqueada.

---

#### _auth.attemptsInterval(attemptsInterval: int) : [Auth](/docs/library/resources/auth)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **attemptsInterval** | _int_ |   |

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )


---

## attemptsMaxFails

---

#### _auth.attemptsMaxFails() : int
##### Descrição

Número máximo de tentativas de autenticação falhadas consecutivamente para realizar o bloqueio da conta.

##### Retorno

( _int_ )

Retorna o número máximo de tentativas consecutivas falhadas para bloquear a autenticação.

---

#### _auth.attemptsMaxFails(attemptsMaxFails: int) : [Auth](/docs/library/resources/auth)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **attemptsMaxFails** | _int_ |   |

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )


---

## check

---

#### _auth.check(senha: string) : boolean
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

#### _auth.check(utilizador: string, senha: string) : boolean
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

#### _auth.checkUserInJWTGroups(userId: int) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **userId** | _int_ |   |

##### Retorno

( _boolean_ )


---

## crypt

---

#### _auth.crypt(utilizador: string, senha: string) : string
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

#### _auth.getAllProvidersConfig() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## getAttemptRejectWithData

---

#### _auth.getAttemptRejectWithData(data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## getJWTGroups

---

#### _auth.getJWTGroups() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## getProviderConfig

---

#### _auth.getProviderConfig(providerCode: string) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **providerCode** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## getSignInAbortWithData

---

#### _auth.getSignInAbortWithData(data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## getSignInExtraData

---

#### _auth.getSignInExtraData(data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## isAdmin

---

#### _auth.isAdmin() : boolean
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

#### _auth.isAttempt() : boolean
##### Retorno

( _boolean_ )


---

## isAttemptReject

---

#### _auth.isAttemptReject() : boolean
##### Retorno

( _boolean_ )


---

## isAuthenticated

---

#### _auth.isAuthenticated() : boolean
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

#### _auth.isDev() : boolean
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

#### _auth.isJWT() : boolean
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

#### _auth.isProviderEnabled(providerCode: string) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **providerCode** | _string_ |   |

##### Retorno

( _boolean_ )


---

## isSession

---

#### _auth.isSession() : boolean
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

#### _auth.isSignInAbort() : boolean
##### Retorno

( _boolean_ )


---

## jwtAccessExpires

---

#### _auth.jwtAccessExpires() : int
##### Descrição

Seta o tempo de expiração do token para o que está distipulado nas configs.

##### Retorno

( _int_ )


---

## jwtCheckToken

---

#### _auth.jwtCheckToken(token: string) : boolean
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

#### _auth.jwtCheckTokenDataExpiration(dbToken: [Values](/docs/library/objects/Values)) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **dbToken** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _boolean_ )


---

## jwtCreateAccessToken

---

#### _auth.jwtCreateAccessToken(userId: int, contextData: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **userId** | _int_ |   |
| **contextData** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _auth.jwtCreateAccessToken(utilizadorId: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Descrição

Cria o token para um determinado utilizador e realiza a autenticação dele.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **utilizadorId** | _[Values](/docs/library/objects/Values)_ | Id do utilizador. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Retorna o conteúdo do utilizador inserido.

---

## jwtDBRecord

---

#### _auth.jwtDBRecord(token: string) : [Values](/docs/library/objects/Values)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **token** | _string_ |   |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## jwtData

---

#### _auth.jwtData() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## jwtEnabled

---

#### _auth.jwtEnabled() : boolean
##### Descrição

Verifica se o JWT está ativo.

##### Retorno

( _boolean_ )

Retorna se está ativado.

---

#### _auth.jwtEnabled(enabled: boolean) : [Auth](/docs/library/resources/auth)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **enabled** | _boolean_ |   |

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )


---

## jwtGroups

---

#### _auth.jwtGroups() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## jwtInvalidateToken

---

#### _auth.jwtInvalidateToken() : boolean
##### Retorno

( _boolean_ )


---

#### _auth.jwtInvalidateToken(token: string) : boolean
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **token** | _string_ |   |

##### Retorno

( _boolean_ )


---

## jwtKey

---

#### _auth.jwtKey() : javax.crypto.SecretKey
##### Retorno

( _javax.crypto.SecretKey_ )


---

## jwtRefreshAccessToken

---

#### _auth.jwtRefreshAccessToken(tokenAtualizado: string) : [Values](/docs/library/objects/Values)
##### Descrição

Substitui um token antigo pelo o novo inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tokenAtualizado** | _string_ | Token para substituir. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Retorna o token atualizado.

---

## jwtRefreshExpires

---

#### _auth.jwtRefreshExpires() : int
##### Descrição

Atualiza o tempo de expiração do token para o que está distipulado nas configs.

##### Retorno

( _int_ )


---

## jwtSignIn

---

#### _auth.jwtSignIn(userId: int, contextData: [Values](/docs/library/objects/Values)) : [Auth](/docs/library/resources/auth)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **userId** | _int_ |   |
| **contextData** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )


---

## jwtSignInData

---

#### _auth.jwtSignInData() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

## jwtToken

---

#### _auth.jwtToken() : string
##### Descrição

Verifica da existência um token autenticado.

##### Retorno

( _string_ )

Retorna o token.

---

## jwtTokenCheck

---

#### _auth.jwtTokenCheck() : boolean
##### Descrição

Verifica a existência de um token  .

##### Retorno

( _boolean_ )

Retorna a validação.

---

## load

---

#### _auth.load() : [Auth](/docs/library/resources/auth)
##### Descrição

Processa as configurações de autenticação.

##### Como Usar

```javascript
// Carrega as configurações de autenticação.
_auth.load()

```

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )

Retorna o recurso Auth padrão.

---

## logout

---

#### _auth.logout() : [Auth](/docs/library/resources/auth)
##### Descrição

Desconecta o usuário autenticado.

##### Como Usar

```javascript
// Limpa o contexto de autenticação.
_auth.logout()

```

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )

Retorna o recurso Auth padrão.

---

## providerConfig

---

#### _auth.providerConfig(codigoProvedor: string) : [Values](/docs/library/objects/Values)
##### Descrição

Obtém uma configuração específica de provedor de autenticação.

##### Como Usar

```javascript
// Obtém a configuração do provedor de autenticação para cada provedor.
_log.info('Google Provider Configuration', _auth.providerConfig('google'))
_log.info('Microsoft Provider Configuration', _auth.providerConfig('microsoft'))
_log.info('GitHub Provider Configuration', _auth.providerConfig('github'))
_log.info('Discord Provider Configuration', _auth.providerConfig('discord'))
_log.info('LDAP Provider Configuration', _auth.providerConfig('ldap'))

```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **codigoProvedor** | _string_ | Nome da chave de configuração do provedor, podendo ser: |
|   |   | - google |
|   |   | - microsoft |
|   |   | - github |
|   |   | - discord |
|   |   | - ldap |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

A configuração do provedor de autenticação.

---

## providerEnabled

---

#### _auth.providerEnabled(codigoProvedor: string) : boolean
##### Descrição

Verifica se o provedor de autenticação está ativo.

##### Como Usar

```javascript
// Checa os provedores de autenticação habilitados.
_log.info('Google Provider Enabled', _auth.providerEnabled('google'))
_log.info('Microsoft Provider Enabled', _auth.providerEnabled('microsoft'))
_log.info('GitHub Provider Enabled', _auth.providerEnabled('github'))
_log.info('Discord Provider Enabled', _auth.providerEnabled('discord'))
_log.info('LDAP Provider Enabled', _auth.providerEnabled('ldap'))

```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **codigoProvedor** | _string_ | Nome da chave de configuração do provedor, podendo ser: |
|   |   | - google |
|   |   | - microsoft |
|   |   | - github |
|   |   | - discord |
|   |   | - ldap |

##### Retorno

( _boolean_ )

Se o provedor de autenticação estiver ativo retorna _true_.

---

## setAttemptReject

---

#### _auth.setAttemptReject(reject: boolean) : [Auth](/docs/library/resources/auth)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **reject** | _boolean_ |   |

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )


---

## setAttemptRejectWithData

---

#### _auth.setAttemptRejectWithData(data: java.util.List) : [Auth](/docs/library/resources/auth)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _java.util.List_ |   |

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )


---

#### _auth.setAttemptRejectWithData(data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [Auth](/docs/library/resources/auth)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )


---

#### _auth.setAttemptRejectWithData(data: [Values](/docs/library/objects/Values)) : [Auth](/docs/library/resources/auth)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )


---

## setSignInAbort

---

#### _auth.setSignInAbort(abort: boolean) : [Auth](/docs/library/resources/auth)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **abort** | _boolean_ |   |

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )


---

## setSignInAbortWithData

---

#### _auth.setSignInAbortWithData(data: java.util.List) : [Auth](/docs/library/resources/auth)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _java.util.List_ |   |

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )


---

#### _auth.setSignInAbortWithData(data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [Auth](/docs/library/resources/auth)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )


---

#### _auth.setSignInAbortWithData(data: [Values](/docs/library/objects/Values)) : [Auth](/docs/library/resources/auth)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )


---

## setSignInExtraData

---

#### _auth.setSignInExtraData(data: java.util.List) : [Auth](/docs/library/resources/auth)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _java.util.List_ |   |

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )


---

#### _auth.setSignInExtraData(data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [Auth](/docs/library/resources/auth)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )


---

#### _auth.setSignInExtraData(data: [Values](/docs/library/objects/Values)) : [Auth](/docs/library/resources/auth)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )


---

## signInAbort

---

#### _auth.signInAbort() : boolean
##### Retorno

( _boolean_ )


---

#### _auth.signInAbort(abort: boolean) : [Auth](/docs/library/resources/auth)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **abort** | _boolean_ |   |

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )


---

## signInAbortWithData

---

#### _auth.signInAbortWithData() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _auth.signInAbortWithData(data: java.util.List) : [Auth](/docs/library/resources/auth)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _java.util.List_ |   |

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )


---

#### _auth.signInAbortWithData(data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [Auth](/docs/library/resources/auth)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )


---

#### _auth.signInAbortWithData(data: [Values](/docs/library/objects/Values)) : [Auth](/docs/library/resources/auth)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )


---

## signInExtraData

---

#### _auth.signInExtraData() : [Values](/docs/library/objects/Values)
##### Retorno

( _[Values](/docs/library/objects/Values)_ )


---

#### _auth.signInExtraData(data: java.util.List) : [Auth](/docs/library/resources/auth)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _java.util.List_ |   |

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )


---

#### _auth.signInExtraData(data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [Auth](/docs/library/resources/auth)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )


---

#### _auth.signInExtraData(data: [Values](/docs/library/objects/Values)) : [Auth](/docs/library/resources/auth)
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Retorno

( _[Auth](/docs/library/resources/auth)_ )


---

