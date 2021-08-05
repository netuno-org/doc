---
id: cors
title: CORS
sidebar_label: CORS
---

Controla o Cross-Origin Resource Sharing (CORS).<br>
Permite gerir as múltiplas origens e os respectivos cabeçalhos.

---

## add

---

#### _cors.add(origem: string) : _CORS_
##### Descrição

Adiciona as configurações para uma nova origem.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| origem | string | Origem que vem no cabeçalho HTTP. |

##### Retorno

( _CORS_ )

Atual instância do CORS.

---

#### _cors.add(origem: string, cabecalho: _[Values](../../objects/Values)_) : _CORS_
##### Descrição

Adiciona as configurações para uma nova origem.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| origem | string | Origem que vem no cabeçalho HTTP. |
| cabecalho | _[Values](../../objects/Values)_ | Definição do cabeçalho que será carregado para a origem. |

##### Retorno

( _CORS_ )

Atual instância do CORS.

---

#### _cors.add(origem: string, cabecalho: _[Values](../../objects/Values)_, ativa: _boolean_) : _CORS_
##### Descrição

Adiciona as configurações para uma nova origem.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| origem | string | Origem que vem no cabeçalho HTTP. |
| cabecalho | _[Values](../../objects/Values)_ | Definição do cabeçalho que será carregado para a origem. |
| ativa | _boolean_ | Define se está origem está ativada. |

##### Retorno

( _CORS_ )

Atual instância do CORS.

---

## disable

---

#### _cors.disable(origem: string) : _boolean_
##### Descrição

Desativa uma origem que já foi definida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| origem | string | Origem que vem no cabeçalho HTTP. |

##### Retorno

( _boolean_ )

Se a origem foi desativada com sucesso.

---

## enable

---

#### _cors.enable(origem: string) : _boolean_
##### Descrição

Ativa uma origem que já foi definida.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| origem | string | Origem que vem no cabeçalho HTTP. |

##### Retorno

( _boolean_ )

Se a origem foi ativada com sucesso.

---

## isEnabled

---

#### _cors.isEnabled(origem: string) : _boolean_
##### Descrição

Verifica se uma origem que já foi definida está ativa.

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| origem | string | Origem que vem no cabeçalho HTTP. |

##### Retorno

( _boolean_ )

Se a origem está ativada.

---

## load

---

#### _cors.load() : _CORS_
##### Descrição

Executa a verificação da origem e realiza as definições de cabeçalho na resposta do pedido HTTP.

##### Retorno

( _CORS_ )

Atual instância do CORS.

---

