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
##### Description

Closes the SCP current session.

##### Return

( _void_ )


---

## closed

---

#### closed() : _boolean_
##### Description

Checks if the SCP session is still open.

##### Return

( _boolean_ )

True if it is open.

---

## download

---

#### download(remotePath: string, destination: _java.io.OutputStream_) : _[SSHSCP](../../objects/SSHSCP)_
##### Description

Copies a server file to a local file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | File path in the server. |
| destination | _java.io.OutputStream_ | Local file of destination to store the remote content. |

##### Return

( _[SSHSCP](../../objects/SSHSCP)_ )

The current SFTP client.

---

#### download(remotePath: string, destination: _[File](../../objects/File)_) : _[SSHSCP](../../objects/SSHSCP)_
##### Description

Copies a server file to a local file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | File path in the server. |
| destination | _[File](../../objects/File)_ | Local file of destination to store the remote content. |

##### Return

( _[SSHSCP](../../objects/SSHSCP)_ )

The current SFTP client.

---

## downloadBytes

---

#### downloadBytes(remotePath: string) : _[B_
##### Description

Obtain a byte array as content from a file server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | File path in the server. |

##### Return

( _[B_ )

Byte array with the remote file content in the server.

---

## downloadText

---

#### downloadText(remotePath: string) : string
##### Description

Obtain a text content of a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | File path in the server. |

##### Return

( string )

Text content of the remote file in the server.

---

#### downloadText(remotePath: string, charset: string) : string
##### Description

Obtain a text content of a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | File path in the server. |
| charset | string | Encoding code of the characters. |

##### Return

( string )

Text content of the remote file in the server.

---

## isClosed

---

#### isClosed() : _boolean_
##### Return

( _boolean_ )


---

## upload

---

#### upload(remotePath: string, source: _java.io.InputStream_) : _[SSHSCP](../../objects/SSHSCP)_
##### Description

Sends the file data to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | File path in the server. |
| source | _java.io.InputStream_ | Local file as the source. |

##### Return

( _[SSHSCP](../../objects/SSHSCP)_ )

The current SFTP client.

---

#### upload(remotePath: string, source: _[File](../../objects/File)_) : _[SSHSCP](../../objects/SSHSCP)_
##### Description

Sends the file data to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | File path in the server. |
| source | _[File](../../objects/File)_ | Local file as the source. |

##### Return

( _[SSHSCP](../../objects/SSHSCP)_ )

The current SFTP client.

---

## uploadBytes

---

#### uploadBytes(remotePath: string, bytes: _[B_) : _[SSHSCP](../../objects/SSHSCP)_
##### Description

Sends a byte array to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | File path in the server. |
| bytes | _[B_ | Array of bytes. |

##### Return

( _[SSHSCP](../../objects/SSHSCP)_ )

The current SFTP client.

---

## uploadText

---

#### uploadText(remotePath: string, text: string) : _[SSHSCP](../../objects/SSHSCP)_
##### Description

Sends a text content to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | File path in the server. |
| text | string | Text content. |

##### Return

( _[SSHSCP](../../objects/SSHSCP)_ )

The current SFTP client.

---

#### uploadText(remotePath: string, text: string, charset: string) : _[SSHSCP](../../objects/SSHSCP)_
##### Description

Sends a text content to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | File path in the server. |
| text | string | Text content. |
| charset | string | Encoding code of the characters. |

##### Return

( _[SSHSCP](../../objects/SSHSCP)_ )

The current SFTP client.

---

