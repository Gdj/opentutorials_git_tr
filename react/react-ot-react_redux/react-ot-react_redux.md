# react_redux

## 프로젝트 생성
- 프로젝트 홀더 생성후 현재 홀더에 프로젝트 생성
```
npx create-react-app . 
```

## redux 설치 
- 플러그인 설치
`npm i -D redux` 
- redux dev tools 설치 및 설정
  + redux dev tools 설치 : https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
  + redux 설정 : https://github.com/zalmoxisus/redux-devtools-extension#installation
    createStore 2번재 인자 `window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()`추가
  ```
  import {createStore} from 'redux';
  export default createStore(function(state, action){
    return state;
  }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
  ```
## redux 활용 .
- state 값이 바뀌면  `constructor(props){ super(props); }`호출되며, `constructor`실행후, `render(){}` 실행됨.