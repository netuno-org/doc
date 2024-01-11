---
id: crypto
title: Crypto
sidebar_label: Crypto
---

Algoritmos de encriptação de dados.

---

## aes256Decrypt

---

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">aes256Decrypt</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">aes256Encrypt</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">bcryptCheck</span>(<span style="color: #FF8000">plaintext</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">hashed</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">bcryptHash</span>(<span style="color: #FF8000">password</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">salt</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">bcryptSalt</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Encodes data with cryptHash.

##### Return

( _string_ )

Data of the content encrypted in cryptHash.

---

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">bcryptSalt</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">bcryptSalt</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">secureRandom</span>: <span style="font-weight: normal; font-style: italic;">java.security.SecureRandom</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">cryptHash</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">byte[]</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">cryptHash</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">byte[]</span>, <span style="color: #FF8000">salt</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">cryptHash</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">cryptHash</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">salt</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">desDecode</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">byte[]</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">desDecode</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">byte[]</span>, <span style="color: #FF8000">charset</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">desDecodeBase64</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">data</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">charset</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">desEncode</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">byte[]</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">desEncode</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">charset</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">byte[]</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">desEncodeBase64</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">charset</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">hmac256</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">byte[]</span>, <span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">byte[]</span>) : <span style="font-weight: normal; font-style: italic;">byte[]</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">hmac256</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">byte[]</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">hmac256Base64</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">byte[]</span>, <span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">byte[]</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">hmac256Base64</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">hmac256Hex</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">byte[]</span>, <span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">byte[]</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">hmac256Hex</span>(<span style="color: #FF8000">key</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">md5</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">byte[]</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">md5Base64</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">md5Hex</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">sha256</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">byte[]</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">sha256</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">sha256AsBytes</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">byte[]</span>) : <span style="font-weight: normal; font-style: italic;">byte[]</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">sha256AsBytes</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">byte[]</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">sha384</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">byte[]</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">sha384</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">sha384AsBytes</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">byte[]</span>) : <span style="font-weight: normal; font-style: italic;">byte[]</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">sha384AsBytes</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">byte[]</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">sha512</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">byte[]</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">sha512</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">sha512AsBytes</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">byte[]</span>) : <span style="font-weight: normal; font-style: italic;">byte[]</span>
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

#### <span style="font-weight: normal">_crypto</span>.<span style="color: #008000">sha512AsBytes</span>(<span style="color: #FF8000">content</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">byte[]</span>
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

