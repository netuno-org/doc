---
sidebar_position: 3
id: fields
title: Fields
---

## Creating Fields

Fields are the fundamental elements of your form, defining what information will be collected from the user and how it will be stored in the database.

This tutorial will help you create and understand the different types of fields available. Before creating fields, you must already have a form created in the application.

![field-management-pt.png](/docs/assets/academy/ui/fields/field-management-pt.png)

## 1 - Field Title

This "label" is the visible instruction that guides the user on what information should be entered. It's the label that says what should be filled in.

It will be displayed in the "Field Management" section (in Build mode), and in the (View mode) in the input with the Label name "Email" as in the example below.

![field-title-name-pt.png](/docs/assets/academy/ui/fields/field-title-name-pt.png)

## 2 - Column Name

This is a unique internal identifier that will be used in the database and in any programming logic. It will be displayed in the table (View mode) when a form is accessed.

Netuno automatically fills this field using the `snake_case` pattern based on the "Field Title". It is possible to disable this filling by changing the "Auto Switch", however, the writing standard must be maintained in the singular, with lowercase letters, without spaces and without special characters.

![field-column-name-pt.png](/docs/assets/academy/ui/fields/field-column-name-pt.png)

## 3 - Type
Here you define the nature of the information that will be collected, which directly impacts the appearance of the field to the user and how the data is stored in the system. Select the field types available on the platform.

### 3.1 Text Fields

These are fields intended for inserting text in different formats.

| Type | What does it do? | Practical Use Example |
| :--- | :--- | :--- |
| text | Creates a simple input for a single line. | ​​Names, article titles, neighborhoods, etc. |
| textarea | Creates a larger text area input, for multiple lines. | Product descriptions, comments, observations. |
| email | Creates a formatted text input to receive an email. | Contact email registration, user login. |
| texthtml | Creates a rich text editor that allows formatting with HTML. | Content creation for a blog, marketing emails, website pages. |
| textmd | Creates a text editor that supports the Markdown markup language. | Ideal for technical documentation, blog posts for developers. |

![field-type-texts-pt.png](/docs/assets/academy/ui/fields/field-type-texts-pt.png)

### 3.2 Numeric Fields

To collect information that is strictly numeric.

| Type | What does it do? | Example of Use |
| :--- | :--- | :--- |
| textnum | Creates an input for entering integers. | Quantity in stock, a person's age, number of vacancies. |
| textfloat | Creates an input for entering numbers with decimal places. | Product prices (e.g., 99.90), weight (e.g., 75.5), height (e.g., 1.82). |

![field-type-numbers-pt.png](/docs/assets/academy/ui/fields/field-type-numbers-pt.png)

### 3.3 Selection Fields

Use these fields when you need to choose between one or more options.

| Type | What does it do? | Practical Use Example |
| :--- | :--- | :--- |
| select | Creates a list of options where the user can choose only one. | ​​Select a state (UF), marital status, product category. |
| multiselect | Creates a list of options where the user can choose several. | Select interests (sports, technology), pizza ingredients. |
| checkbox | Displays a single checkbox (enable/disable). | "I accept the terms of use", "Remember my password". |
| color | Displays a visual color picker. | Choose the color of a product, customize the color of an event. |

### 3.4 Date and Time Fields

Specialized for inserting temporal information.

| Type | What does it do? | Practical Use Example |
| :--- | :--- | :--- |
| date | Displays a calendar for the user to select a date (day, month, year). | Date of birth, scheduling date. |
| datetime | Allows the selection of a date and time. | Start of an event, date and time of a publication. |
| time | Allows the selection of a time (hours and minutes). | Operating hours, alarm time. |

![field-date-and-time-pt.png](/docs/assets/academy/ui/fields/field-date-and-time-pt.png)

### 3.5 File and Media Fields

To upload files and images to your application.

| Type | What does it do? | Practical Use Example |
| :--- | :--- | :--- |
| file | Creates a field for uploading any file (PDF, DOCX, ZIP). | Attach a resume, send proof of payment. |
| image | A field optimized for uploading images (JPG, PNG, GIF). | User profile picture, product image. |

![field-file-and-media-pt.png](/docs/assets/academy/ui/fields/field-file-and-media-pt.png)

