---
sidebar_position: 8
id: implementing-tables-charts
title: Implementing tables and charts
sidebar_label: Tables and Charts
---

### Before proceeding
Before you start this tutorial make sure you know how to create **Forms, Fields, Relationships and Web Rest Services** in which we go deeper into each explanation, in case you don't know it visit the respective links:

* [Forms](forms.md)
* [Fields](fields.md)
* [Relationship between forms](relationships-between-forms.md)
* [Web REST Services](../explore/services.md)

It is also advisable that, before starting this tutorial, ensure that you have some basic knowledge in _**JavaScript**_, _**React.js**_ and _**HTML**_.

### Introduction

In this tutorial we will explain how to develop a simple application that involves creating forms, relationships between them, services, tables and charts that present the data of the service using a library called _<a href="https://www.npmjs.com/package/react-chartjs-2" target="_blank">React ChartJS 2</a>_ (which also needs the dependency _Chart.js_), all this created in _JavaScript, React.js and HTML_.

### Finished Product

If you follow all the steps described in this tutorial, your application will look similar to the one shown in the following image:

![implementaçaotabelasgraficos1.png](/docs/assets/implementaçaotabelasgraficos1.png)

[//]: # (Ligação para efetuar o download da aplicação: [Aplicação](https://www.netuno.org/wp-content/uploads/2018/08/registerhours.zip)

[//]: # (Para a poder utilizar a aplicação basta descompactar os conteúdos do zip no diretório do Netuno e para correr a aplicação execute o seguinte comando:)

[//]: # (```shell)
[//]: # (java -jar netuno.jar server app=registerhours)
[//]: # (```)

[//]: # (> Para efeitos de exemplo a aplicação foi denominada de 'registerhours', caso não tenha efetuado o download da aplicação bastará substituir 'registerhours' pelo nome da sua aplicação)

### First Step

The first step will be creating the forms, their relationships and populate them with some data. An image of the structure of the forms and fields used in this tutorial is shown below:
![implementaçaotabelasgraficos2.png](/docs/assets/implementaçaotabelasgraficos2.png)

> Note: It isn't necessary to create the id field because Netuno creates it automatically after the table is created.

Let's review the _dashboard_ template from Netuno. To do that just go to the following directory:

```plaintext
/apps/myapp/server/templates/dashboard.html
```
We will now analyze the code presented below, this code will be used later as a reference to _inject_ the Table and Graph components.

```html
<div id="app-dashboard"></div>
```

### Second Step

Now we will create the services that will be used to populate the table and chart data. To create the files go to the following directory and first create a file called `records.js` (the name of the file is this for example)

```plaintext
/apps/myapp/server/services/
```

The following code is created for this purpose, in which all the _workers_, their _entry_ and _exit_ hours are selected and a sum of them is made showing the total hours per worker.

```javascript
// To perform a simple query we use _db.query() which is a Netuno function
var records = _db.query('SELECT DISTINCT worker.name, SUM(DATEDIFF(HOUR, record.entry_time, record.exit_time)) AS total FROM record INNER JOIN worker ON record.worker_id = worker.id GROUP BY worker.name ORDER BY total ASC');

// Initialize the variable so that it can receive values
var processedRecords = _val.init();

// Iteration by all records to receive each worker, the respective date and time
if (records) {
    
     for (var i = 0; i < records.size(); i++){

        var record = records.get(i);

        var item = _val.init()
            .set("worker", record.getString("name"))
            .set("workerHours", record.getInt("total"))

        processedRecords.push(item);
    }
}

// Display the values on the screen
_out.json(processedRecords);
```

Then, create a file called `calc-hours.js` in the directory:

```plaintext
/apps/myapp/server/services/
```

This service increments hours on the current date to find the final result.

```javascript
var values = _val.init()

var date = new Date()
date.setHours(date.getHours() + _req.getInt('hours'))

values.set("date", _date_format.date().format(date))
values.set("time", _date_format.time().format(date))


_out.json(values)
```


### Third Step

**Before you start developing in _React.js_** make sure you run `npm install` in the `/apps/myapp/ui` directory and that after it has finished you run `npm run watch` to compile your changes.

**To also use the _React Chartjs 2 library_** run the `npm install react-chartjs-2 chart.js --save` command.

Creation of the classes in React.js that will allow you to print the table and graphic with the services data on the screen. For this purpose we will create two folders:

* Table
* ChartBar

These should be created in the following directory:

```plaintext
/apps/myapp/ui/src/components/
```

### Fourth Step

Let's now create the component responsible for the table in the `Table` directory, the `index.jsx` file with the service data as shown below:

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

        const tableFinalData = this.state.tableData.map((record, i) =>
            <tr key={i}>
                <td>{record.worker}</td><td>{record.workerHours}</td>
            </tr>
        );

        return (
            <table className={ styles.table }>
                <thead>
                <tr>
                    <th>Worker</th>
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

We will now create a style file for the table in the `Table` directory, the `index.less` file as follows:

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

### Fifth Step

We will now create the component responsible for the chart int the `ChartBar` directory , the `index.jsx` file as follows:

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

        // Data collection and processing
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
              label: "Hours",
              data: [],
              backgroundColor: []
            }
          ]
        };

        for (const i in nextProps.chartData) {
             labels.push(nextProps.chartData[i].worker);
             values.push(nextProps.chartData[i].workerHours);
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

### Sixth Step

We will now edit the container responsible for processing the services data, the `DashboardContainer`.

This container will allow the data to be passed to the table and to the graphic, and also allows the two components previously explained to be rendered.

The container is in the following directory:

```plaintext
/apps/myapp/ui/src/containers/DashboardContainer/
```

The file to edit is the index.jsx as follows:

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

    // Call up the data for the table and graphic to be created
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

    // Creation of the call to the service records.netuno
    getRecords() {
        let that = this;
        fetch('/services/records.netuno', {
            credentials: 'include'
        }).then((response) => {
            return response.json();
        }).then((json) => {
            if (!json.length) {
                return;
            } else {
                // Adding the data to the table and chart
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
                                <h3 className="panel-title">Table</h3>
                            </div>
                            <div className="panel-body">
                                <Table tableData={this.state.tableData} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="panel panel-default">
                             <div className={styles.panelBackground}>
                                <h3 className="panel-title">Chart</h3>
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
We will now edit the netuno dashboard style file in the `DashboardContainer` directory, the index.less file as follows:

```less
.panelBackground{
  background-color: #3f54ba;
  padding: 10px 15px;
  color: white;
}
```

### Seventh Step

Now to finish just need to compile the code of the components and the container, to do that execute the command `npm run watch` in the directory `/apps/myapp/ui`

And that's all for this tutorial!

If you have any questions, please do not hesitate to contact us through the means presented at the bottom of the page.

Good development!
