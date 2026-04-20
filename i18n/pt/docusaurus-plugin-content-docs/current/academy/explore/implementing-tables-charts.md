---
id: implementing-tables-charts
title: Implementação de tabelas e gráficos
sidebar_label: Tabelas e Gráficos
---

Neste tutorial, criaremos a interface e a lógica de uma aplicação simples, com foco na visualização de dados. O desenvolvimento do projeto abordará os tópicos:

- A criação de **"Formulários"**, **"Campos"** e **"Relações"** para estruturação da base de dados. 
- A construção de **"Serviços Web REST"** para fornecer os dados e a exibição dinâmica de informações em tabelas e gráficos na aplicação, utilizando as bibliotecas _<a href="https://www.npmjs.com/package/react-chartjs-2" target="_blank">React ChartJS 2</a>_ e a dependência _Chart.js_, além do componente de tabela do <a href="https://ant.design/" target="_blank">Ant Design</a>.

Toda a estrutura visual do projeto será desenvolvida utilizando **HTML, JavaScript e React.js**.
É recomendável que você tenha  conhecimentos básicos de:
- **JavaScript** 
- **React.js** 
- **HTML** 

💡 **Caso tenha dúvidas nestas etapas, consulte:** 
   - [Guia da Interface: Formulários](/docs/academy/ui/forms)
   - [Guia da Interface: Campos](/docs/academy/ui/fields)
   - [Guia da Interface: Relações entre formulários](/docs/academy/ui/relationships-between-forms)
   - [Guia da Interface: Serviços Web REST](/docs/academy/explore/services)


## Produto Final

Ao seguir todos os passos deste tutorial, construirá um painel funcional na área de trabalho do Netuno, contendo:

* Uma **tabela de dados** listando os registros de trabalhadores e totais de horas.
* Um **gráfico de barras** dinâmico e colorido exibindo visualmente esses mesmos dados.

![product-final-pt.png](/docs/assets/academy/explore/implementing-tables-charts/product-final-pt.png)


## Arquitetura da Solução

Antes de escrever qualquer código, é importante entender como as peças se encaixam. A solução é dividida em **4 camadas** que se comunicam de cima para baixo:

```
DashboardContainer         (busca os dados no servidor)
       │
       ▼
DataVisualization          (organiza o layout em duas colunas)
       │
  ┌────┴────┐
  ▼         ▼
TableList  ChartBar        (renderizam os dados recebidos)
```

:::tip
A vantagem desta arquitetura é que cada componente tem **uma única responsabilidade**.
:::

## Passo 1: Estrutura de Dados

O primeiro passo é criar os formulários, configurar a relação entre eles e preenchê-los com dados para gerar a tabela e o gráfico mais à frente.

Este é o diagrama com a arquitetura dos formulários e os campos que deverá replicar no seu ambiente Netuno:

![first-step-pt.png](/docs/assets/academy/explore/implementing-tables-charts/first-step-pt.png)

> **Importante:** Embora o campo `id` apareça no diagrama, **não é necessário criá-lo manualmente**. O Netuno gera esse identificador automaticamente logo após a criação da tabela.

### Template Dashboard

Para exibir a tabela e o gráfico, precisaremos de um local na interface da sua aplicação. O Netuno já disponibiliza um template base para o painel principal. 

Abra o seu editor de código e encontre o arquivo:

```text
/apps/minhaapp/server/templates/dashboard.html
```
*(Lembre-se de substituir **minhaapp** pelo nome real da sua pasta de aplicação).*

Você notará a seguinte linha de código HTML:

```html
<div id="app-dashboard"></div>
```

## Passo 2: Serviço de Dados

Agora que temos a base de dados pronta e o HTML preparado, precisamos criar o "mensageiro" (um Serviço Web REST). Ele será responsável por ir até o banco de dados, calcular o total de horas de cada trabalhador e entregar essa informação pronta para a tabela e o gráfico.


### Criando o arquivo do serviço

Os serviços no Netuno ficam guardados na pasta `server/services/`. Navegue até o diretório do seu projeto e crie o arquivo `trabalhadores.js`:

