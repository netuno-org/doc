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

There are 2 pre-created roles (`user_group`):

| Code | Name |
|---|---|
| `administrator` | Administrator |
| `editor` | Editor |

## Organization

A person only has a role **within the context of an organization**—the link is made in `Organization > Members` (`organization_profile`), associating Person/Profile + Organization + Role.

Each page belongs to an **organization**. Pages can have subpages, and subpages belong to the **parent page's organization by default**. Organizations support hierarchy (`parent_id`, "parent" organizations). Permissions are inherited down the organization hierarchy - a member of an organization is also authorized in its descendant organizations, depending on their role.

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

CLUAR uses the `cluar.permission` module to control access to services. Common permission methods include:

- `cluar.permission.requireUserAuthorizedInRootOrganization()` — requires the user to be an Administrator of the root organization
- `cluar.permission.requireUserAuthorizedToEditPage(pageId)` — requires the user to be an Administrator or Editor in an organization that owns the page (or one of its ancestor organizations via hierarchy)
- `cluar.permission.requireUserAuthorizedToManagePage(pageId)` — requires the user to be an Administrator in an organization that owns the page
- `cluar.permission.requireUserAuthorizedInOrganization(organizationId)` — requires Administrator access in the specified organization (or its descendants, depending on context)
- `cluar.permission.requireUserAuthorizedToEditInOrganization(organizationId)` — requires Administrator or Editor access in the specified organization

Services call these methods at the beginning to enforce permissions. Pages are associated with organizations via `page_organization`, and permission checks respect organization hierarchy (inherited downwards).

Any service without explicit permission checks will behave according to how it's written — always add appropriate permission checks when creating protected endpoints.

## Interface: the menu also filters by permission

In addition to server-side blocking, the Reserved Area's side menu (`website/src/components/SideMenu`) filters the visible items according to the logged-in person's role and permissions—so it does not show options that they would not have permission to use.