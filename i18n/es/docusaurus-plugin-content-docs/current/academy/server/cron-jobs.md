---
id: cron-jobs
title: Cron Jobs - Servicios Programados
sidebar_label: Cron Jobs
---

## Antes de empezar

Antes de proceder, asegúrese de que tiene nociones básicas de _**JavaScript**_ y de que ya tiene las nociones básicas de Netuno con el paso a paso disponible en la [Academia](/docs/academy/overview).

## Introducción

Es común la necesidad de ejecutar tareas periódicamente, es decir, de vez en cuando es necesario enviar datos a otro sistema, o importar datos de otro sistema, enviar un correo electrónico, validar registros en base de datos, y mucho más...

En Linux/UNIX/Mac existe el servicio Cron con el famoso archivo de configuración `crontab`, mientras que en Windows existe el Task Manager (_Administrador de tareas_).

Y en Netuno, Cron Jobs ya viene integrado, ayudando así a evitar configuraciones externas.

Este tipo de operaciones periódicas se conocen como Cron Jobs o, en español, Servicios Programados.

Cada aplicación de Netuno puede tener innumerables Cron Jobs, y los Cron Jobs de Netuno pueden ejecutar tanto servicios y URLs internos como también URLs externos.

> Para más información, consulte la documentación del recurso [cron](/docs/library/resources/cron).

## Cómo Funciona

Cada aplicación tiene la configuración de sus propios servicios programados (**cron jobs**) con su respectiva configuración de ejecución.

Para simplificar, cada servicio programado es un **job** aparte, que tiene su propia configuración de ejecución, pudiendo ejecutarse cada minuto, cada 5 minutos, cada hora, en un determinado día y hora de la semana, etc... también tiene la URL que será llamada cuando sea el momento de su ejecución.

> Netuno utiliza la biblioteca <a href="http://www.quartz-scheduler.org/" target="_blank">Quartz Scheduler</a> para gestionar la ejecución de los servicios programados. La configuración de las reglas de temporización corresponde a esta biblioteca.

Así, la ejecución de cada job pasa por la ejecución de una URL (_dirección web, enlace_), que puede ser tanto externa como interna de la propia aplicación.

Al ser un enlace externo, puede ser de otra aplicación o de una URL cualquiera externa en internet, en la red o en el ordenador.

![Diagrama de Cron](/docs/assets/academy/server/cron.svg)

En el gráfico anterior se muestra que Netuno contiene 2 aplicaciones, donde cada una tiene configurados 2 jobs (_servicios programados_), que se ejecutan en momentos diferentes, según una configuración cualquiera. 

El comportamiento de la ejecución que ocurrirá es el siguiente:

- App 1 lanza 2 jobs:
  - Job 1: Ejecuta una URL de servicio interno de la propia App 1.
  - Job 2: Ejecuta una URL externa, pública.
- App 2 lanza 2 jobs:
  - Job 3: Ejecuta una URL de servicio interno de la propia App 2
  - Job 4: Ejecuta una URL de servicio de la App 1.

> Las aplicaciones deben tener los servicios que son ejecutados por Cron Jobs dentro de la carpeta:
> - 📂 `server/services/jobs`

Cada URL se ejecuta con el método HTTP POST. En la configuración del job se permite añadir parámetros adicionales, y también una clave secreta para evitar que se ejecute fuera del contexto controlado.

## Configuración

La configuración de los servicios programados se realiza en el archivo de configuración de la aplicación, de acuerdo con el entorno.

> La configuración nunca debe empezar con `*`; esto provocará la ejecución cada segundo, generando así complicaciones de rendimiento con efecto bola de nieve en caso de que el procesamiento en algún momento tarde más de 1 segundo.

Para hacerlo, navegue dentro de la aplicación que está desarrollando hasta el archivo de configuración de entorno. En este ejemplo, utilizaremos el archivo de entorno de desarrollo localizado en:

- 📂 `config/_development.json`

Verifique si ya no existen configuraciones para el Cron; si no existen, añada al final del archivo de configuración (en formato JSON) los parámetros de configuración:

