---
id: app
title: App
sidebar_label: App
---

General application parameters.

---

## config

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>config</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Obtains the application configuration data present in the file in the config folder.

##### How To Use

```javascript
// Returns the name of the app configured in config/_[environment].json

const appName = _app.config().getString("name");
_out.println(`App Name: ${appName}`);
```

##### Return

( _[Values](/docs/library/objects/Values)_ )

Returns a structure with the configuration parameters.

---

## configReloaded

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>configReloaded</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
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

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>file</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>
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
| **path** | _string_ | Relative file path within the application. |

##### Return

( _[File](/docs/library/objects/File)_ )

Returns the file object obtained through the path.

---

## folder

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>folder</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>
##### Description

Tracks all the files present in the folder of the inserted path.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ | Path of the file. |

##### Return

( _[File](/docs/library/objects/File)_ )

Returns all files present in the folder of the inserted path.

---

## getConfig

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getConfig</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Obtains the application configuration data present in the file in the config folder.

##### How To Use

```javascript
// Returns the name of the app configured in config/_[environment].json

const appName = _app.config().getString("name");
_out.println(`App Name: ${appName}`);
```

##### Return

( _[Values](/docs/library/objects/Values)_ )

Returns a structure with the configuration parameters.

---

## getFile

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getFile</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>
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
| **path** | _string_ | Relative file path within the application. |

##### Return

( _[File](/docs/library/objects/File)_ )

Returns the file object obtained through the path.

---

## getFolder

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getFolder</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>
##### Description

Tracks all the files present in the folder of the inserted path.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ | Path of the file. |

##### Return

( _[File](/docs/library/objects/File)_ )

Returns all files present in the folder of the inserted path.

---

## getName

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getName</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the name of the application.

##### How To Use

```javascript
const appName = _app.name();
```

##### Return

( _string_ )

Returns the name of the application.

---

## getPathBase

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getPathBase</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getPathConfig

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getPathConfig</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getPathHome

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getPathHome</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getPathPublic

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getPathPublic</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getPathServer

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getPathServer</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getPathStorage

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getPathStorage</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getSettings

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getSettings</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
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

( _[Values](/docs/library/objects/Values)_ )

Returns the custom settings.

---

## getUrl

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getUrl</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the application url.

##### How To Use

```javascript
const urlDaApp = _app.url();
```

##### Return

( _string_ )

Returns the URL of the application.

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getUrl</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the URL prefix defined in the configuration, as a custom URL prefix.

##### How To Use

```javascript
const urlCustom = _app.url('name-of-my-configured-url');
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ | Name of the configured url. |

##### Return

( _string_ )

Returns the location prefix defined in the configuration.

---

## getUrlAdmin

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getUrlAdmin</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getUrlFileSystem

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getUrlFileSystem</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getUrlFileSystemPrivate

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getUrlFileSystemPrivate</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getUrlFileSystemPublic

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getUrlFileSystemPublic</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getUrlFileSystemServer

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getUrlFileSystemServer</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getUrlPublic

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getUrlPublic</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getUrlServices

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getUrlServices</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## getUrlStorage

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>getUrlStorage</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Return

( _string_ )


---

## isConfigReloaded

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>isConfigReloaded</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Return

( _boolean_ )


---

## isFile

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>isFile</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Verify if a file exists.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ | Path of the file. |

##### Return

( _boolean_ )

Returns a boolean verification of the existence of the file and tracks it.

---

## isFolder

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>isFolder</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Verify if exists a folder in the inserted path.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _string_ | Path of the folder. |

##### Return

( _boolean_ )

Returns a boolean verification of the existence of the file and tracks it folder location.

---

## name

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>name</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the name of the application.

##### How To Use

```javascript
const appName = _app.name();
```

##### Return

( _string_ )

Returns the name of the application.

---

## pathBase

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>pathBase</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the application root path.

##### How To Use

```javascript
const appRootPath = _app.pathBase();
```

##### Return

( _string_ )

Returns the base location of the application.

---

## pathConfig

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>pathConfig</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the path to the application config folder.

##### How To Use

```javascript
const configPath = _app.pathConfig();
```

##### Return

( _string_ )

Returns the location of the configuration folder.

---

## pathHome

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>pathHome</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the application root path.

##### How To Use

```javascript
const appRootPath = _app.pathHome();
```

##### Return

( _string_ )

Returns the base location of the application.

---

## pathPublic

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>pathPublic</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the public folder location.

##### How To Use

```javascript
const publicPath = _app.pathPublic();
```

##### Return

( _string_ )

Returns the public folder location.

---

## pathServer

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>pathServer</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the server folder location.

##### How To Use

```javascript
const serverPath = _app.pathServer();
```

##### Return

( _string_ )

Returns the server folder location.

---

## pathStorage

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>pathStorage</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the storage folder location.

##### How To Use

```javascript
const storagePath = _app.pathStorage();
```

##### Return

( _string_ )

Returns the storage folder location.

---

## settings

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>settings</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
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

( _[Values](/docs/library/objects/Values)_ )

Returns the custom settings.

---

## url

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>url</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the application url.

##### How To Use

```javascript
const urlDaApp = _app.url();
```

##### Return

( _string_ )

Returns the URL of the application.

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>url</span>(<span style={{color: '#FF8000'}}>key</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the URL prefix defined in the configuration, as a custom URL prefix.

##### How To Use

```javascript
const urlCustom = _app.url('name-of-my-configured-url');
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **key** | _string_ | Name of the configured url. |

##### Return

( _string_ )

Returns the location prefix defined in the configuration.

---

## urlAdmin

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>urlAdmin</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the application url for the administration interface.

##### How To Use

```javascript
const adminURL = _app.urlAdmin();
```

##### Return

( _string_ )

Returns the location prefix of the administration.

---

## urlFileSystem

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>urlFileSystem</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the application url for the filesystem folder.

##### How To Use

```javascript
const fsURL = _app.urlFileSystem();
```

##### Return

( _string_ )

Returns the location of the filesystem folder.

---

## urlFileSystemPrivate

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>urlFileSystemPrivate</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the application url for the private folder.

##### How To Use

```javascript
const fsPrivateURL = _app.urlFileSystemPrivate();
```

##### Return

( _string_ )

Returns the location of the filesystem's private folder.

---

## urlFileSystemPublic

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>urlFileSystemPublic</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the application url for the filesystem's public folder.

##### How To Use

```javascript
const fsPublicURL = _app.urlFileSystemPublic();
```

##### Return

( _string_ )

Returns the location of the filesystem's public folder.

---

## urlFileSystemServer

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>urlFileSystemServer</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the application url for the filesystem's server folder.

##### How To Use

```javascript
const fsServerURL = _app.urlFileSystemServer();
```

##### Return

( _string_ )

Returns the location of the filesystem's server folder.

---

## urlPublic

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>urlPublic</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the application url for the public folder.

##### How To Use

```javascript
const appPublicURL = _app.urlPublic();
```

##### Return

( _string_ )

Returns the location of the public folder.

---

## urlServices

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>urlServices</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the application url for the services folder.

##### How To Use

```javascript
const servicesURL = _app.urlServices();
```

##### Return

( _string_ )

Returns the location of the services.

---

## urlStorage

---

#### <span style={{fontWeight: 'normal'}}>_app</span>.<span style={{color: '#008000'}}>urlStorage</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the application url for the storage folder.

##### How To Use

```javascript
const appStorageURL = _app.urlStorage();
```

##### Return

( _string_ )

Returns the location of the storage folder.

---

