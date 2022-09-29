const express = require('express')
const app = express()

// 정적인 파일 :img, css, js 처리
app.use(express.static('public'));

// routing 처리
app.get('/', function (req, res) {  // get 요청이 들어오면 응답
    // res.send('Hello World');  // 서버에서 text로 응답
    //__dirname : 절대경로
    res.sendFile(__dirname+"/public/main.html");
})
app.get('/book', function(req, res){
    res.sendFile(__dirname + "/public/book.html");
})
app.listen(3000, function(){
    console.log('3000 포트에서 서버 실행중')
})

// app.get('/main', function(req, res){
//     res.send('main page')
// })

// app.get('/page/:name', function(req, res){
//     res.send('404 not found')
// })

// app.get('/search', function (req, res) {  
//     res.send('search page 입니다');  
// })
// const userInfo = [
//     {id : 1, name : "제갈", city : "광주"},
//     {id : 2, name : "강", city : "강진"},
//     {id : 3, name : "묵", city : "화순"}
// ]
// let tags = "<table>";
// for(let i = 0; i < userInfo.length; i++){
//     tags += "<tr>";
//     tags += "<td>"+userInfo[i].id+"</td><td>"+userInfo[i].name+"</td><td>"+userInfo[i].city+"</td>"
//     tags += "</tr>";
// }
// tags += "</table>";

// app.get("/user", function(req, res){
//     console.log("==========send user list==========")
//     res.send(tags);
// })