```
{
    ...
    "cron": {
        "secret": "m3u-S3Gred0",
        "jobs": [
            {
                "name": "mi-trabajo",
                "config": "0 30 12 * * ?",
                "url": "http://mi-app.local.netu.no:9000/services/jobs/mi-trabajo"
            },
            {
                "name": "mi-trabajo",
                "config": "0 0/2 * * * ?",
                "url": "http://mi-app.local.netu.no:9000/services/jobs/mi-otro-trabajo",
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

En esta configuración, el primer job se ejecutará todos los días a las 12:30.

Y el segundo job se ejecutará cada 2 minutos.

##### Jobs

La lista de servicios programados que tenemos en la aplicación; al ser un array, podemos tener múltiples servicios configurados.

##### Secret

Es un parámetro de clave de seguridad que protege el servicio, para que se ejecute solo cuando reciba este parámetro con el valor exactamente igual.

Esto se debe a que los `jobs` son servicios públicos y, para evitar que se ejecuten externamente, contienen esta protección.

##### Name

El nombre que identifica el servicio internamente, el cual podrá ser utilizado para realizar manipulación de gestión, como parar y reanudar.

##### Config

La configuración de la expresión de temporización del servicio, es decir, las reglas de su programación.

> La configuración nunca debe empezar con `*`; esto provocará la ejecución cada segundo, generando así complicaciones de rendimiento con efecto bola de nieve en caso de que el procesamiento en algún momento tarde más de 1 segundo.

Verifique a continuación las expresiones soportadas.

##### URL

La dirección que será ejecutada periódicamente.

##### Params

Son los parámetros que se pasan a la URL en su ejecución; la URL se ejecuta con el método **HTTP POST** y así se pueden añadir parámetros adicionales como el _tipo_ en el ejemplo anterior, o incluso especificar otra clave secreta.

### Formatos soportados de las expresiones Cron

|NOMBRE DEL CAMPO | OBLIGATORIO | VALORES ACEPTADOS | CARACTERES ESPECIALES PERMITIDOS |
| ------- |:------:|:-----------:|--------------|
| Segundos | SÍ | 0-59 | , - * / |
| Minutos | SÍ | 0-59 | , - * / |
| Horas | SÍ | 0-23 | , - * / |
| Día del Mes | SÍ | 1-31 | , - * ? / L W |
| Mes | SÍ | 1-12 o JAN-DEC | , - * / |
| Día de la semana | SÍ | 1-7 o SUN-SAT | , - * ? / L # |
| Año | NO | vacío, 1970-2099 | , - * / |

##### Ejemplos de expresiones Cron

|EXPRESIÓN | SIGNIFICADO |
| ------- |------|
| 1 * * * * ? | Se ejecuta en el segundo número 1 de cada minuto. |
| 0 0 12 * * ? | Inicia a las 12:00 todos los días |
| 0 15 10 ? * * | Inicia a las 10:15 todos los días |
| 0 15 10 * * ? | Inicia a las 10:15 todos los días |
| 0 15 10 * * ? * | Inicia a las 10:15 todos los días |
| 0 15 10 * * ? 2005 | Inicia a las 10:15 todos los días durante el año 2005 |
| 0 * 14 * * ? | Inicia cada minuto a partir de las 14:00 y finaliza a las 14:59, todos los días |
| 0 0/5 14 * * ? | Inicia cada 5 minutos a partir de las 14:00 y finaliza a las 14:55, todos los días |
| 0 0/5 14,18 * * ? | Inicia cada 5 minutos a partir de las 14:00 y finaliza a las 14:55. Posteriormente, inicia cada 5 minutos a partir de las 18:00 y finaliza a las 18:55, todos los días |
| 0 0-5 14 * * ? | Inicia cada minuto a partir de las 14:00 y finaliza a las 14:05, todos los días |
| 0 10,44 14 ? 3 WED | Inicia a las 14:10 y a las 14:44 cada miércoles del mes de marzo. |
| 0 15 10 ? * MON-FRI | Inicia a las 10:15 cada día laborable de la semana (de lunes a viernes) |
| 0 15 10 15 * ? | Inicia a las 10:15 el día 15 de cada mes |
| 0 15 10 L * ? | Inicia a las 10:15 el último día de cada mes |
| 0 15 10 L-2 * ? | Inicia a las 10:15 el penúltimo día de cada mes |
| 0 15 10 ? * 6L | Inicia a las 10:15 el último viernes de cada mes |
| 0 15 10 ? * 6L 2002-2005 | Inicia a las 10:15 cada último viernes de cada mes durante los años 2002, 2003, 2004 y 2005 |
| 0 15 10 ? * 6#3 | Inicia a las 10:15 el tercer viernes de cada mes |
| 0 0 12 1/5 * ? | Inicia a las 12:00 cada 5 días de cada mes, a partir del primer día de cada mes. |
| 0 11 11 11 11 ? | Inicia cada 11 de noviembre a las 11:11. |

> La configuración nunca debe empezar con `*`; esto provocará la ejecución cada segundo, generando así complicaciones de rendimiento con efecto bola de nieve en caso de que el procesamiento en algún momento tarde más de 1 segundo.

## Servicio

Los servicios programados deben programarse dentro de la carpeta:

- 📂 `server/services/jobs`

Netuno ejecutará automáticamente estos servicios y realiza la validación del parámetro `secret` con el valor que está en la configuración.

> El `secret` sirve para que el servicio se ejecute externamente sin autenticación, pero de forma segura.

El servicio se ejecutará periódicamente de acuerdo con la parametrización definida.

Para realizar la prueba de la ejecución del servicio de forma manual, basta con ejecutar la URL directa del servicio y pasar el parámetro del `secret`.

Por ejemplo, vía GET:

- http://mi-app.local.netu.no:9000/services/job/mi-trabajo?secret=\*\*\*\*\*

En el lugar de los `*****` al final de la URL deberá sustituirse por el valor real configurado del `secret`.

## Ejemplo

Cree el archivo en:

- 📂 `server/services/jobs/prueba.js`

En este archivo de servicio coloque el siguiente código:
```javascript
_log.info("Job de prueba!")
_out.print("Ok")
```

En el JSON de configuración de su aplicación, ajuste la parametrización de la siguiente forma:

```json
{
    ...
    "cron": {
        "secret": "m3u-S3Gred0",
        "jobs": [
            {
                "name": "prueba",
                "config": "0/30 * * * * ?",
                "url": "/services/jobs/prueba"
            }
        ]
    },
    ...
}
```

Al ejecutar el servidor de Netuno en la terminal, empezará a aparecer el mensaje `Job de prueba!` cada 30 segundos.

Si abre en el navegador la URL:

- http://localhost:9000/services/jobs/prueba?secret=m3u-S3Gred0

Devolverá únicamente el `Ok` y en la terminal aparecerá el mensaje `Job de prueba!`.

> En el entorno de `development` la validación del `secret` no tiene efecto, por eso puede ejecutar sin pasar ningún `secret` y funcionará, pero en otro entorno, como el de producción, ya se tiene en cuenta.

## Muchas Tareas

Cuando existe la necesidad de crear muchas tareas programadas, conviene aumentar el número de hilos utilizados para la ejecución
paralela de las diversas tareas programadas.

Esa configuración se realiza en el archivo `config.js` que se encuentra en la raíz de Netuno, añadiendo la línea de ejemplo:

```javascript
config.cronThreadCount = 10
```

> Por defecto, esta configuración permite solo 3 hilos.
> 
> Debe tener en cuenta aumentar el número de hilos de acuerdo con el número de núcleos de la CPU.

Utilizar pocos hilos para ejecutar muchos agendamientos en paralelo puede resultar en la parada de la ejecución de las tareas programadas.

Por lo tanto, si hay casos en los que las tareas se quedan atascadas después de un tiempo, probablemente se estén ejecutando demasiadas 
tareas en paralelo, entonces es necesario aumentar el número de hilos.

## Programáticamente

Netuno permite configurar y controlar los Cron Jobs programáticamente.

Esto quiere decir que a través del código podemos gestionar todo.

### Crear Nueva Tarea

Para crear una nueva tarea, creamos su programación a través de [`_cron.schedule`](/docs/library/resources/cron#schedule).

El [`_cron.schedule`](/docs/library/resources/cron#schedule) recibe los siguientes parámetros:

1. Clave de identificación de la tarea: `key`.
2. Configuración del tiempo de programación para la ejecución.
3. Dirección del servicio que debe ejecutarse, es decir, la: `URL`.
4. Parámetros adicionales que se envían en la llamada del servicio.

```javascript
_cron.schedule(
    'mi-tarea',
    '0 0/60 * * * ?',
    `/services/jobs/producto-actualiza`,
    _val.map()
        .set('id', 123)
)
```

Si es necesario crear las tareas automáticamente en la inicialización de la aplicación, se puede codificar este automatismo en el archivo:

- `server/core/_init.js`

Donde este archivo se ejecuta siempre que la aplicación es inicializada por el servidor de Netuno.

### Eliminar Tarea

Para eliminar una determinada tarea utilizamos el [`_cron.remove(key)`](/docs/library/resources/cron#remove).

Donde la `key` es la clave de identificación de la tarea.

Vea el ejemplo:

```javascript
_cron.remove('mi-tarea')
```

### Listar Tareas

A través de [`_cron.schedules()`](/docs/library/resources/cron#schedules) podemos listar todas las tareas configuradas.

Ejemplo de cómo listar todas las tareas programadas: 

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Clave</td>`)
_out.println(`  <td>URL</td>`)
_out.println(`  <td>Par&aacute;metros</td>`)
_out.println(`  <td>Descripci&oacute;n</td>`)
_out.println(`  <td>&Uacute;ltima Ejecuci&oacute;n</td>`)
_out.println(`  <td>Pr&oacute;xima Ejecuci&oacute;n</td>`)
_out.println(`  <td>Prioridad</td>`)
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

### Pausar Tareas

A través de [`_cron.pause(key)`](/docs/library/resources/cron#pause) podemos pausar la ejecución de una determinada tarea.

Ejemplo de cómo pausar todas las tareas programadas:

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Clave</td>`)
_out.println(`  <td>Pausado</td>`)
_out.println('</tr>')
for (const schedule of list) {
    _out.println('<tr>')
    _out.println(`  <td>${schedule.getString('key')}</td>`)
    _out.println(`  <td>${_cron.pause(schedule.getString('key'))}</td>`)
    _out.println('</tr>')
}
_out.println('</table>')
```

> Fíjese en la utilización del `_cron.pause` en el ejemplo anterior.

### Reanudar Tareas

A través de [`_cron.resume(key)`](/docs/library/resources/cron#resume) podemos reanudar la ejecución de una determinada tarea.

Ejemplo de cómo reanudar todas las tareas programadas, y muestra cuándo se ejecutarán las tareas:

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Clave</td>`)
_out.println(`  <td>Reactivado</td>`)
_out.println(`  <td>Pr&oacute;xima Ejecuci&oacute;n</td>`)
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

> Fíjese en la utilización del `_cron.resume` en el ejemplo anterior.