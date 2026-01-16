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
##### Description

Closes the SFTP current session.

##### Return

( _void_ )


---

## closed

---

#### closed() : boolean
##### Description

Checks if the SFTP session is still open.

##### Return

( _boolean_ )

True if it is open.

---

## createDirectories

---

#### createDirectories(remotePath: string) : [SSHSFTP](/docs/library/objects/SSHSFTP)
##### Description

Creates the path of folders in the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | Server path where the folder structure should be created. |

##### Return

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

The current SFTP client.

---

## createDirectory

---

#### createDirectory(remotePath: string) : [SSHSFTP](/docs/library/objects/SSHSFTP)
##### Description

Creates a folder in the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | Server path where the folder should be created. |

##### Return

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

The current SFTP client.

---

## deleteDirectory

---

#### deleteDirectory(remotePath: string) : [SSHSFTP](/docs/library/objects/SSHSFTP)
##### Description

Deletes a folder in the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | Server path where the folder should be removed. |

##### Return

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

The current SFTP client.

---

## deleteFile

---

#### deleteFile(remotePath: string) : [SSHSFTP](/docs/library/objects/SSHSFTP)
##### Description

Deletes a file in the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | Server path where the file should be removed. |

##### Return

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

The current SFTP client.

---

## download

---

#### download(remotePath: string, destination: [OutputStream](/docs/library/objects/OutputStream)) : [SSHSFTP](/docs/library/objects/SSHSFTP)
##### Description

Copies a server file to a local file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **destination** | _[OutputStream](/docs/library/objects/OutputStream)_ | Local file of destination to store the remote content. |

##### Return

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

The current SFTP client.

---

#### download(remotePath: string, destination: [File](/docs/library/objects/File)) : [SSHSFTP](/docs/library/objects/SSHSFTP)
##### Description

Copies a server file to a local file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **destination** | _[File](/docs/library/objects/File)_ | Local file of destination to store the remote content. |

##### Return

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

The current SFTP client.

---

## downloadBytes

---

#### downloadBytes(remotePath: string) : byte[]
##### Description

Obtain a byte array as content from a file server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |

##### Return

( _byte[]_ )

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
| **remotePath** | _string_ | File path in the server. |

##### Return

( _string_ )

Text content of the remote file in the server.

---

#### downloadText(remotePath: string, charset: string) : string
##### Description

Obtain a text content of a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **charset** | _string_ | Encoding code of the characters. |

##### Return

( _string_ )

Text content of the remote file in the server.

---

## isClosed

---

#### isClosed() : boolean
##### Return

( _boolean_ )


---

## list

---

#### list(remotePath: string) : java.util.List
##### Description

List of items in a server folder.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | Folder path in the server. |

##### Return

( _java.util.List_ )

The list of itens into the server path.

---

## size

---

#### size(remotePath: string) : long
##### Description

Obtains the file size in the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | Server path where the file is. |

##### Return

( _long_ )

The file size.

---

## upload

---

#### upload(remotePath: string, source: [InputStream](/docs/library/objects/InputStream)) : [SSHSFTP](/docs/library/objects/SSHSFTP)
##### Description

Sends the file data to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **source** | _[InputStream](/docs/library/objects/InputStream)_ | Local file as the source. |

##### Return

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

The current SFTP client.

---

#### upload(remotePath: string, source: [File](/docs/library/objects/File)) : [SSHSFTP](/docs/library/objects/SSHSFTP)
##### Description

Sends the file data to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **source** | _[File](/docs/library/objects/File)_ | Local file as the source. |

##### Return

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

The current SFTP client.

---

## uploadBytes

---

#### uploadBytes(remotePath: string, bytes: byte[]) : [SSHSFTP](/docs/library/objects/SSHSFTP)
##### Description

Sends a byte array to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **bytes** | _byte[]_ | Array of bytes. |

##### Return

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

The current SFTP client.

---

## uploadText

---

#### uploadText(remotePath: string, text: string) : [SSHSFTP](/docs/library/objects/SSHSFTP)
##### Description

Sends a text content to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **text** | _string_ | Text content. |

##### Return

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

The current SFTP client.

---

#### uploadText(remotePath: string, text: string, charset: string) : [SSHSFTP](/docs/library/objects/SSHSFTP)
##### Description

Sends a text content to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **text** | _string_ | Text content. |
| **charset** | _string_ | Encoding code of the characters. |

##### Return

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

The current SFTP client.

---

