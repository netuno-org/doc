---
id: SSHSFTP
title: SSHSFTP
sidebar_label: SSHSFTP
---

Cliente SFTP utilizado com o SSH.

---

## close

---

#### close() : _void_
##### Descrição

Fecha a sessão atual de SFTP.

##### Retorno

( _void_ )


---

## closed

---

#### closed() : _boolean_
##### Descrição

Verifica se a sessão SFTP ainda está aberta.

##### Retorno

( _boolean_ )

Verdadeiro se estiver aberta

---

## createDirectories

---

#### createDirectories(caminhoRemoto: string) : _[SSHSFTP](../../objects/SSHSFTP)_
##### Descrição

Cria o caminho de pastas no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho no servidor onde a estrutura de pastas será criada. |

##### Retorno

( _[SSHSFTP](../../objects/SSHSFTP)_ )

O cliente SFTP atual.

---

## createDirectory

---

#### createDirectory(caminhoRemoto: string) : _[SSHSFTP](../../objects/SSHSFTP)_
##### Descrição

Cria uma pastas no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho no servidor onde a pasta será criada. |

##### Retorno

( _[SSHSFTP](../../objects/SSHSFTP)_ )

O cliente SFTP atual.

---

## deleteDirectory

---

#### deleteDirectory(caminhoRemoto: string) : _[SSHSFTP](../../objects/SSHSFTP)_
##### Descrição

Remove uma pasta no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho no servidor a pasta será removida. |

##### Retorno

( _[SSHSFTP](../../objects/SSHSFTP)_ )

O cliente SFTP atual.

---

## deleteFile

---

#### deleteFile(caminhoRemoto: string) : _[SSHSFTP](../../objects/SSHSFTP)_
##### Descrição

Remove um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho no servidor o arquivo será removido. |

##### Retorno

( _[SSHSFTP](../../objects/SSHSFTP)_ )

O cliente SFTP atual.

---

## download

---

#### download(caminhoRemoto: string, destino: _java.io.OutputStream_) : _[SSHSFTP](../../objects/SSHSFTP)_
##### Descrição

Copia um arquivo no servidor para um arquivo local.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho do arquivo no servidor. |
| destino | _java.io.OutputStream_ | Arquivo local de destino para armazenar o conteúdo remoto. |

##### Retorno

( _[SSHSFTP](../../objects/SSHSFTP)_ )

O cliente SFTP atual.

---

#### download(caminhoRemoto: string, destino: _[File](../../objects/File)_) : _[SSHSFTP](../../objects/SSHSFTP)_
##### Descrição

Copia um arquivo no servidor para um arquivo local.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho do arquivo no servidor. |
| destino | _[File](../../objects/File)_ | Arquivo local de destino para armazenar o conteúdo remoto. |

##### Retorno

( _[SSHSFTP](../../objects/SSHSFTP)_ )

O cliente SFTP atual.

---

## downloadBytes

---

#### downloadBytes(caminhoRemoto: string) : _[B_
##### Descrição

Obtém um array de bytes do conteúdo de um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho do arquivo no servidor. |

##### Retorno

( _[B_ )

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
| caminhoRemoto | string | Caminho do arquivo no servidor. |

##### Retorno

( string )

Conteúdo de texto do arquivo remoto no servidor.

---

#### downloadText(caminhoRemoto: string, encodificacao: string) : string
##### Descrição

Obtém um conteúdo de texto de um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho do arquivo no servidor. |
| encodificacao | string | Código de encodificação dos caractéres. |

##### Retorno

( string )

Conteúdo de texto do arquivo remoto no servidor.

---

## isClosed

---

#### isClosed() : _boolean_
##### Retorno

( _boolean_ )


---

## list

---

#### list(caminhoRemoto: string) : _java.util.List_
##### Descrição

Lista os itens da pasta no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho da pasta no servidor. |

##### Retorno

( _java.util.List_ )

A lista de itens que está caminho do servidor.

---

## size

---

#### size(caminhoRemoto: string) : _long_
##### Descrição

Obtém o tamanho de um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho no servidor onde o arquivo está. |

##### Retorno

( _long_ )

O tamanho do arquivo.

---

## upload

---

#### upload(caminhoRemoto: string, origem: _java.io.InputStream_) : _[SSHSFTP](../../objects/SSHSFTP)_
##### Descrição

Envia os dados de um arquivo para ser salvo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho do arquivo no servidor. |
| origem | _java.io.InputStream_ | Arquivo local de origem. |

##### Retorno

( _[SSHSFTP](../../objects/SSHSFTP)_ )

O cliente SFTP atual.

---

#### upload(caminhoRemoto: string, origem: _[File](../../objects/File)_) : _[SSHSFTP](../../objects/SSHSFTP)_
##### Descrição

Envia os dados de um arquivo para ser salvo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho do arquivo no servidor. |
| origem | _[File](../../objects/File)_ | Arquivo local de origem. |

##### Retorno

( _[SSHSFTP](../../objects/SSHSFTP)_ )

O cliente SFTP atual.

---

## uploadBytes

---

#### uploadBytes(caminhoRemoto: string, bytes: _[B_) : _[SSHSFTP](../../objects/SSHSFTP)_
##### Descrição

Envia um array de bytes para serem salvos em um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho do arquivo no servidor. |
| bytes | _[B_ | Array de bytes. |

##### Retorno

( _[SSHSFTP](../../objects/SSHSFTP)_ )

O cliente SFTP atual.

---

## uploadText

---

#### uploadText(caminhoRemoto: string, texto: string) : _[SSHSFTP](../../objects/SSHSFTP)_
##### Descrição

Envia um conteúdo de texto para ser salvado em um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho do arquivo no servidor. |
| texto | string | Conteúdo de texto. |

##### Retorno

( _[SSHSFTP](../../objects/SSHSFTP)_ )

O cliente SFTP atual.

---

#### uploadText(caminhoRemoto: string, texto: string, encodificacao: string) : _[SSHSFTP](../../objects/SSHSFTP)_
##### Descrição

Envia um conteúdo de texto para ser salvado em um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho do arquivo no servidor. |
| texto | string | Conteúdo de texto. |
| encodificacao | string | Código de encodificação dos caractéres. |

##### Retorno

( _[SSHSFTP](../../objects/SSHSFTP)_ )

O cliente SFTP atual.

---

