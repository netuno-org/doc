---
id: nginx-integration
title: Integración con NGINX
sidebar_label: Integración con NGINX
---

NGINX es un potente servidor web que garantiza alto rendimiento y versatilidad.

Con la integración de NGINX podemos beneficiarnos de las técnicas ofrecidas para resolver cuestiones sobre balanceo, proxy inverso, caché, seguridad, entre otros.

![integracion-nginx1.png](/docs/assets/integracao-nginx1.png)

## Instalar NGINX

Para instalar NGINX es muy sencillo; en cualquier distribución Linux debería tenerlo disponible en sus paquetes.

En distribuciones Ubuntu o Debian:

```shell
apt install nginx
```

En distribuciones CentOS, Fedora o RedHat:

```shell
yum install nginx
```

En MacOS X está disponible en brew y en macports.

Para Windows puede descargar el instalador en: http://nginx.org/en/download.html

## Configuración

Para este ejemplo, vamos a asumir que ya tiene Netuno instalado y en ejecución en `/srv/netuno`.

Para configurar un nuevo sitio en NGINX, navegue hasta la carpeta de configuración:

* En distribuciones Linux suele estar en: `/etc/nginx`
* MacOS X con brew: `/usr/local/etc/nginx`

Cree un nuevo archivo de configuración para el nuevo sitio en `sites-available/netuno`.

Y el contenido de este archivo será:

```
server {
    listen 127.0.0.1:80;
    server_name app.tu-dominio.com;
    location / {
        proxy_pass http://127.0.0.1:9000;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host nombre-de-tu-app-netuno.local.netu.no;
    }
    location /netuno {
        root /srv/netuno/core/web;
    }

    location /public {
        root /srv/netuno/apps/nombre-de-tu-app-netuno;
    }
}
```

Puede cambiar la línea donde dice `listen 127.0.0.1:80` por su IP externo y su puerto correspondiente.

Y donde está `nombre-de-tu-app-netuno` deberá ser el nombre de tu app, como por ejemplo `miapp`.

> En caso de que el nombre de la aplicación contenga `_`, como `mi_app`, esto es porque Netuno no permite el `-` en el nombre de las aplicaciones.
> Entonces, como en las direcciones de dominio no se admite el `_`, debe sustituirlo por `-`, que Netuno convierte automáticamente a `_` y encuentra la app correspondiente.

El `.local.netu.no` es un atajo para `localhost`; alternativamente, se puede utilizar `.localhost`.

Esto es porque Netuno busca automáticamente una app con el nombre correspondiente al subdominio, así que es muy importante en el `Host` que llega a Netuno indicar en el prefijo el nombre de la aplicación.

En este ejemplo estamos asumiendo que Netuno está en ejecución en el puerto `9000` y en la ruta `/src/netuno`, valide esta información y adáptela si es necesario.

El contenido web público de Netuno está en la carpeta `core/web`, pero no todo debería exponerse, solo la carpeta `netuno`.

Por lo tanto, las únicas carpetas que se exponen directamente son la carpeta `core/web/netuno` y la carpeta `public` de la aplicación correspondiente.

## Activar la configuración del nuevo sitio

Ahora es preciso crear un enlace simbólico para nuestro nuevo archivo de configuración para activar nuestro nuevo sitio.

Esto es porque la metodología de configuración de sitios de NGINX en Linux se basa en contener los archivos de configuración dentro de la carpeta `sites-available`, pero lo que está activo queda definido en la carpeta `sites-enabled`.

Así, la creación del enlace simbólico es importante para evitar la duplicación de archivos y garantizar que cualquier cambio se haga en un único archivo.

En Linux se crea el enlace simbólico de esta forma:

```shell
ln -s /etc/nginx/sites-available/netuno /etc/nginx/sites-enabled/netuno
```

## Recargar la configuración de NGINX

Recuerde que, para que esta configuración tenga efecto, es necesario recargar la configuración de NGINX.

Recargar:

```shell
nginx -s reload
```

O reinicie:

```shell
killall nginx
nginx
```

O de la forma más elegante:

```shell
service nginx restart
```

O incluso detenga por completo el servidor y vuelva a iniciarlo:

```shell
service nginx stop
service nginx start
```

Puede verificar el estado de NGINX con el comando:

```shell
service nginx status
```

Los archivos de logs de NGINX están en la carpeta `/var/log/nginx`.

## Dirección local ficticia

Netuno resuelve cuál es la aplicación que procesa la petición (request) con base en el prefijo de la dirección que viene en el `Host` de la cabecera HTTP, debiendo el prefijo contener el nombre exacto de la aplicación Netuno.

Entonces es posible utilizar una dirección ficticia solo para indicar a Netuno que debe utilizar la aplicación correcta.

Tenemos `mi-app.local.netu.no`, que resuelve siempre la IP local.

> La aplicación en Netuno debe ser `mi_app`, porque Netuno no permite el `-` en el nombre de las aplicaciones,
> y como el dominio no admite `_`, entonces se sustituye por `-`, que Netuno convierte automáticamente a `_`.

Alternativamente, se puede crear una dirección local, como por ejemplo `mi-app.localhost`, en cuyo caso es preciso registrar esta dirección como host local; deberá forzar la resolución de la dirección en su archivo de hosts; en el caso de Linux, edite el archivo:

```plaintext
/etc/hosts
```

Y añada la línea:

```plaintext
127.0.0.1 mi-app.localhost
```

Ahora esta dirección local se puede utilizar en NGINX.

Si está en un entorno de desarrollo local, basta con verificar en su navegador a través de la dirección:

- A través de NGINX:

```plaintext
http://mi-app.localhost
```

- Directamente a Netuno:

```plaintext
http://mi-app.localhost:9000
```

Si está en un servidor o contenedor vía terminal, entonces utilice el comando cURL, por ejemplo:

- A través de NGINX:

```plaintext
curl -v http://mi-app.localhost:9000
```

- Directamente a Netuno:

```plaintext
curl -v http://mi-app.localhost:9000
```

Asegúrese siempre de que donde referimos `mi-app` deberá ser el nombre de su aplicación.

En un entorno de desarrollo local, si hay alguna corrección, principalmente del archivo `hosts` del sistema operativo, puede que sea necesario reiniciar el navegador debido a la caché de resolución de DNS.

Si es necesario corregir alguna configuración en NGINX, no olvide recargar siempre la configuración.