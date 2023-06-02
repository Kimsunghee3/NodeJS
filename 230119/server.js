const express = require("express")
const app = express()
const nunjucks = require("nunjucks")
const cookieParser = require("cookie-parser")
const axios = require("axios")



app.use(express.json())


app.listen(3005, () => {
    console.log(`server start`)
})