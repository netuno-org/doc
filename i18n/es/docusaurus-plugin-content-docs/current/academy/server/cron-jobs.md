---
id: cron-jobs
title: Cron Jobs - Servicios Programados
sidebar_label: Cron Jobs
---

## Antes de empezar

Antes de proceder, asegúrese de que tiene nociones básicas de _**JavaScript**_ y de que ya tiene las nociones básicas de Netuno con el paso a paso disponible en la [Academia](/docs/academy/overview).

## Introducción

Es común la necesidad de ejecutar tareas periódicamente, es decir, cada cierto tiempo es necesario enviar datos a otro sistema, o importar datos de otro sistema, enviar un correo electrónico, validar registros en la base de datos, y mucho más...

En Linux/UNIX/Mac existe el servicio Cron con el famoso archivo de configuración `crontab`, mientras que en Windows existe el Task Manager (_Administrador de tareas_).

Y en Netuno, los Cron Jobs ya vienen integrados, lo que ayuda a evitar configuraciones externas.

Este tipo de operaciones periódicas se conocen como Cron Jobs o, en español, Servicios programados.

Cada aplicación de Netuno puede tener innumerables Cron Jobs, y los Cron Jobs de Netuno pueden ejecutar tanto servicios y URLs internos como también URLs externos.

> Para más información, consulte la documentación del recurso [cron](/docs/library/resources/cron).

## Cómo funciona

Cada aplicación tiene la configuración de sus propios servicios programados (**cron jobs**) con su respectiva configuración de ejecución.

Para simplificar, cada servicio programado es un **job** aparte, que tiene su propia configuración de ejecución, pudiendo ejecutarse cada minuto, cada 5 minutos, cada hora, en un determinado día y hora de la semana, etc... también tiene la URL que se llamará cuando llegue el momento de su ejecución.

> Netuno utiliza la biblioteca <a href="http://www.quartz-scheduler.org/" target="_blank">Quartz Scheduler</a> para gestionar la ejecución de los servicios programados. La configuración de las reglas de temporización corresponde a esta biblioteca.

Así, la ejecución de cada job pasa por la ejecución de una URL (_dirección web, enlace_), que puede ser tanto externa como interna de la propia aplicación. Al ser un enlace externo, puede ser de otra aplicación o de cualquier URL externa en internet, en la red o en el equipo.

![Diagrama de Cron](/docs/assets/academy/server/cron.svg)

En el gráfico anterior se muestra que Netuno contiene 2 aplicaciones, donde cada una tiene configurados 2 jobs (_servicios programados_), que se ejecutan en momentos diferentes, correspondientes a una configuración cualquiera.

El comportamiento de la ejecución que tendrá lugar es el siguiente:

- App 1 lanza 2 jobs:
  - Job 1: Ejecuta una URL de servicio interno de la propia App 1.
  - Job 2: Ejecuta una URL externa, pública.
- App 2 lanza 2 jobs:
  - Job 3: Ejecuta una URL de servicio interno de la propia App 2
  - Job 4: Ejecuta una URL de servicio de la App 1.

> Las aplicaciones deben tener los servicios que son ejecutados por los Cron Jobs dentro de la carpeta:
> - 📂 `server/services/jobs`

Cada URL se ejecuta con el método HTTP POST. En la configuración del job se permite añadir parámetros adicionales, y también una clave secreta para evitar que se ejecute fuera del contexto controlado.

## Configuración

La configuración de los servicios programados se realiza en el archivo de configuración de la aplicación, de acuerdo con el entorno.

> La configuración nunca debe empezar por `*`; esto provocará la ejecución cada segundo, generando así complicaciones de rendimiento con efecto bola de nieve en caso de que el procesamiento en algún momento tarde más de 1 segundo.

Para ello, navegue dentro de la aplicación que está desarrollando hasta el archivo de configuración de entorno. En este ejemplo, utilizaremos el archivo de entorno de desarrollo localizado en:

- 📂 `config/_development.json`

Compruebe si ya existen configuraciones para el Cron; si no existen, añada al final del archivo de configuración (en formato JSON) los parámetros de configuración:

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

En esta configuración, el primer job se ejecutará todos los días a las 12:30 del mediodía.

Y el segundo job se ejecutará cada 2 minutos.


##### Trabajos

La lista de servicios programados que tenemos en la aplicación; al ser un array, podemos tener múltiples servicios configurados.

##### Secreto

Es un parámetro de clave de seguridad que protege el servicio, para que se ejecute solo cuando reciba este parámetro con el valor exactamente igual.

Esto se debe a que los `jobs` son servicios públicos y, para evitar que se ejecuten externamente, contienen esta protección.

##### Nombre

El nombre que identifica el servicio internamente, el cual podrá utilizarse para realizar operaciones de gestión, como parar y reanudar.

##### Configuración

La configuración de la expresión de temporización del servicio, es decir, las reglas de su programación.

