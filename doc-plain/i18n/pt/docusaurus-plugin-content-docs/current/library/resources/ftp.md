---
id: ftp
title: FTP
sidebar_label: FTP
---

Recurso cliente de FTP.

---

## abort

---

#### _ftp.abort() : [FTP](/docs/library/resources/ftp)
##### Descrição

Interrompe a operação de transferência de dados em andamento.

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

O recurso FTP atual.

---

## changeToParentDirectory

---

#### _ftp.changeToParentDirectory() : [FTP](/docs/library/resources/ftp)
##### Descrição

Muda para a pasta anterior onde deve ser utilizada para realizar as operações.

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

O recurso FTP atual.

---

## changeWorkingDirectory

---

#### _ftp.changeWorkingDirectory(caminhoRemoto: string) : [FTP](/docs/library/resources/ftp)
##### Descrição

Define o caminho remoto que deve ser utilizado para realizar as operações.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho no servidor para realizar o trabalho. |

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

O recurso FTP atual.

---

## close

---

#### _ftp.close() : void
##### Descrição

Fecha a conexão FTP com o servidor.

##### Retorno

( _void_ )


---

## config

---

#### _ftp.config() : [FTPConfig](/docs/library/objects/FTPConfig)
##### Descrição

Inicia uma nova configuração própria.

##### Retorno

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Objeto de configuração carregada a partir dos dados recebidos.

---

#### _ftp.config(config: [Values](/docs/library/objects/Values)) : [FTPConfig](/docs/library/objects/FTPConfig)
##### Descrição

Inicia uma nova configuração própria.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[Values](/docs/library/objects/Values)_ | Estrutura de dados da definição da configuração. |

##### Retorno

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Objeto de configuração carregada a partir dos dados recebidos.

---

#### _ftp.config(config: [FTPConfig](/docs/library/objects/FTPConfig)) : [FTP](/docs/library/resources/ftp)
##### Descrição

Define outra configuração que deve ser utilizada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[FTPConfig](/docs/library/objects/FTPConfig)_ | Definição da nova configuração. |

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

Objeto FTP atual.

---

## connect

---

#### _ftp.connect() : [FTP](/docs/library/resources/ftp)
##### Descrição

Inicia a conexão com o servidor através do FTP.

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

O recurso FTP atual.

---

## createDirectory

---

#### _ftp.createDirectory(caminhoRemoto: string) : [FTP](/docs/library/resources/ftp)
##### Descrição

Cria uma pastas no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho no servidor onde a pasta será criada. |

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

O recurso FTP atual.

---

## deleteDirectory

---

#### _ftp.deleteDirectory(caminhoRemoto: string) : [FTP](/docs/library/resources/ftp)
##### Descrição

Remove uma pasta no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho no servidor a pasta será removida. |

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

O recurso FTP atual.

---

## deleteFile

---

#### _ftp.deleteFile(caminhoRemoto: string) : [FTP](/docs/library/resources/ftp)
##### Descrição

Remove um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho no servidor o arquivo será removido. |

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

O recurso FTP atual.

---

## disconnect

---

#### _ftp.disconnect() : [FTP](/docs/library/resources/ftp)
##### Descrição

Realiza a desconexão FTP com o servidor.

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

O recurso FTP atual.

---

## download

---

#### _ftp.download(caminhoRemoto: string, destino: [OutputStream](/docs/library/objects/OutputStream)) : [FTP](/docs/library/resources/ftp)
##### Descrição

Copia um arquivo no servidor para um arquivo local.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **destino** | _[OutputStream](/docs/library/objects/OutputStream)_ | Arquivo local de destino para armazenar o conteúdo remoto. |

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

O recurso FTP atual.

---

#### _ftp.download(caminhoRemoto: string, destino: [File](/docs/library/objects/File)) : [FTP](/docs/library/resources/ftp)
##### Descrição

