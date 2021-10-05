// console.log(__dirname, __filename)

// const _ = require('lodash')
// console.log(_.compact([true, 10, 0, NaN, 0, "", 255]))

const http = require('http')

const server = http.createServer((req, res) => {
    // res.end("<h1>hello Nodejs</h1>")
    // console.log(req.url)

    switch (req.url) {
        case "/":
            res.end("<h1>Hello</h1>")
            break;
    
        case "/frensh":
            res.end("<h1>Bonjour</h1>")
            break;
    
        case "/espagnol":
            res.end("<h1>Ola</h1>")
            break;
    
        default:
            res.end("<h1>Oups error </h1>")
    }

})

server.listen(5000, () => {
    console.log("The server is running on port 5000")
})