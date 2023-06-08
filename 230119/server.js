const express = require('express')
const app = express()
const nunjucks = require("nunjucks")
const cookieParser= require('cookie-parser')
const axios = require("axios")


// default경로 설정을 위하여 request 변수명에 담아줌
const request = axios.create({
    baseURL: "http://127.0.0.1:3000",
    withCredentials: true,
})

app.set("view engine", "html")
nunjucks.configure("views", {
    express: app,
})

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))

app.get('/', (req,res) => {
    res.render("index.html")
})

app.get("/signup", (req,res) => {
    res.render("user/signup.html")
})

app.post('/signup', async(req,res) => {
    console.log(req.body)
    // request에 path를 설정해주었으므로
    // http://127.0.0.1:3000/users로 post요청을 하게된다.
    const response = await request.post("/users", {
        ...req.body,
    })
    console.log(response)
})

app.listen(3005, () => {
    console.log(`front server start`)
})