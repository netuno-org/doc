---
id: nginx-integration
title: Integração com NGINX
sidebar_label: Integração com NGINX
---

O NGINX é um poderoso servidor web que garante alto desempenho e versatilidade.

Com a integração do NGINX podemos beneficiar de técnicas oferecidas para resolver questões sobre balanceamento, 
proxy reverso, cache, segurança, entre outros.

![integracao-nginx1.png](/docs/assets/integracao-nginx1.png)

## Instalar o NGINX

Para instalar o NGINX é muito simples, em qualquer distribuição Linux deverá ter disponível nos seus pacotes o 
NGINX.

Em distribuições Ubuntu ou Debian:

```shell
apt install nginx
```

Em distribuições CentOS, Fedora ou RedHat:

```shell
yum install nginx
```

No MacOS X está disponível no brew e no macports.

Para Windows pode fazer o download do instalador em: http://nginx.org/en/download.html

## Configuração

Para este exemplo, vamos assumir que já tem o Netuno instalado e em execução em `/srv/netuno`.

Para configurar um novo site no NGINX navegue até à pasta de configuração:

* Distribuições Linux costuma estar em: `/etc/nginx`
* MacOS X com brew: `/usr/local/etc/nginx`

Crie um novo arquivo de configuração para o novo site em `sites-available/netuno`.

E o conteúdo deste arquivo será:

```
server {
    listen 127.0.0.1:80;
    server_name app.seu-dominio.com;
    location / {
        proxy_pass http://127.0.0.1:9000;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host nome-da-sua-app-netuno.local.netu.no;
    }
    location /netuno {
        root /srv/netuno/core/web;
    }

    location /public {
        root /srv/netuno/apps/nome-da-sua-app-netuno;
    }
}
```

Pode alterar a linha onde diz `listen 127.0.0.1:80` para o seu IP externo e respetivo porto.

E onde está `nome-da-sua-app-netuno` deverá ser o nome da sua app, como por exemplo `minhaapp`.

> Caso o nome da aplicação contenha o `_`, como `minha_app`, isso porque o Netuno não permite o `-` no nome das 
> aplicações.
> Então como nos endereços de domínio não é suportado o `_` deve substituir por `-` que o Netuno converte 
> automaticamente para `_` e encontra a app correspondente.

O `.local.netu.no` é um atalho para o `localhost`, em alternativa pode ser utilizado `.localhost`.

Isto porque o Netuno procura automaticamente por uma app com o nome correspondente ao subdomínio, assim é muito 
importante no `Host` que chega no Netuno indicar no prefixo o nome da aplicação.

Neste exemplo estamos a assumir que o Netuno está em execução na porta `9000` e no caminho `/src/netuno`, valide 
esta informação e adapte se for necessário.

O conteúdo web público do Netuno está na pasta `core/web`, mas nem tudo deverá ser exposto, apenas a pasta `netuno`.

Portanto, as únicas pasta que são expostas diretamente é a pasta `core/web/netuno` e a pasta `public` da aplicação
correspondente.

## Ativar a Configuração do Novo Site

Agora é preciso criar um link simbólico para o nosso novo arquivo de configuração para ativar o nosso novo site.

Isto porque a metodologia de configuração de sites do NGINX em Linux baseia-se em conter os arquivos de 
configuração dentro da pasta `sites-available` mas o que está ativo fica definido na pasta `sites-enabled`.

Assim a criação do link simbólico é importante para evitar a duplicação de arquivos e garantir que qualquer 
alteração seja feita num único arquivo.

Em Linux cria-se o link simbólico desta forma:

```shell
ln -s /etc/nginx/sites-available/netuno /etc/nginx/sites-enabled/netuno
```

## Reload das configurações do NGINX

Lembre-se que para esta configuração ter efeito é necessário recarregar as configurações do NGINX.

Reload:

```shell
nginx -s reload
```

Ou reinicie:

```shell
killall nginx
nginx
```

Ou da forma mais elegante:

```shell
service nginx restart
```

Ou ainda páre completamente o servidor e inicie novamente:

```shell
service nginx stop
service nginx start
```

Pode verificar o estado do NGINX com o comando:

```shell
service nginx status
```

Os ficheiros de logs do NGINX ficam na pasta `/var/log/nginx`.

## Endereço Local Fictício

O Netuno resolve qual é a aplicação que processa o pedido (request) com base no prefixo do endereço que vem no 
`Host` do header do HTTP, sendo que o prefixo deve conter o nome exato da aplicação Netuno.

Então é possível utilizar um endereço fictício apenas para indicar ao Netuno que deve utilizar a aplicação correta.

Temos o `minha-app.local.netu.no`, que resolve sempre o IP local.

> A aplicação no Netuno deve ser `minha_app`, porque o Netuno não permite o `-` no nome das aplicações, 
> e como o domínio não suporta `_` então ser substituído por `-` que o Netuno converte automaticamente para `_`.

Em alternativa pode-se criar um endereço local, como por exemplo `minha-app.localhost`, onde neste caso é preciso
registar este endereço como host local, deverá forçar a resolução do endereço no seu arquivo de hosts, no caso do 
Linux edite o arquivo:

```plaintext
/etc/hosts
```

E acrescente a linha:

```plaintext
127.0.0.1 minha-app.localhost
```

Agora este endereço local pode ser utilizado no NGINX.

Caso esteja em um ambiente de desenvolvimento local basta verificar no seu navegador através do endereço:

- Através do NGINX:

```plaintext
http://minha-app.localhost
```

- Diretamente ao Netuno:

```plaintext
http://minha-app.localhost:9000
```

Caso esteja em um servidor ou container via terminal, então utilize o comando cURL, por exemplo:

- Através do NGINX:

```plaintext
curl -v http://minha-app.localhost:9000
```

- Diretamente ao Netuno:

```plaintext
curl -v http://minha-app.localhost:9000
```

Certifique-se sempre que onde referimos `minha-app` deverá ser o nome da sua aplicação.

Em ambiente de desenvolvimento local caso haja alguma correção, principalmente do arquivo `hosts` do sistema 
operacional, poderá ser preciso reiniciar o navegador devido ao cache de resolução de DNS.

Caso seja necessário corrigir alguma configuração no NGINX não se esqueça de recarregar sempre as configurações.
