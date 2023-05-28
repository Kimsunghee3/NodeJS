const net = require("net")
const PORT = process.env.SERVER_PORT || 3000
const HOST = process.env.SERVER_PORT || "127.0.0.1"

const server = net.createServer((client) => {
    client.on("data", (data) => {
        console.log(data)
    })
})

/*
port:3000
host: 127.0.0.1 내컴퓨터의 host
listen될 경우 실행할 함수(callback)
*/

server.listen(PORT, HOST, () => {
    console.log(`server listening port: ${PORT}`)

    server.on("connection", () => {
        console.log("client가 접속함!")
    })
}) 

