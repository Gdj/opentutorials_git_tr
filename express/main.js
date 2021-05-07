const express = require('express');
const app = express();

const fs = require('fs');
//const qs = require('querystring');
const bodyParser = require('body-parser');
const compression = require('compression')
const template = require('./lib/template.js');
const topicRouter = require('./routes/topic');
const port = 3000;

/* public 홀더 에서 스테틱 파일 찾음.(이미지 /images/winter_cave.jpg ) */
app.use(express.static('public'));

/* 미들웨어 :  from 데이터, json 데이처 처리 */
app.use(bodyParser.urlencoded({ extended: false }));

/* 파일 앞축해서 서버 전송 */
app.use(compression());

/* 미들웨어 get() 방식일때만 파일리스트를 가져옴 */
//app.use(function(request, response, next){
app.get("*", function(request, response, next){
  fs.readdir('./data', function(error, filelist){
    request.list = filelist;
    next();
  });
});


/* 
 // request:받아온 , response:보낸
app.get('/', (req, res) => {
  res.send('Hello World!')
}) 
*/
app.get('/', function(request, response){
  var title = 'Welcome express';
  var description = 'Hello, Node.js';
  var list = template.list(request.list);
  var html = template.HTML(title, list,
    `<h2>${title}</h2>${description}`,
    `<img src="/images/winter_cave.jpg" alt="" style="width: 400px; display: block;"></img>`,
    `<a href="/topic/create">create</a>`
  );
  response.send(html);
  //return response.send('Hello Worlasdfd!???')
}); 


/* ======= topic 페이지 ============= */
app.use("/topic", topicRouter );



/* 404 페이지 */
app.use(function (request, response, next) {
  response.status(404).send("Sorry can't find that!")
});

/* 에러가있을대 인자가4개인 아래를 호출하게 됨.  */
app.use(function (err, request, response, next) {
  console.error(err.stack)
  response.status(500).send('Something broke!')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})