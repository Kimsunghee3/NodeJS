const a = {}
const b = a
console.log(a === b) //true

const exports = module.exports
console.log(exports === module.exports)

module.exports = {
    a:1,
    b:2,
}

exports.a = 1
exports.b = 2