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
##### Description

Sets the time of expiration of the token to the settings in configs.

##### Return

( _int_ )


---

## accessToken

---

#### _jwt.accessToken(userId: _int_, Values: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Description

This method access to the token of a user and returns the content.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| userId | _int_ | Id of user. |
| Values | _[Values](../../objects/Values)_ | Values of the user. |

##### Return

( _[Values](../../objects/Values)_ )

Returns the content of the user inserted.

---

#### _jwt.accessToken(userId: _[Values](../../objects/Values)_) : _[Values](../../objects/Values)_
##### Description

This method access to the token of a user and returns the content.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| userId | _[Values](../../objects/Values)_ | Id of user. |

##### Return

( _[Values](../../objects/Values)_ )

Returns the content of the user inserted.

---

## check

---

#### _jwt.check() : _boolean_
##### Description

Verify if a token exists.

##### Return

( _boolean_ )

Returns the validation.

---

#### _jwt.check(token: string) : _boolean_
##### Description

This method verify the token.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| token | string | Token to be verify. |

##### Return

( _boolean_ )

Returns the validation.

---

#### _jwt.check(token: _[Values](../../objects/Values)_) : _boolean_
##### Description

This method verify the token.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| token | _[Values](../../objects/Values)_ | Token to be verify. |

##### Return

( _boolean_ )

Returns the validation.

---

## data

---

#### _jwt.data() : _[Values](../../objects/Values)_
##### Return

( _[Values](../../objects/Values)_ )


---

#### _jwt.data(token: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| token | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## dbRecord

---

#### _jwt.dbRecord(token: string) : _[Values](../../objects/Values)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| token | string |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## decode

---

#### _jwt.decode(token: string) : _[Values](../../objects/Values)_
##### Description

Encodes the values of the header and body inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| token | string | Acess code. |

##### Return

( _[Values](../../objects/Values)_ )

Returns the values decoded.

---

## encode

---

#### _jwt.encode(body: _[Values](../../objects/Values)_) : string
##### Description

Encodes the body value inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| body | _[Values](../../objects/Values)_ | Body value. |

##### Return

( string )

Returns the value enconded.

---

#### _jwt.encode(header: _[Values](../../objects/Values)_, body: _[Values](../../objects/Values)_) : string
##### Description

Encodes the values of the header and body inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| header | _[Values](../../objects/Values)_ | Header value. |
| body | _[Values](../../objects/Values)_ | Body value. |

##### Return

( string )

Returns the values encoded.

---

## init

---

#### _jwt.init() : _[JWT](../../resources/JWT)_
##### Return

( _[JWT](../../resources/JWT)_ )


---

#### _jwt.init(secret: string, algorithm: string) : _[JWT](../../resources/JWT)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| secret | string |   |
| algorithm | string |   |

##### Return

( _[JWT](../../resources/JWT)_ )


---

## isEnabled

---

#### _jwt.isEnabled() : _boolean_
##### Description

Verify if a token is enable.

##### Return

( _boolean_ )

Returns enabled.

---

## refreshExpires

---

#### _jwt.refreshExpires() : _int_
##### Description

Updates the time of expiration of the token to the settings in configs.

##### Return

( _int_ )


---

## refreshToken

---

#### _jwt.refreshToken(refreshToken: string) : _[Values](../../objects/Values)_
##### Description

Replaces an old token for the new on inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| refreshToken | string | Replace token. |

##### Return

( _[Values](../../objects/Values)_ )

Returns the updated token.

---

## token

---

#### _jwt.token() : string
##### Description

Verify if exists an authenticated token.

##### Return

( string )

Returns the token.

---

#### _jwt.token(Values: _[Values](../../objects/Values)_) : string
##### Description

Generates a token through jwtBuilder.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| Values | _[Values](../../objects/Values)_ | Values for the jwtBuilder. |

##### Return

( string )

Returns the generation.

---

