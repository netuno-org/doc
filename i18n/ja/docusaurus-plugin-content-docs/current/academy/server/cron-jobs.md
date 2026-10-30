---
id: cron-jobs
title: Cron Jobs - スケジュールされたサービス
sidebar_label: Cron Jobs
---

## 始める前に

進める前に、_**JavaScript**_ の基本を理解しており、[アカデミー](/docs/academy/overview) で利用できるステップバイステップの手順を通じて Netuno の基本をすでに理解していることを確認してください。

## はじめに

定期的にタスクを実行する必要が生じることはよくあります。つまり、時々、別のシステムにデータを送信したり、別のシステムからデータをインポートしたり、メールを送信したり、データベース内のレコードを検証したり、その他多くの処理が必要になります...

Linux/UNIX/Mac には、有名な設定ファイル `crontab` を備えた Cron サービスがあり、Windows にはタスク マネージャー（_Task Manager_）があります。

Netuno では Cron Jobs がすでに統合されているため、外部設定を避けることができます。

この種の定期処理は Cron Jobs、ポルトガル語では Serviços Agendados と呼ばれます。

Netuno の各アプリケーションは多数の Cron Jobs を持つことができ、Netuno の Cron Jobs は内部サービスや内部 URL だけでなく、外部 URL も実行できます。

> 詳細については、[cron](/docs/library/resources/cron) リソースのドキュメントを確認してください。

## 仕組み

各アプリケーションは、それぞれのスケジュールされたサービス（**cron jobs**）の設定と、対応する実行設定を持っています。

簡単に言うと、各スケジュールされたサービスは個別の **ジョブ** であり、独自の実行設定を持ち、毎分、5 分ごと、毎時、特定の曜日と時刻などに実行できます。また、実行時刻になったときに呼び出される URL も持っています。

> Netuno は、スケジュールされたサービスの実行を管理するために <a href="http://www.quartz-scheduler.org/" target="_blank">Quartz Scheduler</a> ライブラリを使用します。タイミング ルールの設定はこのライブラリに対応しています。

したがって、各ジョブの実行は URL（_Web アドレス、リンク_）の実行を通じて行われ、その URL はアプリケーション自身の内部でも外部でもかまいません。外部リンクの場合は、別のアプリケーションのものでも、インターネット、ネットワーク、またはコンピュータ上の任意の外部 URL でもかまいません。

![Cron の図](/docs/assets/academy/server/cron.svg)

上の図は、Netuno に 2 つのアプリケーションがあり、それぞれが 2 つのジョブ（_スケジュールされたサービス_）を設定しており、それらが任意の設定に応じて異なる時刻に実行されることを示しています。

実行される動作は次のとおりです:

- アプリ 1 が 2 つのジョブを起動します:
  - ジョブ 1: アプリ 1 自身の内部サービス URL を実行します。
  - ジョブ 2: 外部の公開 URL を実行します。
- アプリ 2 が 2 つのジョブを起動します:
  - ジョブ 3: アプリ 2 自身の内部サービス URL を実行します
  - ジョブ 4: アプリ 1 のサービス URL を実行します。

> アプリケーションは、Cron Jobs によって実行されるサービスを次のフォルダ内に配置する必要があります:
> - 📂 `server/services/jobs`

各 URL は HTTP POST メソッドで実行されます。ジョブの設定では、追加パラメータを追加でき、制御されたコンテキスト外で実行されるのを防ぐための秘密キーも追加できます。

## 設定

スケジュールされたサービスの設定は、環境に応じてアプリケーションの設定ファイルで行います。

> 設定は絶対に `*` で始めてはいけません。これは毎秒の実行を引き起こし、処理が 1 秒以上かかる場合に雪だるま式にパフォーマンス問題を引き起こす可能性があります。

これを行うには、開発中のアプリケーション内で環境設定ファイルに移動します。この例では、次の場所にある開発環境ファイルを使用します:

- 📂 `config/_development.json`

Cron の設定がまだ存在しないことを確認し、存在しない場合は設定ファイルの末尾（JSON 形式）に設定パラメータを追加します:

```
{
    ...
    "cron": {
        "secret": "m3u-S3Gred0",
        "jobs": [
            {
                "name": "my-job",
                "config": "0 30 12 * * ?",
                "url": "http://my-app.local.netu.no:9000/services/jobs/my-job"
            },
            {
                "name": "my-job",
                "config": "0 0/2 * * * ?",
                "url": "http://my-app.local.netu.no:9000/services/jobs/my-other-job",
                "params": {
                    "secret": "m3u-Ou7ro-S3Gred0",
                    "type": "customer"
                }
            }
        ]
    },
    ...
}
```

この設定では、最初のジョブは毎日 12 時 30 分に実行されます。

