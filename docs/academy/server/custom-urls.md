---
id: custom-urls
title: Custom URLs
sidebar_label: Custom URLs
---

## Introduction

Netuno allows you to change the default addresses, for example:

- The address of the administration interface, `admin`.
- The address of public files, such as images, CSS, and JS, `public`.
- The address of REST API services, `services`.

## Configuration

Navigate within the application you are developing to the environment configuration file. In this example, we will use the development environment file located at:

- 📂 `config/_development.json`

Check whether the URL configuration does not already exist; if it does not exist, add the URL configuration parameters at the end of the configuration file (in JSON format), for example:

```json
{
    ...
    "url": {
        "admin": "/admin/",
        "public": "/public/",
        "services": "/api/"
    },
    ...
}
```

### admin

Defines the URL address prefix for the administration interface; the default is just `/`.

### public

Defines the URL address prefix for static files that are public, such as images, CSS styles, and JavaScript code; the default is `/public`.

### services

Defines the initial URL address for the REST API web services; the default is `/services`.

## Conclusion

Customizing URLs is important, both to make them more intuitive and to be able to make them more complex and increase security.

For example, the administration address can use a prefix with a random character sequence, so only those who know it by heart will access the access address; this makes access harder and prevents attacks.