---
id: nginx-integration
title: NGINX Integration
sidebar_label: NGINX Integration
---

NGINX is a powerful web server that ensures high performance and versatility.

With NGINX integration, we can benefit from techniques offered to solve issues related to load balancing,
reverse proxy, caching, security, among others.

![nginx-integration1.png](/docs/assets/integracao-nginx1.png)

## Install NGINX

Installing NGINX is very simple; on any Linux distribution, NGINX should be available in its packages.

On Ubuntu or Debian distributions:

```shell
apt install nginx
```

On CentOS, Fedora, or RedHat distributions:

```shell
yum install nginx
```

On MacOS X, it is available via brew and macports.

For Windows, you can download the installer at: http://nginx.org/en/download.html

## Configuration

For this example, we will assume that you already have Netuno installed and running in `/srv/netuno`.

To configure a new site in NGINX, navigate to the configuration folder:

* Linux distributions usually have it in: `/etc/nginx`
* MacOS X with brew: `/usr/local/etc/nginx`

Create a new configuration file for the new site at `sites-available/netuno`.

And the content of this file will be:

```
server {
    listen 127.0.0.1:80;
    server_name app.your-domain.com;
    location / {
        proxy_pass http://127.0.0.1:9000;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host your-netuno-app-name.local.netu.no;
    }
    location /netuno {
        root /srv/netuno/core/web;
    }

    location /public {
        root /srv/netuno/apps/your-netuno-app-name;
    }
}
```

You can change the line where it says `listen 127.0.0.1:80` to your external IP and corresponding port.

And where it says `your-netuno-app-name` should be your app name, for example `myapp`.

> If the application name contains `_`, such as `my_app`, this is because Netuno does not allow `-` in application names.
> So, since `_` is not supported in domain addresses, it must be replaced with `-`, which Netuno automatically converts
> to `_` and finds the corresponding app.

`.local.netu.no` is a shortcut to `localhost`; alternatively, `.localhost` can be used.

This is because Netuno automatically looks for an app whose name corresponds to the subdomain, so it is very
important to indicate the application name in the prefix of the `Host` that arrives at Netuno.

In this example, we are assuming that Netuno is running on port `9000` and in the path `/src/netuno`; validate
this information and adapt it if necessary.

Netuno's public web content is in the `core/web` folder, but not everything should be exposed—only the `netuno` folder.

Therefore, the only folders exposed directly are the `core/web/netuno` folder and the `public` folder of the corresponding application.

## Enable the New Site Configuration

Now you need to create a symbolic link to our new configuration file to activate our new site.

This is because the NGINX site configuration methodology on Linux is based on keeping configuration files
inside the `sites-available` folder, but what is active is defined in the `sites-enabled` folder.

Thus, creating the symbolic link is important to avoid duplicating files and ensure that any
change is made in a single file.

On Linux, create the symbolic link as follows:

```shell
ln -s /etc/nginx/sites-available/netuno /etc/nginx/sites-enabled/netuno
```

## Reload NGINX Configuration

Remember that for this configuration to take effect, you need to reload the NGINX configuration.

Reload:

```shell
nginx -s reload
```

Or restart:

```shell
killall nginx
nginx
```

Or in the more elegant way:

```shell
service nginx restart
```

Or even stop the server completely and start it again:

```shell
service nginx stop
service nginx start
```

You can check the NGINX status with the command:

```shell
service nginx status
```

NGINX log files are located in the `/var/log/nginx` folder.

## Fictitious Local Address

Netuno determines which application processes the request based on the address prefix that comes in the HTTP
header's `Host`, and the prefix must contain the exact name of the Netuno application.

So it is possible to use a fictitious address just to indicate to Netuno that it should use the correct application.

We have `my-app.local.netu.no`, which always resolves to the local IP.

> The application in Netuno must be `my_app`, because Netuno does not allow `-` in application names,
> and since the domain does not support `_`, it must be replaced with `-`, which Netuno automatically converts to `_`.

Alternatively, you can create a local address, such as `my-app.localhost`; in this case, you need
to register this address as a local host. You should force the address resolution in your hosts file; on Linux,
edit the file:

```plaintext
/etc/hosts
```

And add the line:

```plaintext
127.0.0.1 my-app.localhost
```

Now this local address can be used in NGINX.

If you are in a local development environment, simply check it in your browser using the address:

- Through NGINX:

```plaintext
http://my-app.localhost
```

- Directly to Netuno:

```plaintext
http://my-app.localhost:9000
```

If you are on a server or container via terminal, then use the cURL command, for example:

- Through NGINX:

```plaintext
curl -v http://my-app.localhost:9000
```

- Directly to Netuno:

```plaintext
curl -v http://my-app.localhost:9000
```

Always make sure that where we refer to `my-app`, it should be your application name.

In a local development environment, if there is any correction, especially to the operating system's `hosts`
file, you may need to restart the browser due to the DNS resolution cache.

If you need to correct any configuration in NGINX, do not forget to always reload the configuration.