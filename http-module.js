const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end("welcome to Home page")
    }
    if (req.url === '/About'){
        res.end("this is about us")
    }
    
    res.end(`
    <h1>Oops!</h1>
    <p>We can't access this page</p>
    <a href="/">back to home</a>`)
})

server.listen(5000)