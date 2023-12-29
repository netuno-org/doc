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

#### _pdf.areaBreak() : _com.itextpdf.layout.element.AreaBreak_
##### Description

Creates an AreaBreak that terminates a previous area type.

##### Return

( _com.itextpdf.layout.element.AreaBreak_ )

Terminates the previous area and returns a new one.

---

#### _pdf.areaBreak(pageSize: _com.itextpdf.kernel.geom.PageSize_) : _com.itextpdf.layout.element.AreaBreak_
##### Description

Creates an AreaBreak that terminates a previous area type.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| pageSize | _com.itextpdf.kernel.geom.PageSize_ | Size of the new content. |

##### Return

( _com.itextpdf.layout.element.AreaBreak_ )

Terminates the previous area and returns a new one.

---

#### _pdf.areaBreak(type: string) : _com.itextpdf.layout.element.AreaBreak_
##### Description

Creates an AreaBreak that terminates a previous area type.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| type | string | Type of the new area. |

##### Return

( _com.itextpdf.layout.element.AreaBreak_ )

Terminates the previous area and returns a new one.

---

## border

---

#### _pdf.border(border: string) : _com.itextpdf.layout.borders.Border_
##### Description

Creates a border type.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border width of the type inserted.

---

#### _pdf.border(border: string, color: _com.itextpdf.kernel.colors.Color_, width: _double_) : _com.itextpdf.layout.borders.Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _com.itextpdf.kernel.colors.Color_ | Border color. |
| width | _double_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, color: _com.itextpdf.kernel.colors.Color_, width: _double_, arg3: _double_) : _com.itextpdf.layout.borders.Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _com.itextpdf.kernel.colors.Color_ | Border color. |
| width | _double_ | Border width. |
| arg3 | _double_ |   |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, color: _com.itextpdf.kernel.colors.Color_, width: _double_, arg3: _float_) : _com.itextpdf.layout.borders.Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _com.itextpdf.kernel.colors.Color_ | Border color. |
| width | _double_ | Border width. |
| arg3 | _float_ |   |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, color: _com.itextpdf.kernel.colors.Color_, width: _double_, arg3: _int_) : _com.itextpdf.layout.borders.Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _com.itextpdf.kernel.colors.Color_ | Border color. |
| width | _double_ | Border width. |
| arg3 | _int_ |   |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, color: _com.itextpdf.kernel.colors.Color_, width: _float_) : _com.itextpdf.layout.borders.Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _com.itextpdf.kernel.colors.Color_ | Border color. |
| width | _float_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, color: _com.itextpdf.kernel.colors.Color_, width: _float_, arg3: _double_) : _com.itextpdf.layout.borders.Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _com.itextpdf.kernel.colors.Color_ | Border color. |
| width | _float_ | Border width. |
| arg3 | _double_ |   |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, color: _com.itextpdf.kernel.colors.Color_, width: _float_, opacity: _float_) : _com.itextpdf.layout.borders.Border_
##### Description

Creates a customized border with type, color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _com.itextpdf.kernel.colors.Color_ | Border color. |
| width | _float_ | Border width. |
| opacity | _float_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns the created customized border.

---

#### _pdf.border(border: string, color: _com.itextpdf.kernel.colors.Color_, width: _float_, opacity: _int_) : _com.itextpdf.layout.borders.Border_
##### Description

Creates a border type, color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _com.itextpdf.kernel.colors.Color_ | Border color. |
| width | _float_ | Border width. |
| opacity | _int_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, color, width and opacity inserted.

---

#### _pdf.border(border: string, color: _com.itextpdf.kernel.colors.Color_, width: _int_) : _com.itextpdf.layout.borders.Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _com.itextpdf.kernel.colors.Color_ | Border color. |
| width | _int_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, color: _com.itextpdf.kernel.colors.Color_, width: _int_, arg3: _double_) : _com.itextpdf.layout.borders.Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _com.itextpdf.kernel.colors.Color_ | Border color. |
| width | _int_ | Border width. |
| arg3 | _double_ |   |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, color: _com.itextpdf.kernel.colors.Color_, width: _int_, arg3: _float_) : _com.itextpdf.layout.borders.Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _com.itextpdf.kernel.colors.Color_ | Border color. |
| width | _int_ | Border width. |
| arg3 | _float_ |   |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, color: _com.itextpdf.kernel.colors.Color_, width: _int_, arg3: _int_) : _com.itextpdf.layout.borders.Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _com.itextpdf.kernel.colors.Color_ | Border color. |
| width | _int_ | Border width. |
| arg3 | _int_ |   |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, width: _double_) : _com.itextpdf.layout.borders.Border_
##### Description

