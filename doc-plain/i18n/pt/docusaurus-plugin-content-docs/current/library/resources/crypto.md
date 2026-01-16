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
| **chave** | _string_ | Chave utilizada na encriptação. |
| **conteudo** | _string_ | Conteúdo de dados encriptado com AES256. |

##### Retorno

( _string_ )

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
| **chave** | _string_ | Chave secreta para a encriptação. |
| **conteudo** | _string_ | Conteúdo para ser encriptado com AES256. |

##### Retorno

( _string_ )

Dados encriptados com AES256.

---

## bcryptCheck

---

#### _crypto.bcryptCheck(texto: string, hash: string) : boolean
##### Descrição

Verifica se uma String e um Salt Hash são iguais.

##### Como Usar

```javascript
_out.println(_crypto.bcryptCheck('texto', _crypto.bcryptHash('texto',_crypto.bcryptSalt(10))))
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **texto** | _string_ | Texto que será verificado. |
| **hash** | _string_ | Conteúdo encriptado. |

##### Retorno

( _boolean_ )

Resultado da verificação, retornando true caso a string e o hash sejam iguais.

---

## bcryptHash

---

#### _crypto.bcryptHash(senha: string, salt: string) : string
##### Descrição

Gera um hash com a string e o salt.

##### Como Usar

```javascript
let hash = _crypto.bcryptHash('netuno',_crypto.bcryptSalt(10))
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **senha** | _string_ | Senha ou string que será encriptada. |
| **salt** | _string_ | Conteúdo encriptado com bcryptSalt. |

##### Retorno

( _string_ )

Resultado da encriptação da String.

---

## bcryptSalt

---

#### _crypto.bcryptSalt() : string
##### Descrição

Codifica os dados com o cryptHash.

##### Retorno

( _string_ )

Dados do conteúdo encriptado em cryptHash.

---

#### _crypto.bcryptSalt(conteudo: int) : string
##### Descrição

Codifica os dados bcryptSalt.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _int_ | Conteúdo para ser encriptado. |

##### Retorno

( _string_ )

Dados do conteúdo encriptado em bcryptSalt.

---

#### _crypto.bcryptSalt(conteudo: int, secureRandom: java.security.SecureRandom) : string
##### Descrição

Codifica os dados bcryptSalt.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _int_ | Conteúdo para ser encriptado. |
| **secureRandom** | _java.security.SecureRandom_ | Valor aleatório gerado com initSecure. |

##### Retorno

( _string_ )

Dados do conteúdo encriptado em bcryptSalt.

---

## cryptHash

---

#### _crypto.cryptHash(conteúdo: byte[]) : string
##### Descrição

Codifica os dados com o cryptHash

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _byte[]_ | Conteúdo para ser encriptado. |

##### Retorno

( _string_ )

Dados do conteúdo encriptado cryptHash.

---

#### _crypto.cryptHash(conteúdo: byte[], salt: string) : string
##### Descrição

Codifica os dados com o cryptHash

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _byte[]_ | Conteúdo para ser encriptado. |
| **salt** | _string_ | Salt Hash para ser utilizado na encriptação. |

##### Retorno

( _string_ )

Dados do conteúdo encriptado cryptHash.

---

#### _crypto.cryptHash(conteúdo: string) : string
##### Descrição

Codifica os dados com o cryptHash

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _string_ | Conteúdo para ser encriptado. |

##### Retorno

( _string_ )

Dados do conteúdo encriptado cryptHash.

---

#### _crypto.cryptHash(conteúdo: string, salt: string) : string
##### Descrição

Codifica os dados com o cryptHash

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _string_ | Conteúdo para ser encriptado. |
| **salt** | _string_ | Salt Hash para ser utilizado na encriptação. |

##### Retorno

( _string_ )

Dados do conteúdo encriptado cryptHash.

---

## desDecode

---

#### _crypto.desDecode(conteudo: string, dados: byte[]) : string
##### Descrição

Codifica os dados com o Desdecode (Des).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _string_ | Conteúdo para ser encriptado. |
| **dados** | _byte[]_ | Dados para serem encriptados. |

##### Retorno

( _string_ )

Dados binários do conteúdo encriptado em Desdecode (Des).

---

#### _crypto.desDecode(conteudo: string, dados: byte[], charset: string) : string
##### Descrição

Codifica os dados com o SHA512 (SHA-2) e retorna a encriptação binária.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _string_ | Conteúdo para ser encriptado. |
| **dados** | _byte[]_ | Dados para serem encriptados. |
| **charset** | _string_ | Conjunto de caracteres. |

##### Retorno

( _string_ )

Dados binários do conteúdo encriptado em Desdecode (Des).