> La configuración nunca debe empezar por `*`; esto provocará la ejecución cada segundo, generando así complicaciones de rendimiento con efecto bola de nieve en caso de que el procesamiento en algún momento tarde más de 1 segundo.

Consulte a continuación las expresiones admitidas.

##### URL

La dirección que se ejecutará periódicamente.

##### Parámetros

Son los parámetros que se pasan a la URL en su ejecución; la URL se ejecuta con el método **HTTP POST** y, así, pueden añadirse parámetros adicionales como el _tipo_ del ejemplo anterior, o incluso especificar otra clave secreta.

### Formatos admitidos de las expresiones Cron

|NOMBRE DEL CAMPO | OBLIGATORIO | VALORES ACEPTADOS | CARACTERES ESPECIALES PERMITIDOS |
| ------- |:------:|:-----------:|--------------|
| Segundos | SÍ | 0-59 | , - * / |
| Minutos | SÍ | 0-59 | , - * / |
| Horas | SÍ | 0-23 | , - * / |
| Día del mes | SÍ | 1-31 | , - * ? / L W |
| Mes | SÍ | 1-12 o JAN-DEC | , - * / |
| Día de la semana | SÍ | 1-7 o SUN-SAT | , - * ? / L # |
| Año | NO | vacío, 1970-2099 | , - * / |

##### Ejemplos de expresiones Cron

|EXPRESIÓN | SIGNIFICADO |
| ------- |------|
| 1 * * * * ? | Se ejecuta en el segundo número 1 de cada minuto. |
| 0 0 12 * * ? | Se inicia a las 12:00 todos los días |
| 0 15 10 ? * * | Se inicia a las 10:15 todos los días |
| 0 15 10 * * ? | Se inicia a las 10:15 todos los días |
| 0 15 10 * * ? * | Se inicia a las 10:15 todos los días |
| 0 15 10 * * ? 2005 | Se inicia a las 10:15 todos los días durante el año 2005 |
| 0 * 14 * * ? | Se inicia cada minuto a partir de las 14:00 y finaliza a las 14:59, todos los días |
| 0 0/5 14 * * ? | Se inicia cada 5 minutos a partir de las 14:00 y finaliza a las 14:55, todos los días |
| 0 0/5 14,18 * * ? | Se inicia cada 5 minutos a partir de las 14:00 y finaliza a las 14:55. Posteriormente, se inicia cada 5 minutos a partir de las 18:00 y finaliza a las 18:55, todos los días |
| 0 0-5 14 * * ? | Se inicia cada minuto a partir de las 14:00 y finaliza a las 14:05, todos los días |
| 0 10,44 14 ? 3 WED | Se inicia a las 14:10 y a las 14:44 cada miércoles del mes de marzo. |
| 0 15 10 ? * MON-FRI | Se inicia a las 10:15 cada día laborable de la semana (de lunes a viernes) |
| 0 15 10 15 * ? | Se inicia a las 10:15 el día 15 de cada mes |
| 0 15 10 L * ? | Se inicia a las 10:15 el último día de cada mes |
| 0 15 10 L-2 * ? | Se inicia a las 10:15 el penúltimo día de cada mes |
| 0 15 10 ? * 6L | Se inicia a las 10:15 el último viernes de cada mes |
| 0 15 10 ? * 6L 2002-2005 | Se inicia a las 10:15 el último viernes de cada mes durante los años 2002, 2003, 2004 y 2005 |
| 0 15 10 ? * 6#3 | Se inicia a las 10:15 el tercer viernes de cada mes |
| 0 0 12 1/5 * ? | Se inicia a las 12:00 cada 5 días de cada mes, a partir del primer día de cada mes. |
| 0 11 11 11 11 ? | Se inicia cada 11 de noviembre a las 11:11. |

> La configuración nunca debe empezar por `*`; esto provocará la ejecución cada segundo, generando así complicaciones de rendimiento con efecto bola de nieve en caso de que el procesamiento en algún momento tarde más de 1 segundo.

## Servicio

Los servicios programados deben programarse dentro de la carpeta:

- 📂 `server/services/jobs`

Netuno ejecutará automáticamente estos servicios y realizará la validación del parámetro `secret` con el valor que está en la configuración.

> El `secret` sirve para que el servicio se ejecute externamente sin autenticación, pero de forma segura.

El servicio se ejecutará periódicamente de acuerdo con la parametrización definida.

Para probar la ejecución del servicio de forma manual, basta con ejecutar la URL directa del servicio y pasar el parámetro `secret`.

Por ejemplo, mediante GET:

- http://mi-app.local.netu.no:9000/services/job/mi-trabajo?secret=\*\*\*\*\*

En lugar de los `*****` al final de la URL deberá colocarse el valor real configurado de `secret`.

## Ejemplo

Cree el archivo en:

- 📂 `server/services/jobs/prueba.js`

