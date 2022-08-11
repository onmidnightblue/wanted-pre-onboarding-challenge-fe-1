# Todo CRUD w React Query
7.25 - 8.06 prev assignment <br />
8.08 - 8.20 refactoring
<br />
<br />

**content**

- [Todo CRUD w React Query](#todo-crud-w-react-query)
  - [:cloud: to use](#cloud-to-use)
  - [:cloud: folder tree](#cloud-folder-tree)
  - [:cloud: assignment](#cloud-assignment)
    - [1 login / signup](#1-login--signup)
    - [2 todo list](#2-todo-list)
    - [참고 사항](#참고-사항)
  - [:cloud: api](#cloud-api)
    - [Todos](#todos)
    - [Auth](#auth)
  - [:cloud: refactoring](#cloud-refactoring)
    - [과제를 수행하기 전에](#과제를-수행하기-전에)
    - [과제 수행중](#과제-수행중)
    - [과제를 수행한 후](#과제를-수행한-후)
<br />

## :cloud: to use

- react router v6
- axios
- styled-components
- functional components
- react-icons
- redux
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

- /auth 경로에 로그인 / 회원가입 기능 
  - 별도의 경로로 분리 가능
  - 이메일 input, 비밀번호 input, 제출 button
- 이메일과 비밀번호의 유효성
    - 이메일 조건 : 최소 @, . 포함
    - 비밀번호 조건 : 8자 이상 입력
    - 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동
  - 받은 토큰은 로컬 스토리지에 저장
  - 이후 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트
  - 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트
    

### 2 todo list

- Todo List CRUD 기능 구현
  - 목록 / 상세 영역으로 나누어 구현
  - Todo 추가 버튼 : 할 일 추가
  - Todo 수정 버튼 : 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있음
  - Todo 삭제 버튼 : 해당 Todo를 삭제
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 구현
  - 새로고침을 했을 때 현재 상태가 유지
  - 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있음
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현
  - 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 함

### 참고 사항
- DB : db/db.json
- 실제 유저별로 Todo 목록을 관계 지어 관리하지는 않음 (모든 유저가 하나의 Todo를 가짐)
- 로그아웃은 localStorage에 저장된 token을 삭제하는 방식으로 간단히 구현
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

### 과제를 수행하기 전에
- [x]  dependencies, devDependencies 차이 알기
- [ ]  typescript 학습
<br />

### 과제 수행중
**[작은 것부터]**

- 당장 수정해야 할 부분
    - [x]  페이지 브라우징 기록을 이용해 뒤로가기, 앞으로 가기 구현
        - 현재 state로 되어있음
    - [ ]  http 통신을 custom hook으로 작성
<br />

- UX/UI
    - [ ]  시멘틱 태그 사용하기
    - [ ]  loading, error를 사용자에게 보여주기
    - [ ]  로그인 실패 사유를 사용자에게 알리기
    - [ ]  회원가입 실패 사유를 사용자에게 알리기
    - [ ]  비동기 통신을 진행할 때 진행 상태를 사용자에게 알리기 (loading, error)
<br />

- javascript > typescript
    - [ ]  기존 프로젝트를 타입스크립트로 변환
    - [ ]  react 프로젝트에 타입을 적용하면서 생기는 에러들을 노션에 정리
<br />

**[더 나아가서]**

- build & deploy
    - [ ]  dependencies, devDependencie를 공부했던 내용에 맞게 작성해보기
    - [ ]  meta tag 작성
    - [ ]  vercel로 배포
<br />

- 상태 관리
    - [ ]  redux를 recoil로 바꾸기
<br />

- typescript
    - [ ]  strict 옵션 적용
    - [ ]  타입 가드 및 추론을 사용해 any, 타입 단언을 모두 없애기
    - [ ]  반복되는 타입은 제네릭, 타입상속 or 합성 등으로 추상화
    - [ ]  보다 좁은 타입으로 정의하기 (string > as const or union)
<br />

### 과제를 수행한 후
- [ ]  google lighthouse 활용해서 성능 테스트 이미지 남기기
- [ ]  완성된 사이트의 gif 이미지와 링크 공유하기
- [ ]  javascript에서 typescript로 변경하면서 생긴 에러들을 readme에 작성하기
<br />
