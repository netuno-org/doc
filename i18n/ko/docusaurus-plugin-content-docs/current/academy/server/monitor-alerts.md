---
id: monitor-alerts
title: 모니터링 및 알림
sidebar_label: 모니터링 및 알림
---

서버 하드웨어 사용량에 대한 알림 체계입니다.

## 소개

Netuno 서버에는 소프트웨어 시스템이 하드웨어 사용량에 미치는 영향을 분석할 수 있는 성능 모니터링 메커니즘이 내장되어 있습니다.

모니터링을 통해 앱은 주의가 필요한 수준에 도달했을 때 알림을 보내는 알림 규칙을 구현할 수 있습니다.

모니터링 및 알림은 Netuno 서버 프로세스 자체의 성능 데이터뿐만 아니라 실행 중인 컴퓨터의 전체 시스템에 대해서도 수행됩니다.

따라서 완전한 모니터링과 알림 체계를 구현할 수 있습니다.

## 구성

전역 구성에서는 Netuno의 일반 로그에 데이터 표시를 활성화하고 성능 지표 수집 및 분석 실행 간격을 제어할 수 있습니다.

알림 구성은 각 앱에서 수행하며, 애플리케이션별로 여러 알림을 둘 수 있습니다.

### 로그 및 전역 간격

Netuno는 성능 로그를 Netuno 루트 폴더 안의 `logs` 폴더에 저장합니다.

이 `logs` 폴더에서 `stats-년_월_일.json` 파일을 찾을 수 있습니다. 이 파일은 아래에서 설명할 변경 가능한 간격에 따라 항상 자동으로 생성됩니다.

> 파일을 더 쉽게 보려면 선호하는 편집기의 자동 서식을 사용하거나 다음과 같은 온라인 도구를 사용할 수 있습니다.
>
> - http://jsonviewer.stack.hu/
> - https://jsonformatter.org/json-viewer
>
> **Firefox**에서도 열 수 있으며, Firefox는 뛰어난 서식을 제공합니다.

##### 로그 및 전역 간격 구성

성능 데이터를 일반 로그(`logs/netuno.log`)와 **콘솔**에 표시하려면 Netuno 폴더 루트에 있는 `config.js` 파일을 편집하세요.

다음 줄이 없다면 추가하세요.

```
config.monitorLog = true
```

기본 간격인 **60초**를 변경할 수도 있습니다. 즉, 정보는 1분마다 로그에 표시됩니다. 이를 위해 아래 코드 줄도 추가하고 초 값을 원하는 시간으로 변경하세요.

```
config.monitorInterval = 60
```

> 이 간격은 전역이며 앱 알림에 구성된 간격에 영향을 줍니다. 앱 알림 간격은 이 전역 간격보다 작을 수 없습니다.

적용하려면 Netuno 서버를 **재시작**하세요.

이제 콘솔에 다음과 같은 모니터링 정보가 표시되기 시작합니다.

```
2020-11-17 14:56:08,109 INFO  [Thread-13] cli.Monitor - MONITOR
CPU Load: 
	System: 19.1% (+19.1%)
	Process: 3.9% (+3.9%)
Memory: 
	System: 
		Used: 9,525.9MB (58.1% +148.0MB)
		Free: 6,858.1MB (41.9% -148.0MB)
	Process: 
		Total: 384.0MB (9.4% +126.0MB)
		Used: 129.6MB (3.2% +18.9MB)
		Free: 254.4MB (6.2% +107.1MB)
		GC: false
Disk: 
	Used: 465,047.8MB (97.5% +21.3MB)
	Free: 11,854.3MB (2.5% -21.3MB)
```

### 앱의 알림

알림은 애플리케이션에서 구성하므로 앱 구성을 편집하세요.

즉, 애플리케이션 내의 `config` 폴더에서 환경 구성 파일인 다음 파일에 추가합니다.

- _development.json
- _production.json

모니터링 알림 구성을 추가하세요.

```
...
    "monitor": {
        "alerts": [
            {
                "name": "내-알림",
                "url": "http://내-앱.local.netu.no:9000/services/내-알림-서비스"
            }
        ]
    }
...
```

> 가장 단순한 구성입니다.

알림이 필요한 상황이 발생하면 해당 `url`이 호출되고 성능 매개변수가 전달됩니다.

기본적으로 각 알림 유형에는 **1시간** 간격이 있습니다. 따라서 **프로세서**, **메모리** 또는 **디스크**(HD)가 최대 용량의 **90%** 한도를 초과한 경우에만 알림이 발생하며, 1시간이 지나면 또 다른 알림을 보냅니다.

