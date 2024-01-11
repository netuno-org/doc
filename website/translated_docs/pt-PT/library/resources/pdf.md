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
##### Descrição

Cria uma área de quebra que termina um tipo de área anterior.

##### Retorno

( _com.itextpdf.layout.element.AreaBreak_ )

Termina a área anterior e retorna a nova área.

---

#### _pdf.areaBreak(nPaginas: _com.itextpdf.kernel.geom.PageSize_) : _com.itextpdf.layout.element.AreaBreak_
##### Descrição

Cria uma área de quebra que termina um tipo de área anterior.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| nPaginas | _com.itextpdf.kernel.geom.PageSize_ | Tamanho do novo conteúdo. |

##### Retorno

( _com.itextpdf.layout.element.AreaBreak_ )

Termina a área anterior e retorna a nova área.

---

#### _pdf.areaBreak(tipo: string) : _com.itextpdf.layout.element.AreaBreak_
##### Descrição

Cria uma área de quebra que termina um tipo de área anterior.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tipo | string | Tipo da nova área. |

##### Retorno

( _com.itextpdf.layout.element.AreaBreak_ )

Termina a área anterior e retorna a nova área.

---

## border

---

#### _pdf.border(moldura: string) : _com.itextpdf.layout.borders.Border_
##### Descrição

Cria um tipo de moldura.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna uma moldura do tipo inserido.

---

#### _pdf.border(moldura: string, cor: _com.itextpdf.kernel.colors.Color_, largura: _double_) : _com.itextpdf.layout.borders.Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| largura | _double_ | Largura da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### _pdf.border(moldura: string, cor: _com.itextpdf.kernel.colors.Color_, largura: _double_, opacity: _double_) : _com.itextpdf.layout.borders.Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| largura | _double_ | Largura da moldura. |
| opacity | _double_ |   |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### _pdf.border(moldura: string, cor: _com.itextpdf.kernel.colors.Color_, largura: _double_, opacity: _float_) : _com.itextpdf.layout.borders.Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| largura | _double_ | Largura da moldura. |
| opacity | _float_ |   |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### _pdf.border(moldura: string, cor: _com.itextpdf.kernel.colors.Color_, largura: _double_, opacity: _int_) : _com.itextpdf.layout.borders.Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| largura | _double_ | Largura da moldura. |
| opacity | _int_ |   |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### _pdf.border(moldura: string, cor: _com.itextpdf.kernel.colors.Color_, largura: _float_) : _com.itextpdf.layout.borders.Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| largura | _float_ | Largura da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### _pdf.border(moldura: string, cor: _com.itextpdf.kernel.colors.Color_, largura: _float_, opacity: _double_) : _com.itextpdf.layout.borders.Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| largura | _float_ | Largura da moldura. |
| opacity | _double_ |   |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### _pdf.border(moldura: string, cor: _com.itextpdf.kernel.colors.Color_, largura: _float_, opacidade: _float_) : _com.itextpdf.layout.borders.Border_
##### Descrição

Cria uma border personalizada com tipo de moldura, cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| largura | _float_ | Largura da moldura. |
| opacidade | _float_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna a moldura personalizada criada.

---

#### _pdf.border(moldura: string, cor: _com.itextpdf.kernel.colors.Color_, largura: _float_, opacidade: _int_) : _com.itextpdf.layout.borders.Border_
##### Descrição

Cria um tipo de moldura, cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| largura | _float_ | Largura da moldura. |
| opacidade | _int_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, cor, largura e opacidade inseridas.

---

#### _pdf.border(moldura: string, cor: _com.itextpdf.kernel.colors.Color_, largura: _int_) : _com.itextpdf.layout.borders.Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| largura | _int_ | Largura da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### _pdf.border(moldura: string, cor: _com.itextpdf.kernel.colors.Color_, largura: _int_, opacity: _double_) : _com.itextpdf.layout.borders.Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| largura | _int_ | Largura da moldura. |
| opacity | _double_ |   |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### _pdf.border(moldura: string, cor: _com.itextpdf.kernel.colors.Color_, largura: _int_, opacity: _float_) : _com.itextpdf.layout.borders.Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| largura | _int_ | Largura da moldura. |
| opacity | _float_ |   |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### _pdf.border(moldura: string, cor: _com.itextpdf.kernel.colors.Color_, largura: _int_, opacity: _int_) : _com.itextpdf.layout.borders.Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| largura | _int_ | Largura da moldura. |
| opacity | _int_ |   |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### _pdf.border(moldura: string, largura: _double_) : _com.itextpdf.layout.borders.Border_
##### Descrição

Cria um tipo de moldura com uma largura definida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _double_ | Largura da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna uma moldura do tipo inserido e com a largura inserida de cor preta.

---

#### _pdf.border(moldura: string, largura: _double_, opacidade: _double_) : _com.itextpdf.layout.borders.Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _double_ | Largura da moldura. |
| opacidade | _double_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e opacidade inseridas de cor preta.

---

#### _pdf.border(moldura: string, largura: _double_, opacidade: _float_) : _com.itextpdf.layout.borders.Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _double_ | Largura da moldura. |
| opacidade | _float_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e opacidade inseridas de cor preta.

