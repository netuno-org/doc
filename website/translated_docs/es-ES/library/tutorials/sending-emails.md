---
id: sending-emails
title: Envio de Emails
sidebar_label: Envio de Emails
---
## Antes de começar
Antes de proceder certifique-se que que tem noções básicas em _**JavaScript**_.

## Enviar emails com o Netuno

Com o Netuno é muito simples enviar emails, seja com anexos ou imagens embutidas no próprio conteúdo (útil no caso de assinaturas).

A aplicação que vem com o Netuno denominada **demo** (aplicação de demonstração) contém bastantes exemplos das possíveis implementações de código em várias linguagens, incluindo a demonstração de envio de emails através do serviço `mail-send` que se localiza em:

<!--DOCUSAURUS_CODE_TABS-->
<!--Groovy-->
```plaintext
web/apps/demo/server/services/samples/groovy/mail-send.groovy
```
<!--JavaScript-->
```plaintext
web/apps/demo/server/services/samples/javascript/mail-send.js
```
<!--Kotlin-->
```plaintext
web/apps/demo/server/services/samples/kotlin/mail-send.kts
```
<!--Python-->
```plaintext
web/apps/demo/server/services/samples/python/mail-send.py
```
<!--Ruby-->
```plaintext
web/apps/demo/server/services/samples/ruby/mail-send.rb
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Configuração
O primeiro passo será configurar a conta SMTP que o Netuno irá utilizar para o envio de emails.

Para o fazer navegue, dentro da aplicação que está a desenvolver, até ao ficheiro de configuração de ambiente. Neste exemplo iremos utilizar o ficheiro de ambiente de desenvolvimento localizado em:

* `config/_development.json`

No fim do ficheiro de configuração (em formato JSON) adicione os parâmetros de configuração do SMTP:

```json
{
    ...,
    "smtp": {
        "default": {
            "enabled": true,
            "host": "smtp.gmail.com",
            "port": 465,
            "ssl": true,
            "username": "*****@gmail.com",
            "password": "*****"
        }
    }
    ...
}
```

Caso esteja a configurar para Gmail substitua apenas os asteriscos pelas suas credenciais e ative a conexão SMTP nas configurações da sua conta Gmail. Caso contrário substitua todos os parâmetros pelos da sua conta SMTP.

Após guardar as alterações, basta reiniciar o Netuno para assumir as alterações da configuração. Sendo estas as configurações padrão para envio de emails como indica o nome `default`.

```json
...
    "default": {
        ...
    }
...
```

Pode adicionar mais contas de SMTP, mas apenas uma poderá ser definida como padrão.

Para adicionar mais contas de SMTP basta repetir o bloco de configuração do SMTP padrão e trocar o nome `default` por um outro nome à sua escolha, como por exemplo:

```json
{
    ...,
    "smtp": {
        "default": {
            "enabled": true,
            "host": "smtp.gmail.com",
            "port": 465, "ssl": true,
            "username": "*****@gmail.com",
            "password": "*****"
        },
        "test": {
            "enabled": true,
            "host": "smtp.gmail.com",
            "port": 465,
            "ssl": true,
            "username": "*****@gmail.com",
            "password": "*****"
        }
    }
    ...
}
```

Uma configuração semelhante ao exemplo acima vai permitir utilizar a conta `default` quando for chamada da seguinte forma no código:

```javascript
var smtp = _smtp.init()
```

E para utilizar a configuração `test` basta adicionar o nome da configuração como parâmetro à função `_smtp.init()` da seguinte forma:

```javascript
var smtp = _smtp.init("test")
```

> Se não adicionar um nome de configuração como parâmetro será utilizada sempre a conta default.

## Código
Vamos agora analizar com atenção o código de exemplo que o Netuno disponibiliza. Neste caso é em JavaScript e é estruturado da seguinte forma:

Inicialização do SMTP:

```javascript
var smtp = _smtp.init()
```

Adicionando `.to` à variável smtp define-se o endereço do destinatário do email, no caso de múltiplos destinatários basta separar por ‘;‘ ou ‘,‘:

```javascript
smtp.to = '*****@gmail.com'
```

Adicionando `.from` define-se o endereço do remetente do email:

```javascript
smtp.from = '*****@gmail.com'
```

Adicionando `.cc` define-se o endereço de destinatários em cópia do email, no caso de múltiplos destinatários em cópia basta separar por ‘;‘ ou ‘,‘:

```javascript
smtp.cc = '*****@gmail.com'
```

O mesmo se sucede para `.bcc` em que se define os destinatários em cópia mas de forma oculta:

```javascript
smtp.bcc = '*****@gmail.com'
```

Adicionado `.subject` define-se o assunto do email:

```javascript
smtp.subject = 'Test from Netuno'
```

Adicionado `.text` define-se o conteúdo em pleno texto:

```javascript
smtp.text = 'Did you receive this email?'
```

Adicionando `.html` define-se o conteúdo do mail em HTML:

```javascript
smtp.html = '<div>'
smtp.html += '<img src="cid:logo" width="200" />'
smtp.html += '<p>Did you receive this email?</p>'
smtp.html += '</div>'
```

Para adicionar uma imagem como anexo adiciona-se (como exemplificado acima), no HTML, `.cid`: ao `src` da imagem.

Para se adicionar a imagem anexada ao email adiciona-se `.attachment` à variável smtp da seguinte forma:

```javascript
smtp.attachment(
    "logo.png", // Ficheiro
    "image/png", // Formato do ficheiro
    _storage.filesystem("server", "samples/mail", "logo.png").file(), // Localização do ficheiro
    "logo" // Nome da variável definida em .cid:
)   
```

> Note que .cid: é apenas necessário para embutir imagens no conteúdo HTML do email.

Para se adicionar um anexo sem ser embutido no HTML (caso de documentos) procede-se da seguinte forma:

```javascript
smtp.attachment(
    "doc.text",
    "text/plain",
    _storage.filesystem("server", "samples/mail", "doc.txt").file()
)   
```

Por fim para submeter o envio do email basta inserir o seguinte código:

```javascript
smtp.send()
```

Por fim, se tudo tiver configurado corretamente, irá receber um email semelhante ao seguinte:

![envio-emails1.png](assets/envio-emails1.png)

> Note que consoante o seu cliente de email poderá diferenciar da imagem acima.

## Configurações Avançadas

As configurações de ambiente `config/_*.json` permitem muitas mais configurações avançadas.

As propriedades do `smtp` utilizadas no código como `.from`, `.to`, `.cc`, `.bcc`, `.subject`, `.text` e `.html`, podem ser definidas na configuração para ficarem pré-definidas por padrão da seguinte forma:

```json
...
    "default": {
        ...
        "from": "*****@gmail.com",
        "to": "*****@gmail.com",
        "cc": "*****@gmail.com",
        "bcc": "*****@gmail.com",
        "subject": "Título padrão...",
        "text": "Conteúdo padrão... ok!",
        "html": "<p>Conteúdo padrão... <b>ok!</b></p>"
        ...
    }
