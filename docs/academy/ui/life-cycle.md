---
id: life-cycle
title: Application Life Cycle Events
sidebar_label: Application Life Cycle Events
---

A page cannot be safely handled until the application is "ready". Netuno detects this state of readiness for you. 

## addPageLoad()

The method will be called when the page is loaded.

```javascript
netuno.addPageLoad(() => {
   console.log('do something');
});
```

## addContentLoad()

Once a component is loaded, the method is called.

```javascript
netuno.addContentLoad((container) => {
   if (container.is('[netuno-form-search]')) {
       console.log('make stuff when the element exists');
   }
});
```
