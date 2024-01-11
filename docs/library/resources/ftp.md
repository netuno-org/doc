---
id: ftp
title: FTP
sidebar_label: FTP
---

FTP client feature.

---

## abort

---

#### _ftp.abort() : _[FTP](../../resources/FTP)_
##### Return

( _[FTP](../../resources/FTP)_ )


---

## changeToParentDirectory

---

#### _ftp.changeToParentDirectory() : _[FTP](../../resources/FTP)_
##### Description

Switches to the previous folder where it should be used to perform operations.

##### Return

( _[FTP](../../resources/FTP)_ )

The current FTP resource.

---

## changeWorkingDirectory

---

#### _ftp.changeWorkingDirectory(remotePath: string) : _[FTP](../../resources/FTP)_
##### Description

Defines the remote path that should be used to perform operations.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | Path on the server to perform the work. |

##### Return

( _[FTP](../../resources/FTP)_ )

The current FTP resource.

---

## close

---

#### _ftp.close() : _void_
##### Description

Closes the FTP connection to the server.

##### Return

( _void_ )


---

## config

---

#### _ftp.config() : _org.netuno.psamata.ftp.FTPConfig_
##### Description

Starts a new configuration of its own.

##### Return

( _org.netuno.psamata.ftp.FTPConfig_ )

Configuration object loaded from received data.

---

#### _ftp.config(config: _[Values](../../objects/Values)_) : _org.netuno.psamata.ftp.FTPConfig_
##### Description

Starts a new configuration of its own.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| config | _[Values](../../objects/Values)_ | Configuration definition data structure. |

##### Return

( _org.netuno.psamata.ftp.FTPConfig_ )

Configuration object loaded from received data.

---

#### _ftp.config(config: _org.netuno.psamata.ftp.FTPConfig_) : _[FTP](../../resources/FTP)_
##### Description

Define outra configuração que deve ser utilizada.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| config | _org.netuno.psamata.ftp.FTPConfig_ | Definition of the new configuration. |

##### Return

( _[FTP](../../resources/FTP)_ )

Current FTP object.

---

## connect

---

#### _ftp.connect() : _[FTP](../../resources/FTP)_
##### Description

Starts connecting to the server via FTP.

##### Return

( _[FTP](../../resources/FTP)_ )

The current FTP resource.

---

## createDirectory

---

#### _ftp.createDirectory(remotePath: string) : _[FTP](../../resources/FTP)_
##### Description

Creates a folder in the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | Server path where the folder should be created. |

##### Return

( _[FTP](../../resources/FTP)_ )

The current FTP resource.

---

## deleteDirectory

---

#### _ftp.deleteDirectory(remotePath: string) : _[FTP](../../resources/FTP)_
##### Description

Deletes a folder in the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | Server path where the folder should be removed. |

##### Return

( _[FTP](../../resources/FTP)_ )

The current FTP resource.

---

## deleteFile

---

#### _ftp.deleteFile(remotePath: string) : _[FTP](../../resources/FTP)_
##### Description

Deletes a file in the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | Server path where the file should be removed. |

##### Return

( _[FTP](../../resources/FTP)_ )

The current FTP resource.

---

## disconnect

---

#### _ftp.disconnect() : _[FTP](../../resources/FTP)_
##### Description

Performs FTP disconnection from the server.

##### Return

( _[FTP](../../resources/FTP)_ )

The current FTP resource.

---

## download

---

#### _ftp.download(remotePath: string, destination: _java.io.OutputStream_) : _[FTP](../../resources/FTP)_
##### Description

Copies a server file to a local file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | File path in the server. |
| destination | _java.io.OutputStream_ | Local file of destination to store the remote content. |

##### Return

( _[FTP](../../resources/FTP)_ )

The current FTP resource.

---

#### _ftp.download(remotePath: string, destination: _[File](../../objects/File)_) : _[FTP](../../resources/FTP)_
##### Description

Copies a server file to a local file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | File path in the server. |
| destination | _[File](../../objects/File)_ | Local file of destination to store the remote content. |

##### Return

( _[FTP](../../resources/FTP)_ )

The current FTP resource.

---

## downloadBytes

---

#### _ftp.downloadBytes(remotePath: string) : _byte[]_
##### Description

Obtain a byte array as content from a file server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | File path in the server. |

##### Return

( _byte[]_ )

Byte array with the remote file content in the server.

---

## downloadText

---

#### _ftp.downloadText(remotePath: string) : string
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

#### _ftp.downloadText(remotePath: string, charset: string) : string
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

## enabled

---

#### _ftp.enabled() : _boolean_
##### Return

( _boolean_ )


---

#### _ftp.enabled(enabled: _boolean_) : _[FTP](../../resources/FTP)_
##### Description

Sets whether it is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| enabled | _boolean_ | Whether it is active or inactive. |

##### Return

( _[FTP](../../resources/FTP)_ )

Current FTP object.

---

## getClient

---

#### _ftp.getClient() : _org.netuno.psamata.ftp.FTPClient_
##### Description

Gets the base FTP client.

##### Return

( _org.netuno.psamata.ftp.FTPClient_ )

Original base FTP client

---

## getConfig

---

