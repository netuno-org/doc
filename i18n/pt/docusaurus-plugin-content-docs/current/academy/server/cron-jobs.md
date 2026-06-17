---
id: cron-jobs
title: Cron Jobs - Serviços Agendados
sidebar_label: Cron Jobs
---

## Antes de começar

Antes de proceder certifique-se que que tem noções básicas em _**JavaScript**_ e que já tem as noções básicas do Netuno com o passo-a-passo disponível na [Academia](/docs/academy/overview).

## Introdução

É comum a necessidade de executar tarefas periodicamente, ou seja, de tempos em tempos é necessário enviar dados para outro sistema, ou importar dados de outro sistema, disparar um e-mail, validar registos em base de dados, e muito mais...

No Linux/UNIX/Mac existe o serviço Cron com o famoso ficheiro de configuração `crontab`, já no Windows existe o Task Manager (_Gestor de Tarefas_).

E no Netuno o Cron Jobs já vem integrado, ajudando assim a evitar configurações externas.

Este tipo de operações periódicas são conhecidas como Cron Jobs ou em português Serviços Agendados.

Cada aplicação do Netuno pode ter inúmeros Cron Jobs, e os Cron Jobs do Netuno tanto podem executar serviços e URLs internos, como também URLs externos.

> Para mais informações verifique a documentação do recurso [cron](/docs/library/resources/cron).

## Como Funciona

Cada aplicação tem a configuração dos seus próprios serviços agendados (**cron jobs**) com a respectiva configuração de execução.

Para simplificar cada serviço agendado é um **job** à parte, que tem a sua própria configuração de execução, podendo ser executado a cada minuto, de 5 em 5 minutos, a cada hora, num determinado dia e hora da semana, etc... também tem o URL que será chamado quando for o momento da sua execução.

> O Netuno utiliza a biblioteca <a href="http://www.quartz-scheduler.org/" target="_blank">Quartz Scheduler</a> para gerir a execução dos serviços agendados. A configuracão das regras de temporização é respectiva a esta biblioteca.

Assim, a execução de cada job passa pela execução de um URL (_endereço web, link_), que tanto pode ser externo como interno da própria aplicação. Ao ser um link externo tanto pode ser de uma outra aplicação como de um URL qualquer externo na internet, na rede ou no computador.

![Cron Diagram](/docs/assets/academy/server/cron.svg)

No gráfico acima demonstra que o Netuno contém 2 aplicações, onde cada uma tem configurado 2 jobs (_serviços agendados_), que são executados em momentos diferentes, respectivos a uma configuração qualquer. 

O comportamento da execução que irá contecer é o seguinte:

- App 1 lança 2 jobs:
  - Job 1: Executa um URL de serviço interno da própria App 1.
  - Job 2: Executa um URL externo, público.
- App 2 lança 2 jobs:
  - Job 3: Executa um URL de serviço interno da própria App 2
  - Job 4: Executa um URL de serviço da App 1.

> As aplicações devem ter os serviços que são executados pelo Cron Jobs dentro da pasta:
> - 📂 `server/services/jobs`

Cada URL é executado com o método HTTP POST. Na configuração do job permite adicionar parâmetros adicionais, e também uma chave de segredo para evitar que seja executada fora do contexto controlado.

## Configuração

A configuração dos serviços agendados é realizada no ficheiro de configuração da aplicação, de acordo com o ambiente.

> A configuração nunca deve começar com `*` isto irá provocar a execução a cada segundo, gerando assim, complicações de performance com efeito de bola de neve em caso do processamento em algum momento demore mais que 1 segundo.

Para o fazer, navegue dentro da aplicação que está a desenvolver até ao ficheiro de configuração de ambiente. Neste exemplo, iremos utilizar o ficheiro de ambiente de desenvolvimento localizado em:

- 📂 `config/_development.json`

Verifique se já não existem configurações para o Cron, se não existir adicione no fim do ficheiro de configuração (em formato JSON) os parâmetros de configuração:

