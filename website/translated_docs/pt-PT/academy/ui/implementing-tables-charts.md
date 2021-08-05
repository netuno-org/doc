---
id: implementing-tables-charts
title: Implementação de tabelas e gráficos
sidebar_label: Implementação de tabelas e gráficos
---

### Antes de Começar
Antes de começar este tutorial certifique-se que sabe criar **Formulários, Campos, Relações e Serviços Web Rest** onde aprofundamos mais cada explicação, caso não o saiba visite as respetivas ligações:

* [Formulários](academy/explore/graphical-interface/forms.md)
* [Campos](academy/explore/graphical-interface/fields.md)
* [Relações entre formulários](academy/explore/graphical-interface/relationships-between-forms.md)
* [Serviços Web REST](web-rest-services.md)

É também aconselhável que, antes de começar este tutorial, se certifique que tem noções básicas em _**JavaScript**_, _**React.js**_ e _**HTML**_.

### Introdução

Neste tutorial iremos explicar como desenvolver uma aplicação simples que envolve a criação de formulários, relações entre os mesmos, serviços, tabelas e gráficos que apresentam os dados do serviço utilizando uma biblioteca denominada de _<a href="https://www.npmjs.com/package/react-chartjs-2" target="_blank">React ChartJS 2</a>_ (que necessita também da dependência _Chart.js_), tudo isto criado em _JavaScript, React.js e HTML_.

### Produto Final

Se seguir todos os passos descritos neste tutorial, a sua aplicação irá ficar semelhante à apresentada na seguinte imagem:

![implementaçaotabelasgraficos1.png](assets/implementaçaotabelasgraficos1.png)

