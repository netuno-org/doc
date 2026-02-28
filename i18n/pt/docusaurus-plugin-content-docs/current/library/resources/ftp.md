---
id: ftp
title: FTP
sidebar_label: FTP
---

Recurso cliente de FTP.

---

## abort

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>abort</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](/docs/library/resources/ftp)</span>
##### Descrição

Interrompe a operação de transferência de dados em andamento.

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

O recurso FTP atual.

---

## changeToParentDirectory

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>changeToParentDirectory</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](/docs/library/resources/ftp)</span>
##### Descrição

Muda para a pasta anterior onde deve ser utilizada para realizar as operações.

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

O recurso FTP atual.

---

## changeWorkingDirectory

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>changeWorkingDirectory</span>(<span style={{color: '#FF8000'}}>caminhoRemoto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](/docs/library/resources/ftp)</span>
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

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>close</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Fecha a conexão FTP com o servidor.

##### Retorno

( _void_ )


---

## config

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>config</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](/docs/library/objects/FTPConfig)</span>
##### Descrição

Inicia uma nova configuração própria.

##### Retorno

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Objeto de configuração carregada a partir dos dados recebidos.

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>config</span>(<span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](/docs/library/objects/FTPConfig)</span>
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

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>config</span>(<span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](/docs/library/objects/FTPConfig)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](/docs/library/resources/ftp)</span>
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

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>connect</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](/docs/library/resources/ftp)</span>
##### Descrição

Inicia a conexão com o servidor através do FTP.

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

O recurso FTP atual.

---

## createDirectory

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>createDirectory</span>(<span style={{color: '#FF8000'}}>caminhoRemoto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](/docs/library/resources/ftp)</span>
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

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>deleteDirectory</span>(<span style={{color: '#FF8000'}}>caminhoRemoto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](/docs/library/resources/ftp)</span>
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

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>deleteFile</span>(<span style={{color: '#FF8000'}}>caminhoRemoto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](/docs/library/resources/ftp)</span>
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

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>disconnect</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](/docs/library/resources/ftp)</span>
##### Descrição

Realiza a desconexão FTP com o servidor.

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

O recurso FTP atual.

---

## download

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>download</span>(<span style={{color: '#FF8000'}}>caminhoRemoto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>destino</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](/docs/library/resources/ftp)</span>
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

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>download</span>(<span style={{color: '#FF8000'}}>caminhoRemoto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>destino</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](/docs/library/resources/ftp)</span>
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

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>download</span>(<span style={{color: '#FF8000'}}>caminhoRemoto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>destino</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](/docs/library/resources/ftp)</span>
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

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>downloadBytes</span>(<span style={{color: '#FF8000'}}>caminhoRemoto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>
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

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>downloadText</span>(<span style={{color: '#FF8000'}}>caminhoRemoto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>downloadText</span>(<span style={{color: '#FF8000'}}>caminhoRemoto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>encodificacao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>enabled</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>enabled</span>(<span style={{color: '#FF8000'}}>ativo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](/docs/library/resources/ftp)</span>
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

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>getClient</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.ftp.FTPClient</span>
##### Descrição

Obtém o cliente FTP base.

##### Retorno

( _org.netuno.psamata.ftp.FTPClient_ )

Cliente FTP original de base.

---

## getConfig

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>getConfig</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](/docs/library/objects/FTPConfig)</span>
##### Descrição

Obtém a configuração que está a ser utilizada.

##### Retorno

( _[FTPConfig](/docs/library/objects/FTPConfig)_ )

Objeto da configuração ativa.

---

## getWorkingDirectory

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>getWorkingDirectory</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o caminho remoto atual de trabalho onde as operações estão sendo realizadas.

##### Retorno

( _string_ )

O caminho remoto completo que está sendo utilizado.

---

## init

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](/docs/library/resources/ftp)</span>
##### Descrição

Inicia uma nova instância do FTP utilizando a configuração do FTP da chave `default`.

##### Retorno

( _[FTP](/docs/library/resources/ftp)_ )

A nova instância do recurso FTP com base na configuração do FTP `default`.

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>init</span>(<span style={{color: '#FF8000'}}>configKey</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](/docs/library/resources/ftp)</span>
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

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>init</span>(<span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](/docs/library/objects/FTPConfig)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](/docs/library/resources/ftp)</span>
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

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>isEnabled</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se está habilitado.

##### Retorno

( _boolean_ )

Resultado se está ou não ativado.

---

## list

---

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>list</span>(<span style={{color: '#FF8000'}}>caminhoRemoto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;[FTPFile](/docs/library/objects/FTPFile)&gt;</span>
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

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>rename</span>(<span style={{color: '#FF8000'}}>caminhoAntigo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>caminhoNovo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](/docs/library/resources/ftp)</span>
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

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>sendCommand</span>(<span style={{color: '#FF8000'}}>comando</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>sendCommand</span>(<span style={{color: '#FF8000'}}>comando</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>args</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
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

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>sendSiteCommand</span>(<span style={{color: '#FF8000'}}>comando</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](/docs/library/resources/ftp)</span>
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

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>setConfig</span>(<span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTPConfig](/docs/library/objects/FTPConfig)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](/docs/library/resources/ftp)</span>
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

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>setEnabled</span>(<span style={{color: '#FF8000'}}>ativo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](/docs/library/resources/ftp)</span>
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

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>upload</span>(<span style={{color: '#FF8000'}}>caminhoRemoto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>origem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](/docs/library/resources/ftp)</span>
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

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>upload</span>(<span style={{color: '#FF8000'}}>caminhoRemoto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>origem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](/docs/library/resources/ftp)</span>
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

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>upload</span>(<span style={{color: '#FF8000'}}>caminhoRemoto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>origem</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](/docs/library/resources/ftp)</span>
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

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>uploadBytes</span>(<span style={{color: '#FF8000'}}>caminhoRemoto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>bytes</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](/docs/library/resources/ftp)</span>
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

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>uploadText</span>(<span style={{color: '#FF8000'}}>caminhoRemoto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>texto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](/docs/library/resources/ftp)</span>
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

#### <span style={{fontWeight: 'normal'}}>_ftp</span>.<span style={{color: '#008000'}}>uploadText</span>(<span style={{color: '#FF8000'}}>caminhoRemoto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>texto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>encodificacao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[FTP](/docs/library/resources/ftp)</span>
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

