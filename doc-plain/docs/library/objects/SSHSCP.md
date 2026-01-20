---
id: SSHSCP
title: SSHSCP
sidebar_label: SSHSCP
---

Cliente SCP utilizado com o SSH.

---

## close

---

#### close() : void
##### Description

Closes the SCP current session.

##### Return

( _void_ )


---

## closed

---

#### closed() : boolean
##### Description

Checks if the SCP session is still open.

##### Return

( _boolean_ )

True if it is open.

---

## download

---

#### download(remotePath: string, destination: [OutputStream](/docs/library/objects/OutputStream)) : [SSHSCP](/docs/library/objects/SSHSCP)
##### Description

Copies a server file to a local file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **destination** | _[OutputStream](/docs/library/objects/OutputStream)_ | Local file of destination to store the remote content. |

##### Return

( _[SSHSCP](/docs/library/objects/SSHSCP)_ )

The current SFTP client.

---

#### download(remotePath: string, destination: [File](/docs/library/objects/File)) : [SSHSCP](/docs/library/objects/SSHSCP)
##### Description

Copies a server file to a local file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **destination** | _[File](/docs/library/objects/File)_ | Local file of destination to store the remote content. |

##### Return

( _[SSHSCP](/docs/library/objects/SSHSCP)_ )

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

## upload

---

#### upload(remotePath: string, source: [InputStream](/docs/library/objects/InputStream)) : [SSHSCP](/docs/library/objects/SSHSCP)
##### Description

Sends the file data to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **source** | _[InputStream](/docs/library/objects/InputStream)_ | Local file as the source. |

##### Return

( _[SSHSCP](/docs/library/objects/SSHSCP)_ )

The current SFTP client.

---

#### upload(remotePath: string, source: [File](/docs/library/objects/File)) : [SSHSCP](/docs/library/objects/SSHSCP)
##### Description

Sends the file data to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **source** | _[File](/docs/library/objects/File)_ | Local file as the source. |

##### Return

( _[SSHSCP](/docs/library/objects/SSHSCP)_ )

The current SFTP client.

---

## uploadBytes

---

#### uploadBytes(remotePath: string, bytes: byte[]) : [SSHSCP](/docs/library/objects/SSHSCP)
##### Description

Sends a byte array to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **bytes** | _byte[]_ | Array of bytes. |

##### Return

( _[SSHSCP](/docs/library/objects/SSHSCP)_ )

The current SFTP client.

---

## uploadText

---

#### uploadText(remotePath: string, text: string) : [SSHSCP](/docs/library/objects/SSHSCP)
##### Description

Sends a text content to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **text** | _string_ | Text content. |

##### Return

( _[SSHSCP](/docs/library/objects/SSHSCP)_ )

The current SFTP client.

---

#### uploadText(remotePath: string, text: string, charset: string) : [SSHSCP](/docs/library/objects/SSHSCP)
##### Description

Sends a text content to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **text** | _string_ | Text content. |
| **charset** | _string_ | Encoding code of the characters. |

##### Return

( _[SSHSCP](/docs/library/objects/SSHSCP)_ )

The current SFTP client.

---

