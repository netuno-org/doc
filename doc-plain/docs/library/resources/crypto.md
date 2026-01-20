---
id: crypto
title: Crypto
sidebar_label: Crypto
---

Data encryption algorithms.

---

## aes256Decrypt

---

#### _crypto.aes256Decrypt(key: string, content: string) : string
##### Description

Decrypts AES256-encoded content.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ | Key used in encryption. |
| **content** | _string_ | Data content encrypted with AES256. |

##### Return

( _string_ )

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
| **key** | _string_ | Secret key for encryption. |
| **content** | _string_ | Content to be encrypted with AES256. |

##### Return

( _string_ )

Data encrypted with AES256.

---

## bcryptCheck

---

#### _crypto.bcryptCheck(plaintext: string, hashed: string) : boolean
##### Description

Checks if a String and a Salt Hash are the same.

##### How To Use

```javascript
_out.println(_crypto.bcryptCheck('text', _crypto.bcryptHash('text',_crypto.bcryptSalt(10))))
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **plaintext** | _string_ | Text that will be verified. |
| **hashed** | _string_ | Encrypted content. |

##### Return

( _boolean_ )

Verification result, returning true if string and hash are the same.

---

## bcryptHash

---

#### _crypto.bcryptHash(password: string, salt: string) : string
##### Description

Hash the string and salt.

##### How To Use

```javascript
let hash = _crypto.bcryptHash('netuno',_crypto.bcryptSalt(10))
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **password** | _string_ | Password or string that will be encrypted. |
| **salt** | _string_ | Encrypted content with bcryptSalt. |

##### Return

( _string_ )

Result of String encryption.

---

## bcryptSalt

---

#### _crypto.bcryptSalt() : string
##### Description

Encodes data with cryptHash.

##### Return

( _string_ )

Data of the content encrypted in cryptHash.

---

#### _crypto.bcryptSalt(content: int) : string
##### Description

Encodes data with bcryptSalt.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _int_ | Content to be encrypted. |

##### Return

( _string_ )

Data of the content encrypted in bcryptSalt.

---

#### _crypto.bcryptSalt(content: int, secureRandom: java.security.SecureRandom) : string
##### Description

Encodes data with bcryptSalt.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _int_ | Content to be encrypted. |
| **secureRandom** | _java.security.SecureRandom_ | Random value generated with initSecure. |

##### Return

( _string_ )

Data of the content encrypted in bcryptSalt.

---

## cryptHash

---

#### _crypto.cryptHash(content: byte[]) : string
##### Description

Encodes data with cryptHash.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _byte[]_ | Content to be encrypted. |

##### Return

( _string_ )

Data of the content encrypted cryptHash.

---

#### _crypto.cryptHash(content: byte[], salt: string) : string
##### Description

Encodes data with cryptHash.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _byte[]_ | Content to be encrypted. |
| **salt** | _string_ | Salt Hash to be used in encryption. |

##### Return

( _string_ )

Data of the content encrypted cryptHash.

---

#### _crypto.cryptHash(content: string) : string
##### Description

Encodes data with cryptHash.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Content to be encrypted. |

##### Return

( _string_ )

Data of the content encrypted cryptHash.

---

#### _crypto.cryptHash(content: string, salt: string) : string
##### Description

Encodes data with cryptHash.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Content to be encrypted. |
| **salt** | _string_ | Salt Hash to be used in encryption. |

##### Return

( _string_ )

Data of the content encrypted cryptHash.

---

## desDecode

---

#### _crypto.desDecode(content: string, data: byte[]) : string
##### Description

Encodes data with Desdecode (Des).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Content to be encrypted. |
| **data** | _byte[]_ | Data to be encrypted. |

##### Return

( _string_ )

Binary data of the content encrypted in Desdecode (Des).

---

#### _crypto.desDecode(content: string, data: byte[], charset: string) : string
##### Description

Encodes data with Desdecode (Des).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Content to be encrypted. |
| **data** | _byte[]_ | Data to be encrypted. |
| **charset** | _string_ | Charset. |

##### Return

( _string_ )

Binary data of the content encrypted in Desdecode (Des).

