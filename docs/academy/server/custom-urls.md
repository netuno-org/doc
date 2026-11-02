---
id: custom-urls
title: Custom URLs and Hosts
sidebar_label: Custom URLs and Hosts
---

## Introduction

Netuno allows you to change the default addresses, for example:

- The address of the administration interface, `admin`.
- The address of public files, such as images, CSS, and JS, `public`.
- The address of the REST API services, `services`.
- The address of the MCP protocol endpoint, `mcp`.

## URLs

Navigate within the application you are developing to the environment configuration file. In this example, we will use the development environment file located at:

- 📂 `config/_development.json`

Check if the URL configuration already exists. If it doesn't, add the URL configuration parameters to the end of the configuration file (in JSON format), for example:

```json
{
    ...
    "url": {
        "admin": "/admin/",
        "public": "/public/",
        "services": "/api/",
        "mcp": "/mcp/"
    },
    ...
}
```

#### admin

Defines the URL prefix for the administration interface; the default is simply `/`.

#### public

Defines the URL prefix for static files that are public, such as images, CSS stylesheets, and JavaScript code; the default is `/public`.

#### services

Defines the initial URL address for the REST API web services; the default is `/services`.

### mcp

Defines the initial URL address for the MCP protocol web endpoint; the default is `/mcp`.

## Hosts

Navigate within the application you are developing to the environment configuration file. In this example, we will use the development environment file located at:

- 📂 `config/_development.json`

Check if the Host (Domains) configuration already exists. If not, add the Host configuration parameters to the end of the configuration file (in JSON format), for example:

- If there is only one host, use a string as the value:

```json
{

...
"host": "my-project.com",

... }
```

- If there are multiple hosts, use an array of strings as the value:

```json
{
    ...
    "host": [
        "my-project.com",
        "www.my-project.com"
    ],
    ...
}
```

This defines the global hosts/domains of the application. Any request with one of these hosts that reaches Netuno will be processed by the application.

You can also define specific hosts/domains for each type of global service server that Netuno provides, for example:

```json
{
...
    "host": {
        "admin": "admin.my-project.com",
        "services": ["api.my-project.com", "services.my-project.com"],
        "mcp": "mcp.my-project.com"
    },
...
}
```

If it's only one host/domain, use a string value; if it's multiple hosts/domains, use an array of strings. Both are supported.

#### admin

Defines the domain or host address of the administration interface.

#### services

Defines the domain or host address of the REST API web services.

#### mcp

Defines the domain or host address of the MCP protocol endpoint address.

## Conclusion

Customizing URLs is important, both to make them more intuitive and to make them more complex and increase security.

And associating the application with specific Hosts or Domains allows for improved access management and availability.

For example, the administration address can be prefixed with a sequence of random characters, so only those who know it by heart will be able to access the address, making access more difficult and preventing attacks.
