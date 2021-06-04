const path = require('path')

// prints path separator
// console.log(path.sep)

// to join paths 
const filePath = path.join('/content', 'subcontent', 'text.txt')
// console.log(filePath)

// to get base name
// console.log(path.basename(filePath))

// to get absolute path 
const absolute = path.resolve(__dirname, 'content', 'subcontent', 'text.txt')
console.log(absolute)