```
{
    ...
    "cron": {
        "secret": "m3u-S3Gred0",
        "jobs": [
            {
                "name": "meu-job",
                "config": "0 30 12 * * ?",
                "url": "http://minha-app.local.netu.no:9000/services/jobs/meu-job"
            },
            {
                "name": "meu-job",
                "config": "0 0/2 * * * ?",
                "url": "http://minha-app.local.netu.no:9000/services/jobs/meu-outro-job",
                "params": {
                    "secret": "m3u-Ou7ro-S3Gred0",
                    "tipo": "cliente"
                }
            }
        ]
    },
    ...
}
```

Nesta configuração o primeiro job será executado todos os dias ao meio dia e trinta minutos.

E o segundo job executará a cada 2 minutos.


##### Jobs

A lista de serviços agendados que temos na aplicação, sendo um array podemos ter múltiplas serviços configurados.

##### Secret

É um parâmetro de chave de segurança que protege o serviço, para ser executado apenas quando receber este parâmetro com o valor exatamente igual.

Isto porque o `jobs` são serviços públicos e para evitar que sejam executados externamente contêm esta proteção.

##### Name

O nome que identifica o serviço internamente, o qual poderá ser utilizado para realizar manipulação de gestão, como parar e retomar.

##### Config

A configuração da expressão da temporização do serviço, ou seja, as regras do seu agendamento.

> A configuração nunca deve começar com `*` isto irá provocar a execução a cada segundo, gerando assim, complicações de performance com efeito de bola de neve em caso do processamento em algum momento demore mais que 1 segundo.

Verifique abaixo as expressões suportadas.

##### URL

O endereço que será executado periodicamente.

##### Params

São os parâmetros que são passados para o URL na sua execução, o URL é executado com o método **HTTP POST** e assim podem ser adicionados parâmetros adicionais como o _tipo_ no exemplo acima, ou até especificar outra chave secreta.

### Formato suportados das expressões Cron

|NOME DO CAMPO | OBRIGATÓRIO | VALORES ACEITES | CARACTERES ESPECIAIS PERMITIDOS |
| ------- |:------:|:-----------:|--------------|
| Segundos | SIM | 0-59 | , - * / |
| Minutos | SIM | 0-59 | , - * / |
| Horas | SIM | 0-23 | , - * / |
| Dia do Mês | SIM | 1-31 | , - * ? / L W |
| Mês | SIM | 1-12 or JAN-DEC | , - * / |
| Dia da semana | SIM | 1-7 or SUN-SAT | , - * ? / L # |
| Ano | NÃO | vazio, 1970-2099 | , - * / |

##### Exemplos de expressões Cron

|EXPRESSÃO | SIGNIFICADO |
| ------- |------|
| 1 * * * * ? | Executa no segundo número 1 de cada minuto. |
| 0 0 12 * * ? | Inicia às 12h00 todos os dias |
| 0 15 10 ? * * | Inicia às 10h15 todos os dias |
| 0 15 10 * * ? | Inicia às 10h15 todos os dias |
| 0 15 10 * * ? * | Inicia às 10h15 todos os dias |
| 0 15 10 * * ? 2005 | Inicia às 10h15 todos os dias durante o ano de 2005 |
| 0 * 14 * * ? | Inicia a cada minuto a começar às 14h00 e finaliza às 14h59, todos os dias |
| 0 0/5 14 * * ? | Inicia a cada 5 minutos a começar às 14h00 e finaliza às 14h55, todos os dias |
| 0 0/5 14,18 * * ? | Inicia a cada 5 minutos a começar às 14h00 e finaliza às 14h55. Posteriormente, inicia a cada 5 minutos a começar às 18h00 e finaliza às 18h55, todos os dias |
| 0 0-5 14 * * ? | Inicia a cada minuto a começar às 14h00 e finaliza às 14h05, todos os dias |
| 0 10,44 14 ? 3 WED | Inicia às 14h10 e às 14h44 a cada quarta-feira do mês de Março. |
| 0 15 10 ? * MON-FRI | Inicia às 10h15 a cada dia útil da semana (de segunda a sexta-feira) |
| 0 15 10 15 * ? | Inicia às 10h15 no dia 15 de cada mês |
| 0 15 10 L * ? | Inicia às 10h15 no último dia de cada mês |
| 0 15 10 L-2 * ? | Inicia às 10h15 no penúltimo dia de cada mês |
| 0 15 10 ? * 6L | Inicia às 10h15 na última sexta-feira de cada mês |
| 0 15 10 ? * 6L 2002-2005 | Inicia às 10h15 a cada última sexta-feira de cada mês durante o ano de 2002, 2003, 2004 e 2005 |
| 0 15 10 ? * 6#3 | Inicia às 10h15 na terceira sexta-feira de cada mês |
| 0 0 12 1/5 * ? | Inicia às 12h00 a cada 5 dias de cada mês, a começar no primeiro dia de cada mês. |
| 0 11 11 11 11 ? | Inicia a cada 11 de Novembro às 11h11. |

