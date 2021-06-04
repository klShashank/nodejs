const {readFile, writeFile, writeFileSync} = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    console.log(first)
    readFile('./content/second.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    const second = result
    console.log(second)
    writeFile(
        './content/result-async.txt',
        `result: ${first}, ${second}`,
        (err, result) => {
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        }
    )
    })

})
    