```text
/apps/minhaapp/server/services/trabalhadores.js
```
O **DashboardContainer** detecta o idioma do painel e chama **/services/trabalhadores** quando o painel está em Português, ou **/services/workers** quando está em Inglês. Cada idioma tem seu próprio arquivo de serviço.

### Escrevendo o código

Este código realiza três ações principais utilizando os recursos nativos do Netuno (**_db**, **_val** e **_out**):

- **Consulta _db.query:** Busca somente os trabalhadores **ativos** no banco de dados e calcula a soma das horas trabalhadas por cada um.

- **Processamento _val.list e _val.map:** Organiza o resultado em uma lista limpa com objetos estruturados.

- **Resposta _out.json:** Envia os dados no formato JSON para que a interface (React) consiga ler.

Abra o arquivo `trabalhadores.js` e cole o código abaixo:

```javascript
// 1. Consulta, _db.query() executa o SQL e retorna a lista de registros encontrados.
const dbRegistros = _db.query(`
    SELECT DISTINCT
        trabalhador.nome, SUM(DATEDIFF(HOUR, registro.inicio, registro.fim)) AS total
    FROM trabalhador INNER JOIN registro
        ON trabalhador.id = registro.trabalhador_id
    WHERE trabalhador.active = true AND registro.active = true
    GROUP BY trabalhador.nome
    ORDER BY total ASC
`);

// 2. Processamento dos Dados, _val.list() cria uma lista vazia para guardar os dados processados.
const lista = _val.list();

// Percorre cada linha retornada pelo banco de dados
for (const dbRegistro of dbRegistros) {
    lista.add(
        // _val.map() cria um objeto com os campos que o React vai consumir
        _val.map()
            .set("name", dbRegistro.getString("nome"))  // nome → campo "name"
            .set("total", dbRegistro.getInt("total"))   // total de horas → campo "total"
    );
}

// 3. Resposta
// Envia a lista final em formato JSON para a interface React.
_out.json(lista);
```
:::tip
-  **Atenção ao nome dos campos:** Os campos definidos aqui como **"name"** e **"total"** são exatamente os mesmos que os componentes React irão buscar nos próximos passos (dataIndex: 'name' e dataIndex: 'total'). Eles precisam ser idênticos.

- **Sobre o filtro active = true:** O banco de dados possui uma coluna **active** nas tabelas **trabalhador** e **registro**. Ao filtrar apenas os registros ativos, garantimos que dados arquivados ou desativados não apareçam na tabela e no gráfico.
:::

## Passo 3: Ambiente Frontend (React)

Agora que o backend (banco de dados e serviços) está pronto, vamos preparar a interface visual. 

Abra o terminal e siga os passos abaixo:

#### 1. Instalar as dependências base
Navegue até a pasta `ui` da sua aplicação e instale os pacotes.

```bash
npm install
```

#### 2. Instalar as bibliotecas de Gráficos

Como o projeto exibirá gráficos, baixe as bibliotecas que farão esse desenho na tela:

```bash
npm install react-chartjs-2 chart.js --save 
```

#### 3. Gerenciar múltiplos idiomas

Instale a biblioteca para gerenciar múltiplos idiomas:

```bash
npm install react-intl
```

#### 4. Iniciar o Compilador (Watch)

Com tudo instalado, toda vez que salvarmos um arquivo, ele atualizará a tela automaticamente:

```bash
npm run watch
```

#### 5. Criar Componentes
Para manter o projeto organizado, crie componentes separados para a Tabela e para o Gráfico.

Navegue até o diretório `src/components/` da sua aplicação e crie as pastas:

* Tabela: TableList
* Gráfico: ChartBar
* Container: DataVisualization

```text
/apps/nome_da_sua_app/ui/src/components/TableList/
/apps/nome_da_sua_app/ui/src/components/ChartBar/
/apps/nome_da_sua_app/ui/src/containers/DataVisualization/
```

## Passo 4: Componente TableList

O componente **TableList** receberá os dados do serviço e construirá as colunas automaticamente usando o **Ant Design** — uma biblioteca de componentes visuais prontos que já acompanha a interface do Netuno.

Navegue até a pasta TableList e crie um arquivo `index.jsx`:

```text
/apps/nome_da_sua_app/ui/src/components/TableList/index.jsx
```

