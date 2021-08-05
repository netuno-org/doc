---
id: xls
title: XLS
sidebar_label: XLS
---

Create and read _Excel_ files, support for _XLS_ files as _XLSX_ files.
This feature uses the [Apache POI](https://poi.apache.org/ "Apache POI") library.

```javascript
const excel = _xls.create();
const titles = _val.init()
    .add(
        _val.init()
            .set('value', 'Name')
    ).add(
        _val.init()
            .set('value', 'Age')
    );
const endPosition = excel.addDataTable(1, 1, titles)
const data = _val.init()
    .add(
        _val.init()
            .add(
                 _val.init()
                     .set('value', 'John')
            ).add(
                 _val.init()
                     .set('value', 24)
            )
    ).add(
        _val.init()
            .add(
                 _val.init()
                     .set('value', 'Annye')
            ).add(
                 _val.init()
                     .set('value', 22)
            )
    );
endPosition = excel.addDataTable(endPosition.row, 1, data)
excel.output("ages.xls");
```

---

## activeSheet

---

#### `_xls.create()`.activeSheet(index: _int_) : _HSSFSheet_
##### Description

Sets the spreadsheet that is active.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ | Spreadsheet number. |

##### Return

( _HSSFSheet_ )

Active spreadsheet.

---

## add

---

#### _xls.add(row: _int_, col: _int_, data: _Map_) : _XLS_
##### Description

Insert data in a specific cell.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| row | _int_ | Line number. |
| col | _int_ | Column number. |
| data | _Map_ | Data to be inserted. |

##### Return

( _XLS_ )

The current instance of the XLS resource.

---

#### _xls.add(cell: _HSSFCell_, data: _Map_) : _XLS_
##### Description

Insert data in a specific cell.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| cell | _HSSFCell_ | Cell object. |
| data | _Map_ | Data to be inserted. |

##### Return

( _XLS_ )

The current instance of the XLS resource.

---

#### _xls.add(cell: _HSSFCell_, data: _[Values](../../objects/Values)_) : _XLS_
##### Description

Insert data in a specific cell.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| cell | _HSSFCell_ | Cell object. |
| data | _[Values](../../objects/Values)_ | Data to be inserted. |

##### Return

( _XLS_ )

The current instance of the XLS resource.

---

## addDataTable

---

#### `_xls.create()`.addDataTable(rowIndex: _int_, colIndex: _int_, data: _List_) : _[XLSPosition](../../objects/XLSPosition)_
##### Description

Adds a data table to the spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| rowIndex | _int_ | Line number. |
| colIndex | _int_ | Column number. |
| data | _List_ | List of data to be inserted. |

##### Return

( _[XLSPosition](../../objects/XLSPosition)_ )

Reference of the position of the last cell with data entered.

---

#### `_xls.create()`.addDataTable(rowIndex: _int_, colIndex: _int_, data: _List_, vertical: _boolean_) : _[XLSPosition](../../objects/XLSPosition)_
##### Description

Adds a data table to the spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| rowIndex | _int_ | Line number. |
| colIndex | _int_ | Column number. |
| data | _List_ | List of data to be inserted. |
| vertical | _boolean_ | Insert data vertically. |

##### Return

( _[XLSPosition](../../objects/XLSPosition)_ )

Reference of the position of the last cell with data entered.

---

#### `_xls.create()`.addDataTable(sheet: _int_, rowIndex: _int_, colIndex: _[Values](../../objects/Values)_) : _[XLSPosition](../../objects/XLSPosition)_
##### Description

Adds a data table to the spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| sheet | _int_ | Spreadsheet object. |
| rowIndex | _int_ | Line number. |
| colIndex | _[Values](../../objects/Values)_ | Column number. |

##### Return

( _[XLSPosition](../../objects/XLSPosition)_ )

Reference of the position of the last cell with data entered.

---

#### `_xls.create()`.addDataTable(sheet: _int_, rowIndex: _int_, colIndex: _[Values](../../objects/Values)_, data: _boolean_) : _[XLSPosition](../../objects/XLSPosition)_
##### Description

Adds a data table to the spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| sheet | _int_ | Spreadsheet object. |
| rowIndex | _int_ | Line number. |
| colIndex | _[Values](../../objects/Values)_ | Column number. |
| data | _boolean_ | List of data to be inserted. |

##### Return

( _[XLSPosition](../../objects/XLSPosition)_ )

Reference of the position of the last cell with data entered.

---

#### `_xls.create()`.addDataTable(config: _Map_, data: _List_) : _[XLSPosition](../../objects/XLSPosition)_
##### Description

Adds a data table to the spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| config | _Map_ | Configuration of the data table. |
| data | _List_ | List of data to be inserted. |

##### Return

( _[XLSPosition](../../objects/XLSPosition)_ )

Reference of the position of the last cell with data entered.

---

#### `_xls.create()`.addDataTable(sheet: _HSSFSheet_, rowIndex: _int_, colIndex: _int_, data: _List_, vertical: _boolean_) : _[XLSPosition](../../objects/XLSPosition)_
##### Description

Adds a data table to the spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| sheet | _HSSFSheet_ | Spreadsheet object. |
| rowIndex | _int_ | Line number. |
| colIndex | _int_ | Column number. |
| data | _List_ | List of data to be inserted. |
| vertical | _boolean_ | Insert the data vertically. |

##### Return

( _[XLSPosition](../../objects/XLSPosition)_ )

Reference of the position of the last cell with data entered.

---

#### `_xls.create()`.addDataTable(sheet: _HSSFSheet_, rowIndex: _int_, colIndex: _int_, data: _[Values](../../objects/Values)_, vertical: _boolean_) : _[XLSPosition](../../objects/XLSPosition)_
##### Description

Adds a data table to the spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| sheet | _HSSFSheet_ | Spreadsheet object. |
| rowIndex | _int_ | Line number. |
| colIndex | _int_ | Column number. |
| data | _[Values](../../objects/Values)_ | List of data to be inserted. |
| vertical | _boolean_ | Insert the data vertically. |

##### Return

( _[XLSPosition](../../objects/XLSPosition)_ )

Reference of the position of the last cell with data entered.

---

## anchorType

---

#### _xls.anchorType(type: string) : _AnchorType_
##### Description

Generates the type of anchor.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| type | string | Anchor type name, supports:<br><ul><li>move-and-resize</li><li>dont-move-do-resize</li><li>move-dont-resize</li><li>dont-move-and-resize</li></ul> |

##### Return

( _AnchorType_ )

The anchor type configured with the defined type.

---

## borderStyle

---

#### _xls.borderStyle(type: string) : _BorderStyle_
##### Description

Generates the outline style of the cell borders.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| type | string | Name of the border style type, supports:<br><ul><li>none</li><li>thin</li><li>medium</li><li>dashed</li><li>dotted</li><li>thick</li><li>double</li><li>hair</li><li>medium-dashed</li><li>dash-dot</li><li>medium-dash-dot</li></ul> |

##### Return

( _BorderStyle_ )

The border outline style configured with the defined type.

---

## cell

---

#### `_xls.create()`.cell(rowIndex: _int_, colIndex: _int_) : _HSSFCell_
##### Description

Gets a spreadsheet cell and if it does not exist then it will be created.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| rowIndex | _int_ | Line number. |
| colIndex | _int_ | Column number. |

##### Return

( _HSSFCell_ )

Cell representation object.

---

#### `_xls.create()`.cell(sheet: _HSSFSheet_, rowIndex: _int_, colIndex: _int_) : _HSSFCell_
##### Description

Gets a spreadsheet cell and if it does not exist then it will be created.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| sheet | _HSSFSheet_ | Spreadsheet object. |
| rowIndex | _int_ | Line number of the sheet. |
| colIndex | _int_ | Column number. |

##### Return

( _HSSFCell_ )

Cell representation object.

---

## cellRangeAddress

---

#### _xls.cellRangeAddress(firstRow: _int_, lastRow: _int_, firstCol: _int_, lastCol: _int_) : _CellRangeAddress_
##### Description

Generates the region address of the cell area.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| firstRow | _int_ | First line number. |
| lastRow | _int_ | Last line number. |
| firstCol | _int_ | First column number. |
| lastCol | _int_ | Last column number. |

##### Return

( _CellRangeAddress_ )

The cell area address reference.

---

## color

---

#### _xls.color(color: string) : _short_
##### Description

Generates the color code based on predefined names.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| color | string | Color name, supports:<br><ul><li>black</li><li>brown</li><li>olive_green</li><li>dark_green</li><li>dark_teal</li><li>dark_blue</li><li>indigo</li><li>grey_80_percent</li><li>orange</li><li>dark_yellow</li><li>green</li><li>teal</li><li>blue</li><li>blue_grey</li><li>grey_50_percent</li><li>red</li><li>light_orange</li><li>lime</li><li>sea_green</li><li>aqua</li><li>light_blue</li><li>violet</li><li>grey_40_percent</li><li>pink</li><li>gold</li><li>yellow</li><li>bright_green</li><li>turquoise</li><li>dark_red</li><li>sky_blue</li><li>plum</li><li>grey_25_percent</li><li>rose</li><li>light_yellow</li><li>light_green</li><li>light_turquoise</li><li>pale_blue</li><li>lavender</li><li>white</li><li>cornflower_blue</li><li>lemon_chiffon</li><li>maroon</li><li>orchid</li><li>coral</li><li>royal_blue</li><li>light_cornflower_blue</li><li>tan</li><li>automatic</li></ul> |

##### Return

( _short_ )

The color reference.

---

## create

---

#### _xls.create() : _XLS_
##### Description

Creates a new Excel document.

##### How To Use

```javascript
const excel = _xls.create();
```

##### Return

( _XLS_ )

New XLS resource instance.

---

## createSheet

---

#### `_xls.create()`.createSheet() : _HSSFSheet_
##### Description

Creates a new spreadsheet.

##### Return

( _HSSFSheet_ )

Spreadsheet created.

---

#### `_xls.create()`.createSheet(name: string) : _HSSFSheet_
##### Description

Create a new spreadsheet and define its name.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| name | string | Spreadsheet name. |

##### Return

( _HSSFSheet_ )

Spreadsheet created.

---

## fillPattern

---

#### _xls.fillPattern(type: string) : _FillPatternType_
##### Description

Generates the background fill pattern.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| type | string | Fill pattern type, supports:<br><ul><li>no-fill</li><li>solid-foreground</li><li>fine-dots</li><li>alt-bars</li><li>sparse-dots</li><li>thick-horz-bands</li><li>thick-vert-bands</li><li>thick-backward-diag</li><li>thick-forward-diag</li><li>big-spots</li><li>bricks</li><li>thin-horz-bands</li><li>thin-vert-bands</li><li>thin-backward-diag</li><li>thin-forward-diag</li><li>squares</li><li>diamonds</li><li>less-dots</li><li>least-dots</li></ul> |

##### Return

( _FillPatternType_ )

The fill pattern configured with the defined type.

---

## getSheet

---

#### `_xls.create()`.getSheet(index: _int_) : _HSSFSheet_
##### Description

Get the spreadsheet by number (index).

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| index | _int_ | Spreadsheet number. |

##### Return

( _HSSFSheet_ )

Spreadsheet referring to the number (index).

---

#### `_xls.create()`.getSheet(name: string) : _HSSFSheet_
##### Description

Gets the spreadsheet by name.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| name | string | Spreadsheet name. |

##### Return

( _HSSFSheet_ )

Spreadsheet for the name.

---

## horizontalAlignment

---

#### _xls.horizontalAlignment(type: string) : _HorizontalAlignment_
##### Description

Generates horizontal alignment.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| type | string | Horizontal alignment type name, supports:<br><ul><li>general</li><li>left</li><li>center</li><li>right</li><li>fill</li><li>justify</li><li>center-selection</li><li>distributed</li></ul> |

##### Return

( _HorizontalAlignment_ )

The horizontal alignment configured with the defined type.

---

## insertPicture

---

#### _xls.insertPicture(sheet: _HSSFSheet_, storage: _Storage_, anchor: _ClientAnchor_) : _Picture_
##### Description

Inserts an image associated with the anchor in a specific spreadsheet.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| sheet | _HSSFSheet_ | Spreadsheet that will be used to insert the image. |
| storage | _Storage_ | Storage reference associated with an image file. |
| anchor | _ClientAnchor_ | Anchor to associate the image. |

##### Return

( _Picture_ )

The reference object of the inserted image.

---

#### `_xls.create()`.insertPicture(storage: _Storage_, linha: _int_, coluna: _int_) : _Picture_
##### Description

Insert the image into the specified cell.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _Storage_ | Storage reference associated with an image file. |
| linha | _int_ | Line number. |
| coluna | _int_ | Column number. |

##### Return

( _Picture_ )

The reference object of the inserted image.

---

#### `_xls.create()`.insertPicture(storage: _Storage_, anchor: _ClientAnchor_) : _Picture_
##### Description

Inserts an image associated with the anchor.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _Storage_ | Storage reference associated with an image file. |
| anchor | _ClientAnchor_ | Anchor to associate the image. |

##### Return

( _Picture_ )

The reference object of the inserted image.

---

## output

---

#### `_xls.create()`.output(fileName: string) : _void_
##### Description

Performs the sending of data from the final file to the client to download it.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| fileName | string | Name of the file. |

##### Return

( _void_ )


---

#### `_xls.create()`.output(storage: _Storage_) : _void_
##### Description

Writes the data from the final file to the internal storage of the application.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _Storage_ | Storage reference where the file will be saved. |

##### Return

( _void_ )


---

## position

---

#### _xls.position(rowIndex: _int_, colIndex: _int_) : _[XLSPosition](../../objects/XLSPosition)_
##### Description

Gets the positioning object.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| rowIndex | _int_ | Line number. |
| colIndex | _int_ | Column number. |

##### Return

( _[XLSPosition](../../objects/XLSPosition)_ )

Reference of the position of the last cell with data entered.

---

## read

---

#### _xls.read(input: _InputStream_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _InputStream_ | Excel file reference. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _InputStream_, sheetNumber: _boolean_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _InputStream_ | Excel file reference. |
| sheetNumber | _boolean_ | Spreadsheet number. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _InputStream_, sheetNumber: _int_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _InputStream_ | Excel file reference. |
| sheetNumber | _int_ | Spreadsheet number. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _InputStream_, sheetNumber: _int_, hiddenSheets: _boolean_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _InputStream_ | Excel file reference. |
| sheetNumber | _int_ | Spreadsheet number. |
| hiddenSheets | _boolean_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _[File](../../objects/File)_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _[File](../../objects/File)_ | Excel file reference. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _[File](../../objects/File)_, sheetNumber: _boolean_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _[File](../../objects/File)_ | Excel file reference. |
| sheetNumber | _boolean_ | Spreadsheet number. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _[File](../../objects/File)_, sheetNumber: _int_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _[File](../../objects/File)_ | Excel file reference. |
| sheetNumber | _int_ | Spreadsheet number. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _[File](../../objects/File)_, sheetNumber: _int_, hiddenSheets: _boolean_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _[File](../../objects/File)_ | Excel file reference. |
| sheetNumber | _int_ | Spreadsheet number. |
| hiddenSheets | _boolean_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _[InputStream](../../objects/InputStream)_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _[InputStream](../../objects/InputStream)_ | Excel file reference. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _[InputStream](../../objects/InputStream)_, sheetNumber: _boolean_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _[InputStream](../../objects/InputStream)_ | Excel file reference. |
| sheetNumber | _boolean_ | Spreadsheet number. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _[InputStream](../../objects/InputStream)_, sheetNumber: _int_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _[InputStream](../../objects/InputStream)_ | Excel file reference. |
| sheetNumber | _int_ | Spreadsheet number. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _[InputStream](../../objects/InputStream)_, sheetNumber: _int_, hiddenSheets: _boolean_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _[InputStream](../../objects/InputStream)_ | Excel file reference. |
| sheetNumber | _int_ | Spreadsheet number. |
| hiddenSheets | _boolean_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _Storage_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _Storage_ | Excel file reference. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _Storage_, hiddenSheets: _boolean_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _Storage_ | Excel file reference. |
| hiddenSheets | _boolean_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _Storage_, sheetNumber: _int_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _Storage_ | Excel file reference. |
| sheetNumber | _int_ | Spreadsheet number. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

#### _xls.read(input: _Storage_, sheetNumber: _int_, hiddenSheets: _boolean_) : _[Values](../../objects/Values)_
##### Description

Reads an Excel file, obtains all data.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| input | _Storage_ | Excel file reference. |
| sheetNumber | _int_ | Spreadsheet number. |
| hiddenSheets | _boolean_ | It also processes hidden spreadsheets. |

##### Return

( _[Values](../../objects/Values)_ )

Structure with all the data obtained by reading and processing the Excel files.

---

## row

---

#### `_xls.create()`.row(rowIndex: _int_) : _HSSFRow_
##### Description

Gets a row from the spreadsheet and if it does not exist then it will be created.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| rowIndex | _int_ | Line number. |

##### Return

( _HSSFRow_ )

Line representation object.

---

#### `_xls.create()`.row(sheet: _HSSFSheet_, rowIndex: _int_) : _HSSFRow_
##### Description

Gets a row from the spreadsheet and if it does not exist then it will be created.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| sheet | _HSSFSheet_ | Spreadsheet object. |
| rowIndex | _int_ | Line number. |

##### Return

( _HSSFRow_ )

Line representation object.

---

## safeSheetName

---

#### _xls.safeSheetName(nameProposal: string) : string
##### Description

Transforms the passed text to be a valid spreadsheet name while complying with Excel rules.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| nameProposal | string | Name that should be transformed. |

##### Return

( string )

Valid name to be used as the name of the spreadsheet.

---

#### _xls.safeSheetName(nameProposal: string, replaceChar: _char_) : string
##### Description

Transforms the passed text to be a valid spreadsheet name while complying with Excel rules.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| nameProposal | string | Name that should be transformed. |
| replaceChar | _char_ | Replacement character. |

##### Return

( string )

Valid name to be used as the name of the spreadsheet.

---

## sheet

---

#### `_xls.create()`.sheet() : _HSSFSheet_
##### Description

To obtain the current spreadsheet that is being used to manipulate the data.

##### How To Use

```javascript
const spreadsheet = _xls.create().sheet();
```

##### Return

( _HSSFSheet_ )

Gets the current spreadsheet.

---

## units

---

#### _xls.units() : _Class_
##### Description

It obtains the types of units predefined in Excel, useful to perform the conversion between pixels and points.

##### Return

( _Class_ )

The Apache POI class that helps you manipulate Excel units.

---

## validSheetName

---

#### _xls.validSheetName(nameProposal: string) : _boolean_
##### Description

Checks whether the passed text is a valid spreadsheet name that complies with Excel rules.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| nameProposal | string | Name that must be validated. |

##### Return

( _boolean_ )

Whether it is valid to be used as a spreadsheet name.

---

## verticalAlignment

---

#### _xls.verticalAlignment(type: string) : _VerticalAlignment_
##### Description

Generates vertical alignment.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| type | string | Vertical alignment type name, supports:<br><ul><li>top</li><li>center</li><li>bottom</li><li>justify</li><li>distributed</li></ul> |

##### Return

( _VerticalAlignment_ )

The vertical alignment configured with the defined type.

---

## workbook

---

#### `_xls.create()`.workbook() : _HSSFWorkbook_
##### Description

Creates a new Excel document.

##### How To Use

```javascript
const workbook = _xls.create().workbook();
```

##### Return

( _HSSFWorkbook_ )

Gets the workbook.

---

