---
id: development-debug-java
title: Development and debugging in Java
sidebar_label: Development and debugging in Java
---

## Introduction

Basic knowledge in _Java_  is required before you start this tutorial.

In this tutorial we will cover:

* [Initial configuration](#initial-configuration)
* [Creation of a simple service](#creation-of-a-simple-service)
* [Running the server in normal mode](#running-the-server-in-normal-mode)
* [Running the server in _debug_ mode](#running-the-server-in-debug-mode)

In this example we will use the <a href="https://www.jetbrains.com/idea/download/" target="_blank"> IntelliJ IDEA Community Edition IDE</a> and <a href="http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html" target="_blank">Java JDK 1.8</a>.

## Initial Configuration

The first step will be to create a new project in `_IntelliJ IDEA_`. To do so, follow the steps below:

### First Step
Choose the "_Create new project_" option.

![desenvolvimento-debug-java1.png](assets/desenvolvimento-debug-java1.png)

### Second Step
Choose _Java_ from the left menu [1] and later configure the version of _Java JDK_ [2], if you haven't done it initially, click on "_New_" and indicate its installation directory.

![desenvolvimento-debug-java2.png](assets/desenvolvimento-debug-java2.png)

### Third Step
Click in " _Next_" until a screen similar to the following shows and then define the name of the project, indicate the _Netuno_ directory and click in "_Finish_"

![desenvolvimento-debug-java3.png](assets/desenvolvimento-debug-java3.png)

### Fourth Step
Create a new `classes` folder within the directory
```
netuno/web/WEB-INF/
```
Right click on the project folder and choose "_Open module settings_" [1].

![desenvolvimento-debug-java4.png](assets/desenvolvimento-debug-java4.png)

Then click on the "_Paths_" tab, choose the "_Use module compile output path_" [2] and indicate in both the `netuno/web/WEB-INF/classes/` directory [3].

![desenvolvimento-debug-java5.png](assets/desenvolvimento-debug-java5.png)

Finally go to the "_Dependencies_" tab and click on the "_+_" icon, choose "_JARs or directories_" and indicate the file `netuno.jar` [4] and then the directory `netuno/web/WEB-INF/lib` [5]

![desenvolvimento-debug-java6.png](assets/desenvolvimento-debug-java6.png)

### Fifth Step
Configure the local server to run Netuno, start by choosing "_Application_". Insert the main class `org.netuno.cli.Main`[1], insert as argument `server`[2] and indicate the project directory [3], finally just click on "_Aplly_" and "_Ok_"

![desenvolvimento-debug-java7.png](assets/desenvolvimento-debug-java7.png) ![desenvolvimento-debug-java8.png](assets/desenvolvimento-debug-java8.png)

![desenvolvimento-debug-java9.png](assets/desenvolvimento-debug-java9.png)

## Building a Simple Service

When expanding the project folder, access the `src` folder, create a new package, and then create a class.

In this example we have called the package `org.netuno.tritao` and the class `Test` as shown in the following image:

![desenvolvimento-debug-java10.png](assets/desenvolvimento-debug-java10.png)

Finally we add the following code that causes the data to be output from the service in _json_ format.

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

> Note that depending on your web browser and the input data the result may differ from this example

## Running the server in normal mode

Run the local server through the triangle shaped icon [1] and if it is well configured the tab called "_Run_" will expand resembling the second image:

![desenvolvimento-debug-java11.png](assets/desenvolvimento-debug-java11.png)

![desenvolvimento-debug-java12.png](assets/desenvolvimento-debug-java12.png)

## Accessing the service

To access the service created previously, login to _Netuno_ and access the service, in this example the link will be _http://localhost:9000/Test.netuno_.

A screen like the following will show if everything is set correctly:

![desenvolvimento-debug-java13.png](assets/desenvolvimento-debug-java13.jpg)

## Running the server in debug mode

To use this mode, start the server through the icon that resembles an insect [1] and put some _breakpoints_ in the code to see their values [2] as represented in the following images:

![desenvolvimento-debug-java14.png](assets/desenvolvimento-debug-java14.png)

![desenvolvimento-debug-java15.png](assets/desenvolvimento-debug-java15.png)

If you have any questions, please do not hesitate to contact us.
<br>All the best!
