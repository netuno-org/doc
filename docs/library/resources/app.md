---
id: app
title: App
sidebar_label: App
---

General application parameters.

---

## config

---

#### _app.config() : _[Values](../../objects/Values)_
##### Description

Obtains the application configuration data present in the file in the config folder.

##### How To Use

```javascript
// Returns the name of the app configured in config/_[environment].json

const appName = _app.config().getString("name");
_out.println(`App Name: ${appName}`);
```

##### Return

( _[Values](../../objects/Values)_ )

Returns a structure with the configuration parameters.

---

## configReloaded

---

#### _app.configReloaded() : _boolean_
##### Description

Checks whether the application configuration has been changed.

##### How To Use

```javascript
// Validates whether the configuration has been changed.

if (_app.configReloaded()) {
  _out.println(`App config is up to date.`);
}
```

##### Return

( _boolean_ )

Returns whether the configuration was changed and reloaded.

---

## file

---

#### _app.file(path: string) : _[File](../../objects/File)_
##### Description

Processes files within the application.

##### How To Use

```javascript
// Load the full path of the Logo:
const logo = _app.file("public/images/logo.png");
_out.println(`<p>Full logo path: ${logo.fullPath()}</p>`);
// Creates the JSON file within the app at public/data.json:
_app.file("public/data.json").output().writeAndClose(
    _val.map()
        .set("result", true)
        .toJSON(2)
)
// Load the JSON file into the app at public/data.json:
const jsonFile = _app.file("public/data.json")
if (jsonFile.exists()) {
    const data = _val.fromJSON(
        jsonFile.input().readAllAndClose()
    )
    _out.println(`<p>JSON Result: ${data.getString("result")}</p>`)
}
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string | Relative file path within the application. |

##### Return

( _[File](../../objects/File)_ )

Returns the file object obtained through the path.

---

## folder

---

#### _app.folder(path: string) : _[File](../../objects/File)_
##### Description

Tracks all the files present in the folder of the inserted path.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string | Path of the file. |

##### Return

( _[File](../../objects/File)_ )

Returns all files present in the folder of the inserted path.

---

## getConfig

---

#### _app.getConfig() : _[Values](../../objects/Values)_
##### Description

Obtains the application configuration data present in the file in the config folder.

##### How To Use

```javascript
// Returns the name of the app configured in config/_[environment].json

const appName = _app.config().getString("name");
_out.println(`App Name: ${appName}`);
```

##### Return

( _[Values](../../objects/Values)_ )

Returns a structure with the configuration parameters.

---

## getFile

---

#### _app.getFile(path: string) : _[File](../../objects/File)_
##### Description

Processes files within the application.

##### How To Use

```javascript
// Load the full path of the Logo:
const logo = _app.file("public/images/logo.png");
_out.println(`<p>Full logo path: ${logo.fullPath()}</p>`);
// Creates the JSON file within the app at public/data.json:
_app.file("public/data.json").output().writeAndClose(
    _val.map()
        .set("result", true)
        .toJSON(2)
)
// Load the JSON file into the app at public/data.json:
const jsonFile = _app.file("public/data.json")
if (jsonFile.exists()) {
    const data = _val.fromJSON(
        jsonFile.input().readAllAndClose()
    )
    _out.println(`<p>JSON Result: ${data.getString("result")}</p>`)
}
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string | Relative file path within the application. |

##### Return

( _[File](../../objects/File)_ )

Returns the file object obtained through the path.

---

## getFolder

---

#### _app.getFolder(path: string) : _[File](../../objects/File)_
##### Description

Tracks all the files present in the folder of the inserted path.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string | Path of the file. |

##### Return

( _[File](../../objects/File)_ )

Returns all files present in the folder of the inserted path.

---

## getName

---

#### _app.getName() : string
##### Description

Gets the name of the application.

##### How To Use

```javascript
const appName = _app.name();
```

##### Return

( string )

Returns the name of the application.

