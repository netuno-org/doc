---
id: SSHSFTP
title: SSHSFTP
sidebar_label: SSHSFTP
---

Cliente SFTP utilizado com o SSH.

---

## close

---

#### <span style="color: #008000">close</span>() : <span style="font-weight: normal; font-style: italic;">void</span>
##### Descrição

Fecha a sessão atual de SFTP.

##### Retorno

( _void_ )


---

## closed

---

#### <span style="color: #008000">closed</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Verifica se a sessão SFTP ainda está aberta.

##### Retorno

( _boolean_ )

Verdadeiro se estiver aberta

---

## createDirectories

---

#### <span style="color: #008000">createDirectories</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SSHSFTP](../../objects/SSHSFTP)</span>
##### Descrição

Cria o caminho de pastas no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho no servidor onde a estrutura de pastas será criada. |

##### Retorno

( _[SSHSFTP](../../objects/SSHSFTP)_ )

O cliente SFTP atual.

---

## createDirectory

---

#### <span style="color: #008000">createDirectory</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SSHSFTP](../../objects/SSHSFTP)</span>
##### Descrição

Cria uma pastas no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho no servidor onde a pasta será criada. |

##### Retorno

( _[SSHSFTP](../../objects/SSHSFTP)_ )

O cliente SFTP atual.

---

## deleteDirectory

---

#### <span style="color: #008000">deleteDirectory</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SSHSFTP](../../objects/SSHSFTP)</span>
##### Descrição

Remove uma pasta no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho no servidor a pasta será removida. |

##### Retorno

( _[SSHSFTP](../../objects/SSHSFTP)_ )

O cliente SFTP atual.

---

## deleteFile

---

#### <span style="color: #008000">deleteFile</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SSHSFTP](../../objects/SSHSFTP)</span>
##### Descrição

Remove um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho no servidor o arquivo será removido. |

##### Retorno

( _[SSHSFTP](../../objects/SSHSFTP)_ )

O cliente SFTP atual.

---

## download

---

#### <span style="color: #008000">download</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">destino</span>: <span style="font-weight: normal; font-style: italic;">java.io.OutputStream</span>) : <span style="font-weight: normal; font-style: italic;">[SSHSFTP](../../objects/SSHSFTP)</span>
##### Descrição

Copia um arquivo no servidor para um arquivo local.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **destino** | _java.io.OutputStream_ | Arquivo local de destino para armazenar o conteúdo remoto. |

##### Retorno

( _[SSHSFTP](../../objects/SSHSFTP)_ )

O cliente SFTP atual.

---

#### <span style="color: #008000">download</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">destino</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>) : <span style="font-weight: normal; font-style: italic;">[SSHSFTP](../../objects/SSHSFTP)</span>
##### Descrição

Copia um arquivo no servidor para um arquivo local.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **destino** | _[File](../../objects/File)_ | Arquivo local de destino para armazenar o conteúdo remoto. |

##### Retorno

( _[SSHSFTP](../../objects/SSHSFTP)_ )

O cliente SFTP atual.

---

## downloadBytes

---

#### <span style="color: #008000">downloadBytes</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">byte[]</span>
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

#### <span style="color: #008000">downloadText</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="color: #008000">downloadText</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">encodificacao</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="color: #008000">isClosed</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

## list

---

#### <span style="color: #008000">list</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
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

#### <span style="color: #008000">size</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">long</span>
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

#### <span style="color: #008000">upload</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">origem</span>: <span style="font-weight: normal; font-style: italic;">java.io.InputStream</span>) : <span style="font-weight: normal; font-style: italic;">[SSHSFTP](../../objects/SSHSFTP)</span>
##### Descrição

Envia os dados de um arquivo para ser salvo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **origem** | _java.io.InputStream_ | Arquivo local de origem. |

##### Retorno

( _[SSHSFTP](../../objects/SSHSFTP)_ )

O cliente SFTP atual.

---

#### <span style="color: #008000">upload</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">origem</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>) : <span style="font-weight: normal; font-style: italic;">[SSHSFTP](../../objects/SSHSFTP)</span>
##### Descrição

Envia os dados de um arquivo para ser salvo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **origem** | _[File](../../objects/File)_ | Arquivo local de origem. |

##### Retorno

( _[SSHSFTP](../../objects/SSHSFTP)_ )

O cliente SFTP atual.

---

## uploadBytes

---

#### <span style="color: #008000">uploadBytes</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">bytes</span>: <span style="font-weight: normal; font-style: italic;">byte[]</span>) : <span style="font-weight: normal; font-style: italic;">[SSHSFTP](../../objects/SSHSFTP)</span>
##### Descrição

Envia um array de bytes para serem salvos em um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **bytes** | _byte[]_ | Array de bytes. |

##### Retorno

( _[SSHSFTP](../../objects/SSHSFTP)_ )

O cliente SFTP atual.

---

## uploadText

---

#### <span style="color: #008000">uploadText</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">texto</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SSHSFTP](../../objects/SSHSFTP)</span>
##### Descrição

Envia um conteúdo de texto para ser salvado em um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **texto** | _string_ | Conteúdo de texto. |

##### Retorno

( _[SSHSFTP](../../objects/SSHSFTP)_ )

O cliente SFTP atual.

---

#### <span style="color: #008000">uploadText</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">texto</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">encodificacao</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SSHSFTP](../../objects/SSHSFTP)</span>
##### Descrição

Envia um conteúdo de texto para ser salvado em um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **texto** | _string_ | Conteúdo de texto. |
| **encodificacao** | _string_ | Código de encodificação dos caractéres. |

##### Retorno

( _[SSHSFTP](../../objects/SSHSFTP)_ )

O cliente SFTP atual.

---

