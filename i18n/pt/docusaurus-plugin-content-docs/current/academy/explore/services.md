---
id: services
title: Serviços
sidebar_label: Serviços
---

## Introdução

Os serviços Web REST no Netuno são scripts em JavaScript executados no servidor (Back-end) que permitem interagir diretamente com a base de dados da aplicação. Através deles, é possível:

* Ler dados da base de dados 
* Inserir novos registros 
* Atualizar dados existentes 
* Remover dados 
* Executar lógicas complexas que envolvam cálculos ou processamento de dados.
* Integrar com sistemas externos.

Cada serviço é acessado através de um URL (endpoint), o que permite que interfaces web (Front-end), aplicações móveis ou outros sistemas externos consumam os dados da sua aplicação de forma segura e padronizada.

#### Pré-requisitos

* Ter noções básicas em _**JavaScript, React.js**_ e _**HTML**_.
* Familiaridade com SQL e com a estrutura de pastas de uma aplicação. 
* É recomendável ter conhecimentos básicos em **Formulários**, **Campos** e **Relações**. 

Caso tenha dúvidas nestas etapas, consulte:

* [Formulários](/docs/academy/ui/forms)
* [Campos](/docs/academy/ui/fields)
* [Relações entre formulários](/docs/academy/ui/relationships-between-forms)



## Primeiros Passos  

Utilizaremos uma aplicação de registro de horas de trabalho, onde o objetivo é calcular o total de horas realizadas por cada trabalhador.

**Estrutura da aplicação:**

![application-structure-pt.png](/docs/assets/academy/explore/services-web-rest/application-structure-pt.png)

:::note
O campo **id** é criado e gerido automaticamente pelo Netuno em todas as tabelas, não sendo necessário defini-lo manualmente.
:::