### 3.6 Technical and Special Fields

These fields have automatic behaviors or serve specific system purposes.

| Type | What does it do? | Practical Use Example |
| :--- | :--- | :--- |
| hidden | The field is invisible to the user, but stores a value. | Stores an ID from another page, a tracking code. |
| uid | Automatically generates a Universally Unique Identifier. | Primary key of a record, unique code of an order. |
| user | Associates the record with the user who created or modified it. | Identify the author of a blog post, the salesperson who registered a customer. |
| lastchange | Automatically stores the date and time of the last modification of the record. | Audit, to know when data was last changed. |
| group | Used to visually group other fields in the form. | Create sections like "Personal Data" and "Address" to organize long forms. |

## 4 - Behavior and Layout Settings

This area is the "control panel" for your field, defining business rules, access permissions, and its position on the form.

### 4.1 Data Integrity Rules

These options ensure the quality and consistency of the information.

| Configuration | What does it do? | Practical Use Example |
| :--- | :--- | :--- |
| Unique Values ​​(Primary Key) | Transforms the field into the main and unique identifier, preventing duplicate values. | Use for "CPF" (Brazilian Taxpayer ID), ensuring that no two clients have the same number. |
| Required (Not Null) | Makes filling in the field mandatory. | Apply to essential fields such as "Name" and "Email". |

### 4.2 Permissions and Visibility Control

Defines where and how users interact with the data in this field.

| Configuration | What does it do? | Practical Use Example |
| :--- | :--- | :--- |
| Display in Results | Defines whether the column will appear in the main data listing. | Uncheck for "Internal Notes" to keep the listing clean. |
| Allow Filtering | Adds a search box for this column to the listing. | Enable in "Order Status" for easy location. |
| Allow View | Controls whether the content will be displayed in view mode. | Leave checked in most cases. |
| Allow Editing | Allows the content to be changed when a record is being edited. | Uncheck for fields that should not be changed, such as "Registration Date". |
| Allow on Create New | Defines whether the field should appear in the creation form. | Uncheck for "feedback" fields, which should only be filled in *after* creation. |
| Allow Export | Includes the data from this field when exporting the listing (Excel, CSV). | Uncheck internal data that is not relevant for external reports. |

![field-behavior-and-layout-settings-pt.png](/docs/assets/academy/ui/fields/field-behavior-and-layout-settings-pt.png)

## 5 - Visual Organization of the Form

Defines the field's position in the layout.

| Configuration | What does it do? | Practical Use Example |
| :--- | :--- | :--- |
| Row | Defines the vertical position of the field in the form. | Place "Full Name" on Row: 1 and "Address" on Row: 2. |
| Column | Defines the horizontal position, allowing multiple fields side-by-side. | To have "City" and "State" together, use Row: 3, Column: 1 (City) and Column: 2 (State). |

![field-visual-organization-of-the-form-pt.png](/docs/assets/academy/ui/fields/field-visual-organization-of-the-form-pt.png)

## 6 - Advanced Configuration Options

For more refined control, access "Show more options".

### 6.1 Field Description and Help

| Configuration | What does it do? | Practical Use Example |
| :--- | :--- | :--- |
| Description | Adds help text or instructions that appear below the field. | In "Password", use the description to inform the rules: "The password must be at least 8 characters long...". |

### 6.2 Sizing and Layout

Fine control over field size.

| Configuration | What does it do? | Practical Use Example |
| :--- | :--- | :--- |
| Width | Defines the width of the component (based on a 12-column grid). | "CPF" (Width: 6) and "Date of Birth" (Width: 6) on the same line. |
| Height | Defines the height of the component in pixels (px). | In `textarea` "Observations", set Height "120" for a larger area. |
| Cell Width (px) | Defines a fixed width in pixels for the cell. | Use to align fields with specific widths, such as "UF" (Width: 80). |
| Cell Height (px) | Defines a fixed height in pixels for the cell. | Increase the height of an `image` field to create a "drag and drop" area. |
| Rowspan | Allows the cell to expand vertically across multiple lines. | A "Description" textarea that occupies 3 lines of height next to smaller fields. |
| Colspan | Allows the cell to expand horizontally across multiple columns. | A "Full Address" field (Colspan: 2) above "City" and "State".