> A configuração nunca deve começar com `*` isto irá provocar a execução a cada segundo, gerando assim, complicações de performance com efeito de bola de neve em caso do processamento em algum momento demore mais que 1 segundo.

## Serviço

Os serviços agendados devem ser programados dentro da pasta:

- 📂 `server/services/jobs`

O Netuno executará automaticamente estes serviços e realiza a validação do parâmetro `secret` com o valor que está na configuração.

> O `secret` serve para o serviço ser executado externamente sem autenticação, mas de forma segura.

O serviço será executado periodicamente de acordo com a parametrização definida.

Para realizar o teste da execução do serviço de forma manual basta executar o URL direto do serviço e passar o parâmetro do `secret`.

Por exemplo, via GET:

- http://minha-app.local.netu.no:9000/services/job/meu-job?secret=\*\*\*\*\*

No lugar dos `*****` no fim do URL deverá ser substituído pelo valor real configurado do `secret`.

## Exemplo

Crie o ficheiro em:

- 📂 `server/services/jobs/teste.js`

Neste ficheiro de serviço coloque o seguinte código:
```javascript
_log.info("Job de teste!")
_out.print("Ok")
```

No JSON de configuração da sua aplicação, ajuste a parametrização da seguinte forma:

```json
{
    ...
    "cron": {
        "secret": "m3u-S3Gred0",
        "jobs": [
            {
                "name": "teste",
                "config": "0/30 * * * * ?",
                "url": "/services/jobs/teste"
            }
        ]
    },
    ...
}
```

Ao executar o servidor do Netuno no terminal vai começar a aparecer a mensagem `Job de teste!` de 30 em 30 segundos.

Se abrir no browser o URL:

- http://localhost:9000/services/jobs/teste?secret=m3u-S3Gred0

Vai retornar apenas o `Ok` e no terminal vai aparecer a mensagem `Job de teste!`.

> No ambiente de `development` a validação do `secret` não tem efeito, por isso pode executar sem passar qualquer `secret` e vai funcionar, mas noutro ambiente, como o de produção já é levado em consideração.

## Muitas Tarefas

Quando há a necessidade de ser criado muitas tarefas agendadas, convém aumentar o número de threads utilizadas para a execução
paralela das diversas tarefas agendadas.

Essa configuração é feita no arquivo `config.js` que se encontra na raíz do Netuno, acrescentando a linha de exemplo:

```javascript
config.cronThreadCount = 10
```

> Por padrão esta configuração permite apenas 3 threads.
> 
> Deve ter em atenção para aumentar o número de threads de acordo com o número de cores do CPU.

Utilizar poucas threads para executar muitos agendamentos paralelos pode resultar na paragem da execução das tarefas agendadas.

Portanto se houver casos em que as tarefas ficam presas após algum tempo, provavelmente está sendo executado demasiadas 
tarefas em paralelo, então é necessário aumentaro número de threads.

## Programaticamente

O Netuno permite configurar e controlar os Cron Jobs programaticamente.

Isto quer dizer que através do código podemos gerir tudo.

### Criar Nova Tarefa