Abra o arquivo e cole o código abaixo:

```jsx
import React from 'react';

import { FormattedMessage } from 'react-intl';

import { Table } from 'antd'; // Componente de Tabela do Ant Design

import './index.less';

const messages = 'dashboardcontainer.datavisualization.table';

function TableList({ data = [] }) {
  // Definição dos cabeçalhos e qual campo do objeto exibir em cada coluna
  const columns = [
    {
      title: <FormattedMessage id={`${messages}.workers`} />, // Título traduzido
      dataIndex: 'name',  // Campo "name" do JSON retornado pelo serviço
    },
    {
      title: <FormattedMessage id={`${messages}.total`} />,
      dataIndex: 'total', // Campo "total" do JSON retornado pelo serviço
    }
  ];

  return (
    <Table
      columns={columns}      // Estrutura das colunas
      dataSource={data}      // Os dados em si (lista de objetos)
      pagination={false}     // Sem paginação: todos os registros de uma vez
      bordered={true}        // Com bordas visíveis nas células
    />
  );
}

export default TableList;
```

 **Entendendo o código:**

Este componente funcional recebe a lista `data` como parâmetro (prop) e a entrega diretamente ao `<Table>` do Ant Design.

A configuração **columns** informa ao "Ant Design" qual título exibir no cabeçalho **title** e qual campo do objeto JSON preencher na célula `dataIndex`. O Ant Design cuida de todo o HTML, estilos de bordas e layout automaticamente — não é necessário criar CSS manual para isso.

** Arquivo index.less:** Crie o arquivo `index.less` na mesma pasta. Ele pode ficar vazio por ora, pois o Ant Design já fornece a estilização base da tabela.


## Passo 5: Componente ChartBar

Criaremos um Gráfico de Barras para visualização dos dados utilizando a biblioteca **react-chartjs-2**. Este componente receberá os dados, transformará no formato que o Chart.js entende, atribuirá cores e desenhará o gráfico na tela.

Navegue até a pasta `ChartBar` e crie um arquivo chamado `index.jsx`:

```text
/apps/nome_da_sua_app/ui/src/components/ChartBar/index.jsx
```
Abra o arquivo e cole o código abaixo:

```jsx
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';            // Componente de gráfico de barras
import { Chart, registerables } from 'chart.js';  // Núcleo do Chart.js

import { useIntl } from 'react-intl';

import './index.less';

const messages = 'dashboardcontainer.datavisualization.chart';

// OBRIGATÓRIO: registrar todos os elementos do Chart.js antes de usar.
// Sem esta linha o gráfico não renderiza e lança um erro no console.
Chart.register(...registerables);

function ChartBar({ data }) {
  const intl = useIntl();
  const [chartData, setChartData] = useState(null); // Dados no formato do Chart.js

  useEffect(() => {
    // Paleta de 7 cores para as barras (cíclica se houver mais de 7 itens)
    const colors = [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ];

    const labels = [];
    const values = [];

    // Estrutura de dados exigida pelo Chart.js
    const chartDataNew = {
      labels: [],       // Nomes no eixo X (horizontal)
      datasets: [
        {
          label: intl.formatMessage({ id: `${messages}.label` }), // Legenda traduzida
          data: [],           // Valores no eixo Y (altura das barras)
          backgroundColor: [] // Cor de cada barra
        }
      ]
    };

    // Iterar sobre os dados recebidos e montar as listas
    for (const i in data) {
      labels.push(data[i].name);   // Nome do trabalhador → eixo X
      values.push(data[i].total);  // Total de horas → altura da barra

      // (i + 1) % 7: quando "i" chega a 7, volta para 0, repetindo as cores em ciclo
      chartDataNew.datasets[0].backgroundColor.push(colors[(i + 1) % 7]);
    }

    chartDataNew.labels = labels;
    chartDataNew.datasets[0].data = values;

    setChartData(chartDataNew); // Salvar no estado para disparar a re-renderização

  }, [data]); // Executar novamente sempre que "data" mudar

  // Enquanto os dados não foram processados, não renderiza nada
  if (chartData == null) {
    return null;
  }

  return (
    <Bar data={chartData} />
  );
}

export default ChartBar;
```
**Entendendo o código:**

