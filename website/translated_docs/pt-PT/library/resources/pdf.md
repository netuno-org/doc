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

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">areaBreak</span>() : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.element.AreaBreak</span>
##### Descrição

Cria uma área de quebra que termina um tipo de área anterior.

##### Retorno

( _com.itextpdf.layout.element.AreaBreak_ )

Termina a área anterior e retorna a nova área.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">areaBreak</span>(<span style="color: #FF8000">nPaginas</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.geom.PageSize</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.element.AreaBreak</span>
##### Descrição

Cria uma área de quebra que termina um tipo de área anterior.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nPaginas** | _com.itextpdf.kernel.geom.PageSize_ | Tamanho do novo conteúdo. |

##### Retorno

( _com.itextpdf.layout.element.AreaBreak_ )

Termina a área anterior e retorna a nova área.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">areaBreak</span>(<span style="color: #FF8000">tipo</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.element.AreaBreak</span>
##### Descrição

Cria uma área de quebra que termina um tipo de área anterior.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tipo** | _string_ | Tipo da nova área. |

##### Retorno

( _com.itextpdf.layout.element.AreaBreak_ )

Termina a área anterior e retorna a nova área.

---

## border

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border</span>
##### Descrição

Cria um tipo de moldura.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna uma moldura do tipo inserido.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cor</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.Color</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border</span>
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **cor** | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| **largura** | _double_ | Largura da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cor</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.Color</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">double</span>, <span style="color: #FF8000">opacity</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border</span>
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **cor** | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| **largura** | _double_ | Largura da moldura. |
| **opacity** | _double_ |   |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cor</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.Color</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">double</span>, <span style="color: #FF8000">opacity</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border</span>
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **cor** | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| **largura** | _double_ | Largura da moldura. |
| **opacity** | _float_ |   |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cor</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.Color</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">double</span>, <span style="color: #FF8000">opacity</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border</span>
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **cor** | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| **largura** | _double_ | Largura da moldura. |
| **opacity** | _int_ |   |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cor</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.Color</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border</span>
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **cor** | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| **largura** | _float_ | Largura da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cor</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.Color</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">float</span>, <span style="color: #FF8000">opacity</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border</span>
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **cor** | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| **largura** | _float_ | Largura da moldura. |
| **opacity** | _double_ |   |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cor</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.Color</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">float</span>, <span style="color: #FF8000">opacidade</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border</span>
##### Descrição

Cria uma border personalizada com tipo de moldura, cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **cor** | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| **largura** | _float_ | Largura da moldura. |
| **opacidade** | _float_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna a moldura personalizada criada.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cor</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.Color</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">float</span>, <span style="color: #FF8000">opacidade</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border</span>
##### Descrição

Cria um tipo de moldura, cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **cor** | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| **largura** | _float_ | Largura da moldura. |
| **opacidade** | _int_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, cor, largura e opacidade inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cor</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.Color</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border</span>
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **cor** | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| **largura** | _int_ | Largura da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cor</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.Color</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">opacity</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border</span>
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **cor** | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| **largura** | _int_ | Largura da moldura. |
| **opacity** | _double_ |   |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cor</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.Color</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">opacity</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border</span>
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **cor** | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| **largura** | _int_ | Largura da moldura. |
| **opacity** | _float_ |   |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cor</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.Color</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">opacity</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border</span>
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **cor** | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| **largura** | _int_ | Largura da moldura. |
| **opacity** | _int_ |   |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border</span>
##### Descrição

Cria um tipo de moldura com uma largura definida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **largura** | _double_ | Largura da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna uma moldura do tipo inserido e com a largura inserida de cor preta.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">double</span>, <span style="color: #FF8000">opacidade</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border</span>
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **largura** | _double_ | Largura da moldura. |
| **opacidade** | _double_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e opacidade inseridas de cor preta.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">double</span>, <span style="color: #FF8000">opacidade</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border</span>
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **largura** | _double_ | Largura da moldura. |
| **opacidade** | _float_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e opacidade inseridas de cor preta.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cor</span>: <span style="font-weight: normal; font-style: italic;">double</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border</span>
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **cor** | _double_ | Cor da moldura. |
| **largura** | _int_ | Largura da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border</span>
##### Descrição

Cria um tipo de moldura com uma largura definida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **largura** | _float_ | Largura da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna uma moldura do tipo inserido e com a largura inserida de cor preta.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">float</span>, <span style="color: #FF8000">opacidade</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border</span>
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **largura** | _float_ | Largura da moldura. |
| **opacidade** | _double_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e opacidade inseridas de cor preta.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">float</span>, <span style="color: #FF8000">opacidade</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border</span>
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **largura** | _float_ | Largura da moldura. |
| **opacidade** | _float_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e opacidade inseridas de cor preta.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">float</span>, <span style="color: #FF8000">opacidade</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border</span>
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **largura** | _float_ | Largura da moldura. |
| **opacidade** | _int_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e opacidade inseridas de cor preta.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border</span>
##### Descrição

