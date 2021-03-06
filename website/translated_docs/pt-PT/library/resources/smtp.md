---
id: smtp
title: SMTP
sidebar_label: SMTP
---

Recurso de envio de e-mail por SMTP.

---

## attachment

---

#### _smtp.attachment(nome: string, tipo: string, ficheiro: _[File](../../objects/File)_) : _SMTP_
##### Descrição

Adiciona ficheiro de anexo ao e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| nome | string | O nome do anexo. |
| tipo | string | O tipo de conteúdo do anexo, por exemplo image/png, text/html, application/zip, e muitos outros... |
| ficheiro | _[File](../../objects/File)_ | O ficheiro. |

##### Retorno

( _SMTP_ )

Objeto SMTP atual.

---

#### _smtp.attachment(nome: string, tipo: string, ficheiro: _[File](../../objects/File)_, idConteudo: string) : _SMTP_
##### Descrição

Adiciona ficheiro de anexo ao e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| nome | string | O nome do anexo. |
| tipo | string | O tipo de conteúdo do anexo, por exemplo image/png, text/html, application/zip, e muitos outros... |
| ficheiro | _[File](../../objects/File)_ | O ficheiro. |
| idConteudo | string | O ID do anexo para ser utilizado no conteúdo HTML como `<img src="cid:anexo"/>`. |

##### Retorno

( _SMTP_ )

Objeto SMTP atual.

---

#### _smtp.attachment(nome: string, tipo: string, ficheiro: _[File](../../objects/File)_, idConteudo: string, emLinha: _boolean_) : _SMTP_
##### Descrição

Adiciona ficheiro de anexo ao e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| nome | string | O nome do anexo. |
| tipo | string | O tipo de conteúdo do anexo, por exemplo image/png, text/html, application/zip, e muitos outros... |
| ficheiro | _[File](../../objects/File)_ | O ficheiro. |
| idConteudo | string | O ID do anexo para ser utilizado no conteúdo HTML como `<img src="cid:anexo"/>`. |
| emLinha | _boolean_ | Se é ou não para ser injetado no conteúdo. |

##### Retorno

( _SMTP_ )

Objeto SMTP atual.

---

## config

---

#### _smtp.config(config: _[Values](../../objects/Values)_) : _[SMTPConfig](../../objects/SMTPConfig)_
##### Descrição

Inicia uma nova configuração própria.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| config | _[Values](../../objects/Values)_ | Estrutura de dados da definição da configuração. |

##### Retorno

( _[SMTPConfig](../../objects/SMTPConfig)_ )

Objeto de configuração carregada a partir dos dados recebidos.

---

## getBcc

---

#### _smtp.getBcc() : string
##### Descrição

Obtém quem recebe uma cópia escondida do e-mail.

##### Retorno

( string )

O e-mail de quem vai receber o e-mail como cópia oculta.

---

## getCc

---

#### _smtp.getCc() : string
##### Descrição

Obtém quem recebe uma cópia do e-mail.

##### Retorno

( string )

O e-mail de quem vai receber o e-mail como cópia.

---

## getConfig

---

#### _smtp.getConfig() : _[SMTPConfig](../../objects/SMTPConfig)_
##### Descrição

Obtém a configuração que está a ser utilizada.

##### Retorno

( _[SMTPConfig](../../objects/SMTPConfig)_ )

Objeto da configuração ativa.

---

## getFrom

---

#### _smtp.getFrom() : string
##### Descrição

Obtém o endereço do remetente do e-mail.

##### Retorno

( string )

O endereço de e-mail de quem envia.

---

## getHTML

---

#### _smtp.getHTML() : string
##### Descrição

Obtém o HTML do corpo do e-mail.

##### Retorno

( string )

O HTML que vai ir no e-mail.

---

## getMultipartSubtype

---

#### _smtp.getMultipartSubtype() : string
##### Descrição

Obtém o subtipo do multipart como por exemplo `mixed`, `alternative`, `digest` e `parallel`.

##### Retorno

( string )

O subtipo do multipart.

---

## getSubject

---

#### _smtp.getSubject() : string
##### Descrição

Obtém o título do e-mail.

##### Retorno

( string )

O título que vai ir no e-mail.

---

## getSubjectPrefix

---

#### _smtp.getSubjectPrefix() : string
##### Descrição

Obtém o prefixo do título do e-mail.

##### Retorno

( string )

O prefixo do título que vai ir no e-mail.

---

## getText

---

#### _smtp.getText() : string
##### Descrição

Obtém o texto do corpo do e-mail.

##### Retorno

( string )

O texto que vai ir no e-mail.

---

## getTo

---

#### _smtp.getTo() : string
##### Descrição

Obtém o endereço de destinatário do e-mail.

##### Retorno

