// 사용할 모듈(=자바스크립트 파일) 기록하는 곳
const express = require('express'); // express 모듈을 express 객체를 사용한다.
const app = express(); // app이라는 express 객체의 인스턴스를 생성한다.
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.set('view engine', 'pug'); //view 템플릿 엔진을 pug사용한다고 설정
app.set('port',3000);
//app.get('port')로 사용 가능

// 사용할 미들웨어 모듈 : 미들웨어는 순서대로 호출됨(=순서 중요)
app.use(express.static('public')); //정적인 파일 : img, css, js 처리
app.use(bodyParser.json()); // json 데이터를 처리
app.use(bodyParser.urlencoded({extended:true})); //인코딩된 문자열 처리
app.use(morgan("dev")); // 개발 끝나고 배포할때는 combined 사용(git bash에서 curl localhost:3000 -v 해도 확인 가능)

// routing 처리
app.get('/', function (req, res) { // get 요청이 들어오면 응답
    //res.send('Hello World'); // 서버에서 text로 응답
    res.sendFile(__dirname+"/public/main.html"); // HTML 파일로 응답
    res.render('index', {title:'hanul tour', message:'렌더링 성공!'});
});

app.get('/reserve', function(req, res){
    res.render('reserve', {title:'hanul tour'})
})
app.get('/tour', function(req, res){
    res.render('tour', {title:'hanul tour'})
})
app.get('/cs', function(req, res){
    res.render('cs', {title:'hanul tour'})
})

app.post('/send_reserve', function (req, res) { // get 요청이 들어오면 응답
    // res.send('post 요청 페이지'); // 서버에서 text로 응답
    // res.send(req.body.guest_name+"님, 환영합니다"); //bodyParser가 이해하고 출력
    if(req.body.guest_name == "홍길동"){
        res.send(req.body.guest_name + "님, 환영합니다")
    }else{
        res.send("회원가입 페이지로 이동합니다.")
    }
    // res.sendFile(__dirname+"/public/reserve.html"); // HTML 파일로 응답
});

const PORT = app.get('port');
app.listen(PORT, function(){
    console.log(`서버가 ${PORT}번 포트에서 실행중입니다`)
})