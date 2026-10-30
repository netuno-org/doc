---
sidebar_position: 5
id: relationships-between-forms
title: Relationships between forms
sidebar_label: Relationships
---

## How to create relationships between forms

Creating relationships between forms is an essential feature for organizing information intelligently. By connecting forms, you eliminate the need to duplicate data and ensure that your application is cohesive, scalable, and easy to maintain.

One of Netuno's major advantages is the ability to automatically generate the data model diagram.

Relationships define how data from different tables interact with one another. This connection is directly reflected in the user interface (UI), allowing fields in one form to automatically retrieve information from another.

**Simple Diagram:** Ideal for validating the initial logic of small modules.

![simple-diagram-template-en.png](/docs/assets/academy/ui/relationships/simple-diagram-template-pt.png)

**Complex Diagram:** Demonstrates the tool's robustness in large-scale applications, mapping multiple dependencies and data flows.
 
![complex-diagram-template-en.png](/docs/assets/academy/ui/relationships/complex-diagram-template-en.png)


## Creating a Select relational field

The Select field creates a relationship between two forms. It lets you choose a value from a dropdown list instead of typing it manually. This list is populated with data that already exists in another form.

We will use the **Vehicles** and **Color** forms as an example.

**When to use it?** Use select when you have a Many-to-One (N-1) relationship.

**Example:** Many Vehicles can have one Color. Instead of typing "Blue" every time, you select "Blue" from a list of already registered colors.

- **Destination Form:** Vehicle (where we will create the select field).
- **Source Form:** Color (where the data for the color list comes from).


### Requirements
Before you begin, make sure that:

- Both forms (**Vehicle** and **Color**) are already created in Netuno. For more details, see our guide on [Creating Forms](/docs/academy/ui/forms).

- The source form (**Color**) already has some registered records. (e.g., "Blue", "Red", "Silver"). For more details, see our guide on [Creating Fields](/docs/academy/ui/fields).

### Create and Configure the Select

Add the **select** field type to the **Vehicle** form so that it can "pull" data from the **Color** form.

![create-and-configure-the-select-field-en.png](/docs/assets/academy/ui/relationships/create-and-configure-the-select-field-pt.png)

#### 1 - Access the Destination Form

- In the Backoffice, go to field management and open the **Vehicle** form for editing.
 
#### 2 - Create the New Field

- Click "Create new field".

#### 3 - Define the Title and Column Name

- **Field Title:** Give it a friendly name that will appear to the user. **Example:** Vehicle Color.
- **Column Name:** This is the technical name of the field in the database.

**Best Practice:** When creating a relational field, always use the `_id` suffix in the **Column Name**. This makes it clear that this column does not store the text "Blue", but rather the reference ID for the "Blue" record in the **Color** form. **Example:** `vehicle_color_id`.

#### 4 - Choose the Data Type

- In the **Type** field, select the _`select - select`_ option from the list.

#### 5 - Configure the Link (The Relationship)

![configure-the-link-en.png](/docs/assets/academy/ui/relationships/configure-the-link-pt.png)

- When you choose _`select`_, a new field called **Link** will be displayed.
- Click the **Configure** button.
- A modal will open, listing all your forms. This is where you choose the Source form.
- Select the form that contains the data you want to list. In our example, click **color - Color**.
- After selecting it, click the **Close** button in the modal.

#### 6 - Save the Changes

- Click the **Save** button in field management to apply all your settings.

### Result

Done! Now in "view" mode, when you add or edit a record in the **Vehicle** form, the "Vehicle Color" field will be a dropdown list that shows all the colors registered in your Color form.

## Creating a Multiselect relational field

The **Multiselect** field creates a Many-to-Many (N-M) relationship. It lets you select multiple items from a list in a single field.

We will use the **Person**, **Role**, and **Person-Role** forms as an example.

**When to use it?** Use multiselect when a record can be linked to several others, and vice versa.
**Example:** Many People can have many Roles.

