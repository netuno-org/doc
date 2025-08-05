---
id: monitor-alerts
title: Monitorização e Alertas
sidebar_label: Monitorização e Alertas
---

## Introdução

O servidor do Netuno tem encapsulado o mecanismo de monitorização de performance que permite analisar o impacto do sistema de software no consumo do hardware.

Com a monitorização é permitido às apps implementar regras de alarmística para realizar o aviso quando algo atinge um patamar que necessita de atenção. 

A monitorização e os alertas além de ser realizado sobre os dados de performance do processo do servidor do Netuno em si também faz sobre todo o sistema do computador em execução.

Permite então realizar uma monitorização completa e com alarmística.

## Configuração

A configuração geral permite ativar a apresentação dos dados nos logs gerais do Netuno, e controlar o intervalo de execução da recolha e análise dos indicadores de performance.

A configuração dos alertas é realizado em cada app, e permite ter múltiplos alertas por aplicação.

### Logs e Intervalo Geral

O Netuno guarda os logs de performance dentro da pasta `logs` que está dentro da pasta raíz do Netuno.

Nesta pasta de `logs` é onde são encontrados os ficheiros `stats-ANO_MES_DIA.json`, estes são sempre gerados automaticamente de acordo com o intervalo que pode ser alterado como será indicado a seguir.

> Para melhor visualização dos ficheiros pode utilizar a formação automática do seu editor de preferência ou então com ferramentas online como:
>
> - http://jsonviewer.stack.hu/
> - https://jsonformatter.org/json-viewer
>
> Também podem ser abertos no **Firefox** que realiza uma excelente formação.

##### Configuração dos Logs e Intervalo Geral

Para ativar a apresentação dos dados de performance nos logs gerais (`logs/netuno.log`) e na **consola**, edite o ficheiro `config.js` que está na raíz da pasta do Netuno.

Acrescente a seguinte linha caso já não exista:

```
config.monitorLog = true
```

Também pode alterar o intervalo padrão de **60 segundos**, ou seja, a informação apenas é apresentada em log de minuto em minuto. Para isto, adicione também a linha de código abaixo e altere o valor dos segundos para o tempo pretendido:

```
config.monitorInterval = 60
```

> Este intervalo é geral e interfere com o intervalo configurado nos alertas das apps, que nunca será inferior a este intervalo geral.

**Reinicie** o servidor do Netuno para ter efeito.

Vai começar a ser apresentado na consola a informação da monitorização, como por exemplo:

```
2020-11-17 14:56:08,109 INFO  [Thread-13] cli.Monitor - MONITOR
CPU Load: 
	System: 19.1% (+19.1%)
	Process: 3.9% (+3.9%)
Memory: 
	System: 
		Used: 9,525.9MB (58.1% +148.0MB)
		Free: 6,858.1MB (41.9% -148.0MB)
	Process: 
		Total: 384.0MB (9.4% +126.0MB)
		Used: 129.6MB (3.2% +18.9MB)
		Free: 254.4MB (6.2% +107.1MB)
		GC: false
Disk: 
	Used: 465,047.8MB (97.5% +21.3MB)
	Free: 11,854.3MB (2.5% -21.3MB)
```

### Alerta nas Apps

Os alertas são configurados nas aplicações, então edite a configuração da sua app.

Ou seja, dentro da aplicação na pasta `config` na configuração do ambiente, nos ficheiros como:

- _development.json
- _production.json

Acrescente a configuração dos alertas de monitorização:

```
...
    "monitor": {
        "alerts": [
            {
                "name": "meu-alerta",
                "url": "http://APP-NAME.local.netu.no:9000/services/meu-servico-de-alerta"
            }
        ]
    }
...
```

> Esta é a configuração mais simplificada.

Quando houver uma situação que necessita ser alertada então esse `url` será chamado e serão passados os parâmetros de performance.

Por padrão os alertas têm um intervalo de **1h** para cada tipo de alerta, assim só haverá a realização do alerta caso o **Processador**, a **Memória** ou o **Disco**(HD) ultrapassa o limite de **90%** da capacidade máxima, passado uma hora enviará outro alerta.

