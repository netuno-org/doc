---
sidebar_position: 12
id: permissions
title: Permissions
sidebar_label: Permissions
---

## Introduction

CLUAR controls access to the backoffice through **roles** (groups), assigned to people within an **organization**. Every REST service on the server is classified into an access category, and only someone with the right role, within the right organization, can use it.

## Roles

There are 5 pre-created roles (`user_group`):

| Code | Name |
|---|---|
| `administrator` | Administrator |
| `editor` | Editor |
| `author` | Author |
| `contributor` | Contributor |
| `subscriber` | Subscriber |

:::info Not every role has permissions assigned yet
Today, only **Administrator** and **Editor** actually have access to anything — they're the only roles referenced in the access rules (see below). Author, Contributor and Subscriber already exist as options in the form, but don't have any access configured yet; assigning one of these roles to someone doesn't currently grant them access to anything in the backoffice.
:::

## Organization

A person only has a role **within the context of an organization** — the link is made under `Organization > Members` (`organization_people`), associating Person + Organization + Role.

Today only one organization exists, with the code `admins`, and it's against this one that all permissions are checked. The `organization` entity supports hierarchy (`parent_id`, "parent" organizations), but this hierarchy isn't used by the current permission rules yet — all checks point directly to the `admins` organization.

## First access to edit mode

CLUAR distinguishes two different places where you log in:

- The **Netuno backoffice** (port `9000` in development) — this is where Netuno users (`netuno_user`, the username/password pair) and all entities, including Person and Roles, are managed directly.
- The website's own **Reserved Area** (`/login`, port `3000` in development) — this is where the content editor logs in day-to-day, to access page edit mode.

To log into the Reserved Area and have edit mode available, you need a Netuno user whose login is associated with a **Person**, linked to the `admins` organization with the **Administrator** or **Editor** role (see [Organization](#organization) above).

### Default user

CLUAR's `server/setup/030-people.js` already creates, by default, an "admin" Person linked to the Netuno user with `id: 2`, and `server/setup/050-organization_people.js` already links that Person to the `admins` organization with the **Administrator** role — meaning this user is already born with full access.

This default user's login is:

```
username: admin
password: admin
```

With these credentials, you can log straight into the Reserved Area (`/login`) already as Administrator — with no extra step needed in the Netuno backoffice first.

:::info Change the default password in production
`admin`/`admin` is a known, predictable credential. Before a site goes to production, change this user's password (or create a new Administrator and disable this one).
:::

### Creating new users

There are two possible ways to do this:

**Through the Reserved Area (recommended):** under `Users > Create User`, a single form asks for name, username, password, email, Organization and Role — and creates everything at once: the Netuno user, the Person (already linked to that user) and the link to the chosen organization/role. There's no need to go through the Netuno backoffice.

**Only through the Netuno backoffice:** since the backoffice gives direct access to all entities, it's also possible to do the same 3 steps manually, without leaving it:

1. Create the Netuno user (`netuno_user`), with the chosen username/password.
2. Create a **Person**, associating them with that Netuno user.
3. Under `Organization > Members`, associate that Person with the `admins` organization, with the Administrator or Editor role.

Either way, the person that was created can already log into `/login` and have access to edit mode.

## How permissions are applied

Every service on the server is classified into one of these categories, defined in `server/core/_service_config.js`:

| Category | Who has access | Examples |
|---|---|---|
| **Public** | Anyone, without logging in | Contact, avatar, login |
| **Content management** | Administrator + Editor | Pages, versions, components, dictionary, actions |
| **Site administration** | Administrator only | Settings, languages, sync |
| **Access management** | Administrator only | Organizations, people, users |

Any service not listed in one of these categories is **denied by default** — this is a deliberate decision in the code (explicitly commented in the file), so that forgetting to classify a new service results in it being blocked, rather than being left openly accessible by mistake.

:::info Permissions aren't applied in the development environment
In the `dev` environment, `_service_config.js` allows every service right at the start, before any checks — meaning **permissions are only actually applied in production/staging**. When testing locally, any logged-in user has access to everything, regardless of role.
:::

## Interface: the menu also filters by permission

Besides the server-side blocking, the Reserved Area's side menu (`website/src/components/SideMenu`) also filters the visible items according to the logged-in person's role — so it doesn't show options they wouldn't be allowed to use.

:::info Keeping the two lists in sync
The "who can see what" list in `SideMenu` is manually kept aligned with `CONTENT_MANAGEMENT_PATHS`, `SITE_ADMIN_PATHS` and `ACCESS_MANAGEMENT_PATHS` from `_service_config.js` — these are two separate lists, one on the frontend and one on the backend. When adding a new protected service, both need to be updated; changing only the server hides the mistake (the menu keeps showing an option that will actually be denied), and changing only the menu doesn't actually protect anything.
:::

## How to protect a new service

1. Create the service normally under `server/services/`.
2. Add the service's path (`path/method`) to the right list in `server/core/_service_config.js` — `CONTENT_MANAGEMENT_PATHS`, `SITE_ADMIN_PATHS` or `ACCESS_MANAGEMENT_PATHS` — depending on who should be able to use it. If it's public, add it to `PUBLIC_PATHS`.
3. If the service has a corresponding item in the Reserved Area's menu, also update `SideMenu` so the filter matches the actual permission.