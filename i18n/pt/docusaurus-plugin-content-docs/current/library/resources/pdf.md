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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>areaBreak</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.AreaBreak</span>
##### Descrição

Cria uma área de quebra que termina um tipo de área anterior.

##### Retorno

( _com.itextpdf.layout.element.AreaBreak_ )

Termina a área anterior e retorna a nova área.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>areaBreak</span>(<span style={{color: '#FF8000'}}>nPaginas</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.geom.PageSize</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.AreaBreak</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>areaBreak</span>(<span style={{color: '#FF8000'}}>tipo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.AreaBreak</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>cor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>cor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>cor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>cor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>cor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>cor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>cor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>opacidade</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>cor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>opacidade</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>cor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>cor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>cor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>cor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>opacidade</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>opacidade</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>cor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>opacidade</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>opacidade</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>opacidade</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>opacidade</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>opacidade</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>opacidade</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>cor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>cor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>cor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>cor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>cor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>cor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>cor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>opacidade</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>cor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>opacidade</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>cor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>cor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>cor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>opacity</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>cor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>opacidade</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>opacidade</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>opacidade</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>opacidade</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>opacidade</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>opacidade</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>opacidade</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>width</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>opacidade</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>opacidade</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>border3D</span>(<span style={{color: '#FF8000'}}>moldura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>opacidade</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.borders.Border3D</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>canvas</span>(<span style={{color: '#FF8000'}}>doc</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.pdf.PdfDocument</span>, <span style={{color: '#FF8000'}}>pageNum</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.pdf.canvas.PdfCanvas</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>canvas</span>(<span style={{color: '#FF8000'}}>page</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.pdf.PdfPage</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.pdf.canvas.PdfCanvas</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>cell</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Cell</span>
##### Descrição

Cria uma célula de tabela.

##### Retorno

( _com.itextpdf.layout.element.Cell_ )

Retorna a célula criada.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>cell</span>(<span style={{color: '#FF8000'}}>agregVertical</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>agregHorizontal</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Cell</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>color</span>(<span style={{color: '#FF8000'}}>color</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **color** | _string_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.Color_ )


---

## colorCMYK

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>colorCMYK</span>(<span style={{color: '#FF8000'}}>cyan</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>magenta</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>yellow</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>black</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.DeviceCmyk</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>colorCMYK</span>(<span style={{color: '#FF8000'}}>cyan</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>magenta</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>yellow</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>black</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.DeviceCmyk</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>colorCMYK</span>(<span style={{color: '#FF8000'}}>cyan</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>magenta</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>yellow</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>black</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.DeviceCmyk</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>colorGray</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.DeviceGray</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _double_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.DeviceGray_ )


---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>colorGray</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.DeviceGray</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _float_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.DeviceGray_ )


---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>colorGray</span>(<span style={{color: '#FF8000'}}>value</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.DeviceGray</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **value** | _int_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.DeviceGray_ )


---

## colorRGB

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>colorRGB</span>(<span style={{color: '#FF8000'}}>red</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>green</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>, <span style={{color: '#FF8000'}}>blue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.DeviceRgb</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **red** | _double_ |   |
| **green** | _double_ |   |
| **blue** | _double_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.DeviceRgb_ )


---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>colorRGB</span>(<span style={{color: '#FF8000'}}>red</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>green</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>blue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.DeviceRgb</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **red** | _float_ |   |
| **green** | _float_ |   |
| **blue** | _float_ |   |

##### Retorno

( _com.itextpdf.kernel.colors.DeviceRgb_ )


---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>colorRGB</span>(<span style={{color: '#FF8000'}}>red</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>green</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>blue</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.DeviceRgb</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>extract</span>(<span style={{color: '#FF8000'}}>conteúdo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>extract</span>(<span style={{color: '#FF8000'}}>armazenamento</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>extract</span>(<span style={{color: '#FF8000'}}>conteúdo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>font</span>(<span style={{color: '#FF8000'}}>armazenamento</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.font.PdfFont</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>font</span>(<span style={{color: '#FF8000'}}>armazenamento</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.font.PdfFont</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>font</span>(<span style={{color: '#FF8000'}}>armazenamento</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>codificação</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.font.PdfFont</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>font</span>(<span style={{color: '#FF8000'}}>armazenamento</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>codificação</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.font.PdfFont</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>font</span>(<span style={{color: '#FF8000'}}>armazenamento</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>codificação</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>embedded</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.font.PdfFont</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>font</span>(<span style={{color: '#FF8000'}}>armazenamento</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.font.PdfFont</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>font</span>(<span style={{color: '#FF8000'}}>armazenamento</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>codificação</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.font.PdfFont</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>font</span>(<span style={{color: '#FF8000'}}>armazenamento</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>codificação</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.font.PdfFont</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>font</span>(<span style={{color: '#FF8000'}}>armazenamento</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>codificação</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>embedded</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.font.PdfFont</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>getDocument</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.Document</span>
##### Descrição

Obtém o objecto Document do iText para a estrutura do documento PDF.

##### Retorno

( _com.itextpdf.layout.Document_ )

Gere a estrutura do documento.

---

## getPdfDocument

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>getPdfDocument</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.pdf.PdfDocument</span>
##### Descrição

Obtém o objecto PdfDocument do iText para a construção do documento PDF.

##### Retorno

( _com.itextpdf.kernel.pdf.PdfDocument_ )

Gere a construção do documento PDF.

---

## getPdfReader

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>getPdfReader</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.pdf.PdfReader</span>
##### Descrição

Obtém o objecto PdfReader do iText para a leitura do documento PDF.

##### Retorno

( _com.itextpdf.kernel.pdf.PdfReader_ )

Gere a leitura de documento PDF.

---

## getPdfWriter

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>getPdfWriter</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.pdf.PdfWriter</span>
##### Descrição

Obtém o objecto PdfWriter do iText para a escrita dos bytes do arquivo PDF.

##### Retorno

( _com.itextpdf.kernel.pdf.PdfWriter_ )

Gere a escrita dos bytes do arquivo PDF.

---

## horizontalAlignment

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>horizontalAlignment</span>(<span style={{color: '#FF8000'}}>tipo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.properties.HorizontalAlignment</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>image</span>(<span style={{color: '#FF8000'}}>file</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Image</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **file** | _[File](/docs/library/objects/File)_ |   |

##### Retorno

( _com.itextpdf.layout.element.Image_ )


---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>image</span>(<span style={{color: '#FF8000'}}>storage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Image</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **storage** | _[Storage](/docs/library/resources/storage)_ |   |

##### Retorno

( _com.itextpdf.layout.element.Image_ )


---

## init

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[PDF](/docs/library/resources/pdf)</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>line</span>(<span style={{color: '#FF8000'}}>tipo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>cor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>line</span>(<span style={{color: '#FF8000'}}>tipo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>cor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>line</span>(<span style={{color: '#FF8000'}}>linha</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>cor</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.colors.Color</span>, <span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>newDocument</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.Document</span>
##### Descrição

Cria um novo documento.

##### Retorno

( _com.itextpdf.layout.Document_ )


---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>newDocument</span>(<span style={{color: '#FF8000'}}>tamanhoPagina</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.geom.PageSize</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.Document</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>newDocument</span>(<span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.Document</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>newDocument</span>(<span style={{color: '#FF8000'}}>saida</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>, <span style={{color: '#FF8000'}}>nPaginas</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.geom.PageSize</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.Document</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>newDocument</span>(<span style={{color: '#FF8000'}}>saida</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO</span>, <span style={{color: '#FF8000'}}>nPaginas</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.geom.PageSize</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.Document</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>openDocument</span>(<span style={{color: '#FF8000'}}>caminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.Document</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>openDocument</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>, <span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.Document</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _com.itextpdf.layout.Document_ )


---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>openDocument</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>, <span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.Document</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **out** | _[Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO_ |   |

##### Retorno

( _com.itextpdf.layout.Document_ )


---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>openDocument</span>(<span style={{color: '#FF8000'}}>caminho</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.Document</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>openDocument</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO</span>, <span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[OutputStream](/docs/library/objects/OutputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.Document</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO_ |   |
| **out** | _[OutputStream](/docs/library/objects/OutputStream)_ |   |

##### Retorno

( _com.itextpdf.layout.Document_ )


---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>openDocument</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO</span>, <span style={{color: '#FF8000'}}>out</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage) &#124; [File](/docs/library/objects/File) | org.netuno.psamata.io.IO</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.Document</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>pageSize</span>(<span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>, <span style={{color: '#FF8000'}}>altura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.geom.PageSize</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>pageSize</span>(<span style={{color: '#FF8000'}}>pagina</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.geom.PageSize</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>paragraph</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Paragraph</span>
##### Descrição

Cria um parágrafo.

##### Retorno

( _com.itextpdf.layout.element.Paragraph_ )

O novo objeto de parágrafo com o objeto de texto adicionado como conteúdo.

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>paragraph</span>(<span style={{color: '#FF8000'}}>texto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Text</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Paragraph</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>paragraph</span>(<span style={{color: '#FF8000'}}>texto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Paragraph</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>paragraphArea</span>(<span style={{color: '#FF8000'}}>paragrafo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Paragraph</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.geom.Rectangle</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>setDocument</span>(<span style={{color: '#FF8000'}}>documento</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.Document</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[PDF](/docs/library/resources/pdf)</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>string</span>(<span style={{color: '#FF8000'}}>texto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>byte[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.pdf.PdfString</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>string</span>(<span style={{color: '#FF8000'}}>texto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.pdf.PdfString</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>string</span>(<span style={{color: '#FF8000'}}>texto</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>codificacao</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.kernel.pdf.PdfString</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>style</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.Style</span>
##### Descrição

Cria um novo estilo que é útil para reutilizar a estilização.

##### Retorno

( _com.itextpdf.layout.Style_ )

Retorna um novo estilo para PDF.

---

## table

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>table</span>(<span style={{color: '#FF8000'}}>colunas</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Table</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>table</span>(<span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>double[]</span>, <span style={{color: '#FF8000'}}>tabelaLarga</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Table</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>table</span>(<span style={{color: '#FF8000'}}>colunas</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Table</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>table</span>(<span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>float[]</span>, <span style={{color: '#FF8000'}}>tabelaLarga</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Table</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>table</span>(<span style={{color: '#FF8000'}}>colunas</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Table</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>table</span>(<span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int[]</span>, <span style={{color: '#FF8000'}}>tabelaLarga</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Table</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>table</span>(<span style={{color: '#FF8000'}}>colunas</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Table</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>table</span>(<span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Table</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>table</span>(<span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.List&lt;?&gt;</span>, <span style={{color: '#FF8000'}}>tabelaLarga</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Table</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>table</span>(<span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Table</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>table</span>(<span style={{color: '#FF8000'}}>largura</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>tabelaLarga</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Table</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>text</span>(<span style={{color: '#FF8000'}}>conteúdo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.element.Text</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>textAlignment</span>(<span style={{color: '#FF8000'}}>tipo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.properties.TextAlignment</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toHTML</span>(<span style={{color: '#FF8000'}}>conteúdo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toHTML</span>(<span style={{color: '#FF8000'}}>conteúdo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toHTML</span>(<span style={{color: '#FF8000'}}>conteúdo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toHTML</span>(<span style={{color: '#FF8000'}}>conteúdo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>, <span style={{color: '#FF8000'}}>startPage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>endPage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dpi</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>, <span style={{color: '#FF8000'}}>startPage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>endPage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dpi</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>, <span style={{color: '#FF8000'}}>pageNumber</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>, <span style={{color: '#FF8000'}}>pageNumber</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dpi</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>, <span style={{color: '#FF8000'}}>pageNumber</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>, <span style={{color: '#FF8000'}}>pageNumber</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dpi</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dpi</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dpi</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>source</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>startPage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>endPage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dpi</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>source</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>startPage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>endPage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dpi</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>source</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>pageNumber</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>source</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>pageNumber</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dpi</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>source</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>pageNumber</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>source</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>pageNumber</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dpi</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>source</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>source</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dpi</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>source</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>source</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dpi</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>source</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>startPage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>endPage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dpi</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>source</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>startPage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>endPage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dpi</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>source</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>pageNumber</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>source</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>pageNumber</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dpi</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>source</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>pageNumber</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>source</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>pageNumber</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dpi</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>source</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>source</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dpi</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>source</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImage</span>(<span style={{color: '#FF8000'}}>source</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>destinationPath</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>, <span style={{color: '#FF8000'}}>filePrefixName</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dpi</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImageAsByteArray</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>, <span style={{color: '#FF8000'}}>startPage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>endPage</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dpi</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>?[]</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **startPage** | _int_ |   |
| **endPage** | _int_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Retorno

( _?[]_ )


---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImageAsByteArray</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>, <span style={{color: '#FF8000'}}>pageNumber</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>?[]</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **pageNumber** | _int_ |   |
| **fileExtension** | _string_ |   |

##### Retorno

( _?[]_ )


---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImageAsByteArray</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>, <span style={{color: '#FF8000'}}>pageNumber</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dpi</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>?[]</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **pageNumber** | _int_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Retorno

( _?[]_ )


---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImageAsByteArray</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>?[]</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **fileExtension** | _string_ |   |

##### Retorno

( _?[]_ )


---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toImageAsByteArray</span>(<span style={{color: '#FF8000'}}>in</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>, <span style={{color: '#FF8000'}}>fileExtension</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>dpi</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>int</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>?[]</span>
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| **in** | _[InputStream](/docs/library/objects/InputStream)_ |   |
| **fileExtension** | _string_ |   |
| **dpi** | _int_ |   |

##### Retorno

( _?[]_ )


---

## toText

---

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toText</span>(<span style={{color: '#FF8000'}}>conteúdo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toText</span>(<span style={{color: '#FF8000'}}>conteúdo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[File](/docs/library/objects/File)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toText</span>(<span style={{color: '#FF8000'}}>conteúdo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[InputStream](/docs/library/objects/InputStream)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>toText</span>(<span style={{color: '#FF8000'}}>conteúdo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Storage](/docs/library/resources/storage)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>
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

#### <span style={{fontWeight: 'normal'}}>_pdf</span>.<span style={{color: '#008000'}}>verticalAlignment</span>(<span style={{color: '#FF8000'}}>tipo</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>com.itextpdf.layout.properties.VerticalAlignment</span>
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

