---
sidebar_position: 6
id: modal-form
title: Modal Form
---

This method is responsible for adding a form within a modal.
The modal loads the form in list mode or edit mode.

Before starting with this tutorial, there must be at least one form created in the application.

To learn how to create forms [click here](forms.md).

### Example in list mode

Displays the form called **Test** in list mode. Notice the function **netuno.loadForm()**.

```javascript
netuno.modal.create({
  name: 'test',
  callback: function (modal) {
      let form = modal.find('[netuno-form]');
      netuno.loadForm(form);            
      netuno.modal.show(modal);
  }
});
```

### Example in edit mode

Displays the form called **Test** in edit mode. Notice the function **netuno.loadFormEdit()**.

```javascript
netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    let form = modal.find('[netuno-form]');
    netuno.loadFormEdit(form);
    netuno.modal.show(modal);
  }
});
```

### Example with form id in edit mode

The function **netuno.loadFormEdit()** can also be called by directly passing the id of a specific form.

```javascript
netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    let form = modal.find('[netuno-form]');
    netuno.loadFormEdit(form, 1234);
    netuno.modal.show(modal);
  }
});
```

### Events

The modal form class exposes some events to connect to modal functionalities. Inside the callback you can access some form's events.

| TYPE OF EVENT   | DESCRIPTION    |
| ------- |--------------|
| netuno:new | This event is triggered when you display the screen for creating a new item. |
| netuno:edit | This event is triggered when you display the edit screen of an existing item. |
| netuno:save | This event is triggered when a new item is added. |
| netuno:back | This event is triggered after clicking the go back button. |
| netuno:delete | This event is triggered after the deletion of an item. |

The following is an example of the use of the event `netuno:new`.

All you have to do is add it within the `callback` method.

```javascript
modal.find('[netuno-form]').on('netuno:new', ()=> {
  console.log('new');
});
```