> Em situações de múltiplos alertas então o intervalo é abreviado, por exemplo, caso tenha sido disparado o alerta da Memória e passado 20 minutos o Disco também ultrapassa os 90%, então é disparado um novo alerta imediatamente, e o intervalo de 1 hora é recomeçado.

### Alertas Avançados

Abaixo encontra-se uma configuração mais avançada onde permite alterar o intervalo e os limites do consumo do **Processador**, da **Memória** ou do **Disco**(HD):

```
...
    "monitor": {
        "alerts": [
            {
                "name": "meu-alerta-simples",
                "url": "http://APP-NAME.local.netu.no:9000/services/meu-servico-de-alerta"
            },
            {
                "name": "meu-alerta-avancado",
                "url": "http://APP-NAME.local.netu.no:9000/services/meu-servico-de-alerta",
                "enabled": true,
                "interval": 3600,
                "threshold": {
                    "cpu": 90,
                    "memory": 90,
                    "disk": 90
                }
            },
            {
                "name": "meu-alerta-mais-avancado",
                "url": "http://APP-NAME.local.netu.no:9000/services/meu-servico-de-alerta",
                "enabled": true,
                "interval": 3600,
                "threshold": {
                    "cpu": {
                        "system": 90,
                        "process": 90
                    },
                    "memory": {
                        "system": 90,
                        "process": 90
                    },
                    "disk": 90
                }
            }
        ]
    }
...
```

> Os valores acima são **valores padrão**!

##### Name

Nome de identificação do alerta.

##### Enabled

Permite ativar e desativar o alerta, o padrão é _true_ (ativo).

##### Interval

Define o intervalo entre os alertas em **segundos**, o padrão é _3600 segundos_ (uma hora).

##### Threshold

Define os limites de CPU, Memória e Disco (HD).

##### CPU

O limite do consumo de CPU em que deverá ser disparado o alerta.

Permite também definir o limite específico para o _system_ e para o _process_.

##### Memory

O limite do consumo de Memória em que deve ser disparado o alerta.

Permite também definir o limite específico para o _system_ e para o _process_.

##### System

São os limites para o sistema operacional no geral com todos os processos que estão em execução.

##### Process

São os limites apenas para o processo do servidor do Netuno.

##### Disk

O limite do consumo de Disco (HD) em que deverá ser disparado o alerta.

## Parâmetros Enviados

Quando um `url` é invocado é disparado um alerta por ter sido ultrapassado algum limite, então serão enviados os dados de performance do consumo de hardware.

O `url` é executado com o método `POST` e o conteúdo é enviado em JSON: `Content-Type: application/json`.

Exemplo do JSON com dados que é enviado para o `url` dos alertas:

```
{
    "key": "meu-alerta-simples",
    "app": "minha-app",
    "hostname": "meu-computador",
    "timezone": "Europe/Lisbon",
    "started": "2020-11-17 14:55:07.682",
    "moment": "2020-11-17 14:56:08.098",
    "before": {
        ...
    },
    "alerts": [
        {
            "threshold": 90,
            "type": "cpu-system"
        },
        {
            "threshold": 90,
            "type": "disk"
        }
    ],
    "cpu": {
        "cores": 4,
        "vcores": 8,
        "load": {
            "system": 0.91311,
            "process": 0.03945,
            "ticks": [ 575084, 0, 260470, 6796463, 0, 0, 0, 0 ],
            "frequency": {
                "average": 2500000000,
                "max": 2500000000
            }
        }
    },
    "memory": {
        "system": {
            "total": 17179869184,
            "used": 9988640768,
            "free": 7191228416
        },
        "process": {
            "total": 402653184,
            "max": 4294967296,
            "used": 135885832,
            "free": 266767352,
            "gc": false
        }
    },
    "disk": {
        "total": 500068036608,
        "used": 487637929984,
        "free": 12430106624
    }
}
```

### Descrição dos Parâmetros

##### Key

O nome (chave) que é definida na configuração do alerta na aplicação.

##### App

O nome da aplicação que tem o alerta configurado e que causa o seu disparo.

##### Hostname

Nome do computador que está a ser executado o servidor do Netuno que provoca o alerta.

##### Timezone

Fuso horário do computador que tem o servidor do Netuno em execução e que provoca o alerta.

##### Started

Data e hora quando o servidor do Netuno foi iniciado.