Este componente possui três responsabilidades principais:

**Preparação `useState`:** Inicia o componente com estado `null` para aguardar o processamento dos dados vindos do servidor.

**Processamento dos Dados `useEffect`:** Quando os dados chegam via prop `data`, o Hook **useEffect** é disparado automaticamente. Ele define uma paleta de cores e usa um laço **for** para separar as informações: os nomes dos trabalhadores vão para os rótulos do eixo X **labels**, os totais de horas definem a altura das barras `data`, e uma cor é atribuída a cada barra de forma cíclica.

**Desenho na Tela `return`:** Utiliza o componente `<Bar>` da biblioteca para desenhar o gráfico com base nos dados processados e salvos no estado.

**Arquivo index.less:** Crie também o arquivo `index.less` dentro da pasta `ChartBar`. Ele pode ficar vazio por ora.


## Passo 6: Layout Visual DataVisualization

Agora que os componentes de Tabela e Gráfico estão prontos, precisamos de um container que os posicione lado a lado na tela.

Navegue até a pasta **DataVisualization** e crie um arquivo chamado `index.jsx`:

```text
/apps/nome_da_sua_app/ui/src/containers/DataVisualization/index.jsx
```

Abra o arquivo e cole o código abaixo:

```jsx
import React from 'react';

import { FormattedMessage } from 'react-intl'; // Títulos traduzíveis por idioma

import ChartBar from "../../components/ChartBar";
import TableList from "../../components/TableList";

import './index.less';

const messages = 'dashboardcontainer.datavisualization';

function DataVisualization({ data = [] }) {
  return (
    <div>
      <div className="row">              {/* Linha do Bootstrap */}

        {/* Coluna da esquerda: Tabela */}
        <div className="col-lg-6">
          <div className="panel panel-default">
            <div className="panel-heading data-visualization__panel">
              <h3 className="panel-title">
                <FormattedMessage id={`${messages}.table.title`} />
              </h3>
            </div>
            <div className="panel-body">
              <TableList data={data} />   {/* Repassa os dados para a Tabela */}
            </div>
          </div>
        </div>

        {/* Coluna da direita: Gráfico */}
        <div className="col-lg-6">
          <div className="panel panel-default">
            <div className="panel-heading data-visualization__panel">
              <h3 className="panel-title">
                <FormattedMessage id={`${messages}.chart.title`} />
              </h3>
            </div>
            <div className="panel-body">
              <ChartBar data={data} />    {/* Repassa os mesmos dados para o Gráfico */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DataVisualization;
```
**Entendendo o código:**

Este componente atua como um organizador visual. Ele recebe a lista `data` e a distribui para os dois componentes filhos sem nenhuma transformação.

As classes `row` e `col-lg-6` são do "Bootstrap Grid" e dividem a tela ao meio: a coluna da esquerda recebe a Tabela e a da direita recebe o Gráfico. Em telas menores (celulares), elas empilham automaticamente.

As classes `panel`, `panel-heading` e `panel-body` criam o visual de uma "caixinha com título" para cada componente.

**Arquivo index.less:** Crie também o arquivo `index.less` nesta pasta para estilização futura dos painéis.

## Passo 7: Dashboard Container

Já temos os serviços no backend e os componentes visuais no frontend. Precisaremos de um container para ir ao servidor, buscar os dados e repassá-los para o **DataVisualization**.

O Netuno já gera automaticamente a estrutura básica do Dashboard. Edite o arquivo existente:

```text
/apps/nome_da_sua_app/ui/src/containers/DashboardContainer/index.jsx
```

Substitua o conteúdo do arquivo pelo código abaixo:

