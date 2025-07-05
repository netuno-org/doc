---
sidebar_position: 3
id: backoffice
title: Backoffice
---

No desenvolvimento de aplicações Web e/ou Mobile é comum haver o conceito de backoffice, a camada de gestão dos dados.

Ou seja, trata-se de uma camada normalmente em web onde os utilizadores de gestão do negócio vão entrar numa interface que permite realizar intervenções nos dados.

É bastante comum haver os seguintes requisitos:

- Gestão de Utilizadores;
- Gestão de Grupos de Utilizadores;
- Manipulação dos registos de base de dados adaptados às regras de negócio;
- Logs para registar o que os utilizadores fizeram e quando;
- Limitar os acessos, dependendo do grupo ou do utilizador não poderá alterar ou mesmo ver certos dados;
- Permitir acesso via browser e dispositivos móveis;
- Gerar relatórios de gestão;
- Dashboard adaptado ao negócio com informações relevantes podendo ser apresentado gráficos e tabelas;

Por estas e por outras, desenvolver o backoffice muitas vezes dá tanto ou mais trabalho do que desenvolver a aplicação final.

Além que também é comum o backoffice fornecer a API REST com serviços web que vai permitir realizar a comunicação de dados de negócio com a aplicação final, ou frontend.

![Backoffice.](/docs/assets/business/business-backoffice.svg "Backoffice.")

O Netuno traz um poderoso motor de backoffice, onde sem código é possível criar a estrutura de dados gerando formulários integrados com a base de dados para as manipulações mais comuns, como criar, pesquisar, editar e apagar.

Também traz a gestão de utilizadores e grupos e controlos de acessos com registos de logs.

Permite criar com low-code dashboards, relatórios e a API REST (web services) integrada com JWT (JSON Web Token).

> Como o Netuno traz todas as funcionalidades mais comuns prontas para serem moldadas de acordo com o modelo de negócio assim o esforço para desenvolver um backoffice à medida é reduzido drasticamente.

## Backoffice para Novos Projetos

Ao desenvolver novos projetos, principalmente quando trata-se de aplicações para clientes externos, é comum penalizar o orçamento do backoffice, ou seja, é penalizado o tempo investido no seu desenvolvimento e na idealização das interfaces.

Isto porque não será visível ao cliente alvo, assim pode-se deixar para um segundo plano.

Além que o objetivo dos decisores passa mais por atingir o resultado final e não pelas camadas internas de gestão, ainda mais quando implica custos relevantes.

Mas durante o desenvolvimento e principalmente na altura dos testes ter uma interface de backoffice permite realizar uma melhor validação da coerência dos dados.

Como o Netuno facilita a construção do **modelo de dados e automaticamente disponibiliza em interface web formulários responsivos para a gestão dos dados**, basta utilizar o Netuno na fase de modelagem da estrutura de dados e assim automaticamente obterá a interface de backoffice. Bastante simples!

Depois poderá optar por evoluir mais ao ponto de desenvolver dashboards, relatórios e os web services tudo em Netuno.

Ou, por algum tipo de limitação ou obrigatoriedade poderá desenvolver os web services e toda a API REST com outra tecnologia qualquer, basta para isso consumir a base de dados gerada pelo Netuno.

De qualquer forma terá o Netuno como opção para suprir as necessidades de backoffice.

## Backoffice para Aplicações Existentes

Em aplicações já existentes e que não foi desenvolvido um backoffice ou mesmo que exista e possua limitações.

O Netuno poderá ser utilizado tanto para realizar a expansão do backoffice existente ou o backoffice que está em falta.

Como é bastante reduzido o esforço de criar um backoffice com o Netuno, tanto poderá ser feito um backoffice inteiro em Netuno como apenas alguns módulos.

Cabe à pessoa decidir o rumo das opções tecnológicas a utilizar e à sua imaginação, uma coisa é certa, não será preciso complicar muito, se pensar no backoffice modular que vai sendo desenvolvido e crescendo ao longo do tempo à sua medida.

Normalmente desenvolver em módulos é muito complexo, mas como o Netuno também simplifica este processo permitindo desenvolver múltiplas aplicações sobre a mesma base de dados, é uma excelente solução também para desenvolver módulos independentes auxiliares para estender um backoffice já existente sem trazer impactos no backoffice já existente.

Como o Netuno facilmente integra e consegue gerir várias bases de dados na mesma aplicação, então torna-se fácil importar e exportar informação noutra base de dados.

Podendo assim, separar melhor a complexidade do backoffice das aplicações em Netuno que são como "módulos" adicionais ao backoffice existente.

## Conclusão

Sem dúvida um dos principais objetivos do Netuno é simplificar ao máximo o desenvolvimento de backoffices e realizar a integração tanto em projetos existentes como em novos projetos onde consegue integrar bem com outras tecnologias.

O Netuno não é uma plataforma fechada onde todo o desenvolvimento deve passar a ser feito no Netuno, muito pelo contrário, o Netuno pode ser utilizado simplesmente para suprir necessidades pontuais para ultrapassar as limitações de:

- Custo
- Tempo

Permitindo ser integrado com qualquer outra tecnologia.

Assim, se o problema é a falta de dinheiro ou a data de entrega é demasiada apertada, e ainda por cima se há muita complexidade e várias tecnologias integradas, o Netuno deve ser visto como mais uma tecnologia que vai resolver o problema de custos e de tempo para facilitar a vida.
