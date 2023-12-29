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

#### _auth.allProvidersConfig() : _[Values](../../objects/Values)_
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

## check

---

#### _auth.check(senha: string) : _boolean_
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
| senha | string | Senha. |

##### Retorno

( _boolean_ )

Retorna o resultado da validação dos dados de autenticação.

---

#### _auth.check(utilizador: string, senha: string) : _boolean_
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
| utilizador | string | Utilizador. |
| senha | string | Senha. |

##### Retorno

( _boolean_ )

Retorna o resultado da validação dos dados de autenticação.

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
| utilizador | string | Utilizador. |
| senha | string | Senha. |

##### Retorno

( string )

Retorna a encriptação da password segura.

---

## getAllProvidersConfig

---

#### _auth.getAllProvidersConfig() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

## getProviderConfig

---

#### _auth.getProviderConfig(arg0: string) : _[Values](../../objects/Values)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[Values](../../objects/Values)_ )


---

## isAdmin

---

#### _auth.isAdmin() : _boolean_
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

## isAuthenticated

---

#### _auth.isAuthenticated() : _boolean_
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

#### _auth.isDev() : _boolean_
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

#### _auth.isJWT() : _boolean_
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

#### _auth.isProviderEnabled(arg0: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _boolean_ )


---

## isSession

---

#### _auth.isSession() : _boolean_
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

## load

---

#### _auth.load() : _[Auth](../../resources/Auth)_
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

#### _auth.logout() : _[Auth](../../resources/Auth)_
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

#### _auth.providerConfig(codigoProvedor: string) : _[Values](../../objects/Values)_
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
| codigoProvedor | string | Nome da chave de configuração do provedor, podendo ser: |
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

#### _auth.providerEnabled(codigoProvedor: string) : _boolean_
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
| codigoProvedor | string | Nome da chave de configuração do provedor, podendo ser: |
|   |   | - google |
|   |   | - github |
|   |   | - discord |
|   |   | - ldap |

##### Retorno

( _boolean_ )

Se o provedor de autenticação estiver ativo retorna _true_.

---