Creates a border type with a inserted width.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _double_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border width of the type inserted,coloured black and the width inserted.

---

#### _pdf.border(border: string, width: _double_, opacity: _double_) : _com.itextpdf.layout.borders.Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _double_ | Border width. |
| opacity | _double_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

#### _pdf.border(border: string, width: _double_, opacity: _float_) : _com.itextpdf.layout.borders.Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _double_ | Border width. |
| opacity | _float_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

#### _pdf.border(border: string, color: _double_, width: _int_) : _com.itextpdf.layout.borders.Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _double_ | Border color. |
| width | _int_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### _pdf.border(border: string, width: _float_) : _com.itextpdf.layout.borders.Border_
##### Description

Creates a border type with a inserted width.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _float_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border width of the type inserted,coloured black and the width inserted.

---

#### _pdf.border(border: string, width: _float_, opacity: _double_) : _com.itextpdf.layout.borders.Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _float_ | Border width. |
| opacity | _double_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

#### _pdf.border(border: string, width: _float_, opacity: _float_) : _com.itextpdf.layout.borders.Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _float_ | Border width. |
| opacity | _float_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

#### _pdf.border(border: string, width: _float_, opacity: _int_) : _com.itextpdf.layout.borders.Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _float_ | Border width. |
| opacity | _int_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

#### _pdf.border(border: string, width: _int_) : _com.itextpdf.layout.borders.Border_
##### Description

Creates a border type with a inserted width.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _int_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border width of the type inserted,coloured black and the width inserted.

---

#### _pdf.border(border: string, width: _int_, opacity: _double_) : _com.itextpdf.layout.borders.Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _int_ | Border width. |
| opacity | _double_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

#### _pdf.border(border: string, width: _int_, opacity: _float_) : _com.itextpdf.layout.borders.Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _int_ | Border width. |
| opacity | _float_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

#### _pdf.border(border: string, width: _int_, opacity: _int_) : _com.itextpdf.layout.borders.Border_
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _int_ | Border width. |
| opacity | _int_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

## border3D

---

#### _pdf.border3D(border: string) : _com.itextpdf.layout.borders.Border3D_
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### _pdf.border3D(border: string, color: _com.itextpdf.kernel.colors.Color_, width: _double_) : _com.itextpdf.layout.borders.Border3D_
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _com.itextpdf.kernel.colors.Color_ | Border color. |
| width | _double_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### _pdf.border3D(border: string, color: _com.itextpdf.kernel.colors.Color_, width: _double_, arg3: _double_) : _com.itextpdf.layout.borders.Border3D_
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _com.itextpdf.kernel.colors.Color_ | Border color. |
| width | _double_ | Border width. |
| arg3 | _double_ |   |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### _pdf.border3D(border: string, color: _com.itextpdf.kernel.colors.Color_, width: _double_, arg3: _float_) : _com.itextpdf.layout.borders.Border3D_
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _com.itextpdf.kernel.colors.Color_ | Border color. |
| width | _double_ | Border width. |
| arg3 | _float_ |   |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### _pdf.border3D(border: string, color: _com.itextpdf.kernel.colors.Color_, width: _double_, arg3: _int_) : _com.itextpdf.layout.borders.Border3D_
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _com.itextpdf.kernel.colors.Color_ | Border color. |
| width | _double_ | Border width. |
| arg3 | _int_ |   |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### _pdf.border3D(border: string, color: _com.itextpdf.kernel.colors.Color_, width: _float_) : _com.itextpdf.layout.borders.Border3D_
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _com.itextpdf.kernel.colors.Color_ | Border color. |
| width | _float_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### _pdf.border3D(border: string, color: _com.itextpdf.kernel.colors.Color_, width: _float_, arg3: _double_) : _com.itextpdf.layout.borders.Border3D_
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _com.itextpdf.kernel.colors.Color_ | Border color. |
| width | _float_ | Border width. |
| arg3 | _double_ |   |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### _pdf.border3D(border: string, color: _com.itextpdf.kernel.colors.Color_, width: _float_, opacity: _float_) : _com.itextpdf.layout.borders.Border3D_
##### Description