Os serviços de uma aplicação Netuno ficam localizados na pasta **server/services/**.

#### Estrutura de Pastas

```text
my-app/
└── server/
    └── services/
        ├── trabalhadores.js   ← arquivo de serviço
        └──... 
```

## Criar Serviço

Dentro da pasta **server/services/**, crie um novo arquivo que definirá o URL do seu serviço. Para este exemplo, nomeie o arquivo como `trabalhadores.js`.

:::tip
- Utilize apenas letras **minúsculas**.
- Se o nome for composto, separe as palavras com **hífen (-)**.
- Exemplos: **trabalhadores.js**, **relatorio-horas.js**, **registo-entradas.js**.
:::


## Consultar a Base de Dados

O Netuno disponibiliza o objeto global **_db** para interagir nativamente com a base de dados. 

Para executar uma consulta SQL, utilizamos o método `_db.query()`.


```javascript
// Realiza uma consulta SQL que agrupa o total de horas por trabalhador
const dbRegistos = _db.query(`
    SELECT DISTINCT
        trabalhador.nome, SUM(DATEDIFF(HOUR, registo.inicio, registo.fim)) AS total
    FROM trabalhador INNER JOIN registo
        ON trabalhador.id = registo.trabalhador_id
    WHERE trabalhador.active = true AND registo.active = true
    GROUP BY trabalhador.nome
    ORDER BY total ASC
`);
```

:::note Entendendo a consulta SQL

* **INNER JOIN**: Une as tabelas trabalhador e registo utilizando a chave estrangeira trabalhador_id.

* **DATEDIFF(HOUR, inicio, fim)**: Calcula a diferença em horas entre a entrada e a saída.

* **SUM(...) AS total**: Soma todas as horas processadas de cada trabalhador.

* **WHERE ... active = true**: Filtra a pesquisa para considerar apenas trabalhadores e registos que não foram apagados (ativos).

* **GROUP BY trabalhador.nome**: Agrupa as somas pelo nome de cada trabalhador.

* **ORDER BY total ASC**: Ordena o resultado final do menor para o maior número de horas trabalhadas.
:::

## Processar os Dados

O método `_db.query()` retorna os dados num formato interno do Netuno. 

Para enviar uma resposta limpa em formato JSON, é necessário transformar esses dados utilizando os objetos globais **_val.list()** (para arrays) e **_val.map()** (para objetos).

```javascript
// Cria uma lista vazia para armazenar os dados processados
const lista = _val.list();

// Itera sobre cada registro retornado pela consulta SQL
for (const dbRegisto of dbRegistos) {
    lista.add(
        _val.map()
            .set("name", dbRegisto.getString("nome"))   // Extrai o nome como texto
            .set("total", dbRegisto.getInt("total"))    // Extrai o total como número inteiro
    );
}
```
### Métodos Utilizados

| Recurso | Descrição |
|---------|-----------|
| **_val.list()** | Cria uma lista (equivalente a um Array em JS). |
| **_val.map()** | Cria um objeto de chave-valor (equivalente a um Object ou JSON). |
| **.add(...)** | Adiciona um novo item ao final da lista. |
| **.set("chave", valor)** | Define uma nova propriedade e o seu respectivo valor no mapa. |
| **.getString("coluna")** | Extrai o valor da coluna especificada formatado como Texto (String). |
| **.getInt("coluna")** | Extrai o valor da coluna especificada formatado como número inteiro (Integer). |

## Retorno dos Dados 

Utiliza-se o objeto **_out** para enviar a lista processada para o cliente no formato JSON.

```javascript
// Envia a lista como resposta HTTP em formato JSON
_out.json(lista);
```

## Exemplo Prático

Nesta etapa final, consolidamos todos os conceitos aprendidos para criar um serviço funcional. 

O código completo abaixo realiza uma consulta ao banco de dados para calcular o total de horas trabalhadas e retorna esses dados formatados em JSON.

```javascript
// 1. Consulta o total de horas realizadas por cada trabalhador ativo
const dbRegistos = _db.query(`
    SELECT DISTINCT
        trabalhador.nome, SUM(DATEDIFF(HOUR, registo.inicio, registo.fim)) AS total
    FROM trabalhador INNER JOIN registo
        ON trabalhador.id = registo.trabalhador_id
    WHERE trabalhador.active = true AND registo.active = true
    GROUP BY trabalhador.nome
    ORDER BY total ASC
`);

// 2. Cria a estrutura de dados para a resposta
const lista = _val.list();

// 3. Processa e mapeia os resultados
for (const dbRegisto of dbRegistos) {
    lista.add(
        _val.map()
            .set("name", dbRegisto.getString("nome"))
            .set("total", dbRegisto.getInt("total"))
    );
}

// 4. Retorna os dados em formato JSON
_out.json(lista);
```

### Acessando o Serviço

Após criar e configurar o seu serviço no Netuno, ele estará pronto para ser utilizado e testado diretamente pelo navegador ou integrá-lo a outras aplicações.

#### Formas de Acesso

O serviço pode ser consumido utilizando:

- **Navegador:** Para testes rápidos de métodos GET.

- **Clientes HTTP:** Ferramentas como Postman, Insomnia ou Thunder Client.

- **Front-end:** Através de requisições fetch ou bibliotecas como o Axios.

#### Estrutura da URL

Por padrão, o Netuno mapeia automaticamente os arquivos criados na pasta de serviços para endereços web.

Se estiver rodando localmente na porta padrão, o endereço seguirá este modelo:

http://localhost:9000/services/trabalhadores



:::info Como funciona o roteamento?
O Netuno utiliza um sistema de roteamento automático baseado no sistema de arquivos:

**Pasta de Origem:** Todos os arquivos dentro de server/services/ tornam-se rotas.

**Mapeamento:** O arquivo **trabalhadores.js** é convertido para o endpoint **/services/trabalhadores**.

**Extensões:** Note que a extensão **.js** é omitida na URL. Opcionalmente, pode-se utilizar o sufixo **.netuno** (ex: /services/trabalhadores.netuno), mas o acesso sem extensão é o padrão recomendado por ser mais limpo.
:::

**Exemplo de resposta HTTP:**
Se existirem dados compatíveis na sua base de dados, a resposta devolvida pelo servidor será semelhante a esta:

```json
[
    {
        "nome": "Leonor Santos",
        "total": 40
    },
    {
        "nome": "Carlos Alves",
        "total": 35
    },
    {
        "nome": "Maria Oliveira",
        "total": 45
    }
]
```

## Objetos Globais do Sistema

Durante o desenvolvimento de serviços no Netuno, utilizaremos frequentemente objetos nativos que facilitam a comunicação com o banco de dados, o controle de requisições e a saída de informações.

Estes objetos são instâncias pré-configuradas e prontas para uso em seus scripts de servidor **(arquivos .js)**. Eles eliminam a necessidade de importar bibliotecas externas para tarefas fundamentais como consultas SQL ou leitura de parâmetros.

| Objeto | Descrição |
|--------|-----------|
| **_db**| Executar operações de base de dados (query, insert, update, delete). |
| **_val** | Criação e manipulação de estruturas de dados (list, map). |
| **_out** | Envio de respostas para o usuário (JSON, HTML...). |
| **_req** | Acesso aos parâmetros enviados na requisição do usuário (GET, POST). |
| **_log**|Registro de mensagens de erro ou depuração na consola do servidor.|



Caso tenha dificuldades ou sugestões de melhoria, entre em contato.

Nossa equipe e comunidade estão prontas para ajudar.

Bom desenvolvimento!
