---
sidebar_position: 3
id: fields
title: Campos
---



Os Campos são os componentes fundamentais e os "blocos de construção" de um formulário no Netuno. Eles representam a interface de interação com o usuário e definem como os dados serão estruturados e armazenados.

Na prática, cada campo criado corresponde a uma coluna na tabela do banco de dados, determinando o tipo de informação que o sistema pode processar — como textos, números, datas, seleções e arquivos. 

### Criar e Editar Campos

Estes botões permitem gerenciar o estado geral da edição:

- **Editar campo existente:** Menu suspenso para selecionar um campo já criado e modificar suas configurações.

- **Criar novo campo:** Limpa todos os campos do formulário para iniciar a configuração de um novo elemento do zero.

- **Clonar campo:** Duplica as configurações do campo selecionado para agilizar a criação de itens similares.

![field-edit-existing-pt.png](/docs/assets/academy/ui/fields/field-edit-existing-pt.png)    

## 1 - Título do Campo

O Título do Campo (tecnicamente conhecido como Label) é a instrução visual que orienta o usuário sobre qual informação deve ser inserida em um formulário. Ele funciona como uma etiqueta identificadora, garantindo que o preenchimento dos dados seja intuitivo e correto.

Nesta etapa, o título possui dupla finalidade na plataforma:

- **Na Gestão de Campos (Construir):** Serve para identificar o campo dentro da sua lista de elementos durante o desenvolvimento da aplicação.

![field-title-name-pt.png](/docs/assets/academy/ui/fields/field-title-name-pt.png)

- **Na Interface do Usuário (Visualizar):** É o texto que aparece posicionado logo acima ou ao lado do campo de entrada (input), indicando ao usuário final o que ele deve digitar no formulário.

![field-title-name-content-pt.png](/docs/assets/academy/ui/fields/field-title-name-content-pt.png)

## 2 - Nome da coluna

Diferente do título, o **Nome da Coluna** é o identificador interno e exclusivo do campo, utilizado diretamente no banco de dados e em lógicas de programação. É através deste nome que o sistema localiza a informação na base de dados.

**Formatação Automática (Switch Auto):**

O Netuno facilita este processo preenchendo o nome automaticamente com base no "Título do campo". O padrão utilizado é o snake_case.

**Regras de Escrita:** Caso opte por preencher manualmente (desativando o "Auto"), mantenha o nome no singular, use apenas letras minúsculas, e evite espaços ou caracteres especiais.

![field-column-name-pt.png](/docs/assets/academy/ui/fields/field-column-name-pt.png)  

## 3 - Tipos de dados

A definição do **Tipo de Dado** determina a natureza da informação coletada, impactando diretamente na aparência do campo para o usuário e na forma como o dado é armazenado no sistema.

![field-type-data-pt.png](/docs/assets/academy/ui/fields/field-type-data-pt.png)  

### 3.1 Campos Textuais

Estes campos são destinados à inserção de texto em diferentes formatos. Eles variam conforme a necessidade de volume de dados.

| Tipo | O que faz? | Exemplo de Uso Prático |
| :--- | :--- | :--- |
| text | Cria um input simples para uma única linha. | Nomes, títulos de artigos, bairros, etc. |
| textarea | Cria um input de área de texto maior, para múltiplas linhas. | Descrições de produtos, comentários, observações. |
| email | Cria um input de texto formatado para receber um e-mail. | Cadastro de e-mail de contato, login de usuário. |
| texthtml | Cria um editor de texto rico, que permite formatação com HTML. | Criação de conteúdo para um blog, e-mails marketing, páginas de site. |
| textmd | Cria um editor de texto que suporta a linguagem de marcação Markdown. | Ideal para documentação técnica, postagens de blog para desenvolvedores. |

### 3.2 Campos Numéricos

Utilizados para coletar informações que são estritamente numéricas.

| Tipo | O que faz? | Exemplo de Uso |
| :--- | :--- | :--- |
| textnum | Cria um input para a inserção de números inteiros. | Quantidade em estoque, idade de uma pessoa, número de vagas. |
| textfloat | Cria um input para a inserção de números com casas decimais. | Preços de produtos (ex: 99.90), peso (ex: 75.5), altura (ex: 1.82). |

### 3.3 Campos de Seleção

