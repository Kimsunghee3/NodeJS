const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.get("/comments", (req,res,next) => {
    res.send("전체 게시물 가져오기")
})

app.post("/comments", (req,res,next) => {
    try{
        const userid = req.body.userid
        // throw net Error: error메시지를 담은 객체를 생성해준다.
        // throw *return
        if(!userid) throw new Error("userid가 없습니다.")
    }catch(e){
        res.send(req.body)
    }
})

app.get("/comments/:id", (req,res,next) => {
    res.send("게시물 하나 가져오기")
})

// /comments/asdf값을 받았을 때 :id변수에 담아주겠다.(라우터 파라미터)
app.put("/comments/:id", (req,res,next) => {
    res.send("게시물 수정하기")
})

app.delete("/comments/:id", (req,res,next) => {
    res.send("게시물 삭제하기")
})

app.use((error,req,res,next) => {
    res.send(`ERROR ${error}`)
})

app.listen(3000, () => {
    console.log(`server start`)
})