...
```

> Pré definir o .from é bastante útil já que normalmente o envio de mails é feito sempre a partir do mesmo endereço.

Também são possíveis outras configurações. Segue-se uma lista completa das mesmas:

| PARÂMETRO    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| `enabled`     | boolean | true | Ativa e desativa o envio de mail. |
| `debug` | boolean | false | Habilita o modo debug, o que vai apresentar mensagens que detalha a comunicação com o servidor. |
| `protocol` | string |  | Define o tipo de protocolo, smtp ou smtps. |
| `host` | string |  | Nome ou IP do servidor de SMTP. |
| `port` | integer | 465 | Número da porta do servidor SMTP. |
| `ssl` | boolean | true | Ativa o SSL. |
| `tls` | boolean | false | Ativa o TLS |
| `socketFactoryFallback` | boolean | true | Se falhar a geração do Socket então será utilizado o socket nativo java.net.Socket. |
| `socketFactoryClass` | string |  | Define uma classe que implementa a interface javax.net.SocketFactory que será utilizada para gerar os socket para o SMTP. |
| `socketFactoryPort` | integer |  | Define a porta que deve ser utilizada pelos sockets. |
| `quitWait` | boolean | false | Se ativado aguarda a resposta do servidor após o comando QUIT, se desativado desliga logo a conexão com o servidor após o comando QUIT. |
| `authMechanisms` | string |  | Lista de mecanismo de autênticação, por padrão é “LOGIN PLAIN DIGEST-MD5 NTLM”, assim suporta todos os mecanismos. |
| `authNTLMDomain` | string |  | Domínio de autenticação do NTLM. |
| `username` | string |  | Define o utilizador na autenticação com o servidor. |
| `html` | string |  | Conteúdo em HTML do e-mail. |
| `password` | string |  | Define a palavra-passe na autenticação com o servidor. |
| `from` | string |  | Endereço de e-mail de quem envia. |
| `to` | string |  | Endereço de e-mail de quem deve receber, pode ser acrescentado mais mails separados por “;” ou “,”. |
| `cc` | strinf |  | Endereço de e-mail de quem deve receber uma cópia, pode ser acrescentado mais mails separados por “;” ou “,”. |
| `bcc` | string |  | Endereço de e-mail de quem deve receber uma cópia oculta, pode ser acrescentado mais mails separados por “;” ou “,”. |
| `subjectPrefix` |  | string | Define um prefixo ao título do e-mail, assim garante que todos os mails enviados tem o prefixo. |
| `subject` | string |  | Assunto do e-mail. |
| `text` | string |  | Conteúdo em texto do e-mail em pleno texto. |

Caso tenha alguma questão não hesite em contactar-nos através dos meios apresentados no fim da página.

Bom desenvolvimento!
