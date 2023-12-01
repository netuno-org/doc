---
id: imap
title: IMAP
sidebar_label: IMAP
---

Recurso de consulta da caixa de e-mails através do IMAP.

---

## close

---

#### _imap.close() : _void_
##### Retorno

( _void_ )


---

## config

---

#### _imap.config() : _[IMAPConfig](../../objects/IMAPConfig)_
##### Descrição

Obtém a configuração que está a ser utilizada.

##### Retorno

( _[IMAPConfig](../../objects/IMAPConfig)_ )

Objeto da configuração ativa.

---

#### _imap.config(config: _[Values](../../objects/Values)_) : _[IMAPConfig](../../objects/IMAPConfig)_
##### Descrição

Inicia uma nova configuração própria.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| config | _[Values](../../objects/Values)_ | Estrutura de dados da definição da configuração. |

##### Retorno

( _[IMAPConfig](../../objects/IMAPConfig)_ )

Objeto de configuração carregada a partir dos dados recebidos.

---

#### _imap.config(config: _[IMAPConfig](../../objects/IMAPConfig)_) : _IMAP_
##### Descrição

Define outra configuração que deve ser utilizada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| config | _[IMAPConfig](../../objects/IMAPConfig)_ | Definição da nova configuração. |

##### Retorno

( _IMAP_ )

Objeto IMAP atual.

---

## connect

---

#### _imap.connect() : _IMAP_
##### Retorno

( _IMAP_ )


---

## deletedSize

---

#### _imap.deletedSize() : _int_
##### Retorno

( _int_ )


---

## enabled

---

#### _imap.enabled() : _boolean_
##### Retorno

( _boolean_ )


---

#### _imap.enabled(ativo: _boolean_) : _IMAP_
##### Descrição

Define se está habilitado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| ativo | _boolean_ | Se fica ativo ou inactivo. |

##### Retorno

( _IMAP_ )

Objeto IMAP atual.

---

## getClient

---

#### _imap.getClient() : _IMAPClient_
##### Retorno

( _IMAPClient_ )


---

## getConfig

---

#### _imap.getConfig() : _[IMAPConfig](../../objects/IMAPConfig)_
##### Descrição

Obtém a configuração que está a ser utilizada.

##### Retorno

( _[IMAPConfig](../../objects/IMAPConfig)_ )

Objeto da configuração ativa.

---

## getMail

---

#### _imap.getMail(arg0: _int_) : _Mail_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _Mail_ )


---

## getMails

---

#### _imap.getMails() : _List_
##### Retorno

( _List_ )


---

#### _imap.getMails(arg0: _int_, arg1: _int_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Retorno

( _List_ )


---

## init

---

#### _imap.init() : _IMAP_
##### Descrição

Inicia uma nova instância do IMAP utilizando a configuração do IMAP da chave `default`.

##### Retorno

( _IMAP_ )

A nova instância do recurso IMAP com base na configuração do IMAP `default`.

---

#### _imap.init(configKey: string) : _IMAP_
##### Descrição

Inicia uma nova instância do IMAP a partir de uma configuração específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| configKey | string | Chave da configuração IMAP que será utilizada. |

##### Retorno

( _IMAP_ )

A nova instância do recurso IMAP com base na configuração do IMAP especificada.

---

#### _imap.init(config: _[IMAPConfig](../../objects/IMAPConfig)_) : _IMAP_
##### Descrição

Inicia uma nova instância do IMAP a partir de uma configuração que é definida em um objeto de configuração própria.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| config | _[IMAPConfig](../../objects/IMAPConfig)_ | Configuração que será utilizada. |

##### Retorno

( _IMAP_ )

A nova instância do recurso IMAP com base na configuração definida.

---

## isEnabled

---

#### _imap.isEnabled() : _boolean_
##### Descrição

Verifica se está habilitado.

##### Retorno

( _boolean_ )

Resultado se está ou não ativado.

---

## mail

---

#### _imap.mail(arg0: _int_) : _Mail_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |

##### Retorno

( _Mail_ )


---

## mails

---

#### _imap.mails() : _List_
##### Retorno

( _List_ )


---

#### _imap.mails(arg0: _int_, arg1: _int_) : _List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |

##### Retorno

( _List_ )


---

## newSize

---

#### _imap.newSize() : _int_
##### Retorno

( _int_ )


---

## openFolder

---

#### _imap.openFolder(arg0: string) : _IMAP_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( _IMAP_ )


---

#### _imap.openFolder(arg0: string, arg1: _boolean_) : _IMAP_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | _boolean_ |   |

##### Retorno

( _IMAP_ )


---

## setConfig

---

#### _imap.setConfig(config: _[IMAPConfig](../../objects/IMAPConfig)_) : _IMAP_
##### Descrição

Define outra configuração que deve ser utilizada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| config | _[IMAPConfig](../../objects/IMAPConfig)_ | Definição da nova configuração. |

##### Retorno

( _IMAP_ )

Objeto IMAP atual.

---

## setEnabled

---

#### _imap.setEnabled(ativo: _boolean_) : _IMAP_
##### Descrição

Define se está habilitado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| ativo | _boolean_ | Se fica ativo ou inactivo. |

##### Retorno

( _IMAP_ )

Objeto IMAP atual.

---

## size

---

#### _imap.size() : _int_
##### Retorno

( _int_ )


---

## unreadSize

---

#### _imap.unreadSize() : _int_
##### Retorno

( _int_ )


---

## with

---

#### _imap.with(arg0: _SMTP_) : _IMAP_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | _SMTP_ |   |

##### Retorno

( _IMAP_ )


---