---

## getPathBase

---

#### _app.getPathBase() : string
##### Return

( string )


---

## getPathConfig

---

#### _app.getPathConfig() : string
##### Return

( string )


---

## getPathHome

---

#### _app.getPathHome() : string
##### Return

( string )


---

## getPathPublic

---

#### _app.getPathPublic() : string
##### Return

( string )


---

## getPathServer

---

#### _app.getPathServer() : string
##### Return

( string )


---

## getPathStorage

---

#### _app.getPathStorage() : string
##### Return

( string )


---

## getSettings

---

#### _app.getSettings() : _[Values](../../objects/Values)_
##### Description

Obtains the application settings data present in the file of the config.

##### How To Use

```javascript
// Returns the custom settings that are in config/_[environment].json
// in ... "settings": { "maxTickets": 8 } 

const maxTickets = _app.settings().getString("maxTickets");
_out.println(`The maximum limit for tickets is: ${maxTickets}`);
```

##### Return

( _[Values](../../objects/Values)_ )

Returns the custom settings.

---

## getUrl

---

#### _app.getUrl() : string
##### Description

Gets the URL prefix defined in the configuration, as a custom URL prefix.

##### How To Use

```javascript
const urlCustom = _app.url('name-of-my-configured-url');
```

##### Return

( string )

Returns the location prefix defined in the configuration.

---

#### _app.getUrl(key: string) : string
##### Description

Gets the URL prefix defined in the configuration, as a custom URL prefix.

##### How To Use

```javascript
const urlCustom = _app.url('name-of-my-configured-url');
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string | Name of the configured url. |

##### Return

( string )

Returns the location prefix defined in the configuration.

---

## getUrlAdmin

---

#### _app.getUrlAdmin() : string
##### Return

( string )


---

## getUrlFileSystem

---

#### _app.getUrlFileSystem() : string
##### Return

( string )


---

## getUrlFileSystemPrivate

---

#### _app.getUrlFileSystemPrivate() : string
##### Return

( string )


---

## getUrlFileSystemPublic

---

#### _app.getUrlFileSystemPublic() : string
##### Return

( string )


---

## getUrlFileSystemServer

---

#### _app.getUrlFileSystemServer() : string
##### Return

( string )


---

## getUrlPublic

---

#### _app.getUrlPublic() : string
##### Return

( string )


---

## getUrlServices

---

#### _app.getUrlServices() : string
##### Return

( string )


---

## getUrlStorage

---

#### _app.getUrlStorage() : string
##### Return

( string )


---

## isConfigReloaded

---

#### _app.isConfigReloaded() : _boolean_
##### Return

( _boolean_ )


---

## isFile

---

#### _app.isFile(path: string) : _boolean_
##### Description

Verify if a file exists.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string | Path of the file. |

##### Return

( _boolean_ )

Returns a boolean verification of the existence of the file and tracks it.

---

## isFolder

---

#### _app.isFolder(path: string) : _boolean_
##### Description

Verify if exists a folder in the inserted path.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string | Path of the folder. |

##### Return

( _boolean_ )

Returns a boolean verification of the existence of the file and tracks it folder location.

---

## name

---

#### _app.name() : string
##### Description

Gets the name of the application.

##### How To Use

```javascript
const appName = _app.name();
```

##### Return

( string )

Returns the name of the application.

---

## pathBase

---

#### _app.pathBase() : string
##### Description

Gets the application root path.

##### How To Use

```javascript
const appRootPath = _app.pathBase();
```

##### Return

( string )

Returns the base location of the application.

---

## pathConfig

---

#### _app.pathConfig() : string
##### Description

Gets the path to the application config folder.

##### How To Use

```javascript
const configPath = _app.pathConfig();
```

##### Return

( string )

Returns the location of the configuration folder.

---

## pathHome

---

#### _app.pathHome() : string
##### Description

Gets the application root path.

##### How To Use

```javascript
const appRootPath = _app.pathHome();
```

##### Return

( string )

Returns the base location of the application.

---

## pathPublic

---

#### _app.pathPublic() : string
##### Description

Gets the public folder location.

##### How To Use

```javascript
const publicPath = _app.pathPublic();
```

##### Return

( string )

Returns the public folder location.

---

## pathServer

---

#### _app.pathServer() : string
##### Description

Gets the server folder location.

##### How To Use

```javascript
const serverPath = _app.pathServer();
```

##### Return

( string )

Returns the server folder location.

---

## pathStorage

---

#### _app.pathStorage() : string
##### Description

Gets the storage folder location.

##### How To Use

```javascript
const storagePath = _app.pathStorage();
```

##### Return

( string )

Returns the storage folder location.

---

## settings

---

#### _app.settings() : _[Values](../../objects/Values)_
##### Description

Obtains the application settings data present in the file of the config.

##### How To Use

```javascript
// Returns the custom settings that are in config/_[environment].json
// in ... "settings": { "maxTickets": 8 } 

