---
id: monitor-alerts
title: Monitorización y Alertas
sidebar_label: Monitorización y Alertas
---

Alarmística sobre la utilización de hardware del servidor.

## Introducción

El servidor de Netuno tiene encapsulado el mecanismo de monitorización de rendimiento que permite analizar el impacto del sistema de software en el consumo de hardware.

Con la monitorización, se permite a las apps implementar reglas de alarmística para realizar el aviso cuando algo alcanza un nivel que requiere atención.

La monitorización y los alertas, además de realizarse sobre los datos de rendimiento del proceso del servidor de Netuno en sí, también se realizan sobre todo el sistema del ordenador en ejecución.

Permite, por tanto, realizar una monitorización completa y con alarmística.

## Configuración

La configuración general permite activar la presentación de los datos en los logs generales de Netuno y controlar el intervalo de ejecución de la recogida y análisis de los indicadores de rendimiento.

La configuración de los alertas se realiza en cada app y permite tener múltiples alertas por aplicación.

### Logs e Intervalo General

Netuno guarda los logs de rendimiento dentro de la carpeta `logs`, que está dentro de la carpeta raíz de Netuno.

En esta carpeta `logs` es donde se encuentran los archivos `stats-AÑO_MES_DÍA.json`; estos siempre se generan automáticamente de acuerdo con el intervalo, que puede modificarse como se indicará a continuación.

> Para una mejor visualización de los archivos, puede utilizar el formateo automático de su editor preferido o herramientas en línea como:
>
> - http://jsonviewer.stack.hu/
> - https://jsonformatter.org/json-viewer
>
> También se pueden abrir en **Firefox**, que realiza un excelente formateo.

##### Configuración de los Logs y el Intervalo General

Para activar la presentación de los datos de rendimiento en los logs generales (`logs/netuno.log`) y en la **consola**, edite el archivo `config.js` que está en la raíz de la carpeta de Netuno.

Añada la siguiente línea si todavía no existe:

```
config.monitorLog = true
```

También puede cambiar el intervalo predeterminado de **60 segundos**, es decir, la información solo se presenta en el log de minuto en minuto. Para ello, añada también la línea de código de abajo y cambie el valor de los segundos por el tiempo deseado:

```
config.monitorInterval = 60
```

> Este intervalo es general e interfiere con el intervalo configurado en los alertas de las apps, que nunca será inferior a este intervalo general.

**Reinicie** el servidor de Netuno para que tenga efecto.

Empezará a mostrarse en la consola la información de monitorización, como por ejemplo:

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

### Alerta en las Apps

Los alertas se configuran en las aplicaciones, así que edite la configuración de su app.

Es decir, dentro de la aplicación, en la carpeta `config`, en la configuración del entorno, en archivos como:

- _development.json
- _production.json

Añada la configuración de los alertas de monitorización:

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

Cuando haya una situación que requiera ser alertada, se llamará a ese `url` y se pasarán los parámetros de rendimiento.

Por defecto, los alertas tienen un intervalo de **1 h** para cada tipo de alerta; así, solo se realizará el alerta si el **Procesador**, la **Memoria** o el **Disco** (HD) supera el límite del **90%** de la capacidad máxima. Pasada una hora, enviará otro alerta.

> En situaciones de múltiples alertas, el intervalo se abrevia; por ejemplo, si se ha disparado el alerta de Memoria y, pasados 20 minutos, el Disco también supera el 90%, se dispara un nuevo alerta inmediatamente y el intervalo de 1 hora vuelve a comenzar.

### Alertas Avanzados

A continuación se encuentra una configuración más avanzada, que permite cambiar el intervalo y los límites de consumo del **Procesador**, la **Memoria** o el **Disco** (HD):

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

> ¡Los valores anteriores son **valores predeterminados**!

##### Nombre

Nombre de identificación del alerta.

##### Activado

Permite activar y desactivar el alerta; el valor predeterminado es _true_ (activo).

##### Intervalo

Define el intervalo entre los alertas en **segundos**; el valor predeterminado es _3600 segundos_ (una hora).

##### Umbral

Define los límites de CPU, Memoria y Disco (HD).

##### CPU

El límite de consumo de CPU con el que deberá dispararse el alerta.

También permite definir el límite específico para el _system_ y el _process_.

##### Memoria

El límite de consumo de Memoria con el que debe dispararse el alerta.

También permite definir el límite específico para el _system_ y el _process_.

##### Sistema

Son los límites para el sistema operativo en general, con todos los procesos que están en ejecución.

##### Proceso

Son los límites únicamente para el proceso del servidor de Netuno.

##### Disco

El límite de consumo de Disco (HD) con el que deberá dispararse el alerta.