Creates a customized 3D border with type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _com.itextpdf.kernel.colors.Color_ | Border color. |
| width | _float_ | Border width. |
| opacity | _float_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns the created customized 3D border.

---

#### _pdf.border3D(border: string, color: _com.itextpdf.kernel.colors.Color_, width: _float_, opacity: _int_) : _com.itextpdf.layout.borders.Border3D_
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _com.itextpdf.kernel.colors.Color_ | Border color. |
| width | _float_ | Border width. |
| opacity | _int_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, color, width and opacity inserted.

---

#### _pdf.border3D(border: string, color: _com.itextpdf.kernel.colors.Color_, width: _int_) : _com.itextpdf.layout.borders.Border3D_
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _com.itextpdf.kernel.colors.Color_ | Border color. |
| width | _int_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### _pdf.border3D(border: string, color: _com.itextpdf.kernel.colors.Color_, width: _int_, arg3: _double_) : _com.itextpdf.layout.borders.Border3D_
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _com.itextpdf.kernel.colors.Color_ | Border color. |
| width | _int_ | Border width. |
| arg3 | _double_ |   |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### _pdf.border3D(border: string, color: _com.itextpdf.kernel.colors.Color_, width: _int_, arg3: _float_) : _com.itextpdf.layout.borders.Border3D_
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _com.itextpdf.kernel.colors.Color_ | Border color. |
| width | _int_ | Border width. |
| arg3 | _float_ |   |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### _pdf.border3D(border: string, color: _com.itextpdf.kernel.colors.Color_, width: _int_, opacity: _int_) : _com.itextpdf.layout.borders.Border3D_
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| color | _com.itextpdf.kernel.colors.Color_ | Border color. |
| width | _int_ | Border width. |
| opacity | _int_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width and opacity inserted.

---

#### _pdf.border3D(border: string, width: _double_) : _com.itextpdf.layout.borders.Border3D_
##### Description

Creates a border type 3D with a inserted width.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _double_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border width of the type inserted,coloured black and the width inserted.

---

#### _pdf.border3D(border: string, width: _double_, opacity: _double_) : _com.itextpdf.layout.borders.Border3D_
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _double_ | Border width. |
| opacity | _double_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### _pdf.border3D(border: string, width: _double_, opacity: _float_) : _com.itextpdf.layout.borders.Border3D_
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _double_ | Border width. |
| opacity | _float_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### _pdf.border3D(border: string, width: _double_, opacity: _int_) : _com.itextpdf.layout.borders.Border3D_
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _double_ | Border width. |
| opacity | _int_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### _pdf.border3D(border: string, width: _float_) : _com.itextpdf.layout.borders.Border3D_
##### Description

Creates a border type 3D with a inserted width.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _float_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border width of the type inserted,coloured black and the width inserted.

---

#### _pdf.border3D(border: string, width: _float_, opacity: _double_) : _com.itextpdf.layout.borders.Border3D_
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _float_ | Border width. |
| opacity | _double_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### _pdf.border3D(border: string, width: _float_, opacity: _float_) : _com.itextpdf.layout.borders.Border3D_
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _float_ | Border width. |
| opacity | _float_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### _pdf.border3D(border: string, width: _float_, opacity: _int_) : _com.itextpdf.layout.borders.Border3D_
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _float_ | Border width. |
| opacity | _int_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### _pdf.border3D(border: string, arg1: _int_) : _com.itextpdf.layout.borders.Border3D_
##### Description

Creates a border type 3D.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| arg1 | _int_ |   |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border width of the type inserted,coloured black.

---

#### _pdf.border3D(border: string, width: _int_, opacity: _double_) : _com.itextpdf.layout.borders.Border3D_
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _int_ | Border width. |
| opacity | _double_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### _pdf.border3D(border: string, width: _int_, opacity: _float_) : _com.itextpdf.layout.borders.Border3D_
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _int_ | Border width. |
| opacity | _float_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### _pdf.border3D(border: string, width: _int_, opacity: _int_) : _com.itextpdf.layout.borders.Border3D_
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| border | string | Border type. |
| width | _int_ | Border width. |
| opacity | _int_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

## canvas

---

#### _pdf.canvas(arg0: _com.itextpdf.kernel.pdf.PdfDocument_, arg1: _int_) : _com.itextpdf.kernel.pdf.canvas.PdfCanvas_
##### Description

Creates an rectangular text area.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _com.itextpdf.kernel.pdf.PdfDocument_ |   |
| arg1 | _int_ |   |

