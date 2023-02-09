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
##### Descrição

Codifica os dados com o cryptHash.

##### Retorno

( string )

Dados do conteúdo encriptado em cryptHash.

---

#### _crypto.bcryptSalt(conteudo: _int_) : string
##### Descrição

Codifica os dados bcryptSalt.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | _int_ | Conteúdo para ser encriptado. |

##### Retorno

( string )

Dados do conteúdo encriptado em bcryptSalt.

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

## cryptHash

---

#### _crypto.cryptHash(conteúdo: _byte[]_) : string
##### Descrição

Codifica os dados com o cryptHash

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | _byte[]_ | Conteúdo para ser encriptado. |

##### Retorno

( string )

Dados do conteúdo encriptado cryptHash.

---

#### _crypto.cryptHash(conteúdo: _byte[]_, arg1: string) : string
##### Descrição

Codifica os dados com o cryptHash

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | _byte[]_ | Conteúdo para ser encriptado. |
| arg1 | string |   |

##### Retorno

( string )

Dados do conteúdo encriptado cryptHash.

---

#### _crypto.cryptHash(conteúdo: string) : string
##### Descrição

Codifica os dados com o cryptHash

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | string | Conteúdo para ser encriptado. |

##### Retorno

( string )

Dados do conteúdo encriptado cryptHash.

---

#### _crypto.cryptHash(conteúdo: string, arg1: string) : string
##### Descrição

Codifica os dados com o cryptHash

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | string | Conteúdo para ser encriptado. |
| arg1 | string |   |

##### Retorno

( string )

Dados do conteúdo encriptado cryptHash.

---

## desDecode

---

#### _crypto.desDecode(conteudo: string, arg1: _byte[]_) : string
##### Descrição

Codifica os dados com o SHA512 (SHA-2) e retorna a encriptação binária.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | string | Conteúdo para ser encriptado. |
| arg1 | _byte[]_ |   |

##### Retorno

( string )

Dados binários do conteúdo encriptado em Desdecode (Des).

---

#### _crypto.desDecode(arg0: string, arg1: _byte[]_, arg2: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _byte[]_ |   |
| arg2 | string |   |

##### Retorno

( string )


---

## desDecodeBase64

---

#### _crypto.desDecodeBase64(conteudo: string, arg1: string, arg2: string) : string
##### Descrição

Codifica os dados com o SHA512 (SHA-2) e retorna a encriptação binária.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | string | Conteúdo para ser encriptado. |
| arg1 | string |   |
| arg2 | string |   |

##### Retorno

( string )

Dados binários do conteúdo encriptado em Desdecode (Des) e convertidos em base 64.

---

## desEncode

---

#### _crypto.desEncode(arg0: string, arg1: string) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( _byte[]_ )


---

#### _crypto.desEncode(arg0: string, arg1: string, arg2: string) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | string |   |

##### Retorno

( _byte[]_ )


---

## desEncodeBase64

---

#### _crypto.desEncodeBase64(arg0: string, arg1: string, arg2: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | string |   |

##### Retorno

( string )


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

#### _crypto.md5(conteudo: string) : _byte[]_
##### Descrição

Codifica os dados com o MD5 e retorna a encriptação de 128 bit.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | string | Conteúdo para ser encriptado. |

##### Retorno

( _byte[]_ )

Dados do conteúdo encriptado em MD5.

---

## md5Base64

---

#### _crypto.md5Base64(conteudo: string) : string
##### Descrição

Codifica os dados com o cryptHash.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | string | Conteúdo para ser encriptado. |

##### Retorno

( string )

Dados do conteúdo encriptado em cryptHash.

---

## md5Hex

---

#### _crypto.md5Hex(conteudo: string) : string
##### Descrição

Codifica os dados com o MD5 e converte a encriptação em hexadecimal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | string | Conteúdo para ser encriptado. |

##### Retorno

( string )

Dados do conteúdo encriptado em MD5 e convertido hexadecimal.

---

## sha256

---

#### _crypto.sha256(conteudo: _byte[]_) : string
##### Descrição

Codifica os dados com o SHA256 (SHA-2) e converte a encriptação binária em hexadecimal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | _byte[]_ | Conteúdo para ser encriptado. |

