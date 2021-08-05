---
id: proteu
title: Proteu
sidebar_label: Proteu
---
Nos links abaixo tem toda a informação acerca de cada função da variável Proteu. Uma breve descrição, como utilizar e tudo acerca dos atributos e o que retorna.

## getRequestAll

_proteu.**getRequestAll**(): _Values_

#### Descrição

Toda a informação recebida num pedido HTTP do browser, incluí todos os parâmetros de GET, POST e Header.

#### Como usar

```javascript
// GET
var queryStringID = _proteu.getRequestAll().getInt('id');
// POST
var formConfirm = _proteu.getRequestAll().getBoolean('check');
// HEADER
var browserLanguage = _proteu.getRequestAll().getString('Accept-Language')
```

#### Retorno

(_Values_)

Values é uma espécie de dicionário (array com chaves associadas aos objetos em vez de index) com funcionalidades mais avançadas.

## getRequestPost

_proteu.**getRequestPost**(): _Values_

#### Descrição
Obter os parâmetros enviados por POST.

#### Como usar

```javascript
var name = _proteu.getRequestPost().getBoolean('name');
var age = _proteu.getRequestPost().getBoolean('age');
var confirm = _proteu.getRequestPost().getBoolean('check');
```

#### Retorno
(_Values_)

Values é uma espécie de dicionário (array com chaves associadas aos objetos em vez de index) com funcionalidades mais avançadas.


## getRequestGet

_proteu.**getRequestGet**(): _Values_

#### Descrição
Apenas os parâmetros enviados por GET na URL (QueryString).

#### Como usar

```javascript
var name = _proteu.getRequestGet().getBoolean('name');
var age = _proteu.getRequestGet().getBoolean('age');
var confirm = _proteu.getRequestGet().getBoolean('check');
```

#### Retorno
(_Values_)

Values é uma espécie de dicionário (array com chaves associadas aos objetos em vez de index) com funcionalidades mais avançadas.


## getRequestHeader

_proteu.**getRequestHeader**(): _Values_

#### Descrição

Apenas os parâmetros enviados no HEADER do pedido do browser.

#### Como usar

```javascript
var language = _proteu.getRequestHeader().getString('Accept-Language');
var fullURL = _proteu.getRequestHeader().getBoolean('URL');
var httpMethod = _proteu.getRequestHeader().getBoolean('Method');
```

#### Retorno
(_Values_)

Values é uma espécie de dicionário (array com chaves associadas aos objetos em vez de index) com funcionalidades mais avançadas.


## getSession

_proteu.**getSession**(): _Values_

#### Descrição

Manipula a informação armazenada em sessão.

#### Como usar

```javascript
// Adicionar objetos na sessão:
_proteu.getSession().set('user_id', '123');
// Obter objectos armazenados em sessão:
var userId = _proteu.getSession().getInt('user_id');
```

#### Retorno
(_Values_)

Values é uma espécie de dicionário (array com chaves associadas aos objetos em vez de index) com funcionalidades mais avançadas.


## getOutput

_proteu.**getOutput**(): _OutputStream_

#### Descrição
Envia dados como resposta ao pedido, por exemplo o conteúdo HTML, bytes que representam um ficheiro, objeto JSON, etc…

#### Como usar

```javascript
// Envia um número:
_proteu.getOutput().print(1);
// Envia uma linha:
_proteu.getOutput().println('Uma linha...');
// Certifica que envia toda a informação caso esteja em buffer:
_proteu.getOutput().flush();
// Fecha a saída de dados:
_proteu.getOutput().close();
```

#### Retorno
(_OutputStream_)

Canal de saída de dados.

## getResponseHeader
_proteu.**getResponseHeader**(): _Values_

#### Descrição
Manipula a informação do HEADER HTTP que é devolvida como resposta ao pedido do browser.

#### Como usar

```javascript
// Envia um redirecionamento:
_proteu.getResponseHeader().set('Location', '/Index.proteu');
_proteu.close();
```

#### Retorno
(_Values_)

Values é uma espécie de dicionário (array com chaves associadas aos objetos em vez de index) com funcionalidades mais avançadas.


## setResponseHeaderNoCache
_proteu.**setResponseHeaderNoCache**(): _void_

#### Descrição

Garante que o browser não irá fazer cache do conteúdo que irá ser emitido.

Esta funcionalidade tem de ser executada antes de gerar qualquer saída de dados.

#### Como usar

```javascript
// Adicionar objetos na sessão:
_proteu.setResponseHeaderNoCache();
_proteu.getOutput().println(new Date().getTime());
```

## setResponseHeaderStatus

_proteu.**setResponseHeaderStatus**(codigoHTTP : _int_): _void_

#### Descrição
O tipo de resposta que será dada.

#### Como usar

