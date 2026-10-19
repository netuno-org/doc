---
id: cron-jobs
title: Cron Jobs - 예약된 서비스
sidebar_label: Cron Jobs
---

## 시작하기 전에

진행하기 전에 _**JavaScript**_ 기초 지식이 있고, [아카데미](/docs/academy/overview)에서 제공하는 단계별 안내로 Netuno 기초를 이미 익혔는지 확인하세요.

## 소개

주기적으로 작업을 실행해야 하는 경우는 흔합니다. 즉, 일정 시간마다 다른 시스템으로 데이터를 보내거나, 다른 시스템에서 데이터를 가져오거나, 이메일을 발송하거나, 데이터베이스의 레코드를 검증하는 등 다양한 작업이 필요할 수 있습니다.

Linux/UNIX/Mac에는 잘 알려진 구성 파일 `crontab`과 함께 Cron 서비스가 있고, Windows에는 작업 관리자(_Task Manager_)가 있습니다.

Netuno에서는 Cron Jobs가 이미 통합되어 있어 외부 구성을 피할 수 있습니다.

이러한 주기적 작업을 Cron Jobs 또는 한국어로 예약된 서비스라고 합니다.

Netuno의 각 애플리케이션은 여러 Cron Jobs를 가질 수 있으며, Netuno의 Cron Jobs는 내부 서비스 및 URL뿐만 아니라 외부 URL도 실행할 수 있습니다.

> 더 많은 정보는 [cron](/docs/library/resources/cron) 리소스 문서를 확인하세요.

## 작동 방식

각 애플리케이션은 자체 예약된 서비스(**cron jobs**)의 구성과 해당 실행 구성을 가집니다.

간단히 말해, 각 예약된 서비스는 별도의 **작업(job)**이며, 자체 실행 구성을 가집니다. 매분, 5분마다, 매시간, 특정 요일과 시간 등에 실행될 수 있고, 실행 시점에 호출될 URL도 가집니다.

> Netuno는 예약된 서비스 실행을 관리하기 위해 <a href="http://www.quartz-scheduler.org/" target="_blank">Quartz Scheduler</a> 라이브러리를 사용합니다. 타이밍 규칙 구성은 이 라이브러리에 따릅니다.

따라서 각 작업의 실행은 URL(_웹 주소, 링크_) 실행을 통해 이루어지며, 해당 URL은 애플리케이션 자체의 내부 URL일 수도 있고 외부 URL일 수도 있습니다. 외부 링크인 경우 다른 애플리케이션의 URL이거나 인터넷, 네트워크, 컴퓨터에 있는 임의의 외부 URL일 수 있습니다.

![Cron 다이어그램](/docs/assets/academy/server/cron.svg)

위 그림은 Netuno에 2개의 애플리케이션이 있고, 각 애플리케이션에 2개의 작업(_예약된 서비스_)이 구성되어 있으며, 이들이 각각의 구성에 따라 서로 다른 시점에 실행되는 것을 보여줍니다.

실행 동작은 다음과 같습니다:

- 앱 1은 2개의 작업을 실행합니다:
  - 작업 1: 앱 1 자체의 내부 서비스 URL을 실행합니다.
  - 작업 2: 공개 외부 URL을 실행합니다.
- 앱 2는 2개의 작업을 실행합니다:
  - 작업 3: 앱 2 자체의 내부 서비스 URL을 실행합니다
  - 작업 4: 앱 1의 서비스 URL을 실행합니다.

> 애플리케이션은 Cron Jobs로 실행되는 서비스를 다음 폴더에 두어야 합니다:
> - 📂 `server/services/jobs`

각 URL은 HTTP POST 메서드로 실행됩니다. 작업 구성에서는 추가 매개변수를 추가할 수 있고, 통제된 컨텍스트 밖에서 실행되는 것을 막기 위한 비밀 키도 지정할 수 있습니다.

## 구성

예약된 서비스 구성은 환경에 따라 애플리케이션 구성 파일에서 설정합니다.

> 구성은 절대 `*`로 시작해서는 안 됩니다. 그렇게 하면 매초 실행되어, 처리 시간이 1초를 넘는 경우 성능 문제가 눈덩이처럼 불어날 수 있습니다.

