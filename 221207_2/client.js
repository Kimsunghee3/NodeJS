const net = require('net')

// client에서 connect메서드가 실행되면서 내가 연결할 대상의 포트번호, host
// 내용이 길다면 config로 따로 만들어주기
const config = {port:3000, host:'127.0.0.1'}
// client에서 syn를 생성해서 server측으로 보냄
const socket = net.connect(config)

// server로부터 받을 데이터, sync + Ack를 server로 부터 받아서 연결되는 시점에서 callback함수가 실행된다.
socket.on("connect", () => {
    console.log("connected to server")

    // server에서 내용이 buffer로 받아짐
    // <Buffer eb 8d b0 ec 9d b4 ed 84 b0 20 ec a0 84 ec 86 a1>
    // connection이 맺어지면서 socket.write가 전달된다.
    socket.write("데이터 전송")
})

socket.on("data", (chunk) => {
    console.log(`Received: ${chunk}`)
    socket.end()
})
