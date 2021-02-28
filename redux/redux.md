# Redux
  ## Redux 시작
  - https://opentutorials.org/module/4078
  - [redux] : https://ko.redux.js.org/introduction/getting-started
  ```
  <script src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.5/redux.js"></script>
  ```
  - [reduxdevtools] : https://github.com/zalmoxisus/redux-devtools-extension

  ## Redux 사용
  > ` var store = Redux.createStore(reducer);`
  - reducer(state, action) : 상태 관리( 현상태, 실행상태 ); 
    + action.type (필수)
  - store.getState()    : 상태 가져오기
  - store.subscribe(Fn) : 상태적용될 함수등록
  - store.dispatch(Obj) : 상태 알림 
  