---

## desDecodeBase64

---

#### _crypto.desDecodeBase64(conteudo: string, dados: string, charset: string) : string
##### Descrição

Codifica os dados com o SHA512 (SHA-2) e retorna a encriptação binária.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _string_ | Conteúdo para ser encriptado. |
| **dados** | _string_ | Dados para serem encriptados. |
| **charset** | _string_ | Conjunto de caracteres. |

##### Retorno

( _string_ )

Dados binários do conteúdo encriptado em Desdecode (Des) e convertidos em base 64.

---

## desEncode

---

#### _crypto.desEncode(chave: string, conteudo: string) : byte[]
##### Descrição

Codifica os dados com o desEncode.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | Chave secreta para a codificação. |
| **conteudo** | _string_ | Conteúdo para ser encriptado. |

##### Retorno

( _byte[]_ )

Dados binários do conteúdo encriptado em desEncode.

---

#### _crypto.desEncode(chave: string, conteudo: string, charset: string) : byte[]
##### Descrição

Codifica os dados com o desEncode.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | Chave secreta para a codificação. |
| **conteudo** | _string_ | Conteúdo para ser encriptado. |
| **charset** | _string_ | Conjunto de caracteres. |

##### Retorno

( _byte[]_ )

Dados binários do conteúdo encriptado em desEncode.

---

## desEncodeBase64

---

#### _crypto.desEncodeBase64(chave: string, conteudo: string, charset: string) : string
##### Descrição

Codifica os dados com o desEncode.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | Chave secreta para a codificação. |
| **conteudo** | _string_ | Conteúdo para ser encriptado. |
| **charset** | _string_ | Conjunto de caracteres. |

##### Retorno

( _string_ )

String do conteúdo encriptado em desEncode.

---

## hmac256

---

#### _crypto.hmac256(chave: byte[], conteudo: byte[]) : byte[]
##### Descrição

Codifica os dados com o HMAC256, que serve para garantir a integridade e autenticidade.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _byte[]_ | Chave secreta para a codificação. |
| **conteudo** | _byte[]_ | Conteúdo para ser codificado com HMAC256. |

##### Retorno

( _byte[]_ )

Dados codificados com HMAC256.

---

#### _crypto.hmac256(chave: string, conteudo: string) : byte[]
##### Descrição

Codifica os dados com o HMAC256, que serve para garantir a integridade e autenticidade.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | Chave secreta para a codificação. |
| **conteudo** | _string_ | Conteúdo para ser codificado com HMAC256. |

##### Retorno

( _byte[]_ )

Dados codificados com HMAC256.

---

## hmac256Base64

---

#### _crypto.hmac256Base64(chave: byte[], conteudo: byte[]) : string
##### Descrição

Codifica os dados com o HMAC256 e converte para Base64, que serve para garantir a integridade e autenticidade.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _byte[]_ | Chave secreta para a codificação. |
| **conteudo** | _byte[]_ | Conteúdo para ser codificado com HMAC256. |

##### Retorno

( _string_ )

Dados codificados com HMAC256 e em formato Base64.

---

#### _crypto.hmac256Base64(chave: string, conteudo: string) : string
##### Descrição

Codifica os dados com o HMAC256 e converte para Base64, que serve para garantir a integridade e autenticidade.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | Chave secreta para a codificação. |
| **conteudo** | _string_ | Conteúdo para ser codificado com HMAC256. |

##### Retorno

( _string_ )

Dados codificados com HMAC256 e em formato Base64.

---

## hmac256Hex

---

#### _crypto.hmac256Hex(chave: byte[], conteudo: byte[]) : string
##### Descrição

Codifica os dados com o HMAC256 e converte para hexadecimal, que serve para garantir a integridade e autenticidade.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _byte[]_ | Chave secreta para a codificação. |
| **conteudo** | _byte[]_ | Conteúdo para ser codificado com HMAC256. |

##### Retorno

( _string_ )

Dados codificados com HMAC256 e em formato hexadecimal.

---

#### _crypto.hmac256Hex(chave: string, conteudo: string) : string
##### Descrição

Codifica os dados com o HMAC256 e converte para hexadecimal, que serve para garantir a integridade e autenticidade.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | Chave secreta para a codificação. |
| **conteudo** | _string_ | Conteúdo para ser codificado com HMAC256. |

##### Retorno

( _string_ )

Dados codificados com HMAC256 e em formato hexadecimal.

---

## md5

---

#### _crypto.md5(conteudo: string) : byte[]
##### Descrição

Codifica os dados com o MD5 e retorna a encriptação de 128 bit.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _string_ | Conteúdo para ser encriptado. |

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
| **conteudo** | _string_ | Conteúdo para ser encriptado. |

