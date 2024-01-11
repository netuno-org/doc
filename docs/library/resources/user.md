---
id: user
title: User
sidebar_label: User
---

Management of the users of the application and obtaining the data of the authenticated user.

---

## all

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">all</span>() : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Description

Gets the list of data for all users.

##### How To Use

```javascript
// Returns all existing users.
_out.json(_user.all())
```

##### Return

( _java.util.List_ )

List of all data for all users.

---

## allByCode

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">allByCode</span>(<span style="color: #FF8000">code</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Description

Gets all users from the alternative code.

##### How To Use

```javascript
// Lists users who have the sample code in the log.
const users = _user.allByCode("sample")
for (const user of users) {
    _log.info(`User ${user.getString("name")}`)
}
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **code** | _string_ | Alternative code that users may have associated. |

##### Return

( _java.util.List_ )

List of users found for the alternative code.

---

## allProvidersData

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">allProvidersData</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Return

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">allProvidersData</span>(<span style="color: #FF8000">userId</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **userId** | _int_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## code

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">code</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Gets the alternative code of the user who is authenticated.

##### How To Use

```javascript
// Auxiliary code of the authenticated user.
_log.info(`User Code: ${_user.code()}`)
```

##### Return

( _string_ )

Auxiliary code of the logged user.

---

## create

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">create</span>(<span style="color: #FF8000">dataUser</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">int</span>
##### Description

Creates the new user.

##### How To Use

```javascript
// Create a new user:
const group = _group.firstByCode("samle")_user.create(
    _val.map()
        .set("name", "Full Name")
        .set("mail", "user@sample.com")
        .set("user", "username")
        .set("pass", "SecretPassword123")
        .set("group_id", group.getInt("id"))
        // It is optional to define an auxiliary alternative code:
        .set("code", "example-alternative-identification")
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **dataUser** | _[Values](../../objects/Values)_ | Data of the user to be created. |

##### Return

( _int_ )

User ID that was created.

---

## createIfNotExists

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">createIfNotExists</span>(<span style="color: #FF8000">userData</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Creates the user if it does not exist yet.

##### How To Use

```javascript
// Create a new user if it doesn't exist yet:
const group = _group.firstByCode("generic")
_user.createIfNotExists(
    _val.map()
        .set("name", "Full Name")
        .set("mail", "user@sample.com")
        .set("user", "username")
        .set("pass", "SecretPassword123")
        .set("group_id", group.getInt("id"))
        // It is optional to define an auxiliary alternative code:
        .set("code", "example-alternative-identification")
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **userData** | _[Values](../../objects/Values)_ | Data of the user to be created if it does not exist yet. |

##### Return

( _boolean_ )

It was successfully created.

---

## data

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">data</span>() : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

It obtains all the data information of the user who is authenticated.

##### How To Use

```javascript
// All information of the authenticated user.
_out.json(_user.data())
```

##### Return

( _[Values](../../objects/Values)_ )

All data of the logged user.

---

## firstByCode

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">firstByCode</span>(<span style="color: #FF8000">code</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Gets a user's data from the alternate code.

##### How To Use

```javascript
// User who has the sample code.
const user = _user.firstByCode("sample")
_out.json(user)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **code** | _string_ | Alternative code that the user may have associated. |

##### Return

( _[Values](../../objects/Values)_ )

User data found with the alternative code.

---

## firstByMail

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">firstByMail</span>(<span style="color: #FF8000">mail</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Retrieves a user's data from email.

##### How To Use

```javascript
// User obtained from email.
const user = _user.firstByMail("user@example.com")
_out.json(user)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **mail** | _string_ | User e-mail. |

##### Return

( _[Values](../../objects/Values)_ )

User data found with the email.

---

## firstByName

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">firstByName</span>(<span style="color: #FF8000">name</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Gets a user's data from the full name.

##### How To Use

```javascript
// User who has the full name.
const user = _user.firstByName("Full Name")
_out.json(user)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | Full name of the user. |

##### Return

( _[Values](../../objects/Values)_ )

User data found with full name.

---

## firstByUser

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">firstByUser</span>(<span style="color: #FF8000">user</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

It obtains a user's data from the user name, the same name used in the login.

##### How To Use

```javascript
// User from username.
const user = _user.firstByMail("user@example.com")
_out.json(user)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **user** | _string_ | Username of the user. |

##### Return

( _[Values](../../objects/Values)_ )

User data found with username.

---

## get

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

Gets a user's data from the ID (numeric identifier).

##### How To Use

```javascript
// User obtained from the ID.
const user = _user.get(1)
_out.json(user)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _int_ | Numeric identifier of the user. |

##### Return

( _[Values](../../objects/Values)_ )

User data found.

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">get</span>(<span style="color: #FF8000">idOrUidOrUsername</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

It obtains a user's data from the ID (numeric identifier), the UUID (universal unique identifier) or the user name.

##### How To Use

```javascript
// User obtained from the UUID.
const user = _user.get("7901e01c-c53e-42c2-980d-9f928090422f")
_out.json(user)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **idOrUidOrUsername** | _string_ | It can be either an ID, or a UUID, or the username. |

##### Return

( _[Values](../../objects/Values)_ )

User data found.

---

## hasProvider

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">hasProvider</span>(<span style="color: #FF8000">userId</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">providerCode</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **userId** | _int_ |   |
| **providerCode** | _string_ |   |

##### Return

( _boolean_ )


---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">hasProvider</span>(<span style="color: #FF8000">providerCode</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **providerCode** | _string_ |   |

##### Return

( _boolean_ )


---

## id

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">id</span>() : <span style="font-weight: normal; font-style: italic;">int</span>
##### Description

Gets the numeric identifier of who is authenticated.

##### How To Use

```javascript
// Authenticated user ID.
_log.info(`User ID: ${_user.id()}`)
```

##### Return

( _int_ )

ID (numeric identifier) of the logged in user.

---

## name

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">name</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Gets the full name of the user who is authenticated.

##### How To Use

```javascript
// Authenticated user name.
_log.info(`Full name of the User: ${_user.name()}`)
```

##### Return

( _string_ )

Full name of the logged in user.

---

## noPassword

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">noPassword</span>(<span style="color: #FF8000">active</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **active** | _boolean_ |   |

##### Return

( _boolean_ )


---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">noPassword</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">active</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _int_ |   |
| **active** | _boolean_ |   |

##### Return

( _boolean_ )


---

## password

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">password</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">password</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _int_ |   |
| **password** | _string_ |   |

##### Return

( _boolean_ )


---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">password</span>(<span style="color: #FF8000">password</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **password** | _string_ |   |

##### Return

( _boolean_ )


---

## providerData

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">providerData</span>(<span style="color: #FF8000">userId</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">providerCode</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **userId** | _int_ |   |
| **providerCode** | _string_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">providerData</span>(<span style="color: #FF8000">providerCode</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **providerCode** | _string_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## providerDataByUid

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">providerDataByUid</span>(<span style="color: #FF8000">uid</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **uid** | _string_ |   |

##### Return

( _[Values](../../objects/Values)_ )


---

## providerLDAP

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">providerLDAP</span>(<span style="color: #FF8000">active</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **active** | _boolean_ |   |

##### Return

( _boolean_ )


---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">providerLDAP</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">active</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _int_ |   |
| **active** | _boolean_ |   |

##### Return

( _boolean_ )


---

## remove

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">remove</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Removes the user referring to the passed ID.

##### How To Use

```javascript
// Removes the user:
const user = _user.firstByCode("sample")
_user.remove(
    user.getInt("id")
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _int_ | The user's ID (numeric identifier). |

##### Return

( _boolean_ )

It was successfully deleted.

---

## search

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">search</span>(<span style="color: #FF8000">term</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">java.util.List</span>
##### Description

Searches for users who have an occurrence in the data with the past search text.

##### How To Use

```javascript
// Searches for users with the surname "Last Name".
const users = _user.search("Last Name")
for (const user of users) {
    _log.info(`User found ${user.getString("name")}`)
}
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **term** | _string_ | Search key. |

##### Return

( _java.util.List_ )

List of user data found.

---

## searchFirst

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">searchFirst</span>(<span style="color: #FF8000">term</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Description

The first result of the user search that has any occurrence in the past term data.

##### How To Use

```javascript
// The first user to have an e-mail with @example.com.
const user = _user.search("@example.com")
_out.json(user)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **term** | _string_ | Search key. |

##### Return

( _[Values](../../objects/Values)_ )

User data found.

---

## setNoPassword

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">setNoPassword</span>(<span style="color: #FF8000">active</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **active** | _boolean_ |   |

##### Return

( _boolean_ )


---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">setNoPassword</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">active</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _int_ |   |
| **active** | _boolean_ |   |

##### Return

( _boolean_ )


---

## setPassword

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">setPassword</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">password</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _int_ |   |
| **password** | _string_ |   |

##### Return

( _boolean_ )


---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">setPassword</span>(<span style="color: #FF8000">password</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **password** | _string_ |   |

##### Return

( _boolean_ )


---

## setProviderLDAP

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">setProviderLDAP</span>(<span style="color: #FF8000">active</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **active** | _boolean_ |   |

##### Return

( _boolean_ )


---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">setProviderLDAP</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">active</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _int_ |   |
| **active** | _boolean_ |   |

##### Return

( _boolean_ )


---

## uid

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">uid</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Gets the universal unique identifier of who is authenticated.

##### How To Use

```javascript
// UUID of the authenticated user.
_log.info(`User UID: ${_user.uid()}`)
```

##### Return

( _string_ )

UUID (universal unique identifier) of the logged in user.

---

## update

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">update</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">userData</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Updates user data for the past ID.

##### How To Use

```javascript
// Updates the user:
const userData = _user.firstByMail("user.mail@example.com")
userData.set("pass", "NewSecretPassword123")
_user.update(
    userData.getInt("id"),
    userData,
    true
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _int_ | The user's ID (numeric identifier). |
| **userData** | _[Values](../../objects/Values)_ | User data to update the information stored in the database. |

##### Return

( _boolean_ )

It was successfully updated.

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">update</span>(<span style="color: #FF8000">id</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">userData</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>, <span style="color: #FF8000">changePassword</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Updates user data for the past ID.

##### How To Use

```javascript
// Updates the user:
const userData = _user.firstByMail("user.mail@example.com")
userData.set("pass", "NewSecretPassword123")
_user.update(
    userData.getInt("id"),
    userData,
    true
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _int_ | The user's ID (numeric identifier). |
| **userData** | _[Values](../../objects/Values)_ | User data to update the information stored in the database. |
| **changePassword** | _boolean_ | Whether to change the password or password. |

##### Return

( _boolean_ )

It was successfully updated.

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">update</span>(<span style="color: #FF8000">userData</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Updates user data for the ID defined in the passed data structure.

##### How To Use

```javascript
// Updates the user:
const userData = _user.firstByMail("user.mail@example.com")
userData.set("pass", "NewSecretPassword123")
_user.update(
    userData,
    true
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **userData** | _[Values](../../objects/Values)_ | User data to update the information stored in the database. |

##### Return

( _boolean_ )

It was successfully updated.

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">update</span>(<span style="color: #FF8000">userData</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>, <span style="color: #FF8000">changePassword</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">boolean</span>
##### Description

Updates user data for the ID defined in the passed data structure.

##### How To Use

```javascript
// Updates the user:
const userData = _user.firstByMail("user.mail@example.com")
userData.set("pass", "NewSecretPassword123")
_user.update(
    userData,
    true
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **userData** | _[Values](../../objects/Values)_ | User data to update the information stored in the database. |
| **changePassword** | _boolean_ | Whether to change the password or password. |

##### Return

( _boolean_ )

It was successfully updated.

---

## user

---

#### <span style="font-weight: normal">_user</span>.<span style="color: #008000">user</span>() : <span style="font-weight: normal; font-style: italic;">string</span>
##### Description

Gets the full username of who is authenticated.

##### How To Use

```javascript
// Authenticated username.
_log.info(`Full name of the User: ${_user.user()}`)
```

##### Return

( _string_ )

Username of the logged in user.

---