```jsx
import React, { useState, useEffect, useImperativeHandle } from "react";

import _service from '@netuno/service-client'; // Cliente HTTP oficial do Netuno

import { Spin, message } from 'antd';           // Indicador de carregamento e erros

import DataVisualization from "../DataVisualization"; // O layout visual

import { useIntl } from 'react-intl';           // Suporte a múltiplos idiomas

import './index.less';

const messages = 'dashboardcontainer.datavisualization';

function DashboardContainer({}, ref) {
  const intl = useIntl();
  const [workers, setWorkers] = useState([]);   // Estado: lista de trabalhadores
  const [loading, setLoading] = useState(false); // Estado: está carregando?

  // Ao abrir a página, disparar a busca automaticamente
  useEffect(() => {
    loadWorkers();
  }, []);

  const loadWorkers = () => {
    setWorkers([]);      // Limpar dados anteriores
    setLoading(true);    // Ativar indicador de carregamento

    _service({
      // Detecta o idioma do painel e chama a URL correta do serviço
      url: intl.locale.indexOf('pt') == 0 ? '/services/trabalhadores' : '/services/workers',
      success: (response) => {
        setWorkers(response.json); // Salvar os dados recebidos no estado
        setLoading(false);
      },
      fail: (e) => {
        setLoading(false);
        console.error('Workers service failed.', e);
        message.error(intl.formatMessage({ id: `${messages}.loading_error` }));
      }
    });
  };

  // Permite que o componente pai (Dashboard) dispare loadWorkers() via ref
  useImperativeHandle(ref, () => ({
    loadWorkers
  }));

  return (
    <div ref={ref}>
      { loading == false
        ? <DataVisualization data={workers} /> // Dados prontos: exibir o painel
        : <Spin/>                              // Ainda carregando: exibir a roda
      }
    </div>
  );
}

export default React.forwardRef(DashboardContainer);
```

**Entendendo o código:**

Este componente tem três responsabilidades principais:

**Estado inicial `useState`:** Cria dois controles internos — **workers** (a lista vinda do servidor) e **loading** (um sinalizador que indica se os dados ainda estão sendo buscados).

**Busca de dados `_service`:** A função **loadWorkers** usa o **_service** para chamar o serviço backend. Diferente do **fetch** nativo do JavaScript, o **_service** gerencia autenticação, sessão e tratamento de erros automaticamente. Ele também detecta o idioma do painel e escolhe a URL correta `/trabalhadores` para PT, `/workers` para EN.

**Distribuição e Desenho `return`:** Enquanto os dados são buscados, exibe a roda de carregamento **(Spin)**. Quando os dados chegam, passa a lista **workers** para o **DataVisualization**, que distribui para a Tabela e o Gráfico.

### Estilizando o Dashboard

Abra o arquivo `index.less` da pasta `DashboardContainer` e cole o código abaixo para destacar os cabeçalhos dos painéis:

```text
/apps/nome_da_sua_app/ui/src/containers/DashboardContainer/index.less
```

```css
.panelBackground {
  background-color: #3f54ba;
  padding: 10px 15px;
  color: white;
}
```

**Entendendo o código:**

Esta classe define uma cor de fundo azul **(#3f54ba)** e uma área de preenchimento **(padding)** nos cabeçalhos. 

Ela é utilizada pelas classes `data-visualization__panel` do `DataVisualization` para garantir que os títulos **Tabela** e **Gráfico** fiquem visualmente destacados.


## Passo 8: Compilando o Projeto

Para garantir que todo o código React seja compilado pelo Netuno:

* **Se o seu terminal continuou aberto** com o `npm run watch` rodando em segundo plano: suas alterações são compiladas automaticamente a cada vez que um arquivo é salvo.
* **Se você fechou o terminal** ou o processo parou: sem problemas. Abra o terminal novamente, navegue até a pasta `ui` e execute o comando outra vez:

```bash
npm run watch
```

## Conclusão

Ao longo deste tutorial, você adquiriu competências essenciais para trabalhar com a plataforma Netuno, dominando o ciclo 
de integração do fluxo de dados entre o servidor e a interface do usuário.

Este desenvolvimento abordou os tópicos:

- **Banco de Dados:** Criação e organização de tabelas e estruturas de dados de forma visual e eficiente.

- **Backend REST:** Desenvolvimento de serviços e lógica de negócio para disponibilizar dados via API.

- **Frontend com React:** Integração e exibição dinâmica desses dados em uma interface moderna e responsiva.

Caso tenha dificuldades ou sugestões de melhoria, entre em contato.

Nossa equipe e comunidade estão prontas para ajudar.

Bom desenvolvimento!