- A person (e.g., "Ana") can have the "Admin" and "Manager" roles.
- The "Manager" role can be associated with several people (e.g., "Ana", "Bruno", and "Thiago").

For this to work, we need three forms:

- **"Parent" Form (Person):** Where the _`multiselect`_ field will be visible to the user.
- **"Source" Form (Role):** Where the list options come from (e.g., "Admin", "Manager").
- **"Join" Form (Person-Role):** A "bridge" form that stores the connections between **Person** and **Role**.

### Requirements
Before you begin, make sure that:

- The "Parent" form (**Person**) is already created and has some records (e.g., "Ana", "Bruno", "Lucas").
- The "Source" form (**Role**) is already created and has some records (e.g., "Admin", "Manager", "Consultant").

### Create and Configure the Multiselect
The configuration is done in 4 steps:

### Step 1: Create the join form (Person-Role)
First, let's create the "bridge" form.

1 - **Go to Management > Forms** and click "Create new form".

2 - **Form title:** Person-Role.

3 - **Table name:** person_role  (or similar).

4 - **Important:** In the **Parent** field, select the main "Parent" form, which in this case is **Person**. This turns **Person-Role** into a subform.

5 - Click **Save**.

![create-the-parent-form-for-the-join-en.png](/docs/assets/academy/ui/relationships/create-the-parent-form-for-the-join-pt.png)

### Step 2: Configure the join form fields

Add the "bridge" fields to the Person-Role form.

1 - Access the Fields management for the Person-Role form you just created.

2 - Add two select fields: one that will point to Person and another to Role.

**Field 1 (Link to Person):**

![link-field-for-person-en.png](/docs/assets/academy/ui/relationships/link-field-for-person-pt.png)

- **Field title:** Person Name
- **Column name:** `person_name_id` (following the **_id** convention)
- **Type:** `select - select`
- **Link:** Click **Configure** and select the main field of the **Person** form, for example: `person:name`.
- Click **Save**.

**Field 2 (Link to Role):**

- **Field title:** Person Role.
- **Column name:** `role_person_id`.
- **Type:** `select - select`.
- **Link:** Click **Configure** and select the main field of the **Role** form, for example: `role:role_id`.
- Click **Save**.

![field-link-to-person-function-en.png](/docs/assets/academy/ui/relationships/field-link-to-person-function-pt.png)

### Step 3: Create the multiselect field in the "parent" form

Now that the "bridge" (**Person-Role**) is ready, we can return to the **Person** form to create the final field.

1 - Go to the Fields management for the **Person** form.

2 - Click "Create new field".

3 - **Field title:** Person Role.

4 - **Column name:** _`person_role_id`_.

5 - **Type:** _`multiselect - multiselect`_.


### Step 4: Configure the multiselect field

When you select the _`multiselect`_ type, two new configuration fields will appear: **Reference** and **Link**.

#### 1 - Reference (Where to save the relationship?)

 - **This field tells Netuno:** "Which field in the 'bridge' form refers back to me (**Person**)?"
 - Click **Configure**.
 - Select the join form (**Person-Role**) and the field you created in Step 2 (Field 1). **Example:** _`person_role:person_name_id`_.

#### 2 - Link (Where do the options come from?)

 - **This field says:** "Which field in the 'bridge' form refers to the options (**Role**)?"
 - Click **Configure**.
 - Select the join form (**Person-Role**) and the field you created in Step 2 (Field 2). **Example:** _`person_role:role_person_id`_.
  
#### 3 - Save the Changes

- Click the **Save** button in field management to apply all your settings.

![configure-the-multiselect-field-en.png](/docs/assets/academy/ui/relationships/configure-the-multiselect-field-pt.png)

### Result

Done! Now in "view" mode, when adding or editing a record in the **Person** form, the "Person Role" field will appear as a multiple-selection box. You can choose multiple roles from the list (which come from the **Role** form), and Netuno will automatically save these associations inside the **Person-Role** form.

If you have any questions, contact us through the community and other channels available at the end of this page.

Happy development!