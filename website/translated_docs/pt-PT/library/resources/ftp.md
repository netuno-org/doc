---
id: ftp
title: FTP
sidebar_label: FTP
---

Recurso cliente de FTP.

---

## abort

---

#### _ftp.abort() : _[FTP](../../resources/FTP)_
##### Retorno

( _[FTP](../../resources/FTP)_ )


---

## changeToParentDirectory

---

#### _ftp.changeToParentDirectory() : _[FTP](../../resources/FTP)_
##### Retorno

( _[FTP](../../resources/FTP)_ )


---

## changeWorkingDirectory

---

#### _ftp.changeWorkingDirectory(arg0: string) : _[FTP](../../resources/FTP)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[FTP](../../resources/FTP)_ )


---

## close

---

#### _ftp.close() : _void_
##### Retorno

( _void_ )


---

## config

---

#### _ftp.config() : _org.netuno.psamata.ftp.FTPConfig_
##### Descrição

Inicia uma nova configuração própria.

##### Retorno

( _org.netuno.psamata.ftp.FTPConfig_ )

Objeto de configuração carregada a partir dos dados recebidos.

---

#### _ftp.config(config: _[Values](../../objects/Values)_) : _org.netuno.psamata.ftp.FTPConfig_
##### Descrição

Inicia uma nova configuração própria.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| config | _[Values](../../objects/Values)_ | Estrutura de dados da definição da configuração. |

##### Retorno

( _org.netuno.psamata.ftp.FTPConfig_ )

Objeto de configuração carregada a partir dos dados recebidos.

---

#### _ftp.config(config: _org.netuno.psamata.ftp.FTPConfig_) : _[FTP](../../resources/FTP)_
##### Descrição

Define outra configuração que deve ser utilizada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| config | _org.netuno.psamata.ftp.FTPConfig_ | Definição da nova configuração. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

Objeto FTP atual.

---

## connect

---

#### _ftp.connect() : _[FTP](../../resources/FTP)_
##### Retorno

( _[FTP](../../resources/FTP)_ )


---

## createDirectory

---

#### _ftp.createDirectory(arg0: string) : _[FTP](../../resources/FTP)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[FTP](../../resources/FTP)_ )


---

## deleteDirectory

---

#### _ftp.deleteDirectory(arg0: string) : _[FTP](../../resources/FTP)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[FTP](../../resources/FTP)_ )


---

## deleteFile

---

#### _ftp.deleteFile(arg0: string) : _[FTP](../../resources/FTP)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[FTP](../../resources/FTP)_ )


---

## disconnect

---

#### _ftp.disconnect() : _[FTP](../../resources/FTP)_
##### Retorno

( _[FTP](../../resources/FTP)_ )


---

## download

---

#### _ftp.download(arg0: string, arg1: _java.io.OutputStream_) : _[FTP](../../resources/FTP)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.io.OutputStream_ |   |

##### Retorno

( _[FTP](../../resources/FTP)_ )


---

#### _ftp.download(arg0: string, arg1: _[File](../../objects/File)_) : _[FTP](../../resources/FTP)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _[File](../../objects/File)_ |   |

##### Retorno

( _[FTP](../../resources/FTP)_ )


---

## downloadBytes

---

#### _ftp.downloadBytes(arg0: string) : _[B_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[B_ )


---

## downloadText

---

#### _ftp.downloadText(arg0: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )


---

#### _ftp.downloadText(arg0: string, arg1: string) : string
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( string )


---

## enabled

---

#### _ftp.enabled() : _boolean_
##### Retorno

( _boolean_ )


---

#### _ftp.enabled(ativo: _boolean_) : _[FTP](../../resources/FTP)_
##### Descrição

Define se está habilitado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| ativo | _boolean_ | Se fica ativo ou inactivo. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

Objeto FTP atual.

---

## getClient

---

#### _ftp.getClient() : _org.netuno.psamata.ftp.FTPClient_
##### Retorno

( _org.netuno.psamata.ftp.FTPClient_ )


---