Cria um tipo de moldura com uma largura definida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **largura** | _int_ | Largura da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna uma moldura do tipo inserido e com a largura inserida de cor preta.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">opacidade</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border</span>
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **largura** | _int_ | Largura da moldura. |
| **opacidade** | _double_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e opacidade inseridas de cor preta.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">opacidade</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border</span>
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **largura** | _int_ | Largura da moldura. |
| **opacidade** | _float_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e opacidade inseridas de cor preta.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">opacidade</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border</span>
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **largura** | _int_ | Largura da moldura. |
| **opacidade** | _int_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e opacidade inseridas de cor preta.

---

## border3D

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border3D</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border3D</span>
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D,cor, largura inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border3D</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cor</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.Color</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border3D</span>
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **cor** | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| **largura** | _double_ | Largura da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D,cor, largura inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border3D</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cor</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.Color</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">double</span>, <span style="color: #FF8000">opacity</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border3D</span>
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **cor** | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| **largura** | _double_ | Largura da moldura. |
| **opacity** | _double_ |   |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D,cor, largura inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border3D</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cor</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.Color</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">double</span>, <span style="color: #FF8000">opacity</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border3D</span>
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **cor** | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| **largura** | _double_ | Largura da moldura. |
| **opacity** | _float_ |   |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D,cor, largura inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border3D</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cor</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.Color</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">double</span>, <span style="color: #FF8000">opacity</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border3D</span>
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **cor** | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| **largura** | _double_ | Largura da moldura. |
| **opacity** | _int_ |   |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D,cor, largura inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border3D</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cor</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.Color</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border3D</span>
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **cor** | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| **largura** | _float_ | Largura da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D,cor, largura inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border3D</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cor</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.Color</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">float</span>, <span style="color: #FF8000">opacity</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border3D</span>
##### Descrição

Cria um tipo de moldura 3D, cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **cor** | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| **largura** | _float_ | Largura da moldura. |
| **opacity** | _double_ |   |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D,cor, largura inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border3D</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cor</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.Color</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">float</span>, <span style="color: #FF8000">opacidade</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border3D</span>
##### Descrição

Cria uma border 3D personalizada com tipo de moldura,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **cor** | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| **largura** | _float_ | Largura da moldura. |
| **opacidade** | _float_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna a moldura 3D personalizada criada.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border3D</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cor</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.Color</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">float</span>, <span style="color: #FF8000">opacidade</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border3D</span>
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **cor** | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| **largura** | _float_ | Largura da moldura. |
| **opacidade** | _int_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D, cor, largura e opacidade inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border3D</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cor</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.Color</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border3D</span>
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **cor** | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| **largura** | _int_ | Largura da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D,cor, largura inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border3D</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cor</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.Color</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">opacity</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border3D</span>
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **cor** | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| **largura** | _int_ | Largura da moldura. |
| **opacity** | _double_ |   |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D,cor, largura inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border3D</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cor</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.Color</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">opacity</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border3D</span>
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **cor** | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| **largura** | _int_ | Largura da moldura. |
| **opacity** | _float_ |   |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D,cor, largura inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border3D</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cor</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.Color</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">opacidade</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border3D</span>
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **cor** | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| **largura** | _int_ | Largura da moldura. |
| **opacidade** | _int_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D,cor, largura e opacidade inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border3D</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border3D</span>
##### Descrição

Cria um tipo de moldura 3D com uma largura definida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **largura** | _double_ | Largura da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna uma moldura 3D do tipo inserido e com a largura inserida de cor preta.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border3D</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">double</span>, <span style="color: #FF8000">opacidade</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border3D</span>
##### Descrição

Cria um tipo de moldura 3D com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **largura** | _double_ | Largura da moldura. |
| **opacidade** | _double_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D, largura e opacidade inseridas de cor preta.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border3D</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">double</span>, <span style="color: #FF8000">opacidade</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border3D</span>
##### Descrição

Cria um tipo de moldura 3D com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **largura** | _double_ | Largura da moldura. |
| **opacidade** | _float_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D, largura e opacidade inseridas de cor preta.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border3D</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">double</span>, <span style="color: #FF8000">opacidade</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border3D</span>
##### Descrição

Cria um tipo de moldura 3D com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **largura** | _double_ | Largura da moldura. |
| **opacidade** | _int_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D, largura e opacidade inseridas de cor preta.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border3D</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border3D</span>
##### Descrição

Cria um tipo de moldura 3D com uma largura definida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **largura** | _float_ | Largura da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna uma moldura 3D do tipo inserido e com a largura inserida de cor preta.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border3D</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">float</span>, <span style="color: #FF8000">opacidade</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border3D</span>
##### Descrição

