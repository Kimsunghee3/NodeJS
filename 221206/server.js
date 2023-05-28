// express 라이브러리를 가져와 express변수에 선언하겠다.
// express는 함수이다.
const express = require("express")

// express를 실행시켜서 나온 결과물을 app변수에 담겠다.
// app은 객체이고, return값도 객체이다.
const app = express()

// form엘리먼트의 get, post라고 생각하면된다.
// req: 요청, res:응답
app.get("/", (req,res) => {
    console.log(req.query)
    res.send('hello server')
})

// 3000번 포트를 사용하여 시작하고, 프로세스를 올리면 콜백함수가 실행되면서
// 콘솔이 찍히게끔 하겠다.
app.listen(3000, () => {
    console.log("express server")
})