##### Return

( _com.itextpdf.kernel.pdf.canvas.PdfCanvas_ )


---

#### _pdf.canvas(arg0: _com.itextpdf.kernel.pdf.PdfPage_) : _com.itextpdf.kernel.pdf.canvas.PdfCanvas_
##### Description

Creates an rectangular text area.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _com.itextpdf.kernel.pdf.PdfPage_ |   |

##### Return

( _com.itextpdf.kernel.pdf.canvas.PdfCanvas_ )


---

## cell

---

#### _pdf.cell() : _com.itextpdf.layout.element.Cell_
##### Description

Creates a new table cell.

##### Return

( _com.itextpdf.layout.element.Cell_ )

Returns the created cell.

---

#### _pdf.cell(rowspan: _int_, colspan: _int_) : _com.itextpdf.layout.element.Cell_
##### Description

Creates a new table cell with rowspan or colspan.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| rowspan | _int_ | Number of rowspan. |
| colspan | _int_ | Number of colspan. |

##### Return

( _com.itextpdf.layout.element.Cell_ )

Returns the created cell.

---

## color

---

#### _pdf.color(arg0: string) : _com.itextpdf.kernel.colors.Color_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _com.itextpdf.kernel.colors.Color_ )


---

## colorCMYK

---

#### _pdf.colorCMYK(arg0: _double_, arg1: _double_, arg2: _double_, arg3: _double_) : _com.itextpdf.kernel.colors.DeviceCmyk_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _double_ |   |
| arg1 | _double_ |   |
| arg2 | _double_ |   |
| arg3 | _double_ |   |

##### Return

( _com.itextpdf.kernel.colors.DeviceCmyk_ )


---

#### _pdf.colorCMYK(arg0: _float_, arg1: _float_, arg2: _float_, arg3: _float_) : _com.itextpdf.kernel.colors.DeviceCmyk_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _float_ |   |
| arg1 | _float_ |   |
| arg2 | _float_ |   |
| arg3 | _float_ |   |

##### Return

( _com.itextpdf.kernel.colors.DeviceCmyk_ )


---

#### _pdf.colorCMYK(arg0: _int_, arg1: _int_, arg2: _int_, arg3: _int_) : _com.itextpdf.kernel.colors.DeviceCmyk_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |
| arg3 | _int_ |   |

##### Return

( _com.itextpdf.kernel.colors.DeviceCmyk_ )


---

## colorGray

---

#### _pdf.colorGray(arg0: _double_) : _com.itextpdf.kernel.colors.DeviceGray_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _double_ |   |

##### Return

( _com.itextpdf.kernel.colors.DeviceGray_ )


---

#### _pdf.colorGray(arg0: _float_) : _com.itextpdf.kernel.colors.DeviceGray_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _float_ |   |

##### Return

( _com.itextpdf.kernel.colors.DeviceGray_ )


---

#### _pdf.colorGray(arg0: _int_) : _com.itextpdf.kernel.colors.DeviceGray_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |

##### Return

( _com.itextpdf.kernel.colors.DeviceGray_ )


---

## colorRGB

---

#### _pdf.colorRGB(arg0: _double_, arg1: _double_, arg2: _double_) : _com.itextpdf.kernel.colors.DeviceRgb_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _double_ |   |
| arg1 | _double_ |   |
| arg2 | _double_ |   |

##### Return

( _com.itextpdf.kernel.colors.DeviceRgb_ )


---

#### _pdf.colorRGB(arg0: _float_, arg1: _float_, arg2: _float_) : _com.itextpdf.kernel.colors.DeviceRgb_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _float_ |   |
| arg1 | _float_ |   |
| arg2 | _float_ |   |

##### Return

( _com.itextpdf.kernel.colors.DeviceRgb_ )


---

#### _pdf.colorRGB(arg0: _int_, arg1: _int_, arg2: _int_) : _com.itextpdf.kernel.colors.DeviceRgb_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _int_ |   |
| arg1 | _int_ |   |
| arg2 | _int_ |   |

##### Return

( _com.itextpdf.kernel.colors.DeviceRgb_ )


---

## extract

---

#### _pdf.extract(content: _java.io.InputStream_) : _[Values](../../objects/Values)_
##### Description

Extracts the content of PDF's.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _java.io.InputStream_ | Content to be extracted. |

##### Return

( _[Values](../../objects/Values)_ )

