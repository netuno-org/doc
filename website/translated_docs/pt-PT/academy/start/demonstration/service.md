---
id: service
title: Serviço
sidebar_label: Serviço
---

Com o Netuno é possível criar _Web Services_ e construir qualquer tipo de **APIs <a href="https://pt.wikipedia.org/wiki/REST" target="_blank">REST</a>** complexas.

Os serviços (_<a href="https://pt.wikipedia.org/wiki/Web_service" target="_blank">Web Services</a>_) servem para realizar a integração de dados online, onde um sistema web pode trocar informação com outro.

Também serve para fornecer os dados para a frontend (_páginas web_) de forma assíncrona, permitindo à frontend carregar a parte visual da página web de forma mais rápida e obter a informação dinâmica através da integração com serviços (_<a href="https://pt.wikipedia.org/wiki/Web_service" target="_blank">Web Services</a>_).

Isto permite proporcionar uma melhor experiência ao utilizador final, porque não fica à espera que a página toda seja processada pelo servidor e só depois devolvida, mas sim que o servidor envie rapidamente a estrutura da página que será apresentada e só depois é que efetua o carregamento gradual dos dados dinâmicos.

## Editor

Para criar um serviço no Netuno é preciso um editor de código.

Recomendamos o <a href="https://code.visualstudio.com/download" target="_blank">Visual Studio Code</a>, é gratuito, rápido, bastante simples e intuitivo.

Mas caso opte por qualquer outro editor de código funcionará de forma semelhante e todo o processo de desenvolvimento acaba por ser semelhante.

## Abrir a Aplicação Demo

No Visual Studio Code ao clicar no canto esquerdo no primeiro ícone de ficheiros, tem a opção para **Abrir uma Pasta** (_Open Folder_).

Navegue nos sistema de ficheiros até a pasta onde tem o Netuno instalado.

Dentro da pasta do Netuno vá até ao diretório:

* `📂 apps/demo`

E quando estiver dentro da pasta **demo** clique em **Abrir** (_Open_).

Repare que a estrutura de pastas e de ficheiros da aplicação **demo** foram carregadas do lado esquerdo.

## Criar Serviço

Os serviços são processados pelo servidor, assim para criar o serviço é preciso expandir as pastas e ir até a pasta:

* `📂 server/services`

Agora basta clicar com o botão direito em cima da pasta `📂 services` e escolher a opção **Novo Ficheiro** (_New File_).

O nome do novo ficheiro deverá ser `trabalhadores.js`, vamos criar um serviço em <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank">JavaScript</a>.

Basta agora realizar a codificação do nosso serviço, que será assim:

```
/**
*** Formata o objeto passado em JSON e realiza o seu output.
*/
const dbRegistos = _db.query(`
    SELECT DISTINCT
        trabalhador.nome, SUM(DATEDIFF(HOUR, registo.inicio, registo.fim)) AS total
    FROM trabalhador INNER JOIN registo
        ON trabalhador.id = registo.trabalhador_id
    WHERE trabalhador.active = true AND registo.active = true
    GROUP BY trabalhador.nome
    ORDER BY total ASC
`);

const lista = _val.list();

for (const dbRegisto of dbRegistos) {
    lista.add(
        _val.map()
            .set("name", dbRegisto.getString("nome"))
            .set("total", dbRegisto.getInt("total"))
    );
}

_out.json(lista);
```

> Certifique há dados carregados nas Tarefas e que estão relacionadas com o Registo, caso contrário o resultado será vazio.

O `_db.query` recebe uma string com uma consulta de base de dados e realiza a sua execução transformando os dados obtidos numa lista de objectos do tipo chave-valor, ou seja coluna-dados.

O `_out.json` realiza o output (_saída de dados_) para o browser do tipo `ContentType: application/json` e formata o objeto passado para ser estruturado como um objeto <a href="https://pt.wikipedia.org/wiki/JSON" target="_blank">JSON</a>.

## Executar o Serviço

Para executar o serviço basta abrir no browser o endereço do serviço criado, que neste caso será:

* <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/trabalhadores</a>

Neste caso recomendamos o <a href="https://www.mozilla.org/" target="_blank">Firefox</a> por que permite uma melhor visualização do objeto <a href="https://pt.wikipedia.org/wiki/JSON" target="_blank">JSON</a>.
