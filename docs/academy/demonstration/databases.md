---
sidebar_position: 4
id: databases
title: Database
---

# Database

In this step, we will explore the **database** created automatically from the **Task** form defined earlier.

When creating the **Task** form with the **Name** field, Netuno created the `task` table with the `name` column in the database, according to the names defined when creating the form.

The **technical names** of the fields (for example, `task`, `name`, `task_id`) are used in programming and SQL queries, and do not correspond to the display names shown in the interface.

## Queries

In this section, we will run queries directly on the database using Netuno's management interface.

1. Access the **Build** environment.
2. In the menu, click **Management > Query**.
3. In the query editor, paste and run the commands below.

### Simple Queries

List only the task names:

```sql
SELECT name
FROM task;
```

List all fields in the task table:

```sql
SELECT *
FROM task;
```

List all fields in the record table:

```sql
SELECT *
FROM record;
```

List all fields in the worker table:

```sql
SELECT *
FROM worker;
```

When you click **Run**, Netuno generates a results table for **each** command separated by a semicolon (`;`).  
This is useful when you want to run several queries at once.

### Query with Relationships

Now run a query that relates all the tables:

```sql
SELECT
  task.name,
  record.start,
  record.end,
  worker.name
FROM task
INNER JOIN record
  ON task.id = record.task_id
INNER JOIN worker
  ON worker.id = record.worker_id;
```

This query returns:

- The task name.
- The start and end of each record.
- The name of the worker associated with each record.

It demonstrates how relationships between tables allow you to combine information from different entities in the application.

## Diagram

To view the database structure more intuitively, use Netuno's **Diagram**.

1. Access the **Build** environment.
2. In the menu, click **Management > Diagram**.

In the Diagram, you can:

- Zoom in or out.
- Export the diagram as an image.

These actions are available in buttons on the right side of the diagram panel.

Netuno automatically creates the relationship arrow lines based on the **Links** configuration in the fields (for example, `select` fields that point to other tables).

## Best Practices

When modeling your database in Netuno, follow these best practices:

- Use the `_id` suffix on fields that represent relationships, for example:
  - `task_id`
  - `worker_id`
- Avoid using plural table and field names, such as `tasks`, `records`, or `workers`.

Avoiding plurals helps to:

- Keep names shorter and more readable.
- Reduce ambiguity when writing queries.
- Make reading easier in forms and diagrams, especially when there are multiple relationships.

:::tip Naming convention
By default, always use **singular names** for forms, tables, and fields.  
Examples: `task`, `record`, `worker`, `task_id`, `worker_id`.
:::

## Next Step

Proceed to the next step, **Relating Data**, to continue with the demo application.