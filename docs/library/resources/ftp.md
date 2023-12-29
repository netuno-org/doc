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
##### Return

( _[FTP](../../resources/FTP)_ )


---

## changeWorkingDirectory

---

#### _ftp.changeWorkingDirectory(arg0: string) : _[FTP](../../resources/FTP)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[FTP](../../resources/FTP)_ )


---

## close

---

#### _ftp.close() : _void_
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
##### Return

( _[FTP](../../resources/FTP)_ )


---

## createDirectory

---

#### _ftp.createDirectory(arg0: string) : _[FTP](../../resources/FTP)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[FTP](../../resources/FTP)_ )


---

## deleteDirectory

---

#### _ftp.deleteDirectory(arg0: string) : _[FTP](../../resources/FTP)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[FTP](../../resources/FTP)_ )


---

## deleteFile

---

#### _ftp.deleteFile(arg0: string) : _[FTP](../../resources/FTP)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[FTP](../../resources/FTP)_ )


---

## disconnect

---

#### _ftp.disconnect() : _[FTP](../../resources/FTP)_
##### Return

( _[FTP](../../resources/FTP)_ )


---

## download

---

#### _ftp.download(arg0: string, arg1: _java.io.OutputStream_) : _[FTP](../../resources/FTP)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.io.OutputStream_ |   |

##### Return

( _[FTP](../../resources/FTP)_ )


---

#### _ftp.download(arg0: string, arg1: _[File](../../objects/File)_) : _[FTP](../../resources/FTP)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _[File](../../objects/File)_ |   |

##### Return

( _[FTP](../../resources/FTP)_ )


---

## downloadBytes

---

#### _ftp.downloadBytes(arg0: string) : _[B_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[B_ )


---

## downloadText

---

#### _ftp.downloadText(arg0: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( string )


---

#### _ftp.downloadText(arg0: string, arg1: string) : string
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( string )


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
##### Return

( _org.netuno.psamata.ftp.FTPClient_ )


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
##### Return

( string )


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

#### _ftp.list(arg0: string) : _java.util.List_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _java.util.List_ )


---

## rename

---

#### _ftp.rename(arg0: string, arg1: string) : _[FTP](../../resources/FTP)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _[FTP](../../resources/FTP)_ )


---

## sendCommand

---

#### _ftp.sendCommand(arg0: string) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _int_ )


---

#### _ftp.sendCommand(arg0: string, arg1: string) : _int_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _int_ )


---

## sendSiteCommand

---

#### _ftp.sendSiteCommand(arg0: string) : _[FTP](../../resources/FTP)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[FTP](../../resources/FTP)_ )


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

#### _ftp.upload(arg0: string, arg1: _java.io.InputStream_) : _[FTP](../../resources/FTP)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.io.InputStream_ |   |

##### Return

( _[FTP](../../resources/FTP)_ )


---

#### _ftp.upload(arg0: string, arg1: _[File](../../objects/File)_) : _[FTP](../../resources/FTP)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _[File](../../objects/File)_ |   |

##### Return

( _[FTP](../../resources/FTP)_ )


---

## uploadBytes

---

#### _ftp.uploadBytes(arg0: string, arg1: _[B_) : _[FTP](../../resources/FTP)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | _[B_ |   |

##### Return

( _[FTP](../../resources/FTP)_ )


---

## uploadText

---

#### _ftp.uploadText(arg0: string, arg1: string) : _[FTP](../../resources/FTP)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Return

( _[FTP](../../resources/FTP)_ )


---

#### _ftp.uploadText(arg0: string, arg1: string, arg2: string) : _[FTP](../../resources/FTP)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | string |   |

##### Return

( _[FTP](../../resources/FTP)_ )


---