##### Retorno

( _string_ )

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
| **conteudo** | _string_ | Conteúdo para ser encriptado. |

##### Retorno

( _string_ )

Dados do conteúdo encriptado em MD5 e convertido hexadecimal.

---

## sha256

---

#### _crypto.sha256(conteudo: byte[]) : string
##### Descrição

Codifica os dados com o SHA256 (SHA-2) e converte a encriptação binária em hexadecimal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _byte[]_ | Conteúdo para ser encriptado. |

##### Retorno

( _string_ )

Conteúdo encriptado em SHA256 (SHA2) e convertido em hexadecimal.

---

#### _crypto.sha256(conteudo: string) : string
##### Descrição

Codifica os dados com o SHA256 (SHA-2) e converte a encriptação binária em hexadecimal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _string_ | Conteúdo para ser encriptado. |

##### Retorno

( _string_ )

Conteúdo encriptado em SHA256 (SHA2) e convertido em hexadecimal.

---

## sha256AsBytes

---

#### _crypto.sha256AsBytes(conteudo: byte[]) : byte[]
##### Descrição

Codifica os dados com o SHA256 (SHA-2) e retorna a encriptação binária.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _byte[]_ | Conteúdo para ser encriptado. |

##### Retorno

( _byte[]_ )

Dados binários do conteúdo encriptado em SHA256 (SHA-2).

---

#### _crypto.sha256AsBytes(conteudo: string) : byte[]
##### Descrição

Codifica os dados com o SHA256 (SHA-2) e retorna a encriptação binária.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _string_ | Conteúdo para ser encriptado. |

##### Retorno

( _byte[]_ )

Dados binários do conteúdo encriptado em SHA256 (SHA-2).

---

## sha384

---

#### _crypto.sha384(conteudo: byte[]) : string
##### Descrição

Codifica os dados com o SHA384 (SHA-2) e converte a encriptação binária em hexadecimal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _byte[]_ | Conteúdo para ser encriptado. |

##### Retorno

( _string_ )

Conteúdo encriptado em SHA384 (SHA2) e convertido em hexadecimal.

---

#### _crypto.sha384(conteudo: string) : string
##### Descrição

Codifica os dados com o SHA384 (SHA-2) e converte a encriptação binária em hexadecimal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _string_ | Conteúdo para ser encriptado. |

##### Retorno

( _string_ )

Conteúdo encriptado em SHA384 (SHA2) e convertido em hexadecimal.

---

## sha384AsBytes

---

#### _crypto.sha384AsBytes(conteudo: byte[]) : byte[]
##### Descrição

Codifica os dados com o SHA384 (SHA-2) e retorna a encriptação binária.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _byte[]_ | Conteúdo para ser encriptado. |

##### Retorno

( _byte[]_ )

Dados binários do conteúdo encriptado em SHA384 (SHA-2).

---

#### _crypto.sha384AsBytes(conteudo: string) : byte[]
##### Descrição

Codifica os dados com o SHA384 (SHA-2) e retorna a encriptação binária.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _string_ | Conteúdo para ser encriptado. |

##### Retorno

( _byte[]_ )

Dados binários do conteúdo encriptado em SHA384 (SHA-2).

---

## sha512

---

#### _crypto.sha512(conteudo: byte[]) : string
##### Descrição

Codifica os dados com o SHA512 (SHA-2) e converte a encriptação binária em hexadecimal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _byte[]_ | Conteúdo para ser encriptado. |

##### Retorno

( _string_ )

Conteúdo encriptado em SHA512 (SHA2) e convertido em hexadecimal.

---

#### _crypto.sha512(conteudo: string) : string
##### Descrição

Codifica os dados com o SHA512 (SHA-2) e converte a encriptação binária em hexadecimal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _string_ | Conteúdo para ser encriptado. |

##### Retorno

( _string_ )

Conteúdo encriptado em SHA512 (SHA2) e convertido em hexadecimal.

---

## sha512AsBytes

---

#### _crypto.sha512AsBytes(conteudo: byte[]) : byte[]
##### Descrição

Codifica os dados com o SHA512 (SHA-2) e retorna a encriptação binária.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _byte[]_ | Conteúdo para ser encriptado. |

##### Retorno

( _byte[]_ )

Dados binários do conteúdo encriptado em SHA512 (SHA-2).

---

#### _crypto.sha512AsBytes(conteudo: string) : byte[]
##### Descrição

Codifica os dados com o SHA512 (SHA-512).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteudo** | _string_ | Conteúdo para ser encriptado. |

##### Retorno

( _byte[]_ )

Dados binários do conteúdo encriptado em SHA512 (SHA-2).

---

