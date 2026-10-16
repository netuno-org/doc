---
id: monitor-alerts
title: Monitorización y Alertas
sidebar_label: Monitorización y Alertas
---

Alarmística sobre la utilización de hardware del servidor.

## Introducción

El servidor de Netuno tiene encapsulado el mecanismo de monitorización de rendimiento que permite analizar el impacto del sistema de software en el consumo de hardware.

Con la monitorización se permite a las aplicaciones implementar reglas de alarmística para realizar el aviso cuando algo alcanza un nivel que necesita atención.

La monitorización y las alertas, además de realizarse sobre los datos de rendimiento del proceso del servidor de Netuno en sí, también se hacen sobre todo el sistema del ordenador en ejecución.

Permite entonces realizar una monitorización completa y con alarmística.

## Configuración

La configuración general permite activar la presentación de los datos en los logs generales de Netuno, y controlar el intervalo de ejecución de la recogida y análisis de los indicadores de rendimiento.

La configuración de las alertas se realiza en cada aplicación, y permite tener múltiples alertas por aplicación.

### Logs e intervalo general

Netuno guarda los logs de rendimiento dentro de la carpeta `logs` que está dentro de la carpeta raíz de Netuno.

En esta carpeta de `logs` es donde se encuentran los archivos `stats-AÑO_MES_DIA.json`; estos siempre se generan automáticamente de acuerdo con el intervalo que puede modificarse como se indicará a continuación.

> Para una mejor visualización de los archivos puede utilizar el formateo automático de su editor preferido o bien con herramientas en línea como:
>
> - http://jsonviewer.stack.hu/
> - https://jsonformatter.org/json-viewer
>
> También pueden abrirse en **Firefox**, que realiza un excelente formateo.

##### Configuración de los logs e intervalo general

Para activar la presentación de los datos de rendimiento en los logs generales (`logs/netuno.log`) y en la **consola**, edite el archivo `config.js` que está en la raíz de la carpeta de Netuno.

Añada la siguiente línea en caso de que no exista:

```
config.monitorLog = true
```

También puede modificar el intervalo predeterminado de **60 segundos**, es decir, la información solo se presenta en el log minuto a minuto. Para ello, añada también la línea de código de abajo y modifique el valor de los segundos al tiempo deseado:

```
config.monitorInterval = 60
```

> Este intervalo es general e interfiere con el intervalo configurado en las alertas de las aplicaciones, que nunca será inferior a este intervalo general.

**Reinicie** el servidor de Netuno para que tenga efecto.

Empezará a mostrarse en la consola la información de la monitorización, como por ejemplo:

```
2020-11-17 14:56:08,109 INFO  [Thread-13] cli.Monitor - MONITOR
Carga de CPU: 
	Sistema: 19.1% (+19.1%)
	Proceso: 3.9% (+3.9%)
Memoria: 
	Sistema: 
		Usado: 9,525.9MB (58.1% +148.0MB)
		Libre: 6,858.1MB (41.9% -148.0MB)
	Proceso: 
		Total: 384.0MB (9.4% +126.0MB)
		Usado: 129.6MB (3.2% +18.9MB)
		Libre: 254.4MB (6.2% +107.1MB)
		GC: false
Disco: 
	Usado: 465,047.8MB (97.5% +21.3MB)
	Libre: 11,854.3MB (2.5% -21.3MB)
```

### Alertas en las aplicaciones

Las alertas se configuran en las aplicaciones, así que edite la configuración de su aplicación.

Es decir, dentro de la aplicación, en la carpeta `config`, en la configuración del entorno, en los archivos como:

- _development.json
- _production.json

Añada la configuración de las alertas de monitorización:

```
...
    "monitor": {
        "alerts": [
            {
                "name": "mi-alerta",
                "url": "http://NOMBRE-APP.local.netu.no:9000/services/mi-servicio-de-alerta"
            }
        ]
    }
...
```

> Esta es la configuración más simplificada.

Cuando haya una situación que necesite ser alertada, entonces se llamará a esa `url` y se pasarán los parámetros de rendimiento.