Copia um arquivo no servidor para um arquivo local.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **destino** | _[File](/docs/library/objects/File)_ | Arquivo local de destino para armazenar o conteúdo remoto. |

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

O recurso FTP atual.

---

#### _ftp.download(caminhoRemoto: string, destino: [Storage](/docs/library/resources/storage)) : [FTP](/docs/library/resources/ftp)
##### Descrição

Copia um arquivo no servidor para um arquivo local.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **destino** | _[Storage](/docs/library/resources/storage)_ | Arquivo local de destino para armazenar o conteúdo remoto. |

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

O recurso FTP atual.

---

## downloadBytes

---

#### _ftp.downloadBytes(caminhoRemoto: string) : byte[]
##### Descrição

Obtém um array de bytes do conteúdo de um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |

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
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |

##### Retorno

( _string_ )

Conteúdo de texto do arquivo remoto no servidor.

---

#### _ftp.downloadText(caminhoRemoto: string, encodificacao: string) : string
##### Descrição

Obtém um conteúdo de texto de um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **encodificacao** | _string_ | Código de encodificação dos caractéres. |

##### Retorno

( _string_ )

Conteúdo de texto do arquivo remoto no servidor.

---

## enabled

---

#### _ftp.enabled() : boolean
##### Retorno

( _boolean_ )


---

#### _ftp.enabled(ativo: boolean) : [FTP](/docs/library/resources/ftp)
##### Descrição

Define se está habilitado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ativo** | _boolean_ | Se fica ativo ou inactivo. |

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

Objeto FTP atual.

---

## getClient

---

#### _ftp.getClient() : org.netuno.psamata.ftp.FTPClient
##### Descrição

Obtém o cliente FTP base.

##### Retorno

( _org.netuno.psamata.ftp.FTPClient_ )

Cliente FTP original de base.

---

## getConfig

---

#### _ftp.getConfig() : [FTPConfig](/docs/library/objects/FTPConfig)
##### Descrição

Obtém a configuração que está a ser utilizada.

##### Retorno

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Objeto da configuração ativa.

---

## getWorkingDirectory

---

#### _ftp.getWorkingDirectory() : string
##### Descrição

Obtém o caminho remoto atual de trabalho onde as operações estão sendo realizadas.

##### Retorno

( _string_ )

O caminho remoto completo que está sendo utilizado.

---

## init

---

#### _ftp.init() : [FTP](/docs/library/resources/ftp)
##### Descrição

Inicia uma nova instância do FTP utilizando a configuração do FTP da chave `default`.

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

A nova instância do recurso FTP com base na configuração do FTP `default`.

---

#### _ftp.init(configKey: string) : [FTP](/docs/library/resources/ftp)
##### Descrição

Inicia uma nova instância do FTP a partir de uma configuração específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **configKey** | _string_ | Chave da configuração FTP que será utilizada. |

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

A nova instância do recurso FTP com base na configuração do FTP especificada.

---

#### _ftp.init(config: [FTPConfig](/docs/library/objects/FTPConfig)) : [FTP](/docs/library/resources/ftp)
##### Descrição

Inicia uma nova instância do FTP a partir de uma configuração que é definida em um objeto de configuração própria.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[FTPConfig](/docs/library/objects/FTPConfig)_ | Configuração que será utilizada. |

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

A nova instância do recurso FTP com base na configuração definida.

---

## isEnabled

---

#### _ftp.isEnabled() : boolean
##### Descrição

Verifica se está habilitado.

##### Retorno

( _boolean_ )

Resultado se está ou não ativado.

---

## list

---

#### _ftp.list(caminhoRemoto: string) : java.util.List
##### Descrição

Lista os itens da pasta no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho da pasta no servidor. |

##### Retorno

( _java.util.List_ )

A lista de itens que está caminho do servidor.

---

## rename

---

#### _ftp.rename(caminhoAntigo: string, caminhoNovo: string) : [FTP](/docs/library/resources/ftp)
##### Descrição