const maxTickets = _app.settings().getString("maxTickets");
_out.println(`The maximum limit for tickets is: ${maxTickets}`);
```

##### Return

( _[Values](../../objects/Values)_ )

Returns the custom settings.

---

## url

---

#### _app.url() : string
##### Description

Gets the application url.

##### How To Use

```javascript
const urlDaApp = _app.url();
```

##### Return

( string )

Returns the URL of the application.

---

#### _app.url(key: string) : string
##### Description

Gets the URL prefix defined in the configuration, as a custom URL prefix.

##### How To Use

```javascript
const urlCustom = _app.url('name-of-my-configured-url');
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| key | string | Name of the configured url. |

##### Return

( string )

Returns the location prefix defined in the configuration.

---

## urlAdmin

---

#### _app.urlAdmin() : string
##### Description

Gets the application url for the administration interface.

##### How To Use

```javascript
const adminURL = _app.urlAdmin();
```

##### Return

( string )

Returns the location prefix of the administration.

---

## urlFileSystem

---

#### _app.urlFileSystem() : string
##### Description

Gets the application url for the filesystem folder.

##### How To Use

```javascript
const fsURL = _app.urlFileSystem();
```

##### Return

( string )

Returns the location of the filesystem folder.

---

## urlFileSystemPrivate

---

#### _app.urlFileSystemPrivate() : string
##### Description

Gets the application url for the private folder.

##### How To Use

```javascript
const fsPrivateURL = _app.urlFileSystemPrivate();
```

##### Return

( string )

Returns the location of the filesystem's private folder.

---

## urlFileSystemPublic

---

#### _app.urlFileSystemPublic() : string
##### Description

Gets the application url for the filesystem's public folder.

##### How To Use

```javascript
const fsPublicURL = _app.urlFileSystemPublic();
```

##### Return

( string )

Returns the location of the filesystem's public folder.

---

## urlFileSystemServer

---

#### _app.urlFileSystemServer() : string
##### Description

Gets the application url for the filesystem's server folder.

##### How To Use

```javascript
const fsServerURL = _app.urlFileSystemServer();
```

##### Return

( string )

Returns the location of the filesystem's server folder.

---

## urlPublic

---

#### _app.urlPublic() : string
##### Description

Gets the application url for the public folder.

##### How To Use

```javascript
const appPublicURL = _app.urlPublic();
```

##### Return

( string )

Returns the location of the public folder.

---

## urlServices

---

#### _app.urlServices() : string
##### Description

Gets the application url for the services folder.

##### How To Use

```javascript
const servicesURL = _app.urlServices();
```

##### Return

( string )

Returns the location of the services.

---

## urlStorage

---

#### _app.urlStorage() : string
##### Description

Gets the application url for the storage folder.

##### How To Use

```javascript
const appStorageURL = _app.urlStorage();
```

##### Return

( string )

Returns the location of the storage folder.

---

