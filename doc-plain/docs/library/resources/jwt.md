---
id: jwt
title: JWT
sidebar_label: JWT
---

Handling JSON Web Tokens.

---

## algorithmES

---

#### _jwt.algorithmES(bits: int) : io.jsonwebtoken.security.SignatureAlgorithm
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

#### _jwt.algorithmHS(bits: int) : io.jsonwebtoken.security.MacAlgorithm
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

#### _jwt.algorithmPS(bits: int) : io.jsonwebtoken.security.SignatureAlgorithm
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

#### _jwt.algorithmRS(bits: int) : io.jsonwebtoken.security.SignatureAlgorithm
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

#### _jwt.data(token: string) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **token** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## decode

---

#### _jwt.decode(token: string) : [Values](/docs/library/objects/Values)
##### Description

Encodes the values of the header and body inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **token** | _string_ | Acess code. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Returns the values decoded.

---

## enabled

---

#### _jwt.enabled() : boolean
##### Description

Verify if the JWT is enable.

##### Return

( _boolean_ )

Returns if is enabled.

---

#### _jwt.enabled(enabled: boolean) : [JWT](/docs/library/resources/jwt)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ |   |

##### Return

( _[JWT](/docs/library/resources/jwt)_ )


---

## encode

---

#### _jwt.encode(body: [Values](/docs/library/objects/Values)) : string
##### Description

Encodes the body value inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **body** | _[Values](/docs/library/objects/Values)_ | Body value. |

##### Return

( _string_ )

Returns the value enconded.

---

#### _jwt.encode(header: [Values](/docs/library/objects/Values), body: [Values](/docs/library/objects/Values)) : string
##### Description

Encodes the values of the header and body inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **header** | _[Values](/docs/library/objects/Values)_ | Header value. |
| **body** | _[Values](/docs/library/objects/Values)_ | Body value. |

##### Return

( _string_ )

Returns the values encoded.

---

## getHMACKeyFromSecret

---

#### _jwt.getHMACKeyFromSecret(secret: string) : javax.crypto.SecretKey
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **secret** | _string_ |   |

##### Return

( _javax.crypto.SecretKey_ )


---

## getKey

---

#### _jwt.getKey() : javax.crypto.SecretKey
##### Return

( _javax.crypto.SecretKey_ )


---

## init

---

#### _jwt.init() : [JWT](/docs/library/resources/jwt)
##### Return

( _[JWT](/docs/library/resources/jwt)_ )


---

#### _jwt.init(secret: string) : [JWT](/docs/library/resources/jwt)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **secret** | _string_ |   |

##### Return

( _[JWT](/docs/library/resources/jwt)_ )


---

#### _jwt.init(key: javax.crypto.SecretKey) : [JWT](/docs/library/resources/jwt)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _javax.crypto.SecretKey_ |   |

##### Return

( _[JWT](/docs/library/resources/jwt)_ )


---

## isEnabled

---

#### _jwt.isEnabled() : boolean
##### Return

( _boolean_ )


---

## key

---

#### _jwt.key() : javax.crypto.SecretKey
##### Return

( _javax.crypto.SecretKey_ )


---

#### _jwt.key(key: javax.crypto.SecretKey) : [JWT](/docs/library/resources/jwt)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _javax.crypto.SecretKey_ |   |

##### Return

( _[JWT](/docs/library/resources/jwt)_ )


---

## setEnabled

---

#### _jwt.setEnabled(enabled: boolean) : [JWT](/docs/library/resources/jwt)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ |   |

##### Return

( _[JWT](/docs/library/resources/jwt)_ )


---

## setHMACKeyFromSecret

---

#### _jwt.setHMACKeyFromSecret(secret: string) : [JWT](/docs/library/resources/jwt)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **secret** | _string_ |   |

##### Return

( _[JWT](/docs/library/resources/jwt)_ )


---

## setKey

---

#### _jwt.setKey(key: javax.crypto.SecretKey) : [JWT](/docs/library/resources/jwt)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _javax.crypto.SecretKey_ |   |

##### Return

( _[JWT](/docs/library/resources/jwt)_ )


---

## token

---

#### _jwt.token(Values: [Values](/docs/library/objects/Values)) : string
##### Description

Generates a token through jwtBuilder.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **Values** | _[Values](/docs/library/objects/Values)_ | Values for the jwtBuilder. |

##### Return

( _string_ )

Returns the generation.

---

