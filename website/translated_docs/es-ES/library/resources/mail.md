---
id: smtp
title: SMTP
sidebar_label: SMTP
---
Nos links abaixo tem toda a informação acerca de cada função da variável `_smtp`. Uma breve descrição, como utilizar e tudo acerca dos atributos e o que retorna.

## init

_smtp.**init**(nomeContaSMTP : _string_): _void_

#### Descrição

Inicia a conta SMTP previamente configurada.
Por predefinição inicia a conta 'default'.

#### Como usar

```javascript
// Iniciar smtp
var smtp = _smtp.init();
```

## enabled

_smtp.**enabled**(valor = _true_ : _boolean_): _void_

#### Descrição

Ativa e desativa o envio de emails.

#### Como usar

```javascript
// Iniciar smtp
var smtp = _smtp.init();
// Ativar
smtp.enabled(true);
// Desativar
smtp.enabled(false);
```

## debug

_smtp.**debug**(valor = _false_ : _boolean_): _void_

#### Descrição

Habilita o modo debug, o que vai apresentar mensagens que detalham a comunicação com o servidor.

#### Como usar

```javascript
// Iniciar smtp
var smtp = _smtp.init();
// Ativar
smtp.debug(true);
// Desativar
smtp.debug(false);
```

## protocol

_smtp.**protocol**(nomeProtocolo : _string_): _void_

#### Descrição

Define o tipo de protocolo, smtp ou smtps.

#### Como usar

```javascript
// Iniciar smtp
var smtp = _smtp.init();
// usar protocolo smtp
smtp.protocol("smtp");
// usar protocolo smtps
smtp.protocol("smtps");
```

## host

_smtp.**host**(nomeProtocolo : _string_): _void_

#### Descrição

Nome ou IP do servidor de SMTP.

#### Como usar

```javascript
// Iniciar smtp
var smtp = _smtp.init();
// Definir o nome do host gmail
smtp.host("smtp.gmail.com");
```

## port

_smtp.**port**(numeroPorta = _465_ : _int_): _void_

#### Descrição

Número da porta do servidor SMTP.

#### Como usar

```javascript
// Iniciar smtp
var smtp = _smtp.init();
// Definir a porta 587
smtp.port(587);
```

## ssl

_smtp.**ssl**(usaSSL = _true_ : _boolean_): _void_

#### Descrição

Ativa ou desativa o SSL.

#### Como usar

```javascript
// Iniciar smtp
var smtp = _smtp.init();
// Ativar ssl
smtp.ssl(true);
// Desativar ssl
smtp.ssl(false);
```

## tls

_smtp.**tls**(usaTLS = _false_ : _boolean_): _void_

#### Descrição

Ativa ou desativa o TLS.

#### Como usar

```javascript
// Iniciar smtp
var smtp = _smtp.init();
// Ativar tls
smtp.tls(true);
// Desativar tls
smtp.tls(false);
```

## socketFactoryFallback

_smtp.**socketFactoryFallback**(usaSocketNativo = _true_ : _boolean_): _void_

#### Descrição

Se falhar a geração do Socket então será utilizado o socket nativo java.net.Socket.

#### Como usar

```javascript
// Iniciar smtp
var smtp = _smtp.init();
// Ativar funcionalidade
smtp.socketFactoryFallback(true);
// Desativar funcionalidade
smtp.socketFactoryFallback(false);
```

## socketFactoryClass

_smtp.**socketFactoryClass**(nomeClasse : _string_): _void_

#### Descrição

Define uma classe que implementa a interface `javax.net.SocketFactory` que será utilizada para gerar os socket para o SMTP.

#### Como usar

```javascript
// Iniciar smtp
var smtp = _smtp.init();
// Utiliza a classe "SocketAlternativo"
smtp.socketFactoryClass("SocketAlternativo");
```

## socketFactoryPort

_smtp.**socketFactoryPort**(numeroPorta : _int_): _void_

#### Descrição

Define a porta que deve ser utilizada pelos sockets.

#### Como usar

```javascript
// Iniciar smtp
var smtp = _smtp.init();
// Utiliza a porta 587
smtp.socketFactoryPort(587);
```

## quitWait

_smtp.**quitWait**(aguardaResposta = _false_ : _boolean_): _void_

#### Descrição

Se ativado aguarda a resposta do servidor após o comando QUIT, se desativado desliga logo a conexão com o servidor após o comando QUIT.

#### Como usar