## getConfig

---

#### _ftp.getConfig() : _org.netuno.psamata.ftp.FTPConfig_
##### Descrição

Obtém a configuração que está a ser utilizada.

##### Retorno

( _org.netuno.psamata.ftp.FTPConfig_ )

Objeto da configuração ativa.

---

## getWorkingDirectory

---

#### _ftp.getWorkingDirectory() : string
##### Retorno

( string )


---

## init

---

#### _ftp.init() : _[FTP](../../resources/FTP)_
##### Descrição

Inicia uma nova instância do FTP utilizando a configuração do FTP da chave `default`.

##### Retorno

( _[FTP](../../resources/FTP)_ )

A nova instância do recurso FTP com base na configuração do FTP `default`.

---

#### _ftp.init(configKey: string) : _[FTP](../../resources/FTP)_
##### Descrição

Inicia uma nova instância do FTP a partir de uma configuração específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| configKey | string | Chave da configuração FTP que será utilizada. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

A nova instância do recurso FTP com base na configuração do FTP especificada.

---

#### _ftp.init(config: _org.netuno.psamata.ftp.FTPConfig_) : _[FTP](../../resources/FTP)_
##### Descrição

Inicia uma nova instância do FTP a partir de uma configuração que é definida em um objeto de configuração própria.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| config | _org.netuno.psamata.ftp.FTPConfig_ | Configuração que será utilizada. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

A nova instância do recurso FTP com base na configuração definida.

---

## isEnabled

---

#### _ftp.isEnabled() : _boolean_
##### Descrição

Verifica se está habilitado.

##### Retorno

( _boolean_ )

Resultado se está ou não ativado.

---

## list

---

#### _ftp.list(arg0: string) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _java.util.List_ )


---

## rename

---

#### _ftp.rename(arg0: string, arg1: string) : _[FTP](../../resources/FTP)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( _[FTP](../../resources/FTP)_ )


---

## sendCommand

---

#### _ftp.sendCommand(arg0: string) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _int_ )


---

#### _ftp.sendCommand(arg0: string, arg1: string) : _int_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( _int_ )


---

## sendSiteCommand

---

#### _ftp.sendSiteCommand(arg0: string) : _[FTP](../../resources/FTP)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _[FTP](../../resources/FTP)_ )


---

## setConfig

---

#### _ftp.setConfig(config: _org.netuno.psamata.ftp.FTPConfig_) : _[FTP](../../resources/FTP)_
##### Descrição

Define outra configuração que deve ser utilizada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| config | _org.netuno.psamata.ftp.FTPConfig_ | Definição da nova configuração. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

Objeto FTP atual.

---

## setEnabled

---

#### _ftp.setEnabled(ativo: _boolean_) : _[FTP](../../resources/FTP)_
##### Descrição

Define se está habilitado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| ativo | _boolean_ | Se fica ativo ou inactivo. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

Objeto FTP atual.

---

## upload

---

#### _ftp.upload(arg0: string, arg1: _java.io.InputStream_) : _[FTP](../../resources/FTP)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _java.io.InputStream_ |   |

##### Retorno

( _[FTP](../../resources/FTP)_ )


---

#### _ftp.upload(arg0: string, arg1: _[File](../../objects/File)_) : _[FTP](../../resources/FTP)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _[File](../../objects/File)_ |   |

##### Retorno

( _[FTP](../../resources/FTP)_ )


---

## uploadBytes

---

#### _ftp.uploadBytes(arg0: string, arg1: _[B_) : _[FTP](../../resources/FTP)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _[B_ |   |

##### Retorno

( _[FTP](../../resources/FTP)_ )


---

## uploadText

---

#### _ftp.uploadText(arg0: string, arg1: string) : _[FTP](../../resources/FTP)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( _[FTP](../../resources/FTP)_ )


---

#### _ftp.uploadText(arg0: string, arg1: string, arg2: string) : _[FTP](../../resources/FTP)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | string |   |

##### Retorno

( _[FTP](../../resources/FTP)_ )


---