---

## desDecodeBase64

---

#### _crypto.desDecodeBase64(content: string, data: string, charset: string) : string
##### Description

Encodes data with Desdecode (Des) e convertido em base 64.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Content to be encrypted. |
| **data** | _string_ | Data to be encrypted. |
| **charset** | _string_ | Charset. |

##### Return

( _string_ )

Binary data of the content encrypted in Desdecode (Des) and coverted in base 64.

---

## desEncode

---

#### _crypto.desEncode(key: string, content: string) : byte[]
##### Description

Encodes data with desEncode and returns binary encryption.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ | Secret key for encryption. |
| **content** | _string_ | Content to be encrypted. |

##### Return

( _byte[]_ )

Binary data of the content encrypted in desEncode.

---

#### _crypto.desEncode(key: string, content: string, charset: string) : byte[]
##### Description

Encodes data with desEncode and returns binary encryption.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ | Secret key for encryption. |
| **content** | _string_ | Content to be encrypted. |
| **charset** | _string_ | Charset. |

##### Return

( _byte[]_ )

Binary data of the content encrypted in desEncode.

---

## desEncodeBase64

---

#### _crypto.desEncodeBase64(key: string, content: string, charset: string) : string
##### Description

Encodes data with desEncode and returns string encryption.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ | Secret key for encryption. |
| **content** | _string_ | Content to be encrypted. |
| **charset** | _string_ | Charset. |

##### Return

( _string_ )

String data of the content encrypted in desEncode.

---

## hmac256

---

#### _crypto.hmac256(key: byte[], content: byte[]) : byte[]
##### Description

It encodes the data with HMAC256, which serves to guarantee integrity and authenticity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _byte[]_ | Secret key for encryption. |
| **content** | _byte[]_ | Content to be encoded with HMAC256. |

##### Return

( _byte[]_ )

Data encoded with HMAC256.

---

#### _crypto.hmac256(key: string, content: string) : byte[]
##### Description

It encodes the data with HMAC256, which serves to guarantee integrity and authenticity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ | Secret key for encryption. |
| **content** | _string_ | Content to be encoded with HMAC256. |

##### Return

( _byte[]_ )

Data encoded with HMAC256.

---

## hmac256Base64

---

#### _crypto.hmac256Base64(key: byte[], content: byte[]) : string
##### Description

Encodes data with HMAC256 and converts to Base64, which serves to guarantee integrity and authenticity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _byte[]_ | Secret key for encryption. |
| **content** | _byte[]_ | Content to be encoded with HMAC256. |

##### Return

( _string_ )

Data encoded with HMAC256 and in Base64 format.

---

#### _crypto.hmac256Base64(key: string, content: string) : string
##### Description

Encodes data with HMAC256 and converts to Base64, which serves to guarantee integrity and authenticity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ | Secret key for encryption. |
| **content** | _string_ | Content to be encoded with HMAC256. |

##### Return

( _string_ )

Data encoded with HMAC256 and in Base64 format.

---

## hmac256Hex

---

#### _crypto.hmac256Hex(key: byte[], content: byte[]) : string
##### Description

Encodes data with HMAC256 and converts to hexadecimal, which serves to guarantee integrity and authenticity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _byte[]_ | Secret key for encryption. |
| **content** | _byte[]_ | Content to be encoded with HMAC256. |

##### Return

( _string_ )

Data encoded with HMAC256 and in hexadecimal format.

---

#### _crypto.hmac256Hex(key: string, content: string) : string
##### Description

Encodes data with HMAC256 and converts to hexadecimal, which serves to guarantee integrity and authenticity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ | Secret key for encryption. |
| **content** | _string_ | Content to be encoded with HMAC256. |

##### Return

( _string_ )

Data encoded with HMAC256 and in hexadecimal format.

---

## md5

---

#### _crypto.md5(content: string) : byte[]
##### Description

Encodes data with MD5 and returns 128-bit encryption.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Content to be encrypted. |

##### Return

( _byte[]_ )

Data of the content encrypted in MD5.

---

## md5Base64

---

#### _crypto.md5Base64(content: string) : string
##### Description

