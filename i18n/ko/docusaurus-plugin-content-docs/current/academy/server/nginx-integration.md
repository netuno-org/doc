---
id: nginx-integration
title: NGINX 통합
sidebar_label: NGINX 통합
---

NGINX는 높은 성능과 다재다능함을 보장하는 강력한 웹 서버입니다.

NGINX 통합을 통해 로드 밸런싱, 리버스 프록시, 캐시, 보안 등과 관련된 문제를 해결하기 위해 제공되는 기술을 활용할 수 있습니다.

![nginx-통합1.png](/docs/assets/integracao-nginx1.png)

## NGINX 설치

NGINX를 설치하는 것은 매우 간단하며, 모든 Linux 배포판의 패키지에서 NGINX를 사용할 수 있어야 합니다.

Ubuntu 또는 Debian 배포판에서는:

```shell
apt install nginx
```

CentOS, Fedora 또는 RedHat 배포판에서는:

```shell
yum install nginx
```

MacOS X에서는 brew와 macports에서 사용할 수 있습니다.

Windows의 경우 다음에서 설치 프로그램을 다운로드할 수 있습니다: http://nginx.org/en/download.html

## 구성

이 예제에서는 Netuno가 이미 `/srv/netuno`에 설치되어 실행 중이라고 가정합니다.

NGINX에서 새 사이트를 구성하려면 구성 폴더로 이동하십시오:

* Linux 배포판에서는 일반적으로 `/etc/nginx`에 있습니다.
* brew를 사용하는 MacOS X: `/usr/local/etc/nginx`

새 사이트에 대한 새 구성 파일을 `sites-available/netuno`에 만드십시오.

이 파일의 내용은 다음과 같습니다:

```
server {
    listen 127.0.0.1:80;
    server_name app.nae-domein.com;
    location / {
        proxy_pass http://127.0.0.1:9000;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host nae-netuno-aep-ireum.local.netu.no;
    }
    location /netuno {
        root /srv/netuno/core/web;
    }

    location /public {
        root /srv/netuno/apps/nae-netuno-aep-ireum;
    }
}
```

`listen 127.0.0.1:80`이라고 표시된 줄을 외부 IP와 해당 포트로 변경할 수 있습니다.

그리고 `nae-netuno-aep-ireum` 부분은 예를 들어 `naeapp`과 같이 앱 이름이어야 합니다.

> 애플리케이션 이름에 `_`가 포함된 경우(예: `nae_app`)는 Netuno가 애플리케이션 이름에 `-`를 허용하지 않기 때문입니다.
> 따라서 도메인 주소에서는 `_`가 지원되지 않으므로 `-`로 대체해야 하며, Netuno가 이를 자동으로 `_`로 변환하여 해당 앱을 찾습니다.

`.local.netu.no`는 `localhost`에 대한 바로 가기이며, 대안으로 `.localhost`를 사용할 수 있습니다.

Netuno는 하위 도메인에 해당하는 이름의 앱을 자동으로 찾기 때문입니다. 따라서 Netuno에 도달하는 `Host`의 접두사에 애플리케이션 이름을 지정하는 것이 매우 중요합니다.

이 예제에서는 Netuno가 `9000` 포트와 `/src/netuno` 경로에서 실행 중이라고 가정합니다. 이 정보를 확인하고 필요한 경우 조정하십시오.

Netuno의 공개 웹 콘텐츠는 `core/web` 폴더에 있지만 모두 노출해서는 안 되며 `netuno` 폴더만 노출해야 합니다.

따라서 직접 노출되는 폴더는 `core/web/netuno` 폴더와 해당 애플리케이션의 `public` 폴더뿐입니다.

## 새 사이트 구성 활성화

이제 새 사이트를 활성화하려면 새 구성 파일에 대한 심볼릭 링크를 만들어야 합니다.

Linux에서 NGINX의 사이트 구성 방식은 구성 파일을 `sites-available` 폴더에 두고, 활성화된 항목은 `sites-enabled` 폴더에 정의하는 방식이기 때문입니다.

따라서 심볼릭 링크를 만드는 것은 파일 중복을 방지하고 모든 변경 사항이 단일 파일에서 이루어지도록 보장하는 데 중요합니다.

Linux에서는 다음과 같이 심볼릭 링크를 만듭니다:

```shell
ln -s /etc/nginx/sites-available/netuno /etc/nginx/sites-enabled/netuno
```

## NGINX 구성 다시 로드

이 구성이 적용되려면 NGINX 구성을 다시 로드해야 합니다.

다시 로드:

```shell
nginx -s reload
```

또는 재시작하십시오:

```shell
killall nginx
nginx
```

또는 더 우아한 방법으로:

```shell
service nginx restart
```

또는 서버를 완전히 중지한 후 다시 시작하십시오:

```shell
service nginx stop
service nginx start
```

다음 명령으로 NGINX 상태를 확인할 수 있습니다:

```shell
service nginx status
```

NGINX 로그 파일은 `/var/log/nginx` 폴더에 있습니다.

## 가상 로컬 주소

Netuno는 HTTP 헤더의 `Host`에 있는 주소 접두사를 기준으로 요청(request)을 처리할 애플리케이션을 결정하며, 접두사에는 Netuno 애플리케이션의 정확한 이름이 포함되어야 합니다.

따라서 Netuno에 올바른 애플리케이션을 사용해야 함을 알리기 위해 가상 주소를 사용할 수 있습니다.

`nae-app.local.netu.no`가 있으며, 이는 항상 로컬 IP로 확인됩니다.

> Netuno의 애플리케이션은 `nae_app`이어야 합니다. Netuno는 애플리케이션 이름에 `-`를 허용하지 않으며,
> 도메인은 `_`를 지원하지 않으므로 `-`로 대체해야 하고, Netuno가 이를 자동으로 `_`로 변환합니다.

대안으로 `nae-app.localhost`와 같은 로컬 주소를 만들 수 있습니다. 이 경우 이 주소를 로컬 호스트로 등록해야 하며, hosts 파일에서 주소 확인을 강제해야 합니다. Linux의 경우 다음 파일을 편집하십시오:

```plaintext
/etc/hosts
```

그리고 다음 줄을 추가하십시오:

```plaintext
127.0.0.1 nae-app.localhost
```

이제 이 로컬 주소를 NGINX에서 사용할 수 있습니다.

로컬 개발 환경에 있는 경우 브라우저에서 다음 주소로 확인하면 됩니다:

- NGINX를 통해:

```plaintext
http://nae-app.localhost
```

- Netuno에 직접:

```plaintext
http://nae-app.localhost:9000
```

서버나 컨테이너에서 터미널을 통해 작업하는 경우 cURL 명령을 사용하십시오. 예:

- NGINX를 통해:

```plaintext
curl -v http://nae-app.localhost:9000
```

- Netuno에 직접:

```plaintext
curl -v http://nae-app.localhost:9000
```

항상 `nae-app`이라고 언급된 부분이 애플리케이션 이름이어야 함을 확인하십시오.

로컬 개발 환경에서 운영 체제의 `hosts` 파일 등을 수정한 경우 DNS 확인 캐시 때문에 브라우저를 재시작해야 할 수 있습니다.

NGINX에서 구성을 수정해야 하는 경우 항상 구성을 다시 로드하는 것을 잊지 마십시오.