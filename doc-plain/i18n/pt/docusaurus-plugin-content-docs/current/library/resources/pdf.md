---
id: pdf
title: PDF
sidebar_label: PDF
---

Permite ler, criar e alterar arquivos PDF.

É utilizado a biblioteca [iText](https://itextpdf.com/) para gerar os PDFs.

---

## areaBreak

---

#### _pdf.areaBreak() : com.itextpdf.layout.element.AreaBreak
##### Descrição

Cria uma área de quebra que termina um tipo de área anterior.

##### Retorno

( _com.itextpdf.layout.element.AreaBreak_ )

Termina a área anterior e retorna a nova área.

---

#### _pdf.areaBreak(nPaginas: com.itextpdf.kernel.geom.PageSize) : com.itextpdf.layout.element.AreaBreak
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

#### _pdf.areaBreak(tipo: string) : com.itextpdf.layout.element.AreaBreak
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

#### _pdf.border(moldura: string) : com.itextpdf.layout.borders.Border
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

#### _pdf.border(moldura: string, cor: com.itextpdf.kernel.colors.Color, largura: double) : com.itextpdf.layout.borders.Border
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

#### _pdf.border(moldura: string, cor: com.itextpdf.kernel.colors.Color, largura: double, opacity: double) : com.itextpdf.layout.borders.Border
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

#### _pdf.border(moldura: string, cor: com.itextpdf.kernel.colors.Color, largura: double, opacity: float) : com.itextpdf.layout.borders.Border
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

#### _pdf.border(moldura: string, cor: com.itextpdf.kernel.colors.Color, largura: double, opacity: int) : com.itextpdf.layout.borders.Border
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

#### _pdf.border(moldura: string, cor: com.itextpdf.kernel.colors.Color, largura: float) : com.itextpdf.layout.borders.Border
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

#### _pdf.border(moldura: string, cor: com.itextpdf.kernel.colors.Color, largura: float, opacity: double) : com.itextpdf.layout.borders.Border
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

#### _pdf.border(moldura: string, cor: com.itextpdf.kernel.colors.Color, largura: float, opacidade: float) : com.itextpdf.layout.borders.Border
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

#### _pdf.border(moldura: string, cor: com.itextpdf.kernel.colors.Color, largura: float, opacidade: int) : com.itextpdf.layout.borders.Border
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

#### _pdf.border(moldura: string, cor: com.itextpdf.kernel.colors.Color, largura: int) : com.itextpdf.layout.borders.Border
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

#### _pdf.border(moldura: string, cor: com.itextpdf.kernel.colors.Color, largura: int, opacity: double) : com.itextpdf.layout.borders.Border
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

#### _pdf.border(moldura: string, cor: com.itextpdf.kernel.colors.Color, largura: int, opacity: float) : com.itextpdf.layout.borders.Border
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

#### _pdf.border(moldura: string, cor: com.itextpdf.kernel.colors.Color, largura: int, opacity: int) : com.itextpdf.layout.borders.Border
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

#### _pdf.border(moldura: string, largura: double) : com.itextpdf.layout.borders.Border
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

#### _pdf.border(moldura: string, largura: double, opacidade: double) : com.itextpdf.layout.borders.Border
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

#### _pdf.border(moldura: string, largura: double, opacidade: float) : com.itextpdf.layout.borders.Border
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

#### _pdf.border(moldura: string, cor: double, largura: int) : com.itextpdf.layout.borders.Border
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

#### _pdf.border(moldura: string, largura: float) : com.itextpdf.layout.borders.Border
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

#### _pdf.border(moldura: string, largura: float, opacidade: double) : com.itextpdf.layout.borders.Border
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

#### _pdf.border(moldura: string, largura: float, opacidade: float) : com.itextpdf.layout.borders.Border
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

#### _pdf.border(moldura: string, largura: float, opacidade: int) : com.itextpdf.layout.borders.Border
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

#### _pdf.border(moldura: string, largura: int) : com.itextpdf.layout.borders.Border
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

#### _pdf.border(moldura: string, largura: int, opacidade: double) : com.itextpdf.layout.borders.Border
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

#### _pdf.border(moldura: string, largura: int, opacidade: float) : com.itextpdf.layout.borders.Border
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

#### _pdf.border(moldura: string, largura: int, opacidade: int) : com.itextpdf.layout.borders.Border
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

#### _pdf.border3D(moldura: string) : com.itextpdf.layout.borders.Border3D
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

#### _pdf.border3D(moldura: string, cor: com.itextpdf.kernel.colors.Color, largura: double) : com.itextpdf.layout.borders.Border3D
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

#### _pdf.border3D(moldura: string, cor: com.itextpdf.kernel.colors.Color, largura: double, opacity: double) : com.itextpdf.layout.borders.Border3D
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

#### _pdf.border3D(moldura: string, cor: com.itextpdf.kernel.colors.Color, largura: double, opacity: float) : com.itextpdf.layout.borders.Border3D
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

#### _pdf.border3D(moldura: string, cor: com.itextpdf.kernel.colors.Color, largura: double, opacity: int) : com.itextpdf.layout.borders.Border3D
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

#### _pdf.border3D(moldura: string, cor: com.itextpdf.kernel.colors.Color, largura: float) : com.itextpdf.layout.borders.Border3D
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

#### _pdf.border3D(moldura: string, cor: com.itextpdf.kernel.colors.Color, largura: float, opacity: double) : com.itextpdf.layout.borders.Border3D
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

#### _pdf.border3D(moldura: string, cor: com.itextpdf.kernel.colors.Color, largura: float, opacidade: float) : com.itextpdf.layout.borders.Border3D
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

#### _pdf.border3D(moldura: string, cor: com.itextpdf.kernel.colors.Color, largura: float, opacidade: int) : com.itextpdf.layout.borders.Border3D
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

#### _pdf.border3D(moldura: string, cor: com.itextpdf.kernel.colors.Color, largura: int) : com.itextpdf.layout.borders.Border3D
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

#### _pdf.border3D(moldura: string, cor: com.itextpdf.kernel.colors.Color, largura: int, opacity: double) : com.itextpdf.layout.borders.Border3D
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

#### _pdf.border3D(moldura: string, cor: com.itextpdf.kernel.colors.Color, largura: int, opacity: float) : com.itextpdf.layout.borders.Border3D
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

#### _pdf.border3D(moldura: string, cor: com.itextpdf.kernel.colors.Color, largura: int, opacidade: int) : com.itextpdf.layout.borders.Border3D
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

#### _pdf.border3D(moldura: string, largura: double) : com.itextpdf.layout.borders.Border3D
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

#### _pdf.border3D(moldura: string, largura: double, opacidade: double) : com.itextpdf.layout.borders.Border3D
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

#### _pdf.border3D(moldura: string, largura: double, opacidade: float) : com.itextpdf.layout.borders.Border3D
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

#### _pdf.border3D(moldura: string, largura: double, opacidade: int) : com.itextpdf.layout.borders.Border3D
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

#### _pdf.border3D(moldura: string, largura: float) : com.itextpdf.layout.borders.Border3D
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

#### _pdf.border3D(moldura: string, largura: float, opacidade: double) : com.itextpdf.layout.borders.Border3D
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

#### _pdf.border3D(moldura: string, largura: float, opacidade: float) : com.itextpdf.layout.borders.Border3D
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

#### _pdf.border3D(moldura: string, largura: float, opacidade: int) : com.itextpdf.layout.borders.Border3D
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

#### _pdf.border3D(moldura: string, width: int) : com.itextpdf.layout.borders.Border3D
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

#### _pdf.border3D(moldura: string, largura: int, opacidade: double) : com.itextpdf.layout.borders.Border3D
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

#### _pdf.border3D(moldura: string, largura: int, opacidade: float) : com.itextpdf.layout.borders.Border3D
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

#### _pdf.border3D(moldura: string, largura: int, opacidade: int) : com.itextpdf.layout.borders.Border3D
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

#### _pdf.canvas(doc: com.itextpdf.kernel.pdf.PdfDocument, pageNum: int) : com.itextpdf.kernel.pdf.canvas.PdfCanvas
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

#### _pdf.canvas(page: com.itextpdf.kernel.pdf.PdfPage) : com.itextpdf.kernel.pdf.canvas.PdfCanvas
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

#### _pdf.cell() : com.itextpdf.layout.element.Cell
##### Descrição

Cria uma célula de tabela.

##### Retorno

( _com.itextpdf.layout.element.Cell_ )

Retorna a célula criada.

---

#### _pdf.cell(agregVertical: int, agregHorizontal: int) : com.itextpdf.layout.element.Cell
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

#### _pdf.color(color: string) : com.itextpdf.kernel.colors.Color
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _string_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.Color_ )


