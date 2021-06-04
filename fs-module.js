// we can import only required modules using below syntax

const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first +"\r\n"+ second)

writeFileSync('./content/result.txt', `Jai Sri Ram`, {flag: 'a'})