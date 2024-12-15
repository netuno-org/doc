---
sidebar_position: 3
id: database
title: Database
---

Remember that the form was created **Task** with the field **Name**, which are the names of _Display_.

And this means that the table was created in database **task** and with the column **name**, which are the _Names_ defined in the creation.

The **names** and not the display names are relevant at the programming level of data access as well as in the construction of database queries.

## Queries

In Netuno you can manipulate the database directly through the interface that Netuno provides to perform operations directly in the database.

This interface is in the environment **Construct** and in the menu at **Management** > **Query**.

Try to execute the following queries:

```sql
select name from task;

select * from task;

select * from record;

select * from worker;
```

Notice that when you click on **Execute** a table of results is generated for each command, useful when executing multiple commands separated by **;** (semicolon).

Now perform a more complex query by listing all tables:

```sql
SELECT task.name, record.start, record.end, worker.name
FROM task
  INNER JOIN record ON task.id = record.task_id
  INNER JOIN worker ON worker.id = record.worker_id
```

## Diagram

To visualize the whole structure of the database in a more intuitive way we can explore the Database Diagram.

The Diagram is available in the environment **Construct** in **Management** > **Diagram**.

You can zoom and export as image, buttons available on the right hand side.

Netuno creates the lines with relationship arrows by configuring the **Links** configured in the fields, as in the case of the **select** type field.

## Considerations

Note that it is important to use the suffix **_id** in the name of the fields that relate to **Link** to help distinguish better in the queries and the diagram.

You should also not use plural names such as **task**_s_, **registration**_s_ or **worker**_es_, this is because in addition to the names getting longer it also creates more entropy in its interpretation especially in the case of forms and tasks for mutual relationships.

> By default the Name of the forms and fields should always be in the singular.

