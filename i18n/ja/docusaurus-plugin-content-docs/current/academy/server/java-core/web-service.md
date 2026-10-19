---
id: web-service 
title: マルチアプリケーションWebサービス 
sidebar_label: Webサービス
sidebar_position: 4
---

このチュートリアルでは、Netuno用のマルチアプリケーションWebサービスを作成します。これは、Netunoのベースディレクトリに配置され、`apps`フォルダ内の任意のアプリケーションから利用できるJavaのWebサービスを作成することを意味します。

以前のチュートリアルに従って作成する例は、簡単な算術演算を実行するサンプルサービスである`calc`サービスです。

まず、プロジェクトのフォルダ構造を作成する必要があります。この例では、プロジェクトが`Calc`というフォルダ内に作成されるものとします。次に、パッケージ名（この例では`org.netuno.addon.calc`）を反映したフォルダ構造を作成する必要があります。したがって、フォルダ構造は次のようになります：

- `Calc/src/main/java/org/netuno/addon/calc/web/`

この構造内に、カスタムWebサービスを定義する`CalcWeb`というJavaクラスを作成します：

- ` Calc/src/main/java/org/netuno/addon/calc/web/CalcWeb.java`

クラス内で定義されるパッケージは次のようになります：

```java
package org.netuno.addon.calc.web;
```

クラスがカスタムのマルチアプリケーションWebサービスを定義するには、`org.netuno.tritao.Web`クラスを継承する必要があります：

```java
package org.netuno.addon.calc.web;

import org.netuno.tritao.Web;

public class CalcWeb extends Web {
    // ...
}
```

サービスのURLを定義するには、次のようにします：

```java
package org.netuno.addon.calc.web;

import org.netuno.proteu.Path;
import org.netuno.tritao.Web;

@Path("/addon/calc/Calc")
public class CalcWeb extends Web {
    // ...
}
```

サービスが動作するためにオーバーライドする必要があるメソッドは`run`です：

```java
package org.netuno.addon.calc.web;

import org.netuno.proteu.Path;
import org.netuno.proteu.ProteuException;
import org.netuno.tritao.Web;

import java.io.IOException;

@Path("/addon/calc/Calc")
public class CalcWeb extends Web {
    @Override
    public void run() throws IOException, ProteuException {
        // ...
    }
}
```

では、Netunoのいくつかのリソースを使って、`run`メソッドを定義しましょう。このメソッドは、`plus`（加算）と`minus`（減算）のどちらの操作を使用するかを定義するパラメータ`op`と、オペランドとなるパラメータ`x`および`y`（加算の場合は被加数と加数、減算の場合はそれぞれ被減数と減数）を受け取ります。

次に、選択された操作に基づいて、サービスは結果を計算し、JSON形式でユーザーに返します：

```java
package org.netuno.addon.calc.web;

import org.netuno.proteu.Path;
import org.netuno.proteu.ProteuException;
import org.netuno.tritao.Web;
import org.netuno.tritao.resource.Out;
import org.netuno.tritao.resource.Req;
import org.netuno.tritao.resource.Val;

import java.io.IOException;

@Path("/addon/calc/Calc")
public class CalcWeb extends Web {
    @Override
    public void run() throws IOException, ProteuException {
        Req req = resource(Req.class);
        Out out = resource(Out.class);
        Val val = resource(Val.class);

        String op = req.getString("op", "plus");
        double x = req.getDouble("x", 0);
        double y = req.getDouble("y", 0);

        double result = 0;

        if (op.equalsIgnoreCase("minus")) {
            result = x - y;
        } else {
            result = x + y;
        }

        out.json(val.map().set("result", result));
    }
}
```

あとはクラスをコンパイルし、`CalcWeb.class`ファイルが次のフォルダにあることを確認するだけです：

- `netuno/core/web/WEB-INF/classes/org/netuno/addon/calc/web/`

またはJARファイルを生成し、それが次のフォルダにあることを確認します：

- `netuno/lib/`

任意のアプリケーションでNetunoサーバーを起動します：

```bash
./netuno server app=demo
```

このサービスを呼び出すには、URLの末尾に`.netuno`を追加する必要があります：

- `http://localhost:9000/addon/calc/Calc.netuno`

たとえば、次のURLを呼び出すと：

- `http://localhost:9000/addon/calc/Calc.netuno?op=minus&x=5&y=2`

次の応答が返ります：

```js
{"result":3}
```

プロジェクトの完全なファイルはこの[リンク](https://github.com/netuno-org/maven/tree/main/Calc/src/main/java/org/netuno/addon/calc/web)で確認できます。

次のチュートリアルでは、Javaを使用してNetunoのリソースを作成する方法を学びます。