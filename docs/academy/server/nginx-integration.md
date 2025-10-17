---
id: nginx-integration
title: Integration with NGINX
sidebar_label: Integration with NGINX
---

NGINX is a powerful web server that guarantees high performance and versatility.

With NGINX integration, we can benefit from techniques offered to solve issues such as load balancing, 
reverse proxy, caching, security, and more.

![integracao-nginx1.png](/docs/assets/integracao-nginx1.png)

## Installing NGINX

Installing NGINX is very simple. Any Linux distribution should have NGINX available in its packages.

On Ubuntu or Debian distributions:

```shell
apt install nginx
```

On CentOS, Fedora, or Red Hat distributions:

```shell
yum install nginx
```

On MacOS X, it is available through brew and macports.

For Windows, you can download the installer at: http://nginx.org/en/download.html

## Configuration

For this example, we'll assume you already have Netuno installed and running in `/srv/netuno`.

To configure a new site in NGINX, navigate to the configuration folder:

* Linux distributions are usually in: `/etc/nginx`
* macOS with brew: `/usr/local/etc/nginx`

Create a new configuration file for the new site in `sites-available/netuno`.

The contents of this file will be:

```text
server {
    listen 127.0.0.1:80;
    server_name app.your-domain.com;
    location / {
        proxy_pass http://127.0.0.1:9000;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host your-app-name.local.netu.no;
    }
    location /netuno {
        root /srv/netuno/core/web;
    }

    location /public {
        root /srv/netuno/apps/your-app-name;
    }
}
```

You can change the line where it says `listen 127.0.0.1:80` to your external IP and port.

And where it says `your-app-name` should be the name of your app, such as `myapp`.

> If the application name contains `_`, such as `my_app`, this is because Netuno does not allow `-` in 
> application names.
> Since `_` is not supported in domain addresses, you should replace it with `-`, which Netuno automatically 
> converts to `_` and finds the corresponding app.

The `.local.netu.no` is a shortcut for `localhost`; alternatively, `.localhost` can be used.

This is because Netuno automatically searches for an app with the name corresponding to the subdomain, so it is 
very important that the `Host` that arrives at Netuno indicate the application name in the prefix.

In this example, we are assuming that Netuno is running on port `9000` and in the `/src/netuno` path. Validate
this information and adapt if necessary.

Netuno's public web content is in the `core/web` folder, but not all of it should be exposed, only the `netuno` 
folder.

Therefore, the only folders that are directly exposed are the `core/web/netuno` folder and the `public` folder of 
the corresponding application.

## Activate New Website Configuration

Now we need to create a symbolic link to our new configuration file to activate our new site.

This is because the NGINX site configuration methodology on Linux is based on storing the configuration files 
within the `sites-available` folder, but the active file is defined in the `sites-enabled` folder.

Therefore, creating the symbolic link is important to avoid file duplication and ensure that any changes are made 
to a single file.

On Linux, create the symbolic link as follows:

```shell
ln -s /etc/nginx/sites-available/netuno /etc/nginx/sites-enabled/netuno
```

## Reload NGINX configurations

Remember that for this configuration to take effect, you must reload the NGINX configuration.

Reload:

```shell
nginx -s reload
```

Or restart:

```shell
killall nginx
nginx
```

Or, more elegantly:

```shell
service nginx restart
```

Or completely stop the server and start it again:

```shell
service nginx stop
service nginx start
```

You can check the status of NGINX with the command:

```shell
service nginx status
```

NGINX log files are located in the `/var/log/nginx` folder.

## Fictitious Local Address

Netuno resolves which application is processing the request based on the address prefix in the HTTP header's 
`Host`, which must contain the exact name of the Netuno application.

Therefore, it's possible to use a fictitious address simply to tell Netuno to use the correct application.

We have `my-app.local.netu.no`, which always resolves to the local IP.

> The application in Netuno must be `my_app` because Netuno doesn't allow `-` in application names, and since 
> the domain doesn't support `_`, it should be replaced by `-`, which Netuno automatically converts to `_`.

Alternatively, you can create a local address, such as `my-app.localhost`, in which case you need to register this 
address as localhost. You should force address resolution in your hosts file. In the case of Linux, edit the file:

```plaintext
/etc/hosts
```

And add the line:

```plaintext
127.0.0.1 my-app.localhost
```

Now this local address can be used in NGINX.

If you're in a local development environment, simply check the address in your browser:

- Through NGINX:

```plaintext
http://my-app.localhost
```

- Directly to Netuno:

```plaintext
http://my-app.localhost:9000
```

If you're in a server or container via terminal, use the cURL command, for example:

- Through NGINX:

```plaintext
curl -v http://my-app.localhost:9000
```

- Directly to Netuno:

```plaintext
curl -v http://my-app.localhost:9000
```

Always make sure that where we refer to `my-app`, it should be the name of your application.

In a local development environment, if any changes are made, especially to the operating system's `hosts` file,

you may need to restart the browser due to DNS resolution caching.

If you need to change any configuration in NGINX, remember to always reload the settings.
