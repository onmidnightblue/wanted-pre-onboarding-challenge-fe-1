# Todo CRUD w React Query
7.25 - 8.06 prev assignment <br />
8.08 - 8.20 refactoring
<br />

![untitled](https://user-images.githubusercontent.com/92494452/185583426-56433b85-e6b5-4b16-b7e0-2f13b8cf875d.gif)

**content**

- [Todo CRUD w React Query](#todo-crud-w-react-query)
  - [:cloud: to use](#cloud-to-use)
  - [:cloud: start](#cloud-start)
  - [:cloud: folder tree](#cloud-folder-tree)
  - [:cloud: assignment](#cloud-assignment)
    - [1 login / signup](#1-login--signup)
    - [2 todo list](#2-todo-list)
    - [참고 사항](#참고-사항)
  - [:cloud: api](#cloud-api)
    - [Todos](#todos)
    - [Auth](#auth)
  - [:cloud: refactoring](#cloud-refactoring)
    - [learning](#learning)
    - [error](#error)
    - [ui](#ui)
    - [typescript](#typescript)
    - [react query](#react-query)
    - [build](#build)
    - [description](#description)
<br />

## :cloud: to use

- react router v6
- axios
- styled-components
- functional components
- react-icons
- redux-toolkit
<br />

## :cloud: start

```
$ git clone https://github.com/onmidnightblue/wanted-pre-onboarding-challenge-fe-1.git

$ cd front
$ npm start

$ cd server
$ npm start
```
<br />

## :cloud: folder tree

```
├─components
│  ├─Auth
│  │      Login.jsx
│  │      SignUp.jsx
│  │
│  ├─Layout
│  │      FormLayout.jsx
│  │      Header.jsx
│  │      OuterLayout.jsx
│  │
│  ├─Todo
│  │      TodoController.jsx
│  │      TodoForm.jsx
│  │      TodoItem.jsx
│  │      Todos.jsx
│  │
│  └─UI
│          Button.jsx
│          Form.jsx
│          Input.jsx
│
├─pages
│      LoginPage.jsx
│      NotFoundPage.jsx
│      SignUpPage.jsx
│      TodosPage.jsx
│
├─store
│      Index.js
│      TodoActions.js
│      TodoSlice.js
│
└─utils
        auth.js
```

- components
    - Auth : 로그인, 회원가입에 관한 디렉토리입니다.
    - Layout : 공통적으로 사용될 수 있는 헤더와 내용을 담은 전체적인 틀에 관한 컴포넌트들이 있습니다.
    - Todo : todo에 관련된 컴포넌트들이 위치합니다.
    - UI : 공통적으로 사용된 UI 컴포넌트들을 모아두었습니다. (input, Button, Form)
- pages
    - 로그인 페이지와 회원가입 페이지, 투두 페이지, 404 페이지로 구분했습니다.
- store
    - 투두 상태를 관리하기 위한 슬라이스가 위치합니다.
- utils
    - 로그인 검증을 위한 정규식 함수가 위치합니다.
<br />

## :cloud: assignment

### 1 login / signup

- /auth 경로에 로그인 / 회원가입 기능을 구현합니다.
  - 별도의 경로로 분리했습니다.
  - 이메일 input, 비밀번호 input, 제출 button으로 구현했습니다.
- 이메일과 비밀번호의 유효성 검사를 적용합니다.
    - 이메일 조건 : 최소 @, . 포함합니다.
    - 비밀번호 조건 : 8자 이상 입력을 해야하는 조건이 있습니다.
    - 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화됩니다.
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동합니다.
  - 받은 토큰은 로컬 스토리지에 저장합니다.
  - 이후 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트시킵니다.
  - 토큰이 유효하지 않다면 로그인 페이지로 리다이렉트시킵니다.
    

### 2 todo list

- Todo List CRUD 기능을 구현합니다.
  - 목록 / 상세 영역으로 나누어 구현했습니다.
  - Todo 추가 버튼 : 할 일을 추가합니다.
  - Todo 수정 버튼 : 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - Todo 삭제 버튼 : 해당 Todo를 삭제합니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 구현했습니다.
  - 새로고침을 했을 때 현재 상태가 유지됩니다.
  - 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있습니다.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현합니다.
  - 수정되는 Todo의 내용이 목록에서도 실시간으로 반영합니다.

### 참고 사항
- DB : db/db.json
- 실제 유저별로 Todo 목록을 관계 지어 관리하지는 않습니다. (모든 유저가 하나의 Todo를 가집니다.)
- 로그아웃은 localStorage에 저장된 token을 삭제하는 방식으로 구현했습니다.
<br />

## :cloud: api

### Todos
getTodos
- GET `/todos`
- Headers
  - Authorization: login token
  
getTodoById
- GET `/todos/:id`
- Headers
  - Authorization: login token
  
createTodo
- POST `/todos`
- Parameter
  - title: string
  - content: string
- Headers
  - Authorization: login token
  
updateTodo
- PUT `/todos/:id`
- Parameter
  - title: string
  - content: string
- Headers
  - Authorization: login token

deleteTodo
- DELETE `/todos/:id`
- Headers
  - Authorization: login token
  
### Auth
login
- POST `/users/login`
  
signUp
- POST `/users/create`
<br />

## :cloud: refactoring

:sparkles: refactoring을 진행하다 더 개선하고 싶은 부분을 발견하면 더 추가될 수 있습니다.
<br />

### learning
- [x]  dependencies, devDependencies 차이 알기
- [ ]  typescript 학습 (50%)
- [ ]  react query 학습
<br />

### error
- [x]  페이지 브라우징 기록을 이용해 뒤로가기, 앞으로 가기 구현
  - 현재 state로 되어있음
- [x]  로그인, 회원가입 시 비활성화 상태에 api 전송이 가능한 에러 수정
- [x]  로그인 후 투두 페이지에서 뒤로가기를 누른 후(로그인 페이지) 다시 앞으로가기(투두 페이지)를 눌렀을 때 화면이 그대로 보이는 오류 수정하기 (로그인 페이지 replace)
- [x]  수정이 완료된 경우 수정창 닫아주기
- [x]  수정 선택 후 다른 리스트를 클릭했을 때 수정 폼 안의 내용이 바뀌지 않는 오류 수정하기
- [x]  리스트를 선택하지 않았을 때 수정 선택 후 폼이 잠깐 뜨는 오류 수정하기
- [x]  리스트 선택 후 해제했을 때 상세 내용이 이전꺼가 남아있는 오류 수정하기
<br />

### ui
- [x]  시멘틱 태그 사용하기
- [x]  회원가입 시 조건 충족 여부를 사용자에게 보여주기
- [x]  로그인 시 조건 충족 여부를 사용자에게 보여주기
- [x]  로그인, 회원가입 입력 시 이메일에 공백 처리하기
- [x]  비밀번호 입력한 것을 눈 아이콘으로 확인할 수 있게 하기
- [x]  체크 리스트 형태
- [ ]  비동기 통신을 진행할 때 진행 상태를 사용자에게 알리기 (loading, error)
    - 로딩 시간이 짧으므로 promise로 일부러 특정 시간을 걸어주기
    - react query와 함께 코드 작성하기
<br />

### typescript
- [x]  기존 프로젝트를 타입스크립트로 변환
- [x]  react 프로젝트에 타입을 적용하면서 생기는 에러들을 노션에 정리
- [ ]  strict 옵션 적용
- [ ]  타입 가드 및 추론을 사용해 any, 타입 단언을 모두 없애기
- [ ]  반복되는 타입은 제네릭, 타입상속 or 합성 등으로 추상화
- [ ]  보다 좁은 타입으로 정의하기 (string > as const or union)
<br />

### react query
- [ ]  react query 적용

### build
- [ ]  dependencies, devDependencie를 공부했던 내용에 맞게 작성해보기
<br />

### description
- [x]  폴더 구조 설명
- [x]  완성된 사이트의 gif 이미지 공유하기
- [x]  사용한 프레임워크 및 라이브러리 설명
- [x]  설치, 환경설정 및 실행 방법 readme에 작성하기
- [x]  한계점 및 개선 사항 작성
- [ ]  과제 진행 시 고민한 부분에 대해 서술
- [ ]  javascript에서 typescript로 변경하면서 생긴 에러들을 노션 공유하기
<br />

## :cloud: yet....
- 타입스크립트에서 사용되는 타입들을 정확하게 이해하고, 어느 때 어떻게 사용하면 좋을지에 대한 학습이 부족했습니다.
- react query를 적용하고 싶었으나.. 이 부분도 꼭 해결해보겠습니다.
<br />
