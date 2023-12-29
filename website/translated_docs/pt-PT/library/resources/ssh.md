---
id: ssh
title: SSH
sidebar_label: SSH
---

Recurso para conectar, transferir arquivos e executar comandos via SSH.

---

## close

---

#### _ssh.close() : _void_
##### Retorno

( _void_ )


---

## config

---

#### _ssh.config() : _[SSHConfig](../../objects/SSHConfig)_
##### Descrição

Inicia uma nova configuração própria.

##### Retorno

( _[SSHConfig](../../objects/SSHConfig)_ )

Objeto de configuração carregada a partir dos dados recebidos.

---

#### _ssh.config(config: _[Values](../../objects/Values)_) : _[SSHConfig](../../objects/SSHConfig)_
##### Descrição

Inicia uma nova configuração própria.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| config | _[Values](../../objects/Values)_ | Estrutura de dados da definição da configuração. |

##### Retorno

( _[SSHConfig](../../objects/SSHConfig)_ )

Objeto de configuração carregada a partir dos dados recebidos.

---

#### _ssh.config(config: _[SSHConfig](../../objects/SSHConfig)_) : _[SSH](../../resources/SSH)_
##### Descrição

Define outra configuração que deve ser utilizada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| config | _[SSHConfig](../../objects/SSHConfig)_ | Definição da nova configuração. |

##### Retorno

( _[SSH](../../resources/SSH)_ )

Objeto FTP atual.

---

## connect

---

#### _ssh.connect() : _[SSH](../../resources/SSH)_
##### Retorno

( _[SSH](../../resources/SSH)_ )


---

## disconnect

---

#### _ssh.disconnect() : _[SSH](../../resources/SSH)_
##### Retorno

( _[SSH](../../resources/SSH)_ )


---

## enabled

---

#### _ssh.enabled() : _boolean_
##### Retorno

( _boolean_ )


---

#### _ssh.enabled(ativo: _boolean_) : _[SSH](../../resources/SSH)_
##### Descrição

Define se está habilitado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| ativo | _boolean_ | Se fica ativo ou inactivo. |

##### Retorno

( _[SSH](../../resources/SSH)_ )

Objeto FTP atual.

---

## getClient

---

#### _ssh.getClient() : _org.netuno.psamata.ssh.SSHClient_
##### Retorno

( _org.netuno.psamata.ssh.SSHClient_ )


---

## getConfig

---

#### _ssh.getConfig() : _[SSHConfig](../../objects/SSHConfig)_
##### Descrição

Obtém a configuração que está a ser utilizada.

##### Retorno

( _[SSHConfig](../../objects/SSHConfig)_ )

Objeto da configuração ativa.

---

## init

---

#### _ssh.init() : _[SSH](../../resources/SSH)_
##### Descrição

Inicia uma nova instância do SSH utilizando a configuração do SSH da chave `default`.

##### Retorno

( _[SSH](../../resources/SSH)_ )

A nova instância do recurso SSH com base na configuração do SSH `default`.

---

#### _ssh.init(configKey: string) : _[SSH](../../resources/SSH)_
##### Descrição

Inicia uma nova instância do SSH a partir de uma configuração específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| configKey | string | Chave da configuração SSH que será utilizada. |

##### Retorno

( _[SSH](../../resources/SSH)_ )

A nova instância do recurso SSH com base na configuração do SSH especificada.

---

#### _ssh.init(config: _[SSHConfig](../../objects/SSHConfig)_) : _[SSH](../../resources/SSH)_
##### Descrição

Inicia uma nova instância do SSH a partir de uma configuração que é definida em um objeto de configuração própria.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| config | _[SSHConfig](../../objects/SSHConfig)_ | Configuração que será utilizada. |

##### Retorno

( _[SSH](../../resources/SSH)_ )

A nova instância do recurso SSH com base na configuração definida.

---

## initSCP

---

#### _ssh.initSCP() : _[SSHSCP](../../objects/SSHSCP)_
##### Retorno

( _[SSHSCP](../../objects/SSHSCP)_ )


---

## initSFTP

---

#### _ssh.initSFTP() : _[SSHSFTP](../../objects/SSHSFTP)_
##### Retorno

( _[SSHSFTP](../../objects/SSHSFTP)_ )


---

## initSession

---

#### _ssh.initSession() : _[SSHSession](../../objects/SSHSession)_
##### Retorno

( _[SSHSession](../../objects/SSHSession)_ )


---

## isEnabled

---

#### _ssh.isEnabled() : _boolean_
##### Descrição

Verifica se está habilitado.

##### Retorno

( _boolean_ )

Resultado se está ou não ativado.

---

## setConfig

---

#### _ssh.setConfig(config: _[SSHConfig](../../objects/SSHConfig)_) : _[SSH](../../resources/SSH)_
##### Descrição

Define outra configuração que deve ser utilizada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| config | _[SSHConfig](../../objects/SSHConfig)_ | Definição da nova configuração. |

##### Retorno

( _[SSH](../../resources/SSH)_ )

Objeto FTP atual.

---

## setEnabled

---

#### _ssh.setEnabled(ativo: _boolean_) : _[SSH](../../resources/SSH)_
##### Descrição

Define se está habilitado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| ativo | _boolean_ | Se fica ativo ou inactivo. |

##### Retorno

( _[SSH](../../resources/SSH)_ )

Objeto FTP atual.

---

