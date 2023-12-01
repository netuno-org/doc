---
id: pdf
title: PDF
sidebar_label: PDF
---

Recurso de exportação de ficheiros PDF.
Este recurso permite criar e exportar um ficheiro PDF, utiliza a biblioteca iText para gerar os PDFs

---

## areaBreak

---

#### _pdf.areaBreak() : _AreaBreak_
##### Description

Creates an AreaBreak that terminates a previous area type.

##### Return

( _AreaBreak_ )

Terminates the previous area and returns a new one.

---

#### _pdf.areaBreak(pageSize: _PageSize_) : _AreaBreak_
##### Description

Creates an AreaBreak that terminates a previous area type.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| pageSize | _PageSize_ | Size of the new content. |

##### Return

( _AreaBreak_ )

Terminates the previous area and returns a new one.

---

#### _pdf.areaBreak(type: string) : _AreaBreak_
##### Description

Creates an AreaBreak that terminates a previous area type.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| type | string | Type of the new area. |

##### Return

( _AreaBreak_ )

Terminates the previous area and returns a new one.

---

## border

---

#### _pdf.border(border: string) : _Border_
##### Description

Creates a border type.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |

##### Return

( _Border_ )

Returns a border width of the type inserted.

---

#### _pdf.border(border: string, color: _Color_, width: _double_) : _Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _Color_ | Border color. |
| width | _double_ | Border width. |

##### Return

( _Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, color: _Color_, width: _double_, arg3: _double_) : _Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _Color_ | Border color. |
| width | _double_ | Border width. |
| arg3 | _double_ |   |

##### Return

( _Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, color: _Color_, width: _double_, arg3: _float_) : _Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _Color_ | Border color. |
| width | _double_ | Border width. |
| arg3 | _float_ |   |

##### Return

( _Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, color: _Color_, width: _double_, arg3: _int_) : _Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _Color_ | Border color. |
| width | _double_ | Border width. |
| arg3 | _int_ |   |

##### Return

( _Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, color: _Color_, width: _float_) : _Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _Color_ | Border color. |
| width | _float_ | Border width. |

##### Return

( _Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, color: _Color_, width: _float_, arg3: _double_) : _Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _Color_ | Border color. |
| width | _float_ | Border width. |
| arg3 | _double_ |   |

##### Return

( _Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, color: _Color_, width: _float_, opacity: _float_) : _Border_
##### Description

Creates a customized border with type, color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _Color_ | Border color. |
| width | _float_ | Border width. |
| opacity | _float_ | Border opacity. |

##### Return

( _Border_ )

Returns the created customized border.

---

#### _pdf.border(border: string, color: _Color_, width: _float_, opacity: _int_) : _Border_
##### Description

Creates a border type, color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _Color_ | Border color. |
| width | _float_ | Border width. |
| opacity | _int_ | Border opacity. |

##### Return

( _Border_ )

Returns a border type, color, width and opacity inserted.

---

#### _pdf.border(border: string, color: _Color_, width: _int_) : _Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _Color_ | Border color. |
| width | _int_ | Border width. |

##### Return

( _Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, color: _Color_, width: _int_, arg3: _double_) : _Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _Color_ | Border color. |
| width | _int_ | Border width. |
| arg3 | _double_ |   |

##### Return

( _Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, color: _Color_, width: _int_, arg3: _float_) : _Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _Color_ | Border color. |
| width | _int_ | Border width. |
| arg3 | _float_ |   |

##### Return

( _Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, color: _Color_, width: _int_, arg3: _int_) : _Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _Color_ | Border color. |
| width | _int_ | Border width. |
| arg3 | _int_ |   |

##### Return

( _Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, width: _double_) : _Border_
##### Description

Creates a border type with a inserted width.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _double_ | Border width. |

##### Return

( _Border_ )

Returns a border width of the type inserted,coloured black and the width inserted.

---

#### _pdf.border(border: string, width: _double_, opacity: _double_) : _Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _double_ | Border width. |
| opacity | _double_ | Border opacity. |

##### Return

