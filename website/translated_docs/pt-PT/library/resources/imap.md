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

Inicia uma nova configuração própria.

##### Retorno

( _[IMAPConfig](../../objects/IMAPConfig)_ )

Objeto de configuração carregada a partir dos dados recebidos.

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

#### _imap.config(config: _[IMAPConfig](../../objects/IMAPConfig)_) : _[IMAP](../../resources/IMAP)_
##### Descrição

Define outra configuração que deve ser utilizada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| config | _[IMAPConfig](../../objects/IMAPConfig)_ | Definição da nova configuração. |

##### Retorno

( _[IMAP](../../resources/IMAP)_ )

Objeto IMAP atual.

---

## connect

---

#### _imap.connect() : _[IMAP](../../resources/IMAP)_
##### Retorno

( _[IMAP](../../resources/IMAP)_ )


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

#### _imap.enabled(ativo: _boolean_) : _[IMAP](../../resources/IMAP)_
##### Descrição

Define se está habilitado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| ativo | _boolean_ | Se fica ativo ou inactivo. |

##### Retorno

( _[IMAP](../../resources/IMAP)_ )

Objeto IMAP atual.

---

## getClient

---

#### _imap.getClient() : _org.netuno.psamata.mail.IMAPClient_
##### Retorno

( _org.netuno.psamata.mail.IMAPClient_ )


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

#### _imap.getMail(position: _int_) : _org.netuno.psamata.mail.Mail_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| position | _int_ |   |

##### Retorno

( _org.netuno.psamata.mail.Mail_ )


---

## getMails

---

#### _imap.getMails() : _java.util.List_
##### Retorno

( _java.util.List_ )


---

#### _imap.getMails(start: _int_, end: _int_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| start | _int_ |   |
| end | _int_ |   |

##### Retorno

( _java.util.List_ )


---

## init

---

#### _imap.init() : _[IMAP](../../resources/IMAP)_
##### Descrição

Inicia uma nova instância do IMAP utilizando a configuração do IMAP da chave `default`.

##### Retorno

( _[IMAP](../../resources/IMAP)_ )

A nova instância do recurso IMAP com base na configuração do IMAP `default`.

---

#### _imap.init(configKey: string) : _[IMAP](../../resources/IMAP)_
##### Descrição

Inicia uma nova instância do IMAP a partir de uma configuração específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| configKey | string | Chave da configuração IMAP que será utilizada. |

##### Retorno

( _[IMAP](../../resources/IMAP)_ )

A nova instância do recurso IMAP com base na configuração do IMAP especificada.

---

#### _imap.init(config: _[IMAPConfig](../../objects/IMAPConfig)_) : _[IMAP](../../resources/IMAP)_
##### Descrição

Inicia uma nova instância do IMAP a partir de uma configuração que é definida em um objeto de configuração própria.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| config | _[IMAPConfig](../../objects/IMAPConfig)_ | Configuração que será utilizada. |

##### Retorno

( _[IMAP](../../resources/IMAP)_ )

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

#### _imap.mail(position: _int_) : _org.netuno.psamata.mail.Mail_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| position | _int_ |   |

##### Retorno

( _org.netuno.psamata.mail.Mail_ )


---

## mails

---

#### _imap.mails() : _java.util.List_
##### Retorno

( _java.util.List_ )


---

#### _imap.mails(start: _int_, end: _int_) : _java.util.List_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| start | _int_ |   |
| end | _int_ |   |

##### Retorno

( _java.util.List_ )


---

## newSize

---

#### _imap.newSize() : _int_
##### Retorno

( _int_ )


---

## openFolder

---

#### _imap.openFolder(name: string) : _[IMAP](../../resources/IMAP)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| name | string |   |

##### Retorno

( _[IMAP](../../resources/IMAP)_ )


---

#### _imap.openFolder(name: string, write: _boolean_) : _[IMAP](../../resources/IMAP)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| name | string |   |
| write | _boolean_ |   |

##### Retorno

( _[IMAP](../../resources/IMAP)_ )


---

## setConfig

---

#### _imap.setConfig(config: _[IMAPConfig](../../objects/IMAPConfig)_) : _[IMAP](../../resources/IMAP)_
##### Descrição

Define outra configuração que deve ser utilizada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| config | _[IMAPConfig](../../objects/IMAPConfig)_ | Definição da nova configuração. |

##### Retorno

( _[IMAP](../../resources/IMAP)_ )

Objeto IMAP atual.

---

## setEnabled

---

#### _imap.setEnabled(ativo: _boolean_) : _[IMAP](../../resources/IMAP)_
##### Descrição

Define se está habilitado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| ativo | _boolean_ | Se fica ativo ou inactivo. |

##### Retorno

( _[IMAP](../../resources/IMAP)_ )

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

#### _imap.with(smtp: _[SMTP](../../resources/SMTP)_) : _[IMAP](../../resources/IMAP)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| smtp | _[SMTP](../../resources/SMTP)_ |   |

##### Retorno

( _[IMAP](../../resources/IMAP)_ )


---

