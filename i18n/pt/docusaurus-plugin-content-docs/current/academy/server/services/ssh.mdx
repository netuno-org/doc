---
id: ssh
title: SSH Client
sidebar_label: SSH Client
---

## Introdução

O Netuno tem integrado na sua framework low-code um cliente SSH, que permite conectar com servidores, executar comandos, enviar e receber arquivos, modificar pastas, entre outras operações remotas.

Suporta múltiplas conexões simultâneas, e ainda SCP e SFTP.

Isso graças a implementação Java e open-source <a target="_blank" href="https://github.com/hierynomus/sshj/tree/master">SSHJ</a>, que é o que permite ao Netuno fornecer estas funcionalidadas a todas linguagens de script através do recurso `_ssh`.

> Mais sobre o recurso [SSH](/docs/library/resources/ssh) do Netuno.

## Configuração

O primeiro passo será configurar os dados de acesso ao SSH que o Netuno irá utilizar para realizar a conexão.

Navegue dentro da aplicação que está a desenvolver até ao arquivo de configuração de ambiente. Neste exemplo, iremos utilizar o arquivo de ambiente de desenvolvimento localizado em:

- `config/_development.json`

Verifique se já não existe configurações para o SSH, se não existir ainda então no fim do arquivo de configuração (em formato JSON) adicione os parâmetros de configuração do SSH:

```
{
  ...
  "ssh": {
    "default": {
      "enabled": true,
      "host": "meu.servidor.net",
      "port": 22,
      "username": "root",
      "password": "$eCr37"
    }
  },
  ...
}
```

Após salvar as alterações, basta reiniciar o Netuno para assumir as alterações da configuração. Sendo estas as configurações padrão para a conexão, como indica o nome `default`.

Pode adicionar mais configurações de conexão SSH, mas apenas uma poderá ser definida como padrão.

Para adicionar mais configurações de conexão SSH basta repetir o bloco de configuração padrão e trocar o nome `default` por um outro nome à sua escolha, como por exemplo:

```
{
  ...
  "ssh": {
    "default": {
      "enabled": true,
      "host": "meu.servidor.net",
      "port": 22,
      "username": "root",
      "password": "$eCr37"
    },
    "outro": {
      "enabled": true,
      "host": "meu.outro-servidor.net",
      "port": 22,
      "username": "root",
      "password": "$eCr37"
    }
  },
  ...
}
```

Uma configuração semelhante ao exemplo acima vai permitir utilizar a conta default quando for chamada da seguinte forma no código:

```
const ssh = _ssh.init()
```

E para utilizar a configuração `outror` basta adicionar o nome da configuração como parâmetro à função `_ssh.init()` da seguinte forma:

```
const sshOutro = _ssh.init("outro")
```

> Se não adicionar um nome de configuração como parâmetro será utilizada sempre a conta default.

## Conexão

Antes de fazer qualquer coisa é preciso iniciar a conexão SSH:

```javascript
ssh.connect();
```

## Comandos

Para executar comandos é prciso iniciar uma sessão de comandos:

```javascript
const sshSessao = ssh.initSession();
```

Ao executar um comando é fornecido um objeto que contém o estado e a saída de dados.

```javascript
const sshComandoResultado = sshSessao.exec("ls -rato");
if (sshComandoResultado.ok()) {
    _out.println('Executou com sucesso:');
    _out.println(sshComandoResultado.output());
} else {
    _out.println('O comando falhou:');
    _out.println(sshComandoResultado.error());
}
```

> O objeto retornado pelo comando é o [SSHExecResult](/docs/library/objects/SSHExecResult).

Lembre de fechar sempre a sessão:

```
sshSessao.close();
```

## SCP

```javascript
const sshSCP = ssh.initSCP();
sshSCP.uploadText("test-scp-js.txt", "Hi world!");
_out.println(sshSCP.downloadText("test-scp-js.txt"));
sshSCP.close();
```

## SFTP

O SFTP é uma forma de transferência e manipulação de arquivos e pastas que suporta as mesmas funcionalidades que o FTP, mas utilizando o SSH.

Para iniciar uma nova sessão SFTP:

```javascript
const sftp = ssh.initSFTP();
```

> Inicia o objeto de cliente da sessão sendo do tipo [SSHSFTP](/docs/library/objects/SSHSFTP).

Criar uma nova pasta remotamente:

```javascript
sftp.createDirectory("caminho/nova-pasta");
```

Cria ou substituí o arquivo remoto com o conteúdo de texto passado:

```javascript
sftp.uploadText("pasta/arquivo.txt", "Meu conteúdo!");
```

Obtém o conteúdo de texto de um arquivo remoto:

```javascript
const conteudoArquivoRemoto = sftp.downloadText("pasta/arquivo.txt"));
_out.println(conteudoArquivoRemoto);
```

Apaga definitivamente um arquivo remoto:

```javascript
sftp.deleteFile("pasta/arquivo.txt");
```

Apaga definitivamente a pasta remota:

```javascript
sftp.deleteDirectory("pasta");
```

Lista todo o conteúdo de uma pasta:

```javascript
for (const i of sftp.list("caminho/pasta")) {
  if (i.isDirectory()) {
    _out.print('Pasta: ');
  } else if (i.isRegularFile()) {
    _out.print('Arquivo: ');
  } else {
    _out.print('Outro: ');
  }
  _out.printlsn(i.getName());
  _out.println('<br/>');
}
```

> Retorna uma lista de objetos do tipo [SSHFile](/docs/library/objects/SSHFile).

Lembre de fechar sempre a sessão SFTP:

```
sftp.close();
```