---

## colorCMYK

---

#### _pdf.colorCMYK(cyan: double, magenta: double, yellow: double, black: double) : com.itextpdf.kernel.colors.DeviceCmyk
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

#### _pdf.colorCMYK(cyan: float, magenta: float, yellow: float, black: float) : com.itextpdf.kernel.colors.DeviceCmyk
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

#### _pdf.colorCMYK(cyan: int, magenta: int, yellow: int, black: int) : com.itextpdf.kernel.colors.DeviceCmyk
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

#### _pdf.colorGray(value: double) : com.itextpdf.kernel.colors.DeviceGray
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _double_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.DeviceGray_ )


---

#### _pdf.colorGray(value: float) : com.itextpdf.kernel.colors.DeviceGray
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _float_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.DeviceGray_ )


---

#### _pdf.colorGray(value: int) : com.itextpdf.kernel.colors.DeviceGray
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _int_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.DeviceGray_ )


---

## colorRGB

---

#### _pdf.colorRGB(red: double, green: double, blue: double) : com.itextpdf.kernel.colors.DeviceRgb
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **red** | _double_ |   |
| **green** | _double_ |   |
| **blue** | _double_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.DeviceRgb_ )


---

#### _pdf.colorRGB(red: float, green: float, blue: float) : com.itextpdf.kernel.colors.DeviceRgb
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **red** | _float_ |   |
| **green** | _float_ |   |
| **blue** | _float_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.DeviceRgb_ )


---

