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
##### Descrição

Muda para a pasta anterior onde deve ser utilizada para realizar as operações.

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

## changeWorkingDirectory

---

#### _ftp.changeWorkingDirectory(caminhoRemoto: string) : _[FTP](../../resources/FTP)_
##### Descrição

Define o caminho remoto que deve ser utilizado para realizar as operações.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho no servidor para realizar o trabalho. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

## close

---

#### _ftp.close() : _void_
##### Descrição

Fecha a conexão FTP com o servidor.

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
##### Descrição

Inicia a conexão com o servidor através do FTP.

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

## createDirectory

---

#### _ftp.createDirectory(caminhoRemoto: string) : _[FTP](../../resources/FTP)_
##### Descrição

Cria uma pastas no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho no servidor onde a pasta será criada. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

## deleteDirectory

---

#### _ftp.deleteDirectory(caminhoRemoto: string) : _[FTP](../../resources/FTP)_
##### Descrição

Remove uma pasta no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho no servidor a pasta será removida. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

## deleteFile

---

#### _ftp.deleteFile(caminhoRemoto: string) : _[FTP](../../resources/FTP)_
##### Descrição

Remove um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho no servidor o arquivo será removido. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

## disconnect

---

#### _ftp.disconnect() : _[FTP](../../resources/FTP)_
##### Descrição

Realiza a desconexão FTP com o servidor.

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

## download

---

#### _ftp.download(caminhoRemoto: string, destino: _java.io.OutputStream_) : _[FTP](../../resources/FTP)_
##### Descrição

Copia um arquivo no servidor para um arquivo local.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho do arquivo no servidor. |
| destino | _java.io.OutputStream_ | Arquivo local de destino para armazenar o conteúdo remoto. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

#### _ftp.download(caminhoRemoto: string, destino: _[File](../../objects/File)_) : _[FTP](../../resources/FTP)_
##### Descrição

Copia um arquivo no servidor para um arquivo local.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho do arquivo no servidor. |
| destino | _[File](../../objects/File)_ | Arquivo local de destino para armazenar o conteúdo remoto. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

## downloadBytes

---

#### _ftp.downloadBytes(caminhoRemoto: string) : _byte[]_
##### Descrição

Obtém um array de bytes do conteúdo de um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho do arquivo no servidor. |

##### Retorno

( _byte[]_ )

Array de bytes com o conteúdo do arquivo remoto no servidor.

---

## downloadText

---

#### _ftp.downloadText(caminhoRemoto: string) : string
##### Descrição

Obtém um conteúdo de texto de um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho do arquivo no servidor. |

##### Retorno

( string )

Conteúdo de texto do arquivo remoto no servidor.

---

#### _ftp.downloadText(caminhoRemoto: string, encodificacao: string) : string
##### Descrição

Obtém um conteúdo de texto de um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho do arquivo no servidor. |
| encodificacao | string | Código de encodificação dos caractéres. |

##### Retorno

( string )

Conteúdo de texto do arquivo remoto no servidor.

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
##### Descrição

Obtém o cliente FTP base.

##### Retorno

( _org.netuno.psamata.ftp.FTPClient_ )

Cliente FTP original de base.

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
##### Descrição

Obtém o caminho remoto atual de trabalho onde as operações estão sendo realizadas.

##### Retorno

( string )

O caminho remoto completo que está sendo utilizado.

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

#### _ftp.list(caminhoRemoto: string) : _java.util.List_
##### Descrição

Lista os itens da pasta no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho da pasta no servidor. |

##### Retorno

( _java.util.List_ )

A lista de itens que está caminho do servidor.

---

## rename

---

#### _ftp.rename(caminhoAntigo: string, caminhoNovo: string) : _[FTP](../../resources/FTP)_
##### Descrição

Renomeia um arquivo ou pasta no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoAntigo | string | Caminho no servidor que deve ser renomeado. |
| caminhoNovo | string | O caminho de destino no servidor. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

## sendCommand

---

#### _ftp.sendCommand(comando: string) : _int_
##### Descrição

Envia um comando específico.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| comando | string | Comando que deve ser enviado. |

##### Retorno

( _int_ )

Resultado do comando.

---

#### _ftp.sendCommand(comando: string, args: string) : _int_
##### Descrição

Envia um comando específico.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| comando | string | Comando que deve ser enviado. |
| args | string | Argumentos adicionais. |

##### Retorno

( _int_ )

Resultado do comando.

---

## sendSiteCommand

---

#### _ftp.sendSiteCommand(comando: string) : _[FTP](../../resources/FTP)_
##### Descrição

Envia um comando específico do site.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| comando | string | Comando que deve ser enviado. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

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

#### _ftp.upload(caminhoRemoto: string, origem: _java.io.InputStream_) : _[FTP](../../resources/FTP)_
##### Descrição

Envia os dados de um arquivo para ser salvo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho do arquivo no servidor. |
| origem | _java.io.InputStream_ | Arquivo local de origem. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

#### _ftp.upload(caminhoRemoto: string, origem: _[File](../../objects/File)_) : _[FTP](../../resources/FTP)_
##### Descrição

Envia os dados de um arquivo para ser salvo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho do arquivo no servidor. |
| origem | _[File](../../objects/File)_ | Arquivo local de origem. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

## uploadBytes

---

#### _ftp.uploadBytes(caminhoRemoto: string, bytes: _byte[]_) : _[FTP](../../resources/FTP)_
##### Descrição

Envia um array de bytes para serem salvos em um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho do arquivo no servidor. |
| bytes | _byte[]_ | Array de bytes. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

## uploadText

---

#### _ftp.uploadText(caminhoRemoto: string, texto: string) : _[FTP](../../resources/FTP)_
##### Descrição

Envia um conteúdo de texto para ser salvado em um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho do arquivo no servidor. |
| texto | string | Conteúdo de texto. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

#### _ftp.uploadText(caminhoRemoto: string, texto: string, encodificacao: string) : _[FTP](../../resources/FTP)_
##### Descrição

Envia um conteúdo de texto para ser salvado em um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminhoRemoto | string | Caminho do arquivo no servidor. |
| texto | string | Conteúdo de texto. |
| encodificacao | string | Código de encodificação dos caractéres. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

