---
sidebar_position: 4
id: database
title: Database
---

# Database

In this step, we will explore the **database** automatically created from the **Task** form defined earlier.

When creating the **Task** form with the **Name** field, Netuno created the `task` table with the `name` column in the database, according to the names defined when the form was created.

The **technical names** of the fields (e.g., `task`, `name`, `task_id`) are used in programming and SQL queries, and do not correspond to the display names shown in the interface.

## Queries

In this section we will execute queries directly in the database using Netuno's management interface.

1. Access the **Build** environment.
2. In the menu, click **Management > Query**.
3. In the query editor, paste and run the commands below.

### Simple Queries

List only the task names:

```sql
SELECT name
FROM task;
```

List all fields from the tasks table:

```sql
SELECT *
FROM task;
```

List all fields from the records table:

```sql
SELECT *
FROM record;
```

List all fields from the workers table:

```sql
SELECT *
FROM worker;
```

When clicking **Run**, Netuno generates a results table for **each** command separated by a semicolon (`;`).  
This is useful when you want to run multiple queries at once.

### Query with Relationships

Now, run a query that joins all tables:

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

It demonstrates how relationships between tables allow combining information from different entities in the application.

## Diagram

To visualize the database structure in a more intuitive way, use Netuno's **Diagram**.

1. Access the **Build** environment.
2. In the menu, click **Management > Diagram**.

In the Diagram you can:

- Zoom in or out.
- Export the diagram as an image.

These actions are available via buttons on the right side of the diagram panel.

Netuno automatically creates relationship arrow lines based on the **Links** configuration in the fields (for example, `select`-type fields that point to other tables).

## Best Practices

When modeling your database in Netuno, follow these best practices:

- Use the `_id` suffix in fields that represent relationships, for example:
  - `task_id`
  - `worker_id`
- Avoid using plural table and field names, such as `tasks`, `records`, or `workers`.

Avoiding the plural helps to:

- Keep names shorter and more readable.
- Reduce ambiguities when writing queries.
- Facilitate readability in forms and diagrams, especially when there are multiple relationships.

:::tip **NAMING STANDARD**
As a standard, always use **singular names** for forms, tables, and fields.  
Examples: `task`, `record`, `worker`, `task_id`, `worker_id`.
:::

## Next Step

Proceed to the next step of **Relating Data** to continue with the demonstration application.