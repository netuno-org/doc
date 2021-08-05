---
id: web-rest-services
title: Serviços Web REST
sidebar_label: Serviços Web REST
---

## Antes de começar

Antes de criar serviços Web REST certifique-se que sabe criar **Formulários, Campos** e **Relações**, caso não o saiba visite as seguintes ligações:

* [Formulários](academy/explore/graphical-interface/forms.md)
* [Campos](academy/explore/graphical-interface/fields.md)
* [Relações entre formulários](academy/explore/graphical-interface/relationships-between-forms.md)

É também aconselhável que, antes de começar este tutorial, se certifique que tem noções básicas em _**JavaScript, React.js**_ e _**HTML**_.

## O que permitem os serviços?

Os serviços Web REST permitem interagir diretamente com a base de dados permitindo a leitura de dados, registo de novos dados, eliminação de dados e até mesmo atualizações.

Portanto, para demonstrar a criação de um serviço iremos utilizar um exemplo simples: uma aplicação em que os trabalhadores registam a hora de entrada e de saída em que há um serviço que calcule o número total de horas efetuadas pelo trabalhador.

Segue-se uma imagem da estrutura da aplicação:

![servicos-web-rest1.png](assets/servicos-web-rest1.png)

## Primeiros passos
O primeiro passo será criar o serviço, para tal, utilizando o editor de texto _Atom_, vamo-nos dirigir à pasta services como se apresenta na seguinte imagem:

![servicos-web-rest2.png](assets/servicos-web-rest2.png)

> Neste exemplo a app denomeou-se de 'registohoras', no seu caso irá ser a mesma estrutura mas com o nome que deu à sua aplicação

## Criação do serviço

Ao entrarmos nesta pasta vamos criar um ficheiro terminado em _.js_ com um nome adequado ao serviço.

Neste exemplo iremos nomear o ficheiro como _‘registos.js’_.

> Por norma o nome do serviço é escrito com letras minúsculas, e se necessário mais que uma palavra, separadas por hífens (-)

Neste exemplo iremos efetuar o cálculo de horas totais por trabalhador, ou seja, calcular o número total de horas efetuados pelo trabalhador com base na hora de entrada e saída.

Iremos também, previamente, adicionar dados para podermos obter resultados.

Portanto o primeiro passo será criar a chamada à base de dados da seguinte forma:

```javascript
/*
  Para chamar o serviço, se não tiver alterado a porta,
  dirija-se a ligação 'http://localhost:9000/services/registos.netuno'
*/

// Para realizar uma query simples utilizamos _db.query() que é uma função Netuno
var registos = _db.query(''+
  ' SELECT DISTINCT '+
  '   trabalhador.nome, '+
  '   SUM(DATEDIFF(HOUR, registo.hora_saida, registo.hora_entrada)) AS total '+
  ' FROM registo INNER JOIN trabalhador '+
  '   ON registo.trabalhador_id = trabalhador.id '+
  ' GROUP BY trabalhador.nome'
);

// Para visualizar no ecrã os resultados da query ao chamar o serviço registos.netuno
// utilizamos _out.json(variavel)
_out.json(registos)
```

> Qualquer serviço é chamado substituindo a extensão '.js' por '.netuno'

Se tiver seguido todos os passos anteriores a chamada ao serviço irá mostrar no ecrã algo semelhante ao seguinte:

(Note que consoante o seu navegador e os dados que introduziu poderão haver diferenças)

![servicos-web-rest3.png](assets/servicos-web-rest3.png)

O próximo passo será processar os dados para podermos efetuar as contas.

O seguinte excerto de código demonstra o que é necessário para tal efeito:

```javascript
// Inicializar a variável para que esta possa receber valores
var registosProcessados = _val.init();

// Iteração por todos os registos para receber cada trabalhador, a data e as horas respectivas
if (trabalhadores) {
  for each (var registo in trabalhadores) {

    var item = _val.init();

    item['trabalhador'] = registo['nome'];
    item['trabalhadorHoras'] = registo['total'];

    registosProcessados.push(item);
  }
}

// Visualizar no ecrã os valores
_out.json(registosProcessados);
```

## Chamada do serviço programaticamente

Iremos agora demonstrar a chamada do serviço programaticamente através de _React.js_. Neste exemplo iremos permitir a visualização de uma tabela com todos os dados anteriormente declarados.

Para tal iremos criar uma classe básica em que se acede aos dados através do serviço e se implementa na _dashboard_ do Netuno através de uma tabela.

Para se criar uma classe em _React.js_ dirija-se ao diretório 'components' como se apresenta na seguinte imagem:

![servicos-web-rest4.png](assets/servicos-web-rest4.png)

> Quando alterar ficheiros dentro do diretório 'app' execute o comando 'npm install' e utilize o comando 'npm run watch' para compilar as suas alterações

## Criação da classe Registos.jsx em React.js

Iremos agora criar uma classe básica em React.js com a chamada ao serviço e apresentação dos dados na _dashboard_ do Netuno.

Neste exemplo só demonstraremos a chamada ao serviço através da função _getRecords()_ apresentada no seguinte excerto de código.

```javascript
// Criação da chamada ao serviço registos.netuno
  getRecords() {
    const that = this;
    fetch('/services/registos.netuno', {
      credentials: 'include'
    }).then((response) => {
      return response.json();
    }).then((json) => {
      // A partir daqui é só tratar os dados da maneira que pretender
      if (!json.length) {
        return;
      } else {
        that.setState({ records: json });
      }
    });
  }
```

Vamos agora aplicar a nossa classe em _React.js_ ao _dashboard_ do Netuno.

Para tal dirija-se ao ficheiro _index.jsx_ situado no seguinte diretório:

![servicos-web-rest5.png](assets/servicos-web-rest5.png)

E vamos importar a nossa classe em _React.js_ para que esta possa ser compilada, basta colocar o nome da sua classe e o diretório do ficheiro.

Neste exemplo denomeámos o ficheiro de _Registos.jsx_ e a classe com o mesmo nome, sendo a importação da classe no ficheiro _index.jsx_ tendo sido feita da seguinte forma:

```javascript
import Registos from "./components/Registos.jsx";
```

Por fim só falta criar um elemento em _HTML_ para podermos inserir a tabela no _dashboard_ do Netuno.

Basta dirigir-se ao diretório apresentado na primeira imagem e editar o ficheiro _dashboard.html_.

Neste exemplo criámos uma _div_ para podermos injetar os conteúdos da tabela feita previamente em _React.js_ apresentado na segunda imagem.

![servicos-web-rest6.png](assets/servicos-web-rest6.png)  ![servicos-web-rest7.png](assets/servicos-web-rest7.png)

E na classe, anteriormente criada em _React.js_, adicionando no fim da mesma o seguinte excerto de código podemos visualizar a tabela na _dashboard_ do Netuno.

```javascript
const wrapper = document.getElementById("registo-tabela-dashboard");
wrapper ? ReactDOM.render(<Registos />, wrapper) : false;
```

Caso tenha alguma questão não hesite em contactar-nos através dos meios apresentados no fim da página.

Bom desenvolvimento!
