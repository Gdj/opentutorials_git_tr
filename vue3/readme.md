# vue grammar
  - vscode plugin : vetur
  
## Vue 스크립트
  - 기본폼
  ```
  export default{
    data () {
      return { }
    },
  }
  ```
  - 생성
  ```
  const vm = Vue.createApp({  }).mount('#demo')
  ```


  - data    : 사용할 변수  
  ```
  data() {
    return {
      변수이름: 값
    }
  },
  ```
  - methods : 사용할 함수 
    + 줄임 `함수이름 : function(){}` => `함수이름(){}`
    + `this` 로 `data, methods` 접근아능.
  ```
  methods: {
    함수이름() {}
  },
  ```
  - computed : 캐싱으로 선언될때 값이 생성되어 여러번 호출해도 번만 계산됨, 
    함수를 변수처럼 사용하여 리턴값을 넘김 파라미터 값없음.
  ```
  computed: {
    함수형변수() {
      return 값, 식
    }
  }
  ```
  - watch : computed 사용으로 변하지 않을때 초기 이후에 실행될때 computed 대신 사용.
  ```
  watch: {
    함수이름(val) {
      this.fullName = val + ' ' + this.lastName
    },
  }
  ```

## Lifecycle
  - beforeCreate
  - created
  - Compile template
  - beforeMount  
  - mounted
  - beforeUpdate
  - updated
  - beforeUnmount
  - unmounted
    
## Vue 템플릿 지시어
  - v-bind : 값을 바인드
    `v-bind:속성값` => `:속성값`
  - v-model : 양방향 바인딩
    `v-model:속성값`
  - v-if | v-show: if 거짓일때는 렌더링 안하고 show 숨김으로 처리  
    'v-if="변수"' 변수가 조검이 만족할때만 보이기 
  -  : 
  - v-else , v-else-if
  - v-for : 반복되는 아이템에 고유 `key` 값을 설정해야 한다   
    "$item in $arr" , "($item, $index) in $arr"
  
  - `v-on:이벤트` => `@이벤트`
    + 마우스 이벤트
      * click
      * submit
      * scroll
    + 버튼 이벤트 수식어
      * .stop = stopPropagation()
      * .prevent = preventDefault()
      * .capture
      * .self
      * .once : 한번실행
      * .passive
    + 키 이벤트
      * keyup
    + 키 이벤트 수식어
      * .enter, .tab, .delete, .esc, .space, .up, .down, .left, .right
    + 시스템 수식어 키 목록
      * .ctrl .alt .shift (.meta , 맥 => command )
## 클래스 & 스타일 바인딩
  - 클래스 : `isB`변수가 true 일대만 `클래스이름`이반영  
  `:class="{ 클래스이름 : isB }"`
  - 스타일 : 
  

## props 
  - 배열타입
  ```
  props: ['title', 'likes', 'isPublished', 'commentIds', 'author']
  ```  
  - 오브젝트 타입
  ```
  props: {
    title: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object,
    callback: Function,
    contactsPromise: Promise // or any other constructor
  }
  ```

## 커스텀 이벤트
  - 이벤트 발생
    `this.$emit('이벤트이름', 데이터);`
  - 이벤트 받기
    `v-on:이벤트이름="데이터"`


## 플러그인
  - 공식 플러그인 : @vue/cli-plugin-*
  - npm 플러그인 : vue-cli-plugin-*


## vuex 데이터관리
  - vuex 설치
  `npm i -D vuex`
### vuex Options 사용
  - state: 데이터    
  - mutations : 데이터 변경 `this.$store.commit("구분", 값)`
    함수(state) 첫번째 인자는 "state"고정
  - actions : 변경될 데이터 `this.$store.dispatch("구분", 값)`
  - getters : 데이터 읽기
  
  
## axios 데이터 요청
  - axios 설치
  `npm i -D axios`