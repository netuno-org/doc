---
id: auth
title: Auth
sidebar_label: Auth
---

Gathers Netuno's authentication operations, providers, encryption, and others.

```javascript
if (_auth.isJWT() && _auth.isAdmin()) {
    _log.info('Administrator logged with JWT Token!')
}

```

---

## allProvidersConfig

---

#### _auth.allProvidersConfig() : _[Values](../../objects/Values)_
##### Description

Gets all the authentication providers configuration.

##### How To Use

```javascript
// Gets the Authentication Providers Settings.
const allProvidersConfig = _auth.allProvidersConfig()
_log.info('Authentication Providers Configuration', allProvidersConfig)

```

##### Return

( _[Values](../../objects/Values)_ )

All authentication providers settings.

---

## check

---

#### _auth.check(password: string) : _boolean_
##### Description

Checks if the password is valid for the authenticated user.

##### How To Use

```javascript
if (_auth.check(_req.getString('pass'))) {
    _log.info('Valid password!')
} else {
    _log.info('Invalid password!')
}

```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| password | string | Password. |

##### Return

( _boolean_ )

Returns the result of validating authentication data.

---

#### _auth.check(username: string, password: string) : _boolean_
##### Description

Checks if the authentication data, user and password, are valid.

##### How To Use

```javascript
if (_auth.check(_req.getString('user'), _req.getString('pass'))) {
    _log.info('Valid login!')
} else {
    _log.info('Invalid login!')
}

```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| username | string | Username. |
| password | string | Password. |

##### Return

( _boolean_ )

Returns the result of the validating authentication data.

---

## crypt

---

#### _auth.crypt(username: string, password: string) : string
##### Description

Generates a secure encrypted password for a given user.

##### How To Use

```javascript
// Generates the secure password to a user.
_log.info('Secure Password: '+ _auth.crypt('my-user', 'my-pass'))

```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| username | string | Username. |
| password | string | Password. |

##### Return

( string )

Returns strong password encryption.

---

## getAllProvidersConfig

---

#### _auth.getAllProvidersConfig() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

## getProviderConfig

---

#### _auth.getProviderConfig(providerCode: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| providerCode | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## isAdmin

---

#### _auth.isAdmin() : _boolean_
##### Description

Checks if the user that is authenticated is **admin**_istrator_.

##### How To Use

```javascript
if (_auth.isAdmin()) {
    _log.info('Admin logged in!')
}

```

##### Return

( _boolean_ )

If the user that is authenticated is an **admin** (administrator) returns _true_.

---

## isAuthenticated

---

#### _auth.isAuthenticated() : _boolean_
##### Description

Indicates whether there is someone authenticated processing the request.

##### How To Use

```javascript
if (_auth.isAuthenticated()) {
    _log.info('There is someone authenticated.')
}

```

##### Return

( _boolean_ )

If someone is authenticated, it returns _true_.

---

## isDev

---

#### _auth.isDev() : _boolean_
##### Description

Checks if the user authenticated is a **dev**_eloper_.

##### How To Use

```javascript
if (_auth.isDev()) {
    _log.info('Developer logged in!')
}

```

##### Return

( _boolean_ )

if the user authenticated is a **dev** (developer) returns _true_.

---

## isJWT

---

#### _auth.isJWT() : _boolean_
##### Description

Indicates whether the user is authenticated with JSON Web Token.

##### How To Use

```javascript
if (_auth.isJWT()) {
    _log.info('Logged in with JWT!')
}

```

##### Return

( _boolean_ )

If the user is authenticated with JSON Web Token returns _true_.

---

## isProviderEnabled

---

#### _auth.isProviderEnabled(providerCode: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| providerCode | string |   |

##### Return

( _boolean_ )


---

## isSession

---

#### _auth.isSession() : _boolean_
##### Description

Indicates whether the user is authenticated with session.

##### How To Use

```javascript
if (_auth.isSession()) {
    _log.info('Logged in with session!')
}

```

##### Return

( _boolean_ )

If the user is authenticated with JSON Web Token returns _true_.

---

## load

---

#### _auth.load() : _[Auth](../../resources/Auth)_
##### Description

Processes authentication settings.

##### How To Use

```javascript
// Loads authentication settings.
_auth.load()
```

##### Return

( _[Auth](../../resources/Auth)_ )

Returns the default Auth resource.

---

## logout

---

#### _auth.logout() : _[Auth](../../resources/Auth)_
##### Description

Signs out the user authenticated.

##### How To Use

```javascript
// Clears the authentication context.
_auth.logout()

```

##### Return

( _[Auth](../../resources/Auth)_ )

Returns the default Auth resource.

---

## providerConfig

---

#### _auth.providerConfig(providerCode: string) : _[Values](../../objects/Values)_
##### Description

Gets one specific authentication provider configuration.

##### How To Use

```javascript
// Gets authentication provider setting to each provider.
_log.info('Google Provider Configuration', _auth.providerConfig('google'))
_log.info('GitHub Provider Configuration', _auth.providerConfig('github'))
_log.info('Discord Provider Configuration', _auth.providerConfig('discord'))
_log.info('LDAP Provider Configuration', _auth.providerConfig('ldap'))

```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| providerCode | string | Name of the provider configuration key, which can be: |
|   |   | - google |
|   |   | - github |
|   |   | - discord |
|   |   | - ldap |

##### Return

( _[Values](../../objects/Values)_ )

The authentication provider configuration.

---

## providerEnabled

---

#### _auth.providerEnabled(providerCode: string) : _boolean_
##### Description

Checks whether the authentication provider is active.

##### How To Use

```javascript
// Checks enabled authentication providers.
_log.info('Google Provider Enabled', _auth.providerEnabled('google'))
_log.info('GitHub Provider Enabled', _auth.providerEnabled('github'))
_log.info('Discord Provider Enabled', _auth.providerEnabled('discord'))
_log.info('LDAP Provider Enabled', _auth.providerEnabled('ldap'))

```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| providerCode | string | Name of the provider configuration key, which can be: |
|   |   | - google |
|   |   | - github |
|   |   | - discord |
|   |   | - ldap |

##### Return

( _boolean_ )

If the authentication provider is active returns _true_.

---

