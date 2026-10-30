---
id: generate-uid-guid
title: Generate Unique IDs (UID/GUID)
sidebar_label: Generate Unique IDs (UID/GUID)
---

## Before you begin

Before proceeding, make sure you know how to create **REST Web Services**; if you do not, visit the following link:

* [REST Web Services](/docs/academy/server/services/rest)

It is also advisable, before starting this tutorial, to make sure you have basic knowledge of _**JavaScript**_.

## What is a UID

A UID (_unique identifier_), as the name implies, is a unique string across your entire application. It is also known as a GUID (_global unique identifier_).

To demonstrate UID generation, let's create a service.

## Generating UIDs

We will now demonstrate creating a random UID; it is quite simple because Netuno already includes a function specifically created for this purpose:

```javascript
_out.println(
  _uid.generate()
)
```

> Note that the `_out.println()` function is only to allow viewing the result on screen when calling the service in the browser

If you have any questions, do not hesitate to contact us through the means presented at the end of the page.

Happy development!