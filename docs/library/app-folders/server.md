---
id: server
title: Server
sidebar_label: Server
---

## server/

The `server` folder contains a set of files and folders that form the application backend.

#### Server folder structure

In the `server` folder you will find the following structure:

```plaintext
└─ server/
   ├─ actions/
   ├─ core/
   │  ├─ _config.js/
   │  ├─ _init.js/
   │  ├─ _request_close.js/
   │  ├─ _request_end.js/
   │  ├─ _request_error.js/
   │  ├─ _request_start.js/
   │  ├─ _request_url.js/
   │  ├─ _service_config.js/
   │  ├─ _service_end.js/
   │  ├─ _service_error.js/
   │  └─ _service_start.js/   
   ├─ services/
   │  ├─ firebase/
   │  │  ├─ listener/
   │  ├─ jobs/
   ├─ setup/
   │  └─ _end.js/   
   │  └─ _schema-form-xxx.js/   
   │  └─ _start.js/   
   └─ templates/
      ├─ dev/
      │  └─ dashboard.html
      ├─ dashboard.html
      ├─ scripts.html
      ├─ scripts_dev.html
      ├─ scripts_login.html
      ├─ styles.html
      ├─ styles_dev.html
      └─ styles_login.html      
```

### actions/
Under `actions` you can add custom actions (hooks) in the CRUD operations of the forms.
### core/

The `core` folder allows code injection in special situations.

`_config.js` is where server-side application settings are configured.

`_init.js` is for the resource initialization parameters of the server application.

`_request_close.js` `_request_end.js` `_request_error.js` `_request_start.js` `_request_url.js` allow you to parameterize the requests to the server by injecting code at different execution times. 

`_service_config.js` `_service_end.js` `_service_error.js`  `_service_start.js` are *hooks* of different moments in the applicational life click where logic can be introduced.

### services/

It is in the `services` folder that the services that make up the application API are created. 

`firebase/listener` If enabled, the behaviour for when a firebase service field update is received must be described.

`jobs` If enabled, the schedule as well as the code to be executed by cronjobs services must be described.

Export-pdf.js' Taking as an example a service to generate PDF's, it would be in this directory that would be programmed the invocation behavior of the PDF library and the return of the PDF to the client. These can be written in Javascript, Python, Java, Kotlin, Ruby or Groovy. 

No additional settings are required depending on the programming language used, all you need to do is create the service file with the correct extension.
 

### setup/

`setup` is automatically powered by Netuno engine with the database schemas and their data.

`_end.js` hook executed after loading the schema(s).
 
`_schema-form-bla.js` schema file with the information created from forms, fields and data of a given form, e.g. bla.
 
`_start.js` hook executed before the schema(s) is(are) loaded.
 
 ### templates/

The `templates` folder contains the HTML content of the application pages.

The `dev` folder contains the 'dashboard.html' file which allows the creation of the desktop construction mode.

`dashboard.html` contains the HTML of the working area of the construction or viewing mode, according to its location.

`scripts.html` , `scripts_dev.html` and `scripts_login.html` have the same purpose but for different places. The first concerns scripts injected in the construction mode, the next relates to the viewing mode and the last relates to the application's authentication module, allowing the insertion of scripts with the particularity that these scripts prevail over others already defined.

`styles.html`, `styles_dev.html` and `styles_login.html`, similar to the scripts, constitute the HTML referring to the styles for the visualization, construction and application authentication modules, respectively.

