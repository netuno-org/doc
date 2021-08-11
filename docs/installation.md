---
id: installation
title: Installation
sidebar_label: Installation
---

![Installation](/docs/assets/comece/instalacao.gif)

## Requirements

##### Java

Make sure you have Java installed by running the below command into the terminal:

`java -version`

Java version should be version 11.

Or install Java <a href="https://adoptopenjdk.net/" target="_blank">AdoptOpenJDK</a>.

##### NPM

It is not mandatory but NPM should be installed in order to compile the user interface _(frontend)_ of applications:

`npm -version`

The NPM version should be version 6 or higher.

Or install the <a href="https://nodejs.org/" target="_blank">NodeJS</a> that the NPM will also be installed.

## Considerations

Running the installation command below will change the path in the terminal from where you were to the new **Netuno** folder that will be created.

If is needed to run the installation command line again you will need to correct the path and probably remove the **Netuno** folder that was created.

## Linux or Mac OS X

Choose one of the following **Installation** options:

* Download with *WGET*:

```plaintext

mkdir -p netuno && cd netuno && wget https://github.com/netuno-org/platform/releases/download/latest/netuno.jar -O netuno.jar && java -jar netuno.jar install

```

* Download with *cURL*:

```plaintext

mkdir -p netuno && cd netuno && curl https://github.com/netuno-org/platform/releases/download/latest/netuno.jar > netuno.jar && java -jar netuno.jar install

```

## Windows

In Windows open the terminal of **PowerShell** go to the start menu and type: `powershell`

Now copy and paste the command below and follow the **Installation** steps:

```plaintext

md netuno; cd netuno; Invoke-WebRequest -Uri "https://github.com/netuno-org/platform/releases/download/latest/netuno.jar" -OutFile "netuno.jar"; java -jar netuno.jar install

```

## Start App DEMO

At the end of the installation you will receive some instructions on how to run _Netuno_.

And to start to use and manage _Netuno_ server with the **Demo**_nstration_ application, see below:


> ### `./netuno server`
>
> Starts the Netuno server with the default **demo**_nstration_ application:

### Open the Application in the Browser

After starting the server the browser will be launched and open automatically with the address of the local _Netuno_ server.

If your browser is not opened automatically then open the below address in your browser:

* <a href="http://demo.local.netu.no:9000" target="_blank">http://demo.local.netu.no:9000</a>

or:

* <a href="http://localhost:9000" target="_blank">http://localhost:9000</a>

## Stop the Server

To stop the server press the keys on the terminal:

##### CTRL + C

The terminal will finish the _Netuno_ server. To start again use the previous commands.

## Next Steps

Here is what can be done with _Netuno_ 👇

##### Beginners

If you are new on _Netuno_ then start by build your first form:

<a class="button" href="/docs/en/academy/start/demonstration/form/">Begin</a>

##### Tutorials

Discover how to explore the development on _Netuno_

<a class="button" href="/docs/en/library/tutorials/">Know More</a>

##### Projects

_Netuno_ can be applied in any kind of business: 

<a class="button" href="/docs/en/business/introduction/">More Information</a>