Para criar uma nova tarefa, criamos o seu agendamento através do [`_cron.schedule`](/docs/library/resources/cron#schedule).

O [`_cron.schedule`](/docs/library/resources/cron#schedule) recebe os seguintes parâmetros:

1. Chave de identificação da tarefa: `key`.
2. Configuração do tempo de agendamento para a execução.
3. Endereço do serviço que deve ser executado, ou seja a: `URL`.
4. Parâmetros adicionais que são enviados na chamada do serviço.

```javascript
_cron.schedule(
    'minha-tarefa',
    '0 0/60 * * * ?',
    `/services/jobs/produto-atualiza`,
    _val.map()
        .set('id', 123)
)
```

Se for necessário criar as tarefas automaticamente na inicialização da aplicação, pode então ser codificado este automatismo no arquivo:

- `server/core/_init.js`

Onde este arquivo é executado sempre que aplicação é inicializada pelo servidor do Netuno.

### Remover Tarefa

Para remover uma determinada tarefa utilizamos o [`_cron.remove(key)`](/docs/library/resources/cron#remove).

Onde a `key` é a chave de identificação da tarefa.

Veja o exemplo:

```javascript
_cron.remove('minha-tarefa')
```

### Listar Tarefas

Através do [`_cron.schedules()`](/docs/library/resources/cron#schedules) podemos listar todas as tarefas configuradas.

Exemplo de como listar todas as tarefas agendadas: 

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Chave</td>`)
_out.println(`  <td>URL</td>`)
_out.println(`  <td>Par&acirc;metros</td>`)
_out.println(`  <td>Descri&ccedil;&atilde;o</td>`)
_out.println(`  <td>&Uacute;ltima Execu&ccedil;&atilde;o</td>`)
_out.println(`  <td>Pr&oacute;xima Execu&ccedil;&atilde;o</td>`)
_out.println(`  <td>Prioridade</td>`)
_out.println('</tr>')
for (const schedule of list) {
        _out.println('<tr>')
        _out.println(`  <td>${schedule.getString('key')}</td>`)
        _out.println(`  <td>${schedule.getString('url')}</td>`)
        _out.println(`  <td>${schedule.getValues('params').toJSON()}</td>`)
        _out.println(`  <td>${schedule.get('detail').getDescription()}</td>`)
        _out.println(`  <td>${schedule.get('trigger').getPreviousFireTime()}</td>`)
        _out.println(`  <td>${schedule.get('trigger').getNextFireTime()}</td>`)
        _out.println(`  <td>${schedule.get('trigger').getPriority()}</td>`)
        _out.println('</tr>')
}
_out.println('</table>')
```

### Pausar Tarefas

Através do [`_cron.pause(key)`](/docs/library/resources/cron#pause) podemos pausar a execução de uma determinada tarefa.

Exemplo de como pausar todas as tarefas agendadas:

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Chave</td>`)
_out.println(`  <td>Parado</td>`)
_out.println('</tr>')
for (const schedule of list) {
    _out.println('<tr>')
    _out.println(`  <td>${schedule.getString('key')}</td>`)
    _out.println(`  <td>${_cron.pause(schedule.getString('key'))}</td>`)
    _out.println('</tr>')
}
_out.println('</table>')
```

> Repare na utilização do `_cron.pause` no exemplo acima.

### Retomar Tarefas

Através do [`_cron.resume(key)`](/docs/library/resources/cron#resume) podemos retomar a execução de uma determinada tarefa.

Exemplo de como retomar todas as tarefas agendadas, e apresenta quando as tarefas serão executadas:

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Chave</td>`)
_out.println(`  <td>Reativado</td>`)
_out.println(`  <td>Pr&oacute;xima Execu&ccedil;&atilde;o</td>`)
_out.println('</tr>')
for (const schedule of list) {
    _out.println('<tr>')
    _out.println(`  <td>${schedule.getString('key')}</td>`)
    _out.println(`  <td>${_cron.resume(schedule.getString('key'))}</td>`)
    _out.println(`  <td>${schedule.get('trigger').getNextFireTime()}</td>`)
    _out.println('</tr>')
}
_out.println('</table>')
```

> Repare na utilização do `_cron.resume` no exemplo acima.
