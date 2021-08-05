---
id: crypto
title: Crypto
sidebar_label: Crypto
---

Algoritmos de encriptação de dados.

---

## aes256Decrypt

---

#### _crypto.aes256Decrypt(chave: string, conteudo: string) : string
##### Descrição

Desencripta conteúdo codificado com AES256.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | string | Chave utilizada na encriptação. |
| conteudo | string | Conteúdo de dados encriptado com AES256. |

##### Retorno

( string )

Conteúdo original desencriptado.

---

## aes256Encrypt

---

#### _crypto.aes256Encrypt(chave: string, conteudo: string) : string
##### Descrição

Encripta os dados com o AES256.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | string | Chave secreta para a encriptação. |
| conteudo | string | Conteúdo para ser encriptado com AES256. |

##### Retorno

( string )

Dados encriptados com AES256.

---

## base64Decode

---

#### _crypto.base64Decode(arg0: _byte[]_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Retorno

( string )


---

#### _crypto.base64Decode(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## base64DecodeAsBytes

---

#### _crypto.base64DecodeAsBytes(arg0: _byte[]_) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Retorno

( _byte[]_ )


---

#### _crypto.base64DecodeAsBytes(arg0: string) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _byte[]_ )


---

## base64Encode

---

#### _crypto.base64Encode(arg0: _byte[]_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Retorno

( string )


---

#### _crypto.base64Encode(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## base64EncodeAsBytes

---

#### _crypto.base64EncodeAsBytes(arg0: _byte[]_) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Retorno

( _byte[]_ )


---

#### _crypto.base64EncodeAsBytes(arg0: string) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _byte[]_ )


---

## bcryptCheck

---

#### _crypto.bcryptCheck(arg0: string, arg1: string) : _boolean_
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

#### _crypto.bcryptHash(arg0: string, arg1: string) : string
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

#### _crypto.bcryptSalt() : string
##### Retorno

( string )


---

#### _crypto.bcryptSalt(arg0: _int_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( string )


---

#### _crypto.bcryptSalt(arg0: _int_, arg1: _SecureRandom_) : string
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

#### _crypto.des(arg0: string) : _DES_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _DES_ )


---

## hmac256

---

#### _crypto.hmac256(chave: _byte[]_, conteudo: _byte[]_) : _byte[]_
##### Descrição

Codifica os dados com o HMAC256, que serve para garantir a integridade e autenticidade.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | _byte[]_ | Chave secreta para a codificação. |
| conteudo | _byte[]_ | Conteúdo para ser codificado com HMAC256. |

##### Retorno

( _byte[]_ )

Dados codificados com HMAC256.

---

#### _crypto.hmac256(chave: string, conteudo: string) : _byte[]_
##### Descrição

Codifica os dados com o HMAC256, que serve para garantir a integridade e autenticidade.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | string | Chave secreta para a codificação. |
| conteudo | string | Conteúdo para ser codificado com HMAC256. |

##### Retorno

( _byte[]_ )

Dados codificados com HMAC256.

---

## hmac256Base64

---

#### _crypto.hmac256Base64(chave: _byte[]_, conteudo: _byte[]_) : string
##### Descrição

Codifica os dados com o HMAC256 e converte para Base64, que serve para garantir a integridade e autenticidade.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | _byte[]_ | Chave secreta para a codificação. |
| conteudo | _byte[]_ | Conteúdo para ser codificado com HMAC256. |

##### Retorno

( string )

Dados codificados com HMAC256 e em formato Base64.

---

#### _crypto.hmac256Base64(chave: string, conteudo: string) : string
##### Descrição

Codifica os dados com o HMAC256 e converte para Base64, que serve para garantir a integridade e autenticidade.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | string | Chave secreta para a codificação. |
| conteudo | string | Conteúdo para ser codificado com HMAC256. |

##### Retorno

( string )

Dados codificados com HMAC256 e em formato Base64.

---

## hmac256Hex

---

#### _crypto.hmac256Hex(chave: _byte[]_, conteudo: _byte[]_) : string
##### Descrição

Codifica os dados com o HMAC256 e converte para hexadecimal, que serve para garantir a integridade e autenticidade.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | _byte[]_ | Chave secreta para a codificação. |
| conteudo | _byte[]_ | Conteúdo para ser codificado com HMAC256. |

##### Retorno

( string )

Dados codificados com HMAC256 e em formato hexadecimal.

---

#### _crypto.hmac256Hex(chave: string, conteudo: string) : string
##### Descrição

Codifica os dados com o HMAC256 e converte para hexadecimal, que serve para garantir a integridade e autenticidade.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | string | Chave secreta para a codificação. |
| conteudo | string | Conteúdo para ser codificado com HMAC256. |

##### Retorno

( string )

Dados codificados com HMAC256 e em formato hexadecimal.

---

## md5

---

#### _crypto.md5(arg0: string) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _byte[]_ )


---

## md5Base64

---

#### _crypto.md5Base64(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## md5Hex

---

#### _crypto.md5Hex(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## sha256

---

#### _crypto.sha256(arg0: _byte[]_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Retorno

( string )


---

#### _crypto.sha256(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## sha256AsBytes

---

#### _crypto.sha256AsBytes(arg0: _byte[]_) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Retorno

( _byte[]_ )


---

#### _crypto.sha256AsBytes(arg0: string) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _byte[]_ )


---

## sha384

---

#### _crypto.sha384(arg0: _byte[]_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Retorno

( string )


---

#### _crypto.sha384(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## sha384AsBytes

---

#### _crypto.sha384AsBytes(arg0: _byte[]_) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Retorno

( _byte[]_ )


---

#### _crypto.sha384AsBytes(arg0: string) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _byte[]_ )


---

## sha512

---

#### _crypto.sha512(arg0: _byte[]_) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Retorno

( string )


---

#### _crypto.sha512(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

## sha512AsBytes

---

#### _crypto.sha512AsBytes(arg0: _byte[]_) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _byte[]_ |   |

##### Retorno

( _byte[]_ )


---

#### _crypto.sha512AsBytes(arg0: string) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _byte[]_ )


---