## Parámetros Enviados

Cuando se invoca un `url`, se dispara un alerta por haberse superado algún límite; entonces se enviarán los datos de rendimiento del consumo de hardware.

El `url` se ejecuta con el método `POST` y el contenido se envía en JSON: `Content-Type: application/json`.

Ejemplo del JSON con los datos que se envían al `url` de los alertas:

```
{
    "key": "mi-alerta-simple",
    "app": "mi-app",
    "hostname": "mi-ordenador",
    "timezone": "Europe/Madrid",
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

### Descripción de los Parámetros

##### Clave

El nombre (clave) que se define en la configuración del alerta en la aplicación.

##### App

El nombre de la aplicación que tiene el alerta configurado y que provoca su disparo.

##### Nombre de host

Nombre del ordenador en el que se está ejecutando el servidor de Netuno que provoca el alerta.

##### Zona horaria

Zona horaria del ordenador que tiene el servidor de Netuno en ejecución y que provoca el alerta.

##### Iniciado

Fecha y hora en que se inició el servidor de Netuno.

##### Momento

Fecha y hora del momento en que se generó el alerta.

##### Anterior

Información del alerta anterior; tiene exactamente la misma estructura JSON, pero con los datos referentes al alerta provocado anteriormente.

##### Alertas

Lista de alertas que se han disparado, donde se especifica el tipo (_type_) del alerta y el límite (_threshold_) que se ha superado.

Los tipos de alerta son:

- `cpu-system`: Alerta del consumo de CPU del sistema del ordenador con todos los procesos en ejecución en general.
- `cpu-process`: Alerta del consumo de CPU del proceso del servidor de Netuno.
- `memory-system`: Alerta del consumo de Memoria del sistema del ordenador con todos los procesos en ejecución en general.
- `memory-process`: Alerta del consumo de Memoria del proceso del servidor de Netuno.
- `disk`: Alerta del Disco (HD).

##### CPU

Son los datos del Procesador que se envían con la siguiente información:

- `cores`: Cantidad de procesadores físicos.
- `vcores`: Cantidad de procesadores virtuales (hilos).
- `load`: Información de la carga del procesador:
  - `system`: La carga de procesamiento del sistema operativo con todos los procesos en general; el valor está entre **0** (_0%_) y **1** (_100%_).
  - `process`: La carga de procesamiento del servidor de Netuno; el valor está entre **0** (_0%_) y **1** (_100%_).
  - `ticks`: Devuelve la carga del procesador en el sistema general en un array de ocho elementos que representa, en milisegundos, lo que se ha gastado en los siguientes estados: _User_ (0), _Nice_ (1), _System_ (2), _Idle_ (3), _IOwait_ (4), _Hardware interrupts (IRQ)_ (5), _Software interrupts/DPC (SoftIRQ)_ (6) y _Steal_ (7).
  - `frequency`: Frecuencia máxima (`max`) del procesador y la media de la frecuencia utilizada entre todos los núcleos (`average`); los valores están en _hercios_, por lo que 2500000000 _Hz_ equivalen a 2.5 _GHz_.

> La división de la frecuencia se realiza de la siguiente forma:
> 
> 2500000000 (_Hz_) / 1000 (_KHz_) / (1000) (_MGz_) / 1000 (_GHz_) = 2.5 _GHz_
>
> Hz (_hercios_), KHz (_kilohercios_), MGz (_megahercios_), GHz (_gigahercios_)

##### Memoria

Son los datos de la Memoria que se envían con la siguiente información:

- `system`: Es la información del consumo de memoria del sistema operativo con todos los procesos en general.
  - `total`: Memoria total del ordenador.
  - `used`: Memoria asignada en uso.
  - `free`: Memoria disponible libre.
- `process`: Son los datos de utilización de la memoria del proceso del servidor de Netuno.
  - `max`: Cantidad de memoria máxima que puede utilizar Netuno.
  - `total`: Total de la memoria reservada (asignada); incluye la memoria utilizada y la "libre".
  - `used`: Cantidad de memoria que se está utilizando realmente.
  - `free`: Cantidad de memoria libre (reservada) disponible para su uso.
  - `gc`: Si se ha invocado la ejecución del _garbage collector_ (recolector de basura de la memoria).

> Los valores están en bytes; así, 17179869184 bytes equivalen a 16 gigabytes.
>
> Cómo se realiza la división:
>
> 17179869184 _B_ / 1024 (_KB_) / 1024 (_MB_) / 1024 (_GB_) = 16 _GB_ 
>
> B (_bytes_), KB (_kilobytes_), MB (_megabytes_), GB (_gigabytes_)

##### Disco

Son los datos de utilización del disco duro (HD) que se envían con la siguiente información:

- `total`: Tamaño total del disco.
- `used`: Cantidad de espacio utilizado en el disco.
- `free`: Cantidad de espacio disponible en el disco.

> Los valores están en bytes; así, 500068036608 bytes equivalen a 465,72 gigabytes.
>
> Cómo se realiza la división:
>
> 500068036608 _B_ / 1024 (_KB_) / 1024 (_MB_) / 1024 (_GB_) = 465,72 _GB_ 
>
> B (_bytes_), KB (_kilobytes_), MB (_megabytes_), GB (_gigabytes_)

## Ejemplo de Servicios de Alarmística

Los servicios de Netuno pueden utilizarse como `url` de los alertas.

Puede implementarse el envío de la alarmística mediante correo electrónico, SMS o incluso guardar la información en una base de datos.

También puede utilizarse cualquier tipo de `url`, de modo que el alerta puede dispararse hacia otras tecnologías como NodeJS, PHP, .NET, Rails, Laravel, Sails, etc...

En el caso de Netuno, puede implementarse un servicio para el envío de correo electrónico siguiendo las indicaciones del tutorial de [Envío de Correos Electrónicos](/docs/academy/server/services/sending-emails).

A continuación se muestra cómo implementar un ejemplo completo adaptado a la alarmística de monitorización.

Antes de comenzar, asegúrese de tener la configuración de SMTP en la configuración de la aplicación y también la configuración de monitorización, como por ejemplo:

```
...
    "smtp": {
        "alerta": {
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
                "name": "alerta-correo",
                "url": "http://MI-APP.local.netu.no:9000/services/monitor/alerta"
            }
        ]
    }