이를 위해 개발 중인 애플리케이션 내에서 환경 구성 파일로 이동하세요. 이 예시에서는 다음 위치의 개발 환경 파일을 사용합니다:

- 📂 `config/_development.json`

Cron에 대한 구성이 이미 없는지 확인하고, 없다면 구성 파일(JSON 형식) 끝에 구성 매개변수를 추가하세요:

```
{
    ...
    "cron": {
        "secret": "m3u-S3Gred0",
        "jobs": [
            {
                "name": "내-작업",
                "config": "0 30 12 * * ?",
                "url": "http://nae-aep.local.netu.no:9000/services/jobs/내-작업"
            },
            {
                "name": "내-다른-작업",
                "config": "0 0/2 * * * ?",
                "url": "http://nae-aep.local.netu.no:9000/services/jobs/내-다른-작업",
                "params": {
                    "secret": "m3u-Ou7ro-S3Gred0",
                    "유형": "고객"
                }
            }
        ]
    },
    ...
}
```

이 구성에서 첫 번째 작업은 매일 12시 30분에 실행됩니다.

두 번째 작업은 2분마다 실행됩니다.


##### 작업

애플리케이션에 있는 예약된 서비스 목록입니다. 배열이므로 여러 서비스를 구성할 수 있습니다.

##### 비밀 키

서비스를 보호하는 보안 키 매개변수로, 정확히 같은 값을 받았을 때만 실행되도록 합니다.

`jobs`는 공개 서비스이므로 외부에서 실행되는 것을 막기 위해 이 보호 기능을 둡니다.

##### 이름

내부적으로 서비스를 식별하는 이름으로, 중지 및 재개 같은 관리 조작에 사용할 수 있습니다.

##### 구성

서비스의 타이밍 표현식 구성, 즉 예약 규칙입니다.

> 구성은 절대 `*`로 시작해서는 안 됩니다. 그렇게 하면 매초 실행되어, 처리 시간이 1초를 넘는 경우 성능 문제가 눈덩이처럼 불어날 수 있습니다.

아래에서 지원되는 표현식을 확인하세요.

##### URL

주기적으로 실행될 주소입니다.

##### 매개변수

실행 시 URL로 전달되는 매개변수입니다. URL은 **HTTP POST** 메서드로 실행되므로 위 예시의 _유형_처럼 추가 매개변수를 넣거나 다른 비밀 키를 지정할 수도 있습니다.

### 지원되는 Cron 표현식 형식

|필드 이름 | 필수 | 허용되는 값 | 허용되는 특수 문자 |
| ------- |:------:|:-----------:|--------------|
| 초 | 예 | 0-59 | , - * / |
| 분 | 예 | 0-59 | , - * / |
| 시 | 예 | 0-23 | , - * / |
| 월의 일자 | 예 | 1-31 | , - * ? / L W |
| 월 | 예 | 1-12 또는 JAN-DEC | , - * / |
| 요일 | 예 | 1-7 또는 SUN-SAT | , - * ? / L # |
| 연도 | 아니요 | 비어 있음, 1970-2099 | , - * / |

##### Cron 표현식 예시

|표현식 | 의미 |
| ------- |------|
| 1 * * * * ? | 매분 1초에 실행됩니다. |
| 0 0 12 * * ? | 매일 12:00에 시작합니다 |
| 0 15 10 ? * * | 매일 10:15에 시작합니다 |
| 0 15 10 * * ? | 매일 10:15에 시작합니다 |
| 0 15 10 * * ? * | 매일 10:15에 시작합니다 |
| 0 15 10 * * ? 2005 | 2005년 동안 매일 10:15에 시작합니다 |
| 0 * 14 * * ? | 매일 14:00부터 14:59까지 매분 시작합니다 |
| 0 0/5 14 * * ? | 매일 14:00부터 14:55까지 5분마다 시작합니다 |
| 0 0/5 14,18 * * ? | 매일 14:00부터 14:55까지 5분마다 시작합니다. 이후 18:00부터 18:55까지 5분마다 시작합니다 |
| 0 0-5 14 * * ? | 매일 14:00부터 14:05까지 매분 시작합니다 |
| 0 10,44 14 ? 3 WED | 3월의 매주 수요일 14:10과 14:44에 시작합니다. |
| 0 15 10 ? * MON-FRI | 매주 평일(월요일부터 금요일) 10:15에 시작합니다 |
| 0 15 10 15 * ? | 매월 15일 10:15에 시작합니다 |
| 0 15 10 L * ? | 매월 마지막 날 10:15에 시작합니다 |
| 0 15 10 L-2 * ? | 매월 마지막에서 두 번째 날 10:15에 시작합니다 |
| 0 15 10 ? * 6L | 매월 마지막 금요일 10:15에 시작합니다 |
| 0 15 10 ? * 6L 2002-2005 | 2002년, 2003년, 2004년, 2005년 동안 매월 마지막 금요일 10:15에 시작합니다 |
| 0 15 10 ? * 6#3 | 매월 세 번째 금요일 10:15에 시작합니다 |
| 0 0 12 1/5 * ? | 매월 1일부터 시작하여 5일마다 12:00에 시작합니다. |
| 0 11 11 11 11 ? | 매년 11월 11일 11:11에 시작합니다. |

