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
##### Description

Closes the SFTP current session.

##### Return

( _void_ )


---

## closed

---

#### closed() : _boolean_
##### Description

Checks if the SFTP session is still open.

##### Return

( _boolean_ )

True if it is open.

---

## createDirectories

---

#### createDirectories(remotePath: string) : _[SSHSFTP](../../objects/SSHSFTP)_
##### Description

Creates the path of folders in the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | Server path where the folder structure should be created. |

##### Return

( _[SSHSFTP](../../objects/SSHSFTP)_ )

The current SFTP client.

---

## createDirectory

---

#### createDirectory(remotePath: string) : _[SSHSFTP](../../objects/SSHSFTP)_
##### Description

Creates a folder in the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | Server path where the folder should be created. |

##### Return

( _[SSHSFTP](../../objects/SSHSFTP)_ )

The current SFTP client.

---

## deleteDirectory

---

#### deleteDirectory(remotePath: string) : _[SSHSFTP](../../objects/SSHSFTP)_
##### Description

Deletes a folder in the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | Server path where the folder should be removed. |

##### Return

( _[SSHSFTP](../../objects/SSHSFTP)_ )

The current SFTP client.

---

## deleteFile

---

#### deleteFile(remotePath: string) : _[SSHSFTP](../../objects/SSHSFTP)_
##### Description

Deletes a file in the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | Server path where the file should be removed. |

##### Return

( _[SSHSFTP](../../objects/SSHSFTP)_ )

The current SFTP client.

---

## download

---

#### download(remotePath: string, destination: _java.io.OutputStream_) : _[SSHSFTP](../../objects/SSHSFTP)_
##### Description

Copies a server file to a local file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | File path in the server. |
| destination | _java.io.OutputStream_ | Local file of destination to store the remote content. |

##### Return

( _[SSHSFTP](../../objects/SSHSFTP)_ )

The current SFTP client.

---

#### download(remotePath: string, destination: _[File](../../objects/File)_) : _[SSHSFTP](../../objects/SSHSFTP)_
##### Description

Copies a server file to a local file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | File path in the server. |
| destination | _[File](../../objects/File)_ | Local file of destination to store the remote content. |

##### Return

( _[SSHSFTP](../../objects/SSHSFTP)_ )

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

## list

---

#### list(remotePath: string) : _java.util.List_
##### Description

List of items in a server folder.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | Folder path in the server. |

##### Return

( _java.util.List_ )

The list of itens into the server path.

---

## size

---

#### size(remotePath: string) : _long_
##### Description

Obtains the file size in the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | Server path where the file is. |

##### Return

( _long_ )

The file size.

---

## upload

---

#### upload(remotePath: string, source: _java.io.InputStream_) : _[SSHSFTP](../../objects/SSHSFTP)_
##### Description

Sends the file data to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | File path in the server. |
| source | _java.io.InputStream_ | Local file as the source. |

##### Return

( _[SSHSFTP](../../objects/SSHSFTP)_ )

The current SFTP client.

---

#### upload(remotePath: string, source: _[File](../../objects/File)_) : _[SSHSFTP](../../objects/SSHSFTP)_
##### Description

Sends the file data to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | File path in the server. |
| source | _[File](../../objects/File)_ | Local file as the source. |

##### Return

( _[SSHSFTP](../../objects/SSHSFTP)_ )

The current SFTP client.

---

## uploadBytes

---

#### uploadBytes(remotePath: string, bytes: _[B_) : _[SSHSFTP](../../objects/SSHSFTP)_
##### Description

Sends a byte array to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | File path in the server. |
| bytes | _[B_ | Array of bytes. |

##### Return

( _[SSHSFTP](../../objects/SSHSFTP)_ )

The current SFTP client.

---

## uploadText

---

#### uploadText(remotePath: string, text: string) : _[SSHSFTP](../../objects/SSHSFTP)_
##### Description

Sends a text content to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | File path in the server. |
| text | string | Text content. |

##### Return

( _[SSHSFTP](../../objects/SSHSFTP)_ )

The current SFTP client.

---

#### uploadText(remotePath: string, text: string, charset: string) : _[SSHSFTP](../../objects/SSHSFTP)_
##### Description

Sends a text content to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | File path in the server. |
| text | string | Text content. |
| charset | string | Encoding code of the characters. |

##### Return

( _[SSHSFTP](../../objects/SSHSFTP)_ )

The current SFTP client.

---

