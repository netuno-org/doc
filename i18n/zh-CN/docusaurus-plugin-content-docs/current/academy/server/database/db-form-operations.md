---
id: db-form-operations
title: Form 与数据库基础操作
sidebar_label: DB Form
---

## 开始之前

在继续之前，请确保您具备 SQL 基础，了解表之间的关系，例如“一对多”和“多对一”。

此外，还需要预先了解 Netuno 的 `Forms` 及其组织方式，才能最大限度地发挥 DB Form 的作用。

## 简介

在软件开发中，我们经常需要从数据库中检索信息，而使用纯 SQL 来完成这件事会让工作变得繁琐且令人压力很大。Query 将 SQL 查询的构建转变为一种直观且轻松的体验。借助它，您可以使用友好的方法创建强大的查询；这些方法抽象了原始 SQL 的复杂性，提供了一种与您的思维流程相一致的查询开发方式。

## 工作原理

DB Form 的核心能力是使用对象和方法来组织 SQL 命令。DB Form 不是直接编写 SQL 命令，而是允许您使用面向对象机制以编程方式定义查询和操作。

每个查询或数据库操作都表示为一个对象。

您创建查询类的实例，这些实例封装 SQL 的不同部分，例如选择、过滤、分组等。并且还会执行删除、插入和更新记录的操作。

## 初始化

一切从 DB Form 的初始化开始；它需要知道将使用哪个基础或主表单名称，也就是说，Netuno 中的表单始终表示数据库中的表，因此这等同于说明哪个是基础表或主表。

在此示例中，我们从表单/表 `people` 初始化 DB Form：

```javascript
const dbFormPeople = _db.form("people")
```

DB Form 初始化后，我们就可以执行查询或操作。

## 简单查询

DB Form 提供了两个非常常用的数据获取方法，此外还支持分页和去重结果，它们是：

- `all` - 以列表形式返回所有记录。
- `first` - 仅获取第一条记录。

请参见以下示例。

获取所有人员：

```javascript
const dbPeoples = _db.form("people")
    .all()
```

仅获取一个人：

```javascript
const dbPeople = _db.form("people")
    .first()
```

## 过滤与条件

使用 `where`，我们可以过滤满足特定条件的数据。

参见一些示例：

```js
const dbPeople = _db.form("people")
    .where(_db.where("people_user_id").equals(_user.id))
    .first()
```

```js
const dbPeoples = _db.form("people")
    .where(
        _db.where("type").in(_val.list().add("client").add("admin"))
            .and("email").notEqual(null)
    ).all()
```

## Where 比较

`_db.where` 提供 [Where](/docs/library/objects/Where) 对象，支持以下比较操作：

数值和文本运算符比较：

- `equal(...)` 或 `equals(...)` - 检查是否相等，即 `=`。
- `notEqual(...)` 或 `notEquals(...)` - 是否与传入值不同，即 `<>`。
- `greaterThan(...)` - 是否大于传入值，即 `>`。
- `lessThan(...)` - 是否小于传入值，即 `<`。
- `greaterOrEqualsThan(...)` - 是否大于或等于传入值，即 `>=`。
- `lessOrEqualsThan(...)` - 是否小于或等于传入值，即 `<=`。

使用 `LIKE` 运算符的文本条件：

- `startsWith('text')` - 是否以指定前缀开头，即 `LIKE '...%'`。
- `endsWith('text')` - 是否以指定后缀结尾，即 `LIKE '%...'`。
- `contains('text')` - 是否包含该词，即 `LIKE '%...%'`。

使用 `IN` 运算符的列表条件：

- `in(_val.list()...)` - 是否等于列表中的某个值，即 `IN (...)` 条件。
- `notIn(_val.list()...)` - 是否不等于列表中的任何值，即 `NOT IN (...)` 条件。

## 查询实践示例

`DB Form` 可通过 `_db.form('form')` 资源访问；调用后，您就获得了基础查询，可以使用其中可用的方法和对象进行配置。

### 多对一与去重结果

```javascript
const query = _db.form('people')
    .where(
        _db.where('name').startsWith('jail')
        .and(
             _db.where('email').contains('jai')
             .or('email').endsWith('com')
         )
    )
    .link('job', _db.where('code').equal('manager'))
    .join(
        _db.manyToOne(
            'netuno_user', 
            'people_user_id',  
            _db.where('mail').startsWith('jai')
        ).join(
            _db.manyToOne(
                'netuno_group',
                'group_id',
                _db.where('code').equal('people')
            )
        )
    )
    .get("people.name", "people_name")
    .get("people.active", "people_active")
    .get("people.uid", "people_uid")
    .debug(true)
    .distinct(true)

const results = query.all();
```

