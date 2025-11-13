---
sidebar_position: 5
id: relationships-between-forms
title: Relações entre formulários
sidebar_label: Relações
---

## Como criar relações entre formulários

A criação de relações entre formulários é um recurso poderoso para otimizar a gestão de dados. Ao conectar formulários, você evita a duplicação de informações e simplifica o desenvolvimento de suas aplicações, tornando a estrutura de dados mais coesa e eficiente. 

O Netuno gera automaticamente o diagrama do modelo de dados, exibindo os campos que estabelecem os relacionamentos. O diagrama "Simples", representa os exemplos do guia prático descritos abaixo. 

A imagem do diagrama "complexo", demonstra o poder desta ferramenta em diferentes níveis de aplicações e suas complexidades.  

![diagram-template-pt.png](/docs/assets/academy/ui/relationships/diagram-template-pt.png)

> Este guia prático demonstrará, passo a passo, como estabelecer relações do tipo `Select` e `Multi-Select`.

## Criação de campo Relacional do tipo Select

O campo Select cria um relacionamento entre dois formulários. Ele permite que você escolha um valor de uma lista suspensa (dropdown), em vez de digitá-lo manualmente. Essa lista é preenchida com dados que já existem em outro formulário.

> Usaremos os formulários de **Veículos** e **Cor** como exemplo. 

**Quando usar?** Use o select quando você tem um relacionamento do tipo "Muitos-para-Um" (N-1).

**Exemplo:** Muitos Veículos podem ter uma Cor. Em vez de digitar "Azul" toda vez, você seleciona "Azul" de uma lista de cores já cadastradas.

- **Formulário de Destino:** Veículo (onde vamos criar o campo select).
- **Formulário de Origem:** Cor (de onde vêm os dados da lista de cores).


### Requisitos
Antes de começar, certifique-se de que:

- Ambos os formulários (**Veículo** e **Cor**) já estão criados no Netuno. Para mais detalhes, consulte o nosso guia sobre [Criação de Formulários](/docs/academy/ui/forms).

- O formulário de origem (**Cor**) já possui alguns registros cadastrados. (Ex: "Azul", "Vermelho", "Prata"). Para mais detalhes, consulte o nosso guia sobre [Criação de Campos](/docs/academy/ui/fields).

### Criar e Configurar o Select

Adicione o campo _`select`_ no formulário **Veículo** para que ele possa "puxar" os dados do formulário **Cor**.

#### 1 - Acesse o Formulário de Destino

- No Backoffice, vá até a gestão de campos e abra a edição do formulário **Veículo**.
 
#### 2 - Crie o Novo Campo

- Clique em "Criar novo campo".

#### 3 - Defina o Título e o Nome da Coluna

- **Título do Campo:** Dê um nome amigável que aparecerá para o usuário. **Exemplo:** Cor do Automóvel.
- **Nome da Coluna:** Este é o nome técnico do campo no banco de dados.
> **(Boa Prática):** Ao criar um campo relacional, sempre use o sufixo `_id` no **Nome da Coluna**. Isso deixa claro que esta coluna não armazena o texto "Azul", mas sim o ID de referência para o registro "Azul" no formulário **Cor**. **Exemplo:** `cor_automovel_id`.

#### 4 - Escolha o Tipo de Dados

- No campo **Tipo**, selecione a opção _`select - select`_ na lista.

#### 5 - Configure o Link (A Relação)

- Ao escolher _`select`_, um novo campo chamado **Link** será exibido.
- Clique no botão **Configurar**.
- Uma (modal) será aberta, listando todos os seus formulários. Esta é a hora de escolher o formulário de Origem.
- Selecione o formulário que contém os dados que você quer listar. No nosso exemplo, clique em **cor - Cor**.
- Após selecionar, clique no botão **Fechar** no modal.

#### 6 - Salve as Alterações

- Clique no botão **Salvar** na gestão de campos para aplicar todas as suas configurações.

![create-and-configure-the-select-field-pt.png](/docs/assets/academy/ui/relationships/create-and-configure-the-select-field-pt.png)

### Resultado

Pronto! Agora no modo "visualizar", quando você for adicionar ou editar um registro no formulário **Veículo**, o campo "Cor do Automóvel" será uma lista suspensa (dropdown) que mostrará todas as cores cadastradas no seu formulário Cor.

![select-result-pt.png](/docs/assets/academy/ui/relationships/select-result-pt.png)


## Criação de Campo Relacional do tipo Multiselect

O campo **Multiselect** cria um relacionamento "Muitos-para-Muitos" (N-M). Ele permite que você selecione vários itens de uma lista em um único campo.

> Usaremos os formulários de **Pessoa**, **Função** e **Pessoa-Função** como exemplo.

**Quando usar?** Use o multiselect quando um registro puder estar ligado a vários outros, e vice-versa.
**Exemplo:** Muitas Pessoas podem ter muitas Funções.

- Uma pessoa (ex: "Ana") pode ter as funções "Admin" e "Gestor".
- A função "Gestor" pode estar associada a várias pessoas (ex: "Ana", "Bruno" e "Thiago").