( string )

O endereço de e-mail de quem recebe.

---

## init

---

#### _smtp.init() : _SMTP_
##### Descrição

Inicia uma nova instância do SMTP utilizando a configuração do STMP da chave `default`.

##### Retorno

( _SMTP_ )

A nova instância do recurso SMTP com base na configuração do STMP `default`.

---

#### _smtp.init(configKey: string) : _SMTP_
##### Descrição

Inicia uma nova instância do SMTP a partir de uma configuração específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| configKey | string | Chave da configuração SMTP que será utilizada. |

##### Retorno

( _SMTP_ )

A nova instância do recurso SMTP com base na configuração do SMTP especificada.

---

#### _smtp.init(config: _[SMTPConfig](../../objects/SMTPConfig)_) : _SMTP_
##### Descrição

Inicia uma nova instância do SMTP a partir de uma configuração que é definida em um objeto de configuração própria.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| config | _[SMTPConfig](../../objects/SMTPConfig)_ | Configuração que será utilizada. |

##### Retorno

( _SMTP_ )

A nova instância do recurso SMTP com base na configuração definida.

---

## isEnabled

---

#### _smtp.isEnabled() : _boolean_
##### Descrição

Verifica se está habilitado.

##### Retorno

( _boolean_ )

Resultado se está ou não ativado.

---

## send

---

#### _smtp.send() : _void_
##### Descrição

Realiza o envio do e-mail.

##### Retorno

( _void_ )


---

## setBcc

---

#### _smtp.setBcc(bcc: string) : _SMTP_
##### Descrição

Define quem recebe uma cópia escondida do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| bcc | string | O e-mail de quem vai receber o e-mail como cópia oculta. |

##### Retorno

( _SMTP_ )

Objeto SMTP atual.

---

## setCc

---

#### _smtp.setCc(cc: string) : _SMTP_
##### Descrição

Define quem recebe uma cópia do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| cc | string | O e-mail de quem vai receber o e-mail como cópia. |

##### Retorno

( _SMTP_ )

Objeto SMTP atual.

---

## setConfig

---

#### _smtp.setConfig(config: _[SMTPConfig](../../objects/SMTPConfig)_) : _SMTP_
##### Descrição

Define outra configuração que deve ser utilizada.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| config | _[SMTPConfig](../../objects/SMTPConfig)_ | Definição da nova configuração. |

##### Retorno

( _SMTP_ )

Objeto SMTP atual.

---

## setEnabled

---

#### _smtp.setEnabled(ativo: _boolean_) : _SMTP_
##### Descrição

Define se está habilitado.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| ativo | _boolean_ | Se fica ativo ou inactivo. |

##### Retorno

( _SMTP_ )

Objeto SMTP atual.

---

## setFrom

---

#### _smtp.setFrom(de: string) : _SMTP_
##### Descrição

Define o endereço do remetente do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| de | string | O endereço de e-mail de quem envia. |

##### Retorno

( _SMTP_ )

Objeto SMTP atual.

---

## setHTML

---

#### _smtp.setHTML(html: string) : _SMTP_
##### Descrição

Define o HTML do corpo do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| html | string | O HTML que vai ir no e-mail. |

##### Retorno

( _SMTP_ )

Objeto SMTP atual.

---

## setMultipartSubtype

---

#### _smtp.setMultipartSubtype(multipartSubtipo: string) : _SMTP_
##### Descrição

Define o subtipo do multipart como por exemplo `mixed`, `alternative`, `digest` e `parallel`.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| multipartSubtipo | string | O subtipo do multipart. |

##### Retorno

( _SMTP_ )

Objeto SMTP atual.

---

## setSubject

---

#### _smtp.setSubject(titulo: string) : _SMTP_
##### Descrição

Define o título do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| titulo | string | O título que vai ir no e-mail. |

##### Retorno

( _SMTP_ )

Objeto SMTP atual.

---

## setSubjectPrefix

---

#### _smtp.setSubjectPrefix(tituloPrefixo: string) : _SMTP_
##### Descrição

Define o prefixo do título do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tituloPrefixo | string | O prefixo do título que vai ir no e-mail. |

##### Retorno

( _SMTP_ )

Objeto SMTP atual.

---

## setText

---

#### _smtp.setText(texto: string) : _SMTP_
##### Descrição

Define o texto do corpo do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| texto | string | O texto que vai ir no e-mail. |

##### Retorno

( _SMTP_ )

Objeto SMTP atual.

---

## setTo

---

#### _smtp.setTo(para: string) : _SMTP_
##### Descrição

Define o endereço do destinatário do e-mail.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| para | string | O endereço de e-mail de quem recebe. |

##### Retorno

( _SMTP_ )

Objeto SMTP atual.

---

