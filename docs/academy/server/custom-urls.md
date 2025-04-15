---
id: custom-urls
title: Custom URLs
sidebar_label: Custom URLs
---

## Introduction

Netuno allows you to change the default addresses, for example:

- The address of the administration interface, `admin`.
- The address of public files, such as images, CSS and JS, `public`.
- The address of the REST API services, `services`.

## Configuration

Navigate within the application you are developing to the environment configuration file. In this example, we will use the development environment file located at:

- 📂 `config/_development.json`

Check if the URL configuration does not already exist. If it does not exist, add the URL configuration parameters at the end of the configuration file (in JSON format), for example:

```
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

Sets the URL address prefix for the administration interface, the default is just `/`.

### public

Sets the URL address prefix for static files that are public, such as images, CSS styles, and JavaScript code, the default is `/public`.

### services

Sets the initial URL address for the REST API web services, the default is `/services`.

## Conclusion

Customizing URLs is important, both to make them more intuitive and to make them more complex and increase security.

For example, the administration address can be prefixed with a sequence of random characters, so that only those who know the code by heart will be able to access the address, making access more difficult and preventing attacks.
