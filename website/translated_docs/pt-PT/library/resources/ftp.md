---
id: ftp
title: FTP
sidebar_label: FTP
---

Recurso cliente de FTP.

---

## abort

---

#### _ftp.abort() : _FTP_
##### Retorno

( _FTP_ )


---

## changeToParentDirectory

---

#### _ftp.changeToParentDirectory() : _FTP_
##### Retorno

( _FTP_ )


---

## changeWorkingDirectory

---

#### _ftp.changeWorkingDirectory(arg0: string) : _FTP_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _FTP_ )


---

## close

---

#### _ftp.close() : _void_
##### Retorno

( _void_ )


---

## config

---

#### _ftp.config() : _FTPConfig_
##### Descrição

Obtém a configuração que está a ser utilizada.

##### Retorno

( _FTPConfig_ )

Objeto da configuração ativa.

---

#### _ftp.config(config: _[Values](../../objects/Values)_) : _FTPConfig_
##### Descrição

Inicia uma nova configuração própria.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| config | _[Values](../../objects/Values)_ | Estrutura de dados da definição da configuração. |

##### Retorno

( _FTPConfig_ )

Objeto de configuração carregada a partir dos dados recebidos.

---

#### _ftp.config(config: _FTPConfig_) : _FTP_
##### Descrição

Define outra configuração que deve ser utilizada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| config | _FTPConfig_ | Definição da nova configuração. |

##### Retorno

( _FTP_ )

Objeto FTP atual.

---

## connect

---

#### _ftp.connect() : _FTP_
##### Retorno

( _FTP_ )


---

## createDirectory

---

#### _ftp.createDirectory(arg0: string) : _FTP_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _FTP_ )


---

## deleteDirectory

---

#### _ftp.deleteDirectory(arg0: string) : _FTP_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _FTP_ )


---

## deleteFile

---

#### _ftp.deleteFile(arg0: string) : _FTP_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _FTP_ )


---

## disconnect

---

#### _ftp.disconnect() : _FTP_
##### Retorno

( _FTP_ )


---

## download

---

#### _ftp.download(arg0: string, arg1: _OutputStream_) : _FTP_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _OutputStream_ |   |

##### Retorno

( _FTP_ )


---

#### _ftp.download(arg0: string, arg1: _[File](../../objects/File)_) : _FTP_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _[File](../../objects/File)_ |   |

##### Retorno

( _FTP_ )


---

## downloadBytes

---

#### _ftp.downloadBytes(arg0: string) : _byte[]_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _byte[]_ )


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

#### _ftp.enabled(ativo: _boolean_) : _FTP_
##### Descrição

Define se está habilitado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| ativo | _boolean_ | Se fica ativo ou inactivo. |

##### Retorno

( _FTP_ )

Objeto FTP atual.

---

## getClient

---

#### _ftp.getClient() : _FTPClient_
##### Retorno

( _FTPClient_ )


---

## getConfig

---

#### _ftp.getConfig() : _FTPConfig_
##### Descrição

Obtém a configuração que está a ser utilizada.

##### Retorno

( _FTPConfig_ )

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

#### _ftp.init() : _FTP_
##### Descrição

Inicia uma nova instância do FTP utilizando a configuração do FTP da chave `default`.

##### Retorno

( _FTP_ )

A nova instância do recurso FTP com base na configuração do FTP `default`.

---

#### _ftp.init(configKey: string) : _FTP_
##### Descrição

Inicia uma nova instância do FTP a partir de uma configuração específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| configKey | string | Chave da configuração FTP que será utilizada. |

##### Retorno

( _FTP_ )

A nova instância do recurso FTP com base na configuração do FTP especificada.

---

#### _ftp.init(config: _FTPConfig_) : _FTP_
##### Descrição

Inicia uma nova instância do FTP a partir de uma configuração que é definida em um objeto de configuração própria.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| config | _FTPConfig_ | Configuração que será utilizada. |

##### Retorno

( _FTP_ )

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

#### _ftp.list(arg0: string) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _List_ )


---

## rename

---

#### _ftp.rename(arg0: string, arg1: string) : _FTP_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( _FTP_ )


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

#### _ftp.sendSiteCommand(arg0: string) : _FTP_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _FTP_ )


---

## setConfig

---

#### _ftp.setConfig(config: _FTPConfig_) : _FTP_
##### Descrição

Define outra configuração que deve ser utilizada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| config | _FTPConfig_ | Definição da nova configuração. |

##### Retorno

( _FTP_ )

Objeto FTP atual.

---

## setEnabled

---

#### _ftp.setEnabled(ativo: _boolean_) : _FTP_
##### Descrição

Define se está habilitado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| ativo | _boolean_ | Se fica ativo ou inactivo. |

##### Retorno

( _FTP_ )

Objeto FTP atual.

---

## upload

---

#### _ftp.upload(arg0: string, arg1: _InputStream_) : _FTP_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _InputStream_ |   |

##### Retorno

( _FTP_ )


---

#### _ftp.upload(arg0: string, arg1: _[File](../../objects/File)_) : _FTP_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _[File](../../objects/File)_ |   |

##### Retorno

( _FTP_ )


---

## uploadBytes

---

#### _ftp.uploadBytes(arg0: string, arg1: _byte[]_) : _FTP_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _byte[]_ |   |

##### Retorno

( _FTP_ )


---

## uploadText

---

#### _ftp.uploadText(arg0: string, arg1: string) : _FTP_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |

##### Retorno

( _FTP_ )


---

#### _ftp.uploadText(arg0: string, arg1: string, arg2: string) : _FTP_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | string |   |

##### Retorno

( _FTP_ )


---

