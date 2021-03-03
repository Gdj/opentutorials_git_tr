# react_redux

## 프로젝트 생성
- 프로젝트 홀더 생성후 현재 홀더에 프로젝트 생성
```
npx create-react-app . 
```


## react-router-dom 설치
- react-router-dom 설치
  `npm i -D react-router-dom`

### react-router-dom 사용
- BrowserRouter : 최상의 컴포넌트를 감싸주는 레퍼 컴포넌트
- Route : 페이지 컴포넌트를 Route 로감싸줌
  1. path : 속성지정
  2. exact : 정확한 'path'만 적용. 
    + 없을때 '/home' 은 '/'|'/home' 두가지 실행됨.
- Switch : 페이지를 Switch로 감싸면 감싸진 페이지가 정확한 `path`때만 적용.
  스위치 안의 라우터는 일치하는 1개만 출력됨.
- Link : 리로드 되지않고 페이전환
  `a`=>`Line` 테그로, `href`=>`to`속성으로 변경

- HashRouter : `BrowerRouter`대신사용하면 페이지 무시되고 #인자값전달.
- NavLink : 'Link'와 유하하지만 페이지 값과, `class="active"` 값을 준다.
- useParams : `path:_id`를 줌으로 파라미터를 전달할 수 있다.