---

#### _pdf.border(moldura: string, cor: _double_, largura: _int_) : _com.itextpdf.layout.borders.Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _double_ | Cor da moldura. |
| largura | _int_ | Largura da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e com a cor inseridas.

---

#### _pdf.border(moldura: string, largura: _float_) : _com.itextpdf.layout.borders.Border_
##### Descrição

Cria um tipo de moldura com uma largura definida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _float_ | Largura da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna uma moldura do tipo inserido e com a largura inserida de cor preta.

---

#### _pdf.border(moldura: string, largura: _float_, opacidade: _double_) : _com.itextpdf.layout.borders.Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _float_ | Largura da moldura. |
| opacidade | _double_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e opacidade inseridas de cor preta.

---

#### _pdf.border(moldura: string, largura: _float_, opacidade: _float_) : _com.itextpdf.layout.borders.Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _float_ | Largura da moldura. |
| opacidade | _float_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e opacidade inseridas de cor preta.

---

#### _pdf.border(moldura: string, largura: _float_, opacidade: _int_) : _com.itextpdf.layout.borders.Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _float_ | Largura da moldura. |
| opacidade | _int_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e opacidade inseridas de cor preta.

---

#### _pdf.border(moldura: string, largura: _int_) : _com.itextpdf.layout.borders.Border_
##### Descrição

Cria um tipo de moldura com uma largura definida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _int_ | Largura da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna uma moldura do tipo inserido e com a largura inserida de cor preta.

---

#### _pdf.border(moldura: string, largura: _int_, opacidade: _double_) : _com.itextpdf.layout.borders.Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _int_ | Largura da moldura. |
| opacidade | _double_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e opacidade inseridas de cor preta.

---

#### _pdf.border(moldura: string, largura: _int_, opacidade: _float_) : _com.itextpdf.layout.borders.Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _int_ | Largura da moldura. |
| opacidade | _float_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e opacidade inseridas de cor preta.

---

#### _pdf.border(moldura: string, largura: _int_, opacidade: _int_) : _com.itextpdf.layout.borders.Border_
##### Descrição

Cria um tipo de moldura com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _int_ | Largura da moldura. |
| opacidade | _int_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border_ )

Retorna um tipo de moldura, largura e opacidade inseridas de cor preta.

---

## border3D

---

#### _pdf.border3D(moldura: string) : _com.itextpdf.layout.borders.Border3D_
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D,cor, largura inseridas.

---

#### _pdf.border3D(moldura: string, cor: _com.itextpdf.kernel.colors.Color_, largura: _double_) : _com.itextpdf.layout.borders.Border3D_
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| largura | _double_ | Largura da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D,cor, largura inseridas.

---

#### _pdf.border3D(moldura: string, cor: _com.itextpdf.kernel.colors.Color_, largura: _double_, opacity: _double_) : _com.itextpdf.layout.borders.Border3D_
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| largura | _double_ | Largura da moldura. |
| opacity | _double_ |   |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D,cor, largura inseridas.

---

#### _pdf.border3D(moldura: string, cor: _com.itextpdf.kernel.colors.Color_, largura: _double_, opacity: _float_) : _com.itextpdf.layout.borders.Border3D_
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| largura | _double_ | Largura da moldura. |
| opacity | _float_ |   |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D,cor, largura inseridas.

---

#### _pdf.border3D(moldura: string, cor: _com.itextpdf.kernel.colors.Color_, largura: _double_, opacity: _int_) : _com.itextpdf.layout.borders.Border3D_
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| largura | _double_ | Largura da moldura. |
| opacity | _int_ |   |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D,cor, largura inseridas.

---

#### _pdf.border3D(moldura: string, cor: _com.itextpdf.kernel.colors.Color_, largura: _float_) : _com.itextpdf.layout.borders.Border3D_
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| largura | _float_ | Largura da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D,cor, largura inseridas.

---

#### _pdf.border3D(moldura: string, cor: _com.itextpdf.kernel.colors.Color_, largura: _float_, opacity: _double_) : _com.itextpdf.layout.borders.Border3D_
##### Descrição

Cria um tipo de moldura 3D, cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| largura | _float_ | Largura da moldura. |
| opacity | _double_ |   |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D,cor, largura inseridas.

---

#### _pdf.border3D(moldura: string, cor: _com.itextpdf.kernel.colors.Color_, largura: _float_, opacidade: _float_) : _com.itextpdf.layout.borders.Border3D_
##### Descrição

Cria uma border 3D personalizada com tipo de moldura,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| largura | _float_ | Largura da moldura. |
| opacidade | _float_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna a moldura 3D personalizada criada.

---

#### _pdf.border3D(moldura: string, cor: _com.itextpdf.kernel.colors.Color_, largura: _float_, opacidade: _int_) : _com.itextpdf.layout.borders.Border3D_
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| largura | _float_ | Largura da moldura. |
| opacidade | _int_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D, cor, largura e opacidade inseridas.

---

#### _pdf.border3D(moldura: string, cor: _com.itextpdf.kernel.colors.Color_, largura: _int_) : _com.itextpdf.layout.borders.Border3D_
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| largura | _int_ | Largura da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D,cor, largura inseridas.

