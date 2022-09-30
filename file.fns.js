const fs = require('fs')

function saveonFile(path, json) {
    fs.writeFileSync(path, JSON.stringify(json))
    console.log(JSON.stringify(json))
}

// let testPath = './test.json'

// saveonFile(testPath, { oe: 'asdasdsads' })


function readFile(path) {
    const text = fs.readFileSync(path).toString('utf8')
    return JSON.parse(text)
}

// const res = readFile(testPath)

// console.table(res)

module.exports = {
    readFile,
    saveonFile,
}