Returns the extracted content.

---

#### _pdf.extract(content: _[File](../../objects/File)_) : _[Values](../../objects/Values)_
##### Description

Extracts the content of PDF's.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _[File](../../objects/File)_ | Content to be extracted. |

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

#### _pdf.extract(storage: _[Storage](../../resources/Storage)_) : _[Values](../../objects/Values)_
##### Description

Extracts the content of PDFs.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ | Caminho do armazenamento. |

##### Return

( _[Values](../../objects/Values)_ )

Returns the extracted content.

---

## font

---

#### _pdf.font(storage: string) : _com.itextpdf.kernel.font.PdfFont_
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | string | Storage path. |

##### Return

( _com.itextpdf.kernel.font.PdfFont_ )

Returns the created font.

---

#### _pdf.font(storage: _[File](../../objects/File)_) : _com.itextpdf.kernel.font.PdfFont_
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[File](../../objects/File)_ | Storage path. |

##### Return

( _com.itextpdf.kernel.font.PdfFont_ )

Returns the created font.

---

#### _pdf.font(storage: _[File](../../objects/File)_, encoding: _boolean_) : _com.itextpdf.kernel.font.PdfFont_
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[File](../../objects/File)_ | Storage path. |
| encoding | _boolean_ | Font encoding. |

##### Return

( _com.itextpdf.kernel.font.PdfFont_ )

Returns the created font.

---

#### _pdf.font(storage: _[File](../../objects/File)_, encoding: string) : _com.itextpdf.kernel.font.PdfFont_
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[File](../../objects/File)_ | Storage path. |
| encoding | string | Font encoding. |

##### Return

( _com.itextpdf.kernel.font.PdfFont_ )

Returns the created font.

---

#### _pdf.font(storage: _[File](../../objects/File)_, encoding: string, arg2: _boolean_) : _com.itextpdf.kernel.font.PdfFont_
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[File](../../objects/File)_ | Storage path. |
| encoding | string | Font encoding. |
| arg2 | _boolean_ |   |

##### Return

( _com.itextpdf.kernel.font.PdfFont_ )

Returns the created font.

---

#### _pdf.font(storage: _[Storage](../../resources/Storage)_) : _com.itextpdf.kernel.font.PdfFont_
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ | Storage path. |

##### Return

( _com.itextpdf.kernel.font.PdfFont_ )

Returns the created font.

---

#### _pdf.font(storage: _[Storage](../../resources/Storage)_, encoding: _boolean_) : _com.itextpdf.kernel.font.PdfFont_
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ | Storage path. |
| encoding | _boolean_ | Font encoding. |

##### Return

( _com.itextpdf.kernel.font.PdfFont_ )

Returns the created font.

---

#### _pdf.font(storage: _[Storage](../../resources/Storage)_, encoding: string) : _com.itextpdf.kernel.font.PdfFont_
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ | Storage path. |
| encoding | string | Font encoding. |

##### Return

( _com.itextpdf.kernel.font.PdfFont_ )

Returns the created font.

---

#### _pdf.font(storage: _[Storage](../../resources/Storage)_, encoding: string, arg2: _boolean_) : _com.itextpdf.kernel.font.PdfFont_
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ | Storage path. |
| encoding | string | Font encoding. |
| arg2 | _boolean_ |   |

##### Return

( _com.itextpdf.kernel.font.PdfFont_ )

Returns the created font.

---

## getDocument

---

#### _pdf.getDocument() : _com.itextpdf.layout.Document_
##### Description

Obtém o objecto Document do iText para a estrutura do documento PDF.

##### Return

( _com.itextpdf.layout.Document_ )


---

## getPdfDocument

---

#### _pdf.getPdfDocument() : _com.itextpdf.kernel.pdf.PdfDocument_
##### Description

Obtém o objecto PdfDocument do iText para a construção do documento PDF.

##### Return

( _com.itextpdf.kernel.pdf.PdfDocument_ )


---

## getPdfReader

---

#### _pdf.getPdfReader() : _com.itextpdf.kernel.pdf.PdfReader_
##### Description

Obtém o objecto PdfReader do iText para a leitura do documento PDF.

##### Return

( _com.itextpdf.kernel.pdf.PdfReader_ )


---

## getPdfWriter

---

#### _pdf.getPdfWriter() : _com.itextpdf.kernel.pdf.PdfWriter_
##### Description