Encodes data with cryptHash.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Content to be encrypted. |

##### Return

( _string_ )

Data of the content encrypted in cryptHash.

---

## md5Hex

---

#### _crypto.md5Hex(content: string) : string
##### Description

Encodes data with MD5 and converts the encryption to hexadecimal

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Content to be encrypted. |

##### Return

( _string_ )

Data of the content encrypted in MD5 and converted in hexadecimal format.

---

## sha256

---

#### _crypto.sha256(content: byte[]) : string
##### Description

Encodes data with SHA256 (SHA-2) and converts binary encryption to hexadecimal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _byte[]_ | Content to be encrypted. |

##### Return

( _string_ )

Content encrypted in SHA256 (SHA2) and converted to hexadecimal.

---

#### _crypto.sha256(content: string) : string
##### Description

Encodes data with SHA256 (SHA-2) and converts binary encryption to hexadecimal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Content to be encrypted. |

##### Return

( _string_ )

Content encrypted in SHA256 (SHA2) and converted to hexadecimal.

---

## sha256AsBytes

---

#### _crypto.sha256AsBytes(content: byte[]) : byte[]
##### Description

Encodes data with SHA256 (SHA-2) and returns binary encryption.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _byte[]_ | Content to be encrypted. |

##### Return

( _byte[]_ )

Binary data of the content encrypted in SHA256 (SHA-2).

---

#### _crypto.sha256AsBytes(content: string) : byte[]
##### Description

Encodes data with SHA256 (SHA-2) and returns binary encryption.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Content to be encrypted. |

##### Return

( _byte[]_ )

Binary data of the content encrypted in SHA256 (SHA-2).

---

## sha384

---

#### _crypto.sha384(content: byte[]) : string
##### Description

Encodes data with SHA384 (SHA-2) and converts binary encryption to hexadecimal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _byte[]_ | Content to be encrypted. |

##### Return

( _string_ )

Content encrypted in SHA384 (SHA2) and converted to hexadecimal.

---

#### _crypto.sha384(content: string) : string
##### Description

Encodes data with SHA384 (SHA-2) and converts binary encryption to hexadecimal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Content to be encrypted. |

##### Return

( _string_ )

Content encrypted in SHA384 (SHA2) and converted to hexadecimal.

---

## sha384AsBytes

---

#### _crypto.sha384AsBytes(content: byte[]) : byte[]
##### Description

Encodes data with SHA384 (SHA-2) and returns binary encryption.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _byte[]_ | Content to be encrypted. |

##### Return

( _byte[]_ )

Binary data of the content encrypted in SHA384 (SHA-2).

---

#### _crypto.sha384AsBytes(content: string) : byte[]
##### Description

Encodes data with SHA384 (SHA-2) and returns binary encryption.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Content to be encrypted. |

##### Return

( _byte[]_ )

Binary data of the content encrypted in SHA384 (SHA-2).

---

## sha512

---

#### _crypto.sha512(content: byte[]) : string
##### Description

Encodes data with SHA512 (SHA-2) and converts binary encryption to hexadecimal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _byte[]_ | Content to be encrypted. |

##### Return

( _string_ )

Content encrypted in SHA512 (SHA2) and converted to hexadecimal.

---

#### _crypto.sha512(content: string) : string
##### Description

Encodes data with SHA512 (SHA-2) and converts binary encryption to hexadecimal.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Content to be encrypted. |

##### Return

( _string_ )

Content encrypted in SHA512 (SHA2) and converted to hexadecimal.

---

## sha512AsBytes

---

#### _crypto.sha512AsBytes(content: byte[]) : byte[]
##### Description

Encodes data with SHA512 (SHA-2) and returns binary encryption.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _byte[]_ | Content to be encrypted. |

##### Return

( _byte[]_ )

Binary data of the content encrypted in SHA512 (SHA-2).

---

#### _crypto.sha512AsBytes(content: string) : byte[]
##### Description

Encodes data with SHA512 (SHA-512) and returns binary encryption.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Content to be encrypted. |

##### Return

( _byte[]_ )

Binary data of the content encrypted in SHA512 (SHA-2).

---

