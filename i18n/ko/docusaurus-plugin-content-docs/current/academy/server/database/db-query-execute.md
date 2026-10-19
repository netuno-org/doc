---
id: db-query-execute
title: Query 및 Execute - 데이터베이스 직접 명령
sidebar_label: 쿼리 & 실행
---

## 시작하기 전에

이 튜토리얼을 최대한 효과적으로 이해하려면 _**JavaScript, SQL**_ 기초 지식이 있고 Netuno에서 서비스를 만들 수 있는지 확인하시길 권장합니다.

서비스 생성 방법을 모르신다면 [REST 웹 서비스](/docs/academy/server/services/rest)를 참고하세요.

## 쿼리 생성

Netuno는 데이터베이스 쿼리 생성을 위한 함수를 제공하며, 이 튜토리얼에서는 각 함수의 효과를 간단히 소개하고 설명하며 최상의 결과를 얻기 위한 모범 사례도 제시합니다.

### _db.query('SELECT * FROM ...')

이 함수를 사용하면 쿼리에서 데이터를 반환할 수 있습니다.

```javascript
_out.json(
  _db.query('SELECT * FROM 테이블_이름')
)
```

> `_out.json()` 함수는 브라우저에서 서비스를 호출할 때 화면에서 데이터를 볼 수 있게 해 줍니다.

이 함수는 인수도 받을 수 있으며, 인수는 서비스 호출을 통해 직접 전달됩니다. 예를 들어 _전체-선택.js_ 서비스가 있다고 가정하면, 해당 서비스 호출은 _**http://localhost:9000/services/전체-선택.netuno**_로 이루어지며, 전달할 인수는 호출 뒤에 물음표를 붙여 이어서 배치합니다:

```
http://localhost:9000/services/전체-선택.netuno?인수1=1&인수2=이름
```

> 여러 인수를 보내려면 앰퍼샌드(&)로 구분하면 됩니다.

### 매개변수가 있는 쿼리

마지막으로 쿼리에서 다음과 같이 매개변수를 지정하면 됩니다:

```javascript
_out.json(
    _db.query(
        'SELECT * FROM 테이블_이름 WHERE id = ? AND 이름 = ?', 
        _req.getInt("인수1"), _req.getString("인수2")
    )
)
```

> '?' (물음표) 자리에는 순서에 따라 해당 매개변수가 주입됩니다.

## PostgreSQL 및 H2DataBase 유형과 매개변수가 있는 쿼리

그러나 H2Database와 PostgreSQL은 간단한 변환 구문을 지원하므로 다음과 같이 매개변수에 유형을 지정할 수 있습니다:

```javascript
_out.json(
  _db.query(
    'SELECT * FROM 테이블_이름 WHERE id = ?::int AND 이름 = ?::varchar', 
    _req.getInt("id"), _req.getString("이름")
  )
)
```

## H2Database 및 PostgreSQL의 매개변수 유형

앞서 보셨듯이 인수가 있는 쿼리를 실행하려면 해당 인수의 유형을 정의해야 합니다. 다음은 모든 변수 유형과 각 유형에 가장 적합한 유형 목록입니다:

* 정수 매개변수에 적합:
    * **?::int**
* 소수 매개변수에 적합:
    * **?::float**
 * guid 또는 uuid로 더 잘 알려진 전역/범용 고유 식별자 매개변수에 적합:
    * **?::uuid**
 * 일반 텍스트, 문자열 매개변수에 적합:
    * **?::varchar**
    * **?::text**
 * 날짜 유형 매개변수에 적합:
    * **?::date**
 * 시간 유형 매개변수에 적합:
    *  **?::time**
 * 날짜와 시간이 있는 매개변수에 적합:
    * **?::datetime** (H2Database)
    * **?::timestamp** (PostgreSQL)
    
## _db.execute('INSERT INTO | UPDATE | DELETE ...')

이 함수를 사용하면 update, insert, delete와 같은 데이터베이스 명령을 실행할 수 있습니다.

실행된 명령에 의해 영향을 받은 레코드 수를 반환합니다.

```javascript
// Insert 예제:
const 삽입된_레코드_수 = _db.execute(
    "INSERT INTO 테이블_이름(id, active, 이름) " + 
    "VALUES(nextval('테이블_이름_id'), ?::int, ?::varchar)", 
    1, 이름
)

// Update 예제:
const 갱신된_레코드_수 = _db.execute(
    "UPDATE 테이블_이름 SET 이름 = ?::varchar WHERE id = ?::int",
    _req.getString("이름"), _req.getInt("id")
)

// Delete 예제:
const 삭제된_레코드_수 = _db.execute(
    "DELETE FROM 테이블_이름 WHERE id = ?::int",
    _req.getInt("id")
)
```

> **참고:** insert를 수행할 때 `active` 필드가 1인지 확인하세요. 그렇지 않으면 결과에 나타나지 않습니다.

## 데이터 상호작용 예제

이제 최상의 결과를 얻기 위해 권장되는 규칙을 소개하겠습니다.

## 첫 번째 행 쿼리

아래에서 쿼리의 첫 번째 행을 가져오는 방법을 확인하세요. 가져온 행이 없으면 null이 됩니다.

```javascript
// 데이터 선택:
const db결과 = _db.queryFirst(
    'SELECT 이름 FROM 테이블_이름 WHERE uid = ?::uuid',
    _req.getString("uid")
)
if (!db결과) {
    // HTTP 상태 코드:
    _header.status(404)
    // 오류 표시:
    _out.json(
        _val.map()
            .set('error', 'id-not-found')
    )
    // 서비스 실행 종료:
    _exec.stop()
}
```

## 레코드 수 검증

데이터베이스에서 결과가 하나뿐인 선택을 수행할 때 데이터에 접근하려면 **다음과 같이** 처리하는 것이 좋습니다:

이것은 최소 1개의 결과가 반환되도록 보장하고 결과가 없을 때 발생하는 오류를 방지하는 간단한 예제일 뿐입니다.

```javascript
// 데이터 선택:
var db결과들 = _db.query(
  'SELECT 이름 FROM 테이블_이름 WHERE id = ?::int',
   _val.init()
        .add(_req.getInt("id"))
)
let 이름 = null;
// 데이터가 존재함을 보장하며, 다음을 사용할 수 있습니다
// 결과가 하나보다 많을 경우 큰 기호(db결과들.length > 1)를
// 사용할 수 있습니다. 레코드가 하나보다 많을 때:
if (db결과들.size() >= 1) {
  // 이름 값에 직접 접근하려면 다음과 같이 하면 됩니다:
  이름 = db결과들.get(0).getString('이름');
}
```

## 레코드 반복 순회

선택 결과가 **여러 결과**인 경우 다음과 같이 'for' 반복문을 사용하여 데이터를 가져올 수 있습니다:

```javascript
// 쿼리 실행
const db결과들 = _db.query('SELECT id, 이름 FROM 테이블_이름');

// 값을 받을 수 있도록 변수 초기화
const 항목들 = _val.init();

// 각 값을 개별적으로 받기 위해 모든 결과를 반복
for (const db결과 of db결과들) {
    항목들.push(
        _val.map()
            .set("uid", db결과.getString("uid"))
            .set("이름", db결과.getString("이름"))
    );
}

// 새로운 데이터 목록을 데이터 출력으로 전송:
_out.json(항목들);
```

질문이 있으시면 주저하지 말고 연락해 주세요. 이 웹사이트의 푸터에 있는 안내를 참고하세요.

좋은 개발 되세요!