#### _pdf.colorRGB(red: int, green: int, blue: int) : com.itextpdf.kernel.colors.DeviceRgb
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

#### _pdf.extract(conteúdo: [InputStream](/docs/library/objects/InputStream)) : [Values](/docs/library/objects/Values)
##### Descrição

Extrai o conteúdo de PDFs.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _[InputStream](/docs/library/objects/InputStream)_ | Conteúdo a ser extraído. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Retorna o conteudo extraído.

---

#### _pdf.extract(armazenamento: [Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO) : [Values](/docs/library/objects/Values)
##### Descrição

Extrai o conteúdo de PDFs.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **armazenamento** | _[Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO_ | Caminho do armazenamento. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Retorna o conteúdo extraido.

---

#### _pdf.extract(conteúdo: [InputStream](/docs/library/objects/InputStream)) : [Values](/docs/library/objects/Values)
##### Descrição

Extrai o conteúdo de PDFs.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _[InputStream](/docs/library/objects/InputStream)_ | Conteúdo a ser extraído. |

##### Retorno

( _[Values](/docs/library/objects/Values)_ )

Retorna o conteudo extraído.

---

## font

---

#### _pdf.font(armazenamento: string) : com.itextpdf.kernel.font.PdfFont
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

#### _pdf.font(armazenamento: [File](/docs/library/objects/File)) : com.itextpdf.kernel.font.PdfFont
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **armazenamento** | _[File](/docs/library/objects/File)_ | Caminho do armazenamento. |

##### Retorno

( _com.itextpdf.kernel.font.PdfFont_ )

Retorna o tipo de letra.

---

#### _pdf.font(armazenamento: [File](/docs/library/objects/File), codificação: boolean) : com.itextpdf.kernel.font.PdfFont
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **armazenamento** | _[File](/docs/library/objects/File)_ | Caminho do armazenamento. |
| **codificação** | _boolean_ | Codificação. |

##### Retorno

( _com.itextpdf.kernel.font.PdfFont_ )

Retorna o tipo de letra.

---

#### _pdf.font(armazenamento: [File](/docs/library/objects/File), codificação: string) : com.itextpdf.kernel.font.PdfFont
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **armazenamento** | _[File](/docs/library/objects/File)_ | Caminho do armazenamento. |
| **codificação** | _string_ | Codificação. |

##### Retorno

( _com.itextpdf.kernel.font.PdfFont_ )

Retorna o tipo de letra.

---

#### _pdf.font(armazenamento: [File](/docs/library/objects/File), codificação: string, embedded: boolean) : com.itextpdf.kernel.font.PdfFont
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **armazenamento** | _[File](/docs/library/objects/File)_ | Caminho do armazenamento. |
| **codificação** | _string_ | Codificação. |
| **embedded** | _boolean_ |   |

##### Retorno

( _com.itextpdf.kernel.font.PdfFont_ )

Retorna o tipo de letra.

---

#### _pdf.font(armazenamento: [Storage](/docs/library/resources/storage)) : com.itextpdf.kernel.font.PdfFont
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **armazenamento** | _[Storage](/docs/library/resources/storage)_ | Caminho do armazenamento. |

##### Retorno

( _com.itextpdf.kernel.font.PdfFont_ )

Retorna o tipo de letra.

---

#### _pdf.font(armazenamento: [Storage](/docs/library/resources/storage), codificação: boolean) : com.itextpdf.kernel.font.PdfFont
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **armazenamento** | _[Storage](/docs/library/resources/storage)_ | Caminho do armazenamento. |
| **codificação** | _boolean_ | Codificação. |

##### Retorno

( _com.itextpdf.kernel.font.PdfFont_ )

Retorna o tipo de letra.

---

#### _pdf.font(armazenamento: [Storage](/docs/library/resources/storage), codificação: string) : com.itextpdf.kernel.font.PdfFont
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **armazenamento** | _[Storage](/docs/library/resources/storage)_ | Caminho do armazenamento. |
| **codificação** | _string_ | Codificação. |

##### Retorno

( _com.itextpdf.kernel.font.PdfFont_ )

Retorna o tipo de letra.

---

#### _pdf.font(armazenamento: [Storage](/docs/library/resources/storage), codificação: string, embedded: boolean) : com.itextpdf.kernel.font.PdfFont
##### Descrição

Cria um tipo de letra.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **armazenamento** | _[Storage](/docs/library/resources/storage)_ | Caminho do armazenamento. |
| **codificação** | _string_ | Codificação. |
| **embedded** | _boolean_ |   |

##### Retorno

( _com.itextpdf.kernel.font.PdfFont_ )

Retorna o tipo de letra.

---

## getDocument

---

#### _pdf.getDocument() : com.itextpdf.layout.Document
##### Descrição

Obtém o objecto Document do iText para a estrutura do documento PDF.

##### Retorno

( _com.itextpdf.layout.Document_ )

Gere a estrutura do documento.

---

## getPdfDocument

---

#### _pdf.getPdfDocument() : com.itextpdf.kernel.pdf.PdfDocument
##### Descrição

Obtém o objecto PdfDocument do iText para a construção do documento PDF.

##### Retorno

( _com.itextpdf.kernel.pdf.PdfDocument_ )

Gere a construção do documento PDF.

---

## getPdfReader

---

#### _pdf.getPdfReader() : com.itextpdf.kernel.pdf.PdfReader
##### Descrição

Obtém o objecto PdfReader do iText para a leitura do documento PDF.

##### Retorno

( _com.itextpdf.kernel.pdf.PdfReader_ )

Gere a leitura de documento PDF.

---

## getPdfWriter

---

#### _pdf.getPdfWriter() : com.itextpdf.kernel.pdf.PdfWriter
##### Descrição

Obtém o objecto PdfWriter do iText para a escrita dos bytes do arquivo PDF.

##### Retorno

( _com.itextpdf.kernel.pdf.PdfWriter_ )

Gere a escrita dos bytes do arquivo PDF.

---

## horizontalAlignment

---

#### _pdf.horizontalAlignment(tipo: string) : com.itextpdf.layout.properties.HorizontalAlignment
##### Descrição

Cria o tipo de alinhamento horizontal.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tipo** | _string_ | Nome do tipo de alinhamento, suporta:<ul><li>left</li><li>center</li><li>right</li></ul> |

##### Retorno

( _com.itextpdf.layout.properties.HorizontalAlignment_ )

Retorna o tipo de alinhamento horizontal.

---

## image

---

#### _pdf.image(file: [File](/docs/library/objects/File)) : com.itextpdf.layout.element.Image
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _[File](/docs/library/objects/File)_ |   |

##### Retorno

( _com.itextpdf.layout.element.Image_ )


---

#### _pdf.image(storage: [Storage](/docs/library/resources/storage)) : com.itextpdf.layout.element.Image
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ |   |

##### Retorno

( _com.itextpdf.layout.element.Image_ )


---

## init

---

#### _pdf.init() : [PDF](/docs/library/resources/pdf)
##### Descrição

Cria um novo objeto de recurso para a construção de PDFs.

##### Como Usar

```javascript
const pdf = _pdf.init();
```

##### Retorno

( _[PDF](/docs/library/resources/pdf)_ )

Nova instância do recurso PDF.

---

## line

---

#### _pdf.line(tipo: string, cor: com.itextpdf.kernel.colors.Color, largura: double) : com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer
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

#### _pdf.line(tipo: string, cor: com.itextpdf.kernel.colors.Color, largura: float) : com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer
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

#### _pdf.line(linha: string, cor: com.itextpdf.kernel.colors.Color, largura: int) : com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer
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

#### _pdf.newDocument() : com.itextpdf.layout.Document
##### Descrição

Cria um novo documento.

##### Retorno

( _com.itextpdf.layout.Document_ )


---

#### _pdf.newDocument(tamanhoPagina: com.itextpdf.kernel.geom.PageSize) : com.itextpdf.layout.Document
##### Descrição

Cria um novo documento PDF com tamanho de página específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tamanhoPagina** | _com.itextpdf.kernel.geom.PageSize_ | Tamanho da página. |

##### Retorno

( _com.itextpdf.layout.Document_ )

Retorna um novo documento com o tamanho de página definida.

---

#### _pdf.newDocument(out: [OutputStream](/docs/library/objects/OutputStream)) : com.itextpdf.layout.Document
##### Descrição

Cria um novo documento PDF com tamanho de página A4.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _com.itextpdf.layout.Document_ )

