---
id: imap
title: IMAP
sidebar_label: IMAP
---

Recurso de consulta da caixa de e-mails através do IMAP.

---

## close

---

#### _imap.close() : void
##### Descrição

Fecha e encerra a conexão com pasta IMAP atual.

##### Retorno

( _void_ )


---

## config

---

#### _imap.config() : [IMAPConfig](/docs/library/objects/IMAPConfig)
##### Descrição

Inicia uma nova configuração própria.

##### Retorno

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Objeto de configuração carregada a partir dos dados recebidos.

---

#### _imap.config(config: [Values](/docs/library/objects/Values)) : [IMAPConfig](/docs/library/objects/IMAPConfig)
##### Descrição

Inicia uma nova configuração própria.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[Values](/docs/library/objects/Values)_ | Estrutura de dados da definição da configuração. |

##### Retorno

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Objeto de configuração carregada a partir dos dados recebidos.

---

#### _imap.config(config: [IMAPConfig](/docs/library/objects/IMAPConfig)) : [IMAP](/docs/library/resources/imap)
##### Descrição

Define outra configuração que deve ser utilizada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[IMAPConfig](/docs/library/objects/IMAPConfig)_ | Definição da nova configuração. |

##### Retorno

( _[IMAP](/docs/library/resources/imap)_ )

Objeto IMAP atual.

---

## connect

---

#### _imap.connect() : [IMAP](/docs/library/resources/imap)
##### Descrição

Efetua a conexão ao servidor IMAP.

##### Retorno

( _[IMAP](/docs/library/resources/imap)_ )

Objeto IMAPClient.

---

## deletedSize

---

#### _imap.deletedSize() : int
##### Descrição

Deleta as mensagens de uma pasta IMAP e retorna o tamanho (em bytes) das mensagens excluídas.

##### Retorno

( _int_ )

Tamanho (em bytes) das mensagens excluídas.

---

## enabled

---

#### _imap.enabled() : boolean
##### Retorno

( _boolean_ )


---

#### _imap.enabled(ativo: boolean) : [IMAP](/docs/library/resources/imap)
##### Descrição

Define se está habilitado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ativo** | _boolean_ | Se fica ativo ou inactivo. |

##### Retorno

( _[IMAP](/docs/library/resources/imap)_ )

Objeto IMAP atual.

---

## getClient

---

#### _imap.getClient() : org.netuno.psamata.mail.IMAPClient
##### Descrição

Retorna o objeto IMAPClient onde estão as configurações do recurso.

##### Retorno

( _org.netuno.psamata.mail.IMAPClient_ )

Objeto IMAPClient.

---

## getConfig

---

#### _imap.getConfig() : [IMAPConfig](/docs/library/objects/IMAPConfig)
##### Descrição

Obtém a configuração que está a ser utilizada.

##### Retorno

( _[IMAPConfig](/docs/library/objects/IMAPConfig)_ )

Objeto da configuração ativa.

---

## init

---

#### _imap.init() : [IMAP](/docs/library/resources/imap)
##### Descrição

Inicia uma nova instância do IMAP utilizando a configuração do IMAP da chave `default`.

##### Retorno

( _[IMAP](/docs/library/resources/imap)_ )

A nova instância do recurso IMAP com base na configuração do IMAP `default`.

---

#### _imap.init(configKey: string) : [IMAP](/docs/library/resources/imap)
##### Descrição

Inicia uma nova instância do IMAP a partir de uma configuração específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **configKey** | _string_ | Chave da configuração IMAP que será utilizada. |

##### Retorno

( _[IMAP](/docs/library/resources/imap)_ )

A nova instância do recurso IMAP com base na configuração do IMAP especificada.

---

#### _imap.init(config: [IMAPConfig](/docs/library/objects/IMAPConfig)) : [IMAP](/docs/library/resources/imap)
##### Descrição

Inicia uma nova instância do IMAP a partir de uma configuração que é definida em um objeto de configuração própria.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[IMAPConfig](/docs/library/objects/IMAPConfig)_ | Configuração que será utilizada. |

