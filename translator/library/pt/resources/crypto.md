---
id: crypto
title: Crypto
sidebar_label: Crypto
---

Algoritmos de encriptação de dados.

---

## aes256Decrypt

---

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>aes256Decrypt</span>(<span style={{color: '#FF8000'}}>chave</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>aes256Encrypt</span>(<span style={{color: '#FF8000'}}>chave</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>bcryptCheck</span>(<span style={{color: '#FF8000'}}>texto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>hash</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>bcryptHash</span>(<span style={{color: '#FF8000'}}>senha</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>salt</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>bcryptSalt</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Codifica os dados com o cryptHash.

##### Retorno

( _string_ )

Dados do conteúdo encriptado em cryptHash.

---

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>bcryptSalt</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>bcryptSalt</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>secureRandom</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.security.SecureRandom</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>cryptHash</span>(<span style={{color: '#FF8000'}}>conteúdo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>cryptHash</span>(<span style={{color: '#FF8000'}}>conteúdo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>, <span style={{color: '#FF8000'}}>salt</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>cryptHash</span>(<span style={{color: '#FF8000'}}>conteúdo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>cryptHash</span>(<span style={{color: '#FF8000'}}>conteúdo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>salt</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>desDecode</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dados</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>desDecode</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dados</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>, <span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>desDecodeBase64</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dados</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>desEncode</span>(<span style={{color: '#FF8000'}}>chave</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>desEncode</span>(<span style={{color: '#FF8000'}}>chave</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>desEncodeBase64</span>(<span style={{color: '#FF8000'}}>chave</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>charset</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>hmac256</span>(<span style={{color: '#FF8000'}}>chave</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>, <span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>hmac256</span>(<span style={{color: '#FF8000'}}>chave</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>hmac256Base64</span>(<span style={{color: '#FF8000'}}>chave</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>, <span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>hmac256Base64</span>(<span style={{color: '#FF8000'}}>chave</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>hmac256Hex</span>(<span style={{color: '#FF8000'}}>chave</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>, <span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>hmac256Hex</span>(<span style={{color: '#FF8000'}}>chave</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>md5</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>md5Base64</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>md5Hex</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>sha256</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>sha256</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>sha256AsBytes</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>sha256AsBytes</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>sha384</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>sha384</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>sha384AsBytes</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>sha384AsBytes</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>sha512</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>sha512</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>sha512AsBytes</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
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

#### <span style={{fontWeight: 'normal'}}>_crypto</span>.<span style={{color: '#008000'}}>sha512AsBytes</span>(<span style={{color: '#FF8000'}}>conteudo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
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

