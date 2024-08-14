---
id: code-reuse
title: Code reuse
sidebar_label: Code reuse
---

## Introduction

Among the various features for simplifying development that Neptune offers is the reuse of code in a simple and intuitive way.
Imagine that you are developing a complex task that, at all times, requires the execution of one or more actions. Normally, for this, we create methods/functions to avoid rewriting the logic over and over again. However, writing methods/functions can generate a scenario of concern, whether we are following good practices or even harming the readability of the code. With this in mind, Neptune brings the ability to write your logic separately in other files and then easily import them into the code, without changing its organization. In other words, it will be there when you need it, but it will not pollute your main logic.

## Practical Examples

In a Neptune App, files created from the `/server/core/` directory are available to be imported into any backend service as follows: Assuming we have the following code in a `core/utils/user.js` file to reuse in different locations:

```
const mailAlreadyInUse = (email) => {
    const alredyInUse = _db.queryFirst(
        `SELECT 
            CASE WHEN COUNT(1) > 0 THEN TRUE ELSE FALSE END AS inUse
        FROM netuno_user
        WHERE 1 = 1
            AND mail = ?
        `, email
    );

    return alredyInUse.getBoolean("inUse");
}
```
At the destination we do the following:
```
//_core: utils/user

const mail = _req.getString("mail");

if (mailAlreadyInUse(mail)) {
    _out.json(
        _val.map()
            .set("result", false)
            .set("error","mail already exists")
    )
    _exec.stop();
}
```
Not only the demonstrated function, but any other function or variable that is in the `user.js` file that was imported will be available to be used.

> When using this resource, you must be careful not to import files that may coincide in the same location.