> 여러 알림이 발생하는 상황에서는 간격이 단축됩니다. 예를 들어 메모리 알림이 발생한 뒤 20분이 지났을 때 디스크도 90%를 초과하면 즉시 새 알림이 발생하고 1시간 간격이 다시 시작됩니다.

### 고급 알림

다음은 **프로세서**, **메모리** 또는 **디스크**(HD) 사용량의 간격과 한도를 변경할 수 있는 더 고급 구성입니다.

```
...
    "monitor": {
        "alerts": [
            {
                "name": "내-간단-알림",
                "url": "http://내-앱.local.netu.no:9000/services/내-알림-서비스"
            },
            {
                "name": "내-고급-알림",
                "url": "http://내-앱.local.netu.no:9000/services/내-알림-서비스",
                "enabled": true,
                "interval": 3600,
                "threshold": {
                    "cpu": 90,
                    "memory": 90,
                    "disk": 90
                }
            },
            {
                "name": "내-더-고급-알림",
                "url": "http://내-앱.local.netu.no:9000/services/내-알림-서비스",
                "enabled": true,
                "interval": 3600,
                "threshold": {
                    "cpu": {
                        "system": 90,
                        "process": 90
                    },
                    "memory": {
                        "system": 90,
                        "process": 90
                    },
                    "disk": 90
                }
            }
        ]
    }
...
```

> 위 값은 **기본값**입니다!

##### 이름

알림의 식별 이름입니다.

##### 활성화

알림을 활성화하거나 비활성화합니다. 기본값은 _true_(활성)입니다.

##### 간격

알림 사이의 간격을 **초** 단위로 정의합니다. 기본값은 _3600초_(1시간)입니다.

##### 임계값

CPU, 메모리 및 디스크(HD)의 한도를 정의합니다.

##### CPU

알림이 발생해야 하는 CPU 사용량 한도입니다.

_system_ 및 _process_에 대한 별도 한도도 정의할 수 있습니다.

##### 메모리

알림이 발생해야 하는 메모리 사용량 한도입니다.

_system_ 및 _process_에 대한 별도 한도도 정의할 수 있습니다.

##### 시스템

실행 중인 모든 프로세스를 포함한 운영 체제 전반의 한도입니다.

##### 프로세스

Netuno 서버 프로세스에만 적용되는 한도입니다.

##### 디스크

알림이 발생해야 하는 디스크(HD) 사용량 한도입니다.

## 전송되는 매개변수

어떤 한도가 초과되어 `url`이 호출되면 알림이 발생하며, 하드웨어 사용량의 성능 데이터가 전송됩니다.

`url`은 `POST` 메서드로 실행되며 콘텐츠는 JSON으로 전송됩니다: `Content-Type: application/json`.

알림 `url`로 전송되는 데이터의 JSON 예시:

```
{
    "key": "내-간단-알림",
    "app": "내-앱",
    "hostname": "내-컴퓨터",
    "timezone": "Europe/Lisbon",
    "started": "2020-11-17 14:55:07.682",
    "moment": "2020-11-17 14:56:08.098",
    "before": {
        ...
    },
    "alerts": [
        {
            "threshold": 90,
            "type": "cpu-system"
        },
        {
            "threshold": 90,
            "type": "disk"
        }
    ],
    "cpu": {
        "cores": 4,
        "vcores": 8,
        "load": {
            "system": 0.91311,
            "process": 0.03945,
            "ticks": [ 575084, 0, 260470, 6796463, 0, 0, 0, 0 ],
            "frequency": {
                "average": 2500000000,
                "max": 2500000000
            }
        }
    },
    "memory": {
        "system": {
            "total": 17179869184,
            "used": 9988640768,
            "free": 7191228416
        },
        "process": {
            "total": 402653184,
            "max": 4294967296,
            "used": 135885832,
            "free": 266767352,
            "gc": false
        }
    },
    "disk": {
        "total": 500068036608,
        "used": 487637929984,
        "free": 12430106624
    }
}
```

### 매개변수 설명

##### 키

애플리케이션의 알림 구성에 정의된 이름(키)입니다.

##### 앱

알림이 구성되어 있고 해당 알림 발생을 일으킨 애플리케이션의 이름입니다.

##### 호스트 이름

알림을 발생시키는 Netuno 서버가 실행 중인 컴퓨터의 이름입니다.

##### 시간대

알림을 발생시키는 Netuno 서버가 실행 중인 컴퓨터의 시간대입니다.

##### 시작 시각

