---
id: app
title: App
sidebar_label: App
---

Parametrizações gerais da aplicação.

---

## config

---

#### _app.config() : _[Values](../../objects/Values)_
##### Descrição

Obtém os dados de configuração da aplicação presentes no ficheiro na pasta config.

##### Como Usar

```javascript
// Retorna o nome da app configurada no config/_[ambiente].json

const appName = _app.config().getString("name");
_out.println(`Nome da App: ${appName}`);
```

##### Retorno

( _[Values](../../objects/Values)_ )

Retorna uma estrutura com os parametros de configuração.

---

## file

---

#### _app.file(caminho: string) : _[File](../../objects/File)_
##### Descrição

Processa ficheiros dentro da aplicação.

##### Como Usar

```javascript
// Carrega o caminho completo do Logo:
const logo = _app.file("public/images/logo.png");
_out.println(`<p>Caminho completo do logo: ${logo.fullPath()}</p>`);
// Cria o ficheiro JSON dentro da app em public/data.json:
_app.file("public/data.json").output().writeAndClose(
    _val.map()
        .set("resultado", true)
        .toJSON(2)
)
// Carrega o ficheiro JSON dentro da app em public/data.json:
const jsonFicheiro = _app.file("public/data.json")
if (jsonFicheiro.exists()) {
    const data = _val.fromJSON(
        jsonFicheiro.input().readAllAndClose()
    )
    _out.println(`<p>JSON Resultado: ${data.getString("resultado")}</p>`)
}
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminho | string | Caminho relativo do ficheiro dentro da aplicação. |

##### Retorno

( _[File](../../objects/File)_ )

Retorna o objeto de ficheiro obtido através do caminho.

---

## folder

---

#### _app.folder(caminho: string) : _[File](../../objects/File)_
##### Descrição

Procura os ficheiros presentes na pasta do caminho inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminho | string | Caminho do ficheiro. |

##### Retorno

( _[File](../../objects/File)_ )

Retorna os os ficheiros presentes na pasta do caminho inserido.

---

## isFile

---

#### _app.isFile(caminho: string) : _boolean_
##### Descrição

Verifica se um determinado ficheiro existe.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminho | string | Caminho do ficheiro. |

##### Retorno

( _boolean_ )

Retorna uma verificação boolean da existência do ficheiro e localiza-o.

---

## isFolder

---

#### _app.isFolder(caminho: string) : _boolean_
##### Descrição

Verifica se uma determinada pasta existe no caminho inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminho | string | Caminho da pasta. |

##### Retorno

( _boolean_ )

Retorna uma verificação boolean da existência do ficheiro e localiza a pasta onde se encontra.

---

## name

---

#### _app.name() : string
##### Descrição

Obtém o nome da aplicação.

##### Como Usar

```javascript
const nomeDaApp = _app.name();
```

##### Retorno

( string )

Retorna o nome da aplicação.

---

## pathBase

---

#### _app.pathBase() : string
##### Descrição

Obtém o caminho da aplicação para a diretoria base/home.

##### Como Usar

```javascript
const caminhoRaiz = _app.pathBase();
```

##### Retorno

( string )

Retorna a localização base da aplicação.

---

## pathConfig

---

#### _app.pathConfig() : string
##### Descrição

Obtém o caminho da aplicação para a pasta config.

##### Como Usar

```javascript
const caminhoConfig = _app.pathConfig();
```

##### Retorno

( string )

Retorna a localização da pasta de configuração.

---

## pathHome

---

#### _app.pathHome() : string
##### Descrição

Obtém o caminho da aplicação para a diretoria home/base.

##### Como Usar

```javascript
const caminhoRaiz = _app.pathHome();
```

##### Retorno

( string )

Retorna a localização base da aplicação.

---

## pathPublic

---

#### _app.pathPublic() : string
##### Descrição

Obtém o caminho da aplicação para a pasta public.

##### Como Usar

```javascript
const caminhoPublico = _app.pathPublic();
```

##### Retorno

( string )

Retorna a localização da pasta public.

---

## pathServer

---

#### _app.pathServer() : string
##### Descrição

Obtém o caminho da aplicação para a pasta server.

##### Como Usar

```javascript
const caminhoServer = _app.pathServer();
```

##### Retorno

( string )

Retorna a localização da pasta server.

---

## pathStorage

---

#### _app.pathStorage() : string
##### Descrição

Obtém o caminho da aplicação para a pasta storage.

##### Como Usar

```javascript
const caminhoStorage = _app.pathStorage();
```

##### Retorno

( string )

Retorna a localização da pasta storage.

---

## settings

---

#### _app.settings() : _[Values](../../objects/Values)_
##### Descrição

Obtém os dados de settings da aplicação presentes no ficheiro de config.

##### Como Usar

```javascript
// Retorna as definições customizadas que estão no config/_[ambiente].json
// em ... "settings": { "maxBilhetes": 8 } 

