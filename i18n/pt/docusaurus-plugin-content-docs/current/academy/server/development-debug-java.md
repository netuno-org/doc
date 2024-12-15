---
id: development-debug-java
title: Desenvolvimento e debug em Java
sidebar_label: Java
---

## Introdução

Aconselhamos que, antes de iniciar este tutorial tenha algumas noções básicas em _Java_.

Neste tutorial iremos abordar:

* [Configuração inicial](#configuracão-inicial)
* [Criação de um serviço simples](#criacão-de-um-servico-simples)
* [Execução do servidor em modo normal](#modo-de-execucão-normal-do-servidor)
* [Execução do servidor em modo _debug_](#modo-de-debug-do-servidor)

Neste exemplo iremos utilizar o <a href="https://www.jetbrains.com/idea/download/" target="_blank">IDE IntelliJ IDEA Community Edition</a> e o <a href="http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html" target="_blank">Java JDK 1.8</a>.

## Configuração Inicial

O primeiro passo será criar um novo projeto no _IntelliJ IDEA_. Para tal, siga os passos nas seguintes imagens:

### Primeiro Passo
Escolha a opção “_Create new project_”

![desenvolvimento-debug-java1.png](/docs/assets/desenvolvimento-debug-java1.png)

### Segundo Passo
Escolha _Java_ do menu esquerdo [1] e posteriormente configure a versão do _Java JDK_ [2], caso não o tenha feito inicialmente, clique em “_New_” e indique o diretório de instalação do mesmo.

![desenvolvimento-debug-java2.png](/docs/assets/desenvolvimento-debug-java2.png)

### Terceiro Passo
Clique em “_Next_” até aparecer um ecrã semelhante ao seguinte e defina o nome do projeto, indique o diretório do Netuno e clique em “_Finish_”

![desenvolvimento-debug-java3.png](/docs/assets/desenvolvimento-debug-java3.png)

### Quarto Passo
Crie uma nova pasta `classes` dentro do directório
```
netuno/web/WEB-INF/
```
Clique com o lado direito do rato na pasta do projeto e escolha a opção “_Open module settings_” [1].

![desenvolvimento-debug-java4.png](/docs/assets/desenvolvimento-debug-java4.png)

Seguidamente clique no separador “_Paths_”, escolha a opção “_Use module compile output path_”  [2] e indique em ambos o diretório `netuno/web/WEB-INF/classes/` [3].

![desenvolvimento-debug-java5.png](/docs/assets/desenvolvimento-debug-java5.png)

Por fim dirija-se ao separador “_Dependencies_” e clique no ícone “_+_”, escolha “_JARs or directories_” e indique o ficheiro `netuno.jar`  [4] e posteriormente o diretório `netuno/web/WEB-INF/lib` [5]

![desenvolvimento-debug-java6.png](/docs/assets/desenvolvimento-debug-java6.png)

### Quinto Passo
Configure o servidor local para poder executar o Netuno, comece por escolher “_Application_” , insira a classe principal `org.netuno.cli.Main`[1], insira como argumento `server`[2] e indique o diretório do projeto [3], por fim é só clicar em “_Aplly_” e “_Ok_”

![desenvolvimento-debug-java7.png](/docs/assets/desenvolvimento-debug-java7.png) ![desenvolvimento-debug-java8.png](/docs/assets/desenvolvimento-debug-java8.png)

![desenvolvimento-debug-java9.png](/docs/assets/desenvolvimento-debug-java9.png)

## Criação de um serviço simples
Ao expandir a pasta do projeto, aceda à pasta `src`, crie um novo pacote e posteriormente crie uma classe.

Neste exemplo denominámos o pacote de `org.netuno.tritao` e a classe de `Test` como demonstra a seguinte imagem:

![desenvolvimento-debug-java10.png](/docs/assets/desenvolvimento-debug-java10.png)

Por fim adicionamos o código apresentado a seguir que faz com que a saída de dados do serviço seja feita em formato _json_.

```javascript
package org.netuno.tritao;

import org.netuno.proteu.Proteu;
import org.netuno.proteu.ProteuException;
import org.netuno.psamata.Values;
import org.netuno.tritao.config.Hili;

import java.io.IOException;

public class Test {

    public static void _main(Proteu proteu, Hili hili)
            throws IOException, ProteuException {
        proteu.outputJSON(
                new Values()
                        .set("message", "Hello World")
                        .set("description", "Debugging from Java...")
                        .set("id", 1)
                        .set("result", true)
        );
    }

}
```

> Note que consoante o seu navegador web e os dados que inseriu o resultado poderá diferir deste exemplo

## Modo de execução normal do servidor
Execute o servidor local através do ícone em forma de triângulo [1] e se estiver bem configurado o separador denominado “_Run_” irá expandir assemelhando-se à segunda imagem:

![desenvolvimento-debug-java11.png](/docs/assets/desenvolvimento-debug-java11.png)

![desenvolvimento-debug-java12.png](/docs/assets/desenvolvimento-debug-java12.png)

## Acesso ao serviço

Para aceder ao serviço criado anteriormente, efetue o início de sessão no Netuno e aceda ao serviço, neste exemplo a ligação será _http://localhost:9000/Test.netuno_.

Se tudo estiver configurado corretamente irá aparecer um ecrã semelhante ao seguinte:

![desenvolvimento-debug-java13.png](/docs/assets/desenvolvimento-debug-java13.jpg)

## Modo de debug do servidor

Para utilizar este modo, inicie o servidor através do ícone que se assemelha a um inseto [1] e coloque alguns _breakpoints_ no código para ver os seus valores [2] como se representa nas seguintes imagens:

![desenvolvimento-debug-java14.png](/docs/assets/desenvolvimento-debug-java14.png)

![desenvolvimento-debug-java15.png](/docs/assets/desenvolvimento-debug-java15.png)

Caso tenha alguma questão não hesite em contactar-nos através dos meios apresentados no fim da página.

Bom desenvolvimento!