---

#### _pdf.border3D(moldura: string, cor: _com.itextpdf.kernel.colors.Color_, largura: _int_, opacity: _double_) : _com.itextpdf.layout.borders.Border3D_
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| largura | _int_ | Largura da moldura. |
| opacity | _double_ |   |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D,cor, largura inseridas.

---

#### _pdf.border3D(moldura: string, cor: _com.itextpdf.kernel.colors.Color_, largura: _int_, opacity: _float_) : _com.itextpdf.layout.borders.Border3D_
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| largura | _int_ | Largura da moldura. |
| opacity | _float_ |   |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D,cor, largura inseridas.

---

#### _pdf.border3D(moldura: string, cor: _com.itextpdf.kernel.colors.Color_, largura: _int_, opacidade: _int_) : _com.itextpdf.layout.borders.Border3D_
##### Descrição

Cria um tipo de moldura 3D,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| cor | _com.itextpdf.kernel.colors.Color_ | Cor da moldura. |
| largura | _int_ | Largura da moldura. |
| opacidade | _int_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D,cor, largura e opacidade inseridas.

---

#### _pdf.border3D(moldura: string, largura: _double_) : _com.itextpdf.layout.borders.Border3D_
##### Descrição

Cria um tipo de moldura 3D com uma largura definida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _double_ | Largura da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna uma moldura 3D do tipo inserido e com a largura inserida de cor preta.

---

#### _pdf.border3D(moldura: string, largura: _double_, opacidade: _double_) : _com.itextpdf.layout.borders.Border3D_
##### Descrição

Cria um tipo de moldura 3D com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _double_ | Largura da moldura. |
| opacidade | _double_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D, largura e opacidade inseridas de cor preta.

---

#### _pdf.border3D(moldura: string, largura: _double_, opacidade: _float_) : _com.itextpdf.layout.borders.Border3D_
##### Descrição

Cria um tipo de moldura 3D com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _double_ | Largura da moldura. |
| opacidade | _float_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D, largura e opacidade inseridas de cor preta.

---

#### _pdf.border3D(moldura: string, largura: _double_, opacidade: _int_) : _com.itextpdf.layout.borders.Border3D_
##### Descrição

Cria um tipo de moldura 3D com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _double_ | Largura da moldura. |
| opacidade | _int_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D, largura e opacidade inseridas de cor preta.

---

#### _pdf.border3D(moldura: string, largura: _float_) : _com.itextpdf.layout.borders.Border3D_
##### Descrição

Cria um tipo de moldura 3D com uma largura definida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _float_ | Largura da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna uma moldura 3D do tipo inserido e com a largura inserida de cor preta.

---

#### _pdf.border3D(moldura: string, largura: _float_, opacidade: _double_) : _com.itextpdf.layout.borders.Border3D_
##### Descrição

Cria um tipo de moldura 3D com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _float_ | Largura da moldura. |
| opacidade | _double_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D, largura e opacidade inseridas de cor preta.

---

#### _pdf.border3D(moldura: string, largura: _float_, opacidade: _float_) : _com.itextpdf.layout.borders.Border3D_
##### Descrição

Cria um tipo de moldura 3D com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _float_ | Largura da moldura. |
| opacidade | _float_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D, largura e opacidade inseridas de cor preta.

---

#### _pdf.border3D(moldura: string, largura: _float_, opacidade: _int_) : _com.itextpdf.layout.borders.Border3D_
##### Descrição

Cria um tipo de moldura 3D com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _float_ | Largura da moldura. |
| opacidade | _int_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D, largura e opacidade inseridas de cor preta.

---

#### _pdf.border3D(moldura: string, width: _int_) : _com.itextpdf.layout.borders.Border3D_
##### Descrição

Cria um tipo de moldura 3D.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| width | _int_ |   |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna uma moldura 3D do tipo inserido e de cor preta.

---

#### _pdf.border3D(moldura: string, largura: _int_, opacidade: _double_) : _com.itextpdf.layout.borders.Border3D_
##### Descrição

Cria um tipo de moldura 3D com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _int_ | Largura da moldura. |
| opacidade | _double_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D, largura e opacidade inseridas de cor preta.

---

#### _pdf.border3D(moldura: string, largura: _int_, opacidade: _float_) : _com.itextpdf.layout.borders.Border3D_
##### Descrição

Cria um tipo de moldura 3D com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _int_ | Largura da moldura. |
| opacidade | _float_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D, largura e opacidade inseridas de cor preta.

---

#### _pdf.border3D(moldura: string, largura: _int_, opacidade: _int_) : _com.itextpdf.layout.borders.Border3D_
##### Descrição

Cria um tipo de moldura 3D com uma largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| moldura | string | Tipo de moldura. |
| largura | _int_ | Largura da moldura. |
| opacidade | _int_ | Opacidade da moldura. |

##### Retorno

( _com.itextpdf.layout.borders.Border3D_ )

Retorna um tipo de moldura 3D, largura e opacidade inseridas de cor preta.

---

## canvas

---

#### _pdf.canvas(doc: _com.itextpdf.kernel.pdf.PdfDocument_, pageNum: _int_) : _com.itextpdf.kernel.pdf.canvas.PdfCanvas_
##### Descrição

