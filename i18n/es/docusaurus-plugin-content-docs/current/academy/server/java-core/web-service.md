---
id: web-service 
title: Servicio Web Multi-Aplicación 
sidebar_label: Servicio Web
sidebar_position: 4
---

En este tutorial vamos a crear un servicio web multi-aplicación para Netuno. Esto significa que vamos a crear un servicio web en Java que se ubicará en el directorio base de Netuno y que podrá ser utilizado por cualquier aplicación dentro de la carpeta `apps`.

El ejemplo que vamos a crear, siguiendo los tutoriales anteriores, es el servicio `calculo`, que es un servicio de ejemplo que ejecuta operaciones aritméticas simples.

Para empezar, primero es necesario crear la estructura de carpetas del proyecto. En este ejemplo vamos a considerar que el proyecto se creará dentro de una carpeta llamada `Calculo`. Entonces es preciso crear la estructura de carpetas que refleja el nombre del paquete (en nuestro ejemplo, `org.netuno.addon.calculo`). Nuestra estructura de carpetas será por tanto:

- `Calculo/src/main/java/org/netuno/addon/calculo/web/`

Dentro de esta estructura vamos a crear una clase Java llamada `CalculoWeb`, que definirá nuestro servicio web personalizado:

- ` Calculo/src/main/java/org/netuno/addon/calculo/web/CalculoWeb.java`

Entonces el paquete definido dentro de la clase será:

```java
package org.netuno.addon.calculo.web;
```

Para que la clase defina un servicio web multi-aplicación personalizado, esa clase necesita extender la clase `org.netuno.tritao.Web`:

```java
package org.netuno.addon.calculo.web;

import org.netuno.tritao.Web;

public class CalculoWeb extends Web {
    // ...
}
```

Para definir la URL del servicio, haga:

```java
package org.netuno.addon.calculo.web;

import org.netuno.proteu.Path;
import org.netuno.tritao.Web;

@Path("/addon/calculo/Calculo")
public class CalculoWeb extends Web {
    // ...
}
```

El método que se debe sobrescribir para que el servicio funcione es el método `run`:

```java
package org.netuno.addon.calculo.web;

import org.netuno.proteu.Path;
import org.netuno.proteu.ProteuException;
import org.netuno.tritao.Web;

import java.io.IOException;

@Path("/addon/calculo/Calculo")
public class CalculoWeb extends Web {
    @Override
    public void run() throws IOException, ProteuException {
        // ...
    }
}
```

Vamos entonces, usando algunos recursos de Netuno, a definir el método `run` para que reciba el parámetro `operacion`, que definirá qué operación usar entre `suma` (adición) y `resta` (sustracción), y los parámetros `x` e `y` que serán los operandos (sumandos en el caso de la suma, minuendo y sustraendo respectivamente en el caso de la resta).

Después, basado en la operación elegida, nuestro servicio computará el resultado y lo devolverá al usuario en formato JSON:

```java
package org.netuno.addon.calculo.web;

import org.netuno.proteu.Path;
import org.netuno.proteu.ProteuException;
import org.netuno.tritao.Web;
import org.netuno.tritao.resource.Out;
import org.netuno.tritao.resource.Req;
import org.netuno.tritao.resource.Val;

import java.io.IOException;

@Path("/addon/calculo/Calculo")
public class CalculoWeb extends Web {
    @Override
    public void run() throws IOException, ProteuException {
        Req req = resource(Req.class);
        Out out = resource(Out.class);
        Val val = resource(Val.class);

        String operacion = req.getString("operacion", "suma");
        double x = req.getDouble("x", 0);
        double y = req.getDouble("y", 0);

        double resultado = 0;

        if (operacion.equalsIgnoreCase("resta")) {
            resultado = x - y;
        } else {
            resultado = x + y;
        }

        out.json(val.map().set("resultado", resultado));
    }
}
```

Ahora solo hay que compilar la clase, asegurándose de que el archivo `CalculoWeb.class` está en la carpeta:

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/calculo/web/`

O producir un archivo JAR, asegurándose de que está en la carpeta:

- `netuno/lib/`

Inicie el servidor Netuno con cualquier aplicación:

```bash
./netuno server app=demo
```

Para hacer llamadas a este servicio, es necesario añadir `.netuno` al final de la URL:

- `http://localhost:9000/addon/calculo/Calculo.netuno`

Por ejemplo, si hace una llamada a:

- `http://localhost:9000/addon/calculo/Calculo.netuno?operacion=resta&x=5&y=2`

Recibirá de vuelta:

```js
{"resultado":3}
```

Puede ver los archivos completos del proyecto en este [enlace](https://github.com/netuno-org/maven/tree/main/Calc/src/main/java/org/netuno/addon/calc/web).

En el próximo tutorial aprenderemos cómo crear un recurso de Netuno usando Java.