Netuno 서버가 시작된 날짜 및 시간입니다.

##### 발생 시각

알림이 생성된 시점의 날짜 및 시간입니다.

##### 이전 알림

이전 알림 정보입니다. JSON 구조는 완전히 동일하지만 이전에 발생한 알림에 대한 데이터를 담고 있습니다.

##### 알림

발생한 알림 목록으로, 알림의 유형(_type_)과 초과된 한도(_threshold_)를 지정합니다.

알림 유형은 다음과 같습니다.

- `cpu-system`: 실행 중인 모든 프로세스를 포함한 컴퓨터 시스템 전체의 CPU 사용량 알림입니다.
- `cpu-process`: Netuno 서버 프로세스의 CPU 사용량 알림입니다.
- `memory-system`: 실행 중인 모든 프로세스를 포함한 컴퓨터 시스템 전체의 메모리 사용량 알림입니다.
- `memory-process`: Netuno 서버 프로세스의 메모리 사용량 알림입니다.
- `disk`: 디스크(HD) 알림입니다.

##### CPU

다음 정보와 함께 전송되는 프로세서 데이터입니다.

- `cores`: 물리 프로세서 수.
- `vcores`: 가상 프로세서(스레드) 수.
- `load`: 프로세서 부하 정보:
  - `system`: 실행 중인 모든 프로세스를 포함한 운영 체제의 처리 부하이며, 값은 **0**(_0%_)에서 **1**(_100%_) 사이입니다.
  - `process`: Netuno 서버의 처리 부하이며, 값은 **0**(_0%_)에서 **1**(_100%_) 사이입니다.
  - `ticks`: 시스템 전반의 프로세서 부하를 8개 요소의 배열로 반환하며, 다음 상태에서 소비된 시간을 밀리초 단위로 나타냅니다: _User_(0), _Nice_(1), _System_(2), _Idle_(3), _IOwait_(4), _Hardware interrupts (IRQ)_(5), _Software interrupts/DPC (SoftIRQ)_(6), _Steal_(7).
  - `frequency`: 프로세서의 최대 주파수(`max`)와 모든 코어에서 사용된 평균 주파수(`average`)입니다. 값은 _헤르츠_ 단위이므로 2500000000 _Hz_는 2.5 _GHz_에 해당합니다.

> 주파수 나누기는 다음과 같이 수행됩니다.
> 
> 2500000000 (_Hz_) / 1000 (_KHz_) / (1000) (_MGz_) / 1000 (_GHz_) = 2.5 _GHz_
>
> Hz(_헤르츠_), KHz(_킬로헤르츠_), MGz(_메가헤르츠_), GHz(_기가헤르츠_)

##### 메모리

다음 정보와 함께 전송되는 메모리 데이터입니다.

- `system`: 실행 중인 모든 프로세스를 포함한 운영 체제의 메모리 사용량 정보입니다.
  - `total`: 컴퓨터의 전체 메모리.
  - `used`: 사용 중으로 할당된 메모리.
  - `free`: 사용 가능한 여유 메모리.
- `process`: Netuno 서버 프로세스의 메모리 사용량 데이터입니다.
  - `max`: Netuno가 사용할 수 있는 최대 메모리 양.
  - `total`: 예약(할당)된 총 메모리로, 사용 중인 메모리와 "여유" 메모리를 포함합니다.
  - `used`: 실제로 사용 중인 메모리 양.
  - `free`: 사용 가능한 여유(예약된) 메모리 양.
  - `gc`: _garbage collector_(메모리 가비지 수집기) 실행이 호출되었는지 여부.

> 값은 바이트 단위이므로 17179869184바이트는 16기가바이트에 해당합니다.
>
> 나누기는 다음과 같이 수행됩니다.
>
> 17179869184 _B_ / 1024 (_KB_) / 1024 (_MB_) / 1024 (_GB_) = 16 _GB_ 
>
> B(_바이트_), KB(_킬로바이트_), MB(_메가바이트_), GB(_기가바이트_)

##### 디스크

다음 정보와 함께 전송되는 하드 디스크(HD) 사용량 데이터입니다.

- `total`: 디스크의 전체 크기.
- `used`: 디스크에서 사용된 공간의 양.
- `free`: 디스크에서 사용 가능한 공간의 양.

> 값은 바이트 단위이므로 500068036608바이트는 465.72기가바이트에 해당합니다.
>
> 나누기는 다음과 같이 수행됩니다.
>
> 500068036608 _B_ / 1024 (_KB_) / 1024 (_MB_) / 1024 (_GB_) = 465.72 _GB_ 
>
> B(_바이트_), KB(_킬로바이트_), MB(_메가바이트_), GB(_기가바이트_)

