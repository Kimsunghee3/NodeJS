const net = require("net")

const PORT = process.env.SERVER_PORT || 3000
const HOST = process.env.SERVER_HOST || "127.0.0.1"

const server = net.createServer((client) => {
    client.setEncoding("utf8")
    client.on("data", (data) => {
        console.log(data)
    })

    client.on('close', () => {
        console.log("client disconnected")
    })
})

server.listen(PORT, HOST, () => {
    console.log(`server listening port:${PORT}`)

    server.on("connection", () => {
        console.log("client connected")
    })
})

