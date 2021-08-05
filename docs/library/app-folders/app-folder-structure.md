---
id: app-folder-structure
title: Application folder structure
sidebar_label: Application folder structure
---

## Structure
When creating an application in Netuno, it will have the following structure:

```plaintext
netuno/
  ├─ web/
  │  ├─ apps/
  │  │  ├─ myapp/
  │  │  │  ├─ config/
  │  │  │  ├─ db/
  │  │  │  ├─ public/
  │  │  │  │  ├─ images/
  │  │  │  │  ├─ styles/
  │  │  │  │  ├─ scripts/
  │  │  │  ├─ server/
  │  │  │  │  ├─ actions/
  │  │  │  │  ├─ components/
  │  │  │  │  ├─ core/
  │  │  │  │  ├─ services/
  │  │  │  │  ├─ setup/
  │  │  │  │  ├─ templates/
  │  │  │  ├─ storage/
  │  │  │  ├─ ui/
  │  │  │  │  ├─ src/
  │  │  │  │  │  ├─ components/
  │  │  │  │  │  ├─ presentational/
  │  │  │  │  │  ├─ style/
  │  │  │  │  │
```

The `apps` folder is the folder that contains all the applications created. Initially in this folder there will be the 'demo' application, which as the name indicates, is a demonstration of Netuno's features.
 
When a new application is created, a new directory containing the same sub-folder hierarchy as above is added. 