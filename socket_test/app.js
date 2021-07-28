const express = require("express");
const Http = requrire("http");
const sockeIo = require("socket.io");


const app = express();
const http = Http.createServer(app);
const io = sockeIo(http,{
    cors:{
        origin:"*",
        methods:["GET,POST"]
    },
});

io.on("connection",(socket)=>{
    console.log("연결됨");

    socket.send("너는 돼지야!");

    socket.emit("customEventName","새로운 이벤트인가");
});

