---
id: services
title: Serviços
sidebar_label: Serviços
---

## Antes de começar

Antes de criar serviços Web REST certifique-se que sabe criar **Formulários, Campos** e **Relações**, caso não o saiba visite as seguintes ligações:

* [Formulários](../ui/forms)
* [Campos](../ui/fields)
* [Relações entre formulários](../ui/relationships-between-forms)

É também aconselhável que, antes de começar este tutorial, se certifique que tem noções básicas em _**JavaScript, React.js**_ e _**HTML**_.

## O que permitem os serviços?

Os serviços Web REST permitem interagir diretamente com a base de dados permitindo a leitura de dados, registo de novos dados, eliminação de dados e até mesmo atualizações.

Portanto, para demonstrar a criação de um serviço iremos utilizar um exemplo simples: uma aplicação em que os trabalhadores registam a hora de entrada e de saída em que há um serviço que calcule o número total de horas efetuadas pelo trabalhador.

Segue-se uma imagem da estrutura da aplicação:

![servicos-web-rest1.png](/docs/assets/servicos-web-rest1.png)

>Nota: Não é necessário criar o campo de id porque o Netuno o cria automaticamente após a criação da tabela.

## Primeiros passos
O primeiro passo será criar o serviço, para tal, utilizando o editor de texto _Atom_, vamo-nos dirigir à pasta services como se apresenta na seguinte imagem:

![servicos-web-rest2.png](/docs/assets/servicos-web-rest2.png)

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
  '   SUM(DATEDIFF(HOUR, registo.hora_entrada, registo.hora_saida)) AS total '+
  ' FROM registo INNER JOIN trabalhador '+
  '   ON registo.trabalhador_id = trabalhador.id '+
  ' GROUP BY trabalhador.nome'
);

// Para visualizar no ecrã os resultados da query ao chamar o serviço registos.netuno
// utilizamos _out.json(variavel)
_out.json(registos)
```

> Qualquer serviço é chamado substituindo a extensão '.js' por '.netuno' ou por simplesmente pelo nome do serviço sem '.js'

Se tiver seguido todos os passos anteriores a chamada ao serviço irá mostrar no ecrã algo semelhante ao seguinte:

(Note que consoante o seu navegador e os dados que introduziu poderão haver diferenças)

![servicos-web-rest3.png](/docs/assets/servicos-web-rest3.png)

O próximo passo será processar os dados para podermos efetuar as contas.

Substituindo o seguinte código:
```javascript
// Para visualizar no ecrã os resultados da query ao chamar o serviço registos.netuno
// utilizamos _out.json(variavel)
_out.json(registos)
```

Pelo seguinte excerto de código:

```javascript
// Inicializar a variável para que esta possa receber valores
var registosProcessados = _val.init();

// Iteração por todos os registos para receber cada trabalhador, a data e as horas respectivas
if (registos) {

  for(var indice = 0; indice < registos.size(); indice++){

    var registo = registos.get(indice);

    var item = _val.init()
        .set("trabalhador", registo.getString("nome"))
        .set("trabalhadorHoras", registo.getInt("total"))

    registosProcessados.push(item);
  }
}

// Visualizar no ecrã os valores
_out.json(registosProcessados);
```

Caso tenha alguma questão não hesite em contactar-nos através dos meios apresentados no fim da página.

Bom desenvolvimento!
