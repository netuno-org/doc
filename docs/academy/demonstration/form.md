---
sidebar_position: 3
id: form
title: Form
---


# Form

In this step of the demo, you will create the **Task** form and configure the first data field.

:::info Reference
For a more detailed explanation of forms, see the [Interface Guide: Forms](/docs/academy/ui/forms).
:::

## Objective

By completing this step, you will have:

- A form named **Task**.
- An associated table in the database.
- A required field to store the task name.
- An interface ready to create, edit, search, and delete records.

## Prerequisites

Verify that:

- The demo application has already been created.
- The configuration step has already been completed.
- You are in the platform's development area.

## Create the Form

1. In the upper-right corner, click **Build**.
2. In the main menu, go to **Management > Forms**.
3. In **Form Title**, enter `Task`.
4. In **Table Name**, enable the **Auto** option.
5. Click **Save**.

:::note
- **Form Title** defines the name displayed in the sidebar.
- **Table Name** defines the technical identifier used in the database.
:::

After saving, the **Task** form will be available in the left sidebar.

## Create the First Field

With the form created:

1. In the sidebar, click **Task**.
2. In **Display Name**, enter `Name`.
3. Confirm that the technical name was generated automatically with lowercase letters.
4. Enable the **Primary key** option (unique field).
5. Enable the **Not Null** option (required field).
6. In **Type**, select `text`.
7. Click **Save**.

:::tip
- **Primary key** ensures unique values for each record.
- **Not Null** makes the field required.
- The `text` type allows storing plain text.
:::

## Validate the Result

Open the preview area and confirm that:

- The **Task** form is available.
- The **Name** field appears for entry.
- It is possible to create a new record.
- The **Name** field is required.

:::info Expected result
If the configuration is correct, the form will be ready for record creation, editing, search, and deletion operations.
:::

## Next Steps

Proceed to the next step, **Database**, to explore and modify the demo application.