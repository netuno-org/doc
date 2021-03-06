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

## cryptHash

---

#### _crypto.cryptHash(arg0: _byte[]_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Return

( string )


---

#### _crypto.cryptHash(arg0: _byte[]_, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _byte[]_ |   |
| arg1 | string |   |

##### Return

( string )


---

#### _crypto.cryptHash(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

#### _crypto.cryptHash(arg0: string, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( string )


---

## desDecode

---

#### _crypto.desDecode(arg0: string, arg1: _byte[]_) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _byte[]_ |   |

##### Return

( string )


---

#### _crypto.desDecode(arg0: string, arg1: _byte[]_, arg2: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _byte[]_ |   |
| arg2 | string |   |

##### Return

( string )


---

## desDecodeBase64

---

#### _crypto.desDecodeBase64(arg0: string, arg1: string, arg2: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | string |   |

##### Return

( string )


---

## desEncode

---

#### _crypto.desEncode(arg0: string, arg1: string) : _byte[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _byte[]_ )


---

#### _crypto.desEncode(arg0: string, arg1: string, arg2: string) : _byte[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | string |   |

##### Return

( _byte[]_ )


---

## desEncodeBase64

---

#### _crypto.desEncodeBase64(arg0: string, arg1: string, arg2: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | string |   |

##### Return

( string )


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

#### _crypto.sha256(content: _byte[]_) : string
##### Description

Encodes data with SHA256 (SHA-2) and converts binary encryption to hexadecimal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _byte[]_ | Content to be encrypted. |

##### Return

( string )

Content encrypted in SHA256 (SHA2) and converted to hexadecimal.

---

#### _crypto.sha256(content: string) : string
##### Description

Encodes data with SHA256 (SHA-2) and converts binary encryption to hexadecimal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string | Content to be encrypted. |

##### Return

( string )

Content encrypted in SHA256 (SHA2) and converted to hexadecimal.

---

## sha256AsBytes

---

#### _crypto.sha256AsBytes(content: _byte[]_) : _byte[]_
##### Description

Encodes data with SHA256 (SHA-2) and returns binary encryption.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _byte[]_ | Content to be encrypted. |

##### Return

( _byte[]_ )

Binary data of the content encrypted in SHA256 (SHA-2).

---

#### _crypto.sha256AsBytes(content: string) : _byte[]_
##### Description

Encodes data with SHA256 (SHA-2) and returns binary encryption.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string | Content to be encrypted. |

##### Return

( _byte[]_ )

Binary data of the content encrypted in SHA256 (SHA-2).

---

## sha384

---

#### _crypto.sha384(content: _byte[]_) : string
##### Description

Encodes data with SHA384 (SHA-2) and converts binary encryption to hexadecimal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _byte[]_ | Content to be encrypted. |

##### Return

( string )

Content encrypted in SHA384 (SHA2) and converted to hexadecimal.

---

#### _crypto.sha384(content: string) : string
##### Description

Encodes data with SHA384 (SHA-2) and converts binary encryption to hexadecimal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string | Content to be encrypted. |

##### Return

( string )

Content encrypted in SHA384 (SHA2) and converted to hexadecimal.

---

## sha384AsBytes

---

#### _crypto.sha384AsBytes(content: _byte[]_) : _byte[]_
##### Description

Encodes data with SHA384 (SHA-2) and returns binary encryption.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _byte[]_ | Content to be encrypted. |

##### Return

( _byte[]_ )

Binary data of the content encrypted in SHA384 (SHA-2).

---

#### _crypto.sha384AsBytes(content: string) : _byte[]_
##### Description

Encodes data with SHA384 (SHA-2) and returns binary encryption.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string | Content to be encrypted. |

##### Return

( _byte[]_ )

Binary data of the content encrypted in SHA384 (SHA-2).

---

## sha512

---

#### _crypto.sha512(content: _byte[]_) : string
##### Description

Encodes data with SHA512 (SHA-2) and converts binary encryption to hexadecimal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _byte[]_ | Content to be encrypted. |

##### Return

( string )

Content encrypted in SHA512 (SHA2) and converted to hexadecimal.

---

#### _crypto.sha512(content: string) : string
##### Description

Encodes data with SHA512 (SHA-2) and converts binary encryption to hexadecimal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string | Content to be encrypted. |

##### Return

( string )

Content encrypted in SHA512 (SHA2) and converted to hexadecimal.

---

## sha512AsBytes

---

#### _crypto.sha512AsBytes(content: _byte[]_) : _byte[]_
##### Description

Encodes data with SHA512 (SHA-2) and returns binary encryption.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _byte[]_ | Content to be encrypted. |

##### Return

( _byte[]_ )

Binary data of the content encrypted in SHA512 (SHA-2).

---

#### _crypto.sha512AsBytes(content: string) : _byte[]_
##### Description

Encodes data with SHA512 (SHA-2) and returns binary encryption.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string | Content to be encrypted. |

##### Return

( _byte[]_ )

Binary data of the content encrypted in SHA512 (SHA-2).

---

