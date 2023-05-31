const net = require("net")
const config = {host:"127.0.0.1", port:3000}
const socket = net.connect(config)

socket.on("connect", () => {
    console.log(`connected to server`)
    socket.write("데이터 전송")
})

socket.on("data", (chunk) => {
    console.log(`Received: ${chunk}`)
    socket.end()
})