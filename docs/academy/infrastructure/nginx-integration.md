---
id: nginx-integration
title: Integration with NGINX
sidebar_label: Integration with NGINX
---

## NGINX: the reverse proxy for Netuno

As _Netuno_, is also a web server and cannot have the same performance and versatility in this field that is obtained with NGINX. However, since its integration with _Netuno_ is easy, we can benefit in this way.

![integracao-nginx1.png](assets/integracao-nginx1.png)

## NGINX Installation

NGINX installation is very simple process with any Linux distribution you should have NGINX available in your default packages.

In Ubuntu or Debian distributions:

```shell
apt install nginx
```

In CentOS, Fedora or RedHat distributions:

```shell
yum install nginx
```

<br>
<br>
In MacOS X is available in brew and macports.

For Windows you can download from here: http://nginx.org/en/download.html

## Configuration

Assuming that for example that you already have ?Netuno? installed and running on `/srv/netuno`.

To configure a new NGINX website, got to the configuration folder:

* Linux distributions are usually on: `/etc/nginx`
* MacOS X with brew: `/usr/local/etc/nginx`

To create a new configuration file for the new website at `sites-available/netuno`.

And the contents of this file will be:

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

You can change the line where it says `listen 127.0.0.1:80` to your external IP and port.

And where it says `netuno-app-name.localhost` should be the name of your app followed by the dot and the name of your domain. As for example: `myapp.localhost`

This is because _Netuno_ automatically searches for an app with the name corresponding to the subdomain.

In this example we are assuming that _Netuno_ is running on port `9000` and on path `/src/netuno`, validate this information and adapt if necessary.

Netuno's public web content is in the `web` folder, but not everything should be exposed, just the `netuno` folder and the `public` folder of each app.

## Activate New Website Configuration

Now you need to create a symbolic link to our new configuration file to activate our new website.

This is because the NGINX website configuration methodology in Linux is based on containing the configuration files within the folder `sites-available` but what is active is defined in the folder `sites-enabled`.

Thus the creation of the symbolic link is important to avoid duplication of files and ensure that any changes are made in a single file.

In Linux you create the link as below:

```shell
ln -s /etc/nginx/sites-available/netuno /etc/nginx/sites-enabled/netuno
```

## Reload NGINX configurations

Remember that to take effect you must reload the NGINX settings.

Reload:

```shell
nginx -s reload
```

Or reboot:

```shell
killall nginx
nginx
```

Or in the most nice way:

```shell
service nginx restart
```

Or stop completely and start again:

```shell
service nginx stop
service nginx start
```

Status can be checked with the command:

```shell
service nginx status
```

NGINX log files stay in the folder `/var/log/nginx`.

## Test

If you are doing a local test you should force the resolution of the address in your hosts file, in the case of Linux edit the file:

```plaintext
/etc/hosts
```

And add the line:

```plaintext
127.0.0.1 netuno-app-name.localhost
```

Now just check in your browser through the address:

```plaintext
http://netuno-app-name.localhost
```

Always make sure that where we refer `netuno-app-name` should be the name of your app! For example: <a href="http://myapp.localhost" target="_blank">http://myapp.localhost</a>

In case of any correction, especially the `hosts` operating system, you may need to restart your browser due to the DNS resolution cache.

If you need to correct any settings on NGINX, be sure to always refresh settings.