```javascript
// Iniciar smtp
var smtp = _smtp.init();
// Ativar funcionalidade
smtp.quitWait(true);
// Desativar funcionalidade
smtp.quitWait(false);
```

## authMechanisms

_smtp.**authMechanisms**(listaMecanismo = _"LOGIN PLAIN DIGEST-MD5 NTLM"_ : _string_): _void_

#### Descrição

Lista de mecanismos de autenticação.

#### Como usar

```javascript
// Iniciar smtp
var smtp = _smtp.init();
// Utilizar apenas com MD5
smtp.authMechanisms("MD5");
```

## authNTLMDomain

_smtp.**authNTLMDomain**(url : _string_): _void_

#### Descrição

Domínio de autenticação do NTLM.

#### Como usar

```javascript
// Iniciar smtp
var smtp = _smtp.init();
// Utilizar o dominio "www.website.com"
smtp.authNTLMDomain("www.website.com");
```

## username

_smtp.**username**(contaSMTPUtilizador : _string_): _void_

#### Descrição

Define o utilizador na autenticação com o servidor.

#### Como usar

```javascript
// Iniciar smtp
var smtp = _smtp.init();
// Define o "utilizador user@email.com"
smtp.username("user@email.com");
```

## password

_smtp.**password**(contaSMTPPassword : _string_): _void_

#### Descrição

Define a palavra-passe na autenticação com o servidor.

#### Como usar

```javascript
// Iniciar smtp
var smtp = _smtp.init();
// Define a password
smtp.password("veryStrongP@ssword123!");
```

## subjectPrefix

_smtp.**subjectPrefix**(subjectPrefix : _string_): _void_

#### Descrição

Define um prefixo ao título do e-mail, assim garante que todos os mails enviados tem o prefixo.

#### Como usar

```javascript
// Iniciar smtp
var smtp = _smtp.init();
// Define o prefixo "Prefixo - "
smtp.subjectPrefix("Prefixo - ");
```

## attachment

_smtp.**attachment**(nomeFicheiro : _string_, formatoFicheiro : _string_, localizacaoFicheiro : __storage.filesystem("server", localizacaoPastaServer : string, nomeFicheiro : string).file()_): _void_

#### Descrição

Adiciona documentos em anexo ao email a enviar.

#### Como usar

```javascript
// Iniciar smtp
var smtp = _smtp.init();
// Adicionar o ficheiro "doc.txt"
smtp.attachment(
    "doc.text",
    "text/plain",
    _storage.filesystem("server", "samples/mail", "doc.txt").file()
)
```

## attachment (imagem embutida no email)

_smtp.**attachment**(nomeFicheiro : _string_, formatoFicheiro : _string_, localizacaoFicheiro : __storage.filesystem("server", localizacaoPastaServer : string, nomeFicheiro : string).file()_, nomeVariavel = _string_): _void_

#### Descrição

Adiciona imagens embutidas no conteúdo html do email a enviar.

#### Como usar

```javascript
// Iniciar smtp
var smtp = _smtp.init();

// O conteudo html do email tem de ser obrigatoriamente definido anteriormente para embutir a imagem
smtp.html = '<div>'
smtp.html += '<img src="cid:logo" width="200" />'
smtp.html += '<p>Recebeu a imagem acima?</p>'
smtp.html += '</div>'

// Adicionar a imagem "logo.png"
smtp.attachment(
    "logo.png",
    "image/png",
    _storage.filesystem("server", "samples/mail", "logo.png").file(),
    "logo"
)
```

## send

_smtp.**send**(): _void_

#### Descrição

Tenta a sumbissão do envio do email.

#### Como usar

```javascript
// Iniciar smtp
var smtp = _smtp.init();
// Tenta enviar o email
smtp.send();
```

## Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| `html` | string | | Conteúdo em HTML do e-mail.|
| `from` | string | | Endereço de e-mail de quem envia.|
| `to` | string | | Endereço de e-mail de quem deve receber, pode ser acrescentado mais mails separados por “;” ou “,”.|
| `cc` | string | | Endereço de e-mail de quem deve receber uma cópia, pode ser acrescentado mais mails separados por “;” ou “,”.|
| `bcc` | string | | Endereço de e-mail de quem deve receber uma cópia oculta, pode ser acrescentado mais mails separados por “;” ou “,”.|
| `subject` | string | | Assunto do e-mail.|
| `text` | string | | Conteúdo em texto do e-mail em pleno texto.|
