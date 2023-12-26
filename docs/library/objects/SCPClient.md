---
id: SCPClient
title: SCPClient
sidebar_label: SCPClient
---

Cliente SCP utilizado com o SSH.

---

## close

---

#### close() : _void_
##### Return

( _void_ )


---

## download

---

#### download(arg0: string, arg1: _OutputStream_) : _SCPClient_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _OutputStream_ |   |

##### Return

( _SCPClient_ )


---

#### download(arg0: string, arg1: _File_) : _SCPClient_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _File_ |   |

##### Return

( _SCPClient_ )


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

## upload

---

#### upload(arg0: string, arg1: _InputStream_) : _SCPClient_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _InputStream_ |   |

##### Return

( _SCPClient_ )


---

#### upload(arg0: string, arg1: _File_) : _SCPClient_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _File_ |   |

##### Return

( _SCPClient_ )


---

## uploadBytes

---

#### uploadBytes(arg0: string, arg1: _byte[]_) : _SCPClient_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _byte[]_ |   |

##### Return

( _SCPClient_ )


---

## uploadText

---

#### uploadText(arg0: string, arg1: string) : _SCPClient_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _SCPClient_ )


---

#### uploadText(arg0: string, arg1: string, arg2: string) : _SCPClient_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | string |   |

##### Return

( _SCPClient_ )


---

