---
sidebar_position: 12
id: permissions
title: Permissions
sidebar_label: Permissions
---

How access to the backoffice is controlled by roles and organizations.

## Introduction

CLUAR controls access to the backoffice through **roles** (groups), assigned to people within an **organization**. Each server REST service is classified into an access category, and only those with the right role, within the right organization, can use it.

## Roles

There are 5 pre-created roles (`user_group`):

| Code | Name |
|---|---|
| `administrator` | Administrator |
| `editor` | Editor |
| `author` | Author |
| `contributor` | Contributor |
| `subscriber` | Subscriber |

:::info Not all roles have permissions assigned yet
Today, only **Administrator** and **Editor** actually have access to anything—they are the only roles referenced in the access rules (see below). Author, Contributor, and Subscriber already exist as options in the form, but they do not yet have any access configured; assigning one of these roles to someone does not currently give them access to anything in the backoffice.
:::

## Organization

A person only has a role **within the context of an organization**—the link is made in `Organization > Members` (`organization_people`), associating Person + Organization + Role.

Currently there is only one organization, with the code `admins`, and that is where all permissions are checked. The `organization` entity supports hierarchy (`parent_id`, "parent" organizations), but this hierarchy is not yet used in the current permission rules—all checks point directly to the `admins` organization.

## First access to edit mode

CLUAR distinguishes two different places where you log in:

- The **Netuno backoffice** (port `9000` in development)—this is where Netuno users are managed directly (`netuno_user`, the username/password pair) and all entities, including Person and Roles.
- The website's own **Reserved Area** (`/login`, port `3000` in development)—this is where the content editor logs in day to day to access the pages' edit mode.

To enter the Reserved Area and have edit mode available, you need a Netuno user with a login that is associated with a **Person**, linked to the `admins` organization with the **Administrator** or **Editor** role (see [Organization](#organization) above).

### Default user

CLUAR's `server/setup/030-people.js` already creates, by default, an "admin" Person linked to the Netuno user with `id: 2`, and `server/setup/050-organization_people.js` already links that Person to the `admins` organization with the **Administrator** role—that is, this user is already created with full access.

The default user's login is:

```
username: admin
password: admin
```

With these credentials, you can log in directly to the Reserved Area (`/login`) as an Administrator—without needing any extra step in the Netuno backoffice first.

:::info Change the default password in production
`admin`/`admin` is a known and predictable credential. Before a site goes to production, change this user's password (or create a new Administrator and deactivate this one).
:::

### Creating new users

There are two possible paths:

**Through the Reserved Area (recommended):** in `Users > Create User`, a single form asks for name, username, password, email, Organization, and Role—and creates everything at once: the Netuno user, the Person (already linked to that user), and the link to the chosen organization/role. There is no need to go through the Netuno backoffice.

**Only through the Netuno backoffice:** since the backoffice provides direct access to all entities, you can also perform the same 3 steps manually without leaving it:

1. Create the Netuno user (`netuno_user`) with the chosen username/password.
2. Create a **Person**, associating it with that Netuno user.
3. In `Organization > Members`, associate that Person with the `admins` organization, with the Administrator or Editor role.

In both cases, the created person can already log in at `/login` and access edit mode.

## How permissions are applied

Each server service is classified into one of these categories, defined in `server/core/_service_config.js`:

| Category | Who has access | Examples |
|---|---|---|
| **Public** | Anyone, without login | Contact, avatar, login |
| **Content management** | Administrator + Editor | Pages, versions, components, dictionary, actions |
| **Site administration** | Administrator only | Settings, languages, synchronization |
| **Access management** | Administrator only | Organizations, people, users |

Any service that is not listed in one of these categories is **denied by default**—this is a deliberate decision in the code (explicitly commented in the file), so that forgetting to classify a new service results in a block, not free access through oversight.

:::info Permissions are not applied in the development environment
In the `dev` environment, `_service_config.js` releases all services right at the start, before any check—that is, **permissions are only actually applied in production/staging**. When testing locally, any logged-in user has access to everything, regardless of role.
:::

## Interface: the menu also filters by permission

In addition to server-side blocking, the Reserved Area's side menu (`website/src/components/SideMenu`) also filters the visible items according to the logged-in person's role—so it does not show options that they would not have permission to use.

:::info Keep the two lists synchronized
The "who can see what" list in `SideMenu` is manually kept aligned with `CONTENT_MANAGEMENT_PATHS`, `SITE_ADMIN_PATHS`, and `ACCESS_MANAGEMENT_PATHS` from `_service_config.js`—they are two separate lists, one on the frontend and one on the backend. When adding a new protected service, you must update both; changing only the server hides the error (the menu keeps showing an option that will actually be denied), and changing only the menu does not actually protect anything.
:::

## How to protect a new service

1. Create the service normally in `server/services/`.
2. Add the service path (`path/method`) to the correct list in `server/core/_service_config.js`—`CONTENT_MANAGEMENT_PATHS`, `SITE_ADMIN_PATHS`, or `ACCESS_MANAGEMENT_PATHS`—depending on who should be able to use it. If it is public, add it to `PUBLIC_PATHS`.
3. If the service has a corresponding item in the Reserved Area menu, also update `SideMenu` so the filter matches the actual permission.