---
id: security
title: Security
sidebar_label: Security
---

Recurso de encriptação de dados.

---

## aes256Decrypt

---

#### _security.aes256Decrypt(arg0: string, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( string )


---

## aes256Encrypt

---

#### _security.aes256Encrypt(arg0: string, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( string )


---

## base64Decode

---

#### _security.base64Decode(arg0: _byte[]_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Retorno

( string )


---

#### _security.base64Decode(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## base64DecodeAsBytes

---

#### _security.base64DecodeAsBytes(arg0: _byte[]_) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Retorno

( _byte[]_ )


---

#### _security.base64DecodeAsBytes(arg0: string) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _byte[]_ )


---

## base64Encode

---

#### _security.base64Encode(arg0: _byte[]_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Retorno

( string )


---

#### _security.base64Encode(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## base64EncodeAsBytes

---

#### _security.base64EncodeAsBytes(arg0: _byte[]_) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Retorno

( _byte[]_ )


---

#### _security.base64EncodeAsBytes(arg0: string) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _byte[]_ )


---

## bcryptCheck

---

#### _security.bcryptCheck(arg0: string, arg1: string) : _boolean_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( _boolean_ )


---

## bcryptHash

---

#### _security.bcryptHash(arg0: string, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( string )


---

## bcryptSalt

---

#### _security.bcryptSalt() : string
##### Retorno

( string )


---

#### _security.bcryptSalt(arg0: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( string )


---

#### _security.bcryptSalt(arg0: _int_, arg1: _SecureRandom_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _SecureRandom_ |   |

##### Retorno

( string )


---

## des

---

#### _security.des(arg0: string) : _DES_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _DES_ )


---

## md5

---

#### _security.md5(arg0: string) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _byte[]_ )


---

## md5Base64

---

#### _security.md5Base64(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## md5Hex

---

#### _security.md5Hex(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## sha256

---

#### _security.sha256(arg0: _byte[]_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Retorno

( string )


---

#### _security.sha256(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## sha256AsBytes

---

#### _security.sha256AsBytes(arg0: _byte[]_) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Retorno

( _byte[]_ )


---

#### _security.sha256AsBytes(arg0: string) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _byte[]_ )


---

## sha384

---

#### _security.sha384(arg0: _byte[]_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Retorno

( string )


---

#### _security.sha384(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## sha384AsBytes

---

#### _security.sha384AsBytes(arg0: _byte[]_) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Retorno

( _byte[]_ )


---

#### _security.sha384AsBytes(arg0: string) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _byte[]_ )


---

## sha512

---

#### _security.sha512(arg0: _byte[]_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Retorno

( string )


---

#### _security.sha512(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## sha512AsBytes

---

#### _security.sha512AsBytes(arg0: _byte[]_) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Retorno

( _byte[]_ )


---

#### _security.sha512AsBytes(arg0: string) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _byte[]_ )


---

