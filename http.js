const http = require("http");

const app = http.createServer((req, res)=>{
    res.writeHeader(200,{"Content-Type":"text/plain"})
    res.write("welcome\n");
    res.end("!!response end!!");
})

app.listen(3000, ()=>{
    console.log("서버 실행중")
})