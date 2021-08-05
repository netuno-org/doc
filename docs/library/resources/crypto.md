---
id: crypto
title: Crypto
sidebar_label: Crypto
---

Algoritmos de encriptação de dados.

---

## aes256Decrypt

---

#### _crypto.aes256Decrypt(key: string, content: string) : string
##### Description

Decrypts AES256-encoded content.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string | Key used in encryption. |
| content | string | Data content encrypted with AES256. |

##### Return

( string )

Decrypted original content.

---

## aes256Encrypt

---

#### _crypto.aes256Encrypt(key: string, content: string) : string
##### Description

Encrypts data with AES256.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string | Secret key for encryption. |
| content | string | Content to be encrypted with AES256. |

##### Return

( string )

Data encrypted with AES256.

---

## base64Decode

---

#### _crypto.base64Decode(arg0: _byte[]_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Return

( string )


---

#### _crypto.base64Decode(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## base64DecodeAsBytes

---

#### _crypto.base64DecodeAsBytes(arg0: _byte[]_) : _byte[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Return

( _byte[]_ )


---

#### _crypto.base64DecodeAsBytes(arg0: string) : _byte[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _byte[]_ )


---

## base64Encode

---

#### _crypto.base64Encode(arg0: _byte[]_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Return

( string )


---

#### _crypto.base64Encode(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## base64EncodeAsBytes

---

#### _crypto.base64EncodeAsBytes(arg0: _byte[]_) : _byte[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Return

( _byte[]_ )


---

#### _crypto.base64EncodeAsBytes(arg0: string) : _byte[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _byte[]_ )


---

## bcryptCheck

---

#### _crypto.bcryptCheck(arg0: string, arg1: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _boolean_ )


---

## bcryptHash

---

#### _crypto.bcryptHash(arg0: string, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( string )


---

## bcryptSalt

---

#### _crypto.bcryptSalt() : string
##### Return

( string )


---

#### _crypto.bcryptSalt(arg0: _int_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( string )


---

#### _crypto.bcryptSalt(arg0: _int_, arg1: _SecureRandom_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _SecureRandom_ |   |

##### Return

( string )


---

## des

---

#### _crypto.des(arg0: string) : _DES_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _DES_ )


---

## hmac256

---

#### _crypto.hmac256(key: _byte[]_, content: _byte[]_) : _byte[]_
##### Description

It encodes the data with HMAC256, which serves to guarantee integrity and authenticity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | _byte[]_ | Secret key for encryption. |
| content | _byte[]_ | Content to be encoded with HMAC256. |

##### Return

( _byte[]_ )

Data encoded with HMAC256.

---

#### _crypto.hmac256(key: string, content: string) : _byte[]_
##### Description

It encodes the data with HMAC256, which serves to guarantee integrity and authenticity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string | Secret key for encryption. |
| content | string | Content to be encoded with HMAC256. |

##### Return

( _byte[]_ )

Data encoded with HMAC256.

---

## hmac256Base64

---

#### _crypto.hmac256Base64(key: _byte[]_, content: _byte[]_) : string
##### Description

Encodes data with HMAC256 and converts to Base64, which serves to guarantee integrity and authenticity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | _byte[]_ | Secret key for encryption. |
| content | _byte[]_ | Content to be encoded with HMAC256. |

##### Return

( string )

Data encoded with HMAC256 and in Base64 format.

---

#### _crypto.hmac256Base64(key: string, content: string) : string
##### Description

Encodes data with HMAC256 and converts to Base64, which serves to guarantee integrity and authenticity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string | Secret key for encryption. |
| content | string | Content to be encoded with HMAC256. |

##### Return

( string )

Data encoded with HMAC256 and in Base64 format.

---

## hmac256Hex

---

#### _crypto.hmac256Hex(key: _byte[]_, content: _byte[]_) : string
##### Description

Encodes data with HMAC256 and converts to hexadecimal, which serves to guarantee integrity and authenticity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | _byte[]_ | Secret key for encryption. |
| content | _byte[]_ | Content to be encoded with HMAC256. |

##### Return

( string )

Data encoded with HMAC256 and in hexadecimal format.

---

#### _crypto.hmac256Hex(key: string, content: string) : string
##### Description

Encodes data with HMAC256 and converts to hexadecimal, which serves to guarantee integrity and authenticity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string | Secret key for encryption. |
| content | string | Content to be encoded with HMAC256. |

##### Return

( string )

Data encoded with HMAC256 and in hexadecimal format.

---

## md5

---

#### _crypto.md5(arg0: string) : _byte[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _byte[]_ )


---

## md5Base64

---

#### _crypto.md5Base64(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## md5Hex

---

#### _crypto.md5Hex(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## sha256

---

#### _crypto.sha256(arg0: _byte[]_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Return

( string )


---

#### _crypto.sha256(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## sha256AsBytes

---

#### _crypto.sha256AsBytes(arg0: _byte[]_) : _byte[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Return

( _byte[]_ )


---

#### _crypto.sha256AsBytes(arg0: string) : _byte[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _byte[]_ )


---

## sha384

---

#### _crypto.sha384(arg0: _byte[]_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Return

( string )


---

#### _crypto.sha384(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## sha384AsBytes

---

#### _crypto.sha384AsBytes(arg0: _byte[]_) : _byte[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Return

( _byte[]_ )


---

#### _crypto.sha384AsBytes(arg0: string) : _byte[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _byte[]_ )


---

## sha512

---

#### _crypto.sha512(arg0: _byte[]_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Return

( string )


---

#### _crypto.sha512(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

## sha512AsBytes

---

#### _crypto.sha512AsBytes(arg0: _byte[]_) : _byte[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Return

( _byte[]_ )


---

#### _crypto.sha512AsBytes(arg0: string) : _byte[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _byte[]_ )


---