...
```

> Asegúrese de ajustar los parámetros, especialmente los que están destacados en los valores con letras mayúsculas.

El servicio de alarmística podrá estar en `server/services/monitor/alerta.js`, con el siguiente código:

```
_log.info("Información del alerta de monitorización:\n"+ _req.toJSON())

const cpu = _req.getValues("cpu")
const memoria = _req.getValues("memory")
const disco = _req.getValues("disk")

const cargaCpuSistema = Math.round(cpu.getValues("load").getFloat("system") * 100)
const cargaCpuProceso = Math.round(cpu.getValues("load").getFloat("process") * 100)
const memoriaSistemaLibre = Math.round(memoria.getValues("system").getLong("free") / 1024 / 1024)
const memoriaProcesoLibre = Math.round(memoria.getValues("process").getLong("free") / 1024 / 1024)
const discoLibre = Math.round(disco.getLong("free") / 1024 / 1024)

let tiposAsunto = ""
let infosHtml = ""

for (const tipoAlerta of _req.getValues("alerts")) {
    if (tiposAsunto != "") {
        tiposAsunto += ", "
    }
    if (tipoAlerta.getString("type") == 'cpu-system') {
        tiposAsunto += "CPU del Sistema"
        infosHtml += `<p>El procesador del <b>sistema</b> alcanza el <b>${cargaCpuSistema}%</b></p>`
    }
    if (tipoAlerta.getString("type") == 'cpu-process') {
        tiposAsunto += "CPU del Proceso"
        infosHtml += `<p>El procesador del <b>proceso</b> alcanza el <b>${cargaCpuProceso}%</b></p>`
    }
    if (tipoAlerta.getString("type") == 'memory-system') {
        tiposAsunto += "Memoria del Sistema"
        infosHtml += `La memoria del <b>sistema</b> solo tiene <b>${memoriaSistemaLibre} MB</b> libres.`
    }
    if (tipoAlerta.getString("type") == 'memory-process') {
        tiposAsunto += "Memoria del Proceso"
        infosHtml += `La memoria del proceso solo tiene <b>${memoriaProcesoLibre} MB</b> libres.`
    }
    if (tipoAlerta.getString("type") == 'disk') {
        tiposAsunto += "Disco"
        infosHtml += `El disco solo tiene <b>${discoLibre} MB</b> libres.`
    }
}

const smtp = _smtp.init("alerta")

smtp.subject += `${_req.getString("hostname")} - ${tiposAsunto}`

smtp.html += `<h2>${_req.getString("hostname")}</h2>${infosHtml}`

smtp.text = "Información en la versión de contenido HTML de este correo electrónico."

smtp.send()
```

> Se enviará un correo con los alertas.

En este caso, solo fue necesario alertar de la situación del espacio en disco, como puede verse en este correo recibido:

![correo](/docs/assets/library/advanced/monitor-alerts-mail-pt.png)

Para implementar el envío de **SMS**, hay ejemplos en la aplicación de **demo**_stración_ con la integración de API REST remotas que permite integrarse con la plataforma de SMS que prefiera.