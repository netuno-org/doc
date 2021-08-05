---
id: relate
title: Relacionar Dados
sidebar_label: Relacionar Dados
---

## Criar Relação Entre os Dados 

Anteriormente, criámos a nossa gestão de tarefas, mas só assim não tem grande utilidade prática, porque apenas permite gerir uma lista de tarefas de forma isolada.

Precisamos de saber qual o trabalhador que realizou uma tarefa e qual foi o tempo gasto.

Vamos então relacionar as tarefas com o **Registo** de horas.

### Campo do Tipo Select

Voltando ao ambiente 'Construir' e indo na gestão de campos do formulário **Registo**, vamos criar um novo campo onde a configuração do **Nome de Exibição** deverá ser `Tarefa`.

A configuração do **Nome** ficou preenchida automaticamente com `tarefa`, mas devemos adicionar o sufixo `_id`, ao **Nome** `tarefa` adiciona-se `_id` resultando em `tarefa_id`.

> #### Isto é importante
> O **Nome** deverá terminar sempre em `_id`!
>
> Visto ser um padrão para nomes de campos que fazem relações entre si porque facilita a distinção de outros.

Na configuração do _Tipo_ escolha a opção **select**.

Lembre-se de marcar este campo como obrigatório através da ativação da configuração **Não Nulo**, visto o seu preenchimento ser importante para saber o que o trabalhador realizou no horário marcado.

Note que a opção de _Chave Primária_ deverá manter-se desligada porque vai haver muitos registos para a mesma tarefa.

E preencha a **Coluna** com o valor 1 e a **Linha** com o valor 2, para este novo campo da _Tarefa_ aparecer antes dos campos de data e hora.

### Link

Note que este tipo de campo tem uma parametrização do **Link** mais em baixo.

O link é o que realiza a relação dos dados.

Para configurar clique em _Adicionar_, depois clique na opção **tarefa**, que aparece na janela que abriu e depois no **nome** e por fim basta _Fechar_ a janela.

Desta forma o **Link** foi definido com o valor `tarefa:nome`.

Isto significa que vai relacionar com a tabela **tarefa** apresentando os dados da coluna **nome**.

Para concluir clique em **Guardar**.

### Alterar os Dados

Agora ao _visualizar_ o resultado no **Registo** terá mais uma coluna da **Tarefa**, que está sem dados.

Edite alguns registos ao clicar sobre a linha na tabela de resutados.

No formulário de edição do **Registo** tem o campo que permite selecionar a **Tarefa**, ao guardar com a tarefa associada a coluna da tarefa aparecerá preenchida na tabela de pesquisa.

Os **Registos** passam a estar associados com alguma **Tarefa** e ficam relacionados.

Guarde a alteração em alguns registos com a tarefa associada.

## 🎬 Veja como

![Relacionar Dados](assets/comece/demonstracao/relacionar.gif)