Cria uma área de texto retangular.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| doc | _com.itextpdf.kernel.pdf.PdfDocument_ |   |
| pageNum | _int_ |   |

##### Retorno

( _com.itextpdf.kernel.pdf.canvas.PdfCanvas_ )


---

#### _pdf.canvas(page: _com.itextpdf.kernel.pdf.PdfPage_) : _com.itextpdf.kernel.pdf.canvas.PdfCanvas_
##### Descrição

Cria uma área de texto retangular.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| page | _com.itextpdf.kernel.pdf.PdfPage_ |   |

##### Retorno

( _com.itextpdf.kernel.pdf.canvas.PdfCanvas_ )


---

## cell

---

#### _pdf.cell() : _com.itextpdf.layout.element.Cell_
##### Descrição

Cria uma célula de tabela.

##### Retorno

( _com.itextpdf.layout.element.Cell_ )

Retorna a célula criada.

---

#### _pdf.cell(agregVertical: _int_, agregHorizontal: _int_) : _com.itextpdf.layout.element.Cell_
##### Descrição

Cria uma célula de tabela, com agregação vertical ou horizontal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| agregVertical | _int_ | Número de linhas agregadas. |
| agregHorizontal | _int_ | Número de colunas agregadas. |

##### Retorno

( _com.itextpdf.layout.element.Cell_ )

Retorna a célula criada.

---

## color

---

#### _pdf.color(color: string) : _com.itextpdf.kernel.colors.Color_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| color | string |   |

##### Retorno

( _com.itextpdf.kernel.colors.Color_ )


---

## colorCMYK

---

#### _pdf.colorCMYK(cyan: _double_, magenta: _double_, yellow: _double_, black: _double_) : _com.itextpdf.kernel.colors.DeviceCmyk_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| cyan | _double_ |   |
| magenta | _double_ |   |
| yellow | _double_ |   |
| black | _double_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.DeviceCmyk_ )


---

#### _pdf.colorCMYK(cyan: _float_, magenta: _float_, yellow: _float_, black: _float_) : _com.itextpdf.kernel.colors.DeviceCmyk_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| cyan | _float_ |   |
| magenta | _float_ |   |
| yellow | _float_ |   |
| black | _float_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.DeviceCmyk_ )


---

#### _pdf.colorCMYK(cyan: _int_, magenta: _int_, yellow: _int_, black: _int_) : _com.itextpdf.kernel.colors.DeviceCmyk_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| cyan | _int_ |   |
| magenta | _int_ |   |
| yellow | _int_ |   |
| black | _int_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.DeviceCmyk_ )


---

## colorGray

---

#### _pdf.colorGray(value: _double_) : _com.itextpdf.kernel.colors.DeviceGray_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| value | _double_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.DeviceGray_ )


---

#### _pdf.colorGray(value: _float_) : _com.itextpdf.kernel.colors.DeviceGray_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| value | _float_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.DeviceGray_ )


---

#### _pdf.colorGray(value: _int_) : _com.itextpdf.kernel.colors.DeviceGray_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| value | _int_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.DeviceGray_ )


---

## colorRGB

---

#### _pdf.colorRGB(red: _double_, green: _double_, blue: _double_) : _com.itextpdf.kernel.colors.DeviceRgb_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| red | _double_ |   |
| green | _double_ |   |
| blue | _double_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.DeviceRgb_ )


---

#### _pdf.colorRGB(red: _float_, green: _float_, blue: _float_) : _com.itextpdf.kernel.colors.DeviceRgb_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| red | _float_ |   |
| green | _float_ |   |
| blue | _float_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.DeviceRgb_ )


---

#### _pdf.colorRGB(red: _int_, green: _int_, blue: _int_) : _com.itextpdf.kernel.colors.DeviceRgb_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| red | _int_ |   |
| green | _int_ |   |
| blue | _int_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.DeviceRgb_ )


---

## extract

---

#### _pdf.extract(conteúdo: _java.io.InputStream_) : _[Values](../../objects/Values)_
##### Descrição

Extrai o conteúdo de PDFs.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | _java.io.InputStream_ | Conteúdo a ser extraído. |

##### Retorno

( _[Values](../../objects/Values)_ )

Retorna o conteudo extraído.

---

#### _pdf.extract(conteúdo: _[File](../../objects/File)_) : _[Values](../../objects/Values)_
##### Descrição

Extrai o conteúdo de PDFs.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | _[File](../../objects/File)_ | Conteúdo a ser extraído. |

##### Retorno

( _[Values](../../objects/Values)_ )

Retorna o conteudo extraído.

---

#### _pdf.extract(conteúdo: _[InputStream](../../objects/InputStream)_) : _[Values](../../objects/Values)_
##### Descrição

Extrai o conteúdo de PDFs.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | _[InputStream](../../objects/InputStream)_ | Conteúdo a ser extraído. |

##### Retorno

( _[Values](../../objects/Values)_ )

Retorna o conteudo extraído.

---

#### _pdf.extract(armazenamento: _[Storage](../../resources/Storage)_) : _[Values](../../objects/Values)_
##### Descrição