Obtém o objecto PdfWriter do iText para a escrita dos bytes do arquivo PDF.

##### Return

( _com.itextpdf.kernel.pdf.PdfWriter_ )


---

## image

---

#### _pdf.image(arg0: _[File](../../objects/File)_) : _com.itextpdf.layout.element.Image_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[File](../../objects/File)_ |   |

##### Return

( _com.itextpdf.layout.element.Image_ )


---

#### _pdf.image(arg0: _[Storage](../../resources/Storage)_) : _com.itextpdf.layout.element.Image_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Storage](../../resources/Storage)_ |   |

##### Return

( _com.itextpdf.layout.element.Image_ )


---

## init

---

#### _pdf.init() : _[PDF](../../resources/PDF)_
##### Description

Cria um novo objeto de recurso para a construção de PDFs.

##### How To Use

```javascript
const pdf = _pdf.init();
```

##### Return

( _[PDF](../../resources/PDF)_ )


---

## line

---

#### _pdf.line(type: string, color: _com.itextpdf.kernel.colors.Color_, width: _double_) : _com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer_
##### Description

Creates a customized border with type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| type | string | Line type. |
| color | _com.itextpdf.kernel.colors.Color_ | Line color. |
| width | _double_ | Line width. |

##### Return

( _com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer_ )

Returns the created customized border.

---

#### _pdf.line(type: string, color: _com.itextpdf.kernel.colors.Color_, width: _float_) : _com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer_
##### Description

Creates a customized line with type,color, width inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| type | string | Line type. |
| color | _com.itextpdf.kernel.colors.Color_ | Line color. |
| width | _float_ | Line width. |

##### Return

( _com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer_ )

Returns the created customized line.

---

#### _pdf.line(line: string, color: _com.itextpdf.kernel.colors.Color_, width: _int_) : _com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer_
##### Description

Creates a line type with color and width inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| line | string | Line type. |
| color | _com.itextpdf.kernel.colors.Color_ | Line color. |
| width | _int_ | Line width. |

##### Return

( _com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer_ )

Returns the line type, color and width inserted.

---

## newDocument

---

#### _pdf.newDocument() : _com.itextpdf.layout.Document_
##### Description

Cria um novo documento.

##### Return

( _com.itextpdf.layout.Document_ )


---

#### _pdf.newDocument(pageSize: _com.itextpdf.kernel.geom.PageSize_) : _com.itextpdf.layout.Document_
##### Description

Creates a PDF document with the page size inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| pageSize | _com.itextpdf.kernel.geom.PageSize_ | Page size. |

##### Return

( _com.itextpdf.layout.Document_ )

Returns PDF document with the page size inserted.

---

#### _pdf.newDocument(arg0: _java.io.OutputStream_) : _com.itextpdf.layout.Document_
##### Description

Creates a new PDF document.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _java.io.OutputStream_ |   |

##### Return

( _com.itextpdf.layout.Document_ )


---

#### _pdf.newDocument(storage: _java.io.OutputStream_, pageSize: _com.itextpdf.kernel.geom.PageSize_) : _com.itextpdf.layout.Document_
##### Description

Creates a PDF document with the page size inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _java.io.OutputStream_ | File path. |
| pageSize | _com.itextpdf.kernel.geom.PageSize_ | Page size. |

##### Return

( _com.itextpdf.layout.Document_ )

Returns PDF document with the page size inserted.

---

#### _pdf.newDocument(arg0: _[File](../../objects/File)_) : _com.itextpdf.layout.Document_
##### Description

Creates a new PDF document.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[File](../../objects/File)_ |   |

##### Return

( _com.itextpdf.layout.Document_ )


---

#### _pdf.newDocument(storage: _[File](../../objects/File)_, pageSize: _com.itextpdf.kernel.geom.PageSize_) : _com.itextpdf.layout.Document_
##### Description

Creates a PDF document with the page size inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[File](../../objects/File)_ | File path. |
| pageSize | _com.itextpdf.kernel.geom.PageSize_ | Page size. |

##### Return

( _com.itextpdf.layout.Document_ )

Returns PDF document with the page size inserted.

---

#### _pdf.newDocument(arg0: _[OutputStream](../../objects/OutputStream)_) : _com.itextpdf.layout.Document_
##### Description

Creates a new PDF document.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[OutputStream](../../objects/OutputStream)_ |   |

##### Return

( _com.itextpdf.layout.Document_ )


