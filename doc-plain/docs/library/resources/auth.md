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

#### _auth.allProvidersConfig() : [Values](/docs/library/objects/Values)
##### Description

Gets all the authentication providers configuration.

##### How To Use

```javascript
// Gets the Authentication Providers Settings.
const allProvidersConfig = _auth.allProvidersConfig()
_log.info('Authentication Providers Configuration', allProvidersConfig)

```

##### Return

( _[Values](/docs/library/objects/Values)_ )

All authentication providers settings.

---

## altchaAdminEnabled

---

#### _auth.altchaAdminEnabled() : boolean
##### Return

( _boolean_ )


---

#### _auth.altchaAdminEnabled(enabled: boolean) : [Auth](/docs/library/resources/auth)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

## altchaEnabled

---

#### _auth.altchaEnabled() : boolean
##### Return

( _boolean_ )


---

#### _auth.altchaEnabled(enabled: boolean) : [Auth](/docs/library/resources/auth)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

## attempt

---

#### _auth.attempt() : boolean
##### Return

( _boolean_ )


---

## attemptReject

---

#### _auth.attemptReject() : boolean
##### Return

( _boolean_ )


---

#### _auth.attemptReject(reject: boolean) : [Auth](/docs/library/resources/auth)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **reject** | _boolean_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

## attemptRejectWithData

---

#### _auth.attemptRejectWithData() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _auth.attemptRejectWithData(data: java.util.List) : [Auth](/docs/library/resources/auth)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _java.util.List_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

#### _auth.attemptRejectWithData(data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [Auth](/docs/library/resources/auth)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

#### _auth.attemptRejectWithData(data: [Values](/docs/library/objects/Values)) : [Auth](/docs/library/resources/auth)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

## attemptsEnabled

---

#### _auth.attemptsEnabled() : boolean
##### Description

Whether or not automatic blocking of failed authentication attempts is enabled.

##### Return

( _boolean_ )

Returns whether automatic blocking of consecutive failed authentication attempts is enabled.

---

#### _auth.attemptsEnabled(attemptsEnabled: boolean) : [Auth](/docs/library/resources/auth)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **attemptsEnabled** | _boolean_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

## attemptsInterval

---

#### _auth.attemptsInterval() : int
##### Description

Number in minutes to set the time interval to perform account blocking.

##### Return

( _int_ )

Returns the number of minutes for the time interval for the locked account.

---

#### _auth.attemptsInterval(attemptsInterval: int) : [Auth](/docs/library/resources/auth)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **attemptsInterval** | _int_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

## attemptsMaxFails

---

#### _auth.attemptsMaxFails() : int
##### Description

Maximum number of consecutive failed authentication attempts to trigger account lockout.

##### Return

( _int_ )

Returns the maximum number of consecutive failed attempts to block authentication.

---

#### _auth.attemptsMaxFails(attemptsMaxFails: int) : [Auth](/docs/library/resources/auth)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **attemptsMaxFails** | _int_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

## check

---

#### _auth.check(password: string) : boolean
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
| **password** | _string_ | Password. |

##### Return

( _boolean_ )

Returns the result of validating authentication data.

---

#### _auth.check(username: string, password: string) : boolean
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
| **username** | _string_ | Username. |
| **password** | _string_ | Password. |

##### Return

( _boolean_ )

Returns the result of the validating authentication data.

---

## checkUserInJWTGroups

---

#### _auth.checkUserInJWTGroups(userId: int) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **userId** | _int_ |   |

##### Return

( _boolean_ )


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
| **username** | _string_ | Username. |
| **password** | _string_ | Password. |

##### Return

( _string_ )

Returns strong password encryption.

---

## getAllProvidersConfig

---

#### _auth.getAllProvidersConfig() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getAttemptRejectWithData

---

#### _auth.getAttemptRejectWithData(data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getJWTGroups

---

#### _auth.getJWTGroups() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getProviderConfig

---

#### _auth.getProviderConfig(providerCode: string) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **providerCode** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getSignInAbortWithData

---

#### _auth.getSignInAbortWithData(data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getSignInExtraData

---

#### _auth.getSignInExtraData(data: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## isAdmin

---

#### _auth.isAdmin() : boolean
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

## isAttempt

---

#### _auth.isAttempt() : boolean
##### Return

( _boolean_ )


---

## isAttemptReject

---

