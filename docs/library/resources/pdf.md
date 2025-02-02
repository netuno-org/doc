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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>areaBreak</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.AreaBreak</span>
##### Description

Creates an AreaBreak that terminates a previous area type.

##### Return

( _com.itextpdf.layout.element.AreaBreak_ )

Terminates the previous area and returns a new one.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>areaBreak</span>(<span style={{color: '#FF8000'}}>pageSize</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.geom.PageSize</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.AreaBreak</span>
##### Description

Creates an AreaBreak that terminates a previous area type.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **pageSize** | _com.itextpdf.kernel.geom.PageSize_ | Size of the new content. |

##### Return

( _com.itextpdf.layout.element.AreaBreak_ )

Terminates the previous area and returns a new one.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>areaBreak</span>(<span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.AreaBreak</span>
##### Description

Creates an AreaBreak that terminates a previous area type.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ | Type of the new area. |

##### Return

( _com.itextpdf.layout.element.AreaBreak_ )

Terminates the previous area and returns a new one.

---

## border

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
##### Description

Creates a border type.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border width of the type inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _double_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _double_ | Border width. |
| **opacity** | _double_ |   |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _double_ | Border width. |
| **opacity** | _float_ |   |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _double_ | Border width. |
| **opacity** | _int_ |   |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _float_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _float_ | Border width. |
| **opacity** | _double_ |   |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
##### Description

Creates a customized border with type, color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _float_ | Border width. |
| **opacity** | _float_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns the created customized border.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
##### Description

Creates a border type, color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _float_ | Border width. |
| **opacity** | _int_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, color, width and opacity inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _int_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _int_ | Border width. |
| **opacity** | _double_ |   |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _int_ | Border width. |
| **opacity** | _float_ |   |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _int_ | Border width. |
| **opacity** | _int_ |   |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
##### Description

Creates a border type with a inserted width.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _double_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border width of the type inserted,coloured black and the width inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _double_ | Border width. |
| **opacity** | _double_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _double_ | Border width. |
| **opacity** | _float_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _double_ | Border color. |
| **width** | _int_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, width and color inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
##### Description

Creates a border type with a inserted width.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _float_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border width of the type inserted,coloured black and the width inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _float_ | Border width. |
| **opacity** | _double_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _float_ | Border width. |
| **opacity** | _float_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _float_ | Border width. |
| **opacity** | _int_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
##### Description

Creates a border type with a inserted width.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _int_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border width of the type inserted,coloured black and the width inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _int_ | Border width. |
| **opacity** | _double_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _int_ | Border width. |
| **opacity** | _float_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
##### Description

Creates a border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _int_ | Border width. |
| **opacity** | _int_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border_ )

Returns a border type, the width and opacity inserted, coloured black.

---

## border3D

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _double_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _double_ | Border width. |
| **opacity** | _double_ |   |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _double_ | Border width. |
| **opacity** | _float_ |   |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _double_ | Border width. |
| **opacity** | _int_ |   |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _float_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _float_ | Border width. |
| **opacity** | _double_ |   |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
##### Description

Creates a customized 3D border with type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _float_ | Border width. |
| **opacity** | _float_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns the created customized 3D border.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _float_ | Border width. |
| **opacity** | _int_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, color, width and opacity inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _int_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _int_ | Border width. |
| **opacity** | _double_ |   |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _int_ | Border width. |
| **opacity** | _float_ |   |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
##### Description

Creates a 3D border type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Border color. |
| **width** | _int_ | Border width. |
| **opacity** | _int_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type,color,width and opacity inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
##### Description

Creates a border type 3D with a inserted width.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _double_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border width of the type inserted,coloured black and the width inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _double_ | Border width. |
| **opacity** | _double_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _double_ | Border width. |
| **opacity** | _float_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _double_ | Border width. |
| **opacity** | _int_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
##### Description

Creates a border type 3D with a inserted width.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _float_ | Border width. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border width of the type inserted,coloured black and the width inserted.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _float_ | Border width. |
| **opacity** | _double_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _float_ | Border width. |
| **opacity** | _float_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _float_ | Border width. |
| **opacity** | _int_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
##### Description

Creates a border type 3D.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _int_ |   |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border width of the type inserted,coloured black.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _int_ | Border width. |
| **opacity** | _double_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _int_ | Border width. |
| **opacity** | _float_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>border</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
##### Description

Creates a 3D border type with a inserted width and opacity.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **border** | _string_ | Border type. |
| **width** | _int_ | Border width. |
| **opacity** | _int_ | Border opacity. |

##### Return

( _com.itextpdf.layout.borders.Border3D_ )

Returns a 3D border type, the width and opacity inserted, coloured black.

---

## canvas

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>canvas</span>(<span style={{color: '#FF8000'}}>doc</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.pdf.PdfDocument</span>, <span style={{color: '#FF8000'}}>pageNum</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.pdf.canvas.PdfCanvas</span>
##### Description

Creates an rectangular text area.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **doc** | _com.itextpdf.kernel.pdf.PdfDocument_ |   |
| **pageNum** | _int_ |   |

##### Return

( _com.itextpdf.kernel.pdf.canvas.PdfCanvas_ )


---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>canvas</span>(<span style={{color: '#FF8000'}}>page</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.pdf.PdfPage</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.pdf.canvas.PdfCanvas</span>
##### Description

Creates an rectangular text area.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **page** | _com.itextpdf.kernel.pdf.PdfPage_ |   |

##### Return

( _com.itextpdf.kernel.pdf.canvas.PdfCanvas_ )


---

## cell

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>cell</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Cell</span>
##### Description

Creates a new table cell.

##### Return

( _com.itextpdf.layout.element.Cell_ )

Returns the created cell.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>cell</span>(<span style={{color: '#FF8000'}}>rowspan</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>colspan</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Cell</span>
##### Description

Creates a new table cell with rowspan or colspan.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **rowspan** | _int_ | Number of rowspan. |
| **colspan** | _int_ | Number of colspan. |

##### Return

( _com.itextpdf.layout.element.Cell_ )

Returns the created cell.

---

## color

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>color</span>(<span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **color** | _string_ |   |

##### Return

( _com.itextpdf.kernel.colors.Color_ )


---

## colorCMYK

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>colorCMYK</span>(<span style={{color: '#FF8000'}}>cyan</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>magenta</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>yellow</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>black</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.DeviceCmyk</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **cyan** | _double_ |   |
| **magenta** | _double_ |   |
| **yellow** | _double_ |   |
| **black** | _double_ |   |

##### Return

( _com.itextpdf.kernel.colors.DeviceCmyk_ )


---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>colorCMYK</span>(<span style={{color: '#FF8000'}}>cyan</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>magenta</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>yellow</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>black</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.DeviceCmyk</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **cyan** | _float_ |   |
| **magenta** | _float_ |   |
| **yellow** | _float_ |   |
| **black** | _float_ |   |

##### Return

( _com.itextpdf.kernel.colors.DeviceCmyk_ )


---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>colorCMYK</span>(<span style={{color: '#FF8000'}}>cyan</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>magenta</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>yellow</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>black</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.DeviceCmyk</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **cyan** | _int_ |   |
| **magenta** | _int_ |   |
| **yellow** | _int_ |   |
| **black** | _int_ |   |

##### Return

( _com.itextpdf.kernel.colors.DeviceCmyk_ )


---

## colorGray

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>colorGray</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.DeviceGray</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _double_ |   |

##### Return

( _com.itextpdf.kernel.colors.DeviceGray_ )


---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>colorGray</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.DeviceGray</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _float_ |   |

##### Return

( _com.itextpdf.kernel.colors.DeviceGray_ )


---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>colorGray</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.DeviceGray</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **value** | _int_ |   |

##### Return

( _com.itextpdf.kernel.colors.DeviceGray_ )


---

## colorRGB

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>colorRGB</span>(<span style={{color: '#FF8000'}}>red</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>green</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>blue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.DeviceRgb</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **red** | _double_ |   |
| **green** | _double_ |   |
| **blue** | _double_ |   |

##### Return

( _com.itextpdf.kernel.colors.DeviceRgb_ )


---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>colorRGB</span>(<span style={{color: '#FF8000'}}>red</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>green</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>blue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.DeviceRgb</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **red** | _float_ |   |
| **green** | _float_ |   |
| **blue** | _float_ |   |

##### Return

( _com.itextpdf.kernel.colors.DeviceRgb_ )


---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>colorRGB</span>(<span style={{color: '#FF8000'}}>red</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>green</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>blue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.DeviceRgb</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **red** | _int_ |   |
| **green** | _int_ |   |
| **blue** | _int_ |   |

##### Return

( _com.itextpdf.kernel.colors.DeviceRgb_ )


---

## extract

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>extract</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Description

Extracts the content of PDF's.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _[InputStream](../objects/InputStream)_ | Content to be extracted. |

##### Return

( _[Values](../objects/Values)_ )

Returns the extracted content.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>extract</span>(<span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage) &#124; [File](../objects/File) | org.netuno.psamata.io.IO</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Description

Extracts the content of PDFs.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](../resources/storage) &#124; [File](../objects/File) | org.netuno.psamata.io.IO_ | Caminho do armazenamento. |

##### Return

( _[Values](../objects/Values)_ )

Returns the extracted content.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>extract</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>
##### Description

Extracts the content of PDF's.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _[InputStream](../objects/InputStream)_ | Content to be extracted. |

##### Return

( _[Values](../objects/Values)_ )

Returns the extracted content.

---

## font

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>font</span>(<span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.font.PdfFont</span>
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _string_ | Storage path. |

##### Return

( _com.itextpdf.kernel.font.PdfFont_ )

Returns the created font.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>font</span>(<span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.font.PdfFont</span>
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[File](../objects/File)_ | Storage path. |

##### Return

( _com.itextpdf.kernel.font.PdfFont_ )

Returns the created font.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>font</span>(<span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>, <span style={{color: '#FF8000'}}>encoding</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.font.PdfFont</span>
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[File](../objects/File)_ | Storage path. |
| **encoding** | _boolean_ | Font encoding. |

##### Return

( _com.itextpdf.kernel.font.PdfFont_ )

Returns the created font.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>font</span>(<span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>, <span style={{color: '#FF8000'}}>encoding</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.font.PdfFont</span>
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[File](../objects/File)_ | Storage path. |
| **encoding** | _string_ | Font encoding. |

##### Return

( _com.itextpdf.kernel.font.PdfFont_ )

Returns the created font.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>font</span>(<span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>, <span style={{color: '#FF8000'}}>encoding</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>embedded</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.font.PdfFont</span>
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[File](../objects/File)_ | Storage path. |
| **encoding** | _string_ | Font encoding. |
| **embedded** | _boolean_ |   |

##### Return

( _com.itextpdf.kernel.font.PdfFont_ )

Returns the created font.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>font</span>(<span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.font.PdfFont</span>
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](../resources/storage)_ | Storage path. |

##### Return

( _com.itextpdf.kernel.font.PdfFont_ )

Returns the created font.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>font</span>(<span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>, <span style={{color: '#FF8000'}}>encoding</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.font.PdfFont</span>
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](../resources/storage)_ | Storage path. |
| **encoding** | _boolean_ | Font encoding. |

##### Return

( _com.itextpdf.kernel.font.PdfFont_ )

Returns the created font.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>font</span>(<span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>, <span style={{color: '#FF8000'}}>encoding</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.font.PdfFont</span>
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](../resources/storage)_ | Storage path. |
| **encoding** | _string_ | Font encoding. |

##### Return

( _com.itextpdf.kernel.font.PdfFont_ )

Returns the created font.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>font</span>(<span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>, <span style={{color: '#FF8000'}}>encoding</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>embedded</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.font.PdfFont</span>
##### Description

Creates a font.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](../resources/storage)_ | Storage path. |
| **encoding** | _string_ | Font encoding. |
| **embedded** | _boolean_ |   |

##### Return

( _com.itextpdf.kernel.font.PdfFont_ )

Returns the created font.

---

## getDocument

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>getDocument</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.Document</span>
##### Description

Obtém o objecto Document do iText para a estrutura do documento PDF.

##### Return

( _com.itextpdf.layout.Document_ )

Gere a estrutura do documento.

---

## getPdfDocument

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>getPdfDocument</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.pdf.PdfDocument</span>
##### Description

Gets the PdfDocument object of the iText to build the PDf document.

##### Return

( _com.itextpdf.kernel.pdf.PdfDocument_ )

Manage the PDF document build.

---

## getPdfReader

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>getPdfReader</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.pdf.PdfReader</span>
##### Description

Gets the PdfReader object of the iText to read the PDF document.

##### Return

( _com.itextpdf.kernel.pdf.PdfReader_ )

Manage the PDF document read.

---

## getPdfWriter

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>getPdfWriter</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.pdf.PdfWriter</span>
##### Description

Gets the PdfWriter object of the iText to bytes write in the PDF file.

##### Return

( _com.itextpdf.kernel.pdf.PdfWriter_ )

Manage the bytes write in the PDF file.

---

## image

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>image</span>(<span style={{color: '#FF8000'}}>file</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Image</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **file** | _[File](../objects/File)_ |   |

##### Return

( _com.itextpdf.layout.element.Image_ )


---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>image</span>(<span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Image</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **storage** | _[Storage](../resources/storage)_ |   |

##### Return

( _com.itextpdf.layout.element.Image_ )


---

## init

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[PDF](../resources/pdf)</span>
##### Description

Creates a new resource object to build PDFs.

##### How To Use

```javascript
const pdf = _pdf.init();
```

##### Return

( _[PDF](../resources/pdf)_ )

New instance of the PDF resource.

---

## line

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>line</span>(<span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer</span>
##### Description

Creates a customized border with type,color, width and opacity inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ | Line type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Line color. |
| **width** | _double_ | Line width. |

##### Return

( _com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer_ )

Returns the created customized border.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>line</span>(<span style={{color: '#FF8000'}}>type</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer</span>
##### Description

Creates a customized line with type,color, width inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **type** | _string_ | Line type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Line color. |
| **width** | _float_ | Line width. |

##### Return

( _com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer_ )

Returns the created customized line.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>line</span>(<span style={{color: '#FF8000'}}>line</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer</span>
##### Description

Creates a line type with color and width inserted.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **line** | _string_ | Line type. |
| **color** | _com.itextpdf.kernel.colors.Color_ | Line color. |
| **width** | _int_ | Line width. |

##### Return

( _com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer_ )

Returns the line type, color and width inserted.

---

## newDocument

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>newDocument</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.Document</span>
##### Description

Cria um novo documento.

##### Return

( _com.itextpdf.layout.Document_ )


---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>newDocument</span>(<span style={{color: '#FF8000'}}>pageSize</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.geom.PageSize</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.Document</span>
##### Description

Creates a PDF document with specific page size.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **pageSize** | _com.itextpdf.kernel.geom.PageSize_ | Page size. |

##### Return

( _com.itextpdf.layout.Document_ )

Returns PDF document with the page size defined.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>newDocument</span>(<span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](../objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.Document</span>
##### Description

Creates a new PDF document with A4 page size.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](../objects/OutputStream)_ |   |

##### Return

( _com.itextpdf.layout.Document_ )

Returns PDF document with the page size A4.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>newDocument</span>(<span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](../objects/OutputStream)</span>, <span style={{color: '#FF8000'}}>pageSize</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.geom.PageSize</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.Document</span>
##### Description

Creates a PDF document with specific page size.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[OutputStream](../objects/OutputStream)_ | File path. |
| **pageSize** | _com.itextpdf.kernel.geom.PageSize_ | Page size. |

##### Return

( _com.itextpdf.layout.Document_ )

Returns PDF document with the page size defined.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>newDocument</span>(<span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage) &#124; [File](../objects/File) | org.netuno.psamata.io.IO</span>, <span style={{color: '#FF8000'}}>pageSize</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.geom.PageSize</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.Document</span>
##### Description

Creates a PDF document with specific page size.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **out** | _[Storage](../resources/storage) &#124; [File](../objects/File) | org.netuno.psamata.io.IO_ | File path. |
| **pageSize** | _com.itextpdf.kernel.geom.PageSize_ | Page size. |

##### Return

( _com.itextpdf.layout.Document_ )

Returns PDF document with the page size defined.

---

## openDocument

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>openDocument</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.Document</span>
##### Description

Opens a PDF documment corresponding to the inserted path.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _[InputStream](../objects/InputStream)_ | File path. |

##### Return

( _com.itextpdf.layout.Document_ )

Returns PDF document openned.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>openDocument</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>, <span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](../objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.Document</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](../objects/InputStream)_ |   |
| **out** | _[OutputStream](../objects/OutputStream)_ |   |

##### Return

( _com.itextpdf.layout.Document_ )


---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>openDocument</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>, <span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage) &#124; [File](../objects/File) | org.netuno.psamata.io.IO</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.Document</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[InputStream](../objects/InputStream)_ |   |
| **out** | _[Storage](../resources/storage) &#124; [File](../objects/File) | org.netuno.psamata.io.IO_ |   |

##### Return

( _com.itextpdf.layout.Document_ )


---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>openDocument</span>(<span style={{color: '#FF8000'}}>path</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage) &#124; [File](../objects/File) | org.netuno.psamata.io.IO</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.Document</span>
##### Description

Opens a PDF documment corresponding to the inserted path.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **path** | _[Storage](../resources/storage) &#124; [File](../objects/File) | org.netuno.psamata.io.IO_ | File path. |

##### Return

( _com.itextpdf.layout.Document_ )

Returns PDF document openned.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>openDocument</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage) &#124; [File](../objects/File) | org.netuno.psamata.io.IO</span>, <span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](../objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.Document</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[Storage](../resources/storage) &#124; [File](../objects/File) | org.netuno.psamata.io.IO_ |   |
| **out** | _[OutputStream](../objects/OutputStream)_ |   |

##### Return

( _com.itextpdf.layout.Document_ )


---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>openDocument</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage) &#124; [File](../objects/File) | org.netuno.psamata.io.IO</span>, <span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage) &#124; [File](../objects/File) | org.netuno.psamata.io.IO</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.Document</span>
##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **in** | _[Storage](../resources/storage) &#124; [File](../objects/File) | org.netuno.psamata.io.IO_ |   |
| **out** | _[Storage](../resources/storage) &#124; [File](../objects/File) | org.netuno.psamata.io.IO_ |   |

##### Return

( _com.itextpdf.layout.Document_ )


---

## pageSize

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>pageSize</span>(<span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>height</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.geom.PageSize</span>
##### Description

Gets the page size definition from the width and height.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **width** | _float_ | Width of the page. |
| **height** | _float_ | Height of the page. |

##### Return

( _com.itextpdf.kernel.geom.PageSize_ )

Page Definition.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>pageSize</span>(<span style={{color: '#FF8000'}}>page</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.geom.PageSize</span>
##### Description

Gets page size definition, pages codes supported:<br/><ul><li>A0</li><li>A1</li><li>A2</li><li>A3</li><li>A4</li><li>A5</li><li>A6</li><li>A7</li><li>A8</li><li>A9</li><li>A10</li><li>B0</li><li>B1</li><li>B2</li><li>B3</li><li>B4</li><li>B5</li><li>B6</li><li>B7</li><li>B8</li><li>B9</li><li>B10</li><li>default</li><li>executive</li><li>ledger</li><li>legal</li><li>letter</li><li>tabloid</li></ul>

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **page** | _string_ | Page type code. |

##### Return

( _com.itextpdf.kernel.geom.PageSize_ )


---

## paragraph

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>paragraph</span>(<span style={{color: '#FF8000'}}>text</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Paragraph</span>
##### Description

Creates a paragraph.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **text** | _string_ |   |

##### Return

( _com.itextpdf.layout.element.Paragraph_ )


---

## setDocument

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>setDocument</span>(<span style={{color: '#FF8000'}}>document</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.Document</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[PDF](../resources/pdf)</span>
##### Description

Sets the PDF document object of the iText.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **document** | _com.itextpdf.layout.Document_ | Document object of the iText. |

##### Return

( _[PDF](../resources/pdf)_ )

The current instance of the PDF resource.

---

## table

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>table</span>(<span style={{color: '#FF8000'}}>columns</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Table</span>
##### Description

Creates a new table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **columns** | _double[]_ | Columns number. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns the created table.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>table</span>(<span style={{color: '#FF8000'}}>columnWidth</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double[]</span>, <span style={{color: '#FF8000'}}>largeTable</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Table</span>
##### Description

Creates a table with the columns width defined.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **columnWidth** | _double[]_ | List of widths of each table column. |
| **largeTable** | _boolean_ | Define as large table. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns a table with the columns width has been defined.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>table</span>(<span style={{color: '#FF8000'}}>columns</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Table</span>
##### Description

Creates a new table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **columns** | _float[]_ | Columns number. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns the created table.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>table</span>(<span style={{color: '#FF8000'}}>columnWidth</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float[]</span>, <span style={{color: '#FF8000'}}>largeTable</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Table</span>
##### Description

Creates a table with the columns width defined.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **columnWidth** | _float[]_ | List of widths of each table column. |
| **largeTable** | _boolean_ | Define as large table. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns a table with the columns width has been defined.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>table</span>(<span style={{color: '#FF8000'}}>columns</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Table</span>
##### Description

Creates a new table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **columns** | _int[]_ | Columns number. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns the created table.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>table</span>(<span style={{color: '#FF8000'}}>columnWidth</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int[]</span>, <span style={{color: '#FF8000'}}>largeTable</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Table</span>
##### Description

Creates a table with the columns width defined.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **columnWidth** | _int[]_ | List of widths of each table column. |
| **largeTable** | _boolean_ | Define as large table. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns a table with the columns width has been defined.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>table</span>(<span style={{color: '#FF8000'}}>columns</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Table</span>
##### Description

Creates a new table.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **columns** | _int_ | Columns number. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns the created table.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>table</span>(<span style={{color: '#FF8000'}}>columnWidth</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Table</span>
##### Description

Creates a table with the columns width defined.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **columnWidth** | _java.util.List_ | List of widths of each table column. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns a table with the columns width has been defined.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>table</span>(<span style={{color: '#FF8000'}}>columnWidth</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List</span>, <span style={{color: '#FF8000'}}>largeTable</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Table</span>
##### Description

Creates a table with the columns width defined.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **columnWidth** | _java.util.List_ | List of widths of each table column. |
| **largeTable** | _boolean_ | Define as large table. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns a table with the columns width has been defined.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>table</span>(<span style={{color: '#FF8000'}}>columnWidth</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Table</span>
##### Description

Creates a table with the columns width defined.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **columnWidth** | _[Values](../objects/Values)_ | List of widths of each table column. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns a table with the columns width has been defined.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>table</span>(<span style={{color: '#FF8000'}}>columnWidth</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](../objects/Values)</span>, <span style={{color: '#FF8000'}}>largeTable</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Table</span>
##### Description

Creates a table with the columns width defined.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **columnWidth** | _[Values](../objects/Values)_ | List of widths of each table column. |
| **largeTable** | _boolean_ | Define as large table. |

##### Return

( _com.itextpdf.layout.element.Table_ )

Returns a table with the columns width has been defined.

---

## text

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>text</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Text</span>
##### Description

Creates new text with the inserted text.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _string_ | Content to be created. |

##### Return

( _com.itextpdf.layout.element.Text_ )

Returns the text content.

---

## toHTML

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toHTML</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Converts the inserted content to HTML.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _[InputStream](../objects/InputStream)_ | Content to HTML. |

##### Return

( _string_ )

Returns the Html.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toHTML</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Converts the inserted content to HTML.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _[File](../objects/File)_ | Content to HTML. |

##### Return

( _string_ )

Returns the Html.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toHTML</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Converts the inserted content to HTML.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _[InputStream](../objects/InputStream)_ | Content to HTML. |

##### Return

( _string_ )

Returns the Html.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toHTML</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Converts the inserted content to HTML.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _[Storage](../resources/storage)_ | Content to HTML. |

##### Return

( _string_ )

Returns the Html.

---

## toText

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toText</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Converts to text the inserted content.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _[InputStream](../objects/InputStream)_ | Content to text. |

##### Return

( _string_ )

Returns the Html.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toText</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](../objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Converts to text the inserted content.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _[File](../objects/File)_ | Content to text. |

##### Return

( _string_ )

Returns the Html.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toText</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](../objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Converts to text the inserted content.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _[InputStream](../objects/InputStream)_ | Content to text. |

##### Return

( _string_ )

Returns the Html.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toText</span>(<span style={{color: '#FF8000'}}>content</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](../resources/storage)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
##### Description

Converts to text the inserted content.

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **content** | _[Storage](../resources/storage)_ | Content to text. |

##### Return

( _string_ )

Returns the Html.

---

