---
id: monitor-alerts
title: モニタリングとアラート
sidebar_label: モニタリングとアラート
---

サーバのハードウェア使用状況に関するアラート。

## はじめに

Netuno サーバには、ソフトウェアシステムがハードウェア消費に与える影響を分析できるパフォーマンス監視メカニズムが組み込まれています。

監視により、アプリは、何かが注意を要する水準に達したときに通知を行うアラートルールを実装できます。

監視とアラートは、Netuno サーバプロセス自体のパフォーマンスデータだけでなく、実行中のコンピュータシステム全体に対しても行われます。

これにより、アラートを備えた完全な監視を実現できます。

## 設定

一般設定では、Netuno の一般ログにデータを表示するかどうかを有効にし、パフォーマンス指標の収集と分析の実行間隔を制御できます。

アラートの設定は各アプリで行い、アプリケーションごとに複数のアラートを持てます。

### ログと全体間隔

Netuno はパフォーマンスログを、Netuno のルートフォルダ内にある `logs` フォルダに保存します。

この `logs` フォルダには `stats-年_月_日.json` ファイルがあり、これらは後述のように変更可能な間隔に従って常に自動生成されます。

> ファイルを見やすくするには、お好みのエディタの自動整形機能や、次のようなオンラインツールを利用できます:
>
> - http://jsonviewer.stack.hu/
> - https://jsonformatter.org/json-viewer
>
> **Firefox** で開くこともでき、非常にきれいに整形されます。

##### ログと全体間隔の設定

パフォーマンスデータを一般ログ（`logs/netuno.log`）と **コンソール** に表示するには、Netuno フォルダのルートにある `config.js` ファイルを編集します。

次の行がまだない場合は追加してください:

```
config.monitorLog = true
```

また、デフォルトの間隔 **60秒** を変更することもできます。つまり、情報は1分ごとにのみログに出力されます。そのためには、以下のコード行も追加し、秒の値を希望する時間に変更してください:

```
config.monitorInterval = 60
```

> この間隔は全体設定であり、アプリのアラートで設定された間隔に影響します。アラートの間隔がこの全体間隔より短くなることはありません。

Netuno サーバを**再起動**すると反映されます。

すると、次のようにモニタリング情報がコンソールに表示され始めます:

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

### アプリでのアラート

アラートはアプリケーションで設定するため、アプリの設定を編集します。

つまり、アプリケーション内の `config` フォルダにある環境設定ファイル、たとえば次のファイルです:

- _development.json
- _production.json

モニタリングアラートの設定を追加します:

```
...
    "monitor": {
        "alerts": [
            {
                "name": "my-alert",
                "url": "http://MY-APP.local.netu.no:9000/services/my-alert-service"
            }
        ]
    }
...
```

> これは最も簡略化した設定です。

アラートが必要な状況になると、その `url` が呼び出され、パフォーマンスパラメータが渡されます。

デフォルトでは、アラートの種類ごとに **1時間** の間隔があります。したがって、**CPU**、**メモリ**、または **ディスク**（HD）が最大容量の **90%** を超えた場合にのみアラートが実行され、1時間が経過すると再びアラートが送信されます。

> 複数のアラートがある場合、間隔は短縮されます。たとえば、メモリのアラートが発生してから20分後にディスクも90%を超えた場合、直ちに新しいアラートが発生し、1時間の間隔が最初からやり直されます。

### 高度なアラート

以下は、間隔と **CPU**、**メモリ**、**ディスク**（HD）の消費上限を変更できる、より高度な設定です:

