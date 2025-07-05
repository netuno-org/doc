---
sidebar_position: 4
id: app-create
title: Application Create
---

## Commands to create an application

After [configuring the platform](../get-started/installation), Here are the basic commands to create an application and start the server.

The application of this tutorial consists of a Modal form and PDF export.

#### Command to create an application.

```shell
./netuno app name=myapp
```

#### Command to start the server.

```shell
./netuno server app=myapp
```

From now on you can start developing your application.

All the files for development are in `/apps/myapp`.

By default, to access the backoffice on the login screen enter the credentials.

**User:** `dev`

**Password:** `dev`

## Create a Simple Application

Now that we have a Netuno knowledge base, we will create an application from start to finish.
We will add a button to the start screen to load the form in a modal and another to generate a PDF.

We will follow these steps:

* Modify the main dashboard HTML
* Add two buttons with React
* Build the `Open Modal Form button`
* Build the `Export PDF` button
* Develop the service that generates the PDF

At the end you will see the application as shown in the following image.

![First App - 1](/docs/assets/comece/primeiraapp1.png)

![First App - 2](/docs/assets/comece/primeiraapp2.png)

Let's get started!

### Modify the main dashboard HTML

Following the tutorial where we teach the [commands to create an application](#commands-to-create-an-application), access the application directory, in this example named `myapp`.

Open the file that has the main HTML of the dashboard, which is in the following directory.

File location

```plaintext
/apps/myapp/server/templates/dashboard.html
```

Copy this HTML and paste it into the `dashboard.html`

```html
<div class="row">
    <div class="col-lg-12">
        <div class="with-form">
            <h1 class="page-header">My work area</h1>
            <p>Open a Modal Form and Export a PDF</p>
        </div>
    </div>
</div>

<div id="app-dashboard"></div>
```

### Add the two buttons with React

Now access the file that has the main dashboard javascript. This file was built in React, and it's where we'll add the two buttons.

File location

```plaintext
/apps/myapp/ui/src/containers/DashboardContainer.jsx
```

Copy and paste this code into the file `DashboardContainer.jsx`

```javascript
import React, { Component } from "react";
import ButtonModal from '../components/ButtonModal/index.jsx';
import ButtonPDF from '../components/ButtonPDF/index.jsx';

export default class DashboardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="my-dashboard">
                <ButtonModal />
                <ButtonPDF />
            </div>
        );
    }
}
```

### Build the Open Modal Form Button

In this step, we will create a form called `Test` and a field called `Name`.

Learn how to create forms [here](ui/forms.md).
Learn how to create fields [here](ui/fields.md).

Then go to the form you created, open the element inspector in the browser and look for the uid in the attribute `netuno-form-uid`, it will be important for the next step.

![First App - 3](/docs/assets/comece/primeiraapp3.png)

![First App - 4](/docs/assets/comece/primeiraapp4.png)

Now, open again the file you edited earlier `dashboard.html` and add the code before:

 ```html
 <div id="app-dashboard"></div>
 ```

and edit the `netuno-form-uid` attribute with the one from the previous step.

```html
<div id="dashboard-modal-test" class="modal">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button>
            </div>
            <div class="modal-body">
                <div id="dashboard-modal-test-netuno-form" netuno-form netuno-form-uid="UID" netuno-form-name="test" netuno-form-edit-only="" netuno-zone="dashboard-test">
                    <div class="netuno-form-edit"  netuno-form-edit="test"></div>
                </div>
            </div>
        </div>
    </div>
</div>
```
Let's create a directory `ButtonModal` and inside it the file `index.jsx`, in the following directory.

 File location

```plaintext
/apps/myapp/ui/src/components/
```

Now open again the file you created before `index.jsx` and add the code below:

Note in the following code, that the method `netuno.modal.create()` opens the form called `Test`.

In the callback you can test the action events in the form.

File location

```plaintext
/apps/myapp/ui/src/components/ButtonModal/index.jsx
```

Code

```javascript
import React, { Component } from "react";

export default class ButtonModal extends Component {
    constructor() {
        super();
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        netuno.modal.create({
            name: 'test',
            callback: function (modal) {
                let form = modal.find('[netuno-form]');

                form.on('netuno:new', () => {
                    console.log('You clicked new');
                });

                form.on('netuno:save', () => {
                    netuno.modal.hide(modal)
                    console.log('You clicked save');
                });

                form.on('netuno:back', () => {
                    console.log('You clicked back');
                });

                netuno.loadForm(form);
                netuno.modal.show(modal);
            }
        });
    }

    render() {
        return (
            <button
                onClick={this.handleClick}
                className="btn btn-default">
                Open Modal Form
            </button>
        );
    }
}
```

### Build the Export PDF button

The button to generate PDF will depend on a responsible service to create the PDF that will be called when there is a click on the `Generate PDF` button. Let's see how to do this service below.

Before we see the button code we will create a new directory `ButtonPDF` and inside it the file `index.jsx`, in the following directory:

 File location

```plaintext
/apps/myapp/ui/src/components/
```

Now open again the file you created before `index.jsx` and add the following code:


File location

```plaintext
/apps/myapp/ui/src/components/ButtonPDF/index.jsx
```

Code

```javascript
import React, { Component } from "react";

export default class ButtonPDF extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <a
                target='_blank'
                href='/services/export-pdf.netuno'
                className="btn btn-default">
                Export PDF
            </a>
        );
    }
}
```

### Develop the service that creates the PDF

Finally, below is the code of the service that will be responsible for generating the PDF.

Note the previous code excerpt where we only need to add the `url` of the service in the _`href`_ attribute of the button.

Let's create the following file _`export-pdf.js`_, in the following directory:

File location

```plaintext
/apps/myapp/server/services/
```
Copy and paste the following code into the _`export-pdf.js`_ file

```javascript
_header.contentType('pdf')

var pdfDocument = _pdf.newDocument(_pdf.pageSize('A5'));

var viksiScript = _pdf.font(_storage.filesystem('server', 'samples/export-pdf', 'viksi-script.ttf'), true);
var helvetica = _pdf.font('helvetica');

pdfDocument.add(
    _pdf.image(_storage.filesystem('server', 'samples/export-pdf', 'logo.png'))
        .scaleAbsolute(120, 36)
)

pdfDocument.add(
    _pdf.paragraph('My Custom Font!')
        .setFont(viksiScript)
        .setFontSize(30)
        .setFontColor(_pdf.color("#1abc9c"))
)

pdfDocument.add(
    _pdf.paragraph('Helvetica!')
        .setFont(helvetica)
        .setFontSize(15)
)

pdfDocument.close()
```

It is important to analyze the `_storage.filesystem()` method.

And this way we import the files into the PDF or any other resource.

To complete the import, let's copy the `export-pdf` folder from the following directory:

File location

```plaintext
/apps/demo/storage/filesystem/server/samples/
```
Then we will paste the folder in the following directory:

```plaintext
/apps/myapp/storage/filesystem/server/samples/
```
There you go! Now you can do your tests.