```javascript
// Responde que nada foi encontrado
_proteu.setResponseHeaderStatus(404);
_proteu.getOutput().println('Não encontrado...');
_proteu.close();
```

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| codigoHTTP     | string | obrigatório | Tipo de resposta HTTP: <br> 200 - OK <br> 201 - Created <br> 202 - Accepted <br> 204 - No Content <br> 300 - Multiple Choices <br> 301 - Moved Permanently <br> 302 - Moved Temporarily <br> 304 - Not Modified <br> 400 - Bad Request <br> 401 - Unauthorized <br> 403 - Forbidden <br> 404 - Not Found <br> 500 - Internal Server Error <br> 501 - Not Implemented <br> 502 - Bad Gateway <br> 503 - Service Unavailable |

## setResponseHeaderContentType

_proteu.**setResponseHeaderContentType**(tipoConteudo : _string_): _void_

#### Descrição

Define o tipo de conteúdo que será respondido.

#### Como usar

```javascript
// Basta informar a extensão:
_proteu.setResponseHeaderContentType('txt');
_proteu.getOutput().println('Texto simples...');
_proteu.close();
// Ou, também pode passar a informação completa:
_proteu.setResponseHeaderContentType('text/plain');
_proteu.getOutput().println('Texto simples...');
_proteu.close();
```

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| tipoConteudo     | string | obrigatório | Tipo de conteúdo suportado: <br> aac - audio/aac <br> abw - application/x-abiword <br> arc - application/octet-stream <br> avi - video/x-msvideo <br> azw - application/vnd.amazon.ebook <br> bin - application/octet-stream <br> bz - application/x-bzip <br> bz2 - application/x-bzip2 <br> csh - application/x-csh <br> css - text/css <br> csv - text/csv <br> doc - application/msword <br> docx - application/vnd.openxmlformats-officedocument.wordprocessingml.document <br> eot - application/vnd.ms-fontobject <br> epub - application/epub+zip <br> es - application/ecmascript <br> gif - image/gif <br> htm - text/html <br> html - text/html <br> ico - image/x-icon <br> ics - text/calendar <br> jar - application/java-archive <br> jpeg - image/jpeg <br> jpg - image/jpeg <br> js - application/javascript <br> son - application/json <br> mid - audio/midi <br> midi - audio/midi <br> mpeg - video/mpeg <br> mpkg - application/vnd.apple.installer+xml <br> odp - application/vnd.oasis.opendocument.presentation <br> ods - application/vnd.oasis.opendocument.spreadsheet <br> odt - application/vnd.oasis.opendocument.text <br> oga - audio/ogg <br> ogv - video/ogg <br> ogx - application/ogg <br> otf - font/otfvpng - image/png <br> pdf - application/pdf <br> plain - text/plain <br> ppt - application/vnd.ms-powerpoint <br> pptx - application/vnd.openxmlformats-officedocument.presentationml.presentation <br> rar - application/x-rar-compressed <br> rtf - application/rtf <br> sh - application/x-sh <br> svg - image/svg+xml <br> swf - application/x-shockwave-flash <br> tar - application/x-tar <br> tif - image/tiff <br> tiff - image/tiff <br> ts - application/typescript <br> ttf - font/ttf <br> text - text/plain <br> txt - text/plain <br> vsd - application/vnd.visio <br> wav - audio/wav <br> weba - audio/webm <br> webm - video/webm <br> webp - image/webp <br> woff - font/woff <br> woff2 - font/woff2 <br> xhtml - application/xhtml+xml <br> xls - application/vnd.ms-excel <br> xlsx - application/vnd.openxmlformats-officedocument.spreadsheetml.sheetv<br>xml - application/xml <br> xul - application/vnd.mozilla.xul+xml <br> zip - application/zip <br> 3gp - video/3gpp <br> 3g2 - video/3gpp2 <br> 7z - application/x-7z-compressed |


## outputJSON

Na função outputJson existem 3 tipos de funções com retornos diferentes.

* outputJSON( json : _string_ )
* outputJSON( objeto : _values_, htmlEscape = _false_ : _boolean_ )
* outputJSON( listaObjetos : _[Values, … ]_, htmlEscape = _false_ : _boolean_ )

_proteu.**outputJSON**(json : _string_): _void_

#### Descrição

Escreve um texto em formato JSON na saída de dados.

#### Como usar

```javascript
// Escreve uma string como JSON:
_proteu.outputJSON('{ result: true }');
```

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| json     | string | obrigatório | Conteúdo em formato JSON que será enviado. |


_proteu.**outputJSON**(objeto : _values_, htmlEscape = _false_ : _boolean_): _void_

#### Descrição

Escreve um objeto em formato JSON na saída de dados.

#### Como usar

```javascript
// Escreve um objeto como JSON:
_proteu.outputJSON({ result: true });
```

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| valores     | Values | obrigatório | O dicionário deverá ser convertido em objeto JSON e escrito na saída de dados. |
| htmlEscape | boolean | false | Se os valores deverão ser convertido para HTML, para codificar caracteres especiais. |

_proteu.**outputJSON**(listaObjetos : _[Values, … ]_, htmlEscape = _false_ : _boolean_): _void_

#### Descrição

Escreve uma lista de objetos em formato JSON na saída de dados.

#### Como usar

