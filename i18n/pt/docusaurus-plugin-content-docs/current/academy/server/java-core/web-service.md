---
id: web-service 
title: Serviço Web Multi-Aplicacional 
sidebar_label: Serviço Web
sidebar_position: 4
---

Nesse tutorial vamos criar um serviço web multi-aplicacional para o Netuno. Isso significa que vamos criar um serviço web em Java que vai ficar no diretório base do Netuno e que poderá ser utilizado por qualquer aplicação dentro da pasta `apps`.

O exemplo que vamos criar, seguindo os tutoriais anteriores, é o serviço `calc`, que é um serviço de exemplo que executa operações aritméticas simples.

Para começar, primeiro é necessário criar a estrutura de pastas do projeto. Nesse exemplo vamos considerar que o projeto será criado dentro de uma pasta chamada `Calc`. Então é preciso criar a estrutura de pastas que espelha o nome da package (no nosso exemplo, `org.netuno.addon.calc`). A nosso estrutura de pastas será portanto:

- `Calc/src/main/java/org/netuno/addon/calc/web/`

Dentro dessa estrutura vamos criar uma classe Java chamada `CalcWeb`, que definirá o nosso serviço web personalizado:

- ` Calc/src/main/java/org/netuno/addon/calc/web/CalcWeb.java`

Então a package definida dentro da classe será:

```java
package org.netuno.addon.calc.web;
```

Para que a classe defina um serviço web multi-aplicacional personalizado, essa classe precisa estender a classe `org.netuno.tritao.Web`:

```java
package org.netuno.addon.calc.web;

import org.netuno.tritao.Web;

public class CalcWeb extends Web {
    // ...
}
```

Para definir a URL do serviço, faça:

```java
package org.netuno.addon.calc.web;

import org.netuno.proteu.Path;
import org.netuno.tritao.Web;

@Path("/addon/calc/Calc")
public class CalcWeb extends Web {
    // ...
}
```

O método que precisa ser sobrescrito para que o serviço funcione é o método `run`:

```java
package org.netuno.addon.calc.web;

import org.netuno.proteu.Path;
import org.netuno.proteu.ProteuException;
import org.netuno.tritao.Web;

import java.io.IOException;

@Path("/addon/calc/Calc")
public class CalcWeb extends Web {
    public void run() throws IOException, ProteuException {
        // ...
    }
}
```

Vamos então, usando alguns recursos do Netuno, definir o método `run` para que ele receba o parâmetro `op`, que definirá qual operação usar entre `plus` (adição) e `minus` (subtração), e os parâmetros `x` e `y` que serão os operandos (parcelas no caso da soma, minuendo e subtraendo respectivamente no caso da subtração).

Depois, baseado na operação escolhida, o nosso serviço computará o resultado e o retornará ao usuário no formato JSON:

```java
package org.netuno.addon.calc.web;

import org.netuno.proteu.Path;
import org.netuno.proteu.ProteuException;
import org.netuno.tritao.Web;
import org.netuno.tritao.resource.Out;
import org.netuno.tritao.resource.Req;
import org.netuno.tritao.resource.Val;

import java.io.IOException;

@Path("/addon/calc/Calc")
public class CalcWeb extends Web {
    public void run() throws IOException, ProteuException {
        Req req = resource(Req.class);
        Out out = resource(Out.class);
        Val val = resource(Val.class);

        String op = req.getString("op", "plus");
        double x = req.getDouble("x", 0);
        double y = req.getDouble("y", 0);

        double result = 0;

        if (op.equalsIgnoreCase("minus")) {
            result = x - y;
        } else {
            result = x + y;
        }

        out.json(val.map().set("result", result));
    }
}
```

Agora é só compilar a classe, se certificando de que o arquivo `CalcWeb.class` está na pasta:

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/calc/web/`

Ou produzir um arquivo JAR, certificando-se de que ele está na pasta:

- `netuno/lib/`

Inicie o Netuno server com qualquer aplicação:

```bash
./netuno server app=demo
```

Para fazer chamadas a esse serviço, é necessário adicionar `.netuno` ao final da URL:

- `http://localhost:9000/addon/calc/Calc.netuno`

Por exemplo, se você fizer uma chamada para:

- `http://localhost:9000/addon/calc/Calc.netuno?op=minus&x=5&y=2`

Você receberá de volta:

```js
{"result":3}
```

No próximo tutorial aprenderemos como criar um recurso do Netuno usando o Java.