##### Retorno

( _[IMAP](/docs/library/resources/imap)_ )

A nova instância do recurso IMAP com base na configuração definida.

---

## isEnabled

---

#### _imap.isEnabled() : boolean
##### Descrição

Verifica se está habilitado.

##### Retorno

( _boolean_ )

Resultado se está ou não ativado.

---

## mail

---

#### _imap.mail(posicao: int) : org.netuno.psamata.mail.Mail
##### Descrição

Retorna uma mensagem específica na pasta IMAP.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **posicao** | _int_ | Índice da mensagem. |

##### Retorno

( _org.netuno.psamata.mail.Mail_ )

Mensagem.

---

## mails

---

#### _imap.mails() : java.util.List
##### Descrição

Retorna todas as mensagens contidas na pasta.

##### Retorno

( _java.util.List_ )

Lista de mensagens

---

#### _imap.mails(início: int, final: int) : java.util.List
##### Descrição

Retorna um intervalo específico de mensagens contidas na pasta IMAP.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **início** | _int_ | Índice da primeira mensagem. |
| **final** | _int_ | Índice da última mensagem. |

##### Retorno

( _java.util.List_ )

Lista de mensagens

---

## newSize

---

#### _imap.newSize() : int
##### Descrição

Retorna o tamanho (em bytes) das novas mensagens (não lidas) em uma pasta IMAP.

##### Retorno

( _int_ )

Tamanho (em bytes) das mensagens novas mensagens não lidas.

---

## openFolder

---

#### _imap.openFolder(nome: string) : [IMAP](/docs/library/resources/imap)
##### Descrição

Abre a pasta INBOX do servidor (modo leitura).

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | Nome da past INBOX. |

##### Retorno

( _[IMAP](/docs/library/resources/imap)_ )

Recurso IMAP atual.

---

#### _imap.openFolder(nome: string, escrita: boolean) : [IMAP](/docs/library/resources/imap)
##### Descrição

Abre a pasta INBOX do servidor porém, especificando se é em modo de escrita ou não.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nome** | _string_ | Nome da past INBOX. |
| **escrita** | _boolean_ | Se é ou não em modo de escrita. |

##### Retorno

( _[IMAP](/docs/library/resources/imap)_ )

Recurso IMAP atual.

---

## setConfig

---

#### _imap.setConfig(config: [IMAPConfig](/docs/library/objects/IMAPConfig)) : [IMAP](/docs/library/resources/imap)
##### Descrição

Define outra configuração que deve ser utilizada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **config** | _[IMAPConfig](/docs/library/objects/IMAPConfig)_ | Definição da nova configuração. |

##### Retorno

( _[IMAP](/docs/library/resources/imap)_ )

Objeto IMAP atual.

---

## setEnabled

---

#### _imap.setEnabled(ativo: boolean) : [IMAP](/docs/library/resources/imap)
##### Descrição

Define se está habilitado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **ativo** | _boolean_ | Se fica ativo ou inactivo. |

##### Retorno

( _[IMAP](/docs/library/resources/imap)_ )

Objeto IMAP atual.

---

## size

---

#### _imap.size() : int
##### Descrição

Retorna o tamanho (em bytes) das mensagens de uma pasta IMAP.

##### Retorno

( _int_ )

Tamanho (em bytes) das mensagens.

---

## unreadSize

---

#### _imap.unreadSize() : int
##### Descrição

Retorna o tamanho (em bytes) de todas as mensagens não lidas em uma pasta IMAP.

##### Retorno

( _int_ )

Tamanho (em bytes) das mensagens não lidas.

---

## with

---

#### _imap.with(smtp: [SMTP](/docs/library/resources/smtp)) : [IMAP](/docs/library/resources/imap)
##### Descrição

Define uma nova configuração de SMTP diferente da atual.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **smtp** | _[SMTP](/docs/library/resources/smtp)_ | Configuração SMTP a ser usada. |

##### Retorno

( _[IMAP](/docs/library/resources/imap)_ )

Recurso IMAP atual.

---

