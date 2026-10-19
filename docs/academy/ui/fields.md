---
sidebar_position: 3
id: fields
title: Fields
---

Fields are the fundamental components and "building blocks" of a form in Netuno. They represent the interaction interface with the user and define how data will be structured and stored.

In practice, each field created corresponds to a column in the database table, determining the type of information the system can process — such as text, numbers, dates, selections, and files.

### Create and Edit Fields

These buttons allow you to manage the general editing state:

- **Edit existing field:** Drop-down menu to select an already-created field and modify its settings.

- **Create new field:** Clears all form fields to start configuring a new element from scratch.

- **Clone field:** Duplicates the settings of the selected field to speed up the creation of similar items.

![Edit existing field](/docs/assets/academy/ui/fields/field-edit-existing-pt.png)

## 1 - Field Title

The Field Title (technically known as a Label) is the visual instruction that guides the user on what information should be entered in a form. It works as an identifying label, ensuring that data entry is intuitive and correct.

At this stage, the title has a dual purpose on the platform:

- **In Field Management (Build):** Used to identify the field within your list of elements during application development.

![Field title name](/docs/assets/academy/ui/fields/field-title-name-pt.png)

- **In the User Interface (View):** This is the text displayed just above or next to the input field, indicating to the end user what they should enter in the form.

![Field title name content](/docs/assets/academy/ui/fields/field-title-name-content-pt.png)

## 2 - Column Name

Unlike the title, the **Column Name** is the internal and unique identifier of the field, used directly in the database and in programming logic. It is through this name that the system locates the information in the database.

**Automatic Formatting (Auto Switch):**

Netuno makes this process easier by automatically filling in the name based on the "Field Title". The standard used is snake_case.

**Naming Rules:** If you choose to fill it in manually (disabling "Auto"), keep the name in the singular, use only lowercase letters, and avoid spaces or special characters.

![Field column name](/docs/assets/academy/ui/fields/field-column-name-pt.png)

## 3 - Data Types

Defining the **Data Type** determines the nature of the collected information, directly impacting the field's appearance for the user and how the data is stored in the system.

![Field data type](/docs/assets/academy/ui/fields/field-type-data-pt.png)

### 3.1 Text Fields

These fields are intended for entering text in different formats. They vary according to the required data volume.

| Type | What does it do? | Practical Use Example |
| :--- | :--- | :--- |
| text | Creates a simple input for a single line. | Names, article titles, neighborhoods, etc. |
| textarea | Creates a larger text area input for multiple lines. | Product descriptions, comments, notes. |
| email | Creates a text input formatted to receive an email. | Contact email registration, user login. |
| texthtml | Creates a rich text editor that allows HTML formatting. | Creating content for a blog, marketing emails, website pages. |
| textmd | Creates a text editor that supports the Markdown markup language. | Ideal for technical documentation, blog posts for developers. |

### 3.2 Numeric Fields

Used to collect information that is strictly numeric.

| Type | What does it do? | Practical Use Example |
| :--- | :--- | :--- |
| textnum | Creates an input for entering whole numbers. | Stock quantity, a person's age, number of openings. |
| textfloat | Creates an input for entering numbers with decimal places. | Product prices (e.g., 99.90), weight (e.g., 75.5), height (e.g., 1.82). |

### 3.3 Selection Fields

Used when the user must choose between predefined options.

| Type | What does it do? | Practical Use Example |
| :--- | :--- | :--- |
| select | Creates a list of options where the user can choose only one. | Select a state, marital status, product category. |
| multiselect | Creates a list of options where the user can choose several. | Select interests (sports, technology), pizza ingredients. |
| checkbox | Displays a single checkbox (enable/disable). | "I accept the terms of use", "Remember my password". |
| color | Displays a visual color picker. | Choose a product color, customize an event color. |

### 3.4 Date and Time Fields

Specialized for entering temporal information.

| Type | What does it do? | Practical Use Example |
| :--- | :--- | :--- |
| date | Displays a calendar for the user to select a date (day, month, year). | Date of birth, appointment date. |
| datetime | Allows selecting a date and time. | Event start, publication date and time. |
| time | Allows selecting a time (hours and minutes). | Business hours, alarm time. |

### 3.5 File and Media Fields

Used to upload files and images to your application.

| Type | What does it do? | Practical Use Example |
| :--- | :--- | :--- |
| file | Creates a field for uploading any file (PDF, DOCX, ZIP). | Attach a resume, upload a payment receipt. |
| image | A field optimized for uploading images (JPG, PNG, GIF). | User profile photo, product image. |

### 3.6 Technical and Special Fields

These fields have automatic behaviors or serve specific system purposes.