#### _auth.isAttemptReject() : boolean
##### Return

( _boolean_ )


---

## isAuthenticated

---

#### _auth.isAuthenticated() : boolean
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

#### _auth.isDev() : boolean
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

#### _auth.isJWT() : boolean
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

#### _auth.isProviderEnabled(providerCode: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **providerCode** | _string_ |   |

##### Return

( _boolean_ )


---

## isSession

---

#### _auth.isSession() : boolean
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

## isSignInAbort

---

#### _auth.isSignInAbort() : boolean
##### Return

( _boolean_ )


---

## jwtAccessExpires

---

#### _auth.jwtAccessExpires() : int
##### Description

Sets the time of expiration of the token to the settings in configs.

##### Return

( _int_ )


---

## jwtCheckToken

---

#### _auth.jwtCheckToken(token: string) : boolean
##### Description

This method verify the token.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **token** | _string_ | Token to be verify. |

##### Return

( _boolean_ )

Returns the validation.

---

## jwtCheckTokenDataExpiration

---

#### _auth.jwtCheckTokenDataExpiration(dbToken: [Values](/docs/library/objects/Values)) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **dbToken** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _boolean_ )


---

## jwtCreateAccessToken

---

#### _auth.jwtCreateAccessToken(userId: int, contextData: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **userId** | _int_ |   |
| **contextData** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _auth.jwtCreateAccessToken(userId: [Values](/docs/library/objects/Values)) : [Values](/docs/library/objects/Values)
##### Description

This method access to the token of a user and returns the content.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **userId** | _[Values](/docs/library/objects/Values)_ | Id of user. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Returns the content of the user inserted.

---

## jwtDBRecord

---

#### _auth.jwtDBRecord(token: string) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **token** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## jwtData

---

#### _auth.jwtData() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## jwtEnabled

---

#### _auth.jwtEnabled() : boolean
##### Description

Verify if the JWT is enable.

##### Return

( _boolean_ )

Returns if is enabled.

---

#### _auth.jwtEnabled(enabled: boolean) : [Auth](/docs/library/resources/auth)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

## jwtGroups

---

#### _auth.jwtGroups() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## jwtInvalidateToken

---

#### _auth.jwtInvalidateToken() : boolean
##### Return

( _boolean_ )


---

#### _auth.jwtInvalidateToken(token: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **token** | _string_ |   |

##### Return

( _boolean_ )


---

## jwtKey

---

#### _auth.jwtKey() : javax.crypto.SecretKey
##### Return

( _javax.crypto.SecretKey_ )


---

## jwtRefreshAccessToken

---

#### _auth.jwtRefreshAccessToken(refreshToken: string) : [Values](/docs/library/objects/Values)
##### Description

Replaces an old token for the new on inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **refreshToken** | _string_ | Replace token. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Returns the updated token.

---

## jwtRefreshExpires

---

#### _auth.jwtRefreshExpires() : int
##### Description

Updates the time of expiration of the token to the settings in configs.

##### Return

( _int_ )


---

## jwtSignIn

---

#### _auth.jwtSignIn(userId: int, contextData: [Values](/docs/library/objects/Values)) : [Auth](/docs/library/resources/auth)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **userId** | _int_ |   |
| **contextData** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

## jwtSignInData

---

#### _auth.jwtSignInData() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## jwtToken

---

#### _auth.jwtToken() : string
##### Description

Verify if exists an authenticated token.

##### Return

( _string_ )

Returns the token.

---

## jwtTokenCheck

---

#### _auth.jwtTokenCheck() : boolean
##### Description

Verify if a token exists.

##### Return

( _boolean_ )

Returns the validation.

---

## load

---

#### _auth.load() : [Auth](/docs/library/resources/auth)
##### Description

Processes authentication settings.

##### How To Use

```javascript
// Loads authentication settings.
_auth.load()
```

##### Return

( _[Auth](/docs/library/resources/auth)_ )

Returns the default Auth resource.

---

## logout

---

#### _auth.logout() : [Auth](/docs/library/resources/auth)
##### Description

Signs out the user authenticated.

##### How To Use

```javascript
// Clears the authentication context.
_auth.logout()

```

##### Return

( _[Auth](/docs/library/resources/auth)_ )

Returns the default Auth resource.

---

## providerConfig

---

#### _auth.providerConfig(providerCode: string) : [Values](/docs/library/objects/Values)
##### Description

