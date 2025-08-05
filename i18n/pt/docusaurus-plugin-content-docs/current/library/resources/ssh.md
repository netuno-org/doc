---
id: ssh
title: SSH
sidebar_label: SSH
---

Recurso para conectar, transferir arquivos e executar comandos via SSH.

---

## close

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>close</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Descrição

Fecha todas as sessões abertas e realiza a desconexão SSH com o servidor.

##### Retorno

( _void_ )

Objeto SSH atual.

---

## config

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>config</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHConfig](/docs/library/objects/SSHConfig)</span>
##### Descrição

Inicia uma nova configuração própria.

##### Retorno

( _[SSHConfig](/docs/library/objects/SSHConfig)_ )

Objeto de configuração carregada a partir dos dados recebidos.

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>config</span>(<span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHConfig](/docs/library/objects/SSHConfig)</span>
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

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>config</span>(<span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHConfig](/docs/library/objects/SSHConfig)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSH](/docs/library/resources/ssh)</span>
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

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>connect</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSH](/docs/library/resources/ssh)</span>
##### Descrição

Inicia a conexão com o servidor através do SSH.

##### Retorno

( _[SSH](/docs/library/resources/ssh)_ )

Recurso SSH atual.

---

## disconnect

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>disconnect</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSH](/docs/library/resources/ssh)</span>
##### Descrição

Fecha todas as sessões abertas e realiza a desconexão SSH com o servidor.

##### Retorno

( _[SSH](/docs/library/resources/ssh)_ )

Recurso SSH atual.

---

## enabled

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>enabled</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>enabled</span>(<span style={{color: '#FF8000'}}>ativo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSH](/docs/library/resources/ssh)</span>
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

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>getClient</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.psamata.ssh.SSHClient</span>
##### Descrição

Obtém o cliente SSH base.

##### Retorno

( _org.netuno.psamata.ssh.SSHClient_ )

Cliente SSH original de base.

---

## getConfig

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>getConfig</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHConfig](/docs/library/objects/SSHConfig)</span>
##### Descrição

Obtém a configuração que está a ser utilizada.

##### Retorno

( _[SSHConfig](/docs/library/objects/SSHConfig)_ )

Objeto da configuração ativa.

---

## init

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSH](/docs/library/resources/ssh)</span>
##### Descrição

Inicia uma nova instância do SSH utilizando a configuração do SSH da chave `default`.

##### Retorno

( _[SSH](/docs/library/resources/ssh)_ )

A nova instância do recurso SSH com base na configuração do SSH `default`.

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>init</span>(<span style={{color: '#FF8000'}}>configKey</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSH](/docs/library/resources/ssh)</span>
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

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>init</span>(<span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHConfig](/docs/library/objects/SSHConfig)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSH](/docs/library/resources/ssh)</span>
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

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>initSCP</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHSCP](/docs/library/objects/SSHSCP)</span>
##### Descrição

Inicia a sessão SCP para gerir pastas e transferir arquivos.

##### Retorno

( _[SSHSCP](/docs/library/objects/SSHSCP)_ )

A sessão SCP iniciada para executar comandos.

---

## initSFTP

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>initSFTP</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHSFTP](/docs/library/objects/SSHSFTP)</span>
##### Descrição

Inicia a sessão SFTP para gerir pastas e transferir arquivos.

##### Retorno

( _[SSHSFTP](/docs/library/objects/SSHSFTP)_ )

A sessão SFTP iniciada para executar comandos.

---

## initSession

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>initSession</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHSession](/docs/library/objects/SSHSession)</span>
##### Descrição

Inicia a sessão SSH para executar comandos.

##### Retorno

( _[SSHSession](/docs/library/objects/SSHSession)_ )

A sessão iniciada para executar comandos.

---

## isEnabled

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>isEnabled</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se está habilitado.

##### Retorno

( _boolean_ )

Resultado se está ou não ativado.

---

## setConfig

---

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>setConfig</span>(<span style={{color: '#FF8000'}}>config</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSHConfig](/docs/library/objects/SSHConfig)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSH](/docs/library/resources/ssh)</span>
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

#### <span style={{fontWeight: 'normal'}}>_ssh</span>.<span style={{color: '#008000'}}>setEnabled</span>(<span style={{color: '#FF8000'}}>ativo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[SSH](/docs/library/resources/ssh)</span>
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

