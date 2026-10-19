---
sidebar_position: 5
id: relate
title: Relating Data
description: Relate tasks and time records to know who performed which task and how much time was spent.
---

# Relating Data

Create a relationship between tasks and time records to know **who** performed **which task** and **how much time** was spent.

By the end of this step, the **Record** form will be related to the **Task** table, allowing you to view the associated task directly in the records listing.

## Prerequisites

Before you begin, make sure you have already completed:

- The creation of the **Task** form with the `name` field.
- The creation of the **Record** form with the basic fields for hours worked.
- The configuration of the corresponding tables in the **Database**.

:::tip
For more details on how to relate data, see the [Interface Guide: Relations](/docs/academy/ui/relationships-between-forms).
:::

So far, you have created task management and a time log, but each list still works in isolation.

It is important to relate them, so that each time record clearly indicates which task was performed by a collaborator and in which period.

In this step, you will:

- Create a field of type `select` in the **Record** form.
- Configure the field to relate to the **Task** table.
- Update some data to see the relationship working in practice.

## Field of Type `select`

Add a field that will allow you to select the task associated with each time record.

1. In the **Build** environment, open the **Record** form and access field management.
2. Create a new field with the following settings:
   - **Field Title**: `Task`
   - **Column Name**: `task_id`
   - **Type**: `select`
3. Enable the **Required** option to ensure that every record is associated with a task.
4. Keep the **Unique Values** option disabled, since there will be many records for the same task.

:::note
We suggest the name `task_id` to maintain a consistent naming standard across the entire data model.
:::

## Use the `_id` Suffix

The name of the field that references another record must end with `_id`.
This pattern makes it easier to identify that the field represents a relationship with another table and keeps the data model better organized.

:::warning
Avoid using generic names such as `task` or `ref_task` for relationship fields.
Standardizing with `_id` helps avoid confusion when you are analyzing data or creating integrations.
:::

## Configure the Relation Link

Configure the **Link**, which is responsible for relating the `task_id` field to the tasks table.

1. In the newly created field (`task_id`), scroll down to the **Link** configuration section.
2. Click **Add**.
3. In the window that opens:
   - Select the **task** option.
   - Then select the **name** field.
   - Close the window to apply.

When you finish, the **Link** will be defined as:

```text
task:name
```

This means that:

- The relationship will be made with the **task** table.
- In the interface, the value of the **name** field of the task will be displayed when selecting in the `Task` field.

Click the **Save** button to save the field configuration.

:::tip
Whenever possible, use a descriptive field (such as `name`) to display the related information, instead of a technical or numeric identifier.
:::

## Update Records

With the relation field configured, adjust the data to visualize the result.

1. Access the view of the **Record** form.
2. Note that now the results table has a new column called **Task**, which will initially be empty.
3. Edit some records:
   - Click on a row in the results table to open the edit form.
   - In the **Task** field, select the corresponding task.
   - Click **Save** to save.

**After saving:**

- The **Task** column in the results table will now display the name of the associated task.
- Each **Record** will be clearly related to a **Task**, allowing a more complete analysis of the time spent on each activity.

:::note
If there are many records without a defined task, consider updating them in batches or defining a temporary default task, according to your data policy.
:::

### Expected Result

The **Record** listing should display:

- A **Task** column filled with the names of the associated tasks.
- Each row representing a time record with its respective task, making it simpler to identify where the time was invested.

## Next Steps

In the next topic, you will see how to create a **Service** to expose this data and use it in other parts of the application, such as reports or custom interfaces.