Cria um tipo de moldura 3D com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **largura** | _float_ | Largura da moldura. |
| **opacidade** | _double_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D, largura e opacidade inseridas de cor preta.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border3D</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">float</span>, <span style="color: #FF8000">opacidade</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border3D</span>
##### Descrição

Cria um tipo de moldura 3D com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **largura** | _float_ | Largura da moldura. |
| **opacidade** | _float_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D, largura e opacidade inseridas de cor preta.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border3D</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">float</span>, <span style="color: #FF8000">opacidade</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border3D</span>
##### Descrição

Cria um tipo de moldura 3D com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **largura** | _float_ | Largura da moldura. |
| **opacidade** | _int_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D, largura e opacidade inseridas de cor preta.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border3D</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">width</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border3D</span>
##### Descrição

Cria um tipo de moldura 3D.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **width** | _int_ |   |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna uma moldura 3D do tipo inserido e de cor preta.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border3D</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">opacidade</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border3D</span>
##### Descrição

Cria um tipo de moldura 3D com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **largura** | _int_ | Largura da moldura. |
| **opacidade** | _double_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D, largura e opacidade inseridas de cor preta.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border3D</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">opacidade</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border3D</span>
##### Descrição

Cria um tipo de moldura 3D com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **largura** | _int_ | Largura da moldura. |
| **opacidade** | _float_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D, largura e opacidade inseridas de cor preta.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">border3D</span>(<span style="color: #FF8000">moldura</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">opacidade</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.borders.Border3D</span>
##### Descrição

Cria um tipo de moldura 3D com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **moldura** | _string_ | Tipo de moldura. |
| **largura** | _int_ | Largura da moldura. |
| **opacidade** | _int_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D, largura e opacidade inseridas de cor preta.

---

## canvas

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">canvas</span>(<span style="color: #FF8000">doc</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.pdf.PdfDocument</span>, <span style="color: #FF8000">pageNum</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.pdf.canvas.PdfCanvas</span>
##### Descrição

Cria uma área de texto retangular.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **doc** | _com.itextpdf.kernel.pdf.PdfDocument_ |   |
| **pageNum** | _int_ |   |

##### Retorno

( _com.itextpdf.kernel.pdf.canvas.PdfCanvas_ )


---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">canvas</span>(<span style="color: #FF8000">page</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.pdf.PdfPage</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.pdf.canvas.PdfCanvas</span>
##### Descrição

Cria uma área de texto retangular.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **page** | _com.itextpdf.kernel.pdf.PdfPage_ |   |

##### Retorno

( _com.itextpdf.kernel.pdf.canvas.PdfCanvas_ )


---

## cell

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">cell</span>() : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.element.Cell</span>
##### Descrição

Cria uma célula de tabela.

##### Retorno

( _com.itextpdf.layout.element.Cell_ )

Retorna a célula criada.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">cell</span>(<span style="color: #FF8000">agregVertical</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">agregHorizontal</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.element.Cell</span>
##### Descrição

Cria uma célula de tabela, com agregação vertical ou horizontal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **agregVertical** | _int_ | Número de linhas agregadas. |
| **agregHorizontal** | _int_ | Número de colunas agregadas. |

##### Retorno

( _com.itextpdf.layout.element.Cell_ )

Retorna a célula criada.

---

## color

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">color</span>(<span style="color: #FF8000">color</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.Color</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _string_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.Color_ )


---

## colorCMYK

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">colorCMYK</span>(<span style="color: #FF8000">cyan</span>: <span style="font-weight: normal; font-style: italic;">double</span>, <span style="color: #FF8000">magenta</span>: <span style="font-weight: normal; font-style: italic;">double</span>, <span style="color: #FF8000">yellow</span>: <span style="font-weight: normal; font-style: italic;">double</span>, <span style="color: #FF8000">black</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.DeviceCmyk</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **cyan** | _double_ |   |
| **magenta** | _double_ |   |
| **yellow** | _double_ |   |
| **black** | _double_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.DeviceCmyk_ )


---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">colorCMYK</span>(<span style="color: #FF8000">cyan</span>: <span style="font-weight: normal; font-style: italic;">float</span>, <span style="color: #FF8000">magenta</span>: <span style="font-weight: normal; font-style: italic;">float</span>, <span style="color: #FF8000">yellow</span>: <span style="font-weight: normal; font-style: italic;">float</span>, <span style="color: #FF8000">black</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.DeviceCmyk</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **cyan** | _float_ |   |
| **magenta** | _float_ |   |
| **yellow** | _float_ |   |
| **black** | _float_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.DeviceCmyk_ )


---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">colorCMYK</span>(<span style="color: #FF8000">cyan</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">magenta</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">yellow</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">black</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.DeviceCmyk</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **cyan** | _int_ |   |
| **magenta** | _int_ |   |
| **yellow** | _int_ |   |
| **black** | _int_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.DeviceCmyk_ )