---

#### _pdf.newDocument(storage: _[OutputStream](../../objects/OutputStream)_, pageSize: _com.itextpdf.kernel.geom.PageSize_) : _com.itextpdf.layout.Document_
##### Description

Creates a PDF document with the page size inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[OutputStream](../../objects/OutputStream)_ | File path. |
| pageSize | _com.itextpdf.kernel.geom.PageSize_ | Page size. |

##### Return

( _com.itextpdf.layout.Document_ )

Returns PDF document with the page size inserted.

---

#### _pdf.newDocument(arg0: _[Storage](../../resources/Storage)_) : _com.itextpdf.layout.Document_
##### Description

Creates a new PDF document.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _[Storage](../../resources/Storage)_ |   |

##### Return

( _com.itextpdf.layout.Document_ )


---

#### _pdf.newDocument(storage: _[Storage](../../resources/Storage)_, pageSize: _com.itextpdf.kernel.geom.PageSize_) : _com.itextpdf.layout.Document_
##### Description

Creates a PDF document with the page size inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ | File path. |
| pageSize | _com.itextpdf.kernel.geom.PageSize_ | Page size. |

##### Return

( _com.itextpdf.layout.Document_ )

Returns PDF document with the page size inserted.

---

## newPdfDocument

---

#### _pdf.newPdfDocument() : _com.itextpdf.kernel.pdf.PdfDocument_
##### Description

Creates a PDF document.

##### Return

( _com.itextpdf.kernel.pdf.PdfDocument_ )


---

#### _pdf.newPdfDocument(storage: _java.io.OutputStream_) : _com.itextpdf.kernel.pdf.PdfDocument_
##### Description

Creates a PDF document.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _java.io.OutputStream_ | File path. |

##### Return

( _com.itextpdf.kernel.pdf.PdfDocument_ )


---

#### _pdf.newPdfDocument(storage: _[File](../../objects/File)_) : _com.itextpdf.kernel.pdf.PdfDocument_
##### Description

Creates a PDF document.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[File](../../objects/File)_ | File path. |

##### Return

( _com.itextpdf.kernel.pdf.PdfDocument_ )


---

#### _pdf.newPdfDocument(storage: _[OutputStream](../../objects/OutputStream)_) : _com.itextpdf.kernel.pdf.PdfDocument_
##### Description

Creates a PDF document.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[OutputStream](../../objects/OutputStream)_ | File path. |

##### Return

( _com.itextpdf.kernel.pdf.PdfDocument_ )


---

#### _pdf.newPdfDocument(storage: _[Storage](../../resources/Storage)_) : _com.itextpdf.kernel.pdf.PdfDocument_
##### Description

Creates a PDF document.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ | File path. |

##### Return

( _com.itextpdf.kernel.pdf.PdfDocument_ )


---

## openPdfDocument

---

#### _pdf.openPdfDocument(path: string) : _com.itextpdf.kernel.pdf.PdfDocument_
##### Description

Opens a PDF documment corresponding to the inserted path.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| path | string | File path. |

##### Return

( _com.itextpdf.kernel.pdf.PdfDocument_ )

Returns PDF document openned.

---

## pageSize

---

#### _pdf.pageSize(arg0: _float_, arg1: _float_) : _com.itextpdf.kernel.geom.PageSize_
##### Description

Obtém a definição do tamanho da página atráves da largura e altura.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _float_ |   |
| arg1 | _float_ |   |

##### Return

( _com.itextpdf.kernel.geom.PageSize_ )


---

#### _pdf.pageSize(arg0: string) : _com.itextpdf.kernel.geom.PageSize_
##### Description

Obtém a definição do tamanho de página, suporta:<br><ul><li>A0</li><li>A1</li><li>A2</li><li>A3</li><li>A4</li><li>A5</li><li>A6</li><li>A7</li><li>A8</li><li>A9</li><li>A10</li><li>B0</li><li>B1</li><li>B2</li><li>B3</li><li>B4</li><li>B5</li><li>B6</li><li>B7</li><li>B8</li><li>B9</li><li>B10</li><li>default</li><li>executive</li><li>ledger</li><li>legal</li><li>letter</li><li>tabloid</li></ul>

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _com.itextpdf.kernel.geom.PageSize_ )


---

## paragraph

---

#### _pdf.paragraph(arg0: string) : _com.itextpdf.layout.element.Paragraph_
##### Description

