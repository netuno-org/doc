---
id: storage
title: Storage
sidebar_label: Storage
---

## storage/

The `storage` folder has the property to securely store user information segmented by access levels.

#### Storage folder structure

In the `storage` folder you will find the following structure:

```plaintext
└─ storage/
   ├─ database/
   └─ filesystem
      ├─ private
      ├─ public
      └─ server    
```
### database/
The `database` folder is used to store files or images of forms 

### filesystem/
The `filesystem` folder enables access restrictions.

The restrictions are divided into the following: 

##### private/

The `private` folder can only be accessed (via url to the file or folder) for reading or writing by users authenticated in the application.

##### public/

The `public` folder is available for external access to any personnel who know its URL.

##### server/

The `server` folder only allows reading and writing from code in the application. Therefore, no user can access its content directly from the URL.
