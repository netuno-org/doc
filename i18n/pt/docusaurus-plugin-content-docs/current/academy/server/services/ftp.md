---
id: ftp
title: FTP Client
sidebar_label: FTP Client
---

## Introdução

O Netuno tem integrado na sua framework low-code um cliente FTP, que permite conectar com servidores, enviar e receber arquivos, modificar pastas, entre outras operações remotas.

Suporta múltiplas conexões simultâneas, e ainda FTPS.

Isso graças a implementação Java e open-source <a target="_blank" href="https://github.com/apache/commons-net">Apache Commons Net</a>, que é o que permite ao Netuno fornecer estas funcionalidadas a todas linguagens de script através do recurso `_ftp`.

> Mais sobre o recurso [FTP](/docs/library/resources/ftp) do Netuno.

## Configuração

O primeiro passo será configurar os dados de acesso ao FTP que o Netuno irá utilizar para realizar a conexão.

Navegue dentro da aplicação que está a desenvolver até ao arquivo de configuração de ambiente. Neste exemplo, iremos utilizar o arquivo de ambiente de desenvolvimento localizado em:

- `config/_development.json`

Verifique se já não existe configurações para o FTP, se não existir ainda então no fim do arquivo de configuração (em formato JSON) adicione os parâmetros de configuração do FTP:

```
{
  ...
  "ftp": {
    "default": {
      "enabled": true,
      "host": "meu.servidor.net",
      "port": 21,
      "username": "temp",
      "password": "$eCr37"
    }
  },
  ...
}
```

Após salvar as alterações, basta reiniciar o Netuno para assumir as alterações da configuração. Sendo estas as configurações padrão para a conexão, como indica o nome `default`.

Pode adicionar mais configurações de conexão FTP, mas apenas uma poderá ser definida como padrão.

Para adicionar mais configurações de conexão FTP basta repetir o bloco de configuração padrão e trocar o nome `default` por um outro nome à sua escolha, como por exemplo:

```
{
  ...
  "ftp": {
    "default": {
      "enabled": true,
      "host": "meu.servidor.net",
      "port": 22,
      "username": "temp",
      "password": "$eCr37"
    },
    "outro": {
      "enabled": true,
      "host": "meu.outro-servidor.net",
      "port": 22,
      "username": "temp",
      "password": "$eCr37"
    }
  },
  ...
}
```

Uma configuração semelhante ao exemplo acima vai permitir utilizar a conta default quando for chamada da seguinte forma no código:

```
const ftp = _ftp.init()
```

E para utilizar a configuração `outror` basta adicionar o nome da configuração como parâmetro à função `_ftp.init()` da seguinte forma:

```
const ftpOutro = _ftp.init("outro")
```

> Se não adicionar um nome de configuração como parâmetro será utilizada sempre a conta default.

## Conexão

Antes de fazer qualquer coisa é preciso iniciar a conexão FTP:

```javascript
ftp.connect();
```

## Pasta de Trabalho

Ao realizar operações no FTP é preciso definir qual pasta será utilizada.

Através da definição da pasta de trabalho vamos poder realizar as diversas manipulações a partir desta pasta base.

Para alterar a pasta de trabalho:

```javascript
ftp.changeWorkingDirectory('minha/pasta/base')
```

Agora qualquer operação será feita nesta ou a partir desta pasta.

## Criar e Apagar Pastas

Ao criar uma pasta basta indicar o caminho desta pasta:

```javascript
ftp.createDirectory('pasta-temporaria')
ftp.createDirectory('pasta-temporaria/sub-pasta')
```

Apagar ou remover pastas:

```javascript
ftp.deleteDirectory('pasta-temporaria/sub-pasta')
ftp.deleteDirectory('pasta-temporaria')
```

## Renomear

É possível renomear arquivos ou pastas, é passado o caminho antigo e a seguir o novo caminho:

```javascript
ftp.rename('antigo', 'novo')
```

## Enviar Arquivos

Para submeter um arquivo de texto:

```javascript
ftp.uploadText('meu-arquivo.txt', 'Olá FTP! Este é o meu conteúdo...')
```

## Receber Arquivos

Para obter um arquivo de texto:

```javascript
const conteudoArquivo = ftp.downloadText('meu-arquivo.txt')
_out.println(conteudoArquivo)
```

## Listar Items na Pasta

Lista todo o conteúdo de uma pasta:

```javascript
for (const i of ftp.list("caminho/pasta")) {
  if (i.isDirectory()) {
    _out.print('Pasta: ');
  } else if (i.isFile()) {
    _out.print('Arquivo: ');
  } else {
    _out.print('Outro: ');
  }
  _out.printlsn(i.getName());
  _out.println('<br/>');
}
```

> Retorna uma lista de objetos do tipo [FTPFile](/docs/library/objects/FTPFile).