| Type | What does it do? | Practical Use Example |
| :--- | :--- | :--- |
| hidden | The field is invisible to the user but stores a value. | Store an ID coming from another page, a tracking code. |
| uid | Automatically generates a Universally Unique Identifier. | Primary key of a record, unique order code. |
| user | Associates the record with the user who created or modified it. | Identify the author of a blog post, the salesperson who registered a customer. |
| lastchange | Automatically stores the date and time of the record's last modification. | Auditing, to know when a piece of data was last changed. |
| group | Used to visually group other fields in the form. | Create sections such as "Personal Data" and "Address" to organize long forms. |

## 4 - Behavior and Layout Settings

This area is the "control panel" for your field, defining business rules and access permissions.

![Field behavior and layout settings](/docs/assets/academy/ui/fields/field-behavior-and-layout-settings-pt.png)

### 4.1 Data Integrity Rules

These options ensure the quality and consistency of the information.

| Setting | What does it do? | Practical Use Example |
| :--- | :--- | :--- |
| Unique Values (Primary Key) | Turns the field into the main and unique identifier, preventing duplicate values. | Use for "SSN", ensuring that no two customers have the same number. |
| Required (Not Null) | Makes the field required. | Apply to essential fields such as "Name" and "Email". |

### 4.2 Permissions and Visibility Control

Defines where and how users interact with the data in this field.

| Setting | What does it do? | Practical Use Example |
| :--- | :--- | :--- |
| Show in Results | Defines whether the column will appear in the main data listing. | Uncheck for "Internal Notes" to keep the listing clean. |
| Allow Filtering | Adds a search box for this column in the listing. | Enable for "Order Status" to make it easier to locate. |
| Allow Viewing | Controls whether the content will be displayed in view mode. | Leave checked in most cases. |
| Allow Editing | Allows the content to be changed when a record is being edited. | Uncheck for fields that should not be changed, such as "Registration Date". |
| Allow When Creating New | Defines whether the field should appear in the creation form. | Uncheck for "feedback" fields, which should only be filled in *after* creation. |
| Allow Exporting | Includes this field's data when exporting the listing (Excel, CSV). | Uncheck internal data that is not relevant for external reports. |

## 5 - Visual Organization of the Form

Defines the positioning of fields in the layout.

![Field visual organization form](/docs/assets/academy/ui/fields/field-visual-organization-form-pt.png)

| Setting | What does it do? | Practical Use Example |
| :--- | :--- | :--- |
| Row | Defines the vertical position of the field in the form. | Place "Full Name" in Row: 1 and "Address" in Row: 2. |
| Column | Defines the horizontal position, allowing multiple fields side by side. | To have "City" and "State" together, use Row: 3, Column: 1 (City) and Column: 2 (State). |

## 6 - See More Options

For more customized control, click the "+ See More Options" button.

### 6.1 Description Field

![Field view options description](/docs/assets/academy/ui/fields/field-view-options-description-pt.png)

| Setting | What does it do? | Practical Use Example |
| :--- | :--- | :--- |
| Description | Adds help or instruction text that appears below the field. | In "Password", use the description to state the rules: "The password must be at least 8 characters long...". |

### 6.2 Field Sizing

![Field dimensioning layout](/docs/assets/academy/ui/fields/field-dimensioning-layout-pt.png)

Fine control over the field size.

| Setting | What does it do? | Practical Use Example |
| :--- | :--- | :--- |
| Width | Defines the component width (based on a 12-column grid). | "SSN" (Width: 6) and "Date of Birth" (Width: 6) on the same row. |
| Height | Defines the component height in pixels (px). | In `textarea` "Notes", set Height to "120" for a larger area. |
| Cell Width (px) | Defines a fixed width in pixels for the cell. | Use to align fields with specific widths, such as "State" (Width: 80). |
| Cell Height (px) | Defines a fixed height in pixels for the cell. | Increase the height of an `image` field to create a "drag and drop" area. |
| Rowspan | Allows the cell to expand vertically across multiple rows. | A "Description" `textarea` that spans 3 rows in height next to smaller fields. |
| Colspan | Allows the cell to expand horizontally across multiple columns. | A "Full Address" field (Colspan: 2) above "City" and "State". |

### 6.3 Validation and Data Rules

Set limits for the entered values.

| Setting | What does it do? | Practical Use Example |
| :--- | :--- | :--- |
| Max | Maximum value (numeric) or maximum number of characters (text). | In "Grade (0 to 10)", set Max to "10". In "Nickname", Max "20". |
| Min | Minimum value (numeric) or minimum number of characters (text). | In "Quantity", set Min to "1". In "Justification", Min "30". |

### 6.4 Access Control

![Field access control](/docs/assets/academy/ui/fields/field-access-control-pt.png)

Define groups and users who can view and edit the field.

| Setting | What does it do? | Practical Use Example |
| :--- | :--- | :--- |
| User View and Group View | Restricts *viewing* of the field to only the specified users or groups. | "Salesperson Commission" has Group View "Managers". |
| User Edit and Group Edit | Allows only the specified users or groups to *edit* the field (others see it as "read-only"). | "Order Status" has Group Edit "Logistics". |