Creates a paragraph.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | string |   |

##### Return

( _com.itextpdf.layout.element.Paragraph_ )


---

## setDocument

---

#### _pdf.setDocument(arg0: _com.itextpdf.layout.Document_) : _[PDF](../../resources/PDF)_
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| arg0 | _com.itextpdf.layout.Document_ |   |

##### Return

( _[PDF](../../resources/PDF)_ )


---

## table

---

#### _pdf.table(columnWidth: _[D_) : _com.itextpdf.layout.element.Table_
##### Description

Creates a table with the columns width inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| columnWidth | _[D_ | Column widthof the table. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns a table with the columns width inserted.

---

#### _pdf.table(columnWidth: _[D_, largeTable: _boolean_) : _com.itextpdf.layout.element.Table_
##### Description

Creates a new table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| columnWidth | _[D_ | Columns width. |
| largeTable | _boolean_ | Large table. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns the created table.

---

#### _pdf.table(columnWidth: _[F_) : _com.itextpdf.layout.element.Table_
##### Description

Creates a table with the columns width inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| columnWidth | _[F_ | Column widthof the table. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns a table with the columns width inserted.

---

#### _pdf.table(columnWidth: _[F_, largeTable: _boolean_) : _com.itextpdf.layout.element.Table_
##### Description

Creates a new table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| columnWidth | _[F_ | Columns width. |
| largeTable | _boolean_ | Large table. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns the created table.

---

#### _pdf.table(columnWidth: _[I_) : _com.itextpdf.layout.element.Table_
##### Description

Creates a table with the columns width inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| columnWidth | _[I_ | Column widthof the table. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns a table with the columns width inserted.

---

#### _pdf.table(columnWidth: _[I_, largeTable: _boolean_) : _com.itextpdf.layout.element.Table_
##### Description

Creates a new table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| columnWidth | _[I_ | Columns width. |
| largeTable | _boolean_ | Large table. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns the created table.

---

#### _pdf.table(columns: _int_) : _com.itextpdf.layout.element.Table_
##### Description

Creates a new table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| columns | _int_ | Columns number. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns the created table.

---

#### _pdf.table(columnWidth: _java.util.List_) : _com.itextpdf.layout.element.Table_
##### Description

Creates a table with the columns width inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| columnWidth | _java.util.List_ | Column's width of the table. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns a table with the columns width inserted.

---

#### _pdf.table(columnWidth: _java.util.List_, largeTable: _boolean_) : _com.itextpdf.layout.element.Table_
##### Description

Creates a new table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| columnWidth | _java.util.List_ | Columns width. |
| largeTable | _boolean_ | Large table. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns the created table.

---

#### _pdf.table(columnWidth: _[Values](../../objects/Values)_) : _com.itextpdf.layout.element.Table_
##### Description

Creates a table with the columns width inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| columnWidth | _[Values](../../objects/Values)_ | Column width of the table. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns a table with the columns width inserted.

---

#### _pdf.table(columnWidth: _[Values](../../objects/Values)_, largeTable: _boolean_) : _com.itextpdf.layout.element.Table_
##### Description

Creates a new table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| columnWidth | _[Values](../../objects/Values)_ | Columns width. |
| largeTable | _boolean_ | Large table. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns the created table.

---

## text

---

#### _pdf.text(content: string) : _com.itextpdf.layout.element.Text_
##### Description

Creates new text with the inserted text.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | string | Content to be created. |

##### Return

( _com.itextpdf.layout.element.Text_ )

Returns the text content.

---

## toHTML

---

#### _pdf.toHTML(content: _java.io.InputStream_) : string
##### Description

Converts the inserted content to HTML.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _java.io.InputStream_ | Content to HTML. |

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

#### _pdf.toHTML(content: _[Storage](../../resources/Storage)_) : string
##### Description

Converts the inserted content to HTML.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _[Storage](../../resources/Storage)_ | Content to HTML. |

##### Return

( string )

Returns the Html.

---

## toText

---

#### _pdf.toText(content: _java.io.InputStream_) : string
##### Description

Converts to text the inserted content.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _java.io.InputStream_ | Content to text. |

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

#### _pdf.toText(content: _[Storage](../../resources/Storage)_) : string
##### Description

Converts to text the inserted content.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| content | _[Storage](../../resources/Storage)_ | Content to text. |

##### Return

( string )

Returns the Html.

---

