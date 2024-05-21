---
id: ftp
title: FTP
sidebar_label: FTP
---

Recurso cliente de FTP.

---

## abort

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">abort</span>() : <span style="font-weight: normal; font-style: italic;">[FTP](../../resources/FTP)</span>
##### Descrição

Interrompe a operação de transferência de dados em andamento.

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

## changeToParentDirectory

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">changeToParentDirectory</span>() : <span style="font-weight: normal; font-style: italic;">[FTP](../../resources/FTP)</span>
##### Descrição

Muda para a pasta anterior onde deve ser utilizada para realizar as operações.

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

## changeWorkingDirectory

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">changeWorkingDirectory</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[FTP](../../resources/FTP)</span>
##### Descrição

Define o caminho remoto que deve ser utilizado para realizar as operações.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho no servidor para realizar o trabalho. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

## close

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">close</span>() : <span style="font-weight: normal; font-style: italic;">void</span>
##### Descrição

Fecha a conexão FTP com o servidor.

##### Retorno

( _void_ )


---

## config

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">config</span>() : <span style="font-weight: normal; font-style: italic;">[FTPConfig](../../objects/FTPConfig)</span>
##### Descrição

Inicia uma nova configuração própria.

##### Retorno

( _[FTPConfig](../../objects/FTPConfig)_ )

Objeto de configuração carregada a partir dos dados recebidos.

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">config</span>(<span style="color: #FF8000">config</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">[FTPConfig](../../objects/FTPConfig)</span>
##### Descrição

Inicia uma nova configuração própria.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[Values](../../objects/Values)_ | Estrutura de dados da definição da configuração. |

##### Retorno

( _[FTPConfig](../../objects/FTPConfig)_ )

Objeto de configuração carregada a partir dos dados recebidos.

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">config</span>(<span style="color: #FF8000">config</span>: <span style="font-weight: normal; font-style: italic;">[FTPConfig](../../objects/FTPConfig)</span>) : <span style="font-weight: normal; font-style: italic;">[FTP](../../resources/FTP)</span>
##### Descrição

Define outra configuração que deve ser utilizada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[FTPConfig](../../objects/FTPConfig)_ | Definição da nova configuração. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

Objeto FTP atual.

---

## connect

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">connect</span>() : <span style="font-weight: normal; font-style: italic;">[FTP](../../resources/FTP)</span>
##### Descrição

Inicia a conexão com o servidor através do FTP.

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

## createDirectory

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">createDirectory</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[FTP](../../resources/FTP)</span>
##### Descrição

Cria uma pastas no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho no servidor onde a pasta será criada. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

## deleteDirectory

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">deleteDirectory</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[FTP](../../resources/FTP)</span>
##### Descrição

Remove uma pasta no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho no servidor a pasta será removida. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

## deleteFile

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">deleteFile</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[FTP](../../resources/FTP)</span>
##### Descrição

Remove um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho no servidor o arquivo será removido. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

## disconnect

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">disconnect</span>() : <span style="font-weight: normal; font-style: italic;">[FTP](../../resources/FTP)</span>
##### Descrição

Realiza a desconexão FTP com o servidor.

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

## download

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">download</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">destino</span>: <span style="font-weight: normal; font-style: italic;">java.io.OutputStream</span>) : <span style="font-weight: normal; font-style: italic;">[FTP](../../resources/FTP)</span>
##### Descrição

Copia um arquivo no servidor para um arquivo local.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **destino** | _java.io.OutputStream_ | Arquivo local de destino para armazenar o conteúdo remoto. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">download</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">destino</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>) : <span style="font-weight: normal; font-style: italic;">[FTP](../../resources/FTP)</span>
##### Descrição

Copia um arquivo no servidor para um arquivo local.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **destino** | _[File](../../objects/File)_ | Arquivo local de destino para armazenar o conteúdo remoto. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">download</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">destino</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/Storage)</span>) : <span style="font-weight: normal; font-style: italic;">[FTP](../../resources/FTP)</span>
##### Descrição

Copia um arquivo no servidor para um arquivo local.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **destino** | _[Storage](../../resources/Storage)_ | Arquivo local de destino para armazenar o conteúdo remoto. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