在上面的示例中，我们对表 `people` 进行查询，并与其他两个表 `job` 和 `netuno_user` 关联，其中 `job` 通过 `link` 方法关联，`netuno_user` 通过 `join` 关联。可以看到，`link` 比 `join` 简化得多，这是因为 `link` 复用 Netuno `Form` 的关系来映射关联，而 `join` 仅使用方法中提供的信息。还可以注意到所使用的其他方法和对象，例如：

- `where`：用于为表构建条件的对象。
- `link`：使用 Netuno `Form` 的条件将主表与另一个表关联的方法。
- `join`：接收表关系对象的方法。
- `get`：定义查询返回哪些字段的方法。
- `manyToOne`：定义表之间关系类型的对象，此处为 `Many To One` 类型关系。
- `debug`：确定构建的查询是否打印到控制台的方法。
- `distinct`：确定是否将 `DISTINCT` 命令应用于查询的方法。
- `all`：执行查询并以列表形式返回结果的方法。

> `link` 方法仅应在表已通过 Netuno `Form` 建立关系时使用。

### 带关联和排序的第一条记录

```javascript
const query = _db.form('people')
    .where(
        _db.where('name').startsWith('jail')
        .and('email').in(
            _val.list().add('first@mail.com').add('second@mail.com'))
    )
    .link('job')
    .get("people.name", "people_name")
    .get("people.active", "people_active")
    .get("job.code", "job_code")
    .order('people.age', 'desc')
    .debug(true)

const firstResult = query.first();
```

在上面的示例末尾，我们调用了 `first()` 方法；它返回查询执行中找到的第一条记录，如果未找到任何记录，则返回 `null`。

### 分页

```javascript
const query = _db.form('people')
    .link(
        'job', 
        _db.link('task')
    )
    .get("people.name", "people_name")
    .get("people.active", "people_active")
    .get("job.code", "job_code")
    .group("people.id")
    .debug(true)

const page = query.page(_db.pagination(1, 10));
```

> Pagination 对象中的页码从 1 开始，因此上面的示例等价于：`offset = 0` 和 `limit = 10`。

在上面的示例末尾，我们调用 `page()` 方法，并将包含分页偏好设置的 `pagination` 对象作为参数传入。它将返回一个带有相应属性的页面对象，例如：

```json
{
	"hasNext": false,
	"hasPrevious": false,
	"items": [
		{
			"job_code": "trainee",
			"people_active": true,
			"people_name": "李俊"
		},
		{
			"job_code": "manager",
			"people_active": true,
			"people_name": "张伟"
		}
	],
	"pageNumber": 1,
	"pageSize": 10,
	"totalElements": 2,
	"totalPages": 1
}
```

## 插入记录

要向数据库插入数据，我们使用 `insert` 方法，例如：

```javascript
const dbPeopleInserted = _db.form("people")
    .set("name", "张伟")
    .set("email", "zhangwei@mail.com")
    .insert();
```

通过 `insert` 的结果，我们可以获取已插入数据库的记录的 id。

因此，在 `dbPeopleInserted` 中可按如下方式获取所插入记录的 `id`：

```javascript
_log.info("已插入的人员 ID：" + dbPeopleInserted.getInt('id'))
```

## 编辑记录

通过 DB Form 对象，您可以轻松直观地更新查询中的记录。

```javascript
_db.form('people')
    .link(
        'job',
        _db.where('code').equal('trainee')
    )
    .set("name", "新姓名")
    .set("email", "mynewemail@mail.com")
    .update();
```

> `重要`。`update()` 方法将更新查询中的所有记录，因此使用时请注意。

> 此外，您还可以组合使用其他方法，例如 `order()` 和 `limit()`，来改进查询。

## 删除记录

DB Form 还允许您以简单的方式删除查询返回的记录。

```javascript
_db.form('people')
    .link(
        'job',
        _db.where('code').equal('trainee')
    )
    .delete();
```

> `重要`。`delete()` 方法将删除查询中的所有记录，因此使用时请注意。

> 与其他操作一样，也可以组合使用 `order()` 和 `limit()` 等其他方法来改进结果。