```javascript
// Escreve uma lista de objetos como JSON:
_proteu.outputJSON([{ x: 1, y: 2 }, { x: 2, y: 4 }]);
```

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| listaObjetos     | [ Values ] | obrigatório | O dicionário deverá ser convertido em objeto JSON e escrito na saída de dados. |
| htmlEscape | boolean | false | Se os valores deverão ser convertido para HTML, para codificar caracteres especiais. |


## htmlEscape
_proteu.**htmlEscape**(texto : _string_): _string_

#### Descrição

Converte os caracteres especiais em codificação HTML.

#### Como usar

```javascript
// Caracteres especiais codificados em HTML:
_proteu.getOutput().println(_proteu.htmlEscape('<a href="#">link</a>'));
```

#### Resultado
```html
<a href="#">ação</a>
```


#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| texto     | string | obrigatório | Conteúdo que será convertido para codificação HTML. |

#### Retorno
(_string_)

Conteúdo convertido em codificação HTML.


## htmlUnescape
_proteu.**htmlUnescape**(texto : _string_): _string_

#### Descrição

Interpreta o código HTML e retorna o conteúdo interpretado.

#### Como usar

```javascript
// Escreve uma string como JSON:
_proteu.getOutput().println(_proteu.htmlUnescape('<a href="#">ação</a>'));
```

#### Resultado
```html
<a href="#">ação</a>
```

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| texto     | string | obrigatório | Codigo HTML para ser interpretado |

#### Retorno

(_string_)

Resultado da interpretação dos conteúdo com HTML.

## javaEscape
_proteu.**javaEscape**(texto : _string_): _string_

#### Descrição

Converte os caracteres especiais para codificação Java em Unicode.

#### Como usar

```javascript
// Caracteres especiais codificados em Java Unicode:
_proteu.getOutput().print(_proteu.javaEscape('ação'));
```

#### Resultado

```plaintext
a\u00E7\u00E3o
```

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| texto     | string | obrigatório | Conteúdo que será codificado os caracteres especiais em Java Unicode |

#### Retorno
(_string_)

Conteúdo convertido para a codificação Java em Unicode.

## javaUnescape
_proteu.**javaUnescape**(texto : _string_): _string_

#### Descrição

Repõe o caracter original da codificação Java em Unicode.

#### Como usar

```javascript
_proteu.setResponseHeaderContentType('text');
_proteu.getOutput().println(_proteu.htmlUnescape('a\u00E7\u00E3o'));
```

#### Resultado

```plaintext
ação
```

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| texto     | string | obrigatório | 	Texto com texto codificado em Java Unicode |

#### Retorno
(_string_)

Resultado da transformação para os caracteres originais correspondentes a descodificação do Java em Unicode.

## urlEncoder
_proteu.**urlEncoder**(texto : _string_): _string_

#### Descrição
Converte os caracteres especiais para codificação de URL.

#### Como usar

```javascript
// Caracteres especiais são transformados em formato URL:
_proteu.getOutput().print(_proteu.urlEncoder('ação'));
```

#### Resultado

```plaintext
a%C3%A7%C3%A3o
```

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| texto     | string | obrigatório | 	Os caracteres especiais do conteúdo serão codificados em formato URL |

#### Retorno
(_string_)

Conteúdo convertido para ser utilizado em URL.


## urlDecoder
_proteu.**urlDecoder**(texto : _string_): _string_

#### Descrição
Repõe o caracter original do que está codificado em URL.

#### Como usar

```javascript
// Recupera os caracteres originais da codificação em URL:
_proteu.setResponseHeaderContentType('text');
_proteu.getOutput().println(_proteu.urlDecoder('a%C3%A7%C3%A3o'));
```

#### Resultado

```plaintext
ação
```

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| texto     | string | obrigatório | Texto codificado em URL |

#### Retorno
(_string_)

Resultado da transformação dos caracteres orginais depois de descodificados.


## close
_proteu.**close**(): _void_

#### Descrição

Envia o que está pendente na saída de dados e fecha a conexão.

#### Como usar

```javascript
// Fecha a conexão
_proteu.close();
```

## newValues
_proteu.**newValues**(valores = _null_ : _object_): _Values_

#### Descrição

Cria uma nova instância do Values (dicionário de chaves e valores mais avançado).

[ + Informações sobre o Values na sua documentação detalhada aqui. ]
??????

#### Como usar

```javascript
// Calcula a temperatura média de Netuno
var planeta = _proteu.newValues();
planeta.set('nome', 'Netuno');
planeta.set('minima', '-199');
planeta.set('maxima', '-223');
var media = (planeta.getInt('minima') + planeta.getInt('maxima')) / 2;
_proteu.getOutput().println(planeta.getString('nome') +': '+ media);
var satelites = _proteu.newValues({
    nome: 'Netuno',
    satelites: 14
});
planeta.merge(satelites);
if (planeta.hasKey('satelites')) {
    _proteu.getOutput().println(planeta['nome'] +': '+ planeta['satelites']);
}
```

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| valores     | object | Opcional | Cria um novo objeto do tipo Values, importando os seus dados. |

#### Retorno
(_Values_)

Uma nova instância de objeto do tipo Values que permite associar chaves a valores.