#### _ftp.getConfig() : _org.netuno.psamata.ftp.FTPConfig_
##### Description

Gets the configuration that is being used.

##### Return

( _org.netuno.psamata.ftp.FTPConfig_ )

Object of the active configuration.

---

## getWorkingDirectory

---

#### _ftp.getWorkingDirectory() : string
##### Description

Gets the current remote working path where operations are being performed.

##### Return

( string )

The full remote path being used.

---

## init

---

#### _ftp.init() : _[FTP](../../resources/FTP)_
##### Description

Starts a new instance of FTP using the FTP configuration of the `default` key.

##### Return

( _[FTP](../../resources/FTP)_ )

The new instance of the FTP resource based on the `default` FTP configuration.

---

#### _ftp.init(configKey: string) : _[FTP](../../resources/FTP)_
##### Description

Starts a new instance of FTP from a specific configuration.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| configKey | string | Key of the FTP configuration that will be used. |

##### Return

( _[FTP](../../resources/FTP)_ )

The new instance of the FTP resource based on the specified FTP configuration.

---

#### _ftp.init(config: _org.netuno.psamata.ftp.FTPConfig_) : _[FTP](../../resources/FTP)_
##### Description

Starts a new instance of FTP from a configuration that is defined in its own configuration object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| config | _org.netuno.psamata.ftp.FTPConfig_ | Configuration that will be used. |

##### Return

( _[FTP](../../resources/FTP)_ )

The new instance of the FTP resource based on the defined configuration.

---

## isEnabled

---

#### _ftp.isEnabled() : _boolean_
##### Description

Checks if it is enabled.

##### Return

( _boolean_ )

Result whether or not it is activated.

---

## list

---

#### _ftp.list(remotePath: string) : _java.util.List_
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

## rename

---

#### _ftp.rename(oldPath: string, newPath: string) : _[FTP](../../resources/FTP)_
##### Description

Renames a file or folder on the server.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| oldPath | string | Path on the server that should be renamed. |
| newPath | string | The destination path on the server. |

##### Return

( _[FTP](../../resources/FTP)_ )

The current FTP resource.

---

## sendCommand

---

#### _ftp.sendCommand(command: string) : _int_
##### Description

Send a specific command.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| command | string | Command that must be sent. |

##### Return

( _int_ )

Command result.

---

#### _ftp.sendCommand(command: string, args: string) : _int_
##### Description

Send a specific command.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| command | string | Command that must be sent. |
| args | string | Additional arguments. |

##### Return

( _int_ )

Command result.

---

## sendSiteCommand

---

#### _ftp.sendSiteCommand(command: string) : _[FTP](../../resources/FTP)_
##### Description

Send a site specific command.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| command | string | Command that must be sent. |

##### Return

( _[FTP](../../resources/FTP)_ )

The current FTP resource.

---

## setConfig

---

#### _ftp.setConfig(config: _org.netuno.psamata.ftp.FTPConfig_) : _[FTP](../../resources/FTP)_
##### Description

Define outra configuração que deve ser utilizada.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| config | _org.netuno.psamata.ftp.FTPConfig_ | Definition of the new configuration. |

##### Return

( _[FTP](../../resources/FTP)_ )

Current FTP object.

---

## setEnabled

---

#### _ftp.setEnabled(enabled: _boolean_) : _[FTP](../../resources/FTP)_
##### Description

Sets whether it is enabled.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| enabled | _boolean_ | Whether it is active or inactive. |

##### Return

( _[FTP](../../resources/FTP)_ )

Current FTP object.

---

## upload

---

#### _ftp.upload(remotePath: string, source: _java.io.InputStream_) : _[FTP](../../resources/FTP)_
##### Description

Sends the file data to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | File path in the server. |
| source | _java.io.InputStream_ | Local file as the source. |

##### Return

( _[FTP](../../resources/FTP)_ )

The current FTP resource.

---

#### _ftp.upload(remotePath: string, source: _[File](../../objects/File)_) : _[FTP](../../resources/FTP)_
##### Description

Sends the file data to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | File path in the server. |
| source | _[File](../../objects/File)_ | Local file as the source. |

##### Return

( _[FTP](../../resources/FTP)_ )

The current FTP resource.

---

## uploadBytes

---

#### _ftp.uploadBytes(remotePath: string, bytes: _byte[]_) : _[FTP](../../resources/FTP)_
##### Description

Sends a byte array to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | File path in the server. |
| bytes | _byte[]_ | Array of bytes. |

##### Return

( _[FTP](../../resources/FTP)_ )

The current FTP resource.

---

## uploadText

---

#### _ftp.uploadText(remotePath: string, text: string) : _[FTP](../../resources/FTP)_
##### Description

Sends a text content to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | File path in the server. |
| text | string | Text content. |

##### Return

( _[FTP](../../resources/FTP)_ )

The current FTP resource.

---

#### _ftp.uploadText(remotePath: string, text: string, charset: string) : _[FTP](../../resources/FTP)_
##### Description

Sends a text content to be saved in a server file.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| remotePath | string | File path in the server. |
| text | string | Text content. |
| charset | string | Encoding code of the characters. |

##### Return

( _[FTP](../../resources/FTP)_ )

The current FTP resource.

---

