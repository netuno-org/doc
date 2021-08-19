---
id: cron
title: Cron
sidebar_label: Cron
---

Recurso de agendamento de execuções periódicas. 
Este recurso utiliza a biblioteca do <a href="http://www.quartz-scheduler.org/" target="_blank">Quartz Scheduler</a> para o agendamento da execução.
Na utilização do Cron é preciso realizar a configuração da expressão que define quando o job será executado.
Abaixo segue indicações de como a configuração deve ser realizada.

#### Formato suportados das expressões Cron

|NOME DO CAMPO |	OBRIGATÓRIO |	VALORES ACEITES | CARACTERES ESPECIAIS PERMITIDOS |
| ------- |:------:|:-----------:|--------------|
| Segundos |	SIM |	0-59	| , - * / |
| Minutos | SIM	| 0-59	| , - * / |
| Horas	| SIM	| 0-23	| , - * / |
| Dia do Mês |	SIM	| 1-31	| , - * ? / L W |
| Mês	| SIM	| 1-12 or JAN-DEC	| , - * / |
| Dia da semana	| SIM	| 1-7 or SUN-SAT	| , - * ? / L # |
| Ano	| NÃO	| vazio, 1970-2099	| , - * / |

#### Exemplos de expressões Cron

|EXPRESSÃO | SIGNIFICADO |
| ------- |------|
| 1 * * * * ?	| Executa no segundo número 1 de cada minuto. |
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

---

## config

---

#### _cron.config() : _void_
##### Descrição

Configura o agendamento periódico pela importação do ficheiro de configuração.

##### Retorno

( _void_ )


---

## delete

---

#### _cron.delete(chave: string) : _void_
##### Descrição

Remove (apaga) um agendamento de execução de serviço.

##### Como Usar

```javascript
_cron.delete("atualizaPrecos")

```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | string | Nome chave de identificação do job. |

##### Retorno

( _void_ )


---

## pause

---

#### _cron.pause(chave: string) : _void_
##### Descrição

Muda o estado de execução para **pause**, neste estado não é executado o serviço associado.

##### Como Usar

```javascript
_cron.pause("atualizaPrecos")

```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | string | Nome chave de identificação do job. |

##### Retorno

( _void_ )


---

## resume

---

#### _cron.resume(chave: string) : _void_
##### Descrição

Muda o estado de execução para **resume**, após um agendamento estar no estado _pause_, este pode ser reativado por via de _resume_

##### Como Usar

```javascript
_cron.resume("atualizaPrecos")

```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | string | Nome chave de identificação do job. |

##### Retorno

( _void_ )


---

## schedule

---

#### _cron.schedule(chave: string, config: string, url: string) : _void_
##### Descrição

Cria um agendamento de execução de serviço.

##### Como Usar

```javascript
_cron.schedule("atualizaPrecos", "1 * * * * ?", "/services/jobs/atualiza-precos",
    _val.map()
        .set("categoriaId", 1)
        .set("produtoId", 1)
)
```

##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| chave | string | Nome chave de identificação do job. |
| config | string | Expressão horária de agendamento do Cron, ver tabela acima. |
| url | string | URL a ser executada pelo job. |

##### Retorno

( _void_ )


---

#### _cron.schedule(arg0: string, arg1: string, arg2: string, arg3: _[Values](../../objects/Values)_) : _void_
##### Atributos

| NOME | TIPO | DESCRIÇÃO |
|---|---|---|
| arg0 | string |   |
| arg1 | string |   |
| arg2 | string |   |
| arg3 | _[Values](../../objects/Values)_ |   |

##### Retorno

( _void_ )


---

## schedules

---

#### _cron.schedules() : _[Values](../../objects/Values)_
##### Retorno

( _[Values](../../objects/Values)_ )


---