## downloadBytes

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">downloadBytes</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">byte[]</span>
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

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">downloadText</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">downloadText</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">encodificacao</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
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

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">enabled</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">enabled</span>(<span style="color: #FF8000">ativo</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[FTP](../../resources/FTP)</span>
##### Descrição

Define se está habilitado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ativo** | _boolean_ | Se fica ativo ou inactivo. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

Objeto FTP atual.

---

## getClient

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">getClient</span>() : <span style="font-weight: normal; font-style: italic;">org.netuno.psamata.ftp.FTPClient</span>
##### Descrição

Obtém o cliente FTP base.

##### Retorno

( _org.netuno.psamata.ftp.FTPClient_ )

Cliente FTP original de base.

---

## getConfig

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">getConfig</span>() : <span style="font-weight: normal; font-style: italic;">[FTPConfig](../../objects/FTPConfig)</span>
##### Descrição

Obtém a configuração que está a ser utilizada.

##### Retorno

( _[FTPConfig](../../objects/FTPConfig)_ )

Objeto da configuração ativa.

---

## getWorkingDirectory

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">getWorkingDirectory</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Obtém o caminho remoto atual de trabalho onde as operações estão sendo realizadas.

##### Retorno

( _string_ )

O caminho remoto completo que está sendo utilizado.

---

## init

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">init</span>() : <span style="font-weight: normal; font-style: italic;">[FTP](../../resources/FTP)</span>
##### Descrição

Inicia uma nova instância do FTP utilizando a configuração do FTP da chave `default`.

##### Retorno

( _[FTP](../../resources/FTP)_ )

A nova instância do recurso FTP com base na configuração do FTP `default`.

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">init</span>(<span style="color: #FF8000">configKey</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[FTP](../../resources/FTP)</span>
##### Descrição

Inicia uma nova instância do FTP a partir de uma configuração específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **configKey** | _string_ | Chave da configuração FTP que será utilizada. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

A nova instância do recurso FTP com base na configuração do FTP especificada.

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">init</span>(<span style="color: #FF8000">config</span>: <span style="font-weight: normal; font-style: italic;">[FTPConfig](../../objects/FTPConfig)</span>) : <span style="font-weight: normal; font-style: italic;">[FTP](../../resources/FTP)</span>
##### Descrição

Inicia uma nova instância do FTP a partir de uma configuração que é definida em um objeto de configuração própria.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[FTPConfig](../../objects/FTPConfig)_ | Configuração que será utilizada. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

A nova instância do recurso FTP com base na configuração definida.

---

## isEnabled

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">isEnabled</span>() : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Descrição

Verifica se está habilitado.

##### Retorno

( _boolean_ )

Resultado se está ou não ativado.

---

## list

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">list</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
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

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">rename</span>(<span style="color: #FF8000">caminhoAntigo</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">caminhoNovo</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[FTP](../../resources/FTP)</span>
##### Descrição

Renomeia um arquivo ou pasta no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoAntigo** | _string_ | Caminho no servidor que deve ser renomeado. |
| **caminhoNovo** | _string_ | O caminho de destino no servidor. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

## sendCommand

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">sendCommand</span>(<span style="color: #FF8000">comando</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">int</span>
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

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">sendCommand</span>(<span style="color: #FF8000">comando</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">args</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">int</span>
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

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">sendSiteCommand</span>(<span style="color: #FF8000">comando</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[FTP](../../resources/FTP)</span>
##### Descrição

Envia um comando específico do site.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **comando** | _string_ | Comando que deve ser enviado. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

## setConfig

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">setConfig</span>(<span style="color: #FF8000">config</span>: <span style="font-weight: normal; font-style: italic;">[FTPConfig](../../objects/FTPConfig)</span>) : <span style="font-weight: normal; font-style: italic;">[FTP](../../resources/FTP)</span>
##### Descrição

Define outra configuração que deve ser utilizada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[FTPConfig](../../objects/FTPConfig)_ | Definição da nova configuração. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

Objeto FTP atual.

---

## setEnabled

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">setEnabled</span>(<span style="color: #FF8000">ativo</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">[FTP](../../resources/FTP)</span>
##### Descrição

Define se está habilitado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ativo** | _boolean_ | Se fica ativo ou inactivo. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

Objeto FTP atual.

---

## upload

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">upload</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">origem</span>: <span style="font-weight: normal; font-style: italic;">java.io.InputStream</span>) : <span style="font-weight: normal; font-style: italic;">[FTP](../../resources/FTP)</span>
##### Descrição

Envia os dados de um arquivo para ser salvo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **origem** | _java.io.InputStream_ | Arquivo local de origem. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">upload</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">origem</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>) : <span style="font-weight: normal; font-style: italic;">[FTP](../../resources/FTP)</span>
##### Descrição

Envia os dados de um arquivo para ser salvo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **origem** | _[File](../../objects/File)_ | Arquivo local de origem. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">upload</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">origem</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/Storage)</span>) : <span style="font-weight: normal; font-style: italic;">[FTP](../../resources/FTP)</span>
##### Descrição

Envia os dados de um arquivo para ser salvo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **origem** | _[Storage](../../resources/Storage)_ | Arquivo local de origem. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

## uploadBytes

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">uploadBytes</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">bytes</span>: <span style="font-weight: normal; font-style: italic;">byte[]</span>) : <span style="font-weight: normal; font-style: italic;">[FTP](../../resources/FTP)</span>
##### Descrição

Envia um array de bytes para serem salvos em um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **bytes** | _byte[]_ | Array de bytes. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

## uploadText

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">uploadText</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">texto</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[FTP](../../resources/FTP)</span>
##### Descrição

Envia um conteúdo de texto para ser salvado em um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **texto** | _string_ | Conteúdo de texto. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

#### <span style="font-weight: normal">_ftp</span>.<span style="color: #008000">uploadText</span>(<span style="color: #FF8000">caminhoRemoto</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">texto</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">encodificacao</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[FTP](../../resources/FTP)</span>
##### Descrição

Envia um conteúdo de texto para ser salvado em um arquivo no servidor.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminhoRemoto** | _string_ | Caminho do arquivo no servidor. |
| **texto** | _string_ | Conteúdo de texto. |
| **encodificacao** | _string_ | Código de encodificação dos caractéres. |

##### Retorno

( _[FTP](../../resources/FTP)_ )

O recurso FTP atual.

---

