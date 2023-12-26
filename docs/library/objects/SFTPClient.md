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
##### Return

( _void_ )


---

## createDirectories

---

#### createDirectories(arg0: string) : _SFTPClient_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _SFTPClient_ )


---

## createDirectory

---

#### createDirectory(arg0: string) : _SFTPClient_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _SFTPClient_ )


---

## deleteDirectory

---

#### deleteDirectory(arg0: string) : _SFTPClient_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _SFTPClient_ )


---

## deleteFile

---

#### deleteFile(arg0: string) : _SFTPClient_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _SFTPClient_ )


---

## download

---

#### download(arg0: string, arg1: _OutputStream_) : _SFTPClient_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _OutputStream_ |   |

##### Return

( _SFTPClient_ )


---

#### download(arg0: string, arg1: _File_) : _SFTPClient_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _File_ |   |

##### Return

( _SFTPClient_ )


---

## downloadBytes

---

#### downloadBytes(arg0: string) : _byte[]_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _byte[]_ )


---

## downloadText

---

#### downloadText(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

#### downloadText(arg0: string, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( string )


---

## list

---

#### list(arg0: string) : _List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _List_ )


---

## size

---

#### size(arg0: string) : _long_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _long_ )


---

## upload

---

#### upload(arg0: string, arg1: _InputStream_) : _SFTPClient_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _InputStream_ |   |

##### Return

( _SFTPClient_ )


---

#### upload(arg0: string, arg1: _File_) : _SFTPClient_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _File_ |   |

##### Return

( _SFTPClient_ )


---

## uploadBytes

---

#### uploadBytes(arg0: string, arg1: _byte[]_) : _SFTPClient_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _byte[]_ |   |

##### Return

( _SFTPClient_ )


---

## uploadText

---

#### uploadText(arg0: string, arg1: string) : _SFTPClient_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _SFTPClient_ )


---

#### uploadText(arg0: string, arg1: string, arg2: string) : _SFTPClient_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | string |   |

##### Return

( _SFTPClient_ )


---

