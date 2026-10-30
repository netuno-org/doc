---
id: implementing-tables-charts
title: 표와 차트 구현
sidebar_label: 표와 차트
---

이 튜토리얼에서는 데이터 시각화에 초점을 맞춘 간단한 애플리케이션의 인터페이스와 로직을 만들 것입니다. 프로젝트 개발에서는 다음 주제를 다룹니다:

- 데이터베이스 구조화를 위한 **"양식"**, **"필드"** 및 **"관계"** 생성.
- 데이터를 제공하기 위한 **"REST 웹 서비스"** 구축과, _<a href="https://www.npmjs.com/package/react-chartjs-2" target="_blank">React ChartJS 2</a>_ 라이브러리 및 _Chart.js_ 의존성, 그리고 <a href="https://ant.design/" target="_blank">Ant Design</a>의 표 컴포넌트를 사용한 애플리케이션 내 표와 차트의 동적 정보 표시.

프로젝트의 전체 시각적 구조는 **HTML, JavaScript 및 React.js**를 사용하여 개발됩니다.
다음에 대한 기본 지식이 있기를 권장합니다:
- **JavaScript** 
- **React.js** 
- **HTML** 

💡 **이 단계에서 의문점이 있다면 다음을 참고하세요:** 
   - [인터페이스 가이드: 양식](/docs/academy/ui/forms)
   - [인터페이스 가이드: 필드](/docs/academy/ui/fields)
   - [인터페이스 가이드: 양식 간 관계](/docs/academy/ui/relationships-between-forms)
   - [인터페이스 가이드: REST 웹 서비스](/docs/academy/explore/services)


## 최종 결과물

이 튜토리얼의 모든 단계를 따르면 Netuno 작업 영역에 다음과 같은 기능적 대시보드를 구축하게 됩니다:

* 작업자 기록과 총 시간을 나열하는 **데이터 표**.
* 동일한 데이터를 시각적으로 표시하는 동적이고 화려한 **막대 차트**.

![product-final-pt.png](/docs/assets/academy/explore/implementing-tables-charts/product-final-pt.png)


## 솔루션 아키텍처

코드를 작성하기 전에 구성 요소들이 어떻게 맞물리는지 이해하는 것이 중요합니다. 솔루션은 위에서 아래로 통신하는 **4개 계층**으로 나뉩니다:

```
DashboardContainer         (서버에서 데이터를 가져옴)
       │
       ▼
DataVisualization          (레이아웃을 두 열로 구성)
       │
  ┌────┴────┐
  ▼         ▼
TableList  ChartBar        (받은 데이터를 렌더링)
```

:::tip
이 아키텍처의 장점은 각 컴포넌트가 **단일 책임**을 가진다는 것입니다.
:::

## 1단계: 데이터 구조

첫 번째 단계는 양식을 생성하고, 양식 간의 관계를 구성하며, 나중에 표와 차트를 생성할 수 있도록 데이터로 채우는 것입니다.

다음은 양식의 아키텍처와 Netuno 환경에서 복제해야 하는 필드를 보여주는 다이어그램입니다:

![first-step-pt.png](/docs/assets/academy/explore/implementing-tables-charts/first-step-pt.png)

> **중요:** 다이어그램에 `id` 필드가 나타나지만, **수동으로 생성할 필요는 없습니다**. Netuno는 테이블 생성 직후 이 식별자를 자동으로 생성합니다.

### 대시보드 템플릿

표와 차트를 표시하려면 애플리케이션 인터페이스에 공간이 필요합니다. Netuno는 이미 메인 패널용 기본 템플릿을 제공합니다. 

코드 편집기를 열고 다음 파일을 찾으세요:

```text
/apps/내앱/server/templates/dashboard.html
```
*(**내앱**을 실제 애플리케이션 폴더 이름으로 바꾸는 것을 잊지 마세요).*

다음과 같은 HTML 코드 줄을 확인할 수 있습니다:

```html
<div id="app-dashboard"></div>
```

## 2단계: 데이터 서비스

이제 데이터베이스가 준비되고 HTML이 마련되었으니, "메신저"(REST 웹 서비스)를 만들어야 합니다. 이는 데이터베이스에 접근하여 각 작업자의 총 시간을 계산하고 이 정보를 표와 차트에 사용할 수 있도록 전달하는 역할을 합니다.


### 서비스 파일 생성

Netuno의 서비스는 `server/services/` 폴더에 저장됩니다. 프로젝트 디렉터리로 이동하여 `작업자.js` 파일을 생성하세요:

