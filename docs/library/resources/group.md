---
id: group
title: Group
sidebar_label: Group
---

Management of the application groups and obtaining the authenticated user's group data.

---

## all

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>all</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;[Values](/docs/library/objects/Values)&gt;</span>
##### Description

Gets the data for all groups.

##### How To Use

```javascript
// Returns all existing groups.
_out.json(_group.all())
```

##### Return

( _java.util.List_ )

Data for all groups.

---

## allByCode

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>allByCode</span>(<span style={{color: '#FF8000'}}>code</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;[Values](/docs/library/objects/Values)&gt;</span>
##### Description

Gets all groups with the specified alternative code.

##### How To Use

```javascript
// Logs the groups with the sample code.
const groups = _group.allByCode("example")
for (const group of groups) {
    _log.info(`Group ${group.getString("name")}`)
}
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **code** | _string_ | Alternative code associated with the groups. |

##### Return

( _java.util.List_ )

Groups found with the alternative code.

---

## code

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>code</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the alternative code of the authenticated user's group.

##### How To Use

```javascript
// Alternative code of the authenticated user's group.
_log.info(`Group code: ${_group.code()}`)
```

##### Return

( _string_ )

Alternative code of the authenticated user's group.

---

## create

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>create</span>(<span style={{color: '#FF8000'}}>groupData</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Description

Creates a new group.

##### How To Use

```javascript
// Creates a new group:
_group.create(
    _val.map()
        .set("name", "Example")
        .set("mail", "group@example.com")
        // Defining an alternative code is optional:
        .set("code", "example-alternative-identification")
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **groupData** | _[Values](/docs/library/objects/Values)_ | Data for the group to create. |

##### Return

( _int_ )

ID of the created group.

---

## createIfNotExists

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>createIfNotExists</span>(<span style={{color: '#FF8000'}}>groupData</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Creates the group if it does not exist yet.

##### How To Use

```javascript
// Creates a new group if it does not exist yet:
_group.createIfNotExists(
    _val.map()
        .set("name", "Example")
        .set("mail", "group@example.com")
        // Defining an alternative code is optional:
        .set("code", "example-alternative-identification")
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **groupData** | _[Values](/docs/library/objects/Values)_ | Data for the group to create if it does not exist yet. |

##### Return

( _boolean_ )

It was successfully created.

---

## data

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>data</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Gets all data for the authenticated user's group.

##### How To Use

```javascript
// All data for the authenticated user's group.
_out.json(_group.data())
```

##### Return

( _[Values](/docs/library/objects/Values)_ )

All data for the authenticated user's group.

---

## firstByCode

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>firstByCode</span>(<span style={{color: '#FF8000'}}>code</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Gets a group by its alternative code.

##### How To Use

```javascript
// Group with the sample code.
const group = _group.firstByCode("example")
_out.json(group)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **code** | _string_ | Alternative code associated with the group. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Data for the group found with the alternative code.

---

## firstByMail

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>firstByMail</span>(<span style={{color: '#FF8000'}}>mail</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Gets a group by its email address.

##### How To Use

```javascript
// Group found by email address.
const group = _group.firstByMail("group@example.com")
_out.json(group)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **mail** | _string_ | Group email address. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Data for the group found with the email address.

---

## firstByName

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>firstByName</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Gets a group by its name.

##### How To Use

```javascript
// Group with the specified name.
const group = _group.firstByName("Example")
_out.json(group)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | Group name. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Data for the group found with the name.

---

## get

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>get</span>(<span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Gets a group by its numeric ID.

##### How To Use

```javascript
// Group found by ID.
const group = _group.get(1)
_out.json(group)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _int_ | Numeric group ID. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Data for the group found.

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>get</span>(<span style={{color: '#FF8000'}}>idOrUid</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Gets a group by its numeric ID or UUID.

##### How To Use

```javascript
// Group obtido a partir do UID.
const group = _group.get("0dd572b8-7841-4977-80de-abb9660a0df0")
_out.json(group)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **idOrUid** | _string_ | Group ID or UID. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Data for the group found.

---

## id

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>id</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>
##### Description

Gets the numeric ID of the authenticated user's group.

##### How To Use

```javascript
// Group ID of the authenticated user.
_log.info(`Group ID: ${_group.id()}`)
```

##### Return

( _int_ )

ID (numeric identifier) of the logged-in user's group.

---

## load

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>load</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Group](/docs/library/resources/group)</span>
##### Return

( _[Group](/docs/library/resources/group)_ )


---

## name

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>name</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the name of the authenticated user's group.

##### How To Use

```javascript
// Name of the authenticated user's group.
_log.info(`Group name: ${_group.name()}`)
```

##### Return

( _string_ )

Name of the authenticated user's group.

---

## remove

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>remove</span>(<span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Removes the group with the specified ID.

##### How To Use

```javascript
// Removes the group:
const group = _group.firstByCode("example")
_group.remove(
    group.getInt("id")
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _int_ | Numeric group ID. |

##### Return

( _boolean_ )

It was successfully deleted.

---

## search

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>search</span>(<span style={{color: '#FF8000'}}>term</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;[Values](/docs/library/objects/Values)&gt;</span>
##### Description

Searches group data for the specified text.

##### How To Use

```javascript
// Searches for groups named "Example".
const groups = _group.search("Example")
for (const group of groups) {
    _log.info(`Group found: ${group.getString("name")}`)
}
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **term** | _string_ | Search term. |

##### Return

( _java.util.List_ )

Data for the groups found.

---

## searchFirst

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>searchFirst</span>(<span style={{color: '#FF8000'}}>term</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Gets the first group whose data matches the search term.

##### How To Use

```javascript
// First group with an email address at @example.com.
const group = _group.search("@example.com")
_out.json(group)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **term** | _string_ | Search term. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Data for the group found.

---

## uid

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>uid</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Gets the UUID of the authenticated user's group.

##### How To Use

```javascript
// UUID of the authenticated user's group.
_log.info(`Group UID: ${_group.uid()}`)
```

##### Return

( _string_ )

UUID of the authenticated user's group.

---

## update

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>update</span>(<span style={{color: '#FF8000'}}>id</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>groupData</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Updates the group with the specified ID.

##### How To Use

```javascript
// Updates the group:
const group = _group.firstByMail("group@example.com")
group.set("name", "New Name")
_group.update(
    group.getInt("id"),
    group
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **id** | _int_ | Numeric group ID. |
| **groupData** | _[Values](/docs/library/objects/Values)_ | Group data to update in the database. |

##### Return

( _boolean_ )

It was successfully updated.

---

#### <span style={{fontWeight: 'normal'}}>_group</span>.<span style={{color: '#008000'}}>update</span>(<span style={{color: '#FF8000'}}>groupData</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Updates the group with the specified ID.

##### How To Use

```javascript
// Updates the group:
const group = _group.firstByMail("group@example.com")
group.set("name", "New Name")
_group.update(
    group
)
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **groupData** | _[Values](/docs/library/objects/Values)_ | Group data to update in the database. |

##### Return

( _boolean_ )

It was successfully updated.

---

