---
id: db-query-execute
title: 查询与执行 - 数据库直接命令
sidebar_label: 查询与执行
---

## 开始之前

为了尽可能高效地理解本教程，建议你确保具备 _**JavaScript、SQL**_ 基础知识，并且知道如何在 Netuno 中创建服务。

如果你还不知道如何创建服务，请参阅 [Web REST 服务](/docs/academy/server/services/rest)。

## 创建查询

Netuno 提供了用于创建数据库查询的函数。在本教程中，我们将简要介绍并描述每个函数的作用，以及获得最佳结果的良好实践。

### _db.query('SELECT * FROM ...')

该函数用于返回查询数据。

```javascript
_out.json(
  _db.query('SELECT * FROM 表名')
)
```

> 请注意，`_out.json()` 函数是为了在浏览器中调用该服务时，让服务数据能够显示在屏幕上。

该函数也支持接收参数，这些参数会直接通过服务调用来传递。例如，假设我们有服务 _选择全部.js_，调用它的地址将是 _**[http://localhost:9000/services/选择全部.netuno](http://localhost:9000/services/选择全部.netuno)**_，要传递的参数放在问号之后：

```
http://localhost:9000/services/选择全部.netuno?参数1=1&参数2=名称
```

> 请注意，要发送多个参数，只需用 & 符号分隔即可。

### 带参数的查询

最后，只需在查询中按如下方式声明该变量：

```javascript
_out.json(
    _db.query(
        'SELECT * FROM 表名 WHERE id = ? AND 名称 = ?', 
        _req.getInt("参数1"), _req.getString("参数2")
    )
)
```

> `?`（问号）的位置将按照参数顺序注入对应的参数。

## 带参数的查询以及 PostgreSQL 和 H2DataBase 类型

不过，H2Database 和 PostgreSQL 支持一种简单的转换语法，因此我们可以按如下方式为参数指定类型：

```javascript
_out.json(
  _db.query(
    'SELECT * FROM 表名 WHERE id = ?::int AND 名称 = ?::varchar', 
    _req.getInt("id"), _req.getString("名称")
  )
)
```

## H2Database 和 PostgreSQL 的参数类型

正如你之前可能已经注意到的，当要执行带参数的查询时，必须定义参数的类型。下面是所有变量类型以及每种类型最适用场景的列表：

* 适用于整数参数：
    * **?::int**
* 适用于小数参数：
    * **?::float**
 * 适用于全局/通用唯一标识符，通常称为 guid 或 uuid：
    * **?::uuid**
 * 适用于通用文本、字符串参数：
    * **?::varchar**
    * **?::text**
 * 适用于日期类型参数：
    * **?::date**
 * 适用于时间类型参数：
    *  **?::time**
 * 适用于日期和时间参数：
    * **?::datetime**（H2Database）
    * **?::timestamp**（PostgreSQL）
    
## _db.execute('INSERT INTO | UPDATE | DELETE ...')

该函数用于执行数据库命令，例如 update、insert 和 delete。

返回该命令执行后受影响的记录数。

```javascript
// 插入示例：
const 插入记录数 = _db.execute(
    "INSERT INTO 表名(id, 启用, 名称) " + 
    "VALUES(nextval('表名_id'), ?::int, ?::varchar)", 
    1, 名称
)

// 更新示例：
const 更新记录数 = _db.execute(
    "UPDATE 表名 SET 名称 = ?::varchar WHERE id = ?::int",
    _req.getString("名称"), _req.getInt("id")
)

// 删除示例：
const 删除记录数 = _db.execute(
    "DELETE FROM 表名 WHERE id = ?::int",
    _req.getInt("id")
)
```

> **注意：** 执行插入时，请检查 `启用` 字段是否等于 1，否则它不会出现在结果中。 

## 与数据交互的示例

现在我们将介绍一些建议规范，以帮助你获得尽可能最佳的结果。

## 查询第一条

请看下面如何获取查询的第一行；如果没有获取到任何行，则结果为空。

```javascript
// 选择数据：
const 数据库结果 = _db.queryFirst(
    'SELECT 名称 FROM 表名 WHERE 唯一标识 = ?::uuid',
    _req.getString("唯一标识")
)
if (!数据库结果) {
    // HTTP 状态码：
    _header.status(404)
    // 错误指示：
    _out.json(
        _val.map()
            .set('error', 'id-not-found')
    )
    // 结束服务执行：
    _exec.stop()
}
```

## 验证记录数量

当对数据库执行一个结果唯一的查询时，要访问数据，建议按**以下方式**操作：

请注意，这只是一个简单示例，用于确保至少返回 1 条结果，并避免在没有结果时出错。

```javascript
// 选择数据：
var 数据库结果集 = _db.query(
  'SELECT 名称 FROM 表名 WHERE id = ?::int',
   _val.init()
        .add(_req.getInt("id"))
)
let 名称 = null;
// 确保存在数据，并且在有多条记录的情况下，
// 可以使用大于符号（结果.length > 1）：
if (数据库结果集.size() >= 1) {
  // 要直接访问名称值，只需：
  名称 = 数据库结果集.get(0).getString('名称');
}
```

## 循环遍历记录

如果查询结果是**多条结果**，可以使用 `for` 循环按如下方式获取数据：

```javascript
// 执行查询
const 数据库结果集 = _db.query('SELECT id, 名称 FROM 表名');

// 初始化变量，以便它可以接收值
const 项目列表 = _val.init();

// 遍历所有结果，以接收每个单独的值
for (const 数据库记录 of 数据库结果集) {
    项目列表.push(
        _val.map()
            .set("唯一标识", 数据库记录.getString("唯一标识"))
            .set("名称", 数据库记录.getString("名称"))
    );
}

// 将新的数据列表发送到输出：
_out.json(项目列表);
```

如有任何问题，请随时联系我们，请参阅本网站页脚中的说明。

祝开发顺利！