Gets one specific authentication provider configuration.

##### How To Use

```javascript
// Gets authentication provider setting to each provider.
_log.info('Google Provider Configuration', _auth.providerConfig('google'))
_log.info('Microsoft Provider Configuration', _auth.providerConfig('microsoft'))
_log.info('GitHub Provider Configuration', _auth.providerConfig('github'))
_log.info('Discord Provider Configuration', _auth.providerConfig('discord'))
_log.info('LDAP Provider Configuration', _auth.providerConfig('ldap'))

```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **providerCode** | _string_ | Name of the provider configuration key, which can be: |
|   |   | - google |
|   |   | - microsoft |
|   |   | - github |
|   |   | - discord |
|   |   | - ldap |

##### Return

( _[Values](/docs/library/objects/Values)_ )

The authentication provider configuration.

---

## providerEnabled

---

#### _auth.providerEnabled(providerCode: string) : boolean
##### Description

Checks whether the authentication provider is active.

##### How To Use

```javascript
// Checks enabled authentication providers.
_log.info('Google Provider Enabled', _auth.providerEnabled('google'))
_log.info('Microsoft Provider Enabled', _auth.providerEnabled('microsoft'))
_log.info('GitHub Provider Enabled', _auth.providerEnabled('github'))
_log.info('Discord Provider Enabled', _auth.providerEnabled('discord'))
_log.info('LDAP Provider Enabled', _auth.providerEnabled('ldap'))

```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **providerCode** | _string_ | Name of the provider configuration key, which can be: |
|   |   | - google |
|   |   | - microsoft |
|   |   | - github |
|   |   | - discord |
|   |   | - ldap |

##### Return

( _boolean_ )

If the authentication provider is active returns _true_.

---

## setAttemptReject

---

#### _auth.setAttemptReject(reject: boolean) : [Auth](/docs/library/resources/auth)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **reject** | _boolean_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

## setAttemptRejectWithData

---

#### _auth.setAttemptRejectWithData(data: java.util.List) : [Auth](/docs/library/resources/auth)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _java.util.List_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

#### _auth.setAttemptRejectWithData(data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [Auth](/docs/library/resources/auth)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

#### _auth.setAttemptRejectWithData(data: [Values](/docs/library/objects/Values)) : [Auth](/docs/library/resources/auth)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

## setSignInAbort

---

#### _auth.setSignInAbort(abort: boolean) : [Auth](/docs/library/resources/auth)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **abort** | _boolean_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

## setSignInAbortWithData

---

#### _auth.setSignInAbortWithData(data: java.util.List) : [Auth](/docs/library/resources/auth)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _java.util.List_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

#### _auth.setSignInAbortWithData(data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [Auth](/docs/library/resources/auth)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

#### _auth.setSignInAbortWithData(data: [Values](/docs/library/objects/Values)) : [Auth](/docs/library/resources/auth)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

## setSignInExtraData

---

#### _auth.setSignInExtraData(data: java.util.List) : [Auth](/docs/library/resources/auth)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _java.util.List_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

#### _auth.setSignInExtraData(data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [Auth](/docs/library/resources/auth)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

#### _auth.setSignInExtraData(data: [Values](/docs/library/objects/Values)) : [Auth](/docs/library/resources/auth)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

## signInAbort

---

#### _auth.signInAbort() : boolean
##### Return

( _boolean_ )


---

#### _auth.signInAbort(abort: boolean) : [Auth](/docs/library/resources/auth)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **abort** | _boolean_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

## signInAbortWithData

---

#### _auth.signInAbortWithData() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _auth.signInAbortWithData(data: java.util.List) : [Auth](/docs/library/resources/auth)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _java.util.List_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

#### _auth.signInAbortWithData(data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [Auth](/docs/library/resources/auth)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

#### _auth.signInAbortWithData(data: [Values](/docs/library/objects/Values)) : [Auth](/docs/library/resources/auth)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

## signInExtraData

---

#### _auth.signInExtraData() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _auth.signInExtraData(data: java.util.List) : [Auth](/docs/library/resources/auth)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _java.util.List_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

#### _auth.signInExtraData(data: [Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map) : [Auth](/docs/library/resources/auth)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

#### _auth.signInExtraData(data: [Values](/docs/library/objects/Values)) : [Auth](/docs/library/resources/auth)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

