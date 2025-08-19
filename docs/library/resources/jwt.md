---
id: jwt
title: JWT
sidebar_label: JWT
---

Handling JSON Web Tokens.

---

## algorithmES

---

#### <span style={{fontWeight: 'normal'}}>_jwt</span>.<span style={{color: '#008000'}}>algorithmES</span>(<span style={{color: '#FF8000'}}>bits</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>io.jsonwebtoken.security.SignatureAlgorithm</span>
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

#### <span style={{fontWeight: 'normal'}}>_jwt</span>.<span style={{color: '#008000'}}>algorithmHS</span>(<span style={{color: '#FF8000'}}>bits</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>io.jsonwebtoken.security.MacAlgorithm</span>
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

#### <span style={{fontWeight: 'normal'}}>_jwt</span>.<span style={{color: '#008000'}}>algorithmPS</span>(<span style={{color: '#FF8000'}}>bits</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>io.jsonwebtoken.security.SignatureAlgorithm</span>
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

#### <span style={{fontWeight: 'normal'}}>_jwt</span>.<span style={{color: '#008000'}}>algorithmRS</span>(<span style={{color: '#FF8000'}}>bits</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>io.jsonwebtoken.security.SignatureAlgorithm</span>
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

#### <span style={{fontWeight: 'normal'}}>_jwt</span>.<span style={{color: '#008000'}}>data</span>(<span style={{color: '#FF8000'}}>token</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **token** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## decode

---

#### <span style={{fontWeight: 'normal'}}>_jwt</span>.<span style={{color: '#008000'}}>decode</span>(<span style={{color: '#FF8000'}}>token</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
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

#### <span style={{fontWeight: 'normal'}}>_jwt</span>.<span style={{color: '#008000'}}>enabled</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Verify if the JWT is enable.

##### Return

( _boolean_ )

Returns if is enabled.

---

#### <span style={{fontWeight: 'normal'}}>_jwt</span>.<span style={{color: '#008000'}}>enabled</span>(<span style={{color: '#FF8000'}}>enabled</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[JWT](/docs/library/resources/jwt)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ |   |

##### Return

( _[JWT](/docs/library/resources/jwt)_ )


---

## encode

---

#### <span style={{fontWeight: 'normal'}}>_jwt</span>.<span style={{color: '#008000'}}>encode</span>(<span style={{color: '#FF8000'}}>body</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_jwt</span>.<span style={{color: '#008000'}}>encode</span>(<span style={{color: '#FF8000'}}>header</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>body</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_jwt</span>.<span style={{color: '#008000'}}>getHMACKeyFromSecret</span>(<span style={{color: '#FF8000'}}>secret</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>javax.crypto.SecretKey</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **secret** | _string_ |   |

##### Return

( _javax.crypto.SecretKey_ )


---

## getKey

---

#### <span style={{fontWeight: 'normal'}}>_jwt</span>.<span style={{color: '#008000'}}>getKey</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>javax.crypto.SecretKey</span>
##### Return

( _javax.crypto.SecretKey_ )


---

## init

---

#### <span style={{fontWeight: 'normal'}}>_jwt</span>.<span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[JWT](/docs/library/resources/jwt)</span>
##### Return

( _[JWT](/docs/library/resources/jwt)_ )


---

#### <span style={{fontWeight: 'normal'}}>_jwt</span>.<span style={{color: '#008000'}}>init</span>(<span style={{color: '#FF8000'}}>secret</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[JWT](/docs/library/resources/jwt)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **secret** | _string_ |   |

##### Return

( _[JWT](/docs/library/resources/jwt)_ )


---

#### <span style={{fontWeight: 'normal'}}>_jwt</span>.<span style={{color: '#008000'}}>init</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>javax.crypto.SecretKey</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[JWT](/docs/library/resources/jwt)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _javax.crypto.SecretKey_ |   |

##### Return

( _[JWT](/docs/library/resources/jwt)_ )


---

## isEnabled

---

#### <span style={{fontWeight: 'normal'}}>_jwt</span>.<span style={{color: '#008000'}}>isEnabled</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## key

---

#### <span style={{fontWeight: 'normal'}}>_jwt</span>.<span style={{color: '#008000'}}>key</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>javax.crypto.SecretKey</span>
##### Return

( _javax.crypto.SecretKey_ )


---

#### <span style={{fontWeight: 'normal'}}>_jwt</span>.<span style={{color: '#008000'}}>key</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>javax.crypto.SecretKey</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[JWT](/docs/library/resources/jwt)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _javax.crypto.SecretKey_ |   |

##### Return

( _[JWT](/docs/library/resources/jwt)_ )


---

## setEnabled

---

#### <span style={{fontWeight: 'normal'}}>_jwt</span>.<span style={{color: '#008000'}}>setEnabled</span>(<span style={{color: '#FF8000'}}>enabled</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[JWT](/docs/library/resources/jwt)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **enabled** | _boolean_ |   |

##### Return

( _[JWT](/docs/library/resources/jwt)_ )


---

## setHMACKeyFromSecret

---

#### <span style={{fontWeight: 'normal'}}>_jwt</span>.<span style={{color: '#008000'}}>setHMACKeyFromSecret</span>(<span style={{color: '#FF8000'}}>secret</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[JWT](/docs/library/resources/jwt)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **secret** | _string_ |   |

##### Return

( _[JWT](/docs/library/resources/jwt)_ )


---

## setKey

---

#### <span style={{fontWeight: 'normal'}}>_jwt</span>.<span style={{color: '#008000'}}>setKey</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>javax.crypto.SecretKey</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[JWT](/docs/library/resources/jwt)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _javax.crypto.SecretKey_ |   |

##### Return

( _[JWT](/docs/library/resources/jwt)_ )


---

## token

---

#### <span style={{fontWeight: 'normal'}}>_jwt</span>.<span style={{color: '#008000'}}>token</span>(<span style={{color: '#FF8000'}}>Values</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

