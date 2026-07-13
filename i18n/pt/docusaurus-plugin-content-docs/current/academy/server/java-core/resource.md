---
id: resource 
title: Serviço Nativo 
sidebar_label: Serviço Nativo
sidebar_position: 5
---

Nesse tutorial vamos criar um recurso nativo para o Netuno. Isso significa que vamos criar uma classe em Java que vai ficar no diretório base do Netuno e que poderá ser utilizado por qualquer aplicação dentro da pasta `apps` usando se a sintaxe `_foo.methodName(ars)`.

O exemplo que vamos criar, seguindo os tutoriais anteriores, é o recurso `_calc`, que é um recurso de exemplo para executar operações aritméticas simples.

Para começar, primeiro é necessário criar a estrutura de pastas do projeto. Nesse exemplo vamos considerar que o projeto será criado dentro de uma pasta chamada `Calc`. Então é preciso criar a estrutura de pastas que espelha o nome da package (no nosso exemplo, `org.netuno.addon.calc`). A nosso estrutura de pastas será portanto:
- `Calc/src/main/java/org/netuno/addon/calc/resource/`

Dentro dessa estrutura vamos criar uma classe Java chamada `CalcResource`, que definirá o nosso recurso nativo personalizado.
- ` Calc/src/main/java/org/netuno/addon/calc/resource/CalcResource.java`

Então a package definida dentro da classe será:
```java
package org.netuno.addon.calc.resource;
```

Para que a classe defina um recurso nativo personalizado, essa classe precisa ser anotada com a annotation `org.netuno.tritao.ResourceBase`. O parâmetro `name` será o nome do recurso que pode ser acessado com um underscore (`_`) antes do nome (no nosso caso, `_calc`). O jeito mais fácil de criar o recurso é estendendo a classe `org.netuno.tritao.resource.ResourceBase`.
```java
import org.netuno.tritao.resource.Resource;
import org.netuno.tritao.resource.ResourceBase;

@Resource(name = "calc")
public class CalcResource extends ResourceBase {
}
```

Estender a classe `ResourceBase` nos poupa de ter que inicializar o recurso, bastando chamar `super` com os argumentos corretos.
```java
public CalcResource(Proteu proteu, Hili hili) {
    super(proteu, hili);
}
```

A função `init` é obrigatória, e dentro dela vamos inicializar o recurso chamando o construtor da nossa classe com os getters da classe pai
```java
 public CalcResource init() {
     return new CalcResource(getProteu(), getHili());
 }
```

Depois disso vamos definir nossos próprios campos e funções
```java
public double value = 0;

public CalcResource set(double v) {
    value = v;
    return this;
}

public CalcResource plus(double v) {
    value += v;
    return this;
}

public CalcResource minus(double v) {
    value -= v;
    return this;
}

public double get() {
    return value;
}
```

Agora é só compilar a classe, se certificando de que o arquivo `CalcResource.class` está na pasta
- `netuno/core/web/WEB-INF/classes/org/netuno/addon/calc/resource/`
ou o arquivo JAR produzido está na pasta
- `netuno/lib/`

Vamos criar uma aplicação de teste para usar esse recurso
```bash
./netuno app name=calc
```

Vamos criar também um serviço nessa aplicação para usar o recurso.
No exemplo, vamos criar o arquivo `netuno/apps/calc/server/services/calc-test.js`
```js
import { _calc, _out } from  "@netuno/server-types";

_calc.set(10)

_calc.plus(120)

_out.print(_calc.get() + "\n")
```

Vamos iniciar a nossa aplicação
```bash
./netuno server app=calc
```

E agora, quando fizermos uma chamada para esse serviço
- `localhost:9000/services/calc-test`

Ele retornará o valor `130`