##### Retorno

( string )

Conteúdo encriptado em SHA256 (SHA2) e convertido em hexadecimal.

---

#### _crypto.sha256(conteudo: string) : string
##### Descrição

Codifica os dados com o SHA256 (SHA-2) e converte a encriptação binária em hexadecimal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | string | Conteúdo para ser encriptado. |

##### Retorno

( string )

Conteúdo encriptado em SHA256 (SHA2) e convertido em hexadecimal.

---

## sha256AsBytes

---

#### _crypto.sha256AsBytes(conteudo: _byte[]_) : _byte[]_
##### Descrição

Codifica os dados com o SHA256 (SHA-2) e retorna a encriptação binária.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | _byte[]_ | Conteúdo para ser encriptado. |

##### Retorno

( _byte[]_ )

Dados binários do conteúdo encriptado em SHA256 (SHA-2).

---

#### _crypto.sha256AsBytes(conteudo: string) : _byte[]_
##### Descrição

Codifica os dados com o SHA256 (SHA-2) e retorna a encriptação binária.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | string | Conteúdo para ser encriptado. |

##### Retorno

( _byte[]_ )

Dados binários do conteúdo encriptado em SHA256 (SHA-2).

---

## sha384

---

#### _crypto.sha384(conteudo: _byte[]_) : string
##### Descrição

Codifica os dados com o SHA384 (SHA-2) e converte a encriptação binária em hexadecimal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | _byte[]_ | Conteúdo para ser encriptado. |

##### Retorno

( string )

Conteúdo encriptado em SHA384 (SHA2) e convertido em hexadecimal.

---

#### _crypto.sha384(conteudo: string) : string
##### Descrição

Codifica os dados com o SHA384 (SHA-2) e converte a encriptação binária em hexadecimal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | string | Conteúdo para ser encriptado. |

##### Retorno

( string )

Conteúdo encriptado em SHA384 (SHA2) e convertido em hexadecimal.

---

## sha384AsBytes

---

#### _crypto.sha384AsBytes(conteudo: _byte[]_) : _byte[]_
##### Descrição

Codifica os dados com o SHA384 (SHA-2) e retorna a encriptação binária.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | _byte[]_ | Conteúdo para ser encriptado. |

##### Retorno

( _byte[]_ )

Dados binários do conteúdo encriptado em SHA384 (SHA-2).

---

#### _crypto.sha384AsBytes(conteudo: string) : _byte[]_
##### Descrição

Codifica os dados com o SHA384 (SHA-2) e retorna a encriptação binária.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | string | Conteúdo para ser encriptado. |

##### Retorno

( _byte[]_ )

Dados binários do conteúdo encriptado em SHA384 (SHA-2).

---

## sha512

---

#### _crypto.sha512(conteudo: _byte[]_) : string
##### Descrição

Codifica os dados com o SHA512 (SHA-2) e converte a encriptação binária em hexadecimal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | _byte[]_ | Conteúdo para ser encriptado. |

##### Retorno

( string )

Conteúdo encriptado em SHA512 (SHA2) e convertido em hexadecimal.

---

#### _crypto.sha512(conteudo: string) : string
##### Descrição

Codifica os dados com o SHA512 (SHA-2) e converte a encriptação binária em hexadecimal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | string | Conteúdo para ser encriptado. |

##### Retorno

( string )

Conteúdo encriptado em SHA512 (SHA2) e convertido em hexadecimal.

---

## sha512AsBytes

---

#### _crypto.sha512AsBytes(conteudo: _byte[]_) : _byte[]_
##### Descrição

Codifica os dados com o SHA512 (SHA-2) e retorna a encriptação binária.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | _byte[]_ | Conteúdo para ser encriptado. |

##### Retorno

( _byte[]_ )

Dados binários do conteúdo encriptado em SHA512 (SHA-2).

---

#### _crypto.sha512AsBytes(conteudo: string) : _byte[]_
##### Descrição

Codifica os dados com o SHA512 (SHA-512).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteudo | string | Conteúdo para ser encriptado. |

##### Retorno

( _byte[]_ )

Dados binários do conteúdo encriptado em SHA512 (SHA-2).

---

