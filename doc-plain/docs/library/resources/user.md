---
id: user
title: User
sidebar_label: User
---

Management of the users of the application and obtaining the data of the authenticated user.

---

## all

---

#### _user.all() : java.util.List
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

#### _user.allByCode(code: string) : java.util.List
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

#### _user.allProvidersData() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _user.allProvidersData(userId: int) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **userId** | _int_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## authHistoryForceUnlock

---

#### _user.authHistoryForceUnlock() : void
##### Return

( _void_ )


---

#### _user.authHistoryForceUnlock(userId: int) : void
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **userId** | _int_ |   |

##### Return

( _void_ )


---

## authHistoryLatest

---

#### _user.authHistoryLatest() : [Values](/docs/library/objects/Values)
##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _user.authHistoryLatest(userId: int) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **userId** | _int_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## authHistoryLatestIsLocked

---

#### _user.authHistoryLatestIsLocked() : boolean
##### Return

( _boolean_ )


---

#### _user.authHistoryLatestIsLocked(userId: int) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **userId** | _int_ |   |

##### Return

( _boolean_ )


---

## checkAuthHistoryConsecutiveFailure

---

#### _user.checkAuthHistoryConsecutiveFailure(id: int) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _int_ |   |

##### Return

( _boolean_ )


---

## code

---

#### _user.code() : string
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

#### _user.create(dataUser: [Values](/docs/library/objects/Values)) : int
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
| **dataUser** | _[Values](/docs/library/objects/Values)_ | Data of the user to be created. |

##### Return

( _int_ )

User ID that was created.

---

## createIfNotExists

---

#### _user.createIfNotExists(userData: [Values](/docs/library/objects/Values)) : boolean
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
| **userData** | _[Values](/docs/library/objects/Values)_ | Data of the user to be created if it does not exist yet. |

##### Return

( _boolean_ )

It was successfully created.

---

## data

---

#### _user.data() : [Values](/docs/library/objects/Values)
##### Description

It obtains all the data information of the user who is authenticated.

##### How To Use

```javascript
// All information of the authenticated user.
_out.json(_user.data())
```

##### Return

( _[Values](/docs/library/objects/Values)_ )

All data of the logged user.

---

## firstByCode

---

#### _user.firstByCode(code: string) : [Values](/docs/library/objects/Values)
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

( _[Values](/docs/library/objects/Values)_ )

User data found with the alternative code.

---

## firstByMail

---

#### _user.firstByMail(mail: string) : [Values](/docs/library/objects/Values)
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

( _[Values](/docs/library/objects/Values)_ )

User data found with the email.

---

## firstByName

---

#### _user.firstByName(name: string) : [Values](/docs/library/objects/Values)
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

( _[Values](/docs/library/objects/Values)_ )

User data found with full name.

---

## firstByUser

---

#### _user.firstByUser(user: string) : [Values](/docs/library/objects/Values)
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

( _[Values](/docs/library/objects/Values)_ )

User data found with username.

---

## get

---

#### _user.get(id: int) : [Values](/docs/library/objects/Values)
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

( _[Values](/docs/library/objects/Values)_ )

User data found.

---

#### _user.get(idOrUidOrUsername: string) : [Values](/docs/library/objects/Values)
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

( _[Values](/docs/library/objects/Values)_ )

User data found.

---

## hasProvider

---

#### _user.hasProvider(userId: int, providerCode: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **userId** | _int_ |   |
| **providerCode** | _string_ |   |

##### Return

( _boolean_ )


---

#### _user.hasProvider(providerCode: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **providerCode** | _string_ |   |

##### Return

( _boolean_ )


---

## id

---

#### _user.id() : int
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

## load

---

#### _user.load() : [User](/docs/library/resources/user)
##### Return

( _[User](/docs/library/resources/user)_ )


---

## name

---

#### _user.name() : string
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

#### _user.noPassword(active: boolean) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **active** | _boolean_ |   |

##### Return

( _boolean_ )


---

#### _user.noPassword(id: int, active: boolean) : boolean
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

#### _user.password(id: int, password: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _int_ |   |
| **password** | _string_ |   |

##### Return

( _boolean_ )


---

#### _user.password(password: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **password** | _string_ |   |

##### Return

( _boolean_ )


---

## providerData

---

#### _user.providerData(userId: int, providerCode: string) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **userId** | _int_ |   |
| **providerCode** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

#### _user.providerData(providerCode: string) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **providerCode** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## providerDataByUid

---

#### _user.providerDataByUid(uid: string) : [Values](/docs/library/objects/Values)
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **uid** | _string_ |   |

##### Return

( _[Values](/docs/library/objects/Values)_ )


---

## providerLDAP

---

#### _user.providerLDAP(active: boolean) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **active** | _boolean_ |   |

##### Return

( _boolean_ )


---

#### _user.providerLDAP(id: int, active: boolean) : boolean
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

#### _user.remove(id: int) : boolean
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

#### _user.search(term: string) : java.util.List
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

#### _user.searchFirst(term: string) : [Values](/docs/library/objects/Values)
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

( _[Values](/docs/library/objects/Values)_ )

User data found.

---

## setNoPassword

---

#### _user.setNoPassword(active: boolean) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **active** | _boolean_ |   |

##### Return

( _boolean_ )


---

#### _user.setNoPassword(id: int, active: boolean) : boolean
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

#### _user.setPassword(id: int, password: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _int_ |   |
| **password** | _string_ |   |

##### Return

( _boolean_ )


---

#### _user.setPassword(password: string) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **password** | _string_ |   |

##### Return

( _boolean_ )


---

## setProviderLDAP

---

#### _user.setProviderLDAP(active: boolean) : boolean
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **active** | _boolean_ |   |

##### Return

( _boolean_ )


---

#### _user.setProviderLDAP(id: int, active: boolean) : boolean
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

#### _user.uid() : string
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

#### _user.update(id: int, userData: [Values](/docs/library/objects/Values)) : boolean
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
| **userData** | _[Values](/docs/library/objects/Values)_ | User data to update the information stored in the database. |

##### Return

( _boolean_ )

It was successfully updated.

---

#### _user.update(id: int, userData: [Values](/docs/library/objects/Values), changePassword: boolean) : boolean
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
| **userData** | _[Values](/docs/library/objects/Values)_ | User data to update the information stored in the database. |
| **changePassword** | _boolean_ | Whether to change the password or password. |

##### Return

( _boolean_ )

It was successfully updated.

---

#### _user.update(userData: [Values](/docs/library/objects/Values)) : boolean
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
| **userData** | _[Values](/docs/library/objects/Values)_ | User data to update the information stored in the database. |

##### Return

( _boolean_ )

It was successfully updated.

---

#### _user.update(userData: [Values](/docs/library/objects/Values), changePassword: boolean) : boolean
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
| **userData** | _[Values](/docs/library/objects/Values)_ | User data to update the information stored in the database. |
| **changePassword** | _boolean_ | Whether to change the password or password. |

##### Return

( _boolean_ )

It was successfully updated.

---

## user

---

#### _user.user() : string
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

