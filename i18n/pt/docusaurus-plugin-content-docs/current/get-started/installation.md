---
sidebar_position: 1
id: installation
title: Instalação
sidebar_label: Instalação
---

## Pré-requisitos

### Java

Certifique-se que tem o Java instalado, executando no terminal o commando:

`java -version`

A versão do Java deverá ser a versão 11.

Ou, caso não tenha, então instale o Java <a href="https://adoptopenjdk.net/" target="_blank">AdoptOpenJDK</a>.

### NPM

Não é obrigatório mas convém que o NPM esteja instalado para poder compilar a user interface _(frontend)_ das aplicações:

`npm -version`

A versão do NPM deverá ser a versão 6 ou superior.

Ou, caso não tenha, então instale o <a href="https://nodejs.org/" target="_blank">NodeJS</a> que traz consigo o NPM.

## Considerações

Ao executar o comando de instalação abaixo será alterado o caminho no terminal de onde estava para dentro da nova pasta do **netuno** que será criada.

Caso precise executar novamente o comando de instalação será preciso corrigir o caminho e provavelmente remover a pasta do **netuno** que foi criada.

## Versão Estável

A versão estável é uma versão segura e pronta para ser utilizada em produção.

Para instalar a versão estável siga os passos de instalação abaixo:

### Linux ou Mac OS X

É comum haver o comando `wget` e o `curl`, execute no terminal para verificar.

Para criar a pasta do Netuno, execute no **terminal**:

```plaintext
mkdir -p netuno && cd netuno
```

Escolha uma dos seguintes métodos de **download**:

* Download com o *WGET*:

```plaintext
wget https://github.com/netuno-org/platform/releases/download/stable/netuno-setup.jar -O netuno-setup.jar
```

* Download com o *cURL*:

```plaintext
curl -L https://github.com/netuno-org/platform/releases/download/stable/netuno-setup.jar -o netuno-setup.jar
```

Depois de realizar um dos passos anteriores, avance para a **instalação do Netuno**:

* Instalação da versão **oficial atual e estável**:

```plaintext
java -jar netuno-setup.jar install
```

> No MAC OS X, você precisa desabilitar a quarentena, portanto, dentro da pasta inicial do `netuno`, execute:
> `sudo xattr -r -d com.apple.quarantine .`

### Windows

Para instalar a versão **atual em teste** no terminal do **PowerShell**, ou indo no menu iniciar e digitando: `powershell`

Agora copie e cole o commando abaixo e siga as instruções de **instalação**:

```plaintext
md netuno; cd netuno
Invoke-WebRequest -Uri "https://github.com/netuno-org/platform/releases/download/stable/netuno-setup.jar" -OutFile "netuno-setup.jar"
```

Depois de realizar o download anterior, avance para a **instalação do Netuno**:

* Instalação da versão **oficial atual e estável**:

```plaintext
java -jar netuno-setup.jar install
```

## Versão Em Teste

A versão atual em teste é uma versão em desenvolvimento, contém as funcionalidades mais recentes mas pode ser instável.

Para instalar a versão em desenvolvimento siga os passos de instalação abaixo:

### Linux ou Mac OS X

É comum haver o comando `wget` e o `curl`, execute no terminal para verificar.

Para criar a pasta do Netuno, execute no **terminal**:

```plaintext
mkdir -p netuno && cd netuno
```

Escolha uma dos seguintes métodos de **download**:

* Download com o *WGET*:

```plaintext
wget https://github.com/netuno-org/platform/releases/download/testing/netuno-setup.jar -O netuno-setup.jar
```

* Download com o *cURL*:

```plaintext
curl -L https://github.com/netuno-org/platform/releases/download/testing/netuno-setup.jar -o netuno-setup.jar
```

Depois de realizar um dos passos anteriores, avance para a **instalação do Netuno**:

* Instalação da versão **atual em teste**:

```plaintext
java -jar netuno-setup.jar install version=testing
```

> No MAC OS X, você precisa desabilitar a quarentena, portanto, dentro da pasta inicial do `netuno`, execute:
> `sudo xattr -r -d com.apple.quarantine .`

### Windows

Para instalar a versão **atual em teste** no terminal do **PowerShell**, ou indo no menu iniciar e digitando: `powershell`

Agora copie e cole o commando abaixo e siga as instruções de **instalação**:

```plaintext
md netuno; cd netuno
Invoke-WebRequest -Uri "https://github.com/netuno-org/platform/releases/download/testing/netuno-setup.jar" -OutFile "netuno-setup.jar"
```

Depois de realizar o download anterior, avance para a **instalação do Netuno**:

* Instalação da versão **atual em teste**:

```plaintext
java -jar netuno-setup.jar install version=testing
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

#### CTRL + C

O terminal finalizará o servidor do Netuno. Para iniciar novamente volte a utilizar os comandos anteriores.

## Próximos Passos

Algumas ideias do que pode fazer agora.

#### Iniciante

Se é novo no Netuno, inicie criando o seu primeiro formulário:

[[ Iniciar ]](../academy/demonstration/config)

#### Tutoriais

Descubra como explorar o desenvolvimento no Netuno:

[[ Saber Mais ]](tutorials)

#### Projetos

Para aplicar o Netuno em qualquer tipo de negócio: 

[[ Mais Informações ]](../academy/strategy)
