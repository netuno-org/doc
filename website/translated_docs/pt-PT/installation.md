---
id: installation
title: Instalação
sidebar_label: Instalação
---

![Instalação](/docs/assets/comece/instalacao.gif)

## Pré-requisitos

##### Java

Certifique-se que tem o Java instalado, executando no terminal o commando:

`java -version`

A versão do Java deverá ser a versão 11.

Ou, caso não tenha, então instale o Java <a href="https://adoptopenjdk.net/" target="_blank">AdoptOpenJDK</a>.

##### NPM

Não é obrigatório mas convém que o NPM esteja instalado para poder compilar a user interface _(frontend)_ das aplicações:

`npm -version`

A versão do NPM deverá ser a versão 6 ou superior.

Ou, caso não tenha, então instale o <a href="https://nodejs.org/" target="_blank">NodeJS</a> que traz consigo o NPM.

## Considerações

Ao executar o comando de instalação abaixo será alterado o caminho no terminal de onde estava para dentro da nova pasta do **netuno** que será criada.

Caso precise executar novamente o comando de instalação será preciso corrigir o caminho e provavelmente remover a pasta do **netuno** que foi criada.

## Linux ou Mac OS X

É comum haver o comando `wget` e o `curl`, execute no terminal para verificar.

Escolha uma das seguintes opções de **Instalação**:

* Download com o *WGET*:

```plaintext

mkdir -p netuno && cd netuno && wget https://github.com/netuno-org/platform/releases/download/latest/netuno.jar -O netuno.jar && java -jar netuno.jar install

```

* Download com o *cURL*:

```plaintext

mkdir -p netuno && cd netuno && curl https://github.com/netuno-org/platform/releases/download/latest/netuno.jar > netuno.jar && java -jar netuno.jar install

```

## Windows

No terminal do **PowerShell**, ou indo no menu iniciar e digitando: `powershell`

Agora copie e cole o commando abaixo e siga as instruções de **Instalação**:

```plaintext

md netuno; cd netuno; Invoke-WebRequest -Uri "https://github.com/netuno-org/platform/releases/download/latest/netuno.jar" -OutFile "netuno.jar"; java -jar netuno.jar install

```

## Iniciar a App DEMO

No fim da instalação receberá algumas indicações de como executar o Netuno.

E para experimentar o Netuno e iniciar o servidor com a aplicação de **demo**_nstração_, siga as instruções abaixo.


> ### `./netuno server`
>
> Inicia o servidor do Netuno com a aplicação padrão de **demo**_nstração_:

### Abrir a Aplicação no Browser

Após a inicialização do servidor o navegador será lançado e abrirá automaticamente com o endereço do servidor do Netuno local.

Caso o seu navegador não seja lançado automaticamente então abra manualmente no seu navegador o endereço:

* <a href="http://demo.local.netu.no:9000" target="_blank">http://demo.local.netu.no:9000</a>

Ou em:

* <a href="http://localhost:9000" target="_blank">http://localhost:9000</a>

## Parar o Servidor

Para parar o servidor pressione no terminal as teclas:

##### CTRL + C

O terminal finalizará o servidor do Netuno. Para iniciar novamente volte a utilizar os comandos anteriores.

## Próximos Passos

Algumas ideias do que pode fazer agora.

##### Iniciante

Se é novo no Netuno, inicie criando o seu primeiro formulário:

<a class="button" href="/docs/pt-PT/academy/start/demonstration/form/">Iniciar</a>

##### Tutoriais

Descubra como explorar o desenvolvimento no Netuno:

<a class="button" href="/docs/pt-PT/library/tutorials/">Saber Mais</a>

##### Projetos

Para aplicar o Netuno em qualquer tipo de negócio: 

<a class="button" href="/docs/pt-PT/business/introduction/">Mais Informações</a>