Renomeia um arquivo ou pasta no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoAntigo** | _string_ | Caminho no servidor que deve ser renomeado. |
| **caminhoNovo** | _string_ | O caminho de destino no servidor. |

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

O recurso FTP atual.

---

## sendCommand

---

#### _ftp.sendCommand(comando: string) : int
##### Descrição

Envia um comando específico.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **comando** | _string_ | Comando que deve ser enviado. |

##### Retorno

( _int_ )

Resultado do comando.

---

#### _ftp.sendCommand(comando: string, args: string) : int
##### Descrição

Envia um comando específico com argumentos adicionais necessários para o comando FTP.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **comando** | _string_ | Comando que deve ser enviado. |
| **args** | _string_ | Argumentos adicionais. |

##### Retorno

( _int_ )

Resultado do comando.

---

## sendSiteCommand

---

#### _ftp.sendSiteCommand(comando: string) : [FTP](/docs/library/resources/ftp)
##### Descrição

Envia um comando específico do site.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **comando** | _string_ | Comando que deve ser enviado. |

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

O recurso FTP atual.

---

## setConfig

---

#### _ftp.setConfig(config: [FTPConfig](/docs/library/objects/FTPConfig)) : [FTP](/docs/library/resources/ftp)
##### Descrição

Define outra configuração que deve ser utilizada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[FTPConfig](/docs/library/objects/FTPConfig)_ | Definição da nova configuração. |

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

Objeto FTP atual.

---

## setEnabled

---

#### _ftp.setEnabled(ativo: boolean) : [FTP](/docs/library/resources/ftp)
##### Descrição

Define se está habilitado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ativo** | _boolean_ | Se fica ativo ou inactivo. |

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

Objeto FTP atual.

---

## upload

---

#### _ftp.upload(caminhoRemoto: string, origem: [InputStream](/docs/library/objects/InputStream)) : [FTP](/docs/library/resources/ftp)
##### Descrição

Envia os dados de um arquivo para ser salvo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **origem** | _[InputStream](/docs/library/objects/InputStream)_ | Arquivo local de origem. |

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

O recurso FTP atual.

---

#### _ftp.upload(caminhoRemoto: string, origem: [File](/docs/library/objects/File)) : [FTP](/docs/library/resources/ftp)
##### Descrição

Envia os dados de um arquivo para ser salvo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **origem** | _[File](/docs/library/objects/File)_ | Arquivo local de origem. |

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

O recurso FTP atual.

---

#### _ftp.upload(caminhoRemoto: string, origem: [Storage](/docs/library/resources/storage)) : [FTP](/docs/library/resources/ftp)
##### Descrição

Envia os dados de um arquivo para ser salvo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **origem** | _[Storage](/docs/library/resources/storage)_ | Arquivo local de origem. |

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

O recurso FTP atual.

---

## uploadBytes

---

#### _ftp.uploadBytes(caminhoRemoto: string, bytes: byte[]) : [FTP](/docs/library/resources/ftp)
##### Descrição

Envia um array de bytes para serem salvos em um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **bytes** | _byte[]_ | Array de bytes. |

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

O recurso FTP atual.

---

## uploadText

---

#### _ftp.uploadText(caminhoRemoto: string, texto: string) : [FTP](/docs/library/resources/ftp)
##### Descrição

Envia um conteúdo de texto para ser salvado em um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **texto** | _string_ | Conteúdo de texto. |

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

O recurso FTP atual.

---

#### _ftp.uploadText(caminhoRemoto: string, texto: string, encodificacao: string) : [FTP](/docs/library/resources/ftp)
##### Descrição

Envia um conteúdo de texto para ser salvado em um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **texto** | _string_ | Conteúdo de texto. |
| **encodificacao** | _string_ | Código de encodificação dos caractéres. |

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

O recurso FTP atual.

---

