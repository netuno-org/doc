---
sidebar_position: 6
id: groups-users
title: Groups and Users
---

## Creation and Editing

This section is the administrative center of your application. Here, you manage credentials, privilege levels, and audit activities performed in the system, ensuring that each user has access to exactly what they need.

#### Requirements
- **Netuno Access:** You must be logged in to your instance and have **Administrator** permission.
- **Application Created:** You must have a previously created application. Learn more: [Interface Guide: Create Application](/docs/academy/app-create).
- **Forms:** Have at least one or two forms created. Learn more: [Interface Guide: Create Form](/docs/academy/ui/forms).

### Menu

Provides access to settings for managing security, users, groups, and log monitoring.

![access-menu-en.png](/docs/assets/academy/ui/groups-users/access-menu-pt.png)

Access "view mode" and click "Developer" in the top right corner of the screen.

## Password

Allows changing the system access password.

When you click "Developer" in the top right corner of the screen, access the "Password" section.

- Enter your old password.
- Enter your new password. **It must be at least 8 characters long, including numbers, uppercase and lowercase letters, and special characters.**
- Confirm the password and click the **Save** button.
- After this action, a success message will be displayed.

![password-en.png](/docs/assets/academy/ui/groups-users/password-pt.png)

## User

This section is the control center for managing user profiles.

When you click "Developer" in the top right corner of the screen, access the "User" section.

#### Requirements

- The user to be edited must already be registered in the database.

 ### 1 - Edit Existing User

This section describes how to locate and update the information of a user who is already registered in the system.

![edit-existing-user-en.png](/docs/assets/academy/ui/groups-users/edit-existing-user-pt.png)

**How to edit a user:**

- Select a registered user and change the desired information.
- Click the **Save** button to confirm the change.
- After this action, a success message will be displayed.

### 2 - Add New User

This section allows you to register new users, defining their access credentials and permission levels within the system.

![create-new-user-en.png](/docs/assets/academy/ui/groups-users/create-new-user-pt.png)

- **Name:** Enter the user's name.
- **Username:** Enter the login name — it must contain only lowercase letters separated by a period.
- **Password:** Enter the new user's initial system access password.
- **Email:** Enter the contact email.
- **None:** Allows blocking the user's password so they cannot log in.
- **Group:** Select the main group the user belongs to.
- **Active:** Allows enabling or disabling a user in the system.
- **Save Button:** Click to save the new user's information.

### 3 - User Permissions

Permission management is done through an intuitive interface organized by tabs **(Forms and Reports)**.

This allows you to configure in detail what the user can access right after creation or during editing.

In the **Read, Write, and Delete** columns, you will find a dropdown menu with different levels of scope:

- **None:** The user has no permission for this action.
- **Owner:** The user can only interact with records they created themselves.
- **Group:** The user can interact with records created by any member of their group.
- **All:** Full permission. The user can access records from all users and groups.

#### Forms Tab

In this tab, you control the user's interaction with the application's data entry modules.

![user-permissions-forms-en.png](/docs/assets/academy/ui/groups-users/user-permissions-forms-pt.png)

For each listed form, you must define the following parameters:

- **Active:** Defines visibility. If checked, the form will appear in the user's side menu.
- **Read:** Sets the permission level for viewing records only.
- **Write:** Defines whether the user has permission to insert new data or edit existing information.
- **Delete:** Defines whether the user has authority to remove records from the database.

#### Reports Tab

Similar to forms, this tab controls access to analytical data viewing and extraction modules.

![user-permissions-report-en.png](/docs/assets/academy/ui/groups-users/user-permissions-report-pt.png)

For a report to be available, the **Active** option must be selected so the user has permission to view it.

- **Save:** Click the "Save" button to save changes.

### 4 - Action Buttons

![action-buttons-en.png](/docs/assets/academy/ui/groups-users/action-buttons-pt.png)

 - **Save:** Saves all changes made.

 - **Clear:** Clears all form fields, reverting to the initial "Add New User" state.

 - **Impersonate:** A powerful Netuno tool. After saving a user's permissions and clicking the **"Impersonate"** button, you can view the system exactly as the registered user will use it. This is essential for testing whether permissions have been configured correctly.

 - **Delete:** Permanently removes the user record.

## Group

Here is the central panel for managing access profiles in Netuno, allowing you to perform two actions: **"Add"** a new group and **"Edit"** an existing group.

A group works as an access profile or rule that determines what each set of users can view or do within the system.

Instead of configuring permissions individually for each user, you define them in the group and link users to it, ensuring scalable and organized administration.

When you click **"Developer"** in the top right corner of the screen, access the **"Group"** section.

#### Requirements

- **Administrative Access:** You must have a profile with administrator permissions to create or modify groups.

### How to Add a New Group

![add-new-group-en.png](/docs/assets/academy/ui/groups-users/add-new-group-pt.png)

- Locate the "Add" section.
- **Name:** Give the group a clear, descriptive name.
- **Allow Login:** Check this option if users in this group should be able to log in to the system.
- **Administrator:** Check this option only if users in this group have full access to the system.
- **Email:** Enter a contact email for the group.
- **Active:** Check this option to activate the settings in the system.
- **Save Button:** Click to save the group settings.
- **Clear Button:** Click to clear all form fields.

### How to Edit an Existing Group

![edit-existing-group-en.png](/docs/assets/academy/ui/groups-users/edit-existing-group-pt.png)

- Select the registered group in the "Edit existing group" field at the top of the page.
- Click the "Select a group" drop-down.
- Choose the group you want to edit from the list.
- Wait for the group data to automatically fill in the fields (Name, Email, and options).
- Make the desired changes and click "Save".

## Record History

The "Record History" screen is your application's logging and auditing tool.

When a user creates, edits, or deletes a record in any form, the system will save a "log" of that action.

This page allows you to search and filter this entire history. This is essential for:

 - **Security:** Monitor suspicious or unauthorized activities.

 - **Auditing:** Maintain a compliance record of all data changes.

 - **Diagnostics:** Understand how a specific record reached its current state. Example: "who deleted this customer?".

### How to Search the Record History

![log-en.png](/docs/assets/academy/ui/groups-users/log-pt.png)

Fill in one or more "Filters" fields to find the log records you want to search for, then click the "Search" button.

- Access the "Record History" page.
- Fill in the desired filters to narrow your search. You do not need to fill in all fields. Example: To see everything the user "Developer" did today:
- Select "Developer" in the User field.
- In the Start field, select today's date and time.
- In the End field, select today's date and time.
- Click the "Search" button.
- The results (the list of logs) will be displayed below the search form.

## Log Out

Click "Log Out" to securely end your session in the system.