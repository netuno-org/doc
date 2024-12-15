---
id: app
title: App
sidebar_label: App
---

Parametrizações gerais da aplicação.

---

## config

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>config</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Descrição

Obtém os dados de configuração da aplicação presentes no ficheiro na pasta config.

##### Como Usar

```javascript
// Retorna o nome da app configurada no config/_[ambiente].json

const appName = _app.config().getString("name");
_out.println(`Nome da App: ${appName}`);
```

##### Retorno

( _[Values](../objects/Values)_ )

Retorna uma estrutura com os parametros de configuração.

---

## configReloaded

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>configReloaded</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se a configuração da aplicação foi alterada.

##### Como Usar

```javascript
// Valida se a configuração foi alterada.

if (_app.configReloaded()) {
  _out.println(`A config da app está atualizada.`);
}
```

##### Retorno

( _boolean_ )

Retorna se a configuração foi alterada e recarregada.

---

## file

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>file</span>(<span style={{color: '#FF8000'}}>caminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>
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
| **caminho** | _string_ | Caminho relativo do ficheiro dentro da aplicação. |

##### Retorno

( _[File](../objects/File)_ )

Retorna o objeto de ficheiro obtido através do caminho.

---

## folder

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>folder</span>(<span style={{color: '#FF8000'}}>caminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>
##### Descrição

Procura os ficheiros presentes na pasta do caminho inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _string_ | Caminho do ficheiro. |

##### Retorno

( _[File](../objects/File)_ )

Retorna os os ficheiros presentes na pasta do caminho inserido.

---

## getConfig

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getConfig</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Descrição

Obtém os dados de configuração da aplicação presentes no ficheiro na pasta config.

##### Como Usar

```javascript
// Retorna o nome da app configurada no config/_[ambiente].json

const appName = _app.config().getString("name");
_out.println(`Nome da App: ${appName}`);
```

##### Retorno

( _[Values](../objects/Values)_ )

Retorna uma estrutura com os parametros de configuração.

---

## getFile

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getFile</span>(<span style={{color: '#FF8000'}}>caminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>
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
| **caminho** | _string_ | Caminho relativo do ficheiro dentro da aplicação. |

##### Retorno

( _[File](../objects/File)_ )

Retorna o objeto de ficheiro obtido através do caminho.

---

## getFolder

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getFolder</span>(<span style={{color: '#FF8000'}}>caminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>
##### Descrição

Procura os ficheiros presentes na pasta do caminho inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _string_ | Caminho do ficheiro. |

##### Retorno

( _[File](../objects/File)_ )

Retorna os os ficheiros presentes na pasta do caminho inserido.

---

## getName

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getName</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o nome da aplicação.

##### Como Usar

```javascript
const nomeDaApp = _app.name();
```

##### Retorno

( _string_ )

Retorna o nome da aplicação.

---

## getPathBase

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getPathBase</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## getPathConfig

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getPathConfig</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## getPathHome

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getPathHome</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## getPathPublic

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getPathPublic</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## getPathServer

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getPathServer</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## getPathStorage

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getPathStorage</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## getSettings

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getSettings</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
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

( _[Values](../objects/Values)_ )

Retorna as definições customizadas.

---

## getUrl

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getUrl</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o url da aplicação.

##### Como Usar

```javascript
const urlDaApp = _app.url();
```

##### Retorno

( _string_ )

Retorna a URL da aplicação.

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getUrl</span>(<span style={{color: '#FF8000'}}>chave</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o prefixo da URL definido na configuração, como um prefixo de URL customizado.

##### Como Usar

```javascript
const urlCustom = _app.url('nome-da-minha-url-configurada');
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | Nome do url configurado. |

##### Retorno

( _string_ )

Retorna o prefixo da localização definida na configuração.

---

## getUrlAdmin

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getUrlAdmin</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## getUrlFileSystem

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getUrlFileSystem</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## getUrlFileSystemPrivate

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getUrlFileSystemPrivate</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## getUrlFileSystemPublic

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getUrlFileSystemPublic</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## getUrlFileSystemServer

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getUrlFileSystemServer</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## getUrlPublic

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getUrlPublic</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## getUrlServices

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getUrlServices</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## getUrlStorage

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getUrlStorage</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Retorno

( _string_ )


---

## isConfigReloaded

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>isConfigReloaded</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Retorno

( _boolean_ )


---

## isFile

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>isFile</span>(<span style={{color: '#FF8000'}}>caminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se um determinado ficheiro existe.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _string_ | Caminho do ficheiro. |

##### Retorno

( _boolean_ )

Retorna uma verificação boolean da existência do ficheiro e localiza-o.

---

## isFolder

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>isFolder</span>(<span style={{color: '#FF8000'}}>caminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Descrição

Verifica se uma determinada pasta existe no caminho inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _string_ | Caminho da pasta. |

##### Retorno

( _boolean_ )

Retorna uma verificação boolean da existência do ficheiro e localiza a pasta onde se encontra.

---

## name

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>name</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o nome da aplicação.

##### Como Usar

```javascript
const nomeDaApp = _app.name();
```

##### Retorno

( _string_ )

Retorna o nome da aplicação.

---

## pathBase

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>pathBase</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o caminho da aplicação para a diretoria base/home.

##### Como Usar

```javascript
const caminhoRaiz = _app.pathBase();
```

##### Retorno

( _string_ )

Retorna a localização base da aplicação.

---

## pathConfig

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>pathConfig</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o caminho da aplicação para a pasta config.

##### Como Usar

```javascript
const caminhoConfig = _app.pathConfig();
```

##### Retorno

( _string_ )

Retorna a localização da pasta de configuração.

---

## pathHome

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>pathHome</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o caminho da aplicação para a diretoria home/base.

##### Como Usar

```javascript
const caminhoRaiz = _app.pathHome();
```

##### Retorno

( _string_ )

Retorna a localização base da aplicação.

---

## pathPublic

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>pathPublic</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o caminho da aplicação para a pasta public.

##### Como Usar

```javascript
const caminhoPublico = _app.pathPublic();
```

##### Retorno

( _string_ )

Retorna a localização da pasta public.

---

## pathServer

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>pathServer</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o caminho da aplicação para a pasta server.

##### Como Usar

```javascript
const caminhoServer = _app.pathServer();
```

##### Retorno

( _string_ )

Retorna a localização da pasta server.

---

## pathStorage

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>pathStorage</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o caminho da aplicação para a pasta storage.

##### Como Usar

```javascript
const caminhoStorage = _app.pathStorage();
```

##### Retorno

( _string_ )

Retorna a localização da pasta storage.

---

## settings

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>settings</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
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

( _[Values](../objects/Values)_ )

Retorna as definições customizadas.

---

## url

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>url</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o url da aplicação.

##### Como Usar

```javascript
const urlDaApp = _app.url();
```

##### Retorno

( _string_ )

Retorna a URL da aplicação.

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>url</span>(<span style={{color: '#FF8000'}}>chave</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o prefixo da URL definido na configuração, como um prefixo de URL customizado.

##### Como Usar

```javascript
const urlCustom = _app.url('nome-da-minha-url-configurada');
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **chave** | _string_ | Nome do url configurado. |

##### Retorno

( _string_ )

Retorna o prefixo da localização definida na configuração.

---

## urlAdmin

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>urlAdmin</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o url da aplicação para a interface de administração.

##### Como Usar

```javascript
const urlAdmin = _app.urlAdmin();
```

##### Retorno

( _string_ )

Retorna o prefixo da localização de administração.

---

## urlFileSystem

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>urlFileSystem</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o url da aplicação para a pasta filesystem.

##### Como Usar

```javascript
const fsURL = _app.urlFileSystem();
```

##### Retorno

( _string_ )

Retorna a localização da pasta de filesystem.

---

## urlFileSystemPrivate

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>urlFileSystemPrivate</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o url da aplicação para a pasta private.

##### Como Usar

```javascript
const fsURLPrivada = _app.urlFileSystemPrivate();
```

##### Retorno

( _string_ )

Retorna a localização da pasta private do filesystem.

---

## urlFileSystemPublic

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>urlFileSystemPublic</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o url da aplicação para a pasta public do filesystem.

##### Como Usar

```javascript
const fsURLPublica = _app.urlFileSystemPublic();
```

##### Retorno

( _string_ )

Retorna a localização da pasta public do filesystem.

---

## urlFileSystemServer

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>urlFileSystemServer</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o url da aplicação para a pasta server do filesystem.

##### Como Usar

```javascript
const fsURLServidor = _app.urlFileSystemServer();
```

##### Retorno

( _string_ )

Retorna a localização da pasta server do filesystem.

---

## urlPublic

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>urlPublic</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o url da aplicação para a pasta public.

##### Como Usar

```javascript
const urlPublicaDaApp = _app.urlPublic();
```

##### Retorno

( _string_ )

Retorna a localização da pasta public.

---

## urlServices

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>urlServices</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o url da aplicação para a pasta services.

##### Como Usar

```javascript
const urlServicos = _app.urlServices();
```

##### Retorno

( _string_ )

Retorna a localização dos serviços.

---

## urlStorage

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>urlStorage</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Descrição

Obtém o url da aplicação para a pasta storage.

##### Como Usar

```javascript
const urlDaApp = _app.urlStorage();
```

##### Retorno

( _string_ )

Retorna a localização da pasta storage.

---