---

## colorGray

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">colorGray</span>(<span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.DeviceGray</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _double_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.DeviceGray_ )


---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">colorGray</span>(<span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.DeviceGray</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _float_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.DeviceGray_ )


---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">colorGray</span>(<span style="color: #FF8000">value</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.DeviceGray</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _int_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.DeviceGray_ )


---

## colorRGB

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">colorRGB</span>(<span style="color: #FF8000">red</span>: <span style="font-weight: normal; font-style: italic;">double</span>, <span style="color: #FF8000">green</span>: <span style="font-weight: normal; font-style: italic;">double</span>, <span style="color: #FF8000">blue</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.DeviceRgb</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **red** | _double_ |   |
| **green** | _double_ |   |
| **blue** | _double_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.DeviceRgb_ )


---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">colorRGB</span>(<span style="color: #FF8000">red</span>: <span style="font-weight: normal; font-style: italic;">float</span>, <span style="color: #FF8000">green</span>: <span style="font-weight: normal; font-style: italic;">float</span>, <span style="color: #FF8000">blue</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.DeviceRgb</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **red** | _float_ |   |
| **green** | _float_ |   |
| **blue** | _float_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.DeviceRgb_ )


---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">colorRGB</span>(<span style="color: #FF8000">red</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">green</span>: <span style="font-weight: normal; font-style: italic;">int</span>, <span style="color: #FF8000">blue</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.DeviceRgb</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **red** | _int_ |   |
| **green** | _int_ |   |
| **blue** | _int_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.DeviceRgb_ )


---

## extract

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">extract</span>(<span style="color: #FF8000">conteúdo</span>: <span style="font-weight: normal; font-style: italic;">java.io.InputStream</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Extrai o conteúdo de PDFs.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _java.io.InputStream_ | Conteúdo a ser extraído. |

##### Retorno

( _[Values](../../objects/Values)_ )

Retorna o conteudo extraído.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">extract</span>(<span style="color: #FF8000">conteúdo</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Extrai o conteúdo de PDFs.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _[File](../../objects/File)_ | Conteúdo a ser extraído. |

##### Retorno

( _[Values](../../objects/Values)_ )

Retorna o conteudo extraído.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">extract</span>(<span style="color: #FF8000">conteúdo</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Extrai o conteúdo de PDFs.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _[InputStream](../../objects/InputStream)_ | Conteúdo a ser extraído. |

##### Retorno

( _[Values](../../objects/Values)_ )

Retorna o conteudo extraído.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">extract</span>(<span style="color: #FF8000">armazenamento</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/Storage)</span>) : <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>
##### Descrição

Extrai o conteúdo de PDFs.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **armazenamento** | _[Storage](../../resources/Storage)_ | Caminho do armazenamento. |

##### Retorno

( _[Values](../../objects/Values)_ )

Retorna o conteúdo extraido.

---

## font

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">font</span>(<span style="color: #FF8000">armazenamento</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.font.PdfFont</span>
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **armazenamento** | _string_ | Caminho do armazenamento. |

##### Retorno

( _com.itextpdf.kernel.font.PdfFont_ )

Retorna o tipo de letra.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">font</span>(<span style="color: #FF8000">armazenamento</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.font.PdfFont</span>
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **armazenamento** | _[File](../../objects/File)_ | Caminho do armazenamento. |

##### Retorno

( _com.itextpdf.kernel.font.PdfFont_ )

Retorna o tipo de letra.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">font</span>(<span style="color: #FF8000">armazenamento</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>, <span style="color: #FF8000">codificação</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.font.PdfFont</span>
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **armazenamento** | _[File](../../objects/File)_ | Caminho do armazenamento. |
| **codificação** | _boolean_ | Codificação. |

##### Retorno

( _com.itextpdf.kernel.font.PdfFont_ )

Retorna o tipo de letra.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">font</span>(<span style="color: #FF8000">armazenamento</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>, <span style="color: #FF8000">codificação</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.font.PdfFont</span>
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **armazenamento** | _[File](../../objects/File)_ | Caminho do armazenamento. |
| **codificação** | _string_ | Codificação. |

##### Retorno

( _com.itextpdf.kernel.font.PdfFont_ )

Retorna o tipo de letra.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">font</span>(<span style="color: #FF8000">armazenamento</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>, <span style="color: #FF8000">codificação</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">embedded</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.font.PdfFont</span>
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **armazenamento** | _[File](../../objects/File)_ | Caminho do armazenamento. |
| **codificação** | _string_ | Codificação. |
| **embedded** | _boolean_ |   |

##### Retorno

( _com.itextpdf.kernel.font.PdfFont_ )

