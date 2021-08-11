---
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

The configuration **Name** was set automatically with `task`, however you should add `_id` as suffix as the following example:

`task` + `_id` = `task_id`.

> #### Please Note
> The **Name** should always end with: `_id` as good practice, also to make relationships distinct, significant, and easier to be naming.

At _Type_ settings will choose the **select** option.

Please select it as  **"Not Null"** as this field is mandatory i.e. just clicking on **Not Null** as it is important to know what the employee has done at the time schedule.

As will be more records for the same Task, the Primary Key option should be OFF.

The **"Column"** must be filled with the value 1 and the **Line** with the value 2, as this new _Task_ field has to show before the fields date and time.

### Link

>Note that this type of field has a specific criteria of the **Data Relatioship**

1.Click on _Add_;

2.Click on the **task** the option that shows in the open window;

3.Click on the **name**;

4._Close_ the window.

The **Link** will be defined with the value `task:name`.

Which means it will related to the present **task** table showing some information in the collumn **name**.

Click **Save** when you finish.

## 🎬 See How ...

![Relate Data](assets/comece/demonstracao/relacionar.gif)