##### Moment

Data e hora do momento em que o alerta foi gerado.

##### Before

Informação do alerta anterior, tem exatamente a mesma estrutura JSON mas com os dados referentes ao alerta provocado anteriormente.

##### Alerts

Lista de alertas que foram disparados, onde especifica o tipo (_type_) do alerta e o limite (_threshold_) que foi ultrapassado.

Os tipos de alertas são:

- `cpu-system`: Alerta do consumo de CPU do sistema do computador com todos os processos em execução no geral.
- `cpu-process`: Alerta do consumo de CPU do processo do servidor do Netuno.
- `memory-system`: Alerta do consumo de Memória do sistema do computador com todos os processos em execução no geral.
- `memory-process`: Alerta do consumo de Memória do processo do servidor do Netuno.
- `disk`: Alerta do Disco (HD).

##### CPU

São os dados do Processador que são enviados com as seguintes informações:

- `cores`: Quantidade de processadores físicos.
- `vcores`: Quantidade de processadores virtuais (threads).
- `load`: Informação da carga do processador:
  - `system`: A carga de processamento do sistema operacional com todos os processos no geral, o valor é entre **0** (_0%_) e **1** (_100%_).
  - `process`: A carga de processamento do servidor do Netuno, o valor é entre **0** (_0%_) e **1** (_100%_).
  - `ticks`: Retorna a carga do processador no sistema geral num array com oito elementos que representa em milissegundos o que foi gasto nos seguintes estados: _User_ (0), _Nice_ (1), _System_ (2), _Idle_ (3), _IOwait_ (4), _Hardware interrupts (IRQ)_ (5), _Software interrupts/DPC (SoftIRQ)_ (6) e _Steal_ (7).
  - `frequency`: Frequência máxima (`max`) do processador e a média da frequência utilizada entre todos os cores (`average`), os valores estão em _hertz_, então 2500000000 _Hz_ equivalem a 2.5 _GHz_.

> A divisão da frequência é realizada da seguinte forma:
> 
> 2500000000 (_Hz_) / 1000 (_KHz_) / (1000) (_MGz_) / 1000 (_GHz_) = 2.5 _GHz_
>
> Hz (_Hertz_), KHz (_Kilohertz_), MGz (_Megahertz_), GHz (_Gigahertz_)

##### Memory

São os dados da Memória que são enviados com as seguintes informações:

- `system`: É a informação do consumo de memória do sistema operacional com todos os processos no geral.
  - `total`: Memória total do computador.
  - `used`: Memória alocada em utilização.
  - `free`: Memória disponível livre.
- `process`: São os dados de utilização da memória do processo do servidor do Netuno.
  - `max`: Quantidade de memória máxima que pode ser utilizada pelo Netuno.
  - `total`: Total da memória reservada (alocada), incluí a memória utilizada e "livre".
  - `used`: Quantidade de memória que está realmente a ser utilizada.
  - `free`: Quantidade de memória livre (reservada) disponível para ser utilizada.
  - `gc`: Se foi invocado a execução do _garbage collector_ (coletor de lixo da memória).

> Os valores são em Bytes, assim 17179869184 Bytes equivalem a 16 Gigabytes.
>
> Como é realizada a divisão:
>
> 17179869184 _B_ / 1024 (_KB_) / 1024 (_MB_) / 1024 (_GB_) = 16 _GB_ 
>
> B (_Bytes_), KB (_Kilobytes_), MB (_Megabytes_), GB (_Gigabytes_)

##### Disk

São os dados de utilização do disco rígido (HD) que são enviados com as seguintes informações:

- `total`: Tamanho total do disco.
- `used`: Quantidade de espaço utilizado no disco.
- `free`: Quantidade de espaço disponível no disco.

> Os valores são em Bytes, assim 500068036608 Bytes equivalem a 465,72 Gigabytes.
>
> Como é realizada a divisão:
>
> 500068036608 _B_ / 1024 (_KB_) / 1024 (_MB_) / 1024 (_GB_) = 465,72 _GB_ 
>
> B (_Bytes_), KB (_Kilobytes_), MB (_Megabytes_), GB (_Gigabytes_)

## Exemplo de Serviços de Alarmística

Os serviços do Netuno podem ser utilizados como `url` dos alertas.

