---
sidebar_position: 6
id: api
title: API
---

O Netuno tem uma framework própria para criar API REST de forma low-code, com suporte ao JWT (JSON Web Token) e OpenAPI 3.0.

Toda a framework para o desenvolvimento de serviços web no Netuno é muito versátil permitindo realizar qualquer tipo de desenvolvimento.

A framework já trás muitas funcionalidades para o desenvolvimento low-code poupando muitas linhas de código para realizar as necessidades mais comuns como enviar mails, consumir outras APIs REST, integrar com outras base de dados, gerar ficheiros PDF e Excel, enviar SMS, manipular dados da base de dados, entre muitos outros.

E quando não existe soluções na framework do Netuno é possível integrar facilmente bibliotecas Java, Kotlin ou mesmo JavaSript já existentes para desenvolver recursos à medida e serem integrados com framework do Netuno.

## JWT - JSON Web Token

O [JWT.io](https://jwt.io/) é a especificação do padrão para a passagem de dados do contexto de sessão para o cliente, via objeto JSON.

Assim, o servidor não precisa guardar os dados sensíveis dos utilizadores logados em sessão, e sim passa a ser um token que é transitido para o cliente, e posteriormente em cada pedido este token tem que ser devolvido.

Este token sofre alguns controlos de segurança, como o tempo limite de validade e um processo para permitir criar um novo token sem exigir nova autenticação.

O Netuno tem integrado o suporte ao JWT, é simples e fácil de ser utilizado, funciona também integrado com os utilizadores e autênticação nativa do Netuno.

## OpenAPI 3.0

Depois do sucesso do Swagger v1 e v2 que já há muito passaram a ser um padrão para o desenvolvimento da definição dos web services e geração do código de cliente.

Assim, o Swagger tornou a sua definição aberta e passou a ser [OpenAPI 3](https://www.openapis.org/).

Onde continua sendo o alicerce para definir o padrão de como é documentado a API e como é gerado os clientes para consumir a API.

O Netuno traz já toda a integração com OpenAPI 3.0 e que utiliza a definição da OpenAPI junto com a validação do [JSON Schema](https://json-schema.org/).

Quer dizer que o Netuno permite também validar o input e o output dos web services, recorrendo à validação do schema do JSON obtido e retornado assim para o:

- `Input`: Caso haja uma chamada ao web service que não cumpre a estrutura e validações então, é rejeitado
- `Output`: Caso retorne dados que não cumprem a estrutura e validações definidas então, é gerado um alerta que o web service não está em conformidade.

Assim, tanto o Netuno poupa a criação de muitos `if`s em código para a validação dos dados recebidos, como ainda garante uma validação do resultado que o web service está a gerar, realizando um _teste unitário_.

Também a estrutura da OpenAPI gerada pelo Netuno pode ser utilizada com o [Editor do Swagger](https://editor.swagger.io/) para gerar a interface de testes, documentação e o código para clientes da API em outras tecnologias.

## Básico

O Netuno também suporta a criação de web services e autenticação sem complicações, ou seja, não é obrigatório utilizar JWT ou OpenAPI, apesar de ser a recomendação padrão.

Muitas vezes para agilizar a criação da API ou em situações que envolve a comunicação entre servidores opta-se por simplificar ao máximo e ganhar mais tempo.

> O Netuno permite realizar a [autênticação HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Authentication).


