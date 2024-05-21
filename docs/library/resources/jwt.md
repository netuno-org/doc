---
id: jwt
title: Jwt
sidebar_label: Jwt
---

Recurso de geração de JSON Web Tokens.

---

## algorithmES

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">algorithmES</span>(<span style="color: #FF8000">bits</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">io.jsonwebtoken.security.SignatureAlgorithm</span>
##### Description

Gets the type of algorithm for signing of type ECDSA.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bits** | _int_ | Number of bits in the signature algorithm, it can be 256, 384 or 512. |

##### Return

( _io.jsonwebtoken.security.SignatureAlgorithm_ )

Returns the signature algorithm type object.

---

## algorithmHS

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">algorithmHS</span>(<span style="color: #FF8000">bits</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">io.jsonwebtoken.security.MacAlgorithm</span>
##### Description

Gets the type of algorithm for signing of type HMAC.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bits** | _int_ | Number of bits in the signature algorithm, it can be 256, 384 or 512. |

##### Return

( _io.jsonwebtoken.security.MacAlgorithm_ )

Returns the signature algorithm type object.

---

## algorithmPS

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">algorithmPS</span>(<span style="color: #FF8000">bits</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">io.jsonwebtoken.security.SignatureAlgorithm</span>
##### Description

Gets the type of algorithm for signing of type RSASS and MGF1.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bits** | _int_ | Number of bits in the signature algorithm, it can be 256, 384 or 512. |

##### Return

( _io.jsonwebtoken.security.SignatureAlgorithm_ )

Returns the signature algorithm type object.

---

## algorithmRS

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">algorithmRS</span>(<span style="color: #FF8000">bits</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">io.jsonwebtoken.security.SignatureAlgorithm</span>
##### Description

Gets the type of algorithm for signing of type RSASSA-PKCS1-v1_5.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **bits** | _int_ | Number of bits in the signature algorithm, it can be 256, 384 or 512. |

##### Return

( _io.jsonwebtoken.security.SignatureAlgorithm_ )

Returns the signature algorithm type object.

---

## data

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">data</span>(<span style="color: #FF8000">token</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
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

## enabled

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">enabled</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Verify if the JWT is enable.

##### Return

( _boolean_ )

Returns if is enabled.

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">enabled</span>(<span style="color: #FF8000">enabled</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[JWT](../../resources/JWT)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ |   |

##### Return

( _[JWT](../../resources/JWT)_ )


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

## getHMACKeyFromSecret

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">getHMACKeyFromSecret</span>(<span style="color: #FF8000">secret</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">javax.crypto.SecretKey</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **secret** | _string_ |   |

##### Return

( _javax.crypto.SecretKey_ )


---

## getKey

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">getKey</span>() : <span style="font-weight: normal; font-style: italic;">javax.crypto.SecretKey</span>
##### Return

( _javax.crypto.SecretKey_ )


---

## init

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">init</span>() : <span style="font-weight: normal; font-style: italic;">[JWT](../../resources/JWT)</span>
##### Return

( _[JWT](../../resources/JWT)_ )


---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">init</span>(<span style="color: #FF8000">secret</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[JWT](../../resources/JWT)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **secret** | _string_ |   |

##### Return

( _[JWT](../../resources/JWT)_ )


---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">init</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">javax.crypto.SecretKey</span>) : <span style="font-weight: normal; font-style: italic;">[JWT](../../resources/JWT)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _javax.crypto.SecretKey_ |   |

##### Return

( _[JWT](../../resources/JWT)_ )


---

## isEnabled

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">isEnabled</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Return

( _boolean_ )


---

## key

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">key</span>() : <span style="font-weight: normal; font-style: italic;">javax.crypto.SecretKey</span>
##### Return

( _javax.crypto.SecretKey_ )


---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">key</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">javax.crypto.SecretKey</span>) : <span style="font-weight: normal; font-style: italic;">[JWT](../../resources/JWT)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _javax.crypto.SecretKey_ |   |

##### Return

( _[JWT](../../resources/JWT)_ )


---

## setEnabled

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">setEnabled</span>(<span style="color: #FF8000">enabled</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[JWT](../../resources/JWT)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ |   |

##### Return

( _[JWT](../../resources/JWT)_ )


---

## setHMACKeyFromSecret

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">setHMACKeyFromSecret</span>(<span style="color: #FF8000">secret</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[JWT](../../resources/JWT)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **secret** | _string_ |   |

##### Return

( _[JWT](../../resources/JWT)_ )


---

## setKey

---

#### <span style="font-weight: normal">_jwt</span>.<span style="color: #008000">setKey</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">javax.crypto.SecretKey</span>) : <span style="font-weight: normal; font-style: italic;">[JWT](../../resources/JWT)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _javax.crypto.SecretKey_ |   |

##### Return

( _[JWT](../../resources/JWT)_ )


---

## token

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