( _Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

#### _pdf.border(border: string, width: _double_, opacity: _float_) : _Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _double_ | Border width. |
| opacity | _float_ | Border opacity. |

##### Return

( _Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

#### _pdf.border(border: string, width: _double_, opacity: _int_) : _Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _double_ | Border width. |
| opacity | _int_ | Border opacity. |

##### Return

( _Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

#### _pdf.border(border: string, width: _float_) : _Border_
##### Description

Creates a border type with a inserted width.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _float_ | Border width. |

##### Return

( _Border_ )

Returns a border width of the type inserted,coloured black and the width inserted.

---

#### _pdf.border(border: string, width: _float_, opacity: _double_) : _Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _float_ | Border width. |
| opacity | _double_ | Border opacity. |

##### Return

( _Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

#### _pdf.border(border: string, width: _float_, opacity: _float_) : _Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _float_ | Border width. |
| opacity | _float_ | Border opacity. |

##### Return

( _Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

#### _pdf.border(border: string, width: _float_, opacity: _int_) : _Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _float_ | Border width. |
| opacity | _int_ | Border opacity. |

##### Return

( _Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

#### _pdf.border(border: string, width: _int_) : _Border_
##### Description

Creates a border type with a inserted width.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _int_ | Border width. |

##### Return

( _Border_ )

Returns a border width of the type inserted,coloured black and the width inserted.

---

#### _pdf.border(border: string, width: _int_, opacity: _double_) : _Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _int_ | Border width. |
| opacity | _double_ | Border opacity. |

##### Return

( _Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

#### _pdf.border(border: string, width: _int_, opacity: _float_) : _Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _int_ | Border width. |
| opacity | _float_ | Border opacity. |

##### Return

( _Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

#### _pdf.border(border: string, width: _int_, opacity: _int_) : _Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _int_ | Border width. |
| opacity | _int_ | Border opacity. |

##### Return

( _Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

## border3D

---

#### _pdf.border3D(border: string) : _Border3D_
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |

##### Return

( _Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### _pdf.border3D(border: string, color: _Color_, width: _double_) : _Border3D_
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _Color_ | Border color. |
| width | _double_ | Border width. |

##### Return

( _Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### _pdf.border3D(border: string, color: _Color_, width: _double_, arg3: _double_) : _Border3D_
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _Color_ | Border color. |
| width | _double_ | Border width. |
| arg3 | _double_ |   |

##### Return

( _Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### _pdf.border3D(border: string, color: _Color_, width: _double_, arg3: _float_) : _Border3D_
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _Color_ | Border color. |
| width | _double_ | Border width. |
| arg3 | _float_ |   |

##### Return

( _Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### _pdf.border3D(border: string, color: _Color_, width: _double_, arg3: _int_) : _Border3D_
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _Color_ | Border color. |
| width | _double_ | Border width. |
| arg3 | _int_ |   |

##### Return

( _Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### _pdf.border3D(border: string, color: _Color_, width: _float_) : _Border3D_
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _Color_ | Border color. |
| width | _float_ | Border width. |

##### Return

( _Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### _pdf.border3D(border: string, color: _Color_, width: _float_, arg3: _double_) : _Border3D_
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _Color_ | Border color. |
| width | _float_ | Border width. |
| arg3 | _double_ |   |

##### Return

( _Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### _pdf.border3D(border: string, color: _Color_, width: _float_, opacity: _float_) : _Border3D_
##### Description

Creates a customized 3D border with type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _Color_ | Border color. |
| width | _float_ | Border width. |
| opacity | _float_ | Border opacity. |

##### Return

( _Border3D_ )

Returns the created customized 3D border.

---

#### _pdf.border3D(border: string, color: _Color_, width: _float_, opacity: _int_) : _Border3D_
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _Color_ | Border color. |
| width | _float_ | Border width. |
| opacity | _int_ | Border opacity. |

##### Return

( _Border3D_ )

Returns a 3D border type, color, width and opacity inserted.

---

#### _pdf.border3D(border: string, color: _Color_, width: _int_) : _Border3D_
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _Color_ | Border color. |
| width | _int_ | Border width. |

##### Return

( _Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### _pdf.border3D(border: string, color: _Color_, width: _int_, arg3: _double_) : _Border3D_
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _Color_ | Border color. |
| width | _int_ | Border width. |
| arg3 | _double_ |   |

##### Return

( _Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### _pdf.border3D(border: string, color: _Color_, width: _int_, arg3: _float_) : _Border3D_
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _Color_ | Border color. |
| width | _int_ | Border width. |
| arg3 | _float_ |   |

##### Return

( _Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### _pdf.border3D(border: string, color: _Color_, width: _int_, opacity: _int_) : _Border3D_
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _Color_ | Border color. |
| width | _int_ | Border width. |
| opacity | _int_ | Border opacity. |

##### Return

( _Border3D_ )

Returns a 3D border type,color,width and opacity inserted.

---

#### _pdf.border3D(border: string, width: _double_) : _Border3D_
##### Description

Creates a border type 3D with a inserted width.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _double_ | Border width. |

##### Return

( _Border3D_ )

Returns a 3D border width of the type inserted,coloured black and the width inserted.

---

#### _pdf.border3D(border: string, width: _double_, opacity: _double_) : _Border3D_
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _double_ | Border width. |
| opacity | _double_ | Border opacity. |

##### Return

( _Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### _pdf.border3D(border: string, width: _double_, opacity: _float_) : _Border3D_
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _double_ | Border width. |
| opacity | _float_ | Border opacity. |

##### Return

( _Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### _pdf.border3D(border: string, width: _double_, opacity: _int_) : _Border3D_
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _double_ | Border width. |
| opacity | _int_ | Border opacity. |

##### Return

( _Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### _pdf.border3D(border: string, width: _float_) : _Border3D_
##### Description

Creates a border type 3D with a inserted width.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _float_ | Border width. |

##### Return

( _Border3D_ )

Returns a 3D border width of the type inserted,coloured black and the width inserted.

---

#### _pdf.border3D(border: string, width: _float_, opacity: _double_) : _Border3D_
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _float_ | Border width. |
| opacity | _double_ | Border opacity. |

##### Return

( _Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### _pdf.border3D(border: string, width: _float_, opacity: _float_) : _Border3D_
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _float_ | Border width. |
| opacity | _float_ | Border opacity. |

##### Return

( _Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### _pdf.border3D(border: string, width: _float_, opacity: _int_) : _Border3D_
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _float_ | Border width. |
| opacity | _int_ | Border opacity. |

##### Return

( _Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### _pdf.border3D(border: string, arg1: _int_) : _Border3D_
##### Description

Creates a border type 3D.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| arg1 | _int_ |   |

##### Return

( _Border3D_ )

Returns a 3D border width of the type inserted,coloured black.

---

#### _pdf.border3D(border: string, width: _int_, opacity: _double_) : _Border3D_
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _int_ | Border width. |
| opacity | _double_ | Border opacity. |

##### Return

( _Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### _pdf.border3D(border: string, width: _int_, opacity: _float_) : _Border3D_
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _int_ | Border width. |
| opacity | _float_ | Border opacity. |

##### Return

( _Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### _pdf.border3D(border: string, width: _int_, opacity: _int_) : _Border3D_
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _int_ | Border width. |
| opacity | _int_ | Border opacity. |

##### Return

( _Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

## canvas

---

#### _pdf.canvas(arg0: _PdfDocument_, arg1: _int_) : _PdfCanvas_
##### Description

Creates an rectangular text area.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _PdfDocument_ |   |
| arg1 | _int_ |   |

##### Return

( _PdfCanvas_ )


---

#### _pdf.canvas(arg0: _PdfPage_) : _PdfCanvas_
##### Description

Creates an rectangular text area.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _PdfPage_ |   |

##### Return

( _PdfCanvas_ )


---

## cell

---

#### _pdf.cell() : _Cell_
##### Description

Creates a new table cell.

##### Return

( _Cell_ )

Returns the created cell.

---

#### _pdf.cell(rowspan: _int_, colspan: _int_) : _Cell_
##### Description

Creates a new table cell with rowspan or colspan.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| rowspan | _int_ | Number of rowspan. |
| colspan | _int_ | Number of colspan. |

##### Return

( _Cell_ )

Returns the created cell.

---

## color

---

#### _pdf.color(arg0: string) : _Color_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Color_ )


---

## colorCMYK

---

#### _pdf.colorCMYK(arg0: _double_, arg1: _double_, arg2: _double_, arg3: _double_) : _DeviceCmyk_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _double_ |   |
| arg1 | _double_ |   |
| arg2 | _double_ |   |
| arg3 | _double_ |   |

##### Return

( _DeviceCmyk_ )


---

#### _pdf.colorCMYK(arg0: _float_, arg1: _float_, arg2: _float_, arg3: _float_) : _DeviceCmyk_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _float_ |   |
| arg1 | _float_ |   |
| arg2 | _float_ |   |
| arg3 | _float_ |   |

##### Return

( _DeviceCmyk_ )


---

#### _pdf.colorCMYK(arg0: _int_, arg1: _int_, arg2: _int_, arg3: _int_) : _DeviceCmyk_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |
| arg3 | _int_ |   |

##### Return

( _DeviceCmyk_ )


---

## colorGray

---

#### _pdf.colorGray(arg0: _double_) : _DeviceGray_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _double_ |   |

##### Return

( _DeviceGray_ )


---

#### _pdf.colorGray(arg0: _float_) : _DeviceGray_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _float_ |   |

##### Return

( _DeviceGray_ )


---

#### _pdf.colorGray(arg0: _int_) : _DeviceGray_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _DeviceGray_ )


---

## colorRGB

---

#### _pdf.colorRGB(arg0: _double_, arg1: _double_, arg2: _double_) : _DeviceRgb_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _double_ |   |
| arg1 | _double_ |   |
| arg2 | _double_ |   |

##### Return

( _DeviceRgb_ )


---

#### _pdf.colorRGB(arg0: _float_, arg1: _float_, arg2: _float_) : _DeviceRgb_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _float_ |   |
| arg1 | _float_ |   |
| arg2 | _float_ |   |

##### Return

( _DeviceRgb_ )


---

#### _pdf.colorRGB(arg0: _int_, arg1: _int_, arg2: _int_) : _DeviceRgb_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |

##### Return

( _DeviceRgb_ )


---

## extract

---

#### _pdf.extract(storage: _InputStream_) : _[Values](../../objects/Values)_
##### Description

Extracts the content of PDFs.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _InputStream_ | Caminho do armazenamento. |

##### Return

( _[Values](../../objects/Values)_ )

Returns the extracted content.

---

#### _pdf.extract(storage: _[File](../../objects/File)_) : _[Values](../../objects/Values)_
##### Description

Extracts the content of PDFs.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[File](../../objects/File)_ | Caminho do armazenamento. |

##### Return

( _[Values](../../objects/Values)_ )

Returns the extracted content.

---

#### _pdf.extract(content: _[InputStream](../../objects/InputStream)_) : _[Values](../../objects/Values)_
##### Description

Extracts the content of PDF's.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _[InputStream](../../objects/InputStream)_ | Content to be extracted. |

##### Return

( _[Values](../../objects/Values)_ )

Returns the extracted content.

---

#### _pdf.extract(storage: _Storage_) : _[Values](../../objects/Values)_
##### Description

Extracts the content of PDFs.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _Storage_ | Caminho do armazenamento. |

##### Return

( _[Values](../../objects/Values)_ )

Returns the extracted content.

---

## font

---

#### _pdf.font(storage: string) : _PdfFont_
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | string | Storage path. |

##### Return

( _PdfFont_ )

Returns the created font.

---

#### _pdf.font(storage: _[File](../../objects/File)_) : _PdfFont_
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[File](../../objects/File)_ | Storage path. |

##### Return

( _PdfFont_ )

Returns the created font.

---

#### _pdf.font(storage: _[File](../../objects/File)_, encoding: _boolean_) : _PdfFont_
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[File](../../objects/File)_ | Storage path. |
| encoding | _boolean_ | Font encoding. |

##### Return

( _PdfFont_ )

Returns the created font.

---

#### _pdf.font(storage: _[File](../../objects/File)_, encoding: string) : _PdfFont_
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[File](../../objects/File)_ | Storage path. |
| encoding | string | Font encoding. |

##### Return

( _PdfFont_ )

Returns the created font.

---

#### _pdf.font(storage: _[File](../../objects/File)_, encoding: string, arg2: _boolean_) : _PdfFont_
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[File](../../objects/File)_ | Storage path. |
| encoding | string | Font encoding. |
| arg2 | _boolean_ |   |

##### Return

( _PdfFont_ )

Returns the created font.

---

#### _pdf.font(storage: _Storage_) : _PdfFont_
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _Storage_ | Storage path. |

##### Return

( _PdfFont_ )

Returns the created font.

---

#### _pdf.font(storage: _Storage_, encoding: _boolean_) : _PdfFont_
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _Storage_ | Storage path. |
| encoding | _boolean_ | Font encoding. |

##### Return

( _PdfFont_ )

Returns the created font.

---

#### _pdf.font(storage: _Storage_, encoding: string) : _PdfFont_
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _Storage_ | Storage path. |
| encoding | string | Font encoding. |

##### Return

( _PdfFont_ )

Returns the created font.

---

#### _pdf.font(storage: _Storage_, encoding: string, arg2: _boolean_) : _PdfFont_
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _Storage_ | Storage path. |
| encoding | string | Font encoding. |
| arg2 | _boolean_ |   |

##### Return

( _PdfFont_ )

Returns the created font.

---

## getDocument

---

#### _pdf.getDocument() : _Document_
##### Description

Obtém o objecto Document do iText para a estrutura do documento PDF.

##### Return

( _Document_ )


---

## getPdfDocument

---

#### _pdf.getPdfDocument() : _PdfDocument_
##### Description

Obtém o objecto PdfDocument do iText para a construção do documento PDF.

##### Return

( _PdfDocument_ )


---

## getPdfReader

---

#### _pdf.getPdfReader() : _PdfReader_
##### Description

Obtém o objecto PdfReader do iText para a leitura do documento PDF.

##### Return

( _PdfReader_ )


---

## getPdfWriter

---

#### _pdf.getPdfWriter() : _PdfWriter_
##### Description

Obtém o objecto PdfWriter do iText para a escrita dos bytes do arquivo PDF.

##### Return

( _PdfWriter_ )


---

## image

---

#### _pdf.image(arg0: _[File](../../objects/File)_) : _Image_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[File](../../objects/File)_ |   |

##### Return

( _Image_ )


---

#### _pdf.image(arg0: _Storage_) : _Image_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Storage_ |   |

##### Return

( _Image_ )


---

## init

---

#### _pdf.init() : _PDF_
##### Description

Cria um novo objeto de recurso para a construção de PDFs.

##### How To Use

```javascript
const pdf = _pdf.init();
```

##### Return

( _PDF_ )


---

## line

---

#### _pdf.line(type: string, color: _Color_, width: _double_) : _ILineDrawer_
##### Description

Creates a customized border with type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| type | string | Line type. |
| color | _Color_ | Line color. |
| width | _double_ | Line width. |

##### Return

( _ILineDrawer_ )

Returns the created customized border.

---

#### _pdf.line(type: string, color: _Color_, width: _float_) : _ILineDrawer_
##### Description

Creates a customized line with type,color, width inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| type | string | Line type. |
| color | _Color_ | Line color. |
| width | _float_ | Line width. |

##### Return

( _ILineDrawer_ )

Returns the created customized line.

---

#### _pdf.line(line: string, color: _Color_, width: _int_) : _ILineDrawer_
##### Description

Creates a line type with color and width inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| line | string | Line type. |
| color | _Color_ | Line color. |
| width | _int_ | Line width. |

##### Return

( _ILineDrawer_ )

Returns the line type, color and width inserted.

---

## newDocument

---

#### _pdf.newDocument() : _Document_
##### Description

Cria um novo documento.

##### Return

( _Document_ )


---

#### _pdf.newDocument(pageSize: _PageSize_) : _Document_
##### Description

Creates a PDF document with the page size inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| pageSize | _PageSize_ | Page size. |

##### Return

( _Document_ )

Returns PDF document with the page size inserted.

---

#### _pdf.newDocument(storage: _OutputStream_) : _Document_
##### Description

Creates a PDF document with the page size inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _OutputStream_ | File path. |

##### Return

( _Document_ )

Returns PDF document with the page size inserted.

---

#### _pdf.newDocument(storage: _OutputStream_, pageSize: _PageSize_) : _Document_
##### Description

Creates a PDF document with the page size inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _OutputStream_ | File path. |
| pageSize | _PageSize_ | Page size. |

##### Return

( _Document_ )

Returns PDF document with the page size inserted.

---

#### _pdf.newDocument(storage: _[File](../../objects/File)_) : _Document_
##### Description

Creates a PDF document with the page size inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[File](../../objects/File)_ | File path. |

##### Return

( _Document_ )

Returns PDF document with the page size inserted.

---

#### _pdf.newDocument(storage: _[File](../../objects/File)_, pageSize: _PageSize_) : _Document_
##### Description

Creates a PDF document with the page size inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[File](../../objects/File)_ | File path. |
| pageSize | _PageSize_ | Page size. |

##### Return

( _Document_ )

Returns PDF document with the page size inserted.

---

#### _pdf.newDocument(storage: _[OutputStream](../../objects/OutputStream)_) : _Document_
##### Description

Creates a PDF document with the page size inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[OutputStream](../../objects/OutputStream)_ | File path. |

##### Return

( _Document_ )

Returns PDF document with the page size inserted.

---

#### _pdf.newDocument(storage: _[OutputStream](../../objects/OutputStream)_, pageSize: _PageSize_) : _Document_
##### Description

Creates a PDF document with the page size inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[OutputStream](../../objects/OutputStream)_ | File path. |
| pageSize | _PageSize_ | Page size. |

##### Return

( _Document_ )

Returns PDF document with the page size inserted.

---

#### _pdf.newDocument(arg0: _Storage_) : _Document_
##### Description

Creates a new PDF document.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Storage_ |   |

##### Return

( _Document_ )


---

#### _pdf.newDocument(storage: _Storage_, pageSize: _PageSize_) : _Document_
##### Description

Creates a PDF document with the page size inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _Storage_ | File path. |
| pageSize | _PageSize_ | Page size. |

##### Return

( _Document_ )

Returns PDF document with the page size inserted.

---

## newPdfDocument

---

#### _pdf.newPdfDocument() : _PdfDocument_
##### Description

Creates a PDF document.

##### Return

( _PdfDocument_ )


---

#### _pdf.newPdfDocument(storage: _OutputStream_) : _PdfDocument_
##### Description

Creates a PDF document.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _OutputStream_ | File path. |

##### Return

( _PdfDocument_ )


---

#### _pdf.newPdfDocument(storage: _[File](../../objects/File)_) : _PdfDocument_
##### Description

Creates a PDF document.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[File](../../objects/File)_ | File path. |

##### Return

( _PdfDocument_ )


---

#### _pdf.newPdfDocument(storage: _[OutputStream](../../objects/OutputStream)_) : _PdfDocument_
##### Description

Creates a PDF document.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[OutputStream](../../objects/OutputStream)_ | File path. |

##### Return

( _PdfDocument_ )


---

#### _pdf.newPdfDocument(storage: _Storage_) : _PdfDocument_
##### Description

Creates a PDF document.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _Storage_ | File path. |

##### Return

( _PdfDocument_ )


---

## openPdfDocument

---

#### _pdf.openPdfDocument(path: string) : _PdfDocument_
##### Description

Opens a PDF documment corresponding to the inserted path.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string | File path. |

##### Return

( _PdfDocument_ )

Returns PDF document openned.

---

## pageSize

---

#### _pdf.pageSize(arg0: _float_, arg1: _float_) : _PageSize_
##### Description

Obtém a definição do tamanho da página atráves da largura e altura.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _float_ |   |
| arg1 | _float_ |   |

##### Return

( _PageSize_ )


---

#### _pdf.pageSize(arg0: string) : _PageSize_
##### Description

Obtém a definição do tamanho de página, suporta:<br><ul><li>A0</li><li>A1</li><li>A2</li><li>A3</li><li>A4</li><li>A5</li><li>A6</li><li>A7</li><li>A8</li><li>A9</li><li>A10</li><li>B0</li><li>B1</li><li>B2</li><li>B3</li><li>B4</li><li>B5</li><li>B6</li><li>B7</li><li>B8</li><li>B9</li><li>B10</li><li>default</li><li>executive</li><li>ledger</li><li>legal</li><li>letter</li><li>tabloid</li></ul>

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _PageSize_ )


---

## paragraph

---

#### _pdf.paragraph(arg0: string) : _Paragraph_
##### Description

Creates a paragraph.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _Paragraph_ )


---

## setDocument

---

#### _pdf.setDocument(arg0: _Document_) : _PDF_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _Document_ |   |

##### Return

( _PDF_ )


---

## table

---

#### _pdf.table(columnWidth: _double[]_) : _Table_
##### Description

Creates a table with the columns width inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| columnWidth | _double[]_ | Column widthof the table. |

##### Return

( _Table_ )

Returns a table with the columns width inserted.

---

#### _pdf.table(columnWidth: _double[]_, largeTable: _boolean_) : _Table_
##### Description

Creates a new table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| columnWidth | _double[]_ | Columns width. |
| largeTable | _boolean_ | Large table. |

##### Return

( _Table_ )

Returns the created table.

---

#### _pdf.table(columnWidth: _float[]_) : _Table_
##### Description

Creates a table with the columns width inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| columnWidth | _float[]_ | Column widthof the table. |

##### Return

( _Table_ )

Returns a table with the columns width inserted.

---

#### _pdf.table(columnWidth: _float[]_, largeTable: _boolean_) : _Table_
##### Description

Creates a new table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| columnWidth | _float[]_ | Columns width. |
| largeTable | _boolean_ | Large table. |

##### Return

( _Table_ )

Returns the created table.

---

#### _pdf.table(columnWidth: _int[]_) : _Table_
##### Description

Creates a table with the columns width inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| columnWidth | _int[]_ | Column widthof the table. |

##### Return

( _Table_ )

Returns a table with the columns width inserted.

---

#### _pdf.table(columnWidth: _int[]_, largeTable: _boolean_) : _Table_
##### Description

Creates a new table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| columnWidth | _int[]_ | Columns width. |
| largeTable | _boolean_ | Large table. |

##### Return

( _Table_ )

Returns the created table.

---

#### _pdf.table(columns: _int_) : _Table_
##### Description

Creates a new table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| columns | _int_ | Columns number. |

##### Return

( _Table_ )

Returns the created table.

---

#### _pdf.table(columnWidth: _List_) : _Table_
##### Description

Creates a table with the columns width inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| columnWidth | _List_ | Column's width of the table. |

##### Return

( _Table_ )

Returns a table with the columns width inserted.

---

#### _pdf.table(columnWidth: _List_, largeTable: _boolean_) : _Table_
##### Description

Creates a new table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| columnWidth | _List_ | Columns width. |
| largeTable | _boolean_ | Large table. |

##### Return

( _Table_ )

Returns the created table.

---

#### _pdf.table(columnWidth: _[Values](../../objects/Values)_) : _Table_
##### Description

Creates a table with the columns width inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| columnWidth | _[Values](../../objects/Values)_ | Column width of the table. |

##### Return

( _Table_ )

Returns a table with the columns width inserted.

---

#### _pdf.table(columnWidth: _[Values](../../objects/Values)_, largeTable: _boolean_) : _Table_
##### Description

Creates a new table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| columnWidth | _[Values](../../objects/Values)_ | Columns width. |
| largeTable | _boolean_ | Large table. |

##### Return

( _Table_ )

Returns the created table.

---

## text

---

#### _pdf.text(content: string) : _Text_
##### Description

Creates new text with the inserted text.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string | Content to be created. |

##### Return

( _Text_ )

Returns the text content.

---

## toHTML

---

#### _pdf.toHTML(content: _InputStream_) : string
##### Description

Converts the inserted content to HTML.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _InputStream_ | Content to HTML. |

##### Return

( string )

Returns the Html.

---

#### _pdf.toHTML(content: _[File](../../objects/File)_) : string
##### Description

Converts the inserted content to HTML.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _[File](../../objects/File)_ | Content to HTML. |

##### Return

( string )

Returns the Html.

---

#### _pdf.toHTML(content: _[InputStream](../../objects/InputStream)_) : string
##### Description

Converts the inserted content to HTML.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _[InputStream](../../objects/InputStream)_ | Content to HTML. |

##### Return

( string )

Returns the Html.

---

#### _pdf.toHTML(content: _Storage_) : string
##### Description

Converts the inserted content to HTML.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _Storage_ | Content to HTML. |

##### Return

( string )

Returns the Html.

---

## toText

---

#### _pdf.toText(content: _InputStream_) : string
##### Description

Converts to text the inserted content.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _InputStream_ | Content to text. |

##### Return

( string )

Returns the Html.

---

#### _pdf.toText(content: _[File](../../objects/File)_) : string
##### Description

Converts to text the inserted content.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _[File](../../objects/File)_ | Content to text. |

##### Return

( string )

Returns the Html.

---

#### _pdf.toText(content: _[InputStream](../../objects/InputStream)_) : string
##### Description

Converts to text the inserted content.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _[InputStream](../../objects/InputStream)_ | Content to text. |

##### Return

( string )

Returns the Html.

---

#### _pdf.toText(content: _Storage_) : string
##### Description

Converts to text the inserted content.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _Storage_ | Content to text. |

##### Return

( string )

Returns the Html.

---

