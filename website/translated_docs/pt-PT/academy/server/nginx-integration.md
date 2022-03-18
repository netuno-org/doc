---
id: nginx-integration
title: Integração com NGINX
sidebar_label: Integração com NGINX
---

## NGINX o proxy reverso para o Netuno

O Netuno, apesar de ser também um servidor web, não consegue, como é natural, ter a mesma performance e versatilidade neste campo que se obtém com o NGINX. No entanto, dado a integração do NGINX com o Netuno é fácil, podemos desta forma beneficiar do melhor dos dois mundos.

![integracao-nginx1.png](assets/integracao-nginx1.png)

## Instalar o NGINX

Para instalar o NGINX é muito simples, em qualquer distribuição Linux deverá ter disponível nos seus pacotes o NGINX.

Em distribuições Ubuntu ou Debian:

```shell
apt install nginx
```

Em distribuições CentOS, Fedora ou RedHat:

```shell
yum install nginx
```

<br>
<br>
No MacOS X está disponível no brew e no macports.

Para Windows pode fazer o download do instalador em: http://nginx.org/en/download.html

## Configuração

Para este exemplo, vamos assumir que já tem o Netuno instalado e em execução em `/srv/netuno`.

Para configurar um novo site no NGINX navegue até à pasta de configuração:

* Distribuições Linux costuma estar em: `/etc/nginx`
* MacOS X com brew: `/usr/local/etc/nginx`

Crie um novo ficheiro de configuração para o novo site em `sites-available/netuno`.

E o conteúdo deste ficheiro será:

```editorconfig
server {
    listen 127.0.0.1:80;
    server_name netuno-app-name.localhost;
    location / {
        proxy_pass http://127.0.0.1:9000;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host
    }
    location ~ ^/(netuno|apps/.*/public)/ {
        root /srv/netuno/web;
    }
}
```

Pode alterar a linha onde diz `listen 127.0.0.1:80` para o seu IP externo e respetivo porto.

E onde diz `netuno-app-name.localhost` deverá ser o nome da sua app seguido pelo ponto e o nome do seu domínio. Como por exemplo: `minhaapp.localhost`

Isto porque o Netuno procura automaticamente por uma app com o nome correspondente ao subdomínio.

Neste exemplo estamos a assumir que o Netuno está em execução na porta `9000` e no caminho `/src/netuno`, valide esta informação e adapte se for necessário.

O conteúdo web público do Netuno está na pasta `web`, mas nem tudo deverá ser exposto, apenas a pasta `netuno` e a pasta `public` de cada app.

## Ativar a Configuração do Novo Site

Agora é preciso criar um link simbólico para o nosso novo ficheiro de configuração para ativar o nosso novo site.

Isto porque a metodologia de configuração de sites do NGINX em Linux baseia-se em conter os ficheiros de configuração dentro da pasta `sites-available` mas o que está ativo fica definido na pasta `sites-enabled`.

Assim a criação do link simbólico é importante para evitar a duplicação de ficheiros e garantir que qualquer alterações seja feita num único ficheiro.

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

## Testar

Caso esteja a fazer um teste local deverá forçar a resolução do endereço no seu ficheiro de hosts, no caso do Linux edite o ficheiro:

```plaintext
/etc/hosts
```

E acrescente a linha:

```plaintext
127.0.0.1 netuno-app-name.localhost
```

Agora basta verificar no seu browser através do endereço:

```plaintext
http://netuno-app-name.localhost
```

Certifique-se sempre que onde referimos `netuno-app-name` deverá ser o nome da sua app! Por exemplo: <a href="http://minhaapp.localhost" target="_blank">http://minhaapp.localhost</a>

Em caso de alguma correção, principalmente do ficheiro `hosts` do sistema operacional, poderá ser preciso reiniciar o browser devido ao cache de resolução de DNS.

Caso seja necessário corrigir alguma configuração no NGINX não se esqueça de recarregar sempre as configurações.