```text
/apps/내앱/server/services/작업자.js
```
**DashboardContainer**는 패널의 언어를 감지하여 패널이 한국어일 때 **/services/작업자**를, 영어일 때 **/services/workers**를 호출합니다. 각 언어에는 고유한 서비스 파일이 있습니다.

### 코드 작성

이 코드는 Netuno의 기본 기능(**_db**, **_val** 및 **_out**)을 사용하여 세 가지 주요 작업을 수행합니다:

- **_db.query 조회:** 데이터베이스에서 **활성** 작업자만 검색하고 각 작업자의 총 근무 시간 합계를 계산합니다.

- **_val.list 및 _val.map 처리:** 결과를 구조화된 객체의 정리된 목록으로 구성합니다.

- **_out.json 응답:** 인터페이스(React)가 읽을 수 있도록 데이터를 JSON 형식으로 전송합니다.

`작업자.js` 파일을 열고 아래 코드를 붙여넣으세요:

```javascript
// 1. 조회, _db.query()는 SQL을 실행하고 찾은 레코드 목록을 반환합니다.
const db레코드들 = _db.query(`
    SELECT DISTINCT
        작업자.이름, SUM(DATEDIFF(HOUR, 기록.시작, 기록.종료)) AS 합계
    FROM 작업자 INNER JOIN 기록
        ON 작업자.id = 기록.작업자_id
    WHERE 작업자.활성 = true AND 기록.활성 = true
    GROUP BY 작업자.이름
    ORDER BY 합계 ASC
`);

// 2. 데이터 처리, _val.list()는 처리된 데이터를 저장할 빈 목록을 생성합니다.
const 목록 = _val.list();

// 데이터베이스에서 반환된 각 행을 순회합니다
for (const db레코드 of db레코드들) {
    목록.add(
        // _val.map()은 React가 사용할 필드로 객체를 생성합니다
        _val.map()
            .set("이름", db레코드.getString("이름"))  // 이름 → "이름" 필드
            .set("합계", db레코드.getInt("합계"))   // 총 시간 → "합계" 필드
    );
}

// 3. 응답
// 최종 목록을 JSON 형식으로 React 인터페이스에 전송합니다.
_out.json(목록);
```
:::tip
-  **필드 이름 주의:** 여기서 **"이름"**과 **"합계"**로 정의된 필드는 다음 단계에서 React 컴포넌트가 조회할 필드(dataIndex: '이름' 및 dataIndex: '합계')와 정확히 동일합니다. 이들은 서로 같아야 합니다.

- **활성 = true 필터 정보:** 데이터베이스에는 **작업자** 및 **기록** 테이블에 **활성** 열이 있습니다. 활성 레코드만 필터링함으로써 보관되거나 비활성화된 데이터가 표와 차트에 나타나지 않도록 보장합니다.
:::

## 3단계: 프론트엔드 환경 (React)

이제 백엔드(데이터베이스 및 서비스)가 준비되었으니, 시각적 인터페이스를 준비하겠습니다. 

터미널을 열고 아래 단계를 따르세요:

#### 1. 기본 종속성 설치
애플리케이션의 `ui` 폴더로 이동하여 패키지를 설치하세요.

```bash
npm install
```

#### 2. 차트 라이브러리 설치

프로젝트에서 차트를 표시하므로, 화면에 그림을 그릴 라이브러리를 다운로드하세요:

```bash
npm install react-chartjs-2 chart.js --save 
```

#### 3. 다국어 관리

다국어 관리를 위한 라이브러리를 설치하세요:

```bash
npm install react-intl
```

#### 4. 컴파일러 시작 (Watch)

모든 설치가 완료되었으니, 파일을 저장할 때마다 화면이 자동으로 갱신됩니다:

```bash
npm run watch
```

#### 5. 컴포넌트 생성
프로젝트를 체계적으로 유지하기 위해 표와 차트에 대한 별도의 컴포넌트를 생성하세요.

애플리케이션의 `src/components/` 디렉터리로 이동하여 폴더를 생성하세요:

* 표: TableList
* 차트: ChartBar
* 컨테이너: DataVisualization

```text
/apps/앱_이름/ui/src/components/TableList/
/apps/앱_이름/ui/src/components/ChartBar/
/apps/앱_이름/ui/src/containers/DataVisualization/
```

## 4단계: TableList 컴포넌트

**TableList** 컴포넌트는 서비스로부터 데이터를 받아 **Ant Design** — Netuno 인터페이스와 함께 제공되는 미리 만들어진 시각적 컴포넌트 라이브러리 — 을 사용하여 열을 자동으로 구성합니다.

TableList 폴더로 이동하여 `index.jsx` 파일을 생성하세요:

```text
/apps/앱_이름/ui/src/components/TableList/index.jsx
```

