---
id: SFTPClient
title: SFTPClient
sidebar_label: SFTPClient
---

Cliente SFTP utilizado com o SSH.

---

## close

---

#### close() : _void_
##### Retorno

( _void_ )


---

## createDirectories

---

#### createDirectories(arg0: string) : _SFTPClient_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _SFTPClient_ )


---

## createDirectory

---

#### createDirectory(arg0: string) : _SFTPClient_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _SFTPClient_ )


---

## deleteDirectory

---

#### deleteDirectory(arg0: string) : _SFTPClient_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _SFTPClient_ )


---

## deleteFile

---

#### deleteFile(arg0: string) : _SFTPClient_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _SFTPClient_ )


---

## download

---

#### download(arg0: string, arg1: _OutputStream_) : _SFTPClient_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _OutputStream_ |   |

##### Retorno

( _SFTPClient_ )


---

#### download(arg0: string, arg1: _File_) : _SFTPClient_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _File_ |   |

##### Retorno

( _SFTPClient_ )


---

## downloadBytes

---

#### downloadBytes(arg0: string) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _byte[]_ )


---

## downloadText

---

#### downloadText(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

#### downloadText(arg0: string, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( string )


---

## list

---

#### list(arg0: string) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _List_ )


---

## size

---

#### size(arg0: string) : _long_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _long_ )


---

## upload

---

#### upload(arg0: string, arg1: _InputStream_) : _SFTPClient_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _InputStream_ |   |

##### Retorno

( _SFTPClient_ )


---

#### upload(arg0: string, arg1: _File_) : _SFTPClient_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _File_ |   |

##### Retorno

( _SFTPClient_ )


---

## uploadBytes

---

#### uploadBytes(arg0: string, arg1: _byte[]_) : _SFTPClient_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _byte[]_ |   |

##### Retorno

( _SFTPClient_ )


---

## uploadText

---

#### uploadText(arg0: string, arg1: string) : _SFTPClient_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( _SFTPClient_ )


---

#### uploadText(arg0: string, arg1: string, arg2: string) : _SFTPClient_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | string |   |

##### Retorno

( _SFTPClient_ )


---