[//]: # (Ligação para efetuar o download da aplicação: [Aplicação](https://www.netuno.org/wp-content/uploads/2018/08/registohoras.zip)

[//]: # (Para a poder utilizar a aplicação basta descompactar os conteúdos do zip no diretório do Netuno e para correr a aplicação execute o seguinte comando:)

[//]: # (```shell)
[//]: # (java -jar netuno.jar server app=registohoras)
[//]: # (```)

[//]: # (> Para efeitos de exemplo a aplicação foi denominada de 'registohoras', caso não tenha efetuado o download da aplicação bastará substituir 'registohoras' pelo nome da sua aplicação)

### Primeiro Passo

O primeiro passo será criar os formulários, as respectivas relações e popular com alguns dados, segue-se uma imagem referente à estrutura dos formulários e campos utilizados neste tutorial:
![implementaçaotabelasgraficos2.png](assets/implementaçaotabelasgraficos2.png)

> Nota: Não é necessário criar o campo de id porque o Netuno o cria automaticamente após a criação da tabela.

Vamos analisar o template da _dashboard_ do Netuno. Para tal basta dirigir-se ao seguinte diretório:

```plaintext
/apps/minhaapp/server/templates/dashboard.html
```

Vamos agora analisar o código apresentado a seguir, este código será utilizado mais tarde como referência para se _injetarem_ os componentes da Tabela e do Gráfico.

```html
<div id="app-dashboard"></div>
```

### Segundo Passo

Agora iremos criar os serviços que irão ser utilizados para popular os dados da tabela e do gráfico. Para criar os ficheiros dirija-se ao seguinte diretório e crie primeiro um ficheiro denominado de `registos.js` (o nome do ficheiro é este para efeitos de exemplo)

```plaintext
/apps/minhaapp/server/services/
```

Segue-se o código criado para tal efeito, em que são selecionados todos os _trabalhadores_ e as respetivas _horas de entrada_ e _horas de saída_ e é efetuada uma soma das mesmas apresentando o total de horas por trabalhador.

```javascript
// Para realizar uma query simples utilizamos _db.query() que é uma função Netuno
var registos = _db.query('SELECT DISTINCT trabalhador.nome, SUM(DATEDIFF(HOUR, registo.hora_entrada, registo.hora_saida)) AS total FROM registo INNER JOIN trabalhador ON registo.trabalhador_id = trabalhador.id GROUP BY trabalhador.nome ORDER BY total ASC');

// Inicializar a variável para que esta possa receber valores
var registosProcessados = _val.init();

// Iteração por todos os registos para receber cada trabalhador, a data e as horas respectivas
if (registos) {

    for (var i = 0; i < registos.size(); i++){

        var registo = registos.get(i);

        var item = _val.init()
            .set("trabalhador", registo.getString("nome"))
            .set("trabalhadorHoras", registo.getInt("total"))

        registosProcessados.push(item);
    }
} 

// Visualizar no ecrã os valores
_out.json(registosProcessados);
```

A seguir crie um ficheiro chamado `calc-hours.js` no directório:

```plaintext
/apps/minhaapp/server/services/
```

Este serviço incrementa horas na data atual para encontrar o resultado final.

```javascript
var values = _val.init()

var date = new Date()
date.setHours(date.getHours() + _req.getInt('hours'))

values.set("date", _date_format.date().format(date))
values.set("time", _date_format.time().format(date))


_out.json(values)
```


### Terceiro Passo

**Antes de começar a desenvolver em _React.js_** certifique-se que executou o comando `npm install` no diretório `/apps/minhaapp/ui` e que após a sua conclusão executou o comando `npm run watch` para compilar as suas alterações.

**Para poder utilizar a biblioteca _React Chartjs 2_** execute também o comando `npm install react-chartjs-2 chart.js --save`

Criação das classes em _React.js_ que permitirão imprimir no ecrã a tabela e o gráfico com os dados dos serviços. Para tal efeito iremos criar duas pastas: 

* Table
* ChartBar

Estas devem ser criadas no seguinte diretório:

```plaintext
/apps/minhaapp/ui/src/components/
```


### Quarto Passo

Iremos agora criar o componente responsável pela tabela no diretório `Table`, o ficheiro `index.jsx` da seguinte forma:

```javascript
import React, { Component } from 'react';

import styles from './index.less';

export default class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tableData: {}
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if (nextProps.tableData) {
            return {
                tableData: nextProps.tableData
            }
        }
        return null;
    }

    render() {

        const tableFinalData = this.state.tableData.map((registo, i) =>
            <tr key={i}>
                <td>{registo.trabalhador}</td><td>{registo.trabalhadorHoras}</td>
            </tr>
        );

        return (
            <table className={ styles.table }>
                <thead>
                <tr>
                    <th>Trabalhador</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                    {tableFinalData}
                </tbody>
            </table>
        )
    }
}
```

Iremos agora criar um ficheiro de estilos para a tabela no diretório `Table`, o ficheiro `index.less` da seguinte forma:

```less
.table {
    width: 100%;
    padding-top: 15px;
    padding-left: 15px;
    th, td {
        padding: 5px;
        border: 1px solid black;
        text-align: center;
    }
}
```
### Quinto Passo


Iremos agora criar o componente responsável pelo gráfico no diretório `ChartBar`, o ficheiro `index.jsx` da seguinte forma:

```javascript
import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

export default class ChartBar extends Component {

    constructor(props) {

        super(props);
        this.state = {
            chartData: {}
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){

      if (nextProps.chartData) {

        // Receção e processamento dos dados
        let colors = [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ]

        let labels = [];
        let values = [];
        let chartDataValues = {
          labels: [],
          datasets: [
            {
              label: "Horas",
              data: [],
              backgroundColor: []
            }
          ]
        };

        for (const i in nextProps.chartData) {
             labels.push(nextProps.chartData[i].trabalhador);
             values.push(nextProps.chartData[i].trabalhadorHoras);
             chartDataValues.datasets[0].backgroundColor[i] = colors[i];
        }

        chartDataValues.labels = labels;
        chartDataValues.datasets[0].data = values;

        return {chartData: chartDataValues};
      }
      return null;
  }

    render() {
        return (

          <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            },
            scales: {
              yAxes: [{
                display: true,
                ticks: {
                  suggestedMin: 0,
                }
              }]
            }
          }}
          />
        )
    }
}
```

### Sexto Passo

Iremos agora editar o container responsável por processar os dados dos serviços, o `DashboardContainer`.

Este container permitirá a passagem dos dados para a tabela e para o gráfico,e
também possibilita  renderizar os dois componentes anteriormente explicados.

Este container está no seguinte diretório:

```plaintext
/apps/minhaapp/ui/src/containers/DashboardContainer/
```
O ficheiro a editar é o `index.jsx` da seguinte forma:


```javascript
import React, { Component } from "react";
import Table from "../../components/Table/index.jsx";
import ChartBar from "../../components/ChartBar/index.jsx";

import styles from './index.less';

export default class DashboardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: [],
            chartData: {}
        };

        this.input = React.createRef();
        this.result = React.createRef();
        this.handleChange = this.handleChange.bind(this);
    }

    // Chamada aos dados para a tabela e gráfico serem criadas
    componentDidMount() {
        this.getRecords();
    }

    handleChange(event) {
        if (isNaN(event.target.value)) {
            this.setState({ calc_hours: parseInt(this.state.calc_hours) });
            return;
        }
        let self = this;
        fetch('/services/calc-hours.netuno?hours='+ event.target.value, {
            credentials: 'include'
        }).then((response) => {
            return response.json();
        }).then((json) => {
            self.result.current.innerText = json.date +' '+ json.time;
        });
        this.setState({ calc_hours: event.target.value });
    }

    // Criação da chamada ao serviço registos.netuno
    getRecords() {
        let that = this;
        fetch('/services/registos.netuno', {
            credentials: 'include'
        }).then((response) => {
            return response.json();
        }).then((json) => {
            if (!json.length) {
                return;
            } else {
                // Adição dos dados à tabela e gráfico
                that.setState({ tableData: json, chartData: json });
            }
        });
    }

    render() {
        return (
            <div className="my-dashboard">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="panel panel-default">
                            <div className={styles.panelBackground}>
                                <h3 className="panel-title">Tabela</h3>
                            </div>
                            <div className="panel-body">
                                <Table tableData={this.state.tableData} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="panel panel-default">
                            <div className={styles.panelBackground}>
                                <h3 className="panel-title">Gráfico</h3>
                            </div>
                            <div className="panel-body">

                                <ChartBar chartData={this.state.chartData} displayLegend="false" legendPosition="top" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
```

Iremos agora editar o ficheiro de estilos do dashboard do netuno no diretório `DashboardContainer`, o ficheiro index.less da seguinte forma:

```less
.panelBackground{
  background-color: #3f54ba;
  padding: 10px 15px;
  color: white;
}
```

### Sétimo Passo

Agora para concluir basta compilar o código dos componentes e do container, para isso execute o comando `npm run watch` no diretório `/apps/minhaapp/ui`

E é tudo para este tutorial!

Caso tenha alguma questão não hesite em contactar-nos através dos meios apresentados no fim da página.

Bom desenvolvimento!