Extrai o conteúdo de PDFs.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _[Storage](../../resources/Storage)_ | Caminho do armazenamento. |

##### Retorno

( _[Values](../../objects/Values)_ )

Retorna o conteúdo extraido.

---

## font

---

#### _pdf.font(armazenamento: string) : _com.itextpdf.kernel.font.PdfFont_
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | string | Caminho do armazenamento. |

##### Retorno

( _com.itextpdf.kernel.font.PdfFont_ )

Retorna o tipo de letra.

---

#### _pdf.font(armazenamento: _[File](../../objects/File)_) : _com.itextpdf.kernel.font.PdfFont_
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _[File](../../objects/File)_ | Caminho do armazenamento. |

##### Retorno

( _com.itextpdf.kernel.font.PdfFont_ )

Retorna o tipo de letra.

---

#### _pdf.font(armazenamento: _[File](../../objects/File)_, codificação: _boolean_) : _com.itextpdf.kernel.font.PdfFont_
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _[File](../../objects/File)_ | Caminho do armazenamento. |
| codificação | _boolean_ | Codificação. |

##### Retorno

( _com.itextpdf.kernel.font.PdfFont_ )

Retorna o tipo de letra.

---

#### _pdf.font(armazenamento: _[File](../../objects/File)_, codificação: string) : _com.itextpdf.kernel.font.PdfFont_
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _[File](../../objects/File)_ | Caminho do armazenamento. |
| codificação | string | Codificação. |

##### Retorno

( _com.itextpdf.kernel.font.PdfFont_ )

Retorna o tipo de letra.

---

#### _pdf.font(armazenamento: _[File](../../objects/File)_, codificação: string, embedded: _boolean_) : _com.itextpdf.kernel.font.PdfFont_
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _[File](../../objects/File)_ | Caminho do armazenamento. |
| codificação | string | Codificação. |
| embedded | _boolean_ |   |

##### Retorno

( _com.itextpdf.kernel.font.PdfFont_ )

Retorna o tipo de letra.

---

#### _pdf.font(armazenamento: _[Storage](../../resources/Storage)_) : _com.itextpdf.kernel.font.PdfFont_
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _[Storage](../../resources/Storage)_ | Caminho do armazenamento. |

##### Retorno

( _com.itextpdf.kernel.font.PdfFont_ )

Retorna o tipo de letra.

---

#### _pdf.font(armazenamento: _[Storage](../../resources/Storage)_, codificação: _boolean_) : _com.itextpdf.kernel.font.PdfFont_
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _[Storage](../../resources/Storage)_ | Caminho do armazenamento. |
| codificação | _boolean_ | Codificação. |

##### Retorno

( _com.itextpdf.kernel.font.PdfFont_ )

Retorna o tipo de letra.

---

#### _pdf.font(armazenamento: _[Storage](../../resources/Storage)_, codificação: string) : _com.itextpdf.kernel.font.PdfFont_
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _[Storage](../../resources/Storage)_ | Caminho do armazenamento. |
| codificação | string | Codificação. |

##### Retorno

( _com.itextpdf.kernel.font.PdfFont_ )

Retorna o tipo de letra.

---

#### _pdf.font(armazenamento: _[Storage](../../resources/Storage)_, codificação: string, embedded: _boolean_) : _com.itextpdf.kernel.font.PdfFont_
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _[Storage](../../resources/Storage)_ | Caminho do armazenamento. |
| codificação | string | Codificação. |
| embedded | _boolean_ |   |

##### Retorno

( _com.itextpdf.kernel.font.PdfFont_ )

Retorna o tipo de letra.

---

## getDocument

---

#### _pdf.getDocument() : _com.itextpdf.layout.Document_
##### Descrição

Obtém o objecto Document do iText para a estrutura do documento PDF.

##### Retorno

( _com.itextpdf.layout.Document_ )


---

## getPdfDocument

---

#### _pdf.getPdfDocument() : _com.itextpdf.kernel.pdf.PdfDocument_
##### Descrição

Obtém o objecto PdfDocument do iText para a construção do documento PDF.

##### Retorno

( _com.itextpdf.kernel.pdf.PdfDocument_ )


---

## getPdfReader

---

#### _pdf.getPdfReader() : _com.itextpdf.kernel.pdf.PdfReader_
##### Descrição

Obtém o objecto PdfReader do iText para a leitura do documento PDF.

##### Retorno

( _com.itextpdf.kernel.pdf.PdfReader_ )


---

## getPdfWriter

---

#### _pdf.getPdfWriter() : _com.itextpdf.kernel.pdf.PdfWriter_
##### Descrição

Obtém o objecto PdfWriter do iText para a escrita dos bytes do arquivo PDF.

##### Retorno

( _com.itextpdf.kernel.pdf.PdfWriter_ )


---

## image

---

#### _pdf.image(file: _[File](../../objects/File)_) : _com.itextpdf.layout.element.Image_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| file | _[File](../../objects/File)_ |   |

##### Retorno

( _com.itextpdf.layout.element.Image_ )


---

#### _pdf.image(storage: _[Storage](../../resources/Storage)_) : _com.itextpdf.layout.element.Image_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ |   |

