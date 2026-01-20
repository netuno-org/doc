---
id: SSHSCP
title: SSHSCP
sidebar_label: SSHSCP
---

Cliente SCP utilizado com o SSH.

---

## close

---

#### close() : void
##### Descrição

Fecha a sessão atual de SCP.

##### Retorno

( _void_ )


---

## closed

---

#### closed() : boolean
##### Descrição

Verifica se a sessão SCP ainda está aberta.

##### Retorno

( _boolean_ )

Verdadeiro se estiver aberta

---

## download

---

#### download(caminhoRemoto: string, destino: [OutputStream](/docs/library/objects/OutputStream)) : [SSHSCP](/docs/library/objects/SSHSCP)
##### Descrição

Copia um arquivo no servidor para um arquivo local.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **destino** | _[OutputStream](/docs/library/objects/OutputStream)_ | Arquivo local de destino para armazenar o conteúdo remoto. |

##### Retorno

( _[SSHSCP](/docs/library/objects/SSHSCP)_ )

O cliente SFTP atual.

---

#### download(caminhoRemoto: string, destino: [File](/docs/library/objects/File)) : [SSHSCP](/docs/library/objects/SSHSCP)
##### Descrição

Copia um arquivo no servidor para um arquivo local.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **destino** | _[File](/docs/library/objects/File)_ | Arquivo local de destino para armazenar o conteúdo remoto. |

##### Retorno

( _[SSHSCP](/docs/library/objects/SSHSCP)_ )

O cliente SFTP atual.

---

## downloadBytes

---

#### downloadBytes(caminhoRemoto: string) : byte[]
##### Descrição

Obtém um array de bytes do conteúdo de um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |

##### Retorno

( _byte[]_ )

Array de bytes com o conteúdo do arquivo remoto no servidor.

---

## downloadText

---

#### downloadText(caminhoRemoto: string) : string
##### Descrição

Obtém um conteúdo de texto de um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |

##### Retorno

( _string_ )

Conteúdo de texto do arquivo remoto no servidor.

---

#### downloadText(caminhoRemoto: string, encodificacao: string) : string
##### Descrição

Obtém um conteúdo de texto de um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **encodificacao** | _string_ | Código de encodificação dos caractéres. |

##### Retorno

( _string_ )

Conteúdo de texto do arquivo remoto no servidor.

---

## isClosed

---

#### isClosed() : boolean
##### Retorno

( _boolean_ )


---

## upload

---

#### upload(caminhoRemoto: string, origem: [InputStream](/docs/library/objects/InputStream)) : [SSHSCP](/docs/library/objects/SSHSCP)
##### Descrição

Envia os dados de um arquivo para ser salvo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **origem** | _[InputStream](/docs/library/objects/InputStream)_ | Arquivo local de origem. |

##### Retorno

( _[SSHSCP](/docs/library/objects/SSHSCP)_ )

O cliente SFTP atual.

---

#### upload(caminhoRemoto: string, origem: [File](/docs/library/objects/File)) : [SSHSCP](/docs/library/objects/SSHSCP)
##### Descrição

Envia os dados de um arquivo para ser salvo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **origem** | _[File](/docs/library/objects/File)_ | Arquivo local de origem. |

##### Retorno

( _[SSHSCP](/docs/library/objects/SSHSCP)_ )

O cliente SFTP atual.

---

## uploadBytes

---

#### uploadBytes(caminhoRemoto: string, bytes: byte[]) : [SSHSCP](/docs/library/objects/SSHSCP)
##### Descrição

Envia um array de bytes para serem salvos em um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **bytes** | _byte[]_ | Array de bytes. |

##### Retorno

( _[SSHSCP](/docs/library/objects/SSHSCP)_ )

O cliente SFTP atual.

---

## uploadText

---

#### uploadText(caminhoRemoto: string, texto: string) : [SSHSCP](/docs/library/objects/SSHSCP)
##### Descrição

Envia um conteúdo de texto para ser salvado em um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **texto** | _string_ | Conteúdo de texto. |

##### Retorno

( _[SSHSCP](/docs/library/objects/SSHSCP)_ )

O cliente SFTP atual.

---

#### uploadText(caminhoRemoto: string, texto: string, encodificacao: string) : [SSHSCP](/docs/library/objects/SSHSCP)
##### Descrição

Envia um conteúdo de texto para ser salvado em um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **texto** | _string_ | Conteúdo de texto. |
| **encodificacao** | _string_ | Código de encodificação dos caractéres. |

##### Retorno

( _[SSHSCP](/docs/library/objects/SSHSCP)_ )

O cliente SFTP atual.

---

