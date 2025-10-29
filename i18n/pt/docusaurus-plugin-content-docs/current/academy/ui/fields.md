---
sidebar_position: 3
id: fields
title: Campos
---

## Criação de campos

Os campos são os elementos fundamentais do seu formulário, definindo quais informações serão coletadas do usuário e como elas serão armazenadas no base de dados.

Este tutorial irá ajudá-lo na criação e na compreensão dos diferentes tipos de campos disponíveis. E antes de criar campos, é necessário que você já tenha um formulário criado na aplicação.

![field-management-pt.png](/docs/assets/academy/ui/fields/field-management-pt.png)    

## 1 - Título do Campo

Esta “label” é a instrução visível que orienta o usuário sobre qual informação deve ser inserida. É a etiqueta que diz o que deve ser preenchido. 

 Ele será exibido na seção de "Gestão de Campos" (no modo de Construir), e no (modo de Visualizar) no   input com o nome da Label "Email" com o a do exemplo abaixo.

![field-title-name-pt.png](/docs/assets/academy/ui/fields/field-title-name-pt.png)  

## 2 - Nome da coluna

Trata-se de um identificador interno, único, que será usado na base de dados e em qualquer lógica de programação. Ele será exibido na tabela (modo de Visualizar) quando um formulário for acessado.

O Netuno preenche automaticamente este campo usando o padrão `snake_case` com base no “Título do campo”. É possível desabilitar este preenchimento ao alterar o “Switch Auto”, porém, deve-se manter o padrão de escrita no singular, com letras minúsculas, sem espaços e sem caracteres especiais.

![field-column-name-pt.png](/docs/assets/academy/ui/fields/field-column-name-pt.png)  

## 3 - Tipo
Aqui você define a natureza da informação que será coletada, o que impacta diretamente na aparência do campo para o usuário e como o dado é armazenado no sistema. Selecione os tipos de campo disponíveis na plataforma.

### 3.1 Campos Textuais

Estes são campos destinados à inserção de texto em diferentes formatos.

| Tipo | O que faz? | Exemplo de Uso Prático |
| :--- | :--- | :--- |
| text | Cria um input simples para uma única linha. | Nomes, títulos de artigos, bairros, etc. |
| textarea | Cria um input de área de texto maior, para múltiplas linhas. | Descrições de produtos, comentários, observações. |
| email | Cria um input de texto formatado para receber um e-mail. | Cadastro de e-mail de contato, login de usuário. |
| texthtml | Cria um editor de texto rico, que permite formatação com HTML. | Criação de conteúdo para um blog, e-mails marketing, páginas de site. |
| textmd | Cria um editor de texto que suporta a linguagem de marcação Markdown. | Ideal para documentação técnica, postagens de blog para desenvolvedores. |

![field-type-texts-pt.png](/docs/assets/academy/ui/fields/field-type-texts-pt.png)   

### 3.2 Campos Numéricos

Para coletar informações que são estritamente numéricas.

| Tipo | O que faz? | Exemplo de Uso |
| :--- | :--- | :--- |
| textnum | Cria um input para a inserção de números inteiros. | Quantidade em estoque, idade de uma pessoa, número de vagas. |
| textfloat | Cria um input para a inserção de números com casas decimais. | Preços de produtos (ex: 99.90), peso (ex: 75.5), altura (ex: 1.82). |

![field-type-numbers-pt.png](/docs/assets/academy/ui/fields/field-type-numbers-pt.png)  

### 3.3 Campos de Seleção

Use estes campos quando precisar escolher entre uma ou mais opções.

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

![field-date-and-time-pt.png](/docs/assets/academy/ui/fields/field-date-and-time-pt.png)

### 3.5 Campos de Arquivos e Mídia

Para fazer o upload de arquivos e imagens para a sua aplicação.

| Tipo | O que faz? | Exemplo de Uso Prático |
| :--- | :--- | :--- |
| file | Cria um campo para o upload de um arquivo qualquer (PDF, DOCX, ZIP). | Anexar um currículo, enviar um comprovante de pagamento. |
| image | Um campo otimizado para o upload de imagens (JPG, PNG, GIF). | Foto de perfil do usuário, imagem de um produto. |

![field-file-and-media-pt.png](/docs/assets/academy/ui/fields/field-file-and-media-pt.png) 

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

Essa área é o "painel de controle" do seu campo, definindo as regras de negócio, as permissões de acesso e a posição dele no formulário.

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

![field-behavior-and-layout-settings-pt.png](/docs/assets/academy/ui/fields/field-behavior-and-layout-settings-pt.png) 

## 5 - Organização Visual do Formulário

Define o posicionamento do campo no layout.

| Configuração | O que faz? | Exemplo de Uso Prático |
| :--- | :--- | :--- |
| Linha | Define a posição vertical do campo no formulário. | Colocar "Nome Completo" na Linha: 1 e "Endereço" na Linha: 2. |
| Coluna | Define a posição horizontal, permitindo múltiplos campos lado a lado. | Para ter "Cidade" e "Estado" juntos, usar Linha: 3, Coluna: 1 (Cidade) e Coluna: 2 (Estado). |

![field-visual-organization-of-the-form-pt.png](/docs/assets/academy/ui/fields/field-visual-organization-of-the-form-pt.png)

## 6 - Opções Avançadas de Configuração

Para um controle mais refinado, acesse "Exibir mais opções".

### 6.1 Descrição e Ajuda do Campo

| Configuração | O que faz? | Exemplo de Uso Prático |
| :--- | :--- | :--- |
| Descrição | Adiciona um texto de ajuda ou instrução que aparece abaixo do campo. | Em "Senha", usar a descrição para informar as regras: "A senha deve ter no mínimo 8 caracteres...". |

### 6.2 Dimensionamento e Layout

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


### 6.4 Controle de Acesso por Usuário e Grupo

Defina quem pode ver e editar o campo.

| Configuração | O que faz? | Exemplo de Uso Prático |
| :--- | :--- | :--- |
| Vista de Usuário e Vista de Grupo | Restringe a *visualização* do campo apenas para os usuários ou grupos especificados. | "Comissão do Vendedor" ter Vista de Grupo "Gerentes". |
| Edição de Usuário e Edição de Grupo | Permite que apenas os usuários ou grupos especificados *editem* o campo (os outros veem como "somente leitura"). | "Status do Pedido" ter Edição de Grupo "Logística". |

![field-advanced-configuration-options-pt.png](/docs/assets/academy/ui/fields/field-advanced-configuration-options-pt.png)