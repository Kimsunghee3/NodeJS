// module.exports = {}
console.log(module.exports = exports)

module.exports = {name:"chop"}
module.exports.name = 'chop'
exports.name = "chop"

exports.name = () => {
    return "hello world"
}