Por defecto, las alertas tienen un intervalo de **1 h** para cada tipo de alerta; así, solo se realizará la alerta si el **Procesador**, la **Memoria** o el **Disco** (HD) superan el límite del **90 %** de la capacidad máxima; pasado una hora enviará otra alerta.

> En situaciones de múltiples alertas, entonces el intervalo se abrevia; por ejemplo, si se ha disparado la alerta de la Memoria y pasados 20 minutos el Disco también supera el 90 %, entonces se dispara una nueva alerta inmediatamente, y el intervalo de 1 hora se reinicia.

### Alertas avanzadas

A continuación se encuentra una configuración más avanzada que permite modificar el intervalo y los límites de consumo del **Procesador**, de la **Memoria** o del **Disco** (HD):

```
...
    "monitor": {
        "alerts": [
            {
                "name": "mi-alerta-simple",
                "url": "http://NOMBRE-APP.local.netu.no:9000/services/mi-servicio-de-alerta"
            },
            {
                "name": "mi-alerta-avanzado",
                "url": "http://NOMBRE-APP.local.netu.no:9000/services/mi-servicio-de-alerta",
                "enabled": true,
                "interval": 3600,
                "threshold": {
                    "cpu": 90,
                    "memory": 90,
                    "disk": 90
                }
            },
            {
                "name": "mi-alerta-mas-avanzado",
                "url": "http://NOMBRE-APP.local.netu.no:9000/services/mi-servicio-de-alerta",
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

> Los valores anteriores son **valores predeterminados**.

##### Name

Nombre de identificación de la alerta.

##### Enabled

Permite activar y desactivar la alerta; el valor predeterminado es _true_ (activo).

##### Interval

Define el intervalo entre las alertas en **segundos**; el valor predeterminado es _3600 segundos_ (una hora).

##### Threshold

Define los límites de CPU, Memoria y Disco (HD).

##### CPU

El límite de consumo de CPU en el que deberá dispararse la alerta.

Permite también definir el límite específico para el _system_ y para el _process_.

##### Memory

El límite de consumo de Memoria en el que debe dispararse la alerta.

Permite también definir el límite específico para el _system_ y para el _process_.

##### System

Son los límites para el sistema operativo en general con todos los procesos que están en ejecución.

##### Process

Son los límites solo para el proceso del servidor de Netuno.

##### Disk

El límite de consumo de Disco (HD) en el que deberá dispararse la alerta.

## Parámetros enviados

Cuando se invoca una `url`, se dispara una alerta por haberse superado algún límite; entonces se enviarán los datos de rendimiento del consumo de hardware.

La `url` se ejecuta con el método `POST` y el contenido se envía en JSON: `Content-Type: application/json`.

Ejemplo del JSON con datos que se envía a la `url` de las alertas:

```
{
    "key": "mi-alerta-simple",
    "app": "mi-app",
    "hostname": "mi-ordenador",
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

### Descripción de los parámetros

##### Key

El nombre (clave) que se define en la configuración de la alerta en la aplicación.

##### App

El nombre de la aplicación que tiene la alerta configurada y que causa su disparo.

##### Hostname

Nombre del ordenador en el que se está ejecutando el servidor de Netuno que provoca la alerta.

##### Timezone

Zona horaria del ordenador que tiene el servidor de Netuno en ejecución y que provoca la alerta.

##### Started

Fecha y hora en que se inició el servidor de Netuno.

##### Moment

Fecha y hora del momento en que se generó la alerta.

##### Before

Información de la alerta anterior; tiene exactamente la misma estructura JSON pero con los datos referentes a la alerta provocada anteriormente.

##### Alerts

Lista de alertas que se han disparado, donde se especifica el tipo (_type_) de la alerta y el límite (_threshold_) que se ha superado.

Los tipos de alertas son:

- `cpu-system`: Alerta del consumo de CPU del sistema del ordenador con todos los procesos en ejecución en general.
- `cpu-process`: Alerta del consumo de CPU del proceso del servidor de Netuno.
- `memory-system`: Alerta del consumo de Memoria del sistema del ordenador con todos los procesos en ejecución en general.
- `memory-process`: Alerta del consumo de Memoria del proceso del servidor de Netuno.
- `disk`: Alerta del Disco (HD).

##### CPU

Son los datos del Procesador que se envían con las siguientes informaciones:

- `cores`: Cantidad de procesadores físicos.
- `vcores`: Cantidad de procesadores virtuales (threads).
- `load`: Información de la carga del procesador:
  - `system`: La carga de procesamiento del sistema operativo con todos los procesos en general; el valor está entre **0** (_0 %_) y **1** (_100 %_).
  - `process`: La carga de procesamiento del servidor de Netuno; el valor está entre **0** (_0 %_) y **1** (_100 %_).
  - `ticks`: Devuelve la carga del procesador en el sistema general en un array con ocho elementos que representa en milisegundos lo que se ha gastado en los siguientes estados: _User_ (0), _Nice_ (1), _System_ (2), _Idle_ (3), _IOwait_ (4), _Hardware interrupts (IRQ)_ (5), _Software interrupts/DPC (SoftIRQ)_ (6) y _Steal_ (7).
  - `frequency`: Frecuencia máxima (`max`) del procesador y la media de la frecuencia utilizada entre todos los núcleos (`average`); los valores están en _hercios_, por lo que 2500000000 _Hz_ equivalen a 2,5 _GHz_.

> La división de la frecuencia se realiza de la siguiente forma:
> 
> 2500000000 (_Hz_) / 1000 (_KHz_) / (1000) (_MHz_) / 1000 (_GHz_) = 2,5 _GHz_
>
> Hz (_Hercios_), KHz (_Kilohercios_), MHz (_Megahercios_), GHz (_Gigahercios_)

##### Memory

Son los datos de la Memoria que se envían con las siguientes informaciones:

- `system`: Es la información del consumo de memoria del sistema operativo con todos los procesos en general.
  - `total`: Memoria total del ordenador.
  - `used`: Memoria asignada en uso.
  - `free`: Memoria disponible libre.
- `process`: Son los datos de utilización de la memoria del proceso del servidor de Netuno.
  - `max`: Cantidad de memoria máxima que puede utilizar Netuno.
  - `total`: Total de la memoria reservada (asignada), incluye la memoria utilizada y "libre".
  - `used`: Cantidad de memoria que se está utilizando realmente.
  - `free`: Cantidad de memoria libre (reservada) disponible para ser utilizada.
  - `gc`: Si se ha invocado la ejecución del _garbage collector_ (recolector de basura de la memoria).

> Los valores están en Bytes, así 17179869184 Bytes equivalen a 16 Gigabytes.
>
> Cómo se realiza la división:
>
> 17179869184 _B_ / 1024 (_KB_) / 1024 (_MB_) / 1024 (_GB_) = 16 _GB_
>
> B (_Bytes_), KB (_Kilobytes_), MB (_Megabytes_), GB (_Gigabytes_)

##### Disk

Son los datos de utilización del disco duro (HD) que se envían con las siguientes informaciones:

- `total`: Tamaño total del disco.
- `used`: Cantidad de espacio utilizado en el disco.
- `free`: Cantidad de espacio disponible en el disco.

> Los valores están en Bytes, así 500068036608 Bytes equivalen a 465,72 Gigabytes.
>
> Cómo se realiza la división:
>
> 500068036608 _B_ / 1024 (_KB_) / 1024 (_MB_) / 1024 (_GB_) = 465,72 _GB_
>
> B (_Bytes_), KB (_Kilobytes_), MB (_Megabytes_), GB (_Gigabytes_)

## Ejemplo de servicios de alarmística

Los servicios de Netuno pueden utilizarse como `url` de las alertas.

Se puede implementar el envío de la alarmística a través de email, SMS, o incluso guardar la información en base de datos.

También puede utilizarse cualquier tipo de `url` y así la alerta puede dispararse hacia otras tecnologías como NodeJS, PHP, .NET, Rails, Laravel, Sails, etc...

En el caso de Netuno, se puede implementar un servicio para el envío de email siguiendo las indicaciones del tutorial de [Envío de correos electrónicos](/docs/academy/server/services/sending-emails).

A continuación se muestra cómo implementar un ejemplo completo adaptado a la alarmística de monitorización.

Antes de empezar, asegúrese de que tiene la configuración del SMTP en la configuración de la aplicación y también la configuración de la monitorización, como por ejemplo:

```
...
    "smtp": {
        "alert": {
            "enabled": true,
            "host": "MI.SERVIDOR.com",
            "port": 465,
            "ssl": true,
            "subjectPrefix": "Alerta: ",
            "from": "noreply@MI.DOMINIO.com",
            "to": "info@MI.DOMINIO.com",
            "username": "noreply@MI.DOMINIO.com",
            "password": "S3gr3d0"
        }
    },
    ...
    "monitor": {
        "alerts": [
            {
                "name": "alerta-email",
                "url": "http://MI-APP.local.netu.no:9000/services/monitor/alerta"
            }
        ]
    }
...
```

> Asegúrese de que ajusta los parámetros, especialmente los que están destacados en los valores con letras mayúsculas.

El servicio de alarmística podrá quedar en `server/services/monitor/alerta.js`, con el siguiente código:

```
_log.info("Información de alerta de monitorización:\n"+ _req.toJSON())

const cpu = _req.getValues("cpu")
const memoria = _req.getValues("memory")
const disco = _req.getValues("disk")

const cargaCpuSistema = Math.round(cpu.getValues("load").getFloat("system") * 100)
const cargaCpuProceso = Math.round(cpu.getValues("load").getFloat("process") * 100)
const memoriaSistemaLibre = Math.round(memoria.getValues("system").getLong("free") / 1024 / 1024)
const memoriaProcesoLibre = Math.round(memoria.getValues("process").getLong("free") / 1024 / 1024)
const discoLibre = Math.round(disco.getLong("free") / 1024 / 1024)

let tiposAsunto = ""
let htmlInformacion = ""

for (const tipoAlerta of _req.getValues("alerts")) {
    if (tiposAsunto != "") {
        tiposAsunto += ", "
    }
    if (tipoAlerta.getString("type") == 'cpu-system') {
        tiposAsunto += "CPU del Sistema"
        htmlInformacion += `<p>El procesador del <b>sistema</b> alcanza el <b>${cargaCpuSistema}%</b></p>`
    }
    if (tipoAlerta.getString("type") == 'cpu-process') {
        tiposAsunto += "CPU del Proceso"
        htmlInformacion += `<p>El procesador del <b>proceso</b> alcanza el <b>${cargaCpuProceso}%</b></p>`
    }
    if (tipoAlerta.getString("type") == 'memory-system') {
        tiposAsunto += "Memoria del Sistema"
        htmlInformacion += `La memoria del <b>sistema</b> solo tiene <b>${memoriaSistemaLibre} MB</b> libres.`
    }
    if (tipoAlerta.getString("type") == 'memory-process') {
        tiposAsunto += "Memoria del Proceso"
        htmlInformacion += `La memoria del proceso solo tiene <b>${memoriaProcesoLibre} MB</b> libres.`
    }
    if (tipoAlerta.getString("type") == 'disk') {
        tiposAsunto += "Disco"
        htmlInformacion += `El disco solo tiene <b>${discoLibre} MB</b> libres.`
    }
}

const smtp = _smtp.init("alert")

smtp.subject += `${_req.getString("hostname")} - ${tiposAsunto}`

smtp.html += `<h2>${_req.getString("hostname")}</h2>${htmlInformacion}`

smtp.text = "Información en la versión de contenido HTML de este correo electrónico."

smtp.send()
```

> Se enviará un correo con las alertas.

En este caso, solo fue necesario alertar de la situación del espacio en disco, como puede verse en este correo recibido:

![correo](/docs/assets/library/advanced/monitor-alerts-mail-pt.png)

Para implementar el envío de **SMS** hay ejemplos en la aplicación de **demo**_stración_ con la integración de API REST remotas que permite integrar con la plataforma de SMS que prefiera.