Retorna um novo documento com o tamanho de página A4.

---

#### _pdf.newDocument(saida: [OutputStream](/docs/library/objects/OutputStream), nPaginas: com.itextpdf.kernel.geom.PageSize) : com.itextpdf.layout.Document
##### Descrição

Cria um novo documento PDF com tamanho de página específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **saida** | _[OutputStream](/docs/library/objects/OutputStream)_ | Caminho do ficheiro. |
| **nPaginas** | _com.itextpdf.kernel.geom.PageSize_ | Número de páginas. |

##### Retorno

( _com.itextpdf.layout.Document_ )

Retorna um novo documento com o tamanho de página definida.

---

#### _pdf.newDocument(saida: [Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO, nPaginas: com.itextpdf.kernel.geom.PageSize) : com.itextpdf.layout.Document
##### Descrição

Cria um novo documento PDF com tamanho de página específica.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **saida** | _[Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO_ | Caminho do ficheiro. |
| **nPaginas** | _com.itextpdf.kernel.geom.PageSize_ | Número de páginas. |

##### Retorno

( _com.itextpdf.layout.Document_ )

Retorna um novo documento com o tamanho de página definida.

---

## openDocument

---

#### _pdf.openDocument(caminho: [InputStream](/docs/library/objects/InputStream)) : com.itextpdf.layout.Document
##### Descrição

Abre o documento PDF referente ao caminho inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _[InputStream](/docs/library/objects/InputStream)_ | Caminho do ficheiro. |

##### Retorno

( _com.itextpdf.layout.Document_ )

Retorna o documento PDF aberto.

---

#### _pdf.openDocument(in: [InputStream](/docs/library/objects/InputStream), out: [OutputStream](/docs/library/objects/OutputStream)) : com.itextpdf.layout.Document
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _com.itextpdf.layout.Document_ )


---

