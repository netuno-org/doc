---
id: web-service 
title: Servicio Web Multiaplicación 
sidebar_label: Servicio Web
sidebar_position: 4
---

En este tutorial vamos a crear un servicio web multiaplicación para Netuno. Esto significa que vamos a crear un servicio web en Java que estará en el directorio base de Netuno y que podrá ser utilizado por cualquier aplicación dentro de la carpeta `apps`.

El ejemplo que vamos a crear, siguiendo los tutoriales anteriores, es el servicio `calculadora`, que es un servicio de ejemplo que ejecuta operaciones aritméticas sencillas.

Para empezar, primero es necesario crear la estructura de carpetas del proyecto. En este ejemplo vamos a considerar que el proyecto se creará dentro de una carpeta llamada `Calculadora`. Entonces es necesario crear la estructura de carpetas que refleja el nombre del paquete (en nuestro ejemplo, `org.netuno.addon.calculadora`). Nuestra estructura de carpetas será por tanto:

- `Calculadora/src/main/java/org/netuno/addon/calculadora/web/`

Dentro de esa estructura vamos a crear una clase Java llamada `CalculadoraWeb`, que definirá nuestro servicio web personalizado:

- `Calculadora/src/main/java/org/netuno/addon/calculadora/web/CalculadoraWeb.java`

Entonces el paquete definido dentro de la clase será:

```java
package org.netuno.addon.calculadora.web;
```

Para que la clase defina un servicio web multiaplicación personalizado, esa clase debe extender la clase `org.netuno.tritao.Web`:

```java
package org.netuno.addon.calculadora.web;

import org.netuno.tritao.Web;

public class CalculadoraWeb extends Web {
    // ...
}
```

Para definir la URL del servicio, haga:

```java
package org.netuno.addon.calculadora.web;

import org.netuno.proteu.Path;
import org.netuno.tritao.Web;

@Path("/addon/calculadora/Calculadora")
public class CalculadoraWeb extends Web {
    // ...
}
```

El método que debe sobrescribirse para que el servicio funcione es el método `run`:

```java
package org.netuno.addon.calculadora.web;

import org.netuno.proteu.Path;
import org.netuno.proteu.ProteuException;
import org.netuno.tritao.Web;

import java.io.IOException;

@Path("/addon/calculadora/Calculadora")
public class CalculadoraWeb extends Web {
    @Override
    public void run() throws IOException, ProteuException {
        // ...
    }
}
```

Vamos entonces, usando algunos recursos de Netuno, a definir el método `run` para que reciba el parámetro `operacion`, que definirá qué operación usar entre `suma` (adición) y `resta` (sustracción), y los parámetros `x` e `y` que serán los operandos (sumandos en el caso de la suma, minuendo y sustraendo respectivamente en el caso de la resta).

Después, basado en la operación elegida, nuestro servicio calculará el resultado y lo devolverá al usuario en formato JSON:

```java
package org.netuno.addon.calculadora.web;

import org.netuno.proteu.Path;
import org.netuno.proteu.ProteuException;
import org.netuno.tritao.Web;
import org.netuno.tritao.resource.Out;
import org.netuno.tritao.resource.Req;
import org.netuno.tritao.resource.Val;

import java.io.IOException;

@Path("/addon/calculadora/Calculadora")
public class CalculadoraWeb extends Web {
    @Override
    public void run() throws IOException, ProteuException {
        Req solicitud = resource(Req.class);
        Out salida = resource(Out.class);
        Val valor = resource(Val.class);

        String operacion = solicitud.getString("operacion", "suma");
        double x = solicitud.getDouble("x", 0);
        double y = solicitud.getDouble("y", 0);

        double resultado = 0;

        if (operacion.equalsIgnoreCase("resta")) {
            resultado = x - y;
        } else {
            resultado = x + y;
        }

        salida.json(valor.map().set("resultado", resultado));
    }
}
```

Ahora solo hay que compilar la clase, asegurándose de que el archivo `CalculadoraWeb.class` está en la carpeta:

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/calculadora/web/`

O producir un archivo JAR, asegurándose de que está en la carpeta:

- `netuno/lib/`

Inicie el servidor Netuno con cualquier aplicación:

```bash
./netuno server app=demo
```

Para hacer llamadas a este servicio, es necesario añadir `.netuno` al final de la URL:

- `http://localhost:9000/addon/calculadora/Calculadora.netuno`

Por ejemplo, si hace una llamada a:

- `http://localhost:9000/addon/calculadora/Calculadora.netuno?operacion=resta&x=5&y=2`

Recibirá de vuelta:

```js
{"resultado":3}
```

Puede ver los archivos completos del proyecto en este [enlace](https://github.com/netuno-org/maven/tree/main/Calc/src/main/java/org/netuno/addon/calc/web).

En el próximo tutorial aprenderemos cómo crear un recurso de Netuno usando Java.