2 番目のジョブは 2 分ごとに実行されます。


##### ジョブ

アプリケーションで使用するスケジュールされたサービスのリストです。配列なので、複数のサービスを設定できます。

##### Secret（シークレット）

サービスを保護するセキュリティキー パラメータで、このパラメータを完全に同じ値で受け取った場合にのみ実行されます。

これは、`jobs` が公開サービスであり、外部から実行されるのを防ぐためにこの保護が含まれているためです。

##### Name（名前）

サービスを内部的に識別する名前で、停止や再開などの管理操作に使用できます。

##### Config（設定）

サービスのタイミング式の設定、つまりスケジュールのルールです。

> 設定は絶対に `*` で始めてはいけません。これは毎秒の実行を引き起こし、処理が 1 秒以上かかる場合に雪だるま式にパフォーマンス問題を引き起こす可能性があります。

サポートされている式を以下で確認してください。

##### URL

定期的に実行されるアドレスです。

##### Params（パラメータ）

実行時に URL に渡されるパラメータです。URL は **HTTP POST** メソッドで実行されるため、上の例の _type_ のような追加パラメータを追加したり、別の秘密キーを指定したりできます。

### Cron 式でサポートされる形式

|フィールド名 | 必須 | 許容値 | 使用可能な特殊文字 |
| ------- |:------:|:-----------:|--------------|
| 秒 | はい | 0-59 | , - * / |
| 分 | はい | 0-59 | , - * / |
| 時 | はい | 0-23 | , - * / |
| 日（月内） | はい | 1-31 | , - * ? / L W |
| 月 | はい | 1-12 または JAN-DEC | , - * / |
| 曜日 | はい | 1-7 または SUN-SAT | , - * ? / L # |
| 年 | いいえ | 空, 1970-2099 | , - * / |

##### Cron 式の例

|式 | 意味 |
| ------- |------|
| 1 * * * * ? | 毎分の1秒に実行。 |
| 0 0 12 * * ? | 毎日12時00分に開始 |
| 0 15 10 ? * * | 毎日10時15分に開始 |
| 0 15 10 * * ? | 毎日10時15分に開始 |
| 0 15 10 * * ? * | 毎日10時15分に開始 |
| 0 15 10 * * ? 2005 | 2005年の間、毎日10時15分に開始 |
| 0 * 14 * * ? | 毎日14時00分から14時59分まで毎分開始 |
| 0 0/5 14 * * ? | 毎日14時00分から14時55分まで5分ごとに開始 |
| 0 0/5 14,18 * * ? | 毎日14時00分から14時55分まで5分ごとに開始。その後、18時00分から18時55分まで5分ごとに開始 |
| 0 0-5 14 * * ? | 毎日14時00分から14時05分まで毎分開始 |
| 0 10,44 14 ? 3 WED | 3月の毎水曜日14時10分と14時44分に開始 |
| 0 15 10 ? * MON-FRI | 平日（月曜日から金曜日）10時15分に開始 |
| 0 15 10 15 * ? | 毎月15日10時15分に開始 |
| 0 15 10 L * ? | 毎月最終日10時15分に開始 |
| 0 15 10 L-2 * ? | 毎月最後から2番目の日10時15分に開始 |
| 0 15 10 ? * 6L | 毎月最後の金曜日10時15分に開始 |
| 0 15 10 ? * 6L 2002-2005 | 2002年、2003年、2004年、2005年の各月の最後の金曜日10時15分に開始 |
| 0 15 10 ? * 6#3 | 毎月第3金曜日10時15分に開始 |
| 0 0 12 1/5 * ? | 毎月1日から5日ごと12時00分に開始 |
| 0 11 11 11 11 ? | 毎年11月11日11時11分に開始 |

> 設定は絶対に `*` で始めてはいけません。これは毎秒の実行を引き起こし、処理が 1 秒以上かかる場合に雪だるま式にパフォーマンス問題を引き起こす可能性があります。

## サービス

スケジュールされたサービスは次のフォルダ内に配置する必要があります:

- 📂 `server/services/jobs`

Netuno はこれらのサービスを自動的に実行し、設定にある値で `secret` パラメータの検証を行います。

> `secret` は、サービスを認証なしで外部から、ただし安全に実行するためのものです。

サービスは、定義されたパラメータ設定に従って定期的に実行されます。

サービス実行を手動でテストするには、サービスの URL を直接実行し、`secret` パラメータを渡すだけです。

たとえば、GET 経由で:

- http://my-app.local.netu.no:9000/services/job/my-job?secret=\*\*\*\*\*

URL の末尾にある `*****` は、設定された実際の `secret` の値に置き換える必要があります。

## 例

次の場所にファイルを作成します:

- 📂 `server/services/jobs/test.js`

