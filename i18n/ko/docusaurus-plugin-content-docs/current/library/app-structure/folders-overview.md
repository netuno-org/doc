---
sidebar_position: 1
id: folders-overview
title: 폴더 개요
sidebar_label: 개요
---

애플리케이션의 폴더와 파일을 살펴보고 알아보세요.

## 구조

Netuno가 설치된 루트에서 `📂 apps` 폴더를 찾을 수 있습니다.

`📂 apps` 폴더 안에는 Netuno 플랫폼에서 사용할 수 있는 모든 애플리케이션이 있습니다.

애플리케이션은 로컬에서 생성할 수도 있고 외부에 있을 수도 있습니다. 예를 들어 GIT 저장소를 복제한 애플리케이션이 그렇습니다.

Netuno 루트에서 새로 생성된 애플리케이션의 전체 구조를 확인하세요:

<pre class="doc-structure__tree">
<span>./<b>netuno</b>/</span>
&nbsp;<span>├─ ./<b>apps</b>/</span>
&nbsp;│   <span>└─ ./<b>demo</b>/</span>
&nbsp;│   │   <span>└─ ./...</span>
&nbsp;│   <span>└─ ./<b>내_앱</b>/</span>
&nbsp;│       <span>├─ ./<b>config</b>/</span>
&nbsp;│       <span>├─ ./<b>db</b>/</span>
&nbsp;│       <span>├─ ./<b>docs</b>/</span>
&nbsp;│       <span>└─ ./<b>public</b>/</span>
&nbsp;│       │   <span>├─ ./<b>images</b>/</span>
&nbsp;│       │   <span>├─ ./<b>scripts</b>/</span>
&nbsp;│       │   <span>└─ ./<b>styles</b>/</span>
&nbsp;│       <span>└─ ./<b>server</b>/</span>
&nbsp;│       │   <span>├─ ./<b>actions</b>/</span>
&nbsp;│       │   <span>├─ ./<b>components</b>/</span>
&nbsp;│       │   <span>├─ ./<b>core</b>/</span>
&nbsp;│       │   <span>├─ ./<b>reports</b>/</span>
&nbsp;│       │   <span>├─ ./<b>services</b>/</span>
&nbsp;│       │   <span>├─ ./<b>setup</b>/</span>
&nbsp;│       │   <span>└─ ./<b>templates</b>/</span>
&nbsp;│       <span>├─ ./<b>storage</b>/</span>
&nbsp;│       <span>└─ ./<b>ui</b>/</span>
&nbsp;│           <span>└─ ./<b>src</b>/</span>
&nbsp;│               <span>├─ ./<b>components</b>/</span>
&nbsp;│               <span>├─ ./<b>containers</b>/</span>
&nbsp;│               <span>└─ ./<b>styles</b>/</span>
&nbsp;<span>└─ ./...</span>
</pre>

> `apps` 폴더에는 Netuno에서 사용할 수 있는 모든 애플리케이션이 있습니다.

처음에는 이 폴더에 이미 `demo` 애플리케이션이 있습니다. 이름에서 알 수 있듯이 이는 Netuno 기능을 보여주는 **데모**입니다.

새 애플리케이션이 생성되면 위에 제시된 것과 동일한 하위 폴더 계층을 포함하는 새 폴더가 추가됩니다.

## 주요 폴더

애플리케이션 폴더 안에는 각각 특정 목적을 가진 주요 폴더가 있습니다.

주요 폴더는 다음과 같습니다:

- [📂 config](config) - 일반 설정;
- [📂 dbs](dbs) - 데이터베이스 관련 항목;
- [📂 docs](docs) - 문서 및 기타 일반 문서;
- [📂 public](public) - 이미지, JavaScript, CSS처럼 URL을 통해 직접 제공되는 공개 콘텐츠;
- [📂 server](server) - 서비스, 작업, 템플릿, 보고서 및 전반적인 API와 같은 백엔드 코드.
- [📂 storage](storage) - 데이터와 관련되어 있거나 코드에서 사용되는 파일의 구성.
- [📂 ui](ui) - 백오피스의 사용자 인터페이스, 대시보드 및 기타 기능과 같은 프런트엔드 코드.