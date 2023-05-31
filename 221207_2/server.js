const net = require('net')
// 환경변수에 SERVER_PORT에 대한 내용이 있으면 가져다 쓰고, 없는 경우 3000번을 사용한다.
const PORT = process.env.SERVER_PORT || 3000
// 환경변수에 SERVER_HOST에 대한 내용이 있으면 가져다 쓰고, 없는 경우 127.0.0.1을 사용한다.
const HOST = process.env.SERVER_HOST || "127.0.0.1"

const body = Buffer.from(`<h1>Hello world!!</h1>`)
// 편지의 겉면이라고 생각
const response = `HTTP/1.1 200 ok
Connection: keep-alive
keep-Alive: timeout=5
Content-type: text/html
Content-length: ${body.length} 

// 편지의 내용물
// 실제로 던져줄 데이터들
${body.toString()}
`

// net.createServer(): 소켓을 열겠다, 포트를 열어주겠다는 의미이다.
// 첫번째 콜백함수: server가 client에 connection을 맺기 위한 용도
// 두번째 콜백함수: client가 server쪽에 데이터들을 보냈을 때 실행된다. 
const server = net.createServer((client) => {
    // client에서 데이터를 받을 때 기본셋팅을 utf8로 설정하겠다.
    client.setEncoding("utf8")
    // Buffer 2진수데이터
    // 16진수 데이터를 글자셋
    // 문자집합 utf8(유니코드)
    client.on("data", (data) => {
        // client로부터 받은 데이터를 출력
        console.log(data) // DataType Buffer
        // toString: 데이터를 인코딩하기 위함, 인자로는 어떤 형식으로 인코딩할지에 대해서 넣어줌
        console.log(data.toString("hex")) // eb8db0ec9db4ed84b020eca084ec86a1
        console.log(data.toString("utf8")) // 데이터 전송

        client.write(response)
    })


    // client로부터 연결이 종료되었다.
    client.on("close", () => {
        // 어떤 client를 종료할지에 대한 정보는 net.createServer메서드의 인자 값에 담겨져있다.
        console.log("client disconnected")
    })
})
// 첫번째 인자값: port, 두번째 인자값: host, 세번째 인자 값: listen될 경우 실행할 함수(callback)
// port:3000
// host:127.0.0.1(내컴퓨터의 host)
// server를 listen상태로 만들어줌
server.listen(PORT, HOST, () => {
    console.log(`server listening port: ${PORT}`)

    // server가 해당 port,host로 listening이 잘 된 시점 이후에 실행된다.
    // 3-way handshake가 일어났을 때 실행된다.
    server.on("connection", () => {
        console.log("client가 접속함")
    })
})