Retorna o tipo de letra.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">font</span>(<span style="color: #FF8000">armazenamento</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/Storage)</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.font.PdfFont</span>
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **armazenamento** | _[Storage](../../resources/Storage)_ | Caminho do armazenamento. |

##### Retorno

( _com.itextpdf.kernel.font.PdfFont_ )

Retorna o tipo de letra.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">font</span>(<span style="color: #FF8000">armazenamento</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/Storage)</span>, <span style="color: #FF8000">codificação</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.font.PdfFont</span>
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **armazenamento** | _[Storage](../../resources/Storage)_ | Caminho do armazenamento. |
| **codificação** | _boolean_ | Codificação. |

##### Retorno

( _com.itextpdf.kernel.font.PdfFont_ )

Retorna o tipo de letra.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">font</span>(<span style="color: #FF8000">armazenamento</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/Storage)</span>, <span style="color: #FF8000">codificação</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.font.PdfFont</span>
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **armazenamento** | _[Storage](../../resources/Storage)_ | Caminho do armazenamento. |
| **codificação** | _string_ | Codificação. |

##### Retorno

( _com.itextpdf.kernel.font.PdfFont_ )

Retorna o tipo de letra.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">font</span>(<span style="color: #FF8000">armazenamento</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/Storage)</span>, <span style="color: #FF8000">codificação</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">embedded</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.font.PdfFont</span>
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **armazenamento** | _[Storage](../../resources/Storage)_ | Caminho do armazenamento. |
| **codificação** | _string_ | Codificação. |
| **embedded** | _boolean_ |   |

##### Retorno

( _com.itextpdf.kernel.font.PdfFont_ )

Retorna o tipo de letra.

---

## getDocument

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">getDocument</span>() : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.Document</span>
##### Descrição

Obtém o objecto Document do iText para a estrutura do documento PDF.

##### Retorno

( _com.itextpdf.layout.Document_ )


---

## getPdfDocument

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">getPdfDocument</span>() : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.pdf.PdfDocument</span>
##### Descrição

Obtém o objecto PdfDocument do iText para a construção do documento PDF.

##### Retorno

( _com.itextpdf.kernel.pdf.PdfDocument_ )


---

## getPdfReader

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">getPdfReader</span>() : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.pdf.PdfReader</span>
##### Descrição

Obtém o objecto PdfReader do iText para a leitura do documento PDF.

##### Retorno

( _com.itextpdf.kernel.pdf.PdfReader_ )


---

## getPdfWriter

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">getPdfWriter</span>() : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.pdf.PdfWriter</span>
##### Descrição

Obtém o objecto PdfWriter do iText para a escrita dos bytes do arquivo PDF.

##### Retorno

( _com.itextpdf.kernel.pdf.PdfWriter_ )


---

## image

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">image</span>(<span style="color: #FF8000">file</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.element.Image</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _[File](../../objects/File)_ |   |

##### Retorno

( _com.itextpdf.layout.element.Image_ )


---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">image</span>(<span style="color: #FF8000">storage</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/Storage)</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.element.Image</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](../../resources/Storage)_ |   |

##### Retorno

( _com.itextpdf.layout.element.Image_ )


---

## init

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">init</span>() : <span style="font-weight: normal; font-style: italic;">[PDF](../../resources/PDF)</span>
##### Descrição

Cria um novo objeto de recurso para a construção de PDFs.

##### Como Usar

```javascript
const pdf = _pdf.init();
```

##### Retorno

( _[PDF](../../resources/PDF)_ )


---

## line

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">line</span>(<span style="color: #FF8000">tipo</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cor</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.Color</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">double</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer</span>
##### Descrição

Cria uma linha com tipo,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tipo** | _string_ | Tipo da linha. |
| **cor** | _com.itextpdf.kernel.colors.Color_ | Cor da linha. |
| **largura** | _double_ | Largura da linha. |

##### Retorno

( _com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer_ )

Retorna a linha personalizada criada.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">line</span>(<span style="color: #FF8000">tipo</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cor</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.Color</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer</span>
##### Descrição

Cria uma linha personalizada com tipo de moldura,cor, largura e definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tipo** | _string_ | Tipo da linha. |
| **cor** | _com.itextpdf.kernel.colors.Color_ | Cor da linha. |
| **largura** | _float_ | Largura da linha. |

##### Retorno

( _com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer_ )

Retorna a linha personalidade criada.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">line</span>(<span style="color: #FF8000">linha</span>: <span style="font-weight: normal; font-style: italic;">string</span>, <span style="color: #FF8000">cor</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.colors.Color</span>, <span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer</span>
##### Descrição

Cria um tipo de linha com cor e largura definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **linha** | _string_ | Tipo de linha. |
| **cor** | _com.itextpdf.kernel.colors.Color_ | Cor da linha. |
| **largura** | _int_ | Largura da linha. |

##### Retorno

( _com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer_ )

