---
id: nginx-integration
title: NGINX との統合
sidebar_label: NGINX との統合
---

NGINX は高性能と柔軟性を備えた強力な Web サーバーです。

NGINX との統合により、負荷分散、リバースプロキシ、キャッシュ、セキュリティなどの課題を解決するための手法を活用できます。

![nginx-integration1.png](/docs/assets/integracao-nginx1.png)

## NGINX のインストール

NGINX のインストールはとても簡単で、どの Linux ディストリビューションでもパッケージとして利用できるはずです。

Ubuntu または Debian の場合:

```shell
apt install nginx
```

CentOS、Fedora または RedHat の場合:

```shell
yum install nginx
```

MacOS X では brew と macports で利用できます。

Windows の場合は、次の URL からインストーラーをダウンロードできます: http://nginx.org/en/download.html

## 設定

この例では、Netuno が `/srv/netuno` にインストールされ、実行中であることを前提とします。

NGINX で新しいサイトを設定するには、設定フォルダーに移動します:

* Linux ディストリビューションでは通常 `/etc/nginx` にあります
* brew を使用した MacOS X では `/usr/local/etc/nginx`

`sites-available/netuno` に新しいサイト用の設定ファイルを作成します。

このファイルの内容は次のとおりです:

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

`listen 127.0.0.1:80` の行は、外部 IP と対応するポートに変更できます。

また、`your-netuno-app-name` の部分はアプリ名にする必要があります。たとえば `myapp` です。

> アプリケーション名に `my_app` のように `_` が含まれる場合、これは Netuno がアプリケーション名に `-` を許可していないためです。
> ドメインアドレスでは `_` がサポートされていないため、`-` に置き換える必要があります。Netuno はそれを自動的に `_` に変換し、対応するアプリを見つけます。

`.local.netu.no` は `localhost` へのショートカットです。代わりに `.localhost` を使用することもできます。

これは、Netuno がサブドメインに対応する名前のアプリを自動的に検索するためです。そのため、Netuno に届く `Host` のプレフィックスにアプリケーション名を指定することが非常に重要です。

この例では、Netuno がポート `9000`、パス `/src/netuno` で実行されていることを前提としています。この情報を確認し、必要に応じて調整してください。

Netuno の公開 Web コンテンツは `core/web` フォルダーにありますが、すべてを公開する必要はなく、`netuno` フォルダーのみを公開します。

したがって、直接公開されるのは `core/web/netuno` フォルダーと、対応するアプリケーションの `public` フォルダーだけです。

## 新しいサイトの設定を有効にする

次に、新しいサイトを有効にするため、新しい設定ファイルへのシンボリックリンクを作成する必要があります。

これは、Linux での NGINX のサイト設定方法が、設定ファイルを `sites-available` フォルダーに置き、有効なものを `sites-enabled` フォルダーで定義する仕組みに基づいているためです。

このように、シンボリックリンクの作成は、ファイルの重複を避け、変更を常に 1 つのファイルで行えるようにするために重要です。

Linux では次のようにシンボリックリンクを作成します:

```shell
ln -s /etc/nginx/sites-available/netuno /etc/nginx/sites-enabled/netuno
```

## NGINX 設定のリロード

この設定を反映するには、NGINX の設定をリロードする必要があることを忘れないでください。

リロード:

```shell
nginx -s reload
```

または再起動します:

```shell
killall nginx
nginx
```

またはよりスマートな方法:

```shell
service nginx restart
```

または、サーバーを完全に停止してから再度起動します:

```shell
service nginx stop
service nginx start
```

次のコマンドで NGINX の状態を確認できます:

```shell
service nginx status
```

NGINX のログファイルは `/var/log/nginx` フォルダーにあります。

## 架空のローカルアドレス

Netuno は、HTTP ヘッダーの `Host` に含まれるアドレスのプレフィックスに基づいて、リクエストを処理するアプリケーションを決定します。プレフィックスには Netuno アプリケーションの正確な名前が含まれている必要があります。

そのため、Netuno に正しいアプリケーションを使用するよう指示するためだけに、架空のアドレスを使用できます。

`my-app.local.netu.no` は常にローカル IP に解決されます。

> Netuno のアプリケーションは `my_app` である必要があります。これは Netuno がアプリケーション名に `-` を許可していないためです。
> また、ドメインは `_` をサポートしていないため、`-` に置き換える必要があります。Netuno はそれを自動的に `_` に変換します。

代わりに、たとえば `my-app.localhost` のようなローカルアドレスを作成できます。この場合は、このアドレスをローカルホストとして登録する必要があり、hosts ファイルでアドレスの解決を強制します。Linux の場合は次のファイルを編集します:

```plaintext
/etc/hosts
```

次の行を追加します:

```plaintext
127.0.0.1 my-app.localhost
```

これで、このローカルアドレスを NGINX で使用できます。

ローカル開発環境の場合は、ブラウザーで次のアドレスにアクセスして確認できます:

- NGINX 経由:

```plaintext
http://my-app.localhost
```

- Netuno に直接:

```plaintext
http://my-app.localhost:9000
```

サーバーまたはコンテナでターミナルから操作する場合は、たとえば cURL コマンドを使用します:

- NGINX 経由:

```plaintext
curl -v http://my-app.localhost:9000
```

- Netuno に直接:

```plaintext
curl -v http://my-app.localhost:9000
```

`my-app` と記載している箇所は、常に実際のアプリケーション名に置き換えてください。

ローカル開発環境で、特に OS の `hosts` ファイルを修正した場合、DNS 解決のキャッシュによりブラウザーを再起動する必要があることがあります。

NGINX の設定を修正する必要がある場合は、必ず設定をリロードすることを忘れないでください。