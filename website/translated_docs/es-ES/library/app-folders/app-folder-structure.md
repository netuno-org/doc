---
id: app-folder-structure
title: Estrutura da pasta das aplicações
sidebar_label: Estrutura da pasta das aplicações
---

## Estrutura
Ao criar uma aplicação no Netuno, esta terá a seguinte estrutura:

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

A pasta `apps` é a pasta que contem todas as aplicações criadas. Inicialmente nesta pasta já existe a aplicação 'demo', que como o nome indica, trata-se de uma demostração de funcionalidades do Netuno.
 
Quando é criada uma nova aplicação, é adicionada uma nova diretoria contendo a mesma hierarquia de subpastas acima apresentado. 