## 알림 서비스 예시

Netuno 서비스는 알림의 `url`로 사용할 수 있습니다.

이메일, SMS를 통한 알림 전송을 구현하거나 정보를 데이터베이스에 저장할 수도 있습니다.

또한 모든 유형의 `url`을 사용할 수 있으므로 NodeJS, PHP, .NET, Rails, Laravel, Sails 등 다른 기술로도 알림을 발생시킬 수 있습니다...

Netuno의 경우 [이메일 발송](/docs/academy/server/services/sending-emails) 튜토리얼의 안내에 따라 이메일 전송 서비스를 구현할 수 있습니다.

다음은 모니터링 알림에 맞춘 완전한 구현 예시입니다.

시작하기 전에 애플리케이션 구성에 SMTP 구성이 있고 모니터링 구성도 있는지 확인하세요. 예:

```
...
    "smtp": {
        "alert": {
            "enabled": true,
            "host": "내.서버.com",
            "port": 465,
            "ssl": true,
            "subjectPrefix": "알림: ",
            "from": "noreply@내.도메인.com",
            "to": "info@내.도메인.com",
            "username": "noreply@내.도메인.com",
            "password": "S3gr3d0"
        }
    },
    ...
    "monitor": {
        "alerts": [
            {
                "name": "이메일-알림",
                "url": "http://내-앱.local.netu.no:9000/services/monitor/alert"
            }
        ]
    }
...
```

> 특히 강조된 값의 매개변수를 조정해야 합니다.

알림 서비스는 `server/services/monitor/alert.js`에 다음 코드로 둘 수 있습니다.

```
_log.info("모니터 알림 정보:\n"+ _req.toJSON())

const cpu = _req.getValues("cpu")
const memory = _req.getValues("memory")
const disk = _req.getValues("disk")

const cpuLoadSystem = Math.round(cpu.getValues("load").getFloat("system") * 100)
const cpuLoadProcess = Math.round(cpu.getValues("load").getFloat("process") * 100)
const memorySystemFree = Math.round(memory.getValues("system").getLong("free") / 1024 / 1024)
const memoryProcessFree = Math.round(memory.getValues("process").getLong("free") / 1024 / 1024)
const diskFree = Math.round(disk.getLong("free") / 1024 / 1024)

let subjectTypes = ""
let htmlInfos = ""

for (const alertType of _req.getValues("alerts")) {
    if (subjectTypes != "") {
        subjectTypes += ", "
    }
    if (alertType.getString("type") == 'cpu-system') {
        subjectTypes += "시스템 CPU"
        htmlInfos += `<p><b>시스템</b> 프로세서가 <b>${cpuLoadSystem}%</b>에 도달했습니다.</p>`
    }
    if (alertType.getString("type") == 'cpu-process') {
        subjectTypes += "프로세스 CPU"
        htmlInfos += `<p><b>프로세스</b> 프로세서가 <b>${cpuLoadProcess}%</b>에 도달했습니다.</p>`
    }
    if (alertType.getString("type") == 'memory-system') {
        subjectTypes += "시스템 메모리"
        htmlInfos += `<b>시스템</b> 메모리가 <b>${memorySystemFree} MB</b>만 남았습니다.`
    }
    if (alertType.getString("type") == 'memory-process') {
        subjectTypes += "프로세스 메모리"
        htmlInfos += `프로세스 메모리가 <b>${memoryProcessFree} MB</b>만 남았습니다.`
    }
    if (alertType.getString("type") == 'disk') {
        subjectTypes += "디스크"
        htmlInfos += `디스크가 <b>${diskFree} MB</b>만 남았습니다.`
    }
}

const smtp = _smtp.init("alert")

smtp.subject += `${_req.getString("hostname")} - ${subjectTypes}`

smtp.html += `<h2>${_req.getString("hostname")}</h2>${htmlInfos}`

smtp.text = "이 이메일의 HTML 콘텐츠 버전에서 정보를 확인하세요."

smtp.send()
```

> 알림이 포함된 메일이 전송됩니다.

이 경우 디스크 공간 상황만 알릴 필요가 있었으며, 수신된 이메일에서 볼 수 있습니다.

![메일](/docs/assets/library/advanced/monitor-alerts-mail-pt.png)

**SMS** 전송을 구현하려면 원격 REST API 통합이 포함된 **데모** 애플리케이션에 예제가 있으며, 선호하는 SMS 플랫폼과 통합할 수 있습니다.