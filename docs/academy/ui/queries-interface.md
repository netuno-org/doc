---
sidebar_position: 4
id: queries-interface
title: Queries Interface
---


Netuno's Query tool is a powerful feature that allows direct interaction with the application's database through SQL (Structured Query Language).

This functionality is essential for testing business logic, validating stored information, and establishing the foundation for reports or complex interface components. Netuno currently supports three database management systems: **PostgreSql, H2 Database, and MySQL**.

## 1 - Query Section

In “Build” mode, in the side menu, go to the “Management” area and click the "Query" section.

![query-queries-interface-pt.png](/docs/assets/academy/ui/queries/query-queries-interface-pt.png)

## 2 - Commands Area

This area is the environment for direct interaction with the project database. Here you can execute commands to query, search, and analyze data accurately and instantly.

Make sure the syntax used is compatible with the database configured in your Netuno environment.

![query-database-query-area-pt](/docs/assets/academy/ui/queries/query-database-query-area-pt.png)

## 3 - Validation Area

The validation area provides instant feedback on the syntax and execution of your code.

- **Success (Green):** When the query is executed without syntax or structure errors, the message is displayed with a green background. This indicates that the data has been processed and is ready for viewing.

![query-validation-area-success-pt-at.png](/docs/assets/academy/ui/queries/query-validation-area-success-pt-at.png)

- **Failure or Error (Red):** If there is any impediment to execution (such as a syntax error, incorrect column name, or lack of permission), the message will be displayed with a red background. In addition to the color, the system will display the technical error log to help with diagnosis.

![query-validation-area-fail-pt-at.png](/docs/assets/academy/ui/queries/query-validation-area-fail-pt-at.png)

## 4 - Results Area

This is where the information requested from the database is presented in a structured way. It allows you to view the contents of the tables and confirm whether your query logic is returning the expected records.

![query-result-area-pt.png](/docs/assets/academy/ui/queries/query-result-area-pt.png)

## 5 - Action Buttons

This section details the tools available to execute, save, and manage your SQL scripts, optimizing workflow and the reuse of complex queries.

It allows not only real-time command execution but also intelligent productivity management through historical records and libraries of saved scripts.

![query-action-buttons-pt-at.png](/docs/assets/academy/ui/queries/query-action-buttons-pt-at.png)

### 5.1 Button - Execute

- **Function:** Sends the script in the "Commands" area to be processed by the database.

- **Feedback:** After execution, the system displays a success message (in green) and automatically populates the "Results Area" with the requested data.

### 5.2 Button - History

- **Function:** Records recently executed queries, showing execution time (in milliseconds) and the "date/time" record of each action.

- **Quick Recovery:** When you click any record in the history list, the corresponding script is inserted again into the "Commands" area to be executed or edited.

![query-command-history-button-pt-at.png](/docs/assets/academy/ui/queries/query-command-history-button-pt-at.png)

### 5.3 Button - Save

**Function:** Allows you to store useful scripts and turn them into permanent templates. This is useful for complex queries that need to be executed frequently.

**Step-by-Step to Save:**

- With the script ready in the editor, click Save.

- In the "Save Command" modal window, enter a clear "Name" to identify the purpose of the query (e.g., "Filter products by price").

- Click the Save button inside the modal to confirm storage.

![query-save-command-button-pt-at.png](/docs/assets/academy/ui/queries/query-save-command-button-pt-at.png)

### 5.4 Button - Records

**Function:** Allows you to list all scripts that were previously saved.

- **Load script:** Click the desired script to add it to the "Commands" area.

- **Delete:** Use the trash icon next to each record to permanently remove it after confirmation.

![query-registered-commands-button-pt-at.png](/docs/assets/academy/ui/queries/query-registered-commands-button-pt-at.png)