Retorna tipo de linha, cor e largura inseridas.

---

## newDocument

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">newDocument</span>() : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.Document</span>
##### Descrição

Cria um novo documento.

##### Retorno

( _com.itextpdf.layout.Document_ )


---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">newDocument</span>(<span style="color: #FF8000">nPaginas</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.geom.PageSize</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.Document</span>
##### Descrição

Cria um novo documento PDF com o número de páginas inserida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **nPaginas** | _com.itextpdf.kernel.geom.PageSize_ | Número de páginas. |

##### Retorno

( _com.itextpdf.layout.Document_ )

Retorna um novo documento com o número de páginas inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">newDocument</span>(<span style="color: #FF8000">out</span>: <span style="font-weight: normal; font-style: italic;">java.io.OutputStream</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.Document</span>
##### Descrição

Cria um novo documento PDF.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _java.io.OutputStream_ |   |

##### Retorno

( _com.itextpdf.layout.Document_ )


---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">newDocument</span>(<span style="color: #FF8000">armazenamento</span>: <span style="font-weight: normal; font-style: italic;">java.io.OutputStream</span>, <span style="color: #FF8000">nPaginas</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.geom.PageSize</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.Document</span>
##### Descrição

Cria um novo documento PDF com o número de páginas inseridas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **armazenamento** | _java.io.OutputStream_ | Caminho do ficheiro. |
| **nPaginas** | _com.itextpdf.kernel.geom.PageSize_ | Número de páginas. |

##### Retorno

( _com.itextpdf.layout.Document_ )

Retorna um novo documento com o número de páginas inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">newDocument</span>(<span style="color: #FF8000">armazenamento</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/Storage) &#124; [File](../../objects/File)</span>, <span style="color: #FF8000">nPaginas</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.geom.PageSize</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.Document</span>
##### Descrição

Cria um novo documento PDF com o número de páginas inseridas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **armazenamento** | _[Storage](../../resources/Storage) &#124; [File](../../objects/File)_ | Caminho do ficheiro. |
| **nPaginas** | _com.itextpdf.kernel.geom.PageSize_ | Número de páginas. |

##### Retorno

( _com.itextpdf.layout.Document_ )

Retorna um novo documento com o número de páginas inseridas.

---

## newPdfDocument

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">newPdfDocument</span>() : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.pdf.PdfDocument</span>
##### Descrição

Cria um novo documento PDF.

##### Retorno

( _com.itextpdf.kernel.pdf.PdfDocument_ )


---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">newPdfDocument</span>(<span style="color: #FF8000">armazenamento</span>: <span style="font-weight: normal; font-style: italic;">java.io.OutputStream</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.pdf.PdfDocument</span>
##### Descrição

Cria um novo documento PDF.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **armazenamento** | _java.io.OutputStream_ | Caminho do ficheiro. |

##### Retorno

( _com.itextpdf.kernel.pdf.PdfDocument_ )


---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">newPdfDocument</span>(<span style="color: #FF8000">armazenamento</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/Storage) &#124; [File](../../objects/File)</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.pdf.PdfDocument</span>
##### Descrição

Cria um novo documento PDF.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **armazenamento** | _[Storage](../../resources/Storage) &#124; [File](../../objects/File)_ | Caminho do ficheiro. |

##### Retorno

( _com.itextpdf.kernel.pdf.PdfDocument_ )


---

## openPdfDocument

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">openPdfDocument</span>(<span style="color: #FF8000">caminho</span>: <span style="font-weight: normal; font-style: italic;">java.io.InputStream</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.pdf.PdfDocument</span>
##### Descrição

Abre o documento PDF referente ao caminho inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _java.io.InputStream_ | Caminho do ficheiro. |

##### Retorno

( _com.itextpdf.kernel.pdf.PdfDocument_ )

Retorna o documento PDF aberto.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">openPdfDocument</span>(<span style="color: #FF8000">in</span>: <span style="font-weight: normal; font-style: italic;">java.io.InputStream</span>, <span style="color: #FF8000">out</span>: <span style="font-weight: normal; font-style: italic;">java.io.OutputStream</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.pdf.PdfDocument</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _java.io.InputStream_ |   |
| **out** | _java.io.OutputStream_ |   |

##### Retorno

( _com.itextpdf.kernel.pdf.PdfDocument_ )


---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">openPdfDocument</span>(<span style="color: #FF8000">in</span>: <span style="font-weight: normal; font-style: italic;">java.io.InputStream</span>, <span style="color: #FF8000">out</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/Storage) &#124; [File](../../objects/File)</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.pdf.PdfDocument</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _java.io.InputStream_ |   |
| **out** | _[Storage](../../resources/Storage) &#124; [File](../../objects/File)_ |   |

##### Retorno

( _com.itextpdf.kernel.pdf.PdfDocument_ )