Pode ser implementado o envio da alarmística através de email, SMS, ou até guardar a informação em base de dados.

Também pode ser utilizado qualquer tipo de `url` e assim o alerta pode ser disparado para outras tecnologias como em NodeJS, PHP, .NET, Rails, Laravel, Sails, etc...

No caso do Netuno pode ser implementado um serviço para o envio de email seguindo as indicações do tutorial de [Envio de E-mails](/docs/academy/server/services/sending-emails).

Segue abaixo como implementar um exemplo completo adaptado à alarmística de monitorização.

Antes de começar certifique que tem a configuração do SMTP na configuração da aplicação e também a configuração da monitorização, como por exemplo:

```
...
    "smtp": {
        "alert": {
            "enabled": true,
            "host": "MEU.SERVIDOR.com",
            "port": 465,
            "ssl": true,
            "subjectPrefix": "Alerta: ",
            "from": "noreply@MEU.DOMINIO.com",
            "to": "info@MEU.DOMINIO.com",
            "username": "noreply@MEU.DOMINIO.com",
            "password": "S3gr3d0"
        }
    },
    ...
    "monitor": {
        "alerts": [
            {
                "name": "alerta-email",
                "url": "http://MY-APP.local.netu.no:9000/services/monitor/alert"
            }
        ]
    }
...
```

> Certifique que ajusta os parâmetros especialmente os que estão destacados nos valores com letras maiúsculas.

O serviço de alarmística poderá ficar em `server/services/monitor/alert.js`, com o seguinte código:

```
_log.info("Monitor Alert Informations:\n"+ _req.toJSON())

const cpu = _req.getValues("cpu")
const memory = _req.getValues("memory")
const disk = _req.getValues("disk")

const cpuLoadSystem = Math.round(cpu.getValues("load").getFloat("system") * 100)
const cpuLoadProcess = Math.round(cpu.getValues("load").getFloat("process") * 100)
const memorySystemFree = Math.round(memory.getValues("system").getLong("free") / 1024 / 1024)
const memoryProcessFree = Math.round(memory.getValues("process").getLong("free") / 1024 / 1024)
const diskFree = Math.round(disk.getLong("free") / 1024 / 1024)

let subjectTypes = ""
let htmlInfos = ""

for (const alertType of _req.getValues("alerts")) {
    if (subjectTypes != "") {
        subjectTypes += ", "
    }
    if (alertType.getString("type") == 'cpu-system') {
        subjectTypes += "CPU do Sistema"
        htmlInfos += `<p>O processador do <b>sistema</b> atinge os <b>${cpuLoadSystem}%</b></p>`
    }
    if (alertType.getString("type") == 'cpu-process') {
        subjectTypes += "CPU do Processo"
        htmlInfos += `<p>O processador do <b>processo</b> atinge os <b>${cpuLoadProcess}%</b></p>`
    }
    if (alertType.getString("type") == 'memory-system') {
        subjectTypes += "Memória do Sistema"
        htmlInfos += `A memória do <b>sistema</b> tem apenas <b>${memorySystemFree} MB</b> livres.`
    }
    if (alertType.getString("type") == 'memory-process') {
        subjectTypes += "Memória do Processo"
        htmlInfos += `A memória do processo tem apenas <b>${memoryProcessFree} MB</b> livres.`
    }
    if (alertType.getString("type") == 'disk') {
        subjectTypes += "Disco"
        htmlInfos += `O disco tem apenas <b>${diskFree} MB</b> livres.`
    }
}

const smtp = _smtp.init("alert")

smtp.subject += `${_req.getString("hostname")} - ${subjectTypes}`

smtp.html += `<h2>${_req.getString("hostname")}</h2>${htmlInfos}`

smtp.text = "Informações na versão de conteúdo HTML deste e-mail."

smtp.send()
```

> Será enviado um mail com os alertas.

Neste caso apenas houve a necessidade de alertar a situação do espaço em disco, como pode ser visto neste email recebido:

![mail](/docs/assets/library/advanced/monitor-alerts-mail-pt.png)

Para implementar o envio de **SMS** há exemplos na aplicação de **demo**_nstração_ com a integração de API REST remotas que permite integrar com a plataforma de SMS que preferir.
