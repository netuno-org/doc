---
id: modal-form
title: Modal Form
---

Creating and managing forms in modal windows.

## Introduction

Modal is a UI feature that allows you to open a form without the user having to leave the current page.

The use of modals significantly improves User Experience (UX), allowing the execution of **CRUD (Create, Read, Update, Delete)** operations without the need to reload the page or lose the context of the current screen.

Netuno automatically manages communication with the backend and the injection of the necessary HTML.

#### Prerequisites

To implement the examples, you will need:

- Access to your Netuno application's development environment.

- A properly configured form in the Netuno administrative panel (back office).

- Basic knowledge of JavaScript and DOM event handling.

In the following examples, we will use a generic form called **"test"**.

If you have any questions during these steps, please refer to: [Forms](/docs/academy/ui/forms).

## Base Structure

The creation and management of modals in Netuno is centralized in the `netuno.modal` object.

The **netuno.modal.create()** method creates the base structure of the modal in the interface. It receives a configuration object with the following properties:

- **name (String):** The name of the form (created in the backoffice) that will serve as the basis for the modal.

- **callback (Function):** Function executed as soon as the modal structure is injected into the DOM (but before it is displayed), receives the created modal element as a parameter.

### Callback Function

Within the callback function, you must define the state (mode) of the form using the native loading functions:

- **Listing Mode - `netuno.loadForm()`**: Renders the search table and lists the records of that form.

- **Edit/Create Mode - `netuno.loadFormEdit()`**: Renders the form's input fields. Can be used to insert a new record or edit an existing one.

## Implementation
Below, we detail three of the most common use cases.

### 1. List Mode

The `netuno.loadForm()` is used when you want the user to view all the data from a form in a grid format.

```jsx
netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    // 1. Locates the inner container intended to receive the form
      let form = modal.find('[netuno-form]');
    // 2. Injects the form data list into the container
      netuno.loadForm(form);   
    // 3. Displays the modal to the user         
      netuno.modal.show(modal);
  }
});
```

### 2. Creation Mode

The `netuno.loadFormEdit()` is used for "Add New" type buttons. Opens the clean form, ready for data entry.

```jsx
netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    let form = modal.find('[netuno-form]');
    // Loads the form in insert mode (new record)
    netuno.loadFormEdit(form);
    netuno.modal.show(modal);
  }
});
```

:::info
When using `netuno.loadFormEdit()` without passing an **ID**, Netuno understands that you want to use the "edit screen" from scratch. It loads the interface with empty inputs, ready for the creation of a new record. In this scenario, Netuno internally triggers the `netuno:new` event.
:::

### 3. Edit Mode

If you need the modal to load a specific record for modification, you must pass the **UID** or **ID** of the record as the second parameter in the loading function.

```jsx

// Example: Editing record ID 1234
const recordId = 1234; 
netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    let form = modal.find('[netuno-form]');
    // Injects the data from record 1234 into the form fields
    netuno.loadFormEdit(form, recordId);
    netuno.modal.show(modal);
  }
});
```

### Events

The form container (`[netuno-form]`) emits custom events that track the user interaction lifecycle. 

Using these events to trigger specific business logic in your frontend (such as updating tables in the background, displaying alerts, etc.) is recommended.

| TYPE OF EVENT   | DESCRIPTION    |
| ------- |--------------|
| netuno:new | Triggered when the screen for creating a new item is displayed. |
| netuno:edit | Triggered when the screen for editing an existing item is displayed. |
| netuno:save | Triggered when a new item is added. |
| netuno:back |Triggered after clicking the back button. |
| netuno:delete | Triggered after deleting an item. |

## Example: Intercepting Multiple Events

In this production-ready example, we create the modal and add listeners to track the success of user operations:

```javascript
netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    let formContainer = modal.find('[netuno-form]');
    // Monitoring the screen of Insertion
    formContainer.on('netuno:new', function(event) {
      console.info("Creation interface loaded.");
    });

    // Monitoring a successful save
    formContainer.on('netuno:save', function(event) {
      console.success("The record was saved successfully!");
      // Example: Automatically closing the modal after saving
      netuno.modal.hide(modal); 
    });

    // Rendering the modal in list mode and displaying it
    netuno.loadForm(formContainer);
    netuno.modal.show(modal); 
  }
});
``` 
If you have any difficulties or suggestions for improvement, please contact us.

Our team and community are ready to help.

Good development!