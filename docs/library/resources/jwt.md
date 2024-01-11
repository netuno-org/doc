---
id: jwt
title: Jwt
sidebar_label: Jwt
---

Recurso de geração de JSON Web Tokens.

---

## accessExpires

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">accessExpires</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Description

Sets the time of expiration of the token to the settings in configs.

##### Return

( _int_ )


---

## accessToken

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">accessToken</span>(<span style="color: #FF8000">userId</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">Values</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

This method access to the token of a user and returns the content.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **userId** | _int_ | Id of user. |
| **Values** | _[Values](../../objects/Values)_ | Values of the user. |

##### Return

( _[Values](../../objects/Values)_ )

Returns the content of the user inserted.

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">accessToken</span>(<span style="color: #FF8000">userId</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

This method access to the token of a user and returns the content.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **userId** | _[Values](../../objects/Values)_ | Id of user. |

##### Return

( _[Values](../../objects/Values)_ )

Returns the content of the user inserted.

---

## check

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">check</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Verify if a token exists.

##### Return

( _boolean_ )

Returns the validation.

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">check</span>(<span style="color: #FF8000">token</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
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

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">check</span>(<span style="color: #FF8000">token</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

This method verify the token.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **token** | _[Values](../../objects/Values)_ | Token to be verify. |

##### Return

( _boolean_ )

Returns the validation.

---

## data

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">data</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Return

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">data</span>(<span style="color: #FF8000">token</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **token** | _string_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## dbRecord

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">dbRecord</span>(<span style="color: #FF8000">token</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **token** | _string_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## decode

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">decode</span>(<span style="color: #FF8000">token</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Encodes the values of the header and body inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **token** | _string_ | Acess code. |

##### Return

( _[Values](../../objects/Values)_ )

Returns the values decoded.

---

## encode

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">encode</span>(<span style="color: #FF8000">body</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Encodes the body value inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **body** | _[Values](../../objects/Values)_ | Body value. |

##### Return

( _string_ )

Returns the value enconded.

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">encode</span>(<span style="color: #FF8000">header</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>, <span style="color: #FF8000">body</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Encodes the values of the header and body inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **header** | _[Values](../../objects/Values)_ | Header value. |
| **body** | _[Values](../../objects/Values)_ | Body value. |

##### Return

( _string_ )

Returns the values encoded.

---

## init

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">init</span>() : <span style="font-weight: normal; font-style: italic;">[JWT](../../resources/JWT)</span>
##### Return

( _[JWT](../../resources/JWT)_ )


---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">init</span>(<span style="color: #FF8000">secret</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">algorithm</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[JWT](../../resources/JWT)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **secret** | _string_ |   |
| **algorithm** | _string_ |   |

##### Return

( _[JWT](../../resources/JWT)_ )


---

## isEnabled

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">isEnabled</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Verify if a token is enable.

##### Return

( _boolean_ )

Returns enabled.

---

## refreshExpires

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">refreshExpires</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Description

Updates the time of expiration of the token to the settings in configs.

##### Return

( _int_ )


---

## refreshToken

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">refreshToken</span>(<span style="color: #FF8000">refreshToken</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Replaces an old token for the new on inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **refreshToken** | _string_ | Replace token. |

##### Return

( _[Values](../../objects/Values)_ )

Returns the updated token.

---

## token

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">token</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Verify if exists an authenticated token.

##### Return

( _string_ )

Returns the token.

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">token</span>(<span style="color: #FF8000">Values</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Generates a token through jwtBuilder.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **Values** | _[Values](../../objects/Values)_ | Values for the jwtBuilder. |

##### Return

( _string_ )

Returns the generation.

---

