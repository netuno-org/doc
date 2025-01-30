---
id: pdf
title: PDF
sidebar_label: PDF
---

## Introduction

Netuno generates PDF files with support for images, tables, fonts, and more.

Through the [PDF](../../../library/resources/pdf) resource that allows a low-code abstraction of [iTextPDF](https://itextpdf.com/) for the all programming languages supported by Netuno.

The application that comes with Netuno called **demo** (demonstration application) contains many examples of possible code implementations in various languages, including a demonstration of exporting to PDF through the `export-pdf` service located at:

<!--DOCUSAURUS_CODE_TABS-->
<!--Groovy-->
```plaintext
/apps/demo/server/services/samples/groovy/export-pdf.groovy
```
<!--JavaScript-->
```plaintext
/apps/demo/server/services/samples/javascript/export-pdf.js
```
<!--Kotlin-->
```plaintext
/apps/demo/server/services/samples/kotlin/export-pdf.kts
```
<!--Python-->
```plaintext
/apps/demo/server/services/samples/python/export-pdf.py
```
<!--Ruby-->
```plaintext
/apps/demo/server/services/samples/ruby/export-pdf.rb
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Initialization

Firstly, you need to create the object that will contain the context of the new document that is being created, by default the page size is A4.

When creating the document, you define where it will be generated.

If nothing is defined, it will be generated in the service's data output, for example:

```javascript
const pdfDocument = _pdf.newDocument()
```

To generate a PDF file inside the application's `docs` folder, you can do it like this:

```javascript
const pdfDocument = _pdf.newDocument(_app.file('docs/file.pdf').output())
```

If you are going to generate the document in a new file outside of the Application, for example:

```javascript
const pdfDocument = _pdf.newDocument(_os.file('/tmp/file.pdf'))
```

Or even in the application `storage`:

```javascript
const pdfDocument = _pdf.newDocument(_storage.filesystem('server', 'file.pdf'))
```

> By default, the document is created in **A4** page format.

### Page Format

To customize the page format, simply indicate it when creating the document.

Creates a new document to output data from the service with pages in **letter** format:

```javascript
const pdfDocument = _pdf.newDocument(_pdf.pageSize("letter"))
```

Creates a new document for a file in the application root with the **B3** page format:

```javascript
const pdfDocument = _pdf.newDocument(_app.file('file.pdf'), _pdf.pageSize("B3"))
```

Creates a new document in the application's `storage` with the **legal** page format:

```javascript
const pdfDocument = _pdf.newDocument(_storage.filesystem('server', 'file.pdf'), _pdf.pageSize("legal"))
```

> See the documentation on [setting page sizes](../../../library/resources/pdf/#pagesize).

PDF documents can be created with a custom page size definition. To do this, use `pageSize` by passing the value of the page width and height, for example:

```javascript
_pdf.pageSize(50, 30)
```

## HTTP Header

To create a service in the REST API that returns a PDF file as data output, you need to add the `Content-Type` parameter of the HTTP protocol to the header.

Example of how to set content as PDF:

```javascript
_header.contentType("pdf")
```

The `pdf` code is an abbreviation for:

```javascript
_header.contentType("application/pdf")
```

## Page Break

To create a new page, `areaBreak` is used:

```javascript
pdfDocument.add(
    _pdf.areaBreak()
)
```

## Paragraph

Add a new paragraph in the document:

```javascript
pdfDocument.add(
    _pdf.paragraph("My text here...")
        .setFontSize(15)
)
```

To add a paragraph at a fixed position:

```javascript
pdfDocument.add(
    _pdf.paragraph("Helvetica Oblique!")
        .setFixedPosition(100, 500, 200)
        .setFontSize(15)
)
```

In the code above, in the `setFixedPosition` method, the first parameter is the X position (`100`), the second parameter is the Y position (`500`), and the third parameter is the width (`200`).

**Attention**: if Y is set to `0`, this means that it is at the bottom of the page, so to go up you need to increase the Y value, the higher the Y value, the more it will appear at the top, but if it is too high, beyond of the page length so it will not be visible.

> Documentation with all [iText Paragraph](https://api.itextpdf.com/iText/java/8.0.3/com/itextpdf/layout/element/Paragraph.html) object methods.

## Font

To define a native font we can do it as follows:

```javascript
const helvetica = _pdf.font("helvetica")
const helveticaBold = _pdf.font("helvetica-bold")
const helveticaBoldOblique = _pdf.font("helvetica-boldoblique")
const helveticaOblique = _pdf.font("helvetica-oblique")
```

To define a customized font, we can use `storage`:

```javascript
const viksiScript = _pdf.font(_storage.filesystem("server", "samples/export-pdf", "viksi-script.ttf"), true)
```

We can also use a file inside the application, as this example shows that the font is inside the `fonts` folder in the application root:

```javascript
const roboto = _pdf.font(_app.file("fonts/roboto.ttf"), true)
```

Or use a file in any path on the system, so in this example the font is inside the `fonts` folder which is inside the system's temporary files folder:

```javascript
const roboto = _pdf.font(_os.file("/tmp/fonts/roboto.ttf"), true)
```

> Documentation with all [iText Font](https://api.itextpdf.com/iText/java/8.0.3/com/itextpdf/kernel/font/PdfFont.html) object methods.

To use the font in texts, the font constant must be passed to the paragraph, like this:

```javascript
pdfDocument.add(
    _pdf.paragraph("Using bold font.")
        .setFont(helveticaBold)
        .setFontSize(15)
)
```

## Image

Inserting images into the programmatically generated PDF document is done in this way:

```javascript
pdfDocument.add(
    _pdf.image(_storage.filesystem("server", "samples/export-pdf", "logo.png"))
        .scaleAbsolute(120, 36)
)
```

Note that the `scaleAbsolute` method is very useful for resizing and adjusting the image size.

Alternatively, we can use a file within the application, as in this example:

```javascript
const imageLogo = _pdf.image(_app.file("public/images/logo.png")
```

Or use a file in any path on the system, as in this example:

```javascript
const imageLogo = _pdf.image(_os.file("/tmp/images/pdf-logo.png")
```

To add an image in a fixed position:

```javascript
pdfDocument.add(
    imageLogo
        .scaleAbsolute(120, 36)
        .setFixedPosition(100, 500)
)
```

Since above, in the `setFixedPosition` method, the first parameter is the X position (`100`), the second parameter is the Y position (`500`).

**Attention**: if Y is set to 0, this means that it is at the bottom of the page, so to go up you need to increase the Y value, the higher the Y value, the more it will appear at the top, but if it is too high, beyond of the page length so it will not be visible.

> Documentation with all [iText Image](https://api.itextpdf.com/iText/java/8.0.3/com/itextpdf/layout/element/Image.html) object methods.

## Table

It is possible to create tables, which allows you to present a set of data in a more readable way.

The number of columns in the table is defined with the parameter: `_pdf.table(numberOfColumns)`

In the example below, the `numberOfColumns` is the number `1`, that is, one column.

As we have added two cells in the table, so the second cell goes to the next row.

Repair:

```javascript
pdfDocument.add(
  _pdf.table(1)
    .addCell(
      _pdf.cell()
        .add(
          _pdf.paragraph("Person")
            .setFont(helvetica)
            .setFontSize(10)
          )
          .setBorder(_pdf.border("solid", 2))
          .setBackgroundColor(_pdf.colorRGB(1, 0, 0))
        )
    .addCell(
      _pdf.cell()
        .add(
          _pdf.paragraph("Nicole")
            .setFont(helvetica)
            .setFontSize(10)
          )
          .setBackgroundColor(_pdf.colorGray(0.5)
      )
```

With the `addCell` method you can insert the definition of cells with their respective content.

> Documentation with all [iText Cell](https://api.itextpdf.com/iText/java//8.0.3/com/itextpdf/layout/element/Cell.html) object methods.

## Close and Save the Document

The document is only fully saved or generated, only when the `close` method is called, as follows:

```javascript
pdfDocument.close()
```

Where the document is generated is defined at initialization, so it is at document initialization that we define where the final document will be generated, whether it will be in the service's data output (`output`) or in a file.

## Edit File

You can edit an existing PDF document, for example:

```javascript
const pdfDocument = _pdf.openDocument(_app.file('file.pdf'))
```

The final generated document will be sent in the service's data output.

> It is very useful to use a PDF as a base, as if it were a template.

Example for editing a document in the application `storage`:

```javascript
const pdfDocument = _pdf.openDocument(_storage.filesystem('server', 'file.pdf'))
```

Uses a document as a base but saves changes to a new PDF file:

```javascript
const pdfDocument = _pdf.openDocument(
    _app.file('documento-base.pdf'),
    _app.file('documento-final.pdf')
)
```

Example using a document in `storage` as a base but saving it in another:

```javascript
const pdfDocument = _pdf.openDocument(
    _storage.filesystem('server', 'contrato-base.pdf'),
    _storage.filesystem('server', 'contrato-final.pdf')
)
```

With the document loaded, we can add content, and when closing with the `close` method at the end, the final document is generated with the new content added programmatically.

Example of a service that uses an existing PDF as a template to generate a PDF file output with dynamic content added:

```javascript
_header.contentType("pdf")

const pdfDocument = _pdf.openDocument(_app.file('template-1.pdf'))

pdfDocument.add(
    _pdf.paragraph("My dynamic content.")
        .setFixedPosition(37, 730, 100)
        .setFontSize(15)
)

pdfDocument.close()
```

## Read File

To read a PDF document, extracting the text information.

We use the `extract` method, which obtains all the data from the PDF file in a JSON object.

```javascript
const pdfData = _pdf.extract(_app.file('file-1.pdf'))

_out.json(pdfData)
```

The returned JSON has the key `content` with all the text content of the PDF file, and has the key `metadata` with the various properties of the PDF file.

Here is an example of the JSON returned by `extract`:

```
{
  "content": "All text content of the PDF file goes here...",
  "metadata":{
    "Content-Type":"application/pdf",
    "dc:format":"application/pdf; version=1.4",
    "dc:title":"Linux 1",
    "pdf:PDFVersion":"1.4",
    "pdf:charsPerPage":"580",
    "pdf:containsDamagedFont":"false",
    "pdf:containsNonEmbeddedFont":"false",
    "pdf:docinfo:producer":"Skia/PDF m125 Google Docs Renderer",
    "pdf:docinfo:title":"File 1",
    "pdf:encrypted":"false",
    "xmpTPg:NPages":"3",
    ...
  }
}
```

There are many other data that are obtained in the `metadata` but that were omitted in the `...` so the example does not become too long.

## Conversion

It is possible to programmatically convert PDF to text or even HTML.

### Text

We can extract the entire content of the PDF file in plain text using the method:

```javascript
_pdf.toText(...)
```

Example of how to use it to read a file in the application root:

```javascript
_out.print(_pdf.toText(_app.file('my-document.pdf')))
```

Or using a file in the application's `storage`:

```javascript
_out.print(_pdf.toText(_storage.filesystem('server', 'my-document.pdf')))
```

### HTML

We can extract the entire content of the PDF file into HTML using the method:

```javascript
_pdf.toHTML(...)
```

Example of how to use it to read a file in the application root:

```javascript
_out.print(_pdf.toHTML(_app.file('my-document.pdf')))
```

Or using a file in the application's `storage`:

```javascript
_out.print(_pdf.toHTML(_storage.filesystem('server', 'my-document.pdf')))
```
