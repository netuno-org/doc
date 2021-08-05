---
id: app
title: App
sidebar_label: App
---

Parametrizações gerais da aplicação.

---

## config

---

#### _app.config() : _Values_
##### Descrição

Obtém os dados de configuração da aplicação presentes no ficheiro na pasta config.

##### Como Usar

```javascript
// Retorna o nome da app configurada no config/_[ambiente].json

const appName = _app.config().getString("name");
_out.println(`Nome da App: ${appName}`);
```

##### Retorno

( _Values_ )

Retorna uma estrutura com os parametros de configuração.

---

## name

---

#### _app.name() : _string_
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

#### _app.pathBase() : _string_
##### Descrição

Obtém o caminho da aplicação para a diretoria base.

##### Como Usar

```javascript
const pathDaApp = _app.pathBase();
```

##### Retorno

( _string_ )

Retorna a localização base da aplicação.

---

## pathConfig

---

#### _app.pathConfig() : _string_
##### Descrição

Obtém o caminho da aplicação para a pasta config.

##### Como Usar

```javascript
const pathDaApp = _app.pathConfig();
```

##### Retorno

( _string_ )

Retorna a localização da pasta de configuração.

---

## pathPublic

---

#### _app.pathPublic() : _string_
##### Descrição

Obtém o caminho da aplicação para a pasta public.

##### Como Usar

```javascript
const pathDaApp = _app.pathPublic();
```

##### Retorno

( _string_ )

Retorna a localização da pasta public.

---

## pathServer

---

#### _app.pathServer() : _string_
##### Descrição

Obtém o caminho da aplicação para a pasta server.

##### Como Usar

```javascript
const pathDaApp = _app.pathServer();
```

##### Retorno

( _string_ )

Retorna a localização da pasta server.

---

## pathStorage

---

#### _app.pathStorage() : _string_
##### Descrição

Obtém o caminho da aplicação para a pasta storage.

##### Como Usar

```javascript
const pathDaApp = _app.pathStorage();
```

##### Retorno

( _string_ )

Retorna a localização da pasta storage.

---

## settings

---

#### _app.settings() : _Values_
##### Descrição

 

##### Como Usar

```javascript
// Retorna as definições customizadas que estão no config/_[ambiente].json
// em ... "settings": { "maxBilhetes": 8 } 

const maxBilhetes = _app.settings().getString("maxBilhetes");
_out.println(`O limite máximo de bilhetes é: ${maxBilhetes}`);
```

##### Retorno

( _Values_ )

Retorna as definições customizadas.

---

## toString

---

#### _app.toString() : _string_
##### Retorno

( _string_ )


---

## url

---

#### _app.url() : _string_
##### Descrição

Obtém o url da aplicação.

##### Como Usar

```javascript
const urlDaApp = _app.url();
```

##### Retorno

( _string_ )

Retorna a localização da aplicação.

---

## urlFileSystem

---

#### _app.urlFileSystem() : _string_
##### Descrição

Obtém o url da aplicação para a pasta filesystem.

##### Como Usar

```javascript
const urlDaApp = _app.urlFileSystem();
```

##### Retorno

( _string_ )

Retorna a localização da pasta de filesystem.

---

## urlFileSystemPrivate

---

#### _app.urlFileSystemPrivate() : _string_
##### Descrição

Obtém o url da aplicação para a pasta private.

##### Como Usar

```javascript
const urlDaApp = _app.urlFileSystemPrivate();
```

##### Retorno

( _string_ )

Retorna a localização da pasta private do filesystem.

---

## urlFileSystemPublic

---

#### _app.urlFileSystemPublic() : _string_
##### Descrição

Obtém o url da aplicação para a pasta public do filesystem.

##### Como Usar

```javascript
const urlDaApp = _app.urlFileSystemPublic();
```

##### Retorno

( _string_ )

Retorna a localização da pasta public do filesystem.

---

## urlFileSystemServer

---

#### _app.urlFileSystemServer() : _string_
##### Descrição

Obtém o url da aplicação para a pasta server do filesystem.

##### Como Usar

```javascript
const urlDaApp = _app.urlFileSystemServer();
```

##### Retorno

( _string_ )

Retorna a localização da pasta server do filesystem.

---

## urlPublic

---

#### _app.urlPublic() : _string_
##### Descrição

Obtém o url da aplicação para a pasta public.

##### Como Usar

```javascript
const urlDaApp = _app.urlPublic();
```

##### Retorno

( _string_ )

Retorna a localização da pasta public.

---

## urlServices

---

#### _app.urlServices() : _string_
##### Descrição

Obtém o url da aplicação para a pasta services.

##### Como Usar

```javascript
const urlDaApp = _app.urlServices();
```

##### Retorno

( _string_ )

Retorna a localização dos serviços.

---

## urlStorage

---

#### _app.urlStorage() : _string_
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

