---
id: templates
title: Templates
sidebar_label: Templates
---

## Before you start
Before creating services that call templates make sure you know how to create **Web REST Services** , if you don't know how to visit the following link:

* [Web Rest Services](web-rest-services.md)

It is also advisable that, before you start this tutorial, you make sure you have some basics in _**JavaScript**_.

## Use of templates in services

In this tutorial we will cover the creation of templates and the actions necessary to be able to call them in your service.

By creating a service on Netuno you have the option to access templates created by you, that is, depending on the result you can redirect your service to a template in html with data.

In this example we will have a basic HTML template and pass data from the service to the same template.

## Creation of a template

![templates1.png](assets/templates1.png)

After being in the above directory, we will create a file in `.html`, in this example it will be named `template.html`.

The following is the content of this page:

```html
<!-- Call to Netuno's header-->
_{include=_|includes/head}

<!-- Definition of styles -->

<style>
body, html {
  margin: 10px;
}

h1, b {
  color: #8182E6;
}
</style>

<!-- Start of html body -->
<h1>Template Title</h1>

<!-- Whenever you need to pass data from a service to a template use _{&variable} -->
<p>Hello, I'm a <b>_{&data=name}</b> and I am receiving <b>_{&data=data}</b> from a service!</p>

<!-- End of html body -->

<!-- Call to Netuno's footer -->
_{include=_|includes/foot}
```

Finally, you create the service by calling the template through the following function:

`_template.output(‘template_name’, variables(optional));`

The 'service.js' example follows:

```javascript
// Initialize the 'date' object so that it may receive data
var data = _val.init()
    
// Associate values to 'date' object
    .set("name", "template")
    .set("data", "data")

// This function is what allows you to call the template
_template.output("template", data);
```

> If you have your template in a subdirectory indicate in the function: `_template.output('directory/template_name')`

Lastly, all you have to do is call the service in your browser and something similar to the following will appear:

![templates2.png](assets/templates2.png)

> Please note that depending on your browser the results shown above may differ.

If you have any questions, please do not hesitate to contact us through the means presented at the bottom of the page.

Good development!
