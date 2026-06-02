---
sidebar_position: 3
id: form
title: Form
---

# Form

In this demonstration step, you will create the **Task** form and configure the first data field.

:::info REFERENCE
For a more detailed explanation of forms, see the [Interface Guide: Forms](doc/docs/academy/ui/forms.md).
:::

## Objective

Upon completing this step, you will have:

- A form called **Task**.
- An associated table in the database.
- A required field to store the task name.
- An interface ready to create, edit, search, and remove records.

## Prerequisites

Verify that:

- The demonstration application has already been created.
- The configuration step has already been completed.
- You are in the platform's development area.

## Create the Form

1. In the upper right corner, click **Build**.
2. In the main menu, go to **Management > Forms**.
3. In **Form Title**, fill in `Task`.
4. In **Table Name**, enable the **Auto** option.
5. Click **Save**.

:::note NOTE
- **Form Title** defines the name shown in the sidebar menu.
- **Table Name** defines the technical identifier used in the database.
:::

After saving, the **Task** form will be available in the left sidebar menu.

## Create the First Field

With the form created:

1. In the sidebar menu, click **Task**.
2. In **Display Name**, fill in `Name`.
3. Verify that the technical name was automatically generated in lowercase.
4. Enable the **Primary Key** option (unique field).
5. Enable the **Not Null** option (required field).
6. In **Type**, select `text`.
7. Click **Save**.

:::tip TIP
- **Primary Key** ensures unique values for each record.
- **Not Null** makes the field required.
- The `text` type allows storing plain text.
:::

## Validate the Result

Open the preview area and verify that:

- The **Task** form is available.
- The **Name** field appears for input.
- It is possible to create a new record.
- The **Name** field is required.

:::info EXPECTED RESULT
If the configuration is correct, the form will be ready for create, edit, search, and remove record operations.
:::

## Next Steps

Proceed to the next **Database** step to explore and modify the demo application.