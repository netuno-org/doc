---
id: cronjob
title: Cronjob
sidebar_label: Cronjob
---

O recurso Cronjob permite agendar a execução periódica de serviços. É utilizado o <a href="http://www.quartz-scheduler.org/" target="_blank">Quartz Scheduler</a> para fazer o agendamento da execução dos serviços.

## schedule

_cronjob.**schedule**(key: _String_, config: _String_, url: _String_, params: _Values_) : _void_

#### Descrição

Cria um agendamento de execução de serviço

#### Como usar

```javascript
_cronjob.schedule("getNewValues", "applicationName", serviceUrl, myParameters)
```

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| `key` | String | obrigatório | Nome do agendamento |
| `config` | String | obrigatório | expressão cron |
| `url` | String | obrigatório | url a ser chamado pelo cronjob |
| `params` | Values | opcional | valores a passar como parametro ao serviço  |

#### Formato suportados das expressões cron

|NOME DO CAMPO |	OBRIGATÓRIO |	VALORES ACEITES | CARACTERES ESPECIAIS PERMITIDOS |
| ------- |:------:|:-----------:|--------------|
| Segundos |	SIM |	0-59	| , - * / |
| Minutos | SIM	| 0-59	| , - * / |
| Horas	| SIM	| 0-23	| , - * / |
| Dia do Mês |	SIM	| 1-31	| , - * ? / L W |
| Mês	| SIM	| 1-12 or JAN-DEC	| , - * / |
| Dia da semana	| SIM	| 1-7 or SUN-SAT	| , - * ? / L # |
| Ano	| NÃO	| vazio, 1970-2099	| , - * / |

#### Exemplos de expressões cron

|EXPRESSÃO | SIGNIFICADO |
| ------- |------|
| 0 0 12 * * ?	| Inicia às 12h00 todos os dias |
| 0 15 10 ? * *	| Inicia às 10h15 todos os dias |
| 0 15 10 * * ?	| Inicia às 10h15 todos os dias |
| 0 15 10 * * ? *	| Inicia às 10h15 todos os dias |
| 0 15 10 * * ? 2005	| Inicia às 10h15 todos os dias durante o ano de 2005 |
| 0 * 14 * * ?	| Inicia a cada minuto a começar às 14h00 e finaliza às 14h59, todos os dias |
| 0 0/5 14 * * ?	| Inicia a cada 5 minutos a começar às 14h00 e finaliza às 14h55, todos os dias |
| 0 0/5 14,18 * * ?	| Inicia a cada 5 minutos a começar às 14h00 e finaliza às 14h55. Posteriormente, inicia a cada 5 minutos a começar às 18h00 e finaliza às 18h55, todos os dias |
| 0 0-5 14 * * ?	| Inicia a cada minuto a começar às 14h00 e finaliza às 14h05, todos os dias |
| 0 10,44 14 ? 3 WED | Inicia às 14h10 e às 14h44 a cada quarta-feira do mês de Março. |
| 0 15 10 ? * MON-FRI	| Inicia às 10h15 a cada dia útil da semana (de segunda a sexta-feira) |
| 0 15 10 15 * ?	| Inicia às 10h15 no dia 15 de cada mês |
| 0 15 10 L * ?	| Inicia às 10h15 no último dia de cada mês |
| 0 15 10 L-2 * ?	| Inicia às 10h15 no penúltimo dia de cada mês |
| 0 15 10 ? * 6L	| Inicia às 10h15 na última sexta-feira de cada mês |
| 0 15 10 ? * 6L	| Inicia às 10h15 na última sexta-feira de cada mês |
| 0 15 10 ? * 6L 2002-2005	| Inicia às 10h15 a cada última sexta-feira de cada mês durante o ano de 2002, 2003, 2004 e 2005 |
| 0 15 10 ? * 6#3	| Inicia às 10h15 na terceira sexta-feira de cada mês |
| 0 0 12 1/5 * ?	| Inicia às 12h00 a cada 5 dias de cada mês, a começar no primeiro dia de cada mês. |
| 0 11 11 11 11 ?	| Inicia a cada 11 de Novembro às 11h11. |

#### Retorno

(_void_)

## pause

_cronjob.**pause**(key: _String_) : _void_

#### Descrição

Muda o estado de execusão do cronjob para **pause**, neste estado não é executado o serviço associado.

#### Como usar

```javascript
_cronjob.pause("getNewValues")
```

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| `key` | String | obrigatório | Nome do agendamento |

## resume

_cronjob.**resume**(key: _String_) : _void_

#### Descrição

Muda o estado de execusão do cronjob para **resume**, após um agendamento estar no estado _pause_, este pode ser reativado por via do _resume_.

#### Como usar

```javascript
_cronjob.resume("getNewValues")
```

#### Atributos

| NOME    | TIPO   | PADRÃO      | DESCRIÇÃO    |
| ------- |:------:|:-----------:|--------------|
| `key` | String | obrigatório | Nome do agendamento |
