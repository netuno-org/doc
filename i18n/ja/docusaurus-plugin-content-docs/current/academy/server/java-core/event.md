---
id: event
title: イベント
sidebar_label: イベント
sidebar_position: 6
---

Netuno では、実行の特定のフェーズでイベントを注入できます。
たとえば、setup がデータベースを構築する直前に実行されるイベントを注入できます
（これは `netuno/apps/my_app/server/setup/_start.js` でスクリプトを定義するのとほぼ同じように機能します）。
または、データベース構築の処理が完了した直後に実行されるイベントを注入することもできます
（これは `netuno/apps/my_app/server/setup/_end.js` に相当します）。

そのためには、`org.netuno.tritao.event.EventBase` クラスを拡張する必要があります。また、Java Core のサービスとリソースに関する以前のチュートリアルで定義したものと同じパッケージを定義します。

```java
package org.netuno.addon.calc.event;

import org.netuno.tritao.event.EventBase;

public class EventSetupStart extends EventBase {
    // ...
}
```

次に、スーパークラス `EventBase` のコンストラクタを使用してイベントを初期化するコンストラクタを作成します:

```java
package org.netuno.addon.calc.event;

import org.netuno.proteu.Proteu;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.hili.Hili;

public class EventSetupStart extends EventBase {

    public EventSetupStart(Proteu proteu, Hili hili) {
        // ...
    }
}
```

`Proteu` 型と `Hili` 型のオブジェクトに加えて、スーパークラスのコンストラクタにイベントの種類を渡す必要があります。イベントの種類は `import org.netuno.tritao.event.EventId` で定義されています。
また、イベントの実行順序を表す整数をコンストラクタに渡す必要があります。
このように、同じ種類のイベントに対して複数のイベントを登録すると、どのイベントが最初に実行され、どれがその直後に実行されるか、といったことを制御できます。
`100` のような数値は、その前に実行される他のイベント（たとえば `50`）を配置できるため便利です。

```java
package org.netuno.addon.calc.event;

import org.netuno.proteu.Proteu;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.hili.Hili;
import org.netuno.tritao.event.EventId;

public class EventSetupStart extends EventBase {

    public EventSetupStart(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.SETUP_START, 100);
    }
}
```

参考までに、利用可能なすべてのイベント種別の完全なリストは次の場所にあります:

- [org.netuno.tritao.event.EventId](https://github.com/netuno-org/platform/blob/main/netuno.tritao/src/main/java/org/netuno/tritao/event/EventId.java)

コードに戻り、`run` 関数をオーバーライドして仕上げます:

```java
package org.netuno.addon.calc.event;

import org.netuno.proteu.Proteu;
import org.netuno.psamata.Values;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.event.EventId;
import org.netuno.tritao.hili.Hili;

public class EventSetupStart extends EventBase {

    public EventSetupStart(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.SETUP_START, 100);
    }

    @Override
    public void run(Values data) {
        System.out.println("カスタムセットアップ開始イベント "+ data.toJSON());
    }

}
```

引数 `data` は、イベントが追加データを受け取るためのものです。現時点では、アクションに関連するイベントでのみ使用されます。たとえば、データベースに何かが保存されるたびに実行され、Netuno のコンソールにメッセージを書き込むイベントを作成できます:
```java
package org.netuno.addon.calc.event;

import org.netuno.proteu.Proteu;
import org.netuno.psamata.Values;
import org.netuno.tritao.db.DataItem;
import org.netuno.tritao.event.EventBase;
import org.netuno.tritao.event.EventId;
import org.netuno.tritao.hili.Hili;

public class EventActionSave extends EventBase {

    public EventActionSave(Proteu proteu, Hili hili) {
        super(proteu, hili, EventId.ACTION_SAVE, 100);
    }

    @Override
    public void run(Values data) {
        DataItem dataItem = data.get("dataItem");
        System.out.println("保存中 " + dataItem.getFormName());
        // または
        System.out.println("保存中 " + data.get("dataItem", DataItem.class).getFormName());
    }

}
```

あとはクラスをコンパイルし、`.class` ファイルが次のフォルダにあることを確認するだけです:

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/calc/event/`

または JAR ファイルを生成し、それが次のフォルダにあることを確認します:

- `netuno/lib/`

プロジェクトの完全なファイルはこちらの[リンク](https://github.com/netuno-org/maven/tree/main/Calc/src/main/java/org/netuno/addon/calc/event)で確認できます。