> 구성은 절대 `*`로 시작해서는 안 됩니다. 그렇게 하면 매초 실행되어, 처리 시간이 1초를 넘는 경우 성능 문제가 눈덩이처럼 불어날 수 있습니다.

## 서비스

예약된 서비스는 다음 폴더에 작성해야 합니다:

- 📂 `server/services/jobs`

Netuno는 이러한 서비스를 자동으로 실행하며, 구성에 있는 값으로 `secret` 매개변수를 검증합니다.

> `secret`은 서비스가 인증 없이 외부에서 실행되더라도 안전하게 실행되도록 합니다.

서비스는 정의된 매개변수 설정에 따라 주기적으로 실행됩니다.

서비스 실행을 수동으로 테스트하려면 서비스 URL을 직접 실행하고 `secret` 매개변수를 전달하면 됩니다.

예를 들어 GET 방식:

- http://nae-aep.local.netu.no:9000/services/job/내-작업?secret=\*\*\*\*\*

URL 끝의 `*****`는 구성된 실제 `secret` 값으로 바꿔야 합니다.

## 예시

다음 위치에 파일을 생성하세요:

- 📂 `server/services/jobs/테스트.js`

이 서비스 파일에 다음 코드를 작성하세요:
```javascript
_log.info("테스트 작업!")
_out.print("확인")
```

애플리케이션의 JSON 구성에서 매개변수 설정을 다음과 같이 조정하세요:

```json
{
    ...
    "cron": {
        "secret": "m3u-S3Gred0",
        "jobs": [
            {
                "name": "테스트",
                "config": "0/30 * * * * ?",
                "url": "/services/jobs/테스트"
            }
        ]
    },
    ...
}
```

터미널에서 Netuno 서버를 실행하면 30초마다 `테스트 작업!` 메시지가 나타나기 시작합니다.

브라우저에서 다음 URL을 열면:

- http://localhost:9000/services/jobs/테스트?secret=m3u-S3Gred0

`확인`만 반환되고, 터미널에는 `테스트 작업!` 메시지가 나타납니다.

> `development` 환경에서는 `secret` 검증이 적용되지 않으므로 `secret`을 전달하지 않고 실행해도 동작합니다. 하지만 프로덕션 같은 다른 환경에서는 검증이 적용됩니다.

## 작업이 많을 때

예약된 작업을 많이 만들어야 할 때는 여러 예약 작업을 병렬로 실행하기 위해 사용되는 스레드 수를 늘리는 것이 좋습니다.

이 구성은 Netuno 루트에 있는 `config.js` 파일에서 다음 예시 줄을 추가하여 설정합니다:

```javascript
config.cronThreadCount = 10
```

> 기본적으로 이 구성은 3개의 스레드만 허용합니다.
> 
> CPU 코어 수에 맞춰 스레드 수를 늘리는 데 주의해야 합니다.

많은 예약 작업을 병렬 실행하는 데 스레드를 너무 적게 사용하면 예약된 작업 실행이 중단될 수 있습니다.

따라서 시간이 지난 뒤 작업이 멈춰 있는 경우가 있다면 너무 많은 작업이 병렬로 실행되고 있을 가능성이 높으므로 스레드 수를 늘려야 합니다.

## 프로그래밍 방식으로

