---
id: SSHSFTP
title: SSHSFTP
sidebar_label: SSHSFTP
---

Cliente SFTP utilizado com o SSH.

---

## close

---

#### close() : void
##### Descrição

Fecha a sessão atual de SFTP.

##### Retorno

( _void_ )


---

## closed

---

#### closed() : boolean
##### Descrição

Verifica se a sessão SFTP ainda está aberta.

##### Retorno

( _boolean_ )

Verdadeiro se estiver aberta

---

## createDirectories

---

#### createDirectories(caminhoRemoto: string) : [SSHSFTP](/docs/library/objects/SSHSFTP)
##### Descrição

Cria o caminho de pastas no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho no servidor onde a estrutura de pastas será criada. |

##### Retorno

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

O cliente SFTP atual.

---

## createDirectory

---

#### createDirectory(caminhoRemoto: string) : [SSHSFTP](/docs/library/objects/SSHSFTP)
##### Descrição

Cria uma pastas no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho no servidor onde a pasta será criada. |

##### Retorno

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

O cliente SFTP atual.

---

## deleteDirectory

---

#### deleteDirectory(caminhoRemoto: string) : [SSHSFTP](/docs/library/objects/SSHSFTP)
##### Descrição

Remove uma pasta no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho no servidor a pasta será removida. |

##### Retorno

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

O cliente SFTP atual.

---

## deleteFile

---

#### deleteFile(caminhoRemoto: string) : [SSHSFTP](/docs/library/objects/SSHSFTP)
##### Descrição

Remove um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho no servidor o arquivo será removido. |

##### Retorno

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

O cliente SFTP atual.

---

## download

---

#### download(caminhoRemoto: string, destino: [OutputStream](/docs/library/objects/OutputStream)) : [SSHSFTP](/docs/library/objects/SSHSFTP)
##### Descrição

Copia um arquivo no servidor para um arquivo local.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **destino** | _[OutputStream](/docs/library/objects/OutputStream)_ | Arquivo local de destino para armazenar o conteúdo remoto. |

##### Retorno

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

O cliente SFTP atual.

---

#### download(caminhoRemoto: string, destino: [File](/docs/library/objects/File)) : [SSHSFTP](/docs/library/objects/SSHSFTP)
##### Descrição

Copia um arquivo no servidor para um arquivo local.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **destino** | _[File](/docs/library/objects/File)_ | Arquivo local de destino para armazenar o conteúdo remoto. |

##### Retorno

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

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

## list

---

#### list(caminhoRemoto: string) : java.util.List
##### Descrição

Lista os itens da pasta no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho da pasta no servidor. |

##### Retorno

( _java.util.List_ )

A lista de itens que está caminho do servidor.

---

## size

---

#### size(caminhoRemoto: string) : long
##### Descrição

Obtém o tamanho de um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho no servidor onde o arquivo está. |

##### Retorno

( _long_ )

O tamanho do arquivo.

---

## upload

---

#### upload(caminhoRemoto: string, origem: [InputStream](/docs/library/objects/InputStream)) : [SSHSFTP](/docs/library/objects/SSHSFTP)
##### Descrição

Envia os dados de um arquivo para ser salvo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **origem** | _[InputStream](/docs/library/objects/InputStream)_ | Arquivo local de origem. |

##### Retorno

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

O cliente SFTP atual.

---

#### upload(caminhoRemoto: string, origem: [File](/docs/library/objects/File)) : [SSHSFTP](/docs/library/objects/SSHSFTP)
##### Descrição

Envia os dados de um arquivo para ser salvo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **origem** | _[File](/docs/library/objects/File)_ | Arquivo local de origem. |

##### Retorno

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

O cliente SFTP atual.

---

## uploadBytes

---

#### uploadBytes(caminhoRemoto: string, bytes: byte[]) : [SSHSFTP](/docs/library/objects/SSHSFTP)
##### Descrição

Envia um array de bytes para serem salvos em um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **bytes** | _byte[]_ | Array de bytes. |

##### Retorno

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

O cliente SFTP atual.

---

## uploadText

---

#### uploadText(caminhoRemoto: string, texto: string) : [SSHSFTP](/docs/library/objects/SSHSFTP)
##### Descrição

Envia um conteúdo de texto para ser salvado em um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **texto** | _string_ | Conteúdo de texto. |

##### Retorno

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

O cliente SFTP atual.

---

#### uploadText(caminhoRemoto: string, texto: string, encodificacao: string) : [SSHSFTP](/docs/library/objects/SSHSFTP)
##### Descrição

Envia um conteúdo de texto para ser salvado em um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **texto** | _string_ | Conteúdo de texto. |
| **encodificacao** | _string_ | Código de encodificação dos caractéres. |

##### Retorno

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

O cliente SFTP atual.

---

