---
id: generate-uid-guid
title: Generate Unique ID's (UID/GUID)
sidebar_label: Generate Unique ID's (UID/GUID)
---

## Before proceeding

Before proceeding make sure you know how to create **REST Web Services**, in case you don't visit the following link:

* [Web Rest Services](rest)

It is also advisable that, before you start this tutorial, you make sure you have some basic notions in _**JavaScript**_.

## What's a UID

A UID (_unique identifier_), as it indicates, is a single string throughout your application. It is also known as GUID (_global unique identifier_).

In order to exemplify the generation of UID's we are going to create a service.

## UID generation

Let's now demonstrate the generation of a random UID, it is quite simple because Netuno already brings with it a function specifically created for this purpose:

```javascript
_out.println(
  _uid.generate()
)
```

> Note that the `_out.println()` function is just here to allow the display of the result on screen when calling the service in the browser

If you have any questions, please do not hesitate to contact us through the means presented at the bottom of the page.

Good development!
