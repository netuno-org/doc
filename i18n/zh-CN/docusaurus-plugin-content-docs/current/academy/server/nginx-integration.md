---
id: nginx-integration
title: 与 NGINX 集成
sidebar_label: 与 NGINX 集成
---

NGINX 是一款强大的 Web 服务器，可确保高性能与多用途性。

通过与 NGINX 集成，我们可以借助其提供的技术来解决负载均衡、反向代理、缓存、安全等方面的问题。

![integracao-nginx1.png](/docs/assets/integracao-nginx1.png)

## 安装 NGINX

安装 NGINX 非常简单，在任何 Linux 发行版中，其软件包中都应该提供 NGINX。

在 Ubuntu 或 Debian 发行版中：

```shell
apt install nginx
```

在 CentOS、Fedora 或 RedHat 发行版中：

```shell
yum install nginx
```

在 MacOS X 中可通过 brew 和 macports 获取。

在 Windows 中可从以下地址下载安装程序：http://nginx.org/en/download.html

## 配置

在本示例中，我们假设您已经安装 Netuno，并在 `/srv/netuno` 中运行。

要在 NGINX 中配置新站点，请导航到配置文件夹：

* Linux 发行版通常位于：`/etc/nginx`
* 使用 brew 的 MacOS X：`/usr/local/etc/nginx`

在 `sites-available/netuno` 中为新站点创建一个新的配置文件。

该文件的内容如下：

```
server {
    listen 127.0.0.1:80;
    server_name app.你的域名.com;
    location / {
        proxy_pass http://127.0.0.1:9000;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host 你的netuno应用名.local.netu.no;
    }
    location /netuno {
        root /srv/netuno/core/web;
    }

    location /public {
        root /srv/netuno/apps/你的netuno应用名;
    }
}
```

您可以修改 `listen 127.0.0.1:80` 这一行，改为您的外部 IP 及相应端口。

而 `你的netuno应用名` 处应填写您的应用名称，例如 `我的应用`。

> 如果应用名称中包含 `_`，例如 `我的_应用`，这是因为 Netuno 不允许在应用名称中使用 `-`。
> 由于域名地址不支持 `_`，因此必须替换为 `-`，Netuno 会自动将其转换为 `_` 并找到对应的应用。

`.local.netu.no` 是 `localhost` 的一个快捷方式，作为替代也可以使用 `.localhost`。

这是因为 Netuno 会自动查找与子域名名称对应的应用，因此在到达 Netuno 的 `Host` 中，前缀必须标明应用名称，这一点非常重要。

在本示例中，我们假设 Netuno 运行在 `9000` 端口，路径为 `/src/netuno`，请核实此信息并在必要时进行调整。

Netuno 的公开 Web 内容位于 `core/web` 文件夹中，但并非所有内容都应暴露，只有 `netuno` 文件夹应暴露。

因此，直接暴露的文件夹只有 `core/web/netuno` 文件夹和对应应用的 `public` 文件夹。

## 激活新站点的配置

现在需要为我们的新配置文件创建一个符号链接，以激活我们的新站点。

这是因为 Linux 中 NGINX 的站点配置方法是将配置文件保存在 `sites-available` 文件夹中，而实际激活的配置则定义在 `sites-enabled` 文件夹中。

因此，创建符号链接很重要，这样可以避免文件重复，并确保任何修改都只在单个文件中进行。

在 Linux 中，符号链接的创建方式如下：

```shell
ln -s /etc/nginx/sites-available/netuno /etc/nginx/sites-enabled/netuno
```

## 重新加载 NGINX 配置

请记住，要让此配置生效，需要重新加载 NGINX 的配置。

重新加载：

```shell
nginx -s reload
```

或者重启：

```shell
killall nginx
nginx
```

或者以更优雅的方式：

```shell
service nginx restart
```

或者干脆完全停止服务器再重新启动：

```shell
service nginx stop
service nginx start
```

您可以使用以下命令查看 NGINX 的状态：

```shell
service nginx status
```

NGINX 的日志文件位于 `/var/log/nginx` 文件夹中。

## 虚拟本地地址

Netuno 根据 HTTP 头 `Host` 中地址的前缀来决定由哪个应用处理请求（request），该前缀必须包含 Netuno 应用的准确名称。

因此可以使用一个虚拟地址，仅仅用于告知 Netuno 应当使用正确的应用。

我们有 `我的-应用.local.netu.no`，它始终解析为本地 IP。

> Netuno 中的应用必须是 `我的_应用`，因为 Netuno 不允许在应用名称中使用 `-`，
> 而域名不支持 `_`，因此需替换为 `-`，Netuno 会自动将其转换为 `_`。

作为替代，可以创建一个本地地址，例如 `我的-应用.localhost`，在这种情况下需要将此地址注册为本地主机，您应在 hosts 文件中强制解析该地址，在 Linux 中编辑文件：

```plaintext
/etc/hosts
```

并添加以下行：

```plaintext
127.0.0.1 我的-应用.localhost
```

现在这个本地地址就可以在 NGINX 中使用了。

如果您处于本地开发环境，只需在浏览器中通过以下地址进行验证：

- 通过 NGINX：

```plaintext
http://我的-应用.localhost
```

- 直接访问 Netuno：

```plaintext
http://我的-应用.localhost:9000
```

如果您处于服务器或容器中，可通过终端使用 cURL 命令，例如：

- 通过 NGINX：

```plaintext
curl -v http://我的-应用.localhost:9000
```

- 直接访问 Netuno：

```plaintext
curl -v http://我的-应用.localhost:9000
```

请务必确认，我们提到 `我的-应用` 的地方应替换为您的应用名称。

在本地开发环境中，如果进行了任何修正，尤其是操作系统的 `hosts` 文件，可能需要重启浏览器，因为存在 DNS 解析缓存。

如果需要在 NGINX 中修正某些配置，请不要忘记始终重新加载配置。