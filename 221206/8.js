const path = require("path")

// 내가 실행한 위치를 출력 + 9.js
console.log(__dirname)

if(process.platform === "win32"){
    console.log(__dirname + "\\9.js")
}else{
    console.log(__dirname + "/9.js")
}


// path를 사용하기 위해 불러와주었다.
const path = require("path")

const newPath = path.join(__dirname, "9.js")
console.log(newPath)

