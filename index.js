
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log("hello from server");

    let url = req.url;

    let data = `${Date.now()} :  ${url} \n`;

    fs.appendFile('log.txt', data, () => { })

    switch (url) {
        case "/":
            res.end("Home page")
            break;

        case "/about":
            res.end("Hello im coder")
            break


        default:
            res.end("404 Page Not Found")
            break;
    }

});


const Port = 8000

server.listen(Port, () => console.log("server started!!"))
