import {createStore} from 'redux';
export default createStore(function(state, action){
  /* 초기 실행 초기화 */
  if(state === undefined){
    return {number:0}
  }

  /* type 값이 INCREMENT */
  if(action.type === "INCREMENT"){
    //return { ...state, number:state.number + action.size}; /// 스테이트 값 복제해서 값추가
    return {number:state.number + action.size};
  }
  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
