---
sidebar_position: 2
id: forms
title: Forms
---

## How to create forms

Form management is the area where you can create and manage your application's data structures. Each form you create here becomes an interface in the backoffice for inserting, editing, and viewing data, in addition to corresponding to a table in the database.

It is divided into two essential and mandatory steps, along with a brief look at **form grouping** and **diagram mode**.

![form-management.png](/docs/assets/academy/ui/forms/form-management-pt.png)

## 1 - Form Title

It is the name of your form, so enter a clear and intuitive name.
It will be displayed in the backoffice sidebar in the following sections: **Forms** (in View mode) and **Manage Fields** (in Build mode).

![form-name-title.png](/docs/assets/academy/ui/forms/form-name-title-pt.png)


## 2 - Table Name

It is the technical name that will be used to create the corresponding table in the database. This name is used internally by the system and by developers.

**How to fill it in:**

- **Manual:** Enter a unique singular name, in lowercase letters and without spaces or special characters (use the `snake_case` format, for example: customer_registration).
- **Automatic:** Check the **Auto** box next to the field. The system will automatically generate a technical name based on the **Form Title**. This is the recommended practice to maintain consistency.
- 

![form-name-table.png](/docs/assets/academy/ui/forms/form-name-table-pt.png)

## 3 - Form Grouping (Parent)

This field allows you to create a hierarchy between forms. By selecting a "Parent", you are defining that the current form is a sub-item of the selected form. It will be displayed in the sidebar in the following sections: "Forms" (in View mode) and "Manage Fields" (in Build mode) of the associated main form.

**How to fill it in:**

- Leave it blank if this is a main form (such as "Customer").
- Select an existing form from the list if you want to create a dependency relationship. For example, an "Addresses" form could have "Customer" as its parent.

![form-grouping-parent.png](/docs/assets/academy/ui/forms/form-grouping-parent-pt.png)

## 4 - Control Options

These checkboxes enable specific features for the form.

- **Show ID:** Check this option if you want the unique identification field (ID) of each record to be visible in the form's data listing.
- **Active Control:** Enables a status control (Active/Inactive) for each record. This allows you to deactivate an item without having to delete it from the database.
- **User Control:** Makes each record created in the form be associated with the user who created it. It is useful for tracking who created each entry.
- **Group Control:** Associates each record with a user group. This option is commonly used to manage data access permissions based on the groups registered in the system.

![form-control-options.png](/docs/assets/academy/ui/forms/form-control-options-pt.png)

## 5 - Sorting settings and associated users

These fields define default values for new records and the display order.

- **Reorder:** Set a number for the order in which this form will appear in the sidebar. Lower numbers (such as 0, 1, 2) appear first.
- **User:** Select a default user that will be associated with new records if "User Control" is enabled. "General" means there is no specific user.
- **Group:** Select a default group that will be associated with new records if "Group Control" is enabled. "General" means there is no specific group.

![form-sort-settings-and-associated-users.png](/docs/assets/academy/ui/forms/form-sort-settings-and-associated-users-pt.png)

## 6 - Diagram Mode

The **Diagram** screen offers a graphical visualization of your application's entire data structure. Known as an Entity-Relationship Diagram (ERD), it displays all forms (which represent database tables), their respective fields, and the connections between them.
This tool is essential for quickly understanding how your application's information is organized and connected, making analysis and development easier.

![form-diagram.png](/docs/assets/academy/ui/forms/form-diagram-pt.png)

> Try creating several forms and fields, and view them in diagram mode!

## Next Step

Save the form and move on to the next step: creating fields!

See [here](/docs/academy/ui/fields) how to start creating fields.