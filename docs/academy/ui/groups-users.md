---
sidebar_position: 6
id: groups-users
title: Groups and Users
---

## Creating/Editing Groups and Users

This section covers the creation and editing of passwords, groups, users, and the viewing of log histories, as well as the control of their access permissions, aiming to simplify and organize management.

This menu provides access to your own account settings and system information. You need to access "view mode" and click on "Developer" in the upper right corner of the screen.

### Requirements
- **Access to Netuno:** You must be logged into your Netuno instance.

- **Created Application:** You must have a previously created application. If you don't have one yet, follow the previous app creation tutorials.

- **Forms:** Have at least one or two forms created, as we will use them as examples to define permissions.

![access-menu-pt.png](/docs/assets/academy/ui/groups-users/access-menu-pt.png)

## Password

Allows you to change your own system access password. By clicking on "Developer" in the upper right corner of the screen, access the "Password" section.

- Enter your current password.

- Enter your new password. It must contain at least 8 characters including numbers, uppercase and lowercase letters, and special characters.

- Confirm the password and click the **Save** button. After this action, a success message will be displayed.

![password-pt.png](/docs/assets/academy/ui/groups-users/password-pt.png)

## User

This is the control center for managing user accounts. By clicking on "Developer" in the upper right corner of the screen, access the "User" section. ### Requirements
- Administrator permissions to access and modify users.

**Edit existing user:** A menu to select an already registered user and load their data for editing.

**How ​​to edit a user:** Select a registered user and change the existing information. Click the "Save" button to confirm the change. After this action, a success message will be displayed.

**Add new user:** The basic account identification fields (Name, Username, Password, Email, Group).

#### How to add a new user
In the "Add new user" section, fill in all fields:

- **Name:** The person's full name.

- **Username:** The login name (only lowercase letters and separated by periods, example: zuly.silva).

- **Password:** The access password. (must have at least 8 characters, including: lowercase and uppercase letters, numbers and special characters).

- **Email:** The contact email.

- **None:** Allows you to disable the system access password.

- **Group:** Select the main group to which the user belongs (example: "Administrator", "Manager").

- **Active:** Check this option to allow the user to log in.

- **Permissions:** Configure access permissions.

- **Save Button:** Click to save the new user in the system.

## User Permissions

The tabbed section ("Forms" and "Reports") allows you to define detailed permissions for the selected or newly created user.

#### Forms Tab
Controls access to data entry forms for each listed form, e.g., (Automotive, Vehicles, Registration), define the permissions:

- **Active:** Check if the user should have access to this form (it will appear in the side menu for them).

- **Read:** Define what they can read.

- **Write:** Define what they can create or edit.

- **Delete:** Define what they can delete.

#### Reports Tab
Controls access to data visualization reports. Click the "Reports" tab (next to "Forms") and check "Active" for the reports the user should have permission to view.

- **Save:** Click the "Save" button at the bottom of the page.

## Action Buttons

**Save:** Saves all changes made.

**Clear:** Clears all form fields, reverting to the initial "Add new user" state.

**Customize:** A powerful Netuno tool. After saving a user's permissions, you can click "Customize" to view the system exactly as the registered user will use it. This is essential to test if the permissions have been configured correctly.

**Delete:** Permanently removes the user's record.

![create-and-edit-users-pt.png](/docs/assets/academy/ui/groups-users/create-and-edit-users-pt.png)

## Group

This page is used to create and manage user groups. A "Group" is a profile (such as "Administrators", "Sales", "Customers", or "Managers") that defines a set of rules and access. This makes managing permissions much easier and more organized.

This section allows two main actions: "Add" a new group or "Edit" an existing group.

By clicking "Developer" in the upper right corner of the screen, access the "Group" section.

### Requirements
- Have administrator permission to create or modify user groups.

#### How to Add a New Group

- Locate the "Add" section.

- **Name:** Give a A clear and descriptive name for the group (example: "Sales Team", "Management", "Supervision"). Configure Options: Define the main options for this group:

- **Allow Login:** Check this option if users in this group should be able to log in to the system.

- **Administrator:** Check this option only if users in this group have full access to the system (super-users).

- **Active:** Check this option to activate the settings in the system.

- **Email:** Enter a contact email for the group (optional, it can be a distribution email such as "sales@yourcompany.com"). Click the "Save" button.

#### How to Edit an Existing Group

- Select the registered group in the "Edit existing group" input at the top of the page.

- Click the "Select a group" checkbox.

- Choose the group you want to edit from the list.

- Wait for the group data to automatically fill in the fields (Name, Email, and options).

- Make the desired changes (example: deactivate an old group by changing "Active" or change its name).

After making the changes, click "Save".

![create-and-edit-groups-pt.png](/docs/assets/academy/ui/groups-users/create-and-edit-groups-pt.png)

## Log History

The "Log History" screen is the logging and auditing tool for your application. By clicking "Developer" in the upper right corner of the screen, access the "Log" section.

When a user creates, edits, or deletes a record in any form (example: "Client", "Product", etc.), the system will save a "log" of this action. This page allows you to search and filter all this history. This is essential for:

> *Security:* Monitoring suspicious or unauthorized activities.

> *Auditing:* Maintaining a compliance record of all data changes.

> *Diagnosis:* Understanding how a specific record reached its current state (example: "who deleted this client?").

### How to Search the Log History

Fill in one or more fields (filters) to find the log records you want, and then click "Search".

- Access the "Log History" page.

- Fill in the desired filters to limit your search. It is not necessary to fill in all fields. Example: To see everything the user "Developer" did today:
- Select "Developer" in the User field.

- In the Start field, select today's date and time "00:00".
- In the End field, select today's date and time "23:59".

- Click the "Search" button.

- The results (the list of logs) will be displayed below the search form.

![log-pt.png](/docs/assets/academy/ui/groups-users/log-pt.png)

## Logout

Click "Logout" to securely end your session on the system. By clicking "Developer" in the upper right corner of the screen, access the Logout section.

