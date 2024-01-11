---
id: SSHSCP
title: SSHSCP
sidebar_label: SSHSCP
---

Cliente SCP utilizado com o SSH.

---

## close

---

#### close() : _void_
##### Descrição

Fecha a sessão atual de SCP.

##### Retorno

( _void_ )


---

## closed

---

#### closed() : _boolean_
##### Descrição

Verifica se a sessão SCP ainda está aberta.

##### Retorno

( _boolean_ )

Verdadeiro se estiver aberta

---

## download

---

#### download(caminhoRemoto: string, destino: _java.io.OutputStream_) : _[SSHSCP](../../objects/SSHSCP)_
##### Descrição

Copia um arquivo no servidor para um arquivo local.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho do arquivo no servidor. |
| destino | _java.io.OutputStream_ | Arquivo local de destino para armazenar o conteúdo remoto. |

##### Retorno

( _[SSHSCP](../../objects/SSHSCP)_ )

O cliente SFTP atual.

---

#### download(caminhoRemoto: string, destino: _[File](../../objects/File)_) : _[SSHSCP](../../objects/SSHSCP)_
##### Descrição

Copia um arquivo no servidor para um arquivo local.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho do arquivo no servidor. |
| destino | _[File](../../objects/File)_ | Arquivo local de destino para armazenar o conteúdo remoto. |

##### Retorno

( _[SSHSCP](../../objects/SSHSCP)_ )

O cliente SFTP atual.

---

## downloadBytes

---

#### downloadBytes(caminhoRemoto: string) : _byte[]_
##### Descrição

Obtém um array de bytes do conteúdo de um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho do arquivo no servidor. |

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

## upload

---

#### upload(caminhoRemoto: string, origem: _java.io.InputStream_) : _[SSHSCP](../../objects/SSHSCP)_
##### Descrição

Envia os dados de um arquivo para ser salvo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho do arquivo no servidor. |
| origem | _java.io.InputStream_ | Arquivo local de origem. |

##### Retorno

( _[SSHSCP](../../objects/SSHSCP)_ )

O cliente SFTP atual.

---

#### upload(caminhoRemoto: string, origem: _[File](../../objects/File)_) : _[SSHSCP](../../objects/SSHSCP)_
##### Descrição

Envia os dados de um arquivo para ser salvo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho do arquivo no servidor. |
| origem | _[File](../../objects/File)_ | Arquivo local de origem. |

##### Retorno

( _[SSHSCP](../../objects/SSHSCP)_ )

O cliente SFTP atual.

---

## uploadBytes

---

#### uploadBytes(caminhoRemoto: string, bytes: _byte[]_) : _[SSHSCP](../../objects/SSHSCP)_
##### Descrição

Envia um array de bytes para serem salvos em um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho do arquivo no servidor. |
| bytes | _byte[]_ | Array de bytes. |

##### Retorno

( _[SSHSCP](../../objects/SSHSCP)_ )

O cliente SFTP atual.

---

## uploadText

---

#### uploadText(caminhoRemoto: string, texto: string) : _[SSHSCP](../../objects/SSHSCP)_
##### Descrição

Envia um conteúdo de texto para ser salvado em um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho do arquivo no servidor. |
| texto | string | Conteúdo de texto. |

##### Retorno

( _[SSHSCP](../../objects/SSHSCP)_ )

O cliente SFTP atual.

---

#### uploadText(caminhoRemoto: string, texto: string, encodificacao: string) : _[SSHSCP](../../objects/SSHSCP)_
##### Descrição

Envia um conteúdo de texto para ser salvado em um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho do arquivo no servidor. |
| texto | string | Conteúdo de texto. |
| encodificacao | string | Código de encodificação dos caractéres. |

##### Retorno

( _[SSHSCP](../../objects/SSHSCP)_ )

O cliente SFTP atual.

---

