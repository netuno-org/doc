---
id: SSHSCP
title: SSHSCP
sidebar_label: SSHSCP
---

Cliente SCP utilizado com o SSH.

---

## close

---

#### <span style={{color: '#008000'}}>close</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Fecha a sessão atual de SCP.

##### Retorno

( _void_ )


---

## closed

---

#### <span style={{color: '#008000'}}>closed</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se a sessão SCP ainda está aberta.

##### Retorno

( _boolean_ )

Verdadeiro se estiver aberta

---

## download

---

#### <span style={{color: '#008000'}}>download</span>(<span style={{color: '#FF8000'}}>caminhoRemoto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>destino</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](../objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHSCP](../objects/SSHSCP)</span>
##### Descrição

Copia um arquivo no servidor para um arquivo local.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **destino** | _[OutputStream](../objects/OutputStream)_ | Arquivo local de destino para armazenar o conteúdo remoto. |

##### Retorno

( _[SSHSCP](../objects/SSHSCP)_ )

O cliente SFTP atual.

---

#### <span style={{color: '#008000'}}>download</span>(<span style={{color: '#FF8000'}}>caminhoRemoto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>destino</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHSCP](../objects/SSHSCP)</span>
##### Descrição

Copia um arquivo no servidor para um arquivo local.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **destino** | _[File](../objects/File)_ | Arquivo local de destino para armazenar o conteúdo remoto. |

##### Retorno

( _[SSHSCP](../objects/SSHSCP)_ )

O cliente SFTP atual.

---

## downloadBytes

---

#### <span style={{color: '#008000'}}>downloadBytes</span>(<span style={{color: '#FF8000'}}>caminhoRemoto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
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

#### <span style={{color: '#008000'}}>downloadText</span>(<span style={{color: '#FF8000'}}>caminhoRemoto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{color: '#008000'}}>downloadText</span>(<span style={{color: '#FF8000'}}>caminhoRemoto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>encodificacao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{color: '#008000'}}>isClosed</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## upload

---

#### <span style={{color: '#008000'}}>upload</span>(<span style={{color: '#FF8000'}}>caminhoRemoto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>origem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHSCP](../objects/SSHSCP)</span>
##### Descrição

Envia os dados de um arquivo para ser salvo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **origem** | _[InputStream](../objects/InputStream)_ | Arquivo local de origem. |

##### Retorno

( _[SSHSCP](../objects/SSHSCP)_ )

O cliente SFTP atual.

---

#### <span style={{color: '#008000'}}>upload</span>(<span style={{color: '#FF8000'}}>caminhoRemoto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>origem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHSCP](../objects/SSHSCP)</span>
##### Descrição

Envia os dados de um arquivo para ser salvo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **origem** | _[File](../objects/File)_ | Arquivo local de origem. |

##### Retorno

( _[SSHSCP](../objects/SSHSCP)_ )

O cliente SFTP atual.

---

## uploadBytes

---

#### <span style={{color: '#008000'}}>uploadBytes</span>(<span style={{color: '#FF8000'}}>caminhoRemoto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>bytes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHSCP](../objects/SSHSCP)</span>
##### Descrição

Envia um array de bytes para serem salvos em um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **bytes** | _byte[]_ | Array de bytes. |

##### Retorno

( _[SSHSCP](../objects/SSHSCP)_ )

O cliente SFTP atual.

---

## uploadText

---

#### <span style={{color: '#008000'}}>uploadText</span>(<span style={{color: '#FF8000'}}>caminhoRemoto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>texto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHSCP](../objects/SSHSCP)</span>
##### Descrição

Envia um conteúdo de texto para ser salvado em um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **texto** | _string_ | Conteúdo de texto. |

##### Retorno

( _[SSHSCP](../objects/SSHSCP)_ )

O cliente SFTP atual.

---

#### <span style={{color: '#008000'}}>uploadText</span>(<span style={{color: '#FF8000'}}>caminhoRemoto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>texto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>encodificacao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHSCP](../objects/SSHSCP)</span>
##### Descrição

Envia um conteúdo de texto para ser salvado em um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **texto** | _string_ | Conteúdo de texto. |
| **encodificacao** | _string_ | Código de encodificação dos caractéres. |

##### Retorno

( _[SSHSCP](../objects/SSHSCP)_ )

O cliente SFTP atual.

---