#### _pdf.openDocument(in: [InputStream](/docs/library/objects/InputStream), out: [Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO) : com.itextpdf.layout.Document
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **out** | _[Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO_ |   |

##### Retorno

( _com.itextpdf.layout.Document_ )


---

#### _pdf.openDocument(caminho: [Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO) : com.itextpdf.layout.Document
##### Descrição

Abre o documento PDF referente ao caminho inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **caminho** | _[Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO_ | Caminho do ficheiro. |

##### Retorno

( _com.itextpdf.layout.Document_ )

Retorna o documento PDF aberto.

---

#### _pdf.openDocument(in: [Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO, out: [OutputStream](/docs/library/objects/OutputStream)) : com.itextpdf.layout.Document
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO_ |   |
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _com.itextpdf.layout.Document_ )


---

#### _pdf.openDocument(in: [Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO, out: [Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO) : com.itextpdf.layout.Document
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO_ |   |
| **out** | _[Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO_ |   |

##### Retorno

( _com.itextpdf.layout.Document_ )


---

## pageSize

---

#### _pdf.pageSize(largura: float, altura: float) : com.itextpdf.kernel.geom.PageSize
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

#### _pdf.pageSize(pagina: string) : com.itextpdf.kernel.geom.PageSize
##### Descrição

Obtém definição de tamanho de página, códigos de páginas suportados:<br/><ul><li>A0</li><li>A1</li><li>A2</li><li>A3</li><li>A4</li><li>A5</li><li>A6</li><li>A7</li><li>A8</li><li>A9</li><li>A10</li><li>B0</li><li>B1</li><li>B2</li><li>B3</li><li>B4</li><li>B5</li><li>B6</li><li>B7</li><li>B8</li><li>B9</li><li>B10</li><li>default</li><li>executive</li><li>ledger</li><li>legal</li><li>letter</li><li>tabloid</li></ul>

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **pagina** | _string_ | Código do tipo de página. |

##### Retorno

( _com.itextpdf.kernel.geom.PageSize_ )

Definição da página.

---

## paragraph

---

#### _pdf.paragraph() : com.itextpdf.layout.element.Paragraph
##### Descrição

Cria um parágrafo.

##### Retorno

( _com.itextpdf.layout.element.Paragraph_ )

O novo objeto de parágrafo com o objeto de texto adicionado como conteúdo.

---

#### _pdf.paragraph(texto: com.itextpdf.layout.element.Text) : com.itextpdf.layout.element.Paragraph
##### Descrição

Cria um parágrafo.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **texto** | _com.itextpdf.layout.element.Text_ | Objeto de texto que será utilizado como conteúdo no parágrafo. |

##### Retorno

( _com.itextpdf.layout.element.Paragraph_ )

O novo objeto de parágrafo com o objeto de texto adicionado como conteúdo.

---

#### _pdf.paragraph(texto: string) : com.itextpdf.layout.element.Paragraph
##### Descrição

Cria um parágrafo.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **texto** | _string_ | Texto que será apresentado no parágrafo. |

##### Retorno

( _com.itextpdf.layout.element.Paragraph_ )

O novo objeto de parágrafo com o texto.

---

## paragraphArea

---

#### _pdf.paragraphArea(paragrafo: com.itextpdf.layout.element.Paragraph) : com.itextpdf.kernel.geom.Rectangle
##### Descrição

Calcula a área de um parágrafo, permite obter a altura e a largura que o texto do parágrafo ocupará no PDF.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **paragrafo** | _com.itextpdf.layout.element.Paragraph_ | O objeto de parágrafo que será calculado a área. |

##### Retorno

( _com.itextpdf.kernel.geom.Rectangle_ )

Retângulo com a largura e altura que a dimensão do texto do parágrafo ocupa no PDF.

---

## setDocument

---

#### _pdf.setDocument(documento: com.itextpdf.layout.Document) : [PDF](/docs/library/resources/pdf)
##### Descrição

Define o objeto de documento PDF do iText.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **documento** | _com.itextpdf.layout.Document_ | Objeto de documento do iText. |

##### Retorno

( _[PDF](/docs/library/resources/pdf)_ )

A instância atual do recurso PDF.

---

## string

---

#### _pdf.string(texto: byte[]) : com.itextpdf.kernel.pdf.PdfString
##### Descrição

String é uma sequência de caracteres, ou seja é um texto, este método obtém um objeto de string nativo para PDF a partir de um array de bytes.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **texto** | _byte[]_ | Os bytes de texto que vão ser utilizados na nova string nativa de PDF. |

##### Retorno

( _com.itextpdf.kernel.pdf.PdfString_ )

A nova string nativa para PDF.

---

#### _pdf.string(texto: string) : com.itextpdf.kernel.pdf.PdfString
##### Descrição

String é uma sequência de caracteres, ou seja é um texto, este método obtém um objeto de string nativo para PDF.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **texto** | _string_ | A string que será utilizada na nova string nativa de PDF. |

##### Retorno

( _com.itextpdf.kernel.pdf.PdfString_ )

A nova string nativa para PDF.

---

#### _pdf.string(texto: string, codificacao: string) : com.itextpdf.kernel.pdf.PdfString
##### Descrição

String é uma sequência de caracteres, ou seja é um texto, este método obtém um objeto de string nativo para PDF.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **texto** | _string_ | A string que será utilizada na nova string nativa de PDF. |
| **codificacao** | _string_ | Nome do tipo de codificação para o texto. |

##### Retorno

( _com.itextpdf.kernel.pdf.PdfString_ )

A nova string nativa para PDF.

---

## style

---

#### _pdf.style() : com.itextpdf.layout.Style
##### Descrição

Cria um novo estilo que é útil para reutilizar a estilização.

##### Retorno

( _com.itextpdf.layout.Style_ )

Retorna um novo estilo para PDF.

---

## table

---

#### _pdf.table(colunas: double[]) : com.itextpdf.layout.element.Table
##### Descrição

Cria uma tabela.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **colunas** | _double[]_ | Número de colunas. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna a tabela criada.

---

#### _pdf.table(largura: double[], tabelaLarga: boolean) : com.itextpdf.layout.element.Table
##### Descrição

Cria uma tabela com a largura das colunas definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **largura** | _double[]_ | Lista com as larguras de cada coluna da tabela. |
| **tabelaLarga** | _boolean_ | Define que a tabela é larga. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna uma tabela com a largura das colunas definidas.

---

#### _pdf.table(colunas: float[]) : com.itextpdf.layout.element.Table
##### Descrição

Cria uma tabela.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **colunas** | _float[]_ | Número de colunas. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna a tabela criada.

---

#### _pdf.table(largura: float[], tabelaLarga: boolean) : com.itextpdf.layout.element.Table
##### Descrição

Cria uma tabela com a largura das colunas definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **largura** | _float[]_ | Lista com as larguras de cada coluna da tabela. |
| **tabelaLarga** | _boolean_ | Define que a tabela é larga. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna uma tabela com a largura das colunas definidas.

---

#### _pdf.table(colunas: int[]) : com.itextpdf.layout.element.Table
##### Descrição

Cria uma tabela.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **colunas** | _int[]_ | Número de colunas. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna a tabela criada.

---

#### _pdf.table(largura: int[], tabelaLarga: boolean) : com.itextpdf.layout.element.Table
##### Descrição

Cria uma tabela com a largura das colunas definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **largura** | _int[]_ | Lista com as larguras de cada coluna da tabela. |
| **tabelaLarga** | _boolean_ | Define que a tabela é larga. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna uma tabela com a largura das colunas definidas.

---

#### _pdf.table(colunas: int) : com.itextpdf.layout.element.Table
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

#### _pdf.table(largura: java.util.List) : com.itextpdf.layout.element.Table
##### Descrição

Cria uma tabela com a largura das colunas definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **largura** | _java.util.List_ | Lista com as larguras de cada coluna da tabela. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna uma tabela com a largura das colunas definidas.

---

#### _pdf.table(largura: java.util.List, tabelaLarga: boolean) : com.itextpdf.layout.element.Table
##### Descrição

Cria uma tabela com a largura das colunas definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **largura** | _java.util.List_ | Lista com as larguras de cada coluna da tabela. |
| **tabelaLarga** | _boolean_ | Define que a tabela é larga. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna uma tabela com a largura das colunas definidas.

---

#### _pdf.table(largura: [Values](/docs/library/objects/Values)) : com.itextpdf.layout.element.Table
##### Descrição

Cria uma tabela com a largura das colunas definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **largura** | _[Values](/docs/library/objects/Values)_ | Lista com as larguras de cada coluna da tabela. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna uma tabela com a largura das colunas definidas.

---

#### _pdf.table(largura: [Values](/docs/library/objects/Values), tabelaLarga: boolean) : com.itextpdf.layout.element.Table
##### Descrição

Cria uma tabela com a largura das colunas definidas.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **largura** | _[Values](/docs/library/objects/Values)_ | Lista com as larguras de cada coluna da tabela. |
| **tabelaLarga** | _boolean_ | Define que a tabela é larga. |

##### Retorno

( _com.itextpdf.layout.element.Table_ )

Retorna uma tabela com a largura das colunas definidas.

---

## text

---

#### _pdf.text(conteúdo: string) : com.itextpdf.layout.element.Text
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

## textAlignment

---

#### _pdf.textAlignment(tipo: string) : com.itextpdf.layout.properties.TextAlignment
##### Descrição

Cria o tipo de alinhamento de texto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tipo** | _string_ | Nome do tipo de alinhamento, suporta:<ul><li>left</li><li>center</li><li>right</li><li>justified</li><li>justified-all</li></ul> |

##### Retorno

( _com.itextpdf.layout.properties.TextAlignment_ )

Retorna o tipo de alinhamento para texto.

---

## toHTML

---

#### _pdf.toHTML(conteúdo: [InputStream](/docs/library/objects/InputStream)) : string
##### Descrição

Passa para HTML o conteúdo inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _[InputStream](/docs/library/objects/InputStream)_ | Conteúdo a passar pra HTML. |

##### Retorno

( _string_ )

Retorna o HTML.

---

#### _pdf.toHTML(conteúdo: [File](/docs/library/objects/File)) : string
##### Descrição

Passa para HTML o conteúdo inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _[File](/docs/library/objects/File)_ | Conteúdo a passar pra HTML. |

##### Retorno

( _string_ )

Retorna o HTML.

---

#### _pdf.toHTML(conteúdo: [InputStream](/docs/library/objects/InputStream)) : string
##### Descrição

Passa para HTML o conteúdo inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _[InputStream](/docs/library/objects/InputStream)_ | Conteúdo a passar pra HTML. |

##### Retorno

( _string_ )

Retorna o HTML.

---

#### _pdf.toHTML(conteúdo: [Storage](/docs/library/resources/storage)) : string
##### Descrição

Passa para HTML o conteúdo inserido.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _[Storage](/docs/library/resources/storage)_ | Conteúdo a passar pra HTML. |

##### Retorno

( _string_ )

Retorna o HTML.

---

## toImage

---

#### _pdf.toImage(in: [InputStream](/docs/library/objects/InputStream), startPage: int, endPage: int, destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **startPage** | _int_ |   |
| **endPage** | _int_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Retorno

( _void_ )


---

#### _pdf.toImage(in: [InputStream](/docs/library/objects/InputStream), startPage: int, endPage: int, destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **startPage** | _int_ |   |
| **endPage** | _int_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Retorno

( _void_ )


---

#### _pdf.toImage(in: [InputStream](/docs/library/objects/InputStream), pageNumber: int, destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **pageNumber** | _int_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |

##### Retorno

( _void_ )


---

#### _pdf.toImage(in: [InputStream](/docs/library/objects/InputStream), pageNumber: int, destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **pageNumber** | _int_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Retorno

( _void_ )


---

#### _pdf.toImage(in: [InputStream](/docs/library/objects/InputStream), pageNumber: int, destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **pageNumber** | _int_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |

##### Retorno

( _void_ )


---

#### _pdf.toImage(in: [InputStream](/docs/library/objects/InputStream), pageNumber: int, destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **pageNumber** | _int_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Retorno

( _void_ )


---

#### _pdf.toImage(in: [InputStream](/docs/library/objects/InputStream), destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |

##### Retorno

( _void_ )


---

#### _pdf.toImage(in: [InputStream](/docs/library/objects/InputStream), destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Retorno

( _void_ )


---

#### _pdf.toImage(in: [InputStream](/docs/library/objects/InputStream), destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |

##### Retorno

( _void_ )


---

#### _pdf.toImage(in: [InputStream](/docs/library/objects/InputStream), destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Retorno

( _void_ )


---

#### _pdf.toImage(source: [File](/docs/library/objects/File), startPage: int, endPage: int, destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **source** | _[File](/docs/library/objects/File)_ |   |
| **startPage** | _int_ |   |
| **endPage** | _int_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Retorno

( _void_ )


---

#### _pdf.toImage(source: [File](/docs/library/objects/File), startPage: int, endPage: int, destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **source** | _[File](/docs/library/objects/File)_ |   |
| **startPage** | _int_ |   |
| **endPage** | _int_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Retorno

( _void_ )


---

#### _pdf.toImage(source: [File](/docs/library/objects/File), pageNumber: int, destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **source** | _[File](/docs/library/objects/File)_ |   |
| **pageNumber** | _int_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |

##### Retorno

( _void_ )


---

#### _pdf.toImage(source: [File](/docs/library/objects/File), pageNumber: int, destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **source** | _[File](/docs/library/objects/File)_ |   |
| **pageNumber** | _int_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Retorno

( _void_ )


---

#### _pdf.toImage(source: [File](/docs/library/objects/File), pageNumber: int, destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **source** | _[File](/docs/library/objects/File)_ |   |
| **pageNumber** | _int_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |

##### Retorno

( _void_ )


---

#### _pdf.toImage(source: [File](/docs/library/objects/File), pageNumber: int, destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **source** | _[File](/docs/library/objects/File)_ |   |
| **pageNumber** | _int_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Retorno

( _void_ )


---

#### _pdf.toImage(source: [File](/docs/library/objects/File), destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **source** | _[File](/docs/library/objects/File)_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |

##### Retorno

( _void_ )


---

#### _pdf.toImage(source: [File](/docs/library/objects/File), destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **source** | _[File](/docs/library/objects/File)_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Retorno

( _void_ )


---

#### _pdf.toImage(source: [File](/docs/library/objects/File), destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **source** | _[File](/docs/library/objects/File)_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |

##### Retorno

( _void_ )


---

#### _pdf.toImage(source: [File](/docs/library/objects/File), destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **source** | _[File](/docs/library/objects/File)_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Retorno

( _void_ )


---

#### _pdf.toImage(source: [Storage](/docs/library/resources/storage), startPage: int, endPage: int, destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **source** | _[Storage](/docs/library/resources/storage)_ |   |
| **startPage** | _int_ |   |
| **endPage** | _int_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Retorno

( _void_ )


---

#### _pdf.toImage(source: [Storage](/docs/library/resources/storage), startPage: int, endPage: int, destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **source** | _[Storage](/docs/library/resources/storage)_ |   |
| **startPage** | _int_ |   |
| **endPage** | _int_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Retorno

( _void_ )


---

#### _pdf.toImage(source: [Storage](/docs/library/resources/storage), pageNumber: int, destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **source** | _[Storage](/docs/library/resources/storage)_ |   |
| **pageNumber** | _int_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |

##### Retorno

( _void_ )


---

#### _pdf.toImage(source: [Storage](/docs/library/resources/storage), pageNumber: int, destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **source** | _[Storage](/docs/library/resources/storage)_ |   |
| **pageNumber** | _int_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Retorno

( _void_ )


---

#### _pdf.toImage(source: [Storage](/docs/library/resources/storage), pageNumber: int, destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **source** | _[Storage](/docs/library/resources/storage)_ |   |
| **pageNumber** | _int_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |

##### Retorno

( _void_ )


---

#### _pdf.toImage(source: [Storage](/docs/library/resources/storage), pageNumber: int, destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **source** | _[Storage](/docs/library/resources/storage)_ |   |
| **pageNumber** | _int_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Retorno

( _void_ )


---

#### _pdf.toImage(source: [Storage](/docs/library/resources/storage), destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **source** | _[Storage](/docs/library/resources/storage)_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |

##### Retorno

( _void_ )


---

#### _pdf.toImage(source: [Storage](/docs/library/resources/storage), destinationPath: [File](/docs/library/objects/File), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **source** | _[Storage](/docs/library/resources/storage)_ |   |
| **destinationPath** | _[File](/docs/library/objects/File)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Retorno

( _void_ )


---

#### _pdf.toImage(source: [Storage](/docs/library/resources/storage), destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **source** | _[Storage](/docs/library/resources/storage)_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |

##### Retorno

( _void_ )


---

#### _pdf.toImage(source: [Storage](/docs/library/resources/storage), destinationPath: [Storage](/docs/library/resources/storage), filePrefixName: string, fileExtension: string, dpi: int) : void
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **source** | _[Storage](/docs/library/resources/storage)_ |   |
| **destinationPath** | _[Storage](/docs/library/resources/storage)_ |   |
| **filePrefixName** | _string_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Retorno

( _void_ )


---

## toImageAsByteArray

---

#### _pdf.toImageAsByteArray(in: [InputStream](/docs/library/objects/InputStream), startPage: int, endPage: int, fileExtension: string, dpi: int) : [[B
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **startPage** | _int_ |   |
| **endPage** | _int_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Retorno

( _[[B_ )


---

#### _pdf.toImageAsByteArray(in: [InputStream](/docs/library/objects/InputStream), pageNumber: int, fileExtension: string) : [[B
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **pageNumber** | _int_ |   |
| **fileExtension** | _string_ |   |

##### Retorno

( _[[B_ )


---

#### _pdf.toImageAsByteArray(in: [InputStream](/docs/library/objects/InputStream), pageNumber: int, fileExtension: string, dpi: int) : [[B
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **pageNumber** | _int_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Retorno

( _[[B_ )


---

#### _pdf.toImageAsByteArray(in: [InputStream](/docs/library/objects/InputStream), fileExtension: string) : [[B
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **fileExtension** | _string_ |   |

##### Retorno

( _[[B_ )


---

#### _pdf.toImageAsByteArray(in: [InputStream](/docs/library/objects/InputStream), fileExtension: string, dpi: int) : [[B
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Retorno

( _[[B_ )


---

## toText

---

#### _pdf.toText(conteúdo: [InputStream](/docs/library/objects/InputStream)) : string
##### Descrição

Passa o conteúdo inserido para texto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _[InputStream](/docs/library/objects/InputStream)_ | Conteúdo a passar para texto. |

##### Retorno

( _string_ )

Retorna o HTML.

---

#### _pdf.toText(conteúdo: [File](/docs/library/objects/File)) : string
##### Descrição

Passa o conteúdo inserido para texto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _[File](/docs/library/objects/File)_ | Conteúdo a passar para texto. |

##### Retorno

( _string_ )

Retorna o HTML.

---

#### _pdf.toText(conteúdo: [InputStream](/docs/library/objects/InputStream)) : string
##### Descrição

Passa o conteúdo inserido para texto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _[InputStream](/docs/library/objects/InputStream)_ | Conteúdo a passar para texto. |

##### Retorno

( _string_ )

Retorna o HTML.

---

#### _pdf.toText(conteúdo: [Storage](/docs/library/resources/storage)) : string
##### Descrição

Passa o conteúdo inserido para texto.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **conteúdo** | _[Storage](/docs/library/resources/storage)_ | Conteúdo a passar para texto. |

##### Retorno

( _string_ )

Retorna o HTML.

---

## verticalAlignment

---

#### _pdf.verticalAlignment(tipo: string) : com.itextpdf.layout.properties.VerticalAlignment
##### Descrição

Cria o tipo de alinhamento vertical.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **tipo** | _string_ | Nome do tipo de alinhamento, suporta:<ul><li>top</li><li>middle</li><li>bottom</li></ul> |

##### Retorno

( _com.itextpdf.layout.properties.VerticalAlignment_ )

Retorna o tipo de alinhamento vertical.

---