---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">openPdfDocument</span>(<span style="color: #FF8000">caminho</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/Storage) &#124; [File](../../objects/File)</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.pdf.PdfDocument</span>
##### Descrição

Abre o documento PDF referente ao caminho inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _[Storage](../../resources/Storage) &#124; [File](../../objects/File)_ | Caminho do ficheiro. |

##### Retorno

( _com.itextpdf.kernel.pdf.PdfDocument_ )

Retorna o documento PDF aberto.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">openPdfDocument</span>(<span style="color: #FF8000">in</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/Storage) &#124; [File](../../objects/File)</span>, <span style="color: #FF8000">out</span>: <span style="font-weight: normal; font-style: italic;">java.io.OutputStream</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.pdf.PdfDocument</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[Storage](../../resources/Storage) &#124; [File](../../objects/File)_ |   |
| **out** | _java.io.OutputStream_ |   |

##### Retorno

( _com.itextpdf.kernel.pdf.PdfDocument_ )


---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">openPdfDocument</span>(<span style="color: #FF8000">in</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/Storage) &#124; [File](../../objects/File)</span>, <span style="color: #FF8000">out</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/Storage) &#124; [File](../../objects/File)</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.pdf.PdfDocument</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[Storage](../../resources/Storage) &#124; [File](../../objects/File)_ |   |
| **out** | _[Storage](../../resources/Storage) &#124; [File](../../objects/File)_ |   |

##### Retorno

( _com.itextpdf.kernel.pdf.PdfDocument_ )


---

## pageSize

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">pageSize</span>(<span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">float</span>, <span style="color: #FF8000">altura</span>: <span style="font-weight: normal; font-style: italic;">float</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.geom.PageSize</span>
##### Descrição

Obtém a definição do tamanho da página atráves da largura e altura.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **largura** | _float_ | Largura da página. |
| **altura** | _float_ | Altura da página. |

##### Retorno

( _com.itextpdf.kernel.geom.PageSize_ )

Definição da página.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">pageSize</span>(<span style="color: #FF8000">page</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.kernel.geom.PageSize</span>
##### Descrição

Obtém a definição do tamanho de página, suporta:<br><ul><li>A0</li><li>A1</li><li>A2</li><li>A3</li><li>A4</li><li>A5</li><li>A6</li><li>A7</li><li>A8</li><li>A9</li><li>A10</li><li>B0</li><li>B1</li><li>B2</li><li>B3</li><li>B4</li><li>B5</li><li>B6</li><li>B7</li><li>B8</li><li>B9</li><li>B10</li><li>default</li><li>executive</li><li>ledger</li><li>legal</li><li>letter</li><li>tabloid</li></ul>

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **page** | _string_ |   |

##### Retorno

( _com.itextpdf.kernel.geom.PageSize_ )


---

## paragraph

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">paragraph</span>(<span style="color: #FF8000">text</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.element.Paragraph</span>
##### Descrição

Cria um parágrafo.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **text** | _string_ |   |

##### Retorno

( _com.itextpdf.layout.element.Paragraph_ )


---

## setDocument

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">setDocument</span>(<span style="color: #FF8000">document</span>: <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.Document</span>) : <span style="font-weight: normal; font-style: italic;">[PDF](../../resources/PDF)</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **document** | _com.itextpdf.layout.Document_ |   |

##### Retorno

( _[PDF](../../resources/PDF)_ )


---

## table

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">table</span>(<span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">double[]</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.element.Table</span>
##### Descrição

Cria uma tabela com colunas da largura definida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **largura** | _double[]_ | Largura das colunas da tabela. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna uma tabela com a largura das colunas inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">table</span>(<span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">double[]</span>, <span style="color: #FF8000">colunaLarga</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.element.Table</span>
##### Descrição

Cria uma tabela.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **largura** | _double[]_ | Largura das colunas. |
| **colunaLarga** | _boolean_ | Coluna de tamanho grande. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna a tabela criada.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">table</span>(<span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">float[]</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.element.Table</span>
##### Descrição

Cria uma tabela com colunas da largura definida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **largura** | _float[]_ | Largura das colunas da tabela. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna uma tabela com a largura das colunas inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">table</span>(<span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">float[]</span>, <span style="color: #FF8000">colunaLarga</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.element.Table</span>
##### Descrição

