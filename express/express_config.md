# express
  - 라우팅(routing), 미들웨어(middleware)
  - https://opentutorials.org/course/3370
## PM2 
  - nodejs 실행및 자동 재실행, (node index.js)확장기능 제공
  - PM2는 애플리케이션을 라인으로 관리하고 유지하는 데 도움이되는 데몬 프로세스 관리자입니다.  
  - [API](https://pm2.keymetrics.io/docs/usage/quick-start/)
  ```
    npm i -g pm2
  ```
  ### PM2실행 방업
  - 버젼확인 : ` pm2 version`
  - 실행 : `pm2 start index.js --watch`
  - 실행확인 : `pm2 log`
  - 실행중인 인스털스 수 : `pm2 list`
  - 멈추기(all, 0, 1) : `pm2 stop all`
  - 삭제(all, 0, 1)   : `pm2 delete all`
  


  ### 실행 안될때
    1. windows PowerShell 프로그램을 관리자 권한으로 실행합니다.
    2. `Get-ExecutionPolicy` 명령어를 작성하면 본인의 권한? 상태가 보여집니다.
    3. 권한이 RemoteSigned 가 아니라면 `Set-ExecutionPolicy RemoteSigned` 를 입력
    4. `Get-ExecutionPolicy` 명령어로 다시 한번 확인 하면 RemoteSigned로 변경 확인.

## express
  - Node.js 미니멀 프레임워크 
  - [API](http://expressjs.com/)
  ```
    npm i -s express 
  ```
  - sources 
  ```js
    app.get('/page/:pageId', function(request, response){
      response.send(request.params)
    });
  ```

### body-parser
  - reqest.body 속성에서 사용할 수있는 처리기 전에 미들웨어에서 들어오는 요청 본문을 구문 분석합니다.
  - [API](http://expressjs.com/en/resources/middleware/body-parser.html)
  ```
    npm install body-parser
  ```
### compression
  - 파일앞축해서 전송
  - [API](http://expressjs.com/en/resources/middleware/compression.html)
  ```
    npm install compression
  ```
