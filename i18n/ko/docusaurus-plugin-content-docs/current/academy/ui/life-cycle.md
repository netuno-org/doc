---
sidebar_position: 7
id: life-cycle
title: 인터페이스 수명 주기 이벤트
sidebar_label: 수명 주기 이벤트
---

## 사용자 인터페이스 (`ui`)

Netuno의 데이터 관리 인터페이스에서는 맞춤형 사용자 정의와 조작을 수행하기 위해 코드를 주입할 수 있습니다.

개발은 애플리케이션 루트 폴더 내 `ui` 폴더 안의 프로그래밍에서 수행됩니다.

### addPageLoad()

애플리케이션이 "준비"되기 전에는 페이지를 안전하게 조작할 수 없습니다.

이 메서드는 페이지가 로드되었을 때 호출됩니다.

```javascript
netuno.addPageLoad(() => {
   console.log('무언가를 합니다');
});
```

### addContentLoad()

양식이나 보고서가 로드되면 데이터 양식, 검색 또는 특정 보고서의 데이터를 필터링할 때 등 해당 콘텐츠로 인터페이스가 변경됩니다.

일부 콘텐츠가 로드되는 즉시 메서드가 호출되며, 표시되는 콘텐츠를 포함할 컨테이너를 전달합니다.

```javascript
netuno.addContentLoad((container) => {
   if (container.is('[netuno-form-search]')) {
       console.log('요소가 존재할 때 작업을 합니다');
   }
});
```