##### Retorno

( _com.itextpdf.layout.element.Image_ )


---

## init

---

#### _pdf.init() : _[PDF](../../resources/PDF)_
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

#### _pdf.line(tipo: string, cor: _com.itextpdf.kernel.colors.Color_, largura: _double_) : _com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer_
##### Descrição

Cria uma linha com tipo,cor, largura e opacidade definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tipo | string | Tipo da linha. |
| cor | _com.itextpdf.kernel.colors.Color_ | Cor da linha. |
| largura | _double_ | Largura da linha. |

##### Retorno

( _com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer_ )

Retorna a linha personalizada criada.

---

#### _pdf.line(tipo: string, cor: _com.itextpdf.kernel.colors.Color_, largura: _float_) : _com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer_
##### Descrição

Cria uma linha personalizada com tipo de moldura,cor, largura e definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| tipo | string | Tipo da linha. |
| cor | _com.itextpdf.kernel.colors.Color_ | Cor da linha. |
| largura | _float_ | Largura da linha. |

##### Retorno

( _com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer_ )

Retorna a linha personalidade criada.

---

#### _pdf.line(linha: string, cor: _com.itextpdf.kernel.colors.Color_, largura: _int_) : _com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer_
##### Descrição

Cria um tipo de linha com cor e largura definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| linha | string | Tipo de linha. |
| cor | _com.itextpdf.kernel.colors.Color_ | Cor da linha. |
| largura | _int_ | Largura da linha. |

##### Retorno

( _com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer_ )

Retorna tipo de linha, cor e largura inseridas.

---

## newDocument

---

#### _pdf.newDocument() : _com.itextpdf.layout.Document_
##### Descrição

Cria um novo documento.

##### Retorno

( _com.itextpdf.layout.Document_ )


---

#### _pdf.newDocument(nPaginas: _com.itextpdf.kernel.geom.PageSize_) : _com.itextpdf.layout.Document_
##### Descrição

Cria um novo documento PDF com o número de páginas inserida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| nPaginas | _com.itextpdf.kernel.geom.PageSize_ | Número de páginas. |

##### Retorno

( _com.itextpdf.layout.Document_ )

Retorna um novo documento com o número de páginas inseridas.

---

#### _pdf.newDocument(out: _java.io.OutputStream_) : _com.itextpdf.layout.Document_
##### Descrição

Cria um novo documento PDF.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| out | _java.io.OutputStream_ |   |

##### Retorno

( _com.itextpdf.layout.Document_ )


---

#### _pdf.newDocument(armazenamento: _java.io.OutputStream_, nPaginas: _com.itextpdf.kernel.geom.PageSize_) : _com.itextpdf.layout.Document_
##### Descrição

Cria um novo documento PDF com o número de páginas inseridas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _java.io.OutputStream_ | Caminho do ficheiro. |
| nPaginas | _com.itextpdf.kernel.geom.PageSize_ | Número de páginas. |

##### Retorno

( _com.itextpdf.layout.Document_ )

Retorna um novo documento com o número de páginas inseridas.

---

#### _pdf.newDocument(file: _[File](../../objects/File)_) : _com.itextpdf.layout.Document_
##### Descrição

Cria um novo documento PDF.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| file | _[File](../../objects/File)_ |   |

##### Retorno

( _com.itextpdf.layout.Document_ )


---

#### _pdf.newDocument(armazenamento: _[File](../../objects/File)_, nPaginas: _com.itextpdf.kernel.geom.PageSize_) : _com.itextpdf.layout.Document_
##### Descrição

Cria um novo documento PDF com o número de páginas inseridas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _[File](../../objects/File)_ | Caminho do ficheiro. |
| nPaginas | _com.itextpdf.kernel.geom.PageSize_ | Número de páginas. |

##### Retorno

( _com.itextpdf.layout.Document_ )

Retorna um novo documento com o número de páginas inseridas.

---

#### _pdf.newDocument(out: _[OutputStream](../../objects/OutputStream)_) : _com.itextpdf.layout.Document_
##### Descrição

Cria um novo documento PDF.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| out | _[OutputStream](../../objects/OutputStream)_ |   |

##### Retorno

( _com.itextpdf.layout.Document_ )


---

#### _pdf.newDocument(armazenamento: _[OutputStream](../../objects/OutputStream)_, nPaginas: _com.itextpdf.kernel.geom.PageSize_) : _com.itextpdf.layout.Document_
##### Descrição

Cria um novo documento PDF com o número de páginas inseridas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _[OutputStream](../../objects/OutputStream)_ | Caminho do ficheiro. |
| nPaginas | _com.itextpdf.kernel.geom.PageSize_ | Número de páginas. |

##### Retorno

( _com.itextpdf.layout.Document_ )

Retorna um novo documento com o número de páginas inseridas.

---

#### _pdf.newDocument(storage: _[Storage](../../resources/Storage)_) : _com.itextpdf.layout.Document_
##### Descrição

Cria um novo documento PDF.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| storage | _[Storage](../../resources/Storage)_ |   |

##### Retorno

( _com.itextpdf.layout.Document_ )


---

