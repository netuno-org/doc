---
id: db-form-operations
title: Form 및 데이터베이스 기본 작업
sidebar_label: DB Form
---

## 시작하기 전에

진행하기 전에 SQL, 그리고 "일대다" 및 "다대일"과 같은 테이블 간 관계에 대한 개념을 알고 있는지 확인하세요.

또한 DB Form을 최대한 활용하려면 Netuno의 `Forms`와 그 구성 방식에 대한 사전 지식이 필요합니다.

## 소개

소프트웨어 개발에서는 데이터베이스에서 정보를 조회해야 하는 경우가 많으며, 이를 순수 SQL로 처리하면 작업이 방대하고 스트레스가 많아집니다. Query는 SQL 쿼리 작성을 직관적이고 스트레스 없는 경험으로 바꿔 줍니다. Query를 사용하면 원시 SQL의 복잡성을 추상화한 친화적인 메서드로 강력한 쿼리를 만들 수 있으며, 사고 흐름에 맞는 쿼리 개발 접근 방식을 제공합니다.

## 작동 방식

DB Form의 핵심은 객체와 메서드를 사용해 SQL 명령을 구조화하는 능력입니다. SQL 명령을 직접 작성하는 대신, DB Form을 사용하면 객체 지향 메커니즘으로 쿼리와 작업을 프로그래밍 방식으로 정의할 수 있습니다.

각 쿼리 또는 데이터베이스 작업은 객체로 표현됩니다.

선택, 필터링, 그룹화 등 SQL의 여러 부분을 캡슐화하는 쿼리 클래스의 인스턴스를 생성합니다. 또한 레코드 삭제, 삽입, 업데이트 작업도 실행합니다.

## 초기화

모든 것은 DB Form 초기화에서 시작되며, 사용할 기본 또는 주 폼의 이름을 알아야 합니다. 즉, Netuno의 폼은 항상 데이터베이스의 테이블을 나타내므로 기본 테이블 또는 주 테이블이 무엇인지 말하는 것과 같습니다.

다음 예제에서는 `people` 폼/테이블로 DB Form을 시작합니다:

```javascript
const dbFormPeople = _db.form("people")
```

DB Form이 초기화되면 조회나 작업을 수행할 수 있습니다.

## 간단한 조회

DB Form은 페이지네이션과 중복 제거 결과 외에도 데이터를 가져오는 데 매우 일반적으로 사용되는 두 가지 메서드를 제공합니다.

- `all` - 모든 레코드를 목록으로 반환합니다.
- `first` - 첫 번째 레코드만 가져옵니다.

다음 예제를 확인하세요.

모든 사람을 가져오려면:

```javascript
const dbPeoples = _db.form("people")
    .all()
```

사람 한 명만 가져오려면:

```javascript
const dbPeople = _db.form("people")
    .first()
```

## 필터와 조건

where를 사용하면 특정 조건을 충족하는 데이터를 필터링할 수 있습니다.

몇 가지 예제를 확인하세요:

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

## Where 비교

`_db.where`는 [Where](/docs/library/objects/Where) 객체를 제공하며 다음 비교 연산을 지원합니다:

숫자 및 텍스트 연산자를 사용한 비교:

-  `equal(...)` 또는 `equals(...)` - 동등 여부를 확인하며 `=`입니다.
-  `notEqual(...)` 또는 `notEquals(...)` - 전달된 값과 다르면 `<>`입니다.
-  `greaterThan(...)` - 전달된 값보다 크면 `>`입니다.
-  `lessThan(...)` - 전달된 값보다 작으면 `<`입니다.
-  `greaterOrEqualsThan(...)` - 전달된 값보다 크거나 같으면 `>=`입니다.
-  `lessOrEqualsThan(...)` - 전달된 값보다 작거나 같으면 `<=`입니다.

`LIKE` 연산자를 사용한 텍스트 조건:

-  `startsWith('text')` - 지정된 접두사로 시작하면 `LIKE '...%'`입니다.
-  `endsWith('text')` - 지정된 접미사로 끝나면 `LIKE '%...'`입니다.
-  `contains('text')` - 해당 용어를 포함하면 `LIKE '%...%'`입니다.

`IN` 연산자를 사용한 목록 조건:

-  `in(_val.list()...)` - 목록의 어떤 값과 같으면 `IN (...)` 조건입니다.
-  `notIn(_val.list()...)` - 목록의 어떤 값과도 같지 않으면 `NOT IN (...)` 조건입니다.

## 실제 조회 예제