Netuno에서는 Cron Jobs를 프로그래밍 방식으로 구성하고 제어할 수 있습니다.

즉, 코드를 통해 모든 것을 관리할 수 있습니다.

### 새 작업 만들기

새 작업을 만들려면 [`_cron.schedule`](/docs/library/resources/cron#schedule)을 통해 예약을 생성합니다.

[`_cron.schedule`](/docs/library/resources/cron#schedule)은 다음 매개변수를 받습니다:

1. 작업 식별 키: `key`.
2. 실행을 위한 예약 시간 구성.
3. 실행해야 하는 서비스 주소, 즉 `URL`.
4. 서비스 호출 시 전송되는 추가 매개변수.

```javascript
_cron.schedule(
    '내-태스크',
    '0 0/60 * * * ?',
    `/services/jobs/상품-업데이트`,
    _val.map()
        .set('id', 123)
)
```

애플리케이션 초기화 시 작업을 자동으로 생성해야 한다면 이 자동화를 다음 파일에 코딩할 수 있습니다:

- `server/core/_init.js`

이 파일은 Netuno 서버가 애플리케이션을 초기화할 때마다 실행됩니다.

### 작업 제거

특정 작업을 제거하려면 [`_cron.remove(key)`](/docs/library/resources/cron#remove)를 사용합니다.

여기서 `key`는 작업 식별 키입니다.

예시를 보세요:

```javascript
_cron.remove('내-태스크')
```

### 작업 목록 조회

[`_cron.schedules()`](/docs/library/resources/cron#schedules)를 통해 구성된 모든 작업을 나열할 수 있습니다.

예약된 모든 작업을 나열하는 예시:

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>키</td>`)
_out.println(`  <td>URL</td>`)
_out.println(`  <td>매개변수</td>`)
_out.println(`  <td>설명</td>`)
_out.println(`  <td>마지막 실행</td>`)
_out.println(`  <td>다음 실행</td>`)
_out.println(`  <td>우선순위</td>`)
_out.println('</tr>')
for (const schedule of list) {
        _out.println('<tr>')
        _out.println(`  <td>${schedule.getString('key')}</td>`)
        _out.println(`  <td>${schedule.getString('url')}</td>`)
        _out.println(`  <td>${schedule.getValues('params').toJSON()}</td>`)
        _out.println(`  <td>${schedule.get('detail').getDescription()}</td>`)
        _out.println(`  <td>${schedule.get('trigger').getPreviousFireTime()}</td>`)
        _out.println(`  <td>${schedule.get('trigger').getNextFireTime()}</td>`)
        _out.println(`  <td>${schedule.get('trigger').getPriority()}</td>`)
        _out.println('</tr>')
}
_out.println('</table>')
```

### 작업 일시 중지

[`_cron.pause(key)`](/docs/library/resources/cron#pause)를 통해 특정 작업의 실행을 일시 중지할 수 있습니다.

예약된 모든 작업을 일시 중지하는 예시:

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>키</td>`)
_out.println(`  <td>중지됨</td>`)
_out.println('</tr>')
for (const schedule of list) {
    _out.println('<tr>')
    _out.println(`  <td>${schedule.getString('key')}</td>`)
    _out.println(`  <td>${_cron.pause(schedule.getString('key'))}</td>`)
    _out.println('</tr>')
}
_out.println('</table>')
```

> 위 예시에서 `_cron.pause` 사용에 주목하세요.

### 작업 재개

[`_cron.resume(key)`](/docs/library/resources/cron#resume)를 통해 특정 작업의 실행을 재개할 수 있습니다.

예약된 모든 작업을 재개하고 작업이 언제 실행될지 표시하는 예시:

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>키</td>`)
_out.println(`  <td>재개됨</td>`)
_out.println(`  <td>다음 실행</td>`)
_out.println('</tr>')
for (const schedule of list) {
    _out.println('<tr>')
    _out.println(`  <td>${schedule.getString('key')}</td>`)
    _out.println(`  <td>${_cron.resume(schedule.getString('key'))}</td>`)
    _out.println(`  <td>${schedule.get('trigger').getNextFireTime()}</td>`)
    _out.println('</tr>')
}
_out.println('</table>')
```

> 위 예시에서 `_cron.resume` 사용에 주목하세요.