#### _pdf.newDocument(armazenamento: _[Storage](../../resources/Storage)_, nPaginas: _com.itextpdf.kernel.geom.PageSize_) : _com.itextpdf.layout.Document_
##### Descrição

Cria um novo documento PDF com o número de páginas inseridas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _[Storage](../../resources/Storage)_ | Caminho do ficheiro. |
| nPaginas | _com.itextpdf.kernel.geom.PageSize_ | Número de páginas. |

##### Retorno

( _com.itextpdf.layout.Document_ )

Retorna um novo documento com o número de páginas inseridas.

---

## newPdfDocument

---

#### _pdf.newPdfDocument() : _com.itextpdf.kernel.pdf.PdfDocument_
##### Descrição

Cria um novo documento PDF.

##### Retorno

( _com.itextpdf.kernel.pdf.PdfDocument_ )


---

#### _pdf.newPdfDocument(armazenamento: _java.io.OutputStream_) : _com.itextpdf.kernel.pdf.PdfDocument_
##### Descrição

Cria um novo documento PDF.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _java.io.OutputStream_ | Caminho do ficheiro. |

##### Retorno

( _com.itextpdf.kernel.pdf.PdfDocument_ )


---

#### _pdf.newPdfDocument(armazenamento: _[File](../../objects/File)_) : _com.itextpdf.kernel.pdf.PdfDocument_
##### Descrição

Cria um novo documento PDF.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _[File](../../objects/File)_ | Caminho do ficheiro. |

##### Retorno

( _com.itextpdf.kernel.pdf.PdfDocument_ )


---

#### _pdf.newPdfDocument(armazenamento: _[OutputStream](../../objects/OutputStream)_) : _com.itextpdf.kernel.pdf.PdfDocument_
##### Descrição

Cria um novo documento PDF.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _[OutputStream](../../objects/OutputStream)_ | Caminho do ficheiro. |

##### Retorno

( _com.itextpdf.kernel.pdf.PdfDocument_ )


---

#### _pdf.newPdfDocument(armazenamento: _[Storage](../../resources/Storage)_) : _com.itextpdf.kernel.pdf.PdfDocument_
##### Descrição

Cria um novo documento PDF.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| armazenamento | _[Storage](../../resources/Storage)_ | Caminho do ficheiro. |

##### Retorno

( _com.itextpdf.kernel.pdf.PdfDocument_ )


---

## openPdfDocument

---

#### _pdf.openPdfDocument(caminho: string) : _com.itextpdf.kernel.pdf.PdfDocument_
##### Descrição

Abre o documento PDF referente ao caminho inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| caminho | string | Caminho do ficheiro. |

##### Retorno

( _com.itextpdf.kernel.pdf.PdfDocument_ )

Retorna o documento PDF aberto.

---

## pageSize

---

#### _pdf.pageSize(width: _float_, height: _float_) : _com.itextpdf.kernel.geom.PageSize_
##### Descrição

Obtém a definição do tamanho da página atráves da largura e altura.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| width | _float_ |   |
| height | _float_ |   |

##### Retorno

( _com.itextpdf.kernel.geom.PageSize_ )


---

#### _pdf.pageSize(page: string) : _com.itextpdf.kernel.geom.PageSize_
##### Descrição

Obtém a definição do tamanho de página, suporta:<br><ul><li>A0</li><li>A1</li><li>A2</li><li>A3</li><li>A4</li><li>A5</li><li>A6</li><li>A7</li><li>A8</li><li>A9</li><li>A10</li><li>B0</li><li>B1</li><li>B2</li><li>B3</li><li>B4</li><li>B5</li><li>B6</li><li>B7</li><li>B8</li><li>B9</li><li>B10</li><li>default</li><li>executive</li><li>ledger</li><li>legal</li><li>letter</li><li>tabloid</li></ul>

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| page | string |   |

##### Retorno

( _com.itextpdf.kernel.geom.PageSize_ )


---

## paragraph

---

#### _pdf.paragraph(text: string) : _com.itextpdf.layout.element.Paragraph_
##### Descrição

Cria um parágrafo.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| text | string |   |

##### Retorno

( _com.itextpdf.layout.element.Paragraph_ )


---

## setDocument

---

#### _pdf.setDocument(document: _com.itextpdf.layout.Document_) : _[PDF](../../resources/PDF)_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| document | _com.itextpdf.layout.Document_ |   |

##### Retorno

( _[PDF](../../resources/PDF)_ )


---

## table

---

#### _pdf.table(largura: _double[]_) : _com.itextpdf.layout.element.Table_
##### Descrição

Cria uma tabela com colunas da largura definida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| largura | _double[]_ | Largura das colunas da tabela. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna uma tabela com a largura das colunas inseridas.

---

#### _pdf.table(largura: _double[]_, colunaLarga: _boolean_) : _com.itextpdf.layout.element.Table_
##### Descrição

Cria uma tabela.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| largura | _double[]_ | Largura das colunas. |
| colunaLarga | _boolean_ | Coluna de tamanho grande. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna a tabela criada.

---

#### _pdf.table(largura: _float[]_) : _com.itextpdf.layout.element.Table_
##### Descrição

