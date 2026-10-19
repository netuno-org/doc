---
id: modal-form
title: Modal Form
---

Creation and management of forms in modal windows.
## Introduction

The Modal is a (UI) feature that allows opening a form without the user having to leave the current page.

Using modals significantly improves the User Experience (UX), allowing **CRUD (Create, Read, Update, Delete)** operations to be performed without the need to reload the page or lose the context of the current screen. 

Netuno automatically manages communication with the backend and the injection of the necessary HTML.


#### Prerequisites

To implement the examples, you will need:

- Access to the development environment of your Netuno application.
- A form properly configured in the Netuno administrative panel (backoffice).
- Basic knowledge of JavaScript and DOM event handling.

In the following examples, we will use a generic form called **"test"**.

If you have questions about these steps, see: [Forms](/docs/academy/ui/forms).

## Base Structure

The creation and manipulation of modals in Netuno is centralized in the `netuno.modal` object.

The **netuno.modal.create()** method creates the base structure of the modal in the interface. It receives a configuration object with the following properties:

- **name (String):** The name of the form (created in the backoffice) that will serve as the basis for the modal.
- **callback (Function):** Function executed as soon as the modal structure is injected into the DOM (but before it is displayed), receives the created modal element as a parameter.

### Callback Function

Inside the callback function, you must define the state (mode) of the form using the native loading functions:

- **Listing Mode - `netuno.loadForm()`**: Renders the search and listing table of records for that form.

- **Edit/Create Mode - `netuno.loadFormEdit()`**: Renders the form input fields. It can be used to insert a new record or edit an existing one.

## Implementation
Below, we detail three of the most common usage scenarios.

### 1. Listing Mode

`netuno.loadForm()` is used when you want the user to view all the data of a form in a search table (grid) format.

```jsx
netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    // 1. Locate the internal container intended to receive the form
    let formContainer = modal.find('[netuno-form]');
    // 2. Inject the form data list into the container
    netuno.loadForm(formContainer); 
    // 3. Display the modal to the user
    netuno.modal.show(modal);
  }
});
```
### 2. Creation Mode

`netuno.loadFormEdit()` is used for buttons of the "Add New" type. It opens a clean form, ready for data entry.

```jsx
netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    let formContainer = modal.find('[netuno-form]');
    // Loads the form in insert mode (new record)
    netuno.loadFormEdit(formContainer); 
    netuno.modal.show(modal);
  }
});
```

:::info
When using `netuno.loadFormEdit()` without passing an **ID**, Netuno understands that you want to use the "edit screen" from scratch. It loads the interface with empty inputs, ready for creating a new record. In this scenario, Netuno internally triggers the `netuno:new` event.
:::

### 3. Edit Mode

If you need the modal to load a specific record for modification, you must pass the record's **UID** or **ID** as the second parameter in the loading function.

```jsx
// Example: Editing the record with ID 1234
const recordId = 1234; 

netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    let formContainer = modal.find('[netuno-form]');
    // Inject the data of record 1234 into the form fields
    netuno.loadFormEdit(formContainer, recordId); 
    netuno.modal.show(modal);
  }
});
```


## Events

The form container (`[netuno-form]`) emits custom events that accompany the lifecycle of user interaction. 

It is recommended to use these events to trigger business logic specific to your frontend (such as updating tables in the background, displaying alerts, etc.).

| EVENT TYPE   | DESCRIPTION    |
| ------- |--------------|
| ` netuno:new` | Triggered when the creation screen for a new item is displayed. |
| `netuno:edit` | Triggered when the edit screen for an existing item is displayed. |
| `netuno:save` | Triggered when a new item is added. |
| `netuno:back` | Triggered after clicking the back button. |
| `netuno:delete` | Triggered after deleting an item. |


### Example: Intercepting Multiple Events

In this production-ready example, we create the modal and add *listeners* to track the success of user operations:

```jsx
netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    let formContainer = modal.find('[netuno-form]');
    
    // Monitoring the insert screen
    formContainer.on('netuno:new', function(event) {
       console.info("Creation interface loaded.");
    });

    // Monitoring a successful save
    formContainer.on('netuno:save', function(event) {
       console.success("The record was saved successfully!");
       // Example: Automatically close the modal after saving
       netuno.modal.hide(modal); 
    });

    // Rendering the modal in list mode and displaying it
    netuno.loadForm(formContainer);
    netuno.modal.show(modal);
  }
});
```
If you have difficulties or suggestions for improvement, please contact us.
Our team and community are ready to help.

Happy development!