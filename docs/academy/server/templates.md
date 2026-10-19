---
id: templates
title: Templates
sidebar_label: Templates
---

## Before you start
Before creating services that call templates, make sure you know how to create **REST Web Services**. If you do not, visit the following link:

* [REST Web Services](/docs/academy/server/services/rest)

It is also advisable, before starting this tutorial, to make sure you have basic knowledge of _**JavaScript**_.

## Using templates in services

In this tutorial we will cover creating templates and the actions required to call them from your service.

When creating a service in Netuno, you have the option to access templates created by you, meaning that depending on the result, you can redirect your service to an HTML template with data.

In this example we will have a basic HTML template and pass data from the service to that same template.

## Creating a template

![templates1.png](/docs/assets/templates1.png)

After you are in the directory above, let's create an `.html` file; in this example it will be named `template.html`.

Below is the content of this page:

```html
<!-- Call to Netuno header -->
_{include=_|includes/head}

<!-- Style definitions -->

<style>
body, html {
  margin: 10px;
}

h1, b {
  color: #8182E6;
}
</style>

<!-- Start of the HTML body -->
<h1>Template title</h1>

<!-- When you need to pass data from a service to a template, use _{&variable} -->
<p>Hello, I am a <b>_{&data=name}</b> and I am receiving <b>_{&data=data}</b> from a service!</p>

<!-- End of the HTML body -->

<!-- Call to Netuno footer -->
_{include=_|includes/foot}
```

Finally, create the service with the call to the template using the following function:

`_template.output('template_name', variables(optional));`

Below is the example of the `service.js` service:

```javascript
// Initialize the 'data' object so that it can receive data
var data = _val.init()
    
// Assign values to the 'data' object
    .set("name", "template")
    .set("data", "data")

// This function allows you to call the template
_template.output("template", data);
```

> If your template is in a subdirectory, specify it in the function: `_template.output('directory/template_name')`

Finally, just call the service in the browser and something similar to the following will appear:

![templates2.png](/docs/assets/templates2.png)

> Note that depending on your browser, the results shown above may differ.

If you have any questions, do not hesitate to contact us through the means provided at the end of the page.

Happy development!