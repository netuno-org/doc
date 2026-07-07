---
sidebar_position: 5
id: relate
title: Relate Data
sidebar_label: Relate Data
description: Link tasks and time records to know who performed which task and how much time was spent.
---

# Relate Data

Create a relationship between tasks and time records to know **who** performed **which task** and **how much time** was spent.

At the end of this step, the **Record** form will be linked to the **Task** table, allowing you to view the associated task directly in the record listing.

## Prerequisites

Before starting, check if you have already completed:

- The creation of the **Task** form with the `name` field.
- The creation of the **Record** form with the basic fields for hours worked.

- The configuration of the corresponding tables in the **Database**.

:::tip
For more details on how to relate data, see the [Interface Guide: Relationships](/docs/academy/ui/relationships-between-forms).
:::

Up to this point, you have created a task management system and a time record, but each list still works in isolation.

It's important to link them so that each time entry clearly indicates which task was performed by a collaborator and during which period.

In this step, you will:

- Create a `select` type field in the **Record** form.
- Configure the field to relate to the **Task** table.
- Update some data to see the relationship working in practice.

## `select` Type Field

Add a field that will allow you to select the task associated with each time entry.

1. In the **Build** environment, open the **Record** form and access the field management.

2. Create a new field with the following settings:

- **Field Title**: `Task`
- **Column Name**: `task_id`
- **Type**: `select`
3. Enable the **Required** option to ensure that every entry is associated with a task.
4. Keep the **Unique Values** option disabled, as there will be many records for the same task.

:::note
We suggest the name `task_id` to maintain a consistent naming pattern throughout the data model.
:::

## Use the `_id` Suffix

The name of the field that references another record should end with `_id`.

This pattern makes it easier to identify that the field represents a relationship with another table and makes the data model more organized.

:::warning
Avoid using generic names like `task` or `ref_task` for relationship fields. 
Standardizing with `_id` helps avoid confusion when you are analyzing data or creating integrations.
:::

## Configure the Relationship Link

Configure the **Link**, which is responsible for relating the `task_id` field to the tasks table.

1. In the newly created field (`task_id`), scroll to the **Link** configuration section.
2. Click **Add**.
3. In the window that opens:

- Select the **task** option.
- Then, select the **name** field.
- Close the window to apply.

Upon completion, the **Link** will be defined as:

```text
task:name
```

This means that:

- The relationship will be made with the **task** table.
- In the interface, the value of the **name** field of the task will be displayed when selected in the `Task` field.

Click the **Save** button to save the field configuration.

:::tip
Whenever possible, use a descriptive field (such as `name`) to display related information, instead of a technical or numeric identifier.
:::

## Update Records

With the relationship field configured, adjust the data to view the result.

1. Access the **Record** form view.
2. Note that the results table now has a new column called **Task**, which will initially be empty.
3. Edit some records:

- Click on a row in the results table to open the edit form.
- In the **Task** field, select the corresponding task.
- Click **Save** to save.

**After saving:**

- The **Task** column in the results table will now display the name of the associated task.
- Each **Record** will be clearly related to a **Task**, allowing for a more complete analysis of the time spent on each activity.

:::note
If there are many records without a defined task, consider updating in batches or defining a temporary default task, according to your data policy.
:::

### Expected Result

The **Record** listing should display:

- A **Task** column populated with the names of the associated tasks.
- Each row representing a time record with its respective task, making it easier to identify where the time was spent.

## Next Steps

In the next topic, you will see how to create a **Service** to expose this data and use it in other parts of the application, such as reports or custom interfaces.
