---
id: pdf
title: PDF
sidebar_label: PDF
---

## Introdução

O Netuno gera arquivos PDF com suporte a imagens, tabelas, fontes, e muito mais.

Através do recurso [PDF](../../../library/resources/pdf) que permite uma abstração low-code do [iTextPDF](https://itextpdf.com/) para as diversas linguagens de programação suportas pelo Netuno.

A aplicação que vem com o Netuno denominada **demo** (aplicação de demonstração) contém bastantes exemplos das possíveis implementações de código em várias linguagens, incluindo a demonstração da exportação para PDF através do serviço `export-pdf` que se localiza em:

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

## Inicialização

Em primeiro lugar é preciso criar o objeto que vai conter o contexto do novo documento que está sendo criado, por padrão o tamanho das páginas é o A4.

Ao criar o documento é definido onde ele será gerado.

Se nada for definido, ele será gerado na saída de dados do serviço, por exemplo:

```javascript
const pdfDocument = _pdf.newDocument()
```

Se for gerar o documento em um novo arquivo, por exemplo:

```javascript
const pdfDocument = _pdf.newDocument(_os.file('/tmp/file.pdf'))
```

Ou ainda no `storage` da aplicação:

```javascript
const pdfDocument = _pdf.newDocument(_storage.filesystem('server', 'file.pdf'))
```

> Por padrão o documento é criado com o formato de página **A4**.

### Formato de Página

Para customizar o formato da página basta idicar na criação do documento.

Cria um novo documento para a saída de dados do serviço com páginas no formato **carta**:

```javascript
const pdfDocument = _pdf.newDocument(_pdf.pageSize("letter"))
```

Cria um novo documento para um arquivo na raíz da aplicação com o formato de página **B3**:

```javascript
const pdfDocument = _pdf.newDocument(_app.file('file.pdf'), _pdf.pageSize("B3"))
```

Cria um novo documento no `storage` da aplicação com o formato de página **legal**:

```javascript
const pdfDocument = _pdf.newDocument(_storage.filesystem('server', 'file.pdf'), _pdf.pageSize("legal"))
```

> Veja a documentação sobre a [definição do tamanho das páginas](../../../library/resources/pdf/#pagesize).

Os documentos PDF podem ser criados com a definição do tamanho da página personalizado, para isso utilize o `pageSize` passando o valor da largura e altura da página, por exemplo:

```javascript
_pdf.pageSize(50, 30)
```

## Quebra de Página

Para criar uma nova página é utilizado o `areaBreak`:

```javascript
pdfDocument.add(
    _pdf.areaBreak()
)
```

## Fechar e Salvar o Documento

O documento só é totalmente guardado ou gerado, apenas quando o método `close` for chamado, da seginte forma:

```javascript
pdfDocument.close()
```
