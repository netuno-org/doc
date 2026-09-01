---
id: group
title: Group
sidebar_label: Group
---

Management of the application groups and obtaining the authenticated user's group data.

---

## all

---

#### _group.all() : java.util.List
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

#### _group.allByCode(code: string) : java.util.List
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

#### _group.code() : string
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

#### _group.create(groupData: [Values](/docs/library/objects/Values)) : int
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

#### _group.createIfNotExists(groupData: [Values](/docs/library/objects/Values)) : boolean
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

#### _group.data() : [Values](/docs/library/objects/Values)
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

#### _group.firstByCode(code: string) : [Values](/docs/library/objects/Values)
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

#### _group.firstByMail(mail: string) : [Values](/docs/library/objects/Values)
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

#### _group.firstByName(name: string) : [Values](/docs/library/objects/Values)
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

#### _group.get(id: int) : [Values](/docs/library/objects/Values)
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

#### _group.get(idOrUid: string) : [Values](/docs/library/objects/Values)
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

#### _group.id() : int
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

#### _group.load() : [Group](/docs/library/resources/group)
##### Return

( _[Group](/docs/library/resources/group)_ )


---

## name

---

#### _group.name() : string
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

#### _group.remove(id: int) : boolean
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

#### _group.search(term: string) : java.util.List
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

#### _group.searchFirst(term: string) : [Values](/docs/library/objects/Values)
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

#### _group.uid() : string
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

#### _group.update(id: int, groupData: [Values](/docs/library/objects/Values)) : boolean
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

#### _group.update(groupData: [Values](/docs/library/objects/Values)) : boolean
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

