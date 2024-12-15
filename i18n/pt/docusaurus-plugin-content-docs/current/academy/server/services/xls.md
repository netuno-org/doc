---
id: xls
title: XLS - Excel
sidebar_label: XLS - Excel
---

## Introdução

O Netuno gera arquivos EXCEL compatível com o LibreOffice, OpenOffice, Microsoft Office, Google Drive, etc.

Através do recurso [XLS](../../../library/resources/xls) que permite uma abstração low-code do [Apache POI](https://poi.apache.org/) para as diversas linguagens de programação suportas pelo Netuno.

Podemos tanto gerar arquivos XLSX, XLS ou ODS.

A aplicação que vem com o Netuno denominada **demo** (aplicação de demonstração) contém bastantes exemplos das possíveis implementações de código em várias linguagens, incluindo a demonstração da exportação de planilhas através do serviço `export-excel` que se localiza em:

<!--DOCUSAURUS_CODE_TABS-->
<!--Groovy-->
```plaintext
/apps/demo/server/services/samples/groovy/export-excel.groovy
```
<!--JavaScript-->
```plaintext
/apps/demo/server/services/samples/javascript/export-excel.js
```
<!--Kotlin-->
```plaintext
/apps/demo/server/services/samples/kotlin/export-excel.kts
```
<!--Python-->
```plaintext
/apps/demo/server/services/samples/python/export-excel.py
```
<!--Ruby-->
```plaintext
/apps/demo/server/services/samples/ruby/export-excel.rb
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Inicialização

Para iniciar o recurso XLS:

```javascript
const excel = _xls.create()
```

Cria o objeto que contém o contexto do novo arquivo que será construído, com uma folha de cálculos vazia.

## Formatação

A definição de estilos de formatação visual, ou seja formato de datas, horas, dinheiro, entre outros, deve ser feita antes da definição de valores das células, por que ao definir os valores das células é possível associar junto o seu estilo de formatação.

Então como é demonstrado no exemplo que vem na aplicação `demo`, as formatações são definidas logo no início do código.

Para formatar datas:

```javascript
const styleDate = excel.cellStyleFormat("dd/mm/yy")
```

Para formatar horários:

```javascript
const styleTime = excel.cellStyleFormat("hh:mm:ss")
```

Para formatar datas com horários:

```javascript
const styleDateTime = excel.cellStyleFormat("dd/mm/yyyy hh:mm:ss")
```

Para formatar valores de dinheiro em **euro**:

```javascript
const styleMoneyEuro = excel.cellStyleFormat("€#,##0.00;\\-€#,##0.00")
```

Para formatar valores de dinheiro em **reais**:

```javascript
const styleMoneyReal = excel.cellStyleFormat("R$#,##0.00;\\-R$#,##0.00")
```

Para formatar valores em **porcentagem**:

```javascript
const stylePercentage = excel.cellStyleFormat("0.00%")
```

## Aparência

A definição de estilos de aparência visual, ou seja a aparência de células como cores, fonte, bordas, alinhamento, entre outros, deve ser feita antes da definição de valores das células, por que ao definir os valores das células é possível associar junto o seu estilo de aparência.

Então como é demonstrado no exemplo que vem na aplicação `demo`, as aparências são definidas logo no início do código.

Exemplo para a definição de cores e alinhamento:

```javascript
const styleHeader = excel.cellStyle()
styleHeader.setFillPattern(_xls.fillPattern("solid-foreground"))
styleHeader.setFillBackgroundColor(_xls.color("black"))
styleHeader.setAlignment(_xls.horizontalAlignment("center"))
```

> Documentação com todos os métodos do objeto de <a href="https://poi.apache.org/apidocs/dev/org/apache/poi/hssf/usermodel/HSSFCellStyle.html" target="_blank">Estilos no Apache POI</a>.

Definição do estilo de bordas:

```javascript
const styleData = excel.cellStyle()
styleData.setBorderBottom(_xls.borderStyle('thin'))
styleData.setBorderTop(_xls.borderStyle('thin'))
styleData.setBorderLeft(_xls.borderStyle('thin'))
styleData.setBorderRight(_xls.borderStyle('thin'))
```

> Documentação com todos os métodos do objeto de <a href="https://poi.apache.org/apidocs/dev/org/apache/poi/hssf/usermodel/HSSFCellStyle.html" target="_blank">Estilos no Apache POI</a>.

Cria um novo estilo de fonte para o texto, associa as definições da fonte em um determinado estilo da célula já existente:

```javascript
const fontTitle = excel.font()
fontTitle.setBold(true)
fontTitle.setFontHeightInPoints(14)
fontTitle.setColor(_xls.color('yellow'))
// Define a fonte do styleHeader
styleHeader.setFont(fontTitle)
```

> Documentação com todos os métodos do objeto de <a href="https://poi.apache.org/apidocs/dev/org/apache/poi/hssf/usermodel/HSSFFont.html" target="_blank">Fonte no Apache POI</a>.

## Imagem

Para inserir uma imagem na planilha que está localizada em `storage/samples/export-excel/logo.png` internamente na aplicação:

```javascript
excel.insertPicture(
    _storage.filesystem("server", "samples/export-excel", "logo.png"),
    1, // Número da Coluna
    1  // Número da Linha
).resize(2.3)
```

Para inserir uma imagem que está na aplicação em `public/images/logo.png`:

```javascript
excel.insertPicture(
    _app.file("public/images/logo.png"),
    10, // Número da Coluna
    1  // Número da Linha
).resize(1.5)
```

> Documentação com todos os métodos do objeto de <a href="https://poi.apache.org/apidocs/dev/org/apache/poi/ss/usermodel/Picture.html" target="_blank">Imagem no Apache POI</a>.

## Mesclar Células

Para juntar células em uma região utilizamos o método `mergedRegion`.

Sendo que a ordem dos parâmetros são:

1. Linha Inicial
2. Coluna Inicial
3. Linha Final
4. Coluna Final

> As referências numéricas de posicionamento começam sempre em **zero**.

Neste exemplo abaixo será mesclada todas as células a partir da coluna 10 até a coluna 15 que estão na linha 3:

```
excel.mergedRegion(2, 9, 2, 14)
```

## Células

Para obter o objeto que representa uma célula:

```
// Obtém a célula que está na coluna B e na linha 2:
const celula = excel.cell(1, 1)
```

> As referências numéricas de posicionamento começam sempre em **zero**.

Exemplo de como apresentar em log a fórmula da célula:

```
// Loga a fórmula da linha 2 e coluna B.
_log.info(
    'Fórmula Célula B2: '+ excel.cell(1, 1).getCellFormula()
)
```

Exemplo de como obter o valor de texto de uma célula:

```
// Loga o valor de texto da célula da linha 2 e coluna B.
_log.info(
    'Valor Célula B2: '+ excel.cell(1, 1).getStringCellValue()
)
```

> Documentação com todos os métodos do objeto de <a href="https://poi.apache.org/apidocs/dev/org/apache/poi/hssf/usermodel/HSSFCell.html" target="_blank">Célula no Apache POI</a>.

## Linhas

Para obter o objeto que representa uma linha:

```
// Obtem o objeto que representa a linha 2.
const linha = excel.row(1)
```

> As referências numéricas de posicionamento começam sempre em **zero**.

No exemplo acima caso a linha não exista será criada uma nova linha automaticamente.

> Documentação com todos os métodos do objeto de <a href="https://poi.apache.org/apidocs/dev/org/apache/poi/hssf/usermodel/HSSFRow.html" target="_blank">Linha no Apache POI</a>.

## Inserir Dados Tabelados

Podemos inserir uma tabela de dados utilizando o método `addDataTable`.

Como os dois primeiros parâmetros definem a posição onde a tabela de dados deve ser inserida, eles são os números das linhas e das colunas.

> Atenção que o posicionamento no código de linhas e colunas começam sempre a partir do **zero**.
>
> Ou seja, a Linha 1 é a posição `0` e a Coluna A também é a posição `0`.

A seguir passamos uma lista de linhas, onde cada linha contém outra lista para as colunas, só então adicionamos um mapa com o valor da célula.

Exemplo completo:

```javascript
excel.addDataTable(
    6, 1,
    _val.list() // Linhas
        .add(
            _val.list() // Coluna
                .add(
                    _val.map() // Célula
                        .set("value", "Nome")
                )
                .add(
                    _val.map()
                        .set("value", "Idade")
                )
        )
        .add( // Outra Linha
            _val.list()
                .add( // Primeira Coluna
                    _val.map()
                        .set("value", "Maria")
                )
                .add( // Segunda Coluna
                    _val.map()
                        .set("value", 26)
                )
        )
)
```

### Aparência

No mapa das células podemos associar os estilo já criados, utilizando por exemplo os estilos definidos na secção da aparência e formatação que vimos anteriormente.

Segue o exemplo de como associar os estilos nas células:

```javascript
excel.addDataTable(
    6, 1,
    _val.list()
        .add(
            _val.list()
                .add(
                    _val.map()
                        .set("value", "Nome")
                        .set("style", styleHeader)
                )
                .add(
                    _val.map()
                        .set("value", "Idade")
                        .set("style", styleHeader)
                )
        )
)
```

### Fórmulas

Para inserir fórmulas utilizamos a chave `formula` no mapa de definições da célula.

Neste exemplo será realizado a soma na última célula todos os valores das outras células:

```javascript
excel.addDataTable(
    6, 1,
    _val.list()
        .add(
            _val.list()
                .add(_val.map().set("value", 45))
                .add(_val.map().set("value", 26))
        )
        .add(
            _val.list()
                .add(_val.map().set("value", 51))
                .add(_val.map().set("value", 30))
        )
        .add(
            _val.list()
                .add(
                    _val.map().set("value", "Total")
                )
                .add(
                    _val.map().set("formula", "SUM(B7:C8)")
                )
        )
)
```

Para obter a letra da coluna a partir de número da coluna pode ser utilizado o método `columnReference`, o que pode ajudar na definição das fórmulas. O mesmo método também pode ser utilizado para obter o número da coluna a partir da letra de referência, por exemplo:

```javascript
excel.addDataTable(
    6, _xls.columnReference('B'),
    _val.list()
        .add(
            _val.list()
                .add(_val.map().set("value", 45))
                .add(_val.map().set("value", 26))
        )
        .add(
            _val.list()
                .add(_val.map().set("value", 51))
                .add(_val.map().set("value", 30))
        )
        .add(
            _val.list()
                .add(
                    _val.map().set("value", "Total")
                )
                .add(
                    _val.map().set(
                        "formula",
                        `SUM(${_xls.columnReference(1)}7:${_xls.columnReference(2)}8)`
                )
            )
        )
)
```

## Planilhas

Para criar uma nova folha de cálculos (_sheet_) dentro do próprio documento, observe o seguinte exemplo:

```javascript
const novaPlanilha = excel.createSheet('Nova Planilha')
```

> Nos métodos de manipulação de células, imagens e dados, pode ser adicionado no primeiro parâmetro a referência do objeto da planilha.
>
> Depende de qual planilha esteja ativa, é possivel alterar a planilha ativa com o método [activeSheet](../../../library/resources/xls#activesheet).

Exemplo de como inserir uma imagem na nova planilha:

```javascript
excel.insertPicture(
    novaPlanilha,
    _app.file("public/images/logo.png"),
    10, // Número da Coluna
    1  // Número da Linha
).resize(1.5)
```

Exemplo de como inserir uma tabela de dados na nova planilha:

```javascript
excel.addDataTable(
    novaPlanilha,
    6, 1,
    _val.list()
        .add(
            _val.list()
                .add(_val.map().set("value", 45))
                .add(_val.map().set("value", 26))
        )
        .add(
            _val.list()
                .add(_val.map().set("value", 51))
                .add(_val.map().set("value", 30))
        )
        .add(
            _val.list()
                .add(
                    _val.map().set("value", "Total")
                )
                .add(
                    _val.map().set("formula", "SUM(B7:C8)")
                )
        )
)
```

### Ativar

Assim para evitar ter que indicar constantemente nos métodos qual é a planilha que deve ser processada, como nos exemplos acima, em alternativa é possível indicar qual é a planilha ativa.

> Todos os métodos de manipulação de células, imagens e dados, utilizam a planilha que está ativada quando **não** é indicado uma planilha específica.

Veja duas formas de ativar uma planilha específica, primeiro com referência do objeto e depois com o índice da planilha:

```javascript
excel.activeSheet(minhaPlanilha) // Objeto de referência da planilha.
excel.activeSheet(1) // Índice da planilha que será ativada.
```

### Recursos Úteis

Exemplos de outros métodos úteis na manipulação de planilhas.

Obter uma planilha pelo nome:

```javascript
// Obtém a planilha a partir do seu nome.
const minhaPlanilha = excel.getSheet('Nome da Planilha')
```

Obter uma planilha pelo seu índice:

```javascript
// Obtém a planilha a partir do respectivo número.
const minhaPlanilha = excel.getSheet(1)
```

Para obter o número total de planilhas:

```javascript
// Número total de planilhas.
const totalDePlanilhas = excel.getNumberOfSheets()
```

Para listar todas as planilhas existentes no documento.

```javascript
// Lista todas as planilhas.
const todasAsPlanilhas = excel.getAllSheets()
for (const sheet of todasAsPlanilhas) {
    ...
}
```

> Documentação com todos os métodos do objeto de <a href="https://poi.apache.org/apidocs/dev/org/apache/poi/hssf/usermodel/HSSFSheet.html" target="_blank">Planilha no Apache POI</a>.

## Gerar Arquivo

Nos métodos de `save` e `output` é gerado o binário do arquivo final.

Envia o arquivo gerado como saída de dados (`output`) do serviço:

```javascript
excel.output('file.xls')
```

Para guardar o arquivo gerado na pasta `storage/filesystem` da aplicação:

```javascript
excel.save(_storage.filesystem('server', 'file.xls'))
```

Para salvar o arquivo gerado na pasta `/tmp` a partir do sistema de arquivos do HD:

```javascript
excel.save(_os.file('/tmp/file.xls'))
```

## Editar Arquivo

Podemos editar arquivos abrindo eles, realizando as alterações necessárias e depois salvar o novo arquivo editado.

Segue abaixo alguns exemplos de como é possível abrir arquivos.

Abrir um arquivo na raíz da aplicação:

```javascript
const excel = _xls.open(_app.file('file.xls'))
```

Para abrir o arquivo gerado na pasta `storage/filesystem` da aplicação:

```javascript
const excel = _xls.open(_storage.filesystem('server', 'file.xls'))
```

E ainda para abrir o arquivo na pasta `/tmp` a partir do sistema de arquivos do HD:

```javascript
const excel = _xls.open(_os.file('/tmp/file.xls'))
```

Nos exemplos acima a constante `excel` vai conter o objeto de edição com o contexto do respectivo arquivo, assim é possível fazer qualquer tipo de manipulação.

Quando concluir as alterações realize a geração do novo arquivo.

> Não é possível alterar diretamente o mesmo arquivo aberto, sendo necessário gerar um novo arquivo com um caminho diferente.

Para alterar diretamente o mesmo arquivo, então pode ser feito utilizando o `inputStream`.

Segue um exemplo de como alterar o valor de uma célula:

```javascript
const fileInput = _app.file('file.xls').inputStream()
const excel = _xls.open(fileInput)

excel.setCellData(
    10, 1,
    _val.map()
        .set(
            "value",
            excel.getCellData(10, 1).getInt("value") + 10
        )
)

fileInput.close() // Fecha o arquivo aberto.
excel.save(_app.file('file.xls')) // Salva a nova versão.
```

## Ler Arquivo

A extração de dados de arquivos em Excel é feita com o método `read`.

```
const dados = _xls.read(_app.file('file.xlsx'))
```

Os dados são obtidos em uma estrutura de objetos do tipo Values com contém Listas, para as planilhas, linhas e colunas, e Mapas (chave e valor) para as células.

Para visualizar todos os dados podemos colocar como saída de dados do serviço:

```
_out.json(dados)
```

Para realizar a interação temos que ter em mente que a estrutura dos dados é organizada na seginte ordem:

1. `sheets` - Planilhas
2. `rows` - Linhas
3. `columns` - Colunas

Exemplo de uma interação completa:

```
for (const planilha of dados.getValues('sheets')) {
    _out.println(`<h4>Planilha: ${planilha.getInt('index')} - ${planilha.getString('name')}</h4>`)
    for (const linha of planilha.getValues('rows')) {
        _out.println(`<h4>Linha: ${linha.getInt('row')}</h4>`)
        _out.println('<p>')
        for (const coluna of linha.getValues('columns')) {
            _out.print(`${coluna.getInt('row')}:${coluna.getInt('column')}`)
            _out.print(` # ${coluna.getString('address')}`)
            _out.print(` # ${coluna.getString('type')}`)
            _out.print(` # ${coluna.getString('value')}`)
            _out.println('<br>')
        }
        _out.println('</p>')
    }
}
```

O tipo da célula é obtido através do código:

- `coluna.getString('type')`

E os tipos suportados são:

- `string` - Conteúdo de texto.
- `numeric` - Conteúdo numérico ou de data e/ou hora.
- `boolean` - Verdadeiro ou falso.
- `blank` - Célula em branco.
- `formula` - Célula que contém um fórmula.
- `error` - Erro no processamento da célula.

### Parâmetros Adicionais

Para cada tipo de célula temos alguns parâmetros adicionais.

`string` - Tipo de célula com conteúdo textual.

- `value` - Texto da célula.
- `richValue` - Formatações da célula.

`numeric` - Tipo de célula com conteúdo numérico, ou datas e ainda horas.

- `value` - Valor do conteúdo numérico da célula.
  
No caso de datas e horas temos mais estes parâmetros adicionais:

- `localDateTime` - Objeto do Java Time LocalDateTime que representa o valor de data e hora da célula.
- `localDate` - Objeto do Java Time LocalDate que representa o valor de data da célula.
- `localTime` - Objeto do Java Time LocalTime que representa o valor de hora da célula.
- `instant` - Objeto do Java Time Instant que representa o valor de data e/ou hora da célula.
- `date` - Objeto Date do Java que representa o valor de data e/ou hora da célula.

`boolean` - Tipo de célula com conteúdo booleano, ou seja verdadeiro ou falso.

- `value` - Valor do tipo _boolean_, `true` ou `false`.

`blank` - Tipo de célula sem conteúdo, portanto não contém parâmetros adicionais.

`formula` - Tipo de célula que contém fórmulas de cálculo.

- `value` - Valor final resultante do cálculo.
- `formula` - Contém a expressão da fórmula utilizada para o cálculo.

`error` - Tipo de célula que contém erro.

- `value` - Valor em byte do erro gerado.
- `code` - No caso de haver erros no cálculo da fórmula fornece aqui o código do erro ocorrido.
