const app = require('express')()

app.post('/users', (req, res, next) => {
    console.log(req)
    res.json({message: "응답입니다"})
})

app.listen(3000, () => {
    console.log("server")
})