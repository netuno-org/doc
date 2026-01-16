---
id: ssh
title: SSH
sidebar_label: SSH
---

Recurso para conectar, transferir arquivos e executar comandos via SSH.

---

## close

---

#### _ssh.close() : void
##### Descrição

Fecha todas as sessões abertas e realiza a desconexão SSH com o servidor.

##### Retorno

( _void_ )

Objeto SSH atual.

---

## config

---

#### _ssh.config() : [SSHConfig](/docs/library/objects/SSHConfig)
##### Descrição

Inicia uma nova configuração própria.

##### Retorno

( _[SSHConfig](/docs/library/objects/SSHConfig)_ )

Objeto de configuração carregada a partir dos dados recebidos.

---

#### _ssh.config(config: [Values](/docs/library/objects/Values)) : [SSHConfig](/docs/library/objects/SSHConfig)
##### Descrição

Inicia uma nova configuração própria.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[Values](/docs/library/objects/Values)_ | Estrutura de dados da definição da configuração. |

##### Retorno

( _[SSHConfig](/docs/library/objects/SSHConfig)_ )

Objeto de configuração carregada a partir dos dados recebidos.

---

#### _ssh.config(config: [SSHConfig](/docs/library/objects/SSHConfig)) : [SSH](/docs/library/resources/ssh)
##### Descrição

Define outra configuração que deve ser utilizada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[SSHConfig](/docs/library/objects/SSHConfig)_ | Definição da nova configuração. |

##### Retorno

( _[SSH](/docs/library/resources/ssh)_ )

Recurso SSH atual.

---

## connect

---

#### _ssh.connect() : [SSH](/docs/library/resources/ssh)
##### Descrição

Inicia a conexão com o servidor através do SSH.

##### Retorno

( _[SSH](/docs/library/resources/ssh)_ )

Recurso SSH atual.

---

## disconnect

---

#### _ssh.disconnect() : [SSH](/docs/library/resources/ssh)
##### Descrição

Fecha todas as sessões abertas e realiza a desconexão SSH com o servidor.

##### Retorno

( _[SSH](/docs/library/resources/ssh)_ )

Recurso SSH atual.

---

## enabled

---

#### _ssh.enabled() : boolean
##### Retorno

( _boolean_ )


---

#### _ssh.enabled(ativo: boolean) : [SSH](/docs/library/resources/ssh)
##### Descrição

Define se está habilitado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ativo** | _boolean_ | Se fica ativo ou inactivo. |

##### Retorno

( _[SSH](/docs/library/resources/ssh)_ )

Recurso SSH atual.

---

## getClient

---

#### _ssh.getClient() : org.netuno.psamata.ssh.SSHClient
##### Descrição

Obtém o cliente SSH base.

##### Retorno

( _org.netuno.psamata.ssh.SSHClient_ )

Cliente SSH original de base.

---

## getConfig

---

#### _ssh.getConfig() : [SSHConfig](/docs/library/objects/SSHConfig)
##### Descrição

Obtém a configuração que está a ser utilizada.

##### Retorno

( _[SSHConfig](/docs/library/objects/SSHConfig)_ )

Objeto da configuração ativa.

---

## init

---

#### _ssh.init() : [SSH](/docs/library/resources/ssh)
##### Descrição

Inicia uma nova instância do SSH utilizando a configuração do SSH da chave `default`.

##### Retorno

( _[SSH](/docs/library/resources/ssh)_ )

A nova instância do recurso SSH com base na configuração do SSH `default`.

---

#### _ssh.init(configKey: string) : [SSH](/docs/library/resources/ssh)
##### Descrição

Inicia uma nova instância do SSH a partir de uma configuração específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **configKey** | _string_ | Chave da configuração SSH que será utilizada. |

##### Retorno

( _[SSH](/docs/library/resources/ssh)_ )

A nova instância do recurso SSH com base na configuração do SSH especificada.

---

#### _ssh.init(config: [SSHConfig](/docs/library/objects/SSHConfig)) : [SSH](/docs/library/resources/ssh)
##### Descrição

Inicia uma nova instância do SSH a partir de uma configuração que é definida em um objeto de configuração própria.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[SSHConfig](/docs/library/objects/SSHConfig)_ | Configuração que será utilizada. |

##### Retorno

( _[SSH](/docs/library/resources/ssh)_ )

A nova instância do recurso SSH com base na configuração definida.

---

## initSCP

---

#### _ssh.initSCP() : [SSHSCP](/docs/library/objects/SSHSCP)
##### Descrição

Inicia a sessão SCP para gerir pastas e transferir arquivos.

##### Retorno

( _[SSHSCP](/docs/library/objects/SSHSCP)_ )

A sessão SCP iniciada para executar comandos.

---

## initSFTP

---

#### _ssh.initSFTP() : [SSHSFTP](/docs/library/objects/SSHSFTP)
##### Descrição

Inicia a sessão SFTP para gerir pastas e transferir arquivos.

##### Retorno

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

A sessão SFTP iniciada para executar comandos.

---

## initSession

---

#### _ssh.initSession() : [SSHSession](/docs/library/objects/SSHSession)
##### Descrição

Inicia a sessão SSH para executar comandos.

##### Retorno

( _[SSHSession](/docs/library/objects/SSHSession)_ )

A sessão iniciada para executar comandos.

---

## isEnabled

---

#### _ssh.isEnabled() : boolean
##### Descrição

Verifica se está habilitado.

##### Retorno

( _boolean_ )

Resultado se está ou não ativado.

---

## setConfig

---

#### _ssh.setConfig(config: [SSHConfig](/docs/library/objects/SSHConfig)) : [SSH](/docs/library/resources/ssh)
##### Descrição

Define outra configuração que deve ser utilizada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[SSHConfig](/docs/library/objects/SSHConfig)_ | Definição da nova configuração. |

##### Retorno

( _[SSH](/docs/library/resources/ssh)_ )

Recurso SSH atual.

---

## setEnabled

---

#### _ssh.setEnabled(ativo: boolean) : [SSH](/docs/library/resources/ssh)
##### Descrição

Define se está habilitado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ativo** | _boolean_ | Se fica ativo ou inactivo. |

##### Retorno

( _[SSH](/docs/library/resources/ssh)_ )

Recurso SSH atual.

---