En este archivo de servicio, coloque el siguiente código:
```javascript
_log.info("¡Trabajo de prueba!")
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

Al ejecutar el servidor de Netuno en la terminal, empezará a aparecer el mensaje `¡Trabajo de prueba!` cada 30 segundos.

Si abre en el navegador la URL:

- http://localhost:9000/services/jobs/prueba?secret=m3u-S3Gred0

Devolverá únicamente `Ok` y en la terminal aparecerá el mensaje `¡Trabajo de prueba!`.

> En el entorno `development`, la validación de `secret` no tiene efecto, por lo que puede ejecutarse sin pasar ningún `secret` y funcionará; pero en otro entorno, como el de producción, sí se tiene en cuenta.

## Muchas tareas

Cuando sea necesario crear muchas tareas programadas, conviene aumentar el número de hilos utilizados para la ejecución
paralela de las distintas tareas programadas.

Esa configuración se realiza en el archivo `config.js` que se encuentra en la raíz de Netuno, añadiendo la línea de ejemplo:

```javascript
config.cronThreadCount = 10
```

> Por defecto, esta configuración permite solo 3 hilos.
> 
> Debe tener en cuenta que debe aumentar el número de hilos de acuerdo con el número de núcleos de la CPU.

Usar pocos hilos para ejecutar muchos agendamientos en paralelo puede provocar la detención de la ejecución de las tareas programadas.

Por tanto, si hay casos en los que las tareas se quedan atascadas tras algún tiempo, probablemente se estén ejecutando demasiadas
tareas en paralelo, así que es necesario aumentar el número de hilos.

## Programáticamente

Netuno permite configurar y controlar los Cron Jobs programáticamente.

Esto quiere decir que, a través del código, podemos gestionarlo todo.

### Crear nueva tarea

Para crear una nueva tarea, creamos su programación a través de [`_cron.schedule`](/docs/library/resources/cron#schedule).

[`_cron.schedule`](/docs/library/resources/cron#schedule) recibe los siguientes parámetros:

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

Si es necesario crear las tareas automáticamente en la inicialización de la aplicación, este automatismo puede codificarse en el archivo:

- `server/core/_init.js`

Este archivo se ejecuta siempre que la aplicación es inicializada por el servidor de Netuno.

### Eliminar tarea

Para eliminar una determinada tarea utilizamos [`_cron.remove(key)`](/docs/library/resources/cron#remove).

Donde `key` es la clave de identificación de la tarea.

Vea el ejemplo:

```javascript
_cron.remove('mi-tarea')
```

### Listar tareas

A través de [`_cron.schedules()`](/docs/library/resources/cron#schedules) podemos listar todas las tareas configuradas.

Ejemplo de cómo listar todas las tareas programadas: 

```javascript
const lista = _cron.schedules()
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
for (const tarea of lista) {
        _out.println('<tr>')
        _out.println(`  <td>${tarea.getString('key')}</td>`)
        _out.println(`  <td>${tarea.getString('url')}</td>`)
        _out.println(`  <td>${tarea.getValues('params').toJSON()}</td>`)
        _out.println(`  <td>${tarea.get('detail').getDescription()}</td>`)
        _out.println(`  <td>${tarea.get('trigger').getPreviousFireTime()}</td>`)
        _out.println(`  <td>${tarea.get('trigger').getNextFireTime()}</td>`)
        _out.println(`  <td>${tarea.get('trigger').getPriority()}</td>`)
        _out.println('</tr>')
}
_out.println('</table>')
```

### Pausar tareas

A través de [`_cron.pause(key)`](/docs/library/resources/cron#pause) podemos pausar la ejecución de una determinada tarea.

Ejemplo de cómo pausar todas las tareas programadas:

```javascript
const lista = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Clave</td>`)
_out.println(`  <td>Pausado</td>`)
_out.println('</tr>')
for (const tarea of lista) {
    _out.println('<tr>')
    _out.println(`  <td>${tarea.getString('key')}</td>`)
    _out.println(`  <td>${_cron.pause(tarea.getString('key'))}</td>`)
    _out.println('</tr>')
}
_out.println('</table>')
```

> Fíjese en el uso de `_cron.pause` en el ejemplo anterior.

### Reanudar tareas

A través de [`_cron.resume(key)`](/docs/library/resources/cron#resume) podemos reanudar la ejecución de una determinada tarea.

Ejemplo de cómo reanudar todas las tareas programadas y mostrar cuándo se ejecutarán las tareas:

```javascript
const lista = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>Clave</td>`)
_out.println(`  <td>Reactivado</td>`)
_out.println(`  <td>Pr&oacute;xima Ejecuci&oacute;n</td>`)
_out.println('</tr>')
for (const tarea of lista) {
    _out.println('<tr>')
    _out.println(`  <td>${tarea.getString('key')}</td>`)
    _out.println(`  <td>${_cron.resume(tarea.getString('key'))}</td>`)
    _out.println(`  <td>${tarea.get('trigger').getNextFireTime()}</td>`)
    _out.println('</tr>')
}
_out.println('</table>')
```

> Fíjese en el uso de `_cron.resume` en el ejemplo anterior.