Para que isso funcione, precisamos de três formulários:

- **Formulário "Pai" (Pessoa):** Onde o campo _`multiselect`_ ficará visível para o usuário.
- **Formulário "Origem" (Função):** De onde vêm as opções da lista (ex: "Admin", "Gestor").
- **Formulário "Junção" (Pessoa-Função):** Um formulário "ponte" que armazena as conexões entre **Pessoa** e **Função**.

### Requisitos
Antes de começar, certifique-se de que:

- O formulário "Pai" (**Pessoa**) já estão criado e com alguns registros (ex: "Ana", "Bruno", "Lucas").
- O formulário "Origem" (**Função**) já estão criado e com alguns registros (ex: "Admin", "Gestor", "Consultor").

### Criar e Configurar o Multiselect 
A configuração é feita em 4 etapas:

#### Etapa 1: Criar o Formulário de Junção (Pessoa-Função)
Primeiro, vamos criar o formulário "ponte".

1 - **Vá para Gestão > Formulários** e clique em "Criar novo formulário".

2 - **Título do formulário:** Pessoa-Função.

3 - **Nome da tabela:** pessoa_funcao  (ou similar).

4 - **Importante:** No campo **Pai**, selecione o formulário "Pai" principal, que neste caso é a **Pessoa**. Isso transforma o **Pessoa-Função** em um sub-formulário.

5 - Clique em **Salvar**.

![create-the-parent-form-for-the-join-pt.png](/docs/assets/academy/ui/relationships/create-the-parent-form-for-the-join-pt.png)

#### Etapa 2: Configurar os Campos do Formulário de Junção

Adicione os campos "ponte" ao formulário Pessoa-Função.

1 - Acesse a gestão de Campos do formulário Pessoa-Função que você acabou de criar.

2 - Adicione dois campos do tipo select: um que apontará para Pessoa e outro para Função.

**Campo 1 (Link para Pessoa):**

- **Título do campo:** Nome da Pessoa
- **Nome da coluna:** `nome_pessoa_id` (seguindo a convenção `_id`)
- **Tipo:** `select - select`
- **Link:** Clique em **Configurar** e selecione o campo principal do formulário **Pessoa** (ex: `pessoa:nome`).
- Clique em **Salvar**.

**Campo 2 (Link para Função):**

- **Título do campo:** Função da Pessoa. 
- **Nome da coluna:** `funcao_pessoa_id`.
- **Tipo:** `select - select`.
- **Link:** Clique em **Configurar** e selecione o campo principal do formulário **Função** (ex: `funcao:funcao_id`).
- Clique em **Salvar**.

![create-and-configure-the-multiselect-field-pt.png](/docs/assets/academy/ui/relationships/create-and-configure-the-multiselect-field-pt.png)

#### Etapa 3: Criar o Campo Multiselect no Formulário "Pai"

Com a "ponte" (**Pessoa-Função**) pronta, podemos voltar ao formulário **Pessoa** para criar o campo final.

1 - Vá para a gestão de Campos do formulário **Pessoa**.

2 - Clique em "Criar novo campo".

3 - **Título do campo:** Pessoa Função.

4 - **Nome da coluna:** _`pessoa_funcao_id`_.

5 - **Tipo:** _`multiselect - multiselect`_.


#### Etapa 4: Configurar o Campo Multiselect

Ao selecionar o tipo _`multiselect`_, dois novos campos de configuração aparecerão: **Referência** e **Link**.

#### 1 - Referência (Onde salvar a relação?)

 - **Este campo diz ao Netuno:** "Qual campo do formulário 'ponte' se refere de volta a mim (**Pessoa**)?"
 - Clique em **Configurar**.
 - Selecione o formulário de junção (**Pessoa-Função**) e o campo que você criou na Etapa 2 (Campo 1). **Exemplo:** _`pessoa_funcao:nome_pessoa_id`_.

#### 2 - Link (De onde vêm as opções?)

 - **Este campo diz:** "Qual campo do formulário 'ponte' se refere às opções (**Função**)?"
 - Clique em **Configurar**.
 - Selecione o formulário de junção (**Pessoa-Função**) e o campo que você criou na Etapa 2 (Campo 2). **Exemplo:** _`pessoa_funcao:funcao_pessoa_id`_.
  
#### 3 - Salve as Alterações

- Clique no botão **Salvar** na gestão de campos para aplicar todas as suas configurações.

![configure-the-multiselect-field-pt.png](/docs/assets/academy/ui/relationships/configure-the-multiselect-field-pt.png)

### Resultado

Pronto! Agora no modo "visualizar", ao adicionar ou editar um registro no formulário **Pessoa**, o campo "Pessoa Função" aparecerá como uma caixa de seleção múltipla. Você poderá escolher várias funções da lista (que vêm do formulário **Função**), e o Netuno salvará automaticamente essas associações dentro do formulário **Pessoa-Função**.

![multiselect-result-pt.png](/docs/assets/academy/ui/relationships/multiselect-result-pt.png)

Caso tenha alguma dúvida, entre em contato conosco por meio da comunidade e outros canais disponíveis no final desta página.

Bom desenvolvimento!