Cria uma tabela.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **largura** | _float[]_ | Largura das colunas. |
| **colunaLarga** | _boolean_ | Coluna de tamanho grande. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna a tabela criada.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">table</span>(<span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">[I</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.element.Table</span>
##### Descrição

Cria uma tabela com colunas da largura definida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **largura** | _[I_ | Largura das colunas da tabela. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna uma tabela com a largura das colunas inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">table</span>(<span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">[I</span>, <span style="color: #FF8000">colunaLarga</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.element.Table</span>
##### Descrição

Cria uma tabela.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **largura** | _[I_ | Largura das colunas. |
| **colunaLarga** | _boolean_ | Coluna de tamanho grande. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna a tabela criada.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">table</span>(<span style="color: #FF8000">colunas</span>: <span style="font-weight: normal; font-style: italic;">int</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.element.Table</span>
##### Descrição

Cria uma tabela.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **colunas** | _int_ | Número de colunas. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna a tabela criada.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">table</span>(<span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">java.util.List</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.element.Table</span>
##### Descrição

Cria uma tabela com a largura das colunas definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **largura** | _java.util.List_ | Largura das colunas da tabela. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna uma tabela com colunas da largura inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">table</span>(<span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">java.util.List</span>, <span style="color: #FF8000">colunaLarga</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.element.Table</span>
##### Descrição

Cria uma tabela.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **largura** | _java.util.List_ | Largura das colunas. |
| **colunaLarga** | _boolean_ | Coluna de tamanho grande. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna a tabela criada.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">table</span>(<span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.element.Table</span>
##### Descrição

Cria uma tabela com colunas da largura definida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **largura** | _[Values](../../objects/Values)_ | Largura das colunas da tabela. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna uma tabela com a largura das colunas inseridas.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">table</span>(<span style="color: #FF8000">largura</span>: <span style="font-weight: normal; font-style: italic;">[Values](../../objects/Values)</span>, <span style="color: #FF8000">colunaLarga</span>: <span style="font-weight: normal; font-style: italic;">boolean</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.element.Table</span>
##### Descrição

Cria uma tabela.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **largura** | _[Values](../../objects/Values)_ | Largura das colunas. |
| **colunaLarga** | _boolean_ | Coluna de tamanho grande. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna a tabela criada.

---

## text

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">text</span>(<span style="color: #FF8000">conteúdo</span>: <span style="font-weight: normal; font-style: italic;">string</span>) : <span style="font-weight: normal; font-style: italic;">com.itextpdf.layout.element.Text</span>
##### Descrição

Cria um novo texto com o conteúdo inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _string_ | Conteúdo para ser criado. |

##### Retorno

( _com.itextpdf.layout.element.Text_ )

Retorna o conteudo do texto.

---

## toHTML

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">toHTML</span>(<span style="color: #FF8000">conteúdo</span>: <span style="font-weight: normal; font-style: italic;">java.io.InputStream</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Passa para HTML o conteúdo inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _java.io.InputStream_ | Conteúdo a passar pra HTML. |

##### Retorno

( _string_ )

Retorna o HTML.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">toHTML</span>(<span style="color: #FF8000">conteúdo</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Passa para HTML o conteúdo inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _[File](../../objects/File)_ | Conteúdo a passar pra HTML. |

##### Retorno

( _string_ )

Retorna o HTML.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">toHTML</span>(<span style="color: #FF8000">conteúdo</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Passa para HTML o conteúdo inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _[InputStream](../../objects/InputStream)_ | Conteúdo a passar pra HTML. |

##### Retorno

( _string_ )

Retorna o HTML.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">toHTML</span>(<span style="color: #FF8000">conteúdo</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/Storage)</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Passa para HTML o conteúdo inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _[Storage](../../resources/Storage)_ | Conteúdo a passar pra HTML. |

##### Retorno

( _string_ )

Retorna o HTML.

---

## toText

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">toText</span>(<span style="color: #FF8000">conteúdo</span>: <span style="font-weight: normal; font-style: italic;">java.io.InputStream</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Passa o conteúdo inserido para texto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _java.io.InputStream_ | Conteúdo a passar para texto. |

##### Retorno

( _string_ )

Retorna o HTML.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">toText</span>(<span style="color: #FF8000">conteúdo</span>: <span style="font-weight: normal; font-style: italic;">[File](../../objects/File)</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Passa o conteúdo inserido para texto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _[File](../../objects/File)_ | Conteúdo a passar para texto. |

##### Retorno

( _string_ )

Retorna o HTML.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">toText</span>(<span style="color: #FF8000">conteúdo</span>: <span style="font-weight: normal; font-style: italic;">[InputStream](../../objects/InputStream)</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Passa o conteúdo inserido para texto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _[InputStream](../../objects/InputStream)_ | Conteúdo a passar para texto. |

##### Retorno

( _string_ )

Retorna o HTML.

---

#### <span style="font-weight: normal">_pdf</span>.<span style="color: #008000">toText</span>(<span style="color: #FF8000">conteúdo</span>: <span style="font-weight: normal; font-style: italic;">[Storage](../../resources/Storage)</span>) : <span style="font-weight: normal; font-style: italic;">string</span>
##### Descrição

Passa o conteúdo inserido para texto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _[Storage](../../resources/Storage)_ | Conteúdo a passar para texto. |

##### Retorno

( _string_ )

Retorna o HTML.

---