파일을 열고 아래 코드를 붙여넣으세요:

```jsx
import React from 'react';

import { FormattedMessage } from 'react-intl';

import { Table } from 'antd'; // Ant Design의 표 컴포넌트

import './index.less';

const messages = 'dashboardcontainer.datavisualization.table';

function TableList({ 데이터 = [] }) {
  // 헤더 정의와 각 열에 표시할 객체 필드
  const 컬럼들 = [
    {
      title: <FormattedMessage id={`${messages}.workers`} />, // 번역된 제목
      dataIndex: '이름',  // 서비스에서 반환된 JSON의 "이름" 필드
    },
    {
      title: <FormattedMessage id={`${messages}.total`} />,
      dataIndex: '합계', // 서비스에서 반환된 JSON의 "합계" 필드
    }
  ];

  return (
    <Table
      columns={컬럼들}      // 열 구조
      dataSource={데이터}      // 데이터 자체 (객체 목록)
      pagination={false}     // 페이지네이션 없음: 모든 레코드를 한 번에
      bordered={true}        // 셀에 보이는 테두리 있음
    />
  );
}

export default TableList;
```

 **코드 이해하기:**

이 함수형 컴포넌트는 `데이터` 목록을 매개변수(prop)로 받아 Ant Design의 `<Table>`에 직접 전달합니다.

**columns** 설정은 "Ant Design"에 헤더 **title**에 어떤 제목을 표시할지, 셀 `dataIndex`에 어떤 JSON 객체 필드를 채울지 알려줍니다. Ant Design은 모든 HTML, 테두리 스타일, 레이아웃을 자동으로 처리하므로 수동으로 CSS를 작성할 필요가 없습니다.

** index.less 파일:** 같은 폴더에 `index.less` 파일을 생성하세요. Ant Design이 이미 표의 기본 스타일을 제공하므로 지금은 비워 두어도 됩니다.


## 5단계: ChartBar 컴포넌트

**react-chartjs-2** 라이브러리를 사용하여 데이터 시각화를 위한 막대 차트를 만들겠습니다. 이 컴포넌트는 데이터를 받아 Chart.js가 이해하는 형식으로 변환하고, 색상을 지정하며, 화면에 차트를 그립니다.

`ChartBar` 폴더로 이동하여 `index.jsx`라는 파일을 생성하세요:

```text
/apps/앱_이름/ui/src/components/ChartBar/index.jsx
```
파일을 열고 아래 코드를 붙여넣으세요:

```jsx
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';            // 막대 차트 컴포넌트
import { Chart, registerables } from 'chart.js';  // Chart.js 코어

import { useIntl } from 'react-intl';

import './index.less';

const messages = 'dashboardcontainer.datavisualization.chart';

// 필수: 사용하기 전에 모든 Chart.js 요소를 등록합니다.
// 이 줄이 없으면 차트가 렌더링되지 않고 콘솔에 오류가 발생합니다.
Chart.register(...registerables);

function ChartBar({ 데이터 }) {
  const intl = useIntl();
  const [차트데이터, set차트데이터] = useState(null); // Chart.js 형식의 데이터

  useEffect(() => {
    // 막대용 7색 팔레트 (항목이 7개를 넘으면 순환)
    const 색상들 = [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ];

    const 라벨들 = [];
    const 값들 = [];

    // Chart.js가 요구하는 데이터 구조
    const 새차트데이터 = {
      labels: [],       // X축(가로)의 이름들
      datasets: [
        {
          label: intl.formatMessage({ id: `${messages}.label` }), // 번역된 범례
          data: [],           // Y축 값 (막대 높이)
          backgroundColor: [] // 각 막대의 색상
        }
      ]
    };

    // 받은 데이터를 순회하며 목록 구성
    for (const i in 데이터) {
      라벨들.push(데이터[i].이름);   // 작업자 이름 → X축
      값들.push(데이터[i].합계);  // 총 시간 → 막대 높이

      // (i + 1) % 7: "i"가 7이 되면 0으로 돌아가 색상을 순환 반복합니다
      새차트데이터.datasets[0].backgroundColor.push(색상들[(i + 1) % 7]);
    }

    새차트데이터.labels = 라벨들;
    새차트데이터.datasets[0].data = 값들;

    set차트데이터(새차트데이터); // 상태에 저장하여 재렌더링 트리거

  }, [데이터]); // "데이터"가 변경될 때마다 다시 실행

  // 데이터가 처리되지 않은 동안에는 아무것도 렌더링하지 않습니다
  if (차트데이터 == null) {
    return null;
  }

  return (
    <Bar data={차트데이터} />
  );
}

export default ChartBar;
```
**코드 이해하기:**