`DB Form`은 `_db.form('form')` 리소스로 접근할 수 있으며, 한 번 호출하면 사용 가능한 메서드와 객체로 구성할 수 있는 기본 쿼리를 얻게 됩니다.

### 다대일 및 중복 제거 결과

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

위 예제에서는 `people` 테이블을 `job`과 `netuno_user`라는 두 개의 다른 테이블과 관계지어 조회합니다. 여기서 `job`은 `link` 메서드로, `netuno_user`는 `join`으로 관계지어집니다. `link`가 `join`보다 훨씬 단순하다는 것을 알 수 있는데, 이는 `link`가 Netuno의 `Form` 관계를 재사용해 관계를 매핑하는 반면 `join`은 메서드에서 제공된 정보만 사용하기 때문입니다. 또한 다음과 같은 다른 메서드와 객체도 사용된 것을 볼 수 있습니다:

- `where` : 테이블에 대한 조건을 구성하기 위해 제공되는 객체입니다.
- `link` : Netuno의 `Form` 기준을 사용해 주 테이블을 다른 테이블과 관계짓는 메서드입니다.
- `join` : 테이블 간 관계 객체를 받는 메서드입니다.
- `get` : 조회에서 반환할 필드를 정의하는 메서드입니다.
- `manyToOne` : 테이블 간 관계 유형을 정의하는 객체로, 이 경우 `Many To One` 유형의 관계입니다.
- `debug` : 구성된 쿼리가 콘솔에 출력될지 결정하는 메서드입니다.
- `distinct` : `DISTINCT` 명령이 쿼리에 적용될지 결정하는 메서드입니다.
- `all` : 쿼리를 실행하고 결과를 목록 형태로 반환하는 메서드입니다.

> `link` 메서드는 테이블이 이미 Netuno의 `Form`을 통해 관계를 가지고 있을 때만 사용해야 합니다.

### 관계와 정렬이 있는 첫 번째 레코드

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
위 예제 마지막에서 `first()` 메서드를 호출합니다. 이 메서드는 쿼리 실행 중 발견된 첫 번째 항목을 반환하며, 아무것도 찾지 못하면 `null`을 반환합니다.

### 페이지네이션

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

> Pagination 객체의 페이지 번호는 1부터 시작하므로 위 예제는 `offset = 0`, `limit = 10`과 동일합니다.

위 예제 마지막에서 페이지네이션 기본 설정을 가진 `pagination` 객체를 매개변수로 전달해 `page()` 메서드를 호출합니다. 이 메서드는 해당 속성을 가진 페이지 객체를 반환합니다. 예:

```json
{
	"hasNext": false,
	"hasPrevious": false,
	"items": [
		{
			"job_code": "trainee",
			"people_active": true,
			"people_name": "이준호"
		},
		{
			"job_code": "manager",
			"people_active": true,
			"people_name": "김민준"
		}
	],
	"pageNumber": 1,
	"pageSize": 10,
	"totalElements": 2,
	"totalPages": 1
}
```

## 레코드 삽입

데이터베이스에 데이터를 삽입하려면 `insert` 메서드를 사용합니다. 예:

```javascript
const dbPeopleInserted = _db.form("people")
    .set("name", "김민준")
    .set("email", "minjun@mail.com")
    .insert();
```

`insert`의 결과로 데이터베이스에 삽입된 레코드의 id를 얻을 수 있습니다.

따라서 `dbPeopleInserted`에서 삽입된 레코드의 `id`를 다음과 같이 얻습니다:

```javascript
_log.info("삽입된 People ID: "+ dbPeopleInserted.getInt('id'))
```

## 레코드 편집

DB Form 객체를 통해 조회된 레코드를 쉽고 직관적으로 업데이트할 수 있습니다.

```javascript
_db.form('people')
    .link(
        'job',
        _db.where('code').equal('trainee')
    )
    .set("name", "새 이름")
    .set("email", "newemail@mail.com")
    .update();
```

> `중요`. `update()` 메서드는 조회의 모든 항목을 업데이트하므로 사용 시 주의하세요.

> 또한 `order()` 및 `limit()` 같은 다른 메서드를 조합하여 조회를 개선할 수 있습니다.

## 레코드 삭제

DB Form은 조회에서 반환된 레코드를 간단하게 삭제할 수도 있습니다.

```javascript
_db.form('people')
    .link(
        'job',
        _db.where('code').equal('trainee')
    )
    .delete();
```

> `중요`. `delete()` 메서드는 조회의 모든 항목을 삭제하므로 사용 시 주의하세요.

> 다른 메서드와 마찬가지로 `order()` 및 `limit()` 같은 다른 메서드를 조합하여 결과를 개선할 수 있습니다.