Cria uma tabela com colunas da largura definida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| largura | _float[]_ | Largura das colunas da tabela. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna uma tabela com a largura das colunas inseridas.

---

#### _pdf.table(largura: _float[]_, colunaLarga: _boolean_) : _com.itextpdf.layout.element.Table_
##### Descrição

Cria uma tabela.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| largura | _float[]_ | Largura das colunas. |
| colunaLarga | _boolean_ | Coluna de tamanho grande. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna a tabela criada.

---

#### _pdf.table(largura: _[I_) : _com.itextpdf.layout.element.Table_
##### Descrição

Cria uma tabela com colunas da largura definida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| largura | _[I_ | Largura das colunas da tabela. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna uma tabela com a largura das colunas inseridas.

---

#### _pdf.table(largura: _[I_, colunaLarga: _boolean_) : _com.itextpdf.layout.element.Table_
##### Descrição

Cria uma tabela.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| largura | _[I_ | Largura das colunas. |
| colunaLarga | _boolean_ | Coluna de tamanho grande. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna a tabela criada.

---

#### _pdf.table(colunas: _int_) : _com.itextpdf.layout.element.Table_
##### Descrição

Cria uma tabela.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| colunas | _int_ | Número de colunas. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna a tabela criada.

---

#### _pdf.table(largura: _java.util.List_) : _com.itextpdf.layout.element.Table_
##### Descrição

Cria uma tabela com a largura das colunas definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| largura | _java.util.List_ | Largura das colunas da tabela. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna uma tabela com colunas da largura inseridas.

---

#### _pdf.table(largura: _java.util.List_, colunaLarga: _boolean_) : _com.itextpdf.layout.element.Table_
##### Descrição

Cria uma tabela.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| largura | _java.util.List_ | Largura das colunas. |
| colunaLarga | _boolean_ | Coluna de tamanho grande. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna a tabela criada.

---

#### _pdf.table(largura: _[Values](../../objects/Values)_) : _com.itextpdf.layout.element.Table_
##### Descrição

Cria uma tabela com colunas da largura definida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| largura | _[Values](../../objects/Values)_ | Largura das colunas da tabela. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna uma tabela com a largura das colunas inseridas.

---

#### _pdf.table(largura: _[Values](../../objects/Values)_, colunaLarga: _boolean_) : _com.itextpdf.layout.element.Table_
##### Descrição

Cria uma tabela.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| largura | _[Values](../../objects/Values)_ | Largura das colunas. |
| colunaLarga | _boolean_ | Coluna de tamanho grande. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna a tabela criada.

---

## text

---

#### _pdf.text(conteúdo: string) : _com.itextpdf.layout.element.Text_
##### Descrição

Cria um novo texto com o conteúdo inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | string | Conteúdo para ser criado. |

##### Retorno

( _com.itextpdf.layout.element.Text_ )

Retorna o conteudo do texto.

---

## toHTML

---

#### _pdf.toHTML(conteúdo: _java.io.InputStream_) : string
##### Descrição

Passa para HTML o conteúdo inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | _java.io.InputStream_ | Conteúdo a passar pra HTML. |

##### Retorno

( string )

Retorna o HTML.

---

#### _pdf.toHTML(conteúdo: _[File](../../objects/File)_) : string
##### Descrição

Passa para HTML o conteúdo inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | _[File](../../objects/File)_ | Conteúdo a passar pra HTML. |

##### Retorno

( string )

Retorna o HTML.

---

#### _pdf.toHTML(conteúdo: _[InputStream](../../objects/InputStream)_) : string
##### Descrição

Passa para HTML o conteúdo inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | _[InputStream](../../objects/InputStream)_ | Conteúdo a passar pra HTML. |

##### Retorno

( string )

Retorna o HTML.

---

#### _pdf.toHTML(conteúdo: _[Storage](../../resources/Storage)_) : string
##### Descrição

Passa para HTML o conteúdo inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | _[Storage](../../resources/Storage)_ | Conteúdo a passar pra HTML. |

##### Retorno

( string )

Retorna o HTML.

---

## toText

---

#### _pdf.toText(conteúdo: _java.io.InputStream_) : string
##### Descrição

Passa o conteúdo inserido para texto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | _java.io.InputStream_ | Conteúdo a passar para texto. |

##### Retorno

( string )

Retorna o HTML.

---

#### _pdf.toText(conteúdo: _[File](../../objects/File)_) : string
##### Descrição

Passa o conteúdo inserido para texto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | _[File](../../objects/File)_ | Conteúdo a passar para texto. |

##### Retorno

( string )

Retorna o HTML.

---

#### _pdf.toText(conteúdo: _[InputStream](../../objects/InputStream)_) : string
##### Descrição

Passa o conteúdo inserido para texto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | _[InputStream](../../objects/InputStream)_ | Conteúdo a passar para texto. |

##### Retorno

( string )

Retorna o HTML.

---

#### _pdf.toText(conteúdo: _[Storage](../../resources/Storage)_) : string
##### Descrição

Passa o conteúdo inserido para texto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| conteúdo | _[Storage](../../resources/Storage)_ | Conteúdo a passar para texto. |

##### Retorno

( string )

Retorna o HTML.

---

