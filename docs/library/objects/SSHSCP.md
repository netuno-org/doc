---
id: SSHSCP
title: SSHSCP
sidebar_label: SSHSCP
---

Cliente SCP utilizado com o SSH.

---

## close

---

#### <span style="color: #008000">close</span>() : <span style="font-weight: normal; font-style: italic;">void</span>
##### Description

Closes the SCP current session.

##### Return

( _void_ )


---

## closed

---

#### <span style="color: #008000">closed</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Checks if the SCP session is still open.

##### Return

( _boolean_ )

True if it is open.

---

## download

---

#### <span style="color: #008000">download</span>(<span style="color: #FF8000">remotePath</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">destination</span>: <span style="font-weight: normal; font-style: italic;">[OutputStream](../../objects/OutputStream)</span>) : <span style="font-weight: normal; font-style: italic;">[SSHSCP](../../objects/SSHSCP)</span>
##### Description

Copies a server file to a local file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **destination** | _[OutputStream](../../objects/OutputStream)_ | Local file of destination to store the remote content. |

##### Return

( _[SSHSCP](../../objects/SSHSCP)_ )

The current SFTP client.

---

#### <span style="color: #008000">download</span>(<span style="color: #FF8000">remotePath</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">destination</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>) : <span style="font-weight: normal; font-style: italic;">[SSHSCP](../../objects/SSHSCP)</span>
##### Description

Copies a server file to a local file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **destination** | _[File](../../objects/File)_ | Local file of destination to store the remote content. |

##### Return

( _[SSHSCP](../../objects/SSHSCP)_ )

The current SFTP client.

---

## downloadBytes

---

#### <span style="color: #008000">downloadBytes</span>(<span style="color: #FF8000">remotePath</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">byte[]</span>
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

#### <span style="color: #008000">downloadText</span>(<span style="color: #FF8000">remotePath</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="color: #008000">downloadText</span>(<span style="color: #FF8000">remotePath</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">charset</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="color: #008000">isClosed</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Return

( _boolean_ )


---

## upload

---

#### <span style="color: #008000">upload</span>(<span style="color: #FF8000">remotePath</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">source</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>) : <span style="font-weight: normal; font-style: italic;">[SSHSCP](../../objects/SSHSCP)</span>
##### Description

Sends the file data to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **source** | _[InputStream](../../objects/InputStream)_ | Local file as the source. |

##### Return

( _[SSHSCP](../../objects/SSHSCP)_ )

The current SFTP client.

---

#### <span style="color: #008000">upload</span>(<span style="color: #FF8000">remotePath</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">source</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>) : <span style="font-weight: normal; font-style: italic;">[SSHSCP](../../objects/SSHSCP)</span>
##### Description

Sends the file data to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **source** | _[File](../../objects/File)_ | Local file as the source. |

##### Return

( _[SSHSCP](../../objects/SSHSCP)_ )

The current SFTP client.

---

## uploadBytes

---

#### <span style="color: #008000">uploadBytes</span>(<span style="color: #FF8000">remotePath</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">bytes</span>: <span style="font-weight: normal; font-style: italic;">byte[]</span>) : <span style="font-weight: normal; font-style: italic;">[SSHSCP](../../objects/SSHSCP)</span>
##### Description

Sends a byte array to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **bytes** | _byte[]_ | Array of bytes. |

##### Return

( _[SSHSCP](../../objects/SSHSCP)_ )

The current SFTP client.

---

## uploadText

---

#### <span style="color: #008000">uploadText</span>(<span style="color: #FF8000">remotePath</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">text</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SSHSCP](../../objects/SSHSCP)</span>
##### Description

Sends a text content to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **text** | _string_ | Text content. |

##### Return

( _[SSHSCP](../../objects/SSHSCP)_ )

The current SFTP client.

---

#### <span style="color: #008000">uploadText</span>(<span style="color: #FF8000">remotePath</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">text</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">charset</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[SSHSCP](../../objects/SSHSCP)</span>
##### Description

Sends a text content to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **remotePath** | _string_ | File path in the server. |
| **text** | _string_ | Text content. |
| **charset** | _string_ | Encoding code of the characters. |

##### Return

( _[SSHSCP](../../objects/SSHSCP)_ )

The current SFTP client.

---

