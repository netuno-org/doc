---
sidebar_position: 7
id: life-cycle
title: Interface Lifecycle Events
sidebar_label: Lifecycle Events
---

## User Interface (`ui`)

In Netuno's data management interface, it is possible to inject custom code to perform customizations and manipulations.

Development is done in the code inside the `ui` folder within the application's root folder.

### addPageLoad()

The page cannot be safely manipulated until the application is "ready".

The method will be called when the page is loaded.

```javascript
netuno.addPageLoad(() => {
   console.log('I do something');
});
```

### addContentLoad()

When forms or reports are loaded, the interface is changed with the respective content, whether it is a data form, a search, or when filtering data from a report.

As soon as some content is loaded, the method is called and receives the container that will hold the content being displayed.

```javascript
netuno.addContentLoad((container) => {
   if (container.is('[netuno-form-search]')) {
       console.log('I do stuff when the element exists');
   }
});
```