const maxBilhetes = _app.settings().getString("maxBilhetes");
_out.println(`O limite máximo de bilhetes é: ${maxBilhetes}`);
```

##### Retorno

( _[Values](../../objects/Values)_ )

Retorna as definições customizadas.

---

## url

---

#### _app.url() : string
##### Descrição

Obtém o url da aplicação.

##### Como Usar

```javascript
const urlDaApp = _app.url();
```

##### Retorno

( string )

Retorna a URL da aplicação.

---

#### _app.url(arg0: string) : string
##### Descrição

Obtém o prefixo da URL definido na configuração, como um prefixo de URL customizado.

##### Como Usar

```javascript
const urlCustom = _app.url('nome-da-minha-url-configurada');
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |

##### Retorno

( string )

Retorna o prefixo da localização definida na configuração.

---

## urlAdmin

---

#### _app.urlAdmin() : string
##### Descrição

Obtém o url da aplicação para a interface de administração.

##### Como Usar

```javascript
const urlAdmin = _app.urlAdmin();
```

##### Retorno

( string )

Retorna o prefixo da localização de administração.

---

## urlFileSystem

---

#### _app.urlFileSystem() : string
##### Descrição

Obtém o url da aplicação para a pasta filesystem.

##### Como Usar

```javascript
const fsURL = _app.urlFileSystem();
```

##### Retorno

( string )

Retorna a localização da pasta de filesystem.

---

## urlFileSystemPrivate

---

#### _app.urlFileSystemPrivate() : string
##### Descrição

Obtém o url da aplicação para a pasta private.

##### Como Usar

```javascript
const fsURLPrivada = _app.urlFileSystemPrivate();
```

##### Retorno

( string )

Retorna a localização da pasta private do filesystem.

---

## urlFileSystemPublic

---

#### _app.urlFileSystemPublic() : string
##### Descrição

Obtém o url da aplicação para a pasta public do filesystem.

##### Como Usar

```javascript
const fsURLPublica = _app.urlFileSystemPublic();
```

##### Retorno

( string )

Retorna a localização da pasta public do filesystem.

---

## urlFileSystemServer

---

#### _app.urlFileSystemServer() : string
##### Descrição

Obtém o url da aplicação para a pasta server do filesystem.

##### Como Usar

```javascript
const fsURLServidor = _app.urlFileSystemServer();
```

##### Retorno

( string )

Retorna a localização da pasta server do filesystem.

---

## urlPublic

---

#### _app.urlPublic() : string
##### Descrição

Obtém o url da aplicação para a pasta public.

##### Como Usar

```javascript
const urlPublicaDaApp = _app.urlPublic();
```

##### Retorno

( string )

Retorna a localização da pasta public.

---

## urlServices

---

#### _app.urlServices() : string
##### Descrição

Obtém o url da aplicação para a pasta services.

##### Como Usar

```javascript
const urlServicos = _app.urlServices();
```

##### Retorno

( string )

Retorna a localização dos serviços.

---

## urlStorage

---

#### _app.urlStorage() : string
##### Descrição

Obtém o url da aplicação para a pasta storage.

##### Como Usar

```javascript
const urlDaApp = _app.urlStorage();
```

##### Retorno

( string )

Retorna a localização da pasta storage.

---

