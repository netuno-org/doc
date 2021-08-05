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
        .toJSON(4)
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

#### _app.folder(arg0: string) : _[File](../../objects/File)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _[File](../../objects/File)_ )


---

## isFile

---

#### _app.isFile(arg0: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _boolean_ )


---

## isFolder

---

#### _app.isFolder(arg0: string) : _boolean_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _boolean_ )


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

