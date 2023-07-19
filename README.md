# 돼지는 여행중 - PigONTrip

## 🐽소개

 - 돼지는 여행중은 여행 중 발생한 식비를 해당 국가의 금액으로 입력하면 원단위로 환전된 금액을 자동으로 기입해주고, 총 누적금액을 알려주는 해외 여행 중 발생한 식비 기록 서비스 입니다.

[링크 : https://roeehql.github.io/pigONtrip](https://roeehql.github.io/pigONtrip)

### 사용 언어 및 개발 환경

- Window, VScode, NextJS, Typescript, TailwindCSS, Redux-toolkit, Github-actions

### 개발 기간
- 반년 전쯤 구현 해두었던 식비기록 서비스를 리팩토링한 서비스입니다.
- 7.1-5 / 16-19

### 기록

[네이버 블로그](https://blog.naver.com/eehqlnote/223147154704)

### 트리구조

```
├─components
│  ├─atomic
│  ├─auth
│  ├─contents
│  │  ├─hooks
│  │  └─view
│  ├─profile
│  └─writeform
│      ├─hooks
│      └─view
├─data
│  ├─browserStorage
│  ├─jsonData
│  └─store
├─hooks
├─layout
├─pages
│  └─home
├─public
│  └─mascot
├─styles
├─types
└─util
```

<br />

#### auth
- 로그인, 계정 생성 컴포넌트들이 들어있습니다.

#### contents
- 입력한 내용을 조회하고, 상세 내용 보기, 페이징, 수정, 삭제 관련 컴포넌트들과 페이징 hooks가 들어있습니다.

#### profile
- 네비게이션 헤더와 별명 리스트, 로그아웃, 계정 삭제 관련 컴포넌트가 들어있습니다.

#### WriteForm
- 입력, 환율 계산, 관련 컴포넌트들이 들어있습니다.

#### hooks
- 공통적으로 사용되는 hooks들을 루트경로 hooks 폴더에 해당 컴포넌트에서만 사용되는 hooks들은 각 컴포넌트를 모아둔 폴더 내부에 두었습니다.

#### data
- 위 프로젝트에서 DB로 사용되는 localstorage 관련 함수들과 내부 데이터들 그리고 그것을 다루는 redux-toolkit 파일들이 들어있습니다.

---

### 감사합니다.
