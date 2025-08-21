---
sidebar_position: 5
id: relate
title: Relate Data
sidebar_label: Relate Data
---

## Create Relationship Between Data 

In the previous stage, you have created your task management, however as you can see only manages a small isolated list of tasks.

For this reason, our next step will be to know if an employee has done a task and the time spent on the same task.

You will need to co-relate **Tasks** with the **Record** and their hours/time spend.

### Selecting Field Type

Clicking on **"Build"** after that going to the form field management **"Record"** you will create a new field where the the settings of the **"Display Name"** should be `Task`.

The **Name** configuration was automatically filled with `task`, but we must add the suffix `_id`, to the **Name** `task` you add `_id` resulting in `task_id`.

> #### This is important
> The **Name** must always end in `_id`!
>
> Since it is a standard for field names that are related to each other, it makes it easier to distinguish them from others.

In the _Type_ configuration, choose the **select** option.

Remember to mark this field as required by enabling the **Not Null** setting, as it's important to know what the worker performed at the scheduled time.

Note that the _Primary Key_ option should remain disabled because there will be many records for the same task.

And fill the **Column** with the value 1 and the **Line** with the value 2, so that this new _Task_ field appears before the date and time fields.

### Link

Note that this field type has a **Link** parameter below.

The link is what creates the data relationship.

To configure, click _Add_, then click the **task** option, which appears in the window that opened, then **name**, and finally, just _Close_ the window.

This way, the **Link** has been defined with the value `task:name`.

This means you will link to the **task** table, displaying the data from the **name** column.

To finish, click **Save**.

### Changing Data

Now, when you view the results in the **Register**, you'll see an additional **Task** column, which is missing data.

Edit some records by clicking on the line in the results table.

The **Register** edit form has a field that allows you to select the **Task**. When you save with the associated task, the task column will appear populated in the lookup table.

The **Registers** are now associated with a **Task** and become related.

Save the changes to some records with the associated task.