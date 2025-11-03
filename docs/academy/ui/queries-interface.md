---
sidebar_position: 4
id: queries-interface
title: Queries Interface
---

The Netuno Query tool is a powerful resource that allows direct interaction with the application's database through SQL (Structured Query Language). With it, you can execute commands to query, search, and analyze data accurately and instantly. This functionality is essential for testing logic, validating information, and establishing the basis for complex reports and interface components.

> Basic knowledge of SQL commands and the forms created to query the database is required.

## 1 - Query Section

In "Build" mode, in the side menu, access the "Management" area and click on the "Query" section.

![query-queries-interface-pt.png](/docs/assets/academy/ui/queries/query-queries-interface-pt.png)

## 2 - Database Queries

In this area, you can execute SQL commands in the main text field, from simple queries to complex scripts.

> The functions must be performed according to the database management system you are working with. Currently, Netuno supports three types of systems: PostgreSQL, H2 Database, and MySQL.

![query-database-query-area-pt](/docs/assets/academy/ui/queries/query-database-query-area-pt.png)

## 3 - Validation Area

This area allows you to view feedback when the query execution is successful or when an error occurs.

> - **Success case:** The message will be displayed with a green background.

> - **Failure case:** The corresponding error message will be displayed with a red background.

![query-validation-area-pt.png](/docs/assets/academy/ui/queries/query-validation-area-pt.png)

## 4 - Results Area

In this area, the results will be displayed in a table, allowing for immediate validation after the query is executed.

![query-result-area-pt.png](/docs/assets/academy/ui/queries/query-result-area-pt.png)

## 5 - Action Buttons

### 5.1 Execute Button

**Function:** Allows you to send the script from the "commands" area to be executed in the database. After this action, a "success" message and the query result will be displayed on the screen.

### 5.2 History Button

**Function:** Allows you to view and access records of recently executed queries, including execution time (in milliseconds) and the date/time of execution.

### 5.3 Save Button

**Function:** Allows you to store the current script for future use. This is useful for complex queries that need to be executed frequently. After clicking the button, enter a name to identify the saved record.

### 5.4 Log Button

**Function:** Allows you to list all previously saved scripts. Clicking on the desired script will add it to the "Commands" area to be executed.

The trash can icon allows you to remove the saved record after confirming this action.

![query-action-buttons-pt.png](/docs/assets/academy/ui/queries/query-action-buttons-pt.png)