이 컴포넌트에는 세 가지 주요 책임이 있습니다:

**준비 `useState`:** 서버에서 오는 데이터 처리를 기다리기 위해 컴포넌트를 `null` 상태로 초기화합니다.

**데이터 처리 `useEffect`:** 데이터가 prop `데이터`를 통해 도착하면 **useEffect** Hook이 자동으로 실행됩니다. 색상 팔레트를 정의하고 **for** 루프를 사용하여 정보를 분리합니다: 작업자 이름은 X축 라벨 **labels**로 이동하고, 총 시간은 막대의 높이 `data`를 정의하며, 각 막대에 순환적으로 색상이 할당됩니다.

**화면 그리기 `return`:** 라이브러리의 `<Bar>` 컴포넌트를 사용하여 처리되어 상태에 저장된 데이터를 기반으로 차트를 그립니다.

**index.less 파일:** `ChartBar` 폴더 안에 `index.less` 파일도 생성하세요. 지금은 비워 두어도 됩니다.


## 6단계: DataVisualization 시각적 레이아웃

이제 표와 차트 컴포넌트가 준비되었으니, 화면에서 나란히 배치할 컨테이너가 필요합니다.

**DataVisualization** 폴더로 이동하여 `index.jsx`라는 파일을 생성하세요:

```text
/apps/앱_이름/ui/src/containers/DataVisualization/index.jsx
```

파일을 열고 아래 코드를 붙여넣으세요:

```jsx
import React from 'react';

import { FormattedMessage } from 'react-intl'; // 언어별로 번역 가능한 제목

import ChartBar from "../../components/ChartBar";
import TableList from "../../components/TableList";

import './index.less';

const messages = 'dashboardcontainer.datavisualization';

function DataVisualization({ 데이터 = [] }) {
  return (
    <div>
      <div className="row">              {/* Bootstrap 행 */}

        {/* 왼쪽 열: 표 */}
        <div className="col-lg-6">
          <div className="panel panel-default">
            <div className="panel-heading data-visualization__panel">
              <h3 className="panel-title">
                <FormattedMessage id={`${messages}.table.title`} />
              </h3>
            </div>
            <div className="panel-body">
              <TableList 데이터={데이터} />   {/* 데이터를 표로 전달 */}
            </div>
          </div>
        </div>

        {/* 오른쪽 열: 차트 */}
        <div className="col-lg-6">
          <div className="panel panel-default">
            <div className="panel-heading data-visualization__panel">
              <h3 className="panel-title">
                <FormattedMessage id={`${messages}.chart.title`} />
              </h3>
            </div>
            <div className="panel-body">
              <ChartBar 데이터={데이터} />    {/* 동일한 데이터를 차트로 전달 */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DataVisualization;
```
**코드 이해하기:**

이 컴포넌트는 시각적 구성자 역할을 합니다. `데이터` 목록을 받아 아무런 변환 없이 두 자식 컴포넌트에 분배합니다.

`row` 및 `col-lg-6` 클래스는 "Bootstrap Grid"의 것으로 화면을 반으로 나눕니다: 왼쪽 열은 표를, 오른쪽 열은 차트를 받습니다. 더 작은 화면(휴대폰)에서는 자동으로 쌓입니다.

`panel`, `panel-heading` 및 `panel-body` 클래스는 각 컴포넌트에 "제목이 있는 작은 상자" 모양을 만듭니다.

**index.less 파일:** 향후 패널 스타일링을 위해 이 폴더에 `index.less` 파일도 생성하세요.

## 7단계: DashboardContainer

이제 백엔드에 서비스가 있고 프론트엔드에 시각적 컴포넌트가 있습니다. 서버로 가서 데이터를 가져와 **DataVisualization**에 전달할 컨테이너가 필요합니다.

Netuno는 이미 대시보드의 기본 구조를 자동으로 생성합니다. 기존 파일을 편집하세요:

```text
/apps/앱_이름/ui/src/containers/DashboardContainer/index.jsx
```

파일 내용을 아래 코드로 교체하세요:

```jsx
import React, { useState, useEffect, useImperativeHandle } from "react";

import _service from '@netuno/service-client'; // Netuno 공식 HTTP 클라이언트

import { Spin, message } from 'antd';           // 로딩 표시기 및 오류 표시기

import DataVisualization from "../DataVisualization"; // 시각적 레이아웃

import { useIntl } from 'react-intl';           // 다국어 지원

import './index.less';

const messages = 'dashboardcontainer.datavisualization';

function DashboardContainer({}, ref) {
  const intl = useIntl();
  const [작업자들, set작업자들] = useState([]);   // 상태: 작업자 목록
  const [로딩, set로딩] = useState(false); // 상태: 로딩 중인가?

  // 페이지를 열 때 자동으로 검색 실행
  useEffect(() => {
    작업자불러오기();
  }, []);

  const 작업자불러오기 = () => {
    set작업자들([]);      // 이전 데이터 지우기
    set로딩(true);    // 로딩 표시기 활성화

    _service({
      // 패널의 언어를 감지하고 올바른 서비스 URL 호출
      url: intl.locale.indexOf('ko') == 0 ? '/services/작업자' : '/services/workers',
      success: (response) => {
        set작업자들(response.json); // 받은 데이터를 상태에 저장
        set로딩(false);
      },
      fail: (e) => {
        set로딩(false);
        console.error('작업자 서비스 실패.', e);
        message.error(intl.formatMessage({ id: `${messages}.loading_error` }));
      }
    });
  };

  // 부모 컴포넌트(Dashboard)가 ref를 통해 작업자불러오기()를 실행할 수 있도록 허용
  useImperativeHandle(ref, () => ({
    작업자불러오기
  }));

  return (
    <div ref={ref}>
      { 로딩 == false
        ? <DataVisualization 데이터={작업자들} /> // 데이터 준비 완료: 패널 표시
        : <Spin/>                              // 아직 로딩 중: 로더 표시
      }
    </div>
  );
}

export default React.forwardRef(DashboardContainer);
```

**코드 이해하기:**

이 컴포넌트에는 세 가지 주요 책임이 있습니다:

**초기 상태 `useState`:** 두 가지 내부 제어를 생성합니다 — **작업자들**(서버에서 오는 목록)과 **로딩**(데이터가 아직 검색 중인지 나타내는 플래그).

**데이터 검색 `_service`:** **작업자불러오기** 함수는 **_service**를 사용하여 백엔드 서비스를 호출합니다. JavaScript의 기본 **fetch**와 달리 **_service**는 인증, 세션, 오류 처리를 자동으로 관리합니다. 또한 패널의 언어를 감지하여 한국어의 경우 `/작업자`, 영어의 경우 `/workers` 올바른 URL을 선택합니다.

**배포 및 그리기 `return`:** 데이터가 검색되는 동안 로딩 휠 **(Spin)**을 표시합니다. 데이터가 도착하면 **작업자들** 목록을 **DataVisualization**에 전달하고, 이는 표와 차트에 분배합니다.

### 대시보드 스타일링

`DashboardContainer` 폴더의 `index.less` 파일을 열고 패널 헤더를 강조하기 위해 아래 코드를 붙여넣으세요:

```text
/apps/앱_이름/ui/src/containers/DashboardContainer/index.less
```

```css
.panelBackground {
  background-color: #3f54ba;
  padding: 10px 15px;
  color: white;
}
```

**코드 이해하기:**

이 클래스는 헤더에 파란색 배경색 **(#3f54ba)** 과 패딩 영역 **(padding)** 을 정의합니다. 

이는 `DataVisualization`의 `data-visualization__panel` 클래스에서 사용되어 **표**와 **차트** 제목이 시각적으로 돋보이도록 보장합니다.


## 8단계: 프로젝트 컴파일

모든 React 코드가 Netuno에 의해 컴파일되도록 하려면:

* **터미널이 열린 채로** `npm run watch`가 백그라운드에서 실행 중이라면: 파일을 저장할 때마다 변경 사항이 자동으로 컴파일됩니다.
* **터미널을 닫았거나** 프로세스가 중지되었다면: 문제없습니다. 터미널을 다시 열고 `ui` 폴더로 이동하여 명령을 다시 실행하세요:

```bash
npm run watch
```

## 결론

이 튜토리얼을 통해 Netuno 플랫폼 작업에 필요한 핵심 역량을 습득하여 서버와 사용자 인터페이스 간의 데이터 흐름 통합 주기를 완벽하게 익혔습니다.

이 개발에서는 다음 주제를 다루었습니다:

- **데이터베이스:** 시각적이고 효율적인 방식으로 테이블과 데이터 구조를 생성하고 구성.

- **REST 백엔드:** API를 통해 데이터를 제공하기 위한 서비스 및 비즈니스 로직 개발.

- **React 기반 프론트엔드:** 현대적이고 반응형인 인터페이스에서 이러한 데이터를 통합하고 동적으로 표시.

어려움이 있거나 개선 제안이 있으면 연락해 주세요.

우리 팀과 커뮤니티가 도울 준비가 되어 있습니다.

즐거운 개발 되세요!