```
...
    "monitor": {
        "alerts": [
            {
                "name": "my-simple-alert",
                "url": "http://MY-APP.local.netu.no:9000/services/my-alert-service"
            },
            {
                "name": "my-advanced-alert",
                "url": "http://MY-APP.local.netu.no:9000/services/my-alert-service",
                "enabled": true,
                "interval": 3600,
                "threshold": {
                    "cpu": 90,
                    "memory": 90,
                    "disk": 90
                }
            },
            {
                "name": "my-more-advanced-alert",
                "url": "http://MY-APP.local.netu.no:9000/services/my-alert-service",
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

> 上記の値は **デフォルト値** です！

##### Name

アラートを識別する名前。

##### Enabled

アラートを有効または無効にします。デフォルトは _true_（有効）です。

##### Interval

アラート間の間隔を **秒** 単位で定義します。デフォルトは _3600秒_（1時間）です。

##### Threshold

CPU、メモリ、ディスク（HD）の上限を定義します。

##### CPU

アラートを発生させる CPU 消費量の上限。

_system_ と _process_ に固有の上限を定義することもできます。

##### Memory

アラートを発生させるメモリ消費量の上限。

_system_ と _process_ に固有の上限を定義することもできます。

##### System

実行中のすべてのプロセスを含む、オペレーティングシステム全体の上限です。

##### Process

Netuno サーバのプロセスのみの上限です。

##### Disk

アラートを発生させるディスク（HD）消費量の上限。

## 送信されるパラメータ

`url` が呼び出されるのは、いずれかの上限を超えたためにアラートが発生したときであり、その際にハードウェア消費のパフォーマンスデータが送信されます。

`url` は `POST` メソッドで実行され、内容は JSON で送信されます: `Content-Type: application/json`。

アラートの `url` に送信されるデータの JSON 例:

```
{
    "key": "my-simple-alert",
    "app": "my-app",
    "hostname": "my-computer",
    "timezone": "Asia/Tokyo",
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

### パラメータの説明

##### Key

アプリケーションのアラート設定で定義される名前（キー）。

##### App

アラートが設定され、その発生元となるアプリケーション名。

##### Hostname

アラートを発生させる Netuno サーバが実行されているコンピュータ名。

##### Timezone

アラートを発生させる Netuno サーバが実行されているコンピュータのタイムゾーン。

##### Started

Netuno サーバが起動した日時。

##### Moment

アラートが生成された瞬間の日時。

##### Before

前回のアラート情報。JSON 構造はまったく同じですが、以前に発生したアラートに関するデータが入ります。

##### Alerts

発生したアラートのリストで、アラートの種類（_type_）と超過した上限（_threshold_）を指定します。

アラートの種類は次のとおりです:

- `cpu-system`: コンピュータのシステム全体で実行中のすべてのプロセスを含む CPU 消費のアラート。
- `cpu-process`: Netuno サーバプロセスの CPU 消費のアラート。
- `memory-system`: コンピュータのシステム全体で実行中のすべてのプロセスを含むメモリ消費のアラート。
- `memory-process`: Netuno サーバプロセスのメモリ消費のアラート。
- `disk`: ディスク（HD）のアラート。

##### CPU

次の情報とともに送信されるプロセッサのデータです:

- `cores`: 物理プロセッサの数。
- `vcores`: 仮想プロセッサ（スレッド）の数。
- `load`: プロセッサ負荷の情報:
  - `system`: オペレーティングシステム全体の処理負荷（すべてのプロセスを含む）。値は **0**（_0%_）から **1**（_100%_）の間です。
  - `process`: Netuno サーバの処理負荷。値は **0**（_0%_）から **1**（_100%_）の間です。
  - `ticks`: システム全体のプロセッサ負荷を8要素の配列で返します。各要素は次の状態で消費された時間をミリ秒で表します: _User_（0）、_Nice_（1）、_System_（2）、_Idle_（3）、_IOwait_（4）、_Hardware interrupts (IRQ)_（5）、_Software interrupts/DPC (SoftIRQ)_（6）、_Steal_（7）。
  - `frequency`: プロセッサの最大周波数（`max`）と、すべてのコア間で使用された平均周波数（`average`）。値は _ヘルツ_ 単位なので、2500000000 _Hz_ は 2.5 _GHz_ に相当します。

> 周波数の換算は次のとおりです:
> 
> 2500000000 (_Hz_) / 1000 (_KHz_) / (1000) (_MGz_) / 1000 (_GHz_) = 2.5 _GHz_
>
> Hz（_Hertz_）、KHz（_Kilohertz_）、MGz（_Megahertz_）、GHz（_Gigahertz_）

##### Memory

次の情報とともに送信されるメモリのデータです:

- `system`: オペレーティングシステム全体（すべてのプロセスを含む）のメモリ消費情報。
  - `total`: コンピュータの総メモリ。
  - `used`: 使用中として割り当てられたメモリ。
  - `free`: 利用可能な空きメモリ。
- `process`: Netuno サーバプロセスのメモリ使用データ。
  - `max`: Netuno が使用できる最大メモリ量。
  - `total`: 予約（割り当て）されたメモリの合計。使用中メモリと「空き」メモリを含みます。
  - `used`: 実際に使用されているメモリ量。
  - `free`: 使用可能な空き（予約済み）メモリ量。
  - `gc`: _ガベージコレクタ_（メモリの不要領域を解放する処理）が実行されたかどうか。

> 値はバイト単位です。たとえば 17179869184 バイトは 16 ギガバイトに相当します。
>
> 換算方法:
>
> 17179869184 _B_ / 1024 (_KB_) / 1024 (_MB_) / 1024 (_GB_) = 16 _GB_ 
>
> B（_Bytes_）、KB（_Kilobytes_）、MB（_Megabytes_）、GB（_Gigabytes_）

##### Disk

次の情報とともに送信されるハードディスク（HD）の使用データです:

- `total`: ディスクの総容量。
- `used`: ディスクで使用されている領域の量。
- `free`: ディスクで利用可能な領域の量。

> 値はバイト単位です。たとえば 500068036608 バイトは 465.72 ギガバイトに相当します。
>
> 換算方法:
>
> 500068036608 _B_ / 1024 (_KB_) / 1024 (_MB_) / 1024 (_GB_) = 465.72 _GB_ 
>
> B（_Bytes_）、KB（_Kilobytes_）、MB（_Megabytes_）、GB（_Gigabytes_）

## アラートサービスの例

Netuno のサービスをアラートの `url` として使用できます。

アラートの送信は、メール、SMS、あるいは情報をデータベースに保存する形で実装できます。

任意の種類の `url` を使用できるため、NodeJS、PHP、.NET、Rails、Laravel、Sails などの他の技術にアラートを送信することもできます。

Netuno の場合は、[メール送信](/docs/academy/server/services/sending-emails) のチュートリアルの手順に従って、メール送信用のサービスを実装できます。

以下は、モニタリングのアラート向けに調整した完全な実装例です。

開始する前に、アプリケーション設定に SMTP 設定とモニタリング設定があることを確認してください。例:

```
...
    "smtp": {
        "alert": {
            "enabled": true,
            "host": "MY.SERVER.com",
            "port": 465,
            "ssl": true,
            "subjectPrefix": "アラート: ",
            "from": "noreply@MY.DOMAIN.com",
            "to": "info@MY.DOMAIN.com",
            "username": "noreply@MY.DOMAIN.com",
            "password": "S3gr3d0"
        }
    },
    ...
    "monitor": {
        "alerts": [
            {
                "name": "email-alert",
                "url": "http://MY-APP.local.netu.no:9000/services/monitor/alert"
            }
        ]
    }
...
```

> パラメータ、特に値の中で大文字になっている箇所を調整してください。

アラートサービスは `server/services/monitor/alert.js` に置くことができ、コードは次のとおりです:

```
_log.info("モニターアラート情報:\n"+ _req.toJSON())

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
        subjectTypes += "システムCPU"
        htmlInfos += `<p><b>システム</b>のプロセッサが <b>${cpuLoadSystem}%</b> に達しました</p>`
    }
    if (alertType.getString("type") == 'cpu-process') {
        subjectTypes += "プロセスCPU"
        htmlInfos += `<p><b>プロセス</b>のプロセッサが <b>${cpuLoadProcess}%</b> に達しました</p>`
    }
    if (alertType.getString("type") == 'memory-system') {
        subjectTypes += "システムメモリ"
        htmlInfos += `<b>システム</b>のメモリは残り <b>${memorySystemFree} MB</b> のみです。`
    }
    if (alertType.getString("type") == 'memory-process') {
        subjectTypes += "プロセスメモリ"
        htmlInfos += `プロセスのメモリは残り <b>${memoryProcessFree} MB</b> のみです。`
    }
    if (alertType.getString("type") == 'disk') {
        subjectTypes += "ディスク"
        htmlInfos += `ディスクは残り <b>${diskFree} MB</b> のみです。`
    }
}

const smtp = _smtp.init("alert")

smtp.subject += `${_req.getString("hostname")} - ${subjectTypes}`

smtp.html += `<h2>${_req.getString("hostname")}</h2>${htmlInfos}`

smtp.text = "このメールのHTML版に情報があります。"

smtp.send()
```

> アラートを含むメールが送信されます。

このケースでは、受信したこのメールでわかるように、ディスク容量の状況だけをアラートする必要がありました:

![メール](/docs/assets/library/advanced/monitor-alerts-mail-pt.png)

**SMS** 送信を実装するには、**デモ**アプリケーションにリモート REST API との連携例があり、お好みの SMS プラットフォームと統合できます。