このサービス ファイルに次のコードを記述します:
```javascript
_log.info("テストジョブ!")
_out.print("OK")
```

アプリケーションの設定 JSON で、パラメータ設定を次のように調整します:

```json
{
    ...
    "cron": {
        "secret": "m3u-S3Gred0",
        "jobs": [
            {
                "name": "test",
                "config": "0/30 * * * * ?",
                "url": "/services/jobs/test"
            }
        ]
    },
    ...
}
```

ターミナルで Netuno サーバーを実行すると、30 秒ごとに `テストジョブ!` というメッセージが表示され始めます。

ブラウザで次の URL を開くと:

- http://localhost:9000/services/jobs/test?secret=m3u-S3Gred0

`OK` のみが返され、ターミナルには `テストジョブ!` というメッセージが表示されます。

> `development` 環境では `secret` の検証は効果がないため、`secret` を渡さなくても実行でき機能しますが、本番環境などの他の環境では考慮されます。

## タスクが多い場合

多数のスケジュールタスクを作成する必要がある場合は、複数のスケジュールタスクを並列実行するために使用するスレッド数を増やすことをお勧めします。

この設定は Netuno のルートにある `config.js` ファイルで行い、次の例の行を追加します:

```javascript
config.cronThreadCount = 10
```

> デフォルトでは、この設定で許可されるスレッドは 3 つだけです。
> 
> CPU のコア数に応じてスレッド数を増やすように注意してください。

多数の並列スケジュールを実行するために少ないスレッド数を使用すると、スケジュールタスクの実行が停止する可能性があります。

したがって、しばらくするとタスクが停止するような場合は、おそらく並列で実行されるタスクが多すぎるため、スレッド数を増やす必要があります。

## プログラムによる制御

Netuno では、Cron Jobs をプログラムで設定および制御できます。

つまり、コードを通じてすべてを管理できます。

### 新しいタスクの作成

新しいタスクを作成するには、[`_cron.schedule`](/docs/library/resources/cron#schedule) を通じてスケジュールを作成します。

[`_cron.schedule`](/docs/library/resources/cron#schedule) は次のパラメータを受け取ります:

1. タスクの識別キー: `key`。
2. 実行スケジュールの設定。
3. 実行するサービスのアドレス、つまり `URL`。
4. サービスの呼び出し時に送信される追加パラメータ。

```javascript
_cron.schedule(
    'my-task',
    '0 0/60 * * * ?',
    `/services/jobs/product-update`,
    _val.map()
        .set('id', 123)
)
```

アプリケーションの初期化時にタスクを自動的に作成する必要がある場合は、この自動化を次のファイルにコーディングできます:

- `server/core/_init.js`

このファイルは、Netuno サーバーによってアプリケーションが初期化されるたびに実行されます。

### タスクの削除

特定のタスクを削除するには、[`_cron.remove(key)`](/docs/library/resources/cron#remove) を使用します。

ここで `key` はタスクの識別キーです。

例をご覧ください:

```javascript
_cron.remove('my-task')
```

### タスクの一覧表示

[`_cron.schedules()`](/docs/library/resources/cron#schedules) を通じて、設定済みのすべてのタスクを一覧表示できます。

すべてのスケジュールタスクを一覧表示する例:

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>キー</td>`)
_out.println(`  <td>URL</td>`)
_out.println(`  <td>パラメータ</td>`)
_out.println(`  <td>説明</td>`)
_out.println(`  <td>前回の実行</td>`)
_out.println(`  <td>次回の実行</td>`)
_out.println(`  <td>優先度</td>`)
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

### タスクの一時停止

[`_cron.pause(key)`](/docs/library/resources/cron#pause) を通じて、特定のタスクの実行を一時停止できます。

すべてのスケジュールタスクを一時停止する例:

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>キー</td>`)
_out.println(`  <td>停止</td>`)
_out.println('</tr>')
for (const schedule of list) {
    _out.println('<tr>')
    _out.println(`  <td>${schedule.getString('key')}</td>`)
    _out.println(`  <td>${_cron.pause(schedule.getString('key'))}</td>`)
    _out.println('</tr>')
}
_out.println('</table>')
```

> 上の例では `_cron.pause` の使用に注目してください。

### タスクの再開

[`_cron.resume(key)`](/docs/library/resources/cron#resume) を通じて、特定のタスクの実行を再開できます。

すべてのスケジュールタスクを再開し、タスクがいつ実行されるかを表示する例:

```javascript
const list = _cron.schedules()
_out.println('<table>')
_out.println('<tr>')
_out.println(`  <td>キー</td>`)
_out.println(`  <td>再開</td>`)
_out.println(`  <td>次回の実行</td>`)
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

> 上の例では `_cron.resume` の使用に注目してください。