Utilizados quando o usuário deve escolher entre opções pré-definidas.

| Tipo | O que faz? | Exemplo de Uso Prático |
| :--- | :--- | :--- |
| select | Cria uma lista de opções onde o usuário pode escolher apenas uma. | Selecionar um estado (UF), estado civil, categoria de um produto. |
| multiselect | Cria uma lista de opções onde o usuário pode escolher várias. | Selecionar interesses (esportes, tecnologia), ingredientes de uma pizza. |
| checkbox | Exibe uma única caixa de seleção (ativar/desativar). | "Aceito os termos de uso", "Lembrar minha senha". |
| color | Exibe um seletor de cores visual. | Escolher a cor de um produto, personalizar a cor de um evento. |

### 3.4 Campos de Data e Hora

Especializados para a inserção de informações temporais.

| Tipo | O que faz? | Exemplo de Uso Prático |
| :--- | :--- | :--- |
| date | Exibe um calendário para o usuário selecionar uma data (dia, mês, ano). | Data de nascimento, data de agendamento. |
| datetime | Permite a seleção de uma data e de um horário. | Início de um evento, data e hora de uma publicação. |
| time | Permite a seleção de um horário (horas e minutos). | Horário de funcionamento, hora de um alarme. |

### 3.5 Campos de Arquivos e Mídia

Utilizado para enviar arquivos e imagens para a sua aplicação.

| Tipo | O que faz? | Exemplo de Uso Prático |
| :--- | :--- | :--- |
| file | Cria um campo para o upload de um arquivo qualquer (PDF, DOCX, ZIP). | Anexar um currículo, enviar um comprovante de pagamento. |
| image | Um campo otimizado para o upload de imagens (JPG, PNG, GIF). | Foto de perfil do usuário, imagem de um produto. |

### 3.6 Campos Técnicos e Especiais

Estes campos possuem comportamentos automáticos ou servem a propósitos específicos do sistema.

| Tipo | O que faz? | Exemplo de Uso Prático |
| :--- | :--- | :--- |
| hidden | O campo é invisível para o usuário, mas guarda um valor. | Armazenar um ID vindo de outra página, um código de rastreamento. |
| uid | Gera automaticamente um Identificador Único Universal. | Chave primária de um registro, código único de um pedido. |
| user | Associa o registro ao usuário que o criou ou modificou. | Identificar o autor de um post de blog, o vendedor que registrou um cliente. |
| lastchange | Armazena automaticamente a data e a hora da última modificação do registro. | Auditoria, para saber quando um dado foi alterado pela última vez. |
| group | Utilizado para agrupar visualmente outros campos no formulário. | Criar seções como "Dados Pessoais" e "Endereço" para organizar formulários longos. |

## 4 - Configurações de Comportamento e Layout

Essa área é o "painel de controle" do seu campo, definindo as regras de negócio e as permissões de acesso.

![field-behavior-and-layout-settings-pt.png](/docs/assets/academy/ui/fields/field-behavior-and-layout-settings-pt.png)

### 4.1 Regras de Integridade dos Dados

Estas opções garantem a qualidade e a consistência das informações.

| Configuração | O que faz? | Exemplo de Uso Prático |
| :--- | :--- | :--- |
| Valores Únicos (Chave Primária) | Transforma o campo no identificador principal e único, impedindo valores duplicados. | Usar para "CPF", garantindo que não existam dois clientes com o mesmo número. |
| Obrigatório (Não Nulo) | Torna o preenchimento do campo obrigatório. | Aplicar em campos essenciais como "Nome" e "E-mail". |

### 4.2 Controle de Permissões e Visibilidade

Define onde e como os usuários interagem com os dados deste campo.

| Configuração | O que faz? | Exemplo de Uso Prático |
| :--- | :--- | :--- |
| Exibir no Resultado | Define se a coluna aparecerá na listagem principal de dados. | Desmarcar para "Observações Internas" para manter a listagem limpa. |
| Permitir Filtrar | Adiciona uma caixa de busca para esta coluna na listagem. | Habilitar em "Status do Pedido" para facilitar a localização. |
| Permitir Visualizar | Controla se o conteúdo será exibido no modo de visualização. | Deixar marcado na maioria dos casos. |
| Permitir Editar | Permite que o conteúdo seja alterado quando um registro está sendo editado. | Desmarcar para campos que não devem ser alterados, como "Data de Cadastro". |
| Permitir ao Criar Novo | Define se o campo deve aparecer no formulário de criação. | Desmarcar para campos de "feedback", que só devem ser preenchidos *após* a criação. |
| Permitir Exportar | Inclui os dados deste campo ao exportar a listagem (Excel, CSV). | Desmarcar dados internos que não são relevantes para relatórios externos. |

