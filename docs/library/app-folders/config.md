---
id: config
title: Config
sidebar_label: Config
---

## config/

The application configurations are available in this folder, consisting of Netuno settings and access to external components. This directory has these files:

## _development.js

The javascript code injection allows dynamic configurations through programmatic logic over the parameterizations defined in _development.js. As for example the use of a different language based on the logged-in user.

This file will be used when configuring the development environment. 

## _development.json

Configuration of the application parameters such as the language and external resource settings used by the application. For example, configurations of databases, cronjobs, access to SMTP servers or remote API's, among others. 

This file will be used when configuring the development environment. 


## _production.js

The javascript code injection allows dynamic configurations through programmatic logic over the parameterizations defined in _production.js. As for example the use of a different language based on the logged-in user.

This file will be used when configuring the production environment. 

## _production.json

Configuration of the application parameters such as the language and external resource settings used by the application. For example, configurations of databases, cronjobs, access to SMTP servers or remote API's, among others. 

This file will be used when configuring the production environment. 

## icon.png

Application icon in the browser tab (favicon).