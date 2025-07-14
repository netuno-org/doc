---
sidebar_position: 1
id: folders-overview
title: Folders Overview
sidebar_label: Folders Overview
---

## Structure
When creating an application in Netuno, it will have the following structure:

<pre>
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
</pre>

The `apps` folder is the folder that contains all the applications created. Initially in this folder there will be the 'demo' application, which as the name indicates, is a demonstration of Netuno's features.
 
When a new application is created, a new directory containing the same sub-folder hierarchy as above is added. 