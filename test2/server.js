const net = require("net")

const HOST = "127.0.0.1"
const PORT = 3000

const server = net.createServer((client) => {
    
})

server.listen(PORT, HOST, () => {
    console.log(`listening port:${PORT}`)
})