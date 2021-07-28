const express = require("express");
const http = require('http')
const sockeIo = require("socket.io");


const app = express();
const Http = http.createServer(app);

const io = sockeIo(Http, {
    cors:{
        origin:"*",
        methods:["GET,POST"]
    },
});
app.get("/test",(req,res)=>{
    res.send("익스프레스 잘 커져 있습니다");
});


Http.listen(3000,()=>{
    console.log("서버가 켜졋습니다");
});
io.on("connection",(socket)=>{
    console.log("연결됨");

    socket.send("너는 돼지야!");

    socket.emit("customEventName","새로운 이벤트인가");
});

