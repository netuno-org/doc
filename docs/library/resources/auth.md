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

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>allProvidersConfig</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
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

## attempt

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>attempt</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## attemptReject

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>attemptReject</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>attemptReject</span>(<span style={{color: '#FF8000'}}>reject</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Auth](/docs/library/resources/auth)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **reject** | _boolean_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

## attemptRejectWithData

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>attemptRejectWithData</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>attemptRejectWithData</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Auth](/docs/library/resources/auth)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _java.util.List_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>attemptRejectWithData</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Auth](/docs/library/resources/auth)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>attemptRejectWithData</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Auth](/docs/library/resources/auth)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

## attemptsInterval

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>attemptsInterval</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Description

Number in minutes to set the time interval to perform account blocking.

##### Return

( _int_ )

Returns the number of minutes for the time interval for the locked account.

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>attemptsInterval</span>(<span style={{color: '#FF8000'}}>attemptsInterval</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Auth](/docs/library/resources/auth)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **attemptsInterval** | _int_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

## attemptsMaxFails

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>attemptsMaxFails</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Description

Maximum number of consecutive failed authentication attempts to trigger account lockout.

##### Return

( _int_ )

Returns the maximum number of consecutive failed attempts to block authentication.

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>attemptsMaxFails</span>(<span style={{color: '#FF8000'}}>attemptsMaxFails</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Auth](/docs/library/resources/auth)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **attemptsMaxFails** | _int_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

## check

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>check</span>(<span style={{color: '#FF8000'}}>password</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>check</span>(<span style={{color: '#FF8000'}}>username</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>password</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>checkUserInJWTGroups</span>(<span style={{color: '#FF8000'}}>userId</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **userId** | _int_ |   |

##### Return

( _boolean_ )


---

## crypt

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>crypt</span>(<span style={{color: '#FF8000'}}>username</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>password</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>getAllProvidersConfig</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getAttemptRejectWithData

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>getAttemptRejectWithData</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getJWTGroups

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>getJWTGroups</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getProviderConfig

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>getProviderConfig</span>(<span style={{color: '#FF8000'}}>providerCode</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **providerCode** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getSignInAbortWithData

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>getSignInAbortWithData</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## getSignInExtraData

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>getSignInExtraData</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## isAdmin

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>isAdmin</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>isAttempt</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isAttemptReject

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>isAttemptReject</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isAuthenticated

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>isAuthenticated</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>isDev</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>isJWT</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>isProviderEnabled</span>(<span style={{color: '#FF8000'}}>providerCode</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **providerCode** | _string_ |   |

##### Return

( _boolean_ )


---

## isSession

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>isSession</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>isSignInAbort</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## jwtAccessExpires

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>jwtAccessExpires</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Description

Sets the time of expiration of the token to the settings in configs.

##### Return

( _int_ )


---

## jwtCheckToken

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>jwtCheckToken</span>(<span style={{color: '#FF8000'}}>token</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>jwtCheckTokenDataExpiration</span>(<span style={{color: '#FF8000'}}>dbToken</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **dbToken** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _boolean_ )


---

## jwtCreateAccessToken

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>jwtCreateAccessToken</span>(<span style={{color: '#FF8000'}}>userId</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>contextData</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **userId** | _int_ |   |
| **contextData** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>jwtCreateAccessToken</span>(<span style={{color: '#FF8000'}}>userId</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
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

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>jwtDBRecord</span>(<span style={{color: '#FF8000'}}>token</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **token** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## jwtData

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>jwtData</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## jwtEnabled

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>jwtEnabled</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Verify if the JWT is enable.

##### Return

( _boolean_ )

Returns if is enabled.

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>jwtEnabled</span>(<span style={{color: '#FF8000'}}>enabled</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Auth](/docs/library/resources/auth)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

## jwtGroups

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>jwtGroups</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## jwtInvalidateToken

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>jwtInvalidateToken</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>jwtInvalidateToken</span>(<span style={{color: '#FF8000'}}>token</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **token** | _string_ |   |

##### Return

( _boolean_ )


---

## jwtKey

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>jwtKey</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>javax.crypto.SecretKey</span>
##### Return

( _javax.crypto.SecretKey_ )


---

## jwtRefreshAccessToken

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>jwtRefreshAccessToken</span>(<span style={{color: '#FF8000'}}>refreshToken</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
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

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>jwtRefreshExpires</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Description

Updates the time of expiration of the token to the settings in configs.

##### Return

( _int_ )


---

## jwtSignIn

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>jwtSignIn</span>(<span style={{color: '#FF8000'}}>userId</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>contextData</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Auth](/docs/library/resources/auth)</span>
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

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>jwtSignInData</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## jwtToken

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>jwtToken</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Verify if exists an authenticated token.

##### Return

( _string_ )

Returns the token.

---

## jwtTokenCheck

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>jwtTokenCheck</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Verify if a token exists.

##### Return

( _boolean_ )

Returns the validation.

---

## load

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>load</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Auth](/docs/library/resources/auth)</span>
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

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>logout</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Auth](/docs/library/resources/auth)</span>
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

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>providerConfig</span>(<span style={{color: '#FF8000'}}>providerCode</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
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

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>providerEnabled</span>(<span style={{color: '#FF8000'}}>providerCode</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>setAttemptReject</span>(<span style={{color: '#FF8000'}}>reject</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Auth](/docs/library/resources/auth)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **reject** | _boolean_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

## setAttemptRejectWithData

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>setAttemptRejectWithData</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Auth](/docs/library/resources/auth)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _java.util.List_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>setAttemptRejectWithData</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Auth](/docs/library/resources/auth)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>setAttemptRejectWithData</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Auth](/docs/library/resources/auth)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

## setSignInAbort

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>setSignInAbort</span>(<span style={{color: '#FF8000'}}>abort</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Auth](/docs/library/resources/auth)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **abort** | _boolean_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

## setSignInAbortWithData

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>setSignInAbortWithData</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Auth](/docs/library/resources/auth)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _java.util.List_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>setSignInAbortWithData</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Auth](/docs/library/resources/auth)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>setSignInAbortWithData</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Auth](/docs/library/resources/auth)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

## setSignInExtraData

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>setSignInExtraData</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Auth](/docs/library/resources/auth)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _java.util.List_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>setSignInExtraData</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Auth](/docs/library/resources/auth)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>setSignInExtraData</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Auth](/docs/library/resources/auth)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

## signInAbort

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>signInAbort</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>signInAbort</span>(<span style={{color: '#FF8000'}}>abort</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Auth](/docs/library/resources/auth)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **abort** | _boolean_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

## signInAbortWithData

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>signInAbortWithData</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>signInAbortWithData</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Auth](/docs/library/resources/auth)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _java.util.List_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>signInAbortWithData</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Auth](/docs/library/resources/auth)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>signInAbortWithData</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Auth](/docs/library/resources/auth)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

## signInExtraData

---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>signInExtraData</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>signInExtraData</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Auth](/docs/library/resources/auth)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _java.util.List_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>signInExtraData</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Auth](/docs/library/resources/auth)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values) &#124; [DataSchema](/docs/library/objects/DataSchema) | java.util.Map_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

#### <span style={{fontWeight: 'normal'}}>_auth</span>.<span style={{color: '#008000'}}>signInExtraData</span>(<span style={{color: '#FF8000'}}>data</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Auth](/docs/library/resources/auth)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **data** | _[Values](/docs/library/objects/Values)_ |   |

##### Return

( _[Auth](/docs/library/resources/auth)_ )


---