## 5 - Organização Visual do Formulário

Define o posicionamento dos campos no layout.

![field-visual-organization-form-pt.png](/docs/assets/academy/ui/fields/field-visual-organization-form-pt.png)

| Configuração | O que faz? | Exemplo de Uso Prático |
| :--- | :--- | :--- |
| Linha | Define a posição vertical do campo no formulário. | Colocar "Nome Completo" na Linha: 1 e "Endereço" na Linha: 2. |
| Coluna | Define a posição horizontal, permitindo múltiplos campos lado a lado. | Para ter "Cidade" e "Estado" juntos, usar Linha: 3, Coluna: 1 (Cidade) e Coluna: 2 (Estado). |

## 6 - Veja Mais Opções

Para um controle mais personalizado, clique no botão "+ Veja Mais Opções".

### 6.1 Campo de Descrição

![field-view-options-description-pt.png](/docs/assets/academy/ui/fields/field-view-options-description-pt.png)

| Configuração | O que faz? | Exemplo de Uso Prático |
| :--- | :--- | :--- |
| Descrição | Adiciona um texto de ajuda ou instrução que aparece abaixo do campo. | Em "Senha", usar a descrição para informar as regras: "A senha deve ter no mínimo 8 caracteres...". |

### 6.2 Dimensionamento do Campo

![field-dimensioning-layout-pt.png](/docs/assets/academy/ui/fields/field-dimensioning-layout-pt.png)

Controle fino sobre o tamanho do campo.

| Configuração | O que faz? | Exemplo de Uso Prático |
| :--- | :--- | :--- |
| Largura | Define a largura do componente (baseado em grade de 12 colunas). | "CPF" (Largura: 6) e "Data de Nascimento" (Largura: 6) na mesma linha. |
| Altura | Define a altura do componente em pixels (px). | Em `textarea` "Observações", definir Altura "120" para uma área maior. |
| Largura da Célula (px) | Define uma largura fixa em pixels para a célula. | Usar para alinhar campos com larguras específicas, como "UF" (Largura: 80). |
| Altura da Célula (px) | Define uma altura fixa em pixels para a célula. | Aumentar a altura de um campo `image` para criar uma área de "arrastar e soltar". |
| Rowspan | Permite que a célula se expanda verticalmente por múltiplas linhas. | Um `textarea` de "Descrição" que ocupe 3 linhas de altura ao lado de campos menores. |
| Colspan | Permite que a célula se expanda horizontalmente por múltiplas colunas. | Um campo "Endereço Completo" (Colspan: 2) acima de "Cidade" e "Estado". |

### 6.3 Validação e Regras de Dados

Estabeleça limites para os valores inseridos.

| Configuração | O que faz? | Exemplo de Uso Prático |
| :--- | :--- | :--- |
| Max | Valor máximo (numérico) ou número máximo de caracteres (texto). | Em "Nota (0 a 10)", definir Max como "10". Em "Apelido", Max "20". |
| Min | Valor mínimo (numérico) ou número mínimo de caracteres (texto). | Em "Quantidade", definir Min como "1". Em "Justificativa", Min "30". |

### 6.4 Controle de Acesso 

![field-access-control-pt.png](/docs/assets/academy/ui/fields/field-access-control-pt.png)

Defina grupos e usuários que podem visualizar e editar o campo.

| Configuração | O que faz? | Exemplo de Uso Prático |
| :--- | :--- | :--- |
| Vista de Usuário e Vista de Grupo | Restringe a *visualização* do campo apenas para os usuários ou grupos especificados. | "Comissão do Vendedor" ter Vista de Grupo "Gerentes". |
| Edição de Usuário e Edição de Grupo | Permite que apenas os usuários ou grupos especificados *editem* o campo (os outros veem como "somente leitura